const express = require('express')

console.log('Starting up app')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Hello requested')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))