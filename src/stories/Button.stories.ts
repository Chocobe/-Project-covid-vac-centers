import MyButton from "./Button.vue";
import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

export default {
	title: "Example/Button",
	component: MyButton,
	argTypes: {
		backgroundColor: { control: "color" },
		size: {
			control: { type: "select", options: ["small", "medium", "large"] },
		},
	},
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MyButton },
	template: '<MyButton @onClick="onClick" v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Button",
	onClick: action("클릭 이벤트"),
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Button",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};
