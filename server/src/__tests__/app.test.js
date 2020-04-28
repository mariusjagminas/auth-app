const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should response with a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server is running');
  });
});
