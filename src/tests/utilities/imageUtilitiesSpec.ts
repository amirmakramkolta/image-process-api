import imageProcess from '../../utilities/imageUtilities';

describe('the image utilities', () => {
  it('should return img tag', () => {
    const tag = imageProcess.imgInHtml('AnyName');
    expect(tag).toContain('img');
  });
});
