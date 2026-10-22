import {
  C as Ft,
  D as At,
  Ea as Gt,
  F as Bt,
  G as Ot,
  P as ve,
  V as Wt,
  W as jt,
  a as Dt,
  b as Vt,
  ia as $t,
  ja as Zt,
  la as oe,
} from "chunk-CL5W2GKI.mjs";
import {
  $g as Et,
  bb as xt,
  gb as V,
  ic as Pt,
  jb as ze,
  jc as Mt,
  lg as Nt,
} from "chunk-S2XVV6PX.mjs";
import { a as Ct } from "chunk-YZCJ4RKH.mjs";
import { B as Ie } from "chunk-A442DOOD.mjs";
import { x as Le, xc as It } from "chunk-AGRH3GOR.mjs";
import { Bd as Te, Ed as be, y as bt } from "chunk-FAGFJV35.mjs";
import { a as kt } from "chunk-Y3GGHNCV.mjs";
import {
  Ip as zt,
  Tf as yt,
  Tk as ht,
  U as at,
  Xk as Lt,
  Zi as ee,
  c as Xe,
  cg as gt,
  eo as Tt,
  es as he,
  fb as ut,
  kb as ft,
  pv as k,
  qv as vt,
  rk as St,
} from "chunk-IPJAMXIN.mjs";
import {
  Ab as Y,
  Bb as z,
  Fa as I,
  Oi as X,
  Oj as ct,
  Ud as J,
  Wb as ye,
  Xi as st,
  Yb as ge,
  Zm as Se,
  bl as pt,
  gb as et,
  hb as K,
  hj as lt,
  jb as tt,
  jc as ot,
  lj as dt,
  m as U,
  oe as rt,
  om as mt,
  qb as x,
  qc as E,
  qe as nt,
  re as it,
  va as de,
  vb as q,
  wa as Qe,
  wb as v,
  xa as _,
  za as ce,
} from "chunk-NOSAYYBH.mjs";
import { a as wt } from "chunk-Z2V5BBAD.mjs";
import { v as Rt } from "chunk-2NB736XJ.mjs";
import { b as te } from "chunk-EU6NGLSC.mjs";
import { f as D } from "chunk-3AYSHUTT.mjs";
import { g as Q } from "chunk-K3IJ2B65.mjs";
import { a as Je } from "chunk-7BWPFUCH.mjs";
import { a as Ce } from "chunk-AYNVEX5D.mjs";
import { p as T } from "chunk-5VQJ4RRO.mjs";
import { b as ue, e as H, f as fe, k as pe, o as me } from "chunk-Y3GZLMBF.mjs";
import { b as p, c as M } from "chunk-4JY5UMT2.mjs";
import { b as G, i as Ye } from "chunk-WBI6GGAG.mjs";
import { p as Ke, q as qe } from "chunk-WLHSDIGQ.mjs";
function re(e, o = e.id) {
  if (dt(e)) {
    if (e.usesLayoutTemplateRectForModuleIdentifierCached() && !e.cache.layoutTemplateRects)
      return !0;
    if (e.usesDOMRectCached()) return e.cache.getRawDOMRect(o) === null;
  }
  return o !== e.id && !Bo(e, o);
}
function Bo(e, o) {
  let t = e.tree();
  if (!t) return e.cache.getRawDOMRect(o) !== null;
  let r = o,
    n = e;
  for (; n;) {
    if (n.cache.getRawDOMRect(r) !== null) return !0;
    let a = n.cache.getRenderInstance(r)?.parentRenderId;
    if (!a || St(a, n.id) !== r) return !1;
    ((r = a), (n = t.get(n.parentid)));
  }
  return !1;
}
async function Oo(e, o, t) {
  let r = re(o);
  for (; r;) {
    if (t?.aborted) return;
    (await new Promise((n) => e.scheduler.runBeforeNextFrame(n)), (r = re(o)));
  }
}
async function mr(e, o, t = 2e3) {
  let r = Array.isArray(o) ? o : [o],
    n = new AbortController(),
    a = Promise.all(r.map((l) => Oo(e, l, n.signal))),
    s = (async () => {
      (await Q(t), n.abort());
    })();
  await Promise.race([a, s]);
}
var Ut = [k.video, k.youtube, k.vimeo, k.codeblock, k.twitter, k.embed];
function Tr(e, o) {
  let t = I(o);
  return Qe(t)
    ? t.type === "canvasComponent"
    : de(t)
      ? e.tree.getNodeWithTrait(t.moduleId, E)?.type === "canvasComponent"
      : !1;
}
async function br(e, o) {
  let t = I(o);
  de(t) && (await e.stores.modulesStore.addExternalModulesToProject([t], { onTreeUpdate() {} }));
}
var _t = new WeakMap();
async function zr(e) {
  let { modules: o } = await e.stores.modulesStore.lookUpModules(Ut.map(vt)),
    t = [];
  for (let r = 0; r < o.length; r++) {
    let n = o[r];
    p(n, "Module must exist");
    let a = Ut[r];
    (p(a, "Module component must exist"),
      _t.set(a, n),
      p(n.files.module, "Module must have a module file"),
      t.push(ce(n.id, n.saveId, n.files.module, a.exportSpecifier ?? "default")));
  }
  await e.stores.modulesStore.preloadExternalModules(t);
}
function Ir(e, o) {
  let t = _t.get(o);
  p(t, "Preloaded module must exist");
  let r = e.getNodeWithTrait(t.id, E);
  return r
    ? r.codeComponentIdentifier
    : (p(t.files.module, "Module must have a module file"),
      ce(t.id, t.saveId, t.files.module, o.exportSpecifier ?? "default").value);
}
function wr(e, o, t) {
  let r = o && e.getNode(o);
  if (!r || !X(r)) return t(o, {}, !1);
  let n = ft(e, r) ? {} : { visible: !1 },
    a = t(r.originalid, n, !0);
  if (a === void 0) return;
  let s = gt.getReplicaForTemplateNode(e, r);
  return s ? (n.visible === !1 && Ct(e, s, a, { visible: !0 }), Xe(s.id, a)) : a;
}
function Ht(e = !0) {
  return e && T.isOn("canvasRepeatSelection") ? jo : Kt;
}
function Kt({ node: e, renderId: o }) {
  return o === e.id;
}
function jo(e) {
  return Kt(e) || !re(e.node, e.renderId);
}
function qt(e, o, t = e.id) {
  let r = e.children;
  return rt(e) ? (!r || r.length === 0 ? [] : (o.getChildrenRects(t) ?? [])) : null;
}
var Yt = 4,
  Jt = 20;
function Qt(e, o, t) {
  p(o.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: r, index: n } = U.closestRect(o, t),
    a = it(e),
    s = nt(e) ? !a : e.resolveValue("stackDirection") === "horizontal",
    l = s ? "x" : "y",
    i = s ? "y" : "x",
    f = s ? "width" : "height",
    d = s ? "height" : "width",
    c = t[l] < r[l] + r[f] / 2,
    u = a && H(e.gridColumnCount) ? Math.max(Math.floor(e.gridColumnCount), 1) : 1,
    y = c ? n - u : n + u,
    m = o[y],
    b = !m || (c ? m[l] >= r[l] : r[l] >= m[l]),
    C = c ? n : Math.min(n + u, o.length);
  if (b) {
    let L = c ? r[l] + Yt : r[l] + r[f] - Yt;
    return {
      insertionIndex: C,
      localInsertionLine: { a: ne(l, L, r[i]), b: ne(l, L, r[i] + Math.max(r[d], Jt)) },
    };
  } else {
    let L = c ? (m[l] + m[f] + r[l]) / 2 : (r[l] + r[f] + m[l]) / 2;
    return {
      insertionIndex: C,
      localInsertionLine: {
        a: ne(l, L, Math.min(m[i], r[i])),
        b: ne(l, L, Math.max(m[i] + m[d], r[i] + Math.max(r[d], Jt))),
      },
    };
  }
}
function ne(e, o, t) {
  return e === "x" ? { x: o, y: t } : { x: t, y: o };
}
var Xt = 10;
function $o(e, o) {
  for (let t of e) if (o.includes(t)) return !0;
  return !1;
}
function Zo(e, o, t, r, n) {
  let a = e.node;
  if (n.length === 0 || a.stackWrapEnabled || st(a) || X(a)) return null;
  let { tree: s } = o,
    { zoom: l } = o.stores.canvasStore,
    i = s.getParent(a.id);
  if (i && K(i) && (i.stackDirection !== a.stackDirection || i.stackWrapEnabled)) return null;
  let f = ze(s, e, t, !0),
    d = xt(s, e),
    c = a.stackDirection === "vertical",
    u = c ? "x" : "y",
    y = c ? "y" : "x",
    m = c ? "width" : "height",
    b = c ? "height" : "width",
    C = d[m],
    L = d[b],
    R = C * l,
    se = L * l;
  if (R < 40 || se < 40) return null;
  let Be = f[u],
    Oe = 10 / l,
    We = U.merge(...n),
    je = We[u],
    Mo = je + We[m],
    Ro = Math.max(Oe, je / 2),
    wo = Math.max(Oe, (C - Mo) / 2),
    le = Be <= Ro,
    No = Be >= C - wo;
  if (!le && !No) return null;
  let Eo = le ? 0 : 1,
    $ = r[b],
    $e = 4 / l,
    Ze = le ? $e : C - $e,
    Ge = L / 2,
    Ue = $ / 2,
    _e = L / 3,
    He = f[y],
    w = "end";
  $ > L ? (w = "center") : He < _e ? (w = "start") : He < 2 * _e && (w = "center");
  let Z, N;
  switch (w) {
    case "start": {
      ((Z = 0), (N = $));
      break;
    }
    case "end": {
      ((N = L), (Z = N - $));
      break;
    }
    default: {
      ((Z = Ge - Ue), (N = Ge + Ue));
      break;
    }
  }
  let Do = { [u]: Ze, [y]: Z },
    Vo = { [u]: Ze, [y]: N },
    Fo = V(s, e, Do, { includeNode: !0 }),
    Ao = V(s, e, Vo, { includeNode: !0 });
  return { insertionIndex: Eo, insertionLine: { a: Fo, b: Ao }, wrap: { wrapAlignment: w } };
}
function to(e, o, t, r, { allowWrapping: n = !0 } = {}) {
  let a = e.node;
  if (!Se(a)) return { insertionIndex: null, insertionLine: null };
  let s = qt(a, o.stores.layoutCache, e.renderId);
  if (!s) return { insertionIndex: null, insertionLine: null };
  if (n && Go(e)) {
    let u = Zo(e, o, t, r, s);
    if (u) return u;
  }
  let l = o.tree,
    i = ze(l, e, t, !0);
  if (s.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: f, localInsertionLine: d } = Qt(a, s, i),
    c = { a: V(l, e, d.a, { includeNode: !0 }), b: V(l, e, d.b, { includeNode: !0 }) };
  return { insertionIndex: f, insertionLine: c };
}
function Go(e) {
  return K(e.node);
}
function eo(e) {
  return tt(e.node);
}
function ln(e, o, t, r, n = {}) {
  return to({ node: e, renderId: e.id }, o, t, r, n);
}
function dn(e, o, t, r, n = !1) {
  return _o(e, o, t, r ? { node: r, renderId: r.id } : null, n, !1)?.node ?? null;
}
var Uo = { width: 10, height: 10 };
function _o(e, o, t, r, n = !1, a = !0) {
  p(t.length, "getStackOrGridInRange(): expects at least a single selected node");
  let s = e.stores.scopeStore.active;
  if (t.some(at)) return null;
  let i = Ht(a),
    f = bt(e.tree, s, o, !1, !1, void 0, i)
      .filter(
        ({ node: u }) =>
          !(
            (Tt(u) && u.locked) ||
            !Se(u) ||
            Nt(u) ||
            ut(e.tree, e.stores.overlayStore.activeOverlays, u)
          )
      )
      .reverse();
  if (r) {
    let u = r.node.id,
      y = f.find((m) => m.node.id === u && m.renderId === r.renderId);
    if (y) return y;
  }
  let d = null,
    c = t.map((u) => u.id);
  for (let u of f) {
    let y = u.node;
    if (!ct(y) || (n && !lt(y))) continue;
    let m = e.tree.getAncestorIds(y.id);
    if ((m.push(y.id), $o(m, c) || (d || (d = u), !eo(u)))) continue;
    let { insertionLine: C } = to(u, e, o, Uo);
    if (!C) continue;
    if (C.a.x === C.b.x) {
      if (Math.abs(o.x - C.a.x) * e.stores.canvasStore.zoom > Xt) continue;
    } else if (C.a.y === C.b.y) {
      if (Math.abs(o.y - C.a.y) * e.stores.canvasStore.zoom > Xt) continue;
    } else continue;
    if (t.every((R) => Le(e.tree, y, R, s.id, e.componentLoader))) return u;
  }
  if (d && eo(d)) {
    let u = d.node;
    if (t.every((m) => Le(e.tree, u, m, s.id, e.componentLoader))) return d;
  }
  return null;
}
function cn(e, o, { wrapAlignment: t }) {
  let r = Et.addStack(e, [o]);
  if (!r) return null;
  let n = e.tree.getNode(r);
  return !n || !K(n)
    ? null
    : (n.set({
        stackDirection: o.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: t,
      }),
      n);
}
function mn(e, o) {
  let t = (n) => e.reactComponentForIdentifier(n)?.properties ?? null;
  if (!T.isOn("harness2")) return { getPropertyControls: t };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let a = t(n);
      if (a) return a;
      let s = r.get(n);
      if (s !== void 0) return s;
      let l = Ho(n, o);
      return (r.set(n, l), l);
    },
  };
}
function Ho(e, o) {
  let t = I(e);
  if (!t || !_(t)) return null;
  let r = o.resolvePropertyControls({ instanceIdentifier: t.value });
  return r === void 0 ? null : F(r);
}
function F(e) {
  let o = {};
  for (let t in e) {
    let r = e[t];
    if (!r) continue;
    let { hidden: n, ...a } = r;
    o[t] = a;
  }
  return o;
}
var oo = ["loader", "tree-first", "tree-only"];
function ro(e) {
  return oo.find((o) => o === e);
}
var xe =
  typeof window > "u"
    ? void 0
    : ro(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function no(e) {
  xe = e;
}
function Me() {
  return T.isOn("harness2");
}
function P() {
  return Me() ? xe || (T.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function io() {
  return oo;
}
function ao(e) {
  return ro(e);
}
var h = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
  },
  ke = new Set(),
  Pe = new Set();
function so() {
  return {
    ...h,
    kindMismatches: [...h.kindMismatches],
    annotationRefusals: [...h.annotationRefusals],
  };
}
function lo() {
  ((h.treeHits = 0),
    (h.treeMisses = 0),
    (h.loaderFallbacks = 0),
    (h.loaderPreferred = 0),
    (h.kindMismatches.length = 0),
    (h.annotationRefusals.length = 0),
    ke.clear(),
    Pe.clear());
}
function co() {
  h.treeHits++;
}
function uo() {
  h.treeMisses++;
}
function fo() {
  h.loaderFallbacks++;
}
function po() {
  h.loaderPreferred++;
}
function mo(e, o) {
  ke.has(e) || (ke.add(e), h.kindMismatches.push({ identifier: e, loaderType: o }));
}
function Re(e) {
  Pe.has(e) || (Pe.add(e), h.annotationRefusals.push(e));
}
var we = Symbol("annotationRefusal");
function yo(e) {
  if (!e) return;
  let o = {};
  for (let t in e) {
    let r = e[t];
    r !== void 0 && (o[t] = ue(r) ? r : JSON.stringify(r));
  }
  return o;
}
var Ko = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function qo(e) {
  return e.kind !== "localModuleExport" || e.exportSpecifier !== "default" ? !1 : Ko.has(e.type);
}
var go = new WeakMap();
function Yo(e) {
  let o = 0;
  for (let t = e; t; t = t.base) o += t.length;
  return o;
}
function Jo(e) {
  let o = e.manifest,
    t = Yo(e),
    r = go.get(e);
  if (r && r.branchManifest === o && r.rowCount === t) return r.answers;
  let n = new Map();
  return (go.set(e, { branchManifest: o, rowCount: t, answers: n }), n);
}
function A(e) {
  throw new Error(
    `${e} is not available on the localization tree-controls loader: it is read-only`
  );
}
var Ne = class extends Vt {
  constructor(t, r, n, a) {
    super();
    this.loader = t;
    this.tree = r;
    this.store = n;
    this.mode = a;
  }
  loader;
  tree;
  store;
  mode;
  componentForIdentifier(t) {
    let r = this.loader.componentForIdentifier(t),
      n = this.treeAnswer(t);
    return (
      n ? co() : uo(),
      n && r && r.type !== n.definition.type && mo(t, r.type),
      this.mode === "tree-only"
        ? (n?.definition ?? null)
        : n && this.preferTreeAnswer(n, r !== null)
          ? n.definition
          : (n ? po() : r && fo(), r)
    );
  }
  getDefinitionHash(t) {
    let r = this.treeAnswer(t);
    if (this.mode === "tree-only") return r?.hash ?? 0;
    let n = this.loader.getDefinitionHash(t);
    return r && this.preferTreeAnswer(r, n !== 0) ? r.hash : n;
  }
  preferTreeAnswer(t, r) {
    return t.derivedFromDocument || !r;
  }
  reactComponentForIdentifier(t) {
    let r = this.loader.componentForIdentifier(t);
    return r && r.type !== "component" ? null : super.reactComponentForIdentifier(t);
  }
  trackEntityReads(t, r) {
    return this.loader.trackEntityReads(t, r);
  }
  dataForIdentifier(t) {
    return this.loader.dataForIdentifier(t);
  }
  getAllEntities() {
    return this.loader.getAllEntities();
  }
  getAllLocalModules() {
    return this.loader.getAllLocalModules();
  }
  getData() {
    return this.loader.getData();
  }
  errorForIdentifier(t) {
    return this.loader.errorForIdentifier(t);
  }
  updateEntity() {
    A("updateEntity");
  }
  deleteEntity() {
    A("deleteEntity");
  }
  setModuleRevision() {
    A("setModuleRevision");
  }
  testing = {
    setEntity: () => A("testing.setEntity"),
    clearEntities: () => A("testing.clearEntities"),
  };
  treeAnswer(t) {
    let r = Jo(this.store),
      n = r.get(t);
    if (n === we) return (Re(t), null);
    if (n !== void 0) return n;
    let a = this.resolveFromTree(t);
    return (r.set(t, a), a === we ? (Re(t), null) : a);
  }
  resolveFromTree(t) {
    let r = I(t);
    if (!r || !_(r)) return null;
    let n = T.isOn("harness2"),
      a = Bt({ identifier: r.value }, this.store, { enabled: n });
    if (a === void 0) return null;
    let s = this.moduleNodeFacts(r);
    if (s === null) return we;
    let { name: l, annotations: i } = s,
      f = At(r.value, this.store);
    if (f !== void 0 && f !== "hook" && f !== "component") return null;
    let d = {
        depth: 0,
        file: "",
        identifier: r.value,
        packageIdentifier: "",
        annotations: i,
        update: 0,
      },
      u = (f === "hook"
        ? {
            ...d,
            name: Ft(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: F(a),
            outputs: F(Ot({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...d, name: l ?? "Unknown", type: "component", properties: F(a) };
    return { hash: Dt(u), definition: u, derivedFromDocument: qo(r) };
  }
  moduleNodeFacts(t) {
    switch (t.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(t.localId, Lt),
          n = yo(r?.save.annotations?.[t.exportSpecifier]);
        if (t.type === "codeFile") return { name: r?.getName(), annotations: n };
        let a = this.store.getObjectKey(t.localIdName, "name");
        return { name: (ue(a) && a) || r?.getName(), annotations: n };
      }
      case "externalModuleExport": {
        let r = this.tree.getNodeWithTrait(t.moduleId, E);
        if (!r) return null;
        let n = I(r.codeComponentIdentifier);
        return n?.kind === "externalModuleExport" &&
          n.saveId === t.saveId &&
          n.exportSpecifier === t.exportSpecifier
          ? { name: r.getName(), annotations: yo(r.annotations) }
          : null;
      }
    }
  }
};
function ie(e) {
  return P() !== "loader";
}
function ae(e, o) {
  let t = P();
  return t === "loader" ? e : new Ne(e, o.getDataTree(), o.updater.store, t);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: P,
    setMode(e) {
      let o = ao(e);
      if (!o)
        throw new Error(
          `Unknown localization tree-controls mode: ${e}. One of ${io().join(", ")}.`
        );
      if (o !== "loader" && !Me())
        throw new Error(
          `Cannot force ${o}: the harness2 experiment is off, so nothing stores controls.`
        );
      return (no(o), o);
    },
    stats: so,
    reset: lo,
    wrap: ae,
    walk: Gt,
    trackLookups: Wt,
  });
var Co = new WeakMap();
function So(e) {
  let o = Co.get(e);
  return o || ((o = { loadedRevision: -1, promise: void 0 }), Co.set(e, o), o);
}
function Qo() {
  return T.isOn("deferNonVisibleModuleEvaluation") && T.isOn("localizationWaitsForAllModules");
}
function ho(e) {
  if (
    !Qo() ||
    e.localizationComponentLoaderPolicy === "authoritative" ||
    (P() === "tree-only" && ie(e.stores.treeStore))
  )
    return "ready";
  let { modulesStore: o } = e.stores,
    t = e.stores.treeStore.getDataTree().get(ht);
  return o.localModules.size === 0 && !t?.children?.length
    ? "ready"
    : kt(o.localModuleEvaluationMode)
      ? So(o).loadedRevision >= o.revision && !o.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : e.componentLoader.modulesRevision >= o.revision && !o.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function O(e) {
  return ho(e) !== "ready";
}
function On(e) {
  return !ie(e.stores.treeStore) && O(e);
}
async function Xo(e, o) {
  if (!o) return e;
  o?.throwIfAborted();
  let t = () => {},
    r = new Promise((n, a) => {
      ((t = () => a(o.reason)), o.addEventListener("abort", t, { once: !0 }));
    });
  try {
    await Promise.race([e, r]);
  } finally {
    o.removeEventListener("abort", t);
  }
}
function B(e) {
  let o = ie(e.stores.treeStore);
  return e.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: ae(e.componentLoader, e.stores.treeStore),
        usesTreeControls: o,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: ae(e.componentLoader, e.stores.treeStore),
        usesTreeControls: o,
        needsFallbackBeforeRead: !o && O(e),
      };
}
async function Ee(e, o) {
  let { modulesStore: t } = e.stores,
    r = So(t);
  if (!O(e)) {
    o?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = ho(e)) !== "ready";) {
    if (!r.promise) {
      let a = n,
        l = (
          a === "load-all"
            ? Pt(e.componentLoader, t, "localization")
            : Mt(e.componentLoader, t, "localization")
        )
          .then(() => {
            a === "load-all" && (r.loadedRevision = e.componentLoader.modulesRevision);
          })
          .finally(() => {
            r.promise === l && (r.promise = void 0);
          });
      r.promise = l;
    }
    await Xo(r.promise, o);
  }
}
async function Wn(e, o) {
  let t = B(e);
  return (t.needsFallbackBeforeRead && (await Ee(e, o)), o?.throwIfAborted(), t.componentLoader);
}
function Lo(e) {
  return e.unresolvedLocalizableCount > 0;
}
function jn(e, o) {
  return Lo(o) && O(e);
}
async function $n(e, o, t = e.signal) {
  var i = [];
  try {
    let r = B(e);
    r.needsFallbackBeforeRead && (await Ee(e, t));
    t?.throwIfAborted();
    let n = Ke(i, jt());
    let a = e.componentLoader.activeBundleHash;
    let s = await o(r.componentLoader);
    if (!r.usesTreeControls || P() === "tree-only" || !Lo(n.lookups)) return s;
    let l = O(e);
    l && (await Ee(e, t));
    if (!l && a === e.componentLoader.activeBundleHash) return s;
    t?.throwIfAborted();
    return await o(B(e).componentLoader);
  } catch (f) {
    var d = f,
      c = !0;
  } finally {
    qe(i, d, c);
  }
}
function To(e) {
  return !Number.isNaN(e.getTime());
}
function Hn(e) {
  return e.match(/^\d{2}:\d{2}$/gu) !== null;
}
function er(e) {
  return e.toISOString().split("T")[0];
}
function Kn(e) {
  let o = new Date(e);
  return To(o) ? er(o) : "";
}
function qn(e) {
  let o = new Date(e);
  return To(o)
    ? `${o.getUTCHours().toString().padStart(2, "0")}:${o.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var Yn = (() => {
    let e = null;
    return () => {
      if (Ce(e)) return e;
      let o = document.createElement("input"),
        t = "a";
      return (o.setAttribute("type", "date"), o.setAttribute("value", t), (e = o.value !== t), e);
    };
  })(),
  Jn = (() => {
    let e = null;
    return () => {
      if (Ce(e)) return e;
      let o = document.createElement("input"),
        t = "a";
      return (o.setAttribute("type", "time"), o.setAttribute("value", t), (e = o.value !== t), e);
    };
  })(),
  De = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function Ve(e) {
  return De.test(e);
}
function Qn(e) {
  if (!e) return;
  if (Ve(e)) return e;
  let o = new Date(e).toISOString();
  return (p(Ve(o), "Date format is not valid"), o);
}
function tr(e) {
  De.exec(e);
  let o = De.exec(e);
  p(o, "The provided date cannot have conformed to StandardZuluDateString");
  let [, t, r, n, a, s, l, i] = o;
  return [t, r, n, a, s, l, i];
}
function Xn([e, o, t, r, n, a, s]) {
  let l = `${e}-${o}-${t}T${r}:${n}:${a}.${s}Z`;
  return (p(Ve(l)), l);
}
function ei(e) {
  let [o, t, r] = tr(e);
  return `${r}/${t}/${o}`;
}
function Ae(e) {
  return B(e).componentLoader;
}
function or(e, o, t) {
  let r = e.reactComponentForIdentifier(o.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (ee(n, o.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function rr(e, o, t) {
  if (!mt(o)) return;
  let r = e.reactComponentForIdentifier(o.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (ee(n, o.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function nr(e, o, t, r) {
  let s = e.getNodeParent(t).getPropertyControls(e, o)[r.controlPropKey];
  if (!s) return;
  let l = t.getControlProp(r.controlPropKey);
  return ee(s, l) ?? void 0;
}
function vo(e, o, t, r) {
  if (x(t, !0)) return rr(o, t, r);
  if (z(t)) return nr(e, o, t, r);
  if (v(t)) return or(o, t, r);
}
function W(e, o, t, r) {
  let n = vo(e, o, t, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let a = ve(r.ancestorControlKeyPath);
  for (let s of a) {
    if (!n) return;
    if ((p(n.type === s.type), n.type === "object")) {
      if ((p(s.type === "object"), !fe(n.value))) return;
      n = n.value[s.key];
    } else if (n.type === "array") {
      if ((p(s.type === "array"), !pe(n.value))) return;
      n = n.value.find((l) => l.id === s.id);
    } else {
      return;
    }
  }
  return n;
}
function S(e, o) {
  e.set(o, void 0, !1, !1);
}
function bo(e, o, t) {
  S(e, { [pt(o)]: t });
}
function j(e, o, t, r, n) {
  if (!r.ancestorControlKeyPath) {
    yt(t)
      ? bo(t, r.controlPropKey, n)
      : z(t)
        ? (p(Ie(n), "Invalid control prop"), t.setControlProp(r.controlPropKey, n))
        : M(t, "Unsupported node");
    return;
  }
  p(x(t, !0) || v(t) || z(t));
  function a(f) {
    if (f) return f.type === "array" || f.type === "object" ? { ...f } : (p(f.type === n.type), n);
  }
  let s = a(vo(e, o, t, r));
  if (!s) return;
  let l = ve(r.ancestorControlKeyPath),
    i = s;
  for (let f of l) {
    if (!i) return;
    if ((p(i.type === f.type), i.type === "object")) {
      if ((p(f.type === "object", "Current control should be of type Object"), !fe(i.value)))
        return;
      let d = i.value[f.key],
        c = a(d);
      if (!c) return;
      ((i.value = { ...i.value, [f.key]: c }), (i = c));
    } else if (i.type === "array") {
      if ((p(f.type === "array", "Current control should be of type Array"), !pe(i.value))) return;
      let d = i.value.find((u) => u.id === f.id),
        c = a(d);
      if (!c) return;
      ((i.value = i.value.map((u) => (u.id === c.id ? c : u))), (i = c));
    } else {
      return;
    }
  }
  x(t, !0) || v(t)
    ? bo(t, r.controlPropKey, s)
    : z(t)
      ? (p(Ie(s), "Invalid control prop"), t.setControlProp(r.controlPropKey, s))
      : M(t, "Unsupported node");
}
function g(e, o, t, r) {
  let n = o ? o[e] : void 0,
    a = r(n, t);
  if (!(!o && !a)) {
    if (!a) {
      p(o);
      let s = Object.keys(o),
        l = s.length;
      if (l === 0 || (l === 1 && s[0] === e)) return;
      let i = { ...o };
      return (delete i[e], i);
    }
    return { ...o, [e]: a };
  }
}
function Fe(e, o, t, r, n) {
  function a(s) {
    function l(i) {
      return i.name === r.type;
    }
    return {
      ...s,
      transforms: s.transforms.map((i) => (i.id !== r.transformId || !l(i) ? i : n(i))),
    };
  }
  if (q(t) && J(t.textContent)) {
    let s = a(t.textContent);
    S(t, { textContent: s });
    return;
  }
  if (ye(t) && J(t.formInputPlaceholder)) {
    let s = a(t.formInputPlaceholder);
    S(t, { formInputPlaceholder: s });
    return;
  }
  if (v(t)) {
    let s = Ae(e),
      l = W(o, s, t, r);
    if (!l || (p(l.type === "string"), !J(l.value))) return;
    let i = { ...l };
    ((i.value = a(l.value)), j(o, s, t, r, i));
  }
}
function xo(e, o, t, r, n, a) {
  e.scheduler.process(() => {
    let s = e.stores.treeStore.getDataTree(),
      l = Ae(e),
      i = s.get(o.nodeId),
      f = o.type;
    switch (f) {
      case "string":
      case "richtext":
      case "link": {
        if (!z(i) && !v(i) && !x(i)) return;
        let d = W(s, l, i, o);
        if (!d) break;
        p(f === d.type);
        let c = { ...d },
          u = g(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = u), j(s, l, i, o, c));
        break;
      }
      case "slug": {
        if (!z(i)) return;
        let d = W(s, l, i, o);
        p(d?.type === "string", "expected slug control type to be a ControlType.String");
        let c = { ...d },
          u = g(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = u), j(s, l, i, o, c));
        break;
      }
      case "image": {
        if (!z(i) && !v(i) && !x(i)) return;
        let d = W(s, l, i, o);
        if (!d) break;
        p(f === d.type);
        let c = { ...d };
        if (r === "imageSrc" || r === "all") {
          let u = g(t.id, d.valueLocalized, "imageSrc", n);
          c.valueLocalized = u;
        }
        if (r === "default" || r === "all") {
          let u = g(t.id, d.altLocalized, "default", n);
          c.altLocalized = u;
        }
        j(s, l, i, o, c);
        break;
      }
      case "enum": {
        if (!Y(i)) return;
        let d = i.variables.map((c) => {
          if (c.id !== o.variableId) return c;
          p(c.type === o.type);
          let u = c.cases.map((y) => {
            if (y.id !== o.enumCaseId) return y;
            let m = g(t.id, y.nameLocalized, "default", n);
            return { ...y, nameLocalized: m };
          });
          return { ...c, cases: u };
        });
        S(i, { variables: d });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!It(i)) return;
        let d = o.key === "title" ? "titleLocalized" : "descriptionLocalized",
          c = i[d],
          u = g(t.id, c, "default", n);
        S(i, { [d]: u });
        break;
      }
      case "RichTextNode": {
        if (!q(i)) return;
        let d = g(t.id, i.htmlLocalized, "default", n);
        (S(i, { htmlLocalized: d }), he(i) && te(e) && be(e, Te(e, [i.id])).catch(G));
        break;
      }
      case "FrameNode": {
        if (!et(i)) return;
        if (r === "imageSrc" || r === "all") {
          let d = g(t.id, i.fillImageLocalized, "imageSrc", n);
          S(i, { fillImageLocalized: d });
        }
        if (r === "default" || r === "all") {
          let d = g(t.id, i.altAttributeLocalized, "default", n);
          S(i, { altAttributeLocalized: d });
        }
        break;
      }
      case "nodeLink": {
        if (!zt(i)) break;
        let d = g(t.id, i.linkLocalized, "default", n);
        S(i, { linkLocalized: d });
        break;
      }
      case "prefix":
      case "suffix": {
        if (!i) break;
        Fe(e, s, i, o, (d) => {
          let c = { ...d },
            u = g(t.id, d.valueLocalized, "default", n);
          return ((c.valueLocalized = u), c);
        });
        break;
      }
      case "convertFromBoolean": {
        if (!i) break;
        Fe(e, s, i, o, (d) => {
          let c = { ...d };
          return (
            o.property === "truthy" &&
              (c.truthyLocalized = g(t.id, d.truthyLocalized, "default", n)),
            o.property === "falsy" && (c.falsyLocalized = g(t.id, d.falsyLocalized, "default", n)),
            o.property === "fallback" &&
              d.fallback &&
              (c.fallback = {
                ...d.fallback,
                valueLocalized: g(t.id, d.fallback.valueLocalized, "default", n),
              }),
            c
          );
        });
        break;
      }
      case "convertFromEnum": {
        if (!i) break;
        Fe(e, s, i, o, (d) => {
          let c = { ...d };
          return o.isDefaultCase
            ? ((c.defaultLocalized = g(t.id, d.defaultLocalized, "default", n)), c)
            : ((c.cases = d.cases.map((u) => {
                if (u.id !== o.caseId) return u;
                let y = { ...u },
                  m = g(t.id, u.toLocalized, "default", n);
                return ((y.toLocalized = m), y);
              })),
              c);
        });
        break;
      }
      case "FormPlainTextInputNode": {
        if (!ye(i)) return;
        S(i, {
          formInputPlaceholderLocalized: g(t.id, i.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!ge(i) || !i.formSelectOptions) return;
        let { optionId: d } = o,
          c = i.formSelectOptions.map((u) => {
            if (u.id !== d) return u;
            let y = g(t.id, u.titleLocalized, "default", n);
            return { ...u, titleLocalized: y };
          });
        S(i, { formSelectOptions: c });
        break;
      }
      case "formSelectGenericOption": {
        if (!ge(i)) return;
        let { key: d } = o;
        switch (d) {
          case "allItemsLabel": {
            let c = g(t.id, i.allItemsLabelLocalized, "default", n);
            S(i, { allItemsLabelLocalized: c });
            break;
          }
          case "booleanTrueLabel": {
            let c = g(t.id, i.booleanTrueLabelLocalized, "default", n);
            S(i, { booleanTrueLabelLocalized: c });
            break;
          }
          case "booleanFalseLabel": {
            let c = g(t.id, i.booleanFalseLabelLocalized, "default", n);
            S(i, { booleanFalseLabelLocalized: c });
            break;
          }
          default:
            M(d);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!ot(i)) return;
        let d = i.segmentLocalized,
          c = g(t.id, d, "default", n);
        S(i, { segmentLocalized: c });
        break;
      }
      default:
    }
  }, a);
}
function ir(e, o, t, r, n) {
  e.scheduler.process(() => {
    let a = e.stores.treeStore.getDataTree(),
      s = Ae(e),
      l = a.get(o.nodeId),
      i = o.type;
    if (Zt(o)) {
      if (!z(l) && !v(l) && !x(l)) return;
      let f = W(a, s, l, o);
      if (!f) return;
      p(f.type === "richtext");
      let d = structuredClone(f);
      ((d.valueLocalized = g(t.id, f.valueLocalized, "default", r)), j(a, s, l, o, d));
    } else {
      (p(i === "RichTextNode"), p(q(l)));
      let f = g(t.id, l.htmlLocalized, "default", r);
      (S(l, { htmlLocalized: f }), he(l) && te(e) && be(e, Te(e, [l.id])).catch(G));
    }
  }, n);
}
function zo(
  e,
  o,
  t,
  r,
  n,
  {
    needsReview: a,
    generatedByAI: s,
    pluginId: l,
    pluginMode: i,
    ignoreTracking: f,
    trackingSource: d,
  }
) {
  let c = { value: e, hash: ar(o, t), lastEdited: Date.now() };
  a && (c.needsReview = !0);
  let u = Je(n?.value, e);
  return (
    (s || (u && n?.generatedByAI)) && (c.generatedByAI = !0),
    l || me(i)
      ? (p(l && me(i), "Cannot set only pluginId or pluginMode"),
        (c.pluginId = l),
        (c.pluginMode = i))
      : u &&
        n?.pluginId &&
        ((c.pluginId = n.pluginId), n.pluginMode && (c.pluginMode = n.pluginMode)),
    f ||
      D(n ? "localized_value_update" : "localized_value_create", {
        code: r.code,
        valueLength: typeof e == "string" ? e.length : 0,
        generatedByAI: !!c.generatedByAI,
        source: d,
      }),
    c
  );
}
function ar(e, o) {
  switch (o) {
    case "default":
      return e.hash;
    case "imageSrc":
      return (p(oe(e)), e.imageHash);
    default:
      M(o);
  }
}
function sr(e, o) {
  if (!o.draft) return;
  let t = e.stores.localizationStore.progressPerLocale[o.id];
  !H(t) ||
    t === 1 ||
    e.scheduler.runBeforeNextFrame(() => {
      e.stores.localizationStore.getCurrentExactProgressForLocale(e, o.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (e.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          e.stores.modalStore.set({ type: "LocaleReady", activeLocale: o, source: "automatic" }));
    });
}
function lr(e, o) {
  if (!e.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let t = e.stores.treeStore.getDataTree().get(o.nodeId);
  if (!Y(t) && !z(t)) return;
  let r = Y(t) ? t.id : t.parentid;
  r && e.stores.codeGenerationStore.updateComponent(r).catch(G);
}
function Io(e, o, t) {
  te(e) && (sr(e, t), lr(e, o));
}
function ko(e, o, t, r, n) {
  let {
    needsReview: a,
    generatedByAI: s,
    pluginId: l,
    pluginMode: i,
    ignoreTracking: f,
    target: d = "default",
    trackingSource: c,
    preserveExistingTextType: u,
    eventType: y,
  } = n;
  if (o !== null && typeof o != "string") {
    (ir(
      e,
      t,
      r,
      (m) =>
        zo(o, t, d, r, m, {
          needsReview: a,
          generatedByAI: s,
          pluginId: l,
          pluginMode: i,
          ignoreTracking: f,
          trackingSource: c,
        }),
      y
    ),
      Io(e, t, r));
    return;
  }
  (xo(
    e,
    t,
    r,
    d,
    (m) => {
      let b = zo(o, t, d, r, m, {
        needsReview: a,
        generatedByAI: s,
        pluginId: l,
        pluginMode: i,
        ignoreTracking: f,
        trackingSource: c,
      });
      if (
        (d === "imageSrc" &&
          ("imageFocalPoint" in n
            ? n.imageFocalPoint && (b.imageFocalPoint = n.imageFocalPoint)
            : m?.imageFocalPoint && (b.imageFocalPoint = m.imageFocalPoint)),
        u)
      )
        if (d === "default") {
          let C = t.localizedValues[r.id],
            L = C?.value ?? null;
          (p(L === o, "The text type can only be preserved when the source value is unchanged"),
            C?.type && (b.type = C.type));
        } else d === "imageSrc" || M(d);
      else $t(t) && (b.type = "rich-text");
      return b;
    },
    y
  ),
    Io(e, t, r));
}
function Po(e, o) {
  let t = e.localizedValues[o.id];
  return t ? t.value : null;
}
function Ri(e, o, t, r) {
  let n = "default",
    a = Po(o, t),
    s = o.localizedValues[t.id];
  if (oe(o)) {
    let l = o.imageLocalizedValues[t.id];
    l && ((n = "imageSrc"), (a = l.value), (s = l));
  }
  (ko(e, a, o, t, {
    needsReview: !0,
    ignoreTracking: !0,
    target: n,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    D("localized_value_request_review", {
      code: t.code,
      valueLength: typeof a == "string" ? a.length : 0,
      generatedByAI: !!s?.generatedByAI,
      source: r,
    }));
}
function wi(e, o, t, { trackingSource: r, ignoreTracking: n }) {
  let a = "default",
    s = Po(o, t),
    l = o.localizedValues[t.id];
  if (oe(o)) {
    let i = o.imageLocalizedValues[t.id];
    i && ((a = "imageSrc"), (s = i.value), (l = i));
  }
  (ko(e, s, o, t, {
    ignoreTracking: !0,
    target: a,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    n ||
      D("localized_value_approve", {
        code: t.code,
        valueLength: typeof s == "string" ? s.length : 0,
        generatedByAI: !!l?.generatedByAI,
        source: r,
      }));
}
function Ni(e, o, t, { target: r, ignoreTracking: n, trackingSource: a, eventType: s }) {
  xo(
    e,
    o,
    t,
    r,
    (l) => {
      let i = l?.value;
      n ||
        D("localized_value_clear", {
          code: t.code,
          valueLength: typeof i == "string" ? i.length : 0,
          generatedByAI: !!l?.generatedByAI,
          source: a,
        });
    },
    s
  );
}
var dr = Ye("pollProject");
async function Bi(e, o) {
  let { intervalMillis: t, attempts: r, stopCondition: n } = o;
  try {
    for (let a = 0; a < r; a++) {
      let s = await Rt.get(`/web/projects/${e}`, { includeAiCreditLimit: "true" }, void 0, wt());
      if (n(s)) return { status: 0, project: s };
      a < r - 1 && (await Q(t));
    }
    return { status: 1, message: `Polling exceeded ${r} attempts` };
  } catch (a) {
    return (dr.reportError(a), { status: 2, error: a });
  }
}
export {
  wr as a,
  re as b,
  mr as c,
  Ht as d,
  qt as e,
  $o as f,
  to as g,
  ln as h,
  dn as i,
  _o as j,
  cn as k,
  mn as l,
  Qo as m,
  O as n,
  On as o,
  B as p,
  Ee as q,
  Wn as r,
  jn as s,
  $n as t,
  Tr as u,
  br as v,
  zr as w,
  Ir as x,
  Bi as y,
  To as z,
  Hn as A,
  Kn as B,
  qn as C,
  Yn as D,
  Jn as E,
  Qn as F,
  tr as G,
  Xn as H,
  ei as I,
  ko as J,
  Ri as K,
  wi as L,
  Ni as M,
};
//# sourceMappingURL=chunk-WXT4GVRG.mjs.map
