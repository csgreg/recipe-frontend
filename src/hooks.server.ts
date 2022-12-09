import { getAuthStore } from './pocketbase';

export async function handle({ event, resolve }: any) {
	const token = event.cookies.get('access-token');
	if (token) {
		const authData = getAuthStore(token);
		event.locals.userData = authData;
		event.locals.userToken = token;
		event.locals.isLoggedIn = true;
	} else {
		event.locals.isLoggedIn = false;
	}
	const response = await resolve(event);

	return response;
}
