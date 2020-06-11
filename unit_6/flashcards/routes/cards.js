const express = require('express');
const router = express.Router();

// const  data  =  require('../data/flashcardData.json').data; ES6 syntax
const { data } = require('../data/flashcardData.json');

// 'const { cards } = data' is the same as 'const cards = data.cards;'
const { cards } = data;

router.get('/', (req, res) => {
    const numberOfCards = cards.length;
    const flashcardId = Math.floor( Math.random() * numberOfCards );
    res.redirect( `/cards/${flashcardId}?side=question` )
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if ( !side ) {
      return  res.redirect(`/cards/${id}?side=question`)
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text, name };
   
    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if ( side === 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    
    res.render('card', templateData);
    // res.locals.prompt = cards[req.params.id].question;
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