import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
    plugins: [sveltekit(), svg({})],
});
