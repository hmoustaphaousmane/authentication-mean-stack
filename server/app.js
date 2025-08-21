require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("MEAN Stack authentication app.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
