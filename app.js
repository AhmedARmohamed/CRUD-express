const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const QuotesRoute = require("./routes/Quotes");

// Database
mongoose.connect("mongodb://localhost/motivation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Conncected to MongoDB database.....");
});

// middleware
app.use(bodyParser.json());

// routes

app.use("/quotes", QuotesRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, console.log("Listening on port 3000"));
