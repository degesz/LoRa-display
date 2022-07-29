

const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
  var newData = req.body
  console.log("distance: " + newData.uplink_message.decoded_payload.analog_in_5)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})