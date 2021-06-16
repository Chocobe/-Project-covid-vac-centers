/**
 * @author: 김영우
 * @description:
 *    * Vue 프로젝트의 @resize 이벤트를 사용하기 위한 plugin 입니다.
 */

import Vue from "vue";
import resize from "vue-element-resize-detector";

function initVueElementResizeDetector(): void {
	Vue.use(resize);
}

export { initVueElementResizeDetector };
