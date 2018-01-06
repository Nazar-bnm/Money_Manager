module.exports = {
  // GET /categories
  getAllStatistic(req, res) {
    {
      res.render('statistic', {
        id: 'statistic',
        title: 'Statistic'
      });
    }
  },

  // GET /categories/:category
  getStatisticByPeriod(req, res) {
    res.send(`Show statistic by ${req.params.period}`);
  }
};