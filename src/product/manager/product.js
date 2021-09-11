'use strict';

import ProductEntity from '../entity/product';
import ProductRatingEntity from '../entity/product-rating';

/**
 * The Product Manager
 *
 * @class     ProductManager
 * @summary   Provides helper for CRUD ops on Products
 */
class ProductManager {
  /**
   * Constructor
   *
   * @param  {object} request - The request model
   * @summary initializes the ProductManager
   */
  constructor(request) {
    this.request = request;
  }

  /**
   * Gets all the products
   *
   * @async
   * @return {Promise}
   */
  async getAll() {
    try {
      let productEntity = new ProductEntity(this.request);
      let products = await productEntity.getAll();

      return products;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Find a product by id
   *
   * @async
   * @param  {Number} id  - The product id
   * @return {Promise}
   */
  async findById(id) {
    try {
      let productEntity = new ProductEntity(this.request);
      let productRatingEntity = new ProductRatingEntity(this.request);
      let product = await productEntity.findById(id);

      product.ratings = await productRatingEntity.getAllByProductId(id);

      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Add product rating
   *
   * @async
   * @param  {Number} productId - The product id
   * @param  {Number} rating    - The product rating
   * @param  {String} review    - The product review
   * @return {Promise}
   */
  async addRating(productId, rating, review) {
    try {
      let productRatingEntity = new ProductRatingEntity(this.request);
      let createdRatingId = await productRatingEntity.create(productId, rating, review);

      return await productRatingEntity.findById(createdRatingId);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductManager;
