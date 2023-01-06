// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: {
  //     user: process.env.POSTGRES_USER || "user",
  //     database: process.env.POSTGRES_DB || "finalproject",
  //     password: process.env.PASSWORD
  //   },
  //   migrations: {
  //     directory: "./data/migrations",
  //   },
  //   seeds: { directory: "./data/seeds" },
  // },

  production: {
    client: 'pg',
    // connection: process.env.DATABASE_URL
    connection: {
      host: "http://aws-finalproject-infra-web.cmrbxlzkmnbb.ap-northeast-1.rds.amazonaws.com/",
      user: "root",
      password: "password",
      database: "finalproject"
    },
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  }

};
