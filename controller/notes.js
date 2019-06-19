'use strict'

const response = require('../response/response');
const connection = require('../database/connect');
const moment = require('moment');
const isEmpty = require('lodash.isempty');
// method welcome
exports.welcome = (req, res) => {
    response.ok('hello word', res)
};
// getAll
exports.getNotesAll = (req, res) => {

    var sql = `SELECT notes.id AS id_notes,notes.tittle AS notes_tittle,notes.note AS notes_note,notes.time AS notes_time, category.name AS name_category FROM notes JOIN category ON notes.category_id=category.id`;
    // searching by tittle
    if (!isEmpty(req.query.search)) {
        let search = req.query.search;
        sql += ` WHERE tittle LIKE '%${search}%'`;
    }
    // sort data by time
    if (!isEmpty(req.query.sort)) {
        let sort = req.query.sort;
        sql += ` ORDER BY time ${sort}`;
    }
    // pagination
    // start =first page,
    var start, limit;
    (isEmpty(req.query.page) || req.query.page == '') ? start = 1 : start = parseInt(req.query.page);
    (isEmpty(req.query.limit) || req.query.limit == '') ? limit = 10 : limit = parseInt(req.query.limit);

    var startpage = (start - 1) * limit;
    sql += ` LIMIT ${limit} OFFSET ${startpage}`;

    connection.query(sql, function (error, rows, field) {
        if (error) {
            response.error(404, 'data not found', res)
        } else {
            if (rows.length === 0 || rows.length === '') {
                response.error(404, 'data not found', res);
            } else {
                res.json({
                    data: rows
                });
            }
        }
    }
    )
}
// get by id
exports.getNotes = (req, res, next) => {
    let idNote = req.params.id;
    if (idNote === 0 || idNote === '') {
        response.error(200, 'error', res)
    } else {
        connection.query(
            `SELECT notes.id AS id_notes,notes.tittle AS notes_tittle,notes.note AS notes_note,notes.time AS notes_time, category.name AS name_category FROM notes JOIN category ON notes.category_id=category.id WHERE notes.id=?`,
            [idNote],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.length === 0 || rows.length === '') {
                        response.error(404, 'data not found', res);
                    } else {
                        res.json(rows);
                    }
                }
            }
        )
    }
}

//post 
exports.insert = (req, res) => {
    let tittle = req.body.tittle;
    let note = req.body.note;
    let time = moment().format('YYYY.MM.DD');
    let id = req.body.category_id;

    if (isEmpty(req.body.tittle) || isEmpty(req.body.note) || isEmpty(req.body.category_id)) {
        res.send({
            error: true,
            message: 'data cannot body be empty'
        })
    } else {
        connection.query(
            `INSERT INTO notes SET tittle=?,note=?,time=?,category_id=?`,
            [tittle, note, time, id],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    response.success(200, 'sucesfully', res, rows);
                }
            }
        );
    }
}

// update
exports.update = (req, res) => {
    let idNotes = req.body.id;
    let tittle = req.body.tittle;
    let notes = req.body.note;
    let time = moment().format('YYYY.MM.DD');
    let category = req.body.category_id;

    if (isEmpty(req.body.id) || isEmpty(req.body.tittle) || isEmpty(req.body.note) || isEmpty(req.body.category_id)) {
        response.error(404, 'data cannot body be empty', res);
    } else {
        connection.query(
            `UPDATE notes SET tittle=?,note=?,time=?,category_id=? WHERE id=?`,
            [tittle, notes, time, category, idNotes],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    response.success(202, 'data update succesfully', res, rows);
                }
            }
        );
    }
}

// delete
exports.delete = (req, res) => {
    let idNotes = req.params.id;

    if (idNotes === 0 || idNotes === '') {
        response.error(200, 'error', res);
    } else {
        connection.query(
            `DELETE FROM notes WHERE id=?`,
            [idNotes],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.affectedRows === 0 || rows.affectedRows === '') {
                        response.error(404, 'not found', res);
                    } else {
                        response.success(202, 'delete succesfully', res, rows);
                    }
                }
            }
        );
    }
}
