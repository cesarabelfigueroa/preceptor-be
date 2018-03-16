// Initializes the `evaluation` service on path `/evaluation`
const createService = require('feathers-mongoose');
const createModel = require('../../models/evaluation.model');
const hooks = require('./evaluation.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'evaluation',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/evaluation', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('evaluation');

  service.hooks(hooks);
};
