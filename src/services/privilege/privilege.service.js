// Initializes the `privilege` service on path `/privilege`
const createService = require('feathers-mongoose');
const createModel = require('../../models/privilege.model');
const hooks = require('./privilege.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'privilege',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/privilege', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('privilege');

  service.hooks(hooks);
};
