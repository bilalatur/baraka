const fs = require('fs');
const path = require('path');
const bcrypt=require('bcrypt');
const {check, validationResult,body } = require('express-validator');
let db = require('../database/models');

let usersController = {
    register: function(req,res){
        res.render('users/register');
    },
    postRegister: function(req,res){
        db.User.findOrCreate({
            where:{
                email: req.body.email
            },
            defaults:{
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                calle: req.body.calle,
                numero: req.body.numero,
                localidad: req.body.localidad,
                admin: false,
                telefono: req.body.telefono,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10)
            }
        })
        .then(function(usuario){
            res.render('users/login')
        })
    },
    login: function(req,res){
        res.render('users/login');
    },
    postLogin: function(req,res){
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(function(usuarioALoguear){
            if(usuarioALoguear != null){
                if(usuarioALoguear.contraseña === bcrypt.compareSync(req.body.contraseña)){
                    req.session.usuarioLogueado = usuarioALoguear;
                    if(req.body.recordame != undefined){
                        let expiracion = new Date(Date.now() + 900000);
                        res.cookie('recordame', usuarioPorLoguearse.email, {expires: expiracion}); 
                    }
                    res.redirect('/')
                } else {
                    res.render('error')
                }
            } else {
                res.render('error')
            }
        })
        res.render('home')
    }
}

module.exports = usersController;