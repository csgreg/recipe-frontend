export default interface Recipe {
	id?: string;
	name: string;
	ingredients: { [key in string]: string };
	time: number;
	description: string;
}
