import { b as s } from "chunk-O3IQPNKH.mjs";
import { f as R } from "chunk-3PIOJLHR.mjs";
import { a as l } from "chunk-QFU6OGL3.mjs";
import { c as f } from "chunk-AYNVEX5D.mjs";
import { a as w } from "chunk-2FCXHKEL.mjs";
import { a as G } from "chunk-SWYZG2NI.mjs";
import { e as m } from "chunk-WLHSDIGQ.mjs";
var v = m(G());
var A = "tin3qvp",
  L = "pdo5t88",
  E = "aeycgb5",
  b = "a1bxrn0q",
  k = "a11h4pl4",
  H = "af2dsga",
  M = "a3wph07",
  I = "a1v49ess",
  h = "pdzonbm",
  T = "c1ac9vjt",
  q = "byyde7g";
var r = m(w()),
  X = (a) => {
    if (f(a)) return `${a}px`;
    switch (a) {
      case "small":
        return s.css.avatarSizeSmall;
      case "large":
        return s.css.avatarSizeLarge;
      default:
        return s.css.avatarSize;
    }
  },
  $ = s.values.avatarSizeSmall;
function B(a, e) {
  return typeof a != "string" ||
    (typeof e == "number" && e > $) ||
    (typeof e == "string" && e !== "small")
    ? a
    : a[0];
}
var D = (a) => {
  if (f(a)) return b;
  switch (a) {
    case "small":
      return k;
    case "large":
      return H;
    default:
      return b;
  }
};
function aa({
  inactive: a = !1,
  greyScale: e = !1,
  src: d,
  text: o,
  color: p,
  shadow: n,
  textCustomStyles: u,
  pill: i,
  size: t = "regular",
  avatarCustomStyles: c,
  radiusCustomStyles: g,
  badge: y,
  badgeCustomStyles: x,
  onClick: N,
  onClickHoverIcon: S,
  crossOrigin: j,
  onLoad: C,
  onError: O,
}) {
  let [P, z] = v.default.useState(!1),
    F = R(N);
  return (0, r.jsxs)("div", {
    style: { "--avatar-color": p, "--avatar-size": X(t), "--avatar-shadow": n },
    className: l(E, a && M, e && I, i && h, !!c && c, D(t), g),
    ...F,
    onMouseEnter: () => z(!0),
    onMouseLeave: () => z(!1),
    children: [
      (0, r.jsx)(K, {
        src: d,
        text: o,
        size: t,
        textCustomStyles: u,
        pill: i,
        crossOrigin: j,
        onLoad: C,
        onError: O,
      }),
      S && (0, r.jsx)("div", { className: T, children: S }),
      y && (0, r.jsx)("div", { className: l(q, !!x && x), children: y(P) }),
    ],
  });
}
function K({
  src: a,
  text: e,
  size: d = "regular",
  textCustomStyles: o,
  pill: p,
  crossOrigin: n = "anonymous",
  onLoad: u,
  onError: i,
}) {
  let [t, c] = (0, v.useState)();
  return !a || t === a
    ? (0, r.jsx)("span", { className: l(A, o && o, p && h), children: B(e, d) })
    : (0, r.jsx)("img", {
        decoding: "async",
        className: L,
        src: a,
        alt: e !== void 0 ? `${e}` : "",
        crossOrigin: n === "none" ? void 0 : n,
        onLoad: u,
        onError: (g) => {
          (c(a), i?.(g));
        },
      });
}
export { aa as a };
//# sourceMappingURL=chunk-66KD6AMX.mjs.map
