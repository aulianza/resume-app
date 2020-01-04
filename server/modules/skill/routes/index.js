const SkillController = require("@skill/controllers");

module.exports = app => {
  const skillController = new SkillController();

  app
    .route("/skills")
    .get(skillController.index)
    .post(skillController.create);

  app.route("/skills/:id")
    .get(skillController.getById)
    .put(skillController.update)
    .delete(skillController.delete);
};
