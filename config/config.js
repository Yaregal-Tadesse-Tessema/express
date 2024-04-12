module.exports = {
  DB: process.env.DEV_DB || "db",
  DB_PORT: process.env.DB_PORT || "5432",
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_TYPE: process.env.DB_TYPE,
  DB_NAME: process.env.DB_NAME,
};
