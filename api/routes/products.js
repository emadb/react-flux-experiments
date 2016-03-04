var express = require('express');

var router = express.Router();

router.get('/products', function(req,res) {
  res.json([{code: 'p1'}, {code: 'p2'}, {code: 'p3'}])
});

router.post('/products', function(req,res){
  res.json(req.body);
});

router.get('/products/:id', function(req,res){
  res.json({code: 'p2'})
});


module.exports = router;
