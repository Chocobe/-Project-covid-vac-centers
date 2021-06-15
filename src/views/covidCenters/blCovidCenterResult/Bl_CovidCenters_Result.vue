<template>
	<div id="Bl_CovidCenter_Result">
		<h3 class="subTitle">- 코로나 예방접종 센터 조회 결과 -</h3>

		<Comp_TransitionOpacity>
			<div class="titleWrapper" :key="title">
				<h1 class="title">
					{{ title }}
				</h1>

				<Comp_SelectBox
					v-if="hasSidoData"
					class="sigunguSelector"
					:dataList="sigunguSelectList"
					:value="targetSigungu"
					@input="onChangeSigungu"
					placeholder="시군구 를 선택해 주세요"
					backgroundColor="#fff"
				></Comp_SelectBox>
			</div>
		</Comp_TransitionOpacity>

		<Comp_TransitionOpacity>
			<ul
				class="cardList"
				v-if="covidCenterList.length > 0"
				:key="`${targetSido}-${targetSigungu}`"
			>
				<template v-for="sido of covidCenterList">
					<li :key="`${sido.id}-${sido.centerName}`">
						<Bl_CovidCenters_Card
							:covidCenterInfo="sido"
							@click="goToDetail(sido)"
						></Bl_CovidCenters_Card>
					</li>
				</template>
			</ul>
		</Comp_TransitionOpacity>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import Comp_TransitionOpacity from "@/components/Comp_TransitionOpacity.vue";
import Comp_SelectBox from "@/components/Comp_SelectBox.vue";
import Bl_CovidCenters_Card from "@/views/covidCenters/blCovidCentersSearch/Bl_CovidCenters_Card.vue";
import { I_Comp_SelectBox } from "@/interface/components/I_Comp_SelectBox";

export default Vue.extend({
	components: {
		Comp_TransitionOpacity,
		Comp_SelectBox,
		Bl_CovidCenters_Card,
	},

	data: () => {
		return {
			covidCenterList: [] as DB_CovidCenter[],
		};
	},

	watch: {
		targetSido(newTargetSido) {
			console.log("와치: ", newTargetSido);
			this.$store.commit("/covidCenters/setTargetSigungu", "");

			this.createCovidCenterList(newTargetSido);
			this.moveScroll();
		},

		targetSigungu(newTargetSigungu) {
			this.createCovidCenterList(this.targetSido, newTargetSigungu);
			this.moveScroll();
		},
	},

	computed: {
		targetSido(): string {
			return this.$store.state["/covidCenters"].targetSido;
		},

		targetSigungu(): string {
			return this.$store.state["/covidCenters"].targetSigungu;
		},

		sigunguSelectList(): I_Comp_SelectBox<string>[] {
			if (!this.targetSido) {
				return [];
			}

			const sidoMap = this.$store.state["/covidCenters"].covidCentersMap as Map<
				string,
				Map<string, DB_CovidCenter[]>
			>;

			const targetSidoMap = sidoMap.get(this.targetSido) as Map<
				string,
				DB_CovidCenter[]
			>;

			const keys = Array.from(targetSidoMap.keys());

			return keys.map(key => {
				return {
					selector: key,
					value: key,
				} as I_Comp_SelectBox<string>;
			});
		},

		targetSidoCovidCenterCount(): number {
			const targetSido = this.targetSido;

			if (!targetSido) {
				return 0;
			} else {
				const sidoMap = this.$store.state["/covidCenters"]
					.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

				const targetCovidCenterList: DB_CovidCenter[] = [];

				const targetSidoMap = sidoMap.get(targetSido) as Map<
					string,
					DB_CovidCenter[]
				>;

				targetSidoMap.forEach(sido => {
					targetCovidCenterList.push(...sido);
				});

				return targetCovidCenterList.length;
			}
		},

		title(): string {
			const targetSido = this.targetSido;

			if (!targetSido) {
				return "검색 결과가 없습니다.";
			}

			return `${targetSido} (${this.targetSidoCovidCenterCount})`;
		},

		hasSidoData(): boolean {
			return this.covidCenterList.length > 0;
		},
	},

	methods: {
		createCovidCenterList(targetSido: string, targetSigungu?: string): void {
			const sidoMap = this.$store.state["/covidCenters"].covidCentersMap as Map<
				string,
				Map<string, DB_CovidCenter[]>
			>;

			if (!sidoMap.size) {
				this.covidCenterList = [];
				return;
			}

			const targetSidoMap = sidoMap.get(targetSido) as Map<
				string,
				DB_CovidCenter[]
			>;

			if (targetSigungu) {
				const targetSigunguList = targetSidoMap.get(
					targetSigungu,
				) as DB_CovidCenter[];

				this.covidCenterList = [...targetSigunguList];
			} else {
				const resultCovidCenterList: DB_CovidCenter[] = [];

				targetSidoMap.forEach(covidCenterList => {
					resultCovidCenterList.push(...covidCenterList);
				});

				this.covidCenterList = resultCovidCenterList;
			}
		},

		moveScroll(): void {
			//
		},

		onChangeSigungu(value: string): void {
			this.$store.commit("/covidCenters/setTargetSigungu", value);
		},

		goToDetail(sido: DB_CovidCenter): void {
			console.log("상세페이지 이동: ", sido.centerName);
		},
	},

	created(): void {
		this.createCovidCenterList(this.targetSido, this.targetSigungu);
	},
});
</script>

<style scoped lang="scss">
#Bl_CovidCenter_Result {
	@include width-height(100%);

	padding: 40px;

	border-top: 5px double $colors__gray_02;
	border-bottom: 5px double $colors__gray_02;

	.subTitle {
		color: $colors__black_02;
	}

	.titleWrapper {
		@include flex();

		.title {
			@include width-height(100%);

			margin: 20px 0;

			color: $colors__black_01;
			font-size: 30px;
			text-align: center;
		}

		.sigunguSelector {
			@include width-height(100%);
			max-width: 300px;

			margin: 0 auto 40px;
		}
	}

	.cardList {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		gap: 20px;
	}
}
</style>
