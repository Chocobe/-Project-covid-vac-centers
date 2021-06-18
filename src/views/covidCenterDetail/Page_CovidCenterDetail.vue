<template>
	<div id="Page_CovidCenterDetail">
		<!-- 예방접종 센터 상세 정보 -->
		<div class="centerDetailWrapper">
			<Bl_CovidCenterDetail_Info
				:covidCenter="targetCovidCenter"
			></Bl_CovidCenterDetail_Info>

			<img
				src="../../assets/image/covidCentersDetail/의사.png"
				alt="배경: 의사"
				class="centerDetailWrapper__img"
			/>
			<img
				src="../../assets/image/covidCentersDetail/주사.png"
				alt="배경: 주사"
				class="centerDetailWrapper__img"
			/>
		</div>

		<Bl_CovidCenters_Result @click="refreshData"></Bl_CovidCenters_Result>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import { uBinarySearchForId } from "@/utilities/binarySearch";

import Bl_CovidCenters_Result from "@/views/covidCenters/blCovidCentersResult/Bl_CovidCenters_Result.vue";
import Bl_CovidCenterDetail_Info from "@/views/covidCenterDetail/Bl_CovidCenterDetail_Info.vue";

export default Vue.extend({
	components: {
		Bl_CovidCenters_Result,
		Bl_CovidCenterDetail_Info,
	},

	data: () => {
		return {
			targetCovidCenter: null as DB_CovidCenter | null,
		};
	},

	methods: {
		goToMainPage(): void {
			this.$router.push("/");
		},

		searchTargetCenter(
			id: number,
			covidCenterList: DB_CovidCenter[],
		): DB_CovidCenter | null {
			const resultIdx = uBinarySearchForId(id, covidCenterList, "id");

			if (resultIdx < 0) {
				return null;
			} else {
				return covidCenterList[resultIdx];
			}
		},

		async initPage(): Promise<void> {
			const id = Number(this.$route.params.id);

			if ((id !== 0 && !id) || Number.isNaN(id)) {
				this.goToMainPage();
				return;
			}

			const targetCenterData = this.$store.state["/covidCenters"]
				.targetCenterData as DB_CovidCenter | null;

			if (targetCenterData) {
				this.targetCovidCenter = targetCenterData;
			} else {
				let covidCenterList = this.$store.state["/covidCenters"]
					.originCovidCenterList as DB_CovidCenter[];

				if (covidCenterList.length < 1) {
					await this.$store.dispatch("/covidCenters/GET_COVID_CENTER_LIST");
					covidCenterList =
						this.$store.state["/covidCenters"].originCovidCenterList;
				}

				const resultOfSearch = this.searchTargetCenter(id, covidCenterList);

				if (!resultOfSearch) {
					this.goToMainPage();
				} else {
					this.$store.commit(
						"/covidCenters/setTargetSidoName",
						resultOfSearch.sido,
					);
					this.$store.commit(
						"/covidCenters/setTargetCenterData",
						resultOfSearch,
					);

					this.targetCovidCenter = resultOfSearch;
				}
			}
		},

		async refreshData(): Promise<void> {
			await this.initPage();

			this.$nextTick(() => {
				this.$el.scrollIntoView({ behavior: "smooth" });
			});
		},
	},

	mounted(): void {
		this.$el.scrollIntoView();
	},

	async created(): Promise<void> {
		await this.initPage();
	},
});
</script>

<style scoped lang="scss">
#Page_CovidCenterDetail {
	//

	.centerDetailWrapper {
		margin: 0 40px 40px;

		border: 0;
		border-radius: 20px;
		background-color: rgba(#fff, 0.65);

		position: relative;

		&__img {
			@include width-height(120px);

			position: absolute;
			bottom: -30px;

			z-index: -1;

			&:nth-of-type(1) {
				left: -20px;
			}
			&:nth-of-type(2) {
				right: -20px;
			}
		}
	}
}
</style>
