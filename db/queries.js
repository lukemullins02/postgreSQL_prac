const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

async function getUsernameQuery(txt) {
  const { rows } = await pool.query(
    `SELECT * FROM usernames WHERE username LIKE '%${txt}%'`,
  );
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsernameQuery,
  deleteAllUsernames,
};
