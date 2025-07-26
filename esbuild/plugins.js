import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const keycloakifyConfigPlugin = {
    name: 'keycloakify-config',
    setup(build) {
        build.initialOptions.outdir = path.resolve(__dirname, '..', 'static', 'js');
    }
};

export default [keycloakifyConfigPlugin];
