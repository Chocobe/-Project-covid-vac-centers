/**
 * @author:  김영우
 * @description:
 *    코로나19 예방접종 센터 interface 입니다.
 */

// 예방접종 센터
interface DB_CovidCenter {
	// 예방 접종 센터 고유 식별자
	id: number;

	// 예방 접종 센터 명
	centerName: string;

	// 시도
	sido: string;

	// 시군구
	sigungu: string;

	// 시설명
	facilityName: string;

	// 우편번호
	zipCode: string;

	// 주소
	address: string;

	// 좌표(위도)
	lat: string;
	// 좌표(경도)
	lng: string;

	// 예방 접종 센터 유형
	centerType: string;

	// 운영기관
	org: string;

	// 사무실 전화번호
	phoneNumber: string;

	createdAt: string;
	updatedAt: string;
}

// 예방접종 센터 Response
interface DB_CovidCenter_Response {
	page: number;
	perPage: number;
	totalCount: number;
	currentCount: number;
	matchCount: number;

	data: DB_CovidCenter[];
}

// 예방접종 센터 조회 Params returnType
enum Enum_CovidCenter_ReturnType {
	JSON = "JSON",
	XML = "XML",
}

// GET Params: 예방접종 센터 조회
interface DB_CovidCenter_Get_Params {
	// 조회 페이지
	page?: number;
	// 페이지당 조회 개수
	perPage?: number;
	// 반환 타입
	returnType?: Enum_CovidCenter_ReturnType;
}

export {
	DB_CovidCenter,
	DB_CovidCenter_Response,
	DB_CovidCenter_Get_Params,
	Enum_CovidCenter_ReturnType,
};
