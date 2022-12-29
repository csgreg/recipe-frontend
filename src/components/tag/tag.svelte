<script lang="ts">
	export let text: string;
</script>

<section class="tag">
	{text}
</section>

<style lang="scss">
	@import '../../style/variables.scss';
	.tag {
		border-radius: 20px;
		background-color: $grey-30;
		width: fit-content;
		padding: $spacing-01 $spacing-05;
		white-space: nowrap;
	}
</style>
