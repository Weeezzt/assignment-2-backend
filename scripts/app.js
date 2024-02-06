import express from 'express'
import 'express-async-errors'
import https from 'https'
import fs from 'fs'
import path from 'path'
const app = express()

const __dirname = path.resolve();

app.set('view engine', 'ejs')

import router from '../routes/routes.js'
app.use('/', router)

app.use('/', express.static('./public'))

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    },
    app
)

export default sslServer