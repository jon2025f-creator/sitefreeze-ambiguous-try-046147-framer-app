import { b as r } from "chunk-L35JN2VK.mjs";
import { f as s } from "chunk-5EE7LLRA.mjs";
import { q as p } from "chunk-VHFKZWVR.mjs";
var a = "CanvasEventTarget";
var i = { mobile: 430, tabletSmall: 640, tabletMedium: 750, tabletBig: 1100 };
var y = i.tabletSmall,
  w = i.mobile,
  l = i.tabletMedium;
var d = typeof window < "u" && window.self !== window.top && !p();
function m() {
  return d || r.isOn("simulateMcpEmbeddedEditor");
}
r.addListener("simulateMcpEmbeddedEditor", () => window.location.reload());
function c(e) {
  return e === "inline" || e === "pip";
}
function B(e, o) {
  return m() && (c(e) || o <= l);
}
function u(e) {
  return e === "inline" || e === "pip" || e === "fullscreen";
}
function C(e, o) {
  if (!m() || (e.target instanceof Element && e.target.closest(`#${a}`))) return !1;
  let { menu: n } = o;
  return !(n && n.startTime >= e.timeStamp);
}
function S() {
  window.parent.postMessage({ apiVersion: 1, type: "goToDashboard" }, "*");
}
function T(e, o) {
  d &&
    (window.addEventListener(
      "message",
      ({ source: n, data: t }) => {
        n !== window.parent ||
          !s(t) ||
          t.apiVersion !== 1 ||
          t.type !== "displayMode" ||
          (u(t.displayMode) && e(t.displayMode));
      },
      { signal: o }
    ),
    window.parent.postMessage({ apiVersion: 1, type: "getDisplayMode" }, "*"));
}
export { a, i as b, y as c, w as d, m as e, c as f, B as g, C as h, S as i, T as j };
//# sourceMappingURL=chunk-SU33DOCT.mjs.map
