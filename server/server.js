const express = require("express");
const app = express();
const fs = require("fs");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json({ limit: `100mb` }));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.options("*", cors());

readdirSync("./routes").forEach((item) => {
  try {
    const route = require("./routes/" + item);
    app.use("/", route);
  } catch (err) {
    console.error(`❌ Failed to load route "${item}":`, err.message);
  }
});

app.listen(5520, () => {
  console.log("This server running in port 5500!!");
});
