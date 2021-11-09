const {Schema, model} = require('mongoose');

  const itemSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    description: String,
    price: String,
    image:   String,
    date: { type: Date, default: Date.now }
  });

const Item = model('Item', itemSchema);

module.exports = Item;