module.exports = {
  // GET /categories
  getAllStatistic(req, res) {
    res.send('Show all statistic');
  },

  // GET /categories/:category
  getStatisticByPeriod(req, res) {
    res.send(`Show statistic by ${req.params.period}`);
  }
};