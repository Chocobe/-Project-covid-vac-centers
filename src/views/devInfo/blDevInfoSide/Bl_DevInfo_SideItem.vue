<template>
	<section class="sideSection">
		<h4 class="sideSection__label">
			<template v-if="iconPrefix">
				<FontAwesomeIcon
					class="sideSection__icon"
					:icon="[iconPrefix, icon]"
				></FontAwesomeIcon>
			</template>
			<template v-else>
				<FontAwesomeIcon
					class="sideSection__icon"
					:icon="icon"
				></FontAwesomeIcon>
			</template>

			<span class="sideSection__title">{{ title }}</span>
		</h4>

		<p class="sideSection__content">
			<slot>{{ content }}</slot>
		</p>
	</section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		icon: {
			type: String,
			required: true,
		},

		iconPrefix: {
			type: String,
		},

		title: {
			type: String,
			required: true,
		},

		content: {
			type: String,
			default: "",
		},
	},
});
</script>

<style scoped lang="scss">
.sideSection {
	//

	&__label {
		margin-bottom: 5px;
	}

	&__icon {
		margin-right: 5px;

		color: $colors__black_02;
	}

	&__title {
		font-weight: 900;
	}

	&__content {
		font-size: 0.875rem;
		word-break: keep-all;
	}
}
</style>
