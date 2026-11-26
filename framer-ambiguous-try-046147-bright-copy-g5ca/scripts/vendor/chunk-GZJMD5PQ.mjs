import { a as ye, b as he } from "chunk-V5N5MYOO.mjs";
import { b as ge } from "chunk-LJSYJA5R.mjs";
import { a as He } from "chunk-VD6KMVU6.mjs";
import { a as le } from "chunk-QFU6OGL3.mjs";
import { a as se } from "chunk-MSHSIAEI.mjs";
import { c as k, d as E } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import { a as ie } from "chunk-SWYZG2NI.mjs";
import { b as F, c as pe } from "chunk-4JY5UMT2.mjs";
import { e as Y } from "chunk-WLHSDIGQ.mjs";
var z = Y(ie());
var T = Y(ie());
var ve = "data-virtual-list-sticky-header-height-reduction",
  Le = "irtxxgq",
  ke = "s191yxf0",
  xe = "s1d1wl27",
  Ie = "s13qpy0w",
  Te = "s1fpejck",
  Se = "iu3so1d",
  Re = "m1jr2vih",
  we = "m1k9rett";
var H = Y(ie());
function Ve(s) {
  let {
      enabled: e,
      containerRef: t,
      count: l,
      keyForItem: r,
      measurementKeyForItem: i,
      estimatedHeight: u,
      followEnd: f,
      onScrollCorrection: a,
      marginTopForItem: y,
      marginBottomForItem: h,
    } = s,
    [v] = (0, H.useState)(() => new ye()),
    g = s.cache ?? v,
    c = (0, H.useMemo)(() => new he(g), [g]),
    L = (0, H.useRef)(new Map()),
    x = (0, H.useRef)(),
    w = (0, H.useRef)(),
    W = (0, H.useRef)(!1),
    S = (0, H.useRef)(),
    P = (0, H.useRef)(!0),
    N = (0, H.useRef)(),
    [, b] = (0, H.useReducer)((n) => n + 1, 0),
    [p, $] = (0, H.useState)({ width: g.width, height: 600 });
  e &&
    c.sync({
      count: l,
      keyForItem: r,
      measurementKeyForItem: i,
      estimatedHeight: u,
      width: p.width,
      marginTopForItem: y,
      marginBottomForItem: h,
    });
  let [q, Q] = (0, H.useState)(() =>
      e ? c.range(c.anchorScrollTop(p.height, f), p.height) : { start: 0, end: -1 }
    ),
    [j, J] = (0, H.useState)([]),
    Z = (0, H.useCallback)(() => {
      let n = window.getSelection(),
        m =
          n &&
          !n.isCollapsed &&
          (t.current?.contains(n.anchorNode) || t.current?.contains(n.focusNode)),
        d = [];
      for (let [R, A] of L.current) {
        let O = !1;
        if (m) {
          for (let K = 0; K < n.rangeCount; K++)
            if (n.getRangeAt(K).intersectsNode(A)) {
              O = !0;
              break;
            }
        }
        (O ||
          A.contains(document.activeElement) ||
          A.querySelector('[data-virtual-list-keep-mounted="true"]')) &&
          d.push(R);
      }
      J((R) => (R.length === d.length && R.every((A, O) => A === d[O]) ? R : d));
    }, [t]),
    I = (0, H.useCallback)(
      (n = !1) => {
        ((W.current ||= n),
          w.current === void 0 &&
            (w.current = requestAnimationFrame(() => {
              w.current = void 0;
              let m = t.current;
              m &&
                (Z(),
                Q((d) => c.range(m.scrollTop, m.clientHeight || p.height, d)),
                W.current && ((W.current = !1), b()));
            })));
      },
      [t, c, Z, p.height]
    ),
    _ = (0, H.useCallback)((n, m) => {
      let d = L.current.get(n);
      (d && x.current?.unobserve(d),
        m ? (L.current.set(n, m), x.current?.observe(m)) : L.current.delete(n));
    }, []);
  ((0, H.useLayoutEffect)(() => {
    let n = t.current;
    if (!e || !n) return;
    let m = n.clientWidth,
      d = n.clientHeight || p.height;
    if (m !== p.width || d !== p.height) {
      $({ width: m, height: d });
      return;
    }
    let R = new Map();
    for (let [B, te] of L.current) R.set(B, te.getBoundingClientRect().height);
    if (c.measure(R)) {
      ((P.current = !0), b());
      return;
    }
    let A = c.anchorItemTop() !== N.current,
      O = c.anchorScrollTop(d, f);
    ((f || P.current || A) &&
      Math.abs(n.scrollTop - O) > 0.5 &&
      ((S.current = O), (n.scrollTop = O), a?.(n.scrollTop)),
      (P.current = !1),
      c.saveAnchor(n.scrollTop),
      (N.current = c.anchorItemTop()));
    let K = c.range(n.scrollTop, d, q);
    K !== q && Q(K);
  }),
    (0, H.useEffect)(() => {
      let n = t.current;
      if (!e || !n) return;
      let m = new ResizeObserver(() => I(!0));
      ((x.current = m), m.observe(n));
      for (let R of L.current.values()) m.observe(R);
      let d = new AbortController();
      return (
        document.addEventListener("selectionchange", () => I(), { signal: d.signal }),
        n.addEventListener("focusin", () => I(), { signal: d.signal, capture: !0 }),
        n.addEventListener("focusout", () => I(), { signal: d.signal, capture: !0 }),
        () => {
          (m.disconnect(),
            (x.current = void 0),
            d.abort(),
            w.current !== void 0 && cancelAnimationFrame(w.current),
            (w.current = void 0));
        }
      );
    }, [e, t, I]));
  let U = (0, H.useCallback)(() => {
      let n = t.current;
      if (n) {
        if (S.current !== void 0 && Math.abs(n.scrollTop - S.current) < 1) {
          S.current = void 0;
          return;
        }
        ((S.current = void 0), c.saveAnchor(n.scrollTop), (N.current = c.anchorItemTop()), I());
      }
    }, [t, c, I]),
    ee = [];
  for (let n of j) {
    let m = c.indexOf(n);
    m !== void 0 && ee.push(m);
  }
  return {
    layout: c,
    range: q,
    pinnedIndices: ee,
    viewportHeight: p.height,
    registerRow: _,
    handleScroll: U,
  };
}
function Ce(s) {
  for (let e = s.parentElement; e; e = e.parentElement) {
    if (e === document.scrollingElement) return e;
    let { overflowY: t } = getComputedStyle(e);
    if (t === "auto" || t === "scroll") return e;
  }
  return document.scrollingElement instanceof HTMLElement ? document.scrollingElement : null;
}
var V = Y(re()),
  Me = 5,
  Ee = (s) => s;
function Fe(s) {
  let {
      count: e,
      className: t,
      children: l,
      heightForItem: r,
      estimatedItemHeight: i = 40,
      cache: u,
      followEnd: f = !1,
      onScrollCorrection: a,
      measurementKeyForItem: y,
      onScroll: h,
      marginTopForItem: v,
      marginBottomForItem: g,
      keyForItem: c,
      scrollToIndex: L,
      scrollToId: x,
      showScrollbar: w,
      scrollRef: W,
      stickyHeaderLevelForItem: S,
      draggedItemIndex: P,
      focusedItemIndex: N,
      scrollToAlignment: b = "nearest-edge",
      scrollPaddingTop: p = 0,
      scrollPaddingBottom: $ = 0,
      stickyHeaderTopOffset: q = 0,
      direction: Q = "vertical",
      contentSizer: j,
      scrollsWithParent: J = !1,
      ...Z
    } = s,
    I = T.default.useRef(null),
    _ = T.default.useRef(null),
    U = T.default.useRef(void 0),
    ee = He(W, I),
    n = r === "auto";
  F(!(n && J), "Lists scrolled by their parent need known item heights");
  let m = Ve({
      enabled: n,
      containerRef: I,
      count: e,
      keyForItem: c ?? Ee,
      measurementKeyForItem: y ?? c ?? Ee,
      estimatedHeight: i,
      cache: u,
      followEnd: f,
      onScrollCorrection: a,
      marginTopForItem: v,
      marginBottomForItem: g,
    }),
    d = r === "auto" ? (o) => m.layout.height(o) : r,
    { topOffsetForItems: R, totalHeight: A } = T.default.useMemo(
      () => (r === "auto" ? { topOffsetForItems: se(), totalHeight: 0 } : je(e, r, v, g)),
      [e, r, v, g]
    ),
    O = n ? m.layout.totalHeight : A,
    K = n ? m.viewportHeight : void 0,
    B = e - 1,
    [te, ae] = T.default.useState(() => ({ start: 0, end: Math.min(10, B) })),
    X = n ? m.range.start : Math.max(0, Math.min(B, te.start - Me)),
    G = n ? Math.min(B, m.range.end) : Math.min(B, te.end + Me);
  T.default.useLayoutEffect(() => {
    if (n) return;
    let o = J && I.current ? Ce(I.current) : null;
    _.current = o;
    let C = o === document.scrollingElement ? window : o,
      M = () => {
        Pe(e, d, v, g, I, o, ae);
      };
    return (
      M(),
      window.addEventListener("resize", M),
      C?.addEventListener("scroll", M, { passive: !0 }),
      () => {
        (window.removeEventListener("resize", M), C?.removeEventListener("scroll", M));
      }
    );
  }, [e, d, v, g, n, J]);
  let Be = T.default.useCallback(
      (o) => {
        if (n) {
          (m.handleScroll(), h?.(o));
          return;
        }
        Pe(e, d, v, g, I, _.current, ae);
      },
      [e, d, v, g, n, m.handleScroll, h]
    ),
    oe = [],
    me = T.default.useMemo(() => Ge(S, d, X, G, B), [S, d, X, G, B]);
  T.default.useLayoutEffect(() => {
    if (x === void 0) U.current = void 0;
    else if (U.current === x) return;
    if (!k(L) || L === -1 || L >= e) return;
    let o = I.current;
    if (!o) return;
    let { scrollTop: C, offsetHeight: M } = o,
      D = Xe({
        totalItemCount: e,
        heightForItem: d,
        itemOffset: n ? m.layout.offset(L) : void 0,
        containerHeight: M,
        marginTopForItem: v,
        scrollToAlignment: b,
        index: L,
        stickyHeaderLevelForItem: S,
        scrollPaddingTop: p,
        scrollPaddingBottom: $,
        scrollTop: C,
      });
    ((U.current = x), n && m.layout.saveAnchor(D), C !== D && (o.scrollTop = D));
  }, [x, L]);
  let ne = (o) => {
    let C = n ? m.layout.offset(o) : ce(o, R, d),
      M = c ? c(o) : o,
      D = E(d) ? d(o) : d;
    oe.push(
      (0, V.jsx)(
        Ye,
        { itemKey: M, y: C, height: D, register: n ? m.registerRow : void 0, children: l(o, K) },
        M
      )
    );
  };
  k(P) && !ue(P, S) && ne(P);
  let de = new Set(n ? m.pinnedIndices : []);
  k(N) && de.add(N);
  let fe = Array.from(de)
    .filter((o) => o >= 0 && o < e && o !== P && (o < X || o > G) && !ue(o, S))
    .sort((o, C) => o - C);
  for (let o of fe) o < X && ne(o);
  for (let o = X; o <= G; o++) ue(o, S) || (o !== P && ne(o));
  for (let o of fe) o > G && ne(o);
  if (me)
    for (let o of me) {
      let C = n ? m.layout.offset(o.start) : ce(o.start, R, d),
        M = n ? m.layout.offset(o.end + 1) : ce(o.end + 1, R, d),
        D = c ? c(o.start) : o.start,
        De = E(d) ? d(o.start) : d,
        be = l(o.start, K);
      oe.push(
        (0, V.jsx)(
          ze,
          {
            headerRangeStartY: C,
            headerHeight: De,
            headerTopOffset: o.top + q,
            headerRangeHeight: M - C,
            children: n
              ? (0, V.jsx)(Oe, { itemKey: D, register: m.registerRow, children: be })
              : be,
          },
          D
        )
      );
    }
  return (0, V.jsx)(ge, {
    ...Z,
    ref: ee,
    direction: Q,
    onScroll: Be,
    showScrollbar: w,
    className: le(t, Ie, n && we),
    children: (0, V.jsxs)("div", {
      className: le(Te, j != null && Se),
      style: { height: O },
      children: [j, oe],
    }),
  });
}
function ue(s, e) {
  return e ? e(s) !== "off" : !1;
}
var Ye = T.default.memo(function ({ itemKey: e, register: t, y: l, height: r, children: i }) {
  return (0, V.jsx)("div", {
    className: Le,
    style: { top: l, height: r },
    children: t ? (0, V.jsx)(Oe, { itemKey: e, register: t, children: i }) : i,
  });
});
function Oe({ itemKey: s, register: e, children: t }) {
  let l = T.default.useCallback((r) => e(s, r), [e, s]);
  return (0, V.jsx)("div", { ref: l, className: Re, children: t });
}
var Ae = "data-virtual-list-sticky-header";
function mt(s) {
  let e = s.current;
  if (!e) return 0;
  let t = 0,
    l = e.querySelectorAll(`[${Ae}]`);
  for (let r of l) {
    if (!(r instanceof HTMLElement)) continue;
    let i = r.style.getPropertyValue("height"),
      u = parseFloat(i);
    if (!k(u)) continue;
    let f = r.style.top,
      a = parseFloat(f);
    if (!k(a)) continue;
    let y = r.querySelector(`[${ve}]`),
      h = 0;
    if (y instanceof HTMLElement) {
      let v = y.dataset.virtualListStickyHeaderHeightReduction;
      if (v) {
        let g = parseFloat(v);
        k(g) && (h = g);
      }
    }
    t = Math.max(t, a + u - h);
  }
  return t;
}
var Ke = T.default.createContext(null);
Ke.displayName = "VirtualListStickyHeaderContext";
var ze = T.default.memo(function ({
  headerRangeStartY: e,
  headerRangeHeight: t,
  headerHeight: l,
  headerTopOffset: r,
  children: i,
}) {
  let u = T.default.useMemo(
    () => ({ headerRangeStartY: e, headerRangeHeight: t, headerHeight: l, headerTopOffset: r }),
    [e, t, l, r]
  );
  return (0, V.jsx)("div", {
    className: ke,
    style: { top: e, height: t },
    children: (0, V.jsx)("div", {
      [Ae]: "true",
      className: xe,
      style: { height: l, top: r },
      children: (0, V.jsx)(Ke.Provider, { value: u, children: i }),
    }),
  });
});
function ce(s, e, t) {
  let l = e[s];
  if (k(l)) return l;
  if (e.length === 0 && k(t)) return s * t;
  let r = s - 1,
    i = e[r];
  if (!k(i)) return 0;
  let u = E(t) ? t(r) : t;
  return i + u;
}
function Pe(s, e, t, l, r, i, u) {
  let f = r.current;
  if (!f) return;
  let { scrollTop: a, containerHeight: y } = i
      ? $e(f, i)
      : { scrollTop: f.scrollTop, containerHeight: f.offsetHeight },
    { start: h, end: v } = qe(s, e, t, l, a, y);
  u((g) => (g.start === h && g.end === v ? g : { start: h, end: v }));
}
function $e(s, e) {
  return {
    scrollTop:
      (e === document.scrollingElement ? 0 : e.getBoundingClientRect().top) -
      s.getBoundingClientRect().top,
    containerHeight: e.clientHeight,
  };
}
function qe(s, e, t, l, r, i) {
  let u = r,
    f = u + i;
  if (k(e) && !t && !l) {
    if (s === 0 || e <= 0) return { start: 0, end: 0 };
    let c = s - 1,
      L = Math.min(c, Math.max(0, Math.ceil(u / e))),
      x = Math.min(c, Math.max(L, Math.ceil(f / e) - 1));
    return { start: L, end: x };
  }
  let a = null,
    y = null,
    h = 0;
  for (
    let c = 0;
    c < s && (t && (h += t(c)), a === null && h >= u && ((a = c), (y = c)), !(h >= f));
    c++
  )
    (a !== null && (y = c), (h += E(e) ? e(c) : e), l && (h += l(c)));
  return { start: a || 0, end: y || a || 0 };
}
function je(s, e, t, l) {
  if (k(e) && !t && !l) return { topOffsetForItems: se(), totalHeight: s * e };
  let r = [],
    i = 0;
  for (let u = 0; u < s; u++) {
    (t && (i += t(u)), r.push(i), l && (i += l(u)));
    let f = E(e) ? e(u) : e;
    i += f;
  }
  return { topOffsetForItems: r, totalHeight: i };
}
function Je(s, e, t) {
  if (!t) return 0;
  let l = t(s);
  if (l === "primary") return 0;
  let r = null,
    i = l === "secondary" ? 0 : null;
  for (let u = s - 1; u >= 0; u--) {
    let f = t(u);
    if (f === "off") continue;
    let a = k(e) ? e : e(u);
    if (f === "primary") {
      r = a;
      break;
    } else if (f === "secondary") {
      if (k(i)) continue;
      i = a;
    } else pe(f);
  }
  return (r ?? 0) + (i ?? 0);
}
function Ue(s, e, t, l) {
  if (k(t) && !l) return Math.min(s, e) * t;
  let r = 0;
  for (let i = 0; i < e; i++) {
    if ((l && (r += l(i)), s === i)) return r;
    r += E(t) ? t(i) : t;
  }
  return r;
}
function Xe({
  index: s,
  scrollTop: e,
  totalItemCount: t,
  containerHeight: l,
  heightForItem: r,
  itemOffset: i,
  marginTopForItem: u,
  scrollToAlignment: f,
  scrollPaddingTop: a,
  scrollPaddingBottom: y,
  stickyHeaderLevelForItem: h,
}) {
  let g = i ?? Ue(s, t, r, u),
    c = E(r) ? r(s) : r,
    L = Je(s, r, h);
  if (f === "center") return g - l / 2 + c / 2;
  if (g - L < e) return g - L - a;
  let x = e + l,
    w = g + c + y;
  return w > x ? w - l : e;
}
function Ge(s, e, t, l, r) {
  if (!s || r < 0) return;
  let i = [],
    u = t,
    f = 0,
    a = null;
  for (; u >= 0;) {
    let h = s(u);
    if (h === "primary") {
      f = k(e) ? e : e(u);
      break;
    }
    (h === "secondary" && !k(a) && (a = u), (u = u - 1));
  }
  let y = t + 1;
  for (; y <= r;) {
    let h = s(y);
    if (h === "primary") {
      if (
        (k(a) && a >= 0 && (i.push({ start: a, end: y - 1, top: f }), (a = null)),
        u >= 0 && i.push({ start: u, end: y - 1, top: 0 }),
        y > l)
      )
        return i;
      u = y;
    }
    (h === "secondary" &&
      (k(a) && a >= 0 && i.push({ start: a, end: y - 1, top: f }), y > l ? (a = null) : (a = y)),
      y++);
  }
  return (
    k(a) && a >= 0 && i.push({ start: a, end: y - 1, top: f }),
    u >= 0 && i.push({ start: u, end: y - 1, top: 0 }),
    i
  );
}
var Ne = Y(re());
function yt(s) {
  let {
      items: e,
      children: t,
      heightForItem: l,
      measurementKeyForItem: r,
      marginTopForItem: i,
      marginBottomForItem: u,
      keyForItem: f,
      scrollToIndex: a,
      scrollToId: y,
      showScrollbar: h,
      stickyHeaderLevelForItem: v,
      scrollToAlignment: g,
      scrollPaddingBottom: c,
      ...L
    } = s,
    x = z.default.useCallback(
      (b) => {
        F(typeof l == "function");
        let p = e[b];
        return (F(p, `heightForItem: Item at index ${b} not found`), l(p, b));
      },
      [l, e]
    ),
    w = z.default.useCallback(
      (b) => {
        let p = e[b];
        return (
          F(p !== void 0, `measurementKeyForItem: Item at index ${b} not found`),
          r ? r(p, b) : p
        );
      },
      [r, e]
    ),
    W = z.default.useCallback(
      (b) => {
        if (!E(i)) return 0;
        let p = e[b];
        return (F(p, `marginTopForItem: Item at index ${b} not found`), i(p, b));
      },
      [i, e]
    ),
    S = z.default.useCallback(
      (b) => {
        if (!E(u)) return 0;
        let p = e[b];
        return (F(p, `marginBottomForItem: Item at index ${b} not found`), u(p, b));
      },
      [u, e]
    ),
    P = z.default.useCallback(
      (b) => {
        let p = e[b];
        return (F(p, `keyForItem: Item at index ${b} not found`), f(p, b));
      },
      [f, e]
    ),
    N = z.default.useCallback(
      (b) => {
        if (!v) return "off";
        let p = e[b];
        return (F(p, `stickyHeaderLevelForItem: Item at index ${b} not found`), v(p, b));
      },
      [v, e]
    );
  return (0, Ne.jsx)(Fe, {
    count: e.length,
    keyForItem: P,
    heightForItem: E(l) ? x : l,
    measurementKeyForItem: w,
    marginTopForItem: i ? W : void 0,
    marginBottomForItem: u ? S : void 0,
    scrollToIndex: a,
    scrollToId: y,
    scrollToAlignment: g,
    scrollPaddingBottom: c,
    showScrollbar: h,
    stickyHeaderLevelForItem: v ? N : void 0,
    ...L,
    children: (b, p) => {
      let $ = e[b];
      return (
        F($ !== void 0, `itemContent: Item at index ${b} not found`),
        t({ item: $, index: b, viewportHeight: p })
      );
    },
  });
}
export { Ce as a, Fe as b, mt as c, yt as d };
//# sourceMappingURL=chunk-GZJMD5PQ.mjs.map
