/**
 * @author: 김영우
 * @description:
 *    * "Comp_TransitionOpacity" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { sbDescription } from "@/stories/sbUtils";

import Comp_TransitionOpacity from "@/components/Comp_TransitionOpacity.vue";

const argTypes = {
	// Props
	mode: {
		description: sbDescription("``transition 모드`` 값"),
		table: {
			type: {
				summary: "string",
				detail: '"out-in" | "in-out"',
			},
		},
	},

	// Slots
	default: {
		description: sbDescription("``transition`` 효과를 적용할 컴포넌트 위치"),
	},
};

export default {
	title: "Components/Comp_TransitionOpacity",
	component: Comp_TransitionOpacity,
	argTypes,
} as Meta;

const template: Story = (args, { argTypes }) => ({
	components: { Comp_TransitionOpacity },
	props: Object.keys(argTypes),
	template: `    
    <Comp_TransitionOpacity v-bind="$props">
      <h1>Transition 효과를 적용할 컴포넌트</h1>
    </Comp_TransitionOpacity>
  `,
});

const Basic = template.bind({});
Basic.args = {
	mode: "out-in",
};
Basic.storyName = "기본";

export { Basic };
