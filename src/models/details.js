const mongoose = require('mongoose');
const Details = mongoose.Schema({
    brandName:String,
    brandUrl:String,
    links:[
        {
            label:String,
            url:String
        }
    ]
})

module.exports=mongoose.model('demofullstackProject', Details)