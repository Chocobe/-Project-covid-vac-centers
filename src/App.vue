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
import { module_covidCenters } from "@/store/covidCenters/module_CovidCenters";

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

		async initCovidCentersModule(): Promise<void> {
			if (!this.$store.hasModule("/covidCenters")) {
				this.$store.registerModule("/covidCenters", module_covidCenters);
			}

			await this.$store.dispatch("/covidCenters/GET_COVID_CENTER_LIST");
		},
	},

	async created() {
		await this.initNavModule();
		await this.initCovidCentersModule();
	},
});
</script>

<style lang="scss">
@media screen and (max-width: $media__maxWidth_xs) {
	html,
	body {
		font-size: 12px !important;
	}
}

#app {
	//
}
</style>
