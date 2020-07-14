// router pro přesměrování na HTML stránky

// moduly
const express = require('express');
const router = express.Router();

// GET: /
// vyrenderuje uvodni stranku
router.get('/', function(req, res, next) {
  res.render('home', { active: {index: true}});
});

// GET: /template/
// vyrenderuje template stránku
router.get('/template', function(req, res, next) {  
  res.render('template', { active: {template: true}});
});

module.exports = router;
