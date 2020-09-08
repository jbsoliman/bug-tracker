const User = require('../models/user.model')
const Project = require('../models/project.model')
const Ticket = require('../models/ticket.model')

exports.getIndex = async(req, res) => {
    const user = await User.find((data) => data);
    try {
        res.status(200).render('index', {user: user});
    } catch (error) {
        console.log(error);
    }
    
};


exports.getAddUser = async(req, res) => {
    const user = await User.find((data) => data);
    try {
        console.log(user);
        res.status(200).render('add-user', {user: user});
    } catch (error) {
        console.log(error);
    }
};

exports.getAddProject = (req, res) => {
    res.status(200).render('add-project');
};

exports.getAddTicket = (req, res) => {
    res.status(200).render('add-ticket');
};

exports.getUsers = async(req,res) => {
    const user = await User.find((data) => data);
    try {
        console.log(user);
        res.status(200).render('user', {user: user});
    } catch (error) {
        console.log(error);
    }
}

exports.getProjects = async(req,res) => {
    const project = await Project.find((data) => data);
    try {
        console.log(project);
        res.status(200).render('project', {project: project});
    } catch (error) {
        console.log(error);
    }
}

exports.getTickets = async(req,res) => {
    const ticket = await Ticket.find((data) => data);
    try {
        console.log(ticket);
        res.status(200).render('ticket', {ticket: ticket});
    } catch (error) {
        console.log(error);
    }
}


exports.postUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json ({
            status: 'error',
            error: 'req body cannot be empty',
        })
    }
    
    const {username:username, email:email, role:role }  = req.body;

    const user = new User({username, email:email, role:role});
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