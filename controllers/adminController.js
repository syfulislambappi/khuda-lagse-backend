const Admin = require('../models/Admin')

const getAdmin = async (req, res) => {
    try {
        const admins = await Admin.find({})
        res.json(admins)
    } catch(err) {
        res.json(err)
    }
}

const logOutAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(`618a5f82c7b1825cdb04b79d`)
        admin.isLoggedIn = false;
        await admin.save()
        res.json(admin)
    } catch(err) {
        res.json(err)
    }
}

const logInAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(`618a5f82c7b1825cdb04b79d`)
        admin.isLoggedIn = true;
        await admin.save()
        res.json(admin)
    } catch(err) {
        res.json(err)
    }
}


module.exports = {getAdmin, logOutAdmin, logInAdmin}