<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { module_Nav } from "@/store/nav/module_Nav";

export default Vue.extend({
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
#app {
	height: 100vh;

	overflow-y: auto;
}
</style>
