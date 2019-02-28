const express = require('express');
const app = express();

const http = require('http');
const httpServer = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(httpServer);
app.use(express.static('static'));

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

// WebSocket handlers
io.on('connection', function(socket){
  console.log(`a user connected with id ${socket.id}`);
  socket.on('disconnect', function(){
    console.log(`user ${socket.id} disconnected`);
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});



const PORT = 3000;

httpServer.listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});
