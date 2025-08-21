require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongoose connected to database successfully.");
  })
  .catch((error) => {
    console.error(error);
  });

mongoose.connection.on("disconnected", () => {
  console.log("Moogose disconnected from database.");
});

// Properly close MongoDB connection before exiting the app
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
