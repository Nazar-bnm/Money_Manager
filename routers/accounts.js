const router = require('express').Router();
// controller
const { accounts } = require('../controllers');

// accounts routes
router.get('/', accounts.getAllAccounts);
router.get('/:account', accounts.getAccount);

module.exports = router;