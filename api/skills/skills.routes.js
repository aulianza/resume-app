var Skills= require('./skills.controller')

module.exports = function(router){
  router.post('/create', Skills.createSkill)
  router.get('/get', Skills.getSkills)
  router.get('/get/:name', Skills.getSkill)
  router.put('/update/:id', Skills.updateSkill)
  router.delete('/remove/:id', Skills.removeSkill)
}