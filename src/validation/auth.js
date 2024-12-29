import Joi from 'joi';

export const userRegisterShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userLoginShema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
