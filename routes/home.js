const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getHeadaches)
router.post('/getTask', homeController.getTask)
router.post('/createHeadache', homeController.createHeadache)
router.put('/markComplete', homeController.markComplete)
router.put('/markIncomplete', homeController.markIncomplete)
router.delete('/deleteHeadache', homeController.deleteHeadache)
router.put('/markImportant', homeController.markImportant)
router.put('/markNotImportant', homeController.markNotImportant)

module.exports = router