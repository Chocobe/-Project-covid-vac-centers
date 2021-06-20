<template>
	<article id="Bl_CovidCenterDetail_Content" class="centerContent">
		<template v-if="covidCenter">
			<!-- 제목 영역 -->
			<div class="centerContent__titleWrapper">
				<h1 class="centerContent__title">
					{{ covidCenter.centerName }}
				</h1>

				<div class="centerContent__deco"></div>
			</div>

			<!-- 컨텐츠 영역 -->
			<section class="centerContent__section">
				<!-- 지도 -->
				<figure class="centerContent__mapWrapper" :key="covidCenter.id">
					<VueDaumMap
						class="centerContent__map"
						:appKey="appKey"
						:libraries="['clusterer']"
						:center="centerPos"
						:level.sync="level"
						:draggable="true"
						:disableDoubleClick="true"
						:mapTypeId="mapTypeId"
						@load="onLoadMap"
					></VueDaumMap>
				</figure>

				<!-- 상세 정보 -->
				<dl class="covidCenter__infoList">
					<!-- 1. 전화번호 -->
					<dt class="covidCenter__infoTitle">전화번호:</dt>

					<dd class="covidCenter__infoData">
						{{ covidCenter.phoneNumber }}
					</dd>

					<!-- 2. 시설명 -->
					<dt class="covidCenter__infoTitle">시설명:</dt>

					<dd class="covidCenter__infoData">
						{{ covidCenter.facilityName }}
					</dd>

					<!-- 3. 주소 -->
					<dt class="covidCenter__infoTitle">주소:</dt>

					<dd class="covidCenter__infoData">
						{{ covidCenter.address }}
					</dd>

					<!-- 4. 우편번호 -->
					<dt class="covidCenter__infoTitle">우편번호:</dt>

					<dd class="covidCenter__infoData">
						{{ covidCenter.zipCode }}
					</dd>
				</dl>
			</section>
		</template>
	</article>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue, { PropType } from "vue";
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";
import { vueDaumMapKey } from "@/plugins/vueDaumMap/vueDaumMap";

import VueDaumMap from "vue-daum-map";

export default Vue.extend({
	components: {
		VueDaumMap,
	},

	props: {
		covidCenter: {
			type: Object as PropType<DB_CovidCenter | null>,
			default: null,
		},
	},

	computed: {
		centerPos(): {
			lat: number;
			lng: number;
		} {
			if (!this.covidCenter) {
				return {
					lat: 0,
					lng: 0,
				};
			} else {
				return {
					lat: Number(this.covidCenter.lat),
					lng: Number(this.covidCenter.lng),
				};
			}
		},
	},

	data: () => {
		return {
			appKey: vueDaumMapKey,
			level: 4,
			mapTypeId: VueDaumMap.MapTypeId.NORMAL,

			map: null as any,
			daum: null as any,
		};
	},

	methods: {
		onLoadMap(map: any, daum: any) {
			if (!this.covidCenter) {
				return;
			}

			const locPosition = new daum.maps.LatLng(
				this.covidCenter.lat,
				this.covidCenter.lng,
			);

			new daum.maps.Marker({
				map,
				position: locPosition,
			});
		},
	},
});
</script>

<style scoped lang="scss">
.centerContent {
	padding: 40px;

	@media screen and (max-width: $media__maxWidth_xs) {
		padding: 40px 0;
	}

	// 제목 영역
	&__titleWrapper {
		@include flex(flex-start);
	}

	&__title {
		margin-right: 20px;

		color: $colors__black_01;
		text-align: center;
		font-size: 1.875rem;
		font-weight: 900;
		word-break: keep-all;

		position: relative;
	}

	&__deco {
		@include width-height(100%, 10px);

		flex: 1;
		background-color: $colors__green_02;

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(100%, 5px);
			flex-shrink: 0;
			flex-basis: auto;
		}
	}

	$common-margin: 20px;

	// 컨텐츠 영역
	&__section {
		@include width-height(100%);
		@include flex(flex-start, flex-start);

		margin-top: 20px;

		@media screen and (max-width: $media__maxWidth_sm) {
			flex-direction: column;
		}
	}

	// 지도
	&__mapWrapper {
		@include width-height(calc(50% - #{$common-margin}));

		margin-right: $common-margin;

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(100%);

			margin-right: 0;
			margin-bottom: $common-margin;
		}
	}

	&__map {
		@include width-height(100%, 300px);

		border-radius: 10px;
		box-shadow: 0 0 3px rgba($colors__black_01, 0.5);
	}

	// 상세 정보
	.covidCenter__infoList {
		@include width-height(50%);

		display: grid;
		grid-template-columns: 110px 1fr;

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(100%);
		}
	}

	.covidCenter__infoTitle {
		margin-bottom: 10px;
		padding-left: 20px;

		position: relative;

		&::before {
			@include width-height(5px, 5px);

			content: "";

			background-color: $colors__blue_02;

			position: absolute;
			top: 50%;
			left: 7.5px;
			transform: translateY(-50%);
		}
	}
}
</style>
