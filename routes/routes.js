import express from 'express'
import { homeController, moviePageController } from '../controller/controller.js'
const router = express.Router()

router.route('/').get(homeController)
router.route('/movie/:id').get(moviePageController)

export default router