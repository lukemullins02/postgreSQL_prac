const { Router } = require("express");
const {
  getUsernames,
  renderNew,
  createUsernamePost,
  deleteUsernames,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getUsernames);

indexRouter.get("/new", renderNew);

indexRouter.post("/new", createUsernamePost);

indexRouter.get("/delete", deleteUsernames);

module.exports = indexRouter;
