// data
const users = require('../data/users');

module.exports = {
  // GET /accounts
  getAllAccounts(req, res) {
    res.send('Show all accounts');
  },

  // GET /accounts/:account
  getAccount(req, res) {
    res.render('index', { user: users[req.params.account] });
    // res.send(`Show ${req.params.account}`);
  }
};
