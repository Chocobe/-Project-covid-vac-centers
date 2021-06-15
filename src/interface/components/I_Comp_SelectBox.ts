/**
 * @author: 김영우
 * @description:
 *    * "Comp_SelectBox" 컴포넌트의 "dataList" interface 입니다.
 */

interface I_Comp_SelectBox<T> {
	selector: string;
	value: T;
}

export { I_Comp_SelectBox };
