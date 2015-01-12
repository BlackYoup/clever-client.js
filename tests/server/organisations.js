var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");

var router = module.exports = express.Router();

var organisations = require("./data/organisations.js");
var consumptions = require("./data/consumptions.js");
var credits = require("./data/credits.js");

router.use(bodyParser.json());

router.use(["/organisations", "/organisations/:orgaId"], require("./authorization.js"));

router.param("orgaId", function(req, res, next, orgaId) {
  var orga = organisations[orgaId];

  if(orga) {
    var member = _.filter(orga.members, function(member){
      return member.member.id === req.userId;
    });
    if(member){
      req.orga = orga;
      next();
    } else{
      res.status(401).json({type: "error", message: "You cannot access the organisations " + orga.id + " with user " + req.userId});
    }
  }
  else {
    res.status(404).json({type: "error", message: "Organisation not found"});
  }
});

router.get("/organisations", function(req, res, next) {
  var userId = req.query.user;

  if(userId != req.userId) {
    res.status(401).json({type: "error", message: "You cannot access the organisations of user(" + userId + ")"});
  }
  else {
    var orgas = _.filter(organisations, function(orga) {
      return _.any(orga.members, function(member) {
        return member.member.id == userId;
      });
    });

    res.json(orgas);
  }
});

router.get("/organisations/:orgaId", function(req, res, next) {
  res.json(req.orga);
});

router.get("/organisations/:orgaId/consumptions", function(req, res, next){
  var orgaConsumptions = consumptions[req.orga.id];
  if(req.query.appId){
    res.json(orgaConsumptions[req.query.appId]);
  } else{
    res.json(orgaConsumptions);
  }
});

router.get("/organisations/:orgaId/credits", function(req, res, next){
  res.json(credits[req.orga.id]);
});

router.get("/organisations/:orgaId/members", function(req, res, next){
  res.json(req.orga.members);
});
