import PocketBase from "pocketbase";
import type Recipe from "src/entities/recipe";

const client = new PocketBase("https://recipe-service.fly.dev");

export const createRecipe = async (data: Recipe) => {
  return await client.records.create('recipes', data);
}
