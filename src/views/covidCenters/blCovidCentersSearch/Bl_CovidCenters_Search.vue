<template>
	<div id="Bl_CovidCenters_Search">
		<div class="controller__selectorWrapper">
			<Comp_SelectBox
				:dataList="sidoSelectList"
				@input="onChangeTargetSidoName"
				:value="targetSidoName"
				placeholder="시도 를 선택해 주세요"
			></Comp_SelectBox>
		</div>

		<figure class="korMap__wrapper">
			<img
				src="../../../assets/image/kor-geo-image.png"
				alt="이미지: 지도"
				class="korMap__img"
			/>
		</figure>

		<div class="controller__wrapper">
			<template v-for="(sidoName, index) of sidoList">
				<Comp_Button
					:key="`${index}-${sidoName}`"
					:name="sidoName"
					@click="onChangeTargetSidoName"
					@enter="onButtonEnter"
					@leave="onButtonLeave"
				>
					{{ sidoName }}
				</Comp_Button>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import Comp_Button from "@/components/Comp_Button.vue";
import Comp_SelectBox from "@/components/Comp_SelectBox.vue";
import { I_Comp_SelectBox } from "@/interface/components/I_Comp_SelectBox";

export default Vue.extend({
	components: {
		Comp_Button,
		Comp_SelectBox,
	},

	computed: {
		sidoSelectList(): I_Comp_SelectBox<string>[] {
			return this.sidoList.map(sidoName => {
				return {
					selector: sidoName,
					value: sidoName,
				};
			});
		},

		sidoList(): string[] {
			const covidCentersMap = this.$store.state["/covidCenters"]
				.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

			return Array.from(covidCentersMap.keys());
		},

		targetSidoName(): string {
			return this.$store.state["/covidCenters"].targetSidoName;
		},
	},

	methods: {
		onChangeTargetSidoName(sidoName: string): void {
			// console.log("버튼 클릭: ", sidoName);
			this.$store.commit("/covidCenters/setTargetSidoName", sidoName);
		},

		onButtonEnter(sidoName: string): void {
			// console.log("버튼 엔터: ", sidoName);
			this.$store.commit("/covidCenters/setHoverSidoName", sidoName);
		},

		onButtonLeave(): void {
			this.$store.commit("/covidCenters/setHoverSidoName", "");
		},
	},
});
</script>

<style scoped lang="scss">
#Bl_CovidCenters_Search {
	@include flex(flex-start, flex-start, wrap);

	padding: 40px 0;

	.controller__selectorWrapper {
		@include width-height(100%);
		max-width: 300px;

		padding: 0 20px;

		display: none;
	}

	.korMap__wrapper {
		@include width-height(50%);
		@include flex();

		padding: 0 20px;

		.korMap__img {
			@include width-height(500px, 500px);

			border-radius: 10px;
			box-shadow: 0 3px 6px rgba($colors__black_01, 0.5);
		}
	}

	.controller__wrapper {
		@include width-height(50%);

		padding: 0 20px;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		gap: 20px;
	}

	@media screen and (max-width: $media__maxWidth_sm) {
		.controller__selectorWrapper {
			margin: 0 auto 40px;

			display: block;
		}

		.korMap__wrapper {
			@include width-height(100%);
		}

		.controller__wrapper {
			display: none;
		}
	}

	@media screen and (max-width: $media__maxWidth_xs) {
		.korMap__wrapper {
			//

			.korMap__img {
				@include width-height(100%, auto);
				max-width: 500px;
				max-height: 500px;
			}
		}
	}
}
</style>
