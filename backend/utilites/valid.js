module.exports = {
  validBody: (schema) => {
    return (req, res, next) => {
      const results = schema.validate(req.body);
      if (results.error) {
        next(new Error(results.error.details[0].message));
      } else {
        next();
      }
    };
  },
};
