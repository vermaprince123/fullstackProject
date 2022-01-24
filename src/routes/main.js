const express = require('express');
const async = require('hbs/lib/async');
const routes = express.Router()
const Details = require('../models/details');
const Slider = require('../models/slider')

routes.get("/",async (req,res)=>{
   const detail= await Details.findOne({
        "_id":"61ee15a0debd77fc704a9623"
    })

    const slide= await Slider.find();
    res.render('index', { detail, slide})
})


routes.get("/gallery", async (req,res)=>{
    const detail= await Details.findOne({
        "_id":"61ee15a0debd77fc704a9623"
    })
    res.render('gallery', {detail})
})

module.exports=routes;