const { createCustomError } = require('../error/customError')
const asyncWrapper = require('../middleware/asyncWrapper')
const TaskModel = require('../models/model')

  
const getAllTasks = asyncWrapper(async(req,res)=>{
        const tasks = await TaskModel.find({})
        res.status(200).json({tasks})
})

const getSingleTask = asyncWrapper(async(req,res,next)=>{
     const taskId = req.params.id;
     const task = await TaskModel.findOne({_id:taskId})
     if(!task) 
        return next(createCustomError("No Task Found.",404))
     return res.status(200).json(task)
})

const createTask = asyncWrapper(async(req,res)=>{
        const task = await TaskModel.create(req.body)
        res.status(201).json(task)
    
})

const updateTask = asyncWrapper(async(req,res)=>{
        const id = req.params.id
        const task = await TaskModel.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true
        })
        if(!task) return res.status(404).json({msg:"Task is not found"})
        res.status(200).json({task})        
 
})

const deleteTask = asyncWrapper(async(req,res)=>{
        const taskId = req.params.id
        const task = await TaskModel.findOneAndDelete({_id:taskId})
        if(!task) return res.status(404).json({msg:"No task found with this Id"})
        res.status(200).json({task})
 
})


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
}