const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({
  questionContent: String,
  answers: [String],
  answerCorrect: [Number]
})

const question = new mongoose.model('Questions', questionSchema)

module.exports = question 