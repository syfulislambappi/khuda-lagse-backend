// dependencies
const Item = require('../models/Item')

// create blog
const createItem = async (req, res) => {
    const {title, description, price, image} = req.body;
    const singleItem = new Item({title, description, price, image})
    
    try {
        const item = await singleItem.save();
        res.json({message: 'item added successfully'});
    } catch(err) {
        res.json(err)
    }
}

const getItem = async (req, res) => {
    try {
        const items = await Item.find({})
        res.json(items)
    } catch(err) {
        res.json(err)
    }
}

const getSingleItem = async (req, res) => {
    const {id} = req.params;

    try {
        const items = await Item.find({_id: id})
        res.json(items)
    } catch(err) {
        res.json(err)
    }
}

const deleteItem = async (req, res) => {
    const {id} = req.params;
    try {
        const items = await Item.findByIdAndDelete(id)
        res.json(items)
    } catch(err) {
        res.json(err)
    }
}

module.exports = {createItem, getItem, getSingleItem, deleteItem}