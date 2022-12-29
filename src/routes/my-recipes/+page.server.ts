import { getUserRecipes } from 'src/pocketbase';

export function load(event: any) {
	const { userData } = event.locals;
	const myRecipes = getUserRecipes(userData.id)
		.then((recipes: any) => JSON.parse(recipes))
		.then((data: any) => console.log(data));

	//console.log(myRecipes);

	//return { myRecipes };
}
