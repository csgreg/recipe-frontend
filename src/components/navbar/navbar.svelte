<script>
	import Button from 'components/button/button.svelte';
	import { ButtonKind, ButtonSize } from 'components/button/types';
	import Cancel24 from 'components/icons/Cancel24.svelte';
	import brandLogo from '$lib/static/logo.svg';
	import Menu24 from 'components/icons/Menu24.svelte';
	import Profile24 from 'components/icons/Profile24.svelte';

	let isLoggedIn = true;
	let isDown = true;
	const handleDown = () => {
		isDown = !isDown;
	};
</script>

<div class="navbar-container">
	<ul class="navbar" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<li class="navbar-brand">
			<img class="navbar-brand-logo" src={brandLogo} alt="project logo" />
		</li>
		{#if isLoggedIn}
			<li class="profile-btn">
				<div class="profile-icon">
					<a href="/profile"><Profile24 /> <span class="link-text">Profile</span></a>
				</div>
			</li>
		{:else}
			<li class="sign-up-btn">
				<Button
					size={ButtonSize.Field}
					onClick={() => {
						window.location.href = '/auth';
					}}
					kind={ButtonKind.Text}>Sign up</Button
				>
			</li>
		{/if}
		<li class="drop-down-btn" on:mousedown={handleDown}>
			{#if isDown} <Menu24 /> {:else} <Cancel24 /> {/if}
		</li>
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
	</ul>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.navbar-container {
		color: $text-primary;
		width: 100%;
		display: flex;
		background-color: $bg-primary;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

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
				display: flex;
				align-items: center;
				justify-content: center;
				height: 64px;

				&-logo {
					max-height: 40px;
				}
			}

			.sign-up-btn {
				position: absolute;
				top: 8px;
				right: 40px;
			}

			.profile-btn {
				position: absolute;
				top: 14px;
				right: 40px;

				.profile-icon {
					padding: $spacing-03;
					border-radius: 8px;

					a {
						display: flex;
						flex-direction: row;
						padding: $spacing-03;

						.link-text {
							margin-left: $spacing-02;
						}
					}

					a:hover {
						padding: $spacing-03;
						border-radius: 8px;
						background-color: $color-02;
						color: $bg-primary;
					}
				}
			}
			.drop-down-btn {
				position: absolute;
				left: 12px;
				top: 8px;
				padding: $spacing-04;
				border-radius: 4px;
				cursor: pointer;
			}
			.drop-down-btn:hover {
				background-color: $color-02;
			}
		}

		@media screen and (min-width: $screen-md) {
			height: 64px;

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
					min-width: 70px;
					min-height: 70px;
					margin-right: $spacing-08;
					&-logo {
						height: 40px;
					}
				}

				.sign-up-btn {
					position: unset;
					display: flex;
					justify-content: flex-end;
					width: 100%;
					height: 100%;
					order: 3;
				}

				.profile-btn {
					position: unset;
					display: flex;
					justify-content: flex-end;
					width: 100%;
					height: 100%;
					order: 3;
				}
				.drop-down-btn {
					display: none;
				}
			}
		}
	}
</style>
