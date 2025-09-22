const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with ok true', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});

