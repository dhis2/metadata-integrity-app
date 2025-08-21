"use strict";

export function getContextPath() {
    var ctx = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
    if (ctx === "/api") {
        return "";
    }
    return ctx;
}

export var baseUrl = getContextPath() + "/api/";

export const shouldRenderHeaderBar = window.self === window.top;

export function initializeEmbeddedMode() {
    if (!shouldRenderHeaderBar) {
        document.documentElement.classList.add('embedded');
    }
}
