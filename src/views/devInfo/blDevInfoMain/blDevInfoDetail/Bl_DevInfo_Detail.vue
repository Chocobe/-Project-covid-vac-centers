<template>
	<article id="Bl_DevInfo_Detail" class="devDetail">
		<!-- 자격증 -->
		<Bl_DevInfo_Card_Cert></Bl_DevInfo_Card_Cert>

		<!-- 경력 -->
		<Bl_DevInfo_Card_Careers></Bl_DevInfo_Card_Careers>

		<!-- 메인 스킬 -->
		<Bl_DevInfo_Card_MainSkills></Bl_DevInfo_Card_MainSkills>

		<!-- 서브 스킬 -->
		<Bl_DevInfo_Card_SubSkills></Bl_DevInfo_Card_SubSkills>

		<!-- 사용가능 툴 -->
		<Bl_DevInfo_Card_Tools></Bl_DevInfo_Card_Tools>
	</article>
</template>

<script lang="ts">
import Vue from "vue";
import Bl_DevInfo_Card_Cert from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_Cert.vue";
import Bl_DevInfo_Card_Careers from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_Careers.vue";
import Bl_DevInfo_Card_MainSkills from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_MainSkills.vue";
import Bl_DevInfo_Card_SubSkills from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_SubSkills.vue";
import Bl_DevInfo_Card_Tools from "@/views/devInfo/blDevInfoMain/blDevInfoDetail/Bl_DevInfo_Card_Tools.vue";

export default Vue.extend({
	components: {
		Bl_DevInfo_Card_Cert,
		Bl_DevInfo_Card_Careers,
		Bl_DevInfo_Card_MainSkills,
		Bl_DevInfo_Card_SubSkills,
		Bl_DevInfo_Card_Tools,
	},
});
</script>

<style scoped lang="scss">
.devDetail {
	& > * {
		margin-top: 20px;
	}
}
</style>
