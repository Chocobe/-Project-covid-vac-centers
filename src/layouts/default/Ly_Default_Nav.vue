<template>
	<nav id="Ly_Default_Nav" class="nav">
		<ul class="nav__ul">
			<template v-for="item of navItems">
				<Ly_Default_NavItem :key="item.id" :navItem="item"></Ly_Default_NavItem>
			</template>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from "vue";
import Ly_Default_NavItem from "@/layouts/default/Ly_Default_NavItem.vue";

import { DB_NavItem } from "@/interface/navItem/DB_NavItem";

export default Vue.extend({
	components: {
		Ly_Default_NavItem,
	},

	computed: {
		navItems(): DB_NavItem[] {
			return this.$store.getters["/nav/getOriginNavList"];
		},
	},
});
</script>

<style scoped lang="scss">
#Ly_Default_Nav {
	// @include width-height();

	.nav__ul {
		@include flex(flex-start, stretch);

		& > * {
			@include width-height(50%);

			flex: 1 auto;
		}

		@media screen and (max-width: $media__maxWidth_xs) {
			& > * {
				@include width-height(100%);
			}
		}
	}
}
</style>
