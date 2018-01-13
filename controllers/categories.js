const Categories = require('../models/categories');
const VIEWS = 'categories';

module.exports = {
  async findCatgory(req, res, next) {
    let category = await Categories.findOne(req.params.category)

    if (!category) {
      let error = new Error('Category not found');
      error.status = 404;
      next(error);
    } else {
      req.category = category;

      next();
    }
  },
  // GET /categories
  async getAllCategories(req, res) {
    let categories = await Categories.find();

    // Categories.find()
    //   .then((categories) => {
    //       res.render('categories', {
    //         id: 'categories',
    //         title: 'Categories',
    //         categories
    //       });
    //     })


    res.render(VIEWS, {
      id: 'categories',
      title: 'Categories',
      categories
    });
  },

  // GET /categories/:category
  getCategory(req, res) {
    res.render(`${VIEWS}/category`, {
      id: 'categories',
      title: req.category.title,
      category: req.category
    });
  }
};
