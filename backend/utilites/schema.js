const joi = require("joi");

module.exports = {
  registerSchema: joi.object({
    name: joi.string().required(),
    age: joi.string().min(0).max(2).required(),
    gender: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().min(8).max(12).required(),
    password: joi.string().min(8).max(24).required(),
  }),
  loginSchema: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(24).required(),
  }),
};
