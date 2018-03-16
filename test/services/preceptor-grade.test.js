const assert = require('assert');
const app = require('../../src/app');

describe('\'preceptor_grade\' service', () => {
  it('registered the service', () => {
    const service = app.service('preceptor-grade');

    assert.ok(service, 'Registered the service');
  });
});
