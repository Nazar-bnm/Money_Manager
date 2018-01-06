const router = require('express').Router();
// controller
const { wallets } = require('../controllers');

// wallets routes
router.get('/', wallets.getAllWallets);
router.get('/:wallet', wallets.getWallet);

module.exports = router;