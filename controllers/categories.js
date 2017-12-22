module.exports = {
  // GET /categories
  getAllCategories(req, res) {
    res.send('Show all categories');
  },

  // GET /categories/:category
  getCategory(req, res) {
    res.send(`Show ${req.params.category}`);
  }
};