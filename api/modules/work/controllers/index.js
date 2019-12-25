const WorkService = require('../services/index')

class WorkController {
  constructor(){
    this.workService = new WorkService()
    this.index = this.index.bind(this)
  }

  async index(req, res){
    // Skills.get({}, function(err, skills){
    //   if(err){
    //     res.json({
    //       error: err
    //     })
    //   }
    //   res.json({
    //     skills: skills
    //   })
    // })
    // const result = await this.workService.index(req, query)
    // res.send(result)
    res.json({
      message: 'you are in work controller'
    })
  }
  
}

module.exports = WorkController