require("dotenv").config();
const express = require("express");
// const db = require("./data");
const knex = require('./index');


const PORT = process.env.PORT || 80;
const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "../../public"));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.get("/", (req, res) => {
    let message = "Hello world! From Server express.js!!!"
    res.status(200).send(message);
});

app.post("/login", (req, res) => {
  let login_number = req.body.login_number;
  let password = req.body.password;
  
  knex.select({
    id: "id",
    loginNumber: "login_number",
    password: "password",
    userName: "user_name",
  })
  .from("user")
  .where("login_number" ,"=", login_number)
  .first()
  .then((result) => {
    console.log(result);
    console.log(result.password);
    // { id: 1, loginNumber: 101, password: 'pw1', userName: 'taro' }
    if (password === result.password) {
      const data = [result.id, result.userName]
      res.status(200).json(data);
    } else {
      res.status(200).send("パスワードが間違っています");
    }
  })
  .catch((err) => res.status(400).send(err));
});

app.listen(PORT, () => {
  console.log(`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`);
});
