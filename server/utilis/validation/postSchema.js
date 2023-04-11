const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  post_img: Joi.string().required(),
  post_date:Joi.date().required(),
});

module.exports = postSchema;