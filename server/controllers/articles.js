const express = require('express')
const Article = require('../models/article')

const app = new express.Router()

app.get('/api/articles', async (req, res) => {
  const articles = await Article.find()

  res.json(articles)
})

app.post('/api/articles', async (req, res) => {
  const { headline, date, url } = req.body
  const title = headline && headline.main ? headline.main : headline

  if (!title || !date || !url) {
    res.status(400)
    res.json({ error: { message: 'Invalid input' } })
    return
  }

  const articleByUrl = await Article.findOne({ url })
  if (!articleByUrl) {
    await Article.create({ title, date, url })

    req.app.get('io').sockets.send(title)
  }

  res.json({})
})

app.delete('/api/articles', async (req, res) => {
  const { id } = req.body

  if (!id) {
    res.status(400)
    res.json({ error: { message: 'Invalid input' } })
    return
  }

  await Article.deleteOne({ _id: id })

  res.json({})
})

module.exports = app
