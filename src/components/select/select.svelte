<script lang="ts">
	export let label: string | undefined = undefined;
	export let domId: string | undefined = undefined;
	export let options: string[];
	export let placeholder: string;
	export let value: string;
</script>

{#if label}
	<label for={domId} class="label">
		<span class="label-text">{label}</span>
	</label>
{/if}
<select bind:value class="select w-full max-w-xs">
	<option disabled selected>{placeholder}</option>
	{#each options as option}
		<option>{option}</option>
	{/each}
</select>

<style lang="scss">
	@import '../../style/variables.scss';
	.label-text {
		color: $text-primary;
	}

	.label {
		margin-bottom: 0;
		padding-bottom: $spacing-01;
	}

	.select {
		height: 48px;
		color: $text-primary;
		min-width: 100%;
		background-color: $bg-secondary;
		border-radius: 8px;
		-moz-appearance: none; /* Firefox */
		-webkit-appearance: none; /* Safari and Chrome */
		appearance: none;
		padding: 0px 16px;
	}

	.select::placeholder {
		color: $text-placeholder;
	}

	.select:focus {
		outline: none;
		outline-width: 0px;
		border-color: $text-secondary;
	}
</style>
