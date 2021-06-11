<template>
	<div>
		<h1>Kor Geo Json 테스트</h1>

		<canvas class="geoCanvas" :width="width" :height="height">
			<img
				src=""
				:width="width"
				:height="height"
				alt="대한민국 지도"
				class="geoCanvas__altImg"
				@load="onLoadGeoImg"
			/>
		</canvas>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	props: {
		width: {
			type: Number,
			default: 500,
		},

		height: {
			type: Number,
			default: 500,
		},
	},

	methods: {
		async initKorGeoImg() {
			const altImgElement = this.$el.querySelector(
				".geoCanvas__altImg",
			) as HTMLImageElement;

			altImgElement.src = await require("@/assets/image/kor-geo-image.png");
		},

		onLoadGeoImg() {
			const geoCanvas = this.$el.querySelector(
				".geoCanvas",
			) as HTMLCanvasElement;
			const geoContext = geoCanvas.getContext("2d") as CanvasRenderingContext2D;

			const geoImg = this.$el.querySelector(
				".geoCanvas__altImg",
			) as HTMLImageElement;

			geoContext.drawImage(geoImg, 0, 0, this.width, this.height);
		},
	},

	mounted() {
		this.initKorGeoImg();
	},
});
</script>

<style scoped lang="scss">
.korGeo {
	width: 500px;
	height: 500px;
	background-color: #eee;
}

.geoCanvas__altImg {
	object-fit: contain;

	color: rgba(199, 145, 192, 1);
}
</style>
