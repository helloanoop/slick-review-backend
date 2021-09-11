'use strict';

import {Router} from 'express';
import ProductController from './controller/product';

let router = new Router();

router.get('/api/slick/v1/products', ProductController.getAll);

export default router;
