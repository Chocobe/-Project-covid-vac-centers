module.exports = {
	devServer: {
		overlay: false,
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "src/assets/scss/globalStyles.scss";
				`,
			},
		},
	},

	productionSourceMap: false,
};
