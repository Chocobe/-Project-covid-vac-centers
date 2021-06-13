<template>
	<div class="card" @click="onClick">
		<!-- 카드 이미지 -->
		<slot v-bind="imgData">
			<figure class="card__imgWrapper">
				<img :src="src" :alt="alt" class="card__img" />
			</figure>
		</slot>

		<!-- 카드 바디 -->
		<div class="card__body">
			<!-- 카드 제목 -->
			<h3 class="card__title">
				{{ title }}
			</h3>

			<!-- 카드 컨텐츠 -->
			<slot name="content">
				<p class="card__content">
					{{ content }}
				</p>
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		title: {
			type: String,
			default: "",
		},

		content: {
			type: String,
			default: "",
		},

		src: {
			type: String,
			default: "../assets/image/kor-geo-image.png",
		},

		alt: {
			type: String,
			default: "카드 이미지",
		},

		imgHeight: {
			type: String,
			default: "200px",
		},
	},

	computed: {
		imgData(): {
			src: string;
			alt: string;
			imgHeight: string;
		} {
			return {
				src: this.src,
				alt: this.alt,
				imgHeight: this.imgHeight,
			};
		},
	},

	methods: {
		onClick(): void {
			this.$emit("click");
		},
	},

	mounted() {
		const imgWrapper = this.$el.querySelector(
			".card__imgWrapper",
		) as HTMLElement;

		if (imgWrapper) {
			setTimeout(() => {
				imgWrapper.style.paddingTop = this.imgHeight;
			});
		}
	},
});
</script>

<style scoped lang="scss">
.card {
	@include width-height(100%);
	@include flex(flex-start, stretch, wrap, column);

	padding: 10px;

	border-radius: 10px;
	background-color: $colors__white_01;
	box-shadow: 0 3px 6px rgba($colors__black_01, 0.5);

	transition: background-color 0.3s;

	&:hover {
		background-color: $colors__green_02;
	}

	&:last-child {
		margin-bottom: 0;
	}

	.card__imgWrapper {
		margin-bottom: 20px;

		position: relative;
		overflow: hidden;

		border-radius: 10px;
		background-color: $colors__gray_02;

		.card__img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.card__body {
		//
	}
	.card__title {
		margin-bottom: 10px;

		color: $colors__black_01;
		font-size: 20px;
		font-weight: 900;
	}

	.card__content {
		color: $colors__black_02;
	}
}
</style>
