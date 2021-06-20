<template>
	<Bl_DevInfo_Card title="경력 (1년 1개월)">
		<div class="careersInfo__icon">
			<FontAwesomeIcon icon="user-tie"></FontAwesomeIcon>
		</div>

		<div class="careersInfo__content">
			주요사업: MES (공장 자동화 시스템 구축)
		</div>

		<div class="careersInfo__content">직책(직급): 계장</div>

		<div class="careersInfo__content">부서명: 개발팀</div>

		<div class="careersInfo__content">사원수: 1명</div>

		<div class="careersInfo__content">
			근무기간: 2020. 04. 01 ~ 2021. 04. 16 (1년 1개월)
		</div>

		<div class="careersInfo__content">
			주요 업무

			<dl class="careersInfo__list">
				<!-- 회사 홈페이지 프로젝트 -->
				<dt class="careersInfo__list__label">회사 홈페이지 프로젝트</dt>
				<dd class="careersInfo__list__content">
					기간: 2020. 05. ~ 2020. 09. (5개월)
				</dd>

				<!-- 강철 절단 MES 프로젝트 -->
				<dt class="careersInfo__list__label">강철 절단 MES 프로젝트</dt>
				<dd class="careersInfo__list__content">
					기간: 2020. 10. ~ 2021. 03. (6개월)
				</dd>

				<!-- Vue 컴포넌트 문서화 -->
				<dt class="careersInfo__list__label">Vue 컴포넌트 문서화</dt>
				<dd class="careersInfo__list__content">
					기간: 2020. 09. ~ 2021. 03. (7개월)
				</dd>

				<!-- 기술 문서화 (Vue, Ag-Grid, Github) -->
				<dd
					class="careersInfo__list__content careersInfo__list__content_single"
				>
					기술 문서화 (Vue, Ag-Grid, Github)
				</dd>

				<!-- 신입교육 -->
				<dd
					class="careersInfo__list__content careersInfo__list__content_single"
				>
					신입교육
				</dd>
			</dl>
		</div>
	</Bl_DevInfo_Card>
</template>

<script lang="ts">
import Vue from "vue";
import Bl_DevInfo_Card from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card.vue";

export default Vue.extend({
	components: {
		Bl_DevInfo_Card,
	},
});
</script>

<style scoped lang="scss">
.careersInfo__icon {
	@include width-height(100px, 100px);

	position: absolute;
	top: 10px;
	right: 20px;

	z-index: -1;

	& > * {
		@include width-height(100%, 100%);
		color: $colors__purple_01;
	}
}

.careersInfo__content {
	margin: 10px 0 0 20px;
}

.careersInfo__list {
	@include flex(flex-start, flex-start);

	padding-left: 20px;
	word-break: keep-all;

	&__label {
		@include width-height(100%);
		max-width: 250px;

		padding-left: 20px;

		position: relative;

		&::before {
			@include width-height(5px, 5px);

			content: "";

			position: absolute;
			top: 50%;
			left: 7.5px;
			transform: translateY(-50%);
			background-color: $colors__blue_02;
		}
	}

	&__content {
		@include width-height(calc(100% - 250px));

		&_single {
			@include width-height(100%);

			padding-left: 20px;

			position: relative;

			&::before {
				@include width-height(5px, 5px);

				content: "";

				position: absolute;
				top: 50%;
				left: 7.5px;
				transform: translateY(-50%);

				background-color: $colors__blue_02;
			}
		}
	}
}
</style>
