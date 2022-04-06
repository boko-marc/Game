const mongoose = require('mongoose')
const gameSchema = mongoose.Schema({
    nameQuiz:{
        type:String,
        required:true
    },
    nombreQuestion:{
        type:Number,
        required:true
    },
    questions:[
        
         {  type:{ 
            nameQuestion:{
                type:String,
                required:true
            },
            trueresponse:{
                type:Number,
                required:true
            },
            responseChoice:[
                {
                    type: String,
                    required:true
                }
            ]
           }}

        
        ]
},{
    timestamps:true
})
module.exports = mongoose.model('Game',  gameSchema);