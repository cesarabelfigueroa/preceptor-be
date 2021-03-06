// Initializes the `student` service on path `/student`
const createService = require('feathers-mongoose');
const createModel = require('../../models/student.model');
const hooks = require('./student.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'student',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/student', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('student');

  service.hooks(hooks);
};
