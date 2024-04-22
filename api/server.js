const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes");

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;

app.use("/api", movieRoutes);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
