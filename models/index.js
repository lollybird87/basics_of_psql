const dbConfig = require('./../configs/db.json');
const Worker = require('./worker');
const { Client } = require('pg');

const dbClient = new Client(dbConfig);

dbClient.connect();

Worker._client = dbClient;

module.exports = {
  client: dbClient,
  Worker,
};
