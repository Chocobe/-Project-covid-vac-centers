<template>
	<div class="Comp_SelectBox">
		<select
			@input="onInput"
			class="selectBox"
			:class="{ selectBox_empty: isEmpty }"
		>
			<option :selected="isEmpty" disabled hidden value="">
				{{ placeholder }}
			</option>

			<template v-for="(data, index) of dataList">
				<option :key="`${index}-${data.selector}`" :value="data.value">
					{{ data.selector }}
				</option>
			</template>
		</select>

		<template v-if="isEmpty">
			<span class="selectBox__icon selectBox__icon_empty">
				<FontAwesomeIcon icon="angle-down"></FontAwesomeIcon>
			</span>
		</template>

		<template v-else>
			<span
				class="selectBox__icon selectBox__icon_selected"
				@click="clearValue"
			>
				<FontAwesomeIcon icon="times"></FontAwesomeIcon>
			</span>
		</template>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { I_Comp_SelectBox } from "@/interface/components/I_Comp_SelectBox";

export default Vue.extend({
	props: {
		// <select> 데이터 리스트
		dataList: {
			type: [] as PropType<I_Comp_SelectBox<any>[]>,
			required: true,
		},

		// 선택된 value
		value: {
			type: undefined,
			required: true,
		},

		// placeholder 값
		placeholder: {
			type: String,
			default: "값을 선택해 주세요.",
		},

		height: {
			type: String,
			default: "auto",
		},

		fontSize: {
			type: String,
			default: "1rem",
		},

		padding: {
			type: String,
			default: "5px 10px",
		},
	},

	computed: {
		isEmpty(): boolean {
			return (
				this.value === null || this.value === undefined || this.value === ""
			);
		},
	},

	methods: {
		onInput(event: Event): void {
			const targetElement = event.target as HTMLSelectElement;
			targetElement.blur();

			this.$emit("input", targetElement.value);
		},

		clearValue(): void {
			this.$emit("input", "");
		},

		initStyle(): void {
			const style = `
				height: ${this.height}; padding: ${this.padding};
			`;

			const selectBoxElement = this.$el.querySelector(
				".selectBox",
			) as HTMLSelectElement;
			selectBoxElement.style.cssText = style;

			const rootElement = this.$el as HTMLDivElement;
			rootElement.style.fontSize = this.fontSize;
		},
	},

	mounted(): void {
		this.initStyle();
	},
});
</script>

<style scoped lang="scss">
.Comp_SelectBox {
	@include width-height(100%);

	display: inline-block;
	position: relative;
}

.selectBox {
	@include width-height(100%, 100%);
	min-height: 24px;

	padding: 5px 10px;

	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;

	font-size: 1em;

	outline: none;
	border: none;
	border-radius: 20px;
	box-shadow: 0 3px 6px rgba($colors__black_01, 0.5);
	background-color: transparent;

	&:focus {
		box-shadow: 0 3px 6px rgba($colors__black_01, 0.5) inset;
	}

	// 선택한 값이 없을 때, <select> 스타일
	&_empty {
		color: $colors__black_02;
	}
}

.selectBox__icon {
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);

	color: $colors__black_02;

	&_empty {
		font-size: 1.5em;
	}

	&_selected {
		font-size: 1.2em;

		transition: color 0.25s;

		cursor: pointer;
	}
}

// 선택된 값이 없을 때, icon 스타일
.Comp_SelectBox:hover .selectBox__icon_empty {
	animation: anim-empty 0.75s both infinite;

	@keyframes anim-empty {
		0% {
			top: 50%;
		}

		50% {
			top: 60%;
		}

		100% {
			top: 50%;
		}
	}
}

// 값이 선택된 상태에서, icon hover 스타일
.selectBox__icon_selected:hover {
	color: $colors__blue_01;
}
</style>
