// router pro API

// moduly
const express = require('express');
const router = express.Router();
const templateService = require("../services/template-service.js");

// GET: /app-api/template/
// template endpoint
router.get('/template', function(req, res, next) {
  var output = templateService.hello("world");
  res.send(output);
});

module.exports = router;
