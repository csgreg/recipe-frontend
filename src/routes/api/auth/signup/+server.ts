import { json } from '@sveltejs/kit';
import { createUser } from 'src/pocketbase';
import type { SignUpData } from 'src/@types/requestData';

export async function POST(event: any) {
	try {
		const body: SignUpData = await event.request.json();
		const result = await createUser(body);

		if (result.id) {
			return json({ success: true });
		} else {
			return json({ success: false });
		}
	} catch (e) {
		console.error(e);
		return json({ success: false });
	}
}
