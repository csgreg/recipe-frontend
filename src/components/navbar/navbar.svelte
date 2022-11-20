<script>
	import Button from 'components/button/button.svelte';
	import { ButtonKind, ButtonSize } from 'components/button/types';
	import Cancel24 from 'components/icons/Cancel24.svelte';
	import Logo from 'components/icons/Logo.svelte';
	import Menu24 from 'components/icons/Menu24.svelte';

	let isDown = true;
	const handleDown = () => {
		isDown = !isDown;
	};
</script>

<div class="navbar-container">
	<ul class="navbar" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<div class="navbar-brand">
			<Logo isSmall />
		</div>
		<li class="navbar-item" class:is-hidden={isDown} itemprop="name">
			<a data-sveltekit-reload itemprop="url" href="/">Home</a>
		</li>
		<li class="navbar-item" class:is-hidden={isDown} itemprop="name">
			<a data-sveltekit-reload itemprop="url" href="/create-recipe">Create</a>
		</li>
		<li class="navbar-item" class:is-hidden={isDown} itemprop="name">
			<a data-sveltekit-reload itemprop="url" href="http://www.travelstore.com/destinations"
				>About</a
			>
		</li>
		<li class="navbar-item" class:is-hidden={isDown} itemprop="name">
			<a data-sveltekit-reload itemprop="url" href="http://www.travelstore.com/cruises">Contact</a>
		</li>
		<div class="sign-up-btn">
			<Button
				size={ButtonSize.Field}
				onClick={() => {
					window.location.href = '/auth';
				}}
				kind={ButtonKind.Text}>Sign up</Button
			>
		</div>

		<span class="drop-down-btn" on:click={handleDown}>
			{#if isDown} <Menu24 /> {:else} <Cancel24 /> {/if}
		</span>
	</ul>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.navbar-container {
		color: $text-primary;
		width: 100%;
		display: flex;
		background-color: $bg-primary;

		.navbar {
			padding: 0;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 80%;
			margin: auto;

			&-item {
				width: 90%;
				font-weight: 500;

				a {
					padding: $spacing-03;
					width: 100%;
					text-align: center;
				}
			}

			&-item:last-of-type {
				margin-bottom: $spacing-05;
			}

			.is-hidden {
				display: none;
			}

			&-item:hover {
				background-color: $color-02;
				color: $bg-primary;
				border-radius: 8px;
				font-weight: 500;
			}

			&-brand {
				min-height: 70px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.sign-up-btn {
				position: absolute;
				top: 10px;
				right: 40px;
			}
			.drop-down-btn {
				position: absolute;
				left: 12px;
				top: 10px;
				padding: $spacing-04;
				border-radius: 4px;
				cursor: pointer;
			}
			.drop-down-btn:hover {
				background-color: $color-02;
			}
		}

		@media screen and (min-width: $screen-md) {
			height: 70px;

			.navbar {
				flex-direction: row;

				&-item {
					width: unset;
					margin-right: $spacing-07;
					padding: $spacing-03;
					font-weight: 500;
				}

				&-item:last-of-type {
					margin-bottom: unset;
				}

				.is-hidden {
					display: unset;
				}

				&-brand {
					margin-right: $spacing-08;
					margin-left: $spacing-06;
				}

				.sign-up-btn {
					position: unset;
					display: flex;
					justify-content: flex-end;
					width: 100%;
					height: 100%;
				}
				.drop-down-btn {
					display: none;
				}
			}
		}
	}
</style>
