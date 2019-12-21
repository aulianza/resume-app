var Skills = require('./skills.services')

// add function 
exports.createSkill = function(req, res, next){
  var skill = {
    name: req.body.name,
    level: req.body.level
  }

  Skills.create(skill, function(err, skill){
    if(err){
      res.json({
        error: err
      })
    }
    res.json({
      message: 'Skill added successfully'
    })
  })
}

// get all function
exports.getSkills = function(req, res, next){
  Skills.get({}, function(err, skills){
    if(err){
      res.json({
        error: err
      })
    }
    res.json({
      skills: skills
    })
  })
}

// get by name function
exports.getSkill = function(req, res, next){
  Skills.get({name: req.params.name}, function(err, skills){
    if(err){
      res.json({
        error: err
      })
    }
    res.json({
      skills: skills
    })
  })
}

// update function 
exports.updateSkill = function(req, res, next){
  var skill = {
    name: req.body.name,
    level: req.body.level
  }

  Skills.update({_id: req.params.id}, skill, function(err, skill){
    if(err){
      res.json({
        error: err
      })
    }
    res.json({
      message: 'skill updated successfully'
    })
  })
}

// delete function 
exports.removeSkill = function(req, res, next){
  Skills.delete({_id: req.params.id}, function(err, skill){
    if(err){
      res.json({
        error: err
      })
    }
    res.json({
      message: 'skill deleted successfully'
    })
  })
}