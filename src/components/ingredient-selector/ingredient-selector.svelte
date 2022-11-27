<script lang="ts">
	import Button from 'components/button/button.svelte';
	import { ButtonKind } from 'components/button/types';
	import Input from 'components/input/input.svelte';
	import Suggester from 'components/suggester/suggester.svelte';
	import type { IngredientInputRowState } from './types';

	export let label: string = 'Ingredients';
	export let value: IngredientInputRowState[] = [];

	const handleAddRow = (e: any) => {
		e.preventDefault();
		value = [...value, { name: '', number: '', unit: '', isUnitSelected: false }];
	};
</script>

{#if label}
	<span class="label-text">{label}</span>
{/if}
{#each value as _, i}
	<div class="ingredint-selector">
		<div class="name-input">
			<Input domId="ingredient-name" bind:inputValue={value[i].name} placeholder="banana" />
		</div>
		<div class="number-input">
			<Input
				domId="ingredient-number"
				bind:inputValue={value[i].number}
				type="number"
				placeholder="10"
			/>
		</div>
		<div class="unit-input">
			<Suggester
				options={['dkg', 'gram', 'cup', 'piece', 'kg', 'ml', 'dl', 'l']}
				bind:inputValue={value[i].unit}
				placeholder="dkg"
				bind:selected={value[i].isUnitSelected}
			/>
		</div>
	</div>
{/each}
<div class="add-btn">
	<Button onClick={handleAddRow} kind={ButtonKind.Text}>Add</Button>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.label-text {
		color: $text-primary;
		padding-bottom: $spacing-01;
	}

	.ingredint-selector {
		display: flex;
		max-width: 250px;
		margin-bottom: $spacing-03;

		.number-input {
			max-width: 30%;
			margin-right: $spacing-03;
		}

		.name-input {
			margin-right: $spacing-03;
			max-width: 45%;
		}

		.unit-input {
			min-width: 30%;
			margin-right: 0;
		}
	}

	.add-btn {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
