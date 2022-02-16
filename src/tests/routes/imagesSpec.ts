import supertest from 'supertest';
import imageRoute from './../../routes/images';

describe('the image api responses', () => {
  it('should return type = text/html', async () => {
    const response = await supertest(imageRoute).get(
      '/images?name=fjord&width=300&height=300'
    );
    expect(response.type).toEqual('text/html');
  });
});
