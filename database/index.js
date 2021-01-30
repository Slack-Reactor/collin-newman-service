/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = (database) => (
  mongoose.connect(`mongodb://mongo:27017/${database}`, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log('Connected to MONGODB'))
    .catch((err) => console.log(err))
);
module.exports = db;
