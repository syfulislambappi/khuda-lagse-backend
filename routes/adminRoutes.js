const { getAdmin, logOutAdmin, logInAdmin } = require('../controllers/adminController');

// dependencies
const router = require('express').Router();


// blog post method
router.get('/', getAdmin);
router.put('/', logOutAdmin);
router.put('/login', logInAdmin);


module.exports = router;