const assert = require('assert');
const app = require('../../src/app');

describe('\'persona\' service', () => {
  it('registered the service', () => {
    const service = app.service('persona');

    assert.ok(service, 'Registered the service');
  });
});
