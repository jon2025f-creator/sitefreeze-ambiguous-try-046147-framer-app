import { Ad as ie, J as Z, Jc as re, Sc as L, nb as te, uc as ne } from "chunk-QXUDYZJG.mjs";
import { H as J } from "chunk-UCA6DIRC.mjs";
import { O as ee } from "chunk-DGIWPVTI.mjs";
import { c as b } from "chunk-3HO5QPBT.mjs";
import { a as P, b as f } from "chunk-FNXVRUN6.mjs";
import { _a as Y } from "chunk-BP2ZYPEN.mjs";
import { Cl as X, de as $, hl as p, rl as I, vl as H } from "chunk-RE42INF2.mjs";
import { Zj as q, vb as N, yk as G } from "chunk-3GNDJY2L.mjs";
import { a as x, b as y } from "chunk-O5WG5ZBQ.mjs";
import { a as se } from "chunk-QFU6OGL3.mjs";
import { a as oe } from "chunk-23YNWY3E.mjs";
import { e as K } from "chunk-XWVB37KR.mjs";
import { a as W } from "chunk-MSHSIAEI.mjs";
import { b as T, h as C } from "chunk-EHED2EQW.mjs";
import { a as B } from "chunk-2FCXHKEL.mjs";
import { b as Q } from "chunk-ARJ7WQTJ.mjs";
import { b as R, j as V } from "chunk-EAUMDN6M.mjs";
import { b as h } from "chunk-4JY5UMT2.mjs";
import { e as U } from "chunk-WLHSDIGQ.mjs";
var ae = "l7g1830";
var de = U(B());
function xe({ children: i, htmlFor: e, className: t }) {
  return (0, de.jsx)("label", { className: se(ae, t), htmlFor: e, children: i });
}
var Se = { valueLocalized: !0, altLocalized: !0 };
function E(i, e) {
  let t = {};
  for (let n in i) {
    if (!$(n)) continue;
    let r = i[n];
    ie(r) && (t[n] = ce(r, e));
  }
  return t;
}
function ce(i, e) {
  switch (i.type) {
    case "array":
      return i.value
        ? { ...i, value: i.value.map((t) => t && { ...t, value: le(t.value, e) }) }
        : i;
    case "object":
      return { ...i, value: le(i.value, e) };
    default: {
      let t = i,
        n = {};
      for (let r of K(Se)) {
        let o = t[r];
        o && (n[r] = q(o, e));
      }
      return { ...i, ...n };
    }
  }
}
function le(i, e) {
  if (!i) return i;
  let t = {};
  for (let [n, r] of Object.entries(i)) t[n] = ce(r, e);
  return t;
}
var ve = 3,
  l = V("PartialTreeSender"),
  k = W();
function me(i) {
  if (Q(i)) return i.length;
  if (typeof i != "object" || i === null) return 8;
  let e = 0;
  for (let t of Object.values(i)) e += me(t);
  return e;
}
function ue() {
  return new Promise((i, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => i()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(i, 0);
  });
}
var he = class {
  constructor(e, t, n, r = {}) {
    this.treeUpdater = e;
    this.options = r;
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = {
        maxNodesPerChunk: n?.maxNodesPerChunk ?? 1e3,
        maxSizePerChunk: n?.maxSizePerChunk ?? 5e7,
      }));
  }
  treeUpdater;
  options;
  name;
  currentScopeId = "";
  timelineCursor;
  scopeBufferMap = new Map();
  changedCollectionIds = new Set();
  chunkQueue = [];
  chunkIndex = 0;
  chunkingConfig;
  drainingPromise;
  localesToSend = [];
  needsFullResend = !1;
  get crdtStore() {
    return this.treeUpdater.store;
  }
  setActiveLocale(e) {
    let t = this.treeUpdater.tree.root,
      n = t.getNonDefaultLocale(e),
      r = n ? te(n, t.locales ?? []) : [];
    (r.length === this.localesToSend.length &&
      r.every((s, a) => s.id === this.localesToSend[a]?.id)) ||
      ((this.localesToSend = r), (this.needsFullResend = !0));
  }
  getScopeAsValue(e, t) {
    let n = e.get(t);
    if (n) return this.scopeAsValue(e, n);
  }
  scopeAsValue(e, t) {
    if (e.driver instanceof ne) {
      let r = this.omitsCollectionItems(t.id);
      for (let { node: o, skipChildren: s } of t.walkWithSkipChildren())
        r && o.parentid === t.id && s();
    }
    let n = this.serializeScope(t, e.root.id, e.getService("metadata")?.version !== void 0);
    return t.id !== p ? n : pe(n, (r) => pe(r, (o) => ({ ...o, ...E(o, this.localesToSend) })));
  }
  serializeScope(e, t, n) {
    if (
      (h(e.parentid === t, "Scope must be a direct child of the root"),
      Y(e) && h(e.isLoaded(), "Scope must be loaded"),
      this.omitsCollectionItems(e.id))
    )
      return this.contentManagementWithoutItemsAsValue(e, n);
    let r = e.treeState.getSerializedCache(e);
    if (r) return r;
    if (!n) {
      let o = this.crdtStore,
        s = e.treeState.serialized?.hadError;
      if (o && !s) {
        let a = o.getObject(e.id);
        if (a && a.parentid !== b) return a;
      }
    }
    return L.valueFromNode(e);
  }
  omitsCollectionItems(e) {
    return !!this.options.omitCollectionItems && e === p;
  }
  contentManagementWithoutItemsAsValue(e, t) {
    let n =
        t || e.treeState.serialized?.hadError
          ? void 0
          : this.crdtStore.getObjectWithShallowChildren(e.id, 1),
      r = n && n.parentid !== b ? n : L.valueFromNode(e);
    return { ...r, children: (r.children ?? k).map((o) => ({ ...o, children: [] })) };
  }
  takeChangedCollectionIds() {
    let e = this.changedCollectionIds;
    return ((this.changedCollectionIds = new Set()), e);
  }
  recordItemChange(e, t) {
    for (let n of [t.to.parentid, t.from?.parentid, e.get(t.id)?.parentid])
      typeof n == "string" && this.changedCollectionIds.add(n);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let n = e.chunkingHints;
    if (!n || n.size === 0) return !1;
    let r = S();
    t && r.add(t);
    for (let o of r)
      if (!this.omitsCollectionItems(o) && n.has(o))
        return (l.debug(this.name, `chunking required - large page hint: ${o}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let n = [],
      r = crypto.randomUUID(),
      o = new Map(),
      s = new Map(),
      a = 0,
      d = 0,
      u = S();
    t && u.add(t);
    let D = () =>
        o.size >= this.chunkingConfig.maxNodesPerChunk || a >= this.chunkingConfig.maxSizePerChunk,
      m = () => {
        o.size > 0 &&
          (n.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: r,
              chunkIndex: n.length,
              totalChunks: -1,
              nodes: o,
              childrenMap: s,
              rootId: n.length === 0 ? e.root.id : void 0,
            },
          }),
          (o = new Map()),
          (s = new Map()),
          (a = 0));
      },
      M = (c) => {
        let z = c.children ?? k,
          _ = { ...c, children: k },
          j = me(_);
        (a + j > this.chunkingConfig.maxSizePerChunk && m(),
          o.set(c.id, _),
          s.set(
            c.id,
            z.map((v) => v.id)
          ),
          (a += j),
          d++,
          D() && m());
        for (let v of z) M(v);
      },
      F = e.root,
      g,
      O = {};
    for (g in F) I.has(g) || (O[g] = F[g]);
    let w = e.getNodes(u),
      Ce = { ...O, __class: "RootNode", id: e.root.id, children: k };
    (o.set(e.root.id, Ce),
      s.set(
        e.root.id,
        w.map((c) => c.id)
      ),
      d++,
      D() && m());
    for (let c of w) M(this.scopeAsValue(e, c));
    m();
    let ye = n.length;
    for (let c of n) c.treeChunks.totalChunks = ye;
    return (
      l.debug(this.name, `directly chunked tree into ${n.length} chunks with ${d} total nodes`),
      n
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      h(this.chunkIndex >= 0, "Chunk index should not be negative"),
      h(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new oe()),
      t &&
        (l.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      l.debug(this.name, "drainChunks started"));
    let n = 0,
      r = performance.now();
    try {
      for (; this.hasMoreChunks();) {
        if (e?.aborted) {
          (l.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let o = this.getNextChunk();
        (o &&
          (n++,
          l.debug(
            this.name,
            `sending chunk ${o.treeChunks.chunkIndex + 1} of ${o.treeChunks.totalChunks}`
          ),
          yield o),
          await ue());
      }
    } finally {
      await ue();
      let o = performance.now() - r,
        s = o > 1e3 ? `${(o / 1e3).toFixed(2)}s` : `${Math.round(o)}ms`;
      (l.debug(this.name, `completed sending ${n} chunks in ${s}`),
        l.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === p) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= ve) {
      let n = S(),
        r = 1 / 0,
        o;
      for (let [s, a] of this.scopeBufferMap) n.has(s) || (r > a && ((r = a), (o = s)));
      o && (this.scopeBufferMap.delete(o), (t = o));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.treeUpdater.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        l.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let n = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), n);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks() || this.drainingPromise) return {};
    this.needsFullResend && ((this.needsFullResend = !1), (this.timelineCursor = void 0));
    let t = this.treeUpdater.tree,
      n = this.treeUpdater.fetchForwardChanges(this.timelineCursor);
    if (
      (n &&
        this.options.omitCollectionItems &&
        (n = n.filter((a) => (Te(t, a) ? (this.recordItemChange(t, a), !1) : !0))),
      !n)
    ) {
      if (this.treeUpdater.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          l.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let d = this.getNextChunk();
        if (d)
          return (
            (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
            l.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            d
          );
      }
      let a = this.serializeTree(t, e);
      return (
        l.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
        { name: this.name, tree: a, timestamp: Date.now() }
      );
    }
    let [r, o] = this.updateScopeBuffer(e);
    (r && (l.debug(this.name, "deleting scope by diff:", r), fe(r, n)),
      n.length === 0 && (n = void 0));
    let s;
    if (
      (o && (l.debug(this.name, "adding scope by subtree:", o), (s = this.getScopeAsValue(t, o))),
      n)
    ) {
      let a = this.getAffectedScopeIDsAfterCrossScopeMove(t, n);
      for (let d of a) {
        if (d !== this.currentScopeId) {
          this.scopeBufferMap.has(d) &&
            (l.debug(this.name, "deleting scope due to cross-scope move:", d),
            fe(d, n),
            this.scopeBufferMap.delete(d));
          continue;
        }
        s ||
          (l.debug(this.name, "resending tree with scope due to cross-scope move:", d),
          (s = this.getScopeAsValue(t, d)));
      }
    }
    return {
      changes: n?.map((a) => this.changeForLocalesToSend(t, a)),
      scopes: s ? [s] : void 0,
      timestamp: Date.now(),
    };
  }
  changeForLocalesToSend(e, t) {
    if (!(t.added === "CollectionItemNode" || N(e.get(t.id)))) return t;
    let r = E(t.to, this.localesToSend);
    return { ...t, to: { ...t.to, ...r } };
  }
  serializeTree(e, t) {
    let n = S();
    t && n.add(t);
    let r = [];
    for (let d of n) {
      let u = this.getScopeAsValue(e, d);
      u && r.push(u);
    }
    let o = e.root,
      s,
      a = {};
    for (s in o) I.has(s) || (a[s] = o[s]);
    return { version: re, root: { ...a, __class: "RootNode", id: e.root.id, children: r } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let n = new Set();
    for (let r of t) {
      if (!r.previousScope || !r.to.parentid) continue;
      let o = e.get(r.id),
        s = e.getScopeNodeFor(o);
      s && n.add(s.id);
    }
    return n;
  }
};
function pe(i, e) {
  return i.children ? { ...i, children: i.children.map(e) } : i;
}
function Te(i, e) {
  let t = "CollectionItemNode";
  return e.added === t || e.removed === t ? !0 : N(i.get(e.id));
}
function fe(i, e) {
  e.push({ id: i, removed: "CanvasNode", to: {} });
}
function S() {
  return new Set([ee, J, G, X, H, p, Z]);
}
var A = class {
    constructor(e) {
      this.callbacks = e;
    }
    callbacks;
    experimentListeners = new Map();
    employeesOnlySettingsListeners = new Map();
    projectFeaturesListeners = new Map();
    startUpdatesStream() {
      (Object.keys(T).forEach((e) => {
        let t = (n) => {
          this.callbacks.updateExperiments({ [e]: n });
        };
        (C.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(x).forEach((e) => {
          let t = (n) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: n });
          };
          (y.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(T).forEach((t) => {
          e[t] = C.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(x).forEach((t) => {
          e[t] = y.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      f.updated
        .then(() => {
          let e = {};
          (Object.keys(P).forEach((t) => {
            e[t] = f.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(P).forEach((t) => {
                let n = (r) => {
                  this.callbacks.updateProjectFeatures({ [t]: r });
                };
                (f.addListener(t, n), this.projectFeaturesListeners.set(t, n));
              }));
        })
        .catch(R);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) C.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) y.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) f.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  ge = class {
    constructor(e, t) {
      this.remoteFlags = e;
      let n = new A(this.remoteFlags);
      (n.startUpdatesStream(),
        this.remoteFlags.updateExperiments(n.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(n.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => n.stopUpdatesStream(), { once: !0 }));
    }
    remoteFlags;
  };
export { A as a, ge as b, he as c, xe as d };
//# sourceMappingURL=chunk-4ADMEMJT.mjs.map
