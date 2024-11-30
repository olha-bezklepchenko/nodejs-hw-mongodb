import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required()
    .messages({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
      'string.empty': 'Phone number cannot be empty',
      'any.required': 'Phone number is required',
    }),

  email: Joi.string().email().messages({
    'string.base': 'Email should be a valid string.',
    'string.email': 'Email must contain "@" and follow a valid format.',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Contact type must be one of [work, home, personal]',
      'any.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .messages({
      'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX',
      'string.empty': 'Phone number cannot be empty',
    }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a valid string.',
    'string.email': 'Email must contain "@" and follow a valid format.',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be one of [work, home, personal]',
  }),
});
