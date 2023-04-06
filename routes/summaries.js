const express = require('express')
const router = express.Router()
const summariesController = require('../controllers/summaries') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, summariesController.getSummaryArchive)
// router.get('/id', ensureAuth, summariesController.getSummaryByDate)

module.exports = router