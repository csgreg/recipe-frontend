<script>
	import Button from 'components/button/button.svelte';
	import Card from 'components/card/card.svelte';
	import Input from 'components/input/input.svelte';
</script>

<div class="auth-page">
	<div class="left">
		<Card>
			<div class="sign-up-container">
				<h2 class="subtitle">Sign Up</h2>
				<div>
					<Input placeholder="email" label="Email" />
				</div>
				<div>
					<Input placeholder="password" label="Password" />
				</div>
				<div>
					<Input placeholder="confirm password" label="Confirm Password" />
				</div>
				<div class="cta-btn">
					<Button onClick={() => {}}>Sign Up</Button>
				</div>
			</div>
		</Card>
	</div>
	<div class="right">
		<Card>
			<div class="login-container">
				<h2 class="subtitle">Login</h2>
				<div>
					<Input placeholder="email" label="Email" />
				</div>
				<div>
					<Input placeholder="password" label="Password" />
				</div>
				<div>
					<a href="#">Forgot my password</a>
				</div>
				<div class="cta-btn">
					<Button onClick={() => {}}>Login</Button>
				</div>
			</div>
		</Card>
	</div>
</div>

<style lang="scss">
	@import '../../style/variables.scss';
	.auth-page {
		display: flex;
		flex-direction: column;
		margin-top: $spacing-07;
		.subtitle {
			font-size: 20px;
			font-weight: 500;
		}
		.login-container {
			height: 350px;
			text-align: center;
			display: flex;
			flex-direction: column;
			.cta-btn {
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: flex-end;
			}
		}
		.sign-up-container {
			height: 350px;
			text-align: center;
			display: flex;
			flex-direction: column;
			.cta-btn {
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: flex-end;
			}
		}

		@media screen and (min-width: $screen-md) {
			flex-direction: row;
			justify-content: center;
			.left {
				margin: $spacing-01 $spacing-05;
				min-height: 400px;
			}
			.right {
				margin: $spacing-01 $spacing-05;
				min-height: 400px;
			}
		}
	}
</style>
