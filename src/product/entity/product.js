'use strict';

import BaseEntity from '../../common/entity/base';

/**
 * The Product Entity
 *
 * @class     ProductEntity
 * @summary   Provides helper for product db ops
 */
class ProductEntity extends BaseEntity {
  /**
   * Constructor
   *
   * @param  {object} request  - The request
   */
  constructor(request) {
    super(request);
  }

  /**
   * Get All Products
   *
   * @async
   * @return {Promise}
   */
  async getAll() {
    try{
      let fields = ['id', 'name', 'description', 'price', 'image_url'];
      let products = await this.connection.get()
                          .select(...fields)
                          .from('slick_product');

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
    try{
      let fields = ['id', 'name', 'description', 'price', 'image_url'];
      let product = await this.connection.get()
                          .first(...fields)
                          .from('slick_product')
                          .where({
                            id: id
                          });

      if(!product || !product.id) {
        throw new Error(`Product not found id: ${id}`);
      }

      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductEntity;
