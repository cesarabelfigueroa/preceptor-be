const assert = require('assert');
const app = require('../../src/app');

describe('\'privilege\' service', () => {
  it('registered the service', () => {
    const service = app.service('privilege');

    assert.ok(service, 'Registered the service');
  });
});
