const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const ItemSchema = new Schema({
  name: String,
  price: String,
  stock: String,
  tag: String
},
{
  timestamps: true
});

const item = mongoose.model('User', ItemSchema);

module.exports = item