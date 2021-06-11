/**
 * @author: 김영우
 * @description:
 *    코로나 예방접종 검색 페이지 Store Module interface 입니다.
 */
import { DB_CovidCenter } from "@/interface/DB_CovidCenter";

interface IModule_CovidCenters {
	// 예방접종 센터 조회 원본
	originCovidCenterList: DB_CovidCenter[];

	// 예방접종 센터 "시도 / 시군구" 분할 Map
	covidCentersMap: Map<string, Map<string, DB_CovidCenter[]>>;
}

export { IModule_CovidCenters };