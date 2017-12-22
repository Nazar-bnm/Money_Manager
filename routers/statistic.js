const router = require('express').Router();
// controller
const { statistic } = require('../controllers');

// statistic routes
router.get('/', statistic.getAllStatistic);
router.get('/:period', statistic.getStatisticByPeriod);

module.exports = router;