// Initializes the `grade` service on path `/grade`
const createService = require('feathers-mongoose');
const createModel = require('../../models/grade.model');
const hooks = require('./grade.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'grade',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/grade', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('grade');

  service.hooks(hooks);
};
