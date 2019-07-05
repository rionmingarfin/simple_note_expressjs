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

    var sql = `SELECT notes.id AS id_notes,notes.title AS notes_title,notes.note AS notes_note,notes.time AS notes_time, category.name AS name_category,category.id AS id_category FROM notes LEFT JOIN category ON notes.category_id=category.id`;
    var sqlCount = `SELECT COUNT(*) AS totalCount FROM notes LEFT JOIN category ON notes.category_id=category.id`
    // searching by title
    if (!isEmpty(req.query.search)) {
        let search = req.query.search;
        sql += ` WHERE title LIKE '%${search}%'`;
        sqlCount += ` WHERE title LIKE '%${search}%'`;
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

    // count pages
    var totalCount;
    var totalPage;
    connection.query(sqlCount, function (error, rows, field) {
        if (error) {
            response.error(404, 'data not found', res)
        } else{
             totalCount = rows[0].totalCount;
             totalPage =Math.ceil(totalCount/limit);
            }
        }
    )
    // query

    connection.query(sql, function (error, rows, field) {
        if (error) {
            response.error(404, 'data not found', res)
        } else {
            if (rows.length === 0 || rows.length === '') {
                response.error(404, 'data not found', res);
            } else {
                res.json({
                    totalData :totalCount,
                    totalPage :totalPage,
                    limit :limit,
                    page : start,
                    status: 200,
                    data: rows,

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
            `SELECT notes.id AS id_notes,notes.title AS notes_title,notes.note AS notes_note,notes.time AS notes_time, category.name AS name_category, notes.category_id AS id_category,category.id AS id_category FROM notes LEFT JOIN category ON notes.category_id=category.id WHERE notes.id=?`,
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
    // console.log(req.body.title)
    let title = req.body.title;
    let note = req.body.note;
    let id = req.body.category_id;
    // console.log("this title"+title);
    // console.log(note);
    // console.log(id);
    
    // if (!(isEmpty(req.body.title)) || !(isEmpty(req.body.note)) || !(isEmpty(req.body.category_id))) {
    //     // console.log("hhayaaa");
        
    //     res.send({
    //         error: true,
    //         message: 'data cannot body be empty'
    //     })
    // } else {
        connection.query(
            `INSERT INTO notes SET title=?,note=?,time=now(),category_id=?`,
            [title, note, id],
            function (error, rows, field) {
                if (error) {
                    // console.log(error)
                    throw error;
                } else { 
                    let resultId = rows.insertId
                    let data = {
                        status :201,
                        message : "data sucesfully",
                        result : {
                            id :resultId,
                            title : title,
                            note : note,
                            category  :id,
                        }
                    }
                    return res.status(202).json(data).end();
            }
        }
        );
    // }
}

// update
exports.update = (req, res) => {
    let idNotes = req.params.id;
    let title = req.body.title;
    let notes = req.body.note;
    // let time = moment().format('YYYY.MM.DD');
    let category = req.body.category_id;

        connection.query(
            `UPDATE notes SET title=?,note=?,time=now(),category_id=? WHERE id=?`,
            [title, notes, category, idNotes],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    let data = {
                        status :201,
                        message : "data sucesfully",
                        result : {
                            id_notes :idNotes,
                            notes_title : title,
                            notes_note : notes,
                            category_id  :category
                        }
                    }
                    return res.status(202).json(data).end();
                }
            }
        );
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
                       let idresult = idNotes
                       let data = {
                           status : 202,
                           message : 'succesfull',
                           result : {
                               idNotes : idresult
                           }
                       }
                       return res.status(202).json(data).end()
                    }
                }
            }
        );
    }
}

exports.getByCategory = (req, res, next) => {
    let idNote = req.params.id;
    if (idNote === 0 || idNote === '') {
        response.error(200, 'error', res)
    } else {
        connection.query(
            `SELECT notes.id AS id_notes,notes.title AS notes_title,notes.note AS notes_note,notes.time AS notes_time, category.name AS name_category, notes.category_id AS id_category,category.id AS id_category FROM notes JOIN category ON notes.category_id=category.id WHERE notes.category_id=?`,
            [idNote],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.length === 0 || rows.length === '') {
                        response.error(404, 'data not found', res);
                    } else {
                        response.success(202, 'data_category', res, rows)
                    }
                }
            }
        )
    }
}