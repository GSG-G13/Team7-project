const Joi = require("joi");
const loginSchema = Joi.object({
  userName: Joi.string().alphanum().required().min(3).max(7),

  pasWord: Joi.string().pattern(new RegExp("[a-zA-Z0-9]{6,30}$")),
});

module.exports = loginSchema;
