import MyPage from "./Page.vue";
import * as HeaderStories from "./Header._stories";
import { Meta, Story } from "@storybook/vue";

export default {
	title: "Example/Page",
	component: MyPage,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { MyPage },
	template:
		'<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
	...HeaderStories.LoggedOut.args,
};
