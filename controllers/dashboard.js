module.exports = {
    // GET /
    showDashboard(req, res) {
        res.render('index', {
            id: 'dashboard',
            title: 'Dashboard'
        });
    }
};
