const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HighScoreSchema = new Schema({
  username: String,
  highScore: Number
})

module.exports = mongoose.model('HighScore', HighScoreSchema);
