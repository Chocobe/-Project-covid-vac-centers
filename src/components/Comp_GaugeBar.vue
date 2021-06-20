<template>
	<div class="gaugeBar" @click="onClick" :style="rootStyle">
		<div class="gaugeBar__value"></div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		height: {
			type: String,
			default: "20px",
		},

		percent: {
			type: String,
			default: "0",
		},
	},

	computed: {
		rootStyle(): {
			height?: string;
		} {
			return { height: this.height };
		},
	},

	methods: {
		initValue(): void {
			const valueElement = this.$el.querySelector(
				".gaugeBar__value",
			) as HTMLDivElement;

			setTimeout(() => {
				valueElement.style.cssText = `width: ${this.percent}`;
			});
		},

		onClick(): void {
			const valueElement = this.$el.querySelector(
				".gaugeBar__value",
			) as HTMLDivElement;
			valueElement.style.cssText = "transition: none; width: 0;";

			setTimeout(() => {
				this.initValue();
			});
		},
	},

	mounted(): void {
		this.initValue();
	},
});
</script>

<style scoped lang="scss">
.gaugeBar {
	@include width-height(100%, 100%);
	min-height: 10px;

	$borderRadius: 20px;

	border-radius: $borderRadius;
	box-shadow: 0 3px 6px rgba(#000, 0.5);

	&__value {
		@include width-height(0, 100%);

		border-radius: $borderRadius;
		background-color: $colors__orange_01;

		transition: width 0.5s;
	}
}
</style>
