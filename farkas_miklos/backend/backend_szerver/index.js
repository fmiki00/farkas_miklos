const express = require("express");
const app = express();
const port = 3000;

app.get("/", (res ,req) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log("fut a szerver a:", {port}, "-on");
});