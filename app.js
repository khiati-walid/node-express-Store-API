const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1>");
});

// Products Routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening in ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
