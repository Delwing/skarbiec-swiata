import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        svgr({
            svgrOptions: {exportType: "default", ref: true, svgo: false, titleProp: true},
            include: "**/*.svg",
        }),],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sandbox: resolve(__dirname, 'sandbox.html'),
            },
        },
    },
})
