import sharp from 'sharp';

async function createResisedImage(
  data: Buffer,
  newWidth: number,
  newHeight: number,
  path: string
): Promise<sharp.OutputInfo> {
  const imgInfo = await sharp(data).resize(newWidth, newHeight).toFile(path);
  return imgInfo;
}
async function imgInHtml(name: string): Promise<string> {
  return `<img src="/thumbnails/${name}" />`;
}

export default { createResisedImage, imgInHtml };
