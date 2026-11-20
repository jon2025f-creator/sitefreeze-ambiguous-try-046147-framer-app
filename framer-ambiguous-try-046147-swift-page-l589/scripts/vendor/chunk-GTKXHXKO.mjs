import { e as s } from "chunk-7IWXM5ZQ.mjs";
import { a as p } from "chunk-PTB45QSP.mjs";
import { a as r } from "chunk-2FCXHKEL.mjs";
import { e } from "chunk-WLHSDIGQ.mjs";
var n = e(r());
function b(o) {
  return (0, n.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, n.jsx)("path", {
      d: "M 1.25 6 C 1.25 6 2.656 7.406 3.543 8.293 C 3.933 8.683 4.567 8.683 4.957 8.293 C 6.641 6.609 10.75 2.5 10.75 2.5",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var a = e(r(), 1);
function d(o, t) {
  switch (o) {
    case "left":
    case "right":
      return { x: t };
    case "top":
    case "bottom":
    case void 0:
      return { y: t };
  }
}
function g({
  children: o,
  className: t,
  colorVariant: l,
  direction: i,
  enabled: c,
  offsetDelta: f = 0,
  text: m,
  shortcut: u,
}) {
  let T = p.values.tooltipOffset + f;
  return c
    ? (0, a.jsx)(s, {
        text: m,
        shortcut: u,
        colorVariant: l,
        direction: i,
        className: t,
        positionOffset: d(i, T),
        children: o,
      })
    : o;
}
export { b as a, g as b };
//# sourceMappingURL=chunk-GTKXHXKO.mjs.map
