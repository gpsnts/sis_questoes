const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER || "error fetching: DB_USER";
const DB_PORT = process.env.DB_PORT || "error fetching: DB_PORT";
const DB_PASSWORD = process.env.DB_PASSWORD || "error fetching: DB_PASSWORD";
const DB_HOST = process.env.DB_HOST || "error fetching: DB_HOST";

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
  console.log(`DB_USER: ${DB_USER}\nDB_PORT: ${DB_PORT}\nDB_PASSWORD: ${DB_PASSWORD}\nDB_HOST: ${DB_HOST}`)
});
