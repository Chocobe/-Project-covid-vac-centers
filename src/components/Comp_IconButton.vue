<template>
	<button
		class="Comp_IconButton iconButton"
		:style="buttonStyle"
		@click="onClick"
	>
		<span class="iconButton__icon">
			<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
		</span>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		icon: {
			type: String,
			default: "angle-double-up",
		},

		width: {
			type: String,
			default: "50px",
		},

		height: {
			type: String,
			default: "50px",
		},

		iconColor: {
			type: String,
			default: "#fff",
		},

		bgColor: {
			type: String,
			default: "#15d381",
		},

		fontSize: {
			type: String,
			default: "30px",
		},
	},

	computed: {
		buttonStyle(): {
			width: string;
			height: string;
			color: string;
			backgroundColor: string;
			fontSize: string;
		} {
			return {
				width: this.width,
				height: this.height,
				color: this.iconColor,
				backgroundColor: this.bgColor,
				fontSize: this.fontSize,
			};
		},
	},

	methods: {
		onClick(): void {
			this.$emit("click");
		},
	},
});
</script>

<style scoped lang="scss">
.Comp_IconButton {
	@include width-height(50px, 50px);

	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;

	color: $colors__white_01;
	font-size: 30px;

	background-color: #15d381;
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 5px rgba($colors__black_01, 1);

	cursor: pointer;

	&:hover .iconButton__icon {
		animation: anim-iconButton 0.75s infinite;

		display: inline-block;

		@keyframes anim-iconButton {
			50% {
				color: #ffc8a2;
				transform: translateY(-2px);
			}
		}
	}

	&:active {
		box-shadow: 0 0 5px rgba($colors__black_01, 1) inset;
	}
}
</style>
