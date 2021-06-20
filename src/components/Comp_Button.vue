<template>
	<button
		class="button"
		@click="onClick"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		{{ name }}
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		name: {
			type: String,
			default: "버튼명",
		},
	},

	methods: {
		onClick(): void {
			this.$emit("click", this.name);
		},

		onMouseEnter(): void {
			this.$emit("enter", this.name);
		},

		onMouseLeave(): void {
			this.$emit("leave", this.name);
		},
	},
});
</script>

<style scoped lang="scss">
.button {
	@include width-height(100%);

	padding: 10px 10px;

	display: inline-block;

	border: none;
	border-radius: 10px;
	box-shadow: 0 3px 6px rgba(#000, 0.36);
	background-color: $colors__white_01;

	transition: background-color 0.25s;

	&:hover {
		background-color: rgba($colors__blue_03, 0.3);
	}

	&:active {
		background-color: rgba($colors__blue_03, 1);
	}
}
</style>
