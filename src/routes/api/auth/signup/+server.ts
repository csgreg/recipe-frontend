import { json } from '@sveltejs/kit';
import { createUser } from 'src/pocketbase';

export async function POST(event: any) {
	const body = await event.request.json();
	const result = await createUser(body);
	return json(result);
}
