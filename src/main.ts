import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { initFontAwesome } from "@/plugins/fontawesome/pluginFontawesome";

Vue.config.productionTip = false;
initFontAwesome();

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
