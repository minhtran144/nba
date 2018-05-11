'use strict';

const express  = require('express'),
const app = express(),
    
function respond(req, res) {
    res.send('We are happy to see you using Chat Bot Webhook');
};
    
app.get('/', respond);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Express server listening on port', port)
});

