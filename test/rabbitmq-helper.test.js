'use strict';

const mock = require('egg-mock');

describe('test/rabbitmq-helper.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rabbitmq-helper-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rabbitmqHelper')
      .expect(200);
  });
});
