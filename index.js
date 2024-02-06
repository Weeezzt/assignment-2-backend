import sslServer from './scripts/app.js'

const port = 5080

sslServer.listen(port, () => {
    console.log(`Listening on secure server on port: ${port}`)
})