<script lang="ts">
	export let placeholder: string;
	export let inputValue: string = '';
	export let resizeable: boolean = false;
	export let label: string = '';
	export let domId: string = '';

	const handleInput = (e: any) => {
		inputValue = e.target.value;
	};
</script>

{#if label}
	<label for={domId} class="label">
		<span class="label-text">{label}</span>
	</label>
{/if}
<textarea
	id={domId}
	class:resizeable
	on:input={handleInput}
	class="textarea textarea-bordered"
	{placeholder}
/>

<style lang="scss">
	@import '../../style/variables.scss';
	.textarea {
		color: $text-primary;
		min-width: 100%;
		background-color: $bg-secondary;
		resize: none;
	}

	.textarea::placeholder {
		color: $text-placeholder;
	}

	.textarea:focus {
		outline: none;
		outline-width: 0;
		border-color: $text-secondary;
	}

	.resizeable {
		resize: vertical;
	}

	.label-text {
		color: $text-primary;
	}

	.label {
		margin-bottom: 0;
		padding-bottom: $spacing-01;
	}
</style>
