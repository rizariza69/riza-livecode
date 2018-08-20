const router = require('express').Router()
const userController = require('../controllers/users')
const auth = require('../middleware/requestToken')


router.post('/register', userController.register)
      .post('/login',auth, userController.login)


module.exports = router