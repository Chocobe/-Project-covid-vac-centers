/**
 * @author: 김영우
 * @description:
 *    * "Comp_Card" 컴포넌트의 Story 파일 입니다.
 */

import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { sbDescription } from "@/stories/sbUtils";

import Comp_Card from "@/components/Comp_Card.vue";

const argTypes = {
	// Slots
	content: {
		description: sbDescription(
			'카드 컨텐츠 문자열 or &lt;slot name="content"&gt;',
			'컨텐츠 스타일의 커스텀은 <slot name="content">로 가능',
		),
	},
	default: {
		description: sbDescription(
			"카드 이미지 &lt;slot&gt;",
			"scopedProp 으로 &lt;img&gt; 스타일 재사용 가능",
		),
	},

	// Props
	title: {
		description: sbDescription("카드 제목"),
	},
	src: {
		description: sbDescription("이미지 파일", "``<img>`` 태그의 ``src``"),
	},
	alt: {
		description: sbDescription("이미지 alt", "``<img>`` 태그의 ``alt``"),
	},
	imgHeight: {
		description: sbDescription(
			"이미지 높이",
			"단위가 포함된 height값",
			"🐫 예) ``200px``",
			"&lt;slot&gt; 의 ``scopedProp``으로 재사용 가능",
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
	title: "Components/Comp_Card",
	component: Comp_Card,
	argTypes,
} as Meta;

const emptyTemplate = {
	props: Object.keys(argTypes),
	components: { Comp_Card },
};

// 기본 Story
const basicTemplate: Story = (args, { argTypes }) => ({
	...emptyTemplate,
	template: `
		<Comp_Card v-bind="$props" @click="onClick"></Comp_Card>
	`,
});

const Basic = basicTemplate.bind({});
Basic.args = {
	title: "카드 제목",
	content: "카드 내용 입니다.",
	src: require("@/assets/image/kor-geo-image.png"),
	onClick: action("@click 이벤트"),
};
Basic.storyName = "기본";

// "width: 300px" Story
const width200Template: Story = (args, { argTypes }) => ({
	...emptyTemplate,
	template: `
		<div style="width: 300px">
			<Comp_Card v-bind="$props" @click="onClick"></Comp_Card>
		</div>
	`,
});

const Width200 = width200Template.bind({});
Width200.args = {
	title: "width: 200px 카드",
	content: "카드 컴포넌트의 width는 사용처(부모 요소)에서 설정해야 합니다.",
	src: require("@/assets/image/kor-geo-image.png"),
	onClick: action("@click 이벤트"),
};
Width200.storyName = "width: 200px 카드";

// "slot: default" Story
const defaultSlotTemplate: Story = (args, { argTypes }) => ({
	...emptyTemplate,
	template: `
		<div style="width: 300px">
			<Comp_Card v-bind="$props" @click="onClick">
				<template v-slot:default="slotProps">
					<img :src="slotProps.src" :alt="slotProps.alt" :height="slotProps.imgHeight"/>
				</template>
			</Comp_Card>
		</div>
	`,
});

const DefaultSlot = defaultSlotTemplate.bind({});
DefaultSlot.args = {
	title: "default slot 카드",
	content: "이미지를 변형하기 위한 slot 기능 입니다",
	src: require("@/assets/image/kor-geo-image.png"),
	onClick: action("@click 이벤트"),
	alt: "이미지: Default Slot 예시",
};
DefaultSlot.storyName = "default slot 카드";

// "slot: content" Story
const contentSlotTemplate: Story = (args, { argTypes }) => ({
	...emptyTemplate,
	template: `
		<div style="width: 300px">
			<Comp_Card v-bind="$props" @click="onClick">
				<template v-slot:content>
					<section>
						<p style="color: #03a9f4;">content slot 사용 예시 입니다.</p>
						<p style="font-weight: 900; font-size: 12px;">사용처 (부모 요소)에서 컨텐츠의 스타일을 커스텀 할 수 있습니다.</p>
					</section>
				</template>
			</Comp_Card>
		</div>
	`,
});

const ContentSlot = contentSlotTemplate.bind({});
ContentSlot.args = {
	title: "content slot 카드",
	content: "컨텐츠 커스텀을 위한 slot 기능 입니다",
	src: require("@/assets/image/kor-geo-image.png"),
	onClick: action("@click 이벤트"),
	alt: "이미지: Content Slot 예시",
};
ContentSlot.storyName = "content slot 카드";

export { Basic, Width200, DefaultSlot, ContentSlot };
