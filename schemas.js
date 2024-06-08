// schemas.js
const Joi = require('joi');

// Define a schema for user data
const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  userSchema
};
