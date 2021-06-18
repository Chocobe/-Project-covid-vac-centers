<template>
	<div class="Bl_CovidCenters_Card covidCenterCard">
		<Comp_Card v-bind="$attrs" v-on="$listeners" class="covidCenterCard__card">
			<template v-for="(_, name) of $scopedSlots" v-slot:[name]="slotData">
				<slot :name="name" v-bind="slotData"></slot>
			</template>

			<template v-slot="defaultSlotData">
				<figure
					class="covidCenterCard__mapWrapper"
					:style="{
						width: '100%',
						height: defaultSlotData.imgHeight
							? defaultSlotData.imgHeight
							: '200px',
					}"
				>
					<VueDaumMap
						class="covidCenterCard__map"
						appKey="8fd85eab4bc4cfe9a998d9b2e38129cd"
						:libraries="['clusterer']"
						:center="center"
						:level.sync="level"
						:draggable="false"
						:disableDoubleClick="true"
						:mapTypeId="mapTypeId"
						@load="onLoad"
					></VueDaumMap>
				</figure>
			</template>

			<template v-slot:content>
				<dl class="covidCenterCard__infoWrapper">
					<!-- 센터명 -->
					<dt class="covidCenterCard__infoLabel">센터명:</dt>
					<dd class="covidCenterCard__infoContent">
						{{ covidCenterInfo.centerName }}
					</dd>

					<!-- 주소 -->
					<dt class="covidCenterCard__infoLabel">주소:</dt>
					<dd class="covidCenterCard__infoContent">
						{{ covidCenterInfo.address }}
					</dd>

					<!-- 전화번호 -->
					<dt class="covidCenterCard__infoLabel">전화번호:</dt>
					<dd class="covidCenterCard__infoContent">
						{{ covidCenterInfo.phoneNumber }}
					</dd>
				</dl>
			</template>
		</Comp_Card>
	</div>
</template>

<script lang="ts">
// "vue-daum-map" 의 Type 이 없는 관계로, no-explicit-any 를 해제 하였습니다.
/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue, { PropType } from "vue";
import Comp_Card from "@/components/Comp_Card.vue";
import VueDaumMap from "vue-daum-map";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import { vueDaumMapKey } from "@/plugins/vueDaumMap/vueDaumMap";

export default Vue.extend({
	inheritAttrs: false,

	components: {
		Comp_Card,
		VueDaumMap,
	},

	props: {
		covidCenterInfo: {
			type: Object as PropType<DB_CovidCenter>,
			required: true,
		},
	},

	data: () => {
		return {
			appKey: vueDaumMapKey,
			level: 3,
			mapTypeId: VueDaumMap.MapTypeId.NORMAL,
		};
	},

	computed: {
		center(): {
			lat: number;
			lng: number;
		} {
			return {
				lat: Number(this.covidCenterInfo.lat),
				lng: Number(this.covidCenterInfo.lng),
			};
		},
	},

	methods: {
		onLoad(map: any, daum: any) {
			// 위치 객체 생성
			const locPosition = new daum.maps.LatLng(
				this.center.lat,
				this.center.lng,
			);

			// Marker 와 센터명 출력
			this.displayMarker(map, daum, locPosition);
		},

		displayMarker(map: any, daum: any, locPosition: any): void {
			// Marker 생성
			new daum.maps.Marker({
				map,
				position: locPosition,
			});
		},
	},
});
</script>

<style scoped lang="scss">
.covidCenterCard {
	@include width-height(100%, 100%);

	padding-bottom: 10px;
	position: relative;

	&__card {
		@include width-height(100%, 100%);
	}

	// hover 효과
	&::before,
	&::after {
		@include width-height(0, 5px);

		content: "";

		display: block;
		position: absolute;
		bottom: 20px;
		left: 50%;

		background-color: $colors__green_01;

		transition: all 0.5s;
	}
	&::before {
		border-radius: 50% 0 0 50%;
	}
	&::after {
		border-radius: 0 50% 50% 0;
	}

	&:hover::before {
		@include width-height(calc(50% - 10px), 5px);

		left: 10px;
	}
	&:hover::after {
		@include width-height(calc(50% - 10px), 5px);

		left: 50%;
	}

	// 지도
	&__mapWrapper {
		margin-bottom: 5px;
	}

	&__map {
		@include width-height(100%, 100%);

		box-shadow: 0 0 3px rgba(#000, 0.5);
		border-radius: 5px;
	}

	// 컨텐츠
	&__infoWrapper {
		display: grid;
		grid-template-columns: 100px 1fr;

		border-bottom: 5px solid transparent;

		transition: all 0.25s;
	}

	&__infoLabel {
		padding: 3px 0 3px 10px;
	}

	&__infoContent {
		padding: 3px 0;
	}
}
</style>
