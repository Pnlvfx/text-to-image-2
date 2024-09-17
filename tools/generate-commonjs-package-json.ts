import { promises as fs } from 'node:fs';
import path from 'node:path';

const output = process.argv[2];

if (!output) throw new Error('No output specified.');

await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, `{"type": "commonjs"}`);
