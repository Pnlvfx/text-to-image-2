declare module 'readimage' {
  const a: (imageData: string | Buffer, callback: (err: unknown, img: import('./readimage-data.ts').ReadImage) => void) => void;
  export default a;
}
