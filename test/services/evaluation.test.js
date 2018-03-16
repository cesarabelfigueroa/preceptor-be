const assert = require('assert');
const app = require('../../src/app');

describe('\'evaluation\' service', () => {
  it('registered the service', () => {
    const service = app.service('evaluation');

    assert.ok(service, 'Registered the service');
  });
});
