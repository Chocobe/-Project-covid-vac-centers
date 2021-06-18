<template>
	<div id="Layout_Default" @scroll="scrollHandler">
		<!-- Header -->
		<div class="headerWrapper">
			<Ly_Default_Header></Ly_Default_Header>
		</div>

		<!-- Nav -->
		<div
			class="navWrapper"
			:class="{ fixed: isFixedNav }"
			v-resize
			@resize="onResize"
		>
			<Ly_Default_Nav></Ly_Default_Nav>
		</div>

		<!-- Main -->
		<main class="main" :style="{ marginTop: navWrapperHeight }">
			<Comp_TransitionOpacity>
				<router-view></router-view>
			</Comp_TransitionOpacity>
		</main>

		<!-- 위로 이동 버튼 -->
		<div class="fixedButton">
			<Comp_IconButton @click="goToTop"></Comp_IconButton>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Ly_Default_Header from "@/layouts/default/Ly_Default_Header.vue";
import Ly_Default_Nav from "@/layouts/default/Ly_Default_Nav.vue";
import Comp_TransitionOpacity from "@/components/Comp_TransitionOpacity.vue";
import Comp_IconButton from "@/components/Comp_IconButton.vue";

export default Vue.extend({
	components: {
		Ly_Default_Header,
		Ly_Default_Nav,
		Comp_TransitionOpacity,
		Comp_IconButton,
	},

	data: () => {
		return {
			// Scroll > 300 일 때, true
			isFixedNav: false,
			navWrapperHeight: "0",
		};
	},

	methods: {
		scrollHandler() {
			const rootElement = this.$el as HTMLDivElement;
			const scrollTop = rootElement.scrollTop;
			this.isFixedNav = scrollTop > 300;
		},

		onResize(event: Event) {
			const navWrapperElement = event.target as HTMLDivElement;
			const height = getComputedStyle(navWrapperElement).height;

			if (this.navWrapperHeight !== height) {
				this.navWrapperHeight = height;
			}
		},

		goToTop(): void {
			const headerElement = this.$el.querySelector(
				".headerWrapper",
			) as HTMLDivElement;

			this.$nextTick(() => {
				headerElement.scrollIntoView();
			});
		},
	},
});
</script>

<style scoped lang="scss">
#Layout_Default {
	@include width-height(100%, 100vh);

	margin: 0 auto;

	position: relative;
	overflow-y: scroll;

	.headerWrapper {
		@include width-height(100%);
		max-width: $media__maxWidth_md;

		margin: 0 auto;
	}

	.navWrapper {
		@include width-height(100%);
		max-width: $media__maxWidth_md;

		margin: 0 auto;

		position: absolute;
		top: 300px;
		left: 50%;
		transform: translateX(-50%);

		z-index: 2;

		&.fixed {
			position: fixed;
			top: 0;
			left: calc(50% - 8px);
			transform: translateX(-50%);
		}
	}

	.main {
		@include width-height(100%);
		max-width: $media__maxWidth_md;

		margin: 0 auto;
	}

	.fixedButton {
		position: fixed;
		bottom: 40px;
		right: 40px;

		z-index: 3;
	}
}
</style>
