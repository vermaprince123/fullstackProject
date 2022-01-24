const express = require('express')
const app = express()
const hbs = require('hbs')
const mongoose = require('mongoose')
const routes = require('./routes/main')
//const Details = require('./models/details');
const Slider = require('./models/slider');

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
mongoose.connect("mongodb://localhost/demofullstack",()=>{
    console.log('database connected')

    //schema for navbar
    // Details.create({
    //     brandName:'EdigniteNgo',
    //     brandUrl:'https://yt3.ggpht.com/ytc/AKedOLSuy7w2buxaYeivEywJP7PBtVH1hvuZRwK9fEfk924=s600-c-k-c0x00ffffff-no-rj-rp-mo',
    //     links:[
    //         {
    //             label:'Home',
    //             url:'/'
    //         },
    //         {
    //             label:'Services',
    //             url:'/services'
    //         },
    //         {
    //             label:'Gallery',
    //             url:'/gallery'
    //         },
    //         {
    //             label:'About',
    //             url:'/about'
    //         },
    //         {
    //             label:'Contact Us',
    //             url:'/contactus'
    //         }
    //     ]
    // })

    //schema for slider
    // Slider.create([
    //     {
    //         title:'Learn Java',
    //         subTitle:'Prince Verma',
    //         imageUrl:'static/images/s2.jpg'
    //     },
    //     {
    //         title:'Learn Java',
    //         subTitle:'Prince Verma',
    //         imageUrl:'static/images/s2.jpg'
    //     },
    //     {
    //         title:'Learn Java',
    //         subTitle:'Prince Verma',
    //         imageUrl:'static/images/s2.jpg'
    //     }
    // ])

})

app.listen(process.env.PORT | 1000,()=>{console.log('runing on port 1000')})