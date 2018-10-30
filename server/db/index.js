const mongoose = require('mongoose')

function connect () {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact', { useNewUrlParser: true }, err => {
    if (err) {
      console.log('Failed to connect to MongoDB')
      console.error(err)
      process.exit(1)
    }
  })
}

module.exports = {
  connect
}
