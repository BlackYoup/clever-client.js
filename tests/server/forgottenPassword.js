var express = require('express');
var router = module.exports = express.Router();

router.get("/password_forgotten", function(req, res, next){
  var form = "<form>password_forgotten</form>";
  res.send(form);
});
