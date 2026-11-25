import { b as z, g as R } from "chunk-4ZT5FTBN.mjs";
import { b as g } from "chunk-OGQCKB6U.mjs";
import { a as I } from "chunk-44GVXXDT.mjs";
import { b as B } from "chunk-G3KF7MVA.mjs";
import { a as h } from "chunk-4HRYW54D.mjs";
import { a as c } from "chunk-55TARNRL.mjs";
import { a as m } from "chunk-R23XQVNE.mjs";
import { e as C } from "chunk-Z2L5FPD7.mjs";
import { a as i } from "chunk-QFU6OGL3.mjs";
import { a as N } from "chunk-2FCXHKEL.mjs";
import { a as _ } from "chunk-SWYZG2NI.mjs";
import { H as k } from "chunk-L5AQ4LH7.mjs";
import { c as T } from "chunk-4JY5UMT2.mjs";
import { e as P } from "chunk-WLHSDIGQ.mjs";
var l = P(_());
var E = "cmo005r",
  D = "c1el5atd",
  A = "h1b7gawt",
  W = "hvdfes0",
  j = "ca088ph",
  H = "c1u6i4ej",
  O = "cr94ov4",
  L = "t1wwcg48",
  G = "suzd4p",
  K = "iyltonr",
  F = "f1si7zjf",
  me = "f2rid4k",
  V = "fgmvzih",
  q = "fzmvfjr",
  J = "d70ganw";
var e = P(N()),
  Q = l.default.createContext({});
function S() {
  return l.default.useContext(Q);
}
var ee = l.default.forwardRef(function (
  {
    onDismiss: t,
    onConfirm: o,
    keyboardConfirmMode: a = "Enter",
    children: n,
    className: s,
    formClassName: f,
    noSelect: p,
    offsetForDashboardSidebar: v = !1,
    fixPositionAfterMount: M = !1,
    largeModal: x = !1,
    variant: d,
    darkOnDark: b,
    ...y
  },
  w
) {
  let U = l.default.useCallback(
      (u) => {
        (u.preventDefault(), o?.());
      },
      [o]
    ),
    X = (u) => {
      switch (a) {
        case !1:
          return;
        case "Enter":
          if (
            u.key !== "Enter" ||
            document.activeElement instanceof HTMLButtonElement ||
            document.activeElement instanceof HTMLInputElement
          )
            return;
          o?.();
          break;
        case "CmdOrCtrl+Enter":
          if (!(u.key === "Enter" && k(u))) return;
          o?.();
          break;
        default:
          T(a);
      }
    },
    Y = l.default.useMemo(() => ({ onDismiss: t, onConfirm: o }), [t, o]),
    Z = d === "darker" ? { variant: d, darkOnDark: b } : { variant: d };
  return (0, e.jsx)(R, {
    visible: !0,
    onKeyDown: X,
    onDismiss: t,
    className: i(E, s, p && I, v && J, x && D),
    ref: w,
    fixPositionAfterMount: M,
    ...Z,
    ...y,
    children: (0, e.jsx)(Q.Provider, {
      value: Y,
      children: (0, e.jsx)("form", {
        onSubmit: U,
        className: f,
        children: (0, e.jsx)(c, { direction: "column", gap: 0, children: n }),
      }),
    }),
  });
});
function oe({
  separator: r = !0,
  closeButton: t = !1,
  touchCloseButton: o = !1,
  className: a,
  children: n,
  accessory: s,
  description: f,
  onDismiss: p,
}) {
  let v = z(),
    { onDismiss: M } = S(),
    x = p ?? M,
    d =
      t && x
        ? (0, e.jsx)(C, {
            variant: "link",
            title: "Close",
            className: i(j, o && H),
            onClick: x,
            children: (0, e.jsx)(B, { className: o ? O : void 0 }),
          })
        : null,
    b = g(n) ? (0, e.jsx)(h, { id: v, children: n }) : (0, e.jsx)("span", { id: v, children: n }),
    y = i(A, r && W, a),
    w = s
      ? (0, e.jsxs)(c, {
          direction: "row",
          alignItems: "center",
          gap: m.css.modalGap,
          children: [s, d],
        })
      : d;
  return f
    ? (0, e.jsxs)(c, {
        gap: m.values.settingsItemContentGap,
        className: y,
        children: [
          (0, e.jsxs)(c, {
            direction: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: m.values.inputSpacing,
            children: [b, w],
          }),
          f,
        ],
      })
    : (0, e.jsxs)(c, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        className: y,
        children: [b, w],
      });
}
function te({ children: r, className: t }) {
  return (0, e.jsx)(c, { className: t, gap: m.css.modalGap, children: r });
}
function re({ children: r, className: t }) {
  return (0, e.jsx)("span", {
    className: i(L, t),
    children: g(r) ? (0, e.jsx)(h, { children: r }) : r,
  });
}
function ae({ className: r }) {
  return (0, e.jsx)("span", { className: i(G, r) });
}
function ne({ src: r, alt: t, className: o }) {
  return (0, e.jsx)("img", { src: r, alt: t, className: i(K, o), decoding: "async" });
}
function se({ children: r, separator: t, className: o, direction: a = "row" }) {
  return (0, e.jsx)(c, {
    direction: a,
    gap: m.css.modalGap,
    justifyContent: "space-between",
    className: i(F, a === "row" && V, t && q, o),
    children: r,
  });
}
var ie = l.default.forwardRef(function ({ onClick: t, children: o, ...a }, n) {
    let { onDismiss: s } = S();
    return (0, e.jsx)(C, {
      ref: n,
      onClick: t ?? s,
      ...a,
      children: g(o) ? (0, e.jsx)(h, { children: o }) : o,
    });
  }),
  ce = l.default.forwardRef(function (
    { variant: t = "primary", onClick: o, type: a = "button", children: n, ...s },
    f
  ) {
    let { onConfirm: p } = S();
    return (0, e.jsx)(C, {
      ref: f,
      variant: t,
      onClick: o ?? (a === "submit" ? void 0 : p),
      type: a,
      ...s,
      children: g(n) ? (0, e.jsx)(h, { children: n }) : n,
    });
  }),
  Se = {
    Root: ee,
    Header: oe,
    Content: te,
    Text: re,
    Separator: ae,
    Image: ne,
    Footer: se,
    CancelButton: ie,
    ActionButton: ce,
  };
export { me as a, Se as b };
//# sourceMappingURL=chunk-VATFS2EP.mjs.map
