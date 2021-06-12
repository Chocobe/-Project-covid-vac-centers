<template>
	<div id="page-covid-centers">
		<h1 class="title">Covid Center</h1>

		<div class="myButtonList">
			<button
				v-for="(sido, index) of sidoList"
				:key="`${index}-${sido}`"
				@click="getSidoCenters(sido)"
				class="myButtonList--item"
			>
				{{ sido }}
			</button>
		</div>

		<ul class="myList">
			<li
				v-for="center in targetSidoCenters"
				:key="center.id"
				class="myList--item"
			>
				<p>주소: {{ center.address }}</p>
				<p>센터: {{ center.centerName }}</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { module_covidCenters } from "@/store/covidCenters/module_CovidCenters";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";

export default Vue.extend({
	data: () => {
		return {
			targetSidoName: "",
			targetSidoCenters: [] as DB_CovidCenter[],
		};
	},

	methods: {
		getSidoCenters(sidoName: string): void {
			const covidCentersMap = this.$store.state["covidCenter"]
				.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

			const sidoCentersMap = covidCentersMap.get(sidoName) as Map<
				string,
				DB_CovidCenter[]
			>;

			const targetSidoCenters = [] as DB_CovidCenter[];

			sidoCentersMap.forEach(sido => {
				targetSidoCenters.push(...sido);
			});

			this.targetSidoCenters = targetSidoCenters;
		},
	},

	computed: {
		// 시도 문자열 리스트
		sidoList(): string[] {
			const covidCentersMap = this.$store.state["covidCenter"]
				.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

			return Array.from(covidCentersMap.keys());
		},

		covidCentersMap(): DB_CovidCenter[] {
			const covidCentersMap = this.$store.state["covidCenter"]
				.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

			if (covidCentersMap.size > 0) {
				const busan = covidCentersMap.get("부산광역시") as Map<
					string,
					DB_CovidCenter[]
				>;

				const sido = [] as DB_CovidCenter[];

				busan.forEach(sigungu => {
					sido.push(...sigungu);
				});

				return sido;
			} else {
				return [];
			}
		},
	},

	async created() {
		if (!this.$store.hasModule("covidCenter")) {
			this.$store.registerModule("covidCenter", module_covidCenters);
		}

		await this.$store.dispatch("covidCenter/GET_COVID_CENTER_LIST");
	},
});
</script>

<style lang="scss">
#page-covid-centers {
	width: 100%;
	max-width: 1200px;

	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;

	.title {
		width: 100%;

		margin-bottom: 40px;

		font-size: 30px;
		font-weight: 900;
	}

	.myButtonList {
		width: 500px;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;

		&--item {
			//
		}
	}

	.myList {
		min-width: 500px;
		height: 500px;

		margin: 0 auto;

		overflow-y: scroll;

		flex: 1;

		&--item {
			margin: 10px 0;
		}
	}
}
</style>
