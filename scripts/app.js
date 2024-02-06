import express from 'express'
import 'express-async-errors'
import https from 'https'
import fs from 'fs'
import path from 'path'
const app = express()

//This makes it possible to use __dirname in ESM
const __dirname = path.resolve();

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Import the routes
import router from '../routes/routes.js'
app.use('/', router)

// Serve static files
app.use('/', express.static('./public'))

// Creating the server using the SSL certificate and using https
const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    },
    app
)

// Export the server
export default sslServer