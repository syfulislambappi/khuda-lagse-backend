// dependencies
const Ordered = require('../models/Ordered')

// create blog
const createOrder = async (req, res) => {
    const {name, email, productName, price, address, image} = req.body;
    const orderItem = new Ordered({name, email, productName, price, address, image})
    
    try {
        const order = await orderItem.save();
        res.json({message: 'ordered successfully'});
    } catch(err) {
        res.json(err)
    }
}

const getOrder = async (req, res) => {
    try {
        const orders = await Ordered.find({})
        res.json(orders)
    } catch(err) {
        res.json(err)
    }
}

const deleteOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const items = await Ordered.findByIdAndDelete(id)
        res.json({message: 'order rejected'})
    } catch(err) {
        res.json(err)
    }
}

const updateOrderStatus = async (req, res) => {
    const {id} = req.params;
    try {
        const items = await Ordered.findByIdAndUpdate(id, {status: 'Delivered'})
        res.json({message: 'order status updated'})
    } catch(err) {
        res.json(err)
    }
}

module.exports = {createOrder, getOrder, deleteOrder, updateOrderStatus}