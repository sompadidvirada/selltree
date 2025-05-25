// server.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('send-to-popup-userinfo', (data) => {
    socket.broadcast.emit('receive-from-main', data);
  });

  socket.on('send-to-popup-employeeInfo', (data) => {
    socket.broadcast.emit('receive-from-main', data);
  });
  socket.on('send-to-popup-setUserBill', (data) => {
    socket.broadcast.emit('receive-from-main-userBill', data);
  });
  socket.on('send-to-popup-payment', (data) => {
    socket.broadcast.emit('receive-from-main-payment', data);
  });

  socket.on('test', (data) => {
    console.log(data)
    socket.broadcast.emit('test-receive', data);
  });


  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server running on port 3001');
});
