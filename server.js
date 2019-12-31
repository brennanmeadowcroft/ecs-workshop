const express = require('express')
const axios = require('axios')

console.log('Starting up app')
const app = express()
const port = 3000

app.get('/health', (req, res) => {
    res.status(200).send('OK')
})

app.get('/public', (req, res) => {
    const host = process.env.HOSTNAME
    console.log('Hello requested - ${host}')
    res.send(`Hello World from ${host}`)
})

app.get('/private', (req, res) => {
    console.log('Requesting data from private API')
    axios.get('private-api.local').then((result => {
        res.send(result)
    })).catch(err => {
        console.error(err.message)
        res.status(500).send(err.message)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))