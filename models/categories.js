const categories = require('../data/categories');

class Categories {
  static find() {
    return Promise.resolve(categories);
  }

  static findOne(id) {
    return Promise.resolve(categories.find(category => category.id === id));
  }
}

module.exports = Categories;