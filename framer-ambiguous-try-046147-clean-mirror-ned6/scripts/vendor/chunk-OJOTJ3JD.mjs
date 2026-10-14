import {
  a as ke,
  b as _e,
  c as Ie,
  d as ce,
  e as Se,
  f as De,
  g as Re,
  i as Ne,
} from "chunk-2BM47LJQ.mjs";
import { c as ee } from "chunk-7XA373KQ.mjs";
import { c as We, f as Ge } from "chunk-FCOEVT45.mjs";
import { a as Pe } from "chunk-N2DJHBJE.mjs";
import { a as U } from "chunk-OGQCKB6U.mjs";
import { b as Ce } from "chunk-YY75G3LC.mjs";
import { e as qe } from "chunk-CRGMIPUE.mjs";
import { b as Q } from "chunk-WPWSHZF5.mjs";
import { a as Me } from "chunk-MYIEIMAN.mjs";
import { a as Oe } from "chunk-K6L5GVTR.mjs";
import { a as X } from "chunk-4HRYW54D.mjs";
import { b as W } from "chunk-JCI24TOB.mjs";
import { e as le, g as Te } from "chunk-IBBQFOLQ.mjs";
import { a as H } from "chunk-D6PECVG6.mjs";
import { f as Ee } from "chunk-IYXRIEU5.mjs";
import { a as T } from "chunk-QFU6OGL3.mjs";
import { a as St } from "chunk-J3A5W6BK.mjs";
import { a as R } from "chunk-2FCXHKEL.mjs";
import { a as M } from "chunk-SWYZG2NI.mjs";
import { b as we } from "chunk-Y3GZLMBF.mjs";
import { c as z } from "chunk-4JY5UMT2.mjs";
import { H as Y } from "chunk-VHFKZWVR.mjs";
import { b as ve } from "chunk-GOPQO4KR.mjs";
import { e as h } from "chunk-WLHSDIGQ.mjs";
var ze = "fpc582v",
  Ue = "f1thtg1z";
var Je = h(R());
function Rt(e) {
  if (e.flex) {
    let n;
    "minWidth" in e ? (n = e.minWidth ?? 0) : "minSize" in e ? (n = e.minSize ?? 0) : (n = 0);
    let t;
    return (
      "minHeight" in e ? (t = e.minHeight ?? 0) : "minSize" in e ? (t = e.minSize ?? 0) : (t = 0),
      { minWidth: n, minHeight: t }
    );
  }
  let r = "width" in e ? e.width : e.size,
    s = "height" in e ? e.height : e.size;
  return { width: r, height: s };
}
function ur(e) {
  return (0, Je.jsx)("div", { className: T(e.flex ? ze : Ue), style: Rt(e) });
}
var Fe = h(M());
function Nt({ children: e }) {
  return e;
}
var fe = Fe.default.createContext(Nt);
fe.displayName = "DragPreviewProvidersContext";
function gr() {
  let { activeElement: e } = document;
  if (e instanceof HTMLIFrameElement && e.contentWindow)
    try {
      e = e.contentWindow.document.activeElement;
    } catch (r) {
      if (r instanceof DOMException) return !0;
      throw r;
    }
  return e ? e.nodeName === "INPUT" || e.nodeName === "TEXTAREA" || e.isContentEditable : !1;
}
var hr = (e) => e.stopPropagation();
var de = h(R());
function br() {
  return (0, de.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    role: "presentation",
    children: (0, de.jsx)("path", {
      d: "m6.75 1.5-2.793 2.793a1 1 0 0 0 0 1.414L6.75 8.5",
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var C = h(M());
var Ze = { top: "tdqpu47", left: "l9h205o", bottom: "b190jn2z", right: "rup7n0p" },
  Ae = "ct11a1o",
  te = 10,
  Ke = "c130fvck",
  He = "t3o0wes",
  $e = { short: "sb1to7c", long: "loyxflu" },
  Le = "t1agxw0x";
var j = h(R());
function re(e) {
  let [r, s] = C.default.useState(e.initialVisibility ?? !1),
    n = C.default.useRef(!1),
    t = C.default.useRef(!1),
    a = C.default.useCallback(() => {
      ((n.current = !1), (t.current = !1), s(!1));
    }, []),
    i = e.disabled ?? !1;
  C.default.useEffect(() => {
    i && a();
  }, [i, a]);
  let c = ({ trigger: o, tooltip: d }) => {
    if (e.disabled) return;
    (o !== void 0 && (n.current = o), d !== void 0 && (t.current = d));
    let u = !!(n.current || (e.interactive && t.current));
    s(u);
  };
  return (
    C.default.useEffect(() => {
      if (!r) return;
      function o() {
        window.removeEventListener("scroll", d, { capture: !0 });
      }
      function d(u) {
        let l = e.triggerRef.current;
        l && u.target instanceof Node && u.target.contains(l) && (a(), o());
      }
      return (window.addEventListener("scroll", d, { capture: !0 }), () => o());
    }, [a, e.triggerRef, r]),
    {
      triggerProps: {
        onMouseDown: a,
        onPointerEnter: () => c({ trigger: !0 }),
        onPointerLeave: () => c({ trigger: !1 }),
      },
      tooltipProps: {
        ...e,
        onClick: a,
        onPointerEnter: () => c({ tooltip: !0 }),
        onPointerLeave: () => c({ tooltip: !1 }),
        visible: r,
      },
      hideTooltip: a,
    }
  );
}
var Be = ({
  children: e,
  className: r,
  delay: s,
  direction: n = "top",
  interactive: t,
  maxWidth: a,
  mode: i,
  offset: c,
  offsetXRef: o,
  onClick: d,
  onPointerEnter: u,
  onPointerLeave: l,
  testId: x,
  tint: E = H.tooltipBackground,
  triggerRef: f,
  visible: g,
  alignSelf: k = "center",
  skipAnimation: D = !1,
  variant: I = "default",
}) => {
  let b = I === "large" ? "tooltipBorderRadiusLarge" : "tooltipBorderRadius",
    m = C.default.useRef(null),
    S = Ce(n === "top" || n === "bottom");
  return (
    C.default.useLayoutEffect(() => {
      if (!g || !f.current || !m.current || !S) return;
      let y = { left: 0, right: 0 },
        w = f.current.getBoundingClientRect(),
        p = o?.current?.getBoundingClientRect();
      if (k === "right" && f.current) {
        let V = getComputedStyle(f.current);
        y = { left: parseFloat(V.paddingLeft), right: parseFloat(V.paddingRight) };
      }
      let G = m.current.offsetWidth,
        Z = m.current.offsetHeight,
        A = Ve(n, c),
        K = Gt(n, c),
        { top: q, left: $, additionalOffset: L } = Wt(n, k, t, w, y, p, G, Z, K);
      ((m.current.style.top = q),
        (m.current.style.left = $),
        (m.current.style[je[n]] = `${A + (L ?? 0)}px`));
    }, [k, n, t, c, o, f, S, g]),
    g
      ? (0, j.jsx)(qe, {
          mode: i,
          children: (0, j.jsx)("div", {
            ref: m,
            "data-testid": x,
            className: T(Ae, Ze[n], t && Ke),
            style: { [je[n]]: Ve(n, c) },
            onPointerEnter: u,
            onPointerLeave: l,
            onClick: (y) => {
              (d(y), y.stopPropagation());
            },
            onMouseDown: (y) => y.stopPropagation(),
            children: (0, j.jsx)("div", {
              className: T(We, He, s && $e[s]),
              style: D ? { animation: "none" } : void 0,
              children: (0, j.jsx)("div", {
                className: T(Ge, Le, r),
                style: {
                  backgroundColor: E,
                  maxWidth: a,
                  borderRadius: I === "large" ? W.css[b] : void 0,
                  padding: I === "large" ? W.css.tooltipPaddingLarge : void 0,
                },
                children: e,
              }),
            }),
          }),
        })
      : null
  );
};
function Wt(e, r, s, n, t, a, i, c, o) {
  let d, u, l;
  switch (e) {
    case "top":
      ((d = n.top + n.height),
        r === "right"
          ? ((u = n.left + n.width - i + t.right), s && (u += te))
          : (u = n.left + n.width / 2 - i / 2));
      break;
    case "left":
      ((d = n.top + n.height / 2 - c / 2), (u = n.left + n.width), (l = (a?.right ?? 0) - n.right));
      break;
    case "bottom":
      ((d = n.top - c),
        r === "right"
          ? ((u = n.left + n.width - i + t.right), s && (u += te))
          : (u = n.left + n.width / 2 - i / 2));
      break;
    case "right":
      ((d = n.top + n.height / 2 - c / 2),
        (u = (a?.left ?? n.left) - i),
        (l = n.left - (a?.left ?? 0)));
      break;
    default:
      z(e);
  }
  let x = s ? 0 : te;
  switch (e) {
    case "top":
    case "bottom": {
      if (((u += o), u < 0)) u = x;
      else if (u + i > window.innerWidth) {
        let E = u + i - window.innerWidth;
        u -= E + x;
      }
      break;
    }
    case "left":
    case "right":
      if (((d += o), d < 0)) d = x;
      else if (d + c > window.innerHeight) {
        let E = d + c - window.innerHeight;
        d -= E + x;
      }
      break;
    default:
      z(e);
  }
  return { top: d + "px", left: u + "px", additionalOffset: l };
}
function Ve(e, r) {
  if (typeof r == "number") return r;
  if (!r) return 0;
  switch (e) {
    case "top":
    case "bottom":
      return r.y;
    case "left":
    case "right":
      return r.x;
    default:
      return z(e);
  }
}
function Gt(e, r) {
  if (typeof r == "number" || !r) return 0;
  switch (e) {
    case "top":
    case "bottom":
      return r.x;
    case "left":
    case "right":
      return r.y;
    default:
      return z(e);
  }
}
var je = { top: "paddingTop", left: "paddingLeft", bottom: "paddingBottom", right: "paddingRight" };
var B = h(M(), 1);
var ne = "tzsvjdc",
  oe = "l1ehb6cn",
  Ye = "c1ikreno",
  Xe = "e1f47h4t",
  Qe = "lgvo2dl",
  et = "i1jg7ru0",
  tt = "ltyh0n7",
  ue = "t1ramr4k",
  pe = "hzt03rr",
  rt = "e1f6ct5n",
  nt = "eano5sa";
var O = h(R(), 1),
  Mt = B.default.createContext(void 0);
function ot({
  delay: e,
  direction: r,
  interactive: s = !0,
  icon: n,
  className: t,
  initialVisibility: a,
  ...i
}) {
  let c = B.default.useRef(null),
    o = B.default.useContext(Mt),
    d = i.variant === "layer",
    { triggerProps: u, tooltipProps: l } = re({
      className: T(ne, d && oe),
      direction: r,
      interactive: s,
      offset: W.values.tooltipOffset,
      triggerRef: c,
      offsetXRef: o,
      delay: e,
      initialVisibility: a,
    });
  return (0, O.jsxs)(O.Fragment, {
    children: [
      (0, O.jsx)(Q, { ...u, className: t, ref: c, children: n }),
      (0, O.jsx)(me, { ...i, ...l }),
    ],
  });
}
function me(e) {
  let { variant: r, ...s } = e,
    n = r === "layer",
    t = r === "education";
  return (
    B.default.useEffect(() => {
      if (e.image) {
        let a = new Image();
        ((a.src = e.image), (a.alt = e.title), a.decode?.().catch(ve));
      }
    }, [e.image, e.title]),
    (0, O.jsx)(Be, {
      ...s,
      tint: e.tint ?? H.panelBackground,
      children: (0, O.jsxs)("div", {
        className: T(Ye, t && Xe, n && Qe),
        children: [
          e.image &&
            (0, O.jsx)("img", { src: e.image, alt: e.title, className: et, decoding: "async" }),
          e.title &&
            (n
              ? (0, O.jsx)("div", {
                  className: tt,
                  children: (0, O.jsx)(ee, {
                    className: T(ue, pe),
                    children: (0, O.jsx)(X, { children: e.title }),
                  }),
                })
              : (0, O.jsx)("div", {
                  className: T(t && rt),
                  children: (0, O.jsx)(ee, {
                    className: T(ue, pe),
                    children: (0, O.jsx)(X, { children: e.title }),
                  }),
                })),
          (0, O.jsx)("div", {
            className: T(t && nt),
            children: (0, O.jsx)(ee, { children: (0, O.jsx)(X, { children: e.text }) }),
          }),
          e.actions,
        ],
      }),
    })
  );
}
var pt = h(M(), 1);
var it = "tl8565r",
  Br = "bvc2uw9",
  Yr = "b1k2nl76",
  Xr = "b1i3g548",
  Qr = "c77pepd",
  en = "wnwbz2t",
  tn = "w16ew1wl",
  rn = "w16cr7hr",
  nn = "w1lo74ig",
  on = "r1119pfk",
  an = "b13iwexl",
  zt = "b1c7z6za",
  sn = "b1eca53j",
  ln = "p4sri9u",
  cn = T(it, "bs3azl6"),
  fn = "c1qeto7i",
  dn = "b8y1dyl",
  un = "bg2hdtb",
  pn = "m1ha7gxb",
  mn = "acukmgx",
  at = T(it, zt, "b1sb4uyz"),
  gn = "wcrz0ka",
  xn = "s1a5l89i",
  hn = "pb1yo5",
  yn = "pnvlffn",
  bn = "emy5mnq";
var st = "i7d4cn1",
  lt = T(at, "e1otabne"),
  ct = T(ne, oe);
var ft = "https://app.framerstatic.com/a11y-O773ZVIY.png";
var dt = "https://app.framerstatic.com/rem-typography-BHML23FR.jpg";
var ut = "https://app.framerstatic.com/scroll-targets-2PADIE7F.jpg";
var P = h(R(), 1);
var mt = (e) => {
    Ee("ui_interaction", { page: "education-tooltip", id: e });
  },
  At = (e) => {
    switch (e) {
      case "templatePage":
        return {
          title: "Detail page",
          actionText: "Watch video",
          text: "Layout changes made to this page apply to all pages of the selected CMS collection.",
          href: "https://www.framer.com/academy/lessons/cms-pages-dynamic-content",
          type: "button",
        };
      case "remTypography":
        return {
          title: "REM typography",
          actionText: "Watch video",
          text: "This is the base value per breakpoint when using REM sizing in your typography.",
          image: dt,
          href: "https://youtu.be/DGPCFIKUDb8",
          type: "icon",
        };
      case "accessibility":
        return {
          title: "Accessibility tips",
          actionText: "Learn more",
          image: ft,
          text: "Learn about the tools Framer gives you to add meaning to the elements of your website.",
          href: "https://www.framer.com/learn/accessibility/",
          type: "icon",
        };
      case "scrollTargets":
        return {
          title: "Scroll sections",
          actionText: "Watch video",
          href: "https://www.youtube.com/watch?v=AG1ZEij8Vcw",
          image: ut,
          text: "Learn how to create links that smoothly scroll to a specific section within your page.",
          type: "icon",
        };
      default:
        z(e);
    }
  };
function gt() {
  return (0, P.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    children: (0, P.jsxs)("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        (0, P.jsx)("path", {
          fill: "currentColor",
          fillOpacity: 0.15,
          d: "M5.75 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 5.75 1Z",
        }),
        (0, P.jsx)("path", {
          fill: "transparent",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.75 8.25v-2",
        }),
        (0, P.jsx)("path", { fill: "transparent", strokeLinecap: "round", d: "M5.75 3.75h0" }),
      ],
    }),
  });
}
function Kt({ href: e, actionText: r, tooltipId: s, content: n, image: t }) {
  return (0, P.jsx)(ot, {
    icon: (0, P.jsx)(Q, { className: st, title: "", children: (0, P.jsx)(gt, {}) }),
    direction: "right",
    actions: e
      ? (0, P.jsx)(Te, { as: "a", href: e, target: "_blank", onClick: () => mt(s), children: r })
      : void 0,
    variant: "education",
    ...n,
    image: t,
  });
}
var Ht = { x: -W.values.tooltipOffset, y: W.values.tooltipOffset * 2 };
function $t({ href: e, actionText: r, tooltipId: s, content: n, image: t }) {
  let a = (0, pt.useRef)(null),
    { triggerProps: i, tooltipProps: c } = re({
      className: ct,
      direction: "top",
      interactive: !0,
      offset: Ht,
      triggerRef: a,
      delay: "short",
      initialVisibility: !1,
      tint: H.panelBackground,
      alignSelf: "right",
    });
  return (0, P.jsxs)(P.Fragment, {
    children: [
      (0, P.jsxs)(le, {
        ref: a,
        variant: "default",
        enabled: !0,
        className: lt,
        "aria-expanded": c.visible,
        onClick: i.onPointerEnter,
        ...i,
        children: [(0, P.jsx)(gt, {}), "Detail page"],
      }),
      (0, P.jsx)(me, {
        title: n.title,
        text: n.text,
        variant: "layer",
        actions: (0, P.jsx)(le, {
          variant: "default",
          onClick: () => {
            (mt(s), Oe(e));
          },
          "aria-expanded": c.visible,
          children: r,
        }),
        image: t,
        ...c,
      }),
    ],
  });
}
function An({ tooltipId: e }) {
  let { isDarkMode: r } = Me(),
    { actionText: s, href: n, type: t, ...a } = At(e),
    i;
  return (
    we(a.image)
      ? (i = a.image)
      : a.image &&
        "dark" in a.image &&
        "light" in a.image &&
        (i = r ? a.image.dark : a.image.light),
    (0, P.jsx)(t === "icon" ? Kt : $t, {
      href: n,
      actionText: s,
      tooltipId: e,
      content: a,
      image: i,
    })
  );
}
var J;
((n) => {
  function e({ x: t, y: a }, { x: i, y: c }) {
    let o = Math.abs(t - i),
      d = Math.abs(a - c);
    return Math.sqrt(o * o + d * d);
  }
  n.distance = e;
  function r({ x: t, y: a }, { x: i, y: c }) {
    return { x: i - t, y: c - a };
  }
  n.delta = r;
  function s({ x: t, y: a }, { x: i, y: c }) {
    return { x: t + i, y: a + c };
  }
  n.add = s;
})((J ||= {}));
var Lt = "data-is-sortable-item";
function xt(e) {
  return e instanceof HTMLDivElement && e.hasAttribute(Lt);
}
var F = h(R());
function Ln(e) {
  return (0, F.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: [
      (0, F.jsx)("path", {
        fill: "currentColor",
        d: "M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0M1.5 6a4.5 4.5 0 0 0 3.896 4.46c.189.188.392.29.604.29s.415-.102.604-.29a4.501 4.501 0 0 0 0-8.92c-.189-.188-.392-.29-.604-.29s-.415.102-.604.29A4.5 4.5 0 0 0 1.5 6",
      }),
      (0, F.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 .75C7.243.75 8.25 3.101 8.25 6S7.243 11.25 6 11.25 3.75 8.899 3.75 6 4.757.75 6 .75Z",
      }),
      (0, F.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1",
      }),
      (0, F.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M.5 6S3 7 6 7s5.5-1 5.5-1",
      }),
    ],
  });
}
var eo = "p5inzda",
  to = "ptswoqr",
  ro = "p14s1oge";
var ao = "h10l6u5c",
  so = "psmj6sh",
  lo = "t1k6az3b",
  co = "h161tq0v",
  fo = "i1jzaapq",
  uo = "ij4gv2m",
  po = "c1ao5210";
var _ = h(M()),
  _t = h(St());
var ie = class {
    _items = [];
    _types = [];
    setData = (r, s) => {
      let n = new ge(r, s),
        t = this._items.findIndex((a) => a.format === r);
      t === -1 ? (this._items.push(n), this._types.push(r)) : (this._items[t] = n);
    };
    getData = (r) => {
      let s = this._items.find(({ format: n }) => n === r);
      return s ? s.data : void 0;
    };
    get types() {
      return this._types;
    }
    dropEffect = "none";
    dropEffectCursor;
  },
  ge = class {
    constructor(r, s) {
      this.format = r;
      this.data = s;
    }
    format;
    data;
  };
var N = h(M());
var Vt = 10,
  xe = 50,
  jt = 50,
  Bt = 120,
  ht = 1e3 / Bt;
function vt(e, r, s, n) {
  let [t, a] = N.default.useState(null),
    i = N.default.useRef(null),
    c = N.default.useRef(null),
    o = N.default.useRef(n);
  o.current = n;
  let d = N.default.useCallback(
      (f) => {
        let g = i.current;
        if (!g || !t || g.cancelled) return;
        let { scrollX: k, scrollY: D, lastTimestamp: I } = g,
          b = I !== null ? f - I : ht,
          v = Math.min(b, jt) / ht;
        ((k || D) && ((t.scrollTop += D * v), (t.scrollLeft += k * v), o.current?.()),
          (g.lastTimestamp = f),
          (g.rafRef = requestAnimationFrame(d)));
      },
      [t]
    ),
    u = N.default.useCallback((f) => {
      let g = wt(f);
      (a(g), g ? (c.current = { x: g.scrollLeft, y: g.scrollTop }) : (c.current = null));
    }, []),
    l = N.default.useCallback(() => {
      i.current && (i.current.cancelled = !0);
    }, []),
    x = N.default.useCallback(() => {
      (t && t.removeEventListener("wheel", l), a(null));
      let f = { x: 0, y: 0 };
      c.current &&
        t &&
        ((f.x = c.current.x - t.scrollLeft), (f.y = c.current.y - t.scrollTop), (c.current = null));
      let g = i.current;
      return g
        ? (window.cancelAnimationFrame(g.rafRef), (i.current = null), { scrollOffset: f })
        : { scrollOffset: f };
    }, [t, l]),
    E = N.default.useCallback(
      (f) => {
        if (!t || !e) return;
        let g = t.getBoundingClientRect(),
          k = 0,
          D = 0;
        i.current ||
          ((i.current = {
            rafRef: requestAnimationFrame(d),
            scrollX: k,
            scrollY: D,
            cancelled: !1,
            hasMovedUp: !1,
            hasMovedDown: !1,
            hasMovedLeft: !1,
            hasMovedRight: !1,
            lastTimestamp: null,
          }),
          t.addEventListener("wheel", l));
        let I = i.current;
        ((I.hasMovedUp ||= f.delta.y < 0),
          (I.hasMovedDown ||= f.delta.y > 0),
          (I.hasMovedLeft ||= f.delta.x < 0),
          (I.hasMovedRight ||= f.delta.x > 0));
        let { hasMovedUp: b, hasMovedDown: m, hasMovedLeft: v, hasMovedRight: S } = I;
        if (Re(f.client, g) || r) {
          let w = s?.() ?? 0,
            p = f.client.x - g.left,
            G = f.client.y - g.top - w,
            Z = g.width,
            A = g.height - w,
            K = p / Z,
            q = G / A,
            $ = bt(p, Z),
            L = bt(G, A);
          ((k = yt($, K)),
            (D = yt(L, q)),
            !b && D < 0 && (D = 0),
            !m && D > 0 && (D = 0),
            !v && k < 0 && (k = 0),
            !S && k > 0 && (k = 0),
            (I.scrollX = k),
            (I.scrollY = D));
        }
      },
      [t, d, l, e, s, r]
    );
  return { beginAutoScroll: u, endAutoScroll: x, updateAutoScroll: E };
}
function yt(e, r) {
  if (e > xe) return 0;
  let s = (xe - e) / xe,
    n = r < 0.5 ? -1 : 1;
  return Vt * n * s;
}
function bt(e, r) {
  let s = Math.min(e, r - e);
  return Math.max(0, s);
}
function Yt(e) {
  let { overflow: r } = e.style;
  if (r === "visible" || r === "hidden" || r === "clip") return !1;
  let s = e.scrollWidth > e.clientWidth,
    n = e.scrollHeight > e.clientHeight;
  return s || n;
}
function wt(e) {
  let { parentElement: r } = e;
  return r ? (Yt(r) ? r : wt(r)) : null;
}
var ae = h(M());
var Xt = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function Qt(e) {
  return Xt[e.tagName.toLowerCase()] ?? !1;
}
function er(e) {
  switch (e.getAttribute("draggable")) {
    case "true":
    case "false":
      return !0;
    default:
      return !1;
  }
}
function tr(e) {
  if (!e.hasAttribute("data-allow-drag")) return !1;
  let r = e.getAttribute("data-allow-drag");
  return r == null || r === "" || r === "true";
}
function Et(e, r) {
  return !r || !(r instanceof Element) || tr(r)
    ? !1
    : Qt(r) || er(r)
      ? !0
      : r === e
        ? !1
        : xt(r)
          ? !0
          : Et(e, r.parentElement);
}
function Tt(e) {
  let { target: r, currentTarget: s } = e;
  return s instanceof HTMLElement ? !Et(s, r) : !0;
}
var rr = 2;
function Pt(e) {
  let r = e.ref,
    s = (0, ae.useRef)(e);
  return (
    (s.current = e),
    (0, ae.useEffect)(() => {
      let n = r.current;
      if (!n) return;
      let t = null;
      function a(l) {
        if (t) {
          if (t.began) {
            let { cancelled: x = !1, event: E } = l;
            s.current.onDragEnd({
              client: t.client,
              clientAtStart: t.clientAtStart,
              delta: t.delta,
              cancelled: x,
              duration: Ot(t.startTime),
              altKey: E?.altKey === !0,
              ctrlKey: E?.ctrlKey === !0,
              cmdOrCtrlKey: E ? Y(E) : !1,
              shiftKey: E?.shiftKey === !0,
            });
          }
          ((t = null), u());
        }
      }
      function i(l) {
        if (!t) return;
        (l.stopPropagation(), l.preventDefault());
        let { clientAtStart: x, began: E } = t,
          f = he(l),
          g = J.delta(x, f);
        ((t.client = f), (t.delta = g));
        let { onDrag: k, onDragStart: D } = s.current;
        if (E) {
          k({
            client: f,
            delta: g,
            clientAtStart: x,
            cancelled: !1,
            duration: Ot(t.startTime),
            altKey: l.altKey,
            ctrlKey: l.ctrlKey,
            cmdOrCtrlKey: Y(l),
            shiftKey: l.shiftKey,
          });
          return;
        }
        J.distance(x, f) > rr &&
          ((t.began = !0),
          (t.startTime = Date.now()),
          D({
            client: f,
            delta: g,
            clientAtStart: x,
            cancelled: !1,
            duration: 0,
            altKey: l.altKey,
            ctrlKey: l.ctrlKey,
            cmdOrCtrlKey: Y(l),
            shiftKey: l.shiftKey,
          }));
      }
      function c(l) {
        if (!t) return;
        let x = he(l);
        ((t.client = x), (t.delta = J.delta(t.clientAtStart, x)), a({ event: l }));
      }
      function o(l) {
        t &&
          l.key === "Escape" &&
          (l.preventDefault(), l.stopPropagation(), a({ cancelled: !0, event: l }));
      }
      function d(l) {
        if (!Pe.isLeftMouseClick(l) || !Tt(l)) return;
        let x = s.current.dragHandleRef?.current;
        if (x && (!(l.target instanceof Node) || !x.contains(l.target))) return;
        (l.preventDefault(), nr());
        let E = he(l);
        ((t = { clientAtStart: E, client: E, delta: { x: 0, y: 0 }, began: !1, startTime: null }),
          window.addEventListener("mouseup", c, { capture: !0 }),
          window.addEventListener("mousemove", i, { capture: !0 }),
          window.addEventListener("keydown", o, { capture: !0 }));
      }
      n.addEventListener("mousedown", d);
      function u() {
        (window.removeEventListener("mouseup", c, { capture: !0 }),
          window.removeEventListener("mousemove", i, { capture: !0 }),
          window.removeEventListener("keydown", o, { capture: !0 }));
      }
      return () => {
        (a({ cancelled: !0 }), u(), n.removeEventListener("mousedown", d));
      };
    }, [r]),
    r
  );
}
function Ot(e) {
  return e ? (Date.now() - e) / 1e3 : 0;
}
function he(e) {
  return { x: e.clientX, y: e.clientY };
}
function nr() {
  document.activeElement instanceof HTMLElement && document.activeElement.blur();
}
var ye = h(R());
function Co(e = {}) {
  let { enabled: r, hideDragSource: s, dragHandleRef: n } = e,
    t = (0, _.useRef)(null),
    a = e.ref || t,
    i = (0, _.useRef)(e);
  i.current = e;
  let c = (0, _.useRef)(null),
    [o, d] = (0, _.useState)(null),
    u = (0, _.useRef)(null),
    {
      beginAutoScroll: l,
      endAutoScroll: x,
      updateAutoScroll: E,
    } = vt(
      e.autoScrollEnabled ?? !0,
      e.keepAutoScrollingOutsideScrollArea ?? !1,
      e.getHeightOfStickyHeaders,
      () => {
        let b = c.current;
        b && e.onDrag?.(b);
      }
    ),
    f = (0, _.useContext)(Ne),
    g = (0, _.useContext)(fe),
    k = (0, _.useCallback)(
      (b) => {
        if (r === !1) return;
        let m = a.current;
        if (!m) return;
        let { top: v, left: S, width: y, height: w } = m.getBoundingClientRect(),
          { x: p, y: G } = b.client,
          Z = f.dragSessionStart(),
          A = new ie(),
          K = { x: S + y / 2 - p, y: v + w / 2 - G },
          q = {
            sessionId: Z,
            startEvent: b,
            elementOffset: { x: S, y: v },
            elementWidth: y,
            elementHeight: w,
            previewElementPromise: ar(m, K, i.current.customDragPreview, g),
            previewElement: null,
            began: !1,
            ended: !1,
            originalOpacity: null,
            originalPointerEvents: null,
            centerOfGravityOffset: K,
            dataTransfer: A,
          },
          $ = (p - S) / y,
          L = (G - v) / w,
          V = Math.max(y, w, 1),
          It = i.current.dragScale ?? (V + 2) / V;
        ((u.current = q),
          d(q),
          kt(q, { x: 0, y: 0 }),
          se({ scale: It, opacity: 0.8, originX: $, originY: L }));
      },
      [r, g]
    ),
    D = (0, _.useCallback)(
      (b) => {
        if (!o || (kt(o, b.delta), !o.began || o.ended)) return;
        let { dataTransfer: m } = o,
          v = {
            ...b,
            dataTransfer: m,
            centerOfGravityOffset: o.centerOfGravityOffset,
            elementWidth: o.elementWidth,
            elementHeight: o.elementHeight,
          };
        ((c.current = v), E(v), f.dragSessionChange(o.sessionId, v));
        let { onDrag: S, dragProperties: y } = i.current,
          w = "grabbing";
        if (
          (m.dropEffect !== "none"
            ? (m.dropEffectCursor
                ? (w = m.dropEffectCursor)
                : m.dropEffect === "copy" && (w = "copy"),
              i.current.hoveringDropTargetClassName && Se(i.current.hoveringDropTargetClassName))
            : ce(),
          De(w),
          S && S(v),
          y)
        ) {
          let p = y(v);
          p && se(p);
        }
      },
      [o, E, f]
    ),
    I = (0, _.useCallback)(
      (b) => {
        if (((c.current = null), !o)) {
          d(null);
          let p = u.current;
          p && (f.dragSessionEnd(p.sessionId, null), (u.current = null));
          return;
        }
        let m = b.cancelled || or(b.client),
          v = {
            ...b,
            dataTransfer: o.dataTransfer,
            centerOfGravityOffset: o.centerOfGravityOffset,
            elementWidth: o.elementWidth,
            elementHeight: o.elementHeight,
            cancelled: m,
          };
        (f.dragSessionEnd(o.sessionId, v),
          (u.current = null),
          i.current.onDragEnd && i.current.onDragEnd(v));
        let S = o.dataTransfer.dropEffect !== "none",
          y = { scale: 1, opacity: S ? 0 : 1 },
          { scrollOffset: w } = x();
        if (
          (S || ((y.x = o.elementOffset.x + w.x), (y.y = o.elementOffset.y + w.y), ce()),
          !m && i.current.dropAnimationProperties)
        ) {
          let p = i.current.dropAnimationProperties(v);
          p && (y = p);
        }
        (i.current.onDropAnimationStart && i.current.onDropAnimationStart(),
          o.previewElement &&
            ((o.previewElement.style.transition = "transform 0.2s, opacity 0.2s"),
            (o.previewElement.style.webkitTransition = "transform 0.2s, opacity 0.2s")),
          se(y),
          setTimeout(() => d((p) => (p && p.sessionId !== o.sessionId ? p : null)), 250));
      },
      [o, x, f]
    );
  return (
    Pt({ ref: a, onDragStart: k, onDrag: D, onDragEnd: I, dragHandleRef: n }),
    (0, _.useEffect)(() => {
      let b = !0;
      if (!o) return;
      let m = a.current;
      if (!m) return;
      (i.current.onDragStart &&
        i.current.onDragStart({
          ...o.startEvent,
          dataTransfer: o.dataTransfer,
          centerOfGravityOffset: o.centerOfGravityOffset,
          elementWidth: o.elementWidth,
          elementHeight: o.elementHeight,
        }),
        (o.began = !0),
        l(m));
      function v() {
        if (!o || o.ended) return;
        ((o.ended = !0), f.dragSessionEnd(o.sessionId, null), d(null));
        let { onDropAnimationEnd: p } = i.current;
        p && p();
      }
      function S(p) {
        p.currentTarget === p.target && v();
      }
      ((o.originalOpacity = m.style.opacity),
        (o.originalPointerEvents = m.style.pointerEvents),
        s !== !1 && (m.style.opacity = "0"),
        (m.style.pointerEvents = "none"));
      let { previewElementPromise: y } = o,
        w = null;
      return (
        y
          .then((p) => {
            b &&
              (o.ended ||
                ((w = p),
                ke(p, v),
                w.addEventListener("transitionend", S),
                (o.previewElement = p)));
          })
          .catch(() => {}),
        () => {
          ((b = !1),
            (m.style.opacity = o.originalOpacity ?? ""),
            (m.style.pointerEvents = o.originalPointerEvents ?? ""),
            w && (w.removeEventListener("transitionend", S), _e(w)));
          let p = u.current;
          p && f.dragSessionEnd(p.sessionId, null);
        }
      );
    }, [l, f, o, s, a]),
    a
  );
}
function or(e) {
  return e.x < 0 || e.y < 0 || e.x > window.innerWidth || e.y > window.innerHeight;
}
function kt(e, r) {
  se(J.add(r, e.elementOffset));
}
function ir(e) {
  let r = {};
  return (
    U(e.x) && (r["--layout-transition-drag-preview-x"] = e.x + "px"),
    U(e.y) && (r["--layout-transition-drag-preview-y"] = e.y + "px"),
    U(e.scale) && (r["--layout-transition-drag-preview-scale"] = `${e.scale}`),
    U(e.opacity) && (r["--layout-transition-drag-preview-opacity"] = `${e.opacity}`),
    U(e.originX) && (r["--layout-transition-drag-preview-origin-x"] = `${e.originX * 100}%`),
    U(e.originY) && (r["--layout-transition-drag-preview-origin-y"] = `${e.originY * 100}%`),
    r
  );
}
function se(e) {
  Ie(ir(e));
}
async function ar(e, r, s, n) {
  let t,
    a = e.offsetWidth,
    i = e.offsetHeight;
  if (s) {
    let c = document.createElement("template");
    (await new Promise((o) => {
      _t.createRoot(c).render(
        (0, ye.jsx)(n, {
          children: (0, ye.jsx)(sr, {
            callback: o,
            children: s({ dragSourceWidth: a, dragSourceHeight: i, centerOfGravityOffset: r }),
          }),
        })
      );
    }),
      (t = c.firstChild));
  } else t = e.cloneNode(!0);
  return (
    (t.style.position = "absolute"),
    (t.style.left = "0px"),
    (t.style.top = "0px"),
    (t.style.minWidth = `${a}px`),
    (t.style.minHeight = `${i}px`),
    (t.style.maxWidth = `${a + 1}px`),
    (t.style.maxHeight = `${i + 1}px`),
    (t.style.marginLeft = "0px"),
    (t.style.marginRight = "0px"),
    (t.style.marginTop = "0px"),
    (t.style.marginBottom = "0px"),
    (t.style.pointerEvents = "none"),
    (t.style.userSelect = "none"),
    (t.style.webkitUserSelect = "none"),
    (t.style.animation = "none"),
    (t.style.transition = ""),
    (t.style.webkitTransition = ""),
    (t.style.zIndex = "100000"),
    (t.style.transform =
      "translateX(var(--layout-transition-drag-preview-x, 0px)) translateY(var(--layout-transition-drag-preview-y, 0px)) translateZ(2000px) scale(var(--layout-transition-drag-preview-scale, 0))"),
    (t.style.willChange = "transform"),
    (t.style.transformOrigin =
      "var(--layout-transition-drag-preview-origin-x, 50%) var(--layout-transition-drag-preview-origin-y, 50%)"),
    (t.style.opacity = "var(--layout-transition-drag-preview-opacity, 1)"),
    (t.style.cursor = "default"),
    t
  );
}
function sr({ children: e, callback: r }) {
  return ((0, _.useLayoutEffect)(r, [r]), e);
}
var be = h(R());
function Go(e) {
  return (0, be.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "6",
    viewBox: "0 0 6 6",
    fill: "none",
    "aria-hidden": "true",
    ...e,
    children: (0, be.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.25",
      d: "M 0.86 2.1 L 2.647 3.891 C 2.842 4.087 3.158 4.087 3.354 3.892 L 5.15 2.1",
    }),
  });
}
export {
  gr as a,
  ur as b,
  re as c,
  Be as d,
  Mt as e,
  ot as f,
  Br as g,
  Yr as h,
  Xr as i,
  Qr as j,
  en as k,
  tn as l,
  rn as m,
  nn as n,
  on as o,
  an as p,
  zt as q,
  sn as r,
  ln as s,
  cn as t,
  fn as u,
  dn as v,
  un as w,
  pn as x,
  mn as y,
  gn as z,
  xn as A,
  hn as B,
  yn as C,
  bn as D,
  An as E,
  eo as F,
  to as G,
  ro as H,
  ao as I,
  so as J,
  lo as K,
  co as L,
  fo as M,
  uo as N,
  po as O,
  hr as P,
  Go as Q,
  fe as R,
  J as S,
  Lt as T,
  xt as U,
  Co as V,
  br as W,
  Ln as X,
};
//# sourceMappingURL=chunk-OJOTJ3JD.mjs.map
