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

