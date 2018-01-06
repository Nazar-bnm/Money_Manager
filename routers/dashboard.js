const router = require('express').Router();
// controller
// const { main: { showMain } } = require('../controllers');
const { dashboard } = require('../controllers');

router.get('/', dashboard.showDashboard);

module.exports = router;
