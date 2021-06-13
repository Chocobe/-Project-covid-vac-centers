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
	//
}
</style>
