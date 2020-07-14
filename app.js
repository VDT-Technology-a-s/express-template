// import modulu
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');  

// import routeru
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/app-api');

var app = express();

// nastaveni views, view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// nastaveni express aplikace
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// nastaveni routeru
app.use('/', indexRouter);
app.use('/app-api', apiRouter);

// 404 error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // error zpravy pouze v dev prostredi  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // renderovani error stranky
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
