const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: `${process.env.USERNAME}`,
  database: `${process.env.DB}`,
  password: `${process.env.PASSWORD}`,
  port: 5432, // The default port
});
