export function load(event: any) {
	const { isLoggedIn } = event.locals;
	return { isLoggedIn };
}
