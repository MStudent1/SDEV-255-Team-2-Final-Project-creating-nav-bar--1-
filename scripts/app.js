const express = require('express');

//Express app
const app = express();

//listen for requests
app.listen(3000);

//Allows use of ejs view engine
app.set('view engine', 'ejs');

//start to
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/course_single', (req, res) => {
    res.render('course_single');
});

app.get('/course_list', (req, res) => {
    res.render('course_list');
});

app.get('/login', (req, res) => {
    res.render('login');
});
