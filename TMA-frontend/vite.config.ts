// import { readFileSync } from 'node:fs';
// import { dirname, resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactjs-template/',
  plugins: [react(), tsconfigPaths()],
  // Uncomment the next lines in case, you would like to run Vite dev server using HTTPS and in case,
  // you have key and certificate. You retrieve your certificate and key using mkcert.
  // Learn more:
  // https://docs.telegram-mini-apps.com/platform/getting-app-link#mkcert
  //
  // server: {
  //   port: 443,
  //   https: {
  //     cert: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './tma.internal.pem')),
  //     key: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './tma.internal-key.pem')),
  //   },
  //   host: 'tma.internal',
  // },

  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
      host: 'tg-mini-app.local',
      port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },
    proxy: {
      "/bot": {
        target: "http://localhost:3000/bot",
      }
    },
  },
  publicDir: './public',
});
