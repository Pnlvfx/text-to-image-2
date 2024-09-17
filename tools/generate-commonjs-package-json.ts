import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

/**
 * Outputs the dummy package.json file to the path specified
 * by the first argument.
 */

mkdirSync(path.dirname(process.argv[2]), { recursive: true });
writeFileSync(process.argv[2], `{"type": "commonjs"}`);
