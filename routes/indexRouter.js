const { Router } = require("express");
const indexController = require("../controller/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/new", indexController.getNew);
indexRouter.post("/new", indexController.postNew);
indexRouter.get("/message", indexController.getMessage);

module.exports = indexRouter;
