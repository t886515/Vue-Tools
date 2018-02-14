const Mongoose = require('mongoose');
const { ElementSchema } = required('./schema');


Mongoose.Promise = global.Promise;
//check if this promise on global does exist..
console.log(global.Promise);

const ElementModel = Mongoose.model('Element', ElementSchema);

module.exports = {
  ElementModel
}
