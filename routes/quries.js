const express = require("express");
const queryrouter = express.Router();
const { getConnection } = require("typeorm");
queryrouter.get("/", (req, res) => {
  res.send("query router root");
});
queryrouter.get("/users", async (req, res) => {
  const userRepository = getConnection().getRepository("User");
  const result = await userRepository.find();
  res.json(result);
});

module.exports = queryrouter;
