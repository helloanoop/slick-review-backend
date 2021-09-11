'use strict';

import BaseEntity from '../../common/entity/base';

/**
 * The ProductRating Entity
 *
 * @class     ProductRatingEntity
 * @summary   Provides helper for product rating db ops
 */
class ProductRatingEntity extends BaseEntity {
  /**
   * Constructor
   *
   * @param  {object} request  - The request
   */
  constructor(request) {
    super(request);
  }

  /**
   * Get all ratings of a product by id
   *
   * @async
   * @param  {Number} id  - The product id
   * @return {Promise}
   * @throws {LibError}
   */
  async getAllByProductId(id) {
    try{
      let fields = ['id', 'rating', 'comment'];
      let ratings = await this.connection.get()
                          .select(...fields)
                          .from('slick_product_rating')
                          .where({
                            product_id: id
                          });

      return ratings;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductRatingEntity;
