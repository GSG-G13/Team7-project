const Joi = require ('joi');
const SignUpSchema = Joi.object({
    

    username: Joi.string().alphanum().required().min(3).max(7),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{6,30}$')),
    confirmPassword: Joi.ref('password'),
    role: Joi.string().pattern(reg),
    mobile: Joi.string().pattern(new RegExp('059{1}[9528]{1}[0-9]{6}'))
  })

 module.exports = SignUpSchema;