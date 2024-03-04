const config = require('config')
const startupDebugger = require('debug')('app:startup')

const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)

// config
console.log('Application Name is: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
console.log(`env ${app.get('env')}`)

if (app.get('env') === 'development') {
  app.use(morgan('tiny'))
  startupDebugger('Morgan enabled...')
}

const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
