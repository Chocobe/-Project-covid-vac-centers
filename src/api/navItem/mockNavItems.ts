/**
 * @author: 김영우
 * @description:
 *    * 메뉴 Mock 데이터 입니다.
 */
import { DB_NavItem } from "@/interface/navItem/DB_NavItem";

const mock_NavItem_Response: DB_NavItem[] = [
  {
    id: 1,
    name: "코로나19 예방접종 센터 조회",
    path: "/",
    bgColor: "#83CD69",
  },
  {
    id: 2,
    name: "개발자 정보",
    path: "/dev",
    bgColor: "#03A9F4",
  },
  {
    id: 3,
    name: "Hello World",
    path: "hello-world",
  },
];

export { mock_NavItem_Response };