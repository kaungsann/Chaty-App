const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "role" },
  permit: { type: Schema.Types.ObjectId, ref: "permit" },
  create: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
