//
const knex = require("knex");
const knexConfig = require("./knexfile");

// const environment = process.env.DATABASE_URL ? "production" : "development";

// const environment= "production"
const environment= "development"


module.exports = knex(knexConfig[environment]);