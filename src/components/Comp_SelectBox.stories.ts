/**
 * @author: 김영우
 * @description:
 *    * "Comp_SelectBox" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { sbDescription } from "@/stories/sbUtils";

import Comp_SelectBox from "@/components/Comp_SelectBox.vue";
import { I_Comp_SelectBox } from "@/interface/components/I_Comp_SelectBox";
import { action } from "@storybook/addon-actions";

const argTypes = {
	// Props
	value: {
		description: sbDescription(
			"선택한 ``값``",
			"``dataList.value``값 바인딩",
			"``I_Comp_SelectBox[].value``의 General 타입",
		),
	},
	dataList: {
		description: sbDescription(
			"SelectBox에 사용할 데이터 배열",
			"``I_Comp_SelectBox[]`` 타입의 배열",
		),
	},
	placeholder: {
		description: sbDescription("``placeholder`` 문자열"),
	},
	height: {
		description: sbDescription(
			"컴포넌트 height값",
			"단위가 포함된 height값",
			"🐫 예) ``auto``",
		),
	},
	fontSize: {
		description: sbDescription(
			"``font-size`` 값",
			"단위가 포함된 ``font-size``값",
			"🐫 예) ``1rem``",
		),
	},
	padding: {
		description: sbDescription(
			"``padding`` 값",
			"단위가 포함된 ``padding``값",
			"🐫 예) ``5px 10px``",
		),
	},

	backgroundColor: {
		description: sbDescription(
			"배경 색",
			"단위가 포함된 색상 코드값",
			"🐫 예) ``#fff``",
		),
	},

	// Events
	input: {
		description: sbDescription("input 이벤트", '@input="리스너"'),
	},

	// Event Listeners
	onInput: {
		description: sbDescription('@input="onInput"'),
	},
};

export default {
	title: "Components/Comp_SelectBox",
	component: Comp_SelectBox,
	argTypes,
} as Meta;

const template: Story = (args, { argTypes }) => ({
	components: { Comp_SelectBox },
	props: Object.keys(argTypes),
	template: `
    <Comp_SelectBox v-bind="$props" @input="onInput"></Comp_SelectBox>
  `,
});

const Basic = template.bind({});
Basic.args = {
	value: "",
	dataList: [
		{
			selector: "값_1",
			value: "val_1",
		},
		{
			selector: "값_2",
			value: "val_2",
		},
		{
			selector: "값_3",
			value: "val_3",
		},
	] as I_Comp_SelectBox<string>[],
	placeholder: '"v-model" 사용가능',
	height: "auto",
	fontSize: "1rem",
	padding: "5px 10px",
	backgroundColor: "#fff",

	onInput: action("@input 이벤트"),
};
Basic.storyName = "기본";

export { Basic };
