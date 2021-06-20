<template>
	<Bl_DevInfo_Card title="사용가능 툴">
		<div class="tools__itemsWrapper">
			<!-- Webstorm -->
			<Bl_DevInfo_Card_SkillItem title="Webstorm" percent="80%">
				Vue 프로젝트 작업과 Debugging 기능을 사용할 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- VSCode -->
			<Bl_DevInfo_Card_SkillItem title="VSCode" percent="80%">
				Vue 프로젝트, HTML, CSS 에도 사용할 수 있지만, 주로 Markdown 작성시에
				사용하고 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Postman -->
			<Bl_DevInfo_Card_SkillItem title="Postman" percent="50%">
				Rest API를 테스트 할 때 사용하고, Collection을 구성하여 Session유지
				환경을 구축할 수 있습니다.
			</Bl_DevInfo_Card_SkillItem>

			<!-- Figma -->
			<Bl_DevInfo_Card_SkillItem
				title="Figma"
				percent="50%"
				:icon="['fab', 'figma']"
			>
				UI를 그릴 수 있고, Wire Frame을 사용하여 Prototype을 만들 수 있습니다.
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
.tools__itemsWrapper {
	padding-left: 20px;
}
</style>
