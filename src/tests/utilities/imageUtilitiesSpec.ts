import imageProcess from '../../utilities/imageUtilities';
import fs from 'fs';

describe('the image utilities', (): void => {
  it('should return img tag', async (): Promise<void> => {
    const tag: string = await imageProcess.imgInHtml('AnyName');
    expect(tag).toContain('img');
  });
  it('should returns the new dimension of the photo after resizing', async (): Promise<void> => {
    fs.readFile(
      './public/images/santamonica.jpg',
      async (
        err: NodeJS.ErrnoException | null,
        data: Buffer
      ): Promise<void> => {
        const width = 100;
        const height = 100;
        const ImageName = 'santamonica';
        const newImgName = `${ImageName}_${width}_${height}.jpg`;
        const info = await imageProcess.createResisedImage(
          data,
          100,
          100,
          `./public/thumbnails/${newImgName}`
        );
        expect(info.width).toEqual(width);
        expect(info.height).toEqual(height);
      }
    );
  });
});
