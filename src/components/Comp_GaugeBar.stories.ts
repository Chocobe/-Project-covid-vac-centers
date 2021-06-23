/**
 * @author: 김영우
 * @description:
 *    * "Comp_GaugeBar" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { sbDescription } from "@/stories/sbUtils";

import Comp_GaugeBar from "@/components/Comp_GaugeBar.vue";

const argTypes = {
	// Props
	height: {
		description: sbDescription(
			"컴포넌트의 ``height``",
			"단위가 포함된 height값",
			"🐫 예) ``20px``",
		),

		percent: sbDescription(
			"채워질 게이지 퍼센트",
			"단위가 포함된 퍼센트값",
			"🐫 예) ``100%``",
		),
	},
};

export default {
	title: "Components/Card_GaugeBar",
	component: Comp_GaugeBar,
	argTypes,
} as Meta;

const template: Story = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Comp_GaugeBar },
	template: `    
    <Comp_GaugeBar v-bind="$props"></Comp_GaugeBar>
  `,
});

const Basic = template.bind({});
Basic.args = {
	height: "20px",
	percent: "80%",
};
Basic.storyName = "기본";

export { Basic };
