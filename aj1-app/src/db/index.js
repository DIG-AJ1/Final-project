//
const knex = require("knex");
const knexConfig = require("./knexfile");

// const environment = "production"; // AWS開発用
const environment = "development"; // ローカル開発用


module.exports = knex(knexConfig[environment]);