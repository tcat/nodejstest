var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(cool());
});

module.exports = router;
