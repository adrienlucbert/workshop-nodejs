const http = require('http')

const HOSTNAME = '127.0.0.1'
const PORT = '4000'

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.end('Main page')
        break
        default:
            res.statusCode = 404
            res.end('You got lost')
        break
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})
