import {
  a as _e,
  b as ke,
  c as Ie,
  d as ce,
  e as Se,
  f as Re,
  g as Ne,
  i as De,
} from "chunk-2BM47LJQ.mjs";
import { c as ee } from "chunk-EMEJPB66.mjs";
import { c as We, f as Ge } from "chunk-FCOEVT45.mjs";
import { a as Pe } from "chunk-N2DJHBJE.mjs";
import { a as z } from "chunk-OGQCKB6U.mjs";
import { b as Ce } from "chunk-YY75G3LC.mjs";
import { e as Me } from "chunk-ZHENBEUN.mjs";
import { b as Q } from "chunk-WPWSHZF5.mjs";
import { a as qe } from "chunk-CDPDF5O5.mjs";
import { a as Oe } from "chunk-K6L5GVTR.mjs";
import { a as X } from "chunk-4HRYW54D.mjs";
import { b as W } from "chunk-KZLNHVFP.mjs";
import { e as le, g as Te } from "chunk-IBBQFOLQ.mjs";
import { a as $ } from "chunk-5N7P5B2N.mjs";
import { f as Ee } from "chunk-ZHCHDVPW.mjs";
import { a as T } from "chunk-QFU6OGL3.mjs";
import { a as St } from "chunk-J3A5W6BK.mjs";
import { a as N } from "chunk-2FCXHKEL.mjs";
import { a as q } from "chunk-SWYZG2NI.mjs";
import { b as we } from "chunk-Y3GZLMBF.mjs";
import { c as U } from "chunk-4JY5UMT2.mjs";
import { H as Y } from "chunk-VHFKZWVR.mjs";
import { b as ve } from "chunk-GOPQO4KR.mjs";
import { e as h } from "chunk-WLHSDIGQ.mjs";
var Ue = "fpc582v",
  ze = "f1thtg1z";
var Je = h(N());
function Nt(e) {
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
function dr(e) {
  return (0, Je.jsx)("div", { className: T(e.flex ? Ue : ze), style: Nt(e) });
}
var Fe = h(q());
function Dt({ children: e }) {
  return e;
}
var ue = Fe.default.createContext(Dt);
ue.displayName = "DragPreviewProvidersContext";
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
var fe = h(N());
function br() {
  return (0, fe.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    role: "presentation",
    children: (0, fe.jsx)("path", {
      d: "m6.75 1.5-2.793 2.793a1 1 0 0 0 0 1.414L6.75 8.5",
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var C = h(q());
var Ze = { top: "tdqpu47", left: "l9h205o", bottom: "b190jn2z", right: "rup7n0p" },
  Ke = "ct11a1o",
  te = 10,
  Ae = "c130fvck",
  $e = "t3o0wes",
  He = { short: "sb1to7c", long: "loyxflu" },
  Le = "t1agxw0x";
var j = h(N());
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
  let c = ({ trigger: o, tooltip: f }) => {
    if (e.disabled) return;
    (o !== void 0 && (n.current = o), f !== void 0 && (t.current = f));
    let d = !!(n.current || (e.interactive && t.current));
    s(d);
  };
  return (
    C.default.useEffect(() => {
      if (!r) return;
      function o() {
        window.removeEventListener("scroll", f, { capture: !0 });
      }
      function f(d) {
        let l = e.triggerRef.current;
        l && d.target instanceof Node && d.target.contains(l) && (a(), o());
      }
      return (window.addEventListener("scroll", f, { capture: !0 }), () => o());
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
  onClick: f,
  onPointerEnter: d,
  onPointerLeave: l,
  testId: x,
  tint: E = $.tooltipBackground,
  triggerRef: u,
  visible: g,
  alignSelf: _ = "center",
  skipAnimation: R = !1,
  variant: I = "default",
}) => {
  let b = I === "large" ? "tooltipBorderRadiusLarge" : "tooltipBorderRadius",
    p = C.default.useRef(null),
    S = Ce(n === "top" || n === "bottom");
  return (
    C.default.useLayoutEffect(() => {
      if (!g || !u.current || !p.current || !S) return;
      let y = { left: 0, right: 0 },
        w = u.current.getBoundingClientRect(),
        m = o?.current?.getBoundingClientRect();
      if (_ === "right" && u.current) {
        let V = getComputedStyle(u.current);
        y = { left: parseFloat(V.paddingLeft), right: parseFloat(V.paddingRight) };
      }
      let G = p.current.offsetWidth,
        Z = p.current.offsetHeight,
        K = Ve(n, c),
        A = Gt(n, c),
        { top: M, left: H, additionalOffset: L } = Wt(n, _, t, w, y, m, G, Z, A);
      ((p.current.style.top = M),
        (p.current.style.left = H),
        (p.current.style[je[n]] = `${K + (L ?? 0)}px`));
    }, [_, n, t, c, o, u, S, g]),
    g
      ? (0, j.jsx)(Me, {
          mode: i,
          children: (0, j.jsx)("div", {
            ref: p,
            "data-testid": x,
            className: T(Ke, Ze[n], t && Ae),
            style: { [je[n]]: Ve(n, c) },
            onPointerEnter: d,
            onPointerLeave: l,
            onClick: (y) => {
              (f(y), y.stopPropagation());
            },
            onMouseDown: (y) => y.stopPropagation(),
            children: (0, j.jsx)("div", {
              className: T(We, $e, s && He[s]),
              style: R ? { animation: "none" } : void 0,
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
  let f, d, l;
  switch (e) {
    case "top":
      ((f = n.top + n.height),
        r === "right"
          ? ((d = n.left + n.width - i + t.right), s && (d += te))
          : (d = n.left + n.width / 2 - i / 2));
      break;
    case "left":
      ((f = n.top + n.height / 2 - c / 2), (d = n.left + n.width), (l = (a?.right ?? 0) - n.right));
      break;
    case "bottom":
      ((f = n.top - c),
        r === "right"
          ? ((d = n.left + n.width - i + t.right), s && (d += te))
          : (d = n.left + n.width / 2 - i / 2));
      break;
    case "right":
      ((f = n.top + n.height / 2 - c / 2),
        (d = (a?.left ?? n.left) - i),
        (l = n.left - (a?.left ?? 0)));
      break;
    default:
      U(e);
  }
  let x = s ? 0 : te;
  switch (e) {
    case "top":
    case "bottom": {
      if (((d += o), d < 0)) d = x;
      else if (d + i > window.innerWidth) {
        let E = d + i - window.innerWidth;
        d -= E + x;
      }
      break;
    }
    case "left":
    case "right":
      if (((f += o), f < 0)) f = x;
      else if (f + c > window.innerHeight) {
        let E = f + c - window.innerHeight;
        f -= E + x;
      }
      break;
    default:
      U(e);
  }
  return { top: f + "px", left: d + "px", additionalOffset: l };
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
      return U(e);
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
      return U(e);
  }
}
var je = { top: "paddingTop", left: "paddingLeft", bottom: "paddingBottom", right: "paddingRight" };
var B = h(q(), 1);
var ne = "tzsvjdc",
  oe = "l1ehb6cn",
  Ye = "c1ikreno",
  Xe = "e1f47h4t",
  Qe = "lgvo2dl",
  et = "i1jg7ru0",
  tt = "ltyh0n7",
  de = "t1ramr4k",
  me = "hzt03rr",
  rt = "e1f6ct5n",
  nt = "eano5sa";
var O = h(N(), 1),
  qt = B.default.createContext(void 0);
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
    o = B.default.useContext(qt),
    f = i.variant === "layer",
    { triggerProps: d, tooltipProps: l } = re({
      className: T(ne, f && oe),
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
      (0, O.jsx)(Q, { ...d, className: t, ref: c, children: n }),
      (0, O.jsx)(pe, { ...i, ...l }),
    ],
  });
}
function pe(e) {
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
      tint: e.tint ?? $.panelBackground,
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
                    className: T(de, me),
                    children: (0, O.jsx)(X, { children: e.title }),
                  }),
                })
              : (0, O.jsx)("div", {
                  className: T(t && rt),
                  children: (0, O.jsx)(ee, {
                    className: T(de, me),
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
var mt = h(q(), 1);
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
  Ut = "b1c7z6za",
  sn = "b1eca53j",
  ln = "p4sri9u",
  cn = T(it, "bs3azl6"),
  un = "c1qeto7i",
  fn = "b8y1dyl",
  dn = "bg2hdtb",
  mn = "m1ha7gxb",
  pn = "acukmgx",
  at = T(it, Ut, "b1sb4uyz"),
  gn = "wcrz0ka",
  xn = "s1a5l89i",
  hn = "pb1yo5",
  yn = "pnvlffn",
  bn = "emy5mnq";
var st = "i7d4cn1",
  lt = T(at, "e1otabne"),
  ct = T(ne, oe);
var ut = "https://app.framerstatic.com/a11y-O773ZVIY.png";
var ft = "https://app.framerstatic.com/rem-typography-BHML23FR.jpg";
var dt = "https://app.framerstatic.com/scroll-targets-2PADIE7F.jpg";
var P = h(N(), 1);
var pt = (e) => {
    Ee("ui_interaction", { page: "education-tooltip", id: e });
  },
  Kt = (e) => {
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
          image: ft,
          href: "https://youtu.be/DGPCFIKUDb8",
          type: "icon",
        };
      case "accessibility":
        return {
          title: "Accessibility tips",
          actionText: "Learn more",
          image: ut,
          text: "Learn about the tools Framer gives you to add meaning to the elements of your website.",
          href: "https://www.framer.com/learn/accessibility/",
          type: "icon",
        };
      case "scrollTargets":
        return {
          title: "Scroll sections",
          actionText: "Watch video",
          href: "https://www.youtube.com/watch?v=AG1ZEij8Vcw",
          image: dt,
          text: "Learn how to create links that smoothly scroll to a specific section within your page.",
          type: "icon",
        };
      default:
        U(e);
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
function At({ href: e, actionText: r, tooltipId: s, content: n, image: t }) {
  return (0, P.jsx)(ot, {
    icon: (0, P.jsx)(Q, { className: st, title: "", children: (0, P.jsx)(gt, {}) }),
    direction: "right",
    actions: e
      ? (0, P.jsx)(Te, { as: "a", href: e, target: "_blank", onClick: () => pt(s), children: r })
      : void 0,
    variant: "education",
    ...n,
    image: t,
  });
}
var $t = { x: -W.values.tooltipOffset, y: W.values.tooltipOffset * 2 };
function Ht({ href: e, actionText: r, tooltipId: s, content: n, image: t }) {
  let a = (0, mt.useRef)(null),
    { triggerProps: i, tooltipProps: c } = re({
      className: ct,
      direction: "top",
      interactive: !0,
      offset: $t,
      triggerRef: a,
      delay: "short",
      initialVisibility: !1,
      tint: $.panelBackground,
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
      (0, P.jsx)(pe, {
        title: n.title,
        text: n.text,
        variant: "layer",
        actions: (0, P.jsx)(le, {
          variant: "default",
          onClick: () => {
            (pt(s), Oe(e));
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
function Kn({ tooltipId: e }) {
  let { isDarkMode: r } = qe(),
    { actionText: s, href: n, type: t, ...a } = Kt(e),
    i;
  return (
    we(a.image)
      ? (i = a.image)
      : a.image &&
        "dark" in a.image &&
        "light" in a.image &&
        (i = r ? a.image.dark : a.image.light),
    (0, P.jsx)(t === "icon" ? At : Ht, {
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
      f = Math.abs(a - c);
    return Math.sqrt(o * o + f * f);
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
var F = h(N());
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
var k = h(q()),
  kt = h(St());
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
var D = h(q());
var Vt = 10,
  xe = 50,
  jt = 50,
  Bt = 120,
  ht = 1e3 / Bt;
function vt(e, r, s, n) {
  let [t, a] = D.default.useState(null),
    i = D.default.useRef(null),
    c = D.default.useRef(null),
    o = D.default.useRef(n);
  o.current = n;
  let f = D.default.useCallback(
      (u) => {
        let g = i.current;
        if (!g || !t || g.cancelled) return;
        let { scrollX: _, scrollY: R, lastTimestamp: I } = g,
          b = I !== null ? u - I : ht,
          v = Math.min(b, jt) / ht;
        ((_ || R) && ((t.scrollTop += R * v), (t.scrollLeft += _ * v), o.current?.()),
          (g.lastTimestamp = u),
          (g.rafRef = requestAnimationFrame(f)));
      },
      [t]
    ),
    d = D.default.useCallback((u) => {
      let g = wt(u);
      (a(g), g ? (c.current = { x: g.scrollLeft, y: g.scrollTop }) : (c.current = null));
    }, []),
    l = D.default.useCallback(() => {
      i.current && (i.current.cancelled = !0);
    }, []),
    x = D.default.useCallback(() => {
      (t && t.removeEventListener("wheel", l), a(null));
      let u = { x: 0, y: 0 };
      c.current &&
        t &&
        ((u.x = c.current.x - t.scrollLeft), (u.y = c.current.y - t.scrollTop), (c.current = null));
      let g = i.current;
      return g
        ? (window.cancelAnimationFrame(g.rafRef), (i.current = null), { scrollOffset: u })
        : { scrollOffset: u };
    }, [t, l]),
    E = D.default.useCallback(
      (u) => {
        if (!t || !e) return;
        let g = t.getBoundingClientRect(),
          _ = 0,
          R = 0;
        i.current ||
          ((i.current = {
            rafRef: requestAnimationFrame(f),
            scrollX: _,
            scrollY: R,
            cancelled: !1,
            hasMovedUp: !1,
            hasMovedDown: !1,
            hasMovedLeft: !1,
            hasMovedRight: !1,
            lastTimestamp: null,
          }),
          t.addEventListener("wheel", l));
        let I = i.current;
        ((I.hasMovedUp ||= u.delta.y < 0),
          (I.hasMovedDown ||= u.delta.y > 0),
          (I.hasMovedLeft ||= u.delta.x < 0),
          (I.hasMovedRight ||= u.delta.x > 0));
        let { hasMovedUp: b, hasMovedDown: p, hasMovedLeft: v, hasMovedRight: S } = I;
        if (Ne(u.client, g) || r) {
          let w = s?.() ?? 0,
            m = u.client.x - g.left,
            G = u.client.y - g.top - w,
            Z = g.width,
            K = g.height - w,
            A = m / Z,
            M = G / K,
            H = bt(m, Z),
            L = bt(G, K);
          ((_ = yt(H, A)),
            (R = yt(L, M)),
            !b && R < 0 && (R = 0),
            !p && R > 0 && (R = 0),
            !v && _ < 0 && (_ = 0),
            !S && _ > 0 && (_ = 0),
            (I.scrollX = _),
            (I.scrollY = R));
        }
      },
      [t, f, l, e, s, r]
    );
  return { beginAutoScroll: d, endAutoScroll: x, updateAutoScroll: E };
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
var ae = h(q());
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
          ((t = null), d());
        }
      }
      function i(l) {
        if (!t) return;
        (l.stopPropagation(), l.preventDefault());
        let { clientAtStart: x, began: E } = t,
          u = he(l),
          g = J.delta(x, u);
        ((t.client = u), (t.delta = g));
        let { onDrag: _, onDragStart: R } = s.current;
        if (E) {
          _({
            client: u,
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
        J.distance(x, u) > rr &&
          ((t.began = !0),
          (t.startTime = Date.now()),
          R({
            client: u,
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
      function f(l) {
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
      n.addEventListener("mousedown", f);
      function d() {
        (window.removeEventListener("mouseup", c, { capture: !0 }),
          window.removeEventListener("mousemove", i, { capture: !0 }),
          window.removeEventListener("keydown", o, { capture: !0 }));
      }
      return () => {
        (a({ cancelled: !0 }), d(), n.removeEventListener("mousedown", f));
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
var ye = h(N());
function po(e = {}) {
  let { enabled: r, hideDragSource: s, dragHandleRef: n } = e,
    t = (0, k.useRef)(null),
    a = e.ref || t,
    i = (0, k.useRef)(e);
  i.current = e;
  let c = (0, k.useRef)(null),
    [o, f] = (0, k.useState)(null),
    d = (0, k.useRef)(null),
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
    u = (0, k.useContext)(De),
    g = (0, k.useContext)(ue),
    _ = (0, k.useCallback)(
      (b) => {
        if (r === !1) return;
        let p = a.current;
        if (!p) return;
        let { top: v, left: S, width: y, height: w } = p.getBoundingClientRect(),
          { x: m, y: G } = b.client,
          Z = u.dragSessionStart(),
          K = new ie(),
          A = { x: S + y / 2 - m, y: v + w / 2 - G },
          M = {
            sessionId: Z,
            startEvent: b,
            elementOffset: { x: S, y: v },
            elementWidth: y,
            elementHeight: w,
            previewElementPromise: ar(p, A, i.current.customDragPreview, g),
            previewElement: null,
            began: !1,
            ended: !1,
            originalOpacity: null,
            originalPointerEvents: null,
            centerOfGravityOffset: A,
            dataTransfer: K,
          },
          H = (m - S) / y,
          L = (G - v) / w,
          V = Math.max(y, w, 1),
          It = i.current.dragScale ?? (V + 2) / V;
        ((d.current = M),
          f(M),
          _t(M, { x: 0, y: 0 }),
          se({ scale: It, opacity: 0.8, originX: H, originY: L }));
      },
      [r, g]
    ),
    R = (0, k.useCallback)(
      (b) => {
        if (!o || (_t(o, b.delta), !o.began || o.ended)) return;
        let { dataTransfer: p } = o,
          v = {
            ...b,
            dataTransfer: p,
            centerOfGravityOffset: o.centerOfGravityOffset,
            elementWidth: o.elementWidth,
            elementHeight: o.elementHeight,
          };
        ((c.current = v), E(v), u.dragSessionChange(o.sessionId, v));
        let { onDrag: S, dragProperties: y } = i.current,
          w = "grabbing";
        if (
          (p.dropEffect !== "none"
            ? (p.dropEffectCursor
                ? (w = p.dropEffectCursor)
                : p.dropEffect === "copy" && (w = "copy"),
              i.current.hoveringDropTargetClassName && Se(i.current.hoveringDropTargetClassName))
            : ce(),
          Re(w),
          S && S(v),
          y)
        ) {
          let m = y(v);
          m && se(m);
        }
      },
      [o, E, u]
    ),
    I = (0, k.useCallback)(
      (b) => {
        if (((c.current = null), !o)) {
          f(null);
          let m = d.current;
          m && (u.dragSessionEnd(m.sessionId, null), (d.current = null));
          return;
        }
        let p = b.cancelled || or(b.client),
          v = {
            ...b,
            dataTransfer: o.dataTransfer,
            centerOfGravityOffset: o.centerOfGravityOffset,
            elementWidth: o.elementWidth,
            elementHeight: o.elementHeight,
            cancelled: p,
          };
        (u.dragSessionEnd(o.sessionId, v),
          (d.current = null),
          i.current.onDragEnd && i.current.onDragEnd(v));
        let S = o.dataTransfer.dropEffect !== "none",
          y = { scale: 1, opacity: S ? 0 : 1 },
          { scrollOffset: w } = x();
        if (
          (S || ((y.x = o.elementOffset.x + w.x), (y.y = o.elementOffset.y + w.y), ce()),
          !p && i.current.dropAnimationProperties)
        ) {
          let m = i.current.dropAnimationProperties(v);
          m && (y = m);
        }
        (i.current.onDropAnimationStart && i.current.onDropAnimationStart(),
          o.previewElement &&
            ((o.previewElement.style.transition = "transform 0.2s, opacity 0.2s"),
            (o.previewElement.style.webkitTransition = "transform 0.2s, opacity 0.2s")),
          se(y),
          setTimeout(() => f((m) => (m && m.sessionId !== o.sessionId ? m : null)), 250));
      },
      [o, x, u]
    );
  return (
    Pt({ ref: a, onDragStart: _, onDrag: R, onDragEnd: I, dragHandleRef: n }),
    (0, k.useEffect)(() => {
      let b = !0;
      if (!o) return;
      let p = a.current;
      if (!p) return;
      (i.current.onDragStart &&
        i.current.onDragStart({
          ...o.startEvent,
          dataTransfer: o.dataTransfer,
          centerOfGravityOffset: o.centerOfGravityOffset,
          elementWidth: o.elementWidth,
          elementHeight: o.elementHeight,
        }),
        (o.began = !0),
        l(p));
      function v() {
        if (!o || o.ended) return;
        ((o.ended = !0), u.dragSessionEnd(o.sessionId, null), f(null));
        let { onDropAnimationEnd: m } = i.current;
        m && m();
      }
      function S(m) {
        m.currentTarget === m.target && v();
      }
      ((o.originalOpacity = p.style.opacity),
        (o.originalPointerEvents = p.style.pointerEvents),
        s !== !1 && (p.style.opacity = "0"),
        (p.style.pointerEvents = "none"));
      let { previewElementPromise: y } = o,
        w = null;
      return (
        y
          .then((m) => {
            b &&
              (o.ended ||
                ((w = m),
                _e(m, v),
                w.addEventListener("transitionend", S),
                (o.previewElement = m)));
          })
          .catch(() => {}),
        () => {
          ((b = !1),
            (p.style.opacity = o.originalOpacity ?? ""),
            (p.style.pointerEvents = o.originalPointerEvents ?? ""),
            w && (w.removeEventListener("transitionend", S), ke(w)));
          let m = d.current;
          m && u.dragSessionEnd(m.sessionId, null);
        }
      );
    }, [l, u, o, s, a]),
    a
  );
}
function or(e) {
  return e.x < 0 || e.y < 0 || e.x > window.innerWidth || e.y > window.innerHeight;
}
function _t(e, r) {
  se(J.add(r, e.elementOffset));
}
function ir(e) {
  let r = {};
  return (
    z(e.x) && (r["--layout-transition-drag-preview-x"] = e.x + "px"),
    z(e.y) && (r["--layout-transition-drag-preview-y"] = e.y + "px"),
    z(e.scale) && (r["--layout-transition-drag-preview-scale"] = `${e.scale}`),
    z(e.opacity) && (r["--layout-transition-drag-preview-opacity"] = `${e.opacity}`),
    z(e.originX) && (r["--layout-transition-drag-preview-origin-x"] = `${e.originX * 100}%`),
    z(e.originY) && (r["--layout-transition-drag-preview-origin-y"] = `${e.originY * 100}%`),
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
      kt.createRoot(c).render(
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
  return ((0, k.useLayoutEffect)(r, [r]), e);
}
var be = h(N());
function xo(e) {
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
  dr as b,
  re as c,
  Be as d,
  qt as e,
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
  Ut as q,
  sn as r,
  ln as s,
  cn as t,
  un as u,
  fn as v,
  dn as w,
  mn as x,
  pn as y,
  gn as z,
  xn as A,
  hn as B,
  yn as C,
  bn as D,
  Kn as E,
  hr as F,
  xo as G,
  ue as H,
  J as I,
  Lt as J,
  xt as K,
  po as L,
  br as M,
  Ln as N,
};
//# sourceMappingURL=chunk-O2AODISQ.mjs.map
