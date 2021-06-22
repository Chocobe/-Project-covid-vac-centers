<template>
	<section class="blDevInfoCard">
		<h1 class="blDevInfoCard__title">
			{{ title }}
		</h1>

		<div class="blDevInfoCard__content">
			<slot></slot>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped lang="scss">
.blDevInfoCard {
	padding: 20px 40px;

	border-radius: 10px;
	box-shadow: 1px 2px 6px rgba($colors__black_01, 0.5);

	position: relative;

	@media screen and (max-width: $media__maxWidth_xs) {
		padding: 20px;
	}

	&__title {
		margin-bottom: 10px;

		color: $colors__black_01;
		font-size: 1.25rem;
		font-weight: 900;
	}
}
</style>
