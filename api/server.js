require('module-alias/register');
const express = require('express')
const log = require('morgan')('dev')
const bodyParser = require('body-parser')
const routes = require('./routes/index');

const properties = require('./config/properties')
const db = require('./config/database')

const app = express()
routes(app);

// var skillsRoutes = require('./skills/skills.routes')
// var skillRoutes = require('./modules/skills/routes')

var bodyParserJSON = bodyParser.json()
var bodyParserUrlEncoded = bodyParser.urlencoded({extended: true})

// var router = express.Router()
db()

app.use(log)
app.use(bodyParserJSON)
app.use(bodyParserUrlEncoded)
app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
})

// app.use('/api', router)
// skillsRoutes(router)

// app.use('/api/skills', router)
// skillRoutes(router)

app.listen(properties.PORT, (req, res) => {
  console.log(`server running on ${properties.PORT} port.`)
})