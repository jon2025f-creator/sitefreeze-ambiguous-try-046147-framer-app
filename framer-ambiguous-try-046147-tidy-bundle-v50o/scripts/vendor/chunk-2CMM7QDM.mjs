import { b as l } from "chunk-4JY5UMT2.mjs";
function N(r, e = 0) {
  if (r.length === 0) return e;
  for (let t = 0, i = r.length; t < i; t++) {
    let n = r.charCodeAt(t);
    e = ((e << 5) - e + n) | 0;
  }
  return e;
}
var u = class {
  constructor(e) {
    this.value = e;
  }
  value;
};
function D(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
function A(r) {
  return f(r);
}
function O(r) {
  return S(r);
}
function f(r) {
  if (r instanceof u) return f(r.value);
  if (r === null || typeof r == "string" || typeof r == "boolean") return r;
  if (typeof r == "number")
    return (
      l(Number.isFinite(r), () => `Inline atomic values only support finite numbers, got ${r}`),
      r === 0 ? 0 : r
    );
  if (Array.isArray(r))
    return r.map(
      (t) => (l(t !== void 0, "Inline atomic values can't contain undefined array items"), f(t))
    );
  l(M(r), () => `Inline atomic values only support plain JSON, got ${String(r)}`);
  let e = {};
  for (let t in r) {
    let i = r[t];
    i !== void 0 && (e[t] = f(i));
  }
  return e;
}
function S(r) {
  if (typeof r != "object" || r === null) return r;
  if (Array.isArray(r)) return r.map(S);
  let e = {};
  for (let t in r) e[t] = S(r[t]);
  return e;
}
function M(r) {
  if (typeof r != "object" || r === null) return !1;
  let e = Object.getPrototypeOf(r);
  return e === Object.prototype || e === null;
}
var a = class {
    #e = new Set();
    #t = new Set();
    #r;
    constructor(e) {
      this.#r = e;
    }
    add(e) {
      return (this.#t.delete(e), this.#e.add(e), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#r?.has(e)) {
        let i = this.#t.has(e);
        return (this.#t.add(e), t || !i);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#r?.has(e) ?? !1);
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#r)) for (let e of this.#r) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#r) return e;
      for (let t of this.#r) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *values() {
      for (let e of this.#e) yield e;
      if (this.#r) for (let e of this.#r) this.#e.has(e) || this.#t.has(e) || (yield e);
    }
    keys() {
      return this.values();
    }
    *entries() {
      for (let e of this.values()) yield [e, e];
    }
    forEach(e, t) {
      for (let i of this.values()) e.call(t, i, i, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  h = class {
    #e = new Map();
    #t = new Set();
    #r;
    constructor(e) {
      this.#r = e;
    }
    get(e) {
      if (this.#e.has(e)) return this.#e.get(e);
      if (!this.#t.has(e)) return this.#r?.get(e);
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#r?.has(e) ?? !1);
    }
    set(e, t) {
      return (this.#t.delete(e), this.#e.set(e, t), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#r?.has(e)) {
        let i = this.#t.has(e);
        return (this.#t.add(e), t || !i);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#r)) for (let e of this.#r.keys()) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#r) return e;
      for (let t of this.#r.keys()) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *entries() {
      for (let e of this.#e.entries()) yield e;
      if (this.#r)
        for (let [e, t] of this.#r.entries()) this.#e.has(e) || this.#t.has(e) || (yield [e, t]);
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    forEach(e, t) {
      for (let [i, n] of this.entries()) e.call(t, n, i, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return this.#e.get(e);
    }
    ensureOwned(e, t) {
      let i = this.#e.get(e);
      if (i !== void 0) return i;
      let n = t(this.get(e));
      return (this.set(e, n), n);
    }
  };
function d(r) {
  return new I(r);
}
var I = class {
  index;
  base;
  constructor(e) {
    ((this.base = e), (this.index = e ? new h(e) : new Map()));
  }
  get size() {
    return this.index.size;
  }
  get(e) {
    return this.index.get(e);
  }
  has(e) {
    return this.index.has(e);
  }
  entries() {
    return this.index.entries();
  }
  keys() {
    return this.index.keys();
  }
  values() {
    return this.index.values();
  }
  forEach(e, t) {
    this.index.forEach(e, t);
  }
  [Symbol.iterator]() {
    return this.index[Symbol.iterator]();
  }
  getMutableIndexSet(e) {
    if (this.index instanceof Map) {
      let t = this.index.get(e);
      return (t || ((t = new Set()), this.index.set(e, t)), t);
    }
    return this.index.ensureOwned(e, (t) => new a(t));
  }
  removeFromIndexSet(e, t, i = !1) {
    if (!(this.index instanceof Map)) return;
    let n = this.index.get(e);
    n && (n.delete(t), i && n.size === 0 && this.index.delete(e));
  }
  add(e, t, i = !1) {
    if (this.index instanceof Map) {
      this.getMutableIndexSet(e).add(t);
      return;
    }
    if (!i && (this.base?.get(e)?.has(t) ?? !1)) {
      this.index.getOwned(e)?.reset(t);
      return;
    }
    this.getMutableIndexSet(e).add(t);
  }
  remove(e, t, i = !1, n = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t, n);
      return;
    }
    let o = !i && (this.base?.get(e)?.has(t) ?? !1),
      s = !i && (this.base?.has(e) ?? !1);
    if (o) {
      this.getMutableIndexSet(e).delete(t);
      return;
    }
    let x = this.index.getOwned(e);
    (x?.reset(t), n && x?.size === 0 && !s && this.index.delete(e));
  }
  deleteOwn(e, t) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t);
      return;
    }
    this.index.get(e) && this.getMutableIndexSet(e).delete(t);
  }
  reset(e, t, i = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t);
      return;
    }
    let n = this.index.getOwned(e);
    (n?.reset(t), i && n?.size === 0 && this.index.reset(e));
  }
};
var v = class {
  map;
  constructor(e) {
    this.map = d(e?.map);
  }
  *iterateByClass(e) {
    let t = this.map.get(e);
    t && (yield* t);
  }
  has(e, t) {
    return this.map.get(e)?.has(t) ?? !1;
  }
  *iterateAll() {
    for (let e of this.map.values()) yield* e;
  }
  syncAddedNode(e, t, i) {
    t.__class && this.map.add(t.__class, e, i);
  }
  syncRemovedNode(e, t) {
    t.__class && this.map.remove(t.__class, e);
  }
  syncChangedField(e, t, i, n, o, s) {
    t === "__class" &&
      i &&
      (i !== n || s) &&
      (s ? this.map.reset(i, e, !0) : this.map.remove(i, e));
  }
};
var w = Symbol("deleted"),
  R = Symbol("keep"),
  j = Symbol("does-not-exist"),
  L = Symbol("inherited"),
  U = "$keep",
  B = "$deleted",
  c = new Map([
    [void 0, "undefined"],
    [w, "Symbol(deleted)"],
    [R, "Symbol(keep)"],
    [L, "Symbol(inherited)"],
  ]);
function P(r) {
  return c.has(r);
}
var b = class {
  map;
  constructor(e) {
    this.map = d(e?.map);
  }
  *iterateByIdentifier(e) {
    let t = this.map.get(e);
    t && (yield* t);
  }
  has(e, t) {
    return this.map.get(e)?.has(t) ?? !1;
  }
  syncAddedNode(e, t, i) {
    t.dataIdentifier && this.map.add(t.dataIdentifier, e, i);
  }
  syncRemovedNode(e, t) {
    t.dataIdentifier && this.map.remove(t.dataIdentifier, e, !1, !0);
  }
  syncChangedField(e, t, i, n, o) {
    t === "dataIdentifier" &&
      (i && this.map.remove(i, e, !1, !0),
      n && (o.inTree ? this.map.add(n, e) : this.map.remove(n, e, !1, !0)));
  }
};
function p(r) {
  return new y(r);
}
var y = class {
  ids;
  base;
  constructor(e) {
    ((this.base = e), (this.ids = e ? new a(e) : new Set()));
  }
  get size() {
    return this.ids.size;
  }
  has(e) {
    return this.ids.has(e);
  }
  values() {
    return this.ids.values();
  }
  keys() {
    return this.ids.keys();
  }
  entries() {
    return this.ids.entries();
  }
  forEach(e, t) {
    this.ids.forEach(e, t);
  }
  [Symbol.iterator]() {
    return this.ids[Symbol.iterator]();
  }
  add(e, t = !1) {
    !t && (this.base?.has(e) ?? !1) ? this.ids.reset?.(e) : this.ids.add(e);
  }
  remove(e, t = !1) {
    if (!this.base) {
      this.ids.delete(e);
      return;
    }
    !t && (this.base?.has(e) ?? !1) ? this.ids.delete(e) : this.ids.reset?.(e);
  }
};
var k = class {
  set;
  constructor(e) {
    this.set = p(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, t, i) {
    t.isFormContainer && this.set.add(e, i);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, t, i, n, o) {
    if (t === "isFormContainer") {
      if (!o.inTree) {
        (i || n) && this.set.remove(e);
        return;
      }
      n ? this.set.add(e) : this.set.remove(e);
    }
  }
};
var g = class {
  map;
  constructor(e) {
    this.map = d(e?.map);
  }
  *iterateReplicaOwners(e) {
    let t = this.map.get(e);
    t && (yield* t);
  }
  has(e, t) {
    return this.map.get(e)?.has(t) ?? !1;
  }
  syncChangedField(e, t, i, n, o, s) {
    if (t === "replicaInfoMaster") {
      if (s) {
        (i && this.map.reset(i, e), n && this.map.reset(n, e));
        return;
      }
      i !== n && (i && this.map.deleteOwn(i, e), n && this.map.add(n, e, !0));
    }
  }
};
var K = class {
  set;
  constructor(e) {
    this.set = p(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, t, i) {
    t.dataIdentifier !== void 0 && this.set.add(e, i);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, t, i, n, o) {
    if (t === "dataIdentifier") {
      if (!o.inTree) {
        (i !== void 0 || n !== void 0) && this.set.remove(e);
        return;
      }
      i === void 0 && n !== void 0
        ? this.set.add(e)
        : i !== void 0 && n === void 0 && this.set.remove(e);
    }
  }
};
var m = "__$$framerCrdtNativeField$$__",
  T = new Map([...c].map(([r, e]) => [e, r]));
function ne(r) {
  return typeof r == "object" && r !== null && m in r;
}
function oe(r) {
  return { [m]: c.get(r) };
}
function se(r) {
  return T.get(r[m]);
}
export {
  N as a,
  u as b,
  D as c,
  A as d,
  O as e,
  v as f,
  b as g,
  k as h,
  g as i,
  K as j,
  w as k,
  R as l,
  j as m,
  L as n,
  U as o,
  B as p,
  P as q,
  ne as r,
  oe as s,
  se as t,
};
//# sourceMappingURL=chunk-2CMM7QDM.mjs.map
