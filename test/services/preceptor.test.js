const assert = require('assert');
const app = require('../../src/app');

describe('\'preceptor\' service', () => {
  it('registered the service', () => {
    const service = app.service('preceptor');

    assert.ok(service, 'Registered the service');
  });
});
