const AppError = require("../utils/appError");
const userRouter = require("./userRoutes");
const globalErrorHandler = require("../controllers/errorController");

function route(app) {
  app.use("/api/v1/users", userRouter);

  app.all("*", (req, res, next) => {
    next(
      new AppError(`Can't not  find ${req.originalUrl} on this server!`, 404)
    );
  });
  app.use(globalErrorHandler);
}

module.exports = route;
