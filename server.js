const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
//Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Routes
const UserAuth = require("./Routes/UserRoute.js");

const Port = process.env.PORT || 3000;
//Db Connection
require("./config/MongoDb.js");

// Health check Api
app.get("/health", (req, res) => {
  res.json({
    message: "Server is Running Fine",
    status: "Active",
    time: new Date(),
  });
});

app.use("/api/v1/auth", UserAuth);

app.listen(Port, () => {
  console.log("server in active on port ", Port);
});
