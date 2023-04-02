const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const homeRoutes = require('./routes/home')
const attackRoutes = require('./routes/attack')
const port = process.env.PORT || 8080

// use .env file in config folder
require('dotenv').config({path: './config/.env'})

// passport config
require('./config/passport')(passport)

// connect to database
connectDB()

// use jsx for views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// logging
app.use(logger('dev'))

// setup sessions - stored in database
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
}))
  
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// use flash messages for errors, info, etc.
app.use(flash())
 
// setup routes for which the server is listening
app.use('/', mainRoutes)
app.use('/home', homeRoutes)
app.use('/attack', attackRoutes)
 
// server running
connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running. Listening on port ${port}.`)
    })
})