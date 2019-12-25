const SkillModel = require('@skill/models')

class SkillServices {
  constructor(){
    this.skillModel = new SkillModel()
  }

  async index(){
    const data = await this.skillModel.getAll()

    return data;
  }
  
}

module.exports = SkillServices