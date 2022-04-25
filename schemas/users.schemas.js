const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(5).max(20);
const email = Joi.string().email()
const password = Joi.string().alphanum().min(3).max(20);

// const getUserSchema = Joi.object({
//   id: id.required()
// })

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
});

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

module.exports = {
  createUserSchema,
  loginUserSchema
}