const User = require('../models/user.model')
const Project = require('../models/project.model')

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};


exports.getAddUser = (req, res) => {
    res.status(200).render('edit-user');
};

exports.getAddProject = (req, res) => {
    res.status(200).render('edit-project');
};


exports.postUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json ({
            status: 'error',
            error: 'req body cannot be empty',
        })
    }
    
    const username  = req.body;

    const user = new User(username);
    user.save();

    console.log('User Added to the database');
    res.status(201).redirect('/');
};

exports.postProject = (req, res) => {
    if (!req.body) {
        return res.status(400).json ({
            status: 'error',
            error: 'req body cannot be empty',
        })
    }
    const { username: username, description: description, duration: duration } = req.body;

    
    const user = new Project({ username: username, description: description, duration: duration});
    user.save()


    console.log('Project Added to the database');
    res.status(201).redirect('/');
};