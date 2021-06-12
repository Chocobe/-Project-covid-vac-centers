/**
 * @author: 김영우
 * @description:
 *    코로나 예방접종 검색 페이지 Store Module 입니다.
 */

import { Module } from "vuex";
import { IModule_CovidCenters } from "@/store/covidCenters/IModule_CovidCenters";
import { IModule_RootState } from "@/store/root/IModule_RootState";
import {
	DB_CovidCenter,
	DB_CovidCenter_Get_Params,
} from "@/interface/covidCenter/DB_CovidCenter";
import { apiGet_CovidCenters } from "@/api/covidCenter/apiCovidCenter";

const module_covidCenters: Module<IModule_CovidCenters, IModule_RootState> = {
	namespaced: true,

	state: () => {
		return {
			originCovidCenterList: [],
			covidCentersMap: new Map(),
		};
	},

	mutations: {
		setOriginCovidCenterList(
			state,
			originCovidCenterList: DB_CovidCenter[],
		): void {
			state.originCovidCenterList = originCovidCenterList;
		},

		initCovidCentersMap(state, originCovidCenterList: DB_CovidCenter[]): void {
			const covidCentersMap = new Map<string, Map<string, DB_CovidCenter[]>>();

			originCovidCenterList.forEach(covidCenter => {
				if (!covidCentersMap.has(covidCenter.sido)) {
					covidCentersMap.set(
						covidCenter.sido,
						new Map<string, DB_CovidCenter[]>(),
					);
				}

				const sido = covidCentersMap.get(covidCenter.sido) as Map<
					string,
					DB_CovidCenter[]
				>;

				const sigungu = sido.get(covidCenter.sigungu);

				if (sigungu) {
					sigungu.push(covidCenter);
				} else {
					sido.set(covidCenter.sigungu, [covidCenter]);
				}
			});

			console.log("가공 결과: ", covidCentersMap);

			state.covidCentersMap = covidCentersMap;
		},
	},

	actions: {
		async GET_COVID_CENTER_LIST(
			context,
			params: DB_CovidCenter_Get_Params = {},
		) {
			const response = await apiGet_CovidCenters(params);
			const originCovidCenterList = response.data.data;
			context.commit("setOriginCovidCenterList", originCovidCenterList);
			context.commit("initCovidCentersMap", originCovidCenterList);
		},
	},
};

export { module_covidCenters };
