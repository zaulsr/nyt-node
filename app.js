const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const { Exception } = require("./utils");
const globalError = require("./middleware/globalError");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// error handler
app.all("*", (req, res, next) => {
  return next(new Exception("Page not found", 404));
});
app.use(globalError);

module.exports = app;
