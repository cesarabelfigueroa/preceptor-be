const assert = require('assert');
const app = require('../../src/app');

describe('\'role_privilege\' service', () => {
  it('registered the service', () => {
    const service = app.service('role-privilege');

    assert.ok(service, 'Registered the service');
  });
});
