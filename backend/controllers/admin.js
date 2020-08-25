const Users = require('../models/user.model')
const Projects = require('../models/project.model')

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};

exports.getAddUser = (req, res) => {
    res.status(200).render('edit-user');
};

exports.postUser = async (req, res) => {
    const username  = req.body.username;

    const user = new Users(username);
    user.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    console.log('User Added to the database');
    res.status(201).redirect('/');
};

exports.postProject = (req, res) => {
    const { username: username, description: description, duration: duration, date: date } = req.body;

    const user = new Users(username);
    user.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));


    console.log('User Added to the database');
    res.status(201).redirect('/');
};