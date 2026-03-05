const db = require("../db/queries");

async function getUsernames(req, res) {
  const { search } = req.query;

  console.log(search);

  let usernames;

  if (search) {
    usernames = await db.getUsernameQuery(search);
  } else {
    usernames = await db.getAllUsernames();
  }

  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function renderNew(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  renderNew,
  createUsernamePost,
};
