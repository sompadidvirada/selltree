require("dotenv").config(); // 👈 Always keep this at the top
const express = require("express");
const app = express();
const fs = require("fs");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const { Server } = require("socket.io");

// 🔧 Step 1: Create HTTP server from Express
const server = http.createServer(app);

// 🔧 Step 2: Create Socket.IO server with the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(express.json({ limit: "500mb" }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(cors({
  origin: '*', // allow all origins for dev, or put your frontend URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.options("*", cors());

// 🔌 Step 3: Handle socket events
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // Example: Custom event
  socket.on("ping-server", (msg) => {
    console.log("Received from client:", msg);
    socket.emit("pong-client", "Hello from server");
  });
});

// Make `io` accessible in routes/controllers
app.set("io", io);

// Step 4: Register all routes dynamically
readdirSync("./routes").forEach((item) => {
  try {
    const route = require("./routes/" + item);
    app.use("/", route);
  } catch (err) {
    console.error(`❌ Failed to load route "${item}":`, err.message);
  }
});

// 🔊 Step 5: Start the server
server.listen(5520, "0.0.0.0", () => {
  console.log("Server is running on port 5520");
});
