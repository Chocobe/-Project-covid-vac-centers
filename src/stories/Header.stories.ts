import MyHeader from "./Header.vue";
import { Meta, Story } from "@storybook/vue";

export default {
	title: "Example/Header",
	component: MyHeader,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MyHeader },
	template:
		'<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
