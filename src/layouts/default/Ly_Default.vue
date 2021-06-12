<template>
	<div id="Layout_Default">
		<!-- Header -->
		<Ly_Default_Header></Ly_Default_Header>

		<!-- Nav -->

		<!-- Main -->
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Ly_Default_Header from "@/layouts/default/Ly_Default_Header.vue";

export default Vue.extend({
	components: {
		Ly_Default_Header,
	},
});
</script>

<style scoped lang="scss">
#Layout_Default {
	@include width-height(100%);
	max-width: $media__maxWidth_md;

	margin: 0 auto;
}
</style>
