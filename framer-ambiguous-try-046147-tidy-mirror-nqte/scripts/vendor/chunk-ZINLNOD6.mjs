import {
  $j as Pj,
  Cb as lj,
  Db as Bj,
  Ec as cj,
  Ld as f,
  Lg as X,
  M as sj,
  Md as dj,
  Mg as Ij,
  Ng as _j,
  Zh as Oj,
  ab as P,
  ak as Tj,
  he as pj,
  hk as cA,
  ik as yj,
  jk as Dj,
  oe as Fj,
  qe as uj,
  qh as fj,
  qj as Sj,
  re as mj,
  th as bj,
  uh as gj,
} from "chunk-NDA7TJ75.mjs";
import { c as Mj } from "chunk-D3BIVQHH.mjs";
import { b as hj } from "chunk-L3X2XJAF.mjs";
import { _ as oj, aa as nj, ba as ij } from "chunk-GNFCEJQ4.mjs";
import { Tb as H } from "chunk-NFZZJP2S.mjs";
import { a as qj } from "chunk-YVXTNDR2.mjs";
import { c as $j, s as U } from "chunk-7ZCOVLUS.mjs";
import { a as EA } from "chunk-G2RSRWQ7.mjs";
import { h as V } from "chunk-SCHNEKMH.mjs";
import {
  Fi as Aj,
  Zu as rj,
  av as kj,
  cl as w,
  eb as $A,
  el as jj,
  fi as YA,
  pn as ej,
  qn as tj,
  sw as aj,
  yh as WA,
} from "chunk-EAOREBCS.mjs";
import { b as ZA } from "chunk-GYUDG7LW.mjs";
import {
  Ca as S,
  Cj as HA,
  Ea as xA,
  Mi as wA,
  hm as VA,
  if as LA,
  kb as L,
  lr as UA,
  mq as XA,
  nb as D,
  nc as sA,
  ob as q,
  pb as iA,
  ra as DA,
  sa as qA,
  ta as I,
  tb as M,
  tr as zA,
  ua as MA,
  xb as _,
  xl as QA,
  ya as vA,
  yb as G,
} from "chunk-CTWHQDBP.mjs";
import { d as z } from "chunk-5Y36GTP3.mjs";
import { c as T, d as Ej } from "chunk-YXZOQYF3.mjs";
import { b as Q, u as Rj, v as BA } from "chunk-SBF7ONCV.mjs";
import { f as p } from "chunk-WHGFMSXI.mjs";
import { f as lA } from "chunk-PLQ4BOSL.mjs";
import { a as Gj } from "chunk-GBWZWM2Q.mjs";
import { a as u } from "chunk-6TFWVVAP.mjs";
import { g as KA, p as J } from "chunk-ZG3BUZVU.mjs";
import { b as d, f as CA, k as NA, n as JA } from "chunk-Y3GZLMBF.mjs";
import { b as B, c as h } from "chunk-4JY5UMT2.mjs";
import { i as TA, p as yA } from "chunk-VHFKZWVR.mjs";
import { b as C, i as N } from "chunk-GOPQO4KR.mjs";
var vj = "https://app.framerstatic.com/framer_compiler_bg-NXRSSDNP.wasm";
var R = N("compiler");
async function fe() {
  await F6();
}
function W(A) {
  return {
    code: `const err = new Error(${JSON.stringify(String(A))}); err.name = "CompilationError"; throw err;`,
    sourceMap: void 0,
    annotations: {},
    exportedNames: [],
    reExportedModules: [],
    imports: { absolute: [], relative: [], bare: [] },
    hasUseServerDirective: !1,
    hasMisplacedUseServerDirective: !1,
  };
}
function Jj(A, j) {
  return A !== "codeFile" || !J.isOn("apps")
    ? !1
    : j.hasUseServerDirective || j.hasMisplacedUseServerDirective;
}
function R6(A) {
  return A?.type === "function" && A.isAsync === !0 && A.isGenerator !== !0;
}
async function Lj(A, j) {
  if (j.hasMisplacedUseServerDirective)
    return W("\u201Cuse server\u201D is only supported as the first statement of a file");
  await Tj;
  let [, e] = Pj(A),
    t = e.map((s) => s.n),
    r = [];
  for (let s of t) {
    let $ = j.exports[s];
    (R6($) && s !== "default") || r.push(`\u201C${s}\u201D`);
  }
  for (let s of j.reExportedModules) r.push(`export * from "${s}"`);
  if (r.length > 0)
    return W(
      `Files with \u201Cuse server\u201D can only export async functions by name. Unsupported exports: ${r.join(", ")}`
    );
  let k = HA(Dj(t)),
    { moduleCode: a, exportedNames: o } = RA(k, j, !0),
    { clientRuntimeSource: n, serverRuntimeSource: i } =
      await import("https://app.framerstatic.com/serverFunctionRuntimes-CATETTOP.mjs");
  return {
    code: a,
    sourceMap: void 0,
    annotations: {},
    exportedNames: o,
    reExportedModules: [],
    imports: { absolute: [], relative: [$j(cA)], bare: [] },
    hasUseServerDirective: !0,
    hasMisplacedUseServerDirective: !1,
    serverFunctionCode: A,
    serverImports: j.requestedModules,
    submoduleContents: { [cA]: n, [yj]: i },
  };
}
function RA(A, j, e) {
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
async function be({ localId: A, name: j, source: e, includeSourceMap: t = !0 }) {
  try {
    let {
      code: r,
      metadata: k,
      map: a,
    } = await pA(e, {
      fileName: U(j).source,
      framerContractVersion: 1,
      mediaType: "tsx",
      minify: !1,
      compress: !1,
      mangle: !1,
      sourceMap: t,
      useReactRefresh: !0,
    });
    if (Jj(vA(A)[0], k)) return await Lj(r, k);
    let o = `
if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = window.reactRefreshRuntime.getRefreshReg("${A}");
window.$RefreshSig$ = window.reactRefreshRuntime.createSignatureFunctionForTransform;

${r}

window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;`,
      { moduleCode: n, annotations: i, exportedNames: s } = RA(o, k, !0);
    return {
      code: n,
      sourceMap: a ?? void 0,
      imports: k.requestedModules,
      annotations: i,
      exportedNames: s,
      reExportedModules: k.reExportedModules,
      hasUseServerDirective: k.hasUseServerDirective,
      hasMisplacedUseServerDirective: k.hasMisplacedUseServerDirective,
    };
  } catch (r) {
    let k = `Failed to compile development module ${j}: ${r}`;
    return (
      R.debug(k, "(enable trace logging to see full source)"),
      R.trace(e),
      A.startsWith("codeFile/") ||
        (R.reportCriticalError(new Error(k, { cause: r }), {
          moduleName: j,
          moduleSourceLength: e.length,
          moduleSourcePreview: e.slice(0, 2e3),
        }),
        p("application_error", { message: k, area: "compiler" })),
      W(r)
    );
  }
}
async function ge(A, j) {
  await pA(j, {
    fileName: U(A).source,
    framerContractVersion: 1,
    mediaType: "tsx",
    minify: !0,
    compress: !1,
    mangle: !1,
    sourceMap: !1,
    useReactRefresh: !1,
  });
}
async function Oe({
  name: A,
  source: j,
  type: e,
  includeSourceMap: t = !0,
  addFramerMetadata: r = !0,
  telemetrySession: k,
}) {
  R.debug("Compiling module", A, "; with source map:", t);
  let a = performance.now(),
    o = k?.start("transform"),
    n = e === "collection";
  try {
    let {
      code: i,
      map: s,
      metadata: $,
    } = await pA(j, {
      fileName: U(A).source,
      framerContractVersion: 1,
      mediaType: "tsx",
      minify: !0,
      compress: n,
      mangle: n,
      sourceMap: t,
      useReactRefresh: !1,
    });
    if (Jj(e, $)) return await Lj(i, $);
    let { moduleCode: l, annotations: g, exportedNames: m } = RA(i, $, r);
    return {
      code: l,
      sourceMap: s ?? void 0,
      imports: $.requestedModules,
      annotations: g,
      exportedNames: m,
      reExportedModules: $.reExportedModules,
      hasUseServerDirective: $.hasUseServerDirective,
      hasMisplacedUseServerDirective: $.hasMisplacedUseServerDirective,
    };
  } catch (i) {
    let s = `Failed to compile module ${A}: ${i}`;
    return (
      R.debug(s, "(enable trace logging to see full source)"),
      R.trace(j),
      A.startsWith("codeFile/") ||
        (R.reportCriticalError(new Error(s, { cause: i }), {
          moduleName: A,
          moduleSourceLength: j.length,
          moduleSourcePreview: j.slice(0, 2e3),
        }),
        p("application_error", { message: s, area: "compiler" })),
      W(i)
    );
  } finally {
    (o?.end(), EA(`\u{1F4DD} Compile ${A}`, a, void 0, "vekter"));
  }
}
async function wj(A) {
  let j = performance.now();
  try {
    return { ok: !0, value: await Vj((t) => t.analyzeImports(A), "import analysis") };
  } catch (e) {
    return (
      R.warn("Failed to analyze imports:", e),
      e instanceof Error ? { ok: !1, error: e } : { ok: !1, error: new Error(`${e}`, { cause: e }) }
    );
  } finally {
    let e = performance.now();
    EA("\u{1F575}\u{1F3FB} Analyze Imports", j, e, "vekter");
    let t = e - j;
    R.debug("\u{1F575}\u{1F3FB} Analyze Imports took", t.toFixed(2), "ms");
  }
}
var b;
async function Hj() {
  if (!b) {
    let A = new Worker(ZA("./modulesCompilerWorker.js")),
      j = YA(A),
      e = Promise.race([j.initWithPathToWasm(vj), p6(A)]).then(() => ({
        worker: A,
        promise: e,
        compiler: { transformSync: j.transformSync, analyzeImports: j.analyzeImports },
        pending: 0,
        poisoned: !1,
        terminated: !1,
      }));
    ((b = e),
      e.catch(() => {
        if ((b === e && (b = void 0), A.terminate(), Gj() || !KA.isProduction))
          throw new Error(`\u274C Your dev setup is struggling to run the compiler\u2019s WASM binary.
To fix it, run "make clean" followed by "make dev".`);
      }));
  }
  return b;
}
function p6(A) {
  return new Promise((j, e) => {
    A.addEventListener(
      "error",
      (t) => e(new Error(`Compiler worker failed to load: ${t.message}`)),
      { once: !0 }
    );
  });
}
async function F6() {
  return (await Hj()).compiler;
}
function xj(A) {
  (b === A.promise && (b = void 0), (A.poisoned = !0), Qj(A));
}
function Qj(A) {
  A.poisoned && A.pending === 0 && !A.terminated && ((A.terminated = !0), A.worker.terminate());
}
function Kj(A) {
  return A instanceof Error
    ? A.name === "RuntimeError" || A.name === "RangeError"
      ? !0
      : /memory access out of bounds|Maximum call stack size exceeded|unreachable/u.test(A.message)
    : !1;
}
async function Cj() {
  for (let A = 0; ; A++) {
    let j = await Hj();
    if (!j.poisoned) return j;
    if (A === 2) throw new Error("Compiler worker is unavailable");
  }
}
async function Vj(A, j) {
  let e = await Cj();
  try {
    return await Nj(e, A);
  } catch (t) {
    if (!Kj(t)) throw t;
    (R.warn(`Compiler worker is poisoned after ${j} failed with ${String(t)}; restarting worker`),
      xj(e));
    let r = await Cj();
    try {
      return await Nj(r, A);
    } catch (k) {
      throw (Kj(k) && xj(r), k);
    }
  }
}
async function Nj(A, j) {
  A.pending++;
  try {
    return await j(A.compiler);
  } finally {
    (A.pending--, Qj(A));
  }
}
async function pA(A, j) {
  return Vj((e) => e.transformSync(A, j), j.fileName);
}
async function Xj(A, j) {
  if (!j || !A.stores.loadingStore.hasMinimalEditableData) return;
  if (J.isOn("invoke")) {
    (await A.stores.chromeStore.setActiveView({ type: "page", nodeId: j })) &&
      (A.stores.siteSettingsStore.close(), A.stores.codeEditorStore.closeEditor());
    return;
  }
  let e = A.tree.get(j);
  (!iA(e) && !q(e) && !D(e)) ||
    (A.stores.codeEditorStore.closeEditor(),
    A.stores.scopeStore.activeId !== j &&
      A.stores.canvasStore.invalidateTransformUntilRendered(() => {
        let t = A.stores.treeStore.getDataTree().get(j);
        (!iA(t) && !q(t) && !D(t)) || A.stores.scopeStore.select(j, { keepHistory: !1 });
      }));
}
function Qe(A, j, e, t, { shouldOpenPage: r = !0, renamedIds: k = new f() } = {}) {
  let a = uj(A, j, e, "duplicate", {
    enterIsolation: !1,
    preferredName: t,
    insertionIndex: A.tree.root.children.findIndex((o) => o.id === j.id) + 1,
    renamedIds: k,
  });
  return (
    A.stores.persistedUserDefaults.newContentAsDraft &&
      a.set({ isDraft: !0, duplicatedFrom: WA(a.duplicatedFrom, j.id) }),
    r && Xj(A, a.id),
    a
  );
}
function m6(A, j, e) {
  let t = new f(),
    r = new Set(
      A.stores.scopeStore
        .getDesignPageNodes()
        .map((n) => n.resolveValue("name"))
        .filter(d)
    ),
    k = H(e ?? j.resolveValue("name") ?? "Design", r),
    a = j.clone({ name: k, children: new QA() });
  t.set(j.id, a.id);
  let o = [];
  for (let n of j.children) {
    let i = pj(n, new Map(), new Map(), t, !1);
    (o.push(i), t.set(n.id, i.id), a.addChild(i));
  }
  A.tree.insertNode(a, void 0, A.tree.root.children.findIndex((n) => n.id === j.id) + 1);
  for (let n of o) dj(A.tree, A.componentLoader, n, t, !1);
  return (
    sj(A.tree, j.id, a.id),
    p("design_page_create", { pageId: a.id, source: "duplicate" }),
    a
  );
}
async function Ve(A, j, e) {
  let t = j.isLoaded() ? j : await j.load();
  if (!(!t || !I6(A, [j.id]))) return m6(A, t, e);
}
function I6(A, j) {
  if (!j.length || P(A, "canDesign")) return !1;
  let e = A.stores.treeStore.getDataTree();
  return j.length === 1 && D(e.get(j[0]))
    ? !A.stores.chromeStore.hasNonDefaultCanvasLocale
    : j.every((t) => q(e.get(t)));
}
function Uj(A, j, e = !0) {
  A.scheduler.processWhenReady(() => {
    let {
      overlayStore: t,
      selectionStore: r,
      scopeStore: k,
      canvasStore: a,
      persistedUserDefaults: o,
    } = A.stores;
    k.selectByNode(j.id);
    let n = $A(j) ? j : A.tree.getNodeWithTrait(j.cache.overlayAncestorId, $A);
    if ((n ? t.showOverlay(r, n, n.parentid) : t.hideAll(), r.set(j.id), e)) {
      let i = tj(A.tree, [j]);
      a.zoomToCenter(i, { animated: o.animateOnZoom, maxZoom: 1 });
    }
  });
}
var v = N("unlinking");
async function _6(A, j, e) {
  let { codeEditorStore: t, selectionStore: r, treeStore: k } = A.stores;
  t.closeEditor();
  let [a] = r.nodes;
  if (r.nodes.length === 1 && M(a) && a.codeComponentIdentifier === j) return !0;
  let o;
  for (let n of k.query().whereClass(aj).iterate())
    if (n.codeComponentIdentifier === j) {
      o = n;
      break;
    }
  return o
    ? (Uj(A, o), !0)
    : (T({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${e.name}.`,
      }),
      !1);
}
async function Y(A, j, e) {
  return (await _6(A, j, e)) ? (A.stores.pluginStore.openPlugin(e, A, { mode: "canvas" }), !0) : !1;
}
function Z(A, j) {
  let e = A.componentForIdentifier(j);
  if (e) return e;
  let t = S(j);
  return !I(t) || !MA(t) ? null : A.componentForIdentifier(DA(t));
}
var f6 = 0;
async function AA(A, j, e = f6) {
  if (e === 0) {
    let r = S(j),
      k = X(A.stores.treeStore, A.stores.modulesStore, A.stores.pluginStore, r);
    if (k && (await Y(A, j, k))) return;
  }
  let t = Z(A.componentLoader, j);
  t && A.stores.codeEditorStore.editFile(t.file);
}
async function zj(
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
    [s, $] = await Promise.all([wj(i), A.stores.modulesStore.getModuleDependencies(j)]);
  if (s.ok) {
    let c = new Map();
    for (let E of s.value.relative) {
      let O = Aj(E.specifier, `${e.module.type}/`);
      if (!O) {
        v.warn("Failed to normalize relative import", E.specifier);
        continue;
      }
      let y = c.get(O) ?? [];
      (y.push(E), c.set(O, y));
    }
    let F;
    for (let E of $.imports) {
      if (E.type !== "local") continue;
      let O = `${E.moduleType}/${E.moduleName}`,
        y = c.get(O);
      if (!y) {
        v.warn("Unable to get source location of import", O, "when unlinking");
        continue;
      }
      for (let hA of y) {
        F ||
          (F = i.split(`
`));
        let SA = hA.specifierLine,
          PA = F[SA];
        (B(PA !== void 0, "Import source line must exist"),
          (F[SA] = PA.replace(JSON.stringify(hA.specifier), JSON.stringify(E.importURL))));
      }
    }
    F &&
      (i = F.join(`
`));
  }
  let g = await A.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: e.module.name,
        source: i,
        metadata: { pluginId: e.module.metadata.pluginId },
      }),
    m = xA(j, g).value;
  return (
    t &&
      (await a(() => {
        let c = A.tree.get(t.getPrimaryId());
        c && c.set({ codeComponentIdentifier: m });
      })),
    r && ((A.stores.chromeStore.activeContentPanelTab = "Assets"), AA(A, m, k)),
    m
  );
}
var Wj = { canvasComponent: mj, codeFile: zj };
function uA(A) {
  return d(A) ? A in Wj : !1;
}
async function mA(
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
  if (!uA(e)) throw Error(`Cannot import external module of type ${e}`);
  let [i] = await A.stores.modulesStore.preloadExternalModules([j]);
  B(i, "external module must exist on preload");
  let s = {
      identifier: j,
      info: i,
      instance: t,
      enterIsolation: r,
      codeComponentIsolationMode: k,
      renamedIds: a,
      isAutoDetach: o,
      scheduleTreeUpdate: n,
    },
    $ = Wj[e],
    l = await $(A, s);
  if (!JA(l))
    return !d(l) && L(l)
      ? { ...i, codeComponentIdentifier: l.instanceIdentifier, node: l }
      : { ...i, codeComponentIdentifier: l, node: void 0 };
}
var FA = new Set();
async function IA(A, j) {
  let { instance: e, withUnlinkModal: t, ...r } = j,
    k = V(A.stores.treeStore.tree, j.identifier),
    a = A.stores.insertSidebarStore.getEditBehavior(j.identifier.moduleId);
  if (t && a !== "autoUnlink" && (!k || hj.isOn("openPrimaryForBuiltInModules"))) {
    A.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...r,
      nodeId: e?.id,
    });
    return;
  }
  if (FA.has(j.identifier)) return;
  FA.add(j.identifier);
  let o = j.skipUndoGroup !== !0;
  o &&
    A.scheduler.process(() => {
      A.beginUndoGroup();
    });
  try {
    return (await mA(A, { instance: e, enterIsolation: a !== "autoDetach", ...r }))
      ?.codeComponentIdentifier;
  } catch (n) {
    (v.reportError(n),
      T({
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
      FA.delete(j.identifier));
  }
}
async function Yj(A, j) {
  let { instance: e, moduleType: t, enterIsolation: r, codeComponentIsolationMode: k } = j,
    a = j.scheduleTreeUpdate ?? ((s) => A.scheduler.processWhenReadyAsync(s));
  if (!M(e)) return;
  let o = await IA(A, { ...j, enterIsolation: !1 });
  if (!o) return;
  await cj(A.componentLoader, [o], A.stores.modulesStore, "component-unlinking");
  let n = A.componentLoader.componentForIdentifier(o);
  if (!n) return;
  let i = gj(n);
  i &&
    (await a(() => {
      if (
        (A.tree
          .getNodes(Array.from(A.stores.treeStore.treeIndex.codeComponentNodeIds))
          .forEach(($) => {
            if (
              !i ||
              i.id === $.id ||
              !M($) ||
              $.codeComponentIdentifier !== e.codeComponentIdentifier ||
              wA($) ||
              !fj($, { allowLockedNodes: !0 })
            )
              return;
            let l = A.cloneNode(i, !1, !1);
            bj(A, [$], l);
          }),
        !!r)
      )
        if (t === "canvasComponent") {
          let $ = rj(o);
          $ && A.stores.scopeStore.select($, { keepHistory: !1 });
        } else t === "codeFile" && AA(A, o, k);
    }));
}
function Zj(A, j, e) {
  if (P(A, "canDesign")) return;
  let r = A.tree.getNodeWithTrait(j, sA)?.annotation("framerVector");
  if (!w(r)) return;
  let k = r.set.moduleId,
    o = A.tree.getNodeWithTrait(k, sA)?.annotation("framerVectorSet");
  jj(o) &&
    A.stores.modalStore.set({
      type: "EditVector",
      source: "edit_action",
      vectorSetNodeId: k,
      moduleId: j,
      itemCount: o.items.length,
      instanceNodeId: e,
    });
}
function x(A) {
  return A?.type === "componentRichTextContent";
}
function et(A) {
  switch (A.type) {
    case "existing":
    case "privateDraft":
    case "arrayItem":
      return !0;
    case "componentRichTextContent":
      return !1;
    default:
      h(A);
  }
}
function rA(A) {
  return A.type === "existing" || A.type === "privateDraft";
}
function tt({ stackElement: A, tree: j }) {
  if (!A || x(A)) return null;
  let e = j.getNodeWithTrait(A.collectionId, _);
  if (e) return e;
  let t = A.type === "arrayItem" ? A.collectionItemId : A.itemId,
    r = j.getNodeWithTrait(t, G);
  return r?.parentid ? j.getNodeWithTrait(r.parentid, _) : null;
}
function O6({ treeStore: A, stackElement: j }) {
  if (!j || x(j)) return null;
  if (j.type === "existing" || j.type === "privateDraft")
    return A.tree.getNodeWithTrait(j.itemId, G);
  if (j.type === "arrayItem") return A.tree.getNodeWithTrait(j.collectionItemId, G) ?? null;
  h(j);
}
function rt({ treeStore: A, stackElement: j }) {
  return !j || !fA(j) ? null : O6({ treeStore: A, stackElement: j });
}
function kt(A) {
  return A.findLast(rA) ?? null;
}
function at(A) {
  return A.find(rA) ?? null;
}
function ot(A) {
  return A.reduce((j, e) => (rA(e) ? j + 1 : j), 0);
}
function nt(A, j = []) {
  let e = A.stores.selectionStore.ids.length === 1 ? A.stores.selectionStore.ids.at(0) : void 0,
    t = h6(A, j),
    r = t.at(0);
  if (x(r)) return t;
  let k = A.tree.getNodeWithTrait(e, G),
    a = k && tA(A, k) ? k : null;
  if (a) {
    if (!r) return [j6(A, a)];
    if (r.type === "existing")
      return r.itemId === a.id
        ? t
        : (B(t.length === 1, "Must dismiss overlay stack before changing selection"), [j6(A, a)]);
    if (r.type === "privateDraft") {
      if (r.itemId === a.id) return t;
      throw new Error("Must save private draft item stack before selecting a collection item");
    }
    if (r.type === "arrayItem") return t;
    h(r);
  }
  if (!r || r.type === "privateDraft") return t;
  if (r.type === "existing")
    return A.stores.chromeStore.mainView !== 2
      ? t
      : (B(t.length === 1, "Must dismiss overlay stack before de-selecting collection item"), []);
  if (r.type === "arrayItem") return t;
  h(r);
}
function h6(A, j) {
  let e = [];
  for (let t = 0; t < j.length; t++) {
    let r = j[t];
    if (!r) continue;
    if (x(r)) {
      if (!(t === j.length - 1)) break;
      e.push(r);
      break;
    }
    if (r.type === "existing") {
      let o = A.tree.getNodeWithTrait(r.itemId, G);
      o && eA(A, o)
        ? (r = jA(A, o, { saveAction: r.saveAction, showErrors: !1 }))
        : o?.parentid &&
          r.collectionId !== o.parentid &&
          (r = jA(A, o, { saveAction: r.saveAction, showErrors: !1 }));
    }
    if (r.type === "privateDraft") {
      let o = A.tree.getNodeWithTrait(r.itemId, G);
      o && tA(A, o) && !eA(A, o) && (r = jA(A, o, { saveAction: r.saveAction, showErrors: !1 }));
    }
    let k = e.at(-1) ?? null;
    if (
      (B(!x(k), "The component rich text overlay must be the last stack element"),
      !S6(A, r, k) || (t > 0 && fA(r) && !r.saveAction))
    )
      break;
    e.push(r);
  }
  return e;
}
function S6(A, j, e) {
  if (j.type === "existing") {
    let t = A.tree.getNodeWithTrait(j.itemId, G);
    return t ? !!t.parentid && tA(A, t) : !1;
  }
  if (j.type === "privateDraft") {
    let t = A.tree.getNodeWithTrait(j.itemId, G);
    return t ? t.parentid === j.collectionId && eA(A, t) : !1;
  }
  if (j.type === "arrayItem") {
    if (
      !e ||
      !rA(e) ||
      e.itemId !== j.collectionItemId ||
      (fA(e) && e.collectionId !== j.collectionId)
    )
      return !1;
    let t = A.tree.getNodeWithTrait(j.collectionId, _);
    if (!t) return !1;
    let r = A.tree.getNodeWithTrait(j.collectionItemId, G);
    if (!r || !tA(A, r) || (r.parentid && r.parentid !== j.collectionId)) return !1;
    let k = t.getVariable(j.arrayFieldId);
    if (!k || !zA(k)) return !1;
    let a = r.getControlProp(j.arrayFieldId);
    return !a || !XA(a) || !NA(a.value)
      ? !1
      : a.value.some(({ type: o, id: n }) => o === "object" && n === j.arrayItemId);
  }
  h(j);
}
function eA(A, j) {
  return lj(j, { currentUserId: A.stores.sessionStore.user.id });
}
function tA(A, j) {
  return Bj(j, { currentUserId: A.stores.sessionStore.user.id });
}
function fA(A) {
  return A.type === "privateDraft";
}
function j6(A, j) {
  return jA(A, j, { showErrors: !1 });
}
function jA(A, j, e) {
  if (j.parentid && eA(A, j)) {
    let r = {
      collectionId: j.parentid,
      itemId: j.id,
      showErrors: e.showErrors,
      type: "privateDraft",
    };
    return (e.saveAction && (r.saveAction = e.saveAction), r);
  }
  B(j.parentid, "Existing collection item must have a parent collection");
  let t = { collectionId: j.parentid, itemId: j.id, type: "existing" };
  return (e.saveAction && (t.saveAction = e.saveAction), t);
}
function e6(A) {
  let { newContentAsDraft: j } = A.stores.persistedUserDefaults;
  return !(!j || A.stores.publishStore.publishStatus === 1);
}
function t6(A, j, e, t) {
  j.stores.canvasStore.invalidateTransformUntilRendered(() => {
    try {
      (j.stores.scopeStore.select(A, t), j.stores.codeEditorStore.closeEditor());
    } catch {
      (p("open_primary_component_fail", {}),
        T({
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
      j.stores.canvasStore.zoomToCenter(ej(j.tree, r), { animated: !1, maxZoom: 1 }));
  });
}
function P6(A, j) {
  let e = A.stores.insertSidebarStore.getEditBehavior(j.moduleId),
    t = V(A.stores.treeStore.tree, j),
    r = A.componentLoader.componentForIdentifier(j.value)?.annotations;
  return (t && e === "block") || VA(r, "framerDisableUnlink");
}
function r6(A, j, e, t) {
  let r = S(A),
    k = P(j, "canDesign"),
    { includeAccelerator: a = !0 } = t;
  if (I(r) && r.type === "shader") {
    let $ = j.stores.modulesStore.getModuleEntryByLocalId(r.localId)?.name;
    return $
      ? [
          {
            label: `${k ? "View" : "Edit"} ${lA("Code")}`,
            click: () => j.stores.codeEditorStore.editFile($),
          },
        ]
      : u();
  }
  if (I(r) && (r.type === "canvasComponent" || r.type === "screen" || r.type === "vector"))
    return [
      {
        label: k ? "View" : "Edit",
        accelerator: a ? z.fakeSelectChildren : void 0,
        click: () => {
          if (r.type === "vector") {
            let l = j.stores.modulesStore
              .forType("vector")
              .getByStableName(r.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!w(l)) return;
            let { set: g } = l;
            t6(g.id, j, r.localIdName, t);
            return;
          }
          let [, $] = r.localId.split("/");
          $ && t6($, j, e, t);
        },
      },
    ];
  if (qA(r) && r.kind === "externalModuleExport") {
    if (t.node?.isVectorInstance)
      return Fj(j, A)
        ? u()
        : [
            {
              label: "Edit",
              accelerator: a ? z.fakeSelectChildren : void 0,
              click: () => Zj(j, r.moduleId, t.node?.id),
              enabled: !k,
            },
          ];
    let $ = j.stores.insertSidebarStore.getEditBehavior(r.moduleId),
      l = j.stores.treeStore.tree.get(r.moduleId),
      m = t.externalModuleType === "canvasComponent" && l?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (P6(j, r)) return u();
    if (!uA(t.externalModuleType)) return u();
    let { node: c, withUnlinkModal: F, externalModuleType: E } = t;
    return c && $ === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !k,
            click: async () => {
              (j.beginUndoGroup(),
                Ej(
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
                    await T6(c, j, r, E);
                  }
                ).catch(C),
                j.endUndoGroup());
            },
          },
        ]
      : m
        ? [
            {
              label: "Edit",
              accelerator: a ? z.fakeSelectChildren : void 0,
              click: () => {
                Yj(j, { identifier: r, moduleType: E, instance: c, enterIsolation: !0 }).catch(C);
              },
              enabled: !k,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                IA(j, {
                  identifier: r,
                  moduleType: E,
                  instance: c,
                  withUnlinkModal: F,
                  enterIsolation: !0,
                }).catch(C);
              },
              enabled: !k,
            },
          ];
  }
  let o = Z(j.componentLoader, A);
  if (o?.type !== "component" || o.depth !== 0) return u();
  let n = t.keepHistory
      ? void 0
      : () => {
          j.stores.scopeStore.goBack();
        },
    i = X(j.stores.treeStore, j.stores.modulesStore, j.stores.pluginStore, r);
  return [
    ...(i && _j(j.stores.modulesStore, r) && !k && I(A)
      ? [
          {
            label: Ij(i),
            click: () => {
              (n?.(), Y(j, A, i));
            },
          },
        ]
      : []),
    {
      label: `${k ? "View" : "Edit"} ${lA("Code")}`,
      click: () => {
        (n?.(), j.stores.codeEditorStore.editFile(o.file));
      },
      enabled: I(A),
    },
  ];
}
async function T6(A, j, e, t) {
  let r = new f(),
    k = await mA(j, {
      identifier: e,
      moduleType: t,
      instance: A,
      renamedIds: r,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!k) return null;
  let { node: a } = k;
  return L(a)
    ? j.scheduler.processWhenReadyAsync(() => {
        let o = Oj.detachSmartComponentOrWebPageInstance(j, A.draftOrCurrent(), a, r);
        return (o && j.stores.selectionStore.set(o.id), o);
      })
    : null;
}
function k6(A) {
  return A?.find((e) => e.enabled !== !1)?.click;
}
function y6(A, j, e) {
  return r6(A, j, null, e);
}
function Mt(A, j, e) {
  return k6(y6(A, j, e));
}
function D6(
  A,
  j,
  { withUnlinkModal: e = !0, externalModuleType: t, activateContentPanel: r } = {}
) {
  let k = kj(j.tree, A);
  return r6(A.codeComponentIdentifier, j, k, {
    keepHistory: !0,
    node: A,
    withUnlinkModal: e,
    externalModuleType: t,
    activateContentPanel: r,
  });
}
function vt(A, j, e = {}) {
  return k6(D6(A, j, e));
}
function Xt(A) {
  A.engine.scheduler.processWhenReady(() => {
    q6(A);
  });
}
function q6({ collectionId: A, engine: j, saveAction: e, source: t }) {
  let r = j.tree.getNodeWithTrait(A, _);
  B(r, "Collection needs to exist to allow creation of new item");
  let k = j.stores.selectionStore.ids[0],
    a = j.tree.getNodeWithTrait(k, _);
  (a && a.id !== r.id && B(e, "saveAction is required when creating a nested private draft item"),
    M6({ collection: r, engine: j, saveAction: e }),
    p("collection_record_create", { source: t }));
}
function M6({ collection: A, engine: j, saveAction: e }) {
  let t = v6(j, A, 0);
  j.stores.contentManagementStore.openPrivateDraftCollectionItem({
    collectionId: A.id,
    itemId: t.id,
    saveAction: e,
  });
}
function v6(A, j, e) {
  let t = A.stores.sessionStore.user.id,
    r = x6(j, t);
  if (r) return r;
  let k = ij.create({ privateToUserId: t, ...oj(A.tree.root.locales ?? u()) });
  return (A.stores.scopeStore.insertNode(k, j.id, e), C6(j, k), e6(A) && k.set({ isDraft: !0 }), k);
}
function x6(A, j) {
  let e,
    t = 0;
  for (let r of A.children) {
    if (r.privateToUserId !== j) continue;
    let k = K6(r);
    (!e || k > t) && ((e = r), (t = k));
  }
  return e;
}
function K6(A) {
  if (!A.createdAt) return 0;
  let j = new Date(A.createdAt).getTime();
  return Number.isNaN(j) ? 0 : j;
}
function C6(A, j) {
  let e = N6(j);
  for (let t of A.variables)
    t.type === "date" &&
      j.setControlProp(t.id, { type: "date", value: bA(e, t.options?.displayTime) });
}
function N6(A) {
  if (!A.createdAt) return new Date();
  let j = new Date(A.createdAt);
  return Number.isNaN(j.getTime()) ? new Date() : j;
}
function bA(A, j) {
  return j
    ? new Date(
        Date.UTC(A.getFullYear(), A.getMonth(), A.getDate(), A.getHours(), A.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(A.getFullYear(), A.getMonth(), A.getDate())).toJSON();
}
function Ar({ variables: A, collectionItem: j }) {
  if (!j.hasData()) return !1;
  for (let e of A) {
    if (e.type === "divider") continue;
    let t = j.getControlProp(e.id);
    if (!(!t || !nj(t.value)) && !J6(j, t, e)) return !0;
  }
  return !1;
}
function J6(A, j, e) {
  if (e.type !== "date" || j.type !== "date" || !d(j.value) || !A.createdAt) return !1;
  let t = new Date(A.createdAt);
  return Number.isNaN(t.getTime()) ? !1 : j.value === bA(t, e.options?.displayTime);
}
function a6(A, j) {
  let e = LA(A);
  return e.length ? H(e, j, { withDash: !0 }) : "";
}
function sr(A, j, e, t) {
  for (let r of A.variables) {
    if (r.type === "divider" || !UA(r)) continue;
    let k = t?.get(r.id) ?? j.getControlProp(r.id);
    if ((!k || !d(k.value) || !k.value.length) && r.associatedStringVariable) {
      let o = t?.get(r.associatedStringVariable) ?? j.getControlProp(r.associatedStringVariable);
      if (o && d(o.value)) {
        let n = a6(o.value, (i) => Sj(e.get(r.id), i, j.id));
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
var L6 = TA() && navigator.userAgent.includes("Version/16"),
  Br = window.CompressionStream && !L6;
function kA(A) {
  let j = 0,
    e = !1,
    t = (k) => {
      let a = k;
      return (A && (a -= 1), Math.max(0, a));
    },
    r = () => j + (e ? 1 : 0);
  return {
    addText(k) {
      if (!k) return t(r());
      for (let a = 0; a < k.length; a++)
        k[a] ===
        `
`
          ? (j++, (e = !1))
          : (e = !0);
      return t(r());
    },
    finish() {
      return (e && (j++, (e = !1)), t(j));
    },
  };
}
var gA = "text/csv;charset=utf-8",
  w6 = "X-Next-Cursor",
  H6 = 1e4,
  aA = 4,
  Q6 = 500,
  oA = class extends Error {
    name = "AnalyticsExportIncompleteError";
  };
function V6(A) {
  return A.headers.get(w6)?.trim() || void 0;
}
function n6(A) {
  return A === 429 || A >= 500;
}
function i6(A) {
  let j = A.status ?? 0;
  return j >= 400 && j < 500 && j !== 429 ? !1 : n6(j);
}
function X6(A) {
  if (!i6(A)) {
    let { message: j, status: e, data: t, code: r, ref: k, skipSentry: a } = A;
    return new Q({
      message: j,
      status: e,
      data: t,
      code: r,
      ref: k,
      isTemporary: !1,
      skipSentry: a,
    });
  }
  return A;
}
async function U6(A) {
  let j = A.statusText || "Analytics export request failed",
    e = {};
  try {
    let r = await A.text();
    if (r)
      try {
        let k = JSON.parse(r);
        (typeof k.error?.message == "string" && (j = k.error.message), CA(k.data) && (e = k.data));
      } catch {
        j = r;
      }
  } catch {}
  let t = A.status;
  return new Q({ message: j, status: t, data: e, isTemporary: n6(t) });
}
async function z6(A, j, e) {
  let t = `/web/analytics/${A}/events-export`;
  for (let r = 0; r < aA; r++) {
    if (r > 0) {
      if (e?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
      await qj(r, Q6);
    }
    try {
      let k = await BA.getRaw(t, j, e);
      if (k.ok) return k;
      let a = await U6(k);
      if (!a.isTemporary || r === aA - 1) throw a;
    } catch (k) {
      if (Rj(k)) throw k;
      if (k instanceof Q) {
        let a = X6(k);
        if (!i6(a) || r === aA - 1) throw a;
        continue;
      }
      if (r === aA - 1) throw k;
    }
  }
  throw new Error("Analytics export page fetch exhausted retries");
}
async function* W6(A, { startDate: j, endDate: e }, t, r) {
  let k,
    a = !0,
    o = new Set();
  for (let n = 0; n < H6; n++) {
    r?.(n + 1);
    let i = await z6(A, { startDate: j, endDate: e, includeHeader: a, cursor: k }, t);
    yield i;
    let s = V6(i);
    if (!s) return;
    if (o.has(s))
      throw new oA("Export pagination repeated; try again or use a smaller date range.");
    (o.add(s), (k = s), (a = !1));
  }
  throw new oA("Export is too large to download in one file. Try a smaller date range.");
}
async function s6(A, j, e, t) {
  let r = 0,
    k = 0;
  for await (let a of W6(A, j, e.signal, e.onPageStarted)) {
    let o = k,
      i = await t(a, r === 0, (s) => {
        e.onTransferredEvents?.(o + s);
      });
    ((k += i), r++, e.onPageComplete?.(r, k));
  }
}
async function Y6(A, j, e) {
  let t = [],
    r = l6(j);
  return (
    await s6(A, j, e, async (k, a, o) => {
      let n = await k.text();
      t.push(new Blob([n], { type: gA }));
      let i = kA(a);
      i.addText(n);
      let s = i.finish();
      return (o(s), s);
    }),
    { blob: new Blob(t, { type: gA }), filename: r }
  );
}
function $6() {
  let A = globalThis.showSaveFilePicker;
  return typeof A == "function" ? A.bind(globalThis) : void 0;
}
function Z6() {
  return !yA() && $6() !== void 0;
}
async function Ae(A, j) {
  if (j?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  let e = $6();
  if (!e) throw new Error("File System Access API is not available");
  let t = await e({
    suggestedName: l6(A),
    types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
  });
  if (j?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  return t.createWritable();
}
async function fr(A, j, e = {}) {
  if (Z6()) {
    await je(A, j, e);
    return;
  }
  let { blob: t, filename: r } = await Y6(A, j, e);
  Mj(t, r);
}
async function je(A, j, e) {
  let t = e.writable;
  t || (t = await Ae(j, e.signal));
  try {
    (await s6(A, j, e, async (r, k, a) =>
      ee({ response: r, writable: t, includesHeader: k, onPageProgress: a })
    ),
      B(t),
      await t.close());
  } catch (r) {
    throw (await t?.abort().catch(() => {}), r);
  }
}
async function ee({ response: A, writable: j, includesHeader: e, onPageProgress: t }) {
  if (!A.body) {
    let n = await A.text(),
      i = new Blob([n], { type: gA });
    await j.write(i);
    let s = kA(e);
    s.addText(n);
    let $ = s.finish();
    return (t($), $);
  }
  let r = A.body.getReader(),
    k = new TextDecoder(),
    a = kA(e);
  for (;;) {
    let { done: n, value: i } = await r.read();
    if (n) break;
    (await j.write(i), t(a.addText(k.decode(i, { stream: !0 }))));
  }
  a.addText(k.decode());
  let o = a.finish();
  return (t(o), o);
}
function o6(A) {
  let [j, e, t] = A.split("-");
  return `${t}-${e}-${j.slice(-2)}`;
}
function l6({ startDate: A, endDate: j }) {
  let e = o6(A),
    t = o6(j);
  return `Analytics Export \u2014 ${e} \u2192 ${t}.csv`;
}
async function br(A, { startDate: j, endDate: e }, t) {
  return await BA.get(`/web/analytics/${A}/events-export-count`, { startDate: j, endDate: e }, t);
}
var B6 = "2024-11-01",
  te = /^\d{4}-\d{2}-\d{2}$/,
  re = 1440 * 60 * 1e3;
function hr(A, j) {
  return !(A === void 0 || (A !== null && A <= 0) || j === void 0 || (j !== null && j <= 0));
}
function Sr(A) {
  return A === null ? null : A === void 0 || A <= 0 ? 0 : A;
}
function ke(A = new Date()) {
  return d6(new Date(Date.UTC(A.getUTCFullYear(), A.getUTCMonth(), A.getUTCDate())));
}
function Pr(A, j = new Date()) {
  if (A === null) return B6;
  let e = ke(j);
  if (A === void 0 || A <= 0) return e;
  let t = K(e, -(A - 1));
  return nA(t, B6, e);
}
function nA(A, j, e) {
  return A < j ? j : A > e ? e : A;
}
function ae(A, j, e) {
  return A < K(j, -e);
}
function K(A, j) {
  let e = new Date(OA(A));
  return (e.setUTCDate(e.getUTCDate() + j), d6(e));
}
function E6(A) {
  return A === null ? null : A - 1;
}
function Tr(A, j, e) {
  let { fromDay: t } = c6({ ...e, fromDay: A, toDay: j });
  return { fromDay: t };
}
function yr(A, j, e, t) {
  return c6({ ...t, fromDay: A, toDay: nA(e, A, t.maxExportDay) });
}
function Dr(A, j, e) {
  if (!te.test(A)) throw new Error(`${e} expected '${j}' to be a UTC calendar day (YYYY-MM-DD).`);
  let t = new Date(`${A}T00:00:00.000Z`);
  if (Number.isNaN(t.getTime()) || t.toISOString().slice(0, 10) !== A)
    throw new Error(`${e} expected '${j}' to be a valid UTC calendar day.`);
}
function qr(A, j, e, t) {
  if (e === null) return;
  let r = e - 1,
    k = K(j, -r);
  if (A < k) throw new Error(t);
}
function c6({ fromDay: A, toDay: j, minDay: e, maxExportDay: t, maxExportInclusiveDays: r }) {
  let k = j > t ? t : j,
    a = nA(A, e, k),
    o = E6(r);
  return (
    o !== null && ae(a, k, o) && ((a = K(k, -o)), a < e && (a = e)),
    { fromDay: a, toDay: k }
  );
}
function Mr(A, j, e, t) {
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
function vr(A, j, e, t) {
  let r = nA(A, j, e),
    k = j,
    a = E6(t);
  if (a !== null) {
    let o = K(A, -a);
    o > k && (k = o);
  }
  return (k > r && (k = r), { min: k, max: r });
}
function OA(A) {
  let [j, e, t] = A.split("-").map(Number);
  return (B(j && e && t, "day must be a valid yyyy-MM-dd string"), Date.UTC(j, e - 1, t));
}
function d6(A) {
  let j = A.getUTCFullYear(),
    e = String(A.getUTCMonth() + 1).padStart(2, "0"),
    t = String(A.getUTCDate()).padStart(2, "0");
  return `${j}-${e}-${t}`;
}
function xr(A, j) {
  let e = OA(A),
    t = OA(j);
  return Math.floor((t - e) / re) + 1;
}
export {
  Z as a,
  Uj as b,
  fe as c,
  be as d,
  ge as e,
  Oe as f,
  wj as g,
  uA as h,
  mA as i,
  IA as j,
  Yj as k,
  t6 as l,
  P6 as m,
  T6 as n,
  y6 as o,
  Mt as p,
  D6 as q,
  vt as r,
  x as s,
  et as t,
  rA as u,
  tt as v,
  O6 as w,
  rt as x,
  kt as y,
  at as z,
  ot as A,
  nt as B,
  h6 as C,
  fA as D,
  e6 as E,
  Xt as F,
  q6 as G,
  v6 as H,
  x6 as I,
  C6 as J,
  Ar as K,
  a6 as L,
  sr as M,
  Br as N,
  oA as O,
  Z6 as P,
  Ae as Q,
  fr as R,
  l6 as S,
  br as T,
  hr as U,
  Sr as V,
  ke as W,
  Pr as X,
  K as Y,
  Tr as Z,
  yr as _,
  Dr as $,
  qr as aa,
  c6 as ba,
  Mr as ca,
  vr as da,
  xr as ea,
  Xj as fa,
  Qe as ga,
  m6 as ha,
  Ve as ia,
  I6 as ja,
};
//# sourceMappingURL=chunk-ZINLNOD6.mjs.map
