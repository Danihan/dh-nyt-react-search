const mongoose = require('mongoose')

const Article = mongoose.model('Article', {
  title: String,
  date: Date,
  url: String
})

module.exports = Article
