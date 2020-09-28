const _ = require('lodash');
const name = ['Petya', 'Vasya', 'Vova', 'Dima', 'Kolya','Olya', 'Masha', 'Vera', 'Tanya', 'Ira'];

const generateWorkers = key => ({
  name: name[_.random(0, name.length - 1, false)],
  age: _.random(18,65),
  salary: _.random(200, 2000),

});

module.exports.generateWorkers = (length = 30) => {
  const workers = [];

  for (let i = 0; i < length; ++i) {
    workers.push(generateWorkers(i));
  }

  return workers;
};
