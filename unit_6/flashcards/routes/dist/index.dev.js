"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  var name = req.cookies.username;

  if (name) {
    res.render('index', {
      name: name
    });
  } else {
    res.redirect('/hello');
  }
});
router.get('/hello', function (req, res) {
  var name = req.cookies.username;

  if (name) {
    res.redirect('/');
  } else {
    res.render('hellos');
  }
});
router.post('/hello', function (req, res) {
  //res.json(req.body);
  res.cookie('username', req.body.username);
  res.redirect('/');
});
router.post('/goodbye', function (req, res) {
  //res.json(req.body);
  res.clearCookie('username');
  res.redirect('/hello');
});
module.exports = router;