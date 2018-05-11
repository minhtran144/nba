'use strict';

var express  = require('express'),

app = express(),
    
function respond(req, res) {
    res.send('We are happy to see you using Chat Bot Webhook');
};
    
app.get('/', respond);

app.listen((process.env.PORT || 8000), function () {
   console.log("Server is up and listening on port");
 
