const { promises } = require('fs');
const path = require('path');
const _ = require('lodash');

const { Worker, client } = require('./models');
const { generateWorkers } = require('./utils/workers');

(async () => {
  const resetDbQueryString = (
    await promises.readFile(path.join(__dirname, '/sql/reset-db-query.psql'))
  ).toString();
  await client.query(resetDbQueryString);
  const workers = await Worker.bulkCreate(generateWorkers());


  client.end();
})();
