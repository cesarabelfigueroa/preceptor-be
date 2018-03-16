// Initializes the `preceptor` service on path `/preceptor`
const createService = require('feathers-mongoose');
const createModel = require('../../models/preceptor.model');
const hooks = require('./preceptor.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'preceptor',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/preceptor', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('preceptor');

  service.hooks(hooks);
};
