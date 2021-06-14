<template>
	<div id="page-covid-centers">
		<!-- 검색 영역 -->
		<Bl_CovidCenters_Search></Bl_CovidCenters_Search>

		<!-- 검색 결과 영역 -->
		<Bl_CovidCenters_Result></Bl_CovidCenters_Result>

		<!-- 안내 영역 -->
		<h1>안내 영역</h1>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { module_covidCenters } from "@/store/covidCenters/module_CovidCenters";
import Bl_CovidCenters_Search from "@/views/covidCenters/blCovidCenterResult/Bl_CovidCenters_Search.vue";
import Bl_CovidCenters_Result from "@/views/covidCenters/Bl_CovidCenters_Result.vue";

export default Vue.extend({
	components: {
		Bl_CovidCenters_Search,
		Bl_CovidCenters_Result,
	},

	async created() {
		if (!this.$store.hasModule("/covidCenters")) {
			this.$store.registerModule("/covidCenters", module_covidCenters);
		}

		await this.$store.dispatch("/covidCenters/GET_COVID_CENTER_LIST");
	},
});
</script>

<style lang="scss">
#page-covid-centers {
	//
}
</style>
