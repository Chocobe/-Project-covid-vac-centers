/**
 * @author: 김영우
 * @description:
 *    * Fontawesome 5 Vue Component Plugin 설정 파일 입니다.
 */

import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

// Solid icon
import {
	faSearchLocation,
	faCode,
	faAngleDown,
	faTimes,
	faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

// Regular icon
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";

library.add(
	// Solid icon
	faSearchLocation,
	faCode,
	faAngleDown,
	faTimes,
	faAngleDoubleUp,

	// Regular icon
	farUser,
);

function initFontAwesome(): void {
	Vue.component("FontAwesomeIcon", FontAwesomeIcon);
}

export { initFontAwesome };
