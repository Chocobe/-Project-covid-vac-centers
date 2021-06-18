/**
 * @author: 김영우
 * @description:
 *    * 이분탐색 유틸 메서드 입니다.
 */

function uBinarySearchForId<T>(
	targetId: number,
	arr: T[],
	keyName: keyof T,
): number {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	let middleValue = Number(arr[middle][keyName]);

	if (end < 0 || Number.isNaN(middleValue)) {
		return -1;
	}

	while (end - start >= 0) {
		middleValue = Number(arr[middle][keyName]);

		if (middleValue > targetId) {
			end = middle - 1;
		} else if (middleValue < targetId) {
			start = middle + 1;
		} else {
			return middle;
		}

		middle = Math.floor((start + end) / 2);
	}

	return -1;
}

export { uBinarySearchForId };
