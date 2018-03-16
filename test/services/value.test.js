const assert = require('assert');
const app = require('../../src/app');

describe('\'value\' service', () => {
  it('registered the service', () => {
    const service = app.service('value');

    assert.ok(service, 'Registered the service');
  });
});
