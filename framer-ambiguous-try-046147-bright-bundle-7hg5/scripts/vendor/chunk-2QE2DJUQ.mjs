import { a as t } from "chunk-QFU6OGL3.mjs";
import { a as s } from "chunk-2FCXHKEL.mjs";
import { a as k } from "chunk-SWYZG2NI.mjs";
import { e as n } from "chunk-WLHSDIGQ.mjs";
var f = n(k());
var l = "b1arctdq",
  i = "csx2rjz",
  d = "n170cdb6";
var e = n(s()),
  c = f.default.forwardRef(function (o, a) {
    let { variant: m, children: g, className: p, as: u = "div", ...b } = o;
    return (0, e.jsx)(u, {
      ...b,
      ref: a,
      className: t(l, m, (o.onClick || o.onMouseDown) && i, p),
      children: g,
    });
  });
var T = ({ onClick: r, onMouseDown: o, variant: a }) =>
    (0, e.jsx)(c, { onClick: r, onMouseDown: o, variant: a, children: "upgrade" }),
  M = ({ onClick: r, onMouseDown: o }) =>
    (0, e.jsx)(c, { onClick: r, onMouseDown: o, variant: "primary", children: "tip" }),
  P = ({ onClick: r, onMouseDown: o }) =>
    (0, e.jsx)(c, { onClick: r, onMouseDown: o, variant: "primary", children: "note" }),
  h = ({ className: r, onClick: o, onMouseDown: a }) =>
    (0, e.jsx)(c, { onClick: o, onMouseDown: a, className: t(d, r), children: "new" }),
  q = ({ onClick: r, onMouseDown: o }) =>
    (0, e.jsx)(c, { onClick: r, onMouseDown: o, variant: "componentTintDimmed", children: "beta" });
export { c as a, T as b, M as c, P as d, h as e, q as f };
//# sourceMappingURL=chunk-2QE2DJUQ.mjs.map
