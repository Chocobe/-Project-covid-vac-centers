/**
 * @author: 김영우
 * @description:
 *    코로나19 예방접종 센터 조회용 axios 객체 입니다.
 */
import {
	// axios,
	AxiosPromise,
	AxiosResponse,
} from "axios";

import {
	DB_CovidCenter_Get_Params,
	// DB_CovidCenter_Get_Params,
	DB_CovidCenter_Response,
} from "@/interface/DB_CovidCenter";

import { mock_CovidCenter_Response } from "@/api/covidCenter/mockCovidCenters";

// const BASE_URL = "https://api.odcloud.kr/api/15077586/v1/centers";
//
// const apiCovidCenterInstance = axios.create({
// 	headers: {
// 		Authorization:
// 			"Infuser 2D5DbTRFjd5N4u9usgV4phF0NkzBDyLVhaOie9osX4MinghHIJSWJGwoz1BQj6fF4ceUpFtUKqcc7apNYF8vNg==",
// 	},
// });

function mockGet_CovidCenters(params: DB_CovidCenter_Get_Params) {
	const mockResponse = {
		config: {},
		headers: { "content-type": "application/json; charset=UTF-8" },
		request: {
			readyState: 4,
			timeout: 0,
			withCredentials: false,
			upload: XMLHttpRequestUpload,
		},
		status: 200,
		statusText: "Mock 데이터 사용",
		data: mock_CovidCenter_Response,
	};

	return new Promise<AxiosResponse>(resolve => {
		setTimeout(() => {
			console.log("mock 데이터 사용 - params: ", params);
			resolve(mockResponse);
		}, 1000);
	});
}

function apiGet_CovidCenters(
	params: DB_CovidCenter_Get_Params = {},
): AxiosPromise<DB_CovidCenter_Response> {
	// params: DB_CovidCenter_Get_Params = { perPage: 0 },
	// return apiCovidCenterInstance.get(BASE_URL, { params });
	return mockGet_CovidCenters(params);
}

export { apiGet_CovidCenters };
