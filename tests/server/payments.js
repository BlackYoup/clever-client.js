var express = require('express');
var bodyParser = require('body-parser');

var router = module.exports = express.Router();

var coupons = require('./data/coupons.js');

router.use(bodyParser.json());

router.get('/payments/providers', function(req, res, next){
  res.json(["Bitcoin", "Paypal"]);
});

router.get('/payments/coupons/:name', function(req, res, next){
  res.json(coupons[req.params.name]);
});
