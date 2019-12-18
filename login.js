var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fetch = require('node-fetch');

require('./data/fetch.js')(app, fetch);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/view/login.html'));
});

app.post('/auth', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username == 'DANS' && password == '1234') {
        response.redirect('/home');
    } else {
        response.send('Incorrect Username and Password!');
        response.end();
    }
});

app.get('/home', function (request, response) {
    
    response.sendFile(path.join(__dirname + '/view/home.html'));
});



app.listen(3000);