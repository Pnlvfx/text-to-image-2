import { readImageData } from './readimage-data.js';
import { describe, expect, it } from '@jest/globals';

describe('readImageData', () => {
  it('should reject if the data is not an image', async () => {
    await expect(readImageData('asdf')).rejects.toEqual('SOI not found');
  });
});
