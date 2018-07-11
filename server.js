const express = require("express");

const hbs = require('hbs')

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', ()=>{

  return new Date();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.use((req, res, next)=>{
    res.render('maintenance.hbs', {
      pageTitle:"Maintenance page"
    })
});


app.get('/',(req, res)=>{
  res.send('Hello!! This is Root folder');
});

app.get('/header',(req, res)=>{
  res.send({"name": "Rajeshwar",
            "likes": ["Tennis", "Hiking","Biking"]});
});

app.get('/home',(req, res)=>{
  res.render('home.hbs',{
            "pageTitle": "About page from server",
            "name": "Rajeshwar",
            "myHobbies": ["Tennis", "Hiking","Biking"],
            "copyrightYear": new Date().getFullYear()});
});

app.get('/about',(req, res)=>{
  res.render('about.hbs',{
    pageTitle: "About page from server",
    copyrightYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Listing on port ${port}`)

});
