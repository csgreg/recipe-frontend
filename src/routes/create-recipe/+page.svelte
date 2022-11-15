<script lang="ts">
	import Textarea from 'components/textarea/textarea.svelte';
	import Input from 'components/input/input.svelte';
	import Button from 'components/button/button.svelte';
	import { ButtonKind } from 'components/button/types';
</script>

<div class="create-page">
	<h1 class="title">Create Recipe</h1>
	<span class="subtitle">Just fill the form to create your recipe and share with others!</span>
	<div class="card">
		<form>
			<div class="container name-input-container">
				<Input placeholder="Recipe name" label="Recipe name" />
			</div>
			<div class="container recipe-input-container">
				<Input placeholder="Recipe ingredients" label="Ingredients" />
			</div>
			<div class="container time-input-container">
				<Input type="number" placeholder="5 mins" label="Recipe time needed" />
			</div>
			<div class="container description-input-container">
				<Textarea resizeable placeholder="Description" label="Description" />
			</div>
			<div class="button-container">
				<Button kind={ButtonKind.Featured}>Submit</Button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.create-page {
		padding-top: $spacing-07;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.title {
			margin: auto;
			font-size: 24px;
			font-weight: 500;
		}
		.subtitle {
			margin: auto;
			margin-bottom: $spacing-06;
			margin-left: $spacing-06;
			margin-right: $spacing-06;
			text-align: center;
		}
		.card {
			min-width: 330px;
			width: 33%;
			margin: auto;
			margin-bottom: $spacing-07;
			background-color: $bg-primary;
			border-radius: 12px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			padding: $spacing-05 $spacing-03 $spacing-07;
			display: flex;
			flex-direction: column;
			align-items: center;

			.container {
				margin-top: $spacing-03;
			}
			.button-container {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: $spacing-03;
			}
		}
	}
</style>
