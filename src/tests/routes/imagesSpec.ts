import supertest from 'supertest';
import mainApp from './../../index';

describe('the image endpoint responses', () => {
  it('should return type = text/html from image', async () => {
    const response = await supertest(mainApp).get(
      '/image?name=fjord&width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
});
