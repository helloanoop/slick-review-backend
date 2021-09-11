
'use strict';

import _ from 'lodash';
import HttpStatus from 'http-status';
import Request from '../../common/request';
import ProductManager from '../manager/product';

/**
 * The Product Controller
 *
 * @class     ProductController
 * @summary   Provides helper for routes on product
 */
class ProductController {
  /**
   * Handles get all products request
   *
   * @static
   * @param  {object}   req  - Express request object
   * @param  {object}   res  - Express response object
   * @param  {function} next - callback
   * @return {undefined}
   */
  static getAll(req, res, next) {
    let request = new Request(req);
    let productManager = new ProductManager(request);

    productManager
      .getAll()
      .then((products) => {
        return  res.status(HttpStatus.OK).json(products);
      })
      .catch((error) => {
        console.log(error);
        return  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Unable to fetch products'
        });
      });
  }

  /**
   * Handles get product by id request
   *
   * @static
   * @param  {object}   req  - Express request object
   * @param  {object}   res  - Express response object
   * @param  {function} next - callback
   * @return {undefined}
   */
  static findById(req, res, next) {
    let request = new Request(req);
    let productManager = new ProductManager(request);
    let id = req.params.id;

    productManager
      .findById(id)
      .then((product) => {
        return  res.status(HttpStatus.OK).json(product);
      })
      .catch((error) => {
        consolfindByIde.log(error);
        return  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Unable to fetch product by id'
        });
      });
  }

  /**
   * Handles add product rating request
   *
   * @static
   * @param  {object}   req  - Express request object
   * @param  {object}   res  - Express response object
   * @param  {function} next - callback
   * @return {undefined}
   */
  static addRating(req, res, next) {
    let request = new Request(req);
    let productManager = new ProductManager(request);
    let id = req.params.id;

    productManager
      .addRating(id, req.body.rating, req.body.review)
      .then((rating) => {
        return  res.status(HttpStatus.OK).json(rating);
      })
      .catch((error) => {
        console.log(error);
        return  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Unable to add product rating'
        });
      });
  }
}

export default ProductController;
