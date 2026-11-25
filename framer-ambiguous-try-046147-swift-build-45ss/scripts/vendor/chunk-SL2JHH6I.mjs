import { a as C } from "chunk-74U52QY4.mjs";
import { a as y } from "chunk-SJ7DPF6D.mjs";
import { b as x } from "chunk-WPWSHZF5.mjs";
import { e as M, k as B } from "chunk-Q5XY4RTY.mjs";
import { a as v } from "chunk-VD6KMVU6.mjs";
import { a } from "chunk-QFU6OGL3.mjs";
import { a as t } from "chunk-2FCXHKEL.mjs";
import { a as j } from "chunk-SWYZG2NI.mjs";
import { e } from "chunk-WLHSDIGQ.mjs";
var p = e(t());
function T(n) {
  return (0, p.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
    ...n,
    children: [
      (0, p.jsx)("path", {
        d: "M 5.25 1 C 7.597 1 9.5 2.903 9.5 5.25 C 9.5 7.597 7.597 9.5 5.25 9.5 C 2.903 9.5 1 7.597 1 5.25 C 1 2.903 2.903 1 5.25 1 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, p.jsx)("path", {
        d: "M 8.5 8.5 L 10.5 10.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var i = e(j());
var w = "i8gs8dn";
var S = e(t());
function L({
  icon: n,
  onClick: l,
  onMouseDown: u,
  label: c,
  tabIndex: r = -1,
  className: m,
  enabled: d = !0,
}) {
  return (0, S.jsx)("button", {
    className: a(w, m),
    type: "button",
    tabIndex: r,
    "aria-label": c,
    onClick: l,
    onMouseDown: u,
    disabled: !d,
    children: n,
  });
}
var k = "svpr0nh",
  E = "s1px9f5q";
var H = "cxrvkbb",
  R = "spbz6cs",
  P = "c1t4ivzv";
var o = e(t()),
  Z = () => {},
  fe = i.default.forwardRef(function (l, u) {
    let {
        value: c,
        onChange: r,
        enabled: m,
        large: d,
        className: V,
        autoFocus: D,
        onKeyDown: W,
        isIconVisible: h = !0,
        placeholder: G = "Search",
        customTextStyle: N = !1,
        showClearButton: z = !1,
        testId: g = "search-bar",
        inputId: F,
        tabIndex: O,
        ...q
      } = l,
      b = i.default.useRef(null),
      A = v(u, b),
      K = i.default.useCallback(() => {
        let s = b.current;
        s && s.focus();
      }, []),
      $ = i.default.useCallback(
        (s) => {
          (s.preventDefault(), s.stopPropagation(), r("", !0, Z));
        },
        [r]
      ),
      I = z && c.length > 0;
    return (0, o.jsxs)(M, {
      className: a(h && k, I && H, V),
      large: d,
      "data-testid": `${g}-input-wrapper`,
      onClick: K,
      ...q,
      children: [
        h &&
          (0, o.jsx)(x, {
            className: E,
            children: (0, o.jsx)(T, { role: "img", "aria-label": "Search" }),
          }),
        (0, o.jsx)(B, {
          id: F,
          ref: A,
          placeholder: G,
          constantChange: !0,
          value: c,
          onChange: r,
          enabled: m,
          className: a(R, N && P),
          autoFocus: D,
          onKeyDown: W,
          "data-testid": `${g}-input`,
          tabIndex: O,
        }),
        I &&
          (0, o.jsx)(L, {
            icon: (0, o.jsx)(y, {}),
            className: C,
            onMouseDown: $,
            label: "Clear search filter",
            tabIndex: -1,
          }),
      ],
    });
  });
var f = e(t());
function ge(n) {
  return (0, f.jsx)("svg", {
    ...n,
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    children: (0, f.jsx)("path", {
      d: "M 1 6 L 11 6",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
export { T as a, L as b, fe as c, ge as d };
//# sourceMappingURL=chunk-SL2JHH6I.mjs.map
