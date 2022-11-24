<script lang="ts">
	import Option from './Option.svelte';

	export let options: string[];
	export let inputValue = '';
	export let selected: boolean = false;
	export let className: string = '';
	export let placeholder: string = '';
	export let label: string = '';
	let searchInput: HTMLInputElement;
	let filteredOptions: string[] = [];

	const filterOptions = () => {
		selected = false;
		let storageArr: string[] = [];
		if (inputValue) {
			options.forEach((option: string) => {
				if (option.toLowerCase().startsWith(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(option)];
				}
			});
		}
		filteredOptions = storageArr;
	};

	$: if (!inputValue) {
		filteredOptions = [];
		hiLiteIndex = null;
	}

	const setInputVal = (label: string) => {
		inputValue = removeBold(label);
		filteredOptions = [];
		hiLiteIndex = null;
		const input = document?.querySelector('#suggester-input') as HTMLInputElement;
		input.focus();
	};

	const hideSuggestions = () => {
		setTimeout(() => {
			filteredOptions = [];
		}, 100);
	};

	const makeMatchBold = (str: string) => {
		let matched = str.substring(0, inputValue.length);
		let makeBold = `<strong style="color: var(--bg-primary)">${matched}</strong>`;
		let boldedMatch = str.replace(matched, makeBold);
		return boldedMatch;
	};

	const removeBold = (str: string) => {
		//replace < and > all characters between
		return str.replace(/<(.)*?>/g, '');
		// return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
	};

	/* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */
	let hiLiteIndex: any = null;
	//$: console.log(hiLiteIndex);
	$: hiLitedCountry = filteredOptions[hiLiteIndex];

	const navigateList = (e: any) => {
		if (e.key === 'ArrowDown' && hiLiteIndex <= filteredOptions.length - 1) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredOptions.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			selected = true;
			setInputVal(filteredOptions[hiLiteIndex]);
		} else if (e.key === 'Escape') {
			filteredOptions = [];
		} else {
			return;
		}
	};
</script>

<svelte:window on:keydown={navigateList} />

<div class="autocomplete {className}">
	{#if label}
		<label for="suggester-input" class="label">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<input
		class:scrolled={filteredOptions.length > 0}
		class="input input-bordered"
		id="suggester-input"
		type="text"
		{placeholder}
		bind:this={searchInput}
		bind:value={inputValue}
		on:input={filterOptions}
		on:blur={hideSuggestions}
	/>
</div>

{#if filteredOptions.length > 0}
	<ul id="autocomplete-items-list">
		{#each filteredOptions as option, i}
			<Option
				itemLabel={option}
				highlighted={i === hiLiteIndex}
				on:click={() => {
					setInputVal(option);
					selected = true;
				}}
			/>
		{/each}
	</ul>
{/if}

<style lang="scss">
	@import '../../style/variables.scss';

	div.autocomplete {
		width: 100%;
	}

	input {
		padding: 10px;
		font-size: 16px;
		margin: 0;
	}

	.scrolled {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[type='text'] {
		background-color: $bg-secondary;
		color: $text-primary;
		width: 100%;
	}

	input::placeholder {
		color: $text-placeholder;
	}

	.input:focus {
		outline: none;
		outline-width: 0px;
		border-color: $text-secondary;
	}

	#autocomplete-items-list {
		text-align: start;
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
		width: 100%;
		border: 1px solid $text-placeholder;
		background-color: $text-primary;
		color: $bg-secondary;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
	}

	.label-text {
		color: $text-primary;
	}

	.label {
		margin-bottom: 0;
	}
</style>
