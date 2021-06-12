<template>
	<header id="Ly_Default_Header" class="header">
		<figure class="header__imgWrapper">
			<div class="header__decoVer"></div>
			<div class="header__decoHor"></div>

			<img
				src="../../assets/image/header/예방접종-병원.png"
				alt="이미지: 병원"
				class="header__hospital"
			/>

			<img
				src="../../assets/image/header/예방접종-사람.png"
				alt="이미지: 사람"
				class="header__person"
			/>

			<img
				src="../../assets/image/header/예방접종-바이러스.png"
				alt="이미지: 바이러스"
				class="header__virus"
			/>

			<h1 class="header__title">코로나19 예방접종 센터</h1>
			<h1 class="header__title">조회 서비스</h1>
		</figure>
	</header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	//
});
</script>

<style scoped lang="scss">
#Ly_Default_Header {
	@include width-height(100%, 300px);

	overflow: hidden;

	.header {
		$hospital-width: 200px;
		$person-width: 100px;
		$virus-width: 200px;

		$hospital-left: 10%;

		&__imgWrapper {
			@include width-height(100%, 0);

			padding-top: 300px;

			position: relative;
		}

		// 수직 장식
		&__decoVer {
			@include width-height(300px, 800px);

			background-color: $colors__blue_02;

			position: absolute;
			top: 0;
			left: 300px;
			transform: rotateZ(-40deg) translateY(-50%);
		}

		// 수평 장식
		&__decoHor {
			$decoVer-left: calc(#{$hospital-left} + #{$hospital-width});

			@include width-height(100%, 100px);

			background-color: $colors__blue_01;

			position: absolute;
			top: 50%;
			left: $decoVer-left;
			transform: translateY(-50%);
		}

		// 병원 이미지
		&__hospital {
			@include width-height($hospital-width);

			position: absolute;
			top: $hospital-left;
			left: 10%;
		}

		// 사람 이미지
		&__person {
			@include width-height($person-width);

			position: absolute;
			top: 30%;
			left: 20%;
		}

		// 바이러스 이미지
		&__virus {
			@include width-height($virus-width);

			position: absolute;
			top: 50%;
			left: calc(20% + #{$person-width});
			transform: translateY(-50%);
		}

		// Header 제목
		&__title {
			color: $colors__white_01;
			font-size: $fontSize_30;
			font-weight: 900;

			position: absolute;
			top: 50%;
			right: 10%;

			&:nth-of-type(1) {
				transform: translateY(calc(-50% - 20px));
			}
			&:nth-of-type(2) {
				transform: translateY(calc(-50% + 20px));
			}
		}
	}
}
</style>
