import { h as De } from "chunk-52LGNLFW.mjs";
import { o as Z } from "chunk-5N6N636S.mjs";
import {
  Jc as Ie,
  Rc as H,
  Yc as Se,
  _c as we,
  bc as Ne,
  cc as me,
  dc as ve,
  ec as ye,
  hc as Y,
  ic as W,
  jc as w,
  kc as Ce,
  lc as z,
  oc as $,
  pc as F,
  rc as J,
  sc as _,
  tc as j,
} from "chunk-QXUDYZJG.mjs";
import { ab as Q } from "chunk-WKXIZXJ4.mjs";
import { b as B } from "chunk-AYQBYMX6.mjs";
import { A as be, c as T, e as Te } from "chunk-3HO5QPBT.mjs";
import { _a as P, bb as ge } from "chunk-BP2ZYPEN.mjs";
import { Mg as he, a as R, sl as ue, tl as fe } from "chunk-RE42INF2.mjs";
import { Af as V, Bf as q, Uk as le, ec as U, jj as X, xf as ce } from "chunk-3GNDJY2L.mjs";
import { a as pe } from "chunk-RNHTTH2C.mjs";
import { h as ae } from "chunk-EHED2EQW.mjs";
import { b as de } from "chunk-ARJ7WQTJ.mjs";
import { b as g } from "chunk-4JY5UMT2.mjs";
function Pe(d, e, t) {
  let r = e;
  for (; r;) {
    let s = d.getObjectKey(r, "__class");
    if (s && Le(s, t)) return r;
    let n = d.getParentId(r);
    if (!n || n === T) break;
    r = n;
  }
}
function Le(d, e) {
  let t = e.get(d);
  if (t !== void 0) return t;
  let r = me(d);
  if (!r) return !1;
  let s = Object.getPrototypeOf(r);
  for (; s;) {
    if (s === ge) return (e.set(d, !0), !0);
    s = Object.getPrototypeOf(s);
  }
  return (e.set(d, !1), !1);
}
var M = Symbol("isDataNode");
var L = new Map(),
  xe = new Map(),
  Ae = (d) => d.startsWith("$");
function Oe(d) {
  let e = 0;
  for (let t = d; t; t = t.base) e += t.length;
  return e;
}
function ke(d, e) {
  if (e.ownerId) return d.store.getObjectKey(`${e.ownerId}.replicaInfo`, "inheritsFrom");
}
function _e(d, e) {
  if (!e.originalId) return d.store.getLatest(e.id)?.update ?? 0;
  let t = ke(d, e);
  return (
    (d.store.getLatest(e.originalId)?.update ?? 0) +
    (e.ownerId ? (d.store.getLatest(e.ownerId)?.update ?? 0) : 0) +
    (t ? (d.store.getLatest(t)?.update ?? 0) : 0)
  );
}
function Ee(d, e) {
  return d.getCachedNodeProxy(e);
}
function $e(d, e) {
  return (d.cacheNodeProxy(e), e);
}
function je(d, e) {
  if (d.canvasTree && e !== d.canvasTree.root.id) {
    let t = d.canvasTree.get(e),
      r = P(t);
    if (t && (!r || t.isLoaded())) return t;
  }
}
function A(d, e) {
  let t = Ee(d, e);
  if (t) return t;
  let r = je(d, e);
  if (r) return r;
  let s = d.store.getObjectKey(e, "__class");
  g(s, () => `${e} does not have class`);
  let n = L.get(s);
  g(n, () => `node ${e} has invalid class name ${s}`);
  let o = [],
    i,
    c = d.store.getObjectKey(`${e}.replicaInfo`, "master");
  if (c && typeof c == "string") {
    ((i = e), o.push(`${i}.replicaInfo.overrides.${c}`));
    let f = d.store.getObjectKey(`${i}.replicaInfo`, "inheritsFrom");
    (f && o.push(`${f}.replicaInfo.overrides.${c}`), o.push(c));
  } else o.push(e);
  let h = new n(d, e, o, i, c);
  return (d.dataNodeSharedState.materialization.record(s), $e(d, h));
}
function te(d, e, t) {
  let r = R(e, t),
    s = Ee(d, r);
  if (s) return s;
  let n = d.store.getObjectKey(t, "__class");
  if (!n) {
    let f = d.store.getObject(t);
    (g(f, () => `${r} does not exist`), g(n, () => `${r} does not have class`));
  }
  let o = L.get(n);
  g(o, () => `node ${r} has invalid class name ${n}`);
  let i = [];
  i.push(`${e}.replicaInfo.overrides.${t}`);
  let c = d.store.getObjectKey(`${e}.replicaInfo`, "inheritsFrom");
  (c && i.push(`${c}.replicaInfo.overrides.${t}`), i.push(t));
  let h = new o(d, r, i, e, t);
  return (d.dataNodeSharedState.materialization.record(n), $e(d, h));
}
function Me(d) {
  let e = xe.get(d.__class);
  return (g(e, () => `node ${d.id} has invalid class name ${d.__class}`), e);
}
function G(d, e) {
  (Object.defineProperty(e, "dataNodeSharedState", {
    value: d.dataNodeSharedState,
    configurable: !0,
    enumerable: !1,
  }),
    Object.setPrototypeOf(e, Me(e)));
}
function re(d, e, t) {
  let r = t !== void 0;
  if (!t) {
    if (d.isHiddenUntilCommit(e)) return;
    let a = d.store.getObjectKey(`${e}.replicaInfo`, "master"),
      u = a
        ? {
            ownerSynthId: e,
            ownerStoreId: e,
            masterId: a,
            inheritsFromOwnerStoreId: d.store.getObjectKey(`${e}.replicaInfo`, "inheritsFrom"),
          }
        : void 0;
    t = {
      synthId: e,
      originalId: a ?? e,
      ownerStoreId: e,
      frames: u ? [u] : [],
      isOwner: u !== void 0,
    };
  }
  let { synthId: s, originalId: n, ownerStoreId: o, frames: i, isOwner: c } = t,
    h = d.store.getObjectKey(e, "__class");
  if (!h) return;
  let f = r ? void 0 : L.get(h)?.prototype?.[w];
  if (!r && !f) return;
  let N = {
    id: s,
    __class: h,
    update:
      (d.store.getLatest(n)?.update ?? 0) +
      (i.length > 0
        ? (d.store.getLatest(`${i[i.length - 1].ownerStoreId}.replicaInfo.overrides.${n}`)
            ?.update ?? 0)
        : 0),
    mutable: d.getEditedNodeFor(s) !== void 0,
    isLoaded: !0,
    get: (a) => {
      if (a === "parentid") {
        if (c) {
          let C = d.getLatestParentId(o);
          if (!C || C === T) return null;
          let b = i[i.length - 2];
          return b ? (C === b.masterId ? b.ownerSynthId : b.ownerSynthId + C) : C;
        }
        let m = d.getLatestParentId(n);
        if (!m || m === T) return null;
        let y = i[i.length - 1];
        return y ? (m === y.masterId ? y.ownerSynthId : y.ownerSynthId + m) : m;
      }
      if (a === "originalid") return i.length > 0 ? n : null;
      let u = f ?? L.get(h)?.prototype?.[w];
      if (!u || (!a.startsWith("$") && !(a in u))) return;
      if (a === "replicaInfo") return J(d.store.getObjectKey(o, a));
      let l = d.getEditedNodeFor(s);
      if (l && a in l) {
        let m = l[a];
        return m === T ? u[a] : m;
      }
      let p = $;
      a === "masks"
        ? (p = j)
        : a === "guidesX" || a === "guidesY"
          ? (p = F)
          : a === "styledText" && (p = _);
      for (let m = 0; m < i.length; m++) {
        let y = i[m],
          b = c && m === i.length - 1 ? y.masterId : s.slice(y.ownerSynthId.length),
          D = `${y.ownerStoreId}.replicaInfo.overrides.${b}`,
          x = d.store.getObjectKey(D, a);
        if (x !== void 0) return p(x);
        let O = d.store.getObjectKey(D, "_deleted");
        if (Array.isArray(O) && O.includes(a)) return;
        if (y.inheritsFromOwnerStoreId) {
          let S = `${y.inheritsFromOwnerStoreId}.replicaInfo.overrides.${b}`,
            E = d.store.getObjectKey(S, a);
          if (E !== void 0) return p(E);
          let k = d.store.getObjectKey(S, "_deleted");
          if (Array.isArray(k) && k.includes(a)) return;
        }
      }
      let v = d.store.getObjectKey(n, a);
      return p(v !== void 0 ? v : u[a]);
    },
    getSubfield: (...a) => {
      if (a.length === 0) return;
      if (a.length === 1) return N.get(a[0]);
      let u = a[0],
        l = d.getEditedNodeFor(s);
      if (l && u in l) {
        let y = l[u];
        for (let C of a.slice(1)) {
          if (!y || typeof y != "object") return;
          y = y[C];
        }
        return y;
      }
      let p = a[a.length - 1],
        v = a.slice(0, -1).join(".");
      for (let y = 0; y < i.length; y++) {
        let C = i[y],
          D = c && y === i.length - 1 ? C.masterId : s.slice(C.ownerSynthId.length),
          x = `${C.ownerStoreId}.replicaInfo.overrides.${D}`,
          O = d.store.getObjectKey(`${x}.${v}`, p);
        if (O !== void 0) return $(O);
        let S = d.store.getObjectKey(x, "_deleted");
        if (Array.isArray(S) && S.includes(u)) return;
        if (C.inheritsFromOwnerStoreId) {
          let E = `${C.inheritsFromOwnerStoreId}.replicaInfo.overrides.${D}`,
            k = d.store.getObjectKey(`${E}.${v}`, p);
          if (k !== void 0) return $(k);
          let oe = d.store.getObjectKey(E, "_deleted");
          if (Array.isArray(oe) && oe.includes(u)) return;
        }
      }
      let m = d.store.getObjectKey(`${n}.${v}`, p);
      if (m !== void 0) return $(m);
    },
    isKeySetAndNotInherited: (a) => {
      let u = d.getEditedNodeFor(s);
      if ((u && a in u) || i.length === 0) return !0;
      let l = i[i.length - 1],
        p = c ? l.masterId : s.slice(l.ownerSynthId.length),
        v = `${l.ownerStoreId}.replicaInfo.overrides.${p}`;
      if (d.store.getObjectKey(v, a) !== void 0) return !0;
      let m = d.store.getObjectKey(v, "_deleted");
      return Array.isArray(m) && m.includes(a);
    },
    keys: () => {
      let a = new Set(),
        u = d.getEditedNodeFor(s);
      if (u) for (let l of Object.keys(u)) a.add(l);
      for (let l of d.store.getLatest(e)?.keys() ?? []) a.add(l);
      for (let l = 0; l < i.length; l++) {
        let p = i[l],
          m = c && l === i.length - 1 ? p.masterId : s.slice(p.ownerSynthId.length),
          y = `${p.ownerStoreId}.replicaInfo.overrides.${m}`;
        for (let C of d.store.getLatest(y)?.keys() ?? []) a.add(C);
        if (p.inheritsFromOwnerStoreId) {
          let C = `${p.inheritsFromOwnerStoreId}.replicaInfo.overrides.${m}`;
          for (let b of d.store.getLatest(C)?.keys() ?? []) a.add(b);
        }
      }
      for (let l of d.store.getLatest(n)?.keys() ?? []) a.add(l);
      return a.values();
    },
    getLocalizationSourceGroupCache: () => d.store.getLatest(s)?.cache?.localizationSourceGroup,
    setLocalizationSourceGroupCache: (a) => {
      let u = d.store.getLatest(s);
      u && (u.cache || (u.cache = {}), (u.cache.localizationSourceGroup = a));
    },
    skipChildren: !1,
  };
  return N;
}
function K(d, e, t) {
  Object.defineProperty(d, e, {
    enumerable: !0,
    get() {
      let r = this.dataTree.getEditedNodeFor(this.id),
        s = r?.[e];
      if (r && e in r) return s === T ? this[w][e] : s;
      let n = this.dataTree.canvasTree?.get(this.id);
      if (n) return n[e];
      for (let o of this.sourceIds)
        if (o.includes(".")) {
          if (((s = this.dataTree.store.getObjectKey(o, e)), s !== void 0)) return t.call(this, s);
          let i = this.dataTree.store.getObjectKey(o, "_deleted");
          if (Array.isArray(i) && i.includes(e)) return;
        } else if (((s = this.dataTree.store.getObjectKey(o, e)), s !== void 0))
          return t.call(this, s);
      return this[w][e];
    },
    set(r) {
      this.dataTree.getOrCreateEditedNodeFor(this.id)[e] = r;
    },
  });
}
function Ke(d, e, t) {
  for (let r of e) {
    if (d.hasDefinedObjectKey(r, t)) return !0;
    if (r.includes(".")) {
      let s = d.getObjectKey(r, "_deleted");
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
      let n = this.container.originalId && r ? R(r, s) : s;
      return !e.isHiddenUntilCommit(n);
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
      ? r.findIndex((n) => R(s, n) === e.id)
      : r.findIndex((n) => n === e.id);
  }
  some(e) {
    let t = this.getEditedChildren();
    if (t) return t.some(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let n = r[s],
        o = I(this.container, n);
      if (e(o, s)) return !0;
    }
    return !1;
  }
  every(e) {
    let t = this.getEditedChildren();
    if (t) return t.every(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let n = r[s],
        o = I(this.container, n);
      if (!e(o, s)) return !1;
    }
    return !0;
  }
  forEach(e) {
    let t = this.getEditedChildren();
    if (t) return t.forEach(e);
    let r = this.getChildIds();
    for (let s = 0; s < r.length; s++) {
      let n = r[s],
        o = I(this.container, n);
      e(o, s);
    }
  }
  map(e) {
    let t = this.getEditedChildren();
    if (t) return t.map(e);
    let r = this.getChildIds(),
      s = Array(r.length);
    for (let n = 0; n < r.length; n++) {
      let o = r[n],
        i = I(this.container, o);
      s[n] = e(i, n);
    }
    return s;
  }
  reduce(e, t) {
    let r = this.getEditedChildren();
    if (r) return r.reduce(e, t);
    let s = this.getChildIds(),
      n = t;
    for (let o = 0; o < s.length; o++) {
      let i = s[o],
        c = I(this.container, i);
      n = e(n, c, o);
    }
    return n;
  }
  filter(e) {
    let t = this.getEditedChildren();
    if (t) return t.filter(e);
    let r = this.getChildIds(),
      s = [];
    for (let n = 0; n < r.length; n++) {
      let o = r[n],
        i = I(this.container, o);
      e(i, n) && s.push(i);
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
      let n = r[s],
        o = I(this.container, n);
      if (e(o, s)) return s;
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
      let n = r[s],
        o = I(this.container, n);
      if (e(o, s)) return s;
    }
    return -1;
  }
  slice(e, t) {
    let r = this.getEditedChildren();
    if (r) return r.slice(e, t);
    let s = this.getChildIds().slice(e, t),
      n = Array(s.length);
    for (let o = 0; o < s.length; o++) {
      let i = s[o],
        c = I(this.container, i);
      n[o] = c;
    }
    return n;
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
      let n = t[s],
        o = I(this.container, n);
      r[s] = o;
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
function Re() {
  if (L.size > 0) return;
  let d = Se();
  g(
    d.type === "prototype.dynamicOverrides" || d.type === "crdt.store",
    () => `Need prototype.dynamicOverrides driver, got: ${d.type}`
  );
  let e = Ne();
  for (let t of e) {
    class r extends t {
      get dataTree() {
        return this.dataNodeSharedState.dataTree;
      }
      set(i, c, h = !1, f = !0) {
        return this.dataTree.processNodeEdit(
          () => (super.set(i, this.dataTree.getCanvasTreeProxy(), h, f), this)
        );
      }
      setIgnoringReplica(i, c) {
        return this.dataTree.processNodeEdit(
          () => (super.setIgnoringReplica(i, this.dataTree.getCanvasTreeProxy()), this)
        );
      }
      assign(...i) {
        return this.dataTree.processNodeEdit(
          () => (super.assign(...i, { cache: this.cache, treeState: this.treeState }), this)
        );
      }
      setProp(i, c) {
        this.dataTree.processNodeEdit(() => {
          super.setProp(i, c);
        });
      }
      resetToDefault(i) {
        this.dataTree.processNodeEdit(() => {
          super.resetToDefault(i);
        });
      }
      deleteProp(i) {
        this.dataTree.processNodeEdit(() => {
          super.deleteProp(i);
        });
      }
      get [M]() {
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
      constructor(i, c, h, f, N) {
        this.id = c;
        (this.setPrivateProperty("dataNodeSharedState", i.dataNodeSharedState),
          this.setPrivateProperty("sourceIds", h),
          this.setPrivateProperty("ownerId", f),
          this.setPrivateProperty("originalId", N));
        for (let a of h) {
          let u = i.store.getObjectKeys(a, Ae);
          for (let l of u) l in this || (Ke(i.store, h, l) && this.createControlPropForKey(l));
        }
      }
      id;
      get dataTree() {
        return this.dataNodeSharedState.dataTree;
      }
      get treeState() {
        let i = this.$$treeState$$;
        if (i) return i;
        let c = new this[z].treeStateClass();
        return (this.setPrivateProperty("$$treeState$$", c), c);
      }
      set(i, c, h = !1, f = !0) {
        return this.dataTree.processNodeEdit(
          () => (t.prototype.set.call(this, i, this.dataTree.getCanvasTreeProxy(), h, f), this)
        );
      }
      setIgnoringReplica(i, c) {
        return this.dataTree.processNodeEdit(
          () => (
            t.prototype.setIgnoringReplica.call(this, i, this.dataTree.getCanvasTreeProxy()),
            this
          )
        );
      }
      createControlPropForKey(i) {
        i in this ||
          Object.defineProperty(this, i, {
            enumerable: !0,
            configurable: !0,
            get() {
              let c = this.dataTree.getEditedNodeFor(this.id);
              if (c && i in c) {
                let h = c[i];
                return h === T ? void 0 : h;
              }
              for (let h of this.sourceIds)
                if (h.includes(".")) {
                  let f = this.dataTree.store.getObjectKey(h, i);
                  if (f !== void 0) return f;
                  let N = this.dataTree.store.getObjectKey(h, "_deleted");
                  if (Array.isArray(N) && N.includes(i)) return;
                } else {
                  let f = this.dataTree.store.getObjectKey(h, i);
                  if (f !== void 0) return f;
                }
            },
            set(c) {
              this.dataTree.getOrCreateEditedNodeFor(this.id)[i] = c;
            },
          });
      }
      get cache() {
        if (!this.$$cache$$) {
          let i =
            this.dataTree.getPersistedNodeCache(this.id) ??
            this.dataTree.setPersistedNodeCache(this.id, new this[z].cacheClass());
          (this.setPrivateProperty("$$cache$$", i),
            this.ownerId && this.ownerId !== this.id && (i.replicaAncestorId = this.ownerId));
          let c = this.id,
            { store: h } = this.dataTree;
          {
            let f = {
              localizationSourceOwnRevision: 0,
              localizationSourceRevision: 0,
              localizationTranslationOwnRevision: 0,
              localizationTranslationRevision: 0,
              localizationSourceGroup: void 0,
            };
            for (let N in f) {
              let a = f[N];
              Object.defineProperty(i, N, {
                enumerable: !0,
                configurable: !0,
                get() {
                  return h.getLatest(c)?.cache?.[N] ?? a;
                },
                set(u) {
                  let l = h.getLatest(c);
                  l && (l.cache || (l.cache = {}), (l.cache[N] = u));
                },
              });
            }
          }
          return i;
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
        let i = {};
        for (let N of ["id", "__class", "parentid", "originalid"]) N in this && (i[N] = this[N]);
        let c = this.dataTree.store.getObjectWithShallowChildren(this.id, 0),
          h = c ? [this.id] : this.sourceIds;
        for (let N = h.length - 1; N >= 0; N--) {
          let a = h[N],
            u = a === this.id ? c : this.dataTree.store.getObjectWithShallowChildren(a, 0);
          if (!u) continue;
          for (let p in u) {
            if (p === "_deleted" || !(p in this)) continue;
            let v = this[p];
            i[p] = v;
          }
          let l = u._deleted;
          if (Array.isArray(l)) for (let p of l) p in u || (i[p] = void 0);
        }
        let f = this.dataTree.getEditedNodeFor(this.id);
        if (f) for (let N in f) i[N] = f[N] === T ? this[N] : f[N];
        return i;
      }
      raw(i) {
        let c = Object.assign({}, this[w], {
          cache: this.cache,
          treeState: this.treeState,
          update: this.update,
        });
        for (let h in this) c[h] = this[h];
        return ((c.originalid ??= null), Object.assign(c, i));
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
        let i = [this];
        for (; i.length > 0;) {
          let c = i.pop();
          if ((g(c), !this.dataTree.isDataNode(c))) {
            yield* c.walk();
            continue;
          }
          yield c;
          let h = c,
            f = this.dataTree.getEditedChildrenFor(h.id);
          if (f) {
            for (let a = f.length - 1; a >= 0; --a) i.push(f[a]);
            continue;
          }
          let N = this.dataTree.store.getChildrenIds(h.originalId ?? h.id);
          if (this.dataTree.hasHiddenNodes) {
            let a = h.ownerId;
            N = N.filter((u) => {
              let l = h.originalId && a ? R(a, u) : u;
              return !this.dataTree.isHiddenUntilCommit(l);
            });
          }
          for (let a = N.length - 1; a >= 0; --a) {
            let u = N[a];
            i.push(I(h, u));
          }
        }
      }
      *fastWalk({ useSortedChildren: i = !0 } = {}) {
        let h = [this.id],
          f = [];
        for (; h.length > 0;) {
          let N = h.pop();
          if (N === -1) {
            f.pop();
            continue;
          }
          let a = N;
          g(a, "stackId must be set");
          let u = f.length > 0 ? f[f.length - 1] : void 0,
            l = this.dataTree.store.getObjectKey(`${a}.replicaInfo`, "master"),
            p,
            v,
            m;
          if (l) {
            ((p = u ? u.ownerSynthId + a : a), (v = l));
            let S = this.dataTree.store.getObjectKey(`${a}.replicaInfo`, "inheritsFrom");
            m = { ownerSynthId: p, ownerStoreId: a, masterId: l, inheritsFromOwnerStoreId: S };
          } else u ? ((p = u.ownerSynthId + a), (v = a)) : ((p = a), (v = a));
          let y = m ? [...f, m] : [...f],
            C = m !== void 0,
            b = a,
            D = re(this.dataTree, a, {
              synthId: p,
              originalId: v,
              ownerStoreId: b,
              frames: y,
              isOwner: C,
            });
          if ((g(D), m && (f.push(m), h.push(-1)), yield D, D.skipChildren)) {
            m && (g(h.pop() === -1), f.pop());
            continue;
          }
          let x = l ?? a,
            O = i
              ? this.dataTree.store.getChildrenIds(x)
              : this.dataTree.hierarchy.getCachedChildrenIds(x);
          for (let S = O.length - 1; S >= 0; S--) {
            let E = O[S];
            h.push(E);
          }
        }
      }
      setProp(i, c) {
        (this.asDraft(),
          i.startsWith("$")
            ? ((this.dataTree.getOrCreateEditedNodeFor(this.id)[i] = c),
              this.createControlPropForKey(i))
            : (this[i] = c));
      }
      resetToDefault(i) {
        if ((this.asDraft(), this[W].includes(i))) {
          this[i] = void 0;
          return;
        }
        ((this.dataTree.getOrCreateEditedNodeFor(this.id)[i] = T),
          i.startsWith("$") && delete this[i]);
      }
      hasProp(i) {
        return i in this;
      }
      deleteProp(i) {
        (g(i.startsWith("$"), "Cannot call deleteProp on non dynamic prop"),
          (this.dataTree.getOrCreateEditedNodeFor(this.id)[i] = void 0),
          delete this[i]);
      }
      assign(...i) {
        let c = this.dataTree.getOrCreateEditedNodeFor(this.id),
          h = new Set(),
          f = {},
          N,
          a = !1;
        for (let l of i) {
          if (!l || typeof l != "object") continue;
          let p = Object.entries(l);
          if (l instanceof ue) {
            for (let m in this.getDataOverrides()) m === "parentid" || Y.includes(m) || h.add(m);
            for (let m in f) (h.add(m), delete f[m]);
            let v = { ...l.getDataOverrides() };
            (this.dataTree.isDataNode(l) && Object.assign(v, this.dataTree.getEditedNodeFor(l.id)),
              (p = Object.entries(v)));
          }
          for (let [v, m] of p) {
            if (v === "children") {
              ((N = m), (a = !0));
              continue;
            }
            v === "parentid" ||
              Y.includes(v) ||
              (m === T ? (delete f[v], h.add(v)) : ((f[v] = m), h.delete(v)));
          }
        }
        for (let l of h) c[l] = T;
        Object.assign(c, f);
        let u = a ? this.dataTree.getEditedChildrenFor(this.id) : void 0;
        if (u && N instanceof X) {
          u.length = 0;
          for (let l of N) u.push(l);
        }
        for (let l of i)
          if (!(!l || typeof l != "object"))
            for (let p of Object.keys(l)) p.startsWith("$") && this.createControlPropForKey(p);
      }
      get [M]() {
        return !0;
      }
      setPrivateProperty(i, c) {
        Object.defineProperty(this, i, { value: c, enumerable: !1 });
      }
      asDraft() {
        return this.dataTree.getNodeAsDraft(this);
      }
    }
    let n = t.prototype;
    Object.setPrototypeOf(s.prototype, n);
    for (let o of n[Ce])
      o === "originalid"
        ? Object.defineProperty(s.prototype, o, {
            enumerable: !0,
            get() {
              return this.originalId;
            },
            set(i) {
              this.dataTree.getOrCreateEditedNodeFor(this.id)[o] = i;
            },
          })
        : ["isMaster", "isExternalMaster"].includes(o)
          ? Object.defineProperty(s.prototype, o, {
              enumerable: !0,
              get() {
                let i = this.dataTree.getEditedNodeFor(this.id),
                  c = i?.[o];
                return i && o in i
                  ? c === T
                    ? this[w][o]
                    : c
                  : ((c = this.dataTree.store.getObjectKey(this.id, o)),
                    c !== void 0 ? c : this[w][o]);
              },
              set(i) {
                this.dataTree.getOrCreateEditedNodeFor(this.id)[o] = i;
              },
            })
          : o === "parentid"
            ? Object.defineProperty(s.prototype, o, {
                enumerable: !0,
                get() {
                  let i = this.ownerId === this.id ? this.id : (this.originalId ?? this.id),
                    c = this.dataTree.getEditedNodeFor(this.id),
                    h = c && "parentid" in c ? c.parentid : this.dataTree.getLatestParentId(i);
                  if (typeof h == "string") {
                    if (this.ownerId === this.id) return h;
                    if (this.originalId && this.ownerId) {
                      let f = this.dataTree.store.getObjectKey(
                        `${this.ownerId}.replicaInfo`,
                        "master"
                      );
                      return h === f ? this.ownerId : R(this.ownerId, h);
                    }
                    return h;
                  }
                },
              })
            : o === "replicaInfo"
              ? Object.defineProperty(s.prototype, o, {
                  enumerable: !0,
                  get() {
                    let i = this.dataTree.getEditedNodeFor(this.id);
                    if (i && o in i) {
                      let f = i[o];
                      return f === T ? this[w][o] : f;
                    }
                    let c = this.$$revivedReplicaInfo$$;
                    if (c) return c;
                    let h = this.dataTree.store.getObjectKey(this.id, o);
                    if (h !== void 0) {
                      let f = J(h);
                      return (f && this.setPrivateProperty("$$revivedReplicaInfo$$", f), f);
                    }
                    return this[w][o];
                  },
                  set(i) {
                    this.dataTree.getOrCreateEditedNodeFor(this.id)[o] = i;
                  },
                })
              : o === "masks"
                ? K(s.prototype, o, j)
                : o === "guidesX" || o === "guidesY"
                  ? K(s.prototype, o, F)
                  : o === "styledText"
                    ? K(
                        s.prototype,
                        o,
                        (i) => (g(typeof i == "string", "Expected serialized styled text"), _(i))
                      )
                    : o === "html" && n.__class === "RichTextNode"
                      ? K(s.prototype, o, function (i) {
                          return le(this.id, $(i));
                        })
                      : K(s.prototype, o, $);
    (n[z].hasChildren &&
      Object.defineProperty(s.prototype, "children", {
        enumerable: !0,
        get() {
          if (this.$$children$$) return this.$$children$$;
          let o = new ee(this);
          return (this.setPrivateProperty("$$children$$", o), o);
        },
      }),
      xe.set(n.__class, r.prototype),
      L.set(n.__class, s));
  }
}
function I(d, e) {
  return d.ownerId ? te(d.dataTree, d.ownerId, e) : A(d.dataTree, e);
}
function We() {
  return ae.isOn("localizationProgressSummaries");
}
function se(d) {
  g(typeof d.__class == "string", () => `${String(d.id)} is missing a __class`);
  let e = ve(d.__class);
  g(e, () => `constructor not found for __class: ${String(d.__class)}`);
  let t = { ...d };
  return (
    de(t.styledText) && (t.styledText = _(t.styledText)),
    t.masks !== void 0 && (t.masks = j(t.masks)),
    t.guidesX !== void 0 && (t.guidesX = F(Array.isArray(t.guidesX) ? t.guidesX : [])),
    t.guidesY !== void 0 && (t.guidesY = F(Array.isArray(t.guidesY) ? t.guidesY : [])),
    new e({ id: d.id, ...t })
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
  Fe = class d {
    constructor(e, t, r, s, n) {
      this.store = e;
      this.treeQueryContext = r;
      this.persistedCaches = s;
      ((this.canvasTree = t),
        (this.seq = e.seq),
        (this.storeLength = e.length),
        (this.hierarchy = e.getHierarchy()),
        (this.dataNodeSharedState = new ne(this, n)),
        Re());
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
      return (g(t, "DataTree root does not exist"), { version: Ie, root: t });
    }
    equals(e) {
      return e instanceof d
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
        new d(
          this.store,
          this.currentCanvasTree(),
          this.treeQueryContext,
          this.persistedCaches
        ).getCanvasTreeProxy()
      );
    }
    getSubtreeChecksum(e) {
      return this.hasUncommittedChanges() || this.canvasTree?.hasUncommittedChanges()
        ? void 0
        : (We() ? this.store.getAdditiveChecksum(e) : this.store.getChecksum(e))?.toString();
    }
    stats() {
      let e = this.dataNodeSharedState,
        t = 0,
        r = 0;
      for (let s of this.nodeProxyCache.values()) {
        let n = s.deref();
        n && ((t += 1), this.isDataNode(n) && n.$$treeState$$?.draft === n && (r += 1));
      }
      return {
        materializedDuringLoad: e.materialization.countAtLoad,
        materializedTotal: e.materialization.count,
        materializedByClass: Object.fromEntries(
          [...e.materialization.countsByClass].sort(([, s], [, n]) => n - s)
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
      return A(this, e);
    }
    getAnyNode(e) {
      return !e || this.isHiddenUntilCommit(e)
        ? null
        : (this.get(e) ?? (this.store.has(e) ? A(this, e) : null));
    }
    getAccessor(e) {
      if (!e) return;
      let t = this.insertedNodes.get(e);
      return t ? fe(t) : re(this, e);
    }
    pushChangesForNode(e, t, r) {
      let s = r ? this.store.getObjectWithShallowChildren(t, 0) : this.store.getObject(t);
      g(s, () => `editedNode id is missing from the store: ${t}`);
      let n = se(s),
        o = null;
      if (r) {
        let i = { ...r };
        for (let c in i) i[c] === T && (i[c] = void 0);
        o = se({ ...s, ...i, __class: s.__class });
      }
      Z(e, n, o, !0);
    }
    computeReversibleChanges() {
      this.assertWritable();
      let e = [];
      for (let [a, u] of this.insertedNodes) {
        if (V(u)) continue;
        let l = null;
        if (this.hierarchy.inTree(u.id)) {
          let p = this.store.getObject(u.id);
          (g(p, () => `inserted node id is missing from the store: ${u.id}`), (l = se(p)));
        }
        Z(e, l, u, !0);
      }
      let t = [],
        r = new Set(this.removedNodes),
        s = this.hierarchy.getRootId(),
        n = (a) => {
          for (let u of this.hierarchy.getChildrenIds(a)) n(u);
          r.has(a) && (t.push(a), r.delete(a));
        };
      s && r.size > 0 && n(s);
      for (let a of r) t.push(a);
      let o = new Set(t),
        i = new Map();
      for (let a of t) {
        let l = this.store.getObject(a)?.replicaInfo,
          p = typeof l?.master == "string" ? l.master : void 0;
        if (!p || !o.has(p)) continue;
        let v = i.get(p) ?? [];
        (v.push(a), i.set(p, v));
      }
      let c = [],
        h = new Set(),
        f = new Set(),
        N = (a) => {
          if (!h.has(a) && !f.has(a)) {
            f.add(a);
            for (let u of i.get(a) ?? []) N(u);
            (f.delete(a), h.add(a), c.push(a));
          }
        };
      for (let a of t) N(a);
      for (let a of c) this.pushChangesForNode(e, a, null);
      for (let [a, u] of this.editedNodes) {
        let l = this.get(a);
        if (!l && this.store.has(a)) {
          this.pushChangesForNode(e, a, u);
          continue;
        }
        (g(l, () => `node not in data tree, id: ${a}`),
          !(l.originalid && !l.replicaInfo) && this.pushChangesForNode(e, a, u));
      }
      return e;
    }
    prepareCommit(e) {
      (this.assertWritable(),
        this.moveEditsToRootOrShallowScopes(),
        this.markScopesAsDraft(),
        this.markReplicasAsDraft());
      for (let t of this.insertedNodes.values()) ce(t) && he.updateOverrides(t.asDraft());
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
      let e = new d(this.store),
        t = new Set();
      for (let r of this.insertedNodes.keys()) t.add(r);
      for (let r of this.removedNodes) t.add(r);
      for (let r of this.editedNodes.keys()) t.add(r);
      we({
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
          let n = this.editedNodes.get(t);
          (n && this.applyEditsToCanvasNode(this.canvasTree.root, n), e.add(t));
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
      for (let n in t) t[n] === T ? s.push(n) : (r[n] = t[n]);
      if ((e.set(r), s.length > 0)) {
        let n = e.asDraft(this.canvasTree);
        for (let o of s) n.resetToDefault(o);
      }
    }
    markScopesAsDraft() {
      this.assertWritable();
      let e = new Map(),
        t = new Set(),
        r = (s) => {
          let n = this.get(s),
            o = Pe(this.store, n?.originalid ?? s, e);
          if (!o || t.has(o)) return;
          let i = this.canvasTree?.get(o) ?? this.get(o);
          i && (t.add(o), i.asDraft(this.canvasTree ?? this.getCanvasTreeProxy()));
        };
      for (let [s, n] of this.insertedNodes)
        (g(n.parentid, "node must have a parent id"), r(n.parentid));
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
        let n = this.get(s);
        if (n) {
          e(n);
          for (let o of this.store.getIndex(B).iterateReplicaOwners(s)) {
            let i = this.get(o);
            i && (this.editedNodes.has(o) || (this.editedNodes.set(o, {}), e(i)));
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
        let n = this.get(r.parentid);
        for (; n && !n.replicaInfo;) n = this.get(n.parentid);
        if (!n) {
          this.editedNodes.delete(t);
          continue;
        }
        this.editedNodes.has(n.id) || (this.editedNodes.set(n.id, {}), e(n));
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
          ((this.treeProxy = De(this)),
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
      return e ? !!e[M] : !1;
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
        let [s, , n] = r;
        return te(this, s, n);
      }
      return A(this, e);
    }
    getCommittedNode(e) {
      let t = Oe(this.store),
        r = this.committedTree;
      return (
        (!r || r.tree.seq !== this.store.seq || r.storeChainLength !== t) &&
          ((r = { tree: new d(this.store), storeChainLength: t }), (this.committedTree = r)),
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
        let n = this.get(s);
        !n || !t(n) || r.push(n);
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
        let n = this.get(s);
        n && this.getNodeAsDraft(n);
      }
      if (t.ownerId === t.id && t.originalId)
        for (let s of this.store.getIndex(B).iterateReplicaOwners(t.originalId)) {
          if (this.store.getObjectKey(`${s}.replicaInfo`, "inheritsFrom") !== t.id) continue;
          let n = this.get(s);
          n && this.getNodeAsDraft(n);
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
      let n = this.get(t);
      (g(n, () => `Parent: ${t} not found in tree`),
        H(this.getCanvasTreeProxy(), e, t, r, s),
        U(e) && Q(e, this.getCanvasTreeProxy()),
        e.setProp("parentid", t),
        this.isDataNode(e) || G(this, e));
      let o = this.getOrMaterializeEditedChildren(t);
      return (
        (r = r === void 0 ? o.length : r),
        r < 0 && (r += o.length + 1),
        o.splice(r, 0, e),
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
        let i = this.canvasTree;
        return (
          g(i),
          this.isDataNode(t) && P(r) && !r.isLoaded() && this.removeChildrenRecursive(t),
          this.excludeSubtreeFromGet(t),
          i.remove(r.id),
          this.excludedFromGet.add(t.id),
          this
        );
      }
      (g(t.parentid, "Node must have a parent id"),
        g(!t.originalid || t.replicaInfo, "Cannot delete nodes of replica's"),
        H(this.getCanvasTreeProxy(), t),
        U(t) && Q(t, this.getCanvasTreeProxy()));
      let s = this.getOrMaterializeEditedChildren(t.parentid),
        n = s.findIndex((i) => i.id === t.id);
      g(n !== -1, () => `Node: ${t.id} not found in parent: ${t.parentid}`);
      let o = s.splice(n, 1)[0];
      return (
        t.replicaInfo || this.removeChildrenRecursive(o),
        this.excludeSubtreeFromGet(o),
        this.insertedNodes.delete(t.id),
        this.editedNodes.delete(t.id),
        this.editedChildren.delete(t.id),
        this.hierarchy.inTree(t.id) && this.removedNodes.add(t.id),
        this.recordRemove({ node: t, fromParent: t.parentid, fromPosition: n }),
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
      let n = this.get(e);
      t = t || this.root.id;
      let o = this.isLoadedInCanvasTree(t),
        c = !!(this.canvasTree?.has(n.id) && o);
      if (this.canvasTree && c) return (this.canvasTree.move(n.id, t, r, s), this);
      g(
        c || this.isLoadedInCanvasTree(n.id) === o,
        "cannot move a node from between loaded and unloaded scopes"
      );
      let h = n.parentid;
      if (
        (H(this.getCanvasTreeProxy(), n, t, r, s),
        g(!n.originalid || n.replicaInfo, "Cannot move nodes of replica's"),
        h === t)
      )
        return (this.moveNodeIndexInParent(n, t, r), this);
      (g(this.has(n.id), "Node does not exist in the data tree"),
        g(this.has(t), "Parent does not exist in the data tree"),
        g(!this.isAncestorOf(n.id, t), "Node must not be an ancestor of its new parent"),
        g(h, "Must be moving from a node"));
      let f = this.getOrMaterializeEditedChildren(h),
        N = f.findIndex((u) => u.id === n.id);
      (g(N >= 0, "Node must be known as child"), f.splice(N, 1));
      let a = this.getOrMaterializeEditedChildren(t);
      return (
        r < 0 && (r += a.length + 1),
        a.splice(r, 0, n),
        this.insertedNodes.has(n.id)
          ? n.setProp("parentid", t)
          : (this.getNodeAsDraft(n), (this.getOrCreateEditedNodeFor(n.id).parentid = t)),
        this.insertedNodes.has(t) ||
          (this.getNodeAsDraft(this.get(t)),
          this.editedNodes.has(t) || this.editedNodes.set(t, {})),
        this.recordMove({ node: n, fromParent: h, fromPosition: N, toPosition: r, toParent: t }),
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
      let n = this.getOrMaterializeEditedChildren(e.id),
        o = new Map();
      (n.forEach((i, c) => {
        o.set(i.id, c);
      }),
        n.sort(t),
        n.forEach((i, c) => {
          this.recordMove({
            node: i,
            fromParent: e.id,
            fromPosition: o.get(i.id),
            toPosition: c,
            toParent: e.id,
          });
        }));
    }
    moveNodeIndexInParent(e, t, r) {
      this.assertWritable();
      let s = this.getOrMaterializeEditedChildren(t);
      r < 0 && (g(r === -1, "Cannot set position below -1"), (r += s.length));
      let n = s.findIndex((o) => o.id === e.id);
      if ((g(n >= 0, "Node to move not found in parent"), n === r)) {
        e.parentid !== t &&
          (this.insertedNodes.has(e.id)
            ? e.setProp("parentid", t)
            : (this.getNodeAsDraft(e), (this.getOrCreateEditedNodeFor(e.id).parentid = t)));
        return;
      }
      (s.splice(n, 1),
        s.splice(r, 0, e),
        this.insertedNodes.has(e.id) ||
          (this.getNodeAsDraft(e),
          e.parentid !== t && (this.getOrCreateEditedNodeFor(e.id).parentid = t),
          this.editedNodes.has(e.id) || this.editedNodes.set(e.id, {})),
        this.recordMove({ node: e, fromParent: t, fromPosition: n, toPosition: r, toParent: t }));
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
                .map((n) => {
                  if (this.hierarchy.inTree(n)) return A(this, n);
                })
                .filter((n) => n !== void 0)),
          this.editedChildren.set(e, t));
      }
      return t;
    }
    getValueForWithDefault(e, t) {
      let r = e.id;
      if (t === "parentid") return this.hierarchy.getParentId(r);
      let s = e.__class ? ye(e.__class) : void 0;
      if (s && s[W].includes(t)) {
        let o = this.get(e.id);
        return o ? Reflect.get(o, t) : void 0;
      }
      let n = this.store.getRawObjectKey(r, t);
      return n === Te || n === T ? (s ? s[t] : void 0) : n;
    }
    *iterateAll() {
      yield* this.iterateNodeData(this.store.getIndex(be).iterateAll());
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
      return this.persistedCaches?.acquire() ?? pe;
    }
    isDataTree() {
      return !0;
    }
  };
export { se as a, ie as b, Fe as c };
//# sourceMappingURL=chunk-3M2IK3ZR.mjs.map
