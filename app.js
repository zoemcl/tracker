// Setup
var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'))

// Routes
app.get("/", (req, res) => {
    res.render('index');
 });

// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/tracker")
