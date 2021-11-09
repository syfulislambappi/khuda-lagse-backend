const { createBlog, getBlog, getSingleBlog } = require('../controllers/blogController');

// dependencies
const router = require('express').Router();


// blog post method
router.post('/', createBlog)
router.get('/', getBlog)
router.get('/:id', getSingleBlog)


module.exports = router;