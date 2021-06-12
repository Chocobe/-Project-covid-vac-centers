/**
 * @author: 김영우
 * @description:
 *    * 기본 Layout 라우트 파일 입니다.
 *    * 차후 Layout 추가를 위한 분리 입니다.
 */
import { RouteConfig } from "vue-router";

const defaultRoute: RouteConfig = {
	path: "/",
	component: () =>
		import(
			/* webpackChunkName: "Layout_Default" */ "@/layouts/default/Ly_Default.vue"
		),
	children: [
		{
			path: "/",
			component: () =>
				import(
					/* webpackChunkName: "Page_CovidCenters" */ "@/views/covidCenters/Page_CovidCenters.vue"
				),
		},
	],
};

export { defaultRoute };
