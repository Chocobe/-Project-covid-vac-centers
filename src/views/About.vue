<template>
	<div class="about">
		<h1>코로나19 데이터 테스트</h1>

		<div class="cardList">
			<Comp_Card
				title="제목"
				:src="require('../assets/image/kor-geo-image.png')"
				@click="onClick"
			></Comp_Card>
			<Comp_Card
				title="제목"
				:src="require('../assets/image/kor-geo-image.png')"
				imgHeight="200px"
			>
				<template v-slot="slotData">
					<img
						:src="slotData.src"
						:alt="slotData.alt"
						:height="slotData.imgHeight"
					/>
				</template>

				<template v-slot:content>
					<ul>
						<li>리스트 1</li>
						<li>리스트 2</li>
						<li>리스트 3</li>
					</ul>
				</template>
			</Comp_Card>
			<Comp_Card></Comp_Card>

			<!-- Bl_CovidCenters_Card -->
			<Bl_CovidCenters_Card
				title="타이틀"
				content="컨텐츠 🐫"
				@click="onMyClick"
			></Bl_CovidCenters_Card>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Comp_Card from "@/components/Comp_Card.vue";
import Bl_CovidCenters_Card from "@/views/covidCenters/blCovidCentersSearch/Bl_CovidCenters_Card.vue";

export default Vue.extend({
	components: {
		Comp_Card,
		Bl_CovidCenters_Card,
	},

	methods: {
		onMyClick(): void {
			console.log("안녕하세요~");
		},

		onClick(): void {
			console.log("클릭함");
		},
	},
});
</script>

<style scoped lang="scss">
.cardList {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	gap: 20px;

	margin: 20px;
}
</style>
