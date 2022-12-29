<script lang="ts">
	import Star24 from 'components/icons/Star24.svelte';
	import Tag from 'components/tag/tag.svelte';
</script>

<div class="recipe-card">
	<span class="recipe-card-name">Fasirt krumplival</span>
	<span class="recipe-card-time">Time: 36 mins</span>
	<div class="recipe-card-difficulty">
		<div class="recipe-card-difficulty-highlighted">
			<Star24 />
		</div>
		<div class="recipe-card-difficulty-highlighted">
			<Star24 />
		</div>
		<div class="recipe-card-difficulty-highlighted">
			<Star24 />
		</div>
		<div class="recipe-card-difficulty-faded">
			<Star24 />
		</div>
		<div class="recipe-card-difficulty-faded">
			<Star24 />
		</div>
	</div>
	<div class="recipe-card-ingredients">
		<Tag text="24dkg marhahus" />
		<Tag text="24dkg marhahus" />
		<Tag text="24dkg marhahus" />
		<Tag text="24dkg marhahus" />
		<Tag text="24dkg marhahus" />
		<Tag text="24dkg marhahus" />
	</div>
	<div class="recipe-card-description">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tenetur mollitia illum odio
		numquam et temporibus, molestiae id at nisi ducimus nihil quasi labore iusto blanditiis,
		molestias quas! Porro, magni.
	</div>
</div>

<style lang="scss">
	@import '../../style/variables.scss';
	.recipe-card {
		display: flex;
		flex-direction: column;
		padding: $spacing-05;
		background-color: $bg-primary;
		margin: 20px;
		border-radius: 8px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		border: 1px solid $grey-20;

		&-name {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: $spacing-02;
		}

		&-time {
			margin-bottom: $spacing-02;
		}

		&-difficulty {
			display: flex;
			gap: $spacing-02;
			margin-bottom: $spacing-03;

			&-highlighted {
				color: $color-03;
			}

			&-faded {
				color: $grey-40;
			}
		}

		&-ingredients {
			display: flex;
			flex-wrap: wrap;
			gap: $spacing-03;
			margin-bottom: $spacing-03;
		}
	}
</style>
