const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({

    firstName:{
        type: String,        
    },
    lastName:{
        type: String,        
    },
    age:{
        type: Number,        
    },
    className:{
        type: String,
    }
},{timestamps:true})

module.exports = mongoose.model("Student", authorSchema)