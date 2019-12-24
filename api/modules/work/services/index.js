const WorkModel = require('../models/index')

class WorkService {
  constructor(){
    this.workModel = new WorkModel
  }

  async index(query){
    return {
      data: 'hello'
    }
  }

}

module.exports = WorkService