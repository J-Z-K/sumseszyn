const mongoose = require('mongoose');
const { MONGOURI, MONGODATABASENAME } = require('../configs/db.config');


async function connectToDatabase() {
  await mongoose.connect(MONGOURI, {dbName: MONGODATABASENAME});
}

module.exports = {
  connectToDatabase
}