import { b } from "chunk-WPWSHZF5.mjs";
import { a as c } from "chunk-6XLTPYWW.mjs";
import { a as s } from "chunk-4HRYW54D.mjs";
import { a as i } from "chunk-QFU6OGL3.mjs";
import { b as m, d as g } from "chunk-AYNVEX5D.mjs";
import { a as f } from "chunk-2FCXHKEL.mjs";
import { a as O } from "chunk-SWYZG2NI.mjs";
import { e as a } from "chunk-WLHSDIGQ.mjs";
var r = a(O());
var u = "e1j1lwke",
  x = "bc3jow4",
  y = "f3djdwc",
  w = "cw12p4w",
  h = "i1v0o626",
  v = "i4yur6m",
  k = "w8op1o5",
  B = "tczxb1t",
  S = "b1jfd09r";
var j = "l1m5c2c1";
var t = a(f());
function X(T) {
  let {
      icon: o,
      iconColor: C,
      iconLarge: P,
      title: l,
      body: n,
      button: e,
      secondaryButton: p,
      fullWidthButton: R = !0,
      className: W,
      center: N,
      type: z = "info",
      maxBodyWidth: E = 200,
      leftAlign: d = !1,
      iconBackgroundColor: I,
      stackedButtons: A = !0,
      ...L
    } = T,
    F = r.default.isValidElement(e) && e?.props.variant,
    V = { variant: "link" };
  return (0, t.jsxs)(c, {
    alignItems: d ? "flex-start" : "center",
    gap: 0,
    className: i(u, N && w, z === "warning" && k, R && y, d && j, W),
    ...L,
    children: [
      !!o &&
        (0, t.jsx)(b, {
          className: i(h, P && v),
          style: { color: C, backgroundColor: I },
          children: g(o) ? (0, t.jsx)(o, {}) : o,
        }),
      l && (0, t.jsx)("div", { className: B, children: (0, t.jsx)(s, { children: l }) }),
      (0, t.jsx)("div", {
        className: S,
        style: { maxWidth: E },
        children: m(n) ? (0, t.jsx)(s, { children: n }) : n,
      }),
      (!!e || !!p) &&
        (0, t.jsxs)(c, {
          direction: A ? "column" : "row-reverse",
          justifyContent: "center",
          alignItems: "center",
          className: x,
          children: [
            !!e && (r.default.isValidElement(e) && !F ? r.default.cloneElement(e, V) : e),
            p,
          ],
        }),
    ],
  });
}
export { X as a };
//# sourceMappingURL=chunk-466HGFCT.mjs.map
