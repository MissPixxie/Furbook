const PORT = 8001;
const DB = require("./fetchDB");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

// ROUTES
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dogsRouter = require("./routes/dogs");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const placesRouter = require("./routes/places");
const eventsRouter = require("./routes/events");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

mongoose.connect(DB).then(() => {
  app.listen(PORT, () => console.log("Servern körs på port " + PORT));
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function (callback) {
    console.log("Kopplingen lyckades!");
  });
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/dogs", dogsRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/places", placesRouter);
app.use("/events", eventsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get("/", (req, res) => {
  console.log("Welcome");
});

module.exports = app;
