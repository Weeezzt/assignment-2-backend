const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const router = require('./routes/routes')
app.use('/', router)