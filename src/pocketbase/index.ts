import PocketBase from 'pocketbase';
import type { SignInData, SignUpData } from 'src/@types/requestData';
import type Recipe from 'src/entities/recipe';

const client: any = new PocketBase('https://recipe-service.fly.dev');

export const createRecipe = (data: Recipe) => {
	return client.records.create('recipes', data);
};

export const getUserRecipes = async (user_id: string) => {
	return await client.records.getList('recipes', 1, 5, {
		filter: `user_id = "${user_id}"`
	});
};

export const createUser = async (data: SignUpData) => {
	return await client.Users.create({
		email: data.email,
		password: data.password,
		passwordConfirm: data.confirmPassword
	});
};

export const authViaEmail = async (data: SignInData, event: any) => {
	const userData = await client.users.authViaEmail(data.email, data.password);
	const cookieData = client.authStore.exportToCookie();
	event.cookies.set('access-token', cookieData, {
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true
	});
	return userData;
};

export const getAuthStore = (cookieString: string) => {
	client.authStore.loadFromCookie(cookieString);
	const authData = client.authStore.baseModel;
	const { id, email, verified } = authData;
	return { id, email, verified };
};
