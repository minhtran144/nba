'use strict';

var express  = require('express'),
var app = express(),
    
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });

app.listen((process.env.PORT || 8000), function () {
   console.log("Server is up and listening on port");
 
