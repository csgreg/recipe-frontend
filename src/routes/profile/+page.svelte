<script>
	import Button from 'components/button/button.svelte';
	import { api_routes } from 'src/routes';

	const logout = () => {
		fetch(api_routes.logout)
			.then((response) => response.json())
			.then(() => location.reload());
	};
</script>

<Button onClick={logout}>Logout</Button>
