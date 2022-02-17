import supertest from 'supertest';
import mainApp from './../../index';

describe('the placeholder endpoint response', () => {
  it('should return type = text/html from placeholder', async () => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
  it('should return 200 status', async () => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?width=300&height=300'
    );
    expect(response.statusCode).toEqual(200);
  });
  it('should return 400 status if any attribute is missing', async () => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?&height=300'
    );
    expect(response.statusCode).toEqual(400);
  });
});
