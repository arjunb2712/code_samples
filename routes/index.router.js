const express = require('express');
const router = express.Router();


/*******************************************************************
 * @Purpose: All routeres related to the User Controller
*******************************************************************/
const usersController = require('../controllers/user.controller');
router.get('/users', usersController.userList);
router.get('/users/:id', usersController.userDetail);
router.post('/users', usersController.addUser);
router.put('/users', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);


module.exports = router;
