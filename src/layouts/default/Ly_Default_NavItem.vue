<template>
	<li :id="navItem.id" class="navItem" :style="{ backgroundColor: bgColor }">
		<router-link :to="navItem.path" class="navItem__item">
			<template v-if="navItem.icon">
				<FontAwesomeIcon
					:icon="navItem.icon"
					class="navItem__icon"
				></FontAwesomeIcon>
			</template>

			<span class="navItem__name">
				{{ navItem.name }}
			</span>
		</router-link>
	</li>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { DB_NavItem } from "@/interface/navItem/DB_NavItem";

export default Vue.extend({
	props: {
		navItem: {
			type: Object,
			required: true,
		} as PropOptions<DB_NavItem>,
	},

	computed: {
		bgColor() {
			const navItem = this.navItem as DB_NavItem;
			return navItem.bgColor ? navItem.bgColor : "#383841";
		},
	},
});
</script>

<style scoped lang="scss">
.navItem {
	@include width-height(100%, 100%);
	@include flex();

	min-width: 250px;

	&__item {
		padding: 10px 20px;

		color: $colors__white_01;
		font-size: $fontSize_20;
		font-weight: 900;
		text-align: center;
		word-break: keep-all;
	}

	&__icon {
		margin-right: 5px;

		color: $colors__black_01;
	}
}
</style>
