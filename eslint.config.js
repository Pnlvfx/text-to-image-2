import { nodeConfigs } from '@goatjs/node-eslint';
import { defineConfig, globalIgnores } from '@eslint/config-helpers';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export default defineConfig([globalIgnores(['dist', '.yarn', 'coverage']), ...nodeConfigs({ tsconfigRootDir: import.meta.dirname })]);
