/**
 * @author: 김영우
 * @description:
 * 		* "Comp_Button" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { sbDescription } from "@/stories/sbUtils";

import Comp_Button from "./Comp_Button.vue";

export default {
	title: "Components/Comp_Button",
	component: Comp_Button,
	argTypes: {
		// Props
		name: {
			description: "``출력할 버튼명``",
		},

		// Events
		click: {
			description: sbDescription("click 이벤트", '@click="리스너"'),
		},
		enter: {
			description: sbDescription("enter 이벤트", '@enter="리스너"'),
		},
		leave: {
			description: sbDescription("leave 이벤트", '@leave="리스너"'),
		},

		// Event Listeners
		onClick: {
			description: '@click="onClick"',
		},
		onEnter: {
			description: '@enter="onEnter"',
		},
		onLeave: {
			description: '@leave="onLeave"',
		},
	},
} as Meta;

// 기본 Story
const template: Story = (args, { argTypes }) => ({
	components: { Comp_Button },
	props: Object.keys(argTypes),
	template: `
    <Comp_Button 
      :name="name"
      @click="onClick"
			@enter="onEnter"
			@leave="onLeave"
    ></Comp_Button>
  `,
});

const Basic = template.bind({});
Basic.args = {
	name: "내 버튼",
	onClick: action("@click 이벤트"),
	onEnter: action("@enter 이벤트"),
	onLeave: action("@leave 이벤트"),
};
Basic.storyName = "기본";

export { Basic };
