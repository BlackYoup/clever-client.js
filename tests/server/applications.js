var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");

var router = module.exports = express.Router();

var users = require("./data/users.js");
var organisations = require("./data/organisations.js");
var deployments = require("./data/deployments.js");

router.use(bodyParser.json());

router.use([
  "/self/applications",
  "/self/applications/:appId",
  "/self/applications/:appId/vhosts",
  "/organisations/:orgaId/applications",
  "/organisations/:orgaId/applications/:appId",
  "/organisations/:orgaId/applications/:appId/vhosts"
  ], require("./authorization.js"));

router.param("orgaId", function(req, res, next, orgaId) {
  var orga = organisations[orgaId];

  if(orga) {
    req.orga = orga;
    next();
  }
  else {
    res.status(404).json({type: "error", message: "Organisation not found"});
  }
});

router.param("appId", function(req, res, next, appId) {
  var owner = req.orga || users[req.userId];
  var app = _.find(owner.apps, function(app) {
    return app.id == appId;
  });

  if(app) {
    req.app = app;
    next();
  }
  else {
    res.status(404).json({type: "error", message: "App not found"});
  }
});

router.get("/self/applications", function(req, res, next) {
  var user = users[req.userId];
  res.json(user.apps);
});

router.get("/self/applications/:appId", function(req, res, next) {
  res.json(req.app);
});

router.get("/self/applications/:appId/vhosts", function(req, res, next){
  res.json(req.app.vhosts);
});

router.get("/self/applications/:appId/deployments", function(req, res, next){
  if(req.query.offset && req.query.limit){
    res.json(_.first(deployments[req.params.appId].slice(req.query.offset), parseInt(req.query.limit)));
  } else{
    res.json(deployments[req.params.appId]);
  }
});

router.get("/organisations/:orgaId/applications", function(req, res, next) {
  res.json(req.orga.apps);
});

router.get("/organisations/:orgaId/applications/:appId", function(req, res, next) {
  res.json(req.app);
});

router.get("/organisations/:orgaId/applications/:appId/vhosts", function(req, res, next){
  res.json(req.app.vhosts);
});

router.get("/organisations/:orgaId/applications/:appId/deployments", function(req, res, next){
  if(req.query.offset && req.query.limit){
    res.json(_.first(deployments[req.params.appId].slice(req.query.offset), parseInt(req.query.limit)));
  } else{
    res.json(deployments[req.params.appId]);
  }
});
