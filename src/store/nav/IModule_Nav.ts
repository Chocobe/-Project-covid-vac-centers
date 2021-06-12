/**
 * @author: 김영우
 * @description:
 *    * 메뉴 Store Module interface 입니다.
 */
import { DB_NavItem } from "@/interface/navItem/DB_NavItem";

interface IModule_Nav {
	originNavList: DB_NavItem[];
}

export { IModule_Nav };
