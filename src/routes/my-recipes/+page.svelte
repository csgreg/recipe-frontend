<script lang="ts">
	import RecipeCard from 'components/recipe-card/recipe-card.svelte';
	import type Recipe from 'entities/recipe';

	export let data: { myRecipes: Recipe[] };
</script>

{#each data.myRecipes as recipe}
	<RecipeCard data={recipe} />
{/each}
