const express = require('express');
const app = express();

// adding middleware
app.set("view engine", "ejs"); //setting up templating engine

app.get('/about', function(req, res){
    res.render('about.ejs');
})
app.get('/contact', function(req, res){
    res.render('contact.ejs');
})
app.get('/ForHonor', function(req, res){
    res.render('ForHonor.ejs');
})
app.get('/portfolio', function(req, res){
    res.render('portfolio.ejs');
})
app.get('/anime', function(req, res){
    res.render('anime.ejs');
})

app.use(express.static('./public'));

app.listen(3000, function(err){
    if (err){console.log(err);
    }
    console.log("Server is live and on port 3000......");
});