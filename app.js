const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("helloooo");
});

app.listen("3000", () => {
  console.log("Listen at 3000...");
});
