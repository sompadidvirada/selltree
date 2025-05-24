// server.js (Node.js + Express)
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('send-to-popup', (data) => {
    // Relay this to all clients (or specific client if you track them)
    socket.broadcast.emit('receive-from-main', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3001, () => console.log('Socket.IO server running on port 3001'));
