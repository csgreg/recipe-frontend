export async function handle({ event, resolve }: any) {
	console.log('before');
	const token = event.cookies.get('access-token');
	if (token) {
		event.locals.userToken = token;
		event.locals.isLoggedIn = true;
	} else {
		event.locals.isLoggedIn = false;
	}
	console.log(token);
	const response = await resolve(event);
	console.log('after');

	return response;
}
