const express = require('express');
const app = express();

// adding middleware
app.set("view engine", "ejs"); //setting up templating engine

app.get('/about', function(req, res){
    res.render('about.ejs');
})

app.listen(3000, function(err){
    if (err){console.log(err);
    }
    console.log("Server is live and on port 3000......");
});