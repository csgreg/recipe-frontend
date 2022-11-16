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
		<span class="navbar-end">
			<Button size={ButtonSize.Field} onClick={() => {}} kind={ButtonKind.Text}>Sign up</Button>
		</span>
	</ul>
</div>

<style lang="scss">
	@import '../../style/variables.scss';

	.navbar-container {
		width: 100%;
		height: 70px;
		display: flex;
		background-color: $bg-primary;

		.navbar {
			display: inline-flex;
			height: 100%;
			width: 80%;
			margin: auto;

			&-item {
				margin-right: $spacing-07;
				padding: $spacing-03 $spacing-04;
				font-weight: 500;
			}

			&-item:hover {
				background-color: $color-01;
				color: $bg-primary;
				border-radius: 8px;
				font-weight: 500;
			}

			&-brand {
				margin-right: $spacing-08;
				margin-left: $spacing-06;
			}
		}
	}
</style>
