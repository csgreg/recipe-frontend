import { getAuthStore } from './pocketbase';
import { userStore } from './stores/user-store';

let user: object | undefined = undefined;

userStore.subscribe((value) => {
	user = value;
});

export async function handle({ event, resolve }: any) {
	const token = event.cookies.get('access-token');
	if (token) {
		/* && user) { */
		const authData = getAuthStore(token);
		event.locals.userData = authData;
		userStore.set(authData);
		event.locals.isLoggedIn = true;
	} else {
		event.locals.isLoggedIn = false;
	}
	const response = await resolve(event);

	return response;
}
