import { json } from '@sveltejs/kit';
import type { SignInData } from 'src/@types/requestData';
import { authViaEmail } from 'src/pocketbase';

export async function POST(event: any) {
	const body: SignInData = await event.request.json();
	const userData = await authViaEmail(body);
	if (userData.token) {
		event.cookies.set('access-token', userData.token, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30,
			httpOnly: true
		});
	} else {
		return json({ success: false });
	}
	return json({ success: true });
}
