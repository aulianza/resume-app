var mongoose = require('mongoose')
var chalk = require('chalk')
var dbURL = require('./properties').DB

var connected = chalk.bold.cyan
var error = chalk.bold.yellow
var disconnected = chalk.bold.red
var termination = chalk.bold.magenta

module.exports = function(){
  mongoose.connect(dbURL)

  mongoose.connection.on('connected', function() {
    console.log(connected('mongoose default connection is open to ', dbURL))
  })

  mongoose.connection.on('error', function(){
    console.log(error('mongoose default connection is has occured '+err+' error'))
  })

  mongoose.connection.on('disconnected', function(){
    console.log(disconnected('mongoose default connection is disconnected'))
  })

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log(termination('mongoose default connection is disconnected due the application termination'))
      process.exit(0)
    })
  })

}