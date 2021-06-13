/**
 * @author: 김영우
 * @description:
 *    * 메뉴 데이터 조회용 axios 객체 입니다.
 */
import { AxiosPromise, AxiosResponse } from "axios";
import { DB_NavItem } from "@/interface/navItem/DB_NavItem";
import { mock_NavItem_Response } from "@/api/navItem/mockNavItems";

function apiGet_NavItems(): AxiosPromise<DB_NavItem[]> {
	const mockResponse: AxiosResponse<DB_NavItem[]> = {
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
		data: mock_NavItem_Response,
	};

	return new Promise<AxiosResponse<DB_NavItem[]>>(resolve => {
		return resolve(mockResponse);
	});
}

export { apiGet_NavItems };
