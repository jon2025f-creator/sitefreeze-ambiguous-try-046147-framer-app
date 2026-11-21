import { a as w } from "chunk-TU5EZ6HY.mjs";
import { a as C } from "chunk-SJ7DPF6D.mjs";
import { b as x } from "chunk-WPWSHZF5.mjs";
import { e as L, k as M } from "chunk-S2FHOYIY.mjs";
import { a as y } from "chunk-VD6KMVU6.mjs";
import { a } from "chunk-QFU6OGL3.mjs";
import { a as t } from "chunk-2FCXHKEL.mjs";
import { a as J } from "chunk-SWYZG2NI.mjs";
import { e } from "chunk-WLHSDIGQ.mjs";
var i = e(t());
function k(o) {
  return (0, i.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
    ...o,
    children: [
      (0, i.jsx)("path", {
        d: "M 5.25 1 C 7.597 1 9.5 2.903 9.5 5.25 C 9.5 7.597 7.597 9.5 5.25 9.5 C 2.903 9.5 1 7.597 1 5.25 C 1 2.903 2.903 1 5.25 1 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, i.jsx)("path", {
        d: "M 8.5 8.5 L 10.5 10.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var p = e(J());
var B = "i8gs8dn";
var T = e(t());
function S({
  icon: o,
  onClick: u,
  onMouseDown: d,
  label: l,
  tabIndex: r = -1,
  className: m,
  enabled: f = !0,
}) {
  return (0, T.jsx)("button", {
    className: a(B, m),
    type: "button",
    tabIndex: r,
    "aria-label": l,
    onClick: u,
    onMouseDown: d,
    disabled: !f,
    children: o,
  });
}
var E = "svpr0nh",
  R = "s1px9f5q";
var P = "cxrvkbb",
  V = "spbz6cs",
  H = "c1t4ivzv";
var n = e(t()),
  Q = () => {},
  he = p.default.forwardRef(function (u, d) {
    let {
        value: l,
        onChange: r,
        enabled: m,
        large: f,
        className: G,
        autoFocus: D,
        onKeyDown: W,
        isIconVisible: g = !0,
        placeholder: N = "Search",
        customTextStyle: z = !1,
        showClearButton: F = !1,
        testId: I = "search-bar",
        inputId: O,
        tabIndex: j,
        ...q
      } = u,
      b = p.default.useRef(null),
      A = y(d, b),
      K = p.default.useCallback(() => {
        let s = b.current;
        s && s.focus();
      }, []),
      $ = p.default.useCallback(
        (s) => {
          (s.preventDefault(), s.stopPropagation(), r("", !0, Q));
        },
        [r]
      ),
      v = F && l.length > 0;
    return (0, n.jsxs)(L, {
      className: a(g && E, v && P, G),
      large: f,
      "data-testid": `${I}-input-wrapper`,
      onClick: K,
      ...q,
      children: [
        g &&
          (0, n.jsx)(x, {
            className: R,
            children: (0, n.jsx)(k, { role: "img", "aria-label": "Search" }),
          }),
        (0, n.jsx)(M, {
          id: O,
          ref: A,
          placeholder: N,
          constantChange: !0,
          value: l,
          onChange: r,
          enabled: m,
          className: a(V, z && H),
          autoFocus: D,
          onKeyDown: W,
          "data-testid": `${I}-input`,
          tabIndex: j,
        }),
        v &&
          (0, n.jsx)(S, {
            icon: (0, n.jsx)(C, {}),
            className: w,
            onMouseDown: $,
            label: "Clear search filter",
            tabIndex: -1,
          }),
      ],
    });
  });
var c = e(t());
function Ie(o) {
  return (0, c.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    ...o,
    children: [
      (0, c.jsx)("path", {
        d: "M 6 1 L 6 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, c.jsx)("path", {
        d: "M 1 6 L 11 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var h = e(t());
function ve(o) {
  return (0, h.jsx)("svg", {
    ...o,
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    children: (0, h.jsx)("path", {
      d: "M 1 6 L 11 6",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
export { k as a, S as b, he as c, Ie as d, ve as e };
//# sourceMappingURL=chunk-JC352MJC.mjs.map
