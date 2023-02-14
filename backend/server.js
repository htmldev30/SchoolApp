const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes");
const app = express();
app.use(express.json());
const port = 3000;

//#region Mongo Connection
// Dev Note: DO NOT USE 'localhost" instead use following below
mongoose.connect("mongodb://127.0.0.1:27017/schoolapp", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error "));
db.once("open", () => {
  console.log("Connection Successful");
});
//#endregion

app.use(Router);
app.listen(port, () => {
  console.log(`Working on port: ${port}`);
});
