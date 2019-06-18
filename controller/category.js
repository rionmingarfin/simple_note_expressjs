'use strict'

const response = require('../response/response');
const connection = require('../connect/connect');

// method welcome
exports.welcome = function (req, res) {
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
 exports.getCategory =(req,res,next) => {
    let idCategory = req.params.id;
    if (idCategory === 0 || idCategory === '') {
        next('route')
    }else{
        connection.query(
            `SELECT * FROM category WHERE id=?`,
            [idCategory],
            function(error,rows,field){ 
                if (error) {
                    throw error;
                }else{
                    if (rows.length === 0 || rows.length === '') {
                        res.send({
                            error :true,
                            message :'not found 404'
                        })
                    }else{
                        return res.send({
                            error : false,
                            data : rows,
                            message :'sucesfullyy'
                        })
                    }
                }
            }
        )
    }
 }

//  post
exports.insert = (req,res) => {
    
    let firstname = req.body.name;
    
    connection.query(
        `INSERT INTO category SET name=?`,
        [firstname],

        function (error, rows, field) {
            if (error) {
                throw error;
            } else {
                res.send({
                    error: false,
                    data: rows,
                    message: 'sucesfull',
                })
            }
        }
    );
}

exports.update = (req,res) =>{
    let idCategory = req.body.id;
    let name2 =req.body.name;

    connection.query(
        `UPDATE category SET name=? WHERE id=?`,
        [name2,idCategory],

        function(error,rows,field){
            if (error) {
                throw error;
            }else{
               return res.send({
                    error :false,
                    data :rows,
                    message :'succesfully'
                })
            }
        }
    );
}

// delete

exports.delete = (req,res,next) => {
   let idCategory =req.params.id;
     if (idCategory === 0 || idCategory === '') {
         next('route');
     }else{
         connection.query(
             `DELETE FROM category WHERE id=?`,
             [idCategory],
     
             function(error,rows,field){
                 if (error) {
                     throw error;
                 }else{
                     if (rows.affectedRows === 0 || rows.affectedRows === '') {
                         res.send({
                             error :true,
                             message : 'notfound'
                         })
                     }else{
                         return res.send({
                             error :false,
                             data :rows,
                             message : 'sucesfully'
                          })
                     }
                 }
             }
         );
     }
}