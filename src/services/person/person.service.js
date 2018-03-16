// Initializes the `persona` service on path `/persona`
const createService = require('feathers-mongoose');
const createModel = require('../../models/persona.model');
const hooks = require('./persona.hooks');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'persona',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/persona', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('persona');

  service.hooks(hooks);
};
