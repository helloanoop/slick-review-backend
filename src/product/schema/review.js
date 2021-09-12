'use strict';

import Joi from 'joi';

const review = Joi.object().keys({
  rating: Joi.number().integer().valid(0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5),
  review: Joi.string().min(1).max(2048),
  product_id: Joi.number().integer().min(1).max(1000000)
}).requiredKeys('rating', 'review', 'product_id');

export default review;
