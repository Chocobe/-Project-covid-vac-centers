import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { initFontAwesome } from "@/plugins/fontawesome/pluginFontawesome";
import { initVueElementResizeDetector } from "@/plugins/vueElementResizeDetector/vueElementResizeDetector";

initFontAwesome();
initVueElementResizeDetector();

// SameSite 설정
function initSameSiteRule(): void {
	const sameSiteRule = "SameSite=None; Secure";
	const cookies = document.cookie;

	if (cookies.indexOf("SameSite") > -1 && cookies.indexOf("Secure") > -1) {
		return;
	}

	if (cookies.indexOf(";") === cookies.length - 1) {
		document.cookie = cookies.concat(sameSiteRule);
	} else {
		document.cookie = cookies.concat(`; ${sameSiteRule}`);
	}
}
initSameSiteRule();

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
