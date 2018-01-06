module.exports = {
  // GET /profile
  getProfile(req, res) {
    {
      res.render('profile', {
        id: 'profile',
        title: 'Profile'
      });
    }
  }
};