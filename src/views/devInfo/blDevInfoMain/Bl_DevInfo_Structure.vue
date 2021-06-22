<template>
	<article id="Bl_DevInfo_Structure" class="structureInfo">
		<!-- Vue -->
		<section class="structureInfo__vue">
			<div class="structureInfo__vue__inner">
				<figure class="structureInfo__logoWrapper">
					<img
						src="../../../assets/image/devInfo/Vue_logo.png"
						alt="로고: Vue"
						class="structureInfo__logo"
					/>

					<h3 class="structureInfo__version">Vue 2.x</h3>
				</figure>

				<div
					class="
						structureInfo__contentWrapper structureInfo__contentWrapper_flex
					"
				>
					<div class="structureInfo__deco structureInfo__deco_vue"></div>

					<p class="structureInfo__content">
						프로젝트 메인
						<span class="structureInfo__accent">Framework</span> 입니다.
					</p>

					<p class="structureInfo__content">
						기능, 역할별 Component를 분리하고자 노력하며,
					</p>

					<p class="structureInfo__content">
						Component에
						<span class="structureInfo__accent">단일책임 원칙</span>을 적용하기
						위해 노력 중 입니다.
					</p>
				</div>
			</div>
		</section>

		<!-- Webpack -->
		<section class="structureInfo__webpack">
			<div class="structureInfo__webpack__inner">
				<figure
					class="structureInfo__logoWrapper structureInfo__logoWrapper_webpack"
				>
					<img
						src="../../../assets/image/devInfo/Webpack_logo.png"
						alt="로고: Webpack"
						class="structureInfo__logo structureInfo__logo_webpack"
					/>

					<p class="structureInfo__webpack__name">Webpack</p>
				</figure>
			</div>
		</section>

		<!-- SFC 영역 -->
		<div class="structureInfo__sfc">
			<!-- template 영역 -->
			<section class="structureInfo__template">
				<div class="structureInfo__template__inner">
					<figure class="structureInfo__logoWrapper">
						<div class="structureInfo__tag">&lt;template&gt;</div>

						<img
							src="../../../assets/image/devInfo/Html_logo.png"
							alt="로고: Html"
							class="structureInfo__logo"
						/>

						<div class="structureInfo__tag">&lt;/template&gt;</div>
					</figure>

					<div
						class="
							structureInfo__contentWrapper structureInfo__contentWrapper_flex
						"
					>
						<div class="structureInfo__deco structureInfo__deco_template"></div>

						<p class="structureInfo__content">
							<span class="structureInfo__accent">시멘틱 태그</span>를 활용한
						</p>

						<p class="structureInfo__content">
							<span class="structureInfo__accent">반응형 페이지</span>를
							만들었습니다.
						</p>
					</div>
				</div>
			</section>

			<!-- script 영역 -->
			<section class="structureInfo__script">
				<div class="structureInfo__script__inner">
					<figure class="structureInfo__logoWrapper">
						<div class="structureInfo__tag">&lt;script&gt;</div>

						<img
							src="../../../assets/image/devInfo/Typescript_logo.png"
							alt="로고: Typescript"
							class="structureInfo__logo"
						/>

						<div class="structureInfo__tag">&lt;/script&gt;</div>
					</figure>

					<div
						class="
							structureInfo__contentWrapper structureInfo__contentWrapper_flex
						"
					>
						<div class="structureInfo__deco structureInfo__deco_script"></div>

						<p class="structureInfo__content">
							<span class="structureInfo__accent"> Interface </span>
							와
							<span class="structureInfo__accent"> Enum </span>
							을 활용한
						</p>

						<p class="structureInfo__content">
							<span class="structureInfo__accent">타입검사</span>를 기반으로
							작성 하였습니다.
						</p>
					</div>
				</div>
			</section>

			<!-- style 영역 -->
			<section class="structureInfo__style">
				<div class="structureInfo__style__inner">
					<figure class="structureInfo__logoWrapper">
						<div class="structureInfo__tag">&lt;style&gt;</div>

						<img
							src="../../../assets/image/devInfo/Sass_logo.png"
							alt="로고: SCSS"
							class="structureInfo__logo"
						/>

						<div class="structureInfo__tag">&lt;/style&gt;</div>
					</figure>

					<div
						class="
							structureInfo__contentWrapper structureInfo__contentWrapper_flex
						"
					>
						<div class="structureInfo__deco structureInfo__deco_style"></div>

						<p class="structureInfo__content">
							<span class="structureInfo__accent">BEM</span> 방법론을 적용하여
						</p>

						<p class="structureInfo__content">
							style의 <span class="structureInfo__accent">구조화</span>를 시도중
							입니다.
						</p>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	//
});
</script>

<style scoped lang="scss">
.structureInfo {
	//

	// Vue 색상
	$bgColor__vue: #f5fdf7;
	$decoColor__vue: #41b883;

	// Webpack 색상
	$bgColor__webpack: #eef5f9;

	// Template 색상
	$bgColor__template: #fcede9;
	$decoColor__template: #e44d26;

	// Script 색상
	$bgColor__script: #e6f3fb;
	$decoColor__script: #0385d2;

	// Style 색상
	$bgColor__style: #fcede9;
	$decoColor__style: #e187b1;

	$logoWrapper__width: 200px;
	$logoWrapper__margin: 50px;

	// 공통 영역
	&__logoWrapper {
		@include width-height($logoWrapper__width);

		margin-right: $logoWrapper__margin;
		padding-left: 20px;

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(100%);
			@include flex(center, center, wrap, column);

			margin-right: 0;
			padding-right: 20px;
		}

		&_webpack {
			@include width-height(100%);
			@include flex(flex-end);
		}
	}

	&__tag {
		font-weight: 900;

		@media screen and (max-width: $media__maxWidth_xs) {
			display: none;
		}

		&:first-child {
			margin-bottom: 20px;

			@media screen and (max-width: $media__maxWidth_sm) {
				margin-bottom: 0;
			}
		}

		&:last-child {
			margin-top: 20px;

			@media screen and (max-width: $media__maxWidth_sm) {
				margin-top: 0;
			}
		}
	}

	&__logo {
		display: block;
		margin: 0 auto;

		@media screen and (max-width: $media__maxWidth_sm) {
			margin: 0 20px;
		}

		&_webpack {
			margin: 0 0 auto;
		}
	}

	&__version {
		color: $colors__black_01;
		font-size: 20px;
		font-weight: 900;
		text-align: center;
	}

	&__contentWrapper {
		padding: 40px 0;

		position: relative;

		@media screen and (max-width: $media__maxWidth_sm) {
			padding-bottom: 0;
		}

		&_flex {
			flex: 1;
		}
	}

	&__content {
		padding: 0 20px;

		@media screen and (max-width: $media__maxWidth_sm) {
			text-align: center;
		}
	}

	&__accent {
		color: $colors__black_01;
		font-size: 1.25rem;
		font-weight: 900;
	}

	&__deco {
		@include width-height(200%, 5px);

		position: absolute;
		top: 10px;
		left: 0;

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(50%, 5px);

			left: 50%;
			transform: translateX(-50%);
		}

		&_vue {
			background-color: $decoColor__vue;
		}

		&_template {
			background-color: $decoColor__template;
		}

		&_script {
			background-color: $decoColor__script;
		}

		&_style {
			background-color: $decoColor__style;
		}
	}

	// Vue 영역
	&__vue {
		padding: 20px 0 50px;

		overflow: hidden;

		&__inner {
			@include flex();

			padding: 20px 0 0;

			position: relative;

			background-color: $bgColor__vue;

			&::after {
				@include width-height(200%, 100px);

				content: "";

				background-color: $bgColor__vue;

				position: absolute;
				bottom: -50px;
				left: 0;
				transform-origin: bottom left;
				transform: rotateZ(-2.5deg);

				z-index: -1;
			}
		}
	}

	// Webpack 영역
	&__webpack {
		margin-top: -25px;
		padding: 50px 0 0;

		overflow: hidden;

		&__inner {
			padding-bottom: 20px;

			position: relative;

			background-color: $bgColor__webpack;

			&::before {
				@include width-height(200%, 100px);

				content: "";

				background-color: $bgColor__webpack;

				position: absolute;
				top: 0;
				left: 0;
				transform-origin: top left;
				transform: rotateZ(-2.5deg);

				z-index: -1;
			}
		}

		&__name {
			margin: 0 20px;

			font-size: 1.5rem;
			font-weight: 900;
		}
	}

	// sfc 영역
	&__sfc {
		margin-top: 20px;
		padding-left: 60px;

		position: relative;

		@media screen and (max-width: $media__maxWidth_sm) {
			padding-left: 0;

			// TODO 여기 작업할 차례
		}

		&::before {
			@include width-height(40px, 100%);

			content: "";

			display: block;

			position: absolute;
			top: 0;
			left: 0;

			background-color: $bgColor__webpack;

			@media screen and (max-width: $media__maxWidth_sm) {
				display: none;
			}
		}
	}

	// template 영역
	&__template {
		padding: 0 0 50px;

		overflow: hidden;

		&__inner {
			@include flex(flex-start);

			padding-top: 20px;

			position: relative;

			background-color: $bgColor__template;

			&::after {
				@include width-height(200%, 100px);

				content: "";

				position: absolute;
				bottom: -50px;
				left: 0;
				transform-origin: bottom left;
				transform: rotateZ(-3deg);

				background-color: $bgColor__template;

				z-index: -1;
			}
		}
	}

	// script 영역
	&__script {
		margin-top: -25px;
		padding: 50px 0;

		overflow: hidden;

		&__inner {
			@include flex(flex-start);

			padding-top: 20px;

			position: relative;

			background-color: $bgColor__script;

			&::before {
				@include width-height(200%, 100px);

				content: "";

				position: absolute;
				top: 0;
				left: 0;
				transform-origin: top left;
				transform: rotateZ(-3deg);

				background-color: $bgColor__script;

				z-index: -1;
			}

			&::after {
				@include width-height(200%, 100px);

				content: "";

				position: absolute;
				bottom: -50px;
				left: -10px;
				transform-origin: top left;
				transform: rotateZ(-3deg);

				background-color: $bgColor__script;

				z-index: -1;
			}
		}
	}

	// style 영역
	&__style {
		margin-top: -25px;
		padding-top: 50px;

		overflow: hidden;

		&__inner {
			@include flex(flex-start);

			padding: 20px 0;

			position: relative;

			background-color: $bgColor__style;

			&::before {
				@include width-height(200%, 100px);

				content: "";

				position: absolute;
				top: 0;
				left: 0;
				transform-origin: top left;
				transform: rotateZ(-3deg);

				background-color: $bgColor__style;

				z-index: -1;
			}
		}
	}
}
</style>
