require("dotenv").config();
const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const morgan = require("morgan");

const authRouter = require("./router/authRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("MEAN Stack authentication app.");
});

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  next(createError.NotFound);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).send("Internal Server Error.");
});

module.exports = app;
