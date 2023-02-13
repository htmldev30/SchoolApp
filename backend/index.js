const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("You Are On The Home Page Of The API!");
});

app.listen(port, () => {
  console.log(`Working on port: ${port}`);
});
