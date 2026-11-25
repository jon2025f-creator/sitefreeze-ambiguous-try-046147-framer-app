import { c as yr } from "chunk-2SDEFKYG.mjs";
import { Pe as cr, Qe as ur, Ue as fr, if as Cr } from "chunk-GLU372JW.mjs";
import { a as ee } from "chunk-CJWIKYZ7.mjs";
import { a as ge } from "chunk-BIXL3MXF.mjs";
import { c as ye } from "chunk-GWRB6PWO.mjs";
import {
  A as tr,
  N as or,
  O as D,
  ca as nr,
  f as er,
  hb as ar,
  ib as ir,
  jb as dr,
  lb as sr,
  p as rr,
  qb as pr,
  rb as mr,
  sb as lr,
} from "chunk-WUT466R3.mjs";
import {
  $k as ze,
  $n as Xe,
  Bl as Q,
  Cl as $e,
  Fl as qe,
  Vg as Ne,
  al as Oe,
  ao as Je,
  cl as _e,
  el as Be,
  ik as De,
  wv as Ze,
  xv as Qe,
  yt as Ye,
  yv as k,
} from "chunk-RPMUQEFH.mjs";
import {
  Aa as Ce,
  Ah as Ve,
  Bh as Me,
  Ch as Se,
  Da as O,
  Db as Pe,
  E as q,
  Fq as We,
  Ha as he,
  Hg as Ie,
  Ia as _,
  La as P,
  Me as Y,
  Ni as H,
  Pq as U,
  ar as He,
  br as Ue,
  cq as Fe,
  cr as je,
  dk as ke,
  er as Z,
  fa as fe,
  gi as Le,
  gq as Ae,
  hr as Ge,
  ii as we,
  ir as Ke,
  lp as Ee,
  qe as xe,
  zh as Te,
} from "chunk-GFXIFNNK.mjs";
import { d as ve, f as be, g as J, o as Re } from "chunk-GV47JEYI.mjs";
import { g as $ } from "chunk-WBRHMFUJ.mjs";
import { a as hr } from "chunk-KQFSP5HO.mjs";
import { jf as ue } from "chunk-DPHJW6UJ.mjs";
import { a as X } from "chunk-FZ6XN7HW.mjs";
import { a as C } from "chunk-2FCXHKEL.mjs";
import { b as x, g as B, j as W } from "chunk-ARJ7WQTJ.mjs";
import { a as L } from "chunk-SWYZG2NI.mjs";
import { k as le } from "chunk-L5AQ4LH7.mjs";
import { j as me } from "chunk-EAUMDN6M.mjs";
import { b as ce } from "chunk-4JY5UMT2.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var pt = "groundNodeWrapper",
  mt = "d197x122",
  lt = "dpj2ndz",
  ct = "d1tskyf",
  ut = "d74qriz",
  ft = "dyirmfz",
  Ct = "gh7q592",
  ht = "c880hsu";
function bt(e, r, t, o, n, a, d, s, p) {
  let { combinedVariableValueMap: i, combinedVariableControlMap: m } =
    e.combineVariableValueAndControlMaps(r, t, o, n, a, d, s, p);
  if (t) {
    let l = je(t, i, a);
    ((i = Z(i, void 0, l, Ge, t.getPrimaryId())), (m = Z(m, void 0, l, Ke, t.getPrimaryId())));
  }
  return { combinedValueMap: i, combinedControlMap: m };
}
function Rt(e, r, t, o, n, a, d) {
  let s = new Map(t);
  return (s.set(e.getPrimaryId(), U(r, o, n, a, d)), s);
}
var re = c(C(), 1);
function Lt({ tree: e, componentLoader: r, node: t, richTextProps: o, children: n }) {
  let a = t.getComponentPresets(),
    d = {},
    s = Cr();
  for (let [p, i] of a) {
    let m = e.get(i);
    if (!m) continue;
    m.linkTo(t.id);
    let l = r.reactComponentForIdentifier(m.componentIdentifier);
    if (((m.cache.isComponentLoaded = !!l), !l)) continue;
    let u = m.getRawControlProps(),
      f = er(l, "onlyPresets"),
      h = De(f, u);
    d[p] = _e(
      f,
      h,
      Be({
        assetResolverWithHash: s,
        variableValueResolver: m.cache,
        getVariableControlByReference: (y) => m.cache.getVariableControlByReference(y),
        getResolvedFetchDataValue: void 0,
        getCanvasTree: () => e,
        componentLoader: r,
        fontPreview: m.cache.fontPreview,
      })
    );
  }
  return (0, re.jsx)(tr, { presets: d, children: (0, re.jsx)(sr, { ...o, children: n }) });
}
function j(e) {
  return !(
    e.hasAttribute("data-debug") ||
    e.hasAttribute("data-frame-border") ||
    e.hasAttribute("data-empty-state") ||
    e.hasAttribute("data-framer-background-image-wrapper")
  );
}
function gr(e) {
  if (!e) return [];
  let r = Array.from(e.children),
    t = r.length;
  if (t === 0) return [];
  let o = r.map((d) => Array.from(d.children).filter(j)),
    n = o.reduce((d, s) => d + s.length, 0),
    a = [];
  for (let d = 0; a.length < n; d++) {
    let s = ar(t, d),
      p = o[s];
    if (p && p.length > 0) {
      let i = p.shift();
      if (!i) continue;
      a.push(i);
    }
  }
  return a;
}
var te = c(L(), 1),
  oe = c(C(), 1);
function vr(e, r) {
  let o = te.default.Children.toArray(e).filter(
    (n) => te.default.isValidElement(n) && (n.props.visible ?? !0)
  );
  if (r) {
    let n = 0;
    for (let {
      index: a,
      attributes: { width: d, height: s, style: p },
    } of r) {
      let i = (0, oe.jsx)(Er, { width: d, height: s, style: p }, n);
      ((n += 1), o.splice(a, 0, i));
    }
  }
  return o;
}
function Er({ width: e, height: r, style: t }) {
  return (0, oe.jsx)(P, {
    width: e,
    height: r,
    style: { position: "relative", ...t },
    background: hr.tint,
    opacity: 0.1,
  });
}
var w = c(L(), 1);
var E = c(C(), 1),
  Fr = ir(P),
  Xt = w.default.forwardRef(function (r, t) {
    let {
        visible: o,
        placeholders: n,
        children: a,
        _needsMeasure: d,
        isRepeater: s = !1,
        style: p,
        ...i
      } = r,
      m = w.default.useContext(O),
      l = w.default.useRef(null),
      u = t ?? l,
      f = r.node && Y(r.node) ? gr : Ar;
    _(r, u, f);
    let h = vr(a, n);
    if ((le() && ((h = zr(h)), br(p || {})), o === !1)) return null;
    let y = r.node && Y(r.node) ? Fr : P;
    return m
      ? (0, E.jsx)(q, {
          parentSize: 1,
          children: (0, E.jsx)(y, { ...i, style: p, ref: u, children: h }),
        })
      : (0, E.jsx)(q, {
          parentSize: s ? 1 : 2,
          children: (0, E.jsx)(y, { ...i, style: p, ref: u, children: h }),
        });
  });
function Ar(e) {
  return e ? Array.from(e.children).filter(j) : [];
}
function br(e) {
  (!("rotate" in e) || e.rotate === 0) && (e.rotate = "0deg");
}
function zr(e) {
  return e.map((r) => {
    if (!w.default.isValidElement(r)) return r;
    let t = r.props.style || {};
    return (br(t), w.default.cloneElement(r, { style: t }));
  });
}
var Rr = c(L(), 1);
function to() {
  return { selectorCache: new Map(), breakpointCache: new Map() };
}
function Or(e, r, t) {
  if (!r) return [];
  if (!e) return [];
  let o = t.get(e) ?? JSON.parse(e);
  return (t.set(e, o), o[r]);
}
function _r(e, r) {
  if (!e) return;
  let t = r.get(e) ?? JSON.parse(e);
  if (we(t)) return (r.set(e, t), t);
}
function oo(e, r, t, o) {
  let n = e.componentForIdentifier(r)?.annotations,
    a = n?.framerBreakpoints,
    d = n?.framerDefaultVariant,
    s = n?.framerHitTargets;
  return (0, Rr.useMemo)(() => {
    if (t === void 0) return;
    let p = _r(a, o.breakpointCache),
      i = Le(p, t) ?? d;
    if (i)
      return {
        activeVariant: i,
        selectors: Or(s, i, o.selectorCache),
        className: p?.[i]?.canvasClassName,
        minHeight: p?.[i]?.minHeight ?? 1e3,
        rootFontSize: p?.[i]?.rootFontSize ?? Se,
      };
  }, [a, s, d, t, o]);
}
var M = c(L(), 1);
var G = c(L(), 1);
var F = c(C(), 1),
  Br = me("SandboxComponentError");
function Wr(e, r) {
  let t = Re(e);
  return ve(t)
    ? rr(t)
      ? !0
      : r === "canvasComponent"
    : !!(be(t) && (t.type === "canvasComponent" || t.type === "screen"));
}
var Hr = /\s*(?:at|in) (\S+)/;
function Ur(e, r) {
  let t = [];
  for (let o of e.split(`
`)) {
    if (!o) continue;
    if (o.match(Hr)?.[1] === r.name) break;
    t.push(o);
  }
  return t;
}
function Pr(e) {
  class r extends G.default.Component {
    logsToSentry = !1;
    lastComponentIdentifier;
    state = { isOverBudget: !1 };
    shouldLogToSentry(o, n) {
      return this.lastComponentIdentifier === o
        ? this.logsToSentry
        : ((this.lastComponentIdentifier = o), (this.logsToSentry = Wr(o, n)));
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
      if (o instanceof ge) {
        (this.setState({ isOverBudget: !0 }), this.scheduleRerenderDueToBudget());
        return;
      }
      let a = n.componentStack ? Ur(n.componentStack, this.constructor) : void 0;
      this.setState({ lastError: { error: o, stack: a } });
    }
    renderErrorPlaceholder(o) {
      let n = {};
      return (
        this.props.widthType === 2 && ((n.width = 200), (n.widthType = 0)),
        this.props.heightType === 2 && ((n.height = 200), (n.heightType = 0)),
        (0, F.jsx)(P, {
          ...this.props,
          layoutId: void 0,
          layoutIdKey: void 0,
          ...n,
          background: null,
          children: (0, F.jsx)(ye, { error: o }),
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
          __logger: n = Br,
          __externalModuleType: a,
          __rendering: d,
          forwardedRef: s,
          ...p
        } = this.props,
        i = this.props.componentIdentifier,
        { lastError: m } = this.state;
      if (jr(this.props.children)) {
        let l = o.errorForIdentifier(i);
        if (l) {
          let u = ee(l, void 0);
          return this.renderErrorPlaceholder(u);
        }
      }
      if (this.state.isOverBudget) return this.renderErrorPlaceholder({ message: "", title: "" });
      if (m) {
        let l = o.componentForIdentifier(i),
          u = ee(l, m.error);
        if (this.shouldLogToSentry(i, a)) {
          let f = l ? l.file : "???";
          n.reportErrorOncePerMinute(m.error, { file: f, stack: m.stack });
        }
        return this.renderErrorPlaceholder(u);
      }
      return (0, F.jsx)(e, { ...p, ref: s });
    }
  }
  return G.default.forwardRef((t, o) => (0, F.jsx)(r, { ...t, forwardedRef: o }));
}
function jr(e) {
  if (!e) return !0;
  if (Array.isArray(e)) {
    let r = G.default.Children.count(e);
    if (r === 0) return !0;
    let [t] = e;
    if (t === null && r === 1) return !0;
  }
  return !1;
}
var ne = c(L(), 1),
  Ir = c(C(), 1),
  xr = (e) =>
    ne.default.forwardRef((r, t) => {
      let { innerRef: o, ...n } = r,
        a = ne.default.useRef(null),
        d = o ?? a;
      return (_(n, d, he), (0, Ir.jsx)(e, { ...r, innerRef: d, ref: t }));
    });
var V = c(C(), 1);
function Gr(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : !1;
}
var ae = class extends M.default.Component {
    shouldComponentUpdate(r) {
      return !X(this.props, r, !0);
    }
    render() {
      return this.props.children;
    }
  },
  ie = class extends M.default.Component {
    shouldComponentUpdate(r) {
      let t = $.current() !== $.canvas;
      return r._needsMeasure || !X(this.props, r, t);
    }
    render() {
      let {
          children: r,
          innerRef: t,
          forwardedRef: o,
          componentIdentifier: n,
          __withWidth: a,
          isSlotContainer: d,
          ...s
        } = this.props,
        p = this.props.layoutId,
        i = fe(),
        m = !Gr(n),
        { frameProps: l, childProps: u = {} } = $r(s, {
          layoutId: p,
          forwardedRef: o,
          onCanvas: i,
        });
      (a && (u.width = s.width), window.__checkComponentBudget__?.());
      let f = r;
      return (
        (!i || a) &&
          (f = M.default.Children.map(r, (h) =>
            M.default.isValidElement(h) ? M.default.cloneElement(h, u) : h
          )),
        i
          ? (f = (0, V.jsx)(ae, { children: f }))
          : m &&
            (f = (0, V.jsx)(ue, {
              inherit: !1,
              id: p,
              children: (0, V.jsx)(Ce, { enabled: !1, children: f }),
            })),
        (0, V.jsx)(O.Provider, {
          value: !d,
          children: (0, V.jsx)(P, {
            "data-framer-component-container": !0,
            background: null,
            overflow: "visible",
            ref: t,
            ...l,
            "data-framer-component-type": "ComponentContainer",
            style: { ...l.style, pointerEvents: void 0 },
            children: f,
          }),
        })
      );
    }
  },
  Kr = M.default.forwardRef((e, r) => (0, V.jsx)(ie, { ...e, forwardedRef: r })),
  ko = Pr(nr(xr(Kr)));
function $r(e, { layoutId: r, forwardedRef: t, onCanvas: o }) {
  if (o) return { frameProps: e };
  let {
    opacity: n,
    children: a,
    left: d,
    right: s,
    top: p,
    bottom: i,
    center: m,
    centerX: l,
    centerY: u,
    aspectRatio: f,
    parentSize: h,
    width: y,
    height: T,
    rotation: g,
    visible: S,
    _constraints: b,
    _initialStyle: v,
    name: R,
    positionSticky: pe,
    positionStickyTop: I,
    positionStickyRight: N,
    positionStickyBottom: A,
    positionStickyLeft: z,
    style: Lr,
    duplicatedFrom: wr,
    widthType: Nr,
    heightType: kr,
    ...Dr
  } = e;
  return {
    childProps: Object.assign(Dr, { ref: t }),
    frameProps: {
      id: e.id + "-container",
      layoutId: r,
      style: Lr,
      _constraints: b,
      _initialStyle: v,
      left: d,
      right: s,
      top: p,
      bottom: i,
      center: m,
      centerX: l,
      centerY: u,
      aspectRatio: f,
      parentSize: h,
      width: y,
      height: T,
      rotation: g,
      visible: S,
      name: R,
      duplicatedFrom: wr,
      widthType: Nr,
      heightType: kr,
      positionSticky: pe,
      positionStickyTop: I,
      positionStickyRight: N,
      positionStickyBottom: A,
      positionStickyLeft: z,
    },
  };
}
var de = c(C(), 1),
  Tr = "framer-viewport-portal-root";
function Fo(e) {
  return e.id.startsWith(Tr);
}
function qr(e, r = "none") {
  return `${Tr}-${e}-${r}`;
}
var Ao = ({ id: e, viewportHeight: r, type: t }) =>
    (0, de.jsx)("div", {
      id: qr(e, t),
      style: { top: 0, left: 0, right: 0, position: "absolute", height: r, maxHeight: "100%" },
    }),
  Xr = "framer-portal-root";
function Jr(e, r = "none") {
  return `${Xr}-${e}-${r}`;
}
var zo = ({ id: e, type: r }) =>
  (0, de.jsx)("div", {
    id: Jr(e, r),
    style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: Ne },
  });
var se = c(C(), 1);
function jo(e) {
  if (!e.__unsafeIsGroundNode()) return;
  let { contentOffsetX: r, contentOffsetY: t } = pr(e.x, e.y);
  return { left: r, top: t };
}
function Yr(e, r, t, o, n) {
  let a = n ?? e.getProps(r, t);
  if (Pe(e))
    return (0, se.jsx)(
      lr,
      { ...a, isRootVectorNode: o, children: e.children.map((d) => Yr(d, r, t, !1, void 0)) },
      e.id
    );
  if (Ie(e)) return (0, se.jsx)(mr, { ...a, isRootVectorNode: o }, e.id);
  throw Error(`WARNING: Unknown vector node: ${e.__class}`);
}
function Zr({
  tree: e,
  node: r,
  providerId: t,
  componentLoader: o,
  componentLoaderHash: n,
  sandboxRepeaterData: a,
  combinedValueMap: d,
}) {
  if (t === We)
    return {
      providerControlMap: He(),
      providerValueMap: Ue(r, d ?? r.cache.getUnsafeInheritedCombinedVariableValueMap()),
    };
  if (Fe(t)) {
    let i = Ae(r, t, o, d ?? r.cache.getUnsafeInheritedCombinedVariableValueMap());
    return i ? { providerControlMap: i.controlMap, providerValueMap: i.valueMap } : void 0;
  }
  let s = Ze(r, t);
  if (!s) return;
  let p = Qe(r, s);
  return {
    providerControlMap: s.getProvidedControlMap(e, p, o, n),
    providerValueMap: s.getProvidedValueMap(e, p, o, a, n),
  };
}
function Qr({
  tree: e,
  node: r,
  renderId: t,
  componentLoader: o,
  componentLoaderHash: n,
  sandboxRepeaterData: a,
  combinedValueMap: d,
  combinedControlMap: s,
  trackLoaded: p,
  maxItems: i,
}) {
  let m = Ve(e, r);
  if (!m) {
    let { controlMap: I } = k(void 0);
    return (a.set(t, void 0, I), null);
  }
  let l = m.providerId;
  ce(l, "Variable must have providerId");
  let u = Zr({
    tree: e,
    node: r,
    providerId: l,
    componentLoader: o,
    componentLoaderHash: n,
    sandboxRepeaterData: a,
    combinedValueMap: d,
  });
  if (!u) {
    let { controlMap: I } = k(void 0);
    return (a.set(t, void 0, I), null);
  }
  let { providerControlMap: f, providerValueMap: h } = u,
    y = s?.get(l)?.get(m.id),
    T = f?.get(m.id),
    g = y ?? T,
    { controlMap: S } = k(g);
  p?.(t);
  let b = d?.get(l)?.get(m.id) ?? h?.get(m.id),
    v = r.repeatArrayTransforms?.length ? Me(e, r) : void 0,
    R = v ? Oe(v, r.cache, d, g, g, r.cache.activeRouterLocale, { startValue: b }) : b;
  return !W(R) || !R.every(B)
    ? (a.set(t, void 0, S), null)
    : (a.set(t, R, S, v ? "shallow" : "identity"),
      R.length === 0
        ? null
        : {
            items: (i === void 0 ? R : R.slice(0, i)).map((I, N) => {
              let A = yr(I, N),
                z = $e(t, r.id, A, N);
              return { id: A, index: N, value: I, parentRenderId: z, renderId: Q(z, r.id) };
            }),
            arrayControl: g,
            itemCount: R.length,
          });
}
function nn({
  tree: e,
  node: r,
  itemValue: t,
  itemIndex: o,
  arrayControl: n,
  itemCount: a,
  combinedValueMap: d,
  combinedControlMap: s,
}) {
  let { controlMap: p } = k(n),
    i = new Map(s);
  i.set(r.getPrimaryId(), p);
  let m = new Map(d),
    l = U(e, p, t, o, a);
  return (m.set(r.getPrimaryId(), l), { combinedValueMap: m, combinedControlMap: i });
}
function et(e, r) {
  return `${e}-${r}`;
}
function an({
  tree: e,
  componentNodeId: r,
  componentRenderId: t,
  slotKey: o,
  slotItems: n,
  maxItemCount: a,
  componentLoader: d,
  componentLoaderHash: s,
  sandboxRepeaterData: p,
  combinedValueMap: i,
  combinedControlMap: m,
  trackLoaded: l,
}) {
  let u = [];
  for (let f of n) {
    let h = a === void 0 ? void 0 : a - u.length,
      y = qe(t, r, o, f.key),
      T = f.node;
    if (!Te(T)) {
      if (h === 0) continue;
      u.push({
        key: f.key,
        node: T,
        parentRenderId: y,
        renderId: y,
        repeatItem: void 0,
        repeatArrayControl: void 0,
        repeatItemCount: void 0,
      });
      continue;
    }
    let g = T,
      S = Q(y, g.id),
      b = Qr({
        tree: e,
        node: g,
        renderId: S,
        componentLoader: d,
        componentLoaderHash: s,
        sandboxRepeaterData: p,
        combinedValueMap: i,
        combinedControlMap: m,
        trackLoaded: l,
        maxItems: h,
      });
    if (b)
      for (let v of b.items)
        u.push({
          key: et(f.key, v.id),
          node: g,
          parentRenderId: v.parentRenderId,
          renderId: v.renderId,
          repeatItem: v,
          repeatArrayControl: b.arrayControl,
          repeatItemCount: b.itemCount,
        });
  }
  return u;
}
function rt(e) {
  let r = e.cache;
  if (
    r.lastUpdate !== e.update &&
    ((r.lastUpdate = e.update), (r.calculatedPaths = null), e.children)
  )
    for (let t of e.children) rt(t);
}
var Sr = c(C(), 1),
  Vr = new WeakMap();
function Mr(e, r) {
  let t = ur(e),
    o = cr(t, r, e);
  if (o) return fr(e, o);
}
function tt(e, r) {
  if (x(e)) return Mr(e, r);
  let t = Vr.get(e);
  if ((t || ((t = new WeakMap()), Vr.set(e, t)), t.has(r))) return t.get(r);
  let o = Mr(e, r);
  return (t.set(r, o), o);
}
function bn(e, r, t) {
  if (e.htmlContent) {
    let a = e.resolveValue("htmlContent", r);
    return x(a) ? D(a) : H(a) ? or(a) : a;
  }
  let o = ke(t, e.htmlLocalized),
    n = (o && tt(e.html, o)) ?? e.html;
  return D(n);
}
function Rn(e, r, t) {
  let o = e.textContent;
  if (!xe(o)) return;
  let n = o.transforms[0],
    a = ze(o, r, e.cache, t);
  if (x(a))
    return (0, Sr.jsx)(dr, {
      date: a,
      dateFormat: n.format,
      dateStyle: n.dateStyle,
      dateCapitalize: n.capitalize,
      locale: n.locale,
    });
}
function Pn(e, r) {
  if (!r?.id || !e.textFitViewBoxSize || !e.textFitViewBoxSizeLocalized) return;
  let t = e.textFitViewBoxSizeLocalized[r.id];
  if (t) return Ye(t);
}
function K(e, r, t, o) {
  let n = r.getControlPropSourceIdentifier();
  if (!n) return;
  let a = t.getPropertyControlsForIdentifier(n);
  if (!a) return;
  let d = Xe(t, n);
  for (let s in a) {
    let p = a[s];
    if (!Ee(p)) continue;
    let i = d ? Je(d, s) : s,
      m = e[i],
      l = nt(m, p.control.controls, o);
    l !== m && (e[i] = l);
  }
}
function nt(e, r, t) {
  if (!W(e)) return e;
  let o;
  for (let n = 0; n < e.length; n++) {
    let a = e[n];
    if (!B(a)) continue;
    let d;
    for (let s in r) {
      let p = r[s];
      if (!p) continue;
      let i = a[s],
        m = t(p, i);
      m !== i && ((d ??= { ...a }), (d[s] = m));
    }
    d && ((o ??= [...e]), (o[n] = d));
  }
  return o ?? e;
}
function Ln(e, r, t, o) {
  K(e, r, t, (n, a) => (n.type === "vectorsetitem" && x(a) && J(a) ? o(a) : a));
}
function wn(e, r, t) {
  let o = [];
  return (K(e, r, t, (n, a) => (n.type === "vectorsetitem" && x(a) && J(a) && o.push(a), a)), o);
}
function zn(e, r, t) {
  K(e, r, t.componentLoader, (o, n) => (o.type === "richtext" ? at(n, t) : n));
}
function at(e, r) {
  return !x(e) && !H(e)
    ? e
    : D(
        e,
        {
          componentLoader: r.componentLoader,
          resolveVectorSetItem: r.resolveVectorSetItem,
          tree: r.tree,
        },
        r.cacheKey
      );
}
export {
  bt as a,
  Rt as b,
  Lt as c,
  gr as d,
  Er as e,
  Xt as f,
  Ar as g,
  to as h,
  oo as i,
  Pr as j,
  ko as k,
  Fo as l,
  qr as m,
  Ao as n,
  Jr as o,
  zo as p,
  jo as q,
  Yr as r,
  Qr as s,
  nn as t,
  an as u,
  rt as v,
  bn as w,
  Rn as x,
  Pn as y,
  Ln as z,
  wn as A,
  zn as B,
  at as C,
  pt as D,
  mt as E,
  lt as F,
  ct as G,
  ut as H,
  ft as I,
  Ct as J,
  ht as K,
};
//# sourceMappingURL=chunk-GOFKFN4K.mjs.map
