import { o as Z } from "chunk-LBSOXH7T.mjs";
import {
  Id as Te,
  Qd as U,
  Xd as be,
  Zd as Se,
  ad as Ne,
  bd as me,
  cd as pe,
  dd as ve,
  gd as Y,
  hd as W,
  id as D,
  jd as ye,
  kd as z,
  nd as R,
  ne as De,
  od as L,
  qd as J,
  rd as M,
  sd as _,
} from "chunk-5SS36YFI.mjs";
import { ob as Q } from "chunk-ZKH547QE.mjs";
import { b as B } from "chunk-LMOJRZKM.mjs";
import { c as T, e as Ce, x as Ie } from "chunk-E5B536XW.mjs";
import { Eg as le, k as A, wn as P, zn as fe } from "chunk-H6YNRUOF.mjs";
import {
  Bf as V,
  Cf as q,
  Cj as X,
  Ij as ce,
  Jj as he,
  Tl as ue,
  fc as H,
  yf as ae,
} from "chunk-6ORKVNPQ.mjs";
import { a as ge } from "chunk-RNHTTH2C.mjs";
import { b as de } from "chunk-ARJ7WQTJ.mjs";
import { b as g } from "chunk-4JY5UMT2.mjs";
function we(o, e, t) {
  let r = e;
  for (; r;) {
    let s = o.getObjectKey(r, "__class");
    if (s && Fe(s, t)) return r;
    let i = o.getParentId(r);
    if (!i || i === T) break;
    r = i;
  }
}
function Fe(o, e) {
  let t = e.get(o);
  if (t !== void 0) return t;
  let r = me(o);
  if (!r) return !1;
  let s = Object.getPrototypeOf(r);
  for (; s;) {
    if (s === fe) return (e.set(o, !0), !0);
    s = Object.getPrototypeOf(s);
  }
  return (e.set(o, !1), !1);
}
var Pe = Symbol("backingDataTree");
function xe(o) {
  let e = De.createEmpty(),
    t = {
      [Pe]: o,
      isDataTree: () => !0,
      equals: (s) => {
        let i = s?.[Pe];
        return i ? o.equals(i) : !1;
      },
      getAccessor: (s) => o.getAccessor(s),
      get: (s) => o.get(s),
      getLoaded: (s) => o.get(s),
      getLinks: (s) => o.getLinks(s),
      getNode: (s) => o.getNode(s),
      getNodeAtStart: (s) => o.getCommittedNode(s),
      getNodeAsDraft: (s) => o.getNodeAsDraft(s),
      getCurrentOrDraft: (s) => o.getCommittedNode(s) ?? o.get(s),
      has: (s) => o.has(s),
      hasNodeAnywhere: (s) => o.hasNodeAnywhere(s),
      getReplicaAwareChecksum: (s) => o.getReplicaAwareChecksum(s),
      latestTree: () => o.latestTree(),
      get editClosed() {
        return o.editClosed;
      },
      get isViewOnly() {
        return o.isViewOnly;
      },
      get inEditor() {
        return o.inEditor;
      },
      insertNode: (s, i, d) => o.insertNode(s, i, d),
      unsafeInsertNode: (s, i) => o.insertReplicaChild(s, i),
      unsafeRemoveNode: (s) => o.removeReplicaChild(s),
      size: () => o.hierarchy.sizeWithoutReplicas(),
      sizeAtStart: () => o.hierarchy.sizeWithoutReplicas(),
      hasUncommittedChanges: () => o.hasUncommittedChanges(),
      unsafeGetDraftNodes: () => [],
      getNodesChangedByCommit: () => [],
      withPersistedCaches: (s) => o.withPersistedCaches(s),
      persistCaches: () => o.persistCaches(),
    },
    r = new Proxy(e, {
      get(s, i, d) {
        if (i === "isLoaded") return () => !0;
        if (i === "root" || i === "rootAtStart") return o.root;
        if (i === "commit") return () => d;
        if (i === "remove") return (c) => (o.remove(c), d);
        if (i === "move")
          return (c, h, u, m) => {
            let a = o.get(c);
            return (h || (h = o.root.id), a && o.move(a.id, h, u, m), d);
          };
        if (i in t) return t[i];
        let n = Reflect.get(s, i, d);
        return typeof n == "function" ? n.bind(d) : n;
      },
    });
  return ((e.lineage.latestTree = r), r);
}
var j = Symbol("isDataNode");
var F = new Map(),
  Oe = new Map(),
  ke = (o) => o.startsWith("$");
function Ee(o) {
  let e = 0;
  for (let t = o; t; t = t.base) e += t.length;
  return e;
}
function Me(o, e) {
  if (e.ownerId) return o.store.getObjectKey(`${e.ownerId}.replicaInfo`, "inheritsFrom");
}
function _e(o, e) {
  if (!e.originalId) return o.store.getLatest(e.id)?.update ?? 0;
  let t = Me(o, e);
  return (
    (o.store.getLatest(e.originalId)?.update ?? 0) +
    (e.ownerId ? (o.store.getLatest(e.ownerId)?.update ?? 0) : 0) +
    (t ? (o.store.getLatest(t)?.update ?? 0) : 0)
  );
}
function Re(o, e) {
  return o.getCachedNodeProxy(e);
}
function $e(o, e) {
  return (o.cacheNodeProxy(e), e);
}
function je(o, e) {
  if (o.canvasTree && e !== o.canvasTree.root.id) {
    let t = o.canvasTree.get(e),
      r = P(t);
    if (t && (!r || t.isLoaded())) return t;
  }
}
function $(o, e) {
  let t = Re(o, e);
  if (t) return t;
  let r = je(o, e);
  if (r) return r;
  let s = o.store.getObjectKey(e, "__class");
  g(s, () => `${e} does not have class`);
  let i = F.get(s);
  g(i, () => `node ${e} has invalid class name ${s}`);
  let d = [],
    n,
    c = o.store.getObjectKey(`${e}.replicaInfo`, "master");
  if (c && typeof c == "string") {
    ((n = e), d.push(`${n}.replicaInfo.overrides.${c}`));
    let u = o.store.getObjectKey(`${n}.replicaInfo`, "inheritsFrom");
    (u && d.push(`${u}.replicaInfo.overrides.${c}`), d.push(c));
  } else d.push(e);
  let h = new i(o, e, d, n, c);
  return (o.dataNodeSharedState.materialization.record(s), $e(o, h));
}
function te(o, e, t) {
  let r = A(e, t),
    s = Re(o, r);
  if (s) return s;
  let i = o.store.getObjectKey(t, "__class");
  if (!i) {
    let u = o.store.getObject(t);
    (g(u, () => `${r} does not exist`), g(i, () => `${r} does not have class`));
  }
  let d = F.get(i);
  g(d, () => `node ${r} has invalid class name ${i}`);
  let n = [];
  n.push(`${e}.replicaInfo.overrides.${t}`);
  let c = o.store.getObjectKey(`${e}.replicaInfo`, "inheritsFrom");
  (c && n.push(`${c}.replicaInfo.overrides.${t}`), n.push(t));
  let h = new d(o, r, n, e, t);
  return (o.dataNodeSharedState.materialization.record(i), $e(o, h));
}
function Ke(o) {
  let e = Oe.get(o.__class);
  return (g(e, () => `node ${o.id} has invalid class name ${o.__class}`), e);
}
function G(o, e) {
  (Object.defineProperty(e, "dataNodeSharedState", {
    value: o.dataNodeSharedState,
    configurable: !0,
    enumerable: !1,
  }),
    Object.setPrototypeOf(e, Ke(e)));
}
function re(o, e, t) {
  let r = t !== void 0;
  if (!t) {
    if (o.isHiddenUntilCommit(e)) return;
    let a = o.store.getObjectKey(`${e}.replicaInfo`, "master"),
      f = a
        ? {
            ownerSynthId: e,
            ownerStoreId: e,
            masterId: a,
            inheritsFromOwnerStoreId: o.store.getObjectKey(`${e}.replicaInfo`, "inheritsFrom"),
          }
        : void 0;
    t = {
      synthId: e,
      originalId: a ?? e,
      ownerStoreId: e,
      frames: f ? [f] : [],
      isOwner: f !== void 0,
    };
  }
  let { synthId: s, originalId: i, ownerStoreId: d, frames: n, isOwner: c } = t,
    h = o.store.getObjectKey(e, "__class");
  if (!h) return;
  let u = r ? void 0 : F.get(h)?.prototype?.[D];
  if (!r && !u) return;
  let m = {
    id: s,
    __class: h,
    update:
      (o.store.getLatest(i)?.update ?? 0) +
      (n.length > 0
        ? (o.store.getLatest(`${n[n.length - 1].ownerStoreId}.replicaInfo.overrides.${i}`)
            ?.update ?? 0)
        : 0),
    mutable: o.getEditedNodeFor(s) !== void 0,
    isLoaded: !0,
    get: (a) => {
      if (a === "parentid") {
        if (c) {
          let C = o.getLatestParentId(d);
          if (!C || C === T) return null;
          let b = n[n.length - 2];
          return b ? (C === b.masterId ? b.ownerSynthId : b.ownerSynthId + C) : C;
        }
        let p = o.getLatestParentId(i);
        if (!p || p === T) return null;
        let y = n[n.length - 1];
        return y ? (p === y.masterId ? y.ownerSynthId : y.ownerSynthId + p) : p;
      }
      if (a === "originalid") return n.length > 0 ? i : null;
      let f = u ?? F.get(h)?.prototype?.[D];
      if (!f || (!a.startsWith("$") && !(a in f))) return;
      if (a === "replicaInfo") return J(o.store.getObjectKey(d, a));
      let l = o.getEditedNodeFor(s);
      if (l && a in l) {
        let p = l[a];
        return p === T ? f[a] : p;
      }
      let N = R;
      a === "masks"
        ? (N = _)
        : a === "guidesX" || a === "guidesY"
          ? (N = L)
          : a === "styledText" && (N = M);
      for (let p = 0; p < n.length; p++) {
        let y = n[p],
          b = c && p === n.length - 1 ? y.masterId : s.slice(y.ownerSynthId.length),
          w = `${y.ownerStoreId}.replicaInfo.overrides.${b}`,
          x = o.store.getObjectKey(w, a);
        if (x !== void 0) return N(x);
        let O = o.store.getObjectKey(w, "_deleted");
        if (Array.isArray(O) && O.includes(a)) return;
        if (y.inheritsFromOwnerStoreId) {
          let S = `${y.inheritsFromOwnerStoreId}.replicaInfo.overrides.${b}`,
            E = o.store.getObjectKey(S, a);
          if (E !== void 0) return N(E);
          let k = o.store.getObjectKey(S, "_deleted");
          if (Array.isArray(k) && k.includes(a)) return;
        }
      }
      let v = o.store.getObjectKey(i, a);
      return N(v !== void 0 ? v : f[a]);
    },
    getSubfield: (...a) => {
      if (a.length === 0) return;
      if (a.length === 1) return m.get(a[0]);
      let f = a[0],
        l = o.getEditedNodeFor(s);
      if (l && f in l) {
        let y = l[f];
        for (let C of a.slice(1)) {
          if (!y || typeof y != "object") return;
          y = y[C];
        }
        return y;
      }
      let N = a[a.length - 1],
        v = a.slice(0, -1).join(".");
      for (let y = 0; y < n.length; y++) {
        let C = n[y],
          w = c && y === n.length - 1 ? C.masterId : s.slice(C.ownerSynthId.length),
          x = `${C.ownerStoreId}.replicaInfo.overrides.${w}`,
          O = o.store.getObjectKey(`${x}.${v}`, N);
        if (O !== void 0) return R(O);
        let S = o.store.getObjectKey(x, "_deleted");
        if (Array.isArray(S) && S.includes(f)) return;
        if (C.inheritsFromOwnerStoreId) {
          let E = `${C.inheritsFromOwnerStoreId}.replicaInfo.overrides.${w}`,
            k = o.store.getObjectKey(`${E}.${v}`, N);
          if (k !== void 0) return R(k);
          let oe = o.store.getObjectKey(E, "_deleted");
          if (Array.isArray(oe) && oe.includes(f)) return;
        }
      }
      let p = o.store.getObjectKey(`${i}.${v}`, N);
      if (p !== void 0) return R(p);
    },
    isKeySetAndNotInherited: (a) => {
      let f = o.getEditedNodeFor(s);
      if ((f && a in f) || n.length === 0) return !0;
      let l = n[n.length - 1],
        N = c ? l.masterId : s.slice(l.ownerSynthId.length),
        v = `${l.ownerStoreId}.replicaInfo.overrides.${N}`;
      if (o.store.getObjectKey(v, a) !== void 0) return !0;
      let p = o.store.getObjectKey(v, "_deleted");
      return Array.isArray(p) && p.includes(a);
    },
    keys: () => {
      let a = new Set(),
        f = o.getEditedNodeFor(s);
      if (f) for (let l of Object.keys(f)) a.add(l);
      for (let l of o.store.getLatest(e)?.keys() ?? []) a.add(l);
      for (let l = 0; l < n.length; l++) {
        let N = n[l],
          p = c && l === n.length - 1 ? N.masterId : s.slice(N.ownerSynthId.length),
          y = `${N.ownerStoreId}.replicaInfo.overrides.${p}`;
        for (let C of o.store.getLatest(y)?.keys() ?? []) a.add(C);
        if (N.inheritsFromOwnerStoreId) {
          let C = `${N.inheritsFromOwnerStoreId}.replicaInfo.overrides.${p}`;
          for (let b of o.store.getLatest(C)?.keys() ?? []) a.add(b);
        }
      }
      for (let l of o.store.getLatest(i)?.keys() ?? []) a.add(l);
      return a.values();
    },
    getLocalizationSourceGroupCache: () => o.store.getLatest(s)?.cache?.localizationSourceGroup,
    setLocalizationSourceGroupCache: (a) => {
      let f = o.store.getLatest(s);
      f && (f.cache || (f.cache = {}), (f.cache.localizationSourceGroup = a));
    },
    skipChildren: !1,
  };
  return m;
}
function K(o, e, t) {
  Object.defineProperty(o, e, {
    enumerable: !0,
    get() {
      let r = this.dataTree.getEditedNodeFor(this.id),
        s = r?.[e];
      if (r && e in r) return s === T ? this[D][e] : s;
      let i = this.dataTree.canvasTree?.get(this.id);
      if (i) return i[e];
      for (let d of this.sourceIds)
        if (d.includes(".")) {
          if (((s = this.dataTree.store.getObjectKey(d, e)), s !== void 0)) return t.call(this, s);
          let n = this.dataTree.store.getObjectKey(d, "_deleted");
          if (Array.isArray(n) && n.includes(e)) return;
        } else if (((s = this.dataTree.store.getObjectKey(d, e)), s !== void 0))
          return t.call(this, s);
      return this[D][e];
    },
    set(r) {
      this.dataTree.getOrCreateEditedNodeFor(this.id)[e] = r;
    },
  });
}
function We(o, e, t) {
  for (let r of e) {
    if (o.hasDefinedObjectKey(r, t)) return !0;
    if (r.includes(".")) {
      let s = o.getObjectKey(r, "_deleted");
      if (Array.isArray(s) && s.includes(t)) return !1;
    }
  }
  return !1;
}
var ee = class extends X {
  container;
  constructor(e) {
    (super(), Object.defineProperty(this, "container", { value: e, enumerable: !1 }));
  }
  getEditedChildren() {
    return this.container.dataTree.getEditedChildrenFor(this.container.id);
  }
  getChildIds() {
    let e = this.container.dataTree,
      t = e.store.getChildrenIds(this.container.originalId ?? this.container.id);
    if (!e.hasHiddenNodes) return t;
    let r = this.container.ownerId;
    return t.filter((s) => {
      let i = this.container.originalId && r ? A(r, s) : s;
      return !e.isHiddenUntilCommit(i);
    });
  }
  get length() {
    let e = this.getEditedChildren();
    return e ? e.length : this.getChildIds().length;
  }
  at(e) {
    let t = this.getEditedChildren();
    if (t) return t.at(e);
    let r = this.getChildIds().at(e);
    if (r) return I(this.container, r);
  }
  indexOf(e) {
    let t = this.getEditedChildren();
    if (t) return t.indexOf(e);
    let r = this.getChildIds(),
      s = this.container.ownerId;
    return this.container.originalId && s
      ? r.findIndex((i) => A(s, i) === e.id)
      : r.findIndex((i) => i === e.id);
  }
  some(e) {
    let t = this.getEditedChildren();
    if (t) return t.some(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let i = r[s],
        d = I(this.container, i);
      if (e(d, s)) return !0;
    }
    return !1;
  }
  every(e) {
    let t = this.getEditedChildren();
    if (t) return t.every(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let i = r[s],
        d = I(this.container, i);
      if (!e(d, s)) return !1;
    }
    return !0;
  }
  forEach(e) {
    let t = this.getEditedChildren();
    if (t) return t.forEach(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let i = r[s],
        d = I(this.container, i);
      e(d, s);
    }
  }
  map(e) {
    let t = this.getEditedChildren();
    if (t) return t.map(e);
    let r = this.getChildIds(),
      s = Array(r.length);
    for (let i = 0; i < r.length; i++) {
      let d = r[i],
        n = I(this.container, d);
      s[i] = e(n, i);
    }
    return s;
  }
  reduce(e, t) {
    let r = this.getEditedChildren();
    if (r) return r.reduce(e, t);
    let s = this.getChildIds(),
      i = t;
    for (let d = 0; d < s.length; d++) {
      let n = s[d],
        c = I(this.container, n);
      i = e(i, c, d);
    }
    return i;
  }
  filter(e) {
    let t = this.getEditedChildren();
    if (t) return t.filter(e);
    let r = this.getChildIds(),
      s = [];
    for (let i = 0; i < r.length; i++) {
      let d = r[i],
        n = I(this.container, d);
      e(n, i) && s.push(n);
    }
    return s;
  }
  sort() {
    throw new Error("Unsupported");
  }
  find(e) {
    let t = this.findIndex(e);
    if (t !== -1) return this.at(t);
  }
  findIndex(e) {
    let t = this.getEditedChildren();
    if (t) return t.findIndex(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let i = r[s],
        d = I(this.container, i);
      if (e(d, s)) return s;
    }
    return -1;
  }
  findLast(e) {
    let t = this.findLastIndex(e);
    if (t !== -1) return this.at(t);
  }
  findLastIndex(e) {
    let t = this.getEditedChildren();
    if (t) return t.findLastIndex(e);
    let r = this.getChildIds();
    for (let s = r.length - 1; s >= 0; s--) {
      let i = r[s],
        d = I(this.container, i);
      if (e(d, s)) return s;
    }
    return -1;
  }
  slice(e, t) {
    let r = this.getEditedChildren();
    if (r) return r.slice(e, t);
    let s = this.getChildIds().slice(e, t),
      i = Array(s.length);
    for (let d = 0; d < s.length; d++) {
      let n = s[d],
        c = I(this.container, n);
      i[d] = c;
    }
    return i;
  }
  splice() {
    throw new Error("Unsupported");
  }
  push() {
    throw new Error("Unsupported");
  }
  toArray() {
    let e = this.getEditedChildren();
    if (e) return e.slice();
    let t = this.getChildIds(),
      r = Array(t.length);
    for (let s = 0; s < t.length; s++) {
      let i = t[s],
        d = I(this.container, i);
      r[s] = d;
    }
    return r;
  }
  *[Symbol.iterator]() {
    let e = this.getEditedChildren();
    if (e) return yield* e;
    let t = this.getChildIds();
    for (let r = 0; r < t.length; r++) {
      let s = t[r];
      yield I(this.container, s);
    }
  }
};
function Ae() {
  if (F.size > 0) return;
  let o = be();
  g(
    o.type === "prototype.dynamicOverrides" || o.type === "crdt.store",
    () => `Need prototype.dynamicOverrides driver, got: ${o.type}`
  );
  let e = Ne();
  for (let t of e) {
    class r extends t {
      get dataTree() {
        return this.dataNodeSharedState.dataTree;
      }
      set(n, c, h = !1, u = !0) {
        return this.dataTree.processNodeEdit(
          () => (super.set(n, this.dataTree.getCanvasTreeProxy(), h, u), this)
        );
      }
      setIgnoringReplica(n, c) {
        return this.dataTree.processNodeEdit(
          () => (super.setIgnoringReplica(n, this.dataTree.getCanvasTreeProxy()), this)
        );
      }
      assign(...n) {
        return this.dataTree.processNodeEdit(
          () => (super.assign(...n, { cache: this.cache, treeState: this.treeState }), this)
        );
      }
      setProp(n, c) {
        this.dataTree.processNodeEdit(() => {
          super.setProp(n, c);
        });
      }
      resetToDefault(n) {
        this.dataTree.processNodeEdit(() => {
          super.resetToDefault(n);
        });
      }
      deleteProp(n) {
        this.dataTree.processNodeEdit(() => {
          super.deleteProp(n);
        });
      }
      get [j]() {
        return !0;
      }
      tree() {
        return this.dataTree.getCanvasTreeProxy();
      }
      asDraft() {
        return (this.dataTree.getNodeAsDraft(this), this);
      }
      cloneEmpty() {
        return new t();
      }
    }
    class s {
      constructor(n, c, h, u, m) {
        this.id = c;
        (this.setPrivateProperty("dataNodeSharedState", n.dataNodeSharedState),
          this.setPrivateProperty("sourceIds", h),
          this.setPrivateProperty("ownerId", u),
          this.setPrivateProperty("originalId", m));
        for (let a of h) {
          let f = n.store.getObjectKeys(a, ke);
          for (let l of f) l in this || (We(n.store, h, l) && this.createControlPropForKey(l));
        }
      }
      id;
      get dataTree() {
        return this.dataNodeSharedState.dataTree;
      }
      get treeState() {
        let n = this.$$treeState$$;
        if (n) return n;
        let c = new this[z].treeStateClass();
        return (this.setPrivateProperty("$$treeState$$", c), c);
      }
      set(n, c, h = !1, u = !0) {
        return this.dataTree.processNodeEdit(
          () => (t.prototype.set.call(this, n, this.dataTree.getCanvasTreeProxy(), h, u), this)
        );
      }
      setIgnoringReplica(n, c) {
        return this.dataTree.processNodeEdit(
          () => (
            t.prototype.setIgnoringReplica.call(this, n, this.dataTree.getCanvasTreeProxy()),
            this
          )
        );
      }
      createControlPropForKey(n) {
        n in this ||
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            get() {
              let c = this.dataTree.getEditedNodeFor(this.id);
              if (c && n in c) {
                let h = c[n];
                return h === T ? void 0 : h;
              }
              for (let h of this.sourceIds)
                if (h.includes(".")) {
                  let u = this.dataTree.store.getObjectKey(h, n);
                  if (u !== void 0) return u;
                  let m = this.dataTree.store.getObjectKey(h, "_deleted");
                  if (Array.isArray(m) && m.includes(n)) return;
                } else {
                  let u = this.dataTree.store.getObjectKey(h, n);
                  if (u !== void 0) return u;
                }
            },
            set(c) {
              this.dataTree.getOrCreateEditedNodeFor(this.id)[n] = c;
            },
          });
      }
      get cache() {
        if (!this.$$cache$$) {
          let n =
            this.dataTree.getPersistedNodeCache(this.id) ??
            this.dataTree.setPersistedNodeCache(this.id, new this[z].cacheClass());
          (this.setPrivateProperty("$$cache$$", n),
            this.ownerId && this.ownerId !== this.id && (n.replicaAncestorId = this.ownerId));
          let c = this.id,
            { store: h } = this.dataTree;
          {
            let u = {
              localizationSourceOwnRevision: 0,
              localizationSourceRevision: 0,
              localizationTranslationOwnRevision: 0,
              localizationTranslationRevision: 0,
              localizationSourceGroup: void 0,
            };
            for (let m in u) {
              let a = u[m];
              Object.defineProperty(n, m, {
                enumerable: !0,
                configurable: !0,
                get() {
                  return h.getLatest(c)?.cache?.[m] ?? a;
                },
                set(f) {
                  let l = h.getLatest(c);
                  l && (l.cache || (l.cache = {}), (l.cache[m] = f));
                },
              });
            }
          }
          return n;
        }
        return this.$$cache$$;
      }
      get loaded() {
        return this;
      }
      isLoaded() {
        return !0;
      }
      getDataOverrides() {
        let n = {};
        for (let m of ["id", "__class", "parentid", "originalid"]) m in this && (n[m] = this[m]);
        let c = this.dataTree.store.getObjectWithShallowChildren(this.id, 0),
          h = c ? [this.id] : this.sourceIds;
        for (let m = h.length - 1; m >= 0; m--) {
          let a = h[m],
            f = a === this.id ? c : this.dataTree.store.getObjectWithShallowChildren(a, 0);
          if (!f) continue;
          for (let N in f) {
            if (N === "_deleted" || !(N in this)) continue;
            let v = this[N];
            n[N] = v;
          }
          let l = f._deleted;
          if (Array.isArray(l)) for (let N of l) N in f || (n[N] = void 0);
        }
        let u = this.dataTree.getEditedNodeFor(this.id);
        if (u) for (let m in u) n[m] = u[m] === T ? this[m] : u[m];
        return n;
      }
      raw(n) {
        let c = Object.assign({}, this[D], {
          cache: this.cache,
          treeState: this.treeState,
          update: this.update,
        });
        for (let h in this) c[h] = this[h];
        return ((c.originalid ??= null), Object.assign(c, n));
      }
      tree() {
        return this.dataTree.getCanvasTreeProxy();
      }
      get update() {
        return _e(this.dataTree, this);
      }
      cloneEmpty() {
        return new t();
      }
      *walk() {
        let n = [this];
        for (; n.length > 0;) {
          let c = n.pop();
          if ((g(c), !this.dataTree.isDataNode(c))) {
            yield* c.walk();
            continue;
          }
          yield c;
          let h = c,
            u = this.dataTree.getEditedChildrenFor(h.id);
          if (u) {
            for (let a = u.length - 1; a >= 0; --a) n.push(u[a]);
            continue;
          }
          let m = this.dataTree.store.getChildrenIds(h.originalId ?? h.id);
          if (this.dataTree.hasHiddenNodes) {
            let a = h.ownerId;
            m = m.filter((f) => {
              let l = h.originalId && a ? A(a, f) : f;
              return !this.dataTree.isHiddenUntilCommit(l);
            });
          }
          for (let a = m.length - 1; a >= 0; --a) {
            let f = m[a];
            n.push(I(h, f));
          }
        }
      }
      *fastWalk({ useSortedChildren: n = !0 } = {}) {
        let h = [this.id],
          u = [];
        for (; h.length > 0;) {
          let m = h.pop();
          if (m === -1) {
            u.pop();
            continue;
          }
          let a = m;
          g(a, "stackId must be set");
          let f = u.length > 0 ? u[u.length - 1] : void 0,
            l = this.dataTree.store.getObjectKey(`${a}.replicaInfo`, "master"),
            N,
            v,
            p;
          if (l) {
            ((N = f ? f.ownerSynthId + a : a), (v = l));
            let S = this.dataTree.store.getObjectKey(`${a}.replicaInfo`, "inheritsFrom");
            p = { ownerSynthId: N, ownerStoreId: a, masterId: l, inheritsFromOwnerStoreId: S };
          } else f ? ((N = f.ownerSynthId + a), (v = a)) : ((N = a), (v = a));
          let y = p ? [...u, p] : [...u],
            C = p !== void 0,
            b = a,
            w = re(this.dataTree, a, {
              synthId: N,
              originalId: v,
              ownerStoreId: b,
              frames: y,
              isOwner: C,
            });
          if ((g(w), p && (u.push(p), h.push(-1)), yield w, w.skipChildren)) {
            p && (g(h.pop() === -1), u.pop());
            continue;
          }
          let x = l ?? a,
            O = n
              ? this.dataTree.store.getChildrenIds(x)
              : this.dataTree.hierarchy.getCachedChildrenIds(x);
          for (let S = O.length - 1; S >= 0; S--) {
            let E = O[S];
            h.push(E);
          }
        }
      }
      setProp(n, c) {
        (this.asDraft(),
          n.startsWith("$")
            ? ((this.dataTree.getOrCreateEditedNodeFor(this.id)[n] = c),
              this.createControlPropForKey(n))
            : (this[n] = c));
      }
      resetToDefault(n) {
        if ((this.asDraft(), this[W].includes(n))) {
          this[n] = void 0;
          return;
        }
        ((this.dataTree.getOrCreateEditedNodeFor(this.id)[n] = T),
          n.startsWith("$") && delete this[n]);
      }
      hasProp(n) {
        return n in this;
      }
      deleteProp(n) {
        (g(n.startsWith("$"), "Cannot call deleteProp on non dynamic prop"),
          (this.dataTree.getOrCreateEditedNodeFor(this.id)[n] = void 0),
          delete this[n]);
      }
      assign(...n) {
        let c = this.dataTree.getOrCreateEditedNodeFor(this.id),
          h = new Set(),
          u = {},
          m,
          a = !1;
        for (let l of n) {
          if (!l || typeof l != "object") continue;
          let N = Object.entries(l);
          if (l instanceof ce) {
            for (let p in this.getDataOverrides()) p === "parentid" || Y.includes(p) || h.add(p);
            for (let p in u) (h.add(p), delete u[p]);
            let v = { ...l.getDataOverrides() };
            (this.dataTree.isDataNode(l) && Object.assign(v, this.dataTree.getEditedNodeFor(l.id)),
              (N = Object.entries(v)));
          }
          for (let [v, p] of N) {
            if (v === "children") {
              ((m = p), (a = !0));
              continue;
            }
            v === "parentid" ||
              Y.includes(v) ||
              (p === T ? (delete u[v], h.add(v)) : ((u[v] = p), h.delete(v)));
          }
        }
        for (let l of h) c[l] = T;
        Object.assign(c, u);
        let f = a ? this.dataTree.getEditedChildrenFor(this.id) : void 0;
        if (f && m instanceof X) {
          f.length = 0;
          for (let l of m) f.push(l);
        }
        for (let l of n)
          if (!(!l || typeof l != "object"))
            for (let N of Object.keys(l)) N.startsWith("$") && this.createControlPropForKey(N);
      }
      get [j]() {
        return !0;
      }
      setPrivateProperty(n, c) {
        Object.defineProperty(this, n, { value: c, enumerable: !1 });
      }
      asDraft() {
        return this.dataTree.getNodeAsDraft(this);
      }
    }
    let i = t.prototype;
    Object.setPrototypeOf(s.prototype, i);
    for (let d of i[ye])
      d === "originalid"
        ? Object.defineProperty(s.prototype, d, {
            enumerable: !0,
            get() {
              return this.originalId;
            },
            set(n) {
              this.dataTree.getOrCreateEditedNodeFor(this.id)[d] = n;
            },
          })
        : ["isMaster", "isExternalMaster"].includes(d)
          ? Object.defineProperty(s.prototype, d, {
              enumerable: !0,
              get() {
                let n = this.dataTree.getEditedNodeFor(this.id),
                  c = n?.[d];
                return n && d in n
                  ? c === T
                    ? this[D][d]
                    : c
                  : ((c = this.dataTree.store.getObjectKey(this.id, d)),
                    c !== void 0 ? c : this[D][d]);
              },
              set(n) {
                this.dataTree.getOrCreateEditedNodeFor(this.id)[d] = n;
              },
            })
          : d === "parentid"
            ? Object.defineProperty(s.prototype, d, {
                enumerable: !0,
                get() {
                  let n = this.ownerId === this.id ? this.id : (this.originalId ?? this.id),
                    c = this.dataTree.getEditedNodeFor(this.id),
                    h = c && "parentid" in c ? c.parentid : this.dataTree.getLatestParentId(n);
                  if (typeof h == "string") {
                    if (this.ownerId === this.id) return h;
                    if (this.originalId && this.ownerId) {
                      let u = $(this.dataTree, this.ownerId);
                      return h === u.originalId ? this.ownerId : A(u.id, h);
                    }
                    return h;
                  }
                },
              })
            : d === "replicaInfo"
              ? Object.defineProperty(s.prototype, d, {
                  enumerable: !0,
                  get() {
                    let n = this.dataTree.getEditedNodeFor(this.id);
                    if (n && d in n) {
                      let u = n[d];
                      return u === T ? this[D][d] : u;
                    }
                    let c = this.$$revivedReplicaInfo$$;
                    if (c) return c;
                    let h = this.dataTree.store.getObjectKey(this.id, d);
                    if (h !== void 0) {
                      let u = J(h);
                      return (u && this.setPrivateProperty("$$revivedReplicaInfo$$", u), u);
                    }
                    return this[D][d];
                  },
                  set(n) {
                    this.dataTree.getOrCreateEditedNodeFor(this.id)[d] = n;
                  },
                })
              : d === "masks"
                ? K(s.prototype, d, _)
                : d === "guidesX" || d === "guidesY"
                  ? K(s.prototype, d, L)
                  : d === "styledText"
                    ? K(
                        s.prototype,
                        d,
                        (n) => (g(typeof n == "string", "Expected serialized styled text"), M(n))
                      )
                    : d === "html" && i.__class === "RichTextNode"
                      ? K(s.prototype, d, function (n) {
                          return ue(this.id, R(n));
                        })
                      : K(s.prototype, d, R);
    (i[z].hasChildren &&
      Object.defineProperty(s.prototype, "children", {
        enumerable: !0,
        get() {
          if (this.$$children$$) return this.$$children$$;
          let d = new ee(this);
          return (this.setPrivateProperty("$$children$$", d), d);
        },
      }),
      Oe.set(i.__class, r.prototype),
      F.set(i.__class, s));
  }
}
function I(o, e) {
  return o.ownerId ? te(o.dataTree, o.ownerId, e) : $(o.dataTree, e);
}
function se(o) {
  g(typeof o.__class == "string", () => `${String(o.id)} is missing a __class`);
  let e = pe(o.__class);
  g(e, () => `constructor not found for __class: ${String(o.__class)}`);
  let t = { ...o };
  return (
    de(t.styledText) && (t.styledText = M(t.styledText)),
    t.masks !== void 0 && (t.masks = _(t.masks)),
    t.guidesX !== void 0 && (t.guidesX = L(Array.isArray(t.guidesX) ? t.guidesX : [])),
    t.guidesY !== void 0 && (t.guidesY = L(Array.isArray(t.guidesY) ? t.guidesY : [])),
    new e({ id: o.id, ...t })
  );
}
var ie = class {
    countsByClass = new Map();
    count = 0;
    countAtLoad = void 0;
    record(e) {
      ((this.count += 1), this.countsByClass.set(e, (this.countsByClass.get(e) ?? 0) + 1));
    }
    markLoadComplete() {
      this.countAtLoad ??= this.count;
    }
  },
  ne = class {
    constructor(e, t = new ie()) {
      this.dataTree = e;
      this.materialization = t;
    }
    dataTree;
    materialization;
    nodeProxyCache = new Map();
  },
  Le = class o {
    constructor(e, t, r, s, i) {
      this.store = e;
      this.treeQueryContext = r;
      this.persistedCaches = s;
      ((this.canvasTree = t),
        (this.seq = e.seq),
        (this.storeLength = e.length),
        (this.hierarchy = e.getHierarchy()),
        (this.dataNodeSharedState = new ne(this, i)),
        Ae());
    }
    store;
    treeQueryContext;
    persistedCaches;
    insertedNodes = new Map();
    removedNodes = new Set();
    editedChildren = new Map();
    editedNodes = new Map();
    committedTree;
    draftedNodes = new Set();
    excludedFromGet = new Set();
    hierarchy;
    seq;
    storeLength;
    canvasTree;
    dataNodeSharedState;
    toJS() {
      let e = this.hierarchy.getRootId();
      g(e, "DataTree root does not exist");
      let t = this.store.getObject(e);
      return (g(t, "DataTree root does not exist"), { version: Te, root: t });
    }
    equals(e) {
      return e instanceof o
        ? this.canvasTree || e.canvasTree
          ? !!(this.canvasTree && this.canvasTree === e.canvasTree && this.seq === e.seq)
          : this === e
        : !1;
    }
    assertWritable() {
      g(this.canvasTree, "This DataTree is readonly because no canvasTree was provided.");
    }
    get lineage() {
      let e = this.canvasTree?.lineage;
      return (g(e, "This DataTree is readonly because no canvasTree was provided."), e);
    }
    processNodeEdit(e) {
      let t = this.lineage.editHooks;
      t?.onTreeEditStart();
      try {
        return e();
      } catch (r) {
        throw (t?.onTreeEditError(r), r);
      } finally {
        t?.onTreeEditEnd();
      }
    }
    currentCanvasTree() {
      return (this.assertWritable(), this.lineage.latestTree);
    }
    getLinks(e) {
      let t = this.currentCanvasTree();
      return t.getLinks(t.getLoaded(e.id) ?? e);
    }
    get root() {
      let e = this.canvasTree?.root.id ?? this.hierarchy.getRootId();
      g(e, "DataTree root does not exist");
      let t = this.get(e);
      return (g(t, "Root node must exist"), t);
    }
    get editClosed() {
      return this.canvasTree?.latestTree().editClosed ?? !0;
    }
    get isViewOnly() {
      return this.canvasTree?.latestTree().isViewOnly ?? !0;
    }
    get inEditor() {
      return this.canvasTree?.latestTree().inEditor ?? !1;
    }
    latestTree() {
      return (
        this.assertWritable(),
        new o(
          this.store,
          this.currentCanvasTree(),
          this.treeQueryContext,
          this.persistedCaches
        ).getCanvasTreeProxy()
      );
    }
    getReplicaAwareChecksum(e) {
      if (!(this.hasUncommittedChanges() || this.canvasTree?.hasUncommittedChanges()))
        return this.store.getReplicaAwareChecksum(e);
    }
    stats() {
      let e = this.dataNodeSharedState,
        t = 0,
        r = 0;
      for (let s of this.nodeProxyCache.values()) {
        let i = s.deref();
        i && ((t += 1), this.isDataNode(i) && i.$$treeState$$?.draft === i && (r += 1));
      }
      return {
        materializedDuringLoad: e.materialization.countAtLoad,
        materializedTotal: e.materialization.count,
        materializedByClass: Object.fromEntries(
          [...e.materialization.countsByClass].sort(([, s], [, i]) => i - s)
        ),
        cachedNodeProxies: t,
        draftNodes: r,
        editedNodes: this.editedNodes.size,
        insertedNodes: this.insertedNodes.size,
        removedNodes: this.removedNodes.size,
        editedChildLists: this.editedChildren.size,
        storeNodes: this.hierarchy.sizeWithoutReplicas(),
      };
    }
    hasUncommittedChanges() {
      return this.removedNodes.size > 0 || this.insertedNodes.size > 0 || this.editedNodes.size > 0;
    }
    recordRemove(e) {
      this.canvasTree?.recordRemove(e);
    }
    recordInsert(e) {
      this.canvasTree?.recordInsert(e);
    }
    recordMove(e) {
      this.canvasTree?.recordMove(e);
    }
    getOrCreateNodeById(e) {
      return $(this, e);
    }
    getAnyNode(e) {
      return !e || this.isHiddenUntilCommit(e)
        ? null
        : (this.get(e) ?? (this.store.has(e) ? $(this, e) : null));
    }
    getAccessor(e) {
      if (!e) return;
      let t = this.insertedNodes.get(e);
      return t ? he(t) : re(this, e);
    }
    pushChangesForNode(e, t, r) {
      let s = r ? this.store.getObjectWithShallowChildren(t, 0) : this.store.getObject(t);
      g(s, () => `editedNode id is missing from the store: ${t}`);
      let i = se(s),
        d = null;
      if (r) {
        let n = { ...r };
        for (let c in n) n[c] === T && (n[c] = void 0);
        d = se({ ...s, ...n, __class: s.__class });
      }
      Z(e, i, d, !0);
    }
    computeReversibleChanges() {
      this.assertWritable();
      let e = [];
      for (let [a, f] of this.insertedNodes) {
        if (V(f)) continue;
        let l = null;
        if (this.hierarchy.inTree(f.id)) {
          let N = this.store.getObject(f.id);
          (g(N, () => `inserted node id is missing from the store: ${f.id}`), (l = se(N)));
        }
        Z(e, l, f, !0);
      }
      let t = [],
        r = new Set(this.removedNodes),
        s = this.hierarchy.getRootId(),
        i = (a) => {
          for (let f of this.hierarchy.getChildrenIds(a)) i(f);
          r.has(a) && (t.push(a), r.delete(a));
        };
      s && r.size > 0 && i(s);
      for (let a of r) t.push(a);
      let d = new Set(t),
        n = new Map();
      for (let a of t) {
        let l = this.store.getObject(a)?.replicaInfo,
          N = typeof l?.master == "string" ? l.master : void 0;
        if (!N || !d.has(N)) continue;
        let v = n.get(N) ?? [];
        (v.push(a), n.set(N, v));
      }
      let c = [],
        h = new Set(),
        u = new Set(),
        m = (a) => {
          if (!h.has(a) && !u.has(a)) {
            u.add(a);
            for (let f of n.get(a) ?? []) m(f);
            (u.delete(a), h.add(a), c.push(a));
          }
        };
      for (let a of t) m(a);
      for (let a of c) this.pushChangesForNode(e, a, null);
      for (let [a, f] of this.editedNodes) {
        let l = this.get(a);
        if (!l && this.store.has(a)) {
          this.pushChangesForNode(e, a, f);
          continue;
        }
        (g(l, () => `node not in data tree, id: ${a}`),
          !(l.originalid && !l.replicaInfo) && this.pushChangesForNode(e, a, f));
      }
      return e;
    }
    prepareCommit(e) {
      (this.assertWritable(),
        this.moveEditsToRootOrShallowScopes(),
        this.markScopesAsDraft(),
        this.markReplicasAsDraft());
      for (let t of this.insertedNodes.values()) ae(t) && le.updateOverrides(t.asDraft());
      for (let [t, r] of this.editedNodes) this.get(t)?.preCommit(this.getCanvasTreeProxy(), e);
      this.updateLocalizationRevisions();
    }
    finalizeCommit() {
      this.assertWritable();
      let e = this.computeReversibleChanges();
      (this.editedNodes.clear(),
        this.removedNodes.clear(),
        this.editedChildren.clear(),
        this.insertedNodes.clear(),
        this.excludedFromGet.clear());
      for (let t of this.draftedNodes)
        t.treeState.draft === t &&
          ((t.treeState.draft = null),
          t.$$cache$$ && (t.$$cache$$.canPatchText = !1),
          (t.mutable = !1));
      return (this.draftedNodes.clear(), e);
    }
    updateLocalizationRevisions() {
      let e = new o(this.store),
        t = new Set();
      for (let r of this.insertedNodes.keys()) t.add(r);
      for (let r of this.removedNodes) t.add(r);
      for (let r of this.editedNodes.keys()) t.add(r);
      Se({
        changedNodeIds: t,
        getPreviousNode: (r) => e.get(r) ?? void 0,
        getLatestNode: (r) => this.get(r) ?? void 0,
      });
    }
    moveEditsToRootOrShallowScopes() {
      if ((this.assertWritable(), !this.canvasTree)) return;
      let e = new Set();
      for (let t of this.editedNodes.keys()) {
        if (t === this.canvasTree.root.id) {
          let i = this.editedNodes.get(t);
          (i && this.applyEditsToCanvasNode(this.canvasTree.root, i), e.add(t));
          continue;
        }
        let r = this.canvasTree.get(t);
        if (!r || !P(r) || r.isLoaded()) continue;
        let s = this.editedNodes.get(t);
        (s && this.applyEditsToCanvasNode(r, s), e.add(t));
      }
      for (let t of e) this.editedNodes.delete(t);
    }
    applyEditsToCanvasNode(e, t) {
      let r = {},
        s = [];
      for (let i in t) t[i] === T ? s.push(i) : (r[i] = t[i]);
      if ((e.set(r), s.length > 0)) {
        let i = e.asDraft(this.canvasTree);
        for (let d of s) i.resetToDefault(d);
      }
    }
    markScopesAsDraft() {
      this.assertWritable();
      let e = new Map(),
        t = new Set(),
        r = (s) => {
          let i = this.get(s),
            d = we(this.store, i?.originalid ?? s, e);
          if (!d || t.has(d)) return;
          let n = this.canvasTree?.get(d) ?? this.get(d);
          n && (t.add(d), n.asDraft(this.canvasTree ?? this.getCanvasTreeProxy()));
        };
      for (let [s, i] of this.insertedNodes)
        (g(i.parentid, "node must have a parent id"), r(i.parentid));
      for (let s of this.removedNodes) r(s);
      for (let s of this.editedNodes.keys()) r(s);
    }
    markReplicasAsDraft() {
      this.assertWritable();
      let e = (t) => {
        t.asDraft();
      };
      for (let t of this.removedNodes) {
        if (this.canvasTree?.has(t)) continue;
        let s = this.hierarchy.getNodeData(t)?.inMaster;
        if (!s) continue;
        let i = this.get(s);
        if (i) {
          e(i);
          for (let d of this.store.getIndex(B).iterateReplicaOwners(s)) {
            let n = this.get(d);
            n && (this.editedNodes.has(d) || (this.editedNodes.set(d, {}), e(n)));
          }
        }
      }
      for (let t of this.editedNodes.keys()) {
        if (
          this.canvasTree?.has(t) ||
          (!this.insertedNodes.has(t) && this.hierarchy.getNodeData(t)?.inTree === !1) ||
          this.isHiddenUntilCommit(t)
        )
          continue;
        let r = this.get(t);
        if ((g(r, () => `node not in data tree, id: ${t}`), !(!!r.originalid && !r.replicaInfo)))
          continue;
        let i = this.get(r.parentid);
        for (; i && !i.replicaInfo;) i = this.get(i.parentid);
        if (!i) {
          this.editedNodes.delete(t);
          continue;
        }
        this.editedNodes.has(i.id) || (this.editedNodes.set(i.id, {}), e(i));
      }
    }
    treeProxy = null;
    get nodeProxyCache() {
      return this.dataNodeSharedState.nodeProxyCache;
    }
    getCachedNodeProxy(e) {
      return this.nodeProxyCache.get(e)?.deref();
    }
    cacheNodeProxy(e) {
      this.nodeProxyCache.set(e.id, new WeakRef(e));
    }
    getCanvasTreeProxy() {
      return (
        this.treeProxy ||
          ((this.treeProxy = xe(this)),
          this.treeProxy.setService("treeQueryContext", this.treeQueryContext)),
        this.treeProxy
      );
    }
    getEditedNodeFor(e) {
      return this.editedNodes.get(e);
    }
    getLatestParentId(e) {
      let t = this.getEditedNodeFor(e);
      return t && "parentid" in t
        ? typeof t.parentid == "string"
          ? t.parentid
          : void 0
        : this.store.getParentId(e);
    }
    getOrCreateEditedNodeFor(e) {
      this.assertWritable();
      let t = this.get(e);
      t && this.getNodeAsDraft(t);
      let r = this.editedNodes.get(e);
      return (r || ((r = {}), this.editedNodes.set(e, r)), r);
    }
    getEditedChildrenFor(e) {
      return this.editedChildren.get(e);
    }
    isDataNode(e) {
      return e ? !!e[j] : !1;
    }
    getScopeNodeFor(e) {
      if (!e) return null;
      for (; e;) {
        if (P(e)) return e;
        e = this.get(e.parentid);
      }
      return null;
    }
    getParent(e) {
      if (!e) return null;
      let t = this.hierarchy.getParentId(e);
      return t === void 0 || t === T ? null : this.get(t);
    }
    isHiddenUntilCommit(e) {
      if (this.removedNodes.has(e)) return !0;
      let t = this.excludedFromGet.has(e);
      if (this.removedNodes.size === 0 && !t) return !1;
      let r = this.hierarchy.getLatestReplicaChild(e);
      if (r && this.removedNodes.has(r[2])) return !0;
      if (t) {
        let s = r?.[0] ?? e;
        if (!this.canvasTree?.has(s) && !this.insertedNodes.has(s)) return !0;
      }
      return !1;
    }
    get hasHiddenNodes() {
      return this.removedNodes.size > 0 || this.excludedFromGet.size > 0;
    }
    insertReplicaChild(e, t) {
      if (
        (this.assertWritable(),
        g(e.parentid === t, "Parentid must have been set correctly"),
        !this.isDataNode(e))
      )
        for (let s of e.walk())
          (g(V(s), () => `Only replica children can be inserted this way: ${s.id}`),
            G(this, s),
            this.insertedNodes.set(s.id, s));
      let r = this.getOrMaterializeEditedChildren(t);
      r.some((s) => s.id === e.id) || r.push(e);
    }
    removeReplicaChild(e) {
      this.assertWritable();
      for (let s of e.walk())
        (this.insertedNodes.delete(s.id),
          this.editedNodes.delete(s.id),
          this.editedChildren.delete(s.id));
      let t = e.parentid ? this.editedChildren.get(e.parentid) : void 0,
        r = t?.findIndex((s) => s.id === e.id) ?? -1;
      r !== -1 && t?.splice(r, 1);
    }
    get(e) {
      if (!e || this.isHiddenUntilCommit(e)) return null;
      if (this.insertedNodes.has(e)) return this.insertedNodes.get(e) ?? null;
      let t = this.getCachedNodeProxy(e);
      if (t) return t;
      if (!this.hierarchy.inTree(e) && !this.canvasTree?.has(e)) {
        let r = this.hierarchy.getLatestReplicaChild(e);
        if (!r) return (this.nodeProxyCache.delete(e), null);
        let [s, , i] = r;
        return te(this, s, i);
      }
      return $(this, e);
    }
    getCommittedNode(e) {
      let t = Ee(this.store),
        r = this.committedTree;
      return (
        (!r || r.tree.seq !== this.store.seq || r.storeChainLength !== t) &&
          ((r = { tree: new o(this.store), storeChainLength: t }), (this.committedTree = r)),
        r.tree.get(e)
      );
    }
    has(e) {
      return !e || this.isHiddenUntilCommit(e)
        ? !1
        : this.insertedNodes.has(e) || this.hierarchy.inTree(e) || this.canvasTree?.has(e)
          ? !0
          : this.hierarchy.getLatestReplicaChild(e) !== void 0;
    }
    hasNodeAnywhere(e) {
      return e
        ? this.insertedNodes.has(e) || this.canvasTree?.hasNodeAnywhere(e)
          ? !0
          : this.store.has(e)
        : !1;
    }
    getNodeWithTrait(e, t) {
      let r = this.get(e);
      return !r || !t(r) ? null : r;
    }
    getNodesWithTrait(e, t) {
      let r = [];
      for (let s of e) {
        let i = this.get(s);
        !i || !t(i) || r.push(i);
      }
      return r;
    }
    getNode(e) {
      return this.get(e);
    }
    getNodeAsDraft(e) {
      if ((this.assertWritable(), this.canvasTree && !this.isDataNode(e)))
        return this.canvasTree.getNodeAsDraft(e);
      let t = this.get(e.id);
      if (
        (g(t, "Node must exist in the data tree"),
        g(this.isDataNode(t), "DataTree node must use a DataTree node implementation"),
        t.treeState.draft === t)
      )
        return t;
      ((t.treeState.draft = t), (t.mutable = !0), this.draftedNodes.add(t));
      let r = this.get(t.parentid);
      r && this.getNodeAsDraft(r);
      for (let s of this.store.getIndex(B).iterateReplicaOwners(t.id)) {
        let i = this.get(s);
        i && this.getNodeAsDraft(i);
      }
      if (t.ownerId === t.id && t.originalId)
        for (let s of this.store.getIndex(B).iterateReplicaOwners(t.originalId)) {
          if (this.store.getObjectKey(`${s}.replicaInfo`, "inheritsFrom") !== t.id) continue;
          let i = this.get(s);
          i && this.getNodeAsDraft(i);
        }
      return t;
    }
    isGroundNode(e) {
      let t = this.get(e.parentid);
      return !t || P(e) ? !1 : P(t);
    }
    insertChildrenRecursive(e) {
      if ((this.assertWritable(), e.children))
        for (let t of e.children)
          (t.setProp("parentid", e.id),
            G(this, t),
            this.removedNodes.delete(t.id),
            this.insertedNodes.set(t.id, t),
            this.recordInsert({ node: t, toParent: e.id, toPosition: -1 }),
            this.insertChildrenRecursive(t));
    }
    isLoadedInCanvasTree(e) {
      let t = this.canvasTree;
      if (!t?.has(e)) return !1;
      let r = t.get(e);
      return !P(r) || r.isLoaded();
    }
    insertNode(e, t, r, s) {
      if (
        (this.assertWritable(),
        (t = t ?? this.root.id),
        this.canvasTree && this.isLoadedInCanvasTree(t))
      )
        return (
          g(!this.isDataNode(e), "Cannot insert a DataTree node into CanvasTree"),
          this.canvasTree.insertNode(e, t, r, s)
        );
      g(!this.has(e.id), "Node already exists in tree");
      let i = this.get(t);
      (g(i, () => `Parent: ${t} not found in tree`),
        U(this.getCanvasTreeProxy(), e, t, r, s),
        H(e) && Q(e, this.getCanvasTreeProxy()),
        e.setProp("parentid", t),
        this.isDataNode(e) || G(this, e));
      let d = this.getOrMaterializeEditedChildren(t);
      return (
        (r = r === void 0 ? d.length : r),
        r < 0 && (r += d.length + 1),
        d.splice(r, 0, e),
        this.recordInsert({ node: e, toParent: t, toPosition: r }),
        this.insertChildrenRecursive(e),
        this.removedNodes.delete(e.id),
        this.insertedNodes.set(e.id, e),
        e
      );
    }
    getLatestChildren(e) {
      return this.editedChildren.get(e.id) ?? e.children;
    }
    removeChildrenRecursive(e) {
      this.assertWritable();
      let t = this.getLatestChildren(e);
      if (t && !q(e))
        for (let r of t)
          (this.removeChildrenRecursive(r),
            this.insertedNodes.delete(r.id),
            this.editedNodes.delete(r.id),
            this.editedChildren.delete(r.id),
            this.hierarchy.inTree(r.id) && this.removedNodes.add(r.id),
            this.recordRemove({ node: r, fromParent: e.id, fromPosition: 0 }));
    }
    excludeSubtreeFromGet(e) {
      let t = this.getLatestChildren(e);
      if (t)
        for (let r of t)
          r.parentid === e.id &&
            (this.removedNodes.has(r.id) || this.excludedFromGet.add(r.id),
            this.excludeSubtreeFromGet(r));
    }
    remove(e) {
      this.assertWritable();
      let t = this.get(e);
      if (!t) return this;
      let r = this.canvasTree?.get(t.id);
      if (r) {
        let n = this.canvasTree;
        return (
          g(n),
          this.isDataNode(t) && P(r) && !r.isLoaded() && this.removeChildrenRecursive(t),
          this.excludeSubtreeFromGet(t),
          n.remove(r.id),
          this.excludedFromGet.add(t.id),
          this
        );
      }
      (g(t.parentid, "Node must have a parent id"),
        g(!t.originalid || t.replicaInfo, "Cannot delete nodes of replica's"),
        U(this.getCanvasTreeProxy(), t),
        H(t) && Q(t, this.getCanvasTreeProxy()));
      let s = this.getOrMaterializeEditedChildren(t.parentid),
        i = s.findIndex((n) => n.id === t.id);
      g(i !== -1, () => `Node: ${t.id} not found in parent: ${t.parentid}`);
      let d = s.splice(i, 1)[0];
      return (
        t.replicaInfo || this.removeChildrenRecursive(d),
        this.excludeSubtreeFromGet(d),
        this.insertedNodes.delete(t.id),
        this.editedNodes.delete(t.id),
        this.editedChildren.delete(t.id),
        this.hierarchy.inTree(t.id) && this.removedNodes.add(t.id),
        this.recordRemove({ node: t, fromParent: t.parentid, fromPosition: i }),
        this
      );
    }
    isAncestorOf(e, t) {
      let r = this.get(t);
      for (g(r, "Node to check must exist"); r.id !== this.root.id;) {
        if (r.id === e) return !0;
        ((r = this.get(r.parentid)), g(r, "Ancestor node must exist"));
      }
      return r.id === e;
    }
    move(e, t, r = -1, s) {
      this.assertWritable();
      let i = this.get(e);
      t = t || this.root.id;
      let d = this.isLoadedInCanvasTree(t),
        c = !!(this.canvasTree?.has(i.id) && d);
      if (this.canvasTree && c) return (this.canvasTree.move(i.id, t, r, s), this);
      g(
        c || this.isLoadedInCanvasTree(i.id) === d,
        "cannot move a node from between loaded and unloaded scopes"
      );
      let h = i.parentid;
      if (
        (U(this.getCanvasTreeProxy(), i, t, r, s),
        g(!i.originalid || i.replicaInfo, "Cannot move nodes of replica's"),
        h === t)
      )
        return (this.moveNodeIndexInParent(i, t, r), this);
      (g(this.has(i.id), "Node does not exist in the data tree"),
        g(this.has(t), "Parent does not exist in the data tree"),
        g(!this.isAncestorOf(i.id, t), "Node must not be an ancestor of its new parent"),
        g(h, "Must be moving from a node"));
      let u = this.getOrMaterializeEditedChildren(h),
        m = u.findIndex((f) => f.id === i.id);
      (g(m >= 0, "Node must be known as child"), u.splice(m, 1));
      let a = this.getOrMaterializeEditedChildren(t);
      return (
        r < 0 && (r += a.length + 1),
        a.splice(r, 0, i),
        this.insertedNodes.has(i.id)
          ? i.setProp("parentid", t)
          : (this.getNodeAsDraft(i), (this.getOrCreateEditedNodeFor(i.id).parentid = t)),
        this.insertedNodes.has(t) ||
          (this.getNodeAsDraft(this.get(t)),
          this.editedNodes.has(t) || this.editedNodes.set(t, {})),
        this.recordMove({ node: i, fromParent: h, fromPosition: m, toPosition: r, toParent: t }),
        this
      );
    }
    sortNodeChildren(e, t) {
      (this.assertWritable(), (e = this.get(e.id) ?? e));
      let r = this.canvasTree,
        s = r?.get(e.id);
      if (r && s) {
        r.sortNodeChildren(s, t);
        return;
      }
      (g(!e.originalid || e.replicaInfo, "Cannot move nodes of replicas"),
        this.insertedNodes.has(e.id) ||
          (this.getNodeAsDraft(e), this.editedNodes.has(e.id) || this.editedNodes.set(e.id, {})));
      let i = this.getOrMaterializeEditedChildren(e.id),
        d = new Map();
      (i.forEach((n, c) => {
        d.set(n.id, c);
      }),
        i.sort(t),
        i.forEach((n, c) => {
          this.recordMove({
            node: n,
            fromParent: e.id,
            fromPosition: d.get(n.id),
            toPosition: c,
            toParent: e.id,
          });
        }));
    }
    moveNodeIndexInParent(e, t, r) {
      this.assertWritable();
      let s = this.getOrMaterializeEditedChildren(t);
      r < 0 && (g(r === -1, "Cannot set position below -1"), (r += s.length));
      let i = s.findIndex((d) => d.id === e.id);
      if ((g(i >= 0, "Node to move not found in parent"), i === r)) {
        e.parentid !== t &&
          (this.insertedNodes.has(e.id)
            ? e.setProp("parentid", t)
            : (this.getNodeAsDraft(e), (this.getOrCreateEditedNodeFor(e.id).parentid = t)));
        return;
      }
      (s.splice(i, 1),
        s.splice(r, 0, e),
        this.insertedNodes.has(e.id) ||
          (this.getNodeAsDraft(e),
          e.parentid !== t && (this.getOrCreateEditedNodeFor(e.id).parentid = t),
          this.editedNodes.has(e.id) || this.editedNodes.set(e.id, {})),
        this.recordMove({ node: e, fromParent: t, fromPosition: i, toPosition: r, toParent: t }));
    }
    getOrMaterializeEditedChildren(e) {
      this.assertWritable();
      let t = this.editedChildren.get(e);
      if (!t) {
        let r = this.get(e);
        (r?.asDraft(),
          r && (q(r) || this.insertedNodes.has(e))
            ? (t = r.children ? [...r.children] : [])
            : (t = this.store
                .getChildrenIds(e)
                .map((i) => {
                  if (this.hierarchy.inTree(i)) return $(this, i);
                })
                .filter((i) => i !== void 0)),
          this.editedChildren.set(e, t));
      }
      return t;
    }
    getValueForWithDefault(e, t) {
      let r = e.id;
      if (t === "parentid") return this.hierarchy.getParentId(r);
      let s = e.__class ? ve(e.__class) : void 0;
      if (s && s[W].includes(t)) {
        let d = this.get(e.id);
        return d ? Reflect.get(d, t) : void 0;
      }
      let i = this.store.getRawObjectKey(r, t);
      return i === Ce || i === T ? (s ? s[t] : void 0) : i;
    }
    *iterateAll() {
      yield* this.iterateNodeData(this.store.getIndex(Ie).iterateAll());
    }
    *iterateNodeData(e) {
      for (let t of e) {
        if (!this.hierarchy.inTree(t)) continue;
        let r = this.hierarchy.getNodeData(t);
        r && (yield r);
      }
    }
    loadScopes(e, t) {
      let r = e.map((s) => s && this.get(s.id));
      if (t) {
        t(r);
        return;
      }
      return Promise.resolve(r);
    }
    beginAllowPartialScopeAccess() {}
    endAllowPartialScopeAccess() {}
    getPersistedNodeCache(e) {
      return this.persistedCaches?.get(e);
    }
    setPersistedNodeCache(e, t) {
      return (this.persistedCaches?.set(e, t), t);
    }
    withPersistedCaches(e) {
      return this.persistedCaches ? this.persistedCaches.with(e) : e();
    }
    persistCaches() {
      return this.persistedCaches?.acquire() ?? ge;
    }
    isDataTree() {
      return !0;
    }
  };
export { se as a, ie as b, Le as c };
//# sourceMappingURL=chunk-KKY2BXK3.mjs.map
