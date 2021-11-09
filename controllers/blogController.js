// dependencies
const Blog = require('../models/Blog')

// create blog
const createBlog = async (req, res) => {
    const {title, description, image} = req.body;
    const singleBlog = new Blog({title, description, image})
    
    try {
        const blog = await singleBlog.save();
        res.json({message: 'blog added successfully'});
    } catch(err) {
        res.json(err)
    }
}

const getBlog = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.json(blogs)
    } catch(err) {
        res.json(err)
    }
}

const getSingleBlog = async (req, res) => {
    const {id} = req.params;

    try {
        const blogs = await Blog.find({_id: id})
        res.json(blogs)
    } catch(err) {
        res.json(err)
    }
}

module.exports = {createBlog, getBlog, getSingleBlog}