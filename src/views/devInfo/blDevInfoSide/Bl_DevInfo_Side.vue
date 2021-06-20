<template>
	<article id="Bl_DevInfo_Side">
		<!-- 증명사진 -->
		<div class="pictureWrapper">
			<figure class="pictureWrapper__inner">
				<img
					src="../../../assets/image/devInfo/Kirby.png"
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

		<!-- 섹션: 프로필 -->
		<Bl_DevInfo_SideItem
			class="sideSection"
			icon="id-card"
			title="프로필"
			content="안녕하세요 초코비 프로필 입니다. 안녕하세요 초코비 프로필12341234
				입니다."
		></Bl_DevInfo_SideItem>

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
			<a class="sideSection__link" href="#" target="_blank">
				https://chocobe.storybook.io
			</a>
		</Bl_DevInfo_SideItem>

		<!-- 섹션: 개인성향 -->
		<Bl_DevInfo_SideItem class="sideSection" icon="user-check" title="개인성향">
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
					<Comp_GaugeBar class="myType__bar" percent="75%"></Comp_GaugeBar>
				</div>
			</div>
		</Bl_DevInfo_SideItem>
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

	// 증명사진 영역
	.pictureWrapper {
		//

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
			@include width-height(auto, 100%);

			object-fit: cover;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.pictureWrapper__name {
			color: $colors__black_02;
			text-align: right;

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
	}

	// 섹션
	.sideSection {
		margin-bottom: 20px;

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
