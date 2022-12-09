<script lang="ts">
	import '../app.scss';
	import Navbar from 'components/navbar/navbar.svelte';
	import Footer from 'components/footer/footer.svelte';
	export let data: { isLoggedIn: boolean };
</script>

<Navbar isLoggedIn={data.isLoggedIn} />
<slot />
<Footer />
