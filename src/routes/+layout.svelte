<script lang="ts">
	import '../app.scss';
	import Navbar from 'components/navbar/navbar.svelte';
	import Footer from 'components/footer/footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
