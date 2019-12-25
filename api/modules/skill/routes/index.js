const SkillController = require('@skill/controllers')
const express = require('express')
const router = express.Router()

// module.exports = app => {
  const skillController = new SkillController();

  router
    .route('/')
    .get(skillController.index)
// }

module.exports = router;