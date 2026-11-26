import { a as cr, b as $t, c as ur, d as ft } from "chunk-YTNZQPDD.mjs";
import {
  a as Yn,
  b as Xn,
  c as H,
  d as ve,
  e as Ce,
  f as Q,
  g as B,
  h as Zn,
  i as Ae,
  j as nr,
  k as rr,
  l as ir,
  n as lt,
  o as sr,
  p as Oe,
  q as or,
  r as Kt,
  s as M,
  t as k,
  u as N,
  v as ar,
  y as dr,
  z as mr,
} from "chunk-AYQBYMX6.mjs";
import {
  A as tr,
  c as b,
  d as L,
  e as we,
  f as S,
  g as Se,
  h as He,
  i as R,
  j as Z,
  k as G,
  m as T,
  n as pe,
  o as j,
  p as K,
  q as _,
  r as ct,
  s as Ve,
  t as Fe,
  u as Re,
  v as Qn,
  w as jt,
  x as re,
  y as xe,
  z as er,
} from "chunk-3HO5QPBT.mjs";
import { a as Gn } from "chunk-VBCXFFMV.mjs";
import { a as ee } from "chunk-P7RVVTNH.mjs";
import { a as hr, b as lr, c as mt, d as Ke, e as fr } from "chunk-UAFAQVPO.mjs";
import { b as ye, c as le, d as X, e as ut, g as ht, h as je } from "chunk-FWZ2NLE7.mjs";
import { a as v, b as me, c as Jn } from "chunk-3PRKS5EZ.mjs";
import { b as l } from "chunk-4JY5UMT2.mjs";
var ps = ["client", "seq", "id", "key", "value", "user"],
  Wt = class {
    encode(e, t) {
      let n = e.main;
      for (let r of ps) {
        let i = n.columns[r];
        (t.writeString(r), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile();) {
        let r = t.readString(),
          i = n.columns[r];
        l(i, () => `Column ${r} not found`);
        let o = t.readString();
        (l(o === i.type, () => `Column type does not match: ${o} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = M(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: 0,
        time: 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        T(t) && (t = k(t)),
        { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user }
      );
    }
  },
  pr = { description: "Sets up migration with initial codec", migrate() {}, codec: new Wt() };
var pt = "$deleted",
  Gt = "$keep_value";
function ys(s) {
  let e = s.main.columns,
    t = new Set(),
    n = gs(e);
  for (let r = 0; r < n.length; r++) {
    let i = n[r],
      o = e.key.get(i),
      a = e.id.get(i),
      d = e.client.get(i);
    if (o === "parentid") {
      let h = e.value.get(i);
      if (h === null) {
        e.id._set(i, pt);
        continue;
      }
      if ((l(typeof h == "string", () => `parentid is not a string for row: ${i}`), Yt(h)))
        continue;
      let f = new Map(),
        m;
      for (let y = r + 1; y < n.length; y++) {
        let p = n[y];
        if (e.client.get(p) !== d) continue;
        let I = e.seq.get(p);
        if (m !== void 0 && I > m) break;
        let w = e.key.get(p),
          x = e.id.get(p),
          C = e.value.get(p);
        if (t.has(p) || typeof w != "number" || x !== `${h}.children` || C === pt || C === Gt)
          continue;
        m === void 0 && (m = I);
        let O = gr(C);
        (l(O, () => `should be a valid object reference: ${JSON.stringify(C)}`),
          O === a ? e.value._set(i, yr(h, w)) : f.set(O, w),
          t.add(p));
      }
      for (let y of f.keys()) {
        let p;
        for (let g = r + 1; g < n.length; g++) {
          let I = n[g];
          if (e.client.get(I) !== d) continue;
          let x = e.id.get(I),
            C = e.key.get(I),
            O = e.value.get(I);
          if (!(x !== y || C !== "parentid" || O !== h)) {
            if (Yt(O)) break;
            p = I;
            break;
          }
        }
        (l(p !== void 0, () => `failed to find parentid row for ${y}`),
          e.value._set(p, yr(h, f.get(y))));
      }
      continue;
    }
    if (o === "children") {
      e.value._set(i, Gt);
      continue;
    }
    let c = e.value.get(i);
    if (a.endsWith(".children") && c === Gt) {
      t.add(i);
      continue;
    }
    if (a.endsWith(".children") && c === pt) {
      t.add(i);
      continue;
    }
    let u = gr(c);
    if (!t.has(i) && a.endsWith(".children") && u && typeof o == "number") {
      let h = e.seq.get(i),
        f = !1;
      for (let m = r + 1; m < n.length; m++) {
        let y = n[m];
        if (e.client.get(y) !== d) continue;
        if (e.seq.get(y) !== h) break;
        let I = e.key.get(y),
          w = e.id.get(y);
        if (I !== "parentid" || w !== u) continue;
        let x = e.value.get(y);
        if (
          !Yt(x) &&
          (l(typeof x == "string", () => `expecting value to be a string for rowIdx ${y}`),
          a.startsWith(x))
        ) {
          ((f = !0), e.value._set(y, `${x}@${o}`), t.add(i));
          break;
        }
      }
      if (!f) {
        let m = a.split(".", 2)[0];
        (e.id._set(i, u), e.key._set(i, "parentid"), e.value._set(i, `${m}@${o}`));
      }
    }
  }
  for (let r of t) e.id.get(r).endsWith(".children") && e.id._set(r, pt);
}
var br = {
  description: "Migrates multi-seq rows for hierarchy changes to `{parentid}@{position}`",
  migrate: ys,
};
function gs(s) {
  let e = [];
  for (let t = 0; t < s.client.length; t++) {
    let n = s.key.get(t);
    if (n === "parentid" || n === "children") {
      e.push(t);
      continue;
    }
    s.id.get(t).endsWith(".children") && e.push(t);
  }
  return (
    e.sort((t, n) => {
      let r = s.seq.get(t),
        i = s.seq.get(n);
      return r === i ? s.client.get(t) - s.client.get(n) : r - i;
    }),
    e
  );
}
function Yt(s) {
  return typeof s == "string" && s.split("@").length === 2;
}
function yr(s, e) {
  return `${s}@${e.toString()}`;
}
function gr(s) {
  if (typeof s == "string" && s.startsWith("obj(")) return s.slice(4, -1);
}
function $e(s) {
  if (s === Uint8Array) return "U8";
  if (s === Uint16Array) return "U16";
  if (s === Uint32Array) return "U32";
  if (s === Float64Array) return "F64";
  throw new Error("Invalid array name");
}
var bs = 1024,
  ge = class {
    constructor(e, t, n) {
      this.capacity = e;
      this.arrayConstructor = t;
      n
        ? ((this.buffer = n.buffer),
          (this.length = n.length),
          l(
            this.length <= this.buffer.length && this.buffer.length <= this.capacity,
            () =>
              `Buffer capacity mismatch: ${this.length} <= ${this.buffer.length} <= ${this.capacity}`
          ))
        : (this.buffer = new t(Math.min(e, bs)));
    }
    capacity;
    arrayConstructor;
    buffer;
    length = 0;
    reserve(e) {
      if (e <= this.buffer.length) return;
      l(e <= this.capacity, () => `Bucket can't hold ${e} values, capacity is ${this.capacity}`);
      let t = Math.max(this.buffer.length, 1);
      for (; t < e;) t *= 2;
      let n = new this.arrayConstructor(Math.min(t, this.capacity));
      (n.set(this.buffer.subarray(0, this.length)), (this.buffer = n));
    }
    push(e) {
      (this.length === this.buffer.length && this.reserve(this.length + 1),
        (this.buffer[this.length] = e),
        (this.length += 1));
    }
  };
var de = 2 ** 17,
  $ = class {
    constructor(e, t = de, n) {
      this.arrayConstructor = e;
      this.bucketSize = t;
      this.name = n;
      (l((t & (t - 1)) === 0, `Bucket size must be a power of 2, got: ${t}`),
        (this.bucketShift = Math.log2(t)),
        (this.bucketMask = t - 1));
    }
    arrayConstructor;
    bucketSize;
    name;
    buckets = [];
    _length = 0;
    bucketShift;
    bucketMask;
    get type() {
      return `BucketedColumn(${$e(this.arrayConstructor)})`;
    }
    add(e) {
      let t = this.buckets[this.buckets.length - 1];
      ((!t || t.length >= t.capacity) &&
        ((t = new ge(this.bucketSize, this.arrayConstructor)), this.buckets.push(t)),
        t.push(e));
      let n = this._length;
      return ((this._length += 1), n);
    }
    addMany(e) {
      let t = this._length,
        n = 0;
      for (; n < e.length;) {
        let r = this.buckets[this.buckets.length - 1];
        (!r || r.length >= r.capacity) &&
          ((r = new ge(this.bucketSize, this.arrayConstructor)), this.buckets.push(r));
        let i = Math.min(e.length - n, r.capacity - r.length);
        r.reserve(r.length + i);
        for (let o = 0; o < i; o++) r.buffer[r.length + o] = e[n + o];
        ((r.length += i), (n += i));
      }
      return ((this._length += e.length), t);
    }
    get(e) {
      l(e >= 0 && e < this._length, () => this.outOfBoundsMessage(e));
      let t = e >> this.bucketShift,
        n = e & this.bucketMask,
        r = this.buckets[t];
      return (l(r, "invalid bucket index"), r.buffer[n]);
    }
    _set(e, t) {
      l(e >= 0 && e < this._length, () => this.outOfBoundsMessage(e));
      let n = e >> this.bucketShift,
        r = e & this.bucketMask,
        i = this.buckets[n];
      (l(i, "invalid bucket index"), (i.buffer[r] = t));
    }
    get length() {
      return this._length;
    }
    outOfBoundsMessage(e) {
      let t = this.name ? `column "${this.name}"` : `column ${this.type}`;
      return `index ${e} out of bounds in ${t} (size: ${this._length})`;
    }
    *writeSlices(e) {
      let t = Math.ceil(e / this.bucketSize);
      for (; this.buckets.length < t;)
        this.buckets.push(new ge(this.bucketSize, this.arrayConstructor));
      let n = 0;
      for (let r = 0; r < t; r++) {
        let i = this.buckets[r],
          o = e - n,
          a = o < i.capacity ? o : i.capacity;
        (i.reserve(a), yield i.buffer.subarray(0, a), (i.length = a), (n += a));
      }
      this._length = e;
    }
    *readSlices() {
      for (let e of this.buckets) yield e.buffer.subarray(0, e.length);
    }
    slice(e, t) {
      (e < 0 && (e = this.length + e),
        t < 0 && (t = this.length + t),
        t > this.length && (t = this.length));
      let n = e >> this.bucketShift,
        r = t >> this.bucketShift,
        i = t - e;
      if (i <= 0) return [];
      let o = Array.from({ length: i }),
        a = 0,
        d = e & this.bucketMask,
        c = this.buckets[n];
      if (n === r) {
        let f = t & this.bucketMask;
        for (let m = d; m < f; ++m) o[a++] = c.buffer[m];
        return o;
      }
      for (let f = d; f < this.bucketSize; ++f) o[a++] = c.buffer[f];
      for (let f = n + 1; f < r; ++f) {
        let m = this.buckets[f];
        for (let y = 0; y < m.length; ++y) o[a++] = m.buffer[y];
      }
      let u = t & this.bucketMask,
        h = this.buckets[r];
      if (h) for (let f = 0; f < u; ++f) o[a++] = h.buffer[f];
      return o;
    }
    serialize(e) {
      this.serializeRows(e, this.length);
    }
    serializeRows(e, t) {
      (l(t >= 0 && t <= this.length, () => `Row count ${t} is out of bounds`),
        e.writeVarUint(t),
        e.preallocateTypedArray(this.arrayConstructor.BYTES_PER_ELEMENT, t));
      let n = t;
      for (let r of this.buckets) {
        if (n === 0) break;
        let i = Math.min(r.length, n);
        (e.writeBytes(
          new Uint8Array(
            r.buffer.buffer,
            r.buffer.byteOffset,
            i * this.arrayConstructor.BYTES_PER_ELEMENT
          )
        ),
          (n -= i));
      }
    }
    deserialize(e, t) {
      let n = e.readTypedArrayBytes(this.arrayConstructor),
        r = this.arrayConstructor.BYTES_PER_ELEMENT;
      if (((this._length = n.byteLength / r), t?.skipData)) return;
      let i = this.bucketSize * r;
      for (let o = 0; o < n.byteLength; o += i) {
        let a = n.subarray(o, o + i),
          d = a.byteLength / r,
          c = t?.zeroCopyIndices && d === this.bucketSize && a.byteOffset % r === 0,
          u = c
            ? new this.arrayConstructor(a.buffer, a.byteOffset, d)
            : new this.arrayConstructor(d);
        (c || new Uint8Array(u.buffer, u.byteOffset, a.byteLength).set(a),
          this.buckets.push(
            new ge(this.bucketSize, this.arrayConstructor, { buffer: u, length: d })
          ));
      }
    }
  };
var P = class s {
  uniques = [];
  maxUniques;
  arrayConstructor;
  indices;
  count = 0;
  bucketSize;
  widenTo;
  lookup;
  cursor = 0;
  constructor(e, t, n) {
    ((this.arrayConstructor = e),
      (this.bucketSize = t),
      (this.widenTo = n),
      (this.indices = new $(e, t)),
      (this.maxUniques = wr(e)));
  }
  widen() {
    let e = this.widenTo;
    l(e, "Missing widened array constructor");
    let t = new $(e, this.bucketSize);
    for (let n of this.indices.readSlices()) t.addMany(n);
    ((this.indices = t),
      (this.arrayConstructor = e),
      (this.maxUniques = wr(e)),
      (this.widenTo = void 0));
  }
  get type() {
    return `LazyNormalizedBucketedColumn(ref: ${$e(this.arrayConstructor)})`;
  }
  widenToType(e) {
    this.widenTo && e === `LazyNormalizedBucketedColumn(ref: ${$e(this.widenTo)})` && this.widen();
  }
  static withBuckets({ buffer: e, size: t, widenTo: n }) {
    return { create: () => new s(e, t, n) };
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    (this.uniques.length >= this.maxUniques && this.widenTo && this.widen(),
      l(this.uniques.length < this.maxUniques, "limit reached for unique values"));
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.indices.add(t), (this.count = n + 1), n);
  }
  addMany(e) {
    let t = new Float64Array(e.length);
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        o = this.indexOfExisting(i);
      (o === void 0 && (o = this.addUnique(i)), (t[r] = o));
    }
    let n = this.indices.addMany(t);
    return ((this.count += e.length), n);
  }
  copySelectedRowsFrom(e, t, n) {
    (l(this.count === 0, "Selected rows can only be copied into an empty column"),
      l(e.length === t.length, "Row index map must match the source column"));
    let r = new Uint32Array(e.uniques.length),
      i = 0;
    for (let a of this.indices.writeSlices(n)) i += a.length;
    l(i === n, "Bucketed index slices must cover the requested row count");
    let o = 0;
    for (let a = 0; a < e.length; a++) {
      let d = t[a];
      if (d === 0) continue;
      let c = e.indices.get(a),
        u = r[c];
      if (u === 0) {
        let h = e.uniques[c];
        ((u = this.addUnique(h) + 1), (r[c] = u));
      }
      (this.indices._set(d - 1, u - 1), o++);
    }
    (l(o === n, "Row index map must contain the requested number of rows"), (this.count = n));
  }
  get(e) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let t = this.indices.get(e);
    return this.uniques[t];
  }
  _set(e, t) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), this.indices._set(e, n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      r = Array.from({ length: n }),
      i = this.indices.slice(e, t);
    for (let o = 0; o < n; ++o) r[o] = this.uniques[i[o]];
    return r;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (Ir(e, this.uniques), this.indices.serialize(e));
  }
  serializeRows(e, t) {
    if ((l(t >= 0 && t <= this.count, () => `Row count ${t} is out of bounds`), t === this.count)) {
      this.serialize(e);
      return;
    }
    let n = new Uint32Array(this.uniques.length),
      r = [],
      i = new this.arrayConstructor(t),
      o = 0;
    for (let d of this.indices.readSlices()) {
      for (let c = 0; c < d.length && o < t; c++, o++) {
        let u = d[c],
          h = n[u];
        (h === 0 && (r.push(this.uniques[u]), (h = r.length), (n[u] = h)), (i[o] = h - 1));
      }
      if (o === t) break;
    }
    Ir(e, r);
    let a = new $(this.arrayConstructor, this.bucketSize);
    (a.addMany(i), a.serialize(e));
  }
  deserialize(e, t) {
    if ((t?.type && this.widenToType(t.type), t?.skipData)) {
      (e.readDeferredBytes(e.readVarUint()),
        this.indices.deserialize(e, t),
        (this.count = this.indices.length));
      return;
    }
    this.uniques = JSON.parse(e.readString());
    for (let n = 0; n < this.uniques.length; ++n) {
      let r = this.uniques[n];
      if (M(r)) {
        let i = N(r);
        this.uniques[n] = i;
      }
    }
    (this.indices.deserialize(e, t),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
  releaseLookup() {
    ((this.lookup = void 0), (this.cursor = 0));
  }
};
function Ir(s, e) {
  s.writeString(JSON.stringify(e, (t, n) => (T(n) ? k(n) : n)));
}
function wr(s) {
  if (s === Uint8Array) return 2 ** 8 - 1;
  if (s === Uint16Array) return 2 ** 16 - 1;
  if (s === Uint32Array) return 2 ** 32 - 1;
  if (s === Float64Array) return Number.MAX_SAFE_INTEGER;
  throw new Error(`Unsupported array constructor: ${s.name}`);
}
var yt = class {
  constructor(e) {
    this.values = e;
    let t = this.capacityFor(e.length);
    ((this.slots = new Uint32Array(t)), (this.hashes = new Int32Array(t)));
    for (let n = 0; n < e.length; n++) this.insert(e[n], n);
  }
  values;
  slots;
  hashes;
  size = 0;
  get(e) {
    let t = this.slots,
      n = this.hashes,
      r = t.length - 1,
      i = Sr(e),
      o = i & r,
      a;
    for (; (a = t[o]) !== 0;) {
      if (n[o] === i && this.values[a - 1] === e) return a - 1;
      o = (o + 1) & r;
    }
  }
  set(e, t) {
    ((this.size + 1) * 2 > this.slots.length && this.grow(), this.insert(e, t));
  }
  insert(e, t) {
    let n = this.slots,
      r = this.hashes,
      i = n.length - 1,
      o = Sr(e),
      a = o & i,
      d;
    for (; (d = n[a]) !== 0;) {
      if (r[a] === o && this.values[d - 1] === e) {
        n[a] = t + 1;
        return;
      }
      a = (a + 1) & i;
    }
    ((n[a] = t + 1), (r[a] = o), (this.size += 1));
  }
  grow() {
    let e = this.slots,
      t = this.hashes,
      n = e.length * 2,
      r = new Uint32Array(n),
      i = new Int32Array(n),
      o = n - 1;
    for (let a = 0; a < e.length; a++) {
      let d = e[a];
      if (d === 0) continue;
      let c = t[a],
        u = c & o;
      for (; r[u] !== 0;) u = (u + 1) & o;
      ((r[u] = d), (i[u] = c));
    }
    ((this.slots = r), (this.hashes = i));
  }
  capacityFor(e) {
    let t = 16;
    for (; t < e * 2;) t *= 2;
    return t;
  }
};
function Sr(s) {
  let e = 2166136261;
  for (let t = 0; t < s.length; t++) e = Math.imul(e ^ s.charCodeAt(t), 16777619);
  return e | 0;
}
var Zt = (1 << 29) - 24,
  vr = new TextEncoder(),
  Qt = new TextDecoder();
function Cr(s, e) {
  return Array.isArray(e) ? e.map((t) => (T(t) ? k(t) : t)) : T(e) ? k(e) : e;
}
function Rr(s) {
  let e = typeof s;
  return e === "string" || e === "number" || e === "boolean" || s === null;
}
function Is(s) {
  for (let e = 0; e < s.length; ++e) if (!Rr(s[e])) return !1;
  return !0;
}
function en(s) {
  return Rr(s) ? JSON.stringify(s) : (JSON.stringify(s, Cr) ?? "null");
}
function tn(s) {
  if (Array.isArray(s)) {
    for (let e = 0; e < s.length; ++e) M(s[e]) && (s[e] = N(s[e]));
    return s;
  }
  return M(s) ? N(s) : s;
}
var We = 91,
  te = 93,
  xr = 123,
  Ar = 125,
  gt = 34,
  Or = 92,
  Te = 44,
  bt = class {
    constructor(e, t, n) {
      this.bytes = e;
      this.estimatedLength = t;
      this.dataAvailability = n;
    }
    bytes;
    estimatedLength;
    dataAvailability;
    offsets;
    count = 0;
    values;
    hydrated;
    get(e) {
      if ((this.ensureIndex(), e < 0 || e >= this.count))
        throw new RangeError("unique index out of bounds");
      if (this.hydrated[e] === 0) {
        let t = e * 2,
          n = this.offsets[t],
          r = this.offsets[t + 1];
        try {
          this.values[e] = tn(JSON.parse(Qt.decode(this.bytes.subarray(n, r))));
        } catch (i) {
          throw new Error(
            `uniques array: invalid element JSON at bytes ${n}-${r} of ${this.bytes.length}`,
            { cause: i }
          );
        }
        this.hydrated[e] = 1;
      }
      return this.values[e];
    }
    get length() {
      return (this.ensureIndex(), this.count);
    }
    index() {
      this.ensureIndex();
    }
    toArray() {
      this.ensureIndex();
      let e = Array.from({ length: this.count });
      for (let t = 0; t < e.length; t++) e[t] = this.get(t);
      return e;
    }
    ensureIndex() {
      if (this.offsets) return;
      let e = new Uint32Array(Math.max(16, this.estimatedLength * 2)),
        t = 0,
        n = this.dataAvailability ? new Xt(this.bytes, this.dataAvailability) : void 0,
        r = n?.skipWhitespace(0) ?? ie(this.bytes, 0);
      if (this.bytes[r] !== We)
        throw new Error(`uniques array: expected '[' at byte ${r} of ${this.bytes.length}`);
      for (r = n?.skipWhitespace(r + 1) ?? ie(this.bytes, r + 1); this.bytes[r] !== te;) {
        let i = n?.scanValueEnd(r) ?? Mr(this.bytes, r);
        if ((t + 1) * 2 > e.length) {
          let o = new Uint32Array(e.length * 2);
          (o.set(e), (e = o));
        }
        if (
          ((e[t * 2] = r),
          (e[t * 2 + 1] = i),
          (t += 1),
          (r = n?.skipWhitespace(i) ?? ie(this.bytes, i)),
          n?.ensure(r + 1),
          this.bytes[r] === Te)
        ) {
          if (
            ((r = n?.skipWhitespace(r + 1) ?? ie(this.bytes, r + 1)),
            n?.ensure(r + 1),
            this.bytes[r] === te)
          )
            throw new Error(
              `uniques array: unexpected ',' before ']' at byte ${r} of ${this.bytes.length}`
            );
          continue;
        }
        if (this.bytes[r] !== te)
          throw new Error(
            `uniques array: expected ',' or ']' at byte ${r} of ${this.bytes.length}`
          );
      }
      if (((r = n?.skipWhitespace(r + 1) ?? ie(this.bytes, r + 1)), r !== this.bytes.length))
        throw new Error(`uniques array: unexpected trailing bytes at ${r} of ${this.bytes.length}`);
      ((this.offsets = e),
        (this.count = t),
        (this.values = new Array(t)),
        (this.hydrated = new Uint8Array(t)));
    }
  },
  ws = 64 * 1024 * 1024,
  Ss = 16 * 1024 * 1024,
  vs = Cs() ?? 4 * 1024 * 1024;
function Cs() {
  if (typeof process > "u") return;
  let s = Number(process.env.UNIQUES_BATCH_BYTES);
  if (Number.isFinite(s) && s > 0) return Math.min(s, Zt - 2);
}
function nn(s, e, t, n) {
  if (n) {
    Jt(s, e, n);
    return;
  }
  if (t && (t?.bodyBytes > Zt || (t.mixed && t.bodyBytes >= ws))) {
    Jt(s, e);
    return;
  }
  try {
    let r = Is(e) ? JSON.stringify(e) : JSON.stringify(e, Cr);
    s.writeString(r);
  } catch (r) {
    if (r instanceof RangeError) {
      Jt(s, e);
      return;
    }
    throw r;
  }
}
function Jt(s, e, t) {
  let n = s.byteOffset;
  s.writePaddedVarUint(0);
  let r = s.byteOffset;
  s.writeUint8(We);
  let i = new Uint8Array(64 * 1024);
  for (let o = 0; o < e.length; ++o) {
    o > 0 && s.writeUint8(Te);
    let a = t?.[o] ?? en(e[o]),
      d = a.length * 3;
    if (d > Ss) {
      s.writeBytes(vr.encode(a));
      continue;
    }
    d > i.length && (i = new Uint8Array(d));
    let { written: c } = vr.encodeInto(a, i);
    s.writeBytes(i.subarray(0, c));
  }
  (s.writeUint8(te), s.writePaddedVarUintAt(n, s.byteOffset - r));
}
function Tr(s, e) {
  let t = s.readVarUint(),
    n = s.readBytes(t);
  if (n.length > Zt) return (e && ((e.mixed = void 0), (e.bodyBytes = n.length)), Rs(n));
  let r = JSON.parse(Qt.decode(n)),
    i = !1;
  for (let o = 0; o < r.length; ++o) {
    let a = r[o];
    (typeof a == "object" && a !== null && (i = !0), (r[o] = tn(a)));
  }
  return (e && ((e.mixed = i), (e.bodyBytes = n.length)), r);
}
function Rs(s, e = vs) {
  let t = [],
    n = 0;
  if (((n = ie(s, n)), s[n] !== We))
    throw new Error(`uniques array: expected '[' at byte ${n} of ${s.length}`);
  if (((n += 1), (n = ie(s, n)), s[n] === te)) n += 1;
  else {
    let r = !1;
    for (; n < s.length;) {
      let i = n,
        o = n,
        a;
      for (; n < s.length;) {
        let d = Mr(s, n);
        ((o = d), (n = ie(s, d)));
        let c = s[n];
        if (c === Te) {
          if (((a = Te), (n += 1), (n = ie(s, n)), s[n] === te))
            throw new Error(`uniques array: unexpected ',' before ']' at byte ${n} of ${s.length}`);
          if (d - i >= e) break;
          continue;
        }
        if (c === te) {
          ((a = te), (n += 1));
          break;
        }
        throw new Error(`uniques array: expected ',' or ']' at byte ${n} of ${s.length}`);
      }
      if ((xs(t, s, i, o), a === te)) {
        r = !0;
        break;
      }
      if (a === void 0) break;
    }
    if (!r) throw new Error(`uniques array: unterminated array (${s.length} bytes)`);
  }
  if (((n = ie(s, n)), n !== s.length))
    throw new Error(`uniques array: unexpected trailing bytes at ${n} of ${s.length}`);
  return t;
}
function xs(s, e, t, n) {
  try {
    let r = "[" + Qt.decode(e.subarray(t, n)) + "]",
      i = JSON.parse(r);
    for (let o = 0; o < i.length; ++o) s.push(tn(i[o]));
  } catch (r) {
    throw new Error(`uniques array: invalid element JSON at bytes ${t}-${n} of ${e.length}`, {
      cause: r,
    });
  }
}
function Mr(s, e) {
  let t = 0,
    n = e;
  for (; n < s.length;) {
    switch (s[n]) {
      case gt:
        n = As(s, n);
        continue;
      case xr:
      case We:
        t += 1;
        break;
      case Ar:
      case te:
        if (t === 0) return n;
        t -= 1;
        break;
      case Te:
        if (t === 0) return n;
        break;
      default:
        break;
    }
    n += 1;
  }
  if (t !== 0) throw new Error(`uniques array: unterminated value from byte ${e} of ${s.length}`);
  return s.length;
}
function As(s, e) {
  let t = e + 1;
  for (;;) {
    let n = s.indexOf(gt, t);
    if (n === -1)
      throw new Error(`uniques array: unterminated string from byte ${e} of ${s.length}`);
    let r = 0;
    for (let i = n - 1; i > e && s[i] === Or; --i) r += 1;
    if (r % 2 === 0) return n + 1;
    t = n + 1;
  }
}
function ie(s, e) {
  let t = e;
  for (; t < s.length;) {
    let n = s[t];
    if (n === 32 || n === 9 || n === 10 || n === 13) t += 1;
    else break;
  }
  return t;
}
var Xt = class {
  constructor(e, t) {
    this.bytes = e;
    this.dataAvailability = t;
    this.availableBytes = e.subarray(0, 0);
  }
  bytes;
  dataAvailability;
  available = 0;
  availableBytes;
  ensure(e) {
    e <= this.available ||
      ((this.available = this.dataAvailability.waitFor(this.bytes, e)),
      (this.availableBytes = this.bytes.subarray(0, this.available)));
  }
  scanValueEnd(e) {
    let t = 0,
      n = e;
    for (; n < this.bytes.length;) {
      switch ((this.ensure(n + 1), this.bytes[n])) {
        case gt:
          n = this.skipString(n);
          continue;
        case xr:
        case We:
          t += 1;
          break;
        case Ar:
        case te:
          if (t === 0) return n;
          t -= 1;
          break;
        case Te:
          if (t === 0) return n;
          break;
        default:
          break;
      }
      n += 1;
    }
    if (t !== 0)
      throw new Error(`uniques array: unterminated value from byte ${e} of ${this.bytes.length}`);
    return this.bytes.length;
  }
  skipWhitespace(e) {
    let t = e;
    for (; t < this.bytes.length;) {
      this.ensure(t + 1);
      let n = this.bytes[t];
      if (n !== 32 && n !== 9 && n !== 10 && n !== 13) break;
      t += 1;
    }
    return t;
  }
  skipString(e) {
    let t = e + 1;
    for (;;) {
      this.ensure(t + 1);
      let n = this.availableBytes.indexOf(gt, t);
      if (n === -1) {
        if (this.available >= this.bytes.length)
          throw new Error(
            `uniques array: unterminated string from byte ${e} of ${this.bytes.length}`
          );
        t = this.available;
        continue;
      }
      let r = 0;
      for (let i = n - 1; i > e && this.bytes[i] === Or; --i) r += 1;
      if (r % 2 === 0) return n + 1;
      t = n + 1;
    }
  }
};
function rn(s, e) {
  if (!s.some(ye)) return { uniques: s, indices: e };
  let t = new Map(),
    n = [],
    r = [],
    i;
  for (let a = 0; a < s.length; a++) {
    let d = s[a],
      c;
    if (ye(d)) {
      c = en(d);
      let u = t.get(c);
      if (u !== void 0) {
        if (!i) {
          i = new Uint32Array(s.length);
          for (let h = 0; h < a; h++) i[h] = h;
        }
        i[a] = u;
        continue;
      }
      t.set(c, n.length);
    }
    (i && (i[a] = n.length), n.push(d), r.push(c));
  }
  if (!i) return { uniques: s, indices: e, objectJson: r };
  let o = new Uint32Array(e.length);
  for (let a = 0; a < e.length; a++) o[a] = i[e[a]];
  return { uniques: n, indices: o, objectJson: r };
}
var Me = class {
    constructor(e = !0) {
      this.scanUniques = e;
    }
    scanUniques;
    map;
    cursor = 0;
    get(e, t) {
      if (!this.scanUniques) return this.map?.get(e);
      let n = this.map?.get(e);
      if (n !== void 0) return n;
      for (; this.cursor < t.length; ++this.cursor) {
        let r = t[this.cursor];
        if (((this.map ??= new Map()), this.map.set(r, this.cursor), Object.is(r, e)))
          return this.cursor;
      }
    }
    set(e, t) {
      ((this.map ??= new Map()), this.map.set(e, t), (this.cursor = t + 1));
    }
    rehydrate(e) {
      if (!(this.cursor >= e.length))
        for (this.map ??= new Map(); this.cursor < e.length; ++this.cursor)
          this.map.set(e[this.cursor], this.cursor);
    }
    reset() {
      ((this.map = void 0), (this.cursor = 0));
    }
  },
  sn = class {
    map;
    get(e, t) {
      return this.ensureMap(t).get(e);
    }
    set(e, t, n) {
      this.ensureMap(n).set(e, t);
    }
    rehydrate(e) {
      this.ensureMap(e);
    }
    reset() {
      this.map = void 0;
    }
    ensureMap(e) {
      return (this.map ??= new yt(e));
    }
  },
  ke = class {
    constructor(e = []) {
      this.values = e;
    }
    values;
    get length() {
      return this.values.length;
    }
    get(e) {
      return this.values[e];
    }
    toArray() {
      return this.values;
    }
  },
  A = class {
    uniquesArray = new ke();
    indices;
    count = 0;
    lookup = new Me();
    uniquesHints;
    constructor(e = 1024) {
      this.indices = new Uint32Array(e);
    }
    get uniques() {
      if (this.uniquesArray instanceof ke) return this.uniquesArray.values;
      let e = this.uniquesArray.toArray();
      return ((this.uniquesArray = new ke(e)), e);
    }
    set uniques(e) {
      this.uniquesArray = new ke(e);
    }
    get type() {
      return "LazyNormalizedColumn";
    }
    ensureCapacity(e) {
      if (e <= this.indices.length) return;
      let t = this.indices.length || 1;
      for (; t < e;) t <<= 1;
      let n = new Uint32Array(t);
      (n.set(this.indices), (this.indices = n));
    }
    indexOfExisting(e) {
      let t = this.uniques;
      return this.lookup.get(e, t);
    }
    addUnique(e) {
      let t = this.uniques,
        n = t.length;
      return (t.push(e), this.lookup.set(e, n, t), n);
    }
    add(e) {
      let t = this.indexOfExisting(e);
      t === void 0 && (t = this.addUnique(e));
      let n = this.count;
      return (this.ensureCapacity(n + 1), (this.indices[n] = t), (this.count = n + 1), n);
    }
    addMany(e) {
      let t = this.count;
      this.ensureCapacity(t + e.length);
      for (let n = 0; n < e.length; n++) {
        let r = e[n],
          i = this.indexOfExisting(r);
        (i === void 0 && (i = this.addUnique(r)), (this.indices[t + n] = i));
      }
      return ((this.count += e.length), t);
    }
    get(e) {
      if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
      return this.unique(this.indices[e]);
    }
    unique(e) {
      return this.uniquesArray.get(e);
    }
    get uniqueCount() {
      return this.uniquesArray.length;
    }
    rowCodes() {
      return this.indices;
    }
    copySelectedRowsFrom(e, t, n) {
      (l(this.count === 0, "Selected rows can only be copied into an empty column"),
        l(e.length === t.length, "Row index map must match the source column"));
      let r = new Uint32Array(e.uniqueCount),
        i = e.indices;
      this.ensureCapacity(n);
      for (let o = 0; o < e.length; o++) {
        let a = t[o];
        if (a === 0) continue;
        let d = i[o],
          c = r[d];
        if (c === 0) {
          let u = e.unique(d);
          ((c = this.addUnique(u) + 1), (r[d] = c));
        }
        this.indices[a - 1] = c - 1;
      }
      this.count = n;
    }
    codeOf(e) {
      return this.indexOfExisting(e);
    }
    _set(e, t) {
      if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
      let n = this.indexOfExisting(t);
      (n === void 0 && (n = this.addUnique(t)), (this.indices[e] = n));
    }
    slice(e, t) {
      let n = Math.max(0, t - e),
        r = Array.from({ length: n });
      for (let i = 0; i < n; ++i) r[i] = this.get(e + i);
      return r;
    }
    get length() {
      return this.count;
    }
    serialize(e) {
      let {
        uniques: t,
        indices: n,
        objectJson: r,
      } = rn(this.uniques, this.indices.subarray(0, this.count));
      (nn(e, t, this.uniquesHints, r), e.writeTypedArray(n));
    }
    serializeRows(e, t) {
      if (
        (l(t >= 0 && t <= this.count, () => `Row count ${t} is out of bounds`), t === this.count)
      ) {
        this.serialize(e);
        return;
      }
      let n = new Uint32Array(this.uniqueCount),
        r = [],
        i = new Uint32Array(t);
      for (let c = 0; c < t; c++) {
        let u = this.indices[c],
          h = n[u];
        (h === 0 && (r.push(this.unique(u)), (h = r.length), (n[u] = h)), (i[c] = h - 1));
      }
      let { uniques: o, indices: a, objectJson: d } = rn(r, i);
      (nn(e, o, this.uniquesHints, d), e.writeTypedArray(a));
    }
    deserialize(e, t) {
      if (t?.skipData) {
        (e.readDeferredBytes(e.readVarUint()),
          this.readIndices(e, t.zeroCopyIndices),
          (this.uniques = []),
          (this.uniquesHints = void 0),
          (this.lookup = new Me(!t?.skipDedupeScan)));
        return;
      }
      if (t?.lazyUniques) {
        let i = e.readDeferredBytes(e.readVarUint()),
          o = new bt(i, t.estimatedUniqueCount ?? this.count, e.dataAvailability);
        (t.indexLazyUniques && o.index(),
          this.readIndices(e, t.zeroCopyIndices),
          (this.uniquesHints = void 0),
          (this.uniquesArray = o),
          (this.lookup = new Me(!t?.skipDedupeScan)));
        return;
      }
      let n = { mixed: void 0, bodyBytes: 0 },
        r = Tr(e, n);
      ((this.uniques = r),
        (this.uniquesHints = n),
        (this.lookup =
          t?.stringCodeMap === !0 && r.every((i) => typeof i == "string")
            ? new sn()
            : new Me(!t?.skipDedupeScan)),
        this.readIndices(e, t?.zeroCopyIndices));
    }
    rehydrate() {
      this.lookup.rehydrate(this.uniques);
    }
    releaseLookup() {
      this.lookup.reset();
    }
    readIndices(e, t = !1) {
      ((this.indices = e.readTypedArray(Uint32Array, !t)), (this.count = this.indices.length));
    }
  };
var kr = "$keep_value",
  Nr = "$deleted",
  Dr = {
    description: "Replace deleted and keep values with symbols",
    migrate(s) {
      let e = s.main.columns;
      if (e.value instanceof A || e.value instanceof P) {
        let t = e.value.uniques;
        for (let n in t) t[n] === Nr ? (t[n] = b) : t[n] === kr && (t[n] = L);
      } else
        for (let t = 0; t < e.length; ++t) {
          let n = e.value.get(t);
          n === Nr ? e.value._set(t, b) : n === kr && e.value._set(t, L);
        }
    },
  };
function Os(s) {
  let e = s.main.columns;
  if (e.client instanceof A || e.client instanceof P) {
    let t = e.client.uniques;
    for (let n in t) t[n] = Br(t[n]);
  } else
    for (let t = 0; t < e.length; ++t) {
      let n = e.client.get(t);
      e.client._set(t, Br(n));
    }
}
var Er = { description: "Migrates row `client` to u32", migrate: Os };
function Br(s) {
  return s >>> 0;
}
var Ge = 62,
  on = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  zr = {};
for (let s = 0; s < on.length; s++) zr[on[s]] = s;
function an(s, e) {
  if (
    (l(s >= 0, () => `Cannot encode negative number: ${s}`),
    l(Number.isInteger(s), () => `Cannot encode non-integer: ${s}`),
    s === 0)
  )
    return "0".repeat(e);
  let t = [],
    n = s;
  for (; n > 0;) (t.push(on[n % Ge]), (n = Math.floor(n / Ge)));
  let r = t.reverse().join("");
  return (
    l(r.length <= e, () => `Encoded value exceeds width: ${r} from ${s} width ${e}`),
    r.padStart(e, "0")
  );
}
function dn(s) {
  l(s.length > 0, "Cannot decode empty string");
  let e = 0;
  for (let t = 0; t < s.length; t++) {
    let n = s[t],
      r = zr[n];
    (l(r !== void 0, () => `Invalid base62 character: ${n} in string ${s}`), (e = e * Ge + r));
  }
  return (l(e <= Number.MAX_SAFE_INTEGER, "Decoded number exceeds MAX_SAFE_INTEGER"), e);
}
var Ne = 5,
  _r = 6,
  It = Ne + _r;
function Ts(s) {
  let e = an(s.position, Ne),
    t = an(s.client, _r);
  return e + t;
}
function Ms(s) {
  l(s.length === It, () => `Component string must be ${It} chars, got ${s.length}`);
  let e = s.slice(0, Ne),
    t = s.slice(Ne);
  return { position: dn(e), client: dn(t) };
}
var cn = ":";
function be(s) {
  return s.map(Ts).join(cn);
}
function De(s) {
  l(s.length > 0, "Position ID is empty");
  let e = s.split(cn);
  return (l(e.length > 0, "Position ID has no parts"), e.map(Ms));
}
var ks = new RegExp(`^[0-9A-Za-z]{${It}}(?:${cn}[0-9A-Za-z]{${It}})*$`);
function ce(s) {
  return typeof s != "string" ? !1 : ks.test(s);
}
var Ye = "$deleted",
  Ns = "$keep",
  wt = Ge ** Ne - 1;
function Ds(s) {
  let e = s.main.columns;
  (Bs(e), Es(e), zs(e), qs(e));
}
var Ur = {
  description: "Migrates array positions from fraction indices to Logoot-style position ids",
  migrate: Ds,
};
function Bs(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    let n = s.id.get(t);
    if (n === Ye) continue;
    let r = s.key.get(t);
    if (r !== "parentid") continue;
    let i = s.value.get(t);
    if (i === b) continue;
    if ((l(typeof i == "string"), i.split("@").length === 1)) {
      s.id._set(t, Ye);
      continue;
    }
    let a = s.client.get(t),
      d = s.seq.get(t),
      c = `${n}/${r}/${i}${a}/${d}`;
    if (e.has(c)) {
      s.id._set(t, Ye);
      continue;
    }
    e.add(c);
  }
}
function Es(s) {
  for (let e = 0; e < s.client.length; e++)
    s.key.get(e) !== -1 || s.value.get(e) !== L || s.key._set(e, Ns);
}
function zs(s) {
  let e = _s(s);
  for (let [t, n] of e) {
    let r = Array.from(n.keys()).sort((o, a) => o - a),
      i = Math.floor(wt / (r.length + 3));
    l(i > 0, "step must be positive");
    for (let o = 0; o < r.length; o++) {
      let a = (o + 1) * i;
      l(a <= wt, "position exceeds max position");
      let d = r[o],
        c = n.get(d);
      c.sort((h, f) => Us(s, h, f));
      let u = [];
      for (let h of c) {
        if (s.value.get(h) === b) {
          let m = u.pop();
          (l(m, "expected to have a previous position to delete"), s.key._set(h, m));
          continue;
        }
        let f = be([{ position: a, client: s.client.get(h) }]);
        (s.key._set(h, f), u.push(f));
      }
    }
  }
}
function _s(s) {
  let e = new Map();
  for (let t = 0; t < s.client.length; t++) {
    let n = s.id.get(t);
    if (n === Ye) continue;
    let r = s.key.get(t);
    if (typeof r != "number") continue;
    let i = e.get(n);
    i || ((i = new Map()), e.set(n, i));
    let o = i.get(r);
    (o || ((o = []), i.set(r, o)), o.push(t));
  }
  return e;
}
function Us(s, e, t) {
  let n = s.seq.get(e),
    r = s.seq.get(t);
  if (n < r) return -1;
  if (n > r) return 1;
  let i = s.client.get(e),
    o = s.client.get(t);
  return i < o ? -1 : i > o ? 1 : 0;
}
function qs(s) {
  let e = Ps(s);
  for (let [t, n] of e) {
    let r = n.sort((o, a) => Ls(s, o, a)),
      i = Math.floor(wt / (r.length + 3));
    l(i > 0, "step must be positive");
    for (let o = 0; o < r.length; o++) {
      let a = (o + 1) * i;
      l(a <= wt, "position exceeds max position");
      let { rowIdx: d } = r[o];
      Hs(s, d, t, a);
    }
  }
}
function Ps(s) {
  let e = new Map();
  for (let t = 0; t < s.client.length; t++) {
    if (s.id.get(t) === Ye || s.key.get(t) !== "parentid") continue;
    let i = s.value.get(t);
    if (i === b) continue;
    l(typeof i == "string");
    let o = i.split("@");
    l(o.length === 2, "invalid hierarchy key");
    let a = o[0],
      d = parseFloat(o[1]),
      c = e.get(a);
    (c || ((c = []), e.set(a, c)), c.push({ rowIdx: t, value: d }));
  }
  return e;
}
function Ls(s, e, t) {
  if (e.value < t.value) return -1;
  if (e.value > t.value) return 1;
  let n = s.seq.get(e.rowIdx),
    r = s.seq.get(t.rowIdx);
  if (n > r) return -1;
  if (n < r) return 1;
  let i = s.client.get(e.rowIdx),
    o = s.client.get(t.rowIdx);
  return i > o ? -1 : i < o ? 1 : 0;
}
function Hs(s, e, t, n) {
  let r = be([{ position: n, client: s.client.get(e) }]);
  s.value._set(e, `${t}@${r}`);
}
var Vs = ["client", "seq", "batch", "id", "key", "value", "user"],
  un = class {
    encode(e, t) {
      let n = e.main;
      for (let r of Vs) {
        let i = n.columns[r];
        (t.writeString(r), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile();) {
        let r = t.readString(),
          i = n.columns[r];
        l(i, () => `Column ${r} not found`);
        let o = t.readString();
        (l(o === i.type, () => `Column type does not match: ${o} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = M(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: e.batch ?? 0,
        time: 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        T(t) && (t = k(t)),
        {
          client: e.client,
          seq: e.seq,
          id: e.id,
          key: e.key,
          value: t,
          user: e.user,
          batch: e.batch,
        }
      );
    }
  };
function Fs(s) {
  let e = s.main.columns,
    t = new Map();
  for (let i = 0; i < e.client.length; i++) {
    let o = e.client.get(i),
      a = t.get(o);
    a === void 0 ? t.set(o, 1) : t.set(o, a + 1);
  }
  let n = new Map();
  for (let [i, o] of t) n.set(i, lt({ batchNo: 1, rowCount: o }));
  let r = P.withBuckets({ buffer: Uint32Array }).create();
  for (let i = 0; i < e.client.length; i++) {
    let o = e.client.get(i),
      a = n.get(o);
    r.add(a);
  }
  e.batch = r;
}
var qr = {
  description: "Adds batch column and populates initial value",
  codec: new un(),
  migrate: Fs,
};
function js(s) {
  let e = s.main.columns;
  Ks(e);
  let t = new Map();
  for (let n = 0; n < e.length; n++) {
    if (e.id.get(n) === G) continue;
    let i = e.value.get(n);
    if (typeof i != "string" || !i.startsWith("arr(")) continue;
    let o = i.slice(4, -1),
      a = t.get(o);
    if (a) {
      a.referenceRowIdx.push(n);
      continue;
    }
    t.set(o, { itemRowIdxs: [], referenceRowIdx: [n], keepRowIdx: -1, isAtomic: !1 });
  }
  for (let n = 0; n < e.length; n++) {
    let r = e.id.get(n);
    if (!t.has(r)) continue;
    let i = t.get(r);
    if (e.key.get(n) === R) {
      (l(i.keepRowIdx === -1, () => `array has multiple keep rows: ${r}`), (i.keepRowIdx = n));
      continue;
    }
    let a = e.value.get(n);
    if (typeof a == "string" && (a.startsWith("arr(") || a.startsWith("obj("))) {
      l(i.itemRowIdxs.length === 0, () => `array has mixed primitive/reference items: ${r}`);
      continue;
    }
    (!i.isAtomic && a === b) || ((i.isAtomic = !0), i.itemRowIdxs.push(n));
  }
  for (let [n, r] of t) {
    if (!r.isAtomic) continue;
    for (let u of r.referenceRowIdx) e.id._set(u, G);
    r.itemRowIdxs.sort((u, h) => {
      let f = e.seq.get(u),
        m = e.seq.get(h);
      if (f < m) return -1;
      if (f > m) return 1;
      let y = e.client.get(u),
        p = e.client.get(h);
      return y < p ? -1 : y > p ? 1 : 0;
    });
    let i = n.split(".");
    l(i.length >= 2, () => `invalid array reference id: ${n}`);
    let o = i.pop(),
      a = i.join("."),
      d = [],
      c = r.keepRowIdx;
    (l(c !== -1, () => `array reference has no keep row: ${n}`),
      e.id._set(c, a),
      e.key._set(c, o),
      e.value._set(c, []));
    for (let u of r.itemRowIdxs) {
      e.id._set(u, a);
      let h = e.key.get(u),
        f = e.value.get(u);
      if (f === b) {
        let m = d.findIndex((y) => y.key === h);
        m !== -1 && d.splice(m, 1);
      } else {
        let m = d.findIndex((y) => y.key > h);
        m !== -1 ? d.splice(m, 0, { key: h, value: f }) : d.push({ key: h, value: f });
      }
      (e.key._set(u, o),
        e.value._set(
          u,
          d.map(({ value: m }) => m)
        ));
    }
  }
}
function Ks(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    let n = s.id.get(t);
    if (n === G) continue;
    let r = s.key.get(t),
      i = s.client.get(t),
      o = s.seq.get(t),
      a = s.value.get(t);
    typeof a == "symbol" && (a = a.toString());
    let d = `${n}/${r}/${a}/${i}/${o}`;
    if (e.has(d)) {
      s.id._set(t, G);
      continue;
    }
    e.add(d);
  }
}
var Pr = { description: "Migrates arrays of primitives to atomic array values", migrate: js };
var Lr = "$keep",
  hn = "$deleted";
function $s(s) {
  let e = s.main.columns,
    t = Gs(e),
    n = Ys(e, t);
  for (let [r, i] of n) {
    i.sort((d, c) => Js(e, d, c));
    let o = new Map(),
      a = new Map();
    for (let d = 0; d < i.length; d++) {
      let c = i[d],
        u = e.id.get(c);
      l(u === r, () => `array reference id does not match row id: ${u}`);
      let h = e.key.get(c);
      l(h !== Lr, () => `array reference key cannot be $keep: ${h}`);
      let f = e.value.get(c);
      if (
        (l(
          f === b || ln(f),
          () => `array reference value must be object reference: ${JSON.stringify(f)}`
        ),
        f === b)
      )
        continue;
      let m = f.slice(4, -1);
      (o.set(m, h), a.set(h, m));
    }
    for (let d = 0; d < i.length; d++) {
      let c = i[d],
        u = e.key.get(c),
        h = e.value.get(c);
      if (h === b) {
        let m = a.get(u);
        if (m === void 0) {
          e.id._set(c, hn);
          continue;
        }
        let y = o.get(m);
        u === y ? e.key._set(c, m) : e.id._set(c, hn);
        continue;
      }
      l(ln(h), () => `array reference value must be object reference: ${JSON.stringify(h)}`);
      let f = h.slice(4, -1);
      (e.key._set(c, f), e.value._set(c, u));
    }
  }
}
function Ws(s) {
  return typeof s == "string" && s.startsWith("arr(");
}
function Gs(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    if (s.id.get(t) === hn) continue;
    let r = s.value.get(t);
    if (!Ws(r)) continue;
    let i = r.slice(4, -1);
    e.add(i);
  }
  return e;
}
function ln(s) {
  return typeof s == "string" && s.startsWith("obj(");
}
function Ys(s, e) {
  let t = new Map([...e].map((n) => [n, []]));
  for (let n = 0; n < s.client.length; n++) {
    let r = s.id.get(n);
    if (!t.has(r) || s.key.get(n) === Lr) continue;
    let o = s.value.get(n);
    (l(o === b || ln(o), "only DELETED_VALUE and object references can be reference array items"),
      t.get(r).push(n));
  }
  return t;
}
function Js(s, e, t) {
  let n = s.seq.get(e),
    r = s.seq.get(t);
  if (n < r) return -1;
  if (n > r) return 1;
  let i = s.client.get(e),
    o = s.client.get(t);
  return i < o ? -1 : i > o ? 1 : 0;
}
var Hr = {
  description: "Migrates array of objects to invert index from position-keyed to id-keyed",
  migrate: $s,
};
var W = class s {
  constructor(e, t) {
    this.parentHistory = e;
    this.parentOverrides = t;
  }
  parentHistory;
  parentOverrides;
  clone() {
    let e = new Map();
    for (let [t, n] of this.parentOverrides) {
      let r = new Map();
      for (let [i, o] of n) {
        let a = new Map();
        for (let [d, c] of o) a.set(d, { ...c });
        r.set(i, a);
      }
      e.set(t, r);
    }
    return new s([...this.parentHistory], e);
  }
};
var Xs = 1e3,
  Zs = 1e4,
  Qs = 512,
  fn = Xs,
  eo = Qs,
  U = class {
    seqs = [];
    idxs = [];
    _maxSize = fn;
    constructor(e) {
      let t = e?.maxSize ?? fn;
      this._maxSize = Gn(t, fn, Zs);
    }
    get maxSize() {
      return this._maxSize;
    }
    clear() {
      ((this.seqs = []), (this.idxs = []));
    }
    load(e, t) {
      let n = e.length === t.length && e.length <= this._maxSize;
      ((this.seqs = n ? e : []), (this.idxs = n ? t : []));
    }
    get(e) {
      let t = this.seqs.length;
      if (t === 0) return 0;
      let n = ee(this.seqs, e, Vr);
      return n < t && this.seqs[n] === e ? this.idxs[n] : 0;
    }
    add(e, t) {
      let n = ee(this.seqs, e, Vr);
      if (n < this.seqs.length && this.seqs[n] === e) {
        t < this.idxs[n] && ((this.idxs[n] = t), this.propagateLeftFrom(n));
        return;
      }
      if (this.maxSize > 0 && this.seqs.length >= this.maxSize) {
        let i = this.seqs[this.seqs.length - this.maxSize];
        if (i !== void 0 && i > e) return;
      }
      (this.seqs.splice(n, 0, e),
        this.idxs.splice(n, 0, t),
        n + 1 < this.idxs.length && (this.idxs[n] = Math.min(this.idxs[n], this.idxs[n + 1])),
        this.propagateLeftFrom(n),
        this.seqs.length > this.maxSize + eo && this.trimToMaxSize());
    }
    trimToMaxSize() {
      if (this.maxSize) {
        let e = this.seqs.length - this.maxSize;
        e > 0 && (this.seqs.splice(0, e), this.idxs.splice(0, e));
      }
    }
    propagateLeftFrom(e) {
      let t = this.idxs[e];
      for (let n = e - 1; n >= 0 && !(this.idxs[n] <= t); n--) this.idxs[n] = t;
    }
    __snapshot() {
      return this.seqs.map((e, t) => ({ seq: e, idx: this.idxs[t] }));
    }
  };
function Vr(s, e) {
  return s - e;
}
function Fr(s) {
  let e = "";
  for (let t of s) e += String.fromCharCode(t);
  return btoa(e);
}
function jr(s) {
  let e = atob(s),
    t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
var Kr = [1, 128, 16384, 2097152, 268435456, 34359738368, 4398046511104, 562949953421312],
  St = 4294967295,
  z = class {
    constructor(e, t) {
      this.buffer = e;
      this.dataAvailability = t;
      ((this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.availableBytes = t ? 0 : e.byteLength));
    }
    buffer;
    dataAvailability;
    view;
    availableBytes;
    decoder = new TextDecoder();
    byteOffset = 0;
    ensureAvailable(e) {
      return e <= this.availableBytes
        ? this.availableBytes
        : ((this.availableBytes =
            this.dataAvailability?.waitFor(this.buffer, e) ?? this.buffer.byteLength),
          this.refreshView(),
          this.availableBytes);
    }
    refreshView() {
      this.view.byteLength !== this.buffer.byteLength &&
        (this.view = new DataView(
          this.buffer.buffer,
          this.buffer.byteOffset,
          this.buffer.byteLength
        ));
    }
    align(e) {
      let t = (e - (this.byteOffset % e)) % e;
      this.byteOffset += t;
    }
    endOfFile() {
      return this.byteOffset >= this.buffer.byteLength;
    }
    readUint8() {
      this.ensureAvailable(this.byteOffset + 1);
      let e = this.view.getUint8(this.byteOffset);
      return ((this.byteOffset += 1), e);
    }
    readUint16() {
      this.ensureAvailable(this.byteOffset + 2);
      let e = this.view.getUint16(this.byteOffset, !0);
      return ((this.byteOffset += 2), e);
    }
    readUint32() {
      this.ensureAvailable(this.byteOffset + 4);
      let e = this.view.getUint32(this.byteOffset, !0);
      return ((this.byteOffset += 4), e);
    }
    readFloat64() {
      this.ensureAvailable(this.byteOffset + 8);
      let e = this.view.getFloat64(this.byteOffset, !0);
      return ((this.byteOffset += 8), e);
    }
    readVarUint() {
      let e = this.buffer,
        t = this.byteOffset,
        n = 0,
        r = 0;
      for (;;) {
        if ((this.ensureAvailable(t + 1), t >= e.length)) throw new Error("VarUint truncated");
        let i = e[t++];
        if (((n += (i & 127) * Kr[r]), (i & 128) === 0)) break;
        if (((r += 1), r >= Kr.length)) throw new Error("VarUint is too big");
      }
      return ((this.byteOffset = t), n);
    }
    readString() {
      let e = this.readVarUint(),
        t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || t > St) throw new Error("Invalid string length");
      let n = this.ensureAvailable(t);
      if (t > n || t > this.buffer.byteLength) throw new Error("String truncated");
      let r = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), this.decoder.decode(r));
    }
    readBytes(e) {
      let t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || e < 0 || t > St) throw new Error("Invalid byte length");
      let n = this.ensureAvailable(t);
      if (t > n || t > this.buffer.byteLength) throw new Error("Bytes truncated");
      let r = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), r);
    }
    readDeferredBytes(e) {
      let t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || e < 0 || t > St)
        throw new Error("Invalid deferred byte length");
      if (
        (this.dataAvailability?.prepare?.(this.buffer, t),
        this.refreshView(),
        t > this.buffer.byteLength)
      )
        throw new Error("Deferred bytes truncated");
      let n = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), n);
    }
    readTypedArrayBytes(e) {
      let t = this.readVarUint(),
        n = e.BYTES_PER_ELEMENT;
      this.align(n);
      let r = t * n;
      if (!Number.isSafeInteger(r) || r < 0 || r > St)
        throw new Error("Invalid typed array length");
      let i = this.byteOffset + r;
      if (!Number.isSafeInteger(i)) throw new Error("Invalid typed array length");
      let o = this.ensureAvailable(i);
      if (i > o || i > this.buffer.byteLength) throw new Error("Typed array truncated");
      let a = this.buffer.subarray(this.byteOffset, i);
      return ((this.byteOffset = i), a);
    }
    readTypedArray(e, t = !1) {
      let n = this.readTypedArrayBytes(e),
        r = n.byteLength / e.BYTES_PER_ELEMENT;
      if (t || n.byteOffset % e.BYTES_PER_ELEMENT !== 0) {
        let i = new ArrayBuffer(n.byteLength);
        return (new Uint8Array(i).set(n), new e(i, 0, r));
      }
      return new e(n.buffer, n.byteOffset, r);
    }
  };
var oe = 1024 * 1024,
  V = class {
    encoder = new TextEncoder();
    alignmentOrigin = 0;
    chunks = [new Uint8Array(oe)];
    scratch = new ArrayBuffer(8);
    scratchView = new DataView(this.scratch);
    byteOffset = 0;
    align(e) {
      let t = this.byteOffset - this.alignmentOrigin,
        n = (e - (t % e)) % e;
      this.writePadding(n);
    }
    withAlignmentOrigin(e, t) {
      let n = this.alignmentOrigin;
      this.alignmentOrigin = e;
      try {
        return t();
      } finally {
        this.alignmentOrigin = n;
      }
    }
    writeUint8(e) {
      this.remainingInCurrentChunk() === 0 && this.addChunk();
      let t = Math.floor(this.byteOffset / oe);
      ((this.chunks[t][this.byteOffset % oe] = e), (this.byteOffset += 1));
    }
    writeUint16(e) {
      (this.scratchView.setUint16(0, e, !0), this.writeScratch(2));
    }
    writeUint32(e) {
      (this.scratchView.setUint32(0, e, !0), this.writeScratch(4));
    }
    writeFloat64(e) {
      (this.scratchView.setFloat64(0, e, !0), this.writeScratch(8));
    }
    writeFloat64At(e, t) {
      (this.scratchView.setFloat64(0, t, !0),
        this.writeBytesAt(e, new Uint8Array(this.scratch, 0, 8)));
    }
    writeVarUint(e) {
      let t = e;
      for (; t >= 128;) (this.writeUint8((t % 128) | 128), (t = Math.floor(t / 128)));
      this.writeUint8(t);
    }
    static paddedVarUintWidth = 8;
    writePaddedVarUint(e) {
      this.writeBytes($r(e));
    }
    writePaddedVarUintAt(e, t) {
      this.writeBytesAt(e, $r(t));
    }
    writeString(e) {
      let t = this.encoder.encode(e);
      (this.writeVarUint(t.length), this.writeBytes(t));
    }
    writeTypedArray(e, t = e.length) {
      this.writeVarUint(t);
      let n = this.preallocateTypedArray(e.BYTES_PER_ELEMENT, t),
        r = new Uint8Array(e.buffer, e.byteOffset, n);
      this.writeBytes(r);
    }
    preallocateTypedArray(e, t) {
      return (this.align(e), t * e);
    }
    writeBytes(e) {
      let t = 0;
      for (; t < e.length;) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let n = this.currentChunk(),
          r = this.currentChunkOffset(),
          i = Math.min(e.length - t, n.length - r);
        (n.set(e.subarray(t, t + i), r), (t += i), (this.byteOffset += i));
      }
    }
    getBuffer() {
      let e = new Uint8Array(this.byteOffset),
        t = 0;
      for (let n of this.getWrittenChunks()) (e.set(n, t), (t += n.length));
      return e;
    }
    async writeToStream(e) {
      for (let t of this.getWrittenChunks())
        e.write(t) || (await new Promise((n) => e.once("drain", n)));
      return this.byteOffset;
    }
    writeScratch(e) {
      this.writeBytes(new Uint8Array(this.scratch, 0, e));
    }
    writeBytesAt(e, t) {
      let n = e,
        r = 0;
      for (; r < t.length;) {
        let { chunk: i, chunkIndex: o } = this.getChunk(n),
          a = o * oe,
          d = n - a,
          c = Math.min(t.length - r, i.length - d);
        (i.set(t.subarray(r, r + c), d), (r += c), (n += c));
      }
    }
    writePadding(e) {
      for (; e > 0;) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let t = Math.min(e, this.remainingInCurrentChunk());
        ((this.byteOffset += t), (e -= t));
      }
    }
    getWrittenChunks() {
      return this.chunks
        .map((e, t) => {
          let n = t * oe,
            r = Math.min(e.length, Math.max(0, this.byteOffset - n));
          return e.subarray(0, r);
        })
        .filter((e) => e.length > 0);
    }
    currentChunk() {
      return this.getChunk(this.byteOffset).chunk;
    }
    currentChunkOffset() {
      return this.byteOffset % oe;
    }
    remainingInCurrentChunk() {
      return this.byteOffset === this.chunks.length * oe ? 0 : oe - this.currentChunkOffset();
    }
    addChunk() {
      this.chunks.push(new Uint8Array(oe));
    }
    getChunk(e) {
      let t = Math.floor(e / oe),
        n = this.chunks[t];
      if (n) return { chunk: n, chunkIndex: t };
      throw new Error(`Invalid byte offset: ${e}`);
    }
  };
function $r(s) {
  if (!Number.isSafeInteger(s) || s < 0)
    throw new Error(`padded varint requires a non-negative safe integer, got ${s}`);
  let e = V.paddedVarUintWidth,
    t = new Uint8Array(e),
    n = s;
  for (let r = 0; r < e; ++r) {
    let i = r === e - 1;
    ((t[r] = (n % 128) | (i ? 0 : 128)), (n = Math.floor(n / 128)));
  }
  return (l(n === 0, "value doesn't fit in bytes"), t);
}
var F = class s {
  constructor(e = []) {
    this.values = e;
  }
  values;
  get count() {
    return this.values.length;
  }
  add(e) {
    let t = Wr(this.values, e);
    return t >= 0 ? !1 : (this.values.splice(-(t + 1), 0, e), !0);
  }
  has(e) {
    return Wr(this.values, e) >= 0;
  }
  clone() {
    return new s([...this.values]);
  }
  copyIntoBitmap(e) {
    for (let t of this.values) e.add(t);
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
  serialize(e) {
    let t = new Uint16Array(this.values.length);
    for (let n = 0; n < t.length; ++n) t[n] = this.values[n];
    e.writeTypedArray(t);
  }
  deserialize(e) {
    l(this.values.length === 0, "ArrayContainer deserialize must be called with empty array");
    let t = e.readTypedArray(Uint16Array);
    for (let n = 0; n < t.length; ++n) this.values[n] = t[n];
  }
};
function Wr(s, e) {
  let t = 0,
    n = s.length - 1;
  for (; t <= n;) {
    let r = (t + n) >>> 1,
      i = s[r];
    if (i < e) {
      t = r + 1;
      continue;
    }
    if (i > e) {
      n = r - 1;
      continue;
    }
    return r;
  }
  return -(t + 1);
}
var Je = 2048,
  Y = class s {
    constructor(e = new Uint32Array(Je), t = 0) {
      this.words = e;
      this._count = t;
    }
    words;
    _count;
    get count() {
      return this._count;
    }
    add(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return n & i ? !1 : ((this.words[t] = n | i), (this._count += 1), !0);
    }
    has(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return !!(n & i);
    }
    clone() {
      return new s(this.words.slice(), this._count);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.words.length; e++) {
        let t = this.words[e] ?? 0,
          n = e << 5;
        for (; t !== 0;) {
          let r = t & -t,
            i = 31 - Math.clz32(r);
          (yield n + i, (t &= t - 1));
        }
      }
    }
    copyIntoArray(e) {
      for (let t of this) e.values.push(t);
    }
    serialize(e) {
      (e.writeUint32(this.count), e.writeTypedArray(this.words));
    }
    deserialize(e) {
      (l(this.count === 0, "BitmapContainer deserialize should be called with an empty bitmap"),
        (this._count = e.readUint32()));
      let t = e.readTypedArray(Uint32Array);
      (l(t.length === Je, () => `unexpected bitmap word count: ${t.length}`), this.words.set(t));
    }
  };
var Xe = { Array: 0, Bitmap: 1 };
function Gr(s, e) {
  if (s instanceof F && e instanceof F) return to(s, e);
  if (s instanceof F && e instanceof Y) return no(s, e);
  if (s instanceof Y && e instanceof F) return ro(s, e);
  if (s instanceof Y && e instanceof Y) return io(s, e);
}
function to(s, e) {
  let t = [],
    n = s.values,
    r = e.values,
    i = 0,
    o = 0;
  for (; i < n.length && o < r.length;) {
    let a = n[i],
      d = r[o];
    if (a === d) {
      ((i += 1), (o += 1));
      continue;
    }
    if (a < d) {
      (t.push(a), (i += 1));
      continue;
    }
    o += 1;
  }
  for (; i < n.length; i++) t.push(n[i]);
  if (t.length !== 0) return new F(t);
}
function no(s, e) {
  let t = s.values.filter((n) => !e.has(n));
  if (t.length !== 0) return new F(t);
}
function ro(s, e) {
  let t = s.words.slice(),
    n = s.count;
  for (let r of e.values) {
    let i = r >>> 5,
      o = 1 << (r & 31),
      a = t[i];
    a & o && ((t[i] = a & ~o), (n -= 1));
  }
  if (n !== 0) return new Y(t, n);
}
function io(s, e) {
  let t = new Uint32Array(Je),
    n = 0;
  for (let r = 0; r < Je; r++) {
    let i = (s.words[r] ?? 0) & ~(e.words[r] ?? 0);
    ((t[r] = i), (n += so(i)));
  }
  if (n !== 0) return new Y(t, n);
}
function so(s) {
  let e = s >>> 0,
    t = 0;
  for (; e !== 0;) ((e &= e - 1), (t += 1));
  return t;
}
var Yr = 4096,
  mn = 16,
  Jr = 65535,
  Ze = class s {
    containers = new Map();
    _count = 0;
    get count() {
      return this._count;
    }
    get keys() {
      return Array.from(this.containers.keys()).sort((e, t) => e - t);
    }
    add(e) {
      Qe(e, "value");
      let t = e >>> mn,
        n = e & Jr,
        r = this.containers.get(t);
      return r
        ? r.add(n)
          ? ((this._count += 1),
            r instanceof F && r.count > Yr && this.containers.set(t, oo(r)),
            !0)
          : !1
        : (this.containers.set(t, new F([n])), (this._count += 1), !0);
    }
    has(e) {
      Qe(e, "value");
      let t = e >>> mn,
        n = e & Jr,
        r = this.containers.get(t);
      return r ? r.has(n) : !1;
    }
    andNot(e) {
      let t = new s();
      for (let n of this.keys) {
        let r = this.containers.get(n);
        if (!r) continue;
        let i = e.containers.get(n);
        if (!i) {
          let a = r.clone();
          (t.containers.set(n, a), (t._count += a.count));
          continue;
        }
        let o = Gr(r, i);
        o &&
          (o instanceof Y && o.count <= Yr && (o = ao(o)),
          t.containers.set(n, o),
          (t._count += o.count));
      }
      return t;
    }
    clone() {
      let e = new s();
      for (let t of this.keys) {
        let n = this.containers.get(t);
        n && e.containers.set(t, n.clone());
      }
      return ((e._count = this._count), e);
    }
    *[Symbol.iterator]() {
      for (let e of this.keys) {
        let t = this.containers.get(e);
        if (t) for (let n of t) yield (((e << mn) >>> 0) + n) >>> 0;
      }
    }
    serialize(e) {
      (e.writeUint32(this._count), e.writeUint32(this.containers.size));
      for (let t of this.keys) {
        let n = this.containers.get(t);
        (l(n, () => `missing container for key ${t}`),
          e.writeUint16(t),
          e.writeUint8(n instanceof F ? Xe.Array : Xe.Bitmap),
          n.serialize(e));
      }
    }
    deserialize(e) {
      (l(this.containers.size === 0, "RoaringBitmap32 deserialize must be called when empty"),
        (this._count = e.readUint32()));
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let r = e.readUint16(),
          i = e.readUint8(),
          o;
        (i === Xe.Array ? (o = new F()) : i === Xe.Bitmap && (o = new Y()),
          l(o, () => `invalid container type: ${i}`),
          o.deserialize(e),
          this.containers.set(r, o));
      }
    }
  };
function oo(s) {
  let e = new Y();
  return (s.copyIntoBitmap(e), e);
}
function ao(s) {
  let e = new F();
  return (s.copyIntoArray(e), e);
}
var co = 4294967295;
function Qe(s, e) {
  l(
    Number.isInteger(s) && s >= 0 && s <= co,
    () => `${e} must be an unsigned 32-bit integer, received: ${s}`
  );
}
var et = class s {
  seqMapByClient = new Map();
  _count = 0;
  get count() {
    return this._count;
  }
  add(e, t) {
    (Qe(e, "client"), Xr(t, "seq"));
    let { seqHigh: n, seqLow: r } = Zr(t),
      i = this.seqMapByClient.get(e);
    i || ((i = new Map()), this.seqMapByClient.set(e, i));
    let o = i.get(n);
    o || ((o = new Ze()), i.set(n, o));
    let a = o.add(r);
    return (a && (this._count += 1), a);
  }
  has(e, t) {
    (Qe(e, "client"), Xr(t, "seq"));
    let { seqHigh: n, seqLow: r } = Zr(t),
      i = this.seqMapByClient.get(e);
    if (!i) return !1;
    let o = i.get(n);
    return o ? o.has(r) : !1;
  }
  hasClient(e) {
    return this.seqMapByClient.has(e);
  }
  clone() {
    let e = new s();
    for (let [t, n] of this.seqMapByClient) {
      let r = new Map();
      for (let [i, o] of n) r.set(i, o.clone());
      e.seqMapByClient.set(t, r);
    }
    return ((e._count = this._count), e);
  }
  andNot(e) {
    let t = new s();
    for (let n of ue(this.seqMapByClient)) {
      let r = this.seqMapByClient.get(n);
      if (!r) continue;
      let i = e.seqMapByClient.get(n),
        o = new Map(),
        a = 0;
      for (let d of ue(r)) {
        let c = r.get(d);
        if (!c) continue;
        let u = i?.get(d),
          h = u ? c.andNot(u) : c.clone();
        h.count <= 0 || (o.set(d, h), (a += h.count));
      }
      a > 0 && (t.seqMapByClient.set(n, o), (t._count += a));
    }
    return t;
  }
  *[Symbol.iterator]() {
    for (let e of ue(this.seqMapByClient)) {
      let t = this.seqMapByClient.get(e);
      if (t)
        for (let n of ue(t)) {
          let r = t.get(n);
          if (r) for (let i of r) yield { client: e, seq: uo(n, i) };
        }
    }
  }
  toArray() {
    return [...this];
  }
  serialize(e) {
    (e.writeFloat64(this._count), e.writeFloat64(this.seqMapByClient.size));
    let t = ue(this.seqMapByClient);
    for (let n of t) {
      e.writeUint32(n);
      let r = this.seqMapByClient.get(n);
      (l(r, "seqMap must exist"), e.writeUint32(r.size));
      let i = ue(r);
      for (let o of i) {
        e.writeUint32(o);
        let a = r.get(o);
        (l(a, "seqLowBitmap must exist"), a.serialize(e));
      }
    }
  }
  deserialize(e) {
    (l(this.seqMapByClient.size === 0, "TimestampSet deserialize must be called when empty"),
      (this._count = e.readFloat64()));
    let t = e.readFloat64();
    for (let n = 0; n < t; n++) {
      let r = e.readUint32(),
        i = new Map(),
        o = e.readUint32();
      for (let a = 0; a < o; a++) {
        let d = e.readUint32(),
          c = new Ze();
        (c.deserialize(e), i.set(d, c));
      }
      this.seqMapByClient.set(r, i);
    }
  }
};
function ue(s) {
  return Array.from(s.keys()).sort((e, t) => e - t);
}
var pn = 4294967296;
function Xr(s, e) {
  l(
    Number.isInteger(s) && s >= 0 && s <= Number.MAX_SAFE_INTEGER,
    () => `${e} must be a safe unsigned integer, received: ${s}`
  );
}
function Zr(s) {
  let e = Math.trunc(s / pn),
    t = s % pn;
  return { seqHigh: e, seqLow: t };
}
function uo(s, e) {
  return s * pn + e;
}
function ti(s) {
  let e = new Map();
  for (let { client: t, seq: n } of s) {
    let r = e.get(t);
    (r || ((r = new Set()), e.set(t, r)), r.add(n));
  }
  return e;
}
var q = class s {
    timestamps = new et();
    clientState = new Map();
    get count() {
      return this.timestamps.count;
    }
    addTimestamp(e, t) {
      return this.timestamps.add(e, t);
    }
    updateClientState(e, t, n) {
      let r = this.clientState.get(e);
      r
        ? ((r.maxSeq = Math.max(t, r.maxSeq)),
          n !== r.batch && Oe(n) > Oe(r.batch) && (r.batch = n))
        : ((r = { maxSeq: t, batch: n }), this.clientState.set(e, r));
    }
    copyClientStateFrom(e) {
      for (let [t, n] of e.clientState) this.updateClientState(t, n.maxSeq, n.batch);
    }
    hasTimestamp(e, t) {
      return this.timestamps.has(e, t);
    }
    getTimestamps() {
      return this.timestamps[Symbol.iterator]();
    }
    hasClient(e) {
      return this.timestamps.hasClient(e);
    }
    getBatch(e) {
      return this.clientState.get(e)?.batch;
    }
    getMaxSeq(e) {
      return this.clientState.get(e)?.maxSeq;
    }
    toMaxSeqArray() {
      let e = [];
      for (let t of ue(this.clientState)) {
        let n = this.clientState.get(t).maxSeq;
        e.push([t, n]);
      }
      return e;
    }
    compare(e) {
      return {
        extra: this.timestamps.andNot(e.timestamps).toArray(),
        missing: e.timestamps.andNot(this.timestamps).toArray(),
      };
    }
    clone() {
      let e = new s();
      return ((e.timestamps = this.timestamps.clone()), e.copyClientStateFrom(this), e);
    }
    serialize(e) {
      (e.writeUint32(Qr),
        e.writeUint16(ei),
        this.timestamps.serialize(e),
        e.writeUint32(this.clientState.size));
      for (let t of ue(this.clientState)) {
        let n = this.clientState.get(t);
        (e.writeUint32(t), e.writeFloat64(n.batch), e.writeFloat64(n.maxSeq));
      }
    }
    deserialize(e) {
      (l(this.timestamps.count === 0, "Manifest deserialize must be called when empty"),
        l(e.readUint32() === Qr, "Manifest magic mismatch"),
        l(e.readUint16() === ei, "Manifest version mismatch"),
        (this.timestamps = new et()),
        this.timestamps.deserialize(e),
        this.clientState.clear());
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let r = e.readUint32(),
          i = e.readFloat64(),
          o = e.readFloat64();
        this.clientState.set(r, { batch: i, maxSeq: o });
      }
    }
    toBuffer() {
      let e = new V();
      return (this.serialize(e), e.getBuffer());
    }
    toBase64() {
      let e = this.toBuffer();
      return Fr(e);
    }
    static fromBuffer(e) {
      let t = new z(e),
        n = new s();
      return (n.deserialize(t), n);
    }
    static fromBase64(e) {
      let t = jr(e);
      return s.fromBuffer(t);
    }
  },
  Qr = 1414743629,
  ei = 1;
var ni = ["client", "seq", "batch", "id", "key", "value", "user"];
var yn = class {
  encode(e, t) {
    let n = e.main;
    (this.writeSection(1296389185, t, (i) => {
      po(n.metadata, i);
    }),
      this.writeSection(1296125510, t, (i) => {
        go(n.manifest, i);
      }),
      this.writeSection(1129270355, t, (i) => {
        this.encodeColumns(n.columns, i);
      }));
    let r = n.hierarchyData;
    (r &&
      this.writeSection(1212761426, t, (i) => {
        fo(r, i);
      }),
      this.writeSection(1296649816, t, (i) => {
        ho(n.minIndexCache, i);
      }));
  }
  decode(e, t) {
    let n = e.main;
    for (; !t.endOfFile();) {
      let r = t.readUint32(),
        i = t.readFloat64(),
        o = new z(t.readBytes(i));
      switch (r) {
        case 1129270355:
          this.decodeColumns(n.columns, o);
          break;
        case 1296649816: {
          n.minIndexCache = lo(o);
          break;
        }
        case 1212761426:
          n.hierarchyData = mo(o);
          break;
        case 1296125510:
          n.manifest = bo(o);
          break;
        case 1296389185:
          n.metadata = yo(o);
          break;
        default:
          break;
      }
    }
  }
  fromSerializableRow(e) {
    let t = M(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
      time: 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(ni.length);
    for (let n of ni) {
      let r = e[n];
      (t.writeString(n), t.writeString(r.type), r.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let r = 0; r < n; r++) {
      let i = t.readString(),
        o = e[i];
      l(o, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== o.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${o.type} (expected)`);
      o.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let r = new V();
    n(r);
    let i = r.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function ho(s, e) {
  let t = s;
  (e.writeTypedArray(new Float64Array(t.seqs)),
    e.writeTypedArray(new Float64Array(t.idxs)),
    e.writeUint32(t.maxSize ?? 0));
}
function lo(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    n = s.readUint32(),
    r = new U({ maxSize: n });
  return (r.load(e, t), r);
}
function fo(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([n, r]) => [
      n,
      [...r].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, d]) => {
            let c = { ...d, rowIdx: d.rowIdx };
            return (
              T(c.parentFrom) && (c.parentFrom = k(c.parentFrom)),
              T(c.parentTo) && (c.parentTo = k(c.parentTo)),
              [a, c]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function mo(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [r, i] of e) {
    let o = new Map();
    for (let [a, d] of i) {
      let c = new Map();
      for (let u in d) {
        let h = d[u];
        (M(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          M(h.parentTo) && (h.parentTo = N(h.parentTo)),
          c.set(Number(u), h));
      }
      o.set(a, c);
    }
    t.set(r, o);
  }
  let n = Array.from(s.readTypedArray(Uint32Array));
  return new W(n, t);
}
function po(s, e) {
  e.writeFloat64(s.seq);
}
function yo(s) {
  return { seq: s.readFloat64(), compactedAt: 0, compactedLength: 0 };
}
function go(s, e) {
  s.serialize(e);
}
function bo(s) {
  let e = new q();
  return (e.deserialize(s), e);
}
var ri = { description: "Adds named sections to binary documents", codec: new yn(), migrate() {} };
var Be = class extends A {
  constructor(t, n, r) {
    super();
    this.ids = t;
    this.keys = n;
    this.encodesOwnReferences = r;
  }
  ids;
  keys;
  encodesOwnReferences;
  add(t) {
    return super.add(this.encode(t, this.length));
  }
  addMany(t) {
    if (!this.encodesOwnReferences) return super.addMany(t);
    let n = this.length;
    return super.addMany(Array.from(t, (r, i) => this.encode(r, n + i)));
  }
  get(t) {
    let n = super.get(t);
    if (n !== Se && n !== He) return n;
    let r = `${this.ids.get(t)}.${this.keys.get(t)}`;
    return n === Se ? Fe(r) : Ve(r);
  }
  encode(t, n) {
    if (!this.encodesOwnReferences) return t;
    let r = K(t);
    return (!r && !j(t)) ||
      (l(
        n < this.ids.length && n < this.keys.length,
        "A row's id and key are appended before its value"
      ),
      _(t) !== `${this.ids.get(n)}.${this.keys.get(n)}`)
      ? t
      : r
        ? Se
        : He;
  }
};
var Ee = class {
    values = new $(Float64Array, de, "seq");
    skippedLength;
    get type() {
      return "DeltaEncodedSeqColumn(F64)";
    }
    get length() {
      return this.skippedLength ?? this.values.length;
    }
    add(e) {
      return (this.assertDataAvailable(), this.values.add(e));
    }
    addMany(e) {
      return (this.assertDataAvailable(), this.values.addMany(e));
    }
    get(e) {
      return (this.assertDataAvailable(), this.values.get(e));
    }
    _set(e, t) {
      (this.assertDataAvailable(), this.values._set(e, t));
    }
    slice(e, t) {
      return (this.assertDataAvailable(), this.values.slice(e, t));
    }
    serialize(e) {
      this.serializeRows(e, this.values.length);
    }
    serializeRows(e, t) {
      (this.assertDataAvailable(),
        l(t >= 0 && t <= this.values.length, () => `Row count ${t} is out of bounds`),
        e.writeVarUint(t));
      let n = 0,
        r = t;
      for (let i of this.values.readSlices()) {
        let o = Math.min(i.length, r);
        for (let a = 0; a < o; a++) {
          let d = i[a];
          (e.writeVarUint(Io(d - n)), (n = d));
        }
        if (((r -= o), r === 0)) break;
      }
    }
    deserialize(e, t) {
      let n = e.readVarUint();
      if (t?.skipData) {
        for (let i = 0; i < n; i++) e.readVarUint();
        this.skippedLength = n;
        return;
      }
      this.skippedLength = void 0;
      let r = 0;
      for (let i of this.values.writeSlices(n))
        for (let o = 0; o < i.length; o++) {
          let a = r + wo(e.readVarUint());
          ((i[o] = a), (r = a));
        }
    }
    assertDataAvailable() {
      if (this.skippedLength !== void 0) throw new Error("DeltaEncodedSeqColumn data was skipped");
    }
  },
  ii = 2 ** 52;
function Io(s) {
  return (
    l(s >= -ii && s <= ii, () => `seq delta out of zigzag-safe range: ${s}`),
    s >= 0 ? s * 2 : -s * 2 - 1
  );
}
function wo(s) {
  return s % 2 === 0 ? s / 2 : -(s + 1) / 2;
}
var tt = 16,
  gn = {
    description: "Convert the seq column to delta encoding on every branch",
    migrate: (s) => {
      for (let e of s.branches.values()) {
        let t = e.columns.seq,
          n = new Ee();
        for (let r = 0; r < t.length; r++) n.add(t.get(r));
        e.columns.seq = n;
      }
    },
  };
var si = {
  forVersion(s) {
    return s >= tt ? new Ee() : new $(Float64Array, de, "seq");
  },
};
var ui = 17,
  oi = ["client", "seq", "batch", "id", "key", "value", "user", "time"];
var bn = class {
  encode(e, t, n) {
    let r = e.branches;
    t.writeUint32(r.size);
    for (let [i, o] of r) {
      t.writeString(i);
      let a = t.byteOffset;
      t.writeFloat64(0);
      let d = t.byteOffset;
      (t.withAlignmentOrigin(d, () => {
        (this.writeSection(1296389185, t, (h) => {
          xo(o.metadata, h);
        }),
          this.writeSection(1296125510, t, (h) => {
            Oo(o.manifest, h);
          }),
          this.writeSection(1129270355, t, (h) => {
            this.encodeColumns(o.columns, h);
          }));
        let c = o.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (h) => {
            Co(c, h);
          }),
          this.writeSection(1296649816, t, (h) => {
            So(o.minIndexCache, h);
          }));
        let u = i === v ? n?.savedUnitSums : void 0;
        u &&
          this.writeSection(1398099250, t, (h) => {
            Mo(u, h);
          });
      }),
        t.writeFloat64At(a, t.byteOffset - d));
    }
  }
  decode(e, t, n) {
    let r = t.readUint32(),
      i = new Map();
    for (let o = 0; o < r; o++) {
      let a = t.readString(),
        d = t.readFloat64(),
        c = t.readDeferredBytes(d);
      if (n?.branchIds && !n.branchIds.has(a)) continue;
      let u = new E(this, a, e.version),
        h = new z(c, t.dataAvailability),
        f,
        m;
      for (; !h.endOfFile();) {
        let y = h.readUint32(),
          p = h.readFloat64(),
          g = h.readDeferredBytes(p),
          I = new z(g, t.dataAvailability);
        switch (y) {
          case 1129270355:
            this.decodeColumns(u.columns, I, a, n);
            break;
          case 1296649816:
            u.minIndexCache = vo(I);
            break;
          case 1212761426:
            u.hierarchyData = Ro(I);
            break;
          case 1296125510:
            ((f = g), (u.manifest = To(I)));
            break;
          case 1398099250:
            m = I;
            break;
          case 1296389185:
            u.metadata = Ao(I);
            break;
          default:
            break;
        }
      }
      (m &&
        f &&
        (new z(f, t.dataAvailability).readBytes(f.byteLength),
        (u.savedUnitSums = ko(m, u.columns.length, f))),
        (u.metadata.branchId = u.metadata.branchId ?? a),
        i.set(a, u));
    }
    ((e.branches = i), e.branches.has(v) || e.branches.set(v, new E(this, v, e.version)));
  }
  fromSerializableRow(e) {
    let t = M(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
      time: e.time ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: e.batch,
        time: e.time,
      }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(oi.length);
    for (let n of oi) {
      let r = e[n];
      (t.writeString(n), t.writeString(r.type), r.serialize(t));
    }
  }
  decodeColumns(e, t, n, r) {
    let i = t.readUint32();
    for (let o = 0; o < i; o++) {
      let a = t.readString(),
        d = e[a];
      l(d, () => `Column ${a} not found`);
      let c = t.readString(),
        u = performance.now();
      if (
        (d.deserialize(t, {
          type: c,
          estimatedUniqueCount: e.id.length,
          indexLazyUniques: r?.indexLazyColumnUniques?.has(a),
          skipData: r?.skipColumnData?.has(a),
          lazyUniques: r?.lazyColumnUniques?.has(a),
          stringCodeMap: r?.stringCodeMaps && (a === "id" || a === "key"),
          skipDedupeScan: r?.skipValueDedupeScan && a === "value",
          zeroCopyIndices: r?.zeroCopyColumnIndices,
        }),
        c !== d.type)
      )
        throw new Error(
          `Column type does not match in branch "${n}": ${c} (actual) != ${d.type} (expected)`
        );
      r?.onTiming?.(`column_${a}`, performance.now() - u);
    }
  }
  writeSection(e, t, n) {
    t.writeUint32(e);
    let r = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      n(t);
    }),
      t.writeFloat64At(r, t.byteOffset - i));
  }
};
function So(s, e) {
  (s.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function vo(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    n = s.readUint32(),
    r = new U({ maxSize: n });
  return (r.load(e, t), r);
}
function Co(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([n, r]) => [
      n,
      [...r].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, d]) => {
            let c = { ...d, rowIdx: d.rowIdx };
            return (
              T(c.parentFrom) && (c.parentFrom = k(c.parentFrom)),
              T(c.parentTo) && (c.parentTo = k(c.parentTo)),
              [a, c]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function Ro(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [r, i] of e) {
    let o = new Map();
    for (let [a, d] of i) {
      let c = new Map();
      for (let u in d) {
        let h = d[u];
        (M(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          M(h.parentTo) && (h.parentTo = N(h.parentTo)),
          c.set(Number(u), h));
      }
      o.set(a, c);
    }
    t.set(r, o);
  }
  let n = Array.from(s.readTypedArray(Uint32Array));
  return new W(n, t);
}
function xo(s, e) {
  (e.writeFloat64(s.seq),
    e.writeString(s.branchId ?? v),
    e.writeFloat64(s.compactedAt),
    e.writeFloat64(s.compactedLength));
}
function Ao(s) {
  let e = s.readFloat64(),
    t = s.readString(),
    n = s.readFloat64(),
    r = s.readFloat64();
  return { seq: e, branchId: t, compactedAt: n, compactedLength: r };
}
function Oo(s, e) {
  s.serialize(e);
}
function To(s) {
  let e = new q();
  return (e.deserialize(s), e);
}
function Mo(s, e) {
  (e.writeUint16(s.version),
    e.writeFloat64(s.rowCount),
    e.writeUint32(s.manifestHashLow >>> 0),
    e.writeUint32(s.manifestHashHigh >>> 0),
    e.writeUint32(s.definitionSums.length));
  for (let { definitionId: t, definitionVersion: n, unitSums: r } of s.definitionSums) {
    (e.writeString(t), e.writeUint16(n), e.writeUint32(r.length));
    for (let i of r)
      (e.writeString(i.unitId), e.writeUint32(i.low >>> 0), e.writeUint32(i.high >>> 0));
  }
}
function ko(s, e, t) {
  let n = s.readUint16(),
    r = s.readFloat64(),
    i = s.readUint32() | 0,
    o = s.readUint32() | 0;
  if (r !== e) return;
  let [a, d] = No(t);
  if (i !== a || o !== d) return;
  let c = [],
    u = s.readUint32();
  for (let h = 0; h < u; h++) {
    let f = s.readString(),
      m = s.readUint16(),
      y = [],
      p = s.readUint32();
    for (let g = 0; g < p; g++) {
      let I = s.readString(),
        w = s.readUint32() | 0,
        x = s.readUint32() | 0;
      y.push({ unitId: I, low: w, high: x });
    }
    c.push({ definitionId: f, definitionVersion: m, unitSums: y });
  }
  return { version: n, rowCount: e, manifestHashLow: i, manifestHashHigh: o, definitionSums: c };
}
function No(s) {
  let e = new DataView(s.buffer, s.byteOffset, s.byteLength),
    t = s.byteLength & -4,
    n = 739982445,
    r = -1640531527;
  for (let a = 0; a < t; a += 4) {
    let d = ai(e.getUint32(a, !0));
    ((n = di(n, d)), (r = di(r, d)));
  }
  let i = 0;
  for (let a = s.byteLength - 1; a >= t; a--) i = (i << 8) | e.getUint8(a);
  let o = ai(i);
  return [ci(n ^ o ^ s.byteLength), ci(r ^ o ^ s.byteLength)];
}
function ai(s) {
  return ((s = Math.imul(s, 3432918353)), (s = (s << 15) | (s >>> 17)), Math.imul(s, 461845907));
}
function di(s, e) {
  return ((s ^= e), (s = (s << 13) | (s >>> 19)), (Math.imul(s, 5) + 3864292196) | 0);
}
function ci(s) {
  return (
    (s ^= s >>> 16),
    (s = Math.imul(s, 2246822507)),
    (s ^= s >>> 13),
    (s = Math.imul(s, 3266489909)),
    s ^ (s >>> 16)
  );
}
function Do(s) {
  for (let e of s.branches.values()) {
    let t = e.columns,
      n = new $(Uint32Array, de, "time");
    (n.addMany(new Uint32Array(t.length)), (t.time = n));
  }
}
var hi = {
  description: "Adds the time column, zero-filled, to every branch",
  codec: new bn(),
  migrate: Do,
};
var vt = class {
  _length = 0;
  get type() {
    return "UnknownTimeColumn";
  }
  get length() {
    return this._length;
  }
  add() {
    return this._length++;
  }
  addMany(e) {
    let t = this._length;
    return ((this._length += e.length), t);
  }
  get() {
    return 0;
  }
  _set() {}
  slice(e, t) {
    return Array.from({ length: Math.max(0, t - e) }, () => 0);
  }
  serialize(e) {
    throw new Error("The time column is not part of the binary format before it was introduced");
  }
  serializeRows(e, t) {
    throw new Error("The time column is not part of the binary format before it was introduced");
  }
  deserialize(e) {
    throw new Error("The time column is not part of the binary format before it was introduced");
  }
};
var li = {
  forVersion(s) {
    return s >= ui ? new $(Uint32Array, de, "time") : new vt();
  },
};
var nt = 23;
function fi(s, e, t) {
  if (
    !(typeof s != "string" || s.length !== e.length + t.length + 6 || !s.endsWith(")")) &&
    s.slice(4, -1) === `${e}.${t}`
  ) {
    if (s.startsWith("obj(")) return Se;
    if (s.startsWith("arr(")) return He;
  }
}
function Bo(s) {
  let e = !1;
  for (let t of s.branches.values()) {
    let { id: n, key: r, value: i } = t.columns,
      o = -1;
    for (let d = 0; d < i.length; d++)
      if (fi(i.get(d), n.get(d), r.get(d)) !== void 0) {
        o = d;
        break;
      }
    if (o === -1) continue;
    let a = new Be(n, r, !1);
    for (let d = 0; d < i.length; d++) {
      let c = i.get(d);
      a.add(fi(c, n.get(d), r.get(d)) ?? c);
    }
    ((t.columns.value = a), (e = !0));
  }
  return e ? void 0 : "unchanged";
}
var In = {
  description:
    "Stores references to the object or array at the row's own id and key as a shared value",
  migrate: Bo,
};
var wn = class {
    client = P.withBuckets({ buffer: Uint32Array }).create();
    seq;
    batch = P.withBuckets({ buffer: Uint32Array }).create();
    id = new A();
    key = new A();
    value;
    user = P.withBuckets({ buffer: Uint8Array, widenTo: Uint16Array }).create();
    time;
    constructor(e) {
      ((this.seq = si.forVersion(e)),
        (this.value = new Be(this.id, this.key, e >= nt)),
        (this.time = li.forVersion(e)));
    }
    copySelectedRowsFrom(e, t, n) {
      (l(
        this.client instanceof P && e.client instanceof P,
        "Expected bucketed client columns when copying selected rows"
      ),
        this.client.copySelectedRowsFrom(e.client, t, n),
        mi(e.seq, this.seq, t, n),
        l(
          this.id instanceof A && e.id instanceof A,
          "Expected normalized id columns when copying selected rows"
        ),
        this.id.copySelectedRowsFrom(e.id, t, n),
        l(
          this.key instanceof A && e.key instanceof A,
          "Expected normalized key columns when copying selected rows"
        ),
        this.key.copySelectedRowsFrom(e.key, t, n),
        l(
          this.value instanceof A && e.value instanceof A,
          "Expected normalized value columns when copying selected rows"
        ),
        this.value.copySelectedRowsFrom(e.value, t, n),
        l(
          this.user instanceof P && e.user instanceof P,
          "Expected bucketed user columns when copying selected rows"
        ),
        this.user.copySelectedRowsFrom(e.user, t, n),
        l(
          this.batch instanceof P && e.batch instanceof P,
          "Expected bucketed batch columns when copying selected rows"
        ),
        this.batch.copySelectedRowsFrom(e.batch, t, n),
        mi(e.time, this.time, t, n));
    }
    get length() {
      return this.client.length;
    }
    releaseLookups() {
      for (let e of [
        this.client,
        this.seq,
        this.batch,
        this.id,
        this.key,
        this.value,
        this.user,
        this.time,
      ])
        e.releaseLookup?.();
    }
  },
  Eo = 65536;
function mi(s, e, t, n) {
  let r = new Float64Array(Math.min(n, Eo)),
    i = 0,
    o = 0;
  for (let a = 0; a < s.length; a++)
    t[a] !== 0 && ((r[i++] = s.get(a)), i === r.length && (e.addMany(r), (o += i), (i = 0)));
  (i > 0 && (e.addMany(r.subarray(0, i)), (o += i)),
    l(o === n, "Row index map must contain the requested number of rows"));
}
var E = class {
  constructor(e, t, n) {
    this.codec = e;
    ((this.columns = new wn(n)),
      (this.metadata = { seq: 1, branchId: t, compactedAt: 0, compactedLength: 0 }));
  }
  codec;
  columns;
  minIndexCache = new U({ maxSize: 1e3 });
  hierarchyData;
  manifest = new q();
  metadata;
  savedUnitSumsOfSnapshot;
  get savedUnitSums() {
    return this.savedUnitSumsOfSnapshot?.rowCount === this.columns.length
      ? this.savedUnitSumsOfSnapshot
      : void 0;
  }
  set savedUnitSums(e) {
    this.savedUnitSumsOfSnapshot = e;
  }
  addRows(e) {
    for (let t of e) this.addRow(t);
  }
  addRow(e) {
    return (
      this.columns.seq.add(e.seq),
      this.columns.id.add(e.id),
      this.columns.key.add(e.key),
      this.columns.value.add(e.value),
      this.columns.user.add(e.user),
      this.columns.batch.add(e.batch),
      this.columns.time.add(e.time),
      this.columns.client.add(e.client)
    );
  }
  addSerializableRow(e) {
    let t = this.codec;
    this.addRow(t.fromSerializableRow(e));
  }
  addSerializableRows(e) {
    for (let t of e) this.addSerializableRow(t);
  }
  getRowInternal(e) {
    return {
      client: this.columns.client.get(e),
      seq: this.columns.seq.get(e),
      id: this.columns.id.get(e),
      key: this.columns.key.get(e),
      value: this.columns.value.get(e),
      user: this.columns.user.get(e),
      batch: this.columns.batch.get(e),
      time: this.columns.time.get(e),
    };
  }
  getRow(e) {
    if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
    return this.getRowInternal(e);
  }
  getRows(e = 0, t = this.columns.client.length) {
    if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
    let n = Array.from({ length: t - e });
    for (let r = e; r < t; r++) n[r - e] = this.getRowInternal(r);
    return n;
  }
  getSerializableRow(e) {
    let t = this.codec;
    if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
    let n = this.getRowInternal(e);
    return t.toSerializableRow(n);
  }
  getSerializableRows(e = 0, t = this.columns.client.length) {
    let n = this.codec;
    if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
    let r = Array.from({ length: t - e });
    for (let i = e; i < t; ++i) {
      let o = this.getRowInternal(i);
      r[i - e] = n.toSerializableRow(o);
    }
    return r;
  }
  getSerializableRowsAfterManifest(e) {
    let t = this.codec,
      n = [];
    for (let r = 0; r < this.columns.client.length; r++) {
      let i = this.columns.seq.get(r),
        o = this.columns.client.get(r),
        a = e.getMaxSeq(o) ?? -1;
      if (i <= a) continue;
      let d = t.toSerializableRow(this.getRowInternal(r));
      n.push(d);
    }
    return n;
  }
  buildManifest() {
    if (!(this.manifest.count > 0))
      for (let e = 0; e < this.columns.client.length; e++)
        this.manifest.addTimestamp(this.columns.client.get(e), this.columns.seq.get(e));
  }
  compare(e) {
    return this.manifest.compare(e);
  }
  getExtraSerializableRows(e) {
    let t = this.compare(e);
    if (!t.extra.length) return [];
    let n = ti(t.extra),
      r = [];
    for (let i = 0; i < this.columns.client.length; i++) {
      let o = n.get(this.columns.client.get(i));
      !o || !o.has(this.columns.seq.get(i)) || r.push(this.getSerializableRow(i));
    }
    return r;
  }
};
var pi = ["client", "seq", "batch", "id", "key", "value", "user"];
var Sn = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [r, i] of n) {
      t.writeString(r);
      let o = new V();
      (this.writeSection(1296389185, o, (c) => {
        Po(i.metadata, c);
      }),
        this.writeSection(1296125510, o, (c) => {
          Ho(i.manifest, c);
        }),
        this.writeSection(1129270355, o, (c) => {
          this.encodeColumns(i.columns, c);
        }));
      let a = i.hierarchyData;
      (a &&
        this.writeSection(1212761426, o, (c) => {
          Uo(a, c);
        }),
        this.writeSection(1296649816, o, (c) => {
          zo(i.minIndexCache, c);
        }));
      let d = o.getBuffer();
      (t.writeFloat64(d.length), t.writeBytes(d));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      r = new Map();
    for (let i = 0; i < n; i++) {
      let o = t.readString(),
        a = new E(this, o, e.version),
        d = t.readFloat64(),
        c = new z(t.readBytes(d));
      for (; !c.endOfFile();) {
        let u = c.readUint32(),
          h = c.readFloat64(),
          f = new z(c.readBytes(h));
        switch (u) {
          case 1129270355:
            this.decodeColumns(a.columns, f);
            break;
          case 1296649816:
            a.minIndexCache = _o(f);
            break;
          case 1212761426:
            a.hierarchyData = qo(f);
            break;
          case 1296125510:
            a.manifest = Vo(f);
            break;
          case 1296389185:
            a.metadata = Lo(f);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? o), r.set(o, a));
    }
    ((e.branches = r), e.branches.has(v) || e.branches.set(v, new E(this, v, e.version)));
  }
  fromSerializableRow(e) {
    let t = M(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
      time: 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(pi.length);
    for (let n of pi) {
      let r = e[n];
      (t.writeString(n), t.writeString(r.type), r.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let r = 0; r < n; r++) {
      let i = t.readString(),
        o = e[i];
      l(o, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== o.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${o.type} (expected)`);
      o.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let r = new V();
    n(r);
    let i = r.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function zo(s, e) {
  (e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function _o(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    n = s.readUint32(),
    r = new U({ maxSize: n });
  return (r.load(e, t), r);
}
function Uo(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([n, r]) => [
      n,
      [...r].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, d]) => {
            let c = { ...d, rowIdx: d.rowIdx };
            return (
              T(c.parentFrom) && (c.parentFrom = k(c.parentFrom)),
              T(c.parentTo) && (c.parentTo = k(c.parentTo)),
              [a, c]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function qo(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [r, i] of e) {
    let o = new Map();
    for (let [a, d] of i) {
      let c = new Map();
      for (let u in d) {
        let h = d[u];
        (M(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          M(h.parentTo) && (h.parentTo = N(h.parentTo)),
          c.set(Number(u), h));
      }
      o.set(a, c);
    }
    t.set(r, o);
  }
  let n = Array.from(s.readTypedArray(Uint32Array));
  return new W(n, t);
}
function Po(s, e) {
  (e.writeFloat64(s.seq), e.writeString(s.branchId ?? v));
}
function Lo(s) {
  let e = s.readFloat64(),
    t = s.readString();
  return { seq: e, branchId: t, compactedAt: 0, compactedLength: 0 };
}
function Ho(s, e) {
  s.serialize(e);
}
function Vo(s) {
  let e = new q();
  return (e.deserialize(s), e);
}
var yi = { description: "Stores table data by branches", codec: new Sn(), migrate() {} };
var gi = ["client", "seq", "batch", "id", "key", "value", "user"];
var vn = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [r, i] of n) {
      t.writeString(r);
      let o = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (c) => {
          Wo(i.metadata, c);
        }),
          this.writeSection(1296125510, t, (c) => {
            Yo(i.manifest, c);
          }),
          this.writeSection(1129270355, t, (c) => {
            this.encodeColumns(i.columns, c);
          }));
        let d = i.hierarchyData;
        (d &&
          this.writeSection(1212761426, t, (c) => {
            Ko(d, c);
          }),
          this.writeSection(1296649816, t, (c) => {
            Fo(i.minIndexCache, c);
          }));
      }),
        t.writeFloat64At(o, t.byteOffset - a));
    }
  }
  decode(e, t, n) {
    let r = t.readUint32(),
      i = new Map();
    for (let o = 0; o < r; o++) {
      let a = t.readString(),
        d = t.readFloat64(),
        c = t.readDeferredBytes(d);
      if (n?.branchIds && !n.branchIds.has(a)) continue;
      let u = new E(this, a, e.version),
        h = new z(c, t.dataAvailability);
      for (; !h.endOfFile();) {
        let f = h.readUint32(),
          m = h.readFloat64(),
          y = new z(h.readDeferredBytes(m), t.dataAvailability);
        switch (f) {
          case 1129270355:
            this.decodeColumns(u.columns, y, a, n);
            break;
          case 1296649816:
            u.minIndexCache = jo(y);
            break;
          case 1212761426:
            u.hierarchyData = $o(y);
            break;
          case 1296125510:
            u.manifest = Jo(y);
            break;
          case 1296389185:
            u.metadata = Go(y);
            break;
          default:
            break;
        }
      }
      ((u.metadata.branchId = u.metadata.branchId ?? a), i.set(a, u));
    }
    ((e.branches = i), e.branches.has(v) || e.branches.set(v, new E(this, v, e.version)));
  }
  fromSerializableRow(e) {
    let t = M(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
      time: 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(gi.length);
    for (let n of gi) {
      let r = e[n];
      (t.writeString(n), t.writeString(r.type), r.serialize(t));
    }
  }
  decodeColumns(e, t, n, r) {
    let i = t.readUint32();
    for (let o = 0; o < i; o++) {
      let a = t.readString(),
        d = e[a];
      l(d, () => `Column ${a} not found`);
      let c = t.readString();
      if (c !== d.type)
        throw new Error(
          `Column type does not match in branch "${n}": ${c} (actual) != ${d.type} (expected)`
        );
      let u = performance.now();
      (d.deserialize(t, {
        estimatedUniqueCount: e.id.length,
        indexLazyUniques: r?.indexLazyColumnUniques?.has(a),
        skipData: r?.skipColumnData?.has(a),
        lazyUniques: r?.lazyColumnUniques?.has(a),
        stringCodeMap: r?.stringCodeMaps && (a === "id" || a === "key"),
        zeroCopyIndices: r?.zeroCopyColumnIndices,
      }),
        r?.onTiming?.(`column_${a}`, performance.now() - u));
    }
  }
  writeSection(e, t, n) {
    t.writeUint32(e);
    let r = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      n(t);
    }),
      t.writeFloat64At(r, t.byteOffset - i));
  }
};
function Fo(s, e) {
  (s.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function jo(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    n = s.readUint32(),
    r = new U({ maxSize: n });
  return (r.load(e, t), r);
}
function Ko(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([n, r]) => [
      n,
      [...r].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, d]) => {
            let c = { ...d, rowIdx: d.rowIdx };
            return (
              T(c.parentFrom) && (c.parentFrom = k(c.parentFrom)),
              T(c.parentTo) && (c.parentTo = k(c.parentTo)),
              [a, c]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function $o(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [r, i] of e) {
    let o = new Map();
    for (let [a, d] of i) {
      let c = new Map();
      for (let u in d) {
        let h = d[u];
        (M(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          M(h.parentTo) && (h.parentTo = N(h.parentTo)),
          c.set(Number(u), h));
      }
      o.set(a, c);
    }
    t.set(r, o);
  }
  let n = Array.from(s.readTypedArray(Uint32Array));
  return new W(n, t);
}
function Wo(s, e) {
  (e.writeFloat64(s.seq),
    e.writeString(s.branchId ?? v),
    e.writeFloat64(s.compactedAt),
    e.writeFloat64(s.compactedLength));
}
function Go(s) {
  let e = s.readFloat64(),
    t = s.readString(),
    n = s.readFloat64(),
    r = s.readFloat64();
  return { seq: e, branchId: t, compactedAt: n, compactedLength: r };
}
function Yo(s, e) {
  s.serialize(e);
}
function Jo(s) {
  let e = new q();
  return (e.deserialize(s), e);
}
function Xo(s) {
  let e = Date.now();
  for (let t of s.branches.values())
    ((t.metadata.compactedAt = e), (t.metadata.compactedLength = t.columns.length));
}
var bi = {
  description: "Adds compactedAt and compactedLength to branch metadata",
  codec: new vn(),
  migrate: Xo,
};
var Ii = {
  description: "Clear caches to fix wrong hierarchy data",
  migrate: (s) => {
    for (let e of s.branches.values())
      ((e.hierarchyData = void 0),
        (e.minIndexCache = new U({ maxSize: 1e3 })),
        (e.metadata.seq = 0),
        (e.manifest = new q()));
  },
};
var wi = {
  description: "Merge double-escaped __deleted keys back into _deleted",
  migrate: (s) => {
    for (let e of s.branches.values()) {
      let t = e.columns.id,
        n = e.columns.key,
        r = e.columns.value,
        i = e.columns.seq,
        o = e.columns.client,
        a = new Set();
      for (let c = 0; c < n.length; c++)
        if (n.get(c) === "__deleted") {
          let h = t.get(c);
          if (!h.includes("replicaInfo.overrides")) continue;
          a.add(h);
        }
      let d = new Map();
      for (let c = 0; c < n.length; c++) {
        let u = t.get(c);
        if (a.has(u)) {
          let h = n.get(c);
          if (h === "_deleted") {
            let f = d.get(u);
            f === void 0 && ((f = {}), d.set(u, f));
            let m = f._deleted;
            (m === void 0 || le(i.get(c), o.get(c), i.get(m.row), o.get(m.row))) &&
              (f._deleted = { row: c, value: r.get(c) });
          } else if (h === "__deleted") {
            let f = d.get(u);
            f === void 0 && ((f = {}), d.set(u, f));
            let m = f.__deleted;
            ((m === void 0 || le(i.get(c), o.get(c), i.get(m.row), o.get(m.row))) &&
              (f.__deleted = { row: c, value: r.get(c) }),
              e.columns.key._set(c, "_deleted"));
          }
        }
      }
      for (let c of d.values()) {
        let u = c.__deleted;
        if (u !== void 0 && c._deleted !== void 0) {
          let h = c._deleted;
          if (Array.isArray(u.value) && Array.isArray(h.value)) {
            let f = Array.from(new Set([...u.value, ...h.value]));
            (e.columns.value._set(h.row, f), e.columns.value._set(u.row, f));
          } else
            Array.isArray(u.value)
              ? e.columns.value._set(h.row, u.value)
              : Array.isArray(h.value)
                ? e.columns.value._set(u.row, h.value)
                : (e.columns.value._set(u.row, b), e.columns.value._set(h.row, b));
        }
      }
    }
  },
};
var Zo = 1,
  Qo = new Set([
    "moduleSourceRevision",
    "moduleSourceRevisionHint",
    "moduleSourceRevisionCommittedHint",
    "updatedAt",
    "updatedAtByPlugin",
    "save",
    "shaderFallbackImage",
    "shaderFallbackImageHash",
    "localizationProgressSummaries",
  ]),
  Oi = { id: "content", version: 1, leavesOutKey: (s) => Qo.has(s), appliesToReplicaOverrides: !1 },
  Si = 739982445,
  vi = -1640531527,
  ea = 2 ** 32,
  ta = 11;
var Cn = new DataView(new ArrayBuffer(8)),
  Ci = "ContentManagementNode",
  Rn = class {
    low = 0;
    high = 0;
    startTerm(e, t) {
      ((this.low = Si), (this.high = vi), this.addString(e), this.addWord(t));
    }
    addString(e) {
      let t = String.prototype.charCodeAt,
        n = e.length,
        r = n & -2,
        i = this.low,
        o = this.high,
        a = ze(n);
      ((i = ae(i, a)), (o = ae(o, a)));
      for (let d = 0; d < r; d += 2)
        ((a = ze(t.call(e, d) | (t.call(e, d + 1) << 16))), (i = ae(i, a)), (o = ae(o, a)));
      (r < n && ((a = ze(t.call(e, r))), (i = ae(i, a)), (o = ae(o, a))),
        (this.low = i),
        (this.high = o));
    }
    addValue(e) {
      switch (typeof e) {
        case "string":
          (this.addWord(6), this.addString(e));
          return;
        case "number":
          if (!Number.isFinite(e)) return this.addWord(2);
          (Cn.setFloat64(0, e + 0, !0),
            this.addWord(5),
            this.addWord(Cn.getUint32(0, !0)),
            this.addWord(Cn.getUint32(4, !0)));
          return;
        case "boolean":
          return this.addWord(e ? 4 : 3);
        case "undefined":
          return this.addWord(1);
        case "object":
          if (e === null) return this.addWord(2);
          if (Array.isArray(e)) return this.addArray(e);
          if (re(e)) return this.addObject(e);
      }
      throw new Error(`Unsupported value type: ${typeof e}`);
    }
    addWord(e) {
      let t = ze(e);
      ((this.low = ae(this.low, t)), (this.high = ae(this.high, t)));
    }
    addArray(e) {
      (this.addWord(7), this.addWord(e.length));
      for (let t of e) this.addValue(t);
    }
    addObject(e) {
      let t = this.low,
        n = this.high,
        r = Object.keys(e),
        i = 0,
        o = 0;
      for (let a of r)
        ((this.low = Si),
          (this.high = vi),
          this.addString(a),
          this.addValue(e[a]),
          (i = (i + _e(this.low)) | 0),
          (o = (o + _e(this.high)) | 0));
      ((this.low = t),
        (this.high = n),
        this.addWord(8),
        this.addWord(r.length),
        (this.low = ae(this.low, ze(i))),
        (this.high = ae(this.high, ze(o))));
    }
  };
function ze(s) {
  return ((s = Math.imul(s, 3432918353)), (s = (s << 15) | (s >>> 17)), Math.imul(s, 461845907));
}
function ae(s, e) {
  return ((s ^= e), (s = (s << 13) | (s >>> 19)), (Math.imul(s, 5) + 3864292196) | 0);
}
function _e(s) {
  return (
    (s ^= s >>> 16),
    (s = Math.imul(s, 2246822507)),
    (s ^= s >>> 13),
    (s = Math.imul(s, 3266489909)),
    s ^ (s >>> 16)
  );
}
var Rt = class s {
  constructor(e, t) {
    this.store = e;
    this.definition = t;
    for (let n = e; n; n = n.base)
      this.cursors.push({
        store: n,
        branchData: n.branchData,
        nextRowIndex: n.branchData.columns.length,
        hierarchyCursor: n.getHierarchy().getInvalidationCursor(),
      });
  }
  store;
  definition;
  entries = new Map();
  cursors = [];
  hasher = new Rn();
  overriddenNodeIds = new Set();
  ownSum = Ri();
  steppedBuild;
  placingReads = 0;
  savedUnitIds = new Set();
  savedCollectionSums = new Map();
  static fromSavedUnitSums(e, t) {
    let n = e.mainStore.branchData.savedUnitSums;
    if (n?.version !== Zo) return;
    let r = n.definitionSums.find((o) => o.definitionId === t.id);
    if (r?.definitionVersion !== t.version) return;
    let i = new s(e, t);
    return (i.startFromSavedSums(r.unitSums), i);
  }
  get hierarchy() {
    return this.store.getHierarchy();
  }
  getChecksum(e) {
    for (let n of this.cursors)
      l(!n.store.inBatch, "AdditiveChecksumIndex.getChecksum must not be called mid-batch");
    if ((this.applyNewRows(), !this.hierarchy.getNodeData(e)?.inTree)) return;
    let t = this.entries.get(e);
    if (!t) {
      let n = this.getBuildRootId(e);
      (this.savedUnitIds.has(n)
        ? this.buildSavedUnit(n)
        : this.steppedBuild?.rootId === n
          ? (this.continueBuild(this.steppedBuild, 1 / 0), (this.steppedBuild = void 0))
          : this.build(n),
        (t = this.entries.get(e)),
        l(t, () => `Building ${n} left ${e} without an entry`));
    }
    if (t.materializable) return (t.subtreeHigh >>> ta) * ea + (t.subtreeLow >>> 0);
  }
  buildChecksum(e, t) {
    for (let r of this.cursors)
      l(!r.store.inBatch, "AdditiveChecksumIndex.buildChecksum must not be called mid-batch");
    if ((this.applyNewRows(), !this.hierarchy.getNodeData(e)?.inTree || this.entries.has(e)))
      return !0;
    let n = this.getBuildRootId(e);
    if (this.savedUnitIds.has(n)) {
      if (this.hasBuiltParent(n)) return (this.buildSavedUnit(n), !0);
      this.dropSavedUnit(n);
    }
    return (
      this.steppedBuild?.rootId !== n && (this.steppedBuild = this.createBuild(n, Ri())),
      this.continueBuild(this.steppedBuild, t) ? ((this.steppedBuild = void 0), !0) : !1
    );
  }
  getUnitSums() {
    let e = this.hierarchy.getRootId();
    if (e === void 0) return [];
    if ((this.getChecksum(e), !this.entries.has(e))) return [];
    let t = [];
    for (let n of this.getUnitIds(e, (r) => this.hierarchy.getChildrenIds(r))) {
      let r = this.entries.get(n);
      (l(r, () => `Unit ${n} has no entry`),
        t.push(
          this.holdsUnits(n)
            ? { unitId: n, low: r.ownLow, high: r.ownHigh }
            : { unitId: n, low: r.subtreeLow, high: r.subtreeHigh }
        ));
    }
    return t;
  }
  *getUnitIds(e, t) {
    for (let n of t(e)) {
      if (!this.holdsUnits(n)) {
        yield n;
        continue;
      }
      for (let r of t(n)) (yield r, yield* t(r));
    }
  }
  startFromSavedSums(e) {
    let t = this.hierarchy.getRootId();
    if (t === void 0) return;
    let n = new Map();
    for (let i of e) n.set(i.unitId, i);
    for (let i of this.getUnitIds(t, (o) => this.hierarchy.getCachedChildrenIds(o))) {
      let o = n.get(i);
      o &&
        (this.holdsUnits(i)
          ? this.savedCollectionSums.set(i, o)
          : (this.entries.set(i, this.createSavedEntry(i, o)), this.savedUnitIds.add(i)));
    }
    let r = this.cursors.at(-1);
    l(r, "An index has a cursor for its store");
    for (let i of this.cursors) i !== r && (i.nextRowIndex = 0);
    this.overriddenNodeIds = this.collectOverriddenNodeIds([r]);
  }
  addSavedCollectionEntry(e, t, n) {
    let r = this.createSavedEntry(e, t);
    ((r.ownLow = t.low),
      (r.ownHigh = t.high),
      this.entries.set(e, r),
      this.savedCollectionSums.delete(e));
    for (let i of n) this.attach(i);
  }
  createSavedEntry(e, t) {
    let n = this.store.latest.getLatest(e);
    return {
      ownLow: 0,
      ownHigh: 0,
      subtreeLow: t.low,
      subtreeHigh: t.high,
      parent: void 0,
      attachmentLow: 0,
      attachmentHigh: 0,
      hierarchyKey: void 0,
      hasChildrenKey: n?.has("children") ?? !1,
      materializable: this.isMaterialized(e, n),
    };
  }
  dropSavedUnit(e) {
    (this.detach(e), this.entries.delete(e), this.savedUnitIds.delete(e), this.placingReads++);
  }
  buildSavedUnit(e) {
    (this.dropSavedUnit(e), this.build(e), this.attach(e));
  }
  reset() {
    (this.entries.clear(),
      this.savedUnitIds.clear(),
      this.savedCollectionSums.clear(),
      (this.steppedBuild = void 0),
      this.advanceCursors(),
      (this.overriddenNodeIds = this.collectOverriddenNodeIds(this.cursors)));
  }
  advanceCursors() {
    for (let e of this.cursors)
      ((e.branchData = e.store.branchData),
        (e.nextRowIndex = e.store.branchData.columns.length),
        (e.hierarchyCursor = e.store.getHierarchy().getInvalidationCursor()));
  }
  applyNewRows() {
    let e = new Set(),
      t = new Set(),
      n = new Set(),
      r = this.steppedBuild?.ownSum,
      i = new Map();
    for (let c of this.cursors) {
      let u = c.store.branchData.columns,
        h = c.store.getHierarchy();
      if (
        c.store.branchData !== c.branchData ||
        u.length < c.nextRowIndex ||
        h.getInvalidationCursor() < c.hierarchyCursor
      )
        return this.reset();
      for (let m = c.nextRowIndex; m < u.length; m++) {
        let y = u.id.get(m),
          p = u.key.get(m);
        (this.addOwnersOfRow(y, p, e, i),
          r?.nodeId !== void 0 && ra(y, r.nodeId) && (r.nodeId = void 0),
          p === "parentid" ? t.add(y) : p === "children" && n.add(y));
      }
      let f = h.getInvalidatedNodeIdsSince(c.hierarchyCursor);
      if (f === void 0) return this.reset();
      for (let m of f) t.add(m);
    }
    this.advanceCursors();
    let o = this.collectOverriddenNodeIds(this.cursors);
    for (let c of this.overriddenNodeIds) t.add(c);
    for (let c of o) t.add(c);
    if (
      ((this.overriddenNodeIds = o),
      t.size > 0 && this.placingReads++,
      e.size === 0 && t.size === 0)
    )
      return;
    for (let c of t) (e.add(c), this.hasSavedSums() && this.addSavedUnitsOfMove(c, e, i));
    for (let c of n) {
      let u = this.entries.get(c);
      if (u && u.hasChildrenKey !== this.store.latest.has(c, "children"))
        for (let h of this.hierarchy.getChildrenIds(c)) t.add(h);
    }
    let a = new Map();
    for (let c of e) {
      this.savedCollectionSums.delete(c);
      let u = this.entries.get(c);
      if (!u) continue;
      if (this.savedUnitIds.has(c)) {
        (this.dropSavedUnit(c), t.add(c));
        continue;
      }
      let h = u.materializable;
      (this.updateOwn(c, u, a), u.materializable !== h && t.add(c));
    }
    let d = [];
    for (let c of t) {
      let u = this.entries.get(c);
      (u ? !this.isAttachmentCurrent(c, u) : this.hasBuiltParent(c)) && d.push(c);
    }
    for (let c of d) this.detach(c);
    for (let c of d) (this.entries.has(c) || this.build(c), this.attach(c));
    this.propagatePendingChanges(a);
  }
  propagatePendingChanges(e) {
    for (let [n, r] of e)
      if (!r.isCounted) {
        r.isCounted = !0;
        for (let i = n; i.parent;) {
          let o = i.parent,
            a = Ct(e, o);
          if ((a.unfinishedChildren++, a.isCounted)) break;
          ((a.isCounted = !0), (i = o));
        }
      }
    let t = [];
    for (let [n, r] of e) r.unfinishedChildren === 0 && t.push(n);
    for (let n = t.pop(); n; n = t.pop()) {
      let r = Ct(e, n);
      ((n.subtreeLow = (n.subtreeLow + r.low) | 0), (n.subtreeHigh = (n.subtreeHigh + r.high) | 0));
      let i = n.parent;
      if (!i) continue;
      let o = Ct(e, i);
      ((o.low = (o.low + r.low) | 0),
        (o.high = (o.high + r.high) | 0),
        o.unfinishedChildren--,
        o.unfinishedChildren === 0 && t.push(i));
    }
  }
  collectOverriddenNodeIds(e) {
    let t = new Set();
    for (let n of e)
      for (let [r, i] of n.store.getHierarchy().parentOverrides)
        for (let o of i.values()) o.size > 0 && t.add(r);
    return t;
  }
  addOwnersOfRow(e, t, n, r) {
    if (!this.definition.leavesOutKey(t)) {
      let o = this.getDirtyId(e, r);
      o !== void 0 && n.add(o);
    }
    let i = e.indexOf(".");
    for (; i >= 0;) {
      let o = e.indexOf(".", i + 1),
        a = e.slice(0, i),
        d = this.getDirtyId(a, r);
      (d !== void 0 && !this.leavesOutNestedRow(a, e, t) && n.add(d), (i = o));
    }
  }
  leavesOutNestedRow(e, t, n) {
    let { definition: r } = this;
    if (r.leavesOutKey(xi(t, e.length + 1))) return !0;
    let i = t.startsWith(xt, e.length);
    if (!r.appliesToReplicaOverrides || !i) return !1;
    let o = e.length + xt.length,
      a = t.indexOf(".", o);
    return a < 0
      ? r.leavesOutKey(n)
      : r.leavesOutKey(xi(t, a + 1))
        ? !this.isInOverridesOfDottedId(t, o, a)
        : !1;
  }
  isInOverridesOfDottedId(e, t, n) {
    let r = e.slice(0, t - 1);
    for (let i = n; i >= 0;) {
      i = e.indexOf(".", i + 1);
      let o = e.slice(t, i < 0 ? void 0 : i);
      if (this.store.latest.has(r, o)) return !0;
    }
    return !1;
  }
  getDirtyId(e, t) {
    if (this.entries.has(e)) return e;
    if (this.hasSavedSums()) return this.getSavedUnitId(e, t);
  }
  hasSavedSums() {
    return this.savedUnitIds.size > 0 || this.savedCollectionSums.size > 0;
  }
  getSavedUnitId(e, t) {
    let n = [],
      r,
      i = e;
    for (; !t.has(i);) {
      (t.set(i, void 0), n.push(i));
      let o = this.holdsUnits(i) ? void 0 : this.hierarchy.getParentId(i);
      if (typeof o != "string" || this.holdsUnits(o)) {
        (this.savedUnitIds.has(i) || this.savedCollectionSums.has(i)) && (r = i);
        break;
      }
      i = o;
    }
    r ??= t.get(i);
    for (let o of n) t.set(o, r);
    return r;
  }
  addSavedUnitsOfMove(e, t, n) {
    let r = this.getSavedUnitId(e, n);
    r !== void 0 && t.add(r);
    for (let i of this.cursors) {
      let o = i.store.getHierarchy().getOwnNodeData(e)?.parentIdHistory;
      if (!o) continue;
      let a = i.store.branchData.columns.value;
      for (let d of o) {
        let c = Zn(a.get(d));
        if (c === void 0) continue;
        let u = this.getSavedUnitId(c, n);
        u !== void 0 && t.add(u);
      }
    }
  }
  isAttachmentCurrent(e, t) {
    return this.getAttachableHierarchyKey(e, t) === t.hierarchyKey;
  }
  getAttachableHierarchyKey(e, t) {
    if (!t.materializable) return;
    let n = this.hierarchy.getHierarchyKey(e);
    if (!(n === void 0 || n === b) && this.entries.get(B(n))?.hasChildrenKey) return n;
  }
  hasBuiltParent(e) {
    let t = this.hierarchy.getParentId(e);
    return typeof t == "string" && this.entries.has(t);
  }
  getBuildRootId(e) {
    let t = e;
    for (; !this.holdsUnits(t);) {
      let n = this.hierarchy.getParentId(t);
      if (typeof n != "string" || this.holdsUnits(n)) break;
      t = n;
    }
    return t;
  }
  holdsUnits(e) {
    let t = this.hierarchy.getRootId();
    if (e === t) return !0;
    let n = this.hierarchy.getParentId(e);
    return typeof n != "string"
      ? !1
      : n === t
        ? this.hierarchy.getNodeData(e)?.__class === Ci
        : this.hierarchy.getNodeData(n)?.__class === Ci && this.hierarchy.getParentId(n) === t;
  }
  createBuild(e, t) {
    return {
      rootId: e,
      frames: [{ nodeId: e, childIds: void 0, nextChildIndex: 0 }],
      placingReads: this.placingReads,
      ownSum: t,
    };
  }
  build(e) {
    this.continueBuild(this.createBuild(e, this.ownSum), 1 / 0);
  }
  continueBuild(e, t) {
    let { frames: n, ownSum: r } = e;
    if (e.placingReads !== this.placingReads) {
      e.placingReads = this.placingReads;
      for (let i of n) ((i.childIds = void 0), (i.nextChildIndex = 0));
    }
    for (;;) {
      let i = n.at(-1);
      if (!i) return !0;
      if (this.entries.has(i.nodeId)) {
        n.pop();
        continue;
      }
      let o = (i.childIds ??= this.hierarchy.getChildrenIds(i.nodeId)),
        a = o[i.nextChildIndex];
      for (; a !== void 0 && this.entries.has(a);) a = o[++i.nextChildIndex];
      if (a !== void 0) {
        n.push({ nodeId: a, childIds: void 0, nextChildIndex: 0 });
        continue;
      }
      let d = this.savedCollectionSums.get(i.nodeId);
      if (d) {
        (this.addSavedCollectionEntry(i.nodeId, d, o), n.pop());
        continue;
      }
      if (
        (r.nodeId !== i.nodeId && (this.startOwnSum(r, i.nodeId), Ai(t))) ||
        !this.addPendingObjects(r, t)
      )
        return !1;
      (this.addEntry(i.nodeId, r, o), n.pop());
    }
  }
  addEntry(e, t, n) {
    (this.completeOwnSum(t, e),
      this.entries.set(e, {
        ownLow: t.low,
        ownHigh: t.high,
        subtreeLow: t.low,
        subtreeHigh: t.high,
        parent: void 0,
        attachmentLow: 0,
        attachmentHigh: 0,
        hierarchyKey: void 0,
        hasChildrenKey: t.hasChildrenKey,
        materializable: t.materializable,
      }));
    for (let r of n) this.attach(r);
  }
  updateOwn(e, t, n) {
    let r = this.ownSum;
    (this.startOwnSum(r, e),
      this.addPendingObjects(r, 1 / 0),
      this.completeOwnSum(r, e),
      (t.hasChildrenKey = r.hasChildrenKey),
      (t.materializable = r.materializable));
    let i = (r.low - t.ownLow) | 0,
      o = (r.high - t.ownHigh) | 0;
    if (
      ((t.ownLow = r.low),
      (t.ownHigh = r.high),
      (t.subtreeLow = (t.subtreeLow + i) | 0),
      (t.subtreeHigh = (t.subtreeHigh + o) | 0),
      t.parent && (i !== 0 || o !== 0))
    ) {
      let a = Ct(n, t.parent);
      ((a.low = (a.low + i) | 0), (a.high = (a.high + o) | 0));
    }
  }
  attach(e) {
    let t = this.entries.get(e);
    if ((l(t, () => `Cannot attach untracked node ${e}`), t.parent || !t.materializable)) return;
    let n = this.hierarchy.getHierarchyKey(e);
    if (n === void 0 || n === b) return;
    let r = this.entries.get(B(n));
    r?.hasChildrenKey &&
      (this.isAttachedAncestorOrSelf(t, r) ||
        (this.hasher.startTerm(e, 4),
        this.hasher.addString(Q(n)),
        (t.attachmentLow = _e(this.hasher.low)),
        (t.attachmentHigh = _e(this.hasher.high)),
        (t.hierarchyKey = n),
        (t.parent = r),
        this.addToChain(
          r,
          (t.attachmentLow + t.subtreeLow) | 0,
          (t.attachmentHigh + t.subtreeHigh) | 0
        )));
  }
  detach(e) {
    let t = this.entries.get(e),
      n = t?.parent;
    !t ||
      !n ||
      (this.addToChain(
        n,
        -(t.attachmentLow + t.subtreeLow) | 0,
        -(t.attachmentHigh + t.subtreeHigh) | 0
      ),
      (t.hierarchyKey = void 0),
      (t.parent = void 0));
  }
  isAttachedAncestorOrSelf(e, t) {
    for (let n = t; n; n = n.parent) if (n === e) return !0;
    return !1;
  }
  addToChain(e, t, n) {
    if (!(t === 0 && n === 0))
      for (let r = e; r; r = r.parent)
        ((r.subtreeLow = (r.subtreeLow + t) | 0), (r.subtreeHigh = (r.subtreeHigh + n) | 0));
  }
  startOwnSum(e, t) {
    let n = this.store.latest.getLatest(t);
    ((e.nodeId = t),
      (e.low = 0),
      (e.high = 0),
      (e.hasChildrenKey = n?.has("children") ?? !1),
      (e.materializable = this.isMaterialized(t, n)),
      e.visitedStoreIds.clear(),
      (e.objectIds.length = 0),
      (e.arrayIds.length = 0),
      e.materializable && this.addObjectRows(e, t, n));
  }
  addPendingObjects(e, t) {
    for (;;) {
      let n = e.arrayIds.pop();
      if (n !== void 0) this.addArrayRows(e, n);
      else {
        let r = e.objectIds.pop();
        if (r === void 0) return !0;
        let i = this.store.latest.getLatest(r);
        this.isMaterialized(r, i) && this.addObjectRows(e, r, i);
      }
      if (Ai(t)) return e.arrayIds.length === 0 && e.objectIds.length === 0;
    }
  }
  completeOwnSum(e, t) {
    if (((e.nodeId = void 0), !e.materializable)) return;
    let n = this.hierarchy.getParentId(t);
    (typeof n == "string" &&
      t !== this.hierarchy.getRootId() &&
      (this.hasher.startTerm(t, 2), this.hasher.addString(n), this.addTermToSum(e)),
      e.hasChildrenKey && (this.hasher.startTerm(t, 3), this.addTermToSum(e)));
  }
  isMaterialized(e, t) {
    if (!t && this.hierarchy.getParentRowIdx(e) === void 0) return !1;
    if (this.store.base) return this.store.getCurrentValue(e, R) !== b;
    let n = t?.ownGet(R);
    return n === void 0 || this.store.branchData.columns.value.get(n) !== b;
  }
  addObjectRows(e, t, n) {
    if (!n || e.visitedStoreIds.has(t)) return;
    (e.visitedStoreIds.add(t), this.hasher.startTerm(t, 1));
    let r = this.hasher.low,
      i = this.hasher.high,
      { definition: o } = this,
      a = t === e.nodeId || (o.appliesToReplicaOverrides && na(t, e.nodeId));
    if (!this.store.base) {
      let d = this.store.branchData.columns;
      n.forEachOwn((c, u) => {
        c === R ||
          c === "children" ||
          c === "parentid" ||
          (a && o.leavesOutKey(c)) ||
          this.addRow(e, r, i, c, d.value.get(u));
      });
      return;
    }
    for (let d of n.keys())
      d === R ||
        d === "children" ||
        d === "parentid" ||
        (a && o.leavesOutKey(d)) ||
        this.addRow(e, r, i, d, this.store.getCurrentRawValueOrDoesNotExist(t, d));
  }
  addArrayRows(e, t) {
    let n = this.store.latest.getLatest(t);
    if (!(!n || e.visitedStoreIds.has(t))) {
      this.addObjectRows(e, t, n);
      for (let r of n.keys())
        r !== R && ce(this.store.getCurrentValue(t, r)) && e.objectIds.push(r);
    }
  }
  addRow(e, t, n, r, i) {
    i === b ||
      i === we ||
      ((this.hasher.low = t),
      (this.hasher.high = n),
      this.hasher.addString(r),
      this.hasher.addValue(i),
      this.addTermToSum(e),
      this.queueReferences(e, i));
  }
  queueReferences(e, t) {
    if (Array.isArray(t)) {
      for (let n of t) this.queueReferences(e, n);
      return;
    }
    if (K(t)) {
      e.objectIds.push(_(t));
      return;
    }
    j(t) && e.arrayIds.push(_(t));
  }
  addTermToSum(e) {
    ((e.low = (e.low + _e(this.hasher.low)) | 0), (e.high = (e.high + _e(this.hasher.high)) | 0));
  }
};
function Ri() {
  return {
    nodeId: void 0,
    low: 0,
    high: 0,
    hasChildrenKey: !1,
    materializable: !1,
    visitedStoreIds: new Set(),
    objectIds: [],
    arrayIds: [],
  };
}
var xt = ".replicaInfo.overrides.";
function na(s, e) {
  return e === void 0 || !s.startsWith(xt, e.length)
    ? !1
    : s.startsWith(e) && s.indexOf(".", e.length + xt.length) < 0;
}
function xi(s, e) {
  let t = s.indexOf(".", e);
  return t < 0 ? s.slice(e) : s.slice(e, t);
}
function Ai(s) {
  return s !== 1 / 0 && performance.now() >= s;
}
function ra(s, e) {
  return s.startsWith(e) && (s.length === e.length || s[e.length] === ".");
}
function Ct(s, e) {
  let t = s.get(e);
  return (t || ((t = { low: 0, high: 0, unfinishedChildren: 0, isCounted: !1 }), s.set(e, t)), t);
}
var An = "FRBR",
  On = 2,
  rt = "__$$framerCrdtSpecialNumber$$__",
  it = class {
    length;
    clients;
    sequences;
    batches;
    times;
    ids;
    keys;
    values;
    users;
    branchIds;
    constructor(e) {
      let t = new z(e);
      (l(t.readString() === An, "Invalid binary rows magic"),
        l(t.readUint8() === On, "Unsupported binary rows version"),
        (this.length = t.readUint32()),
        (this.clients = t.readTypedArray(Float64Array)),
        (this.sequences = t.readTypedArray(Float64Array)),
        (this.batches = t.readTypedArray(Float64Array)),
        (this.times = t.readTypedArray(Uint32Array)));
      let n = Mi(t);
      ((this.ids = n.ids),
        (this.keys = n.keys),
        (this.users = n.users),
        (this.branchIds = n.branchIds),
        (this.values = Mi(t)),
        l(
          [
            this.clients.length,
            this.sequences.length,
            this.batches.length,
            this.times.length,
            this.ids.length,
            this.keys.length,
            this.values.length,
            this.users.length,
            this.branchIds.length,
          ].every((r) => r === this.length),
          "Binary row columns have inconsistent lengths"
        ),
        l(t.endOfFile(), "Unexpected trailing binary row data"));
    }
    getSerializableRow(e) {
      l(e >= 0 && e < this.length, "Binary row index is out of bounds");
      let t = this.branchIds[e];
      return {
        client: this.clients[e],
        seq: this.sequences[e],
        id: this.ids[e],
        key: this.keys[e],
        value: this.values[e],
        user: this.users[e],
        batch: oa(this.batches[e]),
        time: this.times[e],
        ...(t === null ? {} : { branchId: t }),
      };
    }
    getSerializableRows() {
      return Array.from({ length: this.length }, (e, t) => this.getSerializableRow(t));
    }
    *indices() {
      for (let e = 0; e < this.length; e++) yield e;
    }
  };
function Lh(s) {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = [],
    o = [],
    a = [],
    d = [],
    c = [];
  for (let h of s)
    (e.push(h.client),
      t.push(h.seq),
      n.push(h.batch ?? Number.NaN),
      r.push(h.time),
      i.push(h.id),
      o.push(h.key),
      a.push(h.value),
      d.push(h.user),
      c.push(h.branchId ?? null));
  let u = new V();
  return (
    u.writeString(An),
    u.writeUint8(On),
    u.writeUint32(i.length),
    u.writeTypedArray(new Float64Array(e)),
    u.writeTypedArray(new Float64Array(t)),
    u.writeTypedArray(new Float64Array(n)),
    u.writeTypedArray(new Uint32Array(r)),
    Ti(u, { ids: i, keys: o, users: d, branchIds: c }),
    Ti(u, a),
    u.getBuffer()
  );
}
function Hh(s) {
  let e = new z(s);
  return (
    l(e.readString() === An, "Invalid binary rows magic"),
    l(e.readUint8() === On, "Unsupported binary rows version"),
    e.readUint32()
  );
}
function Ti(s, e) {
  let t = new TextEncoder().encode(JSON.stringify(e, ia));
  (s.writeUint32(t.length), s.writeBytes(t));
}
function Mi(s) {
  let e = s.readBytes(s.readUint32());
  return xn(JSON.parse(new TextDecoder().decode(e)));
}
function ia(s, e) {
  return T(e)
    ? k(e)
    : typeof e != "number"
      ? e
      : Object.is(e, -0)
        ? { [rt]: "-0" }
        : Number.isFinite(e)
          ? e
          : Number.isNaN(e)
            ? { [rt]: "NaN" }
            : { [rt]: e === Number.POSITIVE_INFINITY ? "Infinity" : "-Infinity" };
}
function sa(s) {
  if (typeof s != "object" || s === null) return !1;
  let e = rt;
  if (!(e in s)) return !1;
  let t = Reflect.get(s, e);
  return t === "NaN" || t === "Infinity" || t === "-Infinity" || t === "-0";
}
function xn(s) {
  if (M(s)) return N(s);
  if (sa(s)) {
    let e = s[rt];
    return e === "NaN"
      ? Number.NaN
      : e === "-0"
        ? -0
        : e === "Infinity"
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY;
  }
  if (Array.isArray(s)) {
    for (let e = 0; e < s.length; e++) s[e] = xn(s[e]);
    return s;
  }
  if (typeof s != "object" || s === null) return s;
  for (let e of Object.keys(s)) Reflect.set(s, e, xn(Reflect.get(s, e)));
  return s;
}
function oa(s) {
  return Number.isNaN(s) ? void 0 : s;
}
var Ot = class {
    constructor(e, t) {
      this.store = e;
      this.dependencyNodeIds = t;
    }
    store;
    dependencyNodeIds;
    getParentId(e) {
      let t = this.store.getParentId(e);
      return typeof t == "string" ? t : void 0;
    }
    getObjectKey(e, t) {
      let n = $t(e, t);
      return (n && this.dependencyNodeIds.add(n), this.store.getObjectKey(e, t));
    }
  },
  Tt = class {
    groupKeysByChangedNodeId = new Map();
    changedNodeIdsByGroupKey = new Map();
    setGroupsForChangedNode(e, t) {
      if ((this.deleteGroupsForChangedNode(e), t.size !== 0)) {
        this.groupKeysByChangedNodeId.set(e, t);
        for (let n of t) {
          let r = this.changedNodeIdsByGroupKey.get(n);
          (r || ((r = new Set()), this.changedNodeIdsByGroupKey.set(n, r)), r.add(e));
        }
      }
    }
    deleteGroupsForChangedNode(e) {
      let t = this.groupKeysByChangedNodeId.get(e);
      if (t) {
        this.groupKeysByChangedNodeId.delete(e);
        for (let n of t) {
          let r = this.changedNodeIdsByGroupKey.get(n);
          r && (r.delete(e), r.size === 0 && this.changedNodeIdsByGroupKey.delete(n));
        }
      }
    }
    hasChangeGroup(e) {
      let t = this.getChangedNodeIdsForGroup(e);
      return t !== void 0 && t.size > 0;
    }
    getChangedNodeIdsForGroup(e) {
      return this.changedNodeIdsByGroupKey.get(e);
    }
    *entries() {
      yield* this.changedNodeIdsByGroupKey;
    }
  },
  Mt = class {
    dependencyNodeIdsByChangedNodeId = new Map();
    changedNodeIdsByDependencyNodeId = new Map();
    setDependenciesForChangedNode(e, t) {
      if ((this.deleteDependenciesForChangedNode(e), t.size !== 0)) {
        this.dependencyNodeIdsByChangedNodeId.set(e, t);
        for (let n of t) {
          let r = this.changedNodeIdsByDependencyNodeId.get(n);
          (r || ((r = new Set()), this.changedNodeIdsByDependencyNodeId.set(n, r)), r.add(e));
        }
      }
    }
    deleteDependenciesForChangedNode(e) {
      let t = this.dependencyNodeIdsByChangedNodeId.get(e);
      if (t) {
        this.dependencyNodeIdsByChangedNodeId.delete(e);
        for (let n of t) {
          let r = this.changedNodeIdsByDependencyNodeId.get(n);
          r && (r.delete(e), r.size === 0 && this.changedNodeIdsByDependencyNodeId.delete(n));
        }
      }
    }
    addChangedNodeIdsForDependency(e, t) {
      let n = this.changedNodeIdsByDependencyNodeId.get(e);
      if (n) for (let r of n) t.add(r);
    }
  },
  kt = class {
    constructor(e, t, n) {
      this.groupKey = e;
      this.nodeChangeByNodeId = t;
      this.changedNodeIds = n;
    }
    groupKey;
    nodeChangeByNodeId;
    changedNodeIds;
    get nodeChangeCount() {
      return this.changedNodeIds.size;
    }
    hasNodeChange(e) {
      return this.changedNodeIds.has(e);
    }
    getNodeChange(e) {
      if (this.hasNodeChange(e)) return this.nodeChangeByNodeId.get(e);
    }
    *nodeChanges() {
      for (let e of this.changedNodeIds) {
        let t = this.nodeChangeByNodeId.get(e);
        (l(t, () => `Missing node change for group index: ${e}`), yield t);
      }
    }
  },
  Mn = class {
    constructor(e, t) {
      this.nodeChangeByNodeId = e;
      this.nodeChangeGroupIndex = t;
    }
    nodeChangeByNodeId;
    nodeChangeGroupIndex;
    get nodeChangeCount() {
      return this.nodeChangeByNodeId.size;
    }
    hasNodeChange(e) {
      return this.nodeChangeByNodeId.has(e);
    }
    getNodeChange(e) {
      return this.nodeChangeByNodeId.get(e);
    }
    nodeChanges() {
      return this.nodeChangeByNodeId.values();
    }
    hasChangeGroup(e) {
      return this.nodeChangeGroupIndex.hasChangeGroup(e);
    }
    getChangeGroup(e) {
      let t = this.nodeChangeGroupIndex.getChangedNodeIdsForGroup(e);
      if (!(!t || t.size === 0)) return new kt(e, this.nodeChangeByNodeId, t);
    }
    *changeGroups() {
      for (let [e, t] of this.nodeChangeGroupIndex.entries())
        yield new kt(e, this.nodeChangeByNodeId, t);
    }
  },
  Nt = class {
    constructor(e, t) {
      this.store = e;
      let n = e.base;
      (l(n, "Can't read node changes for main branch"),
        (this.baseStore = n),
        (this.resolveGroup = t.resolveGroup));
      let r = new Set(t.ignoredPropertyKeys);
      this.nodeChangeResolver = new kn(e, r);
    }
    store;
    baseStore;
    nodeChangeResolver;
    resolveGroup;
    nodeChanges;
    branchCursor;
    baseStoreCursors = [];
    nodeChangeByNodeId = new Map();
    nodeChangeGroupIndex = new Tt();
    nodeChangeDependencyIndex = new Mt();
    changesRevision = 0;
    read() {
      if (!this.nodeChanges) return this.rebuildChanges();
      let e = At(this.store),
        t = Tn(this.store);
      return this.cursorsAreCurrent(e, t)
        ? this.nodeChanges
        : this.canUpdateIncrementally(e, t)
          ? (this.updateIncrementally(e, t), this.nodeChanges)
          : this.rebuildChanges();
    }
    isCurrent() {
      return this.nodeChanges ? this.cursorsAreCurrent(At(this.store), Tn(this.store)) : !1;
    }
    get revision() {
      return this.changesRevision;
    }
    cursorsAreCurrent(e, t) {
      let n = this.branchCursor;
      if (!n || !ki(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let r = 0; r < t.length; r++) {
        let i = this.baseStoreCursors[r],
          o = t[r];
        if (!i || !o || !ki(i, o)) return !1;
      }
      return !0;
    }
    canUpdateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n || !Ni(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let r = 0; r < t.length; r++) {
        let i = this.baseStoreCursors[r],
          o = t[r];
        if (!i || !o || !Ni(i, o)) return !1;
      }
      return !0;
    }
    rebuildChanges() {
      ((this.nodeChangeByNodeId = new Map()),
        (this.nodeChangeGroupIndex = new Tt()),
        (this.nodeChangeDependencyIndex = new Mt()),
        (this.nodeChanges = new Mn(this.nodeChangeByNodeId, this.nodeChangeGroupIndex)),
        this.changesRevision++);
      let e = this.store.getBranchOwnWriteIndex();
      for (let t of e.getNodeIdsWithOwnWrites()) {
        if (!this.store.isMaterializableNode(t)) continue;
        let n = this.nodeChangeResolver.resolveNodeChange(t);
        n && this.addNodeChange(n);
      }
      return (
        (this.branchCursor = At(this.store)),
        (this.baseStoreCursors = Tn(this.store)),
        this.nodeChanges
      );
    }
    updateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n) throw new Error("Missing branch node change reader cursor");
      let r = new Set(),
        i = new Set();
      (this.collectRowChanges(this.store, n.length, e.length, r, i),
        this.collectHierarchyChanges(this.store, n.hierarchyCursor, r, i));
      for (let a = 0; a < t.length; a++) {
        let d = this.baseStoreCursors[a],
          c = t[a];
        if (!d || !c) continue;
        let u = new Set();
        (this.collectRowChanges(c.store, d.length, c.length, r, u),
          this.collectHierarchyChanges(c.store, d.hierarchyCursor, r, u));
        for (let h of u) i.add(h);
      }
      for (let a of t) this.collectOwnWriteNodeIdsInSubtrees(a.store, i, r);
      this.collectOwnWriteNodeIdsInSubtrees(this.store, i, r);
      let o = new Set();
      for (let a of r) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(a, o);
      for (let a of o) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(a, o);
      for (let a of r) o.delete(a);
      (this.recomputeNodeChanges(r),
        this.regroupNodeChanges(o),
        (this.branchCursor = e),
        (this.baseStoreCursors = t),
        this.changesRevision++);
    }
    collectRowChanges(e, t, n, r, i) {
      let o = e.branchData.columns;
      for (let a = t; a < n; a++) {
        let d = o.id.get(a),
          c = o.key.get(a),
          u = $t(d, c);
        u && (r.add(u), i && c === "parentid" && i.add(u));
      }
    }
    collectHierarchyChanges(e, t, n, r) {
      let i =
        e.getHierarchy().getInvalidatedNodeIdsSince(t) ??
        this.store.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites();
      for (let o of i) (n.add(o), r.add(o));
    }
    collectOwnWriteNodeIdsInSubtrees(e, t, n) {
      let r = this.store.getBranchOwnWriteIndex(),
        i = new Set(t);
      for (let o of i) {
        r.getOwnWriteSummary(o) && n.add(o);
        for (let a of e.getChildrenIds(o)) i.add(a);
      }
    }
    recomputeNodeChanges(e) {
      if (e.size !== 0)
        for (let t of e) {
          if ((this.removeNodeChange(t), !this.store.isMaterializableNode(t))) continue;
          let n = this.nodeChangeResolver.resolveNodeChange(t);
          n && this.addNodeChange(n);
        }
    }
    regroupNodeChanges(e) {
      let t = new Set();
      for (let n of e) {
        let r = this.nodeChangeByNodeId.get(n);
        if (r) {
          if (r.type === "removed" || r.type === "moved") {
            t.add(n);
            continue;
          }
          this.addNodeChange(r);
        }
      }
      this.recomputeNodeChanges(t);
    }
    addNodeChange(e) {
      let t = new Set(),
        n = { branch: new Ot(this.store, t), base: new Ot(this.baseStore, t) },
        r = this.resolveNodeChangeGroups(e, n);
      (this.nodeChangeByNodeId.set(e.nodeId, e),
        this.nodeChangeGroupIndex.setGroupsForChangedNode(e.nodeId, r),
        this.nodeChangeDependencyIndex.setDependenciesForChangedNode(e.nodeId, t));
    }
    removeNodeChange(e) {
      (this.nodeChangeByNodeId.delete(e),
        this.nodeChangeGroupIndex.deleteGroupsForChangedNode(e),
        this.nodeChangeDependencyIndex.deleteDependenciesForChangedNode(e));
    }
    resolveNodeChangeGroups(e, t) {
      let n = this.resolveGroup(e, t);
      if (typeof n == "string") {
        let r = new Set();
        return (r.add(n), r);
      }
      return n instanceof Set ? n : new Set(n);
    }
  },
  kn = class {
    constructor(e, t) {
      this.store = e;
      this.ignoredPropertyKeys = t;
      let n = e.base;
      (l(n, "Can't get node changes for main branch"), (this.baseStore = n));
    }
    store;
    ignoredPropertyKeys;
    baseStore;
    resolveNodeChange(e) {
      let t = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (!t) return;
      let n = new Set();
      if (t.hasParentIdOwnWrite) return this.resolveHierarchyNodeChange(t, n);
      let r = this.store.getHierarchy().getParentId(t.nodeId);
      return this.createNodeChangeUpdated(t, typeof r == "string" ? r : void 0, n);
    }
    resolveHierarchyNodeChange(e, t) {
      let n = e.nodeId,
        r = this.store.getHierarchy(),
        i = r.getOwnParentRowIdx(n);
      l(i !== void 0, () => `Can't find parentId row index for ${n}`);
      let o = this.store.branchData.columns;
      if (o.value.get(i) === S) {
        let f = r.getParentId(n);
        return this.createNodeChangeUpdated(e, typeof f == "string" ? f : void 0, t);
      }
      let d = o.user.get(i),
        c = this.baseStore.getHierarchy(),
        u = c.inTree(n) ? c.getParentId(n) : void 0,
        h = r.inTree(n) ? r.getParentId(n) : void 0;
      if (typeof u == "string" && typeof h == "string")
        return (t.add(d), this.createNodeChangeMoved(e, u, h, t));
      if (typeof u == "string") return (t.add(d), this.createNodeChangeRemoved(e, u, t));
      if (typeof h == "string") return (t.add(d), this.createNodeChangeAdded(e, h, t));
    }
    resolveChangedKeys(e, t) {
      if (!this.store.getHierarchy().inTree(e.nodeId)) return;
      let n = this.store.branchData.columns,
        r = new Map();
      for (let [i, o] of e.latestPropertyRowIndexByStoreId) {
        let a = new Map();
        for (let [d, c] of o) {
          if (this.ignoredPropertyKeys.has(d)) continue;
          let u = n.value.get(c);
          if (u === S) continue;
          let h = this.baseStore.getCurrentValue(i, d);
          if (aa(u, h)) continue;
          let f = n.user.get(c);
          (t.add(f), a.set(d, f));
        }
        a.size > 0 && r.set(i, a);
      }
      if (r.size > 0) return r;
    }
    createNodeChangeAdded(e, t, n) {
      return {
        type: "added",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        toParentId: t,
        actors: n,
        changedKeys: this.resolveChangedKeys(e, n) ?? new Map(),
      };
    }
    createNodeChangeRemoved(e, t, n) {
      return {
        type: "removed",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        actors: n,
      };
    }
    createNodeChangeMoved(e, t, n, r) {
      return {
        type: "moved",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        toParentId: n,
        actors: r,
        changedKeys: this.resolveChangedKeys(e, r),
      };
    }
    createNodeChangeUpdated(e, t, n) {
      let r = this.resolveChangedKeys(e, n);
      if (r)
        return {
          type: "updated",
          nodeId: e.nodeId,
          ...this.resolveNodeMeta(e.nodeId),
          parentId: t,
          actors: n,
          changedKeys: r,
        };
    }
    resolveNodeMeta(e) {
      let t = this.resolveNodeMetaValue(e, "__class");
      l(t, () => `Can't find __class for ${e}`);
      let n = this.resolveNodeMetaValue(e, "name");
      return { __class: t, name: n };
    }
    resolveNodeMetaValue(e, t) {
      let n = this.store.getCurrentValue(e, t);
      if (
        typeof n == "string" ||
        ((n = this.baseStore.getCurrentValue(e, t)), typeof n == "string")
      )
        return n;
    }
  };
function Tn(s) {
  let e = [],
    t = s.base;
  for (; t;) {
    let n = At(t);
    (e.push(n), (t = t.base));
  }
  return e;
}
function At(s) {
  return {
    store: s,
    branchData: s.branchData,
    length: s.length,
    hierarchyCursor: s.getHierarchy().getInvalidationCursor(),
  };
}
function ki(s, e) {
  return (
    s.store === e.store &&
    s.branchData === e.branchData &&
    s.length === e.length &&
    s.hierarchyCursor === e.hierarchyCursor
  );
}
function Ni(s, e) {
  return (
    s.store === e.store &&
    s.branchData === e.branchData &&
    s.length <= e.length &&
    s.hierarchyCursor <= e.hierarchyCursor
  );
}
function aa(s, e) {
  return !!(
    e === s ||
    ((e === void 0 || e === b) && (s === void 0 || s === b)) ||
    (Array.isArray(e) && Array.isArray(s) && ht(e, s)) ||
    (re(e) && re(s) && je(e, s))
  );
}
var Nn = new DataView(new ArrayBuffer(8)),
  da = 4096,
  Bt = class {
    constructor(e = 0) {
      this.seed = e;
      this.state = e;
    }
    seed;
    state;
    count = 0;
    keyHashes = new Map();
    getHash() {
      return Dt(this.state, this.count);
    }
    reset() {
      ((this.state = this.seed), (this.count = 0));
    }
    add(e) {
      let t = this.hashValue(e);
      ((this.state = he(this.state, t)), this.count++);
    }
    hashValue(e) {
      switch (typeof e) {
        case "undefined":
          return this.seed ^ 0;
        case "boolean":
          return this.seed ^ (e ? 3 : 2);
        case "number":
          return Number.isNaN(e) ? this.seed ^ 5 : this.hashNumber(e);
        case "string":
          return Di(this.seed ^ 6, e);
        case "object":
          return e === null
            ? this.seed ^ 1
            : Array.isArray(e)
              ? this.hashArray(e)
              : this.hashObject(e);
        default:
          throw new Error(`Unsupported value type: ${typeof e}`);
      }
    }
    hashNumber(e) {
      Nn.setFloat64(0, e, !0);
      let t = Nn.getUint32(0, !0),
        n = Nn.getUint32(4, !0),
        r = he(this.seed ^ 4, t);
      return he(r, n);
    }
    hashArray(e) {
      let t = this.seed ^ 7;
      for (let n of e) {
        let r = this.hashValue(n);
        t = he(t, r);
      }
      return Dt(t, e.length);
    }
    hashObject(e) {
      let t = 0,
        n = Object.keys(e);
      for (let i of n) {
        let o = this.hashObjectKey(i),
          a = this.hashValue(e[i]),
          d = he(o, a);
        t = (t + Dt(d, 0)) | 0;
      }
      let r = he(this.seed ^ 8, t);
      return Dt(r, n.length);
    }
    hashObjectKey(e) {
      let t = this.keyHashes.get(e);
      if (t !== void 0) return t;
      this.keyHashes.size >= da && this.keyHashes.clear();
      let n = Di(this.seed, e);
      return (this.keyHashes.set(e, n), n);
    }
  },
  ca = 3432918353,
  ua = 461845907;
function he(s, e) {
  return (
    (e = Math.imul(e, ca)),
    (e = (e << 15) | (e >>> 17)),
    (e = Math.imul(e, ua)),
    (s ^= e),
    (s = (s << 13) | (s >>> 19)),
    (Math.imul(s, 5) + 3864292196) | 0
  );
}
function Dt(s, e) {
  return (
    (s ^= e),
    (s ^= s >>> 16),
    (s = Math.imul(s, 2246822507)),
    (s ^= s >>> 13),
    (s = Math.imul(s, 3266489909)),
    (s ^= s >>> 16),
    s >>> 0
  );
}
function Di(s, e) {
  let t = e.length,
    n = t & -2;
  s = he(s, t);
  for (let r = 0; r < n; r += 2) {
    let i = e.charCodeAt(r) | (e.charCodeAt(r + 1) << 16);
    s = he(s, i);
  }
  if (n < t) {
    let r = e.charCodeAt(n);
    s = he(s, r);
  }
  return s;
}
function Bi(s, e) {
  let t = s.getParentId(e);
  if (typeof t == "string") return t;
}
var Et = class {
  constructor(e) {
    this.store = e;
    for (let t = e; t; t = t.base)
      this.cursors.push({
        store: t,
        nextRowIndex: t.branchData.columns.length,
        hierarchyCursor: t.getHierarchy().getInvalidationCursor(),
      });
  }
  store;
  writer = new Bt();
  cache = new Map();
  cursors = [];
  get hierarchy() {
    return this.store.getHierarchy();
  }
  getChecksum(e) {
    for (let t of this.cursors)
      l(!t.store.inBatch, "ChecksumIndex.getChecksum must not be called mid-batch");
    return (this.evictStaleCacheEntries(), this.computeChecksum(e));
  }
  clearCacheEntries() {
    (this.cache.clear(), this.advanceCursors());
  }
  evictStaleCacheEntries() {
    if (this.cache.size === 0) return this.advanceCursors();
    let e = new Set(),
      t = this.store.getHierarchy();
    for (let n of this.cursors) {
      let r = n.store.branchData.columns,
        i = n.store.getHierarchy();
      if (r.length < n.nextRowIndex || i.getInvalidationCursor() < n.hierarchyCursor)
        return this.clearCacheEntries();
      for (let a = n.nextRowIndex; a < r.length; a++) {
        let d = r.id.get(a),
          c = pe(t, d);
        c !== void 0 && e.add(c);
      }
      let o = i.getInvalidatedNodeIdsSince(n.hierarchyCursor);
      if (o === void 0) return this.clearCacheEntries();
      for (let a of o) e.add(a);
    }
    this.advanceCursors();
    for (let n of e) {
      let r = this.cache.get(n);
      r?.parentId !== void 0 && e.add(r.parentId);
      let i = Bi(t, n);
      (i !== void 0 && e.add(i), this.cache.delete(n));
    }
  }
  advanceCursors() {
    for (let e of this.cursors)
      ((e.nextRowIndex = e.store.branchData.columns.length),
        (e.hierarchyCursor = e.store.getHierarchy().getInvalidationCursor()));
  }
  computeChecksum(e) {
    if (!this.hierarchy.getNodeData(e)?.inTree) return;
    let n = this.cache.get(e);
    if (n !== void 0) return n.checksum;
    let r = this.store.getObjectWithShallowChildren(e, 0);
    if (r === void 0) return;
    let i = Bi(this.hierarchy, e),
      o = this.getOwnChecksum(r),
      a = this.combineChecksums(o, this.getChildChecksums(e));
    return (this.cache.set(e, { checksum: a, parentId: i }), a);
  }
  getOwnChecksum(e) {
    return (this.writer.reset(), this.writer.add(e), this.writer.getHash());
  }
  getChildChecksums(e) {
    if (!this.store.latest.has(e, "children")) return;
    let n = this.hierarchy.getChildrenIds(e),
      r = [];
    for (let i of n) {
      let o = this.computeChecksum(i);
      o !== void 0 && r.push(o);
    }
    return r;
  }
  combineChecksums(e, t) {
    return (this.writer.reset(), this.writer.add(e), this.writer.add(t), this.writer.getHash());
  }
};
var _t = class s {
  constructor(e, t, n, r, i) {
    this.source = e;
    this.target = t;
    this.windowStartIdx = n;
    ((this.hierarchy = e.getHierarchy()),
      (this.retainedNodeIds = r),
      (this.tombstoneAnchorNodeIds = i));
  }
  source;
  target;
  windowStartIdx;
  hierarchy;
  parentHistory = [];
  parentOverrides = new Map();
  visited = new Set();
  emittedParentIdRowIndexes = new Set();
  retainedNodeIds;
  tombstoneAnchorNodeIds;
  ownParentTargetIds;
  static run(e, t, n, r = new Set(), i = new Set()) {
    return new s(e, t, n, r, i).run();
  }
  run() {
    (l(
      this.source.branchId === this.target.branchId,
      () =>
        `Cannot compact data from different branches: ${this.source.branchId} != ${this.target.branchId}`
    ),
      this.emitObjectRows(fe));
    let e = this.source.getRoot();
    (l(e, "Store has no root"), this.emitObjectRows(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
    return (
      this.emitOwnDeletedNodes(),
      this.emitOwnRevivedNodes(),
      this.emitRetainedNodes(),
      this.emitRowsWithTombstoneAnchors(),
      this.emitOutOfTreeNodes(),
      this.emitInWindowParentIdRows(),
      this.emitTombstoneAnchors(),
      this.sortParentHistory(),
      (this.target.branchData.hierarchyData = new W(this.parentHistory, this.parentOverrides)),
      this.target.manifest.copyClientStateFrom(this.source.manifest),
      this.target.updateCaches(this.target.branchData.hierarchyData),
      (this.target.branchData.metadata.seq = this.source.branchData.metadata.seq),
      this.target
    );
  }
  sortParentHistory() {
    let e = this.target.branchData.columns;
    this.parentHistory.sort((t, n) => ut(e, t, n));
  }
  depthFirstWalk(e) {
    let t = [e];
    for (; t.length > 0;) {
      let n = Ae(t, t.length - 1);
      (t.pop(), this.emitObjectRows(n), this.emitResolvedParent(n));
      let r = [...this.hierarchy.getChildrenIds(n)];
      for (let i = r.length - 1; i >= 0; i--) t.push(Ae(r, i));
    }
  }
  emitInWindowParentIdRows() {
    let e = this.source,
      t = this.hierarchy;
    for (let n = this.windowStartIdx; n < e.length; n++) {
      if (e.branchData.columns.key.get(n) !== "parentid" || this.emittedParentIdRowIndexes.has(n))
        continue;
      let i = e.branchData.getRow(n),
        o = i.id,
        a = t.getOwnParentRowIdx(o),
        d = this.isDeletedNode(o);
      if (!(d && a !== void 0 && a < this.windowStartIdx)) {
        if (d && a === n) {
          (this.emitObjectRows(o), this.emitResolvedParent(o));
          continue;
        }
        (!this.visited.has(o) && !d && !t.inTree(o)) || this.emitParentIdRow(i, n);
      }
    }
  }
  emitRow(e) {
    return (
      this.target.branchData.manifest.addTimestamp(e.client, e.seq),
      this.target.branchData.addRow(e)
    );
  }
  emitParentIdRow(e, t) {
    (this.source.base &&
      e.id !== G &&
      e.value !== b &&
      !zt(this.source, e.id) &&
      this.retainedNodeIds.add(e.id),
      this.writeParentIdRow(e, t));
  }
  writeParentIdRow(e, t) {
    this.emittedParentIdRowIndexes.add(t);
    let n = this.emitRow(e);
    (this.parentHistory.push(n), this.maybeEmitOverride(e, n));
  }
  emitOwnRevivedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set(),
      n = new Set();
    for (let r of e.parentHistory) {
      let i = this.source.branchData.columns.id.get(r);
      t.has(i) ||
        (t.add(i),
        this.source.base.getParentId(i) === b &&
          e.getOwnParentId(i) !== b &&
          e.inTree(i) &&
          Dn(this.hierarchy, i, this.retainedNodeIds, n));
    }
  }
  emitOwnDeletedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set();
    for (let n of e.parentHistory) {
      let r = this.source.branchData.columns.id.get(n);
      if (t.has(r)) continue;
      t.add(r);
      let i = e.getOwnParentId(r) === b,
        o = !i && zt(this.source, r);
      if (!i && !o) continue;
      let a = this.source.base.getParentId(r) === void 0,
        d = e.getOwnNodeData(r)?.resolvedParentId,
        c = d !== void 0 && d < this.windowStartIdx;
      if (!(o && c)) {
        if (a && c) {
          this.emitResolvedParent(r);
          continue;
        }
        (this.emitObjectRows(r), this.emitResolvedParent(r));
      }
    }
  }
  emitRetainedNodes() {
    for (let e of this.retainedNodeIds)
      this.visited.has(e) || (this.emitObjectRows(e), this.emitResolvedParent(e));
  }
  emitRowsWithTombstoneAnchors() {
    if (!this.source.base) return;
    let e = new Map();
    for (let t of this.source.latest.ownKeys()) {
      if (this.visited.has(t)) continue;
      let n = pe(this.hierarchy, t);
      if (n === void 0 || Ut(this.source, n)) continue;
      let r = e.get(n);
      (e.has(n) ||
        ((r = _i(this.source, n)), e.set(n, r), r !== void 0 && this.tombstoneAnchorNodeIds.add(r)),
        r !== void 0 &&
          (this.emitObjectRows(t),
          t === n && this.hierarchy.getOwnParentId(t) !== b && this.emitResolvedParent(t)));
    }
  }
  emitTombstoneAnchors() {
    let e = [];
    for (let t of this.tombstoneAnchorNodeIds)
      this.hierarchy.getOwnParentId(t) === b && (this.emitResolvedParent(t), e.push(t));
    for (let t of e) this.tombstoneAnchorNodeIds.delete(t);
  }
  emitOutOfTreeNodes() {
    let e = this.hierarchy,
      t = this.source.branchData.columns.id,
      n = new Set();
    for (let r of e.parentHistory) {
      let i = t.get(r);
      if (n.has(i) || (n.add(i), this.visited.has(i)) || Bn(this.source, i) || e.inTree(i))
        continue;
      let o = zi(e, i);
      if (o) {
        for (let a of o)
          (e.getParentId(a) === b && this.tombstoneAnchorNodeIds.add(a),
            !this.visited.has(a) && (this.emitObjectRows(a), this.emitResolvedParent(a)));
        continue;
      }
      this.source.base && (this.emitObjectRows(i), this.emitResolvedParent(i));
    }
  }
  emitObjectRows(e) {
    if (this.visited.has(e)) return;
    this.visited.add(e);
    let t = this.source.latest.getOwnLatest(e),
      n = !1,
      r;
    (t?.forEachOwn((o, a) => {
      let d = this.source.branchData.getRow(a);
      if (this.shouldDropPropertyTombstone(e, o, a, d)) {
        r ??= d;
        return;
      }
      (this.emitRow(d), (n = !0));
    }),
      !n && r && this.emitRow(r));
    let i = this.source.latest.getLatest(e);
    if (i)
      for (let o of i.keys()) {
        let a = this.source.getCurrentValue(e, o);
        (typeof a != "string" && !Array.isArray(a)) || this.followReferences(a);
      }
  }
  shouldDropPropertyTombstone(e, t, n, r) {
    return this.source.base ||
      e === fe ||
      n >= this.windowStartIdx ||
      t === "parentid" ||
      t === R ||
      t === "children"
      ? !1
      : r.value === b;
  }
  emitMergeableArrayRows(e) {
    if (this.visited.has(e)) return;
    (this.visited.add(e),
      this.source.latest.getOwnLatest(e)?.forEachOwn((r, i) => {
        let o = this.source.branchData.getRow(i);
        this.emitRow(o);
      }));
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let r of n.keys())
        r !== R && this.source.getCurrentValue(e, r) !== b && this.emitObjectRows(r);
  }
  followReferences(e) {
    if (K(e)) {
      this.emitObjectRows(_(e));
      return;
    }
    if (j(e)) {
      this.emitMergeableArrayRows(_(e));
      return;
    }
    if (Array.isArray(e)) for (let t of e) this.followReferences(t);
  }
  emitResolvedParent(e) {
    let t = this.hierarchy.getOwnNodeData(e),
      n = t?.resolvedParentId;
    if (!t || n === void 0) return;
    let r = this.source.branchData.getRow(n);
    if (
      (this.emittedParentIdRowIndexes.has(n) || this.emitParentIdRow(r, n),
      n >= this.windowStartIdx && this.emitPreWindowAnchor(r),
      !this.source.base || (r.value === b && !this.isReachableOnBranch(e)))
    )
      return;
    let i = n < this.windowStartIdx && this.isDeletedNode(e);
    for (let o of t.parentIdHistory)
      this.emittedParentIdRowIndexes.has(o) ||
        (o >= this.windowStartIdx && !i) ||
        this.writeParentIdRow(this.source.branchData.getRow(o), o);
  }
  isDeletedNode(e) {
    return this.hierarchy.getParentId(e) === b || zt(this.source, e);
  }
  isReachableOnBranch(e) {
    if (this.source.base?.getParentId(e) !== void 0) return !0;
    if (!this.ownParentTargetIds) {
      this.ownParentTargetIds = new Set();
      let t = this.source.branchData.columns.value;
      for (let n of this.hierarchy.parentHistory) {
        let r = t.get(n);
        ve(r) && H(r) && this.ownParentTargetIds.add(B(r));
      }
    }
    return this.ownParentTargetIds.has(e);
  }
  emitPreWindowAnchor(e) {
    let t = this.source.getHierarchy(),
      n = t.getOwnParentBySeq(e.id, e.seq, !1);
    for (; n && n.index >= this.windowStartIdx;) n = t.getOwnParentBySeq(n.id, n.seq, !1);
    if (!n || this.emittedParentIdRowIndexes.has(n.index)) return;
    let r = this.source.branchData.getRow(n.index);
    this.emitParentIdRow(r, n.index);
  }
  maybeEmitOverride(e, t) {
    let n = this.hierarchy.getParentOverride(e.id, e.seq, e.client);
    if (!n) return;
    let r = { ...n, rowIdx: t };
    this.addParentOverride(e, r);
    let i = this.source.getHierarchy(),
      o = i.getOwnParentBySeq(e.id, e.seq, !1);
    for (; o && B(o.value) !== B(r.parentTo);) o = i.getOwnParentBySeq(o.id, o.seq, !1);
    if (!o || this.emittedParentIdRowIndexes.has(o.index)) return;
    let a = this.source.branchData.getRow(o.index);
    this.emitParentIdRow(a, o.index);
  }
  addParentOverride(e, t) {
    let n = this.parentOverrides.get(e.id);
    n || ((n = new Map()), this.parentOverrides.set(e.id, n));
    let r = n.get(e.seq);
    (r || ((r = new Map()), n.set(e.seq, r)), r.set(e.client, t));
  }
};
function Ei(s, e, t) {
  (ha(s, e), la(s, t));
}
function ha(s, e) {
  let t = s.getHierarchy(),
    n = new Set(),
    r = new Set();
  for (let i of t.parentHistory) {
    let o = s.branchData.columns.id.get(i);
    n.has(o) ||
      (n.add(o),
      !Bn(s, o) && (e.add(o), s.base?.getParentId(o) === b && t.inTree(o) && Dn(t, o, e, r)));
  }
}
function Dn(s, e, t, n) {
  if (!n.has(e)) {
    n.add(e);
    for (let r of s.getChildrenIds(e))
      (s.getOwnParentRowIdx(r) === void 0 && t.add(r), Dn(s, r, t, n));
  }
}
function la(s, e) {
  if (!s.base) return;
  let t = new Set();
  for (let n of s.latest.ownKeys()) {
    let r = pe(s.getHierarchy(), n);
    if (r === void 0 || t.has(r) || (t.add(r), Ut(s, r))) continue;
    let i = _i(s, r);
    i !== void 0 && e.add(i);
  }
  fa(s, e);
}
function fa(s, e) {
  let t = s.getHierarchy(),
    n = new Set();
  for (let r of t.parentHistory) {
    let i = s.branchData.columns.id.get(r);
    if (n.has(i) || (n.add(i), Bn(s, i)) || t.inTree(i)) continue;
    let o = zi(t, i);
    if (o) for (let a of o) t.getParentId(a) === b && e.add(a);
  }
}
function zi(s, e) {
  let t = [e],
    n = new Set([e]),
    r = e;
  for (;;) {
    let i = s.getParentId(r);
    if (i === void 0) return;
    if (i === b) return t;
    if (n.has(i) || s.inTree(i)) return;
    (t.push(i), n.add(i), (r = i));
  }
}
function Ut(s, e) {
  return s.getHierarchy().getOwnParentId(e) === b;
}
function zt(s, e) {
  let t = s.getHierarchy();
  if (t.getOwnParentId(e) !== void 0 || t.getOwnParentRowIdx(e) === void 0) return !1;
  let n = s.base?.getParentId(e);
  return n === void 0 || n === b;
}
function Bn(s, e) {
  return Ut(s, e) || zt(s, e);
}
function _i(s, e) {
  if (!s.base || Ut(s, e)) return;
  if (s.base.getParentId(e) === b) return e;
  let t = new Set([e]),
    n = s.getParentId(e);
  for (; n !== void 0 && n !== b;) {
    if (t.has(n)) return;
    if ((t.add(n), s.getParentId(n) === b)) return n;
    n = s.getParentId(n);
  }
}
var ma = 1e3,
  En = class {
    base;
    constructor(e) {
      e && (this.base = { data: e, overrides: new Set() });
    }
    id = "";
    parentIdHistory = [];
    resolvedParentId = void 0;
    childrenById = void 0;
    cachedChildren = void 0;
    cachedChildrenSorted = !1;
    cachedChildrenLastCounter = 0;
    cachedChildrenCurrentCounter = 0;
    cachedChildrenBaseCounter = 0;
    inTree = !1;
    inMaster = void 0;
    ___class = void 0;
    get __class() {
      return !this.base || this.base.overrides.has("__class")
        ? this.___class
        : this.base.data.__class;
    }
    set __class(e) {
      (this.base?.overrides.add("__class"), (this.___class = e));
    }
    _isMaster = !1;
    get isMaster() {
      return !this.base || this.base.overrides.has("isMaster")
        ? this._isMaster
        : this.base.data.isMaster;
    }
    set isMaster(e) {
      (this.base?.overrides.add("isMaster"), (this._isMaster = e));
    }
    _isFormContainer = !1;
    get isFormContainer() {
      return !this.base || this.base.overrides.has("isFormContainer")
        ? this._isFormContainer
        : this.base.data.isFormContainer;
    }
    set isFormContainer(e) {
      (this.base?.overrides.add("isFormContainer"), (this._isFormContainer = e));
    }
    _dataIdentifier = void 0;
    get dataIdentifier() {
      return !this.base || this.base.overrides.has("dataIdentifier")
        ? this._dataIdentifier
        : this.base.data.dataIdentifier;
    }
    set dataIdentifier(e) {
      (this.base?.overrides.add("dataIdentifier"), (this._dataIdentifier = e));
    }
    _replicaInfoMaster;
    get replicaInfoMaster() {
      return !this.base || this.base.overrides.has("replicaInfoMaster")
        ? this._replicaInfoMaster
        : this.base.data.replicaInfoMaster;
    }
    set replicaInfoMaster(e) {
      (this.base?.overrides.add("replicaInfoMaster"), (this._replicaInfoMaster = e));
    }
    inherit(e) {
      if (this.base) {
        this.base.overrides.delete(e);
        return;
      }
      switch (e) {
        case "__class":
          this.___class = void 0;
          break;
        case "isMaster":
          this._isMaster = !1;
          break;
        case "isFormContainer":
          this._isFormContainer = !1;
          break;
        case "dataIdentifier":
          this._dataIdentifier = void 0;
          break;
        case "replicaInfoMaster":
          this._replicaInfoMaster = void 0;
          break;
      }
    }
  },
  qt = class {
    constructor(e, t, n) {
      this.store = e;
      this.latest = t;
      this.base = n;
      ((this.branchData = e.branchData),
        (this.indexes = e.getIndexes()),
        this.base && (this.rootNodeId = this.base.rootNodeId));
    }
    store;
    latest;
    base;
    rootNodeId = void 0;
    indexes;
    hierarchyChanged = !1;
    hierarchyInvalidationsTrimmed = 0;
    hierarchyInvalidations = [];
    nodeData = new Map();
    parentHistory = [];
    parentHistorySorted = !1;
    parentOverrides = new Map();
    get hasParentOverrides() {
      for (let e of this.parentOverrides.values()) if (e.size > 0) return !0;
      return !1;
    }
    branchData;
    getRootId() {
      return this.rootNodeId;
    }
    cachedInTreeCount = 0;
    get inTreeCount() {
      if (!this.base) return this.cachedInTreeCount;
      let e = this.base?.inTreeCount ?? 0;
      for (let [t, n] of this.nodeData) {
        if (t === this.rootNodeId) continue;
        let r = this.base?.inTree(t) ?? !1;
        e += Number(n.inTree) - Number(r);
      }
      return e;
    }
    sizeWithoutReplicas() {
      return this.inTreeCount + 1;
    }
    getInvalidationCursor() {
      return this.hierarchyInvalidationsTrimmed + this.hierarchyInvalidations.length;
    }
    getInvalidatedNodeIdsSince(e) {
      if (e < this.hierarchyInvalidationsTrimmed) return;
      let t = new Set(),
        n = e - this.hierarchyInvalidationsTrimmed;
      for (let r = n; r < this.hierarchyInvalidations.length; r++) {
        let i = this.hierarchyInvalidations[r];
        if (i) for (let o of i) t.add(o);
      }
      return t;
    }
    recordInvalidation(e) {
      e.size !== 0 && (this.hierarchyInvalidations.push(e), this.trimHierarchyInvalidations());
    }
    trimHierarchyInvalidations() {
      let e = this.hierarchyInvalidations.length - ma;
      e <= 0 ||
        ((this.hierarchyInvalidationsTrimmed += e), this.hierarchyInvalidations.splice(0, e));
    }
    has(e) {
      return !!(e === this.rootNodeId || this.inTree(e) || this.getLatestReplicaChild(e));
    }
    inTree(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.inTree : (this.base?.inTree(e) ?? !1);
    }
    getNodeData(e) {
      let t = this.nodeData.get(e);
      return t || this.base?.getNodeData(e);
    }
    getOwnNodeData(e) {
      return this.nodeData.get(e);
    }
    ensureNodeData(e) {
      let t = this.nodeData.get(e);
      if (!t) {
        let n = this.base?.ensureNodeData(e);
        ((t = new En(n)),
          (t.id = e),
          n && ((t.inTree = n.inTree), (t.inMaster = n.inMaster)),
          this.nodeData.set(e, t));
      }
      return t;
    }
    getLatestReplicaChild(e) {
      if (e.length < 11) return;
      let n = e.slice(0, 9),
        r = this.getNodeData(n);
      if (r && this.inTree(n)) {
        if (!r.replicaInfoMaster) return;
        let i = r.replicaInfoMaster,
          o = e.slice(9),
          a = this.getNodeData(o);
        return !a || !this.inTree(o) || a.inMaster !== i ? void 0 : [n, r, o, a];
      }
      for (let i = 7; i < e.length - 9 + 2; i++)
        if (i !== 9 && ((n = e.slice(0, i)), (r = this.getNodeData(n)), r && this.inTree(n))) {
          if (!r?.replicaInfoMaster) return;
          let o = r.replicaInfoMaster,
            a = e.slice(i),
            d = this.getNodeData(a);
          return !d || !this.inTree(a) || d.inMaster !== o ? void 0 : [n, r, a, d];
        }
    }
    computeTreeHash() {
      let e = 0;
      if (!this.rootNodeId) return e;
      let t = [this.rootNodeId],
        n = new Set();
      for (; t.length > 0;) {
        let r = Ae(t, t.length - 1);
        if ((t.pop(), n.has(r))) continue;
        (n.add(r), (e = Yn(r, e)));
        let i = [...this.getChildrenIds(r)];
        for (let o = i.length - 1; o >= 0; o--) t.push(Ae(i, o));
      }
      return e;
    }
    addChild(e, t, n, r = !1) {
      if (
        ((e.childrenById ??= new Map()),
        e.childrenById.set(t, n),
        !r || !e.cachedChildrenSorted || !e.cachedChildren || this.isChildrenCacheDirty(e.id))
      ) {
        e.cachedChildrenCurrentCounter += 1;
        return;
      }
      e.cachedChildrenCurrentCounter += 1;
      let i = e.cachedChildren,
        o = ee(i, t, (a, d) => {
          let c = this.getHierarchyKey(a);
          l(H(c), () => `invalid key in hierarchy, row ${a}`);
          let u = this.getHierarchyKey(d);
          if ((l(H(u), () => `invalid key in hierarchy, row ${d}`), c < u)) return -1;
          if (c > u) return 1;
          if (this.store.optimizedReading) return a < d ? -1 : a > d ? 1 : 0;
          throw new Error("Hierarchy keys should be unique:" + c);
        });
      (i.splice(o, 0, t), (e.cachedChildrenLastCounter = e.cachedChildrenCurrentCounter));
    }
    removeChild(e, t) {
      let n = this.ensureNodeData(e);
      (n.childrenById?.delete(t), (n.cachedChildrenCurrentCounter += 1));
    }
    updateReachability(e, t, n) {
      (e.inTree === t && e.inMaster === n) ||
        (!this.base &&
          e.id !== this.rootNodeId &&
          e.inTree !== t &&
          (this.cachedInTreeCount += Number(t) - Number(e.inTree)),
        (e.inTree = t),
        (e.inMaster = n));
    }
    markInTree(e, t, n, r = new Set(), i = !1) {
      if (!e.inTree || r.has(n)) return;
      (r.add(n),
        this.updateReachability(t, !0, e.isMaster ? e.id : e.inMaster),
        this.syncAddedNode(n, t, i));
      let o = t.isMaster ? t.id : t.inMaster;
      for (let a of this.getCachedChildrenIds(n)) {
        let d = this.base !== void 0 && !this.nodeData.has(a),
          c = this.ensureNodeData(a);
        !c.inTree || d
          ? this.markInTree(t, c, a, r, i)
          : c.inMaster !== o && (this.updateReachability(c, !0, o), this.applyMasterState(c));
      }
    }
    clearInTree(e, t, n = new Set()) {
      if (!n.has(t)) {
        (n.add(t), e.inTree && this.updateReachability(e, !1, void 0), this.syncRemovedNode(t, e));
        for (let r of this.getCachedChildrenIds(t)) {
          let i = this.ensureNodeData(r);
          this.clearInTree(i, r, n);
        }
      }
    }
    resetInTree(e, t, n = new Set()) {
      if (n.has(t)) return;
      (n.add(t), this.syncRemovedNode(t, e));
      let r = this.getParentId(t);
      if (t === this.rootNodeId) this.updateReachability(e, !0, void 0);
      else if (r !== void 0 && r !== b) {
        let i = this.ensureNodeData(r);
        this.updateReachability(e, i.inTree, i.isMaster ? i.id : i.inMaster);
      } else this.updateReachability(e, !1, void 0);
      e.inTree && this.syncAddedNode(t, e);
      for (let i of this.getCachedChildrenIds(t)) {
        let o = this.ensureNodeData(i),
          a = this.getOwnParentRowIdx(i);
        if (a !== void 0 && this.branchData.columns.value.get(a) !== S) {
          e.inTree ? this.markInTree(e, o, i, n, !0) : this.clearInTree(o, i, n);
          continue;
        }
        e.inTree ? this.resetInTree(o, i, n) : this.clearInTree(o, i, n);
      }
    }
    applyMasterState(e, t = new Set()) {
      if (t.has(e.id)) return;
      t.add(e.id);
      let n = e.isMaster ? e.id : e.inMaster;
      for (let r of this.getCachedChildrenIds(e.id)) {
        let i = this.ensureNodeData(r);
        (this.updateReachability(i, i.inTree, n), this.applyMasterState(i, t));
      }
    }
    syncAddedNode(e, t, n = !1) {
      for (let r of this.indexes) r.syncAddedNode?.(e, t, n);
    }
    syncRemovedNode(e, t) {
      for (let n of this.indexes) n.syncRemovedNode?.(e, t);
    }
    syncChangedField(e, t, n, r, i, o) {
      for (let a of this.indexes) a.syncChangedField?.(e, t, n, r, i, o);
    }
    updateParent(e, t, n, r, i) {
      i && i !== b && this.removeChild(i, t);
      let o = B(n);
      if (o === S) {
        let a = this.base?.getParentId(t);
        if (a !== void 0 && a !== b) {
          let d = this.ensureNodeData(a);
          ((d.cachedChildrenCurrentCounter += 1),
            d.inTree ? this.resetInTree(e, t) : this.clearInTree(e, t));
        } else this.clearInTree(e, t);
      } else if (o !== b) {
        let a = this.ensureNodeData(o);
        (this.addChild(a, t, r, !0),
          a.inTree ? this.markInTree(a, e, t, void 0, !0) : this.clearInTree(e, t));
      } else this.clearInTree(e, t);
    }
    getChildrenCounter(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.cachedChildrenCurrentCounter : (this.base?.getChildrenCounter(e) ?? 0);
    }
    isChildrenCacheDirty(e) {
      let t = this.getOwnNodeData(e);
      if (!t?.cachedChildren || t.cachedChildrenLastCounter !== t.cachedChildrenCurrentCounter)
        return !0;
      if (this.base) {
        let n = this.base.getChildrenCounter(e);
        if (t.cachedChildrenBaseCounter !== n || this.base.isChildrenCacheDirty(e)) return !0;
      }
      return !1;
    }
    getSubtreeCount(e) {
      let t = 1;
      for (let n of this.getCachedChildrenIds(e)) t += this.getSubtreeCount(n);
      return t;
    }
    getCachedChildrenIds(e) {
      let t = this.ensureNodeData(e);
      if (!this.isChildrenCacheDirty(e)) return t.cachedChildren ?? [];
      let n = new Set();
      for (let i of this.base?.getCachedChildrenIds(e) ?? []) e === this.getParentId(i) && n.add(i);
      if (t.childrenById) for (let i of t.childrenById.keys()) n.add(i);
      let r = Array.from(n);
      return (
        (t.cachedChildren = r),
        (t.cachedChildrenSorted = !1),
        t.cachedChildrenLastCounter === t.cachedChildrenCurrentCounter &&
          (t.cachedChildrenCurrentCounter += 1),
        (t.cachedChildrenLastCounter = t.cachedChildrenCurrentCounter),
        (t.cachedChildrenBaseCounter = this.base?.getChildrenCounter(e) ?? 0),
        r
      );
    }
    getChildrenIds(e) {
      let t = this.ensureNodeData(e),
        n = this.getCachedChildrenIds(e);
      return (
        t.cachedChildrenSorted ||
          (n.sort((r, i) => {
            let o = this.getHierarchyKey(r);
            l(H(o), () => `invalid key in hierarchy, row ${r}`);
            let a = this.getHierarchyKey(i);
            if ((l(H(a), () => `invalid key in hierarchy, row ${i}`), o < a)) return -1;
            if (o > a) return 1;
            if (this.store.optimizedReading) return r < i ? -1 : r > i ? 1 : 0;
            throw new Error("Hierarchy keys should be unique:" + o);
          }),
          (t.cachedChildrenSorted = !0)),
        n
      );
    }
    updateLatestValue(e, t, n) {
      let r = this.branchData.columns.value;
      switch (t) {
        case "__class": {
          let i = this.ensureNodeData(e),
            o = i.__class,
            a = r.get(n),
            d = a === S;
          if (d) i.inherit("__class");
          else {
            if (typeof a != "string") return;
            i.__class = a;
          }
          let c = i.__class;
          if (
            c === "RootNode" &&
            ((this.rootNodeId = e), this.updateReachability(i, !0, void 0), i.childrenById)
          )
            for (let u of i.childrenById.keys()) {
              let h = this.getNodeData(u);
              h && this.markInTree(i, h, u);
            }
          (this.syncChangedField(e, "__class", o, c, i, d), i.inTree && this.syncAddedNode(e, i));
          break;
        }
        case "isMaster": {
          let i = r.get(n),
            o = this.ensureNodeData(e),
            a = o.isMaster;
          if (i === S) o.inherit("isMaster");
          else {
            if (typeof i != "boolean") return;
            o.isMaster = i;
          }
          if (a === o.isMaster) return;
          (o.inTree && this.applyMasterState(o), this.broadcastIsMaster(e));
          break;
        }
        case "isFormContainer": {
          let i = r.get(n),
            o = this.ensureNodeData(e),
            a = o.isFormContainer,
            d = i === S;
          d ? o.inherit("isFormContainer") : (o.isFormContainer = i === !0);
          let c = o.isFormContainer;
          if (a === c && !d) return;
          (this.syncChangedField(e, "isFormContainer", a, c, o, d),
            this.broadcastInheritedFieldChange(e, "isFormContainer", a, c));
          break;
        }
        case "replicaInfo": {
          let i = r.get(n);
          if (i === S) {
            let o = this.ensureNodeData(e),
              a = o.replicaInfoMaster;
            (o.inherit("replicaInfoMaster"),
              this.syncChangedField(e, "replicaInfoMaster", a, o.replicaInfoMaster, o, !0));
          } else if (typeof i != "string" || i.length === 0) {
            let o = this.ensureNodeData(e);
            if (o.replicaInfoMaster) {
              let a = o.replicaInfoMaster;
              ((o.replicaInfoMaster = void 0),
                this.syncChangedField(e, "replicaInfoMaster", a, o.replicaInfoMaster, o, !1));
            }
          }
          break;
        }
        case "master": {
          let i = r.get(n),
            a = e.length - "replicaInfo".length;
          if (e.substring(a) !== "replicaInfo") return;
          e = e.substring(0, a - 1);
          let d = this.ensureNodeData(e),
            c = d.replicaInfoMaster;
          if (i === S) {
            (d.inherit("replicaInfoMaster"),
              this.syncChangedField(e, "replicaInfoMaster", c, d.replicaInfoMaster, d, !0));
            return;
          }
          d.replicaInfoMaster = typeof i == "string" && i.length > 0 ? i : void 0;
          let u = d.replicaInfoMaster;
          if (u === c) return;
          this.syncChangedField(e, "replicaInfoMaster", c, u, d, !1);
          break;
        }
        case "dataIdentifier": {
          let i = r.get(n),
            o = this.ensureNodeData(e),
            a = o.dataIdentifier,
            d = i === S;
          d ? o.inherit("dataIdentifier") : (o.dataIdentifier = typeof i == "string" ? i : void 0);
          let c = o.dataIdentifier;
          if (a === c && !d) return;
          (this.syncChangedField(e, "dataIdentifier", a, c, o, d),
            this.broadcastInheritedFieldChange(e, "dataIdentifier", a, c));
          break;
        }
      }
    }
    rehydrate(e, t = !1) {
      if (t) {
        (this.rehydrateMinimal(e),
          (this.parentHistorySorted = !1),
          (this.hierarchyChanged = this.parentHistory.length > 0));
        return;
      }
      ((this.parentHistory = e.parentHistory),
        (this.parentHistorySorted = !1),
        (this.parentOverrides = e.parentOverrides));
      let n = new Map();
      for (let [r, i] of this.parentOverrides)
        for (let [o, a] of i) for (let [d, c] of a) n.set(c.rowIdx, c);
      this.replayParentHistory(n);
    }
    rehydrateMinimal(e) {
      ((this.parentHistory = e.parentHistory), (this.parentOverrides = e.parentOverrides));
      let t = new Map();
      for (let i of this.parentOverrides.values())
        for (let o of i.values()) for (let a of o.values()) t.set(a.rowIdx, a);
      let n = this.branchData.columns;
      for (let i of this.parentHistory) {
        let o = this.ensureNodeData(n.id.get(i)),
          a = o.resolvedParentId;
        ((a === void 0 || le(n.seq.get(i), n.client.get(i), n.seq.get(a), n.client.get(a))) &&
          (o.resolvedParentId = i),
          this.insertParentIdHistory(o, i));
      }
      for (let [i, o] of this.nodeData) {
        let a = o.resolvedParentId;
        if (a === void 0) continue;
        let d = t.get(a)?.parentTo ?? n.value.get(a),
          c = B(d);
        if (c === b || c === S) continue;
        let u = this.ensureNodeData(c);
        ((u.childrenById ??= new Map()),
          u.childrenById.set(i, a),
          (u.cachedChildrenCurrentCounter += 1));
      }
      if (this.rootNodeId === void 0) return;
      let r = this.ensureNodeData(this.rootNodeId);
      this.updateReachability(r, !0, void 0);
      for (let i of this.getCachedChildrenIds(this.rootNodeId))
        this.markInTree(r, this.ensureNodeData(i), i);
    }
    broadcastParentId(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy(),
          r = n.ensureNodeData(e),
          i = n.getParentId(e);
        if (i && i !== b) {
          let o = n.ensureNodeData(i);
          if (o.inTree) {
            (n.markInTree(o, r, e), n.broadcastParentId(e));
            continue;
          }
        }
        (n.clearInTree(r, e), n.broadcastParentId(e));
      }
    }
    broadcastIsMaster(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy();
        if (n.store.hasOwnOverridingRow(e, "isMaster")) continue;
        let r = n.ensureNodeData(e);
        (r.inTree && n.applyMasterState(r), n.broadcastIsMaster(e));
      }
    }
    broadcastInheritedFieldChange(e, t, n, r) {
      for (let i of this.store.branches) {
        let o = i.getHierarchy();
        o.store.hasOwnOverridingRow(e, t) ||
          (o.applyInheritedFieldChange(e, t, n, r), o.broadcastInheritedFieldChange(e, t, n, r));
      }
    }
    applyInheritedFieldChange(e, t, n, r) {
      let i = this.getNodeData(e);
      i && this.syncChangedField(e, t, n, r, i, !0);
    }
    updateParentId(e, t) {
      ((this.hierarchyChanged = !0),
        this.applyParentIdRow(e, t),
        this.insertParentHistory(t),
        this.broadcastParentId(e));
    }
    insertParentHistory(e) {
      let t = this.parentHistory,
        n = this.branchData.columns,
        r = t[t.length - 1];
      if (!this.parentHistorySorted || r === void 0 || !X(n, r, e)) {
        t.push(e);
        return;
      }
      let i = ee(t, e, (o, a) => (X(n, o, a) ? 1 : -1));
      t.splice(i, 0, e);
    }
    insertParentIdHistory(e, t) {
      let n = e.parentIdHistory,
        r = this.branchData.columns,
        i = n[n.length - 1];
      if (i === void 0 || !X(r, i, t)) {
        n.push(t);
        return;
      }
      let o = ee(n, t, (a, d) => (X(r, a, d) ? 1 : -1));
      n.splice(o, 0, t);
    }
    replayParentHistory(e) {
      if (this.parentHistory.length === 0) return;
      this.hierarchyChanged = !0;
      let t = this.branchData.columns.id;
      for (let n of this.parentHistory) {
        let r = t.get(n);
        this.applyParentIdRow(r, n, e.get(n));
      }
    }
    getParentOverride(e, t, n) {
      return this.parentOverrides.get(e)?.get(t)?.get(n);
    }
    applyParentIdRow(e, t, n) {
      let r = this.ensureNodeData(e),
        i = this.getParentId(e),
        o = r.resolvedParentId,
        a = this.branchData.columns,
        d = a.seq.get(t),
        c = a.client.get(t);
      if (o === void 0 || le(d, c, a.seq.get(o), a.client.get(o))) {
        let h = n?.parentTo ?? a.value.get(t);
        ((r.resolvedParentId = t), this.updateParent(r, e, h, t, i));
      }
      this.insertParentIdHistory(r, t);
    }
    getParentRowIdx(e) {
      let t = this.getOwnParentRowIdx(e);
      return t !== void 0 && this.branchData.columns.value.get(t) !== S
        ? t
        : this.base?.getParentRowIdx(e);
    }
    getOwnParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId;
    }
    getParentIdSeq(e) {
      let t = this.getOwnParentRowIdx(e);
      return t !== void 0 ? this.branchData.columns.seq.get(t) : this.base?.getParentIdSeq(e);
    }
    getOwnHierarchyKey(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      if (t === void 0) return;
      let n = this.getResolvedParentRowValue(e, t);
      return n === S ? void 0 : n;
    }
    getResolvedParentRowValue(e, t) {
      let n = this.branchData.columns;
      return this.getParentOverride(e, n.seq.get(t), n.client.get(t))?.parentTo ?? n.value.get(t);
    }
    getHierarchyKey(e) {
      let t = this.getOwnHierarchyKey(e);
      return t === void 0 ? this.base?.getHierarchyKey(e) : t;
    }
    getChildIndex(e, t) {
      let n = this.getHierarchyKey(t);
      if (typeof n != "string") return -1;
      let r = ee(e, n, (i, o) => {
        let a = this.getHierarchyKey(i);
        return a < o ? -1 : a > o ? 1 : 0;
      });
      return e[r] === t ? r : -1;
    }
    getPositionIndex(e, t) {
      let n = this.getChildrenIds(e);
      return ee(n, t, (r, i) => {
        let o = this.getHierarchyKey(r);
        return (l(H(o), () => `invalid key in hierarchy, row ${r}`), o < i ? -1 : o > i ? 1 : 0);
      });
    }
    getChildPosition(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return Q(t);
    }
    getParentId(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return t === b ? b : B(t);
    }
    getOwnParentId(e) {
      let t = this.getOwnHierarchyKey(e);
      if (t !== void 0) return t === b ? b : B(t);
    }
    getOwnParentBySeq(e, t, n) {
      let r = this.getOwnNodeData(e);
      if (!r) return;
      let i = r.parentIdHistory;
      if (i.length === 0) return;
      let o = this.branchData.columns,
        a = ee(i, t, (u, h) => {
          let f = o.seq.get(u);
          return n ? (f <= h ? -1 : 1) : f < h ? -1 : 1;
        });
      if (a === 0) return;
      let d = i[a - 1],
        c = o.id.get(d);
      return {
        id: c,
        seq: o.seq.get(d),
        client: o.client.get(d),
        key: "parentid",
        value: this.getResolvedParentRowValue(c, d),
        index: d,
      };
    }
    getLastParentId(e) {
      let t = this.getOwnNodeData(e)?.parentIdHistory ?? [];
      for (let n = t.length - 1; n >= 0; n--) {
        let r = this.getResolvedParentRowValue(e, t[n]);
        if (r !== b) {
          if (r === S) break;
          return B(r);
        }
      }
      return this.base?.getLastParentId(e);
    }
    getParentBySeq(e, t) {
      let n = this.getOwnParentBySeq(e, t, !0);
      if (n && n.value !== S) return n;
      if (!n && this.getOwnNodeData(e)?.parentIdHistory?.length) return;
      let r = this.base,
        i;
      for (; !i && r;) {
        let o = r.getOwnParentBySeq(e, r.store.seq, !0);
        (o?.value !== S && (i = o), (r = r.base));
      }
      return i;
    }
    findAncestorIdsBefore(e, t, n) {
      let r = new Set();
      for (;;) {
        if (e === t) return r;
        if (e === void 0 || e === b || e === S || r.has(e) || (r.add(e), !this.getNodeData(e)))
          return;
        let i = this.getParentBySeq(e, n);
        if (!i) return;
        e = B(i.value);
      }
    }
    clearParentOverrides(e, t) {
      let n = [],
        r = [],
        i = new Set();
      for (let [o, a] of this.parentOverrides)
        if (!(t && !t.has(o))) {
          for (let [d, c] of a)
            if (!(d < e)) {
              a.delete(d);
              for (let [u, h] of c) {
                let f = h.rowIdx,
                  m = this.getNodeData(o);
                if (!m || !(m.resolvedParentId === f)) continue;
                (n.push(h), i.add(h.nodeId));
                let p = B(h.parentTo);
                (l(p !== S, "override parent cannot be inherited"),
                  p !== b && (this.removeChild(p, o), i.add(p)));
                let g = h.parentFrom === S ? (this.getParentBySeq(o, d)?.value ?? S) : h.parentFrom,
                  I = B(g);
                if (I !== b && I !== S) {
                  let w = this.ensureNodeData(I);
                  if (H(h.parentFrom)) {
                    if (this.base && w.childrenById)
                      for (let x of w.childrenById.values()) {
                        let C = this.branchData.columns.id.get(x);
                        if (this.getHierarchyKey(C) === h.parentFrom) {
                          let D = {
                            ...h,
                            parentTo: this.createOverrideHierarchyKey(h.parentFrom, o),
                          };
                          r.push(D);
                        }
                      }
                    (this.addChild(w, o, f, !1),
                      w.inTree ? this.markInTree(w, m, o) : this.clearInTree(m, o));
                  } else
                    ((w.cachedChildrenCurrentCounter += 1),
                      w.inTree ? this.resetInTree(m, o) : this.clearInTree(m, o));
                  i.add(I);
                } else this.clearInTree(m, o);
                this.broadcastParentId(o);
              }
            }
        }
      this.recordInvalidation(i);
      for (let o of r) this.setParentOverride(o);
      return n;
    }
    setParentOverride(e) {
      let t = this.branchData.columns,
        n = e.rowIdx,
        r = t.client.get(n),
        i = t.seq.get(n),
        o = e.nodeId,
        a = this.parentOverrides.get(o);
      a || ((a = new Map()), this.parentOverrides.set(o, a));
      let d = a.get(i);
      (d || ((d = new Map()), a.set(i, d)), d.set(r, e));
    }
    createOverrideHierarchyKey(e, t) {
      let n = Q(e),
        r = B(e),
        i = De(n),
        o = i[i.length - 1];
      function a(u) {
        if (u.length !== i.length) return !1;
        for (let h = 0; h < i.length - 1; h++) {
          let f = i[h],
            m = u[h];
          if (f.position !== m.position || f.client !== m.client) return !1;
        }
        return !0;
      }
      let d = new Set();
      for (let u of this.getCachedChildrenIds(r)) {
        if (u === t) continue;
        let h = this.getHierarchyKey(u);
        l(typeof h == "string", "sibling must be a valid, non-deleted, hierarchy key");
        let f = De(Q(h));
        if (!a(f)) continue;
        let m = f[f.length - 1];
        m.position === o.position && d.add(m.client);
      }
      let c = hr.find((u) => !d.has(u));
      return (
        l(c !== void 0, () => `override clients exhausted for node ${t}`),
        (o.client = c),
        Ce(r, be(i))
      );
    }
    getRevokedOwnPositions(e) {
      let t = [];
      for (let [n, r] of this.parentOverrides) {
        let i = this.getOwnNodeData(n)?.resolvedParentId;
        for (let o of r.values())
          for (let a of o.values())
            a.rowIdx === i && H(a.parentFrom) && B(a.parentFrom) === e && t.push(Q(a.parentFrom));
      }
      return t;
    }
    postProcess(e) {
      if (this.hierarchyChanged) return ((this.hierarchyChanged = !1), this.resolveCycles(e));
    }
    resolveCycles(e) {
      if (this.base)
        for (let o of this.parentOverrides.values()) for (let a of o.keys()) a < e && (e = a);
      let t = this.clearParentOverrides(e),
        n = [],
        r = this.branchData.columns;
      this.parentHistorySorted ||
        (this.parentHistory.sort((o, a) => ut(r, o, a)), (this.parentHistorySorted = !0));
      let i = ee(this.parentHistory, e, (o, a) => r.seq.get(o) - a);
      for (let o = i; o < this.parentHistory.length; o++)
        this.resolveCycleForRow(this.parentHistory[o], n);
      return { prevOverrides: t, nextOverrides: n };
    }
    resolveCycleForRow(e, t) {
      let n = this.branchData.columns,
        r = n.id.get(e),
        i = n.seq.get(e),
        o = n.value.get(e);
      l(o, () => `parentid without a value, index: ${e}`);
      let a = o === S ? this.getParentBySeq(r, i) : void 0,
        d = a ? B(a.value) : B(o),
        c = this.findAncestorIdsBefore(d, r, i);
      if (c) {
        let u = this.getNodeData(r);
        l(u, () => `node not in tree, id: ${r}`);
        let h = this.getOwnParentBySeq(r, i, !1),
          f;
        (h && h.value !== S && !this.findAncestorIdsBefore(B(h.value), r, i) && (f = h),
          l(f?.value !== S, "previous parent cannot be inherited"));
        let y = u.resolvedParentId === e,
          p = y ? this.getParentId(r) : void 0,
          g = {
            nodeId: r,
            parentFrom: o,
            parentTo: f && f.value !== b ? this.createOverrideHierarchyKey(f.value, r) : b,
            rowIdx: e,
          };
        if ((this.setParentOverride(g), y))
          if (
            (l(p && p !== b, () => `unable to resolve parent of ${r}`),
            this.removeChild(p, r),
            f && f.value !== b)
          ) {
            let I = B(f.value),
              w = this.ensureNodeData(I);
            (this.addChild(w, r, f.index),
              w.inTree ? this.markInTree(w, u, r) : this.clearInTree(u, r));
          } else this.clearInTree(u, r);
        (t.push(g), this.broadcastParentId(r), c.add(r), this.recordInvalidation(c));
      }
    }
  };
var zn = class {
    map = new Map();
    update = 0;
    cache = void 0;
    keys() {
      return this.map.keys();
    }
    values() {
      return this.map.values();
    }
    entries() {
      return this.map.entries();
    }
    has(e) {
      return this.map.has(e);
    }
    ownHas(e) {
      return this.map.has(e);
    }
    get(e) {
      return this.map.get(e);
    }
    ownGet(e) {
      return this.map.get(e);
    }
    set(e, t) {
      (this.map.set(e, t), this.updated());
    }
    forEachOwn(e) {
      this.map.forEach((t, n) => e(n, t));
    }
    updated() {
      this.update++;
    }
    materialized() {
      return this.map.size > 0;
    }
  },
  Pt = class {
    map = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.map.get(e);
      return (t || ((t = new zn()), this.map.set(e, t)), t);
    }
    *keys() {
      for (let [e, t] of this.map) t.materialized() && (yield e);
    }
    ownKeys() {
      return this.keys();
    }
    *values() {
      for (let e of this.map.values()) e.materialized() && (yield e);
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      let t = this.map.get(e);
      if (t?.materialized()) return t;
    }
    getOwnLatest(e) {
      return this.getLatest(e);
    }
    get(e, t) {
      return this.map.get(e)?.get(t);
    }
    getOwn(e, t) {
      return this.get(e, t);
    }
    clear() {
      this.map.clear();
    }
    has(e, t) {
      return !!this.map.get(e)?.has(t);
    }
  },
  _n = class {
    constructor(e) {
      this.base = e;
    }
    base;
    ownMap;
    ownUpdate = 0;
    cache = void 0;
    get update() {
      return this.ownUpdate + this.base.update;
    }
    *keys() {
      let e = new Set();
      if (this.ownMap) for (let t of this.ownMap.keys()) (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield t);
      }
    }
    *entries() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield [e, t]);
      }
    }
    has(e) {
      return !!this.ownMap?.has(e) || this.base.has(e);
    }
    ownHas(e) {
      return !!this.ownMap?.has(e);
    }
    get(e) {
      return this.ownMap?.get(e) ?? this.base.get(e);
    }
    ownGet(e) {
      return this.ownMap?.get(e);
    }
    set(e, t) {
      (this.ownMap || (this.ownMap = new Map()), this.ownMap.set(e, t), this.updated());
    }
    forEachOwn(e) {
      this.ownMap?.forEach((t, n) => e(n, t));
    }
    updated() {
      this.ownUpdate++;
    }
    materialized() {
      return !!this.ownMap;
    }
  },
  Lt = class {
    constructor(e) {
      this.base = e;
    }
    base;
    ownMap = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.ownMap.get(e);
      return (t || ((t = new _n(this.base.getLatestOrCreateGhost(e))), this.ownMap.set(e, t)), t);
    }
    *keys() {
      let e = new Set();
      for (let t of this.ownKeys()) (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *ownKeys() {
      for (let [e, t] of this.ownMap) t.materialized() && (yield e);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.getLatest(e);
        t && (yield t);
      }
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      return this.getOwnLatest(e) ?? this.base.getLatest(e);
    }
    getOwnLatest(e) {
      let t = this.ownMap.get(e);
      if (t?.materialized()) return t;
    }
    get(e, t) {
      let n = this.ownMap.get(e);
      return n ? n.get(t) : this.base.get(e, t);
    }
    getOwn(e, t) {
      return this.ownMap.get(e)?.ownGet(t);
    }
    clear() {
      this.ownMap.clear();
    }
    has(e, t) {
      return !!this.ownMap.get(e)?.has(t) || this.base.has(e, t);
    }
  };
var st = -1;
function Ue(s, e) {
  let t = s.length;
  for (; t < e;) t <<= 1;
  let n = new Uint32Array(t);
  return (n.set(s), n);
}
var ot = class s {
    constructor(e) {
      this.columns = e;
      let t = e.id,
        n = e.key;
      (l(
        t instanceof A && n instanceof A,
        "SlabLatestMap requires dictionary-encoded id and key columns"
      ),
        (this.idCol = t),
        (this.keyCol = n));
    }
    columns;
    static WIDE_NODE_THRESHOLD = 64;
    idCol;
    keyCol;
    off = new Uint32Array(256);
    len = new Uint32Array(256);
    cap = new Uint32Array(256);
    upd = new Uint32Array(256);
    maxNode = -1;
    keyIndex = [];
    arena = new Uint32Array(1024);
    top = 0;
    abandoned = 0;
    views = [];
    ghosts = new Map();
    build() {
      (this.idCol.rehydrate(), this.keyCol.rehydrate());
      let e = this.columns,
        t = this.idCol.rowCodes(),
        n = this.keyCol.rowCodes(),
        r = this.idCol.uniques.indexOf(G),
        i = this.keyCol.uniques.indexOf("parentid"),
        o = Math.max(256, this.idCol.uniques.length);
      ((this.off = new Uint32Array(o)),
        (this.len = new Uint32Array(o)),
        (this.cap = new Uint32Array(o)),
        (this.keyIndex.length = 0),
        this.upd.length < o && (this.upd = Ue(this.upd, o)));
      for (let d = 0; d < e.length; d++) {
        let c = t[d],
          u = n[d];
        c === r || u === i || this.cap[c]++;
      }
      let a = 0;
      for (let d = 0; d < this.idCol.uniques.length; d++)
        ((this.off[d] = a * 2), (a += this.cap[d]));
      ((this.arena = new Uint32Array(Math.max(1024, a * 2))),
        (this.top = a * 2),
        (this.abandoned = 0),
        (this.maxNode = this.idCol.uniques.length - 1),
        this.indexLatestRows(r, i));
    }
    indexLatestRows(e, t) {
      let n = this.columns,
        r = this.idCol.rowCodes(),
        i = this.keyCol.rowCodes(),
        o = new Uint32Array(this.keyCol.uniques.length),
        a = -1,
        d = !1;
      for (let c = n.length - 1; c >= 0; c--) {
        let u = r[c];
        if (u === e) continue;
        let h = i[c];
        if (h === t) continue;
        if ((u !== a && ((d = this.len[u] === 0), (a = u)), d)) {
          let m = o[h],
            y = this.arena[m];
          if (m !== 0 && r[y] === u) {
            X(n, c, y) && ((this.arena[m] = c), this.upd[u]++);
            continue;
          }
          let p = this.len[u],
            g = this.off[u] + (p << 1);
          ((this.arena[g] = h),
            (this.arena[g + 1] = c),
            (o[h] = g + 1),
            (this.len[u] = p + 1),
            this.upd[u]++);
          continue;
        }
        let f = this.getAt(u, h);
        (f === st || X(n, c, f)) && this.setAt(u, h, c);
      }
    }
    replayLatestValues(e, t) {
      let n = new Int32Array(this.keyCol.uniques.length).fill(-1),
        r = 0;
      for (let u of e) {
        let h = this.keyCol.codeOf(u);
        h !== void 0 && (n[h] = r++);
      }
      if (r === 0) return;
      let i = this.columns,
        o = this.idCol.rowCodes(),
        a = this.keyCol.rowCodes(),
        d = this.idCol.codeOf(G) ?? -1,
        c = new Uint32Array(this.idCol.uniques.length * r);
      for (let u = i.length - 1; u >= 0; u--) {
        let h = a[u],
          f = n[h];
        if (f < 0) continue;
        let m = o[u];
        if (m === d) continue;
        let y = m * r + f,
          p = c[y];
        (p === 0 || X(i, u, p - 1)) &&
          ((c[y] = u + 1), t(this.idCol.uniques[m], this.keyCol.uniques[h], u));
      }
    }
    get(e, t) {
      let n = this.idCol.codeOf(e);
      if (n !== void 0) return this.rowFor(n, t);
    }
    has(e, t) {
      return this.get(e, t) !== void 0;
    }
    getOwn(e, t) {
      return this.get(e, t);
    }
    set(e, t, n) {
      let r = this.idCol.codeOf(e);
      l(r !== void 0, () => `latest set for id missing from columns: ${e}`);
      let i = this.keyCol.codeOf(t);
      (l(i !== void 0, () => `latest set for key missing from columns: ${t}`), this.setAt(r, i, n));
    }
    viewFor(e, t) {
      let n = this.views[e];
      if (!n) {
        let r = this.ghosts.get(t);
        (r ? (this.ghosts.delete(t), (r.node = e), (n = r)) : (n = new Ht(this, e, t)),
          e >= this.views.length && (this.views.length = e + 1),
          (this.views[e] = n));
      }
      return n;
    }
    getLatestOrCreateGhost(e) {
      let t = this.idCol.codeOf(e);
      if (t !== void 0) return this.viewFor(t, e);
      let n = this.ghosts.get(e);
      return (n || ((n = new Ht(this, -1, e)), this.ghosts.set(e, n)), n);
    }
    getLatest(e) {
      let t = this.idCol.codeOf(e);
      if (!(t === void 0 || this.countAt(t) === 0)) return this.viewFor(t, e);
    }
    getOwnLatest(e) {
      return this.getLatest(e);
    }
    *keys() {
      for (let e = 0; e <= this.maxNode; e++) this.len[e] > 0 && (yield this.idCol.uniques[e]);
    }
    ownKeys() {
      return this.keys();
    }
    *values() {
      for (let e = 0; e <= this.maxNode; e++)
        this.len[e] > 0 && (yield this.views[e] ?? this.viewFor(e, this.idCol.uniques[e]));
    }
    clear() {
      (this.len.fill(0),
        this.cap.fill(0),
        (this.maxNode = -1),
        (this.top = 0),
        (this.abandoned = 0),
        (this.views.length = 0),
        (this.keyIndex.length = 0),
        this.ghosts.clear());
    }
    getAt(e, t) {
      if (e > this.maxNode) return st;
      let n = this.arena,
        r = this.off[e],
        i = this.len[e];
      if (i >= s.WIDE_NODE_THRESHOLD) {
        let d = (this.keyIndex[e] ?? this.buildKeyIndex(e)).get(t);
        return d === void 0 ? st : n[r + (d << 1) + 1];
      }
      let o = r + (i << 1);
      for (let a = r; a < o; a += 2) if (n[a] === t) return n[a + 1];
      return st;
    }
    setAt(e, t, n) {
      (l(n >>> 0 === n, "RowIndex must be a u32"), this.ensureNode(e));
      let r = this.arena,
        i = this.off[e],
        o = this.len[e],
        a = this.keyIndex[e];
      if (a) {
        let c = a.get(t);
        if (c !== void 0) {
          ((r[i + (c << 1) + 1] = n), this.upd[e]++);
          return;
        }
      } else {
        let c = i + (o << 1);
        for (let u = i; u < c; u += 2)
          if (r[u] === t) {
            ((r[u + 1] = n), this.upd[e]++);
            return;
          }
      }
      o === this.cap[e] && this.growSlab(e);
      let d = this.off[e] + (o << 1);
      ((this.arena[d] = t),
        (this.arena[d + 1] = n),
        (this.len[e] = o + 1),
        a ? a.set(t, o) : o + 1 >= s.WIDE_NODE_THRESHOLD && this.buildKeyIndex(e),
        this.upd[e]++);
    }
    buildKeyIndex(e) {
      let t = new Map(),
        n = this.off[e],
        r = this.len[e];
      for (let i = 0; i < r; i++) t.set(this.arena[n + (i << 1)], i);
      return ((this.keyIndex[e] = t), t);
    }
    ensureNode(e) {
      if (e >= this.off.length) {
        let t = e + 1;
        ((this.off = Ue(this.off, t)),
          (this.len = Ue(this.len, t)),
          (this.cap = Ue(this.cap, t)),
          (this.upd = Ue(this.upd, t)));
      }
      e > this.maxNode && (this.maxNode = e);
    }
    growSlab(e) {
      let t = this.len[e],
        n = this.cap[e],
        r = n === 0 ? 4 : n << 1,
        i = r << 1;
      this.top + i > this.arena.length &&
        (this.abandoned > this.top >>> 1 && this.compact(),
        this.top + i > this.arena.length && (this.arena = Ue(this.arena, this.top + i)));
      let o = this.off[e],
        a = this.top;
      ((this.top += i),
        t > 0 && this.arena.copyWithin(a, o, o + (t << 1)),
        (this.off[e] = a),
        (this.cap[e] = r),
        (this.abandoned += n << 1));
    }
    compact() {
      let e = new Uint32Array(this.arena.length),
        t = 0;
      for (let n = 0; n <= this.maxNode; n++) {
        let r = this.cap[n];
        if (r === 0) continue;
        let i = this.off[n];
        (e.set(this.arena.subarray(i, i + (this.len[n] << 1)), t),
          (this.off[n] = t),
          (t += r << 1));
      }
      ((this.arena = e), (this.top = t), (this.abandoned = 0));
    }
    nodeOf(e) {
      return this.idCol.codeOf(e) ?? -1;
    }
    rowFor(e, t) {
      if (e < 0) return;
      let n = this.keyCol.codeOf(t);
      if (n === void 0) return;
      let r = this.getAt(e, n);
      return r === st ? void 0 : r;
    }
    countAt(e) {
      return e < 0 || e > this.maxNode ? 0 : this.len[e];
    }
    updateAt(e) {
      return e < 0 || e > this.maxNode ? 0 : this.upd[e];
    }
    bumpAt(e) {
      e < 0 || (this.ensureNode(e), this.upd[e]++);
    }
    *entriesAt(e) {
      let t = this.countAt(e);
      for (let n = 0; n < t; n++) {
        let r = this.off[e] + (n << 1);
        yield [this.keyCol.uniques[this.arena[r]], this.arena[r + 1]];
      }
    }
    forEachAt(e, t) {
      if (e < 0 || e > this.maxNode) return;
      let n = this.arena,
        r = this.keyCol.uniques,
        i = this.off[e] + (this.len[e] << 1);
      for (let o = this.off[e]; o < i; o += 2) t(r[n[o]], n[o + 1]);
    }
  },
  Ht = class {
    constructor(e, t, n) {
      this.owner = e;
      this.node = t;
      this.id = n;
    }
    owner;
    node;
    id;
    cache = void 0;
    resolve() {
      return this.node >= 0 ? this.node : (this.node = this.owner.nodeOf(this.id));
    }
    get update() {
      return this.owner.updateAt(this.resolve());
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    entries() {
      return this.owner.entriesAt(this.resolve());
    }
    forEachOwn(e) {
      this.owner.forEachAt(this.resolve(), e);
    }
    has(e) {
      return this.get(e) !== void 0;
    }
    ownHas(e) {
      return this.has(e);
    }
    get(e) {
      return this.owner.rowFor(this.resolve(), e);
    }
    ownGet(e) {
      return this.get(e);
    }
    set(e, t) {
      this.owner.set(this.id, e, t);
    }
    updated() {
      this.owner.bumpAt(this.resolve());
    }
    materialized() {
      return this.owner.countAt(this.resolve()) > 0;
    }
  };
var Vt = class {
  constructor(e, t, n, r) {
    this.latest = e;
    this.getCurrentValue = t;
    this.base = n;
    this.getOwnValueAtRow = r;
  }
  latest;
  getCurrentValue;
  base;
  getOwnValueAtRow;
  arrays = new Map();
  getState(e) {
    let t = this.arrays.get(e);
    return (
      t ||
        ((t = { array: [], lastCounter: -1, currentCounter: 0, baseCounter: 0 }),
        this.arrays.set(e, t)),
      t
    );
  }
  getCounter(e) {
    return this.getState(e).currentCounter;
  }
  isDirty(e) {
    let t = this.getState(e);
    return this.base
      ? t.lastCounter !== t.currentCounter ||
          t.baseCounter !== this.base.getCounter(e) ||
          this.base.isDirty(e)
      : t.lastCounter !== t.currentCounter;
  }
  isMergeableArray(e, t, n) {
    if (n.length === 0) return !1;
    if (n.length === 1) return n[0] === R;
    for (let r of n) {
      let i = this.base || r === "parentid" ? void 0 : t?.ownGet(r),
        o = i === void 0 ? S : this.getOwnValueAtRow(i),
        a = o === S ? this.getCurrentValue(e, r) : o;
      if (a !== void 0 && a !== b && a !== L) return ce(a);
    }
    return !0;
  }
  getItemIds(e) {
    let t = this.getState(e);
    if (this.isDirty(e)) {
      let n = new Map();
      for (let i of this.base?.getItemIds(e) ?? []) {
        let o = this.getCurrentValue(e, i);
        ce(o) && n.set(i, o);
      }
      let r = this.latest.getOwnLatest(e);
      (r &&
        r.forEachOwn((i, o) => {
          if (i === R) return;
          let a = this.getOwnValueAtRow(o);
          if (a !== S) {
            if (a === b || !ce(a)) {
              n.delete(i);
              return;
            }
            n.set(i, a);
          }
        }),
        (t.array = Array.from(n.keys()).sort((i, o) => {
          let a = n.get(i),
            d = n.get(o);
          return a < d ? -1 : a > d ? 1 : 0;
        })),
        (t.baseCounter = this.base?.getCounter(e) ?? 0),
        (t.lastCounter = t.currentCounter));
    }
    return t.array;
  }
  invalidate(e) {
    let t = this.arrays.get(e);
    t && (t.currentCounter += 1);
  }
  clear() {
    this.arrays.clear();
  }
};
function Ui(s, e) {
  s !== "relaxed" &&
    l(
      e.every((t) => typeof t != "object" || t === null),
      () => `Atomic arrays must only contain primitives: ${JSON.stringify(e)}`
    );
}
function qi(s, e) {
  let t = s.length,
    n = e.length,
    r = Array.from({ length: t + 1 }, () => new Array(n + 1).fill(0));
  for (let d = t - 1; d >= 0; --d)
    for (let c = n - 1; c >= 0; --c)
      s[d] === e[c]
        ? (r[d][c] = r[d + 1][c + 1] + 1)
        : (r[d][c] = Math.max(r[d + 1][c], r[d][c + 1]));
  let i = [],
    o = 0,
    a = 0;
  for (; o < t && a < n;)
    s[o] === e[a]
      ? ((o += 1), (a += 1))
      : r[o + 1][a] > r[o][a + 1]
        ? (i.push({ operation: "delete", index: o, value: s[o] }), (o += 1))
        : (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  for (; o < t;) (i.push({ operation: "delete", index: o, value: s[o] }), (o += 1));
  for (; a < n;) (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  return i;
}
function Un(s) {
  if (!mt(s.client)) return `invalid CRDT client id: ${s.client}`;
  if (!Ke(s.seq)) return `invalid CRDT seq: ${s.seq}`;
}
var Pi = "$$id-";
function Li(s) {
  return Pi + s;
}
function El(s) {
  return s.startsWith(Pi);
}
var pa = 0,
  ya = 62 ** 5,
  ga = 0,
  ba = Number.MAX_SAFE_INTEGER;
function qn(s, e, t) {
  s &&
    e &&
    (l(s <= e, () => `Invalid boundaries: ${s} > ${e}`),
    l(
      s !== e,
      () => `Trying to allocate between equal boundarys (same position, same client): ${s}`
    ));
  let n = s ? De(s) : [],
    r = e ? De(e) : [],
    i = Ia(n, r, t);
  return be(i);
}
var Hi;
function Ia(s, e, t) {
  let n = [],
    r = 0,
    i = !1;
  for (;;) {
    l(r < 2e3, "Infinite loop");
    let o = r < s.length,
      a = r < e.length,
      d = o ? s[r] : { position: pa, client: ga },
      c = a && !i ? e[r] : { position: ya, client: ba };
    if (c.position - d.position > 1) {
      let u;
      Hi
        ? (u = Hi)
        : e.length === 0
          ? (u = (f, m) => Vi(f, m, 4096, 2))
          : i
            ? (u = (f, m) => Vi(f, m, 8192, 2))
            : (u = wa);
      let h = u(d.position + 1, c.position - 1);
      return (n.push({ position: h, client: t }), n);
    }
    if ((n.push({ ...d }), !i)) {
      let u = d.position < c.position,
        h = a && d.position === c.position && d.client < c.client;
      i = u || h;
    }
    r++;
  }
}
function Vi(s, e, t, n) {
  l(s <= e, () => `Invalid range: ${s} > ${e}`);
  let r = Math.min(e, s + n),
    i = Math.min(e, r + t);
  return Fi(r, i);
}
function wa(s, e) {
  l(s <= e, () => `Invalid range: ${s} > ${e}`);
  let t = Math.floor((s + e) / 2),
    n = Math.min(8, Math.floor((e - s) / 4)),
    r = Math.max(s, t - n),
    i = Math.min(e, t + n);
  return Fi(r, i);
}
var Sa = Math.random;
function Fi(s, e) {
  let t = e - s + 1;
  return Math.floor(Sa() * t) + s;
}
var ji = "FRAMERCRDT";
function Pn(s) {
  let e = s.readString();
  return (l(e === ji, () => `Not a framer document: ${e}`), { version: s.readUint16() });
}
function Ln(s, e) {
  (e.writeString(ji), e.writeUint16(s));
}
function va(s, e) {
  let t = `m${s}_${e}`;
  return (l(Ie[t], () => `Migration from ${s} to ${e} does not exist`), Ie[t]);
}
function Ki(s, e = 1) {
  for (let t = Math.max(s, 2); t > e; --t) {
    let n = va(t - 1, t);
    if (n.codec) return n.codec;
  }
}
var J = class s {
  constructor(e = at) {
    this.version = e;
    let t = Ki(e);
    (l(t, () => `Codec not found for version ${e}`),
      (this.codec = t),
      (this.branches = new Map([[v, new E(this.codec, v, e)]])));
  }
  version;
  static MAGIC = "FRAMERCRDT";
  branches;
  codec;
  getBranch(e) {
    let t = this.branches.get(e);
    return (l(t, () => `Branch ${e} does not exist`), t);
  }
  getOrCreateBranch(e) {
    let t = this.branches.get(e);
    return (t || ((t = new E(this.codec, e, this.version)), this.branches.set(e, t)), t);
  }
  get main() {
    return this.getBranch(v);
  }
  get length() {
    let e = 0;
    for (let t of this.branches.values()) e += t.columns.length;
    return e;
  }
  addSerializableRows(e) {
    for (let t of e) this.getOrCreateBranch(t.branchId ?? v).addSerializableRow(t);
  }
  releaseColumnLookups() {
    for (let e of this.branches.values()) e.columns.releaseLookups();
  }
  toBuffer(e) {
    let t = new V();
    return (Ln(this.version, t), this.codec.encode(this, t, e), t.getBuffer());
  }
  async writeToStream(e, t) {
    let n = new V();
    return (Ln(this.version, n), this.codec.encode(this, n, t), n.writeToStream(e));
  }
  static loadVersionFromBuffer(e) {
    let t = new z(e),
      { version: n } = Pn(t);
    return n;
  }
  static fromBuffer(e, t) {
    let n = new z(e, t?.dataAvailability),
      { version: r } = Pn(n),
      i = new s(r);
    return (i.codec.decode(i, n, t), i);
  }
};
var fe = "meta",
  dt = { ROOT_ID: "rootId", VERSION: "version" },
  $i = 5e4;
function Ca(s, e) {
  return s.seq === e.seq ? s.client - e.client : s.seq - e.seq;
}
function Wi(s) {
  if (!Array.isArray(s) || s.length === 0) return !1;
  let e,
    t = new Set();
  for (let n of s) {
    let r = n instanceof Qn ? n.value : n;
    if (typeof r != "object" || r === null) return !1;
    let i =
      typeof r.id == "string" ? "id" : typeof r.identifier == "string" ? "identifier" : void 0;
    if (!i) return !1;
    (e &&
      l(e === i, () => `Mergeable arrays must have consistent id/identifier: ${JSON.stringify(s)}`),
      (e = i));
    let o = r[e];
    if (!o) return !1;
    (l(!t.has(o), () => `Mergeable arrays must have unique ids: ${JSON.stringify(s)}`), t.add(o));
  }
  return !0;
}
function Ra(s, e, t = 0) {
  let n = {},
    r = n;
  for (let o = t; o < s.length - 1; ++o) {
    let a = s[o],
      d = {};
    ((r[a] = d), (r = d));
  }
  let i = s[s.length - 1];
  return ((r[i] = e), n);
}
function Hn(s) {
  return `${s.client}/${s.seq}/${s.id}/${s.key}/${JSON.stringify(s.value)}/${s.batch}`;
}
var xa = ["__class", "isMaster", "isFormContainer", "replicaInfo", "master", "dataIdentifier"],
  Aa = ["__class"],
  ne = class s {
    table;
    branchData;
    latest;
    hierarchy;
    indexClasses = [];
    indexes = new Map();
    initialized = !1;
    sortedArrayCache;
    checksumIndex;
    additiveChecksumIndex;
    branchOwnWriteIndex;
    client;
    user;
    branchId;
    base;
    branches = [];
    ownPermanentError = null;
    ownWriteAuthorizer;
    valueTransformer;
    atomicArrays;
    latestMapType;
    hierarchyMode;
    bulkHierarchyRehydrate;
    skipValueDedupeScan;
    onTiming;
    getTime;
    extractIdFromObject;
    shouldReplaceObjectOnIdChange;
    get manifest() {
      return this.branchData.manifest;
    }
    get minIndexCache() {
      return this.branchData.minIndexCache;
    }
    positionClientId;
    constructor({
      client: e,
      user: t,
      atomicArrays: n = "strict",
      latestMap: r = "map",
      hierarchyMode: i = "full",
      bulkHierarchyRehydrate: o = !1,
      skipValueDedupeScan: a = !1,
      onTiming: d,
      branchId: c = v,
      base: u,
      table: h,
      extractIdFromObject: f,
      shouldReplaceObjectOnIdChange: m,
      useHierarchyCache: y = !0,
      writeAuthorizer: p,
      valueTransformer: g,
      getTime: I = Date.now,
    }) {
      ((this.client = e),
        (this.user = t),
        (this.atomicArrays = n),
        (this.latestMapType = r),
        (this.hierarchyMode = i),
        (this.bulkHierarchyRehydrate = o),
        (this.skipValueDedupeScan = a),
        (this.onTiming = d),
        (this.branchId = c),
        (this.getTime = I),
        (this.base = u),
        (this.table = h ?? u?.table ?? new J()),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.positionClientId = fr(this.branchId, this.client)),
        (this.latest = this.createLatestMap()),
        (this.extractIdFromObject = f),
        (this.shouldReplaceObjectOnIdChange = m),
        (this.ownWriteAuthorizer = p),
        (this.valueTransformer = g),
        this.registerIndex(tr),
        this.registerIndex(Xn),
        this.registerIndex(rr),
        this.registerIndex(ir),
        this.registerIndex(nr),
        this.init(y),
        this.branchId !== v &&
          this.branchData.columns.length === 0 &&
          this.setObjectKey(this.branchId, R, L));
    }
    init(e = !0) {
      ((this.initialized = !0),
        (this.batchNo = 0),
        (this.batchStartIdx = void 0),
        (this.ownPermanentError = null),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.branches.length = 0),
        (this.latest = this.createLatestMap()),
        (this.indexes = new Map(
          this.indexClasses.map(({ indexClass: t, create: n }) => [t, n(this.base)])
        )),
        (this.hierarchy = new qt(this, this.latest, this.base?.hierarchy)),
        (this.branchOwnWriteIndex = this.base ? new cr(this.branchData) : void 0),
        (this.sortedArrayCache = new Vt(
          this.latest,
          (t, n) => this.getCurrentValue(t, n),
          this.base?.sortedArrayCache,
          (t) => this.branchData.columns.value.get(t)
        )),
        (this.checksumIndex = new Et(this)),
        (this.additiveChecksumIndex = void 0),
        this.branchData.hierarchyData && e
          ? (this.updateCaches(this.branchData.hierarchyData),
            this.base && this.hierarchy.resolveCycles(0))
          : ((this.branchData.hierarchyData = new W(
              this.hierarchy.parentHistory,
              this.hierarchy.parentOverrides
            )),
            this.indexRowsOptimized(),
            this.hierarchy.postProcess(0)));
    }
    registerIndex(e) {
      if (this.initialized) throw new Error("Cannot register an index after Store initialization");
      if (this.indexClasses.some((t) => t.indexClass === e))
        throw new Error(`Index ${e.name} is already registered`);
      this.indexClasses.push({ indexClass: e, create: (t) => new e(t?.getIndex(e)) });
    }
    getIndex(e) {
      let t = this.indexes.get(e);
      if (!t) throw new Error(`Index ${e.name} is not registered`);
      return t;
    }
    getIndexes() {
      return Array.from(this.indexes.values());
    }
    createLatestMap() {
      return this.base
        ? new Lt(this.base.latest)
        : this.latestMapType === "slab"
          ? new ot(this.branchData.columns)
          : new Pt();
    }
    withTiming(e, t) {
      if (!this.onTiming) return t();
      let n = performance.now();
      try {
        return t();
      } finally {
        this.onTiming(e, performance.now() - n);
      }
    }
    reset() {
      (l(this.branchId === v, "Cannot call reset on non main branches"),
        (this.table = new J()),
        this.init());
    }
    static resetBranchDataForTesting(e) {
      (l(e.branchId !== v, "Cannot reset main branch data for testing"),
        e.table.branches.set(e.branchId, new E(e.branchData.codec, e.branchId, e.table.version)),
        e.init());
    }
    get permanentError() {
      for (let e = this; e; e = e.base) if (e.ownPermanentError) return e.ownPermanentError;
      return null;
    }
    setWriteAuthorizer(e) {
      this.ownWriteAuthorizer = e;
    }
    getWriteAuthorizer() {
      return this.ownWriteAuthorizer ?? this.base?.getWriteAuthorizer();
    }
    isWriteAuthorized(e, t, n, r, i) {
      let o = pe(this.hierarchy, t) ?? t,
        a = o === t ? n : t.slice(o.length + 1).split(".", 1)[0];
      return e.canWriteProperty(this, o, a, r, i);
    }
    throwIfPermanentError() {
      let e = this.permanentError;
      if (e) throw new Error("Store is permanently broken due to a previous error", { cause: e });
    }
    fromBuffer(e, t = !0) {
      (l(this.branchId === v, "Cannot call fromBuffer on non main branches"),
        this.fromTable(
          J.fromBuffer(e, { stringCodeMaps: !0, skipValueDedupeScan: this.skipValueDedupeScan }),
          t
        ));
    }
    fromTable(e, t = !0) {
      (l(this.branchId === v, "Cannot call fromTable on non main branches"),
        (this.table = e),
        this.init(t));
    }
    branch(e, t = !0) {
      let n = new s({
        client: this.client,
        user: this.user,
        atomicArrays: this.atomicArrays,
        latestMap: this.latestMapType,
        hierarchyMode: this.hierarchyMode,
        onTiming: this.onTiming,
        branchId: e,
        base: this,
        table: this.table,
        extractIdFromObject: this.extractIdFromObject,
        shouldReplaceObjectOnIdChange: this.shouldReplaceObjectOnIdChange,
        useHierarchyCache: t,
        valueTransformer: this.valueTransformer,
        getTime: this.getTime,
      });
      return (this.branches.push(n), n);
    }
    detachBranch(e) {
      let t = this.branches.indexOf(e);
      t !== -1 && this.branches.splice(t, 1);
    }
    updateCaches(e) {
      let t = this.manifest.getBatch(this.client);
      this.batchNo = t !== void 0 ? Oe(t) : 0;
      let n = this.branchData.columns,
        r = this.latest;
      (r instanceof ot
        ? (this.withTiming("latest_index", () => r.build()),
          this.withTiming("hierarchy_latest_replay", () => {
            let i = this.hierarchyMode === "full" ? xa : Aa;
            r.replayLatestValues(i, (o, a, d) => {
              this.hierarchy.updateLatestValue(o, a, d);
            });
          }))
        : this.withTiming("latest_index", () => {
            for (let i = this.length - 1; i >= 0; i--) {
              let o = n.id.get(i);
              if (o === G) continue;
              this.branchOwnWriteIndex?.indexOwnRow(i);
              let a = n.key.get(i);
              if (a === "parentid") continue;
              let d = this.latest.getOwn(o, a);
              (d === void 0 || X(n, i, d)) &&
                (this.latest.set(o, a, i), this.hierarchy.updateLatestValue(o, a, i));
            }
          }),
        this.withTiming("hierarchy_rehydrate", () => {
          this.hierarchyMode === "minimal"
            ? this.getHierarchy().rehydrateMinimal(e)
            : this.getHierarchy().rehydrate(e, this.bulkHierarchyRehydrate && !this.base);
        }));
    }
    compare(e) {
      return this.manifest.compare(e);
    }
    setRoot(e) {
      this.setObjectKey(fe, dt.ROOT_ID, e);
    }
    getRoot() {
      return this.getCurrentValue(fe, dt.ROOT_ID);
    }
    getVersion() {
      return this.getCurrentValue(fe, dt.VERSION);
    }
    setVersion(e) {
      this.setObjectKey(fe, dt.VERSION, e);
    }
    isRoot(e) {
      return this.getCurrentValue(fe, dt.ROOT_ID) === e;
    }
    get seq() {
      return this.branchData.metadata.seq;
    }
    set seq(e) {
      this.branchData.metadata.seq = e;
    }
    ensureMinSeq(e) {
      l(Ke(e), () => `invalid seq: ${e}`);
      let t = this.seq;
      return (e > t && (this.seq = e), { from: t, to: this.seq });
    }
    getLastBatchNo() {
      return this.batchNo;
    }
    getSerializableRows(e, t) {
      return this.branchData.getSerializableRows(e, t);
    }
    getSerializableRowsAfterManifest(e) {
      return this.branchData.getSerializableRowsAfterManifest(e);
    }
    getExtraSerializableRows(e) {
      return this.branchData.getExtraSerializableRows(e);
    }
    getRows(e, t) {
      return this.branchData.getRows(e, t);
    }
    getRowsForIndices(e) {
      return e.map((t) => this.branchData.getRow(t));
    }
    getRowsSorted() {
      return this.getRows().sort(Ca);
    }
    getFirstRowForSeq(e) {
      return this.minIndexCache.get(e);
    }
    optimizedReading = !1;
    inserting = !1;
    shouldPreserveInheritedValues = !1;
    mutationCapture;
    preservingInheritedValues(e) {
      let t = this.shouldPreserveInheritedValues;
      this.shouldPreserveInheritedValues = !0;
      try {
        return e();
      } finally {
        this.shouldPreserveInheritedValues = t;
      }
    }
    runMutation(e) {
      l(this.mutationCapture === void 0, "You cannot nest mutations");
      let t = {
        startIndex: this.length,
        previousIndices: [],
        previousObjectRows: new Map(),
        capturedObjectIds: new Set(),
        operation: void 0,
      };
      this.mutationCapture = t;
      try {
        e();
        let n = this.length - t.startIndex;
        l(n === t.previousIndices.length, "Previous and next mutation rows must align");
        let r = [],
          i = Array.from({ length: n }),
          o = this.branchId === v ? b : S,
          { id: a, key: d, value: c, seq: u, batch: h } = this.branchData.columns,
          f = n > 0 ? { start: u.get(t.startIndex), end: u.get(t.startIndex + n - 1) + 1 } : void 0;
        for (let m = 0; m < n; m++) {
          let y = t.startIndex + m,
            p = t.previousObjectRows.get(y);
          if (p) for (let x of p) r.push(x);
          let g = y < h.length;
          i[m] = {
            id: a.get(y),
            key: d.get(y),
            value: c.get(y),
            origin: g ? Kt(h.get(y)) : this.batchOrigin,
          };
          let I = t.previousIndices[m],
            w = I === -1 ? y : I;
          r.push({ id: a.get(w), key: d.get(w), value: I === -1 ? o : c.get(I) });
        }
        return t.operation === "insertNode"
          ? { previousRows: r.filter((m) => m.key === "parentid"), nextRows: i, seqRange: f }
          : { previousRows: r, nextRows: i, seqRange: f };
      } catch (n) {
        throw (
          (this.ownPermanentError = n instanceof Error ? n : new Error(String(n), { cause: n })),
          n
        );
      } finally {
        this.mutationCapture = void 0;
      }
    }
    captureMutationOperation(e) {
      let t = this.mutationCapture;
      if (t) {
        if (t.operation === void 0) {
          t.operation = e;
          return;
        }
        l(t.operation === e, () => `Cannot mix ${t.operation} and ${e} in one mutation`);
      }
    }
    capturePreviousIndex(e, t, n) {
      let r = this.mutationCapture;
      if (!r) return;
      let i =
          t === "parentid"
            ? this.hierarchy.getOwnParentRowIdx(e)
            : this.latest.getOwnLatest(e)?.ownGet(t),
        o = i !== void 0 && i >= r.startIndex ? r.previousIndices[i - r.startIndex] : (i ?? -1);
      if (
        (r.previousIndices.push(o),
        t === "parentid" && n === b && H(this.hierarchy.getHierarchyKey(e)))
      ) {
        r.previousObjectRows.set(this.length, this.getOwnRowsForObject(r, e, !1));
        return;
      }
      if (o !== -1) {
        let a = this.branchData.columns.value.get(o);
        if (n === b && ce(a) && this.getMergeableArrayIds(e))
          r.previousObjectRows.set(this.length, this.getOwnRowsForObject(r, t, !1));
        else if ((K(a) || j(a)) && n !== a) {
          let d = this.getOwnRowsForObject(r, _(a), j(a)).filter(
            (c) => (this.latest.getOwnLatest(c.id)?.ownGet(c.key) ?? -1) < r.startIndex
          );
          r.previousObjectRows.set(
            this.length,
            d.map((c) => ({ ...c, ifUnchanged: !0 }))
          );
        }
      }
    }
    isUnchangedReplayRow(e) {
      let t = this.getCurrentValue(e.id, e.key);
      return t === void 0 || je(t, e.value);
    }
    getCapturedIdsOfDeletedObjects(e) {
      let t = new Set(),
        n = Map.groupBy(
          e.filter((i) => i.ifUnchanged),
          (i) => i.id
        );
      if (n.size === 0) return t;
      let r = (i, o) => {
        if (!t.has(i)) {
          t.add(i);
          for (let a of n.get(i) ?? []) o ? r(a.key, !1) : ct(a.value, r);
        }
      };
      for (let i of e)
        i.ifUnchanged ||
          ct(i.value, (o, a) => {
            if (!n.has(o)) return;
            (a
              ? this.getCurrentValue(o, R) !== L
              : !this.getObjectKeys(o, (c) => c !== R).some((c) =>
                  this.hasDefinedObjectKey(o, c)
                )) && r(o, a);
          });
      return t;
    }
    getIndexAtMutationStart(e) {
      let t = this.mutationCapture;
      return !t || e < t.startIndex ? e : t.previousIndices[e - t.startIndex];
    }
    getOwnRowsForObject(e, t, n) {
      let r = [],
        i = (o, a) => {
          if (e.capturedObjectIds.has(o)) return;
          e.capturedObjectIds.add(o);
          let d = this.latest.getOwnLatest(o);
          if (!d) return;
          let c = [];
          d.forEachOwn((u, h) => c.push([u, h]));
          for (let [u, h] of c) {
            let f = this.getIndexAtMutationStart(h);
            if (f === -1) continue;
            let m = this.branchData.columns.value.get(f);
            (r.push({ id: o, key: u, value: m }), a ? i(u, !1) : ct(m, i));
          }
        };
      return (i(t, n), r);
    }
    indexRowsOptimized() {
      let { client: e, id: t, key: n, seq: r, value: i, batch: o } = this.branchData.columns;
      this.optimizedReading = !0;
      for (let a = this.length - 1; a >= 0; a--)
        this.updateRowIndex(a, r.get(a), t.get(a), n.get(a), i.get(a), e.get(a), o.get(a));
      this.optimizedReading = !1;
    }
    merge(e) {
      return this.mergeRows(e.getRows());
    }
    mergeRows(e) {
      this.throwIfPermanentError();
      let t = new Set(this.getRows().map((r) => Hn(r))),
        n = 1 / 0;
      for (let r of e) {
        let i = Hn(r);
        t.has(i) ||
          (t.add(i),
          this.addRowData(r.id, r.key, r.value, r.client, r.seq, r.user, r.time, r.batch),
          (n = Math.min(n, r.seq)));
      }
      return (this.sortedArrayCache.clear(), this.hierarchy.postProcess(n), n);
    }
    append(e) {
      return this.addRows(e.getRows());
    }
    addSerializableRows(e, { authorizer: t, onDenied: n, onInvalid: r, skipDuplicates: i } = {}) {
      this.throwIfPermanentError();
      let o = 1 / 0;
      for (let a of e) {
        let d = Un(a);
        if (i && d === void 0 && this.manifest.hasTimestamp(a.client, a.seq)) continue;
        let c = ar(a.value);
        if (t && !this.isWriteAuthorized(t, a.id, a.key, c, a)) {
          n?.(a);
          continue;
        }
        if (d !== void 0) {
          if (r) {
            r(a, d);
            continue;
          }
          throw new Error(d);
        }
        (this.addRowData(a.id, a.key, c, a.client, a.seq, a.user, a.time, a.batch),
          (o = Math.min(o, a.seq)),
          t && a.key === "parentid" && this.hierarchy.resolveCycles(a.seq));
      }
      (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : o));
    }
    addBinaryRows(e, t) {
      this.throwIfPermanentError();
      let n = e instanceof it ? e : new it(e),
        r = 1 / 0,
        i = t === void 0 ? void 0 : Array.from(t);
      for (let u of i ?? n.indices()) {
        let h = n.clients[u],
          f = n.sequences[u];
        if (!mt(h)) throw new Error(`invalid CRDT client id: ${h}`);
        if (!Ke(f)) throw new Error(`invalid CRDT seq: ${f}`);
        let m = n.batches[u];
        if (!sr(m)) throw new Error(`invalid CRDT batch id: ${m}`);
        r = Math.min(r, f);
      }
      if (i?.length === 0) return;
      let o = (u) => (i === void 0 ? u : i.map((h) => u[h])),
        a = this.branchData.columns,
        d = this.length;
      (a.client.addMany(o(n.clients)),
        a.seq.addMany(o(n.sequences)),
        a.id.addMany(o(n.ids)),
        a.key.addMany(o(n.keys)),
        a.value.addMany(o(n.values)),
        a.user.addMany(o(n.users)),
        a.batch.addMany(o(n.batches)),
        a.time.addMany(o(n.times)));
      let c = i?.length ?? n.length;
      for (let u = 0; u < c; u++) {
        let h = i?.[u] ?? u;
        this.updateRowIndex(
          d + u,
          n.sequences[h],
          n.ids[h],
          n.keys[h],
          n.values[h],
          n.clients[h],
          n.batches[h]
        );
      }
      (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : r));
    }
    addRows(e) {
      this.throwIfPermanentError();
      let t = 1 / 0;
      for (let r of e)
        (this.addRowData(r.id, r.key, r.value, r.client, r.seq, r.user, r.time, r.batch),
          (t = Math.min(t, r.seq)));
      this.sortedArrayCache.clear();
      let n = this.hierarchy.postProcess(t);
      return { minSeq: t, cycleResolutions: n };
    }
    replayRowList(e, t) {
      let n = this.getCapturedIdsOfDeletedObjects(e),
        r = e.filter((p) => !p.ifUnchanged || n.has(p.id) || this.isUnchangedReplayRow(p)),
        i = {
          supersededRows: [],
          addedNodeIds: [],
          replayedRange: { startSeq: this.seq, rowCount: r.length },
        };
      if (r.length === 0) return i;
      let o = new Map(),
        a = new Set(),
        d = new Set(),
        c = (p) => {
          let g = o.get(p);
          if (g !== void 0) return g;
          let I = this.latest.getLatest(p) !== void 0;
          return (o.set(p, I), I);
        },
        u = t?.regenerateHierarchyPositions ? Oa(r) : void 0,
        h = this.seq,
        f = h,
        m,
        y = 0;
      for (; y < r.length;) {
        let p = Gi(r[y], t),
          g = y + 1;
        for (; g < r.length && Gi(r[g], t) === p;) g++;
        (this.batch(() => {
          m ??= this.batchTime;
          for (let I = y; I < g; I++) {
            let w = r[I];
            if (!c(w.id)) a.add(w.id);
            else {
              let C = `${w.id}\0${w.key}`;
              if (!d.has(C)) {
                d.add(C);
                let D = (
                  w.key === "parentid"
                    ? this.hierarchy.getParentId(w.id) !== void 0
                    : this.latest.has(w.id, w.key)
                )
                  ? this.getReplayableValue(w.id, w.key)
                  : b;
                i.supersededRows.push({ id: w.id, key: w.key, value: D });
              }
            }
            let x = u ? this.regenerateReplayHierarchyPosition(w, u) : w.value;
            (this.assertLocalValueIsStorable(w.id, w.key, x),
              this.addRowData(w.id, w.key, x, this.client, h++, w.user ?? this.user, w.time ?? m));
          }
        }, p),
          (y = g));
      }
      return (
        this.sortedArrayCache.clear(),
        this.hierarchy.postProcess(f),
        (i.addedNodeIds = [...a]),
        i
      );
    }
    regenerateReplayHierarchyPosition(e, t) {
      if (e.key !== "parentid" || !ve(e.value) || !H(e.value)) return e.value;
      let n = Q(e.value),
        r = B(e.value),
        i;
      for (let a of this.getChildrenIds(r)) {
        let d = this.hierarchy.getChildPosition(a);
        if (d !== void 0 && d > n) {
          i = d;
          break;
        }
      }
      for (let a of t.get(r) ?? [])
        if (!(a <= n)) {
          (i === void 0 || a < i) && (i = a);
          break;
        }
      let o = this.allocatePositionBetween(r, n, i);
      return Ce(r, o);
    }
    batchStartIdx;
    batchNo = 0;
    batchTime = 0;
    batchOrigin = 0;
    get inBatch() {
      return this.batchStartIdx !== void 0;
    }
    batch(e, t = 0) {
      (this.throwIfPermanentError(), l(this.batchStartIdx === void 0, "You cannot nest batches"));
      let n = this.branchData.columns;
      ((this.batchStartIdx = n.client.length),
        (this.batchTime = Math.floor(this.getTime() / 1e3)),
        (this.batchOrigin = t));
      try {
        let r = e(),
          i = n.client.length - this.batchStartIdx;
        if (i === 0) return r;
        let o = 0;
        for (let a = 0; a < i; a += $i) {
          let d = Math.min($i, i - a);
          (this.batchNo++, (o = lt({ batchNo: this.batchNo, rowCount: d, origin: t })));
          for (let c = 0; c < d; c++) n.batch.add(o);
        }
        return (this.manifest.updateClientState(this.client, this.seq - 1, o), r);
      } catch (r) {
        throw (
          (this.ownPermanentError = r instanceof Error ? r : new Error(String(r), { cause: r })),
          r
        );
      } finally {
        ((this.batchStartIdx = void 0), (this.batchTime = 0), (this.batchOrigin = 0));
      }
    }
    updateKeyValue(e, t, n) {
      if (this.batchStartIdx === void 0) {
        this.batch(() => {
          this.updateKeyValue(e, t, n);
        });
        return;
      }
      let r = this.getWriteAuthorizer();
      if (r && !this.isWriteAuthorized(r, e, t, n, { user: this.user, id: e, key: t }))
        throw new Error(`Write authorizer denied ${t} write for ${e}`);
      (this.assertLocalValueIsStorable(e, t, n),
        this.addRowData(e, t, n, this.client, this.seq, this.user, this.batchTime));
    }
    assertLocalValueIsStorable(e, t, n) {
      l(
        this.base !== void 0 || n !== S,
        () => `Cannot write an inherited value into a store without a base: ${e}.${t}`
      );
    }
    rowWriteObservers = new Set();
    addRowData(e, t, n, r, i, o, a, d) {
      if (!this.shouldAddRow(e, t, n, i, r)) return;
      this.capturePreviousIndex(e, t, n);
      for (let h of this.rowWriteObservers) h(e, t, n);
      let c = this.branchData.columns;
      (c.client.add(r),
        c.seq.add(i),
        c.id.add(e),
        c.key.add(t),
        c.value.add(n),
        c.user.add(o),
        c.time.add(a),
        d && c.batch.add(d));
      let u = c.client.length - 1;
      this.updateRowIndex(u, i, e, t, n, r, d);
    }
    shouldAddRow(e, t, n, r, i) {
      let o = t === "parentid" ? this.hierarchy.getOwnParentRowIdx(e) : this.latest.getOwn(e, t);
      if (o === void 0 || o >= this.length) return !0;
      let a = this.branchData.columns;
      if (a.value.get(o) !== n) return !0;
      let c = a.seq.get(o),
        u = a.client.get(o);
      return !(c === r && u === i);
    }
    updateRowIndex(e, t, n, r, i, o, a) {
      if (a !== void 0 && o === this.client) {
        let u = Oe(a);
        this.batchNo = Math.max(this.batchNo, u);
      }
      if (
        (a !== void 0 && this.manifest.updateClientState(o, t, a),
        this.manifest.addTimestamp(o, t),
        t >= this.seq && (this.seq = t + 1),
        n === G)
      )
        return;
      let d = this.latest.getOwn(n, r),
        c = this.branchData.columns;
      if ((this.branchOwnWriteIndex?.indexOwnRow(e), r === "parentid")) {
        if (!ve(i)) return;
        this.hierarchy.updateParentId(n, e);
      } else
        (d === void 0 || le(t, o, c.seq.get(d), c.client.get(d))) &&
          (this.latest.set(n, r, e), this.hierarchy.updateLatestValue(n, r, e));
      if (!this.optimizedReading) {
        let u = n.indexOf(".");
        u !== -1 && this.latest.getLatest(n.slice(0, u))?.updated();
      }
      (this.sortedArrayCache.invalidate(n), this.minIndexCache.add(t, e));
    }
    getParentId(e) {
      return this.hierarchy.getParentId(e);
    }
    getHierarchy() {
      return this.hierarchy;
    }
    getBranchOwnWriteIndex() {
      return (
        l(this.branchOwnWriteIndex, "Branch own write index is only available for branch stores"),
        this.branchOwnWriteIndex
      );
    }
    _getIdFromObject(e) {
      return this.extractIdFromObject?.(e);
    }
    createStoreId(e, t) {
      return `${e}.${t}`;
    }
    getReferenceValue(e) {
      return Array.isArray(e)
        ? e.map((t) => this.getReferenceValue(t))
        : j(e)
          ? (this.getMergeableArray(_(e)) ?? [])
          : K(e)
            ? this.getObjectInner(_(e))
            : re(e)
              ? er(e)
              : e;
    }
    getCurrentValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let n = this.latest.getOwn(e, t);
      if (n !== void 0) {
        let r = this.branchData.columns.value.get(n);
        return r === S ? this.base?.getCurrentValue(e, t) : r;
      }
      return this.base?.getCurrentValue(e, t);
    }
    getCurrentRawValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let n = this.latest.getOwnLatest(e)?.ownGet(t);
      return n !== void 0
        ? this.branchData.columns.value.get(n)
        : this.base?.getCurrentRawValue(e, t);
    }
    getCurrentRawValueOrDoesNotExist(e, t) {
      let n =
        t === "parentid"
          ? this.hierarchy.getOwnParentRowIdx(e)
          : this.latest.getOwnLatest(e)?.ownGet(t);
      if (n === void 0) return this.base ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : we;
      let r = this.branchData.columns.value.get(n);
      return this.base && r === S ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : r;
    }
    hasOwnRow(e, t) {
      return t === "parentid"
        ? this.hierarchy.getOwnParentRowIdx(e) !== void 0
        : this.latest.getOwn(e, t) !== void 0;
    }
    getShadowedValues(e, t) {
      let n = [];
      for (let r = this; r; r = r.base) r.hasOwnOverridingRow(e, t) && n.push(r.getObjectKey(e, t));
      return n.slice(1);
    }
    isOwnRowNewer(e, t, n) {
      let r = this.latest.getOwnLatest(e),
        i = r?.ownGet(t);
      if (i === void 0) return !1;
      let o = r?.ownGet(n);
      return o === void 0 || X(this.branchData.columns, i, o);
    }
    hasOwnOverridingRow(e, t) {
      if (t === "parentid") {
        let r = this.hierarchy.getOwnParentRowIdx(e);
        return r !== void 0 && (!this.base || this.branchData.columns.value.get(r) !== S);
      }
      let n = this.latest.getOwnLatest(e)?.ownGet(t);
      return n !== void 0 && (!this.base || this.branchData.columns.value.get(n) !== S);
    }
    getParentIdSeq(e) {
      return this.hierarchy.getParentIdSeq(e);
    }
    validateObjectUpdate(e, t) {
      if (!ye(t)) throw new Error("Store.setObject: object is not an object");
      let n = this._getIdFromObject(t);
      if (n && n !== e)
        throw new Error(
          `Mismatch between provided id and id extracted from the store: ${n} !== ${e}`
        );
      return e;
    }
    deleteRemovedKeys(e, t) {
      let n = this.latest.getLatest(e);
      if (n) for (let r of n.keys()) r !== R && (r in t || this.setObjectKey(e, r, b));
    }
    inheritExistingKeys(e) {
      let t = this.latest.getLatest(e);
      if (!t) return;
      let n = this.latest.getOwnLatest(e);
      for (let r of t.keys())
        r !== R &&
          (n?.ownHas(r)
            ? this.setObjectKey(e, r, S)
            : this.cleanExistingReferenceValue(e, r, this.getCurrentValue(e, r), S));
    }
    assertPositionIsValid(e) {
      e !== void 0 && l(Number.isInteger(e), () => `Invalid position: ${e}`);
    }
    isMaterializableNode(e) {
      let t = this.getCurrentValue(e, "id");
      return t !== void 0 && t !== b;
    }
    createHierarchyKey(e, t, n = -1) {
      let r = this.getChildrenIds(t);
      if ((this.assertPositionIsValid(n), n === -1 || n >= r.length)) {
        let m = r.at(-1),
          y = m ? this.hierarchy.getChildPosition(m) : void 0,
          p = this.allocatePositionBetween(t, y, void 0);
        return Ce(t, p);
      }
      let i = r.filter((m) => this.isMaterializableNode(m)),
        o = this.hierarchy.getChildIndex(i, e);
      if (o === n && o >= 0) {
        let m = this.hierarchy.getHierarchyKey(e);
        return (l(H(m), "Existing position cannot be deleted or inherited"), m);
      }
      if (n < 0) {
        let y = o >= 0 ? i.length : i.length + 1;
        n = Math.max(y + n, 0);
      }
      o >= 0 && n > o && (n += 1);
      let a = Math.min(n, i.length),
        d,
        c;
      if (a < i.length) {
        let m = i[a];
        (l(m !== void 0), (c = m));
        let y = r.indexOf(m);
        d = y > 0 ? r[y - 1] : void 0;
      } else d = r.at(-1);
      let u = d ? this.hierarchy.getChildPosition(d) : void 0,
        h = c ? this.hierarchy.getChildPosition(c) : void 0,
        f = this.allocatePositionBetween(t, u, h);
      return Ce(t, f);
    }
    allocatePositionBetween(e, t, n) {
      let r = t;
      for (let i of this.hierarchy.getRevokedOwnPositions(e))
        (r !== void 0 && i <= r) || (n !== void 0 && i >= n) || (r = i);
      return qn(r, n, this.positionClientId);
    }
    ensureHasChildren(e) {
      this.getCurrentValue(e, "children") !== L && this.setObjectKey(e, "children", L);
    }
    insertNode(e, t, n) {
      (this.captureMutationOperation("insertNode"),
        l(typeof e.id == "string", "inserting node without a valid id"),
        this.assertPositionIsValid(n));
      let r = this.inserting;
      this.inserting = !0;
      try {
        (this.setObject(e.id, e), this.ensureHasChildren(t));
        let i = this.createHierarchyKey(e.id, t, n);
        this.setObjectKey(e.id, "parentid", i);
      } finally {
        this.inserting = r;
      }
    }
    removeNode(e) {
      (this.captureMutationOperation("removeNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to remove a node that doesn't exist: ${e}`
        ),
        this.setObjectKey(e, "parentid", b));
    }
    inheritNode(e) {
      (this.captureMutationOperation("inheritNode"),
        l(this.base !== void 0, "Only a branch can inherit a node"));
      let t = this.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (t === void 0) return;
      let n = [];
      for (let [r, i] of t.latestPropertyRowIndexByStoreId) for (let o of i.keys()) n.push([r, o]);
      for (let [r, i] of n) i !== R && this.hasOwnOverridingRow(r, i) && this.setObjectKey(r, i, S);
      this.hasOwnOverridingRow(e, "parentid") && this.setObjectKey(e, "parentid", S);
    }
    updateNode(e, t) {
      (this.captureMutationOperation("updateNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to update a node that doesn't exist: ${e}`
        ));
      for (let n in t) n !== "parentid" && this.setObjectKey(e, n, t[n]);
    }
    updateNestedObject(e, t) {
      this.captureMutationOperation("updateNestedObject");
      let [n, ...r] = e;
      l(
        this.latest.get(n, "id") !== void 0,
        () => `trying to update nested properties on node doesn't exist: ${n}`
      );
      for (let i in t) i !== "parentid" && this.setObjectKeyPath(n, [...r, i], t[i]);
    }
    moveNode(e, t, n) {
      (this.captureMutationOperation("moveNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to move a node that doesn't exist: ${e}`
        ),
        this.assertPositionIsValid(n),
        this.ensureHasChildren(t));
      let r = this.createHierarchyKey(e, t, n);
      this.setObjectKey(e, "parentid", r);
    }
    importObject(e, t) {
      this.setObject(e, t);
    }
    setObject(e, t) {
      let n = this.validateObjectUpdate(e, t instanceof Re ? t.value : t),
        r = t instanceof Re ? { [Z]: t } : t;
      if ((this.deleteRemovedKeys(n, r), Object.keys(r).length === 0)) {
        this.setObjectKey(n, R, L);
        return;
      }
      if ((this.getCurrentValue(n, R) === b && this.setObjectKey(n, R, L), t instanceof Re)) {
        this.setTransformedObjectKey(n, Z, t);
        return;
      }
      for (let i in r) i === "children" || i === "parentid" || this.setObjectKey(n, i, r[i]);
      if (!(!("children" in r) || !Array.isArray(r.children))) {
        this.setObjectKey(n, "children", L);
        for (let i of r.children) this.insertNode(i, n);
      }
    }
    resolveObjectInArrayReference(e, t, n) {
      let r = t instanceof Re ? t.value : t,
        i = this._getIdFromObject(r);
      if (i === void 0) {
        let d;
        (typeof r.id == "string"
          ? (d = r.id)
          : typeof r.identifier == "string"
            ? (d = r.identifier)
            : (d = `__${n}_${this.client.toString(36)}`),
          (i = this.createStoreId(e, d)));
      }
      let o = this.getCurrentValue(e, i) === b,
        a = this.inserting;
      this.inserting = this.inserting || o;
      try {
        this.setObject(i, t);
      } finally {
        this.inserting = a;
      }
      return Fe(i);
    }
    createAtomicArray(e, t) {
      let n = [];
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (ye(i)) (jt(i), n.push(this.resolveObjectInArrayReference(e, i, r)));
        else if (Wi(i)) {
          let o = this.createStoreId(e, r.toString());
          (this.setMergeableArray(o, i), n.push(Ve(o)));
        } else
          Array.isArray(i)
            ? n.push(this.createAtomicArray(e + "." + r.toString(), i))
            : (this.assertLocalValueIsStorable(e, r.toString(), i), n.push(i));
      }
      return n;
    }
    cleanExistingReferenceValue(e, t, n, r) {
      if (r !== null && typeof r == "object" && !Array.isArray(r)) return;
      let i = j(n);
      if (K(n) || i) {
        let o = _(n);
        if (r === S) {
          if (i) {
            let a = this.latest.getLatest(o);
            if (a) for (let d of a.keys()) d !== R && this.inheritExistingKeys(d);
          }
          this.inheritExistingKeys(o);
        } else this.deleteRemovedKeys(o, {});
      }
      if (r === S) {
        let o = this.base?.getCurrentValue(e, t);
        o !== n && this.cleanExistingReferenceValue(e, t, o, r);
      }
    }
    setObjectKey(e, t, n) {
      if (
        (l(
          t !== Z || n === b || n === S,
          () => `${Z} is reserved for packed items and can't be written as a field of ${e}`
        ),
        t === "parentid")
      ) {
        (this.hierarchy.getHierarchyKey(e) !== n || this.inserting) && this.updateKeyValue(e, t, n);
        return;
      }
      let r = this.valueTransformer ? this.valueTransformer(t, n) : n;
      (jt(r), this.setTransformedObjectKey(e, t, r));
    }
    setTransformedObjectKey(e, t, n) {
      let r = this.base ? this.getCurrentRawValue(e, t) === S : !1,
        i = this.getCurrentValue(e, t);
      if (n instanceof Re) {
        let d = xe(n.value);
        if (
          re(i) &&
          je(this.getReferenceValue(i), d) &&
          !this.inserting &&
          (!r || this.shouldPreserveInheritedValues)
        )
          return;
        (this.cleanExistingReferenceValue(e, t, i, null), this.updateKeyValue(e, t, d));
        return;
      }
      if (ye(n)) {
        let d = typeof n.id == "string" && this.shouldReplaceObjectOnIdChange?.(n) ? n.id : void 0,
          c = K(i) ? _(i) : void 0,
          u = d !== void 0 && c !== void 0 && this.getCurrentValue(c, "id") !== d ? void 0 : c,
          h =
            u ??
            this._getIdFromObject(n) ??
            this.createStoreId(e, d === void 0 ? t : `${t}.${Li(d)}`),
          f = this.inserting;
        this.inserting = this.inserting || !u;
        try {
          (this.setObject(h, n), (!u || this.inserting) && this.updateKeyValue(e, t, Fe(h)));
        } finally {
          this.inserting = f;
        }
        return;
      }
      if (!Array.isArray(n)) {
        (i !== n || this.inserting || (r && !this.shouldPreserveInheritedValues)) &&
          (this.cleanExistingReferenceValue(e, t, i, n), this.updateKeyValue(e, t, n));
        return;
      }
      if (Wi(n) || (n.length === 0 && j(i))) {
        let d = j(i) ? _(i) : void 0,
          c = d ?? this.createStoreId(e, t),
          u = i === b,
          h = this.inserting;
        this.inserting = this.inserting || u;
        try {
          (this.setMergeableArray(c, n),
            (!d || this.inserting || (r && !this.shouldPreserveInheritedValues)) &&
              this.updateKeyValue(e, t, Ve(c)));
        } finally {
          this.inserting = h;
        }
        return;
      }
      (Ui(this.atomicArrays, n),
        typeof i == "string" && this.cleanExistingReferenceValue(e, t, i, n));
      let o = this.createStoreId(e, t),
        a = this.createAtomicArray(o, n);
      (!this.inserting &&
        (!r || this.shouldPreserveInheritedValues) &&
        Array.isArray(i) &&
        ht(a, i)) ||
        this.updateKeyValue(e, t, a);
    }
    setObjectKeyPath(e, t, n) {
      if (!t[0]) return;
      let r = e;
      for (let o = 0; o < t.length - 1; ++o) {
        let a = t[o],
          d = this.getCurrentRawValue(r, a),
          c = d === S ? this.base?.getCurrentValue(r, a) : d;
        if (c === b) {
          let u = Ra(t.slice(o + 1), n);
          this.setObjectKey(r, a, u);
          return;
        }
        if ((c || (this.setObjectKey(r, a, {}), (c = this.getCurrentValue(r, a))), !K(c))) {
          let u = t.slice(0, o + 1);
          throw new Error(`${u.join(".")} is not an object`);
        }
        (d === S && this.updateKeyValue(r, a, c),
          (r = _(c)),
          this.getCurrentValue(r, R) === b && this.setObjectKey(r, R, L));
      }
      let i = t[t.length - 1];
      this.setObjectKey(r, i, n);
    }
    getChildrenIds(e) {
      return this.hierarchy.getChildrenIds(e);
    }
    resolveOverlayHierarchy() {
      let e = [];
      for (let t = this; t; t = t.base) e.push(t);
      for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        (l(n, "base chain is missing a store"), n.base && n.hierarchy.resolveCycles(0));
      }
    }
    getChecksum(e) {
      return this.checksumIndex.getChecksum(e);
    }
    getAdditiveChecksum(e) {
      return (
        (this.additiveChecksumIndex ??= new Rt(this, Oi)),
        this.additiveChecksumIndex.getChecksum(e)
      );
    }
    getSubtreeIds(e) {
      let t = new Set();
      for (let n of e) this.collectSubtreeObject(n, t);
      return t;
    }
    collectSubtreeObject(e, t) {
      if (t.has(e)) return;
      t.add(e);
      let n = this.getLatest(e);
      if (!n) return;
      let r = Array.from(n.keys());
      if (r.length > 0) {
        let i = this.sortedArrayCache.isMergeableArray(e, n, r);
        for (let o of r)
          if (o !== R)
            if (i) this.collectSubtreeObject(o, t);
            else {
              let a = this.getCurrentValue(e, o);
              this.collectSubtreeValue(a, t);
            }
      }
      for (let i of this.hierarchy.getCachedChildrenIds(e)) this.collectSubtreeObject(i, t);
    }
    collectSubtreeValue(e, t) {
      if (K(e)) {
        this.collectSubtreeObject(_(e), t);
        return;
      }
      if (j(e)) {
        this.collectSubtreeObject(_(e), t);
        return;
      }
      if (Array.isArray(e)) for (let n of e) this.collectSubtreeValue(n, t);
    }
    getLatest(e) {
      return this.latest.getLatest(e);
    }
    has(e) {
      return this.latest.getLatest(e) !== void 0;
    }
    getObjectKey(e, t) {
      let n = this.getCurrentValue(e, t);
      if (this.getCurrentValue(e, R) !== b && n !== b) return this.getReferenceValue(n);
    }
    hasDefinedObjectKey(e, t) {
      let n = this.getCurrentValue(e, t);
      if (n === void 0 || n === b || this.getCurrentValue(e, R) === b) return !1;
      if (K(n)) {
        let r = _(n);
        return (
          (this.latest.getLatest(r) !== void 0 || this.hierarchy.getParentRowIdx(r) !== void 0) &&
          this.getCurrentValue(r, R) !== b
        );
      }
      return !0;
    }
    getReplayableValue(e, t) {
      return t === "parentid" ? this.hierarchy.getHierarchyKey(e) : this.getCurrentValue(e, t);
    }
    hasReplayableValue(e, t) {
      return t === "parentid"
        ? this.hierarchy.getHierarchyKey(e) !== void 0
        : this.latest.has(e, t);
    }
    getRawObjectKey(e, t) {
      let n = this.getCurrentValue(e, t);
      return this.latest.get(e, t) === void 0 ? we : n === b ? n : this.getReferenceValue(n);
    }
    getObject(e) {
      return (this.throwIfPermanentError(), this.getObjectInner(e));
    }
    getObjectWithShallowChildren(e, t) {
      return (this.throwIfPermanentError(), this.getObjectInner(e, t));
    }
    getObjectInner(e, t = 1 / 0, n = !1) {
      let r = [{ depth: 0, id: e, parent: void 0 }],
        i,
        o = new Set(),
        a = this.getRoot(),
        d = this.branchData.columns.value,
        c = {},
        u = (h, f) => {
          if (h === R || h === "children" || h === "parentid") return;
          let m = d.get(f);
          m !== b && (c[h] = this.getReferenceValue(m));
        };
      for (; r.length > 0;) {
        let { id: h, depth: f, parent: m } = r.pop();
        if (o.has(h)) continue;
        o.add(h);
        let y = this.latest.getLatest(h);
        if (!y && this.hierarchy.getParentRowIdx(h) === void 0) continue;
        if (this.base) {
          if (this.getCurrentValue(h, R) === b) continue;
        } else {
          let g = y?.ownGet(R);
          if (g !== void 0 && d.get(g) === b) continue;
        }
        if (n && i === void 0 && y?.has(Z)) {
          let g = this.getCurrentValue(h, Z);
          if (g !== void 0 && g !== b) return this.getReferenceValue(g);
        }
        let p = {};
        if ((i === void 0 && (i = p), m && m.children.push(p), h === a)) p.parentid = null;
        else {
          let g = this.getParentId(h);
          g && (p.parentid = g);
        }
        if (y) {
          if (this.base)
            for (let g of y.keys()) {
              if (g === R) continue;
              let I = this.getCurrentRawValueOrDoesNotExist(h, g);
              I === we ||
                I === b ||
                g === "children" ||
                g === "parentid" ||
                (p[g] = this.getReferenceValue(I));
            }
          else ((c = p), y.forEachOwn(u));
          if (f < t && y.has("children")) {
            let g = this.getChildrenIds(h);
            p.children = [];
            for (let I = g.length - 1; I >= 0; --I) {
              let w = g[I];
              this.isMaterializableNode(w) && r.push({ id: w, depth: f + 1, parent: p });
            }
          }
        }
      }
      return i;
    }
    getObjectKeys(e, t) {
      let n = this.latest.getLatest(e);
      if (!n) return [];
      let r = [];
      for (let i of n.keys()) t(i) && r.push(i);
      return r;
    }
    applyArrayEdits(e, t, n, r) {
      if (n.length === 0) return;
      let i = new Set(r),
        o = t.map((d) => this.getCurrentValue(e, d)),
        a = 0;
      for (let d of n) {
        let c = d.value;
        switch (d.operation) {
          case "delete":
            (o.splice(d.index + a, 1), i.has(d.value) || this.updateKeyValue(e, c, b), a--);
            break;
          case "insert": {
            let u = qn(o[d.index - 1], o[d.index], this.positionClientId);
            (this.updateKeyValue(e, c, u), o.splice(d.index, 0, u), a++);
            break;
          }
        }
      }
    }
    setMergeableArray(e, t) {
      let n = this.getMergeableArrayIds(e),
        r = !n;
      if (!n) {
        let a = this.latest.getLatest(e);
        if (a) for (let d of a.keys()) this.updateKeyValue(e, d, b);
        n = [];
      }
      (r || this.inserting) && this.updateKeyValue(e, R, L);
      let i = [];
      for (let a = 0; a < t.length; a++) {
        let d = this.resolveObjectInArrayReference(e, t[a], a);
        i.push(_(d));
      }
      let o = qi(n, i);
      if ((this.applyArrayEdits(e, n, o, i), this.inserting)) {
        let a = new Set(n);
        for (let d of i) {
          if (!a.has(d)) continue;
          let c = this.getCurrentValue(e, d);
          this.updateKeyValue(e, d, c);
        }
      }
    }
    getMergeableArrayItemPosition(e, t) {
      let n = this.getCurrentValue(e, this.createStoreId(e, t));
      return ce(n) ? n : void 0;
    }
    getMergeableArray(e) {
      let t = this.getLatest(e),
        n = t ? Array.from(t.keys()) : [];
      if (!this.sortedArrayCache.isMergeableArray(e, t, n))
        return this.base ? this.base.getMergeableArray(e) : void 0;
      let r = this.sortedArrayCache.getItemIds(e),
        i = [];
      for (let o of r) {
        let a = this.getObjectInner(o, 1 / 0, !0);
        a !== void 0 && i.push(a);
      }
      return i;
    }
    getMergeableArrayIds(e) {
      let t = this.getLatest(e),
        n = t ? Array.from(t.keys()) : [];
      return this.sortedArrayCache.isMergeableArray(e, t, n)
        ? this.sortedArrayCache.getItemIds(e)
        : this.base?.getMergeableArrayIds(e);
    }
    get length() {
      return this.branchData.columns.client.length;
    }
    static verifyBatches(e) {
      let t = new Map(),
        n = new Set();
      for (let r of e) {
        let i = Un(r);
        if (i) throw new Error(i);
        let o = r.branchId ?? v,
          a = `${o}/${Hn(r)}`;
        if (n.has(a)) continue;
        n.add(a);
        let d = t.get(r.client);
        d || ((d = new Map()), t.set(r.client, d));
        let c = d.get(o);
        c || ((c = new Map()), d.set(o, c));
        let u = c.get(r.batch) ?? 0;
        c.set(r.batch, u + 1);
      }
      for (let [r, i] of t)
        for (let [o, a] of i)
          for (let [d, c] of a) {
            let { rowCount: u } = or(d);
            l(
              u === c,
              () =>
                `Update row count does not match batch row count. Batch: ${d} Update count: ${c} Batch count: ${u}`
            );
          }
    }
    createBranchNodeChangeReader(e) {
      return (
        l(this.base, "Can't create a branch node change reader for a main store"),
        new Nt(this, e)
      );
    }
    get mainStore() {
      let e = this;
      for (; e.base;) e = e.base;
      return (l(e.branchId === v, "Expected root store to be the main branch"), e);
    }
    *childBranchIds() {
      for (let e of this.hierarchy.getCachedChildrenIds(me))
        e !== v && ur(this.mainStore, e) === this.branchId && (yield e);
    }
    compactBranch(e, t, n, r, i) {
      let o = new Set(),
        a = new Set(),
        d = !1;
      for (let h of this.childBranchIds()) {
        let f = this.branch(h);
        f.getHierarchy().resolveCycles(0);
        let m = new Set(),
          y = new Set(),
          p = f.compactBranch(e, m, y, r, i);
        d ||= p !== f;
        for (let g of m) o.add(g);
        for (let g of y) a.add(g);
      }
      if (!d && this.branchData.metadata.compactedLength === this.length) {
        ((this.branchData.metadata.compactedAt = r),
          e.branches.set(this.branchId, this.branchData),
          Ei(this, t, n));
        for (let h of o) t.add(h);
        for (let h of a) n.add(h);
        return this;
      }
      let c = new s({
          user: this.user,
          client: this.client,
          atomicArrays: this.atomicArrays,
          latestMap: this.latestMapType,
          onTiming: this.onTiming,
          branchId: this.branchId,
          base: this.base,
          table: e,
          extractIdFromObject: this.extractIdFromObject,
          shouldReplaceObjectOnIdChange: this.shouldReplaceObjectOnIdChange,
          writeAuthorizer: this.base ? void 0 : this.getWriteAuthorizer(),
          valueTransformer: this.valueTransformer,
          getTime: this.getTime,
        }),
        u = i ? this.branchData.metadata.compactedLength : this.length;
      (_t.run(this, c, u, o, a),
        (c.branchData.metadata.compactedAt = r),
        (c.branchData.metadata.compactedLength = c.length));
      for (let h of o) t.add(h);
      for (let h of a) n.add(h);
      return c;
    }
    compact(e = Date.now(), t = {}) {
      (l(this.branchId === v, "Cannot call compact on non main branches"),
        l(
          this.table.version === at,
          () => `Cannot compact a format ${this.table.version} document`
        ));
      let n = new J(this.table.version);
      return this.compactBranch(n, new Set(), new Set(), e, t.preserveConcurrencyWindow ?? !0);
    }
    toBuffer() {
      return this.table.toBuffer();
    }
    async writeToStream(e, t) {
      return this.table.writeToStream(e, t);
    }
    releaseColumnLookups() {
      this.table.releaseColumnLookups();
    }
  };
function Gi(s, e) {
  return e?.preserveRowOrigin
    ? (l(s.batch !== void 0, "A stored row batch is required to preserve its origin"), Kt(s.batch))
    : (s.origin ?? e?.origin ?? 0);
}
function Oa(s) {
  let e = new Map();
  for (let t of s) {
    if (t.key !== "parentid" || !ve(t.value) || !H(t.value)) continue;
    let n = B(t.value),
      r = e.get(n);
    r ? r.push(Q(t.value)) : e.set(n, [Q(t.value)]);
  }
  for (let t of e.values()) t.sort();
  return e;
}
var Vn = (s, e) => `${s}\0${e}`,
  Ta = (s) => s.length === 18 && s.startsWith("$$atomic-"),
  jn = (s) => typeof s == "string" && s.startsWith("aob(") && s.endsWith(")"),
  Yi = (s) => s.slice(4, -1);
function Ji(s, e) {
  return Fn(s, s.getObject(Yi(e)));
}
function Fn(s, e) {
  if (jn(e)) return Ji(s, e);
  if (Array.isArray(e)) return e.map((n) => Fn(s, n));
  if (typeof e != "object" || e === null) return e;
  let t = {};
  for (let n in e) t[n] = Fn(s, e[n]);
  return t;
}
function Ma(s) {
  let e = new J(s.version);
  e.branches = s.branches;
  let t = ft(new ne({ client: 0, user: "migration", table: e })),
    n = (o) => {
      let a = (d) => {
        o(d);
        for (let c of t.get(d.branchId) ?? []) s.branches.has(c) && a(d.branch(c));
      };
      a(new ne({ client: 0, user: "migration", table: e }));
    },
    r = new Map();
  n((o) => r.set(o.branchId, ka(o)));
  let i = !1;
  for (let [o, a] of r) {
    let d = s.branches.get(o);
    !d || a.length === 0 || (Na(o, d, a, s.version), (i = !0));
  }
  i && n(() => {});
}
function ka(s) {
  let e = [],
    t = s.branchData.columns;
  for (let n = 0; n < t.length; n++) {
    let r = t.value.get(n);
    if (!jn(r)) continue;
    let i = t.id.get(n),
      o = t.key.get(n);
    if (i.split(".").some(Ta) || s.latest.getOwn(i, o) !== n) continue;
    let a = Ji(s, r);
    if (!re(a)) continue;
    let d = xe(JSON.parse(JSON.stringify(a)));
    e.push({ id: i, key: o, value: d, referenceRow: n });
  }
  return e;
}
function Na(s, e, t, n) {
  let r = e.columns,
    i = new Set(t.map((c) => Vn(c.id, c.key))),
    o = new Set();
  for (let c = 0; c < r.length; c++) {
    let u = r.value.get(c);
    jn(u) && i.has(Vn(r.id.get(c), r.key.get(c))) && o.add(Yi(u));
  }
  let a = (c) => {
      for (let u = c.length; u > 0; u = c.lastIndexOf(".", u - 1))
        if (o.has(c.slice(0, u))) return !0;
      return !1;
    },
    d = new E(e.codec, s, n);
  for (let c = 0; c < r.length; c++) {
    let u = r.id.get(c);
    i.has(Vn(u, r.key.get(c))) || a(u) || d.addRow(e.getRow(c));
  }
  for (let c of t) d.addRow({ ...e.getRow(c.referenceRow), value: c.value });
  ((e.columns = d.columns),
    (e.minIndexCache = new U({ maxSize: 1e3 })),
    (e.hierarchyData = void 0),
    (e.metadata = { ...e.metadata, compactedLength: 0 }));
}
var Xi = {
  description:
    "Stores atomic objects inline as a single row instead of rows under an aob(...) reference",
  migrate: Ma,
};
function Da(s) {
  for (let e of s.branches.values())
    e.metadata.compactedLength === 0 && (e.metadata.compactedLength = e.columns.length);
}
var Zi = {
  description:
    "Marks branches that migration 17 -> 18 left without a compaction boundary as compacted",
  migrate: Da,
};
function Ba(s) {
  for (let e of s.branches.values()) {
    let t = e.manifest;
    ((e.manifest = new q()), e.buildManifest(), e.manifest.copyClientStateFrom(t));
  }
}
var Qi = {
  description:
    "Rebuilds branch manifests from their rows, dropping timestamps migration 17 -> 18 left behind",
  migrate: Ba,
};
var Ea = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
  za = (s, e, t, n) => (s === t ? e > n : s > t);
function _a(s) {
  if (!(typeof s != "string" || !s.startsWith("arr(") || !s.endsWith(")"))) return s.slice(4, -1);
}
function Ua(s, e) {
  let t = new J(s.version);
  t.branches = s.branches;
  let n = new ne({ client: 0, user: "migration", table: t }),
    r = ft(n),
    i = (o) => {
      e(o);
      for (let a of r.get(o.branchId) ?? []) s.branches.has(a) && i(o.branch(a));
    };
  i(n);
}
function qa(s, e, t) {
  ((s.columns = e.columns), (s.minIndexCache = new U({ maxSize: 1e3 })));
  let n = s.hierarchyData;
  if (n) {
    for (let i = 0; i < n.parentHistory.length; i++) n.parentHistory[i] = es(n.parentHistory[i], t);
    for (let i of n.parentOverrides.values())
      for (let o of i.values()) for (let a of o.values()) a.rowIdx = es(a.rowIdx, t);
  }
  s.metadata = { ...s.metadata, compactedLength: s.columns.length };
  let r = s.manifest;
  ((s.manifest = new q()), s.buildManifest(), s.manifest.copyClientStateFrom(r));
}
function es(s, e) {
  let t = e[s];
  return (l(t !== 0, () => `Hierarchy cache references removed row ${s}`), t - 1);
}
var Pa = new Set(["blockquote", "table", "tableRow", "bulletedList", "numberedList"]),
  La = new Set(),
  Kn = (s) => s.includes(".childNodes.");
function qe(s, e) {
  for (let t = s.length; t > 0; t = s.lastIndexOf(".", t - 1)) {
    let n = s.slice(0, t);
    if (e.has(n)) return n;
  }
}
var ts = (s) => s.slice(0, Math.max(0, s.lastIndexOf("."))),
  ns = (s, e) => qe(ts(s), e) !== void 0;
function rs(s, e) {
  if (e.has(s)) return s;
  if (s.includes(".childNodes")) return qe(s, e);
}
function is(s, e) {
  let t = new Set(),
    n = s.columns;
  l(n.id instanceof A, "Expected normalized id column in format 20");
  let r = n.id,
    i = r.rowCodes(),
    o = Array.from({ length: r.uniqueCount });
  for (let a = 0; a < r.uniqueCount; a++) o[a] = rs(r.unique(a), e);
  for (let a = 0; a < n.length; a++) {
    let d = o[i[a]];
    d && t.add(d);
  }
  return t;
}
function Ha(s, e, t) {
  let n = { units: new Map(), nodeIds: new Set() };
  if (s.getCurrentValue(e, "type") !== "richText" || s.getCurrentValue(e, R) === b) return n;
  let r = s.getCurrentValue(e, "variant"),
    i = typeof r == "string" && r.endsWith("Localized");
  if (!i && !t) return n;
  let o = s.getObject(e);
  if (!o) return n;
  let a = (d, c) => {
    n.nodeIds.add(c);
    let u = _a(s.getCurrentValue(c, "childNodes"));
    if (!(!Array.isArray(d.childNodes) || u === void 0))
      for (let h of d.childNodes) {
        if (!Ea(h) || typeof h.id != "string") continue;
        let f = `${u}.${h.id}`;
        i && !Pa.has(h.type)
          ? (l(Kn(f), () => `Unexpected rich-text unit id ${f}`), n.units.set(f, h))
          : a(h, f);
      }
  };
  return (a(o, e), n);
}
function Va(s, e) {
  let t = new Set([me]);
  for (let o of s.branches.keys()) o !== v && t.add(o);
  let n = new Map(),
    r = new Map();
  for (let [o, a] of s.branches) {
    let d = a.columns;
    l(d.id instanceof A, "Expected normalized id column in format 20");
    let c = d.id,
      u = c.rowCodes(),
      h = new Uint8Array(c.uniqueCount);
    for (let g = 0; g < c.uniqueCount; g++) {
      let I = c.unique(g),
        w = t.has(I) || rs(I, e) !== void 0;
      h[g] = w ? 1 : 0;
    }
    let f = new Uint32Array(d.length),
      m = 0;
    for (let g = 0; g < d.length; g++) h[u[g]] !== 0 && (f[g] = ++m);
    let y = new E(a.codec, o, s.version);
    (y.columns.copySelectedRowsFrom(d, f, m),
      (y.metadata = { ...a.metadata, compactedLength: m }),
      y.buildManifest(),
      y.manifest.copyClientStateFrom(a.manifest),
      n.set(o, y));
    let p = new Uint32Array(m);
    for (let g = 0; g < d.length; g++) {
      let I = f[g];
      I !== 0 && (p[I - 1] = g);
    }
    r.set(o, p);
  }
  let i = n.get(v);
  return (
    l(i, "Planning document must have a main branch"),
    { document: { version: s.version, branches: n, main: i }, originalRowByScratchRow: r }
  );
}
function Fa(s) {
  let e = ja(s);
  if (e.size === 0) return "unchanged";
  let t = !1;
  for (let d of s.branches.values()) {
    let c = d.columns;
    for (let u = 0; u < c.length; u++) {
      if (c.key.get(u) !== "variant" || !e.has(c.id.get(u))) continue;
      let h = c.value.get(u);
      if (typeof h == "string" && h.endsWith("Localized")) {
        t = !0;
        break;
      }
    }
    if (t) break;
  }
  if (!t) return "unchanged";
  let n = new Map(),
    r = Va(s, e),
    i = (d, c) => {
      for (let u = d; u; u = u.base) {
        let h = n.get(u.branchId)?.packedIdsByDocumentId.get(c);
        if (h) return h;
      }
      return La;
    };
  Ua(r.document, (d) => {
    let c = s.branches.get(d.branchId);
    l(c, () => `Missing original branch ${d.branchId}`);
    let u = r.originalRowByScratchRow.get(d.branchId);
    (l(u, () => `Missing row map for branch ${d.branchId}`),
      n.set(
        d.branchId,
        Ka(d, c, u, e, (h) => i(d.base, h))
      ));
  });
  let o = new Set();
  for (let [d, c] of s.branches) {
    let u = n.get(d)?.unsafeDocumentIds ?? is(c, e);
    for (let h of u) o.add(h);
  }
  let a = !1;
  for (let [d, c] of n) {
    let u = s.branches.get(d);
    u && (a = $a(d, u, c, o, s.version) || a);
  }
  return a ? void 0 : "unchanged";
}
function ja(s) {
  let e = new Set();
  for (let t of s.branches.values()) {
    let n = t.columns;
    for (let r = 0; r < n.length; r++)
      n.key.get(r) === "type" && n.value.get(r) === "richText" && e.add(n.id.get(r));
  }
  for (let t of e) ns(t, e) && e.delete(t);
  return e;
}
function Ka(s, e, t, n, r) {
  let i = s.branchData.columns;
  l(i.id instanceof A, "Expected normalized id column in format 20");
  let o = i.id,
    a = o.rowCodes(),
    d = {
      packedIdsByDocumentId: new Map(),
      units: [],
      retainedRows: new Set(),
      unsafeDocumentIds: new Set(),
    },
    c = new Map(),
    u = new Map(),
    h = (p) => {
      let g = u.get(p);
      return (g || ((g = { newestContentRow: -1, keepRow: -1 }), u.set(p, g)), g);
    };
  for (let p of s.base ? is(e, n) : n) {
    let g = r(p),
      I = Ha(s, p, g.size > 0);
    if (!(I.units.size === 0 && g.size === 0)) {
      c.set(p, I);
      for (let w of I.units.keys()) h(w);
      for (let w of g) h(w);
    }
  }
  if (c.size === 0) return d;
  let f = new Array(o.uniqueCount).fill(null);
  for (let p = 0; p < o.uniqueCount; p++) {
    let g = o.unique(p);
    Kn(g) && (f[p] = qe(g, u) ?? null);
  }
  let m = new Map(),
    y = (p) => {
      let g = m.get(p);
      return (g === void 0 && ((g = qe(ts(p), u) ?? null), m.set(p, g)), g);
    };
  for (let p = 0; p < i.length; p++) {
    let g = i.id.get(p),
      I = f[a[p]];
    if (I == null) continue;
    let w = i.key.get(p);
    if (s.latest.getOwn(g, w) !== p) continue;
    let x = i.value.get(p) !== S;
    for (let C = I; C !== null; C = y(C)) {
      let O = h(C);
      if (w === R && g === C) O.keepRow = p;
      else if (x) {
        let D = O.newestContentRow;
        (D === -1 || za(i.seq.get(p), i.client.get(p), i.seq.get(D), i.client.get(D))) &&
          (O.newestContentRow = p);
      }
    }
  }
  for (let [p, g] of c) {
    let I = r(p);
    if (
      [...I].some(
        (C) => qe(C, g.units) === void 0 && (g.nodeIds.has(C) || h(C).newestContentRow !== -1)
      )
    ) {
      d.unsafeDocumentIds.add(p);
      continue;
    }
    let x = new Set(I);
    for (let [C, O] of g.units) {
      let D = h(C).newestContentRow;
      if (D === -1) continue;
      let Ft = xe(JSON.parse(JSON.stringify(O))),
        Le = t[D];
      (l(Le !== void 0, () => `Missing original carrier row ${D}`),
        d.units.push({ id: C, documentId: p, value: Ft, carrierRow: Le }),
        x.add(C));
    }
    for (let C of x) {
      let O = h(C).keepRow;
      if (O !== -1 && !ns(C, x)) {
        let D = t[O];
        (l(D !== void 0, () => `Missing original keep row ${O}`), d.retainedRows.add(D));
      }
    }
    d.packedIdsByDocumentId.set(p, x);
  }
  return d;
}
function $a(s, e, t, n, r) {
  let i = new Set();
  for (let [y, p] of t.packedIdsByDocumentId) if (!n.has(y)) for (let g of p) i.add(g);
  if (i.size === 0) return !1;
  let o = t.units.filter((y) => !n.has(y.documentId)),
    a = e.columns;
  l(a.id instanceof A, "Expected normalized id column in format 20");
  let d = a.id,
    c = d.rowCodes(),
    u = new Uint8Array(d.uniqueCount);
  for (let y = 0; y < d.uniqueCount; y++) {
    let p = d.unique(y);
    Kn(p) && qe(p, i) && (u[y] = 1);
  }
  let h = new Uint32Array(a.length),
    f = 0;
  for (let y = 0; y < a.length; y++) {
    let p = a.id.get(y);
    if (u[c[y]] !== 0 && !t.retainedRows.has(y)) {
      l(a.key.get(y) !== "parentid", () => `Cannot remove a parentid row while packing ${p}`);
      continue;
    }
    h[y] = ++f;
  }
  if (o.length === 0 && f === a.length) return !1;
  let m = new E(e.codec, s, r);
  m.columns.copySelectedRowsFrom(e.columns, h, f);
  for (let y of o) m.addRow({ ...e.getRow(y.carrierRow), id: y.id, key: Z, value: y.value });
  return (qa(e, m, h), !0);
}
var ss = {
  description: "Stores each content unit of localized rich-text documents as a single row",
  migrate: Fa,
};
var Wa = (s) => typeof s == "object" && s !== null && !Array.isArray(s);
function Ga(s) {
  return $n(s);
}
function $n(s) {
  if (s === null || typeof s == "string" || typeof s == "boolean") return s;
  if (typeof s == "number")
    return (
      l(Number.isFinite(s), () => `Inline atomic values only support finite numbers, got ${s}`),
      s === 0 ? 0 : s
    );
  if (Array.isArray(s))
    return s.map(
      (t) => (l(t !== void 0, "Inline atomic values can't contain undefined array items"), $n(t))
    );
  l(Ya(s), () => `Inline atomic values only support plain JSON, got ${String(s)}`);
  let e = {};
  for (let t in s) {
    let n = s[t];
    n !== void 0 && (e[t] = $n(n));
  }
  return e;
}
function Ya(s) {
  if (typeof s != "object" || s === null) return !1;
  let e = Object.getPrototypeOf(s);
  return e === Object.prototype || e === null;
}
var ds = (s, e, t, n) => (s === t ? e > n : s > t);
function Ja(s, e) {
  (l(s.branchId === v, "Effective base ids must be resolved against the main store"),
    l(e !== v, "Main has no base"));
  let t = os(s, e);
  if (t.baseId === v) return t.baseId;
  let n = t,
    r = t.baseId,
    i = new Set();
  for (; r !== e;) {
    if (r === v || i.has(r)) return t.baseId;
    i.add(r);
    let o = os(s, r);
    (Xa(o, n) && (n = o), (r = o.baseId));
  }
  return n.branchId === e ? v : t.baseId;
}
function os(s, e) {
  let t = s.latest.get(e, Jn);
  l(t !== void 0, () => `Branch ${e} does not exist`);
  let n = s.branchData.columns,
    r = n.value.get(t);
  return (
    l(r !== b, () => `Branch ${e} does not exist`),
    l(typeof r == "string" && r.length > 0, () => `Invalid baseId value for branch: ${e}`),
    { branchId: e, baseId: r, seq: n.seq.get(t), client: n.client.get(t) }
  );
}
function Xa(s, e) {
  return ds(e.seq, e.client, s.seq, s.client);
}
function Za(s) {
  l(s.branchId === v, "Child branch ids must be resolved against the main store");
  let e = new Map();
  for (let t of s.getChildrenIds(me)) {
    if (t === v) continue;
    let n = Ja(s, t),
      r = e.get(n);
    r ? r.push(t) : e.set(n, [t]);
  }
  return e;
}
function Qa(s) {
  if (!(typeof s != "string" || !s.startsWith("arr(") || !s.endsWith(")"))) return s.slice(4, -1);
}
function ed(s, e) {
  let t = new J(s.version);
  t.branches = s.branches;
  let n = new ne({ client: 0, user: "migration", table: t }),
    r = Za(n),
    i = (o) => {
      e(o);
      for (let a of r.get(o.branchId) ?? []) s.branches.has(a) && i(o.branch(a));
    };
  i(n);
}
function td(s, e, t) {
  ((s.columns = e.columns), (s.minIndexCache = new U({ maxSize: 1e3 })));
  let n = s.hierarchyData;
  if (n) {
    for (let i = 0; i < n.parentHistory.length; i++) n.parentHistory[i] = as(n.parentHistory[i], t);
    for (let i of n.parentOverrides.values())
      for (let o of i.values()) for (let a of o.values()) a.rowIdx = as(a.rowIdx, t);
  }
  s.metadata = { ...s.metadata, compactedLength: s.columns.length };
  let r = s.manifest;
  ((s.manifest = new q()), s.buildManifest(), s.manifest.copyClientStateFrom(r));
}
function as(s, e) {
  let t = e[s];
  return (l(t !== 0, () => `Hierarchy cache references removed row ${s}`), t - 1);
}
var nd = new Set(["blockquote", "table", "tableRow", "bulletedList", "numberedList"]),
  rd = new Set(),
  Wn = (s) => s.includes(".childNodes.");
function Pe(s, e) {
  for (let t = s.length; t > 0; t = s.lastIndexOf(".", t - 1)) {
    let n = s.slice(0, t);
    if (e.has(n)) return n;
  }
}
var cs = (s) => s.slice(0, Math.max(0, s.lastIndexOf("."))),
  us = (s, e) => Pe(cs(s), e) !== void 0;
function hs(s, e) {
  if (e.has(s)) return s;
  if (s.includes(".childNodes")) return Pe(s, e);
}
function ls(s, e) {
  let t = new Set(),
    n = s.columns;
  l(n.id instanceof A, "Expected normalized id column in format 21");
  let r = n.id,
    i = r.rowCodes(),
    o = Array.from({ length: r.uniqueCount });
  for (let a = 0; a < r.uniqueCount; a++) o[a] = hs(r.unique(a), e);
  for (let a = 0; a < n.length; a++) {
    let d = o[i[a]];
    d && t.add(d);
  }
  return t;
}
function id(s, e, t) {
  let n = { units: new Map(), nodeIds: new Set() };
  if (s.getCurrentValue(e, "type") !== "richText" || s.getCurrentValue(e, R) === b) return n;
  let r = s.getCurrentValue(e, "variant"),
    i = r === "collectionControlProp" || (typeof r == "string" && r.endsWith("Localized"));
  if (!i && !t) return n;
  let o = s.getObject(e);
  if (!o) return n;
  let a = (d, c) => {
    n.nodeIds.add(c);
    let u = Qa(s.getCurrentValue(c, "childNodes"));
    if (!(!Array.isArray(d.childNodes) || u === void 0))
      for (let h of d.childNodes) {
        if (!Wa(h) || typeof h.id != "string") continue;
        let f = `${u}.${h.id}`;
        i && !nd.has(h.type)
          ? (l(Wn(f), () => `Unexpected rich-text unit id ${f}`), n.units.set(f, h))
          : a(h, f);
      }
  };
  return (a(o, e), n);
}
function sd(s, e) {
  let t = new Set([me]);
  for (let o of s.branches.keys()) o !== v && t.add(o);
  let n = new Map(),
    r = new Map();
  for (let [o, a] of s.branches) {
    let d = a.columns;
    l(d.id instanceof A, "Expected normalized id column in format 21");
    let c = d.id,
      u = c.rowCodes(),
      h = new Uint8Array(c.uniqueCount);
    for (let g = 0; g < c.uniqueCount; g++) {
      let I = c.unique(g),
        w = t.has(I) || hs(I, e) !== void 0;
      h[g] = w ? 1 : 0;
    }
    let f = new Uint32Array(d.length),
      m = 0;
    for (let g = 0; g < d.length; g++) h[u[g]] !== 0 && (f[g] = ++m);
    let y = new E(a.codec, o, s.version);
    (y.columns.copySelectedRowsFrom(d, f, m),
      (y.metadata = { ...a.metadata, compactedLength: m }),
      y.buildManifest(),
      y.manifest.copyClientStateFrom(a.manifest),
      n.set(o, y));
    let p = new Uint32Array(m);
    for (let g = 0; g < d.length; g++) {
      let I = f[g];
      I !== 0 && (p[I - 1] = g);
    }
    r.set(o, p);
  }
  let i = n.get(v);
  return (
    l(i, "Planning document must have a main branch"),
    { document: { version: s.version, branches: n, main: i }, originalRowByScratchRow: r }
  );
}
function od(s) {
  let e = ad(s);
  if (e.size === 0) return "unchanged";
  let t = new Map(),
    n = sd(s, e),
    r = (a, d) => {
      for (let c = a; c; c = c.base) {
        let u = t.get(c.branchId)?.packedIdsByDocumentId.get(d);
        if (u) return u;
      }
      return rd;
    };
  ed(n.document, (a) => {
    let d = s.branches.get(a.branchId);
    l(d, () => `Missing original branch ${a.branchId}`);
    let c = n.originalRowByScratchRow.get(a.branchId);
    (l(c, () => `Missing row map for branch ${a.branchId}`),
      t.set(
        a.branchId,
        dd(a, d, c, e, (u) => r(a.base, u))
      ));
  });
  let i = new Set();
  for (let [a, d] of s.branches) {
    let c = t.get(a)?.unsafeDocumentIds ?? ls(d, e);
    for (let u of c) i.add(u);
  }
  let o = !1;
  for (let [a, d] of t) {
    let c = s.branches.get(a);
    c && (o = cd(a, c, d, i, s.version) || o);
  }
  return o ? void 0 : "unchanged";
}
function ad(s) {
  let e = new Set(),
    t = new Set();
  for (let n of s.branches.values()) {
    let r = n.columns;
    for (let i = 0; i < r.length; i++)
      (r.key.get(i) === "variant" &&
        r.value.get(i) === "collectionControlProp" &&
        t.add(r.id.get(i)),
        r.key.get(i) === "type" && r.value.get(i) === "richText" && e.add(r.id.get(i)));
  }
  for (let n of e) us(n, e) && e.delete(n);
  for (let n of e) t.has(n) || e.delete(n);
  return e;
}
function dd(s, e, t, n, r) {
  let i = s.branchData.columns;
  l(i.id instanceof A, "Expected normalized id column in format 21");
  let o = i.id,
    a = o.rowCodes(),
    d = {
      packedIdsByDocumentId: new Map(),
      units: [],
      retainedRows: new Set(),
      unsafeDocumentIds: new Set(),
    },
    c = new Map(),
    u = new Map(),
    h = (p) => {
      let g = u.get(p);
      return (g || ((g = { newestContentRow: -1, keepRow: -1 }), u.set(p, g)), g);
    };
  for (let p of s.base ? ls(e, n) : n) {
    let g = r(p),
      I = id(s, p, g.size > 0);
    if (!(I.units.size === 0 && g.size === 0)) {
      c.set(p, I);
      for (let w of I.units.keys()) h(w);
      for (let w of g) h(w);
    }
  }
  if (c.size === 0) return d;
  let f = new Array(o.uniqueCount).fill(null);
  for (let p = 0; p < o.uniqueCount; p++) {
    let g = o.unique(p);
    Wn(g) && (f[p] = Pe(g, u) ?? null);
  }
  let m = new Map(),
    y = (p) => {
      let g = m.get(p);
      return (g === void 0 && ((g = Pe(cs(p), u) ?? null), m.set(p, g)), g);
    };
  for (let p = 0; p < i.length; p++) {
    let g = i.id.get(p),
      I = f[a[p]];
    if (I == null) continue;
    let w = i.key.get(p);
    if (s.latest.getOwn(g, w) !== p) continue;
    let x = i.value.get(p) !== S;
    for (let C = I; C !== null; C = y(C)) {
      let O = h(C);
      if (w === R && g === C) O.keepRow = p;
      else if (x) {
        let D = O.newestContentRow;
        (D === -1 || ds(i.seq.get(p), i.client.get(p), i.seq.get(D), i.client.get(D))) &&
          (O.newestContentRow = p);
      }
    }
  }
  for (let [p, g] of c) {
    let I = r(p);
    if (
      [...I].some(
        (C) => Pe(C, g.units) === void 0 && (g.nodeIds.has(C) || h(C).newestContentRow !== -1)
      )
    ) {
      d.unsafeDocumentIds.add(p);
      continue;
    }
    let x = new Set(I);
    for (let [C, O] of g.units) {
      let D = h(C).newestContentRow;
      if (D === -1) continue;
      let Ft = Ga(JSON.parse(JSON.stringify(O))),
        Le = t[D];
      (l(Le !== void 0, () => `Missing original carrier row ${D}`),
        d.units.push({ id: C, documentId: p, value: Ft, carrierRow: Le }),
        x.add(C));
    }
    for (let C of x) {
      let O = h(C).keepRow;
      if (O !== -1 && !us(C, x)) {
        let D = t[O];
        (l(D !== void 0, () => `Missing original keep row ${O}`), d.retainedRows.add(D));
      }
    }
    d.packedIdsByDocumentId.set(p, x);
  }
  return d;
}
function cd(s, e, t, n, r) {
  let i = new Set();
  for (let [y, p] of t.packedIdsByDocumentId) if (!n.has(y)) for (let g of p) i.add(g);
  if (i.size === 0) return !1;
  let o = t.units.filter((y) => !n.has(y.documentId)),
    a = e.columns;
  l(a.id instanceof A, "Expected normalized id column in format 21");
  let d = a.id,
    c = d.rowCodes(),
    u = new Uint8Array(d.uniqueCount);
  for (let y = 0; y < d.uniqueCount; y++) {
    let p = d.unique(y);
    Wn(p) && Pe(p, i) && (u[y] = 1);
  }
  let h = new Uint32Array(a.length),
    f = 0;
  for (let y = 0; y < a.length; y++) {
    let p = a.id.get(y);
    if (u[c[y]] !== 0 && !t.retainedRows.has(y)) {
      l(a.key.get(y) !== "parentid", () => `Cannot remove a parentid row while packing ${p}`);
      continue;
    }
    h[y] = ++f;
  }
  if (o.length === 0 && f === a.length) return !1;
  let m = new E(e.codec, s, r);
  m.columns.copySelectedRowsFrom(e.columns, h, f);
  for (let y of o) m.addRow({ ...e.getRow(y.carrierRow), id: y.id, key: Z, value: y.value });
  return (td(e, m, h), !0);
}
var fs = {
  description: "Stores each content unit of CMS rich-text documents as a single row",
  migrate: od,
};
var ms = { migrate() {}, description: "Dummy migration. Does nothing" };
var Ie = {
  m1_2: pr,
  m2_3: br,
  m3_4: Dr,
  m4_5: Er,
  m5_6: Ur,
  m6_7: qr,
  m7_8: Pr,
  m8_9: Hr,
  m9_10: ms,
  m10_11: ri,
  m11_12: yi,
  m12_13: bi,
  m13_14: Ii,
  m14_15: wi,
  m15_16: gn,
  m16_17: hi,
  m17_18: Xi,
  m18_19: Zi,
  m19_20: Qi,
  m20_21: ss,
  m21_22: fs,
  m22_23: In,
};
l(
  Ie[`m${tt - 1}_${tt}`] === gn,
  "Delta seq migration not registered at the DELTA_SEQ_SCHEMA_VERSION boundary"
);
l(
  Ie[`m${nt - 1}_${nt}`] === In,
  "Own references migration not registered at the OWN_REFERENCES_SCHEMA_VERSION boundary"
);
var at = Object.keys(Ie).reduce((s, e) => {
  let [, t] = e.split("_");
  l(typeof t == "string", () => `Invalid migration key: ${e}`);
  let n = Number.parseInt(t, 10);
  return (l(Number.isFinite(n), () => `Invalid migration version: ${e}`), Math.max(s, n));
}, Number.NEGATIVE_INFINITY);
l(Number.isFinite(at), "No migrations found");
var ud = {
  RootNode: !0,
  AgentSkillsListNode: !0,
  AgentSkillNode: !0,
  FrameNode: !0,
  ShapeContainerNode: !0,
  CanvasPageNode: !0,
  DesignPageNode: !0,
  PathNode: !0,
  BooleanShapeNode: !0,
  SVGNode: !0,
  TextNode: !0,
  RichTextNode: !0,
  RectangleShapeNode: !0,
  OvalShapeNode: !0,
  OverlayNode: !0,
  PolygonShapeNode: !0,
  StarShapeNode: !0,
  ShapeGroupNode: !0,
  SmartComponentNode: !0,
  WebPageNode: !0,
  CodeComponentNode: !0,
  ColorStyleTokenListNode: !0,
  ColorStyleTokenNode: !0,
  ErrorListNode: !0,
  ErrorNode: !0,
  ExternalModuleNode: !0,
  ExternalModulesListNode: !0,
  LocalModulesListNode: !0,
  LocalModuleNode: !0,
  ContentManagementNode: !0,
  CollectionNode: !0,
  CollectionItemNode: !0,
  ComponentPresetNode: !0,
  PresetsListNode: !0,
  BlockquoteStylePresetNode: !0,
  TableStylePresetNode: !0,
  TextStylePresetNode: !0,
  LinkStylePresetNode: !0,
  InlineCodeStylePresetNode: !0,
  ImageStylePresetNode: !0,
  RoutesNode: !0,
  RedirectRouteNode: !0,
  RewriteRouteNode: !0,
  RouteSegmentNode: !0,
  RouteSegmentRootNode: !0,
  FormPlainTextInputNode: !0,
  FormBooleanInputNode: !0,
  FormSelectNode: !0,
  ProxyRouteNode: !0,
  LayoutTemplateNode: !0,
  SlotNode: !0,
  SlotPropertyNode: !0,
  EntityFolderNode: !0,
  EntityReferenceNode: !0,
  AssetsEntityTypeRootNode: !0,
  FunnelsEntityTypeRootNode: !0,
  AbTestsEntityTypeRootNode: !0,
  ContentManagementEntityTypeRootNode: !0,
  DesignPageEntityTypeRootNode: !0,
  VectorSetNode: !0,
  AnalyticsScopeNode: !0,
  FunnelNode: !0,
  FunnelStepNode: !0,
  FunnelStepActionNode: !0,
  LocalizationGlossaryNode: !0,
  LocalizationGlossaryItemNode: !0,
  HeaderRouteNode: !0,
  FirewallRouteNode: !0,
  BranchesNode: !0,
  BranchNode: !0,
  CustomCodeScopeNode: !0,
  CustomCodeNode: !0,
  ShaderNode: !0,
  DatabaseListNode: !0,
  DatabaseNode: !0,
  DatabaseTableNode: !0,
  SharedEnumListNode: !0,
  SharedEnumNode: !0,
};
function hd(s) {
  return s in ud;
}
var ld = (s) => (typeof s.__class == "string" && hd(s.__class) ? s.id : void 0);
function Ym(s, e = lr(), t = {}) {
  return new ne({
    atomicArrays: "strict",
    latestMap: "map",
    valueTransformer: (n, r) => (mr(r) ? dr(r) : r),
    ...t,
    client: e,
    user: s,
    extractIdFromObject: ld,
  });
}
function fd(s) {
  return s !== void 0 ? { ok: !0, value: s } : { ok: !0 };
}
function md(s) {
  return { ok: !1, error: s };
}
function Xm(s) {
  return s.then(
    (e) => fd(e),
    (e) => md(e)
  );
}
export {
  fd as a,
  md as b,
  Xm as c,
  ce as d,
  z as e,
  V as f,
  E as g,
  it as h,
  Lh as i,
  Hh as j,
  El as k,
  Pn as l,
  Ln as m,
  va as n,
  Ki as o,
  J as p,
  fe as q,
  $i as r,
  ne as s,
  at as t,
  Ym as u,
};
//# sourceMappingURL=chunk-TXURVBNK.mjs.map
