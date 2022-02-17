import supertest from 'supertest';
import mainApp from './../../index';

describe('the placeholder endpoint response', (): void => {
  it('should return type = text/html from placeholder', async (): Promise<void> => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
  it('should return 200 status', async (): Promise<void> => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?width=300&height=300'
    );
    expect(response.statusCode).toEqual(200);
  });
  it('should return 400 status if any attribute is missing', async (): Promise<void> => {
    const response = await supertest(mainApp).get(
      '/placeholder/get-placeholder?&height=300'
    );
    expect(response.statusCode).toEqual(400);
  });
});
