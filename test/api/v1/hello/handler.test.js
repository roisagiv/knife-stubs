import test from 'ava';
import supertest from 'supertest-as-promised';

test.beforeEach(() => {
  global.request = supertest.agent(process.env.SERVER_URL);
});

test('it returns greeting with name', async t => {
  const request = global.request;

  const name = 'name1';
  const response = await request.get(`/api/v1/hello?name=${name}`);

  t.is(response.status, 200);
  t.is(response.body.message, `Hello, ${name}`);
});
