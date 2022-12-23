const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const { Http2ServerRequest } = require('http2')
const port = 3000
const app = express()
require('dotenv').config()
const apiKey = process.env.KEY
const listID = process.env.ID
const https = require('https')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'))

app.post('/', function (req, res) {
  const firstName = req.body.fName
  const lastName = req.body.lName
  const email = req.body.email
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  }

  const jsonData = JSON.stringify(data)

  //console.log(firstName, lastName, email)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
