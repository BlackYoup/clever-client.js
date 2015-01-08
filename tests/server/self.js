var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");
var consumptions = require("./data/consumptions.js");

var router = module.exports = express.Router();
var user = require("./data/users.js");

router.use(bodyParser.json());

router.use([
  "/self",
  "/self/emails"
], require("./authorization.js"));

router.get("/self", function(req, res, next) {
  res.json(user[req.userId]);
});

router.put("/self", function(req, res, next) {
  var updatedUser = _.chain(req.body)
    .pick(function(value, field) {
      return ["firstName", "lastName", "phone", "address", "city", "zipcode", "country"].indexOf(field) >= 0;
    })
    .defaults(user[req.userId])
    .value();

  res.json(updatedUser);
});

router.get("/self/emails", function(req, res, next){
  res.json(user[req.userId].emails);
});

router.get("/self/consumptions", function(req, res){
  var userConsumptions = consumptions[req.userId];
  if(req.query.appId){
    res.json(userConsumptions[req.query.appId]);
  } else{
    res.json(userConsumptions);
  }
});
