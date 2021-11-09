const { createItem, getItem, getSingleItem, deleteItem } = require('../controllers/itemController');

// dependencies
const router = require('express').Router();


// blog post method
router.post('/', createItem);
router.get('/', getItem);
router.delete('/:id', deleteItem);
router.get('/:id', getSingleItem);


module.exports = router;