const {Schema, model} = require('mongoose');

  const orderedSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    email: String,
    productName: String,
    price: String,
    address: String,
    image:   String,
    status: {
        type: String,
        enum: ['Delivering', 'Delivered'],
        default: 'Delivering'
    },
    date: { type: Date, default: Date.now }
  });

const Ordered = model('Ordered', orderedSchema);

module.exports = Ordered;