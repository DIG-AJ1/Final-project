require("dotenv").config();
const express = require("express");
// const db = require("./data");
const knex = require('./index');
const cors = require('cors');



const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "../../public"));

// app.use(
//   cors({
//     origin: ["http://18.183.174.12:3000"],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true
//   })
// );

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
    role: "role",
  })
  .from("user")
  .where("login_number" ,"=", login_number)
  .first()
  .then((result) => {
    
    if (password === result.password) {
      let data;
      if (result.role===0) {
        data = [result.id, result.role, result.userName,"requestBudge"]
       } else{
        data = [result.id, result.role, result.userName,"approveBudge"]
       }
      res.status(200).json(data);
    } else {
      res.status(200).send(undefined);
    }
  })
  .catch((err) => res.status(400).send(err));
});

app.post("/viewBudge", (req, res) => {
  console.log("no68");
  const user_id = req.body.user_id;
  console.log(req.body);
  knex.select({
    user_id: "user_id",
    budge_id: "budge_id",
    status: "status",
    url: "url",
    certification_date: "certification_date",
    user_id_budge_id: "user_id_budge_id",
    budge_name: "budge_name",
    budge_type: "budge_type",
    unchecked: "unchecked"
  })
  .from("user_budge")
  .innerJoin("user", "user.id","=","user_id")
  .innerJoin("department", "department.id","=","user.department_id")
  .innerJoin("budge", "budge.id","=","budge_id")
  .innerJoin("budge_type", "budge_type.id","=","budge.budge_type_id")
  .where("user_id" ,"=", user_id)
  .then((result) => {
    console.log("result: ", result)
    const data = result;
    res.status(200).send(data);  
  })
  .catch((err) => res.status(400).send(err));
});


app.post("/requestBudge", (req, res) => {
  console.log(req.body);

  knex('user_budge')
  .insert({
    user_id: req.body.user_id,
    budge_id: req.body.budge_id,
    url:req.body.url,
    certification_date:req.body.certification_date,
    status: 1,
    user_id_budge_id: `${req.body.user_id}${req.body.budge_id}`,
    unchecked: 0,
  })
  .then((result) => res.status(201).json(result))
  .catch((err) => res.status(400).send(err));
});

app.post("/memberList", (req, res) => {
  const user_id = req.body.user_id;

  knex.select({
    user_id: "id",
    user_name: "user_name",
    department_id: "department_id"
  })
  .from("user")
  .then((result) => {
    const data = result;
    res.status(200).send(data);  
  })
  .catch((err) => res.status(400).send(err));
});

app.get("/approveBudge", (req, res) => {
  const status = Number(req.query.status);
  knex.select({
    user_id: "user_id",
    user_name: "user_name",
    budge_id: "budge_id",
    status: "status",
    url: "url",
    certification_date: "certification_date",
    user_id_budge_id: "user_id_budge_id",
    budge_name: "budge_name",
    budge_type: "budge_type",
  })
  .from("user_budge")
  .innerJoin("user", "user.id","=","user_id")
  .innerJoin("department", "department.id","=","user.department_id")
  .innerJoin("budge", "budge.id","=","budge_id")
  .innerJoin("budge_type", "budge_type.id","=","budge.budge_type_id")
  .where("status" ,"=", status)
  .then((result) => {
    const data = result;
    res.status(200).send(data);  
  })
  .catch((err) => res.status(400).send(err));
});

app.get("/resultPublication", (req, res) => {
  const user_id = Number(req.query.status);
  knex.select({
    user_id: "user_id",
    user_name: "user_name",
    budge_id: "budge_id",
    status: "status",
    url: "url",
    certification_date: "certification_date",
    user_id_budge_id: "user_id_budge_id",
    budge_name: "budge_name",
    budge_type: "budge_type",
    unchecked: "unchecked",
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

app.patch("/approveBudge", (req, res) => {
  console.log("req: ",req.body);
  let user_id_budge_id = req.body.user_id_budge_id;
  let status= req.body.status;
  
  console.log("no166_user_id_budge_id: ", user_id_budge_id);


  knex("user_budge")
    .where("user_id_budge_id" ,"=", user_id_budge_id)
    .update({status: status, unchecked: 1})    
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).send(err));
});

app.patch("/resultPublication", (req, res) => {
  const user_id = Number(req.body.status);

  knex("user_budge")
    .where("user_id" ,"=", user_id)
    .update({unchecked: 0})
    .then((result) => res.status(200).json(result))
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

app.get("/assignBudge/budge-user", (req, res) => {
  const user_id = Number(req.query.user_id);
  knex.select({
    budge_id: "budge_id",
    status: "status",
    budge_name: "budge_name",
  })
  .from("user_budge")
  .innerJoin("user", "user.id","=","user_id")
  .innerJoin("department", "department.id","=","user.department_id")
  .innerJoin("budge", "budge.id","=","budge_id")
  .innerJoin("budge_type", "budge_type.id","=","budge.budge_type_id")
  .where("user_id" ,"=", user_id)
  .andWhere("status", "!=", 3)
  .then((result) => {
    const data = result;
    res.status(200).send(data);  
  })
});


app.listen(PORT, () => {
  console.log(`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`);
});
