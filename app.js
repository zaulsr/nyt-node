const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");

// const globalError = require("./middleware/globalError");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// error handler
app.all("*", (req, res) => {
  return res.status(404).json({
    status: "error",
    message: "page not found !",
  });
});
// app.use(globalError);

module.exports = app;
