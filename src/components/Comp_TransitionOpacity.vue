<template>
	<transition name="transition-opacity" :mode="mode">
		<slot></slot>
	</transition>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	props: {
		mode: {
			type: String,
			default: "out-in",
		},
	},
});
</script>

<style scoped>
.transition-opacity-enter-active,
.transition-opacity-leave-active {
	transition: opacity 0.25s;
}

.transition-opacity-enter,
.transition-opacity-leave-to {
	opacity: 0;
}
</style>
