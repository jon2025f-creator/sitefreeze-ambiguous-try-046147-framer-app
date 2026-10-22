import {
  $g as bt,
  Cf as X,
  Df as ht,
  Ef as xt,
  N as dt,
  Qd as Ct,
  Va as ct,
  Wa as mt,
  Xd as gt,
  Zd as It,
  _d as Et,
  hi as kt,
  kc as ut,
  sd as T,
  ta as D,
  td as ft,
  tg as vt,
  wg as St,
  xg as Pt,
  xj as At,
} from "chunk-S2XVV6PX.mjs";
import { c as wt } from "chunk-D3BIVQHH.mjs";
import { B as Nt } from "chunk-A442DOOD.mjs";
import { b as Tt } from "chunk-2UT53FHL.mjs";
import { ha as at, ja as st, ka as lt } from "chunk-AGRH3GOR.mjs";
import { Jc as q } from "chunk-FAGFJV35.mjs";
import { i as K } from "chunk-PP3ZAKQU.mjs";
import {
  $j as tt,
  Rt as nt,
  Tf as G,
  Ut as it,
  Yf as Ye,
  Zi as A,
  Zj as H,
  db as ue,
  gh as qe,
  kv as Y,
  lm as ot,
  mm as rt,
  yd as Ge,
} from "chunk-IPJAMXIN.mjs";
import {
  Ab as b,
  Bb as f,
  Br as Qe,
  Fa as k,
  Ha as Oe,
  Ho as ze,
  Io as Ke,
  Jr as et,
  Oi as $e,
  Op as Xe,
  Pp as Je,
  Qp as Ze,
  Ud as j,
  hm as He,
  kf as _e,
  nb as B,
  qb as P,
  qc as pe,
  rb as F,
  rl as fe,
  sb as me,
  ua as Ve,
  va as Fe,
  wa as S,
  wb as _,
  xa as Re,
  xl as je,
} from "chunk-NOSAYYBH.mjs";
import { d as J } from "chunk-5Y36GTP3.mjs";
import { c as M, d as pt } from "chunk-F44HGEZI.mjs";
import { a as z, u as yt, v as Ce } from "chunk-2NB736XJ.mjs";
import { f as w } from "chunk-3AYSHUTT.mjs";
import { f as ye } from "chunk-PLQ4BOSL.mjs";
import { e as $ } from "chunk-K3IJ2B65.mjs";
import { a as W } from "chunk-7BWPFUCH.mjs";
import { a as x } from "chunk-6TFWVVAP.mjs";
import { p as Be } from "chunk-5VQJ4RRO.mjs";
import { b as E, f as Ue, k as Le, n as We } from "chunk-Y3GZLMBF.mjs";
import { b as u, c as C } from "chunk-4JY5UMT2.mjs";
import { i as De, p as Me } from "chunk-VHFKZWVR.mjs";
import { b as L, i as we } from "chunk-WBI6GGAG.mjs";
async function Dt(e, t) {
  if (!t || !e.stores.loadingStore.hasMinimalEditableData) return;
  if (Be.isOn("invoke")) {
    (await e.stores.chromeStore.setActiveView({ type: "page", nodeId: t })) &&
      e.stores.siteSettingsStore.close();
    return;
  }
  let o = e.tree.get(t);
  (!me(o) && !F(o) && !P(o)) ||
    (e.stores.codeEditorStore.closeEditor(),
    e.stores.scopeStore.activeId !== t &&
      e.stores.canvasStore.invalidateTransformUntilRendered(() => {
        let r = e.stores.treeStore.getDataTree().get(t);
        (!me(r) && !F(r) && !P(r)) || e.stores.scopeStore.select(t, { keepHistory: !1 });
      }));
}
function cr(e, t, o, r, { shouldOpenPage: n = !0, renamedIds: i = new T() } = {}) {
  let a = It(e, t, o, "duplicate", {
    enterIsolation: !1,
    preferredName: r,
    insertionIndex: e.tree.root.children.findIndex((s) => s.id === t.id) + 1,
    renamedIds: i,
  });
  return (
    e.stores.persistedUserDefaults.newContentAsDraft &&
      a.set({ isDraft: !0, duplicatedFrom: Ye(a.duplicatedFrom, t.id) }),
    n && Dt(e, a.id),
    a
  );
}
function so(e, t, o) {
  let r = new T(),
    n = new Set(
      e.stores.scopeStore
        .getDesignPageNodes()
        .map((l) => l.resolveValue("name"))
        .filter(E)
    ),
    i = q(o ?? t.resolveValue("name") ?? "Design", n),
    a = t.clone({ name: i, children: new je() });
  r.set(t.id, a.id);
  let s = [];
  for (let l of t.children) {
    let d = Ct(l, new Map(), new Map(), r, !1);
    (s.push(d), r.set(l.id, d.id), a.addChild(d));
  }
  e.tree.insertNode(a, void 0, e.tree.root.children.findIndex((l) => l.id === t.id) + 1);
  for (let l of s) ft(e.tree, e.componentLoader, l, r, !1);
  return (
    dt(e.tree, t.id, a.id),
    w("design_page_create", { pageId: a.id, source: "duplicate" }),
    a
  );
}
async function mr(e, t, o) {
  let r = t.isLoaded() ? t : await t.load();
  if (!(!r || !lo(e, [t.id]))) return so(e, r, o);
}
function lo(e, t) {
  if (!t.length || D(e, "canDesign")) return !1;
  let o = e.stores.treeStore.getDataTree();
  return t.length === 1 && P(o.get(t[0]))
    ? !e.stores.chromeStore.hasNonDefaultCanvasLocale
    : t.every((r) => F(o.get(r)));
}
function Mt(e, t, o = !0) {
  e.scheduler.processWhenReady(() => {
    let {
      overlayStore: r,
      selectionStore: n,
      scopeStore: i,
      canvasStore: a,
      persistedUserDefaults: s,
    } = e.stores;
    i.selectByNode(t.id);
    let l = ue(t) ? t : e.tree.getNodeWithTrait(t.cache.overlayAncestorId, ue);
    if ((l ? r.showOverlay(n, l, l.parentid) : r.hideAll(), n.set(t.id), o)) {
      let d = rt(e.tree, [t]);
      a.zoomToCenter(d, { animated: s.animateOnZoom, maxZoom: 1 });
    }
  });
}
var R = we("unlinking");
async function co(e, t, o) {
  let { codeEditorStore: r, selectionStore: n, treeStore: i } = e.stores;
  r.closeEditor();
  let [a] = n.nodes;
  if (n.nodes.length === 1 && _(a) && a.codeComponentIdentifier === t) return !0;
  let s;
  for (let l of i.query().whereClass(Y).iterate())
    if (l.codeComponentIdentifier === t) {
      s = l;
      break;
    }
  return s
    ? (Mt(e, s), !0)
    : (M({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${o.name}.`,
      }),
      !1);
}
async function Z(e, t, o) {
  return (await co(e, t, o)) ? (e.stores.pluginStore.openPlugin(o, e, { mode: "canvas" }), !0) : !1;
}
function Q(e, t) {
  let o = e.componentForIdentifier(t);
  if (o) return o;
  let r = k(t);
  return !S(r) || !Re(r) ? null : e.componentForIdentifier(Ve(r));
}
var mo = 0;
async function ee(e, t, o = mo) {
  if (o === 0) {
    let n = k(t),
      i = X(e.stores.treeStore, e.stores.modulesStore, e.stores.pluginStore, n);
    if (i && (await Z(e, t, i))) return;
  }
  let r = Q(e.componentLoader, t);
  r && e.stores.codeEditorStore.editFile(r.file);
}
async function Ft(
  e,
  {
    identifier: t,
    info: o,
    instance: r,
    enterIsolation: n,
    codeComponentIsolationMode: i,
    scheduleTreeUpdate: a = (s) => e.scheduler.processWhenReadyAsync(s),
  }
) {
  let s = o.module.baseURL + o.module.files.source,
    d = await (await fetch(s)).text(),
    [m, c] = await Promise.all([kt(d), e.stores.modulesStore.getModuleDependencies(t)]);
  if (m.ok) {
    let g = new Map();
    for (let y of m.value.relative) {
      let N = qe(y.specifier, `${o.module.type}/`);
      if (!N) {
        R.warn("Failed to normalize relative import", y.specifier);
        continue;
      }
      let V = g.get(N) ?? [];
      (V.push(y), g.set(N, V));
    }
    let h;
    for (let y of c.imports) {
      if (y.type !== "local") continue;
      let N = `${y.moduleType}/${y.moduleName}`,
        V = g.get(N);
      if (!V) {
        R.warn("Unable to get source location of import", N, "when unlinking");
        continue;
      }
      for (let Ne of V) {
        h ||
          (h = d.split(`
`));
        let ke = Ne.specifierLine,
          Ae = h[ke];
        (u(Ae !== void 0, "Import source line must exist"),
          (h[ke] = Ae.replace(JSON.stringify(Ne.specifier), JSON.stringify(y.importURL))));
      }
    }
    h &&
      (d = h.join(`
`));
  }
  let v = await e.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: o.module.name,
        source: d,
        metadata: { pluginId: o.module.metadata.pluginId },
      }),
    I = Oe(t, v).value;
  return (
    r &&
      (await a(() => {
        let g = e.tree.get(r.getPrimaryId());
        g && g.set({ codeComponentIdentifier: I });
      })),
    n && (e.stores.chromeStore.activateContentPanelTab("Assets"), ee(e, I, i)),
    I
  );
}
var Rt = { canvasComponent: Et, codeFile: Ft };
function Ie(e) {
  return E(e) ? e in Rt : !1;
}
async function Ee(
  e,
  {
    identifier: t,
    moduleType: o,
    instance: r,
    enterIsolation: n = !0,
    codeComponentIsolationMode: i,
    renamedIds: a = new T(),
    isAutoDetach: s = !1,
    scheduleTreeUpdate: l,
  }
) {
  if (!Ie(o)) throw Error(`Cannot import external module of type ${o}`);
  let [d] = await e.stores.modulesStore.preloadExternalModules([t]);
  u(d, "external module must exist on preload");
  let m = {
      identifier: t,
      info: d,
      instance: r,
      enterIsolation: n,
      codeComponentIsolationMode: i,
      renamedIds: a,
      isAutoDetach: s,
      scheduleTreeUpdate: l,
    },
    c = Rt[o],
    p = await c(e, m);
  if (!We(p))
    return !E(p) && B(p)
      ? { ...d, codeComponentIdentifier: p.instanceIdentifier, node: p }
      : { ...d, codeComponentIdentifier: p, node: void 0 };
}
var ge = new Set();
async function he(e, t) {
  let { instance: o, withUnlinkModal: r, ...n } = t,
    i = K(e.stores.treeStore.tree, t.identifier),
    a = e.stores.insertSidebarStore.getEditBehavior(t.identifier.moduleId);
  if (r && a !== "autoUnlink" && (!i || Tt.isOn("openPrimaryForBuiltInModules"))) {
    e.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...n,
      nodeId: o?.id,
    });
    return;
  }
  if (ge.has(t.identifier)) return;
  ge.add(t.identifier);
  let s = t.skipUndoGroup !== !0;
  s &&
    e.scheduler.process(() => {
      e.beginUndoGroup();
    });
  try {
    return (await Ee(e, { instance: o, enterIsolation: a !== "autoDetach", ...n }))
      ?.codeComponentIdentifier;
  } catch (l) {
    (R.reportError(l),
      M({
        type: "add",
        variant: "error",
        primaryText: "Failed to unlink",
        secondaryText: "component.",
        key: "external-component-unlink-error",
      }));
  } finally {
    (s &&
      e.scheduler.processWhenReady(() => {
        e.endUndoGroup();
      }),
      ge.delete(t.identifier));
  }
}
async function Ot(e, t) {
  let { instance: o, moduleType: r, enterIsolation: n, codeComponentIsolationMode: i } = t,
    a = t.scheduleTreeUpdate ?? ((m) => e.scheduler.processWhenReadyAsync(m));
  if (!_(o)) return;
  let s = await he(e, { ...t, enterIsolation: !1 });
  if (!s) return;
  await ut(e.componentLoader, [s], e.stores.modulesStore, "component-unlinking");
  let l = e.componentLoader.componentForIdentifier(s);
  if (!l) return;
  let d = Pt(l);
  d &&
    (await a(() => {
      if (
        (e.stores.treeStore
          .query()
          .whereClass(Y)
          .whereNodeIsLoaded()
          .asArray()
          .forEach((c) => {
            if (
              !d ||
              d.id === c.id ||
              c.codeComponentIdentifier !== o.codeComponentIdentifier ||
              $e(c) ||
              !vt(c, { allowLockedNodes: !0 })
            )
              return;
            let p = e.cloneNode(d, !1, !1);
            St(e, [c], p);
          }),
        !!n)
      )
        if (r === "canvasComponent") {
          let c = nt(s);
          c && e.stores.scopeStore.select(c, { keepHistory: !1 });
        } else r === "codeFile" && ee(e, s, i);
    }));
}
function Ut(e, t, o) {
  if (D(e, "canDesign")) return;
  let n = e.tree.getNodeWithTrait(t, pe)?.annotation("framerVector");
  if (!H(n)) return;
  let i = n.set.moduleId,
    s = e.tree.getNodeWithTrait(i, pe)?.annotation("framerVectorSet");
  tt(s) &&
    e.stores.modalStore.set({
      type: "EditVector",
      source: "edit_action",
      vectorSetNodeId: i,
      moduleId: t,
      itemCount: s.items.length,
      instanceNodeId: o,
    });
}
function bn(e) {
  let t = e.collectionItemId;
  switch (e.type) {
    case "collectionField":
      return { nodeId: t, controlKey: e.variableId, steps: [] };
    case "arrayItemField":
      return {
        nodeId: t,
        controlKey: e.arrayVariableId,
        steps: [
          { type: "arrayItem", id: e.arrayItemId },
          { type: "objectProperty", key: e.variableId },
        ],
      };
    default:
      return C(e);
  }
}
function Lt(e, t, { nodeId: o, controlKey: r, steps: n }) {
  let i = Bt(e, t, o, r);
  for (let a of n) {
    if (!i) return;
    i = ve(t, i, a);
  }
  return i;
}
function Wt(e, t, o) {
  let r = Lt(e, t, o);
  return r?.type === "richtext" ? r : void 0;
}
function Tn(e, t, o, r) {
  let n = [];
  for (let i of o) {
    let a = Lt(e, t, i);
    if (a?.type !== "array" || j(a.value)) continue;
    let s = a.value[r];
    if (!s) continue;
    let l = { type: "arrayItem", id: s.id };
    n.push({ ...i, steps: [...i.steps, l] });
  }
  return n;
}
function Nn(e, t, { nodeId: o, controlKey: r, steps: n }) {
  let i = e.getNodeWithTrait(o, G)?.getControlPropSourceIdentifier(),
    a = O(t, i, r),
    s = Bt(e, t, o, r);
  for (let l of n) {
    switch (l.type) {
      case "arrayItem":
        a = a?.type === "array" ? a.control : void 0;
        break;
      case "objectProperty":
        a = a?.type === "object" ? a.controls[l.key] : void 0;
        break;
      case "richTextEmbed":
        ((i = s ? _t(s, l.embedId)?.identifier : void 0), (a = O(t, i, l.controlKey)));
        break;
      default:
        C(l);
    }
    if (((s = s && ve(t, s, l)), !s)) return;
  }
  if (!(!a || !i)) return { control: a, componentIdentifier: i };
}
function kn({ controlKey: e, steps: t }) {
  let o = t.findLast((r) => r.type !== "arrayItem");
  switch (o?.type) {
    case void 0:
      return $(e);
    case "objectProperty":
      return $(o.key);
    case "richTextEmbed":
      return $(o.controlKey);
    default:
      return C(o);
  }
}
function An(e, t, o) {
  let { componentLoader: r } = e,
    { nodeId: n, controlKey: i, steps: a } = t,
    s = e.tree.get(n);
  if (!s) return;
  if (f(s)) {
    let v = s.getControlProp(i),
      I = xe(r, v, a, o);
    if (W(v, I)) return;
    I ? Nt(I) && s.setControlProp(i, I) : s.clearControlProps([i]);
    return;
  }
  if (!G(s)) return;
  let l = O(r, s.getControlPropSourceIdentifier(), i);
  if (!l) return;
  let d = A(l, s.getRawControlProp(i)) ?? void 0,
    m = xe(r, d, a, o),
    c = A(l, m) ?? void 0;
  if (W(d, c)) return;
  let p = P(s) && W(A(l, void 0), c);
  (e.setEditReason("component_property"), s.setControlProp(i, p ? void 0 : c));
}
function O(e, t, o) {
  if (!t) return;
  let r = e.reactComponentForIdentifier(t);
  if (r) return r.properties[o];
}
function Bt(e, t, o, r) {
  let n = e.get(o);
  if (!n) return;
  if (f(n)) return n.getControlProp(r);
  if (!G(n)) return;
  let i = O(t, n.getControlPropSourceIdentifier(), r);
  if (i) return A(i, n.getRawControlProp(r)) ?? void 0;
}
function ve(e, t, o) {
  switch (o.type) {
    case "arrayItem":
      return t.type !== "array" || j(t.value) ? void 0 : t.value.find((r) => r.id === o.id);
    case "objectProperty":
      return t.type !== "object" ? void 0 : t.value?.[o.key];
    case "richTextEmbed": {
      let r = _t(t, o.embedId);
      if (!r) return;
      let n = O(e, r.identifier, o.controlKey);
      return n ? (A(n, r.props[o.controlKey]) ?? void 0) : void 0;
    }
    default:
      return C(o);
  }
}
function xe(e, t, o, r) {
  let [n, ...i] = o;
  if (!n) return r;
  if (!t) return;
  let a = ve(e, t, n);
  return !a && i.length > 0 ? t : fo(t, n, xe(e, a, i, r));
}
function fo(e, t, o) {
  switch (t.type) {
    case "arrayItem": {
      if (e.type !== "array" || j(e.value) || !o) return e;
      let r = { ...o, id: t.id };
      if (!ze(r)) return e;
      let n = e.value.map((i) => (i.id === t.id ? r : i));
      return { ...e, value: n };
    }
    case "objectProperty": {
      if (e.type !== "object") return e;
      let { [t.key]: r, ...n } = e.value ?? {};
      return { ...e, value: o ? { ...n, [t.key]: o } : n };
    }
    case "richTextEmbed": {
      if (e.type !== "richtext" || !fe(e.value)) return e;
      let r = Je(e.value, {
        module: (n) => {
          if (!$t(n, t.embedId)) return n;
          let { [t.controlKey]: i, ...a } = n.props;
          return { ...n, props: o ? { ...a, [t.controlKey]: o } : a };
        },
      });
      return { ...e, value: r };
    }
    default:
      return C(t);
  }
}
function _t(e, t) {
  if (e.type !== "richtext" || !fe(e.value)) return null;
  let o = Xe(e.value, { module: (r) => $t(r, t) });
  return o?.type === "module" ? o : null;
}
function $t(e, t) {
  return Ze(e) === t;
}
function ie(e) {
  return e?.type === "componentRichTextContent";
}
function $n(e) {
  switch (e.type) {
    case "existing":
    case "privateDraft":
    case "arrayItem":
      return !0;
    case "componentRichTextContent":
      return !1;
    default:
      C(e);
  }
}
function ae(e) {
  return e.type === "existing" || e.type === "privateDraft";
}
function jn({ stackElement: e, tree: t }) {
  if (!e || ie(e)) return null;
  let o = t.getNodeWithTrait(e.collectionId, b);
  if (o) return o;
  let r = e.type === "arrayItem" ? e.collectionItemId : e.itemId,
    n = t.getNodeWithTrait(r, f);
  return n?.parentid ? t.getNodeWithTrait(n.parentid, b) : null;
}
function yo({ treeStore: e, stackElement: t }) {
  if (!t || ie(t)) return null;
  if (t.type === "existing" || t.type === "privateDraft")
    return e.tree.getNodeWithTrait(t.itemId, f);
  if (t.type === "arrayItem") return e.tree.getNodeWithTrait(t.collectionItemId, f) ?? null;
  C(t);
}
function Gn({ treeStore: e, stackElement: t }) {
  return !t || !Se(t) ? null : yo({ treeStore: e, stackElement: t });
}
function Hn(e) {
  return e.findLast(ae) ?? null;
}
function Yn(e) {
  return e.find(ae) ?? null;
}
function qn(e) {
  return e.reduce((t, o) => (ae(o) ? t + 1 : t), 0);
}
function zn(e, t = []) {
  let o = e.stores.selectionStore.ids.length === 1 ? e.stores.selectionStore.ids.at(0) : void 0,
    r = Co(e, t),
    n = r.at(0);
  if (ie(n)) return r;
  let i = e.tree.getNodeWithTrait(o, f),
    a = i && ne(e, i) ? i : null;
  if (a) {
    if (!n) return [Gt(e, a)];
    if (n.type === "existing")
      return n.itemId === a.id
        ? r
        : (u(r.length === 1, "Must dismiss overlay stack before changing selection"), [Gt(e, a)]);
    if (n.type === "privateDraft") {
      if (n.itemId === a.id) return r;
      throw new Error("Must save private draft item stack before selecting a collection item");
    }
    if (n.type === "arrayItem") return r;
    C(n);
  }
  if (!n || n.type === "privateDraft") return r;
  if (n.type === "existing")
    return e.stores.chromeStore.mainView !== 2
      ? r
      : (u(r.length === 1, "Must dismiss overlay stack before de-selecting collection item"), []);
  if (n.type === "arrayItem") return r;
  C(n);
}
function Co(e, t) {
  let o = [];
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    if (!n) continue;
    if (ie(n)) {
      if (!n.controlPropPaths.some((l) => Wt(e.tree, e.componentLoader, l))) break;
      o.push(n);
      continue;
    }
    if (n.type === "existing") {
      let s = e.tree.getNodeWithTrait(n.itemId, f);
      s && re(e, s)
        ? (n = oe(e, s, { saveAction: n.saveAction, showErrors: !1 }))
        : s?.parentid &&
          n.collectionId !== s.parentid &&
          (n = oe(e, s, { saveAction: n.saveAction, showErrors: !1 }));
    }
    if (n.type === "privateDraft") {
      let s = e.tree.getNodeWithTrait(n.itemId, f);
      s && ne(e, s) && !re(e, s) && (n = oe(e, s, { saveAction: n.saveAction, showErrors: !1 }));
    }
    let i = o.at(-1) ?? null;
    if (!go(e, n, i) || (r > 0 && Se(n) && !n.saveAction)) break;
    o.push(n);
  }
  return o;
}
function go(e, t, o) {
  if (t.type === "existing") {
    let r = e.tree.getNodeWithTrait(t.itemId, f);
    return r ? !!r.parentid && ne(e, r) : !1;
  }
  if (t.type === "privateDraft") {
    let r = e.tree.getNodeWithTrait(t.itemId, f);
    return r ? r.parentid === t.collectionId && re(e, r) : !1;
  }
  if (t.type === "arrayItem") {
    if (
      !o ||
      !ae(o) ||
      o.itemId !== t.collectionItemId ||
      (Se(o) && o.collectionId !== t.collectionId)
    )
      return !1;
    let r = e.tree.getNodeWithTrait(t.collectionId, b);
    if (!r) return !1;
    let n = e.tree.getNodeWithTrait(t.collectionItemId, f);
    if (!n || !ne(e, n) || (n.parentid && n.parentid !== t.collectionId)) return !1;
    let i = r.getVariable(t.arrayFieldId);
    if (!i || !et(i)) return !1;
    let a = n.getControlProp(t.arrayFieldId);
    return !a || !Ke(a) || !Le(a.value)
      ? !1
      : a.value.some(({ type: s, id: l }) => s === "object" && l === t.arrayItemId);
  }
  C(t);
}
function re(e, t) {
  return ct(t, { currentUserId: e.stores.sessionStore.user.id });
}
function ne(e, t) {
  return mt(t, { currentUserId: e.stores.sessionStore.user.id });
}
function Se(e) {
  return e.type === "privateDraft";
}
function Gt(e, t) {
  return oe(e, t, { showErrors: !1 });
}
function oe(e, t, o) {
  if (t.parentid && re(e, t)) {
    let n = {
      collectionId: t.parentid,
      itemId: t.id,
      showErrors: o.showErrors,
      type: "privateDraft",
    };
    return (o.saveAction && (n.saveAction = o.saveAction), n);
  }
  u(t.parentid, "Existing collection item must have a parent collection");
  let r = { collectionId: t.parentid, itemId: t.id, type: "existing" };
  return (o.saveAction && (r.saveAction = o.saveAction), r);
}
function Ht(e) {
  let { newContentAsDraft: t } = e.stores.persistedUserDefaults;
  return !(!t || e.stores.publishStore.publishStatus === 1);
}
function Yt(e, t, o, r) {
  t.stores.canvasStore.invalidateTransformUntilRendered(() => {
    try {
      (t.stores.scopeStore.select(e, r), t.stores.codeEditorStore.closeEditor());
    } catch {
      (w("open_primary_component_fail", {}),
        M({
          type: "add",
          variant: "error",
          key: "invalid-deep-link",
          primaryText: "Primary component",
          secondaryText: "has been deleted.",
          duration: 1e4,
        }));
      return;
    }
    if (!o) return;
    let n = t.tree.getNode(o);
    n &&
      t.tree.getScopeNodeFor(n)?.id === e &&
      (t.stores.selectionStore.set(n.id),
      t.stores.canvasStore.zoomToCenter(ot(t.tree, n), { animated: !1, maxZoom: 1 }));
  });
}
function Io(e, t) {
  let o = e.stores.insertSidebarStore.getEditBehavior(t.moduleId),
    r = K(e.stores.treeStore.tree, t),
    n = e.componentLoader.componentForIdentifier(t.value)?.annotations;
  return (r && o === "block") || He(n, "framerDisableUnlink");
}
function qt(e, t, o, r) {
  let n = k(e),
    i = D(t, "canDesign"),
    { includeAccelerator: a = !0 } = r;
  if (S(n) && n.type === "shader") {
    let c = t.stores.modulesStore.getModuleEntryByLocalId(n.localId)?.name;
    return c
      ? [
          {
            label: `${i ? "View" : "Edit"} ${ye("Code")}`,
            click: () => t.stores.codeEditorStore.editFile(c),
          },
        ]
      : x();
  }
  if (S(n) && (n.type === "canvasComponent" || n.type === "screen" || n.type === "vector"))
    return [
      {
        label: i ? "View" : "Edit",
        accelerator: a ? J.fakeSelectChildren : void 0,
        click: () => {
          if (n.type === "vector") {
            let p = t.stores.modulesStore
              .forType("vector")
              .getByStableName(n.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!H(p)) return;
            let { set: v } = p;
            Yt(v.id, t, n.localIdName, r);
            return;
          }
          let [, c] = n.localId.split("/");
          c && Yt(c, t, o, r);
        },
      },
    ];
  if (Fe(n) && n.kind === "externalModuleExport") {
    if (r.node?.isVectorInstance)
      return gt(t, e)
        ? x()
        : [
            {
              label: "Edit",
              accelerator: a ? J.fakeSelectChildren : void 0,
              click: () => Ut(t, n.moduleId, r.node?.id),
              enabled: !i,
            },
          ];
    let c = t.stores.insertSidebarStore.getEditBehavior(n.moduleId),
      p = t.stores.treeStore.tree.get(n.moduleId),
      I = r.externalModuleType === "canvasComponent" && p?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (Io(t, n)) return x();
    if (!Ie(r.externalModuleType)) return x();
    let { node: g, withUnlinkModal: h, externalModuleType: y } = r;
    return g && c === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !i,
            click: async () => {
              (t.beginUndoGroup(),
                pt(
                  {
                    key: "auto-detach",
                    progress: {
                      variant: "progress",
                      primaryText: "Detaching component",
                      secondaryText: "instance\u2026",
                    },
                    error: {
                      variant: "error",
                      primaryText: "Failed to detach",
                      secondaryText: "component instance.",
                    },
                  },
                  async () => {
                    await Eo(g, t, n, y);
                  }
                ).catch(L),
                t.endUndoGroup());
            },
          },
        ]
      : I
        ? [
            {
              label: "Edit",
              accelerator: a ? J.fakeSelectChildren : void 0,
              click: () => {
                Ot(t, { identifier: n, moduleType: y, instance: g, enterIsolation: !0 }).catch(L);
              },
              enabled: !i,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                he(t, {
                  identifier: n,
                  moduleType: y,
                  instance: g,
                  withUnlinkModal: h,
                  enterIsolation: !0,
                }).catch(L);
              },
              enabled: !i,
            },
          ];
  }
  let s = Q(t.componentLoader, e);
  if (s?.type !== "component" || s.depth !== 0) return x();
  let l = r.keepHistory
      ? void 0
      : () => {
          t.stores.scopeStore.goBack();
        },
    d = X(t.stores.treeStore, t.stores.modulesStore, t.stores.pluginStore, n);
  return [
    ...(d && xt(t.stores.modulesStore, n) && !i && S(e)
      ? [
          {
            label: ht(d),
            click: () => {
              (l?.(), Z(t, e, d));
            },
          },
        ]
      : []),
    {
      label: `${i ? "View" : "Edit"} ${ye("Code")}`,
      click: () => {
        (l?.(), t.stores.codeEditorStore.editFile(s.file));
      },
      enabled: S(e),
    },
  ];
}
async function Eo(e, t, o, r) {
  let n = new T(),
    i = await Ee(t, {
      identifier: o,
      moduleType: r,
      instance: e,
      renamedIds: n,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!i) return null;
  let { node: a } = i;
  return B(a)
    ? t.scheduler.processWhenReadyAsync(() => {
        let s = bt.detachSmartComponentOrWebPageInstance(t, e.draftOrCurrent(), a, n);
        return (s && t.stores.selectionStore.set(s.id), s);
      })
    : null;
}
function zt(e) {
  return e?.find((o) => o.enabled !== !1)?.click;
}
function ho(e, t, o) {
  return qt(e, t, null, o);
}
function vi(e, t, o) {
  return zt(ho(e, t, o));
}
function xo(
  e,
  t,
  { withUnlinkModal: o = !0, externalModuleType: r, activateContentPanel: n } = {}
) {
  let i = it(t.tree, e);
  return qt(e.codeComponentIdentifier, t, i, {
    keepHistory: !0,
    node: e,
    withUnlinkModal: o,
    externalModuleType: r,
    activateContentPanel: n,
  });
}
function Si(e, t, o = {}) {
  return zt(xo(e, t, o));
}
function Fi(e) {
  e.engine.scheduler.processWhenReady(() => {
    vo(e);
  });
}
function vo({ collectionId: e, engine: t, saveAction: o, source: r }) {
  let n = t.tree.getNodeWithTrait(e, b);
  u(n, "Collection needs to exist to allow creation of new item");
  let i = t.stores.selectionStore.ids[0],
    a = t.tree.getNodeWithTrait(i, b);
  (a && a.id !== n.id && u(o, "saveAction is required when creating a nested private draft item"),
    So({ collection: n, engine: t, saveAction: o }),
    w("collection_record_create", { source: r }));
}
function So({ collection: e, engine: t, saveAction: o }) {
  let r = Po(t, e, 0);
  t.stores.contentManagementStore.openPrivateDraftCollectionItem({
    collectionId: e.id,
    itemId: r.id,
    saveAction: o,
  });
}
function Po(e, t, o) {
  let r = e.stores.sessionStore.user.id,
    n = bo(t, r);
  if (n) return n;
  let i = lt.create({ privateToUserId: r, ...at(e.tree.root.locales ?? x()) });
  return (e.stores.scopeStore.insertNode(i, t.id, o), No(t, i), Ht(e) && i.set({ isDraft: !0 }), i);
}
function bo(e, t) {
  let o,
    r = 0;
  for (let n of e.children) {
    if (n.privateToUserId !== t) continue;
    let i = To(n);
    (!o || i > r) && ((o = n), (r = i));
  }
  return o;
}
function To(e) {
  if (!e.createdAt) return 0;
  let t = new Date(e.createdAt).getTime();
  return Number.isNaN(t) ? 0 : t;
}
function No(e, t) {
  let o = ko(t);
  for (let r of e.variables)
    r.type === "date" &&
      t.setControlProp(r.id, { type: "date", value: Pe(o, r.options?.displayTime) });
}
function ko(e) {
  if (!e.createdAt) return new Date();
  let t = new Date(e.createdAt);
  return Number.isNaN(t.getTime()) ? new Date() : t;
}
function Pe(e, t) {
  return t
    ? new Date(
        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())).toJSON();
}
function Bi({ variables: e, collectionItem: t }) {
  if (!t.hasData()) return !1;
  for (let o of e) {
    if (o.type === "divider") continue;
    let r = t.getControlProp(o.id);
    if (!(!r || !st(r.value)) && !Ao(t, r, o)) return !0;
  }
  return !1;
}
function Ao(e, t, o) {
  if (o.type !== "date" || t.type !== "date" || !E(t.value) || !e.createdAt) return !1;
  let r = new Date(e.createdAt);
  return Number.isNaN(r.getTime()) ? !1 : t.value === Pe(r, o.options?.displayTime);
}
function Kt(e, t) {
  let o = _e(e);
  return o.length ? q(o, t, { withDash: !0 }) : "";
}
function Xi(e, t, o, r) {
  for (let n of e.variables) {
    if (n.type === "divider" || !Qe(n)) continue;
    let i = r?.get(n.id) ?? t.getControlProp(n.id);
    if ((!i || !E(i.value) || !i.value.length) && n.associatedStringVariable) {
      let s = r?.get(n.associatedStringVariable) ?? t.getControlProp(n.associatedStringVariable);
      if (s && E(s.value)) {
        let l = Kt(s.value, (d) => At(o.get(n.id), d, t.id));
        if (l.length)
          return (
            t.setControlProp(n.id, { type: "string", value: l }),
            { changedControlProp: n.id }
          );
      }
    }
  }
  return !1;
}
var wo = De() && navigator.userAgent.includes("Version/16"),
  Qi = window.CompressionStream && !wo;
function se(e) {
  let t = 0,
    o = !1,
    r = (i) => {
      let a = i;
      return (e && (a -= 1), Math.max(0, a));
    },
    n = () => t + (o ? 1 : 0);
  return {
    addText(i) {
      if (!i) return r(n());
      for (let a = 0; a < i.length; a++)
        i[a] ===
        `
`
          ? (t++, (o = !1))
          : (o = !0);
      return r(n());
    },
    finish() {
      return (o && (t++, (o = !1)), r(t));
    },
  };
}
var be = "text/csv;charset=utf-8",
  Do = "X-Next-Cursor",
  Mo = 1e4,
  le = 4,
  Vo = 500,
  de = class extends Error {
    name = "AnalyticsExportIncompleteError";
  };
function Fo(e) {
  return e.headers.get(Do)?.trim() || void 0;
}
function Jt(e) {
  return e === 429 || e >= 500;
}
function Zt(e) {
  let t = e.status ?? 0;
  return t >= 400 && t < 500 && t !== 429 ? !1 : Jt(t);
}
function Ro(e) {
  if (!Zt(e)) {
    let { message: t, status: o, data: r, code: n, ref: i, skipSentry: a } = e;
    return new z({
      message: t,
      status: o,
      data: r,
      code: n,
      ref: i,
      isTemporary: !1,
      skipSentry: a,
    });
  }
  return e;
}
async function Oo(e) {
  let t = e.statusText || "Analytics export request failed",
    o = {};
  try {
    let n = await e.text();
    if (n)
      try {
        let i = JSON.parse(n);
        (typeof i.error?.message == "string" && (t = i.error.message), Ue(i.data) && (o = i.data));
      } catch {
        t = n;
      }
  } catch {}
  let r = e.status;
  return new z({ message: t, status: r, data: o, isTemporary: Jt(r) });
}
async function Uo(e, t, o) {
  let r = `/web/analytics/${e}/events-export`;
  for (let n = 0; n < le; n++) {
    if (n > 0) {
      if (o?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
      await Ge(n, Vo);
    }
    try {
      let i = await Ce.getRaw(r, t, o);
      if (i.ok) return i;
      let a = await Oo(i);
      if (!a.isTemporary || n === le - 1) throw a;
    } catch (i) {
      if (yt(i)) throw i;
      if (i instanceof z) {
        let a = Ro(i);
        if (!Zt(a) || n === le - 1) throw a;
        continue;
      }
      if (n === le - 1) throw i;
    }
  }
  throw new Error("Analytics export page fetch exhausted retries");
}
async function* Lo(e, { startDate: t, endDate: o }, r, n) {
  let i,
    a = !0,
    s = new Set();
  for (let l = 0; l < Mo; l++) {
    n?.(l + 1);
    let d = await Uo(e, { startDate: t, endDate: o, includeHeader: a, cursor: i }, r);
    yield d;
    let m = Fo(d);
    if (!m) return;
    if (s.has(m))
      throw new de("Export pagination repeated; try again or use a smaller date range.");
    (s.add(m), (i = m), (a = !1));
  }
  throw new de("Export is too large to download in one file. Try a smaller date range.");
}
async function Qt(e, t, o, r) {
  let n = 0,
    i = 0;
  for await (let a of Lo(e, t, o.signal, o.onPageStarted)) {
    let s = i,
      d = await r(a, n === 0, (m) => {
        o.onTransferredEvents?.(s + m);
      });
    ((i += d), n++, o.onPageComplete?.(n, i));
  }
}
async function Wo(e, t, o) {
  let r = [],
    n = to(t);
  return (
    await Qt(e, t, o, async (i, a, s) => {
      let l = await i.text();
      r.push(new Blob([l], { type: be }));
      let d = se(a);
      d.addText(l);
      let m = d.finish();
      return (s(m), m);
    }),
    { blob: new Blob(r, { type: be }), filename: n }
  );
}
function eo() {
  let e = globalThis.showSaveFilePicker;
  return typeof e == "function" ? e.bind(globalThis) : void 0;
}
function Bo() {
  return !Me() && eo() !== void 0;
}
async function _o(e, t) {
  if (t?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  let o = eo();
  if (!o) throw new Error("File System Access API is not available");
  let r = await o({
    suggestedName: to(e),
    types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
  });
  if (t?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  return r.createWritable();
}
async function ma(e, t, o = {}) {
  if (Bo()) {
    await $o(e, t, o);
    return;
  }
  let { blob: r, filename: n } = await Wo(e, t, o);
  wt(r, n);
}
async function $o(e, t, o) {
  let r = o.writable;
  r || (r = await _o(t, o.signal));
  try {
    (await Qt(e, t, o, async (n, i, a) =>
      jo({ response: n, writable: r, includesHeader: i, onPageProgress: a })
    ),
      u(r),
      await r.close());
  } catch (n) {
    throw (await r?.abort().catch(() => {}), n);
  }
}
async function jo({ response: e, writable: t, includesHeader: o, onPageProgress: r }) {
  if (!e.body) {
    let l = await e.text(),
      d = new Blob([l], { type: be });
    await t.write(d);
    let m = se(o);
    m.addText(l);
    let c = m.finish();
    return (r(c), c);
  }
  let n = e.body.getReader(),
    i = new TextDecoder(),
    a = se(o);
  for (;;) {
    let { done: l, value: d } = await n.read();
    if (l) break;
    (await t.write(d), r(a.addText(i.decode(d, { stream: !0 }))));
  }
  a.addText(i.decode());
  let s = a.finish();
  return (r(s), s);
}
function Xt(e) {
  let [t, o, r] = e.split("-");
  return `${r}-${o}-${t.slice(-2)}`;
}
function to({ startDate: e, endDate: t }) {
  let o = Xt(e),
    r = Xt(t);
  return `Analytics Export \u2014 ${o} \u2192 ${r}.csv`;
}
async function pa(e, { startDate: t, endDate: o }, r) {
  return await Ce.get(`/web/analytics/${e}/events-export-count`, { startDate: t, endDate: o }, r);
}
var oo = "2024-11-01",
  Go = /^\d{4}-\d{2}-\d{2}$/,
  Ho = 1440 * 60 * 1e3;
function ya(e, t) {
  return !(e === void 0 || (e !== null && e <= 0) || t === void 0 || (t !== null && t <= 0));
}
function Ca(e) {
  return e === null ? null : e === void 0 || e <= 0 ? 0 : e;
}
function Yo(e = new Date()) {
  return io(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())));
}
function ga(e, t = new Date()) {
  if (e === null) return oo;
  let o = Yo(t);
  if (e === void 0 || e <= 0) return o;
  let r = U(o, -(e - 1));
  return ce(r, oo, o);
}
function ce(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
function qo(e, t, o) {
  return e < U(t, -o);
}
function U(e, t) {
  let o = new Date(Te(e));
  return (o.setUTCDate(o.getUTCDate() + t), io(o));
}
function ro(e) {
  return e === null ? null : e - 1;
}
function Ia(e, t, o) {
  let { fromDay: r } = no({ ...o, fromDay: e, toDay: t });
  return { fromDay: r };
}
function Ea(e, t, o, r) {
  return no({ ...r, fromDay: e, toDay: ce(o, e, r.maxExportDay) });
}
function ha(e, t, o) {
  if (!Go.test(e)) throw new Error(`${o} expected '${t}' to be a UTC calendar day (YYYY-MM-DD).`);
  let r = new Date(`${e}T00:00:00.000Z`);
  if (Number.isNaN(r.getTime()) || r.toISOString().slice(0, 10) !== e)
    throw new Error(`${o} expected '${t}' to be a valid UTC calendar day.`);
}
function xa(e, t, o, r) {
  if (o === null) return;
  let n = o - 1,
    i = U(t, -n);
  if (e < i) throw new Error(r);
}
function no({ fromDay: e, toDay: t, minDay: o, maxExportDay: r, maxExportInclusiveDays: n }) {
  let i = t > r ? r : t,
    a = ce(e, o, i),
    s = ro(n);
  return (
    s !== null && qo(a, i, s) && ((a = U(i, -s)), a < o && (a = o)),
    { fromDay: a, toDay: i }
  );
}
function va(e, t, o, r) {
  return e > t
    ? { canExport: !1, message: "The start date must be before the end date." }
    : e > r || t > r
      ? { canExport: !1, message: "Export dates must be on or before today (UTC)." }
      : e < o
        ? {
            canExport: !1,
            message: `The selected range is outside your analytics retention. Earliest available date is ${o} (UTC).`,
          }
        : { canExport: !0 };
}
function Sa(e, t, o, r) {
  let n = ce(e, t, o),
    i = t,
    a = ro(r);
  if (a !== null) {
    let s = U(e, -a);
    s > i && (i = s);
  }
  return (i > n && (i = n), { min: i, max: n });
}
function Te(e) {
  let [t, o, r] = e.split("-").map(Number);
  return (u(t && o && r, "day must be a valid yyyy-MM-dd string"), Date.UTC(t, o - 1, r));
}
function io(e) {
  let t = e.getUTCFullYear(),
    o = String(e.getUTCMonth() + 1).padStart(2, "0"),
    r = String(e.getUTCDate()).padStart(2, "0");
  return `${t}-${o}-${r}`;
}
function Pa(e, t) {
  let o = Te(e),
    r = Te(t);
  return Math.floor((r - o) / Ho) + 1;
}
export {
  Q as a,
  Mt as b,
  Ie as c,
  Ee as d,
  he as e,
  Ot as f,
  Yt as g,
  Io as h,
  Eo as i,
  ho as j,
  vi as k,
  xo as l,
  Si as m,
  bn as n,
  Wt as o,
  Tn as p,
  Nn as q,
  kn as r,
  An as s,
  ie as t,
  $n as u,
  ae as v,
  jn as w,
  yo as x,
  Gn as y,
  Hn as z,
  Yn as A,
  qn as B,
  zn as C,
  Co as D,
  Se as E,
  Ht as F,
  Fi as G,
  vo as H,
  Po as I,
  bo as J,
  No as K,
  Bi as L,
  Kt as M,
  Xi as N,
  Qi as O,
  de as P,
  Bo as Q,
  _o as R,
  ma as S,
  to as T,
  pa as U,
  ya as V,
  Ca as W,
  Yo as X,
  ga as Y,
  U as Z,
  Ia as _,
  Ea as $,
  ha as aa,
  xa as ba,
  no as ca,
  va as da,
  Sa as ea,
  Pa as fa,
  Dt as ga,
  cr as ha,
  so as ia,
  mr as ja,
  lo as ka,
};
//# sourceMappingURL=chunk-CDOGXFOB.mjs.map
