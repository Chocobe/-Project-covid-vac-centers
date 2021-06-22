<template>
	<div class="skillItem">
		<div v-if="icon.length > 0" class="skillItem__icon">
			<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
		</div>

		<h3 class="skillItem__title">
			{{ title }}
		</h3>

		<div class="skillItem__contentWrapper">
			<div class="skillItem__gaugeBar">
				<Comp_GaugeBar :percent="percent"></Comp_GaugeBar>
			</div>

			<p class="skillItem__content">
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Comp_GaugeBar from "@/components/Comp_GaugeBar.vue";

export default Vue.extend({
	components: {
		Comp_GaugeBar,
	},

	props: {
		icon: {
			type: Array,
			default: () => {
				return [];
			},
		},

		title: {
			type: String,
			required: true,
		},

		percent: {
			type: String,
			default: "50%",
		},
	},
});
</script>

<style scoped lang="scss">
.skillItem {
	@include flex(flex-start, flex-start);

	margin-top: 20px;

	position: relative;

	&__icon {
		@include width-height(50px);

		position: absolute;
		top: 0;
		right: -20px;

		z-index: -1;

		@media screen and (max-width: $media__maxWidth_xs) {
			right: -10px;
		}

		& > * {
			@include width-height(100%);

			color: $colors__purple_01;
		}
	}

	&__title {
		@include width-height(100px);

		margin-bottom: 5px;
		padding-left: 20px;

		position: relative;

		&::before {
			@include width-height(5px, 5px);

			content: "";

			position: absolute;
			top: 50%;
			left: 7.5px;
			transform: translateY(-50%);

			background-color: $colors__blue_02;
		}
	}

	&__contentWrapper {
		@include width-height(100%);

		padding-left: 20px;

		flex: 1;

		@media screen and (max-width: $media__maxWidth_xs) {
			flex-shrink: 0;
			flex-basis: auto;
		}
	}

	&__gaugeBar {
		@include width-height(100%);
		max-width: 200px;
	}

	&__content {
		margin-top: 5px;

		word-break: keep-all;
	}
}
</style>
