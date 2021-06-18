<template>
	<div class="about">
		<h1>개발중 입니다.</h1>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	components: {
		//
	},

	data: () => {
		return {
			//
		};
	},

	methods: {
		//
	},
});
</script>

<style scoped lang="scss">
.about {
	padding-top: 1px;

	& > h1 {
		margin: 40px auto;

		color: $colors__black_01;
		font-size: 30px;
		font-weight: 900;
		text-align: center;
	}
}
</style>
