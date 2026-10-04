import { b as K } from "chunk-WPWSHZF5.mjs";
import { f as U, g as _ } from "chunk-XXPWJPL4.mjs";
import { a as X, b as q } from "chunk-TS24LVSZ.mjs";
import { a as J } from "chunk-VD6KMVU6.mjs";
import { b as G } from "chunk-APNRKI6Y.mjs";
import { d as F } from "chunk-IBBQFOLQ.mjs";
import { f as $ } from "chunk-3PIOJLHR.mjs";
import { a as i } from "chunk-QFU6OGL3.mjs";
import { d as j } from "chunk-AYNVEX5D.mjs";
import { a as c } from "chunk-2FCXHKEL.mjs";
import { a as V } from "chunk-SWYZG2NI.mjs";
import { e as n } from "chunk-WLHSDIGQ.mjs";
var z = n(c());
function Q(t) {
  return (0, z.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12",
    ...t,
    children: (0, z.jsx)("path", {
      d: "M5.299.5a5 5 0 0 1 4.416 7.345.75.75 0 0 0 .127.887l1.621 1.622a.749.749 0 1 1-1.06 1.06L8.851 9.862a.75.75 0 0 0-.925-.107A5.001 5.001 0 1 1 5.299.5m-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0",
      fill: "currentColor",
    }),
  });
}
var e = n(V());
var Y = "b1dxn7q",
  Z = "t61xro3",
  ee = "dyiclh3",
  te = "h1ezhwod",
  oe = "s1qqapws",
  ne = "slvxlfg",
  re = "s1tes2cq",
  se = "s1yv2vyw",
  ie = "s8ln65c",
  ae = "s56pukx",
  le = "s12glelh",
  ce = "sv2ybzu",
  de = "s1xikvtl",
  pe = "vhkk1lc",
  ue = "vlpj8e7",
  me = "s1aob93t",
  fe = "upfcbpb";
var d = n(c()),
  he = e.default.createContext(null),
  Ye = e.default.memo(
    e.default.forwardRef(function (p, a) {
      let {
          identifier: l,
          title: r,
          selected: u,
          onSelect: m,
          className: B,
          children: I,
          "aria-label": k,
          enabled: h = !0,
          type: b = "button",
          ...T
        } = p,
        R = q(),
        P = h && !R,
        f = e.default.useContext(he),
        x,
        g = j(r) ? r(l) : r,
        o = e.default.Children.toArray(I).length > 0;
      o || (x = g);
      let s = e.default.useCallback(
          (w) => {
            (u || f?.(), m(l, w));
          },
          [f, m, l, u]
        ),
        S = $(s);
      return (0, d.jsx)("button", {
        ref: a,
        "aria-label": k ?? g,
        disabled: !P,
        className: i(Y, ie, F, u && ae, B),
        type: b,
        ...T,
        ...S,
        children: o ? I : (0, d.jsx)("div", { className: Z, children: x }),
      });
    })
  ),
  Ze = e.default.memo(
    e.default.forwardRef(function (p, a) {
      let {
          enabled: l = !0,
          readOnly: r,
          children: u,
          large: m,
          direction: B = "horizontal",
          unsaturated: I = !1,
          animateOnPropChange: k = !1,
          showSelectionWhenDisabled: h = !1,
          className: b,
          style: T,
          ...R
        } = p,
        P = q(r),
        f = l && !P,
        x = e.default.Children.toArray(u),
        g = x.length,
        C = [],
        o = B === "vertical",
        s = -1;
      x.forEach((N, H) => {
        C.push(N);
        let A = ge(N, h);
        if ((A && (s = H), H === g - 1 || o)) return;
        let He = x[H + 1],
          Ee = ge(He, h),
          De = (0, d.jsx)("div", { className: i(ee, (A || Ee) && te) }, `${H}-divider`);
        C.push(De);
      });
      let S = G.values.inputHeight,
        w = 1 / (g || 1),
        M = `${w * 100}%`,
        W = `${s * w * 100}%`,
        v = e.default.useRef(s),
        Re = s !== v.current,
        D = e.default.useRef(!1),
        Pe = e.default.useCallback(() => {
          D.current = !0;
        }, []),
        O = (D.current || k) && Re;
      e.default.useLayoutEffect(() => {
        ((v.current = s), (D.current = !1));
      }, [s]);
      let Le = o ? "height" : "width",
        Me = o ? "top" : "left",
        We = S * g + 1 * (g - 1);
      return (0, d.jsx)("div", {
        ref: a,
        className: i(ce, m && de, o && pe, (I || !f) && fe, b),
        style: { "--height": `${o ? We : S}px`, ...T },
        ...R,
        children: (0, d.jsxs)("div", {
          className: i(me, o && ue, O && le),
          children: [
            (0, d.jsx)("div", {
              className: i(oe, !f && re, m && ne, O && se),
              style: { display: s !== -1 ? "" : "none", [Le]: M, [Me]: W },
            }),
            (0, d.jsx)(X.Provider, {
              value: !f,
              children: (0, d.jsx)(he.Provider, { value: Pe, children: C }),
            }),
          ],
        }),
      });
    })
  );
function ge(t, p) {
  if (!t || typeof t != "object" || !e.default.isValidElement(t)) return !1;
  let a = t.props;
  return (p || a.enabled !== !1) && a.selected;
}
var L = n(V());
var E = n(c());
function be(t) {
  return (0, E.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8.5",
    ...t,
    children: (0, E.jsx)("g", {
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      children: (0, E.jsx)("path", { d: "m1.5 6.75 5-5M6.5 6.75l-5-5" }),
    }),
  });
}
var xe = "i8gs8dn";
var ye = n(c());
function ve({
  icon: t,
  onClick: p,
  onMouseDown: a,
  label: l,
  tabIndex: r = -1,
  className: u,
  enabled: m = !0,
}) {
  return (0, ye.jsx)("button", {
    className: i(xe, u),
    type: "button",
    tabIndex: r,
    "aria-label": l,
    onClick: p,
    onMouseDown: a,
    disabled: !m,
    children: t,
  });
}
var Ie = "svpr0nh",
  Ce = "s1px9f5q",
  Se = "s6iyxf1";
var we = "cpbz6cs",
  Be = "c1t4ivzv",
  ke = "so17wjr",
  Te = "c1ugwh2v";
var y = n(c()),
  Ne = () => {},
  xt = L.default.forwardRef(function (p, a) {
    let {
        value: l,
        onChange: r,
        enabled: u,
        large: m,
        className: B,
        autoFocus: I,
        onKeyDown: k,
        isIconVisible: h = !0,
        iconPosition: b = "right",
        placeholder: T = "Search",
        customTextStyle: R = !1,
        showClearButton: P = !1,
        testId: f = "search-bar",
        inputId: x,
        tabIndex: g,
        ...C
      } = p,
      o = L.default.useRef(null),
      s = J(a, o),
      S = L.default.useCallback(() => {
        let v = o.current;
        v && v.focus();
      }, []),
      w = L.default.useCallback(
        (v) => {
          (v.preventDefault(), v.stopPropagation(), r("", !0, Ne));
        },
        [r]
      ),
      M = P && l.length > 0 && !(b === "right" && h),
      W = (0, y.jsx)(Q, { role: "img", "aria-label": "Search" });
    return (0, y.jsxs)(_, {
      className: i(b === "right" ? Se : Ie, M && we, B),
      large: m,
      "data-testid": `${f}-input-wrapper`,
      onClick: S,
      ...C,
      children: [
        h && b === "left" && (0, y.jsx)(K, { className: Ce, children: W }),
        (0, y.jsx)(U, {
          id: x,
          ref: s,
          placeholder: T,
          constantChange: !0,
          value: l,
          onChange: r,
          enabled: u,
          className: i(ke, R && Te),
          autoFocus: I,
          onKeyDown: k,
          "data-testid": `${f}-input`,
          tabIndex: g,
        }),
        h && b === "right" && W,
        M &&
          (0, y.jsx)(ve, {
            icon: (0, y.jsx)(be, {}),
            className: Be,
            onMouseDown: w,
            label: "Clear search filter",
            tabIndex: -1,
          }),
      ],
    });
  });
export { Ye as a, Ze as b, be as c, Q as d, ve as e, xt as f };
//# sourceMappingURL=chunk-LZIKYCQJ.mjs.map
