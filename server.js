const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
//Body Parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
const UserAuth = require("./Routes/UserRoute.js");
const JobPost = require("./Routes/JobRoute.js");

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
app.use("/api/v1/job", JobPost);

app.listen(Port, () => {
  console.log("server in active on port ", Port);
});
