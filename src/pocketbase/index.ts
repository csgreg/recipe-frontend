import PocketBase from 'pocketbase';
import type Recipe from 'src/entities/recipe';

const client: any = new PocketBase('https://recipe-service.fly.dev');

export const createRecipe = async (data: Recipe) => {
	return await client.records.create('recipes', data);
};

export const createUser = async (data: any) => {
	/* email =? confirmEmail */
	return await client.Users.create({
		email: data.email,
		password: data.password,
		passwordConfirm: data.confirmPassword
	});
}

export const authViaEmail = async (data: any) => {
	return await client.collection("users").authWithPassword({
		email: 'marcinnyo@gmail.com',
		password: 'Utolso122112121212123',
	})
}