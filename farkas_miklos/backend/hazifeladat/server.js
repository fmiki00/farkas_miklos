const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Fut a szerver");
})

app.listen(3001, () => {
    console.log("A server a 3001 porton fut");
});