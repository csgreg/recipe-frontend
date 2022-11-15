export default interface Recipe {
	name: string;
	ingredients: { [key in string]: string };
	time: number;
	description: string;
}
