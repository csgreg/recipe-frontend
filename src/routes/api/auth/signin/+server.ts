import { json } from '@sveltejs/kit';
import type { SignInData } from 'src/@types/requestData';
import { authViaEmail } from 'src/pocketbase';

export async function POST(event: any) {
	const body: SignInData = await event.request.json();
	const userData = await authViaEmail(body, event);
	if (userData.token) {
		return json({ success: true });
	} else {
		return json({ success: false });
	}
}
