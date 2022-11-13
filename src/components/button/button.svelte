<script lang="ts">
	import { ButtonKind, ButtonSize } from './types';
	import classNames from 'classnames';

	export let onClick: () => void = () => {};
	export let kind: ButtonKind = ButtonKind.Primary;
	export let size: ButtonSize = ButtonSize.Field;
	export let loading: boolean = false;
	export let withIcon: boolean = false;
</script>

<button
	disabled={loading}
	class:withIcon
	class={classNames(
		'btn',
		{ 'btn-primary': kind === ButtonKind.Primary },
		{ 'btn-featured': kind === ButtonKind.Featured },
		{ 'btn-text': kind === ButtonKind.Text },
		{ 'btn-sm': size === ButtonSize.Small },
		{ '': size === ButtonSize.Field },
		{ 'btn-lg': size === ButtonSize.Large },
		{ loading: loading }
	)}
	on:click={onClick}><slot /></button
>

<style lang="scss">
	@import '../../style/variables.scss';
	.btn {
		font-size: 16px;
		text-transform: capitalize;
		color: $bg-secondary;
		font-weight: 600;
		cursor: pointer;
	}

	.btn:disabled {
		color: $bg-secondary;
	}

	.btn-featured {
		background: linear-gradient(45deg, $color-primary, $color-secondary);
		border: $color-secondary;
	}

	.btn-primary {
		background-color: $color-primary;
		border: $color-secondary;
	}

	.btn-primary:hover {
		background-color: $color-primary;
	}

	.btn-text {
		padding: 2px 4px;
		border: 0px;
		background-color: transparent;
		color: $color-secondary;
	}

	.btn-text:hover {
		text-decoration: underline;
		background-color: transparent;
	}

	.withIcon {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
	}
</style>
