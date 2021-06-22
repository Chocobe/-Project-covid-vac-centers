/**
 * @author: 김영우
 * @description:
 *    * Storybook의 "preview" 설정 파일 입니다.
 */

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}