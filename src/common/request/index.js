'use strict';

import config from 'config';
import KnexHelper from '../knex';

let connection = null;

/**
 * The Request class
 *
 * @class     Request
 * @summary   The Request Class
 */
class Request {
  /**
   * Constructor
   *
   * @param  {object} req - The express req object
   * @summary initializes the database connection.get()
   */
  constructor(req) {
    this.req = req;

    if(!connection) {
      this.knexHelper = new KnexHelper(config.database);
      connection = this.knexHelper.getConnection(config.database);
    }

    this.connection = connection;
  }

  /**
   * Gets the database connection
   *
   * @return {object}
   */
  getConnection() {
    return this.connection;
  }
}

export default Request;
