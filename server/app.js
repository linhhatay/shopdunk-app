const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const route = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

route(app);

module.exports = app;
