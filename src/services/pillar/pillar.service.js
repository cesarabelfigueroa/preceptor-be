// Initializes the `pillar` service on path `/pillar`
const createService = require('feathers-mongoose');
const createModel = require('../../models/pillar.model');
const hooks = require('./pillar.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pillar',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pillar', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pillar');

  service.hooks(hooks);
};
