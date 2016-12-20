const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {type: String, required: true};

const schema = new Schema({

  name: requiredString,
  type: requiredString

});

module.exports = mongoose.model('Album', schema);