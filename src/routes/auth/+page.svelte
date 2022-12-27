<script lang="ts">
	import Alert from 'components/alert/alert.svelte';
	import Button from 'components/button/button.svelte';
	import Card from 'components/card/card.svelte';
	import Input from 'components/input/input.svelte';
	import { api_routes } from 'src/routes';

	let signUpEmail: string = '';
	let signUpPassword: string = '';
	let signUpConfirmPassword: string = '';

	let signInEmail: string = '';
	let signInPassword: string = '';

	let isSignupError: boolean = false;
	let isSigninError: boolean = false;

	let isSignupLoading: boolean = false;
	let isSigninLoading: boolean = false;

	let isSignupSuccess: boolean = false;

	const handleSignIn = (e: Event) => {
		isSigninLoading = true;
		e.preventDefault();
		fetch(api_routes.signin, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					window?.location.reload();
				} else {
					isSigninError = true;
				}
			})
			.catch((e: Error) => {
				console.warn(e);
			})
			.finally(() => {
				isSigninLoading = false;
			});
	};

	const handleSignUp = (e: Event) => {
		isSignupLoading = true;
		e.preventDefault();
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
				if (data.success) {
					isSignupSuccess = true;
				} else {
					isSignupError = true;
				}
			})
			.catch((e: Error) => {
				console.warn(e);
			})
			.finally(() => {
				isSignupLoading = false;
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
				<form on:submit={handleSignUp} class="sign-up-container">
					<h2 class="subtitle">Sign Up</h2>
					<div class="input-container">
						<Input domId="email" bind:inputValue={signUpEmail} placeholder="email" label="Email" />
					</div>
					<div class="input-container">
						<Input
							domId="password"
							bind:inputValue={signUpPassword}
							placeholder="password"
							label="Password"
							type="password"
						/>
					</div>
					<div class="input-container">
						<Input
							domId="confirm-password"
							bind:inputValue={signUpConfirmPassword}
							placeholder="confirm password"
							label="Confirm Password"
							type="password"
						/>
					</div>
					{#if isSignupError || isSignupSuccess}
						<div class="sign-up-alert">
							<Alert
								isError={!isSignupSuccess}
								message={isSignupSuccess ? 'Sign up succeeded!' : 'Sign up failed!'}
							/>
						</div>
					{/if}
					<div class="cta-btn">
						<Button loading={isSignupLoading} type="submit">Sign Up</Button>
					</div>
				</form>
			</Card>
		</div>
		<div class="right">
			<Card>
				<form on:submit={handleSignIn} class="login-container">
					<h2 class="subtitle">Login</h2>
					<div class="input-container">
						<Input bind:inputValue={signInEmail} placeholder="email" label="Email" />
					</div>
					<div class="input-container">
						<Input
							bind:inputValue={signInPassword}
							placeholder="password"
							label="Password"
							type="password"
						/>
					</div>
					<div class="forgot-password">
						<a href="#">Forgot my password</a>
					</div>
					{#if isSigninError}
						<div class="sign-in-alert">
							<Alert isError message="Sign in failed!" />
						</div>
					{/if}
					<div class="cta-btn">
						<Button loading={isSigninLoading} type="submit">Login</Button>
					</div>
				</form>
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

			.sign-up-alert {
				margin-top: $spacing-04;
			}

			.sign-in-alert {
				margin-top: $spacing-04;
			}

			.cta-btn {
				display: flex;
				height: 100%;
				justify-content: center;
				align-items: flex-end;
			}

			.login-container {
				height: 420px;
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
				height: 420px;
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
