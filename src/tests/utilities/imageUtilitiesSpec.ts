import imageProcess from '../../utilities/imageUtilities';

describe('the image utilities', (): void => {
  it('should return img tag', async (): Promise<void> => {
    const tag = await imageProcess.imgInHtml('AnyName');
    expect(tag).toContain('img');
  });
});
