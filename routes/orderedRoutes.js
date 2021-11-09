const { createOrder, getOrder, deleteOrder, updateOrderStatus } = require('../controllers/orderedController');

// dependencies
const router = require('express').Router();


// blog post method
router.post('/', createOrder);
router.get('/', getOrder);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrderStatus);


module.exports = router;