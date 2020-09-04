const User = require('../models/user.model')
const Project = require('../models/project.model')
const Ticket = require('../models/ticket.model')

exports.getIndex = (req, res) => {
    res.status(200).render('index');
};


exports.getAddUser = (req, res) => {
    res.status(200).render('add-user');
};

exports.getAddProject = (req, res) => {
    res.status(200).render('add-project');
};

exports.getAddTicket = (req, res) => {
    res.status(200).render('add-ticket');
};


exports.postUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json ({
            status: 'error',
            error: 'req body cannot be empty',
        })
    }
    
    const {username:username, email:email, role:role }  = req.body;

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
    const { projectname: projectname, description: description,  usersinvolved: usersinvolved } = req.body;

    
    const user = new Project({ projectname: projectname, description: description,  usersinvolved: usersinvolved});
    user.save()


    console.log('Project Added to the database');
    res.status(201).redirect('/');
};


exports.postTicket = (req, res) => {
    if (!req.body) {
        return res.status(400).json ({
            status: 'error',
            error: 'req body cannot be empty',
        })
    }
    const { priority: priority, projectname: projectname,  description: description, type:type, creator:creator, assigneddeveloper:assigneddeveloper, status:status } = req.body;

    
    const user = new Ticket({ priority: priority, projectname: projectname,  description: description, type:type, creator:creator, assigneddeveloper:assigneddeveloper, status:status});
    user.save()


    console.log('Ticket Added to the database');
    res.status(201).redirect('/');
};