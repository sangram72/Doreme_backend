const Customer = require('../models/note.model.js');

exports.create = (req, res) => {
    
    if(!req.body) {
        return res.status(400).send({
            message: "Customer content can not be empty"
        });
    }

    
    const customers = new Customer({
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        drone_name : req.body.drone_name
    });


    customers.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll = (req, res) => {
    Customer.find()
    .then(customer => {
        res.send(customer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.id
        });
    });
};


exports.update = (req, res) => {
    
    if(!req.body) {
        return res.status(400).send({
            message: "empty"
        });
    }

    
    Customer.findByIdAndUpdate(req.params.id, {
         name: req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        drone_name : req.body.drone_name
    
    }, {new: true})
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
};
