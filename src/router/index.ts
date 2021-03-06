import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { defaultRoute } from "@/router/default/defaultRoutes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	defaultRoute,

	//
	// 테스트 Routes
	//
	// {
	// 	path: "/",
	// 	name: "Covid Centers",
	// 	component: () =>
	// 		import(
	// 			/* webpackChunkName: "Page_CovidCenters" */ "@/views/covidCenters/Page_CovidCenters.vue"
	// 		),
	// },
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/About.vue"),
	// },
	// {
	// 	path: "/kor-geo-test",
	// 	component: () =>
	// 		import(
	// 			/* webpackChunkName: "kor-geo-test" */ "@/components/korGeo/KorGeo.vue"
	// 		),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
