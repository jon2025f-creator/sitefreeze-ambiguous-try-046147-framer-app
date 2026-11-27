import { a as R, b as I, c as d, f as c, l as S, u as T, v } from "chunk-3HO5QPBT.mjs";
import { b as m } from "chunk-FWZ2NLE7.mjs";
import { b as s } from "chunk-4JY5UMT2.mjs";
var w = ((i) => (
    (i[(i.Unknown = 0)] = "Unknown"),
    (i[(i.User = 1)] = "User"),
    (i[(i.Agent = 2)] = "Agent"),
    (i[(i.Plugin = 3)] = "Plugin"),
    (i[(i.System = 4)] = "System"),
    (i[(i.Mixed = 5)] = "Mixed"),
    i
  ))(w || {}),
  x = 27,
  N = 2 ** x - 1,
  u = 1,
  E = 23,
  b = 2 ** E - 1,
  h = 1,
  M = 3,
  H = 2 ** M - 1,
  l = 2 ** x,
  f = 2 ** E,
  B = 2 ** (x + E);
function F({ batchNo: t, rowCount: e, origin: r = 0 }) {
  return (
    s(e >= u && e <= N, () => `rowCount out of range: ${e}`),
    s(t >= h && t <= b, () => `batchNo out of range: ${t}`),
    s(r >= 0 && r <= H, () => `origin out of range: ${r}`),
    s(Number.isSafeInteger(t), () => `batchNo is not a safe integer: ${t}`),
    s(Number.isSafeInteger(e), () => `rowCount is not a safe integer: ${e}`),
    s(Number.isSafeInteger(r), () => `origin is not a safe integer: ${r}`),
    (r * f + t) * l + e
  );
}
function G(t) {
  if (!Number.isSafeInteger(t) || t < 0) return !1;
  let e = _(t),
    r = Math.floor(e / f),
    o = e % f,
    n = t - e * l;
  return r <= H && o >= h && o <= b && n >= u && n <= N;
}
function _(t) {
  return (
    s(Number.isSafeInteger(t), () => `batchId not safe integer: ${t}`),
    s(t >= 0, () => `batchId is negative: ${t}`),
    Math.floor(t / l)
  );
}
function W(t) {
  return _(t) % f;
}
function Y(t) {
  let e = _(t);
  return { rowCount: t - e * l, batchNo: e % f, origin: U(t) };
}
function U(t) {
  let e = Math.floor(t / B);
  return e <= 5 ? e : 0;
}
var X = {
  ROW_COUNT_MIN: u,
  ROW_COUNT_MAX: N,
  BATCH_NO_MIN: h,
  BATCH_NO_MAX: b,
  MIN_BATCH_ID: F({ batchNo: h, rowCount: u }),
};
function q(t, e = 0) {
  if (t.length === 0) return e;
  for (let r = 0, o = t.length; r < o; r++) {
    let n = t.charCodeAt(r);
    e = ((e << 5) - e + n) | 0;
  }
  return e;
}
var A = "__$$framerCrdtNativeField$$__",
  $ = new Map([...S].map(([t, e]) => [e, t]));
function j(t) {
  return typeof t == "object" && t !== null && A in t;
}
function ee(t) {
  return { [A]: S.get(t) };
}
function P(t) {
  return $.get(t[A]);
}
function te(t) {
  return j(t) ? P(t) : t;
}
var K = ["blockquote", "table", "tableRow", "bulletedList", "numberedList"],
  z = new Set(K);
function D(t) {
  return t.type === "richText";
}
function se(t) {
  s(D(t), "Only rich-text documents can be packed");
  let e = (r) => {
    if (!Array.isArray(r.childNodes)) return r;
    let o;
    for (let n = 0; n < r.childNodes.length; n++) {
      let a = r.childNodes[n];
      if (!m(a) || a instanceof T) continue;
      let i = z.has(a.type) ? e(a) : new v(a);
      i !== a && ((o ??= r.childNodes.slice()), (o[n] = i));
    }
    return o ? { ...r, childNodes: o } : r;
  };
  return e(t);
}
function fe(t) {
  return (
    m(t) &&
    D(t) &&
    (t.variant === "collectionControlProp" ||
      (typeof t.variant == "string" && t.variant.endsWith("Localized")))
  );
}
var C = class {
  map;
  constructor(e) {
    this.map = I(e?.map);
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
  syncChangedField(e, r, o, n, a, i) {
    if (r === "replicaInfoMaster") {
      if (i) {
        (o && this.map.reset(o, e), n && this.map.reset(n, e));
        return;
      }
      o !== n && (o && this.map.deleteOwn(o, e), n && this.map.add(n, e, !0));
    }
  }
};
var p = "@";
function le(t) {
  return t !== void 0 && t !== d && t !== c;
}
function ye(t) {
  if (t === d || t === c) return !0;
  if (typeof t != "string") return !1;
  let e = t.lastIndexOf(p);
  return e > 0 && e < t.length - 1;
}
function Se(t, e) {
  return `${t}${p}${e}`;
}
function xe(t) {
  (s(t !== d, "trying to get positionId of deleted child"),
    s(t !== c, "trying to get positionId of inherited child"));
  let e = t.lastIndexOf(p);
  return t.slice(e + 1);
}
function Ne(t) {
  if (t === d) return d;
  if (t === c) return c;
  let e = t.lastIndexOf(p);
  return t.slice(0, e);
}
function Ee(t) {
  if (typeof t != "string") return;
  let e = t.lastIndexOf(p);
  if (!(e <= 0 || e >= t.length - 1)) return t.slice(0, e);
}
function _e(t, e) {
  if (e < 0 || e >= t.length) throw new Error(`Index ${e} out of bounds`);
  let r = t[e];
  if (r === void 0) throw new Error(`Index ${e} not present`);
  return r;
}
var L = class {
  map;
  constructor(e) {
    this.map = I(e?.map);
  }
  *iterateByIdentifier(e) {
    let r = this.map.get(e);
    r && (yield* r);
  }
  has(e, r) {
    return this.map.get(e)?.has(r) ?? !1;
  }
  syncAddedNode(e, r, o) {
    r.dataIdentifier && this.map.add(r.dataIdentifier, e, o);
  }
  syncRemovedNode(e, r) {
    r.dataIdentifier && this.map.remove(r.dataIdentifier, e, !1, !0);
  }
  syncChangedField(e, r, o, n, a) {
    r === "dataIdentifier" &&
      (o && this.map.remove(o, e, !1, !0),
      n && (a.inTree ? this.map.add(n, e) : this.map.remove(n, e, !1, !0)));
  }
};
function y(t) {
  return new g(t);
}
var g = class {
  ids;
  base;
  constructor(e) {
    ((this.base = e), (this.ids = e ? new R(e) : new Set()));
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
var O = class {
  set;
  constructor(e) {
    this.set = y(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, r, o) {
    r.isFormContainer && this.set.add(e, o);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, r, o, n, a) {
    if (r === "isFormContainer") {
      if (!a.inTree) {
        (o || n) && this.set.remove(e);
        return;
      }
      n ? this.set.add(e) : this.set.remove(e);
    }
  }
};
var k = class {
  set;
  constructor(e) {
    this.set = y(e?.set);
  }
  *iterateAll() {
    yield* this.set;
  }
  has(e) {
    return this.set.has(e);
  }
  syncAddedNode(e, r, o) {
    r.dataIdentifier !== void 0 && this.set.add(e, o);
  }
  syncRemovedNode(e) {
    this.set.remove(e);
  }
  syncChangedField(e, r, o, n, a) {
    if (r === "dataIdentifier") {
      if (!a.inTree) {
        (o !== void 0 || n !== void 0) && this.set.remove(e);
        return;
      }
      o === void 0 && n !== void 0
        ? this.set.add(e)
        : o !== void 0 && n === void 0 && this.set.remove(e);
    }
  }
};
export {
  q as a,
  C as b,
  le as c,
  ye as d,
  Se as e,
  xe as f,
  Ne as g,
  Ee as h,
  _e as i,
  L as j,
  O as k,
  k as l,
  w as m,
  F as n,
  G as o,
  W as p,
  Y as q,
  U as r,
  j as s,
  ee as t,
  P as u,
  te as v,
  K as w,
  D as x,
  se as y,
  fe as z,
};
//# sourceMappingURL=chunk-AYQBYMX6.mjs.map
