import { c as dt } from "chunk-4VJ2IMVF.mjs";
import { J as it, K as at, N as st } from "chunk-HFLAFPWM.mjs";
import { a as Z } from "chunk-KSSME57A.mjs";
import { a as Ce } from "chunk-E5EFE6O3.mjs";
import { c as he } from "chunk-T7P2VGOH.mjs";
import { f as ot, p as nt, q as E } from "chunk-HADVOC2Y.mjs";
import { b as tt } from "chunk-SPYOA764.mjs";
import {
  Gf as _e,
  Gq as We,
  Mj as He,
  Pi as Be,
  Qy as Qe,
  Ry as et,
  _x as Ye,
  ay as Ze,
  fc as Ae,
  gw as Je,
  jv as Ke,
  kv as $e,
  mt as Ue,
  mv as w,
  nv as qe,
  ov as Xe,
  rw as D,
  su as je,
  ue as Oe,
  we as ze,
} from "chunk-LBKZPB25.mjs";
import {
  Ab as be,
  Bb as Re,
  Ca as ve,
  Dh as we,
  Eh as Me,
  Fh as ke,
  Go as Ge,
  Nd as xe,
  O as ce,
  ak as F,
  bj as Ne,
  ch as Te,
  dh as Se,
  eh as Le,
  he as Y,
  j as $,
  ja as ue,
  ka as B,
  la as fe,
  lh as Ve,
  ma as H,
  oa as P,
  of as Ie,
  qf as Pe,
  sa as ye,
  ta as ge,
  u as q,
  ua as J,
  wj as Fe,
  xj as De,
  yj as Ee,
} from "chunk-KZ3J5BLF.mjs";
import { b as rt } from "chunk-RHJ4RSOB.mjs";
import { Ue as le } from "chunk-EQXTYSGC.mjs";
import { a as X } from "chunk-7BWPFUCH.mjs";
import { a as h } from "chunk-2FCXHKEL.mjs";
import { b, f as W, h as U } from "chunk-LA34HORX.mjs";
import { a as V } from "chunk-SWYZG2NI.mjs";
import { b as me } from "chunk-4JY5UMT2.mjs";
import { k as pe } from "chunk-VHFKZWVR.mjs";
import { h as de } from "chunk-KPMZENE5.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var Zt = "groundNodeWrapper",
  Qt = "d197x122",
  er = "dpj2ndz",
  tr = "d1tskyf",
  rr = "d74qriz",
  or = "dyirmfz",
  nr = "gh7q592",
  ir = "c880hsu";
var Q = c(h(), 1);
function ur({ tree: e, componentLoader: t, node: r, richTextProps: o, children: n }) {
  let i = r.getComponentPresets(),
    s = {},
    p = dt();
  for (let [m, a] of i) {
    let d = e.get(a);
    if (!d) continue;
    d.linkTo(r.id);
    let l = t.reactComponentForIdentifier(d.componentIdentifier);
    if (((d.cache.isComponentLoaded = !!l), !l)) continue;
    let u = d.getRawControlProps(),
      f = tt(l, "onlyPresets"),
      C = je(f, u);
    s[m] = Ye(
      f,
      C,
      Ze({
        assetResolverWithHash: p,
        variableValueResolver: d.cache,
        getVariableControlByReference: (y) => d.cache.getVariableControlByReference(y),
        getResolvedFetchDataValue: void 0,
        getCanvasTree: () => e,
        componentLoader: t,
      })
    );
  }
  return (0, Q.jsx)(Ie, { presets: s, children: (0, Q.jsx)(Ve, { ...o, children: n }) });
}
function j(e) {
  return !(
    e.hasAttribute("data-debug") ||
    e.hasAttribute("data-frame-border") ||
    e.hasAttribute("data-empty-state") ||
    e.hasAttribute("data-framer-background-image-wrapper")
  );
}
function pt(e) {
  if (!e) return [];
  let t = Array.from(e.children),
    r = t.length;
  if (r === 0) return [];
  let o = t.map((s) => Array.from(s.children).filter(j)),
    n = o.reduce((s, p) => s + p.length, 0),
    i = [];
  for (let s = 0; i.length < n; s++) {
    let p = Te(r, s),
      m = o[p];
    if (m && m.length > 0) {
      let a = m.shift();
      if (!a) continue;
      i.push(a);
    }
  }
  return i;
}
var ee = c(V(), 1),
  te = c(h(), 1);
function mt(e, t) {
  let o = ee.default.Children.toArray(e).filter(
    (n) => ee.default.isValidElement(n) && (n.props.visible ?? !0)
  );
  if (t) {
    let n = 0;
    for (let {
      index: i,
      attributes: { width: s, height: p, style: m },
    } of t) {
      let a = (0, te.jsx)(Pt, { width: s, height: p, style: m }, n);
      ((n += 1), o.splice(i, 0, a));
    }
  }
  return o;
}
function Pt({ width: e, height: t, style: r }) {
  return (0, te.jsx)(P, {
    width: e,
    height: t,
    style: { position: "relative", ...r },
    background: rt.tint,
    opacity: 0.1,
  });
}
var M = c(V(), 1);
var A = c(h(), 1),
  Tt = Se(P),
  Fr = M.default.forwardRef(function (t, r) {
    let {
        visible: o,
        placeholders: n,
        children: i,
        _needsMeasure: s,
        isRepeater: p = !1,
        style: m,
        ...a
      } = t,
      d = M.default.useContext(B),
      l = M.default.useRef(null),
      u = r ?? l,
      f = t.node && Y(t.node) ? pt : St;
    H(t, u, f);
    let C = mt(i, n);
    if ((pe() && ((C = Lt(C)), lt(m || {})), o === !1)) return null;
    let y = t.node && Y(t.node) ? Tt : P;
    return d
      ? (0, A.jsx)(q, {
          parentSize: 1,
          children: (0, A.jsx)(y, { ...a, style: m, ref: u, children: C }),
        })
      : (0, A.jsx)(q, {
          parentSize: p ? 1 : 2,
          children: (0, A.jsx)(y, { ...a, style: m, ref: u, children: C }),
        });
  });
function St(e) {
  return e ? Array.from(e.children).filter(j) : [];
}
function lt(e) {
  (!("rotate" in e) || e.rotate === 0) && (e.rotate = "0deg");
}
function Lt(e) {
  return e.map((t) => {
    if (!M.default.isValidElement(t)) return t;
    let r = t.props.style || {};
    return (lt(r), M.default.cloneElement(t, { style: r }));
  });
}
var ct = c(V(), 1);
function Br() {
  return { selectorCache: new Map(), breakpointCache: new Map() };
}
function Vt(e, t, r) {
  if (!t) return [];
  if (!e) return [];
  let o = r.get(e) ?? JSON.parse(e);
  return (r.set(e, o), o[t]);
}
function wt(e, t) {
  if (!e) return;
  let r = t.get(e) ?? JSON.parse(e);
  if (ze(r)) return (t.set(e, r), r);
}
function Hr(e, t, r, o) {
  let n = e.componentForIdentifier(t)?.annotations,
    i = n?.framerBreakpoints,
    s = n?.framerDefaultVariant,
    p = n?.framerHitTargets;
  return (0, ct.useMemo)(() => {
    if (r === void 0) return;
    let m = wt(i, o.breakpointCache),
      a = Oe(m, r) ?? s;
    if (a)
      return {
        activeVariant: a,
        selectors: Vt(p, a, o.selectorCache),
        className: m?.[a]?.canvasClassName,
        minHeight: m?.[a]?.minHeight ?? 1e3,
        rootFontSize: m?.[a]?.rootFontSize ?? Ae,
      };
  }, [i, p, s, r, o]);
}
var L = c(V(), 1);
var G = c(V(), 1);
var O = c(h(), 1),
  Mt = de("SandboxComponentError");
function kt(e, t) {
  let r = ve(e);
  return ye(r)
    ? ot(r)
      ? !0
      : t === "canvasComponent"
    : !!(ge(r) && (r.type === "canvasComponent" || r.type === "screen"));
}
var Nt = /\s*(?:at|in) (\S+)/;
function Ft(e, t) {
  let r = [];
  for (let o of e.split(`
`)) {
    if (!o) continue;
    if (o.match(Nt)?.[1] === t.name) break;
    r.push(o);
  }
  return r;
}
function ut(e) {
  class t extends G.default.Component {
    logsToSentry = !1;
    lastComponentIdentifier;
    state = { isOverBudget: !1 };
    shouldLogToSentry(o, n) {
      return this.lastComponentIdentifier === o
        ? this.logsToSentry
        : ((this.lastComponentIdentifier = o), (this.logsToSentry = kt(o, n)));
    }
    scheduledTimer;
    scheduleRerenderDueToBudget() {
      this.scheduledTimer ||
        (this.scheduledTimer = window.setTimeout(() => {
          ((this.scheduledTimer = void 0), this.setState({ isOverBudget: !1 }));
        }, 0));
    }
    static getDerivedStateFromError(o) {
      return { lastError: { error: o } };
    }
    componentDidCatch(o, n) {
      if (o instanceof Ce) {
        (this.setState({ isOverBudget: !0 }), this.scheduleRerenderDueToBudget());
        return;
      }
      let i = n.componentStack ? Ft(n.componentStack, this.constructor) : void 0;
      this.setState({ lastError: { error: o, stack: i } });
    }
    renderErrorPlaceholder(o) {
      let n = {};
      return (
        this.props.widthType === 2 && ((n.width = 200), (n.widthType = 0)),
        this.props.heightType === 2 && ((n.height = 200), (n.heightType = 0)),
        (0, O.jsx)(P, {
          ...this.props,
          layoutId: void 0,
          layoutIdKey: void 0,
          ...n,
          background: null,
          children: (0, O.jsx)(he, { error: o }),
        })
      );
    }
    componentDidUpdate(o, n) {
      (this.props.__rendering?.setLastRenderingError(this.state.lastError?.error ?? null),
        this.state.lastError !== void 0 &&
          n.lastError === this.state.lastError &&
          this.setState({ lastError: void 0 }));
    }
    render() {
      let {
          componentLoader: o,
          __logger: n = Mt,
          __externalModuleType: i,
          __rendering: s,
          forwardedRef: p,
          ...m
        } = this.props,
        a = this.props.componentIdentifier,
        { lastError: d } = this.state;
      if (Dt(this.props.children)) {
        let l = o.errorForIdentifier(a);
        if (l) {
          let u = Z(l, void 0);
          return this.renderErrorPlaceholder(u);
        }
      }
      if (this.state.isOverBudget) return this.renderErrorPlaceholder({ message: "", title: "" });
      if (d) {
        let l = o.componentForIdentifier(a),
          u = Z(l, d.error);
        if (this.shouldLogToSentry(a, i)) {
          let f = l ? l.file : "???";
          n.reportErrorOncePerMinute(d.error, { file: f, stack: d.stack });
        }
        return this.renderErrorPlaceholder(u);
      }
      return (0, O.jsx)(e, { ...m, ref: p });
    }
  }
  return G.default.forwardRef((r, o) => (0, O.jsx)(t, { ...r, forwardedRef: o }));
}
function Dt(e) {
  if (!e) return !0;
  if (Array.isArray(e)) {
    let t = G.default.Children.count(e);
    if (t === 0) return !0;
    let [r] = e;
    if (r === null && t === 1) return !0;
  }
  return !1;
}
var re = c(V(), 1),
  ht = c(h(), 1),
  ft = (e) =>
    re.default.forwardRef((t, r) => {
      let { innerRef: o, ...n } = t,
        i = re.default.useRef(null),
        s = o ?? i;
      return (H(n, s, fe), (0, ht.jsx)(e, { ...t, innerRef: s, ref: r }));
    });
var S = c(h(), 1);
function Et(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : !1;
}
var oe = class extends L.default.Component {
    shouldComponentUpdate(t) {
      return !X(this.props, t, !0);
    }
    render() {
      return this.props.children;
    }
  },
  ne = class extends L.default.Component {
    shouldComponentUpdate(t) {
      let r = $.current() !== $.canvas;
      return t._needsMeasure || !X(this.props, t, r);
    }
    render() {
      let {
          children: t,
          innerRef: r,
          forwardedRef: o,
          componentIdentifier: n,
          __withWidth: i,
          isSlotContainer: s,
          ...p
        } = this.props,
        m = this.props.layoutId,
        a = ce(),
        d = !Et(n),
        { frameProps: l, childProps: u = {} } = Ot(p, {
          layoutId: m,
          forwardedRef: o,
          onCanvas: a,
        });
      (i && (u.width = p.width), window.__checkComponentBudget__?.());
      let f = t;
      return (
        (!a || i) &&
          (f = L.default.Children.map(t, (C) =>
            L.default.isValidElement(C) ? L.default.cloneElement(C, u) : C
          )),
        a
          ? (f = (0, S.jsx)(oe, { children: f }))
          : d &&
            (f = (0, S.jsx)(le, {
              inherit: !1,
              id: m,
              children: (0, S.jsx)(ue, { enabled: !1, children: f }),
            })),
        (0, S.jsx)(B.Provider, {
          value: !s,
          children: (0, S.jsx)(P, {
            "data-framer-component-container": !0,
            background: null,
            overflow: "visible",
            ref: r,
            ...l,
            "data-framer-component-type": "ComponentContainer",
            style: { ...l.style, pointerEvents: void 0 },
            children: f,
          }),
        })
      );
    }
  },
  At = L.default.forwardRef((e, t) => (0, S.jsx)(ne, { ...e, forwardedRef: t })),
  ho = ut(Pe(ft(At)));
function Ot(e, { layoutId: t, forwardedRef: r, onCanvas: o }) {
  if (o) return { frameProps: e };
  let {
    opacity: n,
    children: i,
    left: s,
    right: p,
    top: m,
    bottom: a,
    center: d,
    centerX: l,
    centerY: u,
    aspectRatio: f,
    parentSize: C,
    width: y,
    height: g,
    rotation: T,
    visible: k,
    _constraints: R,
    _initialStyle: v,
    name: x,
    positionSticky: se,
    positionStickyTop: I,
    positionStickyRight: N,
    positionStickyBottom: z,
    positionStickyLeft: _,
    style: vt,
    duplicatedFrom: bt,
    widthType: Rt,
    heightType: xt,
    ...It
  } = e;
  return {
    childProps: Object.assign(It, { ref: r }),
    frameProps: {
      id: e.id + "-container",
      layoutId: t,
      style: vt,
      _constraints: R,
      _initialStyle: v,
      left: s,
      right: p,
      top: m,
      bottom: a,
      center: d,
      centerX: l,
      centerY: u,
      aspectRatio: f,
      parentSize: C,
      width: y,
      height: g,
      rotation: T,
      visible: k,
      name: x,
      duplicatedFrom: bt,
      widthType: Rt,
      heightType: xt,
      positionSticky: se,
      positionStickyTop: I,
      positionStickyRight: N,
      positionStickyBottom: z,
      positionStickyLeft: _,
    },
  };
}
var ie = c(h(), 1),
  Ct = "framer-viewport-portal-root";
function go(e) {
  return e.id.startsWith(Ct);
}
function zt(e, t = "none") {
  return `${Ct}-${e}-${t}`;
}
var vo = ({ id: e, viewportHeight: t, type: r }) =>
    (0, ie.jsx)("div", {
      id: zt(e, r),
      style: { top: 0, left: 0, right: 0, position: "absolute", height: t, maxHeight: "100%" },
    }),
  _t = "framer-portal-root";
function Bt(e, t = "none") {
  return `${_t}-${e}-${t}`;
}
var bo = ({ id: e, type: t }) =>
  (0, ie.jsx)("div", {
    id: Bt(e, t),
    style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: He },
  });
var ae = c(h(), 1);
function Vo(e) {
  if (!e.__unsafeIsGroundNode()) return;
  let { contentOffsetX: t, contentOffsetY: r } = we(e.x, e.y);
  return { left: t, top: r };
}
function Ht(e, t, r, o, n, i, s) {
  let p = s ?? e.getProps(t, r),
    m = e.resolveValue("visible", r) !== !1;
  if ((o.setVisible(n, m), Re(e)))
    return (0, ae.jsx)(ke, {
      ...p,
      isRootVectorNode: i,
      children: e.children.map((a) => {
        let d = w(n, a.id);
        return Ht(a, t, r, o, d, !1, void 0);
      }),
    });
  if (Ne(e)) {
    if (be(e))
      for (let a of e.walk()) {
        if (a === e) continue;
        let d = w(n, a.id);
        o.setVisible(d, a.resolveValue("visible", r) !== !1);
      }
    return (0, ae.jsx)(Me, { ...p, isRootVectorNode: i });
  }
  throw Error(`WARNING: Unknown vector node: ${e.__class}`);
}
function Wt({
  tree: e,
  node: t,
  renderId: r,
  componentLoader: o,
  componentLoaderHash: n,
  sandboxRepeaterData: i,
  combinedValueMap: s,
  combinedControlMap: p,
  trackLoaded: m,
  maxItems: a,
}) {
  let d = De(e, t);
  if (!d) {
    let { controlMap: I } = D(void 0);
    return (i.set(r, void 0, I), null);
  }
  let l = d.providerId;
  me(l, "Variable must have providerId");
  let u = Ue(t, l);
  if (!u) {
    let { controlMap: I } = D(void 0);
    return (i.set(r, void 0, I), null);
  }
  let f = u.getProvidedControlMap(e, t, o, n),
    C = p?.get(l)?.get(d.id),
    y = f?.get(d.id),
    g = C ?? y,
    { controlMap: T } = D(g);
  m?.(r);
  let k = u.getProvidedValueMap(e, t, o, i, n),
    R = s?.get(l)?.get(d.id) ?? k?.get(d.id),
    v = t.repeatArrayTransforms?.length ? Ee(e, t) : void 0,
    x = v ? $e(v, t.cache, s, g, g, t.cache.activeRouterLocale, { startValue: R }) : R;
  return !U(x) || !x.every(W)
    ? (i.set(r, void 0, T), null)
    : (i.set(r, x, T, v ? "shallow" : "identity"),
      x.length === 0
        ? null
        : {
            items: (a === void 0 ? x : x.slice(0, a)).map((I, N) => {
              let z = b(I.id) ? I.id : N,
                _ = qe(r, t.id, z, N);
              return { id: z, index: N, value: I, parentRenderId: _, renderId: w(_, t.id) };
            }),
            arrayControl: g,
            itemCount: x.length,
          });
}
function zo({
  tree: e,
  node: t,
  itemValue: r,
  itemIndex: o,
  arrayControl: n,
  itemCount: i,
  combinedValueMap: s,
  combinedControlMap: p,
}) {
  let { controlMap: m } = D(n),
    a = new Map(p);
  a.set(t.getPrimaryId(), m);
  let d = new Map(s),
    l = Je(e, m, r, o, i);
  return (d.set(t.getPrimaryId(), l), { combinedValueMap: d, combinedControlMap: a });
}
function Ut(e, t) {
  return `${e}-${t}`;
}
function _o({
  tree: e,
  componentNodeId: t,
  componentRenderId: r,
  slotKey: o,
  slotItems: n,
  maxItemCount: i,
  componentLoader: s,
  componentLoaderHash: p,
  sandboxRepeaterData: m,
  combinedValueMap: a,
  combinedControlMap: d,
  trackLoaded: l,
}) {
  let u = [];
  for (let f of n) {
    let C = i === void 0 ? void 0 : i - u.length,
      y = Xe(r, t, o, f.key),
      g = f.node;
    if (!Fe(g)) {
      if (C === 0) continue;
      u.push({
        key: f.key,
        node: g,
        parentRenderId: y,
        renderId: y,
        repeatItem: void 0,
        repeatArrayControl: void 0,
        repeatItemCount: void 0,
      });
      continue;
    }
    let T = g,
      k = w(y, T.id),
      R = Wt({
        tree: e,
        node: T,
        renderId: k,
        componentLoader: s,
        componentLoaderHash: p,
        sandboxRepeaterData: m,
        combinedValueMap: a,
        combinedControlMap: d,
        trackLoaded: l,
        maxItems: C,
      });
    if (R)
      for (let v of R.items)
        u.push({
          key: Ut(f.key, v.id),
          node: T,
          parentRenderId: v.parentRenderId,
          renderId: v.renderId,
          repeatItem: v,
          repeatArrayControl: R.arrayControl,
          repeatItemCount: R.itemCount,
        });
  }
  return u;
}
function jt(e) {
  let t = e.cache;
  if (
    t.lastUpdate !== e.update &&
    ((t.lastUpdate = e.update), (t.calculatedPaths = null), e.children)
  )
    for (let r of e.children) jt(r);
}
var gt = c(h(), 1),
  yt = new WeakMap();
function Gt(e, t) {
  let r = yt.get(e);
  if (r !== void 0) return r;
  let o = Be(e, t.getProseMirrorSchema());
  return (yt.set(e, o), o);
}
function en(e, t, r) {
  if (e.htmlContent) {
    let i = e.resolveValue("htmlContent", t);
    return b(i) ? E(i) : F(i) ? nt(i) : i;
  }
  let o = e.html,
    n = _e(r, e.htmlLocalized);
  if (n) {
    let i = F(o) ? Gt(o, e) : o,
      s = at(i),
      p = it(s, n, i);
    p && (o = st(i, p));
  }
  return E(o);
}
function tn(e, t, r) {
  let o = e.textContent;
  if (!xe(o)) return;
  let n = o.transforms[0],
    i = Ke(o, t, e.cache, r);
  if (b(i))
    return (0, gt.jsx)(Le, {
      date: i,
      dateFormat: n.format,
      dateStyle: n.dateStyle,
      dateCapitalize: n.capitalize,
      locale: n.locale,
    });
}
function rn(e, t) {
  if (!t?.id || !e.textFitViewBoxSize || !e.textFitViewBoxSizeLocalized) return;
  let r = e.textFitViewBoxSizeLocalized[t.id];
  if (r) return We(r);
}
function K(e, t, r, o) {
  let n = t.getControlPropSourceIdentifier();
  if (!n) return;
  let i = r.getPropertyControlsForIdentifier(n);
  if (!i) return;
  let s = Qe(r, n);
  for (let p in i) {
    let m = i[p];
    if (!Ge(m)) continue;
    let a = s ? et(s, p) : p,
      d = e[a],
      l = $t(d, m.control.controls, o);
    l !== d && (e[a] = l);
  }
}
function $t(e, t, r) {
  if (!U(e)) return e;
  let o;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    if (!W(i)) continue;
    let s;
    for (let p in t) {
      let m = t[p];
      if (!m) continue;
      let a = i[p],
        d = r(m, a);
      d !== a && ((s ??= { ...i }), (s[p] = d));
    }
    s && ((o ??= [...e]), (o[n] = s));
  }
  return o ?? e;
}
function mn(e, t, r, o) {
  K(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && J(i) ? o(i) : i));
}
function ln(e, t, r) {
  let o = [];
  return (K(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && J(i) && o.push(i), i)), o);
}
function gn(e, t, r) {
  K(e, t, r.componentLoader, (o, n) => (o.type === "richtext" ? qt(n, r) : n));
}
function qt(e, t) {
  return !b(e) && !F(e)
    ? e
    : E(
        e,
        {
          componentLoader: t.componentLoader,
          resolveVectorSetItem: t.resolveVectorSetItem,
          tree: t.tree,
        },
        t.cacheKey
      );
}
export {
  ur as a,
  pt as b,
  Pt as c,
  Fr as d,
  St as e,
  Br as f,
  Hr as g,
  ut as h,
  ho as i,
  go as j,
  zt as k,
  vo as l,
  Bt as m,
  bo as n,
  Vo as o,
  Ht as p,
  Wt as q,
  zo as r,
  _o as s,
  jt as t,
  en as u,
  tn as v,
  rn as w,
  mn as x,
  ln as y,
  gn as z,
  qt as A,
  Zt as B,
  Qt as C,
  er as D,
  tr as E,
  rr as F,
  or as G,
  nr as H,
  ir as I,
};
//# sourceMappingURL=chunk-JW7DIQ3U.mjs.map
