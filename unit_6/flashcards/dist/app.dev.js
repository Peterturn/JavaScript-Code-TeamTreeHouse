"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/mystatic', express["static"]('public'));
app.set('view engine', 'pug');

var mainRoutes = require('./routes');

var cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes); //Not Found 404 Error Msg.

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); //Error Handler

app.use(function (err, req, res, next) {
  res.locals.error = err;

  if (err.status) {
    res.status(err.status);
  }

  res.render('error', err);
});
app.listen(3000, function () {
  console.log("the app is running on website at localhost:3000!");
});