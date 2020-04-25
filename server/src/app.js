const express = require("express");
const volleyball = require("volleyball");

const auth = require("./auth/auth");

const app = express();

app.use(volleyball);
app.use(express.json());

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("server is working");
});

module.exports = app;
