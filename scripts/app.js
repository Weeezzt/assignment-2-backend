import express from 'express'
import 'express-async-errors'
const app = express()

app.set('view engine', 'ejs')

import router from '../routes/routes.js'
app.use('/', router)

app.use('/', express.static('./public'))

export default app