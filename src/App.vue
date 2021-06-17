<template>
	<div id="app">
		<Comp_TransitionOpacity>
			<router-view></router-view>
		</Comp_TransitionOpacity>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { module_Nav } from "@/store/nav/module_Nav";
import Comp_TransitionOpacity from "@/components/Comp_TransitionOpacity.vue";

export default Vue.extend({
	components: {
		Comp_TransitionOpacity,
	},

	methods: {
		async initNavModule() {
			if (!this.$store.hasModule("/nav")) {
				this.$store.registerModule("/nav", module_Nav);
			}

			await this.$store.dispatch("/nav/GET_NAV_LIST");
		},
	},

	async created() {
		await this.initNavModule();
	},
});
</script>

<style lang="scss">
@media screen and (max-width: $media__maxWidth_xs) {
	html,
	body {
		font-size: 14px !important;
	}
}

#app {
	//
}
</style>
