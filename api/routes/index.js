const workRoute = require('../modules/work/routes/index');
const skillRoute = require('@skill/routes')

module.exports = app => {
  app.route('/api').get((req, res) => {
    res.json({
      message: 'no route and no API found with those values'
    })
  });

  app.use('/api/work', workRoute);
  app.use('/api/skill', skillRoute);
};