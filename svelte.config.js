import { vitePreprocess } from '@astrojs/svelte';
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assests: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        })
    }
};
