const WorkController = require('../controllers/index')
const express = require('express')
const router = express.Router()

// module.exports = app => {
  const workController = new WorkController();

  router
    .route('/')
    .get(workController.index)
// }

module.exports = router;