<template>
	<div class="about">
		<h1>This is an about page</h1>

		<p>테스트 데이터: {{ myData }}</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	data: () => {
		return {
			myData: "Hello World",
		};
	},
});
</script>
