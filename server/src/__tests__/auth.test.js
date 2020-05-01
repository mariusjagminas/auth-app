const request = require('supertest');
const app = require('../app');

describe('GET /auth', () => {
  it('should response with a message', async () => {
    const response = await request(app).get('/auth');
    expect(response.status).toBe(200);
    expect(response.text).toBe('auth/ route is working');
  });
});

describe('POST /auth/signup', () => {
  describe('"user:" property', () => {
    it('is required', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ password: 'CFJJ77$%*1ksk-89' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe('"user" is required');
    });

    it('should have a length at least 5 characters long', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: '1234', password: 'kjsjkjksjsj' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"user" length must be at least 5 characters long'
      );
    });

    it('should be less than 20 characters long', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: '123456789012345678901', password: 'kjsjkjksjsj' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"user" length must be less than or equal to 20 characters long'
      );
    });

    it('should contain only alpha-numeric characters', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: '$testuser', password: 'kjsjkjksjsj' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"user" must only contain alpha-numeric characters'
      );
    });
  });

  describe('"password:" property', () => {
    it('is required', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: 'testuser' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe('"password" is required');
    });

    it('should be at least 8 characters long', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: '1234634', password: '1234567' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"password" length must be at least 8 characters long'
      );
    });

    it('should be less than 15 characters long', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: '1234567890123', password: '1234567890123456' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"password" length must be less than or equal to 15 characters long'
      );
    });

    it('should not have special characters in it', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ user: 'testuser', password: 'kskKHK63&&**' });
      expect(response.status).toBe(422);
      expect(response.body.message).toBe(
        '"password" with value "kskKHK63&&**" fails to match the required pattern: /^[a-zA-Z0-9]{3,30}$/'
      );
    });
  });
});
