<template>
	<header id="Ly_Default_Header" class="header">
		<div class="header__wrapper">
			<div class="header__decoVer"></div>
			<div class="header__decoHor"></div>

			<!-- 병원 이미지 -->
			<figure class="header__hospitalWrapper">
				<div class="header__hospitalShadow"></div>

				<img
					src="../../assets/image/header/예방접종-병원.png"
					alt="이미지: 병원"
					class="header__hospital"
				/>
			</figure>

			<!-- 사람 이미지 -->
			<figure class="header__personWrapper">
				<div class="header__personShadow"></div>

				<img
					src="../../assets/image/header/예방접종-사람.png"
					alt="이미지: 사람"
					class="header__person"
				/>
			</figure>

			<figure class="header__virusWrapper">
				<img
					src="../../assets/image/header/예방접종-바이러스.png"
					alt="이미지: 바이러스"
					class="header__virus"
				/>
			</figure>

			<h1 class="header__title">코로나19 예방접종 센터</h1>
			<h1 class="header__title">조회 서비스</h1>
		</div>
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

	background-color: $colors__white_01;
	overflow: hidden;

	.header {
		$hospital-width: 200px;
		$person-width: 100px;
		$virus-width: 200px;

		$hospital-left: 10%;

		&__wrapper {
			@include width-height(100%, 100%);

			padding-top: 300px;

			position: relative;
		}

		// 수직 장식
		&__decoVer {
			@include width-height(300px, 800px);

			background-color: $colors__blue_03;

			position: absolute;
			top: 0;
			left: 300px;
			transform: rotateZ(-40deg) translateY(-50%);

			@media screen and (max-width: $media__maxWidth_xs) {
				& {
					opacity: 0.75;
				}
			}
		}

		// 수평 장식
		&__decoHor {
			$decoVer-left: calc(#{$hospital-left} + #{$hospital-width});

			@include width-height(100%, 100px);

			background-color: $colors__blue_02;

			position: absolute;
			top: 50%;
			left: $decoVer-left;
			transform: translateY(-50%);

			@media screen and (max-width: $media__maxWidth_xs) {
				& {
					opacity: 0.75;
				}
			}
		}

		// 병원 이미지
		&__hospitalWrapper {
			@include width-height($hospital-width);

			position: absolute;
			top: $hospital-left;
			left: 10%;

			@media screen and (max-width: $media__maxWidth_xs) {
				& {
					opacity: 0.75;
				}
			}
		}
		&__hospital {
			//
		}

		// 사람 이미지
		&__personWrapper {
			@include width-height($person-width, 130px);

			position: absolute;
			top: 30%;
			left: 20%;

			@media screen and (max-width: $media__maxWidth_xs) {
				& {
					opacity: 0.75;
				}
			}
		}
		&__personShadow {
			@include width-height(calc(100% + 20px), 10%);

			position: absolute;
			bottom: 0;
			left: -10px;
			transform: translateY(50%);

			background: radial-gradient(
				circle,
				rgba($colors__black_02, 1) 0%,
				rgba($colors__black_02, 0) 100%
			);
			border-radius: 50%;
		}
		&__person {
			position: absolute;
			top: 0;
			left: 0;
		}

		// 바이러스 이미지
		&__virusWrapper {
			@include width-height($virus-width);

			position: absolute;
			top: 50%;
			left: calc(20% + #{$person-width});
			transform: translateY(-50%);

			@media screen and(max-width: $media__maxWidth_xs) {
				& {
					opacity: 0.75;
				}
			}
		}
		&__virus {
			//
		}

		// Header 제목
		&__title {
			color: $colors__white_01;
			font-size: $fontSize_30;
			font-weight: 900;
			text-shadow: 0 0 10px $colors__black_01;

			position: absolute;
			top: 50%;
			right: 10%;

			&:nth-of-type(1) {
				transform: translateY(calc(-50% - 20px));
			}
			&:nth-of-type(2) {
				transform: translateY(calc(-50% + 20px));
			}

			@media screen and (max-width: $media__maxWidth_sm) {
				& {
					color: $colors__black_01;
					text-shadow: 0 0 10px $colors__white_01;
				}
			}
		}
	}
}
</style>
