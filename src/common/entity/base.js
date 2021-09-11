'use strict';

/**
 * The Base Entity class
 *
 * @class     BaseEntity
 * @summary   The BaseEntity Class
 */
class BaseEntity {
  /**
   * Constructor
   *
   * @param  {object} request  - The request
   * @summary initializes the database connection.get()
   */
  constructor(request) {
    this.request = request;
    this.model = {};
    this.connection = {get: () => request.getConnection()};
  }

  /**
   * Gets the database connection.get()
   *
   * @return {object}
   */
  getConnection() {
    return this.request.getConnection();
  }

  /**
   * Get the fillable attributes for the model.
   *
   * @return {Array}
   */
  getFillable() {
    return [];
  }
}

export default BaseEntity;
