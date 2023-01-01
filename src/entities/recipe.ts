export default interface Recipe {
	id?: string;
	name: string;
	ingredients: { isUnitSelected: boolean; name: string; number: number; unit: string }[];
	time: number;
	difficulty: number;
	description: string;
}
