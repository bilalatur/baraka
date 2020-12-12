const bcrypt=require('bcrypt');
let db = require('../database/models');

let usersController = {
    register: function(req,res){
        res.render('users/register',{usuario: req.session.usuarioLogueado});
    },
    postRegister: function(req,res){
        if(req.body.password === req.body.password2){
        db.User.findOrCreate({
            where:{
                email: req.body.email
            },
            defaults:{
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                calle: req.body.calle,
                numero: req.body.numeracion,
                localidad: req.body.localidad,
                admin: false,
                telefono: req.body.telefono,
                password: bcrypt.hashSync(req.body.password, 10)
            }
        })
        .then(function(usuario){
            res.render('users/login',{usuario: req.session.usuarioLogueado})
        })
    }
    },
    login: function(req,res){
        res.render('users/login',{usuario: req.session.usuarioLogueado});
    },
    postLogin: function(req,res){
        db.User.findOne({
            where: {
                email: req.body.email
             },
         }).then((usuarioPorLoguearse) => {
         if (usuarioPorLoguearse) {
             let passCompare = bcrypt.compareSync(req.body.password, usuarioPorLoguearse.password)
             if (passCompare == true) { 
                req.session.usuarioLogueado = usuarioPorLoguearse;
                     if(req.body.recordame != undefined){ 
                         let expiracion = new Date(Date.now() + 900000);
                         res.cookie('baraka', usuarioPorLoguearse.email, {expires: expiracion});
                     };
                     res.render('home',{usuario: req.session.usuarioLogueado});
             } else {
                 res.render('users/login',{usuario: undefined})
             }
         } else {
             res.render('users/login',{usuario: undefined}  )
         }
         }).catch(function(error){
             console.log(error);
         });
    },
    'logout': (req,res) => {
        req.session.destroy(function(){
           if (req.cookies.baraka != undefined) {
              res.clearCookie("baraka");
           };
           res.redirect('/')
        });
     },
     'profile':(req,res) => {
         res.render('users/profile',{usuario:req.session.usuarioLogueado})
     }
}

module.exports = usersController;