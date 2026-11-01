import { b as s } from "chunk-SXELATDL.mjs";
import { f as i } from "chunk-5EE7LLRA.mjs";
import { q as r } from "chunk-VHFKZWVR.mjs";
var a = "CanvasEventTarget";
var p = typeof window < "u" && window.self !== window.top && !r();
function d() {
  return p || s.isOn("simulateMcpEmbeddedEditor");
}
function w(e, n) {
  if (!d() || (e.target instanceof Element && e.target.closest(`#${a}`))) return !1;
  let { menu: t } = n;
  return !(t && t.startTime >= e.timeStamp);
}
function M() {
  window.parent.postMessage({ apiVersion: 1, type: "goToDashboard" }, "*");
}
function g(e, n) {
  p &&
    (window.addEventListener(
      "message",
      ({ source: t, data: o }) => {
        t !== window.parent ||
          !i(o) ||
          o.apiVersion !== 1 ||
          o.type !== "displayMode" ||
          e(o.displayMode === "inline");
      },
      { signal: n }
    ),
    window.parent.postMessage({ apiVersion: 1, type: "getDisplayMode" }, "*"));
}
export { a, d as b, w as c, M as d, g as e };
//# sourceMappingURL=chunk-HKFNQEZB.mjs.map
