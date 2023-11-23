const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minLength:[3,"name at least 3 characters"],
        maxLength:[20,"name at least 20 characters"],
        trim:true  
    },
    completed: {
        type: Boolean,
        default:false
    }
})

const TaskModel = mongoose.model('Task',TaskSchema)

module.exports = TaskModel