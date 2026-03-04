const renderIndex = (req, res) => {
  console.log("usernames will be logged here - wip");
};

const renderNew = (req, res) => {
  res.render("form");
};

const createNew = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};

module.exports = {
  renderIndex,
  renderNew,
  createNew,
};
