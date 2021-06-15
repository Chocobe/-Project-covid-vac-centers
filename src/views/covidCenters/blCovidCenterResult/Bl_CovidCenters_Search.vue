<template>
	<div id="Bl_CovidCenters_Search">
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
					@click="onButtonClick"
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

export default Vue.extend({
	components: {
		Comp_Button,
	},

	computed: {
		sidoList(): string[] {
			const covidCentersMap = this.$store.state["/covidCenters"]
				.covidCentersMap as Map<string, Map<string, DB_CovidCenter[]>>;

			return Array.from(covidCentersMap.keys());
		},
	},

	methods: {
		onButtonClick(sidoName: string): void {
			// console.log("버튼 클릭: ", sidoName);
			this.$store.commit("/covidCenters/setTargetSido", sidoName);
		},

		onButtonEnter(sidoName: string): void {
			// console.log("버튼 엔터: ", sidoName);
			this.$store.commit("/covidCenters/setHoverSido", sidoName);
		},

		onButtonLeave(): void {
			this.$store.commit("/covidCenters/setHoverSido", "");
		},
	},
});
</script>

<style scoped lang="scss">
#Bl_CovidCenters_Search {
	@include flex(flex-start, flex-start, wrap);

	padding: 40px 0;

	.korMap__wrapper {
		@include width-height(50%);
		@include flex();

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
}
</style>
