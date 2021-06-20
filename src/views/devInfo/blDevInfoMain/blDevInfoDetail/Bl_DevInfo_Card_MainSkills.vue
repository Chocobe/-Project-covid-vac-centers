<template>
	<Bl_DevInfo_Card title="메인 스킬">
		<div class="mainSkills__itemsWrapper">
			<!-- Vue -->
			<Bl_DevInfo_Card_SkillItem
				title="Vue"
				percent="80%"
				:icon="['fab', 'vuejs']"
			>
				Vue의 컴포넌트 통신, Store Module화, Route, Typescript를 사용할 수
				있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Typescript -->
			<Bl_DevInfo_Card_SkillItem title="Typescript" percent="50%">
				데이터, 함수, Rest API 관련 객체에 대한 interface를 작성하고 optional
				속성, 상속 등을 사용할 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- SCSS -->
			<Bl_DevInfo_Card_SkillItem
				title="SCSS"
				percent="50%"
				:icon="['fab', 'sass']"
			>
				Nesting, Mixins, Variables 등을 사용할 수 있고, BEM, PRECSS 설계방법을
				적용시킬 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Github -->
			<Bl_DevInfo_Card_SkillItem title="Github" percent="50%">
				commit, amend, pull request, reset 등 형상관리 기능을 사용할 수
				있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Jaavascript -->
			<Bl_DevInfo_Card_SkillItem
				title="Javascript"
				percent="75%"
				:icon="['fab', 'js-square']"
			>
				ES6+ 문법을 사용할 수 있고, prototype과 Execution Context에 대해
				공부하였습니다.
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
.mainSkills__itemsWrapper {
	padding-left: 20px;
}
</style>
