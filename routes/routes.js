'use strict'

module.exports = function (app){
 const controller= require('../controller/category')
 const controllerNotes =require('../controller/notes');
//  category
// //  get
// const whitelist = ['http://localhost', 'http://local.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.get('/',controller.welcome);

//get all
app.get('/category',controller.getAllCategory);
// get category based on
app.get('/category/:id',controller.getCategory);

// post category
app.post('/category',controller.insert);

// update category
app.put('/category',controller.update);
// delete category
app.delete('/category/:id',controller.delete);

// notes

app.get('/note',controllerNotes.welcome);
// get notes
app.get('/notes/:id',controllerNotes.getNotes);
// get all
app.get('/notes',controllerNotes.getNotesAll);
// post
app.post('/notes',controllerNotes.insert);
// update
app.put('/notes',controllerNotes.update);
// delete
app.delete('/notes/:id',controllerNotes.delete);
}