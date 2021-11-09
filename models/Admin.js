const {Schema, model} = require('mongoose');

  const adminSchema = new Schema({
    email:  String, // String is shorthand for {type: String}
    password: String,
    isLoggedIn: {type: Boolean, default: false},
  });

const Admin = model('Admin', adminSchema);

module.exports = Admin;