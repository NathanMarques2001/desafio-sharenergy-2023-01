const express = require('express');
const routes = express.Router();

const ClientController = require('./controllers/ClientController');

routes.post('/clients', ClientController.create);
routes.get('/clients', ClientController.read);
routes.delete('/clients/:id', ClientController.delete);
routes.post('/clients-data/:id', ClientController.update);

module.exports = routes;