<script>
	import Button from 'components/button/button.svelte';
	import { ButtonKind, ButtonSize } from 'components/button/types';
	import Logo from 'components/icons/Logo.svelte';
</script>

<div class="navbar-container">
	<ul class="navbar" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<div class="navbar-brand">
			<Logo isSmall />
		</div>
		<li class="navbar-item" itemprop="name">
			<a itemprop="url" href="http://www.travelstore.com/our-advantage">Home</a>
		</li>
		<li class="navbar-item" itemprop="name">
			<a itemprop="url" href="http://www.travelstore.com/our-travel-experts">Create</a>
		</li>
		<li class="navbar-item" itemprop="name">
			<a itemprop="url" href="http://www.travelstore.com/destinations">About</a>
		</li>
		<li class="navbar-item" itemprop="name">
			<a itemprop="url" href="http://www.travelstore.com/cruises">Contact</a>
		</li>
		<span class="navbar-end sign-up-btn">
			<Button size={ButtonSize.Field} onClick={() => {}} kind={ButtonKind.Text}>Sign up</Button>
		</span>
	</ul>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.navbar-container {
		width: 100%;
		display: flex;
		background-color: $bg-primary;

		.navbar {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 80%;
			margin: auto;

			&-item {
				width: 90%;
				font-weight: 500;

				a {
					width: 100%;
					padding: $spacing-03;
					text-align: center;
				}
			}

			&-item:hover {
				background-color: $color-01;
				color: $bg-primary;
				border-radius: 8px;
				font-weight: 500;
			}

			&-brand {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.sign-up-btn {
				position: absolute;
				top: 4px;
				right: 40px;
			}
		}

		@media screen and (min-width: $screen-md) {
			height: 70px;

			.navbar {
				flex-direction: row;

				&-item {
					width: unset;
					margin-right: $spacing-07;
					padding: $spacing-02 $spacing-04;
					font-weight: 500;
				}

				&-brand {
					margin-right: $spacing-08;
					margin-left: $spacing-06;
				}

				.sign-up-btn {
					top: 10px;
				}
			}
		}
	}
</style>
