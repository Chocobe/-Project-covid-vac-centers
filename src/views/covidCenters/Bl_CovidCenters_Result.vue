<template>
	<div id="Bl_CovidCenter_Result">
		<h3 class="subTitle">코로나 예방접종 센터 조회 결과</h3>

		<Comp_TransitionOpacity>
			<h1 :key="title" class="title">
				{{ title }}
			</h1>
		</Comp_TransitionOpacity>

		<Comp_TransitionOpacity>
			<ul
				class="cardList"
				:key="title"
				:class="{ marginBottom_40: !sidoList.length }"
			>
				<template v-for="sido of sidoList">
					<li :key="sido.id">
						{{ sido.centerName }}
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

export default Vue.extend({
	components: {
		Comp_TransitionOpacity,
	},

	computed: {
		targetSido(): string {
			return this.$store.state["/covidCenters"].targetSido;
		},

		sidoList(): DB_CovidCenter[] {
			if (!this.targetSido) {
				return [];
			}

			const sidoMap = this.$store.state["/covidCenters"].covidCentersMap as Map<
				string,
				Map<string, DB_CovidCenter[]>
			>;

			const sidoList: DB_CovidCenter[] = [];

			const targetSidoMap = sidoMap.get(this.targetSido) as Map<
				string,
				DB_CovidCenter[]
			>;

			targetSidoMap.forEach(sido => {
				sidoList.push(...sido);
			});

			return sidoList;
		},

		title(): string {
			const targetSido = this.targetSido;

			if (!targetSido) {
				return "검색 결과가 없습니다.";
			}

			return `${targetSido} (${this.sidoList.length})`;
		},
	},
});
</script>

<style scoped lang="scss">
#Bl_CovidCenter_Result {
	@include width-height(100%);

	padding: 40px;

	background-color: $colors__gray_01;

	.subTitle {
		color: $colors__black_02;
		/*font-size: 20px;*/
	}

	.title {
		margin: 20px 0;

		color: $colors__black_01;
		font-size: 30px;
		text-align: center;
	}

	.cardList {
		//
	}
}
</style>
