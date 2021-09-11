'use strict';

import {Router} from 'express';
import ProductController from './controller/product';

let router = new Router();

router.get('/api/slick/v1/products', ProductController.getAll);
router.get('/api/slick/v1/products/:id', ProductController.findById);
router.post('/api/slick/v1/products/:id/rating', ProductController.addRating);

export default router;
