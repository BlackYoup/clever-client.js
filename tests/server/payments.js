var express = require('express');
var bodyParser = require('body-parser');

var router = module.exports = express.Router();
router.use(bodyParser.json());

var recurringError = {
  type: "error",
  message: "This organisation does not have a recurrent payment registered",
  id: 9029
};

router.get("/self/payments/recurring", function(req, res, next){
  res.status(400).json(recurringError);
});

router.get("/organisations/:orgaId/payments/recurring", function(req, res, next){
  res.status(400).json(recurringError);
});
