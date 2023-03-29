module.exports = (app) => {
    const Customer = require('../controllers/note.controller.js');

    
    app.post('/Users', Customer.create);

    
    app.get('/Users', Customer.findAll);

    
    // app.get('/Customer/:noteId', Customer.findOne);

    
    app.put('/Users/:id', Customer.update);

    app.delete('/Users/:id', Customer.delete);
}