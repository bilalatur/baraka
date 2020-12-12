let productsController = {
    productDetail: function(req,res){
        res.render('product-detail',{usuario: req.session.usuarioLogueado});
    }
}

module.exports = productsController;