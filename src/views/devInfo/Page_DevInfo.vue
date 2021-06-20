<template>
	<div id="Page_DevInfo">
		<!-- 사이드 영역 -->
		<div class="devInfo__side">
			<Bl_DevInfo_Side></Bl_DevInfo_Side>
		</div>

		<!-- 메인 영역 -->
		<div class="devInfo__main">
			<!-- 제목 -->
			<Bl_DevInfo_Title></Bl_DevInfo_Title>

			<!-- 프로젝트 구조 -->
			<Bl_DevInfo_Structure></Bl_DevInfo_Structure>

			<!-- 스킬셋 -->
			<Bl_DevInfo_Detail></Bl_DevInfo_Detail>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import Bl_DevInfo_Side from "@/views/devInfo/blDevInfoSide/Bl_DevInfo_Side.vue";
import Bl_DevInfo_Title from "@/views/devInfo/blDevInfoMain/Bl_DevInfo_Title.vue";
import Bl_DevInfo_Structure from "@/views/devInfo/blDevInfoMain/Bl_DevInfo_Structure.vue";
import Bl_DevInfo_Detail from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Detail.vue";

export default Vue.extend({
	components: {
		Bl_DevInfo_Side,
		Bl_DevInfo_Title,
		Bl_DevInfo_Structure,
		Bl_DevInfo_Detail,
	},
});
</script>

<style scoped lang="scss">
#Page_DevInfo {
	@include flex(flex-start, stretch);

	padding: 20px;

	// 사이드 정보
	.devInfo__side {
		@include width-height(300px);

		margin-right: 20px;
	}

	// 메인 정보
	.devInfo__main {
		@include width-height(100%);

		flex: 1;
	}
}
</style>
