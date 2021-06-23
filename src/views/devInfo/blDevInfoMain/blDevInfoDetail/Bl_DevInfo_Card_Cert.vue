<template>
	<Bl_DevInfo_Card title="자격증">
		<div class="certInfo__icon">
			<FontAwesomeIcon icon="certificate"></FontAwesomeIcon>
		</div>

		<div class="certInfo">
			<p class="certInfo__name">정보처리기사</p>
			<p class="certInfo__date">2019. 08. 16</p>
			<p class="certInfo__issuer">과학기술 정보통신부</p>
		</div>

		<div class="certInfo">
			<p class="certInfo__name">일본어 능력 시험 (JLPT N4)</p>
			<p class="certInfo__date">2017. 12. 03</p>
			<p class="certInfo__issuer">한일문화교류 협회</p>
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
.certInfo__icon {
	@include width-height(100px, 100px);

	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);

	z-index: -1;

	@media screen and (max-width: $media__maxWidth_xs) {
		@include width-height(80px, 80px);
	}

	& > * {
		@include width-height(100%, 100%);

		color: $colors__purple_01;
	}
}

.certInfo {
	@include flex(flex-start);

	padding-left: 20px;

	@media screen and (max-width: $media__maxWidth_xs) {
		align-items: flex-start;
		flex-direction: column;
	}

	$name-width: 200px;
	$date-width: 100px;

	&__name {
		@include width-height($name-width);
	}

	&__date {
		@include width-height($date-width);

		margin-left: 20px;
	}

	&__issuer {
		// @include width-height(100px);

		margin-left: 20px;
	}
}
</style>
