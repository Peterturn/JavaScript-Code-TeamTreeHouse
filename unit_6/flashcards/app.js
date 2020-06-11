const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/mystatic', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes)

//Not Found 404 Error Msg.
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  


//Error Handler
app.use((err, req, res, next) => {
    res.locals.error = err;
      if (err.status) {
        res.status(err.status);
      }
      res.render('error', err);
  });


app.listen(3000, ()=>{
    console.log("the app is running on website at localhost:3000!");
});