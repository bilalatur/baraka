let db=require('../database/models');

function recordameMidd(req,res,next){
    if(req.cookies.baraka != undefined && req.session.usuarioLogueado == undefined){
        db.User.findOne({
            where: {
                email: req.cookies.baraka
             },
         }).then((usuarioLogueado) => {
            req.session.usuarioLogueado = usuarioLogueado;
            });
    }
    next();
}

module.exports = recordameMidd;