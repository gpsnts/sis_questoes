const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER || "ERROR";
const DB_PORT = process.env.DB_PORT || "ERROR";
const DB_PASSWORD = process.env.DB_PASSWORD || "ERROR";
const DB_HOST = process.env.DB_HOST || "ERROR";

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>");
});

app.get("/envs", (req, res) => {
  res.send(`DB_USER: ${DB_USER}\nDB_PORT: ${DB_PORT}\nDB_PASSWORD: ${DB_PASSWORD}\nDB_HOST: ${DB_HOST}`);
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});

module.exports = app;
