import type { ReadImage } from './readimage-data.js';

const paddedHex = (intVal: number) => {
  let s = intVal.toString(16);
  if (s.length === 1) {
    s = `0${s}`;
  }

  return s;
};

export const extractColors = (image: ReadImage) => {
  const pixels = image.frames[0]?.data;
  if (!pixels) throw new Error('No pixels found.');
  const colorMap: Record<string, number> = {};
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    // a = pixels[i + 3]

    if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') throw new Error('Cannot extract colors.');

    const hexNotation = `#${paddedHex(r)}${paddedHex(g)}${paddedHex(b)}`;
    let currValue = colorMap[hexNotation];
    if (currValue) {
      currValue += 1;
    } else {
      currValue = 1;
    }
    colorMap[hexNotation] = currValue;
  }
  return colorMap;
};
