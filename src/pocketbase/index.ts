import PocketBase from 'pocketbase';
import type { SignInData, SignUpData } from 'src/@types/requestData';
import type Recipe from 'src/entities/recipe';

const client: any = new PocketBase('https://recipe-service.fly.dev');

export const createRecipe = async (data: Recipe) => {
	return await client.records.create('recipes', data);
};

export const createUser = async (data: SignUpData) => {
	return await client.Users.create({
		email: data.email,
		password: data.password,
		passwordConfirm: data.confirmPassword
	});
};

export const authViaEmail = (data: SignInData) => {
	//return await client.users.authViaEmail(data.email, data.password);
	return client.users.authViaEmail('utolso@utolso.com', 'Utolso122112121212123');
};
