/**
 * @author: 김영우
 * @description:
 *    * Storybook "main" 설정 파일 입니다.
 */

const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-scss"
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          prependData: `
						@import "src/assets/scss/mixins/mixinWidthHeight.scss";
					`
        }
      }],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}