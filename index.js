const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

const APP = require('./src/config/app')
const DB = require('./src/config/database')

app.use( cors() )
app.use( helmet() )
app.disable('x-powered-by')
app.use( compression() )
app.use( bodyParser.json() )
app.use( express.static('static/public') )

let api = express.Router()
require('./src/config/router')(api)

app.use('/server', api)
app.use( require('./src/middlewares/errorHandler') )
app.use( require('./src/middlewares/notFoundHandler') )

app.listen(APP.PORT, (err)=>{
    if(err){
        console.log(`[ERROR] Could not start the application...`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server is running on port ${APP.PORT}...`)
})

mongoose.connect(DB.ADDRESS, DB.OPTIONS, (err)=>{
    if(err){
        console.log(`[ERROR] Could not connect to database: ${DB.ADDRESS}`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server connected to database: ${DB.ADDRESS}`)
})