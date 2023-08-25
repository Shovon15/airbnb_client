const express = require("express");
const { getCategory } = require("../controllers/categoryController");
const { getItemByCategory } = require("../controllers/itemController");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.get("/:category", getItemByCategory);

module.exports = categoryRouter;
