require("dotenv").config();
const express = require("express");
const cors = require("cors");
const createError = require("http-errors");

require("./utils/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("MEAN Stack authentication app.");
});

app.use((err, req, res, next) => {
  next(createError.NotFound);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).send("Internal Server Error.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
