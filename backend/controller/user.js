const userDb = require("../model/user");
const Helper = require("../utilites/helper");

const getUser = async (req, res, next) => {
  const allUser = await userDb.find();
  Helper.helper(res, "alluser data ", allUser);
};

const userRegister = async (req, res, next) => {
  const name = await userDb.findOne({ name: req.body.name });
  if (name) {
    next(new Error("Name is already in use"));
    return;
  }
  const email = await userDb.findOne({ email: req.body.email });
  if (email) {
    next(new Error("Email is already in use"));
    return;
  }
  const phone = await userDb.findOne({ phone: req.body.phone });
  if (phone) {
    next(new Error("Phone is already in use"));
    return;
  }

  req.body.password = Helper.encodePassword(req.body.password);
  let results = await new userDb(req.body).save();
  Helper.helper(res, "user register successfully", results);
};

const userLogin = async (req, res, next) => {
  let email = await userDb.findOne({ email: req.body.email }).select("-__v");
  if (email) {
    let userValid = Helper.comparePassword(req.body.password, email.password);
    if (userValid) {
      let user = email.toObject();
      delete user.password;
      user.token = Helper.makeToken(user);
      Helper.setData(user._id, user);
      Helper.helper(res, "login successfully", user);
    } else {
      next(new Error("Password is invalid"));
    }
  } else {
    next(
      new Error("Your email and password is something wrong , pls try again")
    );
  }
};

module.exports = {
  getUser,
  userRegister,
  userLogin,
};
