<template>
	<div class="about">
		<h1 class="about__title">컴포넌트 개발 페이지</h1>

		<div style="display: flex; justify-content: center">
			<Comp_IconButton @click="onIconClick"></Comp_IconButton>
		</div>

		<div style="display: flex; justify-content: center">
			<Comp_IconButton
				width="100px"
				height="100px"
				fontSize="60px"
				iconColor="#03a9f4"
				bgColor="#ff1493"
				@click="onIconClick"
			></Comp_IconButton>
		</div>

		<hr class="marginVer_20" />

		<h1 class="about__title">선택한 값: {{ selectedValue }}</h1>

		<!--		<div style="height: 100px">-->
		<Comp_SelectBox
			:dataList="selectBoxData"
			v-model="selectedValue"
			height="50px"
			fontSize="20px"
			padding="10px 20px"
		></Comp_SelectBox>
		<!--		</div>-->

		<h1 class="about__title">선택한 값: {{ selectedValue2 }}</h1>

		<div class="testBox">
			<Comp_SelectBox
				:dataList="selectBoxData"
				v-model="selectedValue2"
			></Comp_SelectBox>
		</div>

		<h1 class="about__title">선택한 값: {{ selectedValue3 }}</h1>

		<div class="testBox">
			<Comp_SelectBox
				:dataList="selectBoxData"
				v-model="selectedValue3"
				placeholder='"구군"을 선택해 주세요'
			>
			</Comp_SelectBox>
		</div>

		<!--		<div class="cardList">-->
		<!--			&lt;!&ndash; Bl_CovidCenters_Card &ndash;&gt;-->
		<!--			<Bl_CovidCenters_Card-->
		<!--				@click="onMyClick"-->
		<!--				:covidCenterInfo="covidCenterInfo"-->
		<!--			>-->
		<!--			</Bl_CovidCenters_Card>-->

		<!--			<Comp_Card-->
		<!--				title="제목"-->
		<!--				:src="require('../assets/image/kor-geo-image.png')"-->
		<!--				@click="onClick"-->
		<!--			></Comp_Card>-->
		<!--			<Comp_Card-->
		<!--				title="제목"-->
		<!--				:src="require('../assets/image/kor-geo-image.png')"-->
		<!--				imgHeight="200px"-->
		<!--			>-->
		<!--				<template v-slot="slotData">-->
		<!--					<img-->
		<!--						:src="slotData.src"-->
		<!--						:alt="slotData.alt"-->
		<!--						:height="slotData.imgHeight"-->
		<!--					/>-->
		<!--				</template>-->

		<!--				<template v-slot:content>-->
		<!--					<ul>-->
		<!--						<li>리스트 1</li>-->
		<!--						<li>리스트 2</li>-->
		<!--						<li>리스트 3</li>-->
		<!--					</ul>-->
		<!--				</template>-->
		<!--			</Comp_Card>-->
		<!--			<Comp_Card></Comp_Card>-->
		<!--		</div>-->
	</div>
</template>

<script lang="ts">
import Vue from "vue";
// import Comp_Card from "@/components/Comp_Card.vue";
// import Bl_CovidCenters_Card from "@/views/covidCenters/blCovidCentersSearch/Bl_CovidCenters_Card.vue";
import Comp_SelectBox from "@/components/Comp_SelectBox.vue";
import { I_Comp_SelectBox } from "@/interface/components/I_Comp_SelectBox";

import Comp_IconButton from "@/components/Comp_IconButton.vue";

export default Vue.extend({
	components: {
		// Comp_Card,
		// Bl_CovidCenters_Card,
		Comp_SelectBox,
		Comp_IconButton,
	},

	data: () => {
		return {
			selectedValue: "",
			selectedValue2: "",
			selectedValue3: "",

			selectBoxData: [
				{
					selector: "옵션 1",
					value: "값 1",
				},
				{
					selector: "옵션 2",
					value: "값 2",
				},
				{
					selector: "옵션 3",
					value: "값 3",
				},
			] as I_Comp_SelectBox<string>[],

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

		onIconClick(): void {
			console.log("아이콘 클릭");
		},
	},
});
</script>

<style scoped lang="scss">
.about {
	//

	.about__title {
		margin: 20px 0;

		color: $colors__black_02;
		font-size: 30px;
		font-weight: 900;
	}

	.resetButton {
		/*border-radius: 10px;*/
	}

	.testBox {
		@include width-height(350px);
		margin: 50px auto 0;
	}
}

/*
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
*/
</style>
