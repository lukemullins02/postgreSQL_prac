const { Router } = require("express");
const {
  renderIndex,
  renderNew,
  createNew,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderIndex);

indexRouter.get("/new", renderNew);

indexRouter.post("/new", createNew);

module.exports = indexRouter;
