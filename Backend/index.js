import express from "express";
import mongoose from "mongoose";

mongoose
  .connect()
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("Failed to Connected", err);
  });

const app = express();

app.listen(8080, () => {
  console.log("Server is running on the 8080 Port !!!");
});
