<template>
	<div id="Bl_CovidCenters_Guide" class="guide">
		<!-- 가이드 헤더 -->
		<div class="guide__header">
			<!-- 제목 -->
			<div class="guide__titleWrapper">
				<h1 class="guide__title">예방접종 후</h1>

				<h1 class="guide__title">이렇게 하시면</h1>

				<h1 class="guide__title">
					<span class="guide__title_accent">도움</span>이 됩니다.
				</h1>
			</div>

			<!-- 제목 이미지 -->
			<figure class="guide__title__imgWrapper">
				<img
					src="../../../assets/image/covidCentersGuide/도움.png"
					alt="이미지: 가이드"
					class="guide__title__img"
				/>
			</figure>
		</div>

		<!-- 가이드: 냉찜질 -->
		<section class="guide__section">
			<!-- 냉찜질 안내 -->
			<div class="guide__descriptionWrapper">
				<h2 class="guide__description">접종부위 부기, 통증이 있는 경우</h2>
				<h2 class="guide__description">깨끗한 마른 수건을 대고 그 위에</h2>
				<h2 class="guide__description">
					<span class="guide__description_accent">냉찜질</span> 하세요
				</h2>
			</div>

			<!-- 냉찜질 이미지 -->
			<figure class="guide__section__imgWrapper">
				<img
					src="../../../assets/image/covidCentersGuide/냉찜질.png"
					alt="이미지: 냉찜질"
					class="guide__section__img"
				/>
			</figure>
		</section>

		<!-- 가이드: 수분 -->
		<section class="guide__section guide__section_reverse">
			<div class="guide__descriptionWrapper">
				<h2 class="guide__description">미열이 있는 경우</h2>
				<h2 class="guide__description">
					<span class="guide__description_accent">수분</span>과
					<span class="guide__description_accent">휴식</span>을 취하세요
				</h2>
			</div>

			<figure class="guide__section__imgWrapper">
				<img
					src="../../../assets/image/covidCentersGuide/수분.png"
					alt="이미지: 수분"
					class="guide__section__img"
				/>
			</figure>
		</section>

		<!-- 가이드: 해열제 -->
		<section class="guide__section">
			<div class="guide__descriptionWrapper">
				<h2 class="guide__description">
					발열이나 근육통 등으로 불편이 있는 경우
				</h2>
				<h2 class="guide__description guide__description_accent">
					해열제나 진통제를 복용
				</h2>
				<h2 class="guide__description">하시면 도움이 됩니다</h2>
			</div>

			<figure class="guide__section__imgWrapper">
				<img
					src="../../../assets/image/covidCentersGuide/해열제.png"
					alt="이미지: 해열제"
					class="guide__section__img"
				/>
			</figure>
		</section>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	//
});
</script>

<style scoped lang="scss">
#Bl_CovidCenters_Guide {
	padding: 40px 20px;
}

.guide {
	@mixin fontStyle-description() {
		color: $colors__black_02;
		font-size: 1.75rem;
	}

	@mixin fontStyle-accent() {
		color: $colors__black_01;
		font-size: 2rem;
		font-weight: 900;
	}

	$section-padding: 150px;

	// 가이드 헤더
	&__header {
		@include flex();
	}

	// 가이드 헤더 - 제목 영역
	&__titleWrapper {
		@include flex(flex-start, flex-start, wrap, column);

		margin: 0 auto;
	}

	&__title {
		@include fontStyle-description();

		&_accent {
			@include fontStyle-accent();
		}

		@for $i from 1 through 3 {
			&:nth-of-type(#{$i}) {
				margin-left: calc(#{$i - 1} * 3rem);
			}
		}
	}

	// 가이드 헤더 - 이미지 영역
	&__title__imgWrapper {
		margin: 0 80px;
	}

	&__title__img {
		@include width-height(100%);
		max-width: 350px;
	}

	// 가이드 섹션
	&__section {
		// @include flex(flex-end);

		padding: $section-padding 0;

		position: relative;
		overflow: hidden;

		&::before {
			@include width-height(200%, calc(100% - #{$section-padding}));

			content: "";

			background-color: $colors__green_03;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%) rotateZ(-5deg);

			z-index: -1;
		}

		&_reverse {
			align-items: flex-start;

			&::before {
				background-color: $colors__blue_03;

				transform: translateX(-50%) translateY(-50%) rotateZ(5deg);
			}
		}

		@for $i from 2 through 3 {
			&:nth-of-type(#{$i}) {
				margin-top: -75px;

				@media screen and (max-width: $media__maxWidth_md) {
					margin-top: -100px;
				}

				@media screen and (max-width: $media__maxWidth_xs) {
					margin-top: -130px;
				}
			}
		}

		@media screen and (max-width: $media__maxWidth_sm) {
			@for $i from 2 through 3 {
				&:nth-of-type(#{$i}) {
					// margin-top: -100px;
				}
			}
		}
	}

	// 가이드 섹션: 설명 영역
	&__descriptionWrapper {
		//
	}

	&__description {
		@include fontStyle-description();
		text-align: center;
		text-shadow: 0 0 10px $colors__white_01;

		word-break: keep-all;

		&_accent {
			@include fontStyle-accent();
		}
	}

	// 가이드 섹션: 이미지 영역
	&__section__imgWrapper {
		position: absolute;
		bottom: 20%;

		opacity: 0.5;

		z-index: -1;
	}

	&__section__img {
		max-width: 150px;
	}

	@mixin media__imgWrapper_xs() {
		@media screen and (max-width: $media__maxWidth_xs) {
			bottom: -20%;
			right: auto;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -30%);

			opacity: 0.25;
		}
	}

	&__section:nth-of-type(2n - 1) &__section__imgWrapper {
		left: 20px;

		@include media__imgWrapper_xs();
	}

	&__section:nth-of-type(2n) &__section__imgWrapper {
		right: 20px;

		@include media__imgWrapper_xs();
	}
}
</style>
