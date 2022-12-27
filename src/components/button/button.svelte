<script lang="ts">
	import { ButtonKind, ButtonSize } from './types';
	import classNames from 'classnames';

	export let onClick: any = () => {};
	export let kind: ButtonKind = ButtonKind.Primary;
	export let size: ButtonSize = ButtonSize.Field;
	export let loading: boolean = false;
	export let withIcon: boolean = false;
	export let type: 'button' | 'submit' | 'reset' | null | undefined = undefined;
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
	{type}
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
		background: linear-gradient(45deg, $color-01, $color-02);
		border: $color-02;
	}

	.btn-primary {
		background-color: $color-01;
		border: $color-02;
	}

	.btn-primary:hover {
		background-color: $color-01;
	}

	.btn-text {
		padding: 2px 4px;
		border: 0px;
		background-color: transparent;
		color: $color-01;
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
