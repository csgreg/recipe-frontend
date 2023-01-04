export interface Recipe {
	id: string;
	created: string;
	updated: string;
	description: string;
	ingredients: Ingredient[];
	name: string;
	time: number;
	rating?: number;
	category?: string;
	image?: string;
	user_id?: string;
}

export interface Ingredient {
	name: string;
	number: string;
	unit: string;
	isUnitSelected: boolean;
}
