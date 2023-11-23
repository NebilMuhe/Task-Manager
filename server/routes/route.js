const express = require('express')
const { getAllTasks, updateTask, deleteTask, createTask, getSingleTask } = require('../controllers/controller')

const router = express.Router()

router.get('/',getAllTasks)
router.get('/:id',getSingleTask)
router.post('/',createTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router