var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  image: String
});

var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
