const mongoose = require('mongoose');
const { mongoUri } = require('../configs/db.config');


async function connectToDatabase() {
  await mongoose.connect(mongoUri, {dbName: "sumseszynData"});
}

module.exports = {
  connectToDatabase
}