import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Wellington Garcia',
        email: 'garciawel@gmail.com',
        password_hash: 'qwer1234',
      });

    expect(response.body).toHaveProperty('id');
  });
});
