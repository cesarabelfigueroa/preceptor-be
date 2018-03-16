// Initializes the `role_privilege` service on path `/role-privilege`
const createService = require('feathers-mongoose');
const createModel = require('../../models/role-privilege.model');
const hooks = require('./role-privilege.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'role-privilege',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/role-privilege', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('role-privilege');

  service.hooks(hooks);
};
