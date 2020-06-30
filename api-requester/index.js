const axios = require('axios')
const isProduction = (process.env.NODE_ENV === 'production')

if (!isProduction) {
    require('dotenv').config()
}

if (process.env.TOKEN === undefined)
    throw new Error('Please set your autologin link in TOKEN environment variable')

axios.get(`${process.env.TOKEN}/user/?format=json`)
    .then(({ data }) => {
        console.log(`Hello ${data.firstname} ${data.lastname}`)
    })
    .catch(console.error)