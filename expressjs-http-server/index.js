const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/index.html'))
})

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.status(200)
    res.send(`Hello ${name}!`)
})

app.get('*', () => {
    console.error('User requested wrong url')
    res.status(404)
    res.send('Not found')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})