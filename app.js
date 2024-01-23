import express from 'express'
import 'express-async-errors'
const app = express()
import path from 'path'

app.set('view engine', 'ejs')

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
console.log(__dirname)

import router from './routes/routes.js'
app.use('/', router)

app.use(express.static(path.join(__dirname, './public')))

const port = 5080

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})