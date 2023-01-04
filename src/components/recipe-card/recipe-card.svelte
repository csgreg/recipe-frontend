<script lang="ts">
	import Star24 from 'components/icons/Star24.svelte';
	import Tag from 'components/tag/tag.svelte';
	import type { Recipe } from 'src/@types/recipe';

	export let data: Recipe;
</script>

<div class="recipe-card">
	<span class="recipe-card-name">{data.name}</span>
	<span class="recipe-card-time">Time: {data.time} mins</span>
	{#if data.rating}
		<div class="recipe-card-difficulty">
			{#each Array(data.rating) as _, i}
				<div class="recipe-card-difficulty-highlighted">
					<Star24 />
				</div>
			{/each}
			{#each Array(5 - data.rating) as _, i}
				<div class="recipe-card-difficulty-faded">
					<Star24 />
				</div>
			{/each}
		</div>
	{/if}

	<div class="recipe-card-ingredients">
		{#each data.ingredients as ingredient}
			<Tag text="{ingredient.number}{ingredient.unit} {ingredient.name}" />
		{/each}
	</div>
	<div class="recipe-card-description">
		{data.description}
	</div>
</div>

<style lang="scss">
	@import '../../style/variables.scss';
	.recipe-card {
		display: flex;
		flex-direction: column;
		padding: $spacing-05;
		background-color: $bg-primary;
		margin: 20px;
		border-radius: 8px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		border: 1px solid $grey-20;

		&-name {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: $spacing-02;
		}

		&-time {
			margin-bottom: $spacing-02;
		}

		&-difficulty {
			display: flex;
			gap: $spacing-02;
			margin-bottom: $spacing-03;

			&-highlighted {
				color: $color-03;
			}

			&-faded {
				color: $grey-40;
			}
		}

		&-ingredients {
			display: flex;
			flex-wrap: wrap;
			gap: $spacing-03;
			margin-bottom: $spacing-03;
		}
	}
</style>
