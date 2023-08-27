const express = require("express");

const { getItems, getFilterItems } = require("../controllers/itemController");

const itemRouter = express.Router();

itemRouter.get("/", getItems);
itemRouter.get("/filtered", getFilterItems);

module.exports = itemRouter;
