<script lang="ts">
	export let label: string | undefined = undefined;
	export let domId: string | undefined = undefined;
	export let placeholder: string;
	export let type: string = 'text';
	export let className: string = '';
	export let inputValue: string = '';
	export let withButton: boolean = false;

	const handleInput = (e: any) => {
		inputValue = e.target.value;
	};
</script>

<div class="form-control">
	{#if label}
		<label for={domId} class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<input
		class:withButton
		on:input={handleInput}
		value={inputValue}
		id={domId}
		{type}
		{placeholder}
		class={`input input-bordered ${className}`}
	/>
</div>

<style lang="scss">
	@import '../../style/variables.scss';
	.label-text {
		color: $text-primary;
	}

	.label {
		margin-bottom: 0;
		padding-bottom: $spacing-01;
	}

	.input {
		color: $text-primary;
		min-width: 100%;
		background-color: $bg-secondary;
	}

	.input::placeholder {
		color: $text-placeholder;
	}

	.input:focus {
		outline: none;
		outline-width: 0px;
		border-color: $text-secondary;
	}

	.withButton {
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
</style>
