const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const HighScore = require('./models/scores')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/andrew-practise')

app.post('/highScore', (req, res) => {
  const newEntry = new HighScore()

  newEntry.username = req.body.username
  newEntry.highScore = req.body.score

  newEntry.save((err, entry) => {
    if(err) {
      res.send(err)
    }

    res.json(entry)
  })
})

app.listen(8080, () => console.log('Working...'))
