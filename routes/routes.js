const express = require('express')
const { homeController, moviePageController } = require('../controller/controller')
const router = express.Router()

router.route('/').get(homeController)
router.route('/movie/:id').get(moviePageController)

module.exports = router