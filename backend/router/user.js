const userRouter = require("express").Router();

const userController = require("../controller/user");

const { registerSchema, loginSchema } = require("../utilites/schema");
const { validBody } = require("../utilites/valid");

userRouter.get("/", userController.getUser);

userRouter.post(
  "/register",
  validBody(registerSchema),
  userController.userRegister
);

userRouter.post("/login", validBody(loginSchema), userController.userLogin);

module.exports = userRouter;
