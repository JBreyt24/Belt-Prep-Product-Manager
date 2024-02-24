const mongoose = require ('mongoose');

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, 'You must put a title'],
    },
    description:{
        type:String,
        required: [true, 'You must put a description'],
    },
    price:{
        type:Number,
        required: [true, 'You must put a price'],
    }

    // For created at and updated at
}, {timestamps:true} )

module.exports = mongoose.model('Product', ProductSchema);