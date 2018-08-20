const router = require('express').Router()
const Controller = require('../controllers/item')

router.post('/', Controller.create)
      .get('/', Controller.findAll)
      .get('/search', Controller.readOne)


module.exports = router