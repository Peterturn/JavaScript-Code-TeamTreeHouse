"use strict";

var express = require('express');

var router = express.Router(); // const  data  =  require('../data/flashcardData.json').data; ES6 syntax

var _require = require('../data/flashcardData.json'),
    data = _require.data; // 'const { cards } = data' is the same as 'const cards = data.cards;'


var cards = data.cards;
router.get('/', function (req, res) {
  var numberOfCards = cards.length;
  var flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect("/cards/".concat(flashcardId, "?side=question"));
});
router.get('/:id', function (req, res) {
  var side = req.query.side;
  var id = req.params.id;

  if (!side) {
    return res.redirect("/cards/".concat(id, "?side=question"));
  }

  var name = req.cookies.username;
  var text = cards[id][side];
  var hint = cards[id].hint;
  var templateData = {
    id: id,
    text: text,
    name: name
  };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }

  res.render('card', templateData); // res.locals.prompt = cards[req.params.id].question;
  // //res.locals.colors = colors;
  // res.locals.hint = cards[req.params.id].hint;
  // /**
  //  *res.render('card', { prompt: "who is baried in Grant's Tomb?", 
  //  *colors, 
  //  *hint: "think about whose tomb it is."});
  // */
  // res.render('card');
});
module.exports = router;