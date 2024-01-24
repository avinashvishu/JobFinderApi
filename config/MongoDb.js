const mongoose = require("mongoose");

//DataBase Connection
const db = mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    console.log("Succesfully connected to the DataBase");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;
