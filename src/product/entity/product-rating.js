'use strict';

import _ from 'lodash';
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
   * Find rating by id
   *
   * @async
   * @param  {Number} id  - The rating id
   * @return {Promise}
   * @throws {LibError}
   */
  async findById(id) {
    try{
      let fields = ['id', 'rating', 'review'];
      let rating = await this.connection.get()
                          .first(...fields)
                          .from('slick_product_rating')
                          .where({
                            id: id
                          });

      if(!rating || !rating.id) {
        throw new Error(`Rating not found id: ${id}`);
      }

      return rating;
    } catch (error) {
      return Promise.reject(error);
    }
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
      let fields = ['id', 'rating', 'review'];
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

  /**
   * Add product rating
   *
   * @async
   * @param  {Number} productId - The product id
   * @param  {Number} rating    - The product rating
   * @param  {String} review    - The product review
   * @return {Promise}
   */
  async create(productId, rating, review) {
    try{
      let createdRatingIds = await this.connection.get()
                              .insert({
                                product_id: productId,
                                rating: rating,
                                review: review
                              })
                              .into('slick_product_rating');

      if(!createdRatingIds || !_.isArray(createdRatingIds) || !createdRatingIds.length) {
        throw new Error(`Unable to add a rating to product`);
      }

      return createdRatingIds[0];
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ProductRatingEntity;
