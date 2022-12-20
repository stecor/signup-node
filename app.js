const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'))

app.post('/', function (req, res) {
  var firstName = req.body.fName
  var lastName = req.body.lName
  var email = req.body.email

  console.log(firstName, lastName, email)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
