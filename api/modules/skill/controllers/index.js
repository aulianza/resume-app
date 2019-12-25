const SkillService = require('@skill/services')

class SkillController {
  constructor(){
    this.skillService = new SkillService()
    this.index = this.index.bind(this)
  }

  async index(req, res){
    const data = await this.skillService.index()

    res.send(data)
  }

}

module.exports = SkillController;