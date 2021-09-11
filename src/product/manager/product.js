'use strict';

import ProductEntity from '../entity/product';

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
   * @throws {LibError}
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
   * @throws {LibError}
   */
  async findById(id) {
    try {
      let productEntity = new ProductEntity(this.request);
      let products = await productEntity.findById(id);

      return products;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductManager;
