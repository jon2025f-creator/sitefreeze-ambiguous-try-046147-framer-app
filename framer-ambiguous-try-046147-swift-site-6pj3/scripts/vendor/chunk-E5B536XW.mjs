import { b as i } from "chunk-4JY5UMT2.mjs";
var I = Symbol("deleted"),
  b = Symbol("keep"),
  R = Symbol("does-not-exist"),
  K = Symbol("inherited"),
  w = "$keep",
  M = "$value",
  S = "$deleted",
  v = new Map([
    [void 0, "undefined"],
    [I, "Symbol(deleted)"],
    [b, "Symbol(keep)"],
    [K, "Symbol(inherited)"],
  ]);
function T(n) {
  return v.has(n);
}
function E(n, e) {
  if (e === S) return;
  if (n.getNodeData(e)) return e;
  let t = e.indexOf(".");
  for (; t >= 0;) {
    let r = e.slice(0, t);
    if (n.getNodeData(r)) return r;
    t = e.indexOf(".", t + 1);
  }
}
function _(n) {
  return typeof n == "string" && n.startsWith("arr(") && n.endsWith(")");
}
function A(n) {
  return typeof n == "string" && n.startsWith("obj(") && n.endsWith(")");
}
function N(n) {
  return n.slice(4, -1);
}
function D(n) {
  return `arr(${n})`;
}
function j(n) {
  return `obj(${n})`;
}
var d = class {
    constructor(e) {
      this.value = e;
    }
    value;
  },
  f = class extends d {};
function g(n) {
  i(!(n instanceof f), "Packed items can only be items of a mergeable array");
}
function $(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
function B(n) {
  return a(n);
}
function F(n) {
  return h(n);
}
function a(n) {
  if (n instanceof d) return (g(n), a(n.value));
  if (n === null || typeof n == "string" || typeof n == "boolean") return n;
  if (typeof n == "number")
    return (
      i(Number.isFinite(n), () => `Inline atomic values only support finite numbers, got ${n}`),
      n === 0 ? 0 : n
    );
  if (Array.isArray(n))
    return n.map(
      (t) => (i(t !== void 0, "Inline atomic values can't contain undefined array items"), a(t))
    );
  i(k(n), () => `Inline atomic values only support plain JSON, got ${String(n)}`);
  let e = {};
  for (let t in n) {
    let r = n[t];
    r !== void 0 && (e[t] = a(r));
  }
  return e;
}
function h(n) {
  if (typeof n != "object" || n === null) return n;
  if (Array.isArray(n)) return n.map(h);
  let e = {};
  for (let t in n) e[t] = h(n[t]);
  return e;
}
function k(n) {
  if (typeof n != "object" || n === null) return !1;
  let e = Object.getPrototypeOf(n);
  return e === Object.prototype || e === null;
}
var l = class {
    #e = new Set();
    #t = new Set();
    #n;
    constructor(e) {
      this.#n = e;
    }
    add(e) {
      return (this.#t.delete(e), this.#e.add(e), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#n?.has(e)) {
        let r = this.#t.has(e);
        return (this.#t.add(e), t || !r);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#n?.has(e) ?? !1);
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#n)) for (let e of this.#n) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#n) return e;
      for (let t of this.#n) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *values() {
      for (let e of this.#e) yield e;
      if (this.#n) for (let e of this.#n) this.#e.has(e) || this.#t.has(e) || (yield e);
    }
    keys() {
      return this.values();
    }
    *entries() {
      for (let e of this.values()) yield [e, e];
    }
    forEach(e, t) {
      for (let r of this.values()) e.call(t, r, r, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  c = class {
    #e = new Map();
    #t = new Set();
    #n;
    constructor(e) {
      this.#n = e;
    }
    get(e) {
      if (this.#e.has(e)) return this.#e.get(e);
      if (!this.#t.has(e)) return this.#n?.get(e);
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#n?.has(e) ?? !1);
    }
    set(e, t) {
      return (this.#t.delete(e), this.#e.set(e, t), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#n?.has(e)) {
        let r = this.#t.has(e);
        return (this.#t.add(e), t || !r);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#n)) for (let e of this.#n.keys()) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#n) return e;
      for (let t of this.#n.keys()) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *entries() {
      for (let e of this.#e.entries()) yield e;
      if (this.#n)
        for (let [e, t] of this.#n.entries()) this.#e.has(e) || this.#t.has(e) || (yield [e, t]);
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    forEach(e, t) {
      for (let [r, o] of this.entries()) e.call(t, o, r, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return this.#e.get(e);
    }
    ensureOwned(e, t) {
      let r = this.#e.get(e);
      if (r !== void 0) return r;
      let o = t(this.get(e));
      return (this.set(e, o), o);
    }
  };
function m(n) {
  return new p(n);
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
  removeFromIndexSet(e, t, r = !1) {
    if (!(this.index instanceof Map)) return;
    let o = this.index.get(e);
    o && (o.delete(t), r && o.size === 0 && this.index.delete(e));
  }
  add(e, t, r = !1) {
    if (this.index instanceof Map) {
      this.getMutableIndexSet(e).add(t);
      return;
    }
    if (!r && (this.base?.get(e)?.has(t) ?? !1)) {
      this.index.getOwned(e)?.reset(t);
      return;
    }
    this.getMutableIndexSet(e).add(t);
  }
  remove(e, t, r = !1, o = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t, o);
      return;
    }
    let u = !r && (this.base?.get(e)?.has(t) ?? !1),
      s = !r && (this.base?.has(e) ?? !1);
    if (u) {
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
  reset(e, t, r = !1) {
    if (this.index instanceof Map) {
      this.removeFromIndexSet(e, t);
      return;
    }
    let o = this.index.getOwned(e);
    (o?.reset(t), r && o?.size === 0 && this.index.reset(e));
  }
};
var x = class {
  map;
  constructor(e) {
    this.map = m(e?.map);
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
  syncAddedNode(e, t, r) {
    t.__class && this.map.add(t.__class, e, r);
  }
  syncRemovedNode(e, t) {
    t.__class && this.map.remove(t.__class, e);
  }
  syncChangedField(e, t, r, o, u, s) {
    t === "__class" &&
      r &&
      (r !== o || s) &&
      (s ? this.map.reset(r, e, !0) : this.map.remove(r, e));
  }
};
export {
  l as a,
  m as b,
  I as c,
  b as d,
  R as e,
  K as f,
  w as g,
  M as h,
  S as i,
  v as j,
  T as k,
  E as l,
  _ as m,
  A as n,
  N as o,
  D as p,
  j as q,
  d as r,
  f as s,
  g as t,
  $ as u,
  B as v,
  F as w,
  x,
};
//# sourceMappingURL=chunk-E5B536XW.mjs.map
