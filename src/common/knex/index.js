'use strict';

import knex from 'knex';
import HashMap from 'hashmap';

let map = new HashMap();

class KnexHelper {
  constructor(database) {
    let key = this.getKey(database);

    if(map.has(key)) {
      return;
    }

    let connection = knex({
      client: 'mysql',
      connection: database,
      pool: {
        min: 0,
        max: 1000
      }
    });

    map.set(key, connection);
  }

  getKey(database) {
    return JSON.stringify(database);
  }

  getConnection(database) {
    return map.get(this.getKey(database));
  }

  destroyConnection(database) {
    let key = this.getKey(database);
    let connection = map.get(key);
    connection.destroy();
    map.delete(key);
  }
}

export default KnexHelper;
