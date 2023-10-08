const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const route = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

route(app);

module.exports = app;
