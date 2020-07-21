var express = require ('express');

var app = express();
var server = app.listen (3000);

app.use(express.static('public'))

console.log ("Server is running"); //<-- message when server is up

var socket = require ('socket.io')

var io = socket (server)

io.sockets.on('connection', newConnection)

function newConnection (socket) {
    console.log ('new connection:' + socket.id)
    
    socket.on ('keyCode', keyMsg)

    function keyMsg (data) {
        socket.broadcast.emit ('keyCode', data);
        console.log ("Server:", data);
    }
}