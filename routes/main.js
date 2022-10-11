const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const splashController = require('../controllers/splash')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', splashController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router