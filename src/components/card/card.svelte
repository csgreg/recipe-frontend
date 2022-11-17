<div class="card"><slot /></div>

<style lang="scss">
	@import '../../style/variables.scss';
	.card {
		min-width: 330px;
		width: 33%;
		margin: auto;
		margin-bottom: $spacing-07;
		background-color: $bg-primary;
		border-radius: 12px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		padding: $spacing-05 $spacing-03 $spacing-07;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
