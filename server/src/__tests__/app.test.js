const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should response with a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server is running');
  });
});

describe('GET /not-existing-path', () => {
  it('should response with 404 status code', async () => {
    const response = await request(app).get('/not-existing-path');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not found');
  });
});
