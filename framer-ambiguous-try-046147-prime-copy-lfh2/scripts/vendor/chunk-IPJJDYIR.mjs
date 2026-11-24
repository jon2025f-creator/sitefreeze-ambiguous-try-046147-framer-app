import { d as K, e as te, f as G, g as ne } from "chunk-HDO2UBC4.mjs";
import { r as z, s as j } from "chunk-V5O7RBXB.mjs";
import { a as ee } from "chunk-OGQCKB6U.mjs";
import { b as J } from "chunk-P6Q3LWLD.mjs";
import { b as Q } from "chunk-TS24LVSZ.mjs";
import { b as Z } from "chunk-IMG6DEFK.mjs";
import { a as N } from "chunk-QFU6OGL3.mjs";
import { Cf as _, If as X, Wf as Y } from "chunk-DPHJW6UJ.mjs";
import { c as $ } from "chunk-AYNVEX5D.mjs";
import { a as Ee } from "chunk-LUZ6ND5K.mjs";
import { a as L } from "chunk-2FCXHKEL.mjs";
import { a as B } from "chunk-SWYZG2NI.mjs";
import { b as O } from "chunk-4JY5UMT2.mjs";
import { e as E } from "chunk-WLHSDIGQ.mjs";
var re = E(B());
var F = class extends re.default.Component {
  originalTransition = null;
  storeOriginalTransition() {
    if (this.originalTransition) return;
    let e = this.getElement();
    if (!e) return;
    let t = e.style.transition;
    t && (this.originalTransition = t);
  }
  getTransition() {
    return this.originalTransition ?? "transform 0.2s cubic-bezier(0.2, 0, 0, 1)";
  }
  getElement() {
    let e = this.props.elementRef.current;
    return e || null;
  }
  getElementTopLeft() {
    let e = this.getElement();
    if (!e) return null;
    let { left: t, top: r } = e.getBoundingClientRect();
    return { x: t, y: r };
  }
  getSnapshotBeforeUpdate(e) {
    let t = this.props.enabled !== !1 && e.enabled !== !1;
    if ((this.storeOriginalTransition(), !t)) {
      let i = this.getElement();
      return (i && (i.style.transition = ""), null);
    }
    return z(this.props.dependencies, e.dependencies) ? null : this.getElementTopLeft();
  }
  componentDidUpdate(e, t, r) {
    if (!r) return;
    let i = this.getElement();
    if (!i) return;
    let l = this.getElementTopLeft();
    if (!l) return;
    let o = r.x - l.x,
      c = r.y - l.y;
    (o === 0 && c === 0) ||
      ((i.style.transition = ""),
      (i.style.transform = `translate(${o}px, ${c}px)`),
      i.getBoundingClientRect(),
      (i.style.transition = this.getTransition()),
      (i.style.transform = ""));
  }
  render() {
    return this.props.children;
  }
};
var g = E(B()),
  le = E(Ee());
var q;
((e) => {
  function n({ x: t, y: r, width: i, height: l }) {
    return { x: t + i / 2, y: r + l / 2 };
  }
  e.center = n;
})((q ||= {}));
var y = E(B());
var oe = "dafeksh",
  ie = "hl2u4y9";
var S = E(L());
function se({
  item: n,
  index: e,
  sortIndex: t,
  visible: r,
  isRemovingItem: i,
  children: l,
  className: o,
  enabled: c,
  onDrag: x,
  onDragEnd: D,
  onDragStart: m,
  onDropAnimationEnd: I,
  dragProperties: k,
  dropAnimationProperties: C,
  customDragPreview: b,
  positionTransitionEnabled: H,
}) {
  let w = y.default.useRef(null),
    R = y.default.useRef(null),
    A = y.default.useRef(I);
  A.current = I;
  let T = y.default.useRef(!1);
  y.default.useLayoutEffect(
    () => (
      (R.current = De(w)),
      () => {
        R.current = null;
      }
    ),
    []
  );
  let h = y.default.useCallback(
      (P) => {
        let p = document.activeElement;
        ((T.current = !!p && p === R.current), m(P, n, e));
      },
      [n, e, m]
    ),
    v = y.default.useCallback(() => {
      let P = A.current;
      if ((P && P(), T.current)) {
        let p = R.current;
        p && p.focus();
      }
    }, []),
    a = y.default.useCallback(() => (b ? b(e) : (0, S.jsx)(S.Fragment, {})), [b, e]);
  return (
    ne({
      ref: R,
      enabled: c,
      onDragStart: h,
      onDrag: x,
      onDragEnd: D,
      onDropAnimationEnd: v,
      dragProperties: k,
      dropAnimationProperties: C,
      customDragPreview: b && a,
      opaqueDragPreview: !0,
    }),
    (0, S.jsx)(F, {
      elementRef: R,
      enabled: H,
      dependencies: [e, t, i],
      children: (0, S.jsx)("div", {
        [te]: "true",
        className: N(oe, !r && ie, o),
        ref: w,
        children: l,
      }),
    })
  );
}
function De(n) {
  let e = n.current;
  if (!(e instanceof HTMLDivElement)) return null;
  let t = e.firstChild;
  return t instanceof HTMLDivElement || t instanceof HTMLButtonElement ? t : null;
}
var M = E(L());
function Qe(n) {
  let {
      items: e,
      keyForItem: t,
      children: r,
      header: i,
      footer: l,
      enabled: o = !0,
      style: c,
      onlyAnimateItemPositionsWhileDragging: x,
      onTransitionEnd: D,
      autoSizeAnimationEnabled: m = !0,
      className: I,
      disableCustomDragPreview: k,
      onDragStart: C,
      onDragComplete: b,
      removeItem: H,
      moveItem: w,
    } = n,
    R = Q(),
    A = J(),
    T = g.default.useRef(null),
    [h, v] = g.default.useState(null),
    a = g.default.useMemo(() => (h && !h.ended && !z(h.itemKeys, e.map(t)) ? null : h), [h, e, t]);
  g.default.useEffect(() => {
    if (!h || a) return;
    v(null);
    let s = h.itemKeys[h.index];
    e.some((u) => t(u) === s) || b?.();
  }, [h, a, e, t, b]);
  let P = ye(n, a);
  a?.ended && a.itemsWhenEnded !== e && v(null);
  let p = a?.itemsWhenEnded ?? e,
    me = g.default.useCallback(
      (s, u, d) => {
        C && C(s, u);
        let f = Pe(T, d);
        f.length !== 0 && v({ index: d, dropIndex: d, insertionRects: f, itemKeys: e.map(t) });
      },
      [C, e, t]
    ),
    V = !!H,
    fe = g.default.useCallback(
      (s) => {
        if (!a || !T.current) return;
        let u;
        if (Ce(s.client, T.current)) u = V ? null : a.index;
        else {
          let d = K.add(s.client, s.centerOfGravityOffset);
          u = He(d, T.current, a);
        }
        v((d) => (d ? (d.dropIndex === u ? d : { ...d, dropIndex: u }) : null));
      },
      [a, V]
    ),
    pe = g.default.useCallback((s) => {
      s.cancelled && v((u) => (u ? { ...u, dropIndex: u.index } : null));
    }, []),
    ge = g.default.useCallback(() => {
      if (!a) {
        (v(null), b?.());
        return;
      }
      let { index: s, dropIndex: u } = a,
        d;
      if ((ee(u) && s !== u ? (d = () => w(s, u)) : u === null && H && (d = () => H(s)), !d)) {
        (v(null), b?.());
        return;
      }
      ((0, le.flushSync)(() => {
        v((f) => (f ? { ...f, ended: !0, itemsWhenEnded: p } : null));
      }),
        d(),
        b?.(),
        setTimeout(() => {
          v((f) => (f ? (f.ended ? null : f) : null));
        }, 50));
    }, [a, H, p, w, b]),
    be = g.default.useCallback(
      () => (a ? { opacity: a.dropIndex === null ? 0.3 : 0.8 } : null),
      [a]
    ),
    he = g.default.useCallback(() => {
      if (!a || !T.current) return null;
      let { dropIndex: s } = ae(a);
      if (s === null) return { opacity: 0 };
      let { offsetLeft: u, offsetTop: d } = Ie(T.current),
        f = a.insertionRects[s];
      return (
        O(f, `dropAnimationProperties: No insertion rect at dropIndex ${s}`),
        { x: u + f.x, y: d + f.y, scale: 1, opacity: 1 }
      );
    }, [a]),
    ve = g.default.useCallback(
      (s) => {
        let u = p[s];
        return (
          O(u, `dragPreview: Item at index ${s} not found`),
          r({ item: u, index: s, isDragPreview: !0, isDragEnabled: o })
        );
      },
      [p, r, o]
    );
  return (0, M.jsx)(Z, {
    children: (0, M.jsxs)(
      j,
      {
        innerRef: T,
        className: I,
        style: { position: "relative", boxSizing: "border-box", ...c },
        dependencies: [p.length, P],
        onTransitionEnd: D,
        animationEnabled: m,
        children: [
          i,
          Re(p, a, P).map((s, u) =>
            (0, M.jsx)(
              se,
              {
                item: s.item,
                enabled: o && !R,
                positionTransitionEnabled: x ? !!a : !0,
                index: s.index,
                sortIndex: u,
                visible: s.visible,
                isRemovingItem: P,
                onDragStart: me,
                onDrag: fe,
                onDragEnd: pe,
                onDropAnimationEnd: ge,
                dragProperties: be,
                dropAnimationProperties: he,
                customDragPreview: k ? void 0 : ve,
                children: r({ item: s.item, index: s.index, isDragPreview: !1, isDragEnabled: o }),
              },
              t(s.item)
            )
          ),
          l,
        ],
      },
      A
    ),
  });
}
function ye(n, e) {
  return !!n.removeItem && !!e && e.dropIndex === null;
}
function xe(n, e, t) {
  return (
    O(
      n.length > 0 && e >= 0 && e < n.length && t >= 0 && t < n.length,
      `moveListItem: indices out of bounds (fromIndex: ${e}, toIndex: ${t}, length: ${n.length})`
    ),
    n.splice(t, 0, n.splice(e, 1)[0]),
    n
  );
}
function Re(n, e, t) {
  let { dragIndex: r, dropIndex: i } = ae(e),
    l = n.map((o, c) => ({ item: o, index: c, visible: !t || c !== r }));
  return r === null || r === i || i === null ? l : xe(l, r, i);
}
function ae(n) {
  return { dragIndex: n ? n.index : null, dropIndex: n ? n.dropIndex : null };
}
function U(n) {
  if (!G(n) || !(n.firstChild instanceof HTMLElement)) return null;
  let { offsetLeft: e, offsetTop: t, offsetWidth: r, offsetHeight: i } = n.firstChild;
  return { x: e, y: t, width: r, height: i };
}
function Pe(n, e) {
  let t = [],
    r = n.current;
  if (!r) return t;
  let l = !G(r.firstChild) ? e + 1 : e,
    o = r.childNodes[l],
    c = [...r.childNodes];
  if (!(o instanceof HTMLDivElement)) return t;
  let x = o.nextSibling,
    D = !1;
  if (
    (c.forEach((m, I) => {
      if (m === o) return;
      if (!G(m)) {
        if (I === 0) return;
        D = !0;
      }
      r.insertBefore(o, m);
      let k = U(o);
      k && t.push(k);
    }),
    !D)
  ) {
    r.insertBefore(o, null);
    let m = U(o);
    m && t.push(m);
  }
  if ((r.insertBefore(o, x), t.length === 0)) {
    let m = U(o);
    m && t.push(m);
  }
  return t;
}
function Ie(n) {
  let e = n.getBoundingClientRect(),
    t = e.top,
    i = e.left + n.clientLeft,
    l = t + n.clientTop;
  return { offsetLeft: i, offsetTop: l };
}
function ke(n, e) {
  let t = 1 / 0,
    r = 0;
  return (
    n.forEach((i, l) => {
      let o = q.center(i),
        c = K.distance(o, e);
      c < t && ((t = c), (r = l));
    }),
    r
  );
}
function Ce(n, e) {
  let { top: t, left: r, width: i, height: l } = e.getBoundingClientRect(),
    { x: o, y: c } = n;
  return o < r || o > r + i || c < t || c > t + l;
}
function He(n, e, t) {
  let { top: r, left: i } = e.getBoundingClientRect(),
    l = n.x - i,
    o = n.y - r;
  return ke(t.insertionRects, { x: l, y: o });
}
var W = E(B());
var ue = "plyku67",
  ce = "h1sx89rv";
var de = E(L());
function lt({ className: n, value: e, startFromZero: t, max: r = 1, ...i }) {
  let l = (0, W.useRef)(null),
    o = X(t ? 0 : e),
    c = o.get();
  return (
    (0, W.useEffect)(() => {
      Y(o, e, { type: "tween" });
    }, [e, o]),
    _(o, "change", (x) => {
      if (!$(x)) return;
      let D = l.current;
      D && (D.value = x);
    }),
    (0, de.jsx)("progress", {
      ref: l,
      className: N(ue, e > 0 && ce, n),
      value: $(c) ? c : 0,
      max: r,
      ...i,
    })
  );
}
export { lt as a, F as b, Qe as c };
//# sourceMappingURL=chunk-IPJJDYIR.mjs.map
