// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER || "user",
      database: process.env.POSTGRES_DB || "finalproject",
      password: process.env.PASSWORD
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

// development: {
//   client: 'pg',
//   connection: {
//     host: "aws-test2-infra-db-postgres.cmrbxlzkmnbb.ap-northeast-1.rds.amazonaws.com",
//     user: "root",
//     password: "test2password",
//     database: "finalproject",
//     charset: "utf8"
//   },
//   ssl: {
//     rejectUnauthorized: false
//   },
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: { directory: "./data/seeds" },
//   }
}
