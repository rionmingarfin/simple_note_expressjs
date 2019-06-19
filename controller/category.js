'use strict'

const response = require('../response/response');
const connection = require('../database/connect');
const isEmpty = require('lodash.isempty');

// method welcome
exports.welcome = (req, res) => {
    response.ok('welcome', res);
}

// get all category
exports.getAllCategory = (req, res) => {
    connection.query(
        `SELECT * FROM category`,
        function (error, rows, field) {
            if (error) {
                throw error;
            } else {
                res.json(rows);
            }
        }
    );
}

// method getcategory
exports.getCategory = (req, res, next) => {
    let idCategory = req.params.id;
    if (idCategory === 0 || idCategory === '') {
        response.error(200, 'error', res);
    } else {
        connection.query(
            `SELECT * FROM category WHERE id=?`,
            [idCategory],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.length === 0 || rows.length === '') {
                        response.error(404, 'not found', res);
                    } else {
                        response.success(202, 'found the data', res, rows);
                    }
                }
            }
        )
    }
}

//  post
exports.insert = (req, res) => {
    let firstname = req.body.name;

    if (isEmpty(req.body.name)) {
        response.error(404, 'data cannot body be empty', res);
    } else {
        connection.query(
            `INSERT INTO category SET name=?`,
            [firstname],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    response.success(201, 'insert data sucesfully', res, rows);
                }
            }
        );
    }
}

exports.update = (req, res) => {
    let idCategory = req.body.id;
    let name = req.body.name;

    if (isEmpty(req.body.id) || isEmpty(req.body.name)) {
        response.error(404, 'data cannot body be empty', res);
    } else {
        connection.query(
            `UPDATE category SET name=? WHERE id=?`,
            [name, idCategory],

            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    response.success(202, 'update data succefully', res, rows)
                }
            }
        );
    }
}

// delete
exports.delete = (req, res, next) => {
    let idCategory = req.params.id;

    if (idCategory === 0 || idCategory === '') {
        response.error(202, 'error', res);
    } else {
        connection.query(
            `DELETE FROM category WHERE id=?`,
            [idCategory],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.affectedRows === 0 || rows.affectedRows === '') {
                        response.error(404, 'data cannot body be empty', res);
                    } else {
                        response.success(202, 'delete data succes', res, rows);
                    }
                }
            }
        );
    }
}