const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ElementSchema = new Schema({
  name: String,
  value: Number,
})

module.exports = {
  ElementSchema
}
