<template>
	<article id="Bl_DevInfo_Side">
		<!-- 증명사진 -->
		<div class="pictureWrapper">
			<figure class="pictureWrapper__inner">
				<img
					src="../../../assets/image/devInfo/공연.jpg"
					alt="사진: 증명사진"
					class="pictureWrapper__img"
				/>
			</figure>

			<p class="pictureWrapper__name">
				Name: <span class="pictureWrapper__name_accent">김영우</span>
			</p>
		</div>

		<!-- 경계선 -->
		<div class="separators"></div>

		<div class="sideSection__sectionWrapper">
			<!-- 섹션: 프로필 -->
			<Bl_DevInfo_SideItem class="sideSection" icon="id-card" title="프로필">
				<p class="sideSection__profile">
					<span class="sideSection__profile_accent">꾸준한 자기개발</span>을
					최고 장점으로 갖는 Front-End 주니어 개발자 입니다.
				</p>

				<p class="sideSection__profile">
					메인 스킬셋은 <span class="sideSection__profile_accent">Vue</span>와
					<span class="sideSection__profile_accent">Typescript</span> 이며,
					컴파일 시 발생하는 오류나 경고에 대한 해결 욕구가 강합니다.
				</p>

				<p class="sideSection__profile">
					<span class="sideSection__profile_accent">묵묵한 스타일</span> 이지만
					팀에 조화되는 팀원이 되고자 노력하고 할당받은 업무에는
					<span class="sideSection__profile_accent">책임감</span>을 갖는 스타일
					입니다.
				</p>
			</Bl_DevInfo_SideItem>

			<!-- 섹션: Github -->
			<Bl_DevInfo_SideItem
				class="sideSection"
				icon="github"
				iconPrefix="fab"
				title="Github"
			>
				<a
					class="sideSection__link"
					href="https://github.com/Chocobe"
					target="_blank"
				>
					https://github.com/Chocobe
				</a>
			</Bl_DevInfo_SideItem>

			<!-- 섹션: 블로그 -->
			<Bl_DevInfo_SideItem
				class="sideSection"
				icon="chalkboard-teacher"
				title="블로그"
			>
				<a
					class="sideSection__link"
					href="https://chocobe.github.io"
					target="_blank"
				>
					https://chocobe.github.io
				</a>
			</Bl_DevInfo_SideItem>

			<!-- 섹션: Storybook -->
			<Bl_DevInfo_SideItem
				class="sideSection"
				icon="object-ungroup"
				title="Storybook"
			>
				<a
					class="sideSection__link"
					href="https://sb-c19ctr.netlify.app/"
					target="_blank"
				>
					https://sb-c19ctr.netlify.app/
				</a>
			</Bl_DevInfo_SideItem>

			<!-- 섹션: 개인성향 -->
			<Bl_DevInfo_SideItem
				class="sideSection"
				icon="user-check"
				title="개인성향"
			>
				<div class="myTypeWrapper">
					<div class="myType">
						<h5 class="myType__label">근태</h5>
						<Comp_GaugeBar class="myType__bar" percent="100%"></Comp_GaugeBar>
					</div>

					<div class="myType">
						<h5 class="myType__label">정보공유</h5>
						<Comp_GaugeBar class="myType__bar" percent="75%"></Comp_GaugeBar>
					</div>

					<div class="myType">
						<h5 class="myType__label">개인 스터디</h5>
						<Comp_GaugeBar class="myType__bar" percent="100%"></Comp_GaugeBar>
					</div>

					<div class="myType">
						<h5 class="myType__label">커뮤니케이션</h5>
						<Comp_GaugeBar class="myType__bar" percent="50%"></Comp_GaugeBar>
					</div>
				</div>
			</Bl_DevInfo_SideItem>
		</div>
	</article>
</template>

<script lang="ts">
import Vue from "vue";

import Bl_DevInfo_SideItem from "@/views/devInfo/blDevInfoSide/Bl_DevInfo_SideItem.vue";
import Comp_GaugeBar from "@/components/Comp_GaugeBar.vue";

export default Vue.extend({
	components: {
		Bl_DevInfo_SideItem,
		Comp_GaugeBar,
	},
});
</script>

<style scoped lang="scss">
#Bl_DevInfo_Side {
	@include width-height(100%, 100%);

	padding: 20px;

	border-radius: 20px;
	background-color: #eff2fc;
	box-shadow: 0 1px 6px rgba(#000, 0.5);

	& > *:last-child {
		margin-bottom: 0 !important;
	}

	@media screen and (max-width: $media__maxWidth_sm) {
		@include flex(flex-start, flex-start);
	}

	// 증명사진 영역
	.pictureWrapper {
		//

		@media screen and (max-width: $media__maxWidth_sm) {
			@include width-height(250px);
		}

		@media screen and (max-width: $media__maxWidth_sm) {
			margin: 0 auto;
		}

		&__inner {
			@include width-height(66.6%);

			margin: 0 auto 20px;
			padding-top: 66.6%;

			border: 2px solid $colors__pink_01;
			border-radius: 50%;

			position: relative;

			overflow: hidden;
		}

		&__img {
			@include width-height(auto, 105%);

			object-fit: cover;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.pictureWrapper__name {
			color: $colors__black_02;
			text-align: right;

			@media screen and (max-width: $media__maxWidth_sm) {
				text-align: center;
			}

			&_accent {
				color: $colors__black_01;
				font-weight: 900;
			}
		}
	}

	// 경계선
	.separators {
		@include width-height(66.6%, 10px);

		margin: 20px auto;

		border-radius: 20px;
		background-color: $colors__gray_03;

		@media screen and (max-width: $media__maxWidth_sm) {
			display: none;
		}

		@media screen and (max-width: $media__maxWidth_xs) {
			display: block;
		}
	}

	// 섹션
	.sideSection__sectionWrapper {
		@include width-height(100%);

		flex: 1;

		@media screen and (max-width: $media__maxWidth_xs) {
			flex-shrink: 0;
			flex-basis: auto;
		}
	}

	.sideSection {
		margin-bottom: 20px;

		&__profile {
			margin-top: 10px;
			padding-left: 20px;

			position: relative;

			&::before {
				@include width-height(5px, 5px);

				content: "";

				background-color: $colors__blue_02;

				position: absolute;
				top: 7.5px;
				left: 7.5px;
			}

			&_accent {
				color: $colors__orange_01;
				font-weight: 900;
			}
		}

		&__link {
			color: $colors__blue_01;
		}

		// 섹션: 개인성향
		.myTypeWrapper {
			//

			& > *:last-child {
				margin-bottom: 0;
			}
		}

		.myType {
			@include flex(flex-start, center);

			margin-bottom: 5px;
			padding-left: 15px;

			&__label {
				@include width-height(90px);

				margin-right: 10px;
			}

			&__bar {
				@include width-height(100%, 20px);

				background-color: #fff;
				flex: 1;
			}
		}
	}
}
</style>
