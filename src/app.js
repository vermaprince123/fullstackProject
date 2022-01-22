const express = require('express')
const app = express()
const hbs = require('hbs')
const mongoose = require('mongoose')
const routes = require('./routes/main')


//routes
app.use("", routes)
app.use("",routes)


//hbs view engine
app.set('view engine','hbs')
app.set('views','views')


//hes partials
hbs.registerPartials('views/partials')


//statci file like images...
app.use('/static',express.static("public"))


//database connection
mongoose.connect("mongodb://localhost/demofullstack",()=>console.log('database connected'))

app.listen(process.env.PORT | 1000,()=>{console.log('runing on port 1000')})