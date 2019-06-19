'use strict'

module.exports = function (app) {
    const controller = require('../controller/category')
    const controllerNotes = require('../controller/notes');


    //method welcome
    app.get('/', controller.welcome);

    //routes category
    app.get('/category', controller.getAllCategory);
    app.get('/category/:id', controller.getCategory);
    app.post('/category', controller.insert);
    app.put('/category', controller.update);
    app.delete('/category/:id', controller.delete);

    // route notes
    app.get('/note', controllerNotes.welcome);
    app.get('/notes/:id', controllerNotes.getNotes);
    app.get('/notes', controllerNotes.getNotesAll);
    app.post('/notes', controllerNotes.insert);
    app.put('/notes', controllerNotes.update);
    app.delete('/notes/:id', controllerNotes.delete);
}
