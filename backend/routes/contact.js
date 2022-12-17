const { Route } = require("express");
const express = require("express");

const ContactRouter = express.Router();
const {
  deleteContact,
  GetById,
  UpdateContact,
  AddContact,
  GetContact,
} = require("../controllers/contact");

ContactRouter.get("/", GetContact);

ContactRouter.delete("/:id", deleteContact);

ContactRouter.post("/", AddContact);

ContactRouter.put("/:id", UpdateContact);

ContactRouter.get("/:id", GetById);
module.exports = ContactRouter;
