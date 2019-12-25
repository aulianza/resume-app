const mongoose = require('mongoose')
const Schema = mongoose.Schema
const skillSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  level: {
    type: String,
    unique: false,
    required: true
  }
}, {
  timestamps: true
})

skillSchema.statics = {
  create: async function (data){
    var skill = new this(data)
    return await skill.save()
  },

  get: async function (query={}){
    return await this.find(query)
  },

  getByName: async function(query){
    return await this.find(query)
  },

  update: async function(query, updateData){
    return await this.findOneAndUpdate(query, 
      {$set: updateData}, {new: true})
  },

  delete: async function(query){
    return await this.findOneAndDelete(query)
  }
}

var skillsModel = mongoose.model('Skills', skillSchema)
module.exports = skillsModel