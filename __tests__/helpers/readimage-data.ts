/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
import readimage from 'readimage';

export interface ReadImage {
  height: number;
  width: number;
  frames: { data: Buffer; delay: number }[];
}

export const uriToBuf = (imageUri: string) => {
  const s = imageUri.split(',').at(1);
  if (!s) throw new Error('Parsing error.');
  return Buffer.from(s, 'base64');
};

export const readImageData = (imageData: string | Buffer) =>
  new Promise<ReadImage>((resolve, reject) => {
    readimage(imageData, (err, img) => {
      if (err) {
        reject(err);
      } else {
        resolve(img);
      }
    });
  });

export const countWhitePixels = (imageData: ReadImage, fromCol: number, fromRow: number, toCol: number, toRow: number) => {
  const data = imageData.frames[0]?.data;
  if (!data) throw new Error('Error');
  return (
    data.reduce(
      (acc, cur, index) =>
        // each pixel has 4 values (RGBA), skip every 4th value (i.e. the alpha)
        (index + 1) % 4 !== 0 &&
        // only include values for pixels within the ranges
        (index / 4) % imageData.width >= fromCol &&
        (index / 4) % imageData.width < toCol &&
        index / 4 / imageData.width >= fromRow &&
        index / 4 / imageData.width < toRow
          ? acc + cur / 255
          : acc,
      0,
    ) / 3
  );
};
