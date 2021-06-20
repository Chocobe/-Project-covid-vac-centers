<template>
	<Bl_DevInfo_Card title="기타 스킬">
		<div class="subSkills__itemsWrapper">
			<!-- Markdown -->
			<Bl_DevInfo_Card_SkillItem
				title="Markdown"
				percent="100%"
				:icon="['fab', 'markdown']"
			>
				Code형식, 테이블 등 Markdown 문서를 작성할 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Webpack -->
			<Bl_DevInfo_Card_SkillItem title="Webpack" percent="50%">
				entry, output, module, plugins 의 역할을 알고 있습니다. Typescript,
				SCSS, ESLint, Prettier 를 설치 및 설정할 수 잇습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- (CSS) BEM -->
			<Bl_DevInfo_Card_SkillItem title="(CSS) BEM" percent="50%">
				Style class의 명명법과 스타일 모듈화를 구현할 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Storybook -->
			<Bl_DevInfo_Card_SkillItem title="Storybook" percent="40%">
				Vue 프로젝트에서 Storybook Framework를 사용하여 컴포넌트 문서화를 작성할
				수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Vuetify -->
			<Bl_DevInfo_Card_SkillItem title="Vuetify" percent="20%">
				Vuetify UI Framework의 Document를 참조하여, 컴포넌트를 사용할 수
				있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- JUnit -->
			<Bl_DevInfo_Card_SkillItem title="JUnit" percent="20%">
				정규식에 대한 Test Unit을 만들 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>
		</div>
	</Bl_DevInfo_Card>
</template>

<script lang="ts">
import Vue from "vue";
import Bl_DevInfo_Card from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card.vue";
import Bl_DevInfo_Card_SkillItem from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_SkillItem.vue";

export default Vue.extend({
	components: {
		Bl_DevInfo_Card,
		Bl_DevInfo_Card_SkillItem,
	},
});
</script>

<style scoped lang="scss">
.subSkills__itemsWrapper {
	padding-left: 20px;
}
</style>
