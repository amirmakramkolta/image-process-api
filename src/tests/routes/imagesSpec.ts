import supertest from 'supertest';
import mainApp from './../../index';

describe('the image endpoint responses', () => {
  it('should return type = text/html from image', async () => {
    const response = await supertest(mainApp).get(
      '/image/get-image?name=fjord&width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
  it('should return 200 status from images endpoint', async () => {
    const response = await supertest(mainApp).get(
      '/image/get-image?name=fjord&width=300&height=300'
    );
    expect(response.status).toEqual(200);
  });
  it('should return 400 status if one of attributes missing from images endpoint', async () => {
    const response = await supertest(mainApp).get(
      '/image/get-image?name=fjord&height=300'
    );
    expect(response.statusCode).toEqual(400);
  });
  it('should return 404 status if image file was wrong from images endpoint', async () => {
    const response = await supertest(mainApp).get(
      '/image/get-image?name=notExsistImage&width=300&height=300'
    );
    expect(response.statusCode).toEqual(404);
  });
});
