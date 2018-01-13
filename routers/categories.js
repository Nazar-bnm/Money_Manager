const router = require('express').Router();
// controller
const { categories: {
  getAllCategories,
  findCatgory,
  getCategory
} } = require('../controllers');

// categories routes
router.get('/', getAllCategories);
router.get('/:category', findCatgory, getCategory);

module.exports = router;