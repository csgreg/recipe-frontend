<script lang="ts">
	import Textarea from 'components/textarea/textarea.svelte';
	import Input from 'components/input/input.svelte';
	import Button from 'components/button/button.svelte';
	import { ButtonKind } from 'components/button/types';
</script>

<div class="create-page">
	<div class="card">
		<h1 class="title">Create recipe</h1>
		<form>
			<div class="name-input-container">
				<Input placeholder="Recipe name" label="Recipe name" />
			</div>
			<div class="recipe-input-container">
				<Input placeholder="Recipe ingredients" label="Ingredients" />
			</div>
			<div class="time-input-container">
				<Input placeholder="5 mins" label="Recipe time needed" />
			</div>
			<div class="description-input-container">
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
		.card {
			min-width: 330px;
			width: 33%;
			margin-top: $spacing-07;
			margin: auto;
			background-color: $bg-primary;
			border-radius: 12px;
			height: 600px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			padding: $spacing-05 $spacing-03;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title {
				font-size: 24px;
				font-weight: 500;
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
