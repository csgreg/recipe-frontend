import { json } from '@sveltejs/kit';
import { createUser } from 'src/pocketbase';
import type { SignUpData } from 'src/@types/requestData';

export async function POST(event: any) {
	const body: SignUpData = await event.request.json();
	const result = await createUser(body);
	return json(result);
}
