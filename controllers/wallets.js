module.exports = {
  // GET /categories
  getAllWallets(req, res) {
    {
      res.render('wallets', {
        id: 'wallets',
        title: 'Wallets'
      });
    }
  },

  // GET /wallets/:wallet
  getWallet(req, res) {
    res.send(`Show wallets by ${req.params.wallet}`);
  }
};