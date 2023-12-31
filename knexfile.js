require("dotenv").config();
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "mysql",
  connection: {
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    charset: "utf8",
  },
};