import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	resolve: {
		alias: {
			// these are the aliases and paths to them
			'@components': path.resolve('./src/components')
		}
	},
	plugins: [sveltekit()]
};

export default config;
