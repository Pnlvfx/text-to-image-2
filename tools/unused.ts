import coraline from 'coraline';

const unused = coraline.findUnusedExports({
  ignoreFiles: ['jest.config.ts', 'eslint.config.js'],
  ignoreVars: [],
});

if (unused) {
  throw new Error(`The following exports are unused, add them on the ignore or remove the exports to continue.\n${JSON.stringify(unused)}`);
}
