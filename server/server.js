const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const db = require("./config/db");

db.connect();

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
