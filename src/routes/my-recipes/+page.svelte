<script lang="ts">
	import RecipeCard from 'components/recipe-card/recipe-card.svelte';
	import type { Recipe } from 'src/@types/recipe';

	export let data: { myRecipes: Recipe[] };
	console.log(data.myRecipes);
</script>

{#each data.myRecipes as recipe}
	<RecipeCard data={recipe} />
{/each}
