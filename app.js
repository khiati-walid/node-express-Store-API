const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1>");
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    // connect DB
    app.listen(port, console.log(`Server listening in ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
