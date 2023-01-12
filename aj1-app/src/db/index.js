//
const knex = require("knex");
const knexConfig = require("./knexfile");

// const environment =  "production" ; 
const environment =  "development" ; 

module.exports = knex(knexConfig[environment]);