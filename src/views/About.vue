<template>
	<div class="about">
		<h1>코로나19 데이터 테스트</h1>

		<div class="cardList">
			<!-- Bl_CovidCenters_Card -->
			<Bl_CovidCenters_Card
				@click="onMyClick"
				:covidCenterInfo="covidCenterInfo"
			>
			</Bl_CovidCenters_Card>

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

	data: () => {
		return {
			covidCenterInfo: {
				address: "부산광역시 사하구 하신번영로 175",
				centerName: "코로나19 부산광역시 사하구 예방접종센터",
				centerType: "지역",
				createdAt: "2021-04-21 08:39:38",
				facilityName: "부산교통공사 신평체육관",
				id: 177,
				lat: "35.0958093",
				lng: "128.9613786",
				org: "",
				phoneNumber: "051-220-0131",
				sido: "부산광역시",
				sigungu: "사하구",
				updatedAt: "2021-06-02 07:32:32",
				zipCode: "49431",
			},
		};
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

	.card__dl {
		@include flex(flex-start);

		.card__dt {
			@include width-height(80px);
		}

		.card__dd {
			@include width-height(100%);

			flex: 1;

			background-color: #006400;
		}
	}
}
</style>
