import { c as Rj } from "chunk-D3BIVQHH.mjs";
import {
  $a as YA,
  Hh as Ej,
  N as WA,
  Qd as kj,
  Ti as dj,
  Xd as aj,
  Zd as oj,
  _d as nj,
  _g as $j,
  ab as ZA,
  bh as lj,
  ch as Bj,
  ic as jj,
  kb as K,
  sd as f,
  td as ej,
  wg as J,
  xg as ij,
  yg as sj,
} from "chunk-EGZEVTFV.mjs";
import { b as cj } from "chunk-WCK2V2L4.mjs";
import { $ as VA, Z as QA, aa as zA } from "chunk-TNGMOH7U.mjs";
import { Sb as C } from "chunk-CP6IONC3.mjs";
import { a as Gj } from "chunk-FJSWQEJJ.mjs";
import { s as w } from "chunk-7ZCOVLUS.mjs";
import { a as nA } from "chunk-ZHEXTBMH.mjs";
import { h as N } from "chunk-6ZVNI6VL.mjs";
import {
  $o as JA,
  Dw as LA,
  Gw as UA,
  Mi as HA,
  Ob as rA,
  Tj as KA,
  Ux as XA,
  ap as wA,
  qm as x,
  sm as NA,
  tj as xA,
  ue as qA,
} from "chunk-DQOI5IN7.mjs";
import { b as CA } from "chunk-ESOYWVIH.mjs";
import {
  Ak as DA,
  Ca as O,
  Ea as gA,
  Hi as yA,
  gf as PA,
  ip as TA,
  jb as H,
  mo as MA,
  nc as tA,
  pp as vA,
  ra as _A,
  sa as fA,
  sb as S,
  ta as I,
  ua as bA,
  wb as _,
  xb as G,
} from "chunk-X3AVB25H.mjs";
import { d as L } from "chunk-5Y36GTP3.mjs";
import { e as U } from "chunk-3NRN5JRB.mjs";
import { c as h, d as Aj } from "chunk-KHLE6F5R.mjs";
import { b as aA, t as rj, u as oA } from "chunk-JU2ALTUF.mjs";
import { f as R } from "chunk-OFGBMMSD.mjs";
import { f as kA } from "chunk-QVHG2R47.mjs";
import { a as tj } from "chunk-GBWZWM2Q.mjs";
import { a as m } from "chunk-6TFWVVAP.mjs";
import { g as OA } from "chunk-RLPC655Z.mjs";
import { b as d, k as SA, m as hA } from "chunk-LA34HORX.mjs";
import { b as E, c as y } from "chunk-4JY5UMT2.mjs";
import { i as uA, p as IA } from "chunk-VHFKZWVR.mjs";
import { b as T, i as v } from "chunk-VJ7UYMJI.mjs";
var Fj = "https://app.framerstatic.com/framer_compiler_bg-ZLMUV5YM.wasm";
var F = v("compiler");
async function w6() {
  await D();
}
function pj(A) {
  return {
    code: `const err = new Error(${JSON.stringify(String(A))}); err.name = "CompilationError"; throw err;`,
    sourceMap: void 0,
    annotations: {},
    exportedNames: [],
    reExportedModules: [],
    imports: { absolute: [], relative: [], bare: [] },
  };
}
function mj(A, j, e) {
  let t = { ...j.exports };
  e &&
    ((t.__FramerMetadata__ = { type: "variable" }),
    (A = A.concat(
      `
export const __FramerMetadata__ = `,
      JSON.stringify({ exports: t })
    )));
  let r = Object.entries(t)
      .filter(([, a]) => a.type !== "tsType")
      .map(([a]) => a),
    k = {};
  for (let [a, o] of Object.entries(j.exports)) o.annotations && (k[a] = o.annotations);
  return { moduleCode: A, annotations: k, exportedNames: r };
}
async function L6({ localId: A, name: j, source: e, includeSourceMap: t = !0 }) {
  let r = await D();
  try {
    let {
        code: k,
        metadata: a,
        map: o,
      } = await r.transformSync(e, {
        fileName: w(j).source,
        framerContractVersion: 1,
        mediaType: "tsx",
        minify: !1,
        compress: !1,
        mangle: !1,
        sourceMap: t,
        useReactRefresh: !0,
      }),
      n = `
if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = window.reactRefreshRuntime.getRefreshReg("${A}");
window.$RefreshSig$ = window.reactRefreshRuntime.createSignatureFunctionForTransform;

${k}

window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;`,
      { moduleCode: i, annotations: $, exportedNames: s } = mj(n, a, !0);
    return {
      code: i,
      sourceMap: o ?? void 0,
      imports: a.requestedModules,
      annotations: $,
      exportedNames: s,
      reExportedModules: a.reExportedModules,
    };
  } catch (k) {
    let a = `Failed to compile development module ${j}: ${k}`;
    return (
      F.debug(a, "(enable trace logging to see full source)"),
      F.trace(e),
      A.startsWith("codeFile/") ||
        (F.reportCriticalError(new Error(a, { cause: k }), { moduleName: j, moduleSource: e }),
        R("application_error", { message: a, area: "compiler" })),
      pj(k)
    );
  }
}
async function U6(A, j) {
  await (
    await D()
  ).transformSync(j, {
    fileName: w(A).source,
    framerContractVersion: 1,
    mediaType: "tsx",
    minify: !0,
    compress: !1,
    mangle: !1,
    sourceMap: !1,
    useReactRefresh: !1,
  });
}
async function X6({
  name: A,
  source: j,
  type: e,
  includeSourceMap: t = !0,
  addFramerMetadata: r = !0,
  telemetrySession: k,
}) {
  F.debug("Compiling module", A, "; with source map:", t);
  let a = performance.now(),
    o = await D(),
    n = k?.start("transform"),
    i = e === "collection";
  try {
    let {
        code: $,
        map: s,
        metadata: l,
      } = await o.transformSync(j, {
        fileName: w(A).source,
        framerContractVersion: 1,
        mediaType: "tsx",
        minify: !0,
        compress: i,
        mangle: i,
        sourceMap: t,
        useReactRefresh: !1,
      }),
      { moduleCode: b, annotations: u, exportedNames: B } = mj($, l, r);
    return {
      code: b,
      sourceMap: s ?? void 0,
      imports: l.requestedModules,
      annotations: u,
      exportedNames: B,
      reExportedModules: l.reExportedModules,
    };
  } catch ($) {
    let s = `Failed to compile module ${A}: ${$}`;
    return (
      F.debug(s, "(enable trace logging to see full source)"),
      F.trace(j),
      A.startsWith("codeFile/") ||
        (F.reportCriticalError(new Error(s, { cause: $ }), { moduleName: A, moduleSource: j }),
        R("application_error", { message: s, area: "compiler" })),
      pj($)
    );
  } finally {
    (n?.end(), nA(`\u{1F4DD} Compile ${A}`, a, void 0, "vekter"));
  }
}
async function uj(A) {
  let j = performance.now();
  try {
    return { ok: !0, value: await (await D()).analyzeImports(A) };
  } catch (e) {
    return (
      F.warn("Failed to analyze imports:", e),
      e instanceof Error ? { ok: !1, error: e } : { ok: !1, error: new Error(`${e}`, { cause: e }) }
    );
  } finally {
    let e = performance.now();
    nA("\u{1F575}\u{1F3FB} Analyze Imports", j, e, "vekter");
    let t = e - j;
    F.debug("\u{1F575}\u{1F3FB} Analyze Imports took", t.toFixed(2), "ms");
  }
}
var X;
async function D() {
  if (!X) {
    let A = new Worker(CA("./modulesCompilerWorker.js")),
      j = xA(A);
    ((X = j
      .initWithPathToWasm(Fj)
      .then(() => ({ transformSync: j.transformSync, analyzeImports: j.analyzeImports }))),
      X.catch(() => {
        if (tj() || !OA.isProduction)
          throw new Error(`\u274C Your dev setup is struggling to run the compiler\u2019s WASM binary.
To fix it, run "make clean" followed by "make dev".`);
      }));
  }
  return X;
}
function ke(A, j, e, t, { shouldOpenPage: r = !0, renamedIds: k = new f() } = {}) {
  let a = oj(A, j, e, "duplicate", {
    enterIsolation: !1,
    preferredName: t,
    insertionIndex: A.tree.root.children.findIndex((o) => o.id === j.id) + 1,
    renamedIds: k,
  });
  return (
    A.stores.persistedUserDefaults.newContentAsDraft &&
      a.set({ isDraft: !0, duplicatedFrom: HA(a.duplicatedFrom, j.id) }),
    r && A.stores.scopeStore.select(a.id, { keepHistory: !1 }),
    a
  );
}
function wj(A, j, e) {
  let t = new f(),
    r = new Set(
      A.stores.scopeStore
        .getDesignPageNodes()
        .map((n) => n.resolveValue("name"))
        .filter(d)
    ),
    k = C(e ?? j.resolveValue("name") ?? "Design", r),
    a = j.clone({ name: k, children: new DA() });
  t.set(j.id, a.id);
  let o = [];
  for (let n of j.children) {
    let i = kj(n, new Map(), new Map(), t, !1);
    (o.push(i), t.set(n.id, i.id), a.addChild(i));
  }
  A.tree.insertNode(a, void 0, A.tree.root.children.findIndex((n) => n.id === j.id) + 1);
  for (let n of o) ej(A.tree, A.componentLoader, n, t, !1);
  return (
    WA(A.tree, j.id, a.id),
    R("design_page_create", { pageId: a.id, source: "duplicate" }),
    a
  );
}
async function ae(A, j, e) {
  let t = j.isLoaded() ? j : await j.load();
  if (t) return wj(A, t, e);
}
function Ij(A, j, e = !0) {
  A.scheduler.processWhenReady(() => {
    let {
      overlayStore: t,
      selectionStore: r,
      scopeStore: k,
      canvasStore: a,
      persistedUserDefaults: o,
    } = A.stores;
    k.selectByNode(j.id);
    let n = rA(j) ? j : A.tree.getNodeWithTrait(j.cache.overlayAncestorId, rA);
    if ((n ? t.showOverlay(r, n, n.parentid) : t.hideAll(), r.set(j.id), e)) {
      let i = wA(A.tree, [j]);
      a.zoomToCenter(i, { animated: o.animateOnZoom, maxZoom: 1 });
    }
  });
}
var q = v("unlinking");
async function Lj(A, j, e) {
  let { codeEditorStore: t, selectionStore: r, treeStore: k } = A.stores;
  t.closeEditor();
  let [a] = r.nodes;
  if (r.nodes.length === 1 && S(a) && a.codeComponentIdentifier === j) return !0;
  let o;
  if (k.getDataTree()) {
    for (let n of k.query().whereClass(XA).iterate())
      if (n.codeComponentIdentifier === j) {
        o = n;
        break;
      }
  } else
    o = await A.runWithFullyLoadedTreeAsync(
      () => {
        for (let n of k.treeIndex.codeComponentNodeIds) {
          let i = A.tree.getNodeWithTrait(n, S);
          if (i?.codeComponentIdentifier === j) return i;
        }
      },
      { runInBackground: !0, name: `findCodeComponentInstance: ${j}` }
    );
  return o
    ? (Ij(A, o), !0)
    : (h({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${e.name}.`,
      }),
      !1);
}
async function Q(A, j, e) {
  return (await Lj(A, j, e)) ? (A.stores.pluginStore.openPlugin(e, A, { mode: "canvas" }), !0) : !1;
}
function V(A, j) {
  let e = A.componentForIdentifier(j);
  if (e) return e;
  let t = O(j);
  return !I(t) || !bA(t) ? null : A.componentForIdentifier(_A(t));
}
var Uj = 0;
async function z(A, j, e = Uj) {
  if (e === 0) {
    let r = O(j),
      k = J(A.stores.treeStore, A.stores.modulesStore, A.stores.pluginStore, r);
    if (k && (await Q(A, j, k))) return;
  }
  let t = V(A.componentLoader, j);
  t && A.stores.codeEditorStore.editFile(t.file);
}
async function _j(
  A,
  {
    identifier: j,
    info: e,
    instance: t,
    enterIsolation: r,
    codeComponentIsolationMode: k,
    scheduleTreeUpdate: a = (o) => A.scheduler.processWhenReadyAsync(o),
  }
) {
  let o = e.module.baseURL + e.module.files.source,
    i = await (await fetch(o)).text(),
    [$, s] = await Promise.all([uj(i), A.stores.modulesStore.getModuleDependencies(j)]);
  if ($.ok) {
    let B = new Map();
    for (let c of $.value.relative) {
      let g = KA(c.specifier, `${e.module.type}/`);
      if (!g) {
        q.warn("Failed to normalize relative import", c.specifier);
        continue;
      }
      let P = B.get(g) ?? [];
      (P.push(c), B.set(g, P));
    }
    let p;
    for (let c of s.imports) {
      if (c.type !== "local") continue;
      let g = `${c.moduleType}/${c.moduleName}`,
        P = B.get(g);
      if (!P) {
        q.warn("Unable to get source location of import", g, "when unlinking");
        continue;
      }
      for (let pA of P) {
        p ||
          (p = i.split(`
`));
        let mA = pA.specifierLine;
        p[mA] = p[mA].replace(JSON.stringify(pA.specifier), JSON.stringify(c.importURL));
      }
    }
    p &&
      (i = p.join(`
`));
  }
  let b = await A.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: e.module.name,
        source: i,
        metadata: { pluginId: e.module.metadata.pluginId },
      }),
    u = gA(j, b).value;
  return (
    t &&
      (await a(() => {
        let B = A.tree.get(t.getPrimaryId());
        B && B.set({ codeComponentIdentifier: u });
      })),
    r && ((A.stores.chromeStore.activeContentPanelTab = "Assets"), z(A, u, k)),
    u
  );
}
var fj = { canvasComponent: nj, codeFile: _j };
function lA(A) {
  return d(A) ? A in fj : !1;
}
async function BA(
  A,
  {
    identifier: j,
    moduleType: e,
    instance: t,
    enterIsolation: r = !0,
    codeComponentIsolationMode: k,
    renamedIds: a = new f(),
    isAutoDetach: o = !1,
    scheduleTreeUpdate: n,
  }
) {
  if (!lA(e)) throw Error(`Cannot import external module of type ${e}`);
  let [i] = await A.stores.modulesStore.preloadExternalModules([j]);
  E(i, "external module must exist on preload");
  let $ = {
      identifier: j,
      info: i,
      instance: t,
      enterIsolation: r,
      codeComponentIsolationMode: k,
      renamedIds: a,
      isAutoDetach: o,
      scheduleTreeUpdate: n,
    },
    s = fj[e],
    l = await s(A, $);
  if (!hA(l))
    return !d(l) && H(l)
      ? { ...i, codeComponentIdentifier: l.instanceIdentifier, node: l }
      : { ...i, codeComponentIdentifier: l, node: void 0 };
}
var $A = new Set();
async function EA(A, j) {
  let { instance: e, withUnlinkModal: t, ...r } = j,
    k = N(A.stores.treeStore.tree, j.identifier),
    a = A.stores.insertSidebarStore.getEditBehavior(j.identifier.moduleId);
  if (t && a !== "autoUnlink" && (!k || cj.isOn("openPrimaryForBuiltInModules"))) {
    A.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...r,
      nodeId: e?.id,
    });
    return;
  }
  if ($A.has(j.identifier)) return;
  $A.add(j.identifier);
  let o = j.skipUndoGroup !== !0;
  o &&
    A.scheduler.process(() => {
      A.beginUndoGroup();
    });
  try {
    return (await BA(A, { instance: e, enterIsolation: a !== "autoDetach", ...r }))
      ?.codeComponentIdentifier;
  } catch (n) {
    (q.reportError(n),
      h({
        type: "add",
        variant: "error",
        primaryText: "Failed to unlink",
        secondaryText: "component.",
        key: "external-component-unlink-error",
      }));
  } finally {
    (o &&
      A.scheduler.processWhenReady(() => {
        A.endUndoGroup();
      }),
      $A.delete(j.identifier));
  }
}
async function bj(A, j) {
  let { instance: e, moduleType: t, enterIsolation: r, codeComponentIsolationMode: k } = j,
    a = j.scheduleTreeUpdate ?? (($) => A.scheduler.processWhenReadyAsync($));
  if (!S(e)) return;
  let o = await EA(A, { ...j, enterIsolation: !1 });
  if (!o) return;
  await jj(A.componentLoader, [o], A.stores.modulesStore, "component-unlinking");
  let n = A.componentLoader.componentForIdentifier(o);
  if (!n) return;
  let i = Bj(n);
  i &&
    (await a(() => {
      if (
        (A.tree
          .getNodes(Array.from(A.stores.treeStore.treeIndex.codeComponentNodeIds))
          .forEach((s) => {
            if (
              !i ||
              i.id === s.id ||
              !S(s) ||
              s.codeComponentIdentifier !== e.codeComponentIdentifier ||
              yA(s) ||
              !$j(s, { allowLockedNodes: !0 })
            )
              return;
            let l = A.cloneNode(i, !1, !1);
            lj(A, [s], l);
          }),
        !!r)
      )
        if (t === "canvasComponent") {
          let s = LA(o);
          s && A.stores.scopeStore.select(s, { keepHistory: !1 });
        } else t === "codeFile" && z(A, o, k);
    }));
}
function gj(A, j, e) {
  if (K(A, "canDesign")) return;
  let r = A.tree.getNodeWithTrait(j, tA)?.annotation("framerVector");
  if (!x(r)) return;
  let k = r.set.moduleId,
    o = A.tree.getNodeWithTrait(k, tA)?.annotation("framerVectorSet");
  NA(o) &&
    A.stores.modalStore.set({
      type: "EditVector",
      source: "edit_action",
      vectorSetNodeId: k,
      moduleId: j,
      itemCount: o.items.length,
      instanceNodeId: e,
    });
}
function dA(A) {
  return A.type === "existing" || A.type === "privateDraft";
}
function E7({ stackElement: A, tree: j }) {
  if (!A) return null;
  let e = j.getNodeWithTrait(A.collectionId, _);
  if (e) return e;
  let t = A.type === "arrayItem" ? A.collectionItemId : A.itemId,
    r = j.getNodeWithTrait(t, G);
  return r?.parentid ? j.getNodeWithTrait(r.parentid, _) : null;
}
function zj({ treeStore: A, stackElement: j }) {
  if (!j) return null;
  if (j.type === "existing" || j.type === "privateDraft")
    return A.tree.getNodeWithTrait(j.itemId, G);
  if (j.type === "arrayItem") return A.tree.getNodeWithTrait(j.collectionItemId, G) ?? null;
  y(j);
}
function c7({ treeStore: A, stackElement: j }) {
  return !j || !GA(j) ? null : zj({ treeStore: A, stackElement: j });
}
function d7(A) {
  return A.findLast(dA) ?? null;
}
function G7(A) {
  return A.reduce((j, e) => (dA(e) ? j + 1 : j), 0);
}
function R7(A, j = []) {
  let e = A.stores.selectionStore.ids.length === 1 ? A.stores.selectionStore.ids.at(0) : void 0,
    t = Wj(A, j),
    r = t.at(0),
    k = A.tree.getNodeWithTrait(e, G),
    a = k && Z(A, k) ? k : null;
  if (a) {
    if (!r) return [Oj(A, a)];
    if (r.type === "existing")
      return r.itemId === a.id
        ? t
        : (E(t.length === 1, "Must dismiss overlay stack before changing selection"), [Oj(A, a)]);
    if (r.type === "privateDraft") {
      if (r.itemId === a.id) return t;
      throw new Error("Must save private draft item stack before selecting a collection item");
    }
    if (r.type === "arrayItem") return t;
    y(r);
  }
  if (!r || r.type === "privateDraft") return t;
  if (r.type === "existing")
    return A.stores.chromeStore.mainView !== 2
      ? t
      : (E(t.length === 1, "Must dismiss overlay stack before de-selecting collection item"), []);
  if (r.type === "arrayItem") return t;
  y(r);
}
function Wj(A, j) {
  let e = [];
  for (let t = 0; t < j.length; t++) {
    let r = j[t];
    if (!r) continue;
    if (r.type === "existing") {
      let o = A.tree.getNodeWithTrait(r.itemId, G);
      o && Y(A, o)
        ? (r = W(A, o, { saveAction: r.saveAction, showErrors: !1 }))
        : o?.parentid &&
          r.collectionId !== o.parentid &&
          (r = W(A, o, { saveAction: r.saveAction, showErrors: !1 }));
    }
    if (r.type === "privateDraft") {
      let o = A.tree.getNodeWithTrait(r.itemId, G);
      o && Z(A, o) && !Y(A, o) && (r = W(A, o, { saveAction: r.saveAction, showErrors: !1 }));
    }
    let k = e.at(-1) ?? null;
    if (!Yj(A, r, k) || (t > 0 && GA(r) && !r.saveAction)) break;
    e.push(r);
  }
  return e;
}
function Yj(A, j, e) {
  if (j.type === "existing") {
    let t = A.tree.getNodeWithTrait(j.itemId, G);
    return t ? !!t.parentid && Z(A, t) : !1;
  }
  if (j.type === "privateDraft") {
    let t = A.tree.getNodeWithTrait(j.itemId, G);
    return t ? t.parentid === j.collectionId && Y(A, t) : !1;
  }
  if (j.type === "arrayItem") {
    if (
      !e ||
      !dA(e) ||
      e.itemId !== j.collectionItemId ||
      (GA(e) && e.collectionId !== j.collectionId)
    )
      return !1;
    let t = A.tree.getNodeWithTrait(j.collectionId, _);
    if (!t) return !1;
    let r = A.tree.getNodeWithTrait(j.collectionItemId, G);
    if (!r || !Z(A, r) || (r.parentid && r.parentid !== j.collectionId)) return !1;
    let k = t.getVariable(j.arrayFieldId);
    if (!k || !vA(k)) return !1;
    let a = r.getControlProp(j.arrayFieldId);
    return !a || !MA(a) || !SA(a.value)
      ? !1
      : a.value.some(({ type: o, id: n }) => o === "object" && n === j.arrayItemId);
  }
  y(j);
}
function Y(A, j) {
  return YA(j, { currentUserId: A.stores.sessionStore.user.id });
}
function Z(A, j) {
  return ZA(j, { currentUserId: A.stores.sessionStore.user.id });
}
function GA(A) {
  return A.type === "privateDraft";
}
function Oj(A, j) {
  return W(A, j, { showErrors: !1 });
}
function W(A, j, e) {
  if (j.parentid && Y(A, j)) {
    let r = {
      collectionId: j.parentid,
      itemId: j.id,
      showErrors: e.showErrors,
      type: "privateDraft",
    };
    return (e.saveAction && (r.saveAction = e.saveAction), r);
  }
  E(j.parentid, "Existing collection item must have a parent collection");
  let t = { collectionId: j.parentid, itemId: j.id, type: "existing" };
  return (e.saveAction && (t.saveAction = e.saveAction), t);
}
function Sj(A) {
  let { newContentAsDraft: j } = A.stores.persistedUserDefaults;
  return !(!j || A.stores.publishStore.publishStatus === 1);
}
function hj(A, j, e, t) {
  j.stores.canvasStore.invalidateTransformUntilRendered(() => {
    try {
      (j.stores.scopeStore.select(A, t), j.stores.codeEditorStore.closeEditor());
    } catch {
      (R("open_primary_component_fail", {}),
        h({
          type: "add",
          variant: "error",
          key: "invalid-deep-link",
          primaryText: "Primary component",
          secondaryText: "has been deleted.",
          duration: 1e4,
        }));
      return;
    }
    if (!e) return;
    let r = j.tree.getNode(e);
    r &&
      j.tree.getScopeNodeFor(r)?.id === A &&
      (j.stores.selectionStore.set(r.id),
      j.stores.canvasStore.zoomToCenter(JA(j.tree, r), { animated: !1, maxZoom: 1 }));
  });
}
function Zj(A, j) {
  let e = A.stores.insertSidebarStore.getEditBehavior(j.moduleId),
    t = N(A.stores.treeStore.tree, j),
    r = A.componentLoader.componentForIdentifier(j.value)?.annotations;
  return (t && e === "block") || qA(r, "framerDisableUnlink");
}
function Pj(A, j, e, t) {
  let r = O(A),
    k = K(j, "canDesign"),
    { includeAccelerator: a = !0 } = t;
  if (I(r) && r.type === "shader") {
    let s = j.stores.modulesStore.getModuleEntryByLocalId(r.localId)?.name;
    return s
      ? [
          {
            label: `${k ? "View" : "Edit"} ${kA("Code")}`,
            click: () => j.stores.codeEditorStore.editFile(s),
          },
        ]
      : m();
  }
  if (I(r) && (r.type === "canvasComponent" || r.type === "screen" || r.type === "vector"))
    return [
      {
        label: k ? "View" : "Edit",
        accelerator: a ? L.fakeSelectChildren : void 0,
        click: () => {
          if (r.type === "vector") {
            let l = j.stores.modulesStore
              .forType("vector")
              .getByStableName(r.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!x(l)) return;
            let { set: b } = l;
            hj(b.id, j, r.localIdName, t);
            return;
          }
          let [, s] = r.localId.split("/");
          s && hj(s, j, e, t);
        },
      },
    ];
  if (fA(r) && r.kind === "externalModuleExport") {
    if (t.node?.isVectorInstance)
      return aj(j, A)
        ? m()
        : [
            {
              label: "Edit",
              accelerator: a ? L.fakeSelectChildren : void 0,
              click: () => gj(j, r.moduleId, t.node?.id),
              enabled: !k,
            },
          ];
    let s = j.stores.insertSidebarStore.getEditBehavior(r.moduleId),
      l = j.stores.treeStore.tree.getNode(r.moduleId),
      u = t.externalModuleType === "canvasComponent" && l?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (Zj(j, r)) return m();
    if (!lA(t.externalModuleType)) return m();
    let { node: B, withUnlinkModal: p, externalModuleType: c } = t;
    return B && s === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !k,
            click: async () => {
              (j.beginUndoGroup(),
                Aj(
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
                    await A6(B, j, r, c);
                  }
                ).catch(T),
                j.endUndoGroup());
            },
          },
        ]
      : u
        ? [
            {
              label: "Edit",
              accelerator: a ? L.fakeSelectChildren : void 0,
              click: () => {
                bj(j, { identifier: r, moduleType: c, instance: B, enterIsolation: !0 }).catch(T);
              },
              enabled: !k,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                EA(j, {
                  identifier: r,
                  moduleType: c,
                  instance: B,
                  withUnlinkModal: p,
                  enterIsolation: !0,
                }).catch(T);
              },
              enabled: !k,
            },
          ];
  }
  let o = V(j.componentLoader, A);
  if (o?.type !== "component" || o.depth !== 0) return m();
  let n = t.keepHistory
      ? void 0
      : () => {
          j.stores.scopeStore.goBack();
        },
    i = J(j.stores.treeStore, j.stores.modulesStore, j.stores.pluginStore, r);
  return [
    ...(i && sj(j.stores.modulesStore, r) && !k && I(A)
      ? [
          {
            label: ij(i),
            click: () => {
              (n?.(), Q(j, A, i));
            },
          },
        ]
      : []),
    {
      label: `${k ? "View" : "Edit"} ${kA("Code")}`,
      click: () => {
        (n?.(), j.stores.codeEditorStore.editFile(o.file));
      },
      enabled: I(A),
    },
  ];
}
async function A6(A, j, e, t) {
  let r = new f(),
    k = await BA(j, {
      identifier: e,
      moduleType: t,
      instance: A,
      renamedIds: r,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!k) return null;
  let { node: a } = k;
  return H(a)
    ? j.scheduler.processWhenReadyAsync(() => {
        let o = Ej.detachSmartComponentOrWebPageInstance(j, A.draftOrCurrent(), a, r);
        return (o && j.stores.selectionStore.set(o.id), o);
      })
    : null;
}
function yj(A) {
  return A?.find((e) => e.enabled !== !1)?.click;
}
function j6(A, j, e) {
  return Pj(A, j, null, e);
}
function U7(A, j, e) {
  return yj(j6(A, j, e));
}
function e6(
  A,
  j,
  { withUnlinkModal: e = !0, externalModuleType: t, activateContentPanel: r } = {}
) {
  let k = UA(j.tree, A);
  return Pj(A.codeComponentIdentifier, j, k, {
    keepHistory: !0,
    node: A,
    withUnlinkModal: e,
    externalModuleType: t,
    activateContentPanel: r,
  });
}
function X7(A, j, e = {}) {
  return yj(e6(A, j, e));
}
var t6 = uA() && navigator.userAgent.includes("Version/16"),
  z7 = window.CompressionStream && !t6;
function Dj(A, j) {
  let e = PA(A);
  return e.length ? C(e, j, { withDash: !0 }) : "";
}
function at(A, j, e, t) {
  for (let r of A.variables) {
    if (r.type === "divider" || !TA(r)) continue;
    let k = t?.get(r.id) ?? j.getControlProp(r.id);
    if ((!k || !d(k.value) || !k.value.length) && r.associatedStringVariable) {
      let o = t?.get(r.associatedStringVariable) ?? j.getControlProp(r.associatedStringVariable);
      if (o && d(o.value)) {
        let n = Dj(o.value, (i) => dj(e.get(r.id), i, j.id));
        if (n.length)
          return (
            j.setControlProp(r.id, { type: "string", value: n }),
            { changedControlProp: r.id }
          );
      }
    }
  }
  return !1;
}
function dt(A) {
  A.engine.scheduler.processWhenReady(() => {
    r6(A);
  });
}
function r6({ collectionId: A, engine: j, saveAction: e, source: t }) {
  let r = j.tree.getNodeWithTrait(A, _);
  E(r, "Collection needs to exist to allow creation of new item");
  let k = j.stores.selectionStore.ids[0],
    a = j.tree.getNodeWithTrait(k, _);
  (a && a.id !== r.id && E(e, "saveAction is required when creating a nested private draft item"),
    k6({ collection: r, engine: j, saveAction: e }),
    R("collection_record_create", { source: t }));
}
function k6({ collection: A, engine: j, saveAction: e }) {
  let t = a6(j, A, 0);
  j.stores.contentManagementStore.openPrivateDraftCollectionItem({
    collectionId: A.id,
    itemId: t.id,
    saveAction: e,
  });
}
function a6(A, j, e) {
  let t = A.stores.sessionStore.user.id,
    r = o6(j, t);
  if (r) return r;
  let k = zA.create({ privateToUserId: t, ...QA(A.tree.root.locales ?? m()) });
  return (A.stores.scopeStore.insertNode(k, j.id, e), i6(j, k), Sj(A) && k.set({ isDraft: !0 }), k);
}
function o6(A, j) {
  let e,
    t = 0;
  for (let r of A.children) {
    if (r.privateToUserId !== j) continue;
    let k = n6(r);
    (!e || k > t) && ((e = r), (t = k));
  }
  return e;
}
function n6(A) {
  if (!A.createdAt) return 0;
  let j = new Date(A.createdAt).getTime();
  return Number.isNaN(j) ? 0 : j;
}
function i6(A, j) {
  let e = s6(j);
  for (let t of A.variables)
    t.type === "date" &&
      j.setControlProp(t.id, { type: "date", value: RA(e, t.options?.displayTime) });
}
function s6(A) {
  if (!A.createdAt) return new Date();
  let j = new Date(A.createdAt);
  return Number.isNaN(j.getTime()) ? new Date() : j;
}
function RA(A, j) {
  return j
    ? new Date(
        Date.UTC(A.getFullYear(), A.getMonth(), A.getDate(), A.getHours(), A.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(A.getFullYear(), A.getMonth(), A.getDate())).toJSON();
}
function ut({ variables: A, collectionItem: j }) {
  if (!j.hasData()) return !1;
  for (let e of A) {
    if (e.type === "divider") continue;
    let t = j.getControlProp(e.id);
    if (!(!t || !VA(t.value)) && !$6(j, t, e)) return !0;
  }
  return !1;
}
function $6(A, j, e) {
  if (e.type !== "date" || j.type !== "date" || !d(j.value) || !A.createdAt) return !1;
  let t = new Date(A.createdAt);
  return Number.isNaN(t.getTime()) ? !1 : j.value === RA(t, e.options?.displayTime);
}
var qj = "2024-11-01",
  l6 = /^\d{4}-\d{2}-\d{2}$/;
function ft(A, j) {
  return !(A === void 0 || (A !== null && A <= 0) || j === void 0 || (j !== null && j <= 0));
}
function bt(A) {
  return A === null ? null : A === void 0 || A <= 0 ? 0 : A;
}
function B6(A = new Date()) {
  return vj(new Date(Date.UTC(A.getUTCFullYear(), A.getUTCMonth(), A.getUTCDate())));
}
function gt(A, j = new Date()) {
  if (A === null) return qj;
  let e = B6(j);
  if (A === void 0 || A <= 0) return e;
  let t = M(e, -(A - 1));
  return AA(t, qj, e);
}
function AA(A, j, e) {
  return A < j ? j : A > e ? e : A;
}
function E6(A, j, e) {
  return A < M(j, -e);
}
function M(A, j) {
  let e = new Date(c6(A));
  return (e.setUTCDate(e.getUTCDate() + j), vj(e));
}
function Mj(A) {
  return A === null ? null : A - 1;
}
function Ot(A, j, e) {
  let { fromDay: t } = Tj({ ...e, fromDay: A, toDay: j });
  return { fromDay: t };
}
function St(A, j, e, t) {
  return Tj({ ...t, fromDay: A, toDay: AA(e, A, t.maxExportDay) });
}
function ht(A, j, e) {
  if (!l6.test(A)) throw new Error(`${e} expected '${j}' to be a UTC calendar day (YYYY-MM-DD).`);
  let t = new Date(`${A}T00:00:00.000Z`);
  if (Number.isNaN(t.getTime()) || t.toISOString().slice(0, 10) !== A)
    throw new Error(`${e} expected '${j}' to be a valid UTC calendar day.`);
}
function Pt(A, j, e, t) {
  if (e === null) return;
  let r = e - 1,
    k = M(j, -r);
  if (A < k) throw new Error(t);
}
function Tj({ fromDay: A, toDay: j, minDay: e, maxExportDay: t, maxExportInclusiveDays: r }) {
  let k = j > t ? t : j,
    a = AA(A, e, k),
    o = Mj(r);
  return (
    o !== null && E6(a, k, o) && ((a = M(k, -o)), a < e && (a = e)),
    { fromDay: a, toDay: k }
  );
}
function yt(A, j, e, t) {
  return A > j
    ? { canExport: !1, message: "The start date must be before the end date." }
    : A > t || j > t
      ? { canExport: !1, message: "Export dates must be on or before today (UTC)." }
      : A < e
        ? {
            canExport: !1,
            message: `The selected range is outside your analytics retention. Earliest available date is ${e} (UTC).`,
          }
        : { canExport: !0 };
}
function Dt(A, j, e, t) {
  let r = AA(A, j, e),
    k = j,
    a = Mj(t);
  if (a !== null) {
    let o = M(A, -a);
    o > k && (k = o);
  }
  return (k > r && (k = r), { min: k, max: r });
}
function c6(A) {
  let [j, e, t] = A.split("-").map(Number);
  return (E(j && e && t, "day must be a valid yyyy-MM-dd string"), Date.UTC(j, e - 1, t));
}
function vj(A) {
  let j = A.getUTCFullYear(),
    e = String(A.getUTCMonth() + 1).padStart(2, "0"),
    t = String(A.getUTCDate()).padStart(2, "0");
  return `${j}-${e}-${t}`;
}
var d6 = 1e5;
function Tt(A, j) {
  return j === null ? !1 : A > j;
}
function G6(A, j) {
  let e = U(A),
    t = U(j);
  if (A <= j || e !== t) return e;
  let r = (k) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: k,
      roundingMode: "ceil",
    }).format(A);
  for (let k of [2, 1]) {
    let a = r(k);
    if (a !== t) return a;
  }
  return e;
}
function vt(A, j, e = "Please select fewer days.") {
  let t = G6(A, j),
    r = U(j);
  return `This period has ${t} events, exceeding the ${r} limit. ${e}`;
}
function Ht(A, j) {
  return Math.min(A * d6, j);
}
var R6 = "text/csv;charset=utf-8",
  F6 = "X-Next-Cursor",
  p6 = 1e4,
  jA = 4,
  m6 = 500,
  eA = class extends Error {
    name = "AnalyticsExportIncompleteError";
  };
function u6(A) {
  return A.headers.get(F6)?.trim() || void 0;
}
function FA(A) {
  return A === 429 || A >= 500;
}
async function I6(A) {
  let j = A.statusText || "Analytics export request failed";
  try {
    let t = await A.text();
    t && (j = t);
  } catch {}
  let e = A.status;
  return new aA({ message: j, status: e, isTemporary: FA(e) });
}
async function _6(A, j, e) {
  let t = `/web/analytics/${A}/events-export`;
  for (let r = 0; r < jA; r++) {
    if (r > 0) {
      if (e?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
      await Gj(r, m6);
    }
    try {
      let k = await oA.getRaw(t, j, e);
      if (k.ok) return k;
      if (!FA(k.status) || r === jA - 1) throw await I6(k);
    } catch (k) {
      if (rj(k)) throw k;
      if (k instanceof aA) {
        if (!FA(k.status ?? 0) || r === jA - 1) throw k;
        continue;
      }
      if (r === jA - 1) throw k;
    }
  }
  throw new Error("Analytics export page fetch exhausted retries");
}
async function* f6(A, { startDate: j, endDate: e }, t, r) {
  let k,
    a = !0,
    o = new Set();
  for (let n = 0; n < p6; n++) {
    r?.(n + 1);
    let i = await _6(A, { startDate: j, endDate: e, includeHeader: a, cursor: k }, t);
    yield i;
    let $ = u6(i);
    if (!$) return;
    if (o.has($))
      throw new eA("Export pagination repeated; try again or use a smaller date range.");
    (o.add($), (k = $), (a = !1));
  }
  throw new eA("Export is too large to download in one file. Try a smaller date range.");
}
async function xj(A, j, e, t) {
  let r = 0;
  for await (let k of f6(A, j, e.signal, e.onPageStarted)) (await t(k), r++, e.onPageComplete?.(r));
}
async function b6(A, j, e) {
  let t = [],
    r = Kj(j);
  return (
    await xj(A, j, e, async (k) => {
      t.push(await k.blob());
    }),
    { blob: new Blob(t, { type: R6 }), filename: r }
  );
}
function Cj() {
  let A = globalThis.showSaveFilePicker;
  return typeof A == "function" ? A.bind(globalThis) : void 0;
}
function g6() {
  return !IA() && Cj() !== void 0;
}
async function O6(A, j) {
  if (j?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  let e = Cj();
  if (!e) throw new Error("File System Access API is not available");
  let t = await e({
    suggestedName: Kj(A),
    types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
  });
  if (j?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  return t.createWritable();
}
async function Xt(A, j, e = {}) {
  if (g6()) {
    await S6(A, j, e);
    return;
  }
  let { blob: t, filename: r } = await b6(A, j, e);
  Rj(t, r);
}
async function S6(A, j, e) {
  let t = e.writable;
  t || (t = await O6(j, e.signal));
  try {
    (await xj(A, j, e, async (r) => {
      await h6(r, t);
    }),
      E(t),
      await t.close());
  } catch (r) {
    throw (await t?.abort().catch(() => {}), r);
  }
}
async function h6(A, j) {
  if (!A.body) {
    await j.write(await A.blob());
    return;
  }
  let e = A.body.getReader();
  for (;;) {
    let { done: t, value: r } = await e.read();
    if (t) break;
    await j.write(r);
  }
}
function Hj(A) {
  let [j, e, t] = A.split("-");
  return `${t}-${e}-${j.slice(-2)}`;
}
function Kj({ startDate: A, endDate: j }) {
  let e = Hj(A),
    t = Hj(j);
  return `Analytics Export \u2014 ${e} \u2192 ${t}.csv`;
}
async function Qt(A, { startDate: j, endDate: e }, t) {
  let { eventCount: r } = await oA.get(
    `/web/analytics/${A}/events-export-count`,
    { startDate: j, endDate: e },
    t
  );
  return r;
}
export {
  V as a,
  Ij as b,
  w6 as c,
  L6 as d,
  U6 as e,
  X6 as f,
  uj as g,
  lA as h,
  BA as i,
  EA as j,
  bj as k,
  hj as l,
  Zj as m,
  A6 as n,
  j6 as o,
  U7 as p,
  e6 as q,
  X7 as r,
  dA as s,
  E7 as t,
  zj as u,
  c7 as v,
  d7 as w,
  G7 as x,
  R7 as y,
  Wj as z,
  GA as A,
  z7 as B,
  ft as C,
  bt as D,
  B6 as E,
  gt as F,
  Ot as G,
  St as H,
  ht as I,
  Pt as J,
  Tj as K,
  yt as L,
  Dt as M,
  d6 as N,
  Tt as O,
  vt as P,
  Ht as Q,
  eA as R,
  g6 as S,
  O6 as T,
  Xt as U,
  Kj as V,
  Qt as W,
  Sj as X,
  ke as Y,
  wj as Z,
  ae as _,
  dt as $,
  r6 as aa,
  a6 as ba,
  o6 as ca,
  i6 as da,
  ut as ea,
  Dj as fa,
  at as ga,
};
//# sourceMappingURL=chunk-ES7GGTUY.mjs.map
