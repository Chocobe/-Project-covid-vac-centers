<template>
	<div class="Bl_CovidCenters_Card covidCenterCard">
		Bl_CovidCenter_Card

		<Comp_Card v-bind="$attrs" v-on="$listeners">
			<template v-for="(_, name) of $scopedSlots" v-slot:[name]="slotData">
				<slot :name="name" v-bind="slotData"></slot>
			</template>

			<template>
				<figure class="covidCenterCard__map">
					<img
						src="../../../assets/image/header/예방접종-사람.png"
						alt="test"
					/>
				</figure>
			</template>
		</Comp_Card>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Comp_Card from "@/components/Comp_Card.vue";

export default Vue.extend({
	inheritAttrs: false,

	components: {
		Comp_Card,
	},
});
</script>

<style scoped lang="scss">
.Bl_CovidCenters_Card {
	//
}
</style>
