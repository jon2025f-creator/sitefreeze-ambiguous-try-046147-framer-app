import { t as d, w as l } from "chunk-FCDW3NMC.mjs";
import { a as u } from "chunk-NJXSBLUG.mjs";
import { l as n } from "chunk-L5AQ4LH7.mjs";
var c = n() && "requestIdleCallback" in window;
function s() {
  return n() ? navigator?.scheduling : void 0;
}
function r() {
  return s()?.isInputPending?.({ includeContinuous: !0 });
}
function i() {
  return n() ? document.hidden : !1;
}
function g() {
  return n() ? document.hasFocus() : !0;
}
function C(e, a) {
  return c ? window.requestIdleCallback(e, a) : setTimeout(e, 0);
}
function k() {
  return r() ?? !1;
}
var t = !1;
function q(e) {
  t = e;
}
var f = () => (!n() || t || i() ? !1 : (r() ?? !0)),
  p = (e) => {
    if (t || i() || typeof requestAnimationFrame != "function") {
      e();
      return;
    }
    requestAnimationFrame(e);
  },
  h = () => u(i() ? 0 : 1),
  o = l(p, h, f);
function v(e) {
  return n() && !t && !i() && e?.continueAfter === "paint"
    ? o({ ...e, continueAfter: "paint", ensureContinueBeforeUnload: !0 })
    : t && e?.batch
      ? o({ ...e, batch: !0, batchDuration: d })
      : o(e);
}
export { i as a, g as b, C as c, k as d, q as e, v as f };
//# sourceMappingURL=chunk-JM5XONPQ.mjs.map
