const {Schema, model} = require('mongoose');

  const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    description: String,
    image:   String,
    date: { type: Date, default: Date.now }
  });

const Blog = model('Blog', blogSchema);

module.exports = Blog;