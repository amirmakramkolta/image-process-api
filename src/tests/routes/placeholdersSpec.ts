import supertest from 'supertest';
import mainApp from './../../index';

describe('the placeholder endpoint response', () => {
  it('should return type = text/html from placeholder', async () => {
    const response = await supertest(mainApp).get(
      '/placeholder?width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
});
