<template>
	<div class="about">
		<h1>코로나19 데이터 테스트</h1>

		<div style="margin: 20px 0">
			<Comp_Button
				name="강원도"
				@click="onClick"
				@enter="onEnter"
				@leave="onLeave"
			></Comp_Button>

			<Comp_Button
				name="부산광역시"
				@click="onClick"
				@enter="onEnter"
				@leave="onLeave"
			></Comp_Button>
		</div>

		<p>
			{{ itemList }}
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { apiGet_CovidCenters } from "@/api/covidCenter/apiCovidCenter";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import Comp_Button from "@/components/Comp_Button.vue";

export default Vue.extend({
	components: {
		Comp_Button,
	},

	data: () => {
		return {
			itemList: [] as DB_CovidCenter[],
		};
	},

	methods: {
		onClick(name: string) {
			console.log("클릭함: ", name);
		},

		onEnter(name: string) {
			console.log("Hover: ", name);
		},

		onLeave(name: string) {
			console.log("Leave: ", name);
		},
	},

	async created() {
		const response = await apiGet_CovidCenters();

		console.log("조회결과: ", response);

		this.itemList = response.data.data;
	},
});
</script>
