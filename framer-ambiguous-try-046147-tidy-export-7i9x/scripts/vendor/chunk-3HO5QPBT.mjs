import { b as i } from "chunk-4JY5UMT2.mjs";
var I = Symbol("deleted"),
  g = Symbol("keep"),
  V = Symbol("does-not-exist"),
  K = Symbol("inherited"),
  k = Symbol("own-object-reference"),
  v = Symbol("own-array-reference"),
  O = "$keep",
  _ = "$value",
  S = "$deleted",
  R = new Map([
    [void 0, "undefined"],
    [I, "Symbol(deleted)"],
    [g, "Symbol(keep)"],
    [K, "Symbol(inherited)"],
    [k, "Symbol(own-object-reference)"],
    [v, "Symbol(own-array-reference)"],
  ]);
function A(r) {
  return R.has(r);
}
function D(r, e) {
  if (e === S) return;
  if (r.getNodeData(e)) return e;
  let t = e.indexOf(".");
  for (; t >= 0;) {
    let n = e.slice(0, t);
    if (r.getNodeData(n)) return n;
    t = e.indexOf(".", t + 1);
  }
}
function w(r) {
  return typeof r == "string" && r.startsWith("arr(") && r.endsWith(")");
}
function M(r) {
  return typeof r == "string" && r.startsWith("obj(") && r.endsWith(")");
}
function m(r) {
  return r.slice(4, -1);
}
function T(r, e) {
  if (Array.isArray(r)) {
    for (let t of r) T(t, e);
    return;
  }
  M(r) ? e(m(r), !1) : w(r) && e(m(r), !0);
}
function F(r) {
  return `arr(${r})`;
}
function H(r) {
  return `obj(${r})`;
}
var d = class {
    constructor(e) {
      this.value = e;
    }
    value;
  },
  u = class extends d {};
function E(r) {
  i(!(r instanceof u), "Packed items can only be items of a mergeable array");
}
function W(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
function C(r) {
  return a(r);
}
function P(r) {
  return h(r);
}
function a(r) {
  if (r instanceof d) return (E(r), a(r.value));
  if (r === null || typeof r == "string" || typeof r == "boolean") return r;
  if (typeof r == "number")
    return (
      i(Number.isFinite(r), () => `Inline atomic values only support finite numbers, got ${r}`),
      r === 0 ? 0 : r
    );
  if (Array.isArray(r))
    return r.map(
      (t) => (i(t !== void 0, "Inline atomic values can't contain undefined array items"), a(t))
    );
  i(L(r), () => `Inline atomic values only support plain JSON, got ${String(r)}`);
  let e = {};
  for (let t in r) {
    let n = r[t];
    n !== void 0 && (e[t] = a(n));
  }
  return e;
}
function h(r) {
  if (typeof r != "object" || r === null) return r;
  if (Array.isArray(r)) return r.map(h);
  let e = {};
  for (let t in r) e[t] = h(r[t]);
  return e;
}
function L(r) {
  if (typeof r != "object" || r === null) return !1;
  let e = Object.getPrototypeOf(r);
  return e === Object.prototype || e === null;
}
var l = class {
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
        let n = this.#t.has(e);
        return (this.#t.add(e), t || !n);
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
      for (let n of this.values()) e.call(t, n, n, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  c = class {
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
        let n = this.#t.has(e);
        return (this.#t.add(e), t || !n);
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
      for (let [n, o] of this.entries()) e.call(t, o, n, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return this.#e.get(e);
    }
    ensureOwned(e, t) {
      let n = this.#e.get(e);
      if (n !== void 0) return n;
      let o = t(this.get(e));
      return (this.set(e, o), o);
    }
  };
function x(r) {
  return new p(r);
}
var p = class {
  index;
  base;
  constructor(e) {
    ((this.base = e), (this.index = e ? new c(e) : new Map()));
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
    return this.index.ensureOwned(e, (t) => new l(t));
  }
  removeFromIndexSet(e, t, n = !1) {
    if (!(this.index instanceof Map)) return;
    let o = this.index.get(e);
    o && (o.delete(t), n && o.size === 0 && this.index.delete(e));
  }
  add(e, t, n = !1) {
    if (this.index instanceof Map) {
      this.getMutableIndexSet(e).add(t);
      return;
    }
    if (!n && (this.base?.get(e)?.has(t) ?? !1)) {
      this.index.getOwned(e)?.reset(t);
      return;
    }
    this.getMutableIndexSet(e).add(t);
  }
  remove(e, t, n = !1, o = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t, o);
      return;
    }
    let f = !n && (this.base?.get(e)?.has(t) ?? !1),
      s = !n && (this.base?.has(e) ?? !1);
    if (f) {
      this.getMutableIndexSet(e).delete(t);
      return;
    }
    let y = this.index.getOwned(e);
    (y?.reset(t), o && y?.size === 0 && !s && this.index.delete(e));
  }
  deleteOwn(e, t) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t);
      return;
    }
    this.index.get(e) && this.getMutableIndexSet(e).delete(t);
  }
  reset(e, t, n = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t);
      return;
    }
    let o = this.index.getOwned(e);
    (o?.reset(t), n && o?.size === 0 && this.index.reset(e));
  }
};
var b = class {
  map;
  constructor(e) {
    this.map = x(e?.map);
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
  syncAddedNode(e, t, n) {
    t.__class && this.map.add(t.__class, e, n);
  }
  syncRemovedNode(e, t) {
    t.__class && this.map.remove(t.__class, e);
  }
  syncChangedField(e, t, n, o, f, s) {
    t === "__class" &&
      n &&
      (n !== o || s) &&
      (s ? this.map.reset(n, e, !0) : this.map.remove(n, e));
  }
};
export {
  l as a,
  x as b,
  I as c,
  g as d,
  V as e,
  K as f,
  k as g,
  v as h,
  O as i,
  _ as j,
  S as k,
  R as l,
  A as m,
  D as n,
  w as o,
  M as p,
  m as q,
  T as r,
  F as s,
  H as t,
  d as u,
  u as v,
  E as w,
  W as x,
  C as y,
  P as z,
  b as A,
};
//# sourceMappingURL=chunk-3HO5QPBT.mjs.map
