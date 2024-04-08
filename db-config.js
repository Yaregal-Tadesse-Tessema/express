const { DataSource } = require("typeorm");
const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "yaya@1984",
  database: "test",
  entities: [__dirname + "/entities/*.js"], // Specify path to your entities
  synchronize: true, // Automatically synchronize database schema with entities
});
module.exports = myDataSource;
