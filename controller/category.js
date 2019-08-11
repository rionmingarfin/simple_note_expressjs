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
    let name = req.body.name;
    let image =req.body.image;

    if (isEmpty(req.body.name) || isEmpty(req.body.image)) {
        response.error(404, 'data cannot body be empty', res);
    } else {
        connection.query(
            `INSERT INTO category SET name=?,image=?`,
            [name,image],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    let resultId = rows.insertId
                    let data = {
                        status :201,
                        message : "data sucesfully",
                        result : {
                            id :resultId,
                            name : name,
                            image : image
                        }
                    }
                    return res.status(202).json(data).end();
                }
            }
        );
    }
}

exports.update = (req, res) => {
    let idCategory = req.params.id;
    let name = req.body.name;

    if (isEmpty(req.body.name)) {
        response.error(403, 'data cannot body be empty', res);
    } else {
        connection.query(
            `UPDATE category SET name=? WHERE id=?`,
            [name, idCategory],
            function (error, rows, field) {
                if (error) {
                    throw error;
                } else {
                    if (rows.affectedRows === 0) {
                        response.error(405,'not found',res)
                    }else{
                        response.success(202, 'update data succefully', res, rows)
                    }
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
                        response.error(404, 'data not found', res);
                    } else {
                        let resultid =idCategory
                        let data = {
                            status :202,
                            message :'data sucecesfull',
                            result : {
                                id : parseInt(resultid)
                            }
                        }
                        return res.status(202).json(data).end()
                    }
                }
            }
        );
    }
}