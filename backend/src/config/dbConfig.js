const mongoose = require('mongoose')

const dbConfig =
  'mongodb+srv://admin:admin@cluster0.15yo45p.mongodb.net/clients?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection
