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
			// 예방접종 센터 조회 원본
			originCovidCenterList: [],

			// 예방접종 센터 "시도 / 시군구" 분할 Map
			// (Map 으로 가공된 originCovidCenterList)
			covidCentersMap: new Map(),

			// 대상 "예방접종 센터" 데이터
			targetCenterData: null,

			// 검색 대상 "시도" 명
			targetSidoName: "",
			// 검색 대상 "시군구" 명
			targetSigunguName: "",

			// Mouse Hover 된 "시도" 명
			hoverSidoName: "",
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

		setTargetCenterData(state, targetCenterData: DB_CovidCenter | null): void {
			state.targetCenterData = targetCenterData;
		},

		setTargetSidoName(state, targetSidoName: string): void {
			state.targetSidoName = targetSidoName;
		},

		setTargetSigunguName(state, targetSigunguName: string): void {
			state.targetSigunguName = targetSigunguName;
		},

		setHoverSidoName(state, hoverSidoName: string): void {
			state.hoverSidoName = hoverSidoName;
		},
	},

	actions: {
		async GET_COVID_CENTER_LIST(
			context,
			params: DB_CovidCenter_Get_Params = {},
		) {
			const response = await apiGet_CovidCenters(params);

			const originCovidCenterList = response.data.data.sort((a, b) => {
				if (a.id - b.id < 0) {
					return -1;
				} else {
					return 1;
				}
			});

			context.commit("setOriginCovidCenterList", originCovidCenterList);
			context.commit("initCovidCentersMap", originCovidCenterList);
		},
	},
};

export { module_covidCenters };
