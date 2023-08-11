const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require("async-redis").createClient();
module.exports = {
  helper: (res, mes = "", results = []) => {
    res.status(200).json({
      con: true,
      mes,
      results,
    });
  },
  encodePassword: (password) => bcrypt.hashSync(password),
  comparePassword: (plain, encode) => bcrypt.compareSync(plain, encode),
  makeToken: (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1hr" }),
  setData: async (id, value) =>
    await redis.set(id.toString(), JSON.stringify(value)),
  getData: async (id) => JSON.parse(await redis.get(id.toString())),
  dropData: async (id) => await redis.del(id.toString()),
};
