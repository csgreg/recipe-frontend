<script lang="ts">
	export let itemLabel: string;
	export let highlighted: boolean;
</script>

<li class="autocomplete-items" class:autocomplete-active={highlighted} on:click>
	{@html itemLabel}
</li>

<style>
	li.autocomplete-items {
		list-style: none;
		border-bottom: 1px solid #d4d4d4;
		z-index: 99;
		top: 100%;
		left: 0;
		right: 0;
		padding: 10px;
		cursor: pointer;
		background-color: transparent;
		width: 100%;
		margin: auto;
	}

	li.autocomplete-items:last-of-type {
		border-bottom: 0px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	li.autocomplete-items:hover {
		/*when hovering an item:*/
		background-color: var(--text-secondary);
		color: var(--bg-primary);
	}

	li.autocomplete-items:active {
		/*when navigating through the items using the arrow keys:*/
		background-color: var(--color-primary) !important;
		color: var(--bg-primary);
	}

	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: var(--color-primary) !important;
		color: var(--bg-primary);
	}
</style>
