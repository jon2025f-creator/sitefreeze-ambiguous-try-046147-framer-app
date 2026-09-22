import { a as ft } from "chunk-XQYTUJYG.mjs";
import { g as lt } from "chunk-2YABGGH2.mjs";
import { a as nt } from "chunk-SR2NVY3J.mjs";
import { a as it } from "chunk-YGN7H5WF.mjs";
import { a as ot } from "chunk-ZRYKVWJA.mjs";
import { a as dt } from "chunk-2OYYSC7Y.mjs";
import { b as He } from "chunk-WPWSHZF5.mjs";
import { c as mt } from "chunk-NKBHLXOY.mjs";
import { e as ct, f as ut } from "chunk-ZKCTCDT7.mjs";
import { b as st } from "chunk-TS24LVSZ.mjs";
import { a as rt } from "chunk-VD6KMVU6.mjs";
import { a as at } from "chunk-7LRTGYQX.mjs";
import { a as Oe } from "chunk-5ZFCTKOG.mjs";
import { b as W } from "chunk-XVTPET7X.mjs";
import { a as tt } from "chunk-T7K6IZ6W.mjs";
import { c as Je, d as Qe, e as Ze, f as et } from "chunk-3PIOJLHR.mjs";
import { a as M } from "chunk-QFU6OGL3.mjs";
import { a as be } from "chunk-AYNVEX5D.mjs";
import { a as J } from "chunk-2FCXHKEL.mjs";
import { a as Y } from "chunk-SWYZG2NI.mjs";
import { H as Ye, i as Xe } from "chunk-VHFKZWVR.mjs";
import { e as O } from "chunk-WLHSDIGQ.mjs";
var x = O(Y());
var pt = W.values.inputHeight,
  ht = 44,
  Me = `calc(${W.css.panelMinWidth} - ${W.css.panelPadding} * 2)`,
  bt = 5;
var xt = "l18ynxwu",
  gt = "s18so0ry",
  ro = 12,
  io = 8,
  It = ro + io,
  Ct = "clepa9p",
  We = "rskm1h4",
  Pe = "r1optlid",
  vt = "r14t1omp",
  yt = "r10fzppx",
  wt = "htnyaud",
  Lt = "d1twq108",
  Bt = "sryng7g",
  Q = "rn2dvvk",
  xe = "rhmoagt",
  Ae = "r17etvq1",
  St = "r13h07hn",
  Rt = "r8ysuk9",
  ge = "r15i2pmv",
  Fe = "ikmlc9c",
  Et = "rc8izch",
  Tt = "n1fwez1w",
  kt = "ighplyg";
var Ot = O(Y());
var Ne = O(J());
function Mt({
  items: e,
  checkedItems: t,
  highlightedIndex: n,
  scrollToIndex: o,
  scrollToAlignment: r,
  onHighlight: l,
  onSelect: i,
  shrinkCompletionLabel: s,
  large: g,
  stickySectionHeaders: L = !0,
  containOverscroll: d,
}) {
  let b = (0, Ot.useRef)(null);
  return (0, Ne.jsx)(mt, {
    className: gt,
    items: e,
    heightForItem: so,
    marginTopForItem: lo,
    stickyHeaderLevelForItem: L ? co : void 0,
    keyForItem: ao,
    scrollToIndex: o,
    scrollToAlignment: r,
    onMouseLeave: (u) => l(void 0, -1, u),
    containOverscroll: d,
    children: ({ item: u, index: B }) => {
      let p = Wt(u),
        E = p || u.enabled !== !1,
        v = t?.includes(u.value),
        S = u.title ?? u.value;
      return (0, Ne.jsx)(Pt, {
        large: g,
        type: u.type,
        id: u.value,
        index: B,
        title: S,
        description: p ? S : u.description,
        subtitle: p ? void 0 : u.subtitle,
        label: u.label,
        labelWhenItemHighlighted: u.labelWhenItemHighlighted,
        highlighted: B === n,
        onHighlight: l,
        onSelect: i,
        enabled: E,
        selectable: !p && E,
        prevMousePositionRef: b,
        shrinkLabel: s,
        checked: v,
        onLabelClick: p ? u.onLabelClick : void 0,
        icon: p ? void 0 : u.icon,
      });
    },
  });
}
function so(e) {
  return e.type === "option" && e.subtitle ? ht : pt;
}
function lo(e, t) {
  return Wt(e) ? (t === 0 ? 0 : W.values.inputSpacing) : e.subtitle && t > 0 ? 5 : 0;
}
function ao(e) {
  return e.value;
}
function Wt(e) {
  return e.type === "section";
}
function co(e) {
  return e.type === "section" ? "primary" : "off";
}
var D = O(Y());
var At = O(Y()),
  ze = new WeakMap(),
  Ve = null;
function uo() {
  return (
    Ve ||
      (Ve = new ResizeObserver((e) => {
        for (let t of e) {
          let n = ze.get(t.target);
          n && n(t.target);
        }
      })),
    Ve
  );
}
function Ft(e, t) {
  (0, At.useEffect)(() => {
    let n = e.current;
    if (!n) return;
    let o = uo();
    return (
      ze.set(n, t),
      o.observe(n),
      () => {
        (o.unobserve(n), ze.delete(n));
      }
    );
  }, [e, t]);
}
var Nt = O(J());
function le({ children: e, title: t, ...n }) {
  let [o, r] = (0, D.useState)(!1),
    l = (0, D.useRef)(null),
    i = (0, D.useCallback)(() => {
      let g = l.current;
      g &&
        (0, D.startTransition)(() => {
          r(g.offsetWidth < g.scrollWidth);
        });
    }, []);
  (Ft(l, i),
    (0, D.useEffect)(() => {
      i();
    }, [i, e]));
  let s = t ?? (typeof e == "string" ? e : void 0);
  return (0, Nt.jsx)("span", {
    ...n,
    ref: l,
    className: M(tt, n.className),
    title: o ? s : void 0,
    children: e,
  });
}
var Ie = O(Y()),
  Vt = (e, t) => {
    let n = (0, Ie.useRef)(null);
    return (0, Ie.useCallback)(
      (o) => {
        if (!Xe()) return e(o);
        let r = t ?? n,
          { clientX: l, clientY: i } = o,
          s = r.current;
        if (((r.current = { x: l, y: i }), !!s && (s.x !== l || s.y !== i))) return e(o);
      },
      [t, e]
    );
  };
var c = O(Y());
var mo = "__no-items-placeholder__";
function Ut({
  items: e,
  value: t,
  onChange: n,
  scrollItemIntoView: o,
  enabled: r = !0,
  openOnFocus: l = !0,
  showAllWhenOpened: i = !0,
  autoCompleteEnabled: s = !0,
  autoHighlightFirstMatch: g = !0,
  clearSelectionOnEmptySearch: L = !1,
  closeAutoCompleteOnSelect: d = !0,
  searchItemValue: b = !1,
  sortByRelevance: u = !0,
  sortSectionsByRelevance: B,
  getSearchTokens: p,
  noSearchResultsEnabled: E = !1,
  closeAutoCompleteOnEmptySearch: v = !1,
  noItems: S,
}) {
  let P = (0, c.useRef)(t);
  P.current = t;
  let [I, y] = (0, c.useState)(!1),
    [T, K] = (0, c.useState)(t),
    Z = (0, c.useMemo)(() => jt(e), [e]),
    [U, ee] = (0, c.useState)(-1),
    [_, j] = (0, c.useState)(void 0),
    $ = (0, c.useMemo)(() => {
      if (S) return { type: "option", value: mo, title: S, enabled: !1 };
    }, [S]),
    [N, ae] = (0, c.useState)(() => (e.length === 0 && $ ? [$] : Dt(e))),
    V = (0, c.useRef)(null),
    te = (0, c.useRef)(U);
  te.current = U;
  let ce = (0, c.useRef)(I);
  ce.current = I;
  let oe = (0, c.useRef)(!1),
    ue = (0, c.useRef)(e);
  (c.default.useEffect(() => {
    r || y(!1);
  }, [r]),
    c.default.useEffect(() => {
      if (!I || !V.current) return;
      let a = (m) => {
        m.target instanceof Element &&
          m.target.contains(V.current) &&
          m.target !== V.current &&
          (y(!1), window.removeEventListener("scroll", a, { capture: !0 }));
      };
      return (
        window.addEventListener("scroll", a, { capture: !0 }),
        () => window.removeEventListener("scroll", a, { capture: !0 })
      );
    }, [I]),
    (0, c.useEffect)(() => {
      K(t);
    }, [t]),
    (0, c.useEffect)(() => {
      let a = ue.current;
      ue.current = e;
      let m = oe.current && i && a.length === 0 && e.length > 0;
      (!ce.current && !m) || (V.current && k(V.current.value, "previous"));
    }, [e]));
  let C = (0, c.useCallback)(
      (a, m, h = !0) => {
        (ee(m), j(a), a && h && o(m, I ? "nearest-edge" : "center"));
      },
      [o, I]
    ),
    ve = (0, c.useCallback)(
      (a, m, h) => {
        C(a, m, !1);
      },
      [C]
    ),
    ye = (0, c.useCallback)(
      (a, m = !0) => {
        if (!a) return (C(void 0, -1, m), !1);
        let h = N.findIndex((w) => w.value === a);
        return h < 0 ? !1 : (C(a, h, m), !0);
      },
      [N, C, e]
    ),
    me = (0, c.useRef)(!1),
    k = (0, c.useCallback)(
      (a, m) => {
        let h = a.trim().toLocaleLowerCase();
        if (v && h === "") {
          y(!1);
          return;
        }
        let w = m === "previous" ? me.current : m;
        if ((be(m) && (me.current = m), e.length === 0)) {
          (ae($ ? [$] : Ue), y(!!$), C(void 0, -1));
          return;
        }
        let q = p ? p(h) : new Set(h.split(" ").filter(Boolean)),
          ie = ho(e, h, q, u, B, b, w),
          X = Dt(ie),
          Re = ie.length > 0 || (E && h !== "");
        if ((ae(X), y(Re), w)) {
          let R = X.findIndex((Te) => Ke(Te, b).toLocaleLowerCase() === h),
            z = R >= 0 ? R : U,
            Ee = X[z];
          C(Ee?.value, z);
        } else {
          let { item: R, index: z } = Kt(-1, X, !1, !1);
          !g || !R || (L && !h) ? C(void 0, -1) : C(R.value, z);
        }
      },
      [p, e, u, B, b, C, U, g, L, E, v, $]
    ),
    de = (0, c.useCallback)(() => {
      r && s && ((oe.current = !0), l && (T || k(T, i)));
    }, [r, s, l, T, k, i]),
    we = (0, c.useCallback)(() => {
      ((oe.current = !1), y(!1));
    }, []),
    Le = (0, c.useCallback)(() => y(!1), []),
    G = (0, c.useCallback)(() => {
      I || (r && s && k(T, i));
    }, [I, r, s, k, T, i]),
    Be = (0, c.useCallback)(
      (a) => {
        if (
          I &&
          !(a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement)
        ) {
          y(!1);
          return;
        }
        (G(), V.current?.focus());
      },
      [G, I]
    ),
    ne = (0, c.useCallback)(
      (a, m, h, w) => {
        (K(a),
          n(
            a,
            m,
            () => {
              K(P.current);
            },
            w
          ),
          m ? y(!1) : k(a, !1));
      },
      [n, k]
    ),
    re = (0, c.useCallback)(
      (a, m, h) => {
        let w = N[m];
        if (w) {
          let q = Ke(w, b);
          (K(q),
            n(
              w.value,
              !0,
              () => {
                K(P.current);
              },
              h
            ));
        }
        d ? y(!1) : (k(P.current, !1), C(w?.value, m, !1));
      },
      [N, k, n, b, d, C]
    ),
    Se = (0, c.useCallback)(
      (a) => {
        if (!r || Ye(a)) return;
        if (!I) {
          (a.key === "ArrowDown" || a.key === "ArrowUp") && G();
          return;
        }
        let m = te.current;
        switch (a.key) {
          case "Enter": {
            if (m < 0) return;
            let h = N[m];
            if (h?.type !== "option") return;
            (Ce(a), re(h.value, m, a));
            return;
          }
          case "ArrowDown":
          case "ArrowUp": {
            let h = a.key === "ArrowUp",
              { item: w, index: q } = Kt(m, N, h, !a.repeat);
            if (!g && m >= 0 && q > m && h) {
              (Ce(a), C(void 0, -1));
              return;
            }
            if (q < 0 || !w) return;
            (Ce(a), C(w.value, q));
            return;
          }
          case "Escape": {
            (Ce(a), y(!1));
            return;
          }
        }
      },
      [r, N, C, re, g, I, G, T]
    );
  return {
    inputRef: V,
    internalValue: T,
    flatList: N,
    isOpen: I,
    highlightedIndex: U,
    highlightedItemId: _,
    longestOption: Z,
    highlightItemByValue: ye,
    focusHandler: de,
    blurHandler: we,
    closeHandler: Le,
    clickHandler: Be,
    keydownHandler: Se,
    highlightHandler: ve,
    selectHandler: re,
    changeHandler: ne,
  };
}
function jt(e) {
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
        let r = jt(o.items);
        t(r, n) && (n = r);
        return;
      }
      t(o, n) && (n = o);
    }),
    n
  );
}
function fo(e, t) {
  return e.value === t
    ? e.weight * 1e3
    : e.value.startsWith(t)
      ? e.weight * 300
      : e.value.includes(t)
        ? e.weight * 100
        : 0;
}
function po(e, t, n) {
  let o = 0;
  for (let r of e) o += fo(r, t);
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
function Ke(e, t) {
  return !e.title || t ? e.value : e.title;
}
function zt(e, t, n, o) {
  let i = [{ value: Ke(e, o).toLocaleLowerCase(), weight: 3 }];
  return (
    e.label &&
      typeof e.label == "string" &&
      i.push({ value: e.label.toLocaleLowerCase(), weight: 1 }),
    po(i, t, n)
  );
}
function De(e) {
  e.sort((t, n) => n.score - t.score);
}
var Ue = [];
function No(e) {
  return e.type === "section";
}
function ho(e, t, n, o, r, l, i) {
  if (i) return e;
  let s = [],
    g = [];
  for (let u of e) {
    if (u.type === "option") {
      let v = zt(u, t, n, l);
      v > 0 && s.push({ item: u, score: v });
      continue;
    }
    let B = [],
      p = 0;
    for (let v of u.items) {
      let S = zt(v, t, n, l);
      if (S === 0) continue;
      let P = { item: v, score: S };
      (B.push(P), (p = Math.max(P.score, p)));
    }
    if (p === 0) continue;
    o && De(B);
    let E = B.map((v) => v.item);
    g.push({ item: { ...u, items: E }, score: p });
  }
  o && (De(s), r !== !1 && De(g));
  let L = s.map(({ item: u }) => u),
    d = g.map(({ item: u }) => u),
    b = [...L, ...d];
  return b.length === 0 ? Ue : b;
}
function Dt(e) {
  if (e.length === 0) return Ue;
  let t = [];
  return (
    e.forEach((n) => {
      (t.push(n), n.type === "section" && t.push(...n.items));
    }),
    t
  );
}
function Kt(e, t, n, o) {
  let r = n ? -1 : 1,
    l = e;
  for (let i = 0; i < t.length; i++) {
    ((l += r), l >= t.length ? (l = o ? 0 : t.length - 1) : l < 0 && (l = o ? t.length - 1 : 0));
    let s = t[l];
    if (s && s.type === "option" && s.enabled !== !1) return { item: s, index: l };
  }
  return { item: null, index: -1 };
}
function Ce(e) {
  (e.preventDefault(), e.stopPropagation());
}
var f = O(J());
function bo() {}
var xo = { x: 0, y: W.values.inputSpacing },
  qt = x.default.forwardRef(function (t, n) {
    let {
        id: o,
        items: r,
        value: l,
        large: i,
        searchItemValue: s = !1,
        autoCompleteEnabled: g = !0,
        autoHighlightFirstMatch: L = !0,
        onChange: d,
        onBlur: b,
        onFocus: u,
        constantChange: B = !1,
        menuWidth: p = Me,
        menuMinWidth: E,
        menuClassName: v,
        menuWithin: S,
        menuThemeBehavior: P,
        menuOffset: I = xo,
        enabled: y = !0,
        readOnly: T,
        alignSelf: K = "start",
        openOnFocus: Z,
        showAllWhenOpened: U,
        getSearchTokens: ee,
        shrinkCompletionLabel: _ = !0,
        clearSelectionOnEmptySearch: j,
        closeAutoCompleteOnSelect: $,
        sortSectionsByRelevance: N,
        renderInput: ae,
        checkedItems: V,
        onOpenChange: te,
        backdropEnabled: ce = !1,
        stickySectionHeaders: oe,
        containOverscroll: ue,
        noSearchResultsEnabled: C = !1,
        closeAutoCompleteOnEmptySearch: ve,
        noItems: ye,
        ...me
      } = t,
      k = st(T),
      de = y && !k,
      [we, Le] = (0, x.useState)(-1),
      [G, Be] = (0, x.useState)("nearest-edge"),
      ne = x.default.useCallback((H, A) => {
        (Le(H), Be(A));
      }, []),
      [re, Se] = (0, x.useState)(p === "fit-content" || p === "input-width" ? Me : p),
      [a, m] = (0, x.useState)(I),
      h = (0, x.useCallback)(
        (H, A, se, he) => {
          ((A || B) && d(H, A, se, he), A || ne(-1, "nearest-edge"));
        },
        [d, B, ne]
      ),
      {
        inputRef: w,
        internalValue: q,
        flatList: ie,
        highlightedIndex: X,
        highlightedItemId: Re,
        isOpen: R,
        longestOption: z,
        focusHandler: Ee,
        blurHandler: Te,
        closeHandler: _e,
        clickHandler: $e,
        keydownHandler: $t,
        highlightHandler: Gt,
        selectHandler: Xt,
        changeHandler: Yt,
      } = Ut({
        items: r,
        value: l,
        searchItemValue: s,
        onChange: h,
        autoCompleteEnabled: g,
        autoHighlightFirstMatch: L,
        scrollItemIntoView: ne,
        enabled: de,
        openOnFocus: Z,
        showAllWhenOpened: U,
        clearSelectionOnEmptySearch: j,
        closeAutoCompleteOnSelect: $,
        getSearchTokens: ee,
        sortSectionsByRelevance: N,
        noSearchResultsEnabled: C,
        closeAutoCompleteOnEmptySearch: ve,
        noItems: ye,
      });
    x.default.useEffect(() => {
      te?.(R);
    }, [R, te]);
    let Jt = (H) => {
        (Ee(), u && u(H));
      },
      Qt = (H) => {
        (Te(), b && b(H));
      },
      fe = (0, x.useRef)(null),
      Zt = rt(n, w),
      pe = `${o ?? "combobox"}_listbox`,
      Ge = V !== void 0;
    return (
      (0, x.useEffect)(() => {
        let H;
        switch (p) {
          case "input-width": {
            let A = fe.current;
            if (!A) return;
            H = A.offsetWidth;
            break;
          }
          case "fit-content": {
            let A = fe.current,
              se = R ? document.getElementById(pe)?.firstElementChild : null;
            if (!z || !A || !se) return;
            let he = M(We, i && Pe),
              eo = go(z, he, se),
              ke = typeof z.label == "string" ? z.label : void 0,
              to = ke ? _t(ke, M(he, ge), se) : 0,
              oo = Ge ? It : 0,
              no = W.values.inputSpacing + (ke ? W.values.inputSpacing * 2 : 5);
            H = Math.min(eo + to + oo + bt * 2 + no + 5, A.offsetWidth);
            break;
          }
          default:
            H = p;
        }
        (Se(H), m({ ...I }));
      }, [p, z, I, i, Ge, R, pe]),
      (0, f.jsxs)(f.Fragment, {
        children: [
          ae({
            focusHandler: Jt,
            changeHandler: Yt,
            highlightedItemId: Re,
            internalValue: q,
            keydownHandler: $t,
            isOpen: R,
            enabled: de,
            readOnly: k,
            ref: Zt,
            blurHandler: Qt,
            closeHandler: _e,
            listBoxId: pe,
            clickHandler: $e,
            inputWrapperRef: fe,
            id: o,
            inputProps: me,
          }),
          g &&
            R &&
            (0, f.jsxs)(lt, {
              themeBehavior: P,
              id: pe,
              role: "listbox",
              className: M(nt, xt, v),
              style: { width: re, minWidth: E },
              showArrow: !1,
              focusTrapEnabled: !1,
              containerStyleEnabled: !1,
              anchor: fe.current,
              alignSelf: K,
              offset: a,
              within: S,
              attachTo: ["bottom", "top"],
              animateAppear: !1,
              backdropEnabled: ce,
              onClose: bo,
              children: [
                (0, f.jsx)(Mt, {
                  large: i,
                  items: ie,
                  checkedItems: V,
                  highlightedIndex: X,
                  scrollToIndex: we,
                  scrollToAlignment: G,
                  onSelect: Xt,
                  onHighlight: Gt,
                  shrinkCompletionLabel: _,
                  stickySectionHeaders: oe,
                  containOverscroll: ue,
                }),
                C &&
                  ie.length === 0 &&
                  (0, f.jsx)(dt, {
                    className: Tt,
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
  an = x.default.memo(
    x.default.forwardRef(function (t, n) {
      let {
          leftSlot: o,
          rightSlot: r,
          rightChevron: l,
          wrapperClassName: i,
          hasError: s,
          ...g
        } = t,
        L = Je();
      return (0, f.jsx)(qt, {
        ...g,
        ref: n,
        renderInput: (d) =>
          (0, f.jsxs)(ut, {
            ref: d.inputWrapperRef,
            onClick: L ? Ze(d.clickHandler) : d.clickHandler,
            className: i,
            hasError: s,
            onMouseDown: (b) => {
              (Io(b), L && Qe(b.button) && d.clickHandler(b));
            },
            children: [
              o,
              (0, f.jsx)(ct, {
                id: t.id,
                name: t.name,
                role: "combobox",
                autoComplete: "off",
                "aria-expanded": d.isOpen,
                "aria-controls": d.listBoxId,
                "aria-activedescendant": d.highlightedItemId,
                value: d.internalValue,
                title: d.internalValue,
                constantChange: !0,
                onChange: d.changeHandler,
                onFocus: d.focusHandler,
                onBlur: d.blurHandler,
                onKeyDownCapture: d.keydownHandler,
                className: Fe,
                readOnly: d.readOnly,
                enabled: d.enabled,
                ...d.inputProps,
                ref: d.ref,
              }),
              r || (l && (0, f.jsx)(He, { className: Et, children: (0, f.jsx)(at, {}) })),
            ],
          }),
      });
    })
  ),
  cn = x.default.memo(
    x.default.forwardRef(function (t, n) {
      let { leftSlot: o, rightSlot: r, wrapperClassName: l, ...i } = t;
      return (0, f.jsx)(qt, {
        ...i,
        ref: n,
        renderInput: (s) =>
          (0, f.jsxs)("div", {
            onClick: s.clickHandler,
            ref: s.inputWrapperRef,
            className: l,
            children: [
              o,
              (0, f.jsx)(ft, {
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
                className: Fe,
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
  Pt = x.default.memo(function (t) {
    let {
        type: n,
        id: o,
        index: r,
        title: l,
        label: i,
        labelWhenItemHighlighted: s,
        description: g,
        subtitle: L,
        enabled: d,
        selectable: b,
        highlighted: u,
        prevMousePositionRef: B,
        onHighlight: p,
        onSelect: E,
        shrinkLabel: v,
        checked: S,
        large: P,
        testId: I,
        onLabelClick: y,
        icon: T,
      } = t,
      K = (0, x.useCallback)(
        (j) => {
          (je(j), p(b ? o : void 0, b ? r : -1, j));
        },
        [b, o, r, p]
      ),
      Z = (0, x.useCallback)(
        (j) => {
          (je(j), b && E(o, r, j));
        },
        [b, o, r, E]
      ),
      U = et(Z, je),
      ee = Vt(K, B),
      _ = n === "section";
    return (0, f.jsxs)(Oe, {
      id: o,
      role: "option",
      "aria-selected": u,
      className: M(vt, We, P && Pe, _ && Bt, u && wt, !d && Lt),
      title: g,
      direction: "row",
      alignItems: "center",
      gap: 0,
      paddingRight: i && !_ ? W.css.inputSpacing : 5,
      paddingLeft: W.css.inputSpacing,
      justifyContent: "flex-start",
      onMouseMove: ee,
      ...U,
      children: [
        be(S)
          ? (0, f.jsx)("div", { className: Ct, children: S ? (0, f.jsx)(it, {}) : null })
          : null,
        (0, f.jsxs)(Oe, {
          direction: "row",
          alignItems: "center",
          className: yt,
          children: [
            T && (0, f.jsx)(He, { className: M(kt, xe), children: (0, f.jsx)(T, {}) }),
            !_ && L
              ? (0, f.jsxs)("div", {
                  className: M(Ae, Q, St),
                  children: [
                    (0, f.jsx)(le, { id: qe(o), children: l }),
                    (0, f.jsx)("div", { className: Rt, children: L }),
                  ],
                })
              : (0, f.jsx)(le, { id: qe(o), className: M(Ae, Q), children: l }),
            i &&
              (_
                ? (0, f.jsx)(ot, {
                    as: le,
                    className: Q,
                    variant: y ? void 0 : "neutral",
                    onClick: y,
                    "data-testid": I ? `${I}-label-badge` : void 0,
                    children: i,
                  })
                : typeof i == "string"
                  ? (0, f.jsx)(le, { className: M(ge, v ? Q : xe), children: i })
                  : (0, f.jsx)("div", { className: M(ge, v ? Q : xe), children: u && s ? s : i })),
          ],
        }),
      ],
    });
  });
function qe(e) {
  return `${e}_text`;
}
function go(e, t, n) {
  let o = qe(e.value),
    r = document.getElementById(o);
  return r ? r.scrollWidth : _t(e.title ?? e.value, t, n);
}
var F = null;
function _t(e, t, n) {
  let o = 0;
  return (
    F ||
      ((F = document.createElement("span")),
      (F.style.position = "absolute"),
      (F.style.visibility = "hidden"),
      (F.style.whiteSpace = "nowrap")),
    (F.className = t),
    (F.innerText = e),
    n.appendChild(F),
    (o = F.scrollWidth),
    F.parentNode?.removeChild(F),
    o
  );
}
function je(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Io(e) {
  e.target instanceof HTMLInputElement || e.preventDefault();
}
export {
  Tt as a,
  Mt as b,
  Ft as c,
  le as d,
  Vt as e,
  Ut as f,
  No as g,
  ho as h,
  Dt as i,
  Kt as j,
  qt as k,
  an as l,
  cn as m,
  Io as n,
};
//# sourceMappingURL=chunk-7I2YCD56.mjs.map
