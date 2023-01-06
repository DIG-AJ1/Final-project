//
const knex = require("knex");
const knexConfig = require("./knexfile");

// const environment = process.env.DATABASE_URL ? "production" : "development";
const environment = "production";

module.exports = knex(knexConfig[environment]);