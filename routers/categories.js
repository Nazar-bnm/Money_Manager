const router = require('express').Router();
// controller
const { categories } = require('../controllers');

// categories routes
router.get('/', categories.getAllCategories);
router.get('/:category', categories.getCategory);

module.exports = router;