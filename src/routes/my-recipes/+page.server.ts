import type Recipe from 'entities/recipe';
import { getUserRecipes } from 'src/pocketbase';

interface GetRecipesResponse {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: Recipe[];
}

export async function load(event: any) {
	const { userData } = event.locals;
	const response: GetRecipesResponse = await getUserRecipes(userData.id);
	const myRecipes: Recipe[] = JSON.parse(JSON.stringify(response.items));

	return { myRecipes };
}
