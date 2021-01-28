const mongoose = require('mongoose');

const db = (database) => (
  mongoose.connect(`mongodb://mongo/${database}`, { useNewUrlParser: true }, { useUnifiedTopology: true })
);
module.exports = db;
