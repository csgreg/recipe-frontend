import { json } from "@sveltejs/kit";
import { createRecipe } from "src/pocketbase";

export async function POST(event: any) {
  const body = await event.request.json();
  console.log(body)
  const result = await createRecipe(body);
  return json(result)
}