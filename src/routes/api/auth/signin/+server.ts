import { json } from '@sveltejs/kit';
import type { SignInData } from 'src/@types/requestData';
import { authViaEmail } from 'src/pocketbase';

export async function POST(event: any) {
	const body: SignInData = await event.request.json();
	const result = await authViaEmail(body);
	return json(result);
}
