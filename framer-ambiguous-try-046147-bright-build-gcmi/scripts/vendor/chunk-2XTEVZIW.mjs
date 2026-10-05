import { b as G } from "chunk-WPWSHZF5.mjs";
import { f as X, g as U } from "chunk-XXPWJPL4.mjs";
import { a as J, b as P } from "chunk-TS24LVSZ.mjs";
import { a as K } from "chunk-VD6KMVU6.mjs";
import { b as F } from "chunk-APNRKI6Y.mjs";
import { d as $ } from "chunk-IBBQFOLQ.mjs";
import { f as V } from "chunk-3PIOJLHR.mjs";
import { a } from "chunk-QFU6OGL3.mjs";
import { d as j } from "chunk-AYNVEX5D.mjs";
import { a as c } from "chunk-2FCXHKEL.mjs";
import { a as A } from "chunk-SWYZG2NI.mjs";
import { e as o } from "chunk-WLHSDIGQ.mjs";
var D = o(c());
function _(t) {
  return (0, D.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
    ...t,
    children: (0, D.jsx)("path", {
      d: "M5.299.5a5 5 0 0 1 4.416 7.345.75.75 0 0 0 .127.887l1.621 1.622a.749.749 0 1 1-1.06 1.06L8.851 9.862a.75.75 0 0 0-.925-.107A5.001 5.001 0 1 1 5.299.5m-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0",
      fill: "currentColor",
    }),
  });
}
var e = o(A());
var Q = "b1dxn7q",
  Y = "t61xro3",
  Z = "dyiclh3",
  ee = "h1ezhwod",
  te = "s1qqapws",
  oe = "slvxlfg",
  ne = "s1tes2cq",
  re = "s1yv2vyw",
  se = "s8ln65c",
  ae = "s56pukx",
  ie = "s12glelh",
  le = "sv2ybzu",
  ce = "s1xikvtl",
  de = "vhkk1lc",
  pe = "vlpj8e7",
  ue = "s1aob93t",
  me = "upfcbpb";
var d = o(c()),
  ge = e.default.createContext(null),
  Qe = e.default.memo(
    e.default.forwardRef(function (p, i) {
      let {
          identifier: l,
          title: n,
          selected: u,
          onSelect: m,
          className: k,
          children: I,
          "aria-label": T,
          enabled: h = !0,
          type: B = "button",
          ...R
        } = p,
        L = P(),
        S = h && !L,
        g = e.default.useContext(ge),
        b,
        f = j(n) ? n(l) : n,
        r = e.default.Children.toArray(I).length > 0;
      r || (b = f);
      let s = e.default.useCallback(
          (y) => {
            (u || g?.(), m(l, y));
          },
          [g, m, l, u]
        ),
        w = V(s);
      return (0, d.jsx)("button", {
        ref: i,
        "aria-label": T ?? f,
        disabled: !S,
        className: a(Q, se, $, u && ae, k),
        type: B,
        ...R,
        ...w,
        children: r ? I : (0, d.jsx)("div", { className: Y, children: b }),
      });
    })
  ),
  Ye = e.default.memo(
    e.default.forwardRef(function (p, i) {
      let {
          enabled: l = !0,
          readOnly: n,
          children: u,
          large: m,
          direction: k = "horizontal",
          unsaturated: I = !1,
          animateOnPropChange: T = !1,
          showSelectionWhenDisabled: h = !1,
          className: B,
          style: R,
          ...L
        } = p,
        S = P(n),
        g = l && !S,
        b = e.default.Children.toArray(u),
        f = b.length,
        v = [],
        r = k === "vertical",
        s = -1;
      b.forEach((O, E) => {
        v.push(O);
        let N = fe(O, h);
        if ((N && (s = E), E === f - 1 || r)) return;
        let He = b[E + 1],
          We = fe(He, h),
          Pe = (0, d.jsx)("div", { className: a(Z, (N || We) && ee) }, `${E}-divider`);
        v.push(Pe);
      });
      let w = F.values.inputHeight,
        y = 1 / (f || 1),
        C = `${y * 100}%`,
        Te = `${s * y * 100}%`,
        q = e.default.useRef(s),
        Be = s !== q.current,
        W = e.default.useRef(!1),
        Re = e.default.useCallback(() => {
          W.current = !0;
        }, []),
        z = (W.current || T) && Be;
      e.default.useLayoutEffect(() => {
        ((q.current = s), (W.current = !1));
      }, [s]);
      let Le = r ? "height" : "width",
        Me = r ? "top" : "left",
        Ee = w * f + 1 * (f - 1);
      return (0, d.jsx)("div", {
        ref: i,
        className: a(le, m && ce, r && de, (I || !g) && me, B),
        style: { "--height": `${r ? Ee : w}px`, ...R },
        ...L,
        children: (0, d.jsxs)("div", {
          className: a(ue, r && pe, z && ie),
          children: [
            (0, d.jsx)("div", {
              className: a(te, !g && ne, m && oe, z && re),
              style: { display: s !== -1 ? "" : "none", [Le]: C, [Me]: Te },
            }),
            (0, d.jsx)(J.Provider, {
              value: !g,
              children: (0, d.jsx)(ge.Provider, { value: Re, children: v }),
            }),
          ],
        }),
      });
    })
  );
function fe(t, p) {
  if (!t || typeof t != "object" || !e.default.isValidElement(t)) return !1;
  let i = t.props;
  return (p || i.enabled !== !1) && i.selected;
}
var M = o(A());
var H = o(c());
function be(t) {
  return (0, H.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8.5",
    ...t,
    children: (0, H.jsx)("g", {
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      children: (0, H.jsx)("path", { d: "m1.5 6.75 5-5M6.5 6.75l-5-5" }),
    }),
  });
}
var xe = "i8gs8dn";
var ve = o(c());
function he({
  icon: t,
  onClick: p,
  onMouseDown: i,
  label: l,
  tabIndex: n = -1,
  className: u,
  enabled: m = !0,
}) {
  return (0, ve.jsx)("button", {
    className: a(xe, u),
    type: "button",
    tabIndex: n,
    "aria-label": l,
    onClick: p,
    onMouseDown: i,
    disabled: !m,
    children: t,
  });
}
var ye = "svpr0nh",
  Ce = "s1px9f5q";
var Ie = "cxrvkbb",
  Se = "cpbz6cs",
  we = "s1t4ivzv",
  ke = "co17wjr";
var x = o(c()),
  Oe = () => {},
  xt = M.default.forwardRef(function (p, i) {
    let {
        value: l,
        onChange: n,
        enabled: u,
        large: m,
        className: k,
        autoFocus: I,
        onKeyDown: T,
        isIconVisible: h = !0,
        placeholder: B = "Search",
        customTextStyle: R = !1,
        showClearButton: L = !1,
        testId: S = "search-bar",
        inputId: g,
        tabIndex: b,
        ...f
      } = p,
      v = M.default.useRef(null),
      r = K(i, v),
      s = M.default.useCallback(() => {
        let C = v.current;
        C && C.focus();
      }, []),
      w = M.default.useCallback(
        (C) => {
          (C.preventDefault(), C.stopPropagation(), n("", !0, Oe));
        },
        [n]
      ),
      y = L && l.length > 0;
    return (0, x.jsxs)(U, {
      className: a(h && ye, y && Ie, k),
      large: m,
      "data-testid": `${S}-input-wrapper`,
      onClick: s,
      ...f,
      children: [
        h &&
          (0, x.jsx)(G, {
            className: Ce,
            children: (0, x.jsx)(_, { role: "img", "aria-label": "Search" }),
          }),
        (0, x.jsx)(X, {
          id: g,
          ref: r,
          placeholder: B,
          constantChange: !0,
          value: l,
          onChange: n,
          enabled: u,
          className: a(we, R && ke),
          autoFocus: I,
          onKeyDown: T,
          "data-testid": `${S}-input`,
          tabIndex: b,
        }),
        y &&
          (0, x.jsx)(he, {
            icon: (0, x.jsx)(be, {}),
            className: Se,
            onMouseDown: w,
            label: "Clear search filter",
            tabIndex: -1,
          }),
      ],
    });
  });
export { Qe as a, Ye as b, be as c, _ as d, he as e, xt as f };
//# sourceMappingURL=chunk-2XTEVZIW.mjs.map
