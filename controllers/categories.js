module.exports = {
  // GET /categories
  getAllCategories(req, res) {
    {
      res.render('categories', {
        id: 'categories',
        title: 'Categories'
      });
    }
  },

  // GET /categories/:category
  getCategory(req, res) {
    res.send(`Show ${req.params.category}`);
  }
};