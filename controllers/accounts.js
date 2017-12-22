module.exports = {
  // GET /accounts
  getAllAccounts(req, res) {
    res.send('Show all accounts');
  },

  // GET /accounts/:account
  getAccount(req, res) {
    res.send(`Show ${req.params.account}`);
  }
};