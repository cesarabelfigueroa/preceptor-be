// Initializes the `preceptor_grade` service on path `/preceptor-grade`
const createService = require('feathers-mongoose');
const createModel = require('../../models/preceptor-grade.model');
const hooks = require('./preceptor-grade.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'preceptor-grade',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/preceptor-grade', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('preceptor-grade');

  service.hooks(hooks);
};
