module.exports = {
	devServer: {
		overlay: false,
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/assets/scss/variables/varColors.scss";
					@import "@/assets/scss/variables/varFonts.scss";
					@import "@/assets/scss/helpers.scss";
					@import "@/assets/scss/variables/varBreakPoints.scss";
					@import "@/assets/scss/mixins/mixinWidthHeight.scss";
					@import "@/assets/scss/mixins/mixinFlex.scss";
					@import "@/assets/scss/reset-style.scss";
				`,
			},
		},
	},
};
