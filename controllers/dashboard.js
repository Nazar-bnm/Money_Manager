module.exports = {
  // GET /
  showDashboard(req, res) {
    res.render('dashboard', {
      id: 'dashboard',
      title: 'Dashboard'
    });
  }
};
