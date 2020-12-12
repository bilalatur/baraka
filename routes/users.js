var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* LOGIN */
router.get('/login', usersController.login) 
router.post('/login', usersController.postLogin)
// Ruta de logout
router.post('/logout', usersController.logout);

/* REGISTRO */
router.get('/register', usersController.register)
router.post('/register', usersController.postRegister)

/* PERFIL */
router.get('/:id/profile', usersController.profile)

module.exports = router;
