import { redirect } from '@sveltejs/kit';

export function load(event: any) {
	const { isLoggedIn } = event.locals;
	if (isLoggedIn && !event.url.pathname.includes('/create-recipe')) {
		throw redirect(307, '/create-recipe');
	}
}
