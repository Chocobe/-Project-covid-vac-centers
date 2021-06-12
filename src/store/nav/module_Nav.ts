/**
 * @author: 김영우
 * @description:
 *    * 메뉴 Store Module 입니다.
 */
import { Module } from "vuex";
import { IModule_Nav } from "@/store/nav/IModule_Nav";
import { IModule_RootState } from "@/store/root/IModule_RootState";
import { DB_NavItem } from "@/interface/navItem/DB_NavItem";
import { apiGet_NavItems } from "@/api/navItem/apiNavItems";

const module_Nav: Module<IModule_Nav, IModule_RootState> = {
	namespaced: true,

	state: () => {
		return {
			originNavList: [],
		};
	},

	getters: {
		getOriginNavList(state) {
			return state.originNavList;
		},
	},

	mutations: {
		setOriginNavList(state, originNavList: DB_NavItem[]): void {
			state.originNavList = originNavList;
		},
	},

	actions: {
		async GET_NAV_LIST(context) {
			try {
				const response = await apiGet_NavItems();
				context.commit("setOriginNavList", response.data);
			} catch (error) {
				console.log("메뉴 조회 Error\n", error);
			}
		},
	},
};

export { module_Nav };
