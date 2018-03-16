// Initializes the `value` service on path `/value`
const createService = require('feathers-mongoose');
const createModel = require('../../models/value.model');
const hooks = require('./value.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'value',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/value', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('value');

  service.hooks(hooks);
};
