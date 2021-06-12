/**
 * @author: 김영우
 * @description:
 *    * 가상의 메뉴 interface 파일 입니다.
 */

interface DB_NavItem {
	// <PK>
	id: number;
	// 메뉴명
	name: string;
	// 링크 주소
	path: string;
	// 배경색
	bgColor?: string;
	// Fontawesome 5 Free 버전 Icon 명
	icon?: string;
}

export { DB_NavItem };
