<script lang="ts">
	import AlertError24 from 'components/icons/AlertError24.svelte';
	import AlertSuccess24 from 'components/icons/AlertSuccess24.svelte';

	export let message: string = 'Default message!';
	export let isError: boolean = false;
</script>

{#if message}
	<div class="alert {isError ? 'alert-error' : 'alert-success'} shadow-lg message">
		<div>
			{#if isError}
				<AlertError24 />
			{:else}
				<AlertSuccess24 />
			{/if}
			<span>{message}</span>
		</div>
	</div>
{/if}
