const express = require("express");
const queryrouter = express.Router();
const { getConnection } = require("typeorm");
queryrouter.get("/", (req, res) => {
  res.send("query router root");
});
queryrouter.get("/users", async (req, res) => {
  try {
    console.log("ddddddddddddddddddddd", process.env.DB);
    console.log("ddddddddddddddddddddd", process.env.DB_PORT);
    console.log("ddddddddddddddddddddd", process.env.DB_TYPE);
    console.log("ddddddddddddddddddddd", process.env.DB_USER);
    console.log("ddddddddddddddddddddd", process.env.DB_PASSWORD);
    console.log("ddddddddddddddddddddd", process.env.DEV_DB);
    const userRepository = getConnection().getRepository("User");
    const result = await userRepository.find();
    const data = { result: result, total: 10 };
    res.json(data);
  } catch (error) {
    throw error;
  }
});

module.exports = queryrouter;
