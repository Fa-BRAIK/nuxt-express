import Joi from '@hapi/joi'

export const CreateUserValidator = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
})

export const LoginValidator = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
})
