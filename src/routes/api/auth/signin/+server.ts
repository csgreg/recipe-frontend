import { json } from '@sveltejs/kit';
import { authViaEmail } from 'src/pocketbase';

export async function POST(event: any) {
	const body = await event.request.json();
	const result = await authViaEmail(body);
	return json(result);
}
