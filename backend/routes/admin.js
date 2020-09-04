const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-user', adminController.getAddUser);

router.post('/add-user', adminController.postUser);

router.get('/add-project', adminController.getAddProject);

router.post('/add-project', adminController.postProject);

router.get('/add-ticket', adminController.getAddTicket);

router.post('/add-ticket', adminController.postTicket);




module.exports = router;