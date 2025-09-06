const Joi = require("joi");

const authSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeatPassword: Joi.ref("password"),

  role: Joi.string().valid("admin", "user"),
});

module.exports = { authSchema };
