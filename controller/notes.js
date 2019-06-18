'use strict'

const response = require('../response/response');
const connection = require('../connect/connect');
const moment = require('moment');

exports.welcome = (req, res) => {
    response.ok('hello notes', res)
};

exports.getNotesAll = (req, res) => {

    connection.query(
        `SELECT * FROM notes JOIN category ON notes.category_id=category.id`,
        function (error, rows, field) {
            if (error) {
                throw error;
            } else {
                res.json({
                    data: rows
                });
            }
        }
    )
}
exports.getNotes = (req, res, next) => { 
    let idNote = req.params.id;
    if (idNote === 0 || idNote === '') {
       next('route');
    }else{
        connection.query(
            `SELECT * FROM notes JOIN category ON category.id=notes.category_id WHERE notes.id=?`,
            [idNote],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.length === 0 || rows.length === '') {
                        res.send({
                            error: true,
                            message: 'not found'
                        });
                    }else{
                        res.json(rows);
                    }
                }
            }
        )
    }
}
exports.insert = (req, res) => {
    let tittle = req.body.tittle;
    let note = req.body.note;
    let time = moment().format('YYYY.MM.DD');
    let id = req.body.category_id;

    connection.query(
        `INSERT INTO notes SET tittle=?,note=?,time=?,category_id=?`,
        [tittle, note, time, id],
        function (error, rows, field) {
            if (error) {
                throw error;
            } else {
                return res.send({
                    error: false,
                    data: rows,
                    message: 'sucesfully'
                })
            }
        }
    );
}

exports.update = (req, res) => {
    let idNotes = req.body.id;
    let tittle = req.body.tittle;
    let notes = req.body.note;
    let time = moment().format('YYYY.MM.DD');
    let category = req.body.category_id;

    connection.query(
        `UPDATE notes SET tittle=?,note=?,time=?,category_id=? WHERE id=?`,
        [tittle, notes, time, category, idNotes],
        function (error, rows, field) {
            if (error) {
                throw error;
            } else {
                return res.send({
                    error: false,
                    data: rows,
                    message: 'sucesfully'
                })
            }
        }
    );
}

exports.delete = (req, res, next) => {
    let idNotes = req.params.id;
    if (idNotes === 0 || idNotes === '') {
        next('route')
    } else {
        connection.query(
            `DELETE FROM notes WHERE id=?`,
            [idNotes],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.affectedRows === 0 || rows.affectedRows === '') {
                        res.send({
                            error: true,
                            message: 'not found'
                        });
                    } else {
                        return res.send({
                            error: false,
                            data: rows,
                            message: 'sucesfully',
                        })
                    }
                }
            }
        );
    }
}