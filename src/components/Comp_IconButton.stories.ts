/**
 * @author: 김영우
 * @description:
 *    * "Comp_IconButton" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { sbDescription } from "@/stories/sbUtils";

import Comp_IconButton from "@/components/Comp_IconButton.vue";

const argTypes = {
	// Props
	icon: {
		description: sbDescription(
			"``FontAwesome 5 Free`` 아이콘명",
			"``kebab-case`` 형식의 아이콘명",
		),
	},

	width: {
		description: sbDescription(
			"아이콘 width값",
			"단위가 포함된 width값",
			"🐫 예) ``50px``",
		),
	},

	height: {
		description: sbDescription(
			"아이콘 height값",
			"단위가 포함된 height값",
			"🐫 예) ``50px``",
		),
	},

	iconColor: {
		description: sbDescription(
			"아이콘 색상",
			"``#``이 포함된 색상 코드",
			"🐫 예) ``#fff``",
		),
	},

	bgColor: {
		description: sbDescription(
			"아이콘 배경 색상",
			"``#``이 포함된 색상 코드",
			"🐫 예) ``#15d381``",
		),
	},

	fontSize: {
		description: sbDescription(
			"아이콘 크기",
			"단위가 포함된 크기값",
			"🐫 예) ``30px``",
		),
	},

	// Events
	click: {
		description: sbDescription("click 이벤트", '@click="리스너"'),
	},

	// Event Listeners
	onClick: {
		description: sbDescription('@click="onClick"'),
	},
};

export default {
	title: "Components/Comp_IconButton",
	component: Comp_IconButton,
	argTypes,
} as Meta;

const template: Story = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Comp_IconButton },
	template: `
    <Comp_IconButton v-bind="$props" @click="onClick"></Comp_IconButton>
  `,
});

const Basic = template.bind({});
Basic.args = {
	icon: "code",
	width: "50px",
	height: "50px",

	iconColor: "#e25c00",
	bgColor: "#15d381",

	fontSize: "30px",

	onClick: action("@click 이벤트"),
};
Basic.storyName = "Comp_IconButton";

export { Basic };
