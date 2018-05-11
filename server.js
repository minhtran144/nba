const express = require('express');
const server = express();

function respond(req, res) {
    res.send('Hello Restify!');
}

server.get('/', respond);

var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
