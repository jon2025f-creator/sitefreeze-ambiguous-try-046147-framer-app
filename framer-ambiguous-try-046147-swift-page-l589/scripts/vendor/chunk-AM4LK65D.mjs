import { b as p } from "chunk-O5WG5ZBQ.mjs";
import { a as l } from "chunk-3PRKS5EZ.mjs";
import { b as d, g as i } from "chunk-ARJ7WQTJ.mjs";
import { q as a } from "chunk-L5AQ4LH7.mjs";
var c = "CanvasEventTarget";
var s = { mobile: 430, tabletSmall: 640, tabletMedium: 750, tabletBig: 1100 };
var k = s.tabletSmall,
  h = s.mobile,
  u = s.tabletMedium;
var r = typeof window < "u" && window.self !== window.top && !a();
function b() {
  return r || p.isOn("simulateMcpEmbeddedEditor");
}
p.addListener("simulateMcpEmbeddedEditor", () => window.location.reload());
function f(e) {
  return e === "inline" || e === "pip";
}
function A(e, o) {
  return b() && (f(e) || o <= u);
}
function w(e) {
  return e === "inline" || e === "pip" || e === "fullscreen";
}
function L(e, o) {
  if (!b() || (e.target instanceof Element && e.target.closest(`#${c}`))) return !1;
  let { menu: t } = o;
  return !(t && t.startTime >= e.timeStamp);
}
function O() {
  window.parent.postMessage({ apiVersion: 1, type: "goToDashboard" }, "*");
}
function _(e, o) {
  r &&
    (window.addEventListener(
      "message",
      ({ source: t, data: n }) => {
        t !== window.parent ||
          !i(n) ||
          n.apiVersion !== 1 ||
          n.type !== "displayMode" ||
          (w(n.displayMode) && e(n.displayMode));
      },
      { signal: o }
    ),
    window.parent.postMessage({ apiVersion: 1, type: "getDisplayMode" }, "*"));
}
function F(e, o) {
  r &&
    (window.addEventListener(
      "message",
      ({ source: t, data: n }) => {
        t !== window.parent || !i(n) || n.apiVersion !== 1 || n.type !== "dashboard" || e();
      },
      { signal: o }
    ),
    window.parent.postMessage({ apiVersion: 1, type: "getDashboard" }, "*"));
}
function M(e) {
  return !r || !g(e)
    ? !1
    : (window.parent.postMessage({ apiVersion: 1, type: "openLink", url: e }, "*"), !0);
}
function g(e) {
  try {
    let { protocol: o } = new URL(e);
    return o === "https:" || o === "http:";
  } catch {
    return !1;
  }
}
var m = !1;
function W() {
  if (!r || m) return;
  m = !0;
  let e = window.open;
  window.open = (o, t, n) =>
    !(t === "_self" || t === "_parent" || t === "_top") && M(String(o))
      ? null
      : e.call(window, o, t, n);
}
function N(e, o) {
  r &&
    (window.addEventListener(
      "message",
      ({ source: t, data: n }) => {
        t !== window.parent ||
          !i(n) ||
          n.apiVersion !== 1 ||
          n.type !== "switchBranch" ||
          !d(n.branchId) ||
          e(n.branchId || l);
      },
      { signal: o }
    ),
    window.parent.postMessage({ apiVersion: 1, type: "getAgentState" }, "*"));
}
export {
  c as a,
  s as b,
  k as c,
  h as d,
  b as e,
  f,
  A as g,
  L as h,
  O as i,
  _ as j,
  F as k,
  M as l,
  W as m,
  N as n,
};
//# sourceMappingURL=chunk-AM4LK65D.mjs.map
