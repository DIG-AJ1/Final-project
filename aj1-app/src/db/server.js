require("dotenv").config();
// const e = require("express");
const express = require("express");
// const db = require("./data");
// const knex = require('./index');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "../../public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
    let message = "Hello world! From Server express.js!!!"
    res.status(200).send(message);
});


app.listen(PORT, () => {
  console.log(`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`);
});
