import { a as xt } from "chunk-MUSICQHG.mjs";
import { h as ct } from "chunk-SJTXUC5J.mjs";
import { a as st, v as lt } from "chunk-COCZDLDK.mjs";
import { b as We } from "chunk-WPWSHZF5.mjs";
import { a as it } from "chunk-2QE2DJUQ.mjs";
import { c as bt } from "chunk-NKBHLXOY.mjs";
import { a as dt, b as mt, d as pt, e as ft, f as ht } from "chunk-UW2QQBFV.mjs";
import { b as at } from "chunk-P6Q3LWLD.mjs";
import { b as Ce } from "chunk-TS24LVSZ.mjs";
import { a as ut } from "chunk-7LRTGYQX.mjs";
import { a as ge } from "chunk-VD6KMVU6.mjs";
import { a as Pe } from "chunk-GPFPOFWM.mjs";
import { b as V } from "chunk-O3IQPNKH.mjs";
import { a as rt } from "chunk-4J3H3UTQ.mjs";
import { c as et, d as tt, e as ot, f as nt } from "chunk-3PIOJLHR.mjs";
import { a as H } from "chunk-QFU6OGL3.mjs";
import { a as xe } from "chunk-AYNVEX5D.mjs";
import { a as X } from "chunk-2FCXHKEL.mjs";
import { a as Z } from "chunk-SWYZG2NI.mjs";
import { H as Ze, i as Qe } from "chunk-VHFKZWVR.mjs";
import { e as T } from "chunk-WLHSDIGQ.mjs";
var g = T(Z());
var gt = V.values.inputHeight,
  Ct = 44,
  Ae = `calc(${V.css.panelMinWidth} - ${V.css.panelPadding} * 2)`,
  vt = 5;
var yt = "l18ynxwu",
  It = "s18so0ry",
  po = 12,
  fo = 8,
  wt = po + fo,
  Lt = "clepa9p",
  ze = "rskm1h4",
  Fe = "r1optlid",
  Rt = "r14t1omp",
  kt = "r10fzppx",
  St = "htnyaud",
  Bt = "d1twq108",
  Tt = "sryng7g",
  ie = "rn2dvvk",
  ve = "rhmoagt",
  Ne = "r17etvq1",
  Et = "r13h07hn",
  Ht = "r8ysuk9",
  ye = "r15i2pmv",
  Ve = "ikmlc9c",
  Ot = "rc8izch",
  Mt = "n1fwez1w",
  Wt = "ighplyg";
var At = T(Z());
var De = T(X());
function zt({
  items: e,
  checkedItems: t,
  highlightedIndex: n,
  scrollToIndex: o,
  scrollToAlignment: r,
  onHighlight: l,
  onSelect: i,
  shrinkCompletionLabel: s,
  large: x,
  stickySectionHeaders: w = !0,
  containOverscroll: m,
}) {
  let h = (0, At.useRef)(null);
  return (0, De.jsx)(bt, {
    className: It,
    items: e,
    heightForItem: ho,
    marginTopForItem: bo,
    stickyHeaderLevelForItem: w ? go : void 0,
    keyForItem: xo,
    scrollToIndex: o,
    scrollToAlignment: r,
    onMouseLeave: (c) => l(void 0, -1, c),
    containOverscroll: m,
    children: ({ item: c, index: L }) => {
      let f = Ft(c),
        E = f || c.enabled !== !1,
        v = t?.includes(c.value),
        R = c.title ?? c.value;
      return (0, De.jsx)(Nt, {
        large: x,
        type: c.type,
        id: c.value,
        index: L,
        title: R,
        description: f ? R : c.description,
        subtitle: f ? void 0 : c.subtitle,
        label: c.label,
        labelWhenItemHighlighted: c.labelWhenItemHighlighted,
        highlighted: L === n,
        onHighlight: l,
        onSelect: i,
        enabled: E,
        selectable: !f && E,
        prevMousePositionRef: h,
        shrinkLabel: s,
        checked: v,
        onLabelClick: f ? c.onLabelClick : void 0,
        icon: f ? void 0 : c.icon,
      });
    },
  });
}
function ho(e) {
  return e.type === "option" && e.subtitle ? Ct : gt;
}
function bo(e, t) {
  return Ft(e) ? (t === 0 ? 0 : V.values.inputSpacing) : e.subtitle && t > 0 ? 5 : 0;
}
function xo(e) {
  return e.value;
}
function Ft(e) {
  return e.type === "section";
}
function go(e) {
  return e.type === "section" ? "primary" : "off";
}
var de = T(Z());
var Vt = "t18bov5v",
  Dt = "l16z17a3",
  Kt = "rqti9ra";
var qt = T(X()),
  vo = (e, t, n) => {
    let o = e.style.overflow;
    for (e.style.overflow = "hidden", e.rows = t; e.scrollHeight > e.offsetHeight && e.rows < n;)
      e.rows = e.rows + 1;
    e.style.overflow = o;
  };
function yo(e, t, n, o, r) {
  let l = at();
  de.default.useLayoutEffect(() => {
    let i = r,
      s = l;
    o && e.current && vo(e.current, t, n);
  }, [e, t, n, o, r, l]);
}
var Ut = de.default.memo(
  de.default.forwardRef(function (t, n) {
    let {
        value: o,
        enabled: r = !0,
        readOnly: l,
        autoFocus: i,
        onChange: s,
        onBlur: x,
        onFocus: w,
        onKeyDown: m,
        className: h,
        constantChange: c = !0,
        changeOnBlur: L,
        minRows: f = 2,
        maxRows: E = 12,
        newlinesOnEnter: v,
        selectOnFocus: R,
        autoResize: B,
        direction: C,
        name: y,
        autoComplete: k = "off",
        ...D
      } = t,
      Y = mt(y, k === "off"),
      M = de.default.useRef(null),
      J = ge(n, M),
      W = Ce(l),
      P = r && !W,
      {
        elementRef: q,
        internalValue: O,
        internalDirection: $,
        changeHandler: A,
        blurHandler: ee,
        focusHandler: te,
        keyDownHandler: Q,
      } = pt({
        ref: J,
        value: o,
        enabled: P,
        autoFocus: i,
        constantChange: c,
        changeOnBlur: L,
        stopUpDownKeyHandling: !1,
        newlinesOnEnter: v,
        direction: C,
        selectOnFocus: R,
        onChange: s,
        onBlur: x,
        onFocus: w,
        onKeyDown: m,
      });
    return (
      yo(M, f, E, B, O),
      (0, qt.jsx)("textarea", {
        ref: q,
        className: H(dt, Vt, $ === "rtl" ? Kt : Dt, h),
        value: O,
        onChange: A,
        disabled: !W && !P,
        readOnly: W,
        onBlur: ee,
        onFocus: te,
        onKeyDown: Q,
        autoFocus: i,
        name: Y,
        autoComplete: k === "off" ? "nope" : k,
        autoCorrect: "off",
        spellCheck: !1,
        dir: $,
        ...D,
      })
    );
  })
);
var j = T(Z());
var _t = T(Z()),
  Ue = new WeakMap(),
  Ke = null;
function Io() {
  return (
    Ke ||
      (Ke = new ResizeObserver((e) => {
        for (let t of e) {
          let n = Ue.get(t.target);
          n && n(t.target);
        }
      })),
    Ke
  );
}
function jt(e, t) {
  (0, _t.useEffect)(() => {
    let n = e.current;
    if (!n) return;
    let o = Io();
    return (
      Ue.set(n, t),
      o.observe(n),
      () => {
        (o.unobserve(n), Ue.delete(n));
      }
    );
  }, [e, t]);
}
var $t = T(X());
function me({ children: e, title: t, ...n }) {
  let [o, r] = (0, j.useState)(!1),
    l = (0, j.useRef)(null),
    i = (0, j.useCallback)(() => {
      let x = l.current;
      x &&
        (0, j.startTransition)(() => {
          r(x.offsetWidth < x.scrollWidth);
        });
    }, []);
  (jt(l, i),
    (0, j.useEffect)(() => {
      i();
    }, [i, e]));
  let s = t ?? (typeof e == "string" ? e : void 0);
  return (0, $t.jsx)("span", {
    ...n,
    ref: l,
    className: H(rt, n.className),
    title: o ? s : void 0,
    children: e,
  });
}
var Ie = T(Z()),
  Gt = (e, t) => {
    let n = (0, Ie.useRef)(null);
    return (0, Ie.useCallback)(
      (o) => {
        if (!Qe()) return e(o);
        let r = t ?? n,
          { clientX: l, clientY: i } = o,
          s = r.current;
        if (((r.current = { x: l, y: i }), !!s && (s.x !== l || s.y !== i))) return e(o);
      },
      [t, e]
    );
  };
var u = T(Z());
var wo = "__no-items-placeholder__";
function Qt({
  items: e,
  value: t,
  onChange: n,
  scrollItemIntoView: o,
  enabled: r = !0,
  openOnFocus: l = !0,
  showAllWhenOpened: i = !0,
  autoCompleteEnabled: s = !0,
  autoHighlightFirstMatch: x = !0,
  clearSelectionOnEmptySearch: w = !1,
  closeAutoCompleteOnSelect: m = !0,
  searchItemValue: h = !1,
  sortByRelevance: c = !0,
  sortSectionsByRelevance: L,
  getSearchTokens: f,
  noSearchResultsEnabled: E = !1,
  closeAutoCompleteOnEmptySearch: v = !1,
  noItems: R,
}) {
  let B = (0, u.useRef)(t);
  B.current = t;
  let [C, y] = (0, u.useState)(!1),
    [k, D] = (0, u.useState)(t),
    Y = (0, u.useMemo)(() => Zt(e), [e]),
    [M, J] = (0, u.useState)(-1),
    [W, P] = (0, u.useState)(void 0),
    q = (0, u.useMemo)(() => {
      if (R) return { type: "option", value: wo, title: R, enabled: !1 };
    }, [R]),
    [O, $] = (0, u.useState)(() => (e.length === 0 && q ? [q] : Yt(e))),
    A = (0, u.useRef)(null),
    ee = (0, u.useRef)(M);
  ee.current = M;
  let te = (0, u.useRef)(C);
  te.current = C;
  let Q = (0, u.useRef)(!1),
    se = (0, u.useRef)(e);
  (u.default.useEffect(() => {
    r || y(!1);
  }, [r]),
    u.default.useEffect(() => {
      if (!C || !A.current) return;
      let a = (d) => {
        d.target instanceof Element &&
          d.target.contains(A.current) &&
          d.target !== A.current &&
          (y(!1), window.removeEventListener("scroll", a, { capture: !0 }));
      };
      return (
        window.addEventListener("scroll", a, { capture: !0 }),
        () => window.removeEventListener("scroll", a, { capture: !0 })
      );
    }, [C]),
    (0, u.useEffect)(() => {
      D(t);
    }, [t]),
    (0, u.useEffect)(() => {
      let a = se.current;
      se.current = e;
      let d = Q.current && i && a.length === 0 && e.length > 0;
      (!te.current && !d) || (A.current && z(A.current.value, "previous"));
    }, [e]));
  let I = (0, u.useCallback)(
      (a, d, b = !0) => {
        (J(d), P(a), a && b && o(d, C ? "nearest-edge" : "center"));
      },
      [o, C]
    ),
    Le = (0, u.useCallback)(
      (a, d, b) => {
        I(a, d, !1);
      },
      [I]
    ),
    Re = (0, u.useCallback)(
      (a, d = !0) => {
        if (!a) return (I(void 0, -1, d), !1);
        let b = O.findIndex((S) => S.value === a);
        return b < 0 ? !1 : (I(a, b, d), !0);
      },
      [O, I, e]
    ),
    le = (0, u.useRef)(!1),
    z = (0, u.useCallback)(
      (a, d) => {
        let b = a.trim().toLocaleLowerCase();
        if (v && b === "") {
          y(!1);
          return;
        }
        let S = d === "previous" ? le.current : d;
        if ((xe(d) && (le.current = d), e.length === 0)) {
          ($(q ? [q] : je), y(!!q), I(void 0, -1));
          return;
        }
        let _ = f ? f(b) : new Set(b.split(" ").filter(Boolean)),
          pe = ko(e, b, _, c, L, h, S),
          ne = Yt(pe),
          G = pe.length > 0 || (E && b !== "");
        if (($(ne), y(G), S)) {
          let F = ne.findIndex((Oe) => _e(Oe, h).toLocaleLowerCase() === b),
            re = F >= 0 ? F : M,
            He = ne[re];
          I(He?.value, re);
        } else {
          let { item: F, index: re } = Jt(-1, ne, !1, !1);
          !x || !F || (w && !b) ? I(void 0, -1) : I(F.value, re);
        }
      },
      [f, e, c, L, h, I, M, x, w, E, v, q]
    ),
    ke = (0, u.useCallback)(() => {
      r && s && ((Q.current = !0), l && (k || z(k, i)));
    }, [r, s, l, k, z, i]),
    Se = (0, u.useCallback)(() => {
      ((Q.current = !1), y(!1));
    }, []),
    Be = (0, u.useCallback)(() => y(!1), []),
    oe = (0, u.useCallback)(() => {
      C || (r && s && z(k, i));
    }, [C, r, s, z, k, i]),
    ae = (0, u.useCallback)(
      (a) => {
        if (
          C &&
          !(a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement)
        ) {
          y(!1);
          return;
        }
        (oe(), A.current?.focus());
      },
      [oe, C]
    ),
    Te = (0, u.useCallback)(
      (a, d, b, S) => {
        (D(a),
          n(
            a,
            d,
            () => {
              D(B.current);
            },
            S
          ),
          d ? y(!1) : z(a, !1));
      },
      [n, z]
    ),
    ce = (0, u.useCallback)(
      (a, d, b) => {
        let S = O[d];
        if (S) {
          let _ = _e(S, h);
          (D(_),
            n(
              S.value,
              !0,
              () => {
                D(B.current);
              },
              b
            ));
        }
        m ? y(!1) : (z(B.current, !1), I(S?.value, d, !1));
      },
      [O, z, n, h, m, I]
    ),
    Ee = (0, u.useCallback)(
      (a) => {
        if (!r || Ze(a)) return;
        if (!C) {
          (a.key === "ArrowDown" || a.key === "ArrowUp") && oe();
          return;
        }
        let d = ee.current;
        switch (a.key) {
          case "Enter": {
            if (d < 0) return;
            let b = O[d];
            if (b?.type !== "option") return;
            (we(a), ce(b.value, d, a));
            return;
          }
          case "ArrowDown":
          case "ArrowUp": {
            let b = a.key === "ArrowUp",
              { item: S, index: _ } = Jt(d, O, b, !a.repeat);
            if (!x && d >= 0 && _ > d && b) {
              (we(a), I(void 0, -1));
              return;
            }
            if (_ < 0 || !S) return;
            (we(a), I(S.value, _));
            return;
          }
          case "Escape": {
            (we(a), y(!1));
            return;
          }
        }
      },
      [r, O, I, ce, x, C, oe, k]
    );
  return {
    inputRef: A,
    internalValue: k,
    flatList: O,
    isOpen: C,
    highlightedIndex: M,
    highlightedItemId: W,
    longestOption: Y,
    highlightItemByValue: Re,
    focusHandler: ke,
    blurHandler: Se,
    closeHandler: Be,
    clickHandler: ae,
    keydownHandler: Ee,
    highlightHandler: Le,
    selectHandler: ce,
    changeHandler: Te,
  };
}
function Zt(e) {
  if (e.length < 1) return null;
  function t(o, r) {
    if (!o) return !1;
    if (!r) return !0;
    let l = o.title ?? o.value,
      i = r.title ?? r.value;
    return l.length > i.length;
  }
  let n = null;
  return (
    e.forEach((o) => {
      if (o.type === "section") {
        let r = Zt(o.items);
        t(r, n) && (n = r);
        return;
      }
      t(o, n) && (n = o);
    }),
    n
  );
}
function Lo(e, t) {
  return e.value === t
    ? e.weight * 1e3
    : e.value.startsWith(t)
      ? e.weight * 300
      : e.value.includes(t)
        ? e.weight * 100
        : 0;
}
function Ro(e, t, n) {
  let o = 0;
  for (let r of e) o += Lo(r, t);
  if (o > 0) return o;
  for (let r of n) {
    let l = !1;
    for (let i of e)
      i.value.startsWith(r)
        ? ((o += i.weight * 10), (l = !0))
        : i.value.includes(r) && ((o += i.weight), (l = !0));
    if (!l) return 0;
  }
  return o;
}
function _e(e, t) {
  return !e.title || t ? e.value : e.title;
}
function Xt(e, t, n, o) {
  let i = [{ value: _e(e, o).toLocaleLowerCase(), weight: 3 }];
  return (
    e.label &&
      typeof e.label == "string" &&
      i.push({ value: e.label.toLocaleLowerCase(), weight: 1 }),
    Ro(i, t, n)
  );
}
function qe(e) {
  e.sort((t, n) => n.score - t.score);
}
var je = [];
function ln(e) {
  return e.type === "section";
}
function ko(e, t, n, o, r, l, i) {
  if (i) return e;
  let s = [],
    x = [];
  for (let c of e) {
    if (c.type === "option") {
      let v = Xt(c, t, n, l);
      v > 0 && s.push({ item: c, score: v });
      continue;
    }
    let L = [],
      f = 0;
    for (let v of c.items) {
      let R = Xt(v, t, n, l);
      if (R === 0) continue;
      let B = { item: v, score: R };
      (L.push(B), (f = Math.max(B.score, f)));
    }
    if (f === 0) continue;
    o && qe(L);
    let E = L.map((v) => v.item);
    x.push({ item: { ...c, items: E }, score: f });
  }
  o && (qe(s), r !== !1 && qe(x));
  let w = s.map(({ item: c }) => c),
    m = x.map(({ item: c }) => c),
    h = [...w, ...m];
  return h.length === 0 ? je : h;
}
function Yt(e) {
  if (e.length === 0) return je;
  let t = [];
  return (
    e.forEach((n) => {
      (t.push(n), n.type === "section" && t.push(...n.items));
    }),
    t
  );
}
function Jt(e, t, n, o) {
  let r = n ? -1 : 1,
    l = e;
  for (let i = 0; i < t.length; i++) {
    ((l += r), l >= t.length ? (l = o ? 0 : t.length - 1) : l < 0 && (l = o ? t.length - 1 : 0));
    let s = t[l];
    if (s && s.type === "option" && s.enabled !== !1) return { item: s, index: l };
  }
  return { item: null, index: -1 };
}
function we(e) {
  (e.preventDefault(), e.stopPropagation());
}
var p = T(X());
function So() {}
var Bo = { x: 0, y: V.values.inputSpacing },
  eo = g.default.forwardRef(function (t, n) {
    let {
        id: o,
        items: r,
        value: l,
        large: i,
        searchItemValue: s = !1,
        autoCompleteEnabled: x = !0,
        autoHighlightFirstMatch: w = !0,
        onChange: m,
        onBlur: h,
        onFocus: c,
        constantChange: L = !1,
        menuWidth: f = Ae,
        menuMinWidth: E,
        menuClassName: v,
        menuWithin: R,
        menuOffset: B = Bo,
        enabled: C = !0,
        readOnly: y,
        alignSelf: k = "start",
        openOnFocus: D,
        showAllWhenOpened: Y,
        getSearchTokens: M,
        shrinkCompletionLabel: J = !0,
        clearSelectionOnEmptySearch: W,
        closeAutoCompleteOnSelect: P,
        sortSectionsByRelevance: q,
        renderInput: O,
        checkedItems: $,
        onOpenChange: A,
        backdropEnabled: ee = !1,
        stickySectionHeaders: te,
        containOverscroll: Q,
        noSearchResultsEnabled: se = !1,
        closeAutoCompleteOnEmptySearch: I,
        noItems: Le,
        ...Re
      } = t,
      le = Ce(y),
      z = C && !le,
      [ke, Se] = (0, g.useState)(-1),
      [Be, oe] = (0, g.useState)("nearest-edge"),
      ae = g.default.useCallback((N, K) => {
        (Se(N), oe(K));
      }, []),
      [Te, ce] = (0, g.useState)(f === "fit-content" || f === "input-width" ? Ae : f),
      [Ee, a] = (0, g.useState)(B),
      d = (0, g.useCallback)(
        (N, K, ue, be) => {
          ((K || L) && m(N, K, ue, be), K || ae(-1, "nearest-edge"));
        },
        [m, L, ae]
      ),
      {
        inputRef: b,
        internalValue: S,
        flatList: _,
        highlightedIndex: pe,
        highlightedItemId: ne,
        isOpen: G,
        longestOption: F,
        focusHandler: re,
        blurHandler: He,
        closeHandler: Oe,
        clickHandler: Xe,
        keydownHandler: Ye,
        highlightHandler: oo,
        selectHandler: no,
        changeHandler: ro,
      } = Qt({
        items: r,
        value: l,
        searchItemValue: s,
        onChange: d,
        autoCompleteEnabled: x,
        autoHighlightFirstMatch: w,
        scrollItemIntoView: ae,
        enabled: z,
        openOnFocus: D,
        showAllWhenOpened: Y,
        clearSelectionOnEmptySearch: W,
        closeAutoCompleteOnSelect: P,
        getSearchTokens: M,
        sortSectionsByRelevance: q,
        noSearchResultsEnabled: se,
        closeAutoCompleteOnEmptySearch: I,
        noItems: Le,
      });
    g.default.useEffect(() => {
      A?.(G);
    }, [G, A]);
    let io = (N) => {
        (re(), c && c(N));
      },
      so = (N) => {
        (He(), h && h(N));
      },
      fe = (0, g.useRef)(null),
      lo = ge(n, b),
      he = `${o ?? "combobox"}_listbox`,
      Je = $ !== void 0;
    return (
      (0, g.useEffect)(() => {
        let N;
        switch (f) {
          case "input-width": {
            let K = fe.current;
            if (!K) return;
            N = K.offsetWidth;
            break;
          }
          case "fit-content": {
            let K = fe.current,
              ue = G ? document.getElementById(he)?.firstElementChild : null;
            if (!F || !K || !ue) return;
            let be = H(ze, i && Fe),
              ao = To(F, be, ue),
              Me = typeof F.label == "string" ? F.label : void 0,
              co = Me ? to(Me, H(be, ye), ue) : 0,
              uo = Je ? wt : 0,
              mo = V.values.inputSpacing + (Me ? V.values.inputSpacing * 2 : 5);
            N = Math.min(ao + co + uo + vt * 2 + mo + 5, K.offsetWidth);
            break;
          }
          default:
            N = f;
        }
        (ce(N), a({ ...B }));
      }, [f, F, B, i, Je, G, he]),
      (0, p.jsxs)(p.Fragment, {
        children: [
          O({
            focusHandler: io,
            changeHandler: ro,
            highlightedItemId: ne,
            internalValue: S,
            keydownHandler: Ye,
            isOpen: G,
            enabled: z,
            readOnly: le,
            ref: lo,
            blurHandler: so,
            closeHandler: Oe,
            listBoxId: he,
            clickHandler: Xe,
            inputWrapperRef: fe,
            id: o,
            inputProps: Re,
          }),
          x &&
            G &&
            (0, p.jsxs)(ct, {
              id: he,
              role: "listbox",
              className: H(st, yt, v),
              style: { width: Te, minWidth: E },
              showArrow: !1,
              focusTrapEnabled: !1,
              containerStyleEnabled: !1,
              anchor: fe.current,
              alignSelf: k,
              offset: Ee,
              within: R,
              attachTo: ["bottom", "top"],
              animateAppear: !1,
              backdropEnabled: ee,
              onClose: So,
              children: [
                (0, p.jsx)(zt, {
                  large: i,
                  items: _,
                  checkedItems: $,
                  highlightedIndex: pe,
                  scrollToIndex: ke,
                  scrollToAlignment: Be,
                  onSelect: no,
                  onHighlight: oo,
                  shrinkCompletionLabel: J,
                  stickySectionHeaders: te,
                  containOverscroll: Q,
                }),
                se &&
                  _.length === 0 &&
                  (0, p.jsx)(xt, {
                    className: Mt,
                    icon: null,
                    title: void 0,
                    body: "No Search Results",
                  }),
              ],
            }),
        ],
      })
    );
  }),
  En = g.default.memo(
    g.default.forwardRef(function (t, n) {
      let {
          leftSlot: o,
          rightSlot: r,
          rightChevron: l,
          wrapperClassName: i,
          hasError: s,
          ...x
        } = t,
        w = et();
      return (0, p.jsx)(eo, {
        ...x,
        ref: n,
        renderInput: (m) =>
          (0, p.jsxs)(ht, {
            ref: m.inputWrapperRef,
            onClick: w ? ot(m.clickHandler) : m.clickHandler,
            className: i,
            hasError: s,
            onMouseDown: (h) => {
              (Eo(h), w && tt(h.button) && m.clickHandler(h));
            },
            children: [
              o,
              (0, p.jsx)(ft, {
                id: t.id,
                name: t.name,
                role: "combobox",
                autoComplete: "off",
                "aria-expanded": m.isOpen,
                "aria-controls": m.listBoxId,
                "aria-activedescendant": m.highlightedItemId,
                value: m.internalValue,
                title: m.internalValue,
                constantChange: !0,
                onChange: m.changeHandler,
                onFocus: m.focusHandler,
                onBlur: m.blurHandler,
                onKeyDownCapture: m.keydownHandler,
                className: Ve,
                readOnly: m.readOnly,
                enabled: m.enabled,
                ...m.inputProps,
                ref: m.ref,
              }),
              r || (l && (0, p.jsx)(We, { className: Ot, children: (0, p.jsx)(ut, {}) })),
            ],
          }),
      });
    })
  ),
  Hn = g.default.memo(
    g.default.forwardRef(function (t, n) {
      let { leftSlot: o, rightSlot: r, wrapperClassName: l, ...i } = t;
      return (0, p.jsx)(eo, {
        ...i,
        ref: n,
        renderInput: (s) =>
          (0, p.jsxs)("div", {
            onClick: s.clickHandler,
            ref: s.inputWrapperRef,
            className: l,
            children: [
              o,
              (0, p.jsx)(Ut, {
                id: t.id,
                role: "combobox",
                autoComplete: "off",
                "aria-expanded": s.isOpen,
                "aria-controls": s.listBoxId,
                "aria-activedescendant": s.highlightedItemId,
                value: s.internalValue,
                title: s.internalValue,
                constantChange: !0,
                onChange: s.changeHandler,
                onFocus: s.focusHandler,
                onBlur: s.blurHandler,
                onKeyDownCapture: s.keydownHandler,
                className: Ve,
                readOnly: s.readOnly,
                enabled: s.enabled,
                ...s.inputProps,
                rows: t.rows,
                ref: s.ref,
              }),
              r,
            ],
          }),
      });
    })
  ),
  Nt = g.default.memo(function (t) {
    let {
        type: n,
        id: o,
        index: r,
        title: l,
        label: i,
        labelWhenItemHighlighted: s,
        description: x,
        subtitle: w,
        enabled: m,
        selectable: h,
        highlighted: c,
        prevMousePositionRef: L,
        onHighlight: f,
        onSelect: E,
        shrinkLabel: v,
        checked: R,
        large: B,
        testId: C,
        onLabelClick: y,
        icon: k,
      } = t,
      D = (0, g.useCallback)(
        (P) => {
          ($e(P), f(h ? o : void 0, h ? r : -1, P));
        },
        [h, o, r, f]
      ),
      Y = (0, g.useCallback)(
        (P) => {
          ($e(P), h && E(o, r, P));
        },
        [h, o, r, E]
      ),
      M = nt(Y, $e),
      J = Gt(D, L),
      W = n === "section";
    return (0, p.jsxs)(Pe, {
      id: o,
      role: "option",
      "aria-selected": c,
      className: H(Rt, ze, B && Fe, W && Tt, c && St, !m && Bt),
      title: x,
      direction: "row",
      alignItems: "center",
      gap: 0,
      paddingRight: i && !W ? V.css.inputSpacing : 5,
      paddingLeft: V.css.inputSpacing,
      justifyContent: "flex-start",
      onMouseMove: J,
      ...M,
      children: [
        xe(R)
          ? (0, p.jsx)("div", { className: Lt, children: R ? (0, p.jsx)(lt, {}) : null })
          : null,
        (0, p.jsxs)(Pe, {
          direction: "row",
          alignItems: "center",
          className: kt,
          children: [
            k && (0, p.jsx)(We, { className: H(Wt, ve), children: (0, p.jsx)(k, {}) }),
            !W && w
              ? (0, p.jsxs)("div", {
                  className: H(Ne, ie, Et),
                  children: [
                    (0, p.jsx)(me, { id: Ge(o), children: l }),
                    (0, p.jsx)("div", { className: Ht, children: w }),
                  ],
                })
              : (0, p.jsx)(me, { id: Ge(o), className: H(Ne, ie), children: l }),
            i &&
              (W
                ? (0, p.jsx)(it, {
                    as: me,
                    className: ie,
                    variant: y ? void 0 : "neutral",
                    onClick: y,
                    "data-testid": C ? `${C}-label-badge` : void 0,
                    children: i,
                  })
                : typeof i == "string"
                  ? (0, p.jsx)(me, { className: H(ye, v ? ie : ve), children: i })
                  : (0, p.jsx)("div", { className: H(ye, v ? ie : ve), children: c && s ? s : i })),
          ],
        }),
      ],
    });
  });
function Ge(e) {
  return `${e}_text`;
}
function To(e, t, n) {
  let o = Ge(e.value),
    r = document.getElementById(o);
  return r ? r.scrollWidth : to(e.title ?? e.value, t, n);
}
var U = null;
function to(e, t, n) {
  let o = 0;
  return (
    U ||
      ((U = document.createElement("span")),
      (U.style.position = "absolute"),
      (U.style.visibility = "hidden"),
      (U.style.whiteSpace = "nowrap")),
    (U.className = t),
    (U.innerText = e),
    n.appendChild(U),
    (o = U.scrollWidth),
    U.parentNode?.removeChild(U),
    o
  );
}
function $e(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Eo(e) {
  e.target instanceof HTMLInputElement || e.preventDefault();
}
export {
  Mt as a,
  zt as b,
  Ut as c,
  jt as d,
  me as e,
  Gt as f,
  Qt as g,
  ln as h,
  ko as i,
  Yt as j,
  Jt as k,
  eo as l,
  En as m,
  Hn as n,
  Eo as o,
};
//# sourceMappingURL=chunk-YMFBY2MR.mjs.map
