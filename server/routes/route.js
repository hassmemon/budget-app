const routes = require('express').Router();
const controller = require('../controllers/controller');

routes.route('/api/categories').get(controller.create_Categories);

module.exports = routes;
