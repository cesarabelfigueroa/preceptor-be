const assert = require('assert');
const app = require('../../src/app');

describe('\'pillar\' service', () => {
  it('registered the service', () => {
    const service = app.service('pillar');

    assert.ok(service, 'Registered the service');
  });
});
