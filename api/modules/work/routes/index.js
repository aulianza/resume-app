const WorkController = require('../controllers/index')

module.exports = app => {
  const workController = new WorkController();

  app
    .route('/work')
    .get(workController.index)
}