import { f as H } from "chunk-3PIOJLHR.mjs";
import {
  a as c,
  b,
  c as y,
  d as h,
  e as f,
  f as B,
  g as L,
  h as v,
  i as D,
  j as M,
  k as T,
  l as o,
  m as k,
  n as w,
  o as E,
} from "chunk-IY7I6SZ7.mjs";
import { a as e } from "chunk-QFU6OGL3.mjs";
import { a as d } from "chunk-2FCXHKEL.mjs";
import { a as I } from "chunk-SWYZG2NI.mjs";
import { e as s } from "chunk-WLHSDIGQ.mjs";
var t = s(I());
var P = "t1295uka";
var a = s(d()),
  S = {
    default: void 0,
    primary: h,
    primaryDimmed: f,
    clean: v,
    link: B,
    linkLined: L,
    destructive: D,
    withDepth: o,
    withDepthPrimary: e(o, k),
    withDepthDestructive: e(o, w),
    AIGradient: E,
  };
function l(r, i) {
  let {
      as: n = "button",
      title: u,
      onClick: A,
      onMouseDown: R,
      variant: m,
      small: W = !1,
      bold: x,
      className: C,
      children: g,
      "aria-label": G,
      enabled: N = !0,
      ...p
    } = r,
    O = H(A, R),
    V = G ?? u;
  return (0, a.jsx)(n, {
    ref: i,
    className: e(c, m && S[m], W && b, x && y, n !== "button" && T, C),
    ...O,
    "aria-label": V,
    disabled: !N,
    type: n === "button" ? "button" : void 0,
    role: n === "button" || "href" in p ? void 0 : "button",
    ...p,
    children: g || (0, a.jsx)("div", { className: e(P, M), children: u }),
  });
}
var X = t.default.memo(t.default.forwardRef(l)),
  Y = t.default.memo(
    t.default.forwardRef((r, i) => l({ as: "a", variant: "link", target: "_blank", ...r }, i))
  ),
  Z = t.default.memo(t.default.forwardRef(l));
export { P as a, X as b, Y as c, Z as d };
//# sourceMappingURL=chunk-4J3H3UTQ.mjs.map
