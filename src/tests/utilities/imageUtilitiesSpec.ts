import imageProcess from '../../utilities/imageUtilities';

describe('the image utilities', () => {
  it('should return img tag', async () => {
    const tag = await imageProcess.imgInHtml('AnyName');
    expect(tag).toContain('img');
  });
});
