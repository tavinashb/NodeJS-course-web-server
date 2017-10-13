const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', ()=> new Date().getFullYear());

app.get('/', (req, res)=>{
  res.render('index.hbs', {
    pageTitle: 'Welcome',
    message: 'Wlecome to application....'
  });
});

app.listen(3000);
