import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
	resolve: {
		alias: {
			components: resolve('./src/components'),
			entities: resolve('./src/entities'),
			src: resolve('./src')
		}
	},
	plugins: [sveltekit()]
};

export default config;
