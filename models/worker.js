const _ = require('lodash');

class Worker {
  static _client = null;
  static tableName = 'workers';

  static async bulkCreate(values) {
    const valuesString = values
      .map(
        ({ name, age, salary }) =>
          `('${name}','${age}', ${salary})`
      )
      .join(',');

    const { rows } = await this._client.query(`INSERT INTO ${this.tableName}\n
    ("name", "age", "salary")\n
    VALUES ${valuesString}\n
    RETURNING *;`);

    return rows;
  }
}

module.exports = Worker;
