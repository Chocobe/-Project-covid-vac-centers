<template>
	<div id="Bl_DevInfo_Title" class="mainTitle">
		<h1 class="mainTitle__title">프로젝트 및 개발자 소개</h1>

		<h2 class="mainTitle__subTitle">
			- <span class="mainTitle__subTitle_accent">독도</span>는 대한민국의
			고유영토 입니다 -
		</h2>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	//
});
</script>

<style scoped lang="scss">
.mainTitle {
	@include width-height(100%, 300px);
	@include flex(center, center, wrap, column);

	background-image: url("../../../assets/image/devInfo/독도.png"),
		url("../../../assets/image/devInfo/태극기.png");
	background-repeat: no-repeat;
	background-position: bottom center, top right;
	background-size: 100%, contain;
	background-color: rgba($colors__white_01, 0.2);
	background-blend-mode: multiply;

	@media screen and (max-width: $media__maxWidth_sm) {
		background-position: bottom center, center;
	}

	@mixin fontStyle($fontSize: 30px) {
		padding: 10px 20px;

		color: $colors__black_01;
		font-size: $fontSize;
		font-weight: 900;
		text-align: center;

		border-radius: 50px;
		background: radial-gradient(rgba(#fff, 0.5) 50%, transparent);
	}

	&__title {
		@include fontStyle();

		margin-bottom: 10px;
	}

	&__subTitle {
		@include fontStyle(20px);
	}
}
</style>
