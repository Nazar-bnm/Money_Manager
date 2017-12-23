const router = require('express').Router();
// controller
const { profile } = require('../controllers');

// profile routes
router.get('/', profile.getProfile);

module.exports = router;