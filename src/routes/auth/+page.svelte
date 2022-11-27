<script lang="ts">
	import Button from 'components/button/button.svelte';
	import Card from 'components/card/card.svelte';
	import Input from 'components/input/input.svelte';
	import { api_routes } from 'src/routes';

	let signUpEmail: string = '';
	let signUpPassword: string = '';
	let signUpConfirmPassword: string = '';

	const handleSignIn = () => {
		fetch(api_routes.signin, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: signUpEmail,
				password: signUpPassword,
				confirmPassword: signUpConfirmPassword
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};

	const handleSignUp = () => {
		fetch(api_routes.signup, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: signUpEmail,
				password: signUpPassword,
				confirmPassword: signUpConfirmPassword
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};
</script>

<div class="auth-page">
	<h1 class="page-title">Join us,</h1>
	<div class="page-subtitle">to access all of our features.</div>
	<div class="sign-in-nav">Already have an account? <a class="sign-in-nav-link">Sign in</a></div>
	<div class="auth-section">
		<div class="left">
			<Card>
				<div class="sign-up-container">
					<h2 class="subtitle">Sign Up</h2>
					<div class="input-container">
						<Input bind:inputValue={signUpEmail} placeholder="email" label="Email" />
					</div>
					<div class="input-container">
						<Input bind:inputValue={signUpPassword} placeholder="password" label="Password" />
					</div>
					<div class="input-container">
						<Input
							bind:inputValue={signUpConfirmPassword}
							placeholder="confirm password"
							label="Confirm Password"
						/>
					</div>
					<div class="cta-btn">
						<Button onClick={handleSignUp}>Sign Up</Button>
					</div>
				</div>
			</Card>
		</div>
		<div class="right">
			<Card>
				<div class="login-container">
					<h2 class="subtitle">Login</h2>
					<div class="input-container">
						<Input placeholder="email" label="Email" />
					</div>
					<div class="input-container">
						<Input placeholder="password" label="Password" />
					</div>
					<div class="forgot-password">
						<a href="#">Forgot my password</a>
					</div>
					<div class="cta-btn">
						<Button onClick={handleSignIn}>Login</Button>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../style/variables.scss';
	.auth-page {
		text-align: center;
		.page-title {
			margin-top: $spacing-06;
			font-size: 24px;
			font-weight: 600;
		}

		.sign-in-nav {
			margin-top: $spacing-02;
			.sign-in-nav-link {
				cursor: pointer;
				text-align: start;
				color: $color-02;
			}

			.sign-in-nav-link:hover {
				text-decoration: underline;
			}
		}

		.auth-section {
			display: flex;
			flex-direction: column;
			margin-top: $spacing-07;

			.subtitle {
				font-size: 20px;
				font-weight: 500;
				margin-bottom: $spacing-03;
			}

			.input-container {
				margin-bottom: $spacing-02;
			}

			.cta-btn {
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: flex-end;
			}

			.login-container {
				height: 350px;
				text-align: center;
				display: flex;
				flex-direction: column;

				.forgot-password {
					margin-top: $spacing-03;
					text-align: start;
					color: $color-02;
				}

				.forgot-password:hover {
					text-decoration: underline;
				}
			}

			.sign-up-container {
				height: 350px;
				text-align: center;
				display: flex;
				flex-direction: column;
			}

			@media screen and (min-width: $screen-md) {
				flex-direction: row;
				justify-content: center;

				.sign-in-nav {
					display: none;
				}

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
		@media screen and (min-width: $screen-md) {
			.sign-in-nav {
				display: none;
			}
		}
	}
</style>
