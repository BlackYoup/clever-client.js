var express = require("express");
var bodyParser = require("body-parser");

var router = module.exports = express.Router();

router.use(bodyParser.json());

router.get("/vat_check", function(req, res, next){
  var country = req.query.country;
  var vat = req.query.vat;

  if(country.length === 2 && vat.length === 11){
    res.json({valid: true});
  } else{
    res.json({valid: false});
  }
});
