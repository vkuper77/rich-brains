const express = require("express");
const clientController = require("../controllers/clientController.js");

const clientRouter = express.Router();

clientRouter.use(/\/add|\/remove|\/edit|\/get/,clientController.checkToken);

clientRouter.delete("/remove", clientController.deleteUser);

clientRouter.put("/edit", clientController.editUser);

clientRouter.post("/add", clientController.addUser);

clientRouter.post("/get", clientController.getUser);

clientRouter.get("/", clientController.getUsers);

module.exports = clientRouter;