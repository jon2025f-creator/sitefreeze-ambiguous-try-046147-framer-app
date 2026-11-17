import { a as pe, b as ye } from "chunk-V5N5MYOO.mjs";
import { b as he } from "chunk-LJSYJA5R.mjs";
import { a as ge } from "chunk-VD6KMVU6.mjs";
import { a as se } from "chunk-QFU6OGL3.mjs";
import { a as ie } from "chunk-MSHSIAEI.mjs";
import { c as v, d as C } from "chunk-AYNVEX5D.mjs";
import { a as ne } from "chunk-2FCXHKEL.mjs";
import { a as oe } from "chunk-SWYZG2NI.mjs";
import { b as P, c as be } from "chunk-4JY5UMT2.mjs";
import { e as Y } from "chunk-WLHSDIGQ.mjs";
var z = Y(oe());
var I = Y(oe());
var He = "data-virtual-list-sticky-header-height-reduction",
  Le = "irtxxgq",
  ve = "s191yxf0",
  ke = "s1d1wl27",
  xe = "s13qpy0w",
  Ie = "s1fpejck",
  Te = "iu3so1d",
  Se = "m1jr2vih",
  Re = "m1k9rett";
var g = Y(oe());
function we(s) {
  let {
      enabled: e,
      containerRef: t,
      count: l,
      keyForItem: r,
      measurementKeyForItem: i,
      estimatedHeight: u,
      followEnd: b,
      marginTopForItem: m,
      marginBottomForItem: y,
    } = s,
    [p] = (0, g.useState)(() => new pe()),
    H = s.cache ?? p,
    a = (0, g.useMemo)(() => new ye(H), [H]),
    h = (0, g.useRef)(new Map()),
    k = (0, g.useRef)(),
    T = (0, g.useRef)(),
    F = (0, g.useRef)(!1),
    S = (0, g.useRef)(),
    E = (0, g.useRef)(!0),
    N = (0, g.useRef)(),
    [, $] = (0, g.useReducer)((n) => n + 1, 0),
    [c, L] = (0, g.useState)({ width: H.width, height: 600 });
  e &&
    a.sync({
      count: l,
      keyForItem: r,
      measurementKeyForItem: i,
      estimatedHeight: u,
      width: c.width,
      marginTopForItem: m,
      marginBottomForItem: y,
    });
  let [B, G] = (0, g.useState)(() =>
      e ? a.range(a.anchorScrollTop(c.height, b), c.height) : { start: 0, end: -1 }
    ),
    [q, j] = (0, g.useState)([]),
    Q = (0, g.useCallback)(() => {
      let n = window.getSelection(),
        d =
          n &&
          !n.isCollapsed &&
          (t.current?.contains(n.anchorNode) || t.current?.contains(n.focusNode)),
        f = [];
      for (let [R, A] of h.current) {
        let O = !1;
        if (d) {
          for (let K = 0; K < n.rangeCount; K++)
            if (n.getRangeAt(K).intersectsNode(A)) {
              O = !0;
              break;
            }
        }
        (O ||
          A.contains(document.activeElement) ||
          A.querySelector('[data-virtual-list-keep-mounted="true"]')) &&
          f.push(R);
      }
      j((R) => (R.length === f.length && R.every((A, O) => A === f[O]) ? R : f));
    }, [t]),
    x = (0, g.useCallback)(
      (n = !1) => {
        ((F.current ||= n),
          T.current === void 0 &&
            (T.current = requestAnimationFrame(() => {
              T.current = void 0;
              let d = t.current;
              d &&
                (Q(),
                G((f) => a.range(d.scrollTop, d.clientHeight || c.height, f)),
                F.current && ((F.current = !1), $()));
            })));
      },
      [t, a, Q, c.height]
    ),
    Z = (0, g.useCallback)((n, d) => {
      let f = h.current.get(n);
      (f && k.current?.unobserve(f),
        d ? (h.current.set(n, d), k.current?.observe(d)) : h.current.delete(n));
    }, []);
  ((0, g.useLayoutEffect)(() => {
    let n = t.current;
    if (!e || !n) return;
    let d = n.clientWidth,
      f = n.clientHeight || c.height;
    if (d !== c.width || f !== c.height) {
      L({ width: d, height: f });
      return;
    }
    let R = new Map();
    for (let [D, ee] of h.current) R.set(D, ee.getBoundingClientRect().height);
    if (a.measure(R)) {
      ((E.current = !0), $());
      return;
    }
    let A = a.anchorItemTop() !== N.current,
      O = a.anchorScrollTop(f, b);
    ((b || E.current || A) &&
      Math.abs(n.scrollTop - O) > 0.5 &&
      ((S.current = O), (n.scrollTop = O)),
      (E.current = !1),
      a.saveAnchor(n.scrollTop),
      (N.current = a.anchorItemTop()));
    let K = a.range(n.scrollTop, f, B);
    K !== B && G(K);
  }),
    (0, g.useEffect)(() => {
      let n = t.current;
      if (!e || !n) return;
      let d = new ResizeObserver(() => x(!0));
      ((k.current = d), d.observe(n));
      for (let R of h.current.values()) d.observe(R);
      let f = new AbortController();
      return (
        document.addEventListener("selectionchange", () => x(), { signal: f.signal }),
        n.addEventListener("focusin", () => x(), { signal: f.signal, capture: !0 }),
        n.addEventListener("focusout", () => x(), { signal: f.signal, capture: !0 }),
        () => {
          (d.disconnect(),
            (k.current = void 0),
            f.abort(),
            T.current !== void 0 && cancelAnimationFrame(T.current),
            (T.current = void 0));
        }
      );
    }, [e, t, x]));
  let J = (0, g.useCallback)(() => {
      let n = t.current;
      if (n) {
        if (S.current !== void 0 && Math.abs(n.scrollTop - S.current) < 1) {
          S.current = void 0;
          return;
        }
        ((S.current = void 0), a.saveAnchor(n.scrollTop), (N.current = a.anchorItemTop()), x());
      }
    }, [t, a, x]),
    _ = [];
  for (let n of q) {
    let d = a.indexOf(n);
    d !== void 0 && _.push(d);
  }
  return {
    layout: a,
    range: B,
    pinnedIndices: _,
    viewportHeight: c.height,
    registerRow: Z,
    handleScroll: J,
  };
}
function Ve(s) {
  for (let e = s.parentElement; e; e = e.parentElement) {
    if (e === document.scrollingElement) return e;
    let { overflowY: t } = getComputedStyle(e);
    if (t === "auto" || t === "scroll") return e;
  }
  return document.scrollingElement instanceof HTMLElement ? document.scrollingElement : null;
}
var w = Y(ne()),
  Me = 5,
  Ce = (s) => s;
function Pe(s) {
  let {
      count: e,
      className: t,
      children: l,
      heightForItem: r,
      estimatedItemHeight: i = 40,
      cache: u,
      followEnd: b = !1,
      measurementKeyForItem: m,
      onScroll: y,
      marginTopForItem: p,
      marginBottomForItem: H,
      keyForItem: a,
      scrollToIndex: h,
      scrollToId: k,
      showScrollbar: T,
      scrollRef: F,
      stickyHeaderLevelForItem: S,
      draggedItemIndex: E,
      focusedItemIndex: N,
      scrollToAlignment: $ = "nearest-edge",
      scrollPaddingTop: c = 0,
      scrollPaddingBottom: L = 0,
      stickyHeaderTopOffset: B = 0,
      direction: G = "vertical",
      contentSizer: q,
      scrollsWithParent: j = !1,
      ...Q
    } = s,
    x = I.default.useRef(null),
    Z = I.default.useRef(null),
    J = I.default.useRef(void 0),
    _ = ge(F, x),
    n = r === "auto";
  P(!(n && j), "Lists scrolled by their parent need known item heights");
  let d = we({
      enabled: n,
      containerRef: x,
      count: e,
      keyForItem: a ?? Ce,
      measurementKeyForItem: m ?? a ?? Ce,
      estimatedHeight: i,
      cache: u,
      followEnd: b,
      marginTopForItem: p,
      marginBottomForItem: H,
    }),
    f = r === "auto" ? (o) => d.layout.height(o) : r,
    { topOffsetForItems: R, totalHeight: A } = I.default.useMemo(
      () => (r === "auto" ? { topOffsetForItems: ie(), totalHeight: 0 } : qe(e, r, p, H)),
      [e, r, p, H]
    ),
    O = n ? d.layout.totalHeight : A,
    K = n ? d.viewportHeight : void 0,
    D = e - 1,
    [ee, ce] = I.default.useState(() => ({ start: 0, end: Math.min(10, D) })),
    U = n ? d.range.start : Math.max(0, Math.min(D, ee.start - Me)),
    X = n ? Math.min(D, d.range.end) : Math.min(D, ee.end + Me);
  I.default.useLayoutEffect(() => {
    if (n) return;
    let o = j && x.current ? Ve(x.current) : null;
    Z.current = o;
    let V = o === document.scrollingElement ? window : o,
      M = () => {
        Ee(e, f, p, H, x, o, ce);
      };
    return (
      M(),
      window.addEventListener("resize", M),
      V?.addEventListener("scroll", M, { passive: !0 }),
      () => {
        (window.removeEventListener("resize", M), V?.removeEventListener("scroll", M));
      }
    );
  }, [e, f, p, H, n, j]);
  let Ne = I.default.useCallback(
      (o) => {
        if (n) {
          (d.handleScroll(), y?.(o));
          return;
        }
        Ee(e, f, p, H, x, Z.current, ce);
      },
      [e, f, p, H, n, d.handleScroll, y]
    ),
    re = [],
    ae = I.default.useMemo(() => Xe(S, f, U, X, D), [S, f, U, X, D]);
  I.default.useLayoutEffect(() => {
    if (k === void 0) J.current = void 0;
    else if (J.current === k) return;
    if (!v(h) || h === -1 || h >= e) return;
    let o = x.current;
    if (!o) return;
    let { scrollTop: V, offsetHeight: M } = o,
      W = Ue({
        totalItemCount: e,
        heightForItem: f,
        itemOffset: n ? d.layout.offset(h) : void 0,
        containerHeight: M,
        marginTopForItem: p,
        scrollToAlignment: $,
        index: h,
        stickyHeaderLevelForItem: S,
        scrollPaddingTop: c,
        scrollPaddingBottom: L,
        scrollTop: V,
      });
    ((J.current = k), n && d.layout.saveAnchor(W), V !== W && (o.scrollTop = W));
  }, [k, h]);
  let te = (o) => {
    let V = n ? d.layout.offset(o) : ue(o, R, f),
      M = a ? a(o) : o,
      W = C(f) ? f(o) : f;
    re.push(
      (0, w.jsx)(
        We,
        { itemKey: M, y: V, height: W, register: n ? d.registerRow : void 0, children: l(o, K) },
        M
      )
    );
  };
  v(E) && !le(E, S) && te(E);
  let me = new Set(n ? d.pinnedIndices : []);
  v(N) && me.add(N);
  let de = Array.from(me)
    .filter((o) => o >= 0 && o < e && o !== E && (o < U || o > X) && !le(o, S))
    .sort((o, V) => o - V);
  for (let o of de) o < U && te(o);
  for (let o = U; o <= X; o++) le(o, S) || (o !== E && te(o));
  for (let o of de) o > X && te(o);
  if (ae)
    for (let o of ae) {
      let V = n ? d.layout.offset(o.start) : ue(o.start, R, f),
        M = n ? d.layout.offset(o.end + 1) : ue(o.end + 1, R, f),
        W = a ? a(o.start) : o.start,
        Be = C(f) ? f(o.start) : f,
        fe = l(o.start, K);
      re.push(
        (0, w.jsx)(
          Ye,
          {
            headerRangeStartY: V,
            headerHeight: Be,
            headerTopOffset: o.top + B,
            headerRangeHeight: M - V,
            children: n
              ? (0, w.jsx)(Fe, { itemKey: W, register: d.registerRow, children: fe })
              : fe,
          },
          W
        )
      );
    }
  return (0, w.jsx)(he, {
    ...Q,
    ref: _,
    direction: G,
    onScroll: Ne,
    showScrollbar: T,
    className: se(t, xe, n && Re),
    children: (0, w.jsxs)("div", {
      className: se(Ie, q != null && Te),
      style: { height: O },
      children: [q, re],
    }),
  });
}
function le(s, e) {
  return e ? e(s) !== "off" : !1;
}
var We = I.default.memo(function ({ itemKey: e, register: t, y: l, height: r, children: i }) {
  return (0, w.jsx)("div", {
    className: Le,
    style: { top: l, height: r },
    children: t ? (0, w.jsx)(Fe, { itemKey: e, register: t, children: i }) : i,
  });
});
function Fe({ itemKey: s, register: e, children: t }) {
  let l = I.default.useCallback((r) => e(s, r), [e, s]);
  return (0, w.jsx)("div", { ref: l, className: Se, children: t });
}
var Oe = "data-virtual-list-sticky-header";
function at(s) {
  let e = s.current;
  if (!e) return 0;
  let t = 0,
    l = e.querySelectorAll(`[${Oe}]`);
  for (let r of l) {
    if (!(r instanceof HTMLElement)) continue;
    let i = r.style.getPropertyValue("height"),
      u = parseFloat(i);
    if (!v(u)) continue;
    let b = r.style.top,
      m = parseFloat(b);
    if (!v(m)) continue;
    let y = r.querySelector(`[${He}]`),
      p = 0;
    if (y instanceof HTMLElement) {
      let H = y.dataset.virtualListStickyHeaderHeightReduction;
      if (H) {
        let a = parseFloat(H);
        v(a) && (p = a);
      }
    }
    t = Math.max(t, m + u - p);
  }
  return t;
}
var Ae = I.default.createContext(null);
Ae.displayName = "VirtualListStickyHeaderContext";
var Ye = I.default.memo(function ({
  headerRangeStartY: e,
  headerRangeHeight: t,
  headerHeight: l,
  headerTopOffset: r,
  children: i,
}) {
  let u = I.default.useMemo(
    () => ({ headerRangeStartY: e, headerRangeHeight: t, headerHeight: l, headerTopOffset: r }),
    [e, t, l, r]
  );
  return (0, w.jsx)("div", {
    className: ve,
    style: { top: e, height: t },
    children: (0, w.jsx)("div", {
      [Oe]: "true",
      className: ke,
      style: { height: l, top: r },
      children: (0, w.jsx)(Ae.Provider, { value: u, children: i }),
    }),
  });
});
function ue(s, e, t) {
  let l = e[s];
  if (v(l)) return l;
  if (e.length === 0 && v(t)) return s * t;
  let r = s - 1,
    i = e[r];
  if (!v(i)) return 0;
  let u = C(t) ? t(r) : t;
  return i + u;
}
function Ee(s, e, t, l, r, i, u) {
  let b = r.current;
  if (!b) return;
  let { scrollTop: m, containerHeight: y } = i
      ? ze(b, i)
      : { scrollTop: b.scrollTop, containerHeight: b.offsetHeight },
    { start: p, end: H } = $e(s, e, t, l, m, y);
  u((a) => (a.start === p && a.end === H ? a : { start: p, end: H }));
}
function ze(s, e) {
  return {
    scrollTop:
      (e === document.scrollingElement ? 0 : e.getBoundingClientRect().top) -
      s.getBoundingClientRect().top,
    containerHeight: e.clientHeight,
  };
}
function $e(s, e, t, l, r, i) {
  let u = r,
    b = u + i;
  if (v(e) && !t && !l) {
    if (s === 0 || e <= 0) return { start: 0, end: 0 };
    let h = s - 1,
      k = Math.min(h, Math.max(0, Math.ceil(u / e))),
      T = Math.min(h, Math.max(k, Math.ceil(b / e) - 1));
    return { start: k, end: T };
  }
  let m = null,
    y = null,
    p = 0;
  for (
    let h = 0;
    h < s && (t && (p += t(h)), m === null && p >= u && ((m = h), (y = h)), !(p >= b));
    h++
  )
    (m !== null && (y = h), (p += C(e) ? e(h) : e), l && (p += l(h)));
  return { start: m || 0, end: y || m || 0 };
}
function qe(s, e, t, l) {
  if (v(e) && !t && !l) return { topOffsetForItems: ie(), totalHeight: s * e };
  let r = [],
    i = 0;
  for (let u = 0; u < s; u++) {
    (t && (i += t(u)), r.push(i), l && (i += l(u)));
    let b = C(e) ? e(u) : e;
    i += b;
  }
  return { topOffsetForItems: r, totalHeight: i };
}
function je(s, e, t) {
  if (!t) return 0;
  let l = t(s);
  if (l === "primary") return 0;
  let r = null,
    i = l === "secondary" ? 0 : null;
  for (let u = s - 1; u >= 0; u--) {
    let b = t(u);
    if (b === "off") continue;
    let m = v(e) ? e : e(u);
    if (b === "primary") {
      r = m;
      break;
    } else if (b === "secondary") {
      if (v(i)) continue;
      i = m;
    } else be(b);
  }
  return (r ?? 0) + (i ?? 0);
}
function Je(s, e, t, l) {
  if (v(t) && !l) return Math.min(s, e) * t;
  let r = 0;
  for (let i = 0; i < e; i++) {
    if ((l && (r += l(i)), s === i)) return r;
    r += C(t) ? t(i) : t;
  }
  return r;
}
function Ue({
  index: s,
  scrollTop: e,
  totalItemCount: t,
  containerHeight: l,
  heightForItem: r,
  itemOffset: i,
  marginTopForItem: u,
  scrollToAlignment: b,
  scrollPaddingTop: m,
  scrollPaddingBottom: y,
  stickyHeaderLevelForItem: p,
}) {
  let a = i ?? Je(s, t, r, u),
    h = C(r) ? r(s) : r,
    k = je(s, r, p);
  if (b === "center") return a - l / 2 + h / 2;
  if (a - k < e) return a - k - m;
  let T = e + l,
    F = a + h + y;
  return F > T ? F - l : e;
}
function Xe(s, e, t, l, r) {
  if (!s || r < 0) return;
  let i = [],
    u = t,
    b = 0,
    m = null;
  for (; u >= 0;) {
    let p = s(u);
    if (p === "primary") {
      b = v(e) ? e : e(u);
      break;
    }
    (p === "secondary" && !v(m) && (m = u), (u = u - 1));
  }
  let y = t + 1;
  for (; y <= r;) {
    let p = s(y);
    if (p === "primary") {
      if (
        (v(m) && m >= 0 && (i.push({ start: m, end: y - 1, top: b }), (m = null)),
        u >= 0 && i.push({ start: u, end: y - 1, top: 0 }),
        y > l)
      )
        return i;
      u = y;
    }
    (p === "secondary" &&
      (v(m) && m >= 0 && i.push({ start: m, end: y - 1, top: b }), y > l ? (m = null) : (m = y)),
      y++);
  }
  return (
    v(m) && m >= 0 && i.push({ start: m, end: y - 1, top: b }),
    u >= 0 && i.push({ start: u, end: y - 1, top: 0 }),
    i
  );
}
var Ke = Y(ne());
function pt(s) {
  let {
      items: e,
      children: t,
      heightForItem: l,
      measurementKeyForItem: r,
      marginTopForItem: i,
      marginBottomForItem: u,
      keyForItem: b,
      scrollToIndex: m,
      scrollToId: y,
      showScrollbar: p,
      stickyHeaderLevelForItem: H,
      scrollToAlignment: a,
      scrollPaddingBottom: h,
      ...k
    } = s,
    T = z.default.useCallback(
      (c) => {
        P(typeof l == "function");
        let L = e[c];
        return (P(L, `heightForItem: Item at index ${c} not found`), l(L, c));
      },
      [l, e]
    ),
    F = z.default.useCallback(
      (c) => {
        let L = e[c];
        return (
          P(L !== void 0, `measurementKeyForItem: Item at index ${c} not found`),
          r ? r(L, c) : L
        );
      },
      [r, e]
    ),
    S = z.default.useCallback(
      (c) => {
        if (!C(i)) return 0;
        let L = e[c];
        return (P(L, `marginTopForItem: Item at index ${c} not found`), i(L, c));
      },
      [i, e]
    ),
    E = z.default.useCallback(
      (c) => {
        if (!C(u)) return 0;
        let L = e[c];
        return (P(L, `marginBottomForItem: Item at index ${c} not found`), u(L, c));
      },
      [u, e]
    ),
    N = z.default.useCallback(
      (c) => {
        let L = e[c];
        return (P(L, `keyForItem: Item at index ${c} not found`), b(L, c));
      },
      [b, e]
    ),
    $ = z.default.useCallback(
      (c) => {
        if (!H) return "off";
        let L = e[c];
        return (P(L, `stickyHeaderLevelForItem: Item at index ${c} not found`), H(L, c));
      },
      [H, e]
    );
  return (0, Ke.jsx)(Pe, {
    count: e.length,
    keyForItem: N,
    heightForItem: C(l) ? T : l,
    measurementKeyForItem: F,
    marginTopForItem: i ? S : void 0,
    marginBottomForItem: u ? E : void 0,
    scrollToIndex: m,
    scrollToId: y,
    scrollToAlignment: a,
    scrollPaddingBottom: h,
    showScrollbar: p,
    stickyHeaderLevelForItem: H ? $ : void 0,
    ...k,
    children: (c, L) => {
      let B = e[c];
      return (
        P(B !== void 0, `itemContent: Item at index ${c} not found`),
        t({ item: B, index: c, viewportHeight: L })
      );
    },
  });
}
export { Ve as a, Pe as b, at as c, pt as d };
//# sourceMappingURL=chunk-MIBLN3J4.mjs.map
