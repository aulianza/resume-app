const workRoute = require('../modules/work/routes/index');

module.exports = app => {
  app.route('/api').get((req, res) => {
    res.json({
      message: 'no route and no API found with those values'
    })
  });

  workRoute(app);
};