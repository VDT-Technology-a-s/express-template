// router pro API

// moduly
var express = require('express');
var router = express.Router();

// GET: /app-api/template/
// template endpoint
router.get('/template', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
