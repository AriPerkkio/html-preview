import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { svelteSVG } from 'rollup-plugin-svelte-svg';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        target: '#svelte',
        paths: {
            base: dev ? '' : '/html-preview',
        },
        appDir: 'internal',
        vite: {
            plugins: [
                svelteSVG({
                    svgo: {},
                    enforce: 'pre',
                }),
            ],
            server: {
                hmr: {
                    clientPort: 443,
                },
            },
        },
    },
};

export default config;
