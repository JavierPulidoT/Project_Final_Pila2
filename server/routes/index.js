var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 let emojieDataset = ['💻'];
 let emojie = emojieDataset[Math.floor(Math.random() *
 emojieDataset.length)];
 res.render('index', { 
   title: 'Express',
   author:'🙍‍♂️Javier Pulido',
   emojie
  });


});

module.exports = router;
