/**
 * @author: 김영우
 * @description:
 *    코로나 예방접종 검색 페이지 Store Module interface 입니다.
 */
import { DB_CovidCenter } from "@/interface/covidCenter/DB_CovidCenter";

interface IModule_CovidCenters {
	// 예방접종 센터 조회 원본
	originCovidCenterList: DB_CovidCenter[];

	// 예방접종 센터 "시도 / 시군구" 분할 Map
	// (Map 으로 가공된 originCovidCenterList)
	covidCentersMap: Map<string, Map<string, DB_CovidCenter[]>>;

	// 대상 "예방접종 센터" 데이터
	targetCenterData: DB_CovidCenter | null;

	// 검색 대상 "시도" 명
	targetSidoName: string;

	// 검색 대상 "시군구" 명
	targetSigunguName: string;

	// Mouse Hover 된 "시도" 명
	hoverSidoName: string;
}

export { IModule_CovidCenters };
