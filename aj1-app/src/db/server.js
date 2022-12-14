require("dotenv").config();
const express = require("express");
// const db = require("./data");
const knex = require('./index');


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
      res.status(200).send(undefined);
    }
  })
  .catch((err) => res.status(400).send(err));
});

app.post("/viewBudge", (req, res) => {
  const user_id = req.body.user_id;
  console.log(req.body);
  knex.select({
    user_id: "user_id",
    budge_id: "budge_id",
    user_id_budge_id: "user_id_budge_id",
    budge_name: "budge_name",
    budge_type: "budge_type",
  })
  .from("user_budge")
  .innerJoin("user", "user.id","=","user_id")
  .innerJoin("department", "department.id","=","user.department_id")
  .innerJoin("budge", "budge.id","=","budge_id")
  .innerJoin("budge_type", "budge_type.id","=","budge.budge_type_id")
  .where("user_id" ,"=", user_id)
  .then((result) => {
    const data = result;
    res.status(200).send(data);  
  })
  .catch((err) => res.status(400).send(err));
});

app.post("/assignBudge", (req, res) => {

  knex('user_budge')
  .insert({
    user_id: req.body.user_id,
    budge_id: req.body.budge_id,
    user_id_budge_id: `${req.body.user_id}${req.body.budge_id}`,
  })
  .then((result) => res.sendstatus(201))
  .catch((err) => res.status(400).send(err));
});

app.get("/assignBudge/user", (req, res) => {
  knex.select({
    id: "id",
    user_name: "user_name",
  })
  .from("user")
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => res.status(400).send(err));
});

app.get("/assignBudge/budge", (req, res) => {
  knex.select({
    id: "id",
    budge_name: "budge_name",
  })
  .from("budge")
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => res.status(400).send(err));
});


app.listen(PORT, () => {
  console.log(`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`);
});
