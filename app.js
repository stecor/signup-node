const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const port = 3000
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
