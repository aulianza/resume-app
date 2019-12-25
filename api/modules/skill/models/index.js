const SkillSchema = require('@skill/schema')

class SkillModel {
  constructor(){
    this.skillSchema = SkillSchema
  }

  async getAll(){
    const data = await this.skillSchema.get()

    return data;
  }
}

module.exports = SkillModel