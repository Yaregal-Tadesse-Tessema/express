const express = require("express");
const commandRouter = express.Router();
const User = require("../entities/user");
const { createConnection, getRepository } = require("typeorm");
commandRouter.post("/user", async (req, res) => {
  console.log(req.body);
  const userRepository = getRepository(User);
  const newUser = req.body;
  const savedUser = await userRepository.save(newUser);
  res.send(savedUser);
});
module.exports = commandRouter;
