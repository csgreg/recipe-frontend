import { json } from '@sveltejs/kit';

export async function GET(event: any) {
	if (event.cookies.delete('access-token', { path: '/' })) {
		return json({ success: true });
	} else {
		return json({ success: false });
	}
}
