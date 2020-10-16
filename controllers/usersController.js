const fs = require('fs');
const path = require('path');
const bcrypt=require('bcrypt');
const {check, validationResult,body } = require('express-validator');

let usersController = {
    login: function(req,res){
        res.render('users/login');
    },
    postLogin: function(req,res){
        res.render('home')
    },
    register: function(req,res){
        res.render('users/register');
    },
    postRegister: function(req,res){
        res.render('users/login')
    }
}

module.exports = usersController;