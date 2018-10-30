const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const articlesController = require('./controllers/articles')
const db = require('./db')

db.connect()

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('io', io)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(articlesController)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
