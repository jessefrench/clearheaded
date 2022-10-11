const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getTodos)
router.post('/getTask', homeController.getTask)
router.post('/createTodo', homeController.createTodo)
router.put('/markComplete', homeController.markComplete)
router.put('/markIncomplete', homeController.markIncomplete)
router.delete('/deleteTodo', homeController.deleteTodo)
router.put('/markImportant', homeController.markImportant)
router.put('/markNotImportant', homeController.markNotImportant)

module.exports = router