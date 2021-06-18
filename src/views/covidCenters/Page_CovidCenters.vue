<template>
	<div id="page-covid-centers">
		<!-- 검색 영역 -->
		<Bl_CovidCenters_Search></Bl_CovidCenters_Search>

		<!-- 검색 결과 영역 -->
		<Bl_CovidCenters_Result></Bl_CovidCenters_Result>

		<!-- 안내 영역 -->
		<Bl_CovidCenters_Guide></Bl_CovidCenters_Guide>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Bl_CovidCenters_Search from "@/views/covidCenters/blCovidCentersSearch/Bl_CovidCenters_Search.vue";
import Bl_CovidCenters_Result from "@/views/covidCenters/blCovidCentersResult/Bl_CovidCenters_Result.vue";
import Bl_CovidCenters_Guide from "@/views/covidCenters/blCovidCentersGuide/Bl_CovidCenters_Guide.vue";

export default Vue.extend({
	components: {
		Bl_CovidCenters_Search,
		Bl_CovidCenters_Result,
		Bl_CovidCenters_Guide,
	},
});
</script>

<style lang="scss">
#page-covid-centers {
	//
}
</style>
