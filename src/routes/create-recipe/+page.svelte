<script lang="ts">
	import Textarea from 'components/textarea/textarea.svelte';
	import Input from 'components/input/input.svelte';
	import Button from 'components/button/button.svelte';
	import Alert from 'components/alert/alert.svelte';
	import { ButtonKind } from 'components/button/types';
	import { api_routes } from 'src/routes';

	let name: string;
	let description: string;
	let time: number;

	let loading: boolean = false;
	let message: string = '';
	let isError: boolean = false;

	const handleSubmit = (e: any) => {
		e.preventDefault();
		isError = false;
		message = '';
		loading = true;
		fetch(api_routes.create_recipe, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				time,
				description,
				ingredients: { banan: '10dkg' }
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					message = 'Recipe created successfully!';
				} else {
					message = 'Something went wrong...';
					isError = true;
				}
				loading = false;
			});
	};
</script>

<svelte:head>
	<title>Create recipe</title>
</svelte:head>

<div class="create-page">
	<h1 class="title">Create Recipe</h1>
	<span class="subtitle">Just fill the form to create your recipe and share with others!</span>
	<div class="card">
		<form on:submit={handleSubmit}>
			<div class="container name-input-container">
				<Input
					domId="recipe-name"
					placeholder="Recipe name"
					label="Recipe name"
					bind:inputValue={name}
				/>
			</div>
			<div class="container recipe-input-container">
				<Input domId="recipe-ingredints" placeholder="Recipe ingredients" label="Ingredients" />
			</div>
			<div class="container time-input-container">
				<Input
					type="number"
					domId="recipe-time"
					placeholder="5"
					label="Recipe time needed"
					bind:inputValue={time}
				/>
				<span>minutes</span>
			</div>
			<div class="container description-input-container">
				<Textarea
					domId="recipe-description"
					resizeable
					placeholder="Description"
					label="Description"
					bind:inputValue={description}
				/>
			</div>
			<div class="button-container">
				<Button {loading} kind={ButtonKind.Featured}>Submit</Button>
			</div>
		</form>
	</div>
	<div class="alert-container">
		<Alert {isError} {message} />
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
			.message {
				margin-top: $spacing-04;
			}

			.time-input-container {
				display: flex;

				span {
					display: flex;
					align-items: center;
					margin-top: $spacing-06;
					margin-left: $spacing-04;
				}
			}
		}

		.alert-container {
			max-width: 400px;
			margin: auto;
			margin-bottom: $spacing-08;
		}
	}
</style>
