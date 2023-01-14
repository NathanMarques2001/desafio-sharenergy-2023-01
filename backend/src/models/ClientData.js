const mongoose = require('mongoose')

const ClientDataSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  city: String,
  address: String,
  phone: Number,
  email: String,
})

module.exports = mongoose.model('Clients', ClientDataSchema)
