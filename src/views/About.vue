<template>
	<div class="about">
		<h1>코로나19 데이터 테스트</h1>

		<p>
			{{ itemList }}
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { apiGet_CovidCenters } from "@/api/covidCenter/apiCovidCenter";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";

export default Vue.extend({
	data: () => {
		return {
			itemList: [] as DB_CovidCenter[],
		};
	},

	async created() {
		const response = await apiGet_CovidCenters();

		console.log("조회결과: ", response);

		this.itemList = response.data.data;
	},
});
</script>
