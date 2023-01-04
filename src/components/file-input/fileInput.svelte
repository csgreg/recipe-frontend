<script lang="ts">
	export let fileData: any;

	const convertToBase64 = (file: any) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleFileUpload = async (e: any) => {
		const file = e.target.files[0];
		const base64 = await convertToBase64(file);
		console.log(typeof base64);
		fileData = base64;
	};
</script>

<input type="file" class="file-input w-full max-w-xs" />

<style lang="scss">
	@import '../../style/variables.scss';
</style>
