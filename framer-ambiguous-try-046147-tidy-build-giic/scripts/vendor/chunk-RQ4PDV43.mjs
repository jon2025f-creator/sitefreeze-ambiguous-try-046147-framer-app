import { a as S, b as p, c as a, f as d, j as y, r as x, s as E } from "chunk-E5B536XW.mjs";
import { b as I } from "chunk-FWZ2NLE7.mjs";
import { b as s } from "chunk-4JY5UMT2.mjs";
function T(t, e = 0) {
  if (t.length === 0) return e;
  for (let r = 0, i = t.length; r < i; r++) {
    let o = t.charCodeAt(r);
    e = ((e << 5) - e + o) | 0;
  }
  return e;
}
var l = "__$$framerCrdtNativeField$$__",
  R = new Map([...y].map(([t, e]) => [e, t]));
function A(t) {
  return typeof t == "object" && t !== null && l in t;
}
function w(t) {
  return { [l]: y.get(t) };
}
function L(t) {
  return R.get(t[l]);
}
function O(t) {
  return A(t) ? L(t) : t;
}
var H = ["blockquote", "table", "tableRow", "bulletedList", "numberedList"],
  g = new Set(H);
function h(t) {
  return t.type === "richText";
}
function U(t) {
  s(h(t), "Only rich-text documents can be packed");
  let e = (r) => {
    if (!Array.isArray(r.childNodes)) return r;
    let i;
    for (let o = 0; o < r.childNodes.length; o++) {
      let n = r.childNodes[o];
      if (!I(n) || n instanceof x) continue;
      let c = g.has(n.type) ? e(n) : new E(n);
      c !== n && ((i ??= r.childNodes.slice()), (i[o] = c));
    }
    return i ? { ...r, childNodes: i } : r;
  };
  return e(t);
}
function z(t) {
  return (
    I(t) &&
    h(t) &&
    (t.variant === "collectionControlProp" ||
      (typeof t.variant == "string" && t.variant.endsWith("Localized")))
  );
}
var b = class {
  map;
  constructor(e) {
    this.map = p(e?.map);
  }
  iterateMasterIds() {
    return this.map.keys();
  }
  *iterateReplicaOwners(e) {
    let r = this.map.get(e);
    r && (yield* r);
  }
  has(e, r) {
    return this.map.get(e)?.has(r) ?? !1;
  }
  syncChangedField(e, r, i, o, n, c) {
    if (r === "replicaInfoMaster") {
      if (c) {
        (i && this.map.reset(i, e), o && this.map.reset(o, e));
        return;
      }
      i !== o && (i && this.map.deleteOwn(i, e), o && this.map.add(o, e, !0));
    }
  }
};
var f = "@";
function W(t) {
  return t !== void 0 && t !== a && t !== d;
}
function G(t) {
  if (t === a || t === d) return !0;
  if (typeof t != "string") return !1;
  let e = t.lastIndexOf(f);
  return e > 0 && e < t.length - 1;
}
function J(t, e) {
  return `${t}${f}${e}`;
}
function Q(t) {
  (s(t !== a, "trying to get positionId of deleted child"),
    s(t !== d, "trying to get positionId of inherited child"));
  let e = t.lastIndexOf(f);
  return t.slice(e + 1);
}
function X(t) {
  if (t === a) return a;
  if (t === d) return d;
  let e = t.lastIndexOf(f);
  return t.slice(0, e);
}
function ee(t) {
  if (typeof t != "string") return;
  let e = t.lastIndexOf(f);
  if (!(e <= 0 || e >= t.length - 1)) return t.slice(0, e);
}
function re(t, e) {
  if (e < 0 || e >= t.length) throw new Error(`Index ${e} out of bounds`);
  let r = t[e];
  if (r === void 0) throw new Error(`Index ${e} not present`);
  return r;
}
var N = class {
  map;
  constructor(e) {
    this.map = p(e?.map);
  }
  *iterateByIdentifier(e) {
    let r = this.map.get(e);
    r && (yield* r);
  }
  has(e, r) {
    return this.map.get(e)?.has(r) ?? !1;
  }
  syncAddedNode(e, r, i) {
    r.dataIdentifier && this.map.add(r.dataIdentifier, e, i);
  }
  syncRemovedNode(e, r) {
    r.dataIdentifier && this.map.remove(r.dataIdentifier, e, !1, !0);
  }
  syncChangedField(e, r, i, o, n) {
    r === "dataIdentifier" &&
      (i && this.map.remove(i, e, !1, !0),
      o && (n.inTree ? this.map.add(o, e) : this.map.remove(o, e, !1, !0)));
  }
};
function m(t) {
  return new u(t);
}
var u = class {
  ids;
  base;
  constructor(e) {
    ((this.base = e), (this.ids = e ? new S(e) : new Set()));
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
  forEach(e, r) {
    this.ids.forEach(e, r);
  }
  [Symbol.iterator]() {
    return this.ids[Symbol.iterator]();
  }
  add(e, r = !1) {
    !r && (this.base?.has(e) ?? !1) ? this.ids.reset?.(e) : this.ids.add(e);
  }
  remove(e, r = !1) {
    if (!this.base) {
      this.ids.delete(e);
      return;
    }
    !r && (this.base?.has(e) ?? !1) ? this.ids.delete(e) : this.ids.reset?.(e);
  }
};
var D = class {
  set;
  constructor(e) {
    this.set = m(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, r, i) {
    r.isFormContainer && this.set.add(e, i);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, r, i, o, n) {
    if (r === "isFormContainer") {
      if (!n.inTree) {
        (i || o) && this.set.remove(e);
        return;
      }
      o ? this.set.add(e) : this.set.remove(e);
    }
  }
};
var v = class {
  set;
  constructor(e) {
    this.set = m(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, r, i) {
    r.dataIdentifier !== void 0 && this.set.add(e, i);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, r, i, o, n) {
    if (r === "dataIdentifier") {
      if (!n.inTree) {
        (i !== void 0 || o !== void 0) && this.set.remove(e);
        return;
      }
      i === void 0 && o !== void 0
        ? this.set.add(e)
        : i !== void 0 && o === void 0 && this.set.remove(e);
    }
  }
};
export {
  T as a,
  b,
  W as c,
  G as d,
  J as e,
  Q as f,
  X as g,
  ee as h,
  re as i,
  N as j,
  D as k,
  v as l,
  A as m,
  w as n,
  L as o,
  O as p,
  H as q,
  h as r,
  U as s,
  z as t,
};
//# sourceMappingURL=chunk-RQ4PDV43.mjs.map
