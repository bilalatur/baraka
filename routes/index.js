var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session.usuarioLogueado)
  res.render('home',{usuario: req.session.usuarioLogueado})
});

module.exports = router;
