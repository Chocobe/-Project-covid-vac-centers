<template>
	<div id="Layout_Default">
		<!-- Header -->
		<Ly_Default_Header></Ly_Default_Header>

		<!-- Nav -->
		<div class="navWrapper" :class="{ fixed: isFixedNav }">
			<Ly_Default_Nav></Ly_Default_Nav>
		</div>

		<!-- Main -->
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Ly_Default_Header from "@/layouts/default/Ly_Default_Header.vue";
import Ly_Default_Nav from "@/layouts/default/Ly_Default_Nav.vue";

export default Vue.extend({
	components: {
		Ly_Default_Header,
		Ly_Default_Nav,
	},

	data: () => {
		return {
			// Scroll > 300 일 때, true
			isFixedNav: false,
		};
	},

	methods: {
		scrollHandler() {
			const scrollY = window.scrollY;
			this.isFixedNav = scrollY > 300;
		},
	},

	mounted() {
		window.addEventListener("scroll", this.scrollHandler, true);
	},

	beforeDestroy() {
		window.removeEventListener("scroll", this.scrollHandler, true);
	},
});
</script>

<style scoped lang="scss">
#Layout_Default {
	@include width-height(100%);
	max-width: $media__maxWidth_md;

	margin: 0 auto;

	position: relative;

	.navWrapper.fixed {
		@include width-height(100%);

		position: fixed;
		top: 0;
		left: 0;
	}
}
</style>
