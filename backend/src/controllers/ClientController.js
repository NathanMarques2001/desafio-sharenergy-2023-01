const Clients = require('../models/ClientData')

module.exports = {
  async read(request, response) {
    const clientList = await Clients.find()

    return response.json(clientList)
  },

  async create(request, response) {
    const { name, cpf, city, address, phone, email } = request.body

    if (!name || !cpf || !city || !address || !phone || !email) {
      return response
        .status(400)
        .json({ error: 'Algum dado não foi inserido!' })
    }

    const clientCreated = await Clients.create({
      name,
      cpf,
      city,
      address,
      phone,
      email,
    })
    return response.json(clientCreated)
  },

  async update(request, response) {
    const { id } = request.params
    const { name, cpf, city, address, phone, email } = request.body

    const client = await Clients.findOne({ _id: id })

    if (name || cpf || city || address || phone || email) {
      client.name = name
      client.cpf = cpf
      client.city = city
      client.address = address
      client.phone = phone
      client.email = email

      await client.save()
    }

    return response.json(client)
  },

  async delete(request, response) {
    const { id } = request.params

    const clientDeleted = await Clients.findByIdAndDelete({ _id: id })

    if (clientDeleted) {
      return response.json(clientDeleted)
    }

    return response.status(401).json({
      error: 'Não consegui deletar este registro! Favor veriricar o id.',
    })
  },
}
