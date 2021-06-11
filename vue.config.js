module.exports = {
	devServer: {
		overlay: false,
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/assets/scss/reset-style.scss";
					@import "@/assets/scss/variables/varColors.scss";
					@import "@/assets/scss/variables/varFonts.scss";
					@import "@/assets/scss/helpers.scss";
				`,
			},
		},
	},
};
