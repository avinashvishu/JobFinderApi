const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const Port = process.env.PORT || 3000;

//DataBase Connection
mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    console.log("Succesfully connected to the DataBase");
  })
  .catch((error) => {
    console.log(error);
  });

// Health check Api
app.get("/health", (req, res) => {
  res.json({
    message: "Server is Running Fine",
    status: "Active",
    time: new Date(),
  });
});

app.listen(Port, () => {
  console.log("server in active on port ", Port);
});
