const WorkModel = require('../models/index')

class WorkService {
  constructor(){
    this.workModel = new WorkModel
  }

  async index(query){
    skillSchema.statics = {
      get: function(query, cb){
        this.find(query, cb)
      },
    }
  }

}

module.exports = WorkService