import {
  b as ue,
  c as de,
  e as me,
  f as fe,
  j as D,
  k as he,
  l as A,
  m as be,
} from "chunk-JUAY7T5T.mjs";
import { b as ae } from "chunk-KNE2M7SY.mjs";
import { l as se, m as ce } from "chunk-LDRHYGET.mjs";
import { b as ie } from "chunk-WPWSHZF5.mjs";
import { a as xe } from "chunk-OGQCKB6U.mjs";
import { a as ge } from "chunk-UGGVL34P.mjs";
import { a as oe } from "chunk-K6L5GVTR.mjs";
import { b as le } from "chunk-P6Q3LWLD.mjs";
import { b as pe } from "chunk-TS24LVSZ.mjs";
import { b as V } from "chunk-O3IQPNKH.mjs";
import { b as $, d as ne } from "chunk-4J3H3UTQ.mjs";
import { b as re } from "chunk-3PIOJLHR.mjs";
import { b as te } from "chunk-RHJ4RSOB.mjs";
import { f as ee } from "chunk-EFB2P3QE.mjs";
import { a as k } from "chunk-QFU6OGL3.mjs";
import { a as De } from "chunk-LUZ6ND5K.mjs";
import { a as v } from "chunk-2FCXHKEL.mjs";
import { b as X } from "chunk-LA34HORX.mjs";
import { a as J } from "chunk-SWYZG2NI.mjs";
import { b as Z, c as H } from "chunk-4JY5UMT2.mjs";
import { d as Y } from "chunk-VHFKZWVR.mjs";
import { e as m } from "chunk-WLHSDIGQ.mjs";
var je = { Alt: !0, Control: !0, Meta: !0, Shift: !0 };
function w(e, t, r) {
  let n = [...e];
  return ((n[t] = r), j(n));
}
function j(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n !== void 0)
      switch (n) {
        case "CommandOrControl":
          e[r] = Y() ? "Meta" : "Control";
          break;
        case "Command":
          e[r] = "Meta";
          break;
        case "Control":
          e[r] = "Control";
          break;
        case "Delete":
          t.push(...w(e, r, "Backspace"));
          break;
        case "Down":
        case "Left":
        case "Right":
        case "Up":
          e[r] = `Arrow${n}`;
          break;
        case "Enter":
        case "Return":
          (t.push(...w(e, r, "NumpadEnter")), (e[r] = "Enter"));
          break;
        case "Option":
          e[r] = "Alt";
          break;
        case "Plus":
          (t.push(...w(e, r, "NumpadAdd")),
            t.push(...w(e, r, "Shift+=")),
            t.push(...w(e, r, "+")),
            (e[r] = "="));
          break;
        case "-":
          (t.push(...w(e, r, "NumpadSubtract")), t.push(...w(e, r, "Shift+-")), (e[r] = "-"));
          break;
        default:
          n.match(/^[.;A-Z]$/u)
            ? (e[r] = n)
            : n.match(/^\d$/u) && (t.push(...w(e, r, `Digit${n}`)), (e[r] = n));
      }
  }
  return (e.splice(0, e.length - 1, ...e.slice(0, e.length - 1).sort()), t.push(e.join("+")), t);
}
var Me = /^[=+\-.;/]$/u,
  ve = /^[a-z\d=+\-.;/]$/i;
function Ke(e) {
  let t = [];
  (e.altKey && t.push("Alt"),
    e.ctrlKey && t.push("Control"),
    e.metaKey && t.push("Meta"),
    e.shiftKey && !Me.test(e.key) && t.push("Shift"));
  let r = String.fromCharCode(e.keyCode);
  if (ve.test(e.key)) t.push(e.key.toUpperCase());
  else if (ve.test(r)) t.push(r.toUpperCase());
  else {
    let { code: n } = e;
    switch (n) {
      case "BracketLeft":
        t.push("[");
        break;
      case "BracketRight":
        t.push("]");
        break;
      case "Comma":
        t.push(",");
        break;
      case "Period":
        t.push(".");
        break;
      case "Quote":
        t.push("'");
        break;
      case "Semicolon":
        t.push(";");
        break;
      case "Slash":
        t.push("/");
        break;
      default: {
        if (n === void 0) break;
        let o = n.match(/^Key([A-Z])/u);
        o ? t.push(o[1]) : t.push(n);
        break;
      }
    }
  }
  return t.join("+");
}
var Oe = class {
  map;
  constructor() {
    this.map = new Map();
  }
  get(t) {
    if (t.key in je) return;
    let r = Ke(t);
    return this.map.get(r);
  }
  set(t, r, n) {
    j(t.split("+")).forEach((i) => {
      let a = this.map.get(i);
      (a &&
        console.warn("Duplicate key binding", {
          accelerator: i,
          framerAccelerator: t,
          actionName: n,
          existing: a.actionName,
        }),
        this.map.set(i, { action: r, actionName: n }));
    });
  }
  remove(t) {
    j(t.split("+")).forEach((n) => {
      this.map.delete(n);
    });
  }
};
var ye = m(J());
var F = class extends ye.default.Component {
  originalTransition = null;
  storeOriginalTransition() {
    if (this.originalTransition) return;
    let t = this.getElement();
    if (!t) return;
    let r = t.style.transition;
    r && (this.originalTransition = r);
  }
  getTransition() {
    return this.originalTransition ?? "transform 0.2s cubic-bezier(0.2, 0, 0, 1)";
  }
  getElement() {
    let t = this.props.elementRef.current;
    return t || null;
  }
  getElementTopLeft() {
    let t = this.getElement();
    if (!t) return null;
    let { left: r, top: n } = t.getBoundingClientRect();
    return { x: r, y: n };
  }
  getSnapshotBeforeUpdate(t) {
    let r = this.props.enabled !== !1 && t.enabled !== !1;
    if ((this.storeOriginalTransition(), !r)) {
      let o = this.getElement();
      return (o && (o.style.transition = ""), null);
    }
    return se(this.props.dependencies, t.dependencies) ? null : this.getElementTopLeft();
  }
  componentDidUpdate(t, r, n) {
    if (!n) return;
    let o = this.getElement();
    if (!o) return;
    let i = this.getElementTopLeft();
    if (!i) return;
    let a = n.x - i.x,
      c = n.y - i.y;
    (a === 0 && c === 0) ||
      ((o.style.transition = ""),
      (o.style.transform = `translate(${a}px, ${c}px)`),
      o.getBoundingClientRect(),
      (o.style.transition = this.getTransition()),
      (o.style.transform = ""));
  }
  render() {
    return this.props.children;
  }
};
var O = m(J()),
  we = m(De());
var M;
((t) => {
  function e({ x: r, y: n, width: o, height: i }) {
    return { x: r + o / 2, y: n + i / 2 };
  }
  t.center = e;
})((M ||= {}));
var y = m(J());
var Ee = "dafeksh",
  Te = "hl2u4y9";
var W = m(v());
function ke({
  item: e,
  index: t,
  sortIndex: r,
  visible: n,
  isRemovingItem: o,
  children: i,
  className: a,
  enabled: c,
  onDrag: q,
  onDragEnd: I,
  onDragStart: f,
  onDropAnimationEnd: N,
  dragProperties: R,
  dropAnimationProperties: P,
  customDragPreview: E,
  positionTransitionEnabled: G,
}) {
  let C = y.default.useRef(null),
    T = y.default.useRef(null),
    U = y.default.useRef(N);
  U.current = N;
  let h = y.default.useRef(!1);
  y.default.useLayoutEffect(
    () => (
      (T.current = Qe(C)),
      () => {
        T.current = null;
      }
    ),
    []
  );
  let l = y.default.useCallback(
      (x) => {
        let _ = document.activeElement;
        ((h.current = !!_ && _ === T.current), f(x, e, t));
      },
      [e, t, f]
    ),
    b = y.default.useCallback(() => {
      let x = U.current;
      if ((x && x(), h.current)) {
        let _ = T.current;
        _ && _.focus();
      }
    }, []),
    S = y.default.useCallback(() => (E ? E(t) : (0, W.jsx)(W.Fragment, {})), [E, t]);
  return (
    be({
      ref: T,
      enabled: c,
      onDragStart: l,
      onDrag: q,
      onDragEnd: I,
      onDropAnimationEnd: b,
      dragProperties: R,
      dropAnimationProperties: P,
      customDragPreview: E && S,
    }),
    (0, W.jsx)(F, {
      elementRef: T,
      enabled: G,
      dependencies: [t, r, o],
      children: (0, W.jsx)("div", {
        [he]: "true",
        className: k(Ee, !n && Te, a),
        ref: C,
        children: i,
      }),
    })
  );
}
function Qe(e) {
  let t = e.current;
  if (!(t instanceof HTMLDivElement)) return null;
  let r = t.firstChild;
  return r instanceof HTMLDivElement || r instanceof HTMLButtonElement ? r : null;
}
var z = m(v());
function zt(e) {
  let {
      items: t,
      keyForItem: r,
      children: n,
      header: o,
      footer: i,
      enabled: a = !0,
      style: c,
      onlyAnimateItemPositionsWhileDragging: q,
      onTransitionEnd: I,
      autoSizeAnimationEnabled: f = !0,
      className: N,
      disableCustomDragPreview: R,
      onDragStart: P,
      onDragComplete: E,
      removeItem: G,
      moveItem: C,
    } = e,
    T = pe(),
    U = le(),
    h = O.default.useRef(null),
    [l, b] = O.default.useState(null),
    S = Le(e, l);
  l?.ended && l.itemsWhenEnded !== t && b(null);
  let x = l?.itemsWhenEnded ?? t,
    _ = O.default.useCallback(
      (s, p, d) => {
        P && P(s, p);
        let g = Xe(h, d);
        g.length !== 0 && b({ index: d, dropIndex: d, insertionRects: g });
      },
      [P]
    ),
    L = !!G,
    Je = O.default.useCallback(
      (s) => {
        if (!l || !h.current) return;
        let p;
        if (rt(s.client, h.current)) p = L ? null : l.index;
        else {
          let d = D.add(s.client, s.centerOfGravityOffset);
          p = nt(d, h.current, l);
        }
        b((d) => (d ? (d.dropIndex === p ? d : { ...d, dropIndex: p }) : null));
      },
      [l, L]
    ),
    Ze = O.default.useCallback((s) => {
      s.cancelled && b((p) => (p ? { ...p, dropIndex: p.index } : null));
    }, []),
    Ae = O.default.useCallback(() => {
      if (!l) {
        b(null);
        return;
      }
      let { index: s, dropIndex: p } = l,
        d;
      if ((xe(p) && s !== p ? (d = () => C(s, p)) : p === null && G && (d = () => G(s)), !d)) {
        (b(null), E?.());
        return;
      }
      ((0, we.flushSync)(() => {
        b((g) => (g ? { ...g, ended: !0, itemsWhenEnded: x } : null));
      }),
        d(),
        E?.(),
        setTimeout(() => {
          b((g) => (g ? (g.ended ? null : g) : null));
        }, 50));
    }, [l, G, x, C, E]),
    Fe = O.default.useCallback(
      () => (l ? { opacity: l.dropIndex === null ? 0.3 : 0.8 } : null),
      [l]
    ),
    $e = O.default.useCallback(() => {
      if (!l || !h.current) return null;
      let { dropIndex: s } = _e(l);
      if (s === null) return { opacity: 0 };
      let { offsetLeft: p, offsetTop: d } = et(h.current),
        g = l.insertionRects[s];
      return (
        Z(g, `dropAnimationProperties: No insertion rect at dropIndex ${s}`),
        { x: p + g.x, y: d + g.y, scale: 1, opacity: 1 }
      );
    }, [l]),
    Ve = O.default.useCallback(
      (s) => {
        let p = x[s];
        return (
          Z(p, `dragPreview: Item at index ${s} not found`),
          n({ item: p, index: s, isDragPreview: !0, isDragEnabled: a })
        );
      },
      [x, n, a]
    );
  return (0, z.jsx)(re, {
    children: (0, z.jsxs)(
      ce,
      {
        innerRef: h,
        className: N,
        style: { position: "relative", boxSizing: "border-box", ...c },
        dependencies: [x.length, S],
        onTransitionEnd: I,
        animationEnabled: f,
        children: [
          o,
          He(x, l, S).map((s, p) =>
            (0, z.jsx)(
              ke,
              {
                item: s.item,
                enabled: a && !T,
                positionTransitionEnabled: q ? !!l : !0,
                index: s.index,
                sortIndex: p,
                visible: s.visible,
                isRemovingItem: S,
                onDragStart: _,
                onDrag: Je,
                onDragEnd: Ze,
                onDropAnimationEnd: Ae,
                dragProperties: Fe,
                dropAnimationProperties: $e,
                customDragPreview: R ? void 0 : Ve,
                children: n({ item: s.item, index: s.index, isDragPreview: !1, isDragEnabled: a }),
              },
              r(s.item)
            )
          ),
          i,
        ],
      },
      U
    ),
  });
}
function Le(e, t) {
  return !!e.removeItem && !!t && t.dropIndex === null;
}
function Ye(e, t, r) {
  return (
    Z(
      e.length > 0 && t >= 0 && t < e.length && r >= 0 && r < e.length,
      `moveListItem: indices out of bounds (fromIndex: ${t}, toIndex: ${r}, length: ${e.length})`
    ),
    e.splice(r, 0, e.splice(t, 1)[0]),
    e
  );
}
function He(e, t, r) {
  let { dragIndex: n, dropIndex: o } = _e(t),
    i = e.map((a, c) => ({ item: a, index: c, visible: !r || c !== n }));
  return n === null || n === o || o === null ? i : Ye(i, n, o);
}
function _e(e) {
  return { dragIndex: e ? e.index : null, dropIndex: e ? e.dropIndex : null };
}
function K(e) {
  if (!A(e) || !(e.firstChild instanceof HTMLElement)) return null;
  let { offsetLeft: t, offsetTop: r, offsetWidth: n, offsetHeight: o } = e.firstChild;
  return { x: t, y: r, width: n, height: o };
}
function Xe(e, t) {
  let r = [],
    n = e.current;
  if (!n) return r;
  let i = !A(n.firstChild) ? t + 1 : t,
    a = n.childNodes[i],
    c = [...n.childNodes];
  if (!(a instanceof HTMLDivElement)) return r;
  let q = a.nextSibling,
    I = !1;
  if (
    (c.forEach((f, N) => {
      if (f === a) return;
      if (!A(f)) {
        if (N === 0) return;
        I = !0;
      }
      n.insertBefore(a, f);
      let R = K(a);
      R && r.push(R);
    }),
    !I)
  ) {
    n.insertBefore(a, null);
    let f = K(a);
    f && r.push(f);
  }
  if ((n.insertBefore(a, q), r.length === 0)) {
    let f = K(a);
    f && r.push(f);
  }
  return r;
}
function et(e) {
  let t = e.getBoundingClientRect(),
    r = t.top,
    o = t.left + e.clientLeft,
    i = r + e.clientTop;
  return { offsetLeft: o, offsetTop: i };
}
function tt(e, t) {
  let r = 1 / 0,
    n = 0;
  return (
    e.forEach((o, i) => {
      let a = M.center(o),
        c = D.distance(a, t);
      c < r && ((r = c), (n = i));
    }),
    n
  );
}
function rt(e, t) {
  let { top: r, left: n, width: o, height: i } = t.getBoundingClientRect(),
    { x: a, y: c } = e;
  return a < n || a > n + o || c < r || c > r + i;
}
function nt(e, t, r) {
  let { top: n, left: o } = t.getBoundingClientRect(),
    i = e.x - o,
    a = e.y - n;
  return tt(r.insertionRects, { x: i, y: a });
}
var Se = m(J(), 1);
var Ie = "tl8565r",
  Dt = "bvc2uw9",
  jt = "b1k2nl76",
  Mt = "b1i3g548",
  Kt = "c77pepd",
  Bt = "wnwbz2t",
  Qt = "w16ew1wl",
  Lt = "w16cr7hr",
  Yt = "w1lo74ig",
  Ht = "r1119pfk",
  Xt = "b13iwexl",
  ot = "b1c7z6za",
  er = "b1eca53j",
  tr = "p4sri9u",
  rr = k(Ie, "bs3azl6"),
  nr = "c1qeto7i",
  or = "b8y1dyl",
  ir = "bg2hdtb",
  ar = "m1ha7gxb",
  sr = "acukmgx",
  Ne = k(Ie, ot, "b1sb4uyz"),
  cr = "wcrz0ka",
  lr = "s1a5l89i",
  pr = "pb1yo5",
  ur = "pnvlffn",
  dr = "emy5mnq";
var Re = "i7d4cn1",
  Pe = k(Ne, "e1otabne"),
  Ge = k(ue, de);
var We = "https://app.framerstatic.com/a11y-O773ZVIY.png";
var qe = "https://app.framerstatic.com/rem-typography-BHML23FR.jpg";
var Ce = "https://app.framerstatic.com/scroll-targets-2PADIE7F.jpg";
var u = m(v(), 1);
var ze = (e) => {
    ee("ui_interaction", { page: "education-tooltip", id: e });
  },
  lt = (e) => {
    switch (e) {
      case "templatePage":
        return {
          title: "Detail Page",
          actionText: "Watch Video",
          text: "Layout changes made to this page apply to all pages of the selected CMS collection.",
          href: "https://www.framer.com/academy/lessons/cms-pages-dynamic-content",
          type: "button",
        };
      case "remTypography":
        return {
          title: "REM Typography",
          actionText: "Watch Video",
          text: "This is the base value per Breakpoint when using REM sizing in your typography.",
          image: qe,
          href: "https://youtu.be/DGPCFIKUDb8",
          type: "icon",
        };
      case "accessibility":
        return {
          title: "Accessibility Tips",
          actionText: "Learn More",
          image: We,
          text: "Learn about the tools Framer gives you to add meaning to the elements of your website.",
          href: "https://www.framer.com/learn/accessibility/",
          type: "icon",
        };
      case "scrollTargets":
        return {
          title: "Scroll Sections",
          actionText: "Watch Video",
          href: "https://www.youtube.com/watch?v=AG1ZEij8Vcw",
          image: Ce,
          text: "Learn how to create links that smoothly scroll to a specific section within your page.",
          type: "icon",
        };
      default:
        H(e);
    }
  };
function Ue() {
  return (0, u.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    children: (0, u.jsxs)("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        (0, u.jsx)("path", {
          fill: "currentColor",
          fillOpacity: 0.15,
          d: "M5.75 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 5.75 1Z",
        }),
        (0, u.jsx)("path", {
          fill: "transparent",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.75 8.25v-2",
        }),
        (0, u.jsx)("path", { fill: "transparent", strokeLinecap: "round", d: "M5.75 3.75h0" }),
      ],
    }),
  });
}
function pt({ href: e, actionText: t, tooltipId: r, content: n, image: o }) {
  return (0, u.jsx)(me, {
    icon: (0, u.jsx)(ie, { className: Re, title: "", children: (0, u.jsx)(Ue, {}) }),
    direction: "right",
    actions: e
      ? (0, u.jsx)(ne, { as: "a", href: e, target: "_blank", onClick: () => ze(r), children: t })
      : void 0,
    variant: "education",
    ...n,
    image: o,
  });
}
var ut = { x: -V.values.tooltipOffset, y: V.values.tooltipOffset * 2 };
function dt({ href: e, actionText: t, tooltipId: r, content: n, image: o }) {
  let i = (0, Se.useRef)(null),
    { triggerProps: a, tooltipProps: c } = ae({
      className: Ge,
      direction: "top",
      interactive: !0,
      offset: ut,
      triggerRef: i,
      delay: "short",
      initialVisibility: !1,
      tint: te.panelBackground,
      alignSelf: "right",
      showArrow: !1,
    });
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsxs)($, {
        ref: i,
        variant: "default",
        enabled: !0,
        className: Pe,
        "aria-expanded": c.visible,
        onClick: a.onPointerEnter,
        ...a,
        children: [(0, u.jsx)(Ue, {}), "Detail Page"],
      }),
      (0, u.jsx)(fe, {
        title: n.title,
        text: n.text,
        variant: "layer",
        actions: (0, u.jsx)($, {
          variant: "default",
          onClick: () => {
            (ze(r), oe(e));
          },
          "aria-expanded": c.visible,
          children: t,
        }),
        image: o,
        ...c,
      }),
    ],
  });
}
function zr({ tooltipId: e }) {
  let { isDarkMode: t } = ge(),
    { actionText: r, href: n, type: o, ...i } = lt(e),
    a;
  return (
    X(i.image)
      ? (a = i.image)
      : i.image &&
        "dark" in i.image &&
        "light" in i.image &&
        (a = t ? i.image.dark : i.image.light),
    (0, u.jsx)(o === "icon" ? pt : dt, {
      href: n,
      actionText: r,
      tooltipId: e,
      content: i,
      image: a,
    })
  );
}
var B = m(v());
function Jr() {
  return (0, B.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    children: (0, B.jsx)("path", {
      d: "M 0 4.75 C 0 4.336 0.336 4 0.75 4 L 8.75 4 C 9.164 4 9.5 4.336 9.5 4.75 L 9.5 4.75 C 9.5 5.164 9.164 5.5 8.75 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 Z",
      fill: "currentColor",
    }),
  });
}
var Q = m(v());
function Ar({ width: e = 11, height: t = 11, ...r }) {
  return (0, Q.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11",
    width: e,
    height: t,
    ...r,
    children: (0, Q.jsx)("path", {
      fill: "currentColor",
      d: "M5 1.5c0-.4.3-.8.8-.8.4 0 .7.4.7.8V5H10c.4 0 .8.3.8.8 0 .4-.4.7-.8.7H6.5V10c0 .4-.3.8-.8.8A.8.8 0 0 1 5 10V6.5H1.5a.8.8 0 0 1-.8-.8c0-.4.4-.7.8-.7H5Z",
    }),
  });
}
var Kr = "p5inzda",
  Br = "ptswoqr",
  Qr = "p14s1oge";
var Xr = "h10l6u5c",
  en = "psmj6sh",
  tn = "t1k6az3b",
  rn = "h161tq0v",
  nn = "i1jzaapq",
  on = "ij4gv2m",
  an = "c1ao5210";
export {
  Dt as a,
  jt as b,
  Mt as c,
  Kt as d,
  Bt as e,
  Qt as f,
  Lt as g,
  Yt as h,
  Ht as i,
  Xt as j,
  ot as k,
  er as l,
  tr as m,
  rr as n,
  nr as o,
  or as p,
  ir as q,
  ar as r,
  sr as s,
  cr as t,
  lr as u,
  pr as v,
  ur as w,
  dr as x,
  zr as y,
  Kr as z,
  Br as A,
  Qr as B,
  Xr as C,
  en as D,
  tn as E,
  rn as F,
  nn as G,
  on as H,
  an as I,
  Ke as J,
  Oe as K,
  Jr as L,
  Ar as M,
  F as N,
  zt as O,
};
//# sourceMappingURL=chunk-W2KJTETR.mjs.map
