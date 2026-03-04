const { Router } = require("express");
const {
  getUsernames,
  renderNew,
  createUsernamePost,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getUsernames);

indexRouter.get("/new", renderNew);

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;
