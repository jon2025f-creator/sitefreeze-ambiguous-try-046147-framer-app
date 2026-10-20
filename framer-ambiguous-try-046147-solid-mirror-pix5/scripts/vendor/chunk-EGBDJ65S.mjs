import {
  a as Dr,
  b as oe,
  c as We,
  d as Br,
  e as Er,
  f as y,
  g as B,
  h as Ye,
  i as b,
  j as w,
  k,
  l as C,
  m as S,
  n as x,
  o as v,
} from "chunk-3WES2374.mjs";
import { a as kr } from "chunk-VBCXFFMV.mjs";
import {
  a as he,
  b as Y,
  c as P,
  d as Je,
  f as Xe,
  g as Ze,
  h as zr,
  i as qr,
  j as Qe,
  k as Ne,
  l as Lr,
} from "chunk-QLY23OII.mjs";
import { a as I, b as Ge, c as _r } from "chunk-WOUQLJ5W.mjs";
import { b as l } from "chunk-4JY5UMT2.mjs";
var Ri = ["client", "seq", "id", "key", "value", "user"],
  Bt = class {
    encode(e, t) {
      let r = e.main;
      for (let n of Ri) {
        let i = r.columns[n];
        (t.writeString(n), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let r = e.main;
      for (; !t.endOfFile();) {
        let n = t.readString(),
          i = r.columns[n];
        l(i, () => `Column ${n} not found`);
        let o = t.readString();
        (l(o === i.type, () => `Column type does not match: ${o} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = S(e.value) ? v(e.value) : e.value;
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
        C(t) && (t = x(t)),
        { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user }
      );
    }
  },
  Pr = { description: "Sets up migration with initial codec", migrate() {}, codec: new Bt() };
var et = "$deleted",
  Et = "$keep_value";
function Ai(s) {
  let e = s.main.columns,
    t = new Set(),
    r = Ti(e);
  for (let n = 0; n < r.length; n++) {
    let i = r[n],
      o = e.key.get(i),
      a = e.id.get(i),
      c = e.client.get(i);
    if (o === "parentid") {
      let u = e.value.get(i);
      if (u === null) {
        e.id._set(i, et);
        continue;
      }
      if ((l(typeof u == "string", () => `parentid is not a string for row: ${i}`), _t(u)))
        continue;
      let f = new Map(),
        p;
      for (let m = n + 1; m < r.length; m++) {
        let g = r[m];
        if (e.client.get(g) !== c) continue;
        let N = e.seq.get(g);
        if (p !== void 0 && N > p) break;
        let M = e.key.get(g),
          G = e.id.get(g),
          se = e.value.get(g);
        if (t.has(g) || typeof M != "number" || G !== `${u}.children` || se === et || se === Et)
          continue;
        p === void 0 && (p = N);
        let ce = Ur(se);
        (l(ce, () => `should be a valid object reference: ${JSON.stringify(se)}`),
          ce === a ? e.value._set(i, Hr(u, M)) : f.set(ce, M),
          t.add(g));
      }
      for (let m of f.keys()) {
        let g;
        for (let R = n + 1; R < r.length; R++) {
          let N = r[R];
          if (e.client.get(N) !== c) continue;
          let G = e.id.get(N),
            se = e.key.get(N),
            ce = e.value.get(N);
          if (!(G !== m || se !== "parentid" || ce !== u)) {
            if (_t(ce)) break;
            g = N;
            break;
          }
        }
        (l(g !== void 0, () => `failed to find parentid row for ${m}`),
          e.value._set(g, Hr(u, f.get(m))));
      }
      continue;
    }
    if (o === "children") {
      e.value._set(i, Et);
      continue;
    }
    let d = e.value.get(i);
    if (a.endsWith(".children") && d === Et) {
      t.add(i);
      continue;
    }
    if (a.endsWith(".children") && d === et) {
      t.add(i);
      continue;
    }
    let h = Ur(d);
    if (!t.has(i) && a.endsWith(".children") && h && typeof o == "number") {
      let u = e.seq.get(i),
        f = !1;
      for (let p = n + 1; p < r.length; p++) {
        let m = r[p];
        if (e.client.get(m) !== c) continue;
        if (e.seq.get(m) !== u) break;
        let N = e.key.get(m),
          M = e.id.get(m);
        if (N !== "parentid" || M !== h) continue;
        let G = e.value.get(m);
        if (
          !_t(G) &&
          (l(typeof G == "string", () => `expecting value to be a string for rowIdx ${m}`),
          a.startsWith(G))
        ) {
          ((f = !0), e.value._set(m, `${G}@${o}`), t.add(i));
          break;
        }
      }
      if (!f) {
        let p = a.split(".", 2)[0];
        (e.id._set(i, h), e.key._set(i, "parentid"), e.value._set(i, `${p}@${o}`));
      }
    }
  }
  for (let n of t) e.id.get(n).endsWith(".children") && e.id._set(n, et);
}
var Vr = {
  description: "Migrates multi-seq rows for hierarchy changes to `{parentid}@{position}`",
  migrate: Ai,
};
function Ti(s) {
  let e = [];
  for (let t = 0; t < s.client.length; t++) {
    let r = s.key.get(t);
    if (r === "parentid" || r === "children") {
      e.push(t);
      continue;
    }
    s.id.get(t).endsWith(".children") && e.push(t);
  }
  return (
    e.sort((t, r) => {
      let n = s.seq.get(t),
        i = s.seq.get(r);
      return n === i ? s.client.get(t) - s.client.get(r) : n - i;
    }),
    e
  );
}
function _t(s) {
  return typeof s == "string" && s.split("@").length === 2;
}
function Hr(s, e) {
  return `${s}@${e.toString()}`;
}
function Ur(s) {
  if (typeof s == "string" && s.startsWith("obj(")) return s.slice(4, -1);
}
function ke(s) {
  if (s === Uint8Array) return "U8";
  if (s === Uint16Array) return "U16";
  if (s === Uint32Array) return "U32";
  if (s === Float64Array) return "F64";
  throw new Error("Invalid array name");
}
var ue = class {
  constructor(e, t, r) {
    this.capacity = e;
    r
      ? ((this.buffer = r.buffer),
        (this.length = r.length),
        l(
          this.buffer.length === this.capacity,
          () => `Buffer capacity mismatch: ${this.buffer.length} != ${this.capacity}`
        ))
      : (this.buffer = new t(e));
  }
  capacity;
  buffer;
  length = 0;
  push(e) {
    ((this.buffer[this.length] = e), (this.length += 1));
  }
};
var Z = 2 ** 17,
  H = class {
    constructor(e, t = Z, r) {
      this.arrayConstructor = e;
      this.bucketSize = t;
      this.name = r;
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
      return `BucketedColumn(${ke(this.arrayConstructor)})`;
    }
    add(e) {
      let t = this.buckets[this.buckets.length - 1];
      ((!t || t.length >= t.capacity) &&
        ((t = new ue(this.bucketSize, this.arrayConstructor)), this.buckets.push(t)),
        t.push(e));
      let r = this._length;
      return ((this._length += 1), r);
    }
    addMany(e) {
      let t = this._length,
        r = 0;
      for (; r < e.length;) {
        let n = this.buckets[this.buckets.length - 1];
        (!n || n.length >= n.capacity) &&
          ((n = new ue(this.bucketSize, this.arrayConstructor)), this.buckets.push(n));
        let i = Math.min(e.length - r, n.capacity - n.length);
        for (let o = 0; o < i; o++) n.buffer[n.length + o] = e[r + o];
        ((n.length += i), (r += i));
      }
      return ((this._length += e.length), t);
    }
    get(e) {
      l(e >= 0 && e < this._length, () => this.outOfBoundsMessage(e));
      let t = e >> this.bucketShift,
        r = e & this.bucketMask,
        n = this.buckets[t];
      return (l(n, "invalid bucket index"), n.buffer[r]);
    }
    _set(e, t) {
      l(e >= 0 && e < this._length, () => this.outOfBoundsMessage(e));
      let r = e >> this.bucketShift,
        n = e & this.bucketMask,
        i = this.buckets[r];
      (l(i, "invalid bucket index"), (i.buffer[n] = t));
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
        this.buckets.push(new ue(this.bucketSize, this.arrayConstructor));
      let r = 0;
      for (let n = 0; n < t; n++) {
        let i = this.buckets[n],
          o = e - r,
          a = o < i.capacity ? o : i.capacity;
        (yield i.buffer.subarray(0, a), (i.length = a), (r += a));
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
      let r = e >> this.bucketShift,
        n = t >> this.bucketShift,
        i = t - e;
      if (i <= 0) return [];
      let o = Array.from({ length: i }),
        a = 0,
        c = e & this.bucketMask,
        d = this.buckets[r];
      if (r === n) {
        let f = t & this.bucketMask;
        for (let p = c; p < f; ++p) o[a++] = d.buffer[p];
        return o;
      }
      for (let f = c; f < this.bucketSize; ++f) o[a++] = d.buffer[f];
      for (let f = r + 1; f < n; ++f) {
        let p = this.buckets[f];
        for (let m = 0; m < p.length; ++m) o[a++] = p.buffer[m];
      }
      let h = t & this.bucketMask,
        u = this.buckets[n];
      if (u) for (let f = 0; f < h; ++f) o[a++] = u.buffer[f];
      return o;
    }
    serialize(e) {
      (e.writeVarUint(this.length),
        e.preallocateTypedArray(this.arrayConstructor.BYTES_PER_ELEMENT, this.length));
      for (let t of this.buckets)
        e.writeBytes(
          new Uint8Array(
            t.buffer.buffer,
            t.buffer.byteOffset,
            t.length * this.arrayConstructor.BYTES_PER_ELEMENT
          )
        );
    }
    deserialize(e, t) {
      let r = e.readTypedArrayBytes(this.arrayConstructor),
        n = this.arrayConstructor.BYTES_PER_ELEMENT;
      if (((this._length = r.byteLength / n), t?.skipData)) return;
      let i = this.bucketSize * n;
      for (let o = 0; o < r.byteLength; o += i) {
        let a = r.subarray(o, o + i),
          c = a.byteLength / n,
          d = t?.zeroCopyIndices && c === this.bucketSize && a.byteOffset % n === 0,
          h = d
            ? new this.arrayConstructor(a.buffer, a.byteOffset, c)
            : new this.arrayConstructor(this.bucketSize);
        (d || new Uint8Array(h.buffer, h.byteOffset, a.byteLength).set(a),
          this.buckets.push(
            new ue(this.bucketSize, this.arrayConstructor, { buffer: h, length: c })
          ));
      }
    }
  };
var F = class s {
  uniques = [];
  maxUniques;
  arrayConstructor;
  indices;
  count = 0;
  bucketSize;
  widenTo;
  lookup;
  cursor = 0;
  constructor(e, t, r) {
    ((this.arrayConstructor = e),
      (this.bucketSize = t),
      (this.widenTo = r),
      (this.indices = new H(e, t)),
      (this.maxUniques = Kr(e)));
  }
  widen() {
    let e = this.widenTo;
    l(e, "Missing widened array constructor");
    let t = new H(e, this.bucketSize);
    for (let r of this.indices.readSlices()) t.addMany(r);
    ((this.indices = t),
      (this.arrayConstructor = e),
      (this.maxUniques = Kr(e)),
      (this.widenTo = void 0));
  }
  get type() {
    return `LazyNormalizedBucketedColumn(ref: ${ke(this.arrayConstructor)})`;
  }
  widenToType(e) {
    this.widenTo && e === `LazyNormalizedBucketedColumn(ref: ${ke(this.widenTo)})` && this.widen();
  }
  static withBuckets({ buffer: e, size: t, widenTo: r }) {
    return { create: () => new s(e, t, r) };
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
    let r = this.count;
    return (this.indices.add(t), (this.count = r + 1), r);
  }
  addMany(e) {
    let t = new Float64Array(e.length);
    for (let n = 0; n < e.length; n++) {
      let i = e[n],
        o = this.indexOfExisting(i);
      (o === void 0 && (o = this.addUnique(i)), (t[n] = o));
    }
    let r = this.indices.addMany(t);
    return ((this.count += e.length), r);
  }
  get(e) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let t = this.indices.get(e);
    return this.uniques[t];
  }
  _set(e, t) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let r = this.indexOfExisting(t);
    (r === void 0 && (r = this.addUnique(t)), this.indices._set(e, r));
  }
  slice(e, t) {
    let r = Math.max(0, t - e),
      n = Array.from({ length: r }),
      i = this.indices.slice(e, t);
    for (let o = 0; o < r; ++o) n[o] = this.uniques[i[o]];
    return n;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (e.writeString(JSON.stringify(this.uniques, (t, r) => (C(r) ? x(r) : r))),
      this.indices.serialize(e));
  }
  deserialize(e, t) {
    if ((t?.type && this.widenToType(t.type), t?.skipData)) {
      (e.readDeferredBytes(e.readVarUint()),
        this.indices.deserialize(e, t),
        (this.count = this.indices.length));
      return;
    }
    this.uniques = JSON.parse(e.readString());
    for (let r = 0; r < this.uniques.length; ++r) {
      let n = this.uniques[r];
      if (S(n)) {
        let i = v(n);
        this.uniques[r] = i;
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
function Kr(s) {
  if (s === Uint8Array) return 2 ** 8 - 1;
  if (s === Uint16Array) return 2 ** 16 - 1;
  if (s === Uint32Array) return 2 ** 32 - 1;
  if (s === Float64Array) return Number.MAX_SAFE_INTEGER;
  throw new Error(`Unsupported array constructor: ${s.name}`);
}
var tt = class {
  constructor(e) {
    this.values = e;
    let t = this.capacityFor(e.length);
    ((this.slots = new Uint32Array(t)), (this.hashes = new Int32Array(t)));
    for (let r = 0; r < e.length; r++) this.insert(e[r], r);
  }
  values;
  slots;
  hashes;
  size = 0;
  get(e) {
    let t = this.slots,
      r = this.hashes,
      n = t.length - 1,
      i = Fr(e),
      o = i & n,
      a;
    for (; (a = t[o]) !== 0;) {
      if (r[o] === i && this.values[a - 1] === e) return a - 1;
      o = (o + 1) & n;
    }
  }
  set(e, t) {
    ((this.size + 1) * 2 > this.slots.length && this.grow(), this.insert(e, t));
  }
  insert(e, t) {
    let r = this.slots,
      n = this.hashes,
      i = r.length - 1,
      o = Fr(e),
      a = o & i,
      c;
    for (; (c = r[a]) !== 0;) {
      if (n[a] === o && this.values[c - 1] === e) {
        r[a] = t + 1;
        return;
      }
      a = (a + 1) & i;
    }
    ((r[a] = t + 1), (n[a] = o), (this.size += 1));
  }
  grow() {
    let e = this.slots,
      t = this.hashes,
      r = e.length * 2,
      n = new Uint32Array(r),
      i = new Int32Array(r),
      o = r - 1;
    for (let a = 0; a < e.length; a++) {
      let c = e[a];
      if (c === 0) continue;
      let d = t[a],
        h = d & o;
      for (; n[h] !== 0;) h = (h + 1) & o;
      ((n[h] = c), (i[h] = d));
    }
    ((this.slots = n), (this.hashes = i));
  }
  capacityFor(e) {
    let t = 16;
    for (; t < e * 2;) t *= 2;
    return t;
  }
};
function Fr(s) {
  let e = 2166136261;
  for (let t = 0; t < s.length; t++) e = Math.imul(e ^ s.charCodeAt(t), 16777619);
  return e | 0;
}
var Lt = (1 << 29) - 24,
  jr = new TextEncoder(),
  Pt = new TextDecoder();
function $r(s, e) {
  return Array.isArray(e) ? e.map((t) => (C(t) ? x(t) : t)) : C(e) ? x(e) : e;
}
function Wr(s) {
  let e = typeof s;
  return e === "string" || e === "number" || e === "boolean" || s === null;
}
function Mi(s) {
  for (let e = 0; e < s.length; ++e) if (!Wr(s[e])) return !1;
  return !0;
}
function Ht(s) {
  return Wr(s) ? JSON.stringify(s) : (JSON.stringify(s, $r) ?? "null");
}
function Ut(s) {
  if (Array.isArray(s)) {
    for (let e = 0; e < s.length; ++e) S(s[e]) && (s[e] = v(s[e]));
    return s;
  }
  return S(s) ? v(s) : s;
}
var De = 91,
  $ = 93,
  Gr = 123,
  Yr = 125,
  rt = 34,
  Jr = 92,
  me = 44,
  nt = class {
    constructor(e, t, r) {
      this.bytes = e;
      this.estimatedLength = t;
      this.dataAvailability = r;
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
          r = this.offsets[t],
          n = this.offsets[t + 1];
        try {
          this.values[e] = Ut(JSON.parse(Pt.decode(this.bytes.subarray(r, n))));
        } catch (i) {
          throw new Error(
            `uniques array: invalid element JSON at bytes ${r}-${n} of ${this.bytes.length}`,
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
        r = this.dataAvailability ? new qt(this.bytes, this.dataAvailability) : void 0,
        n = r?.skipWhitespace(0) ?? J(this.bytes, 0);
      if (this.bytes[n] !== De)
        throw new Error(`uniques array: expected '[' at byte ${n} of ${this.bytes.length}`);
      for (n = r?.skipWhitespace(n + 1) ?? J(this.bytes, n + 1); this.bytes[n] !== $;) {
        let i = r?.scanValueEnd(n) ?? Qr(this.bytes, n);
        if ((t + 1) * 2 > e.length) {
          let o = new Uint32Array(e.length * 2);
          (o.set(e), (e = o));
        }
        if (
          ((e[t * 2] = n),
          (e[t * 2 + 1] = i),
          (t += 1),
          (n = r?.skipWhitespace(i) ?? J(this.bytes, i)),
          r?.ensure(n + 1),
          this.bytes[n] === me)
        ) {
          if (
            ((n = r?.skipWhitespace(n + 1) ?? J(this.bytes, n + 1)),
            r?.ensure(n + 1),
            this.bytes[n] === $)
          )
            throw new Error(
              `uniques array: unexpected ',' before ']' at byte ${n} of ${this.bytes.length}`
            );
          continue;
        }
        if (this.bytes[n] !== $)
          throw new Error(
            `uniques array: expected ',' or ']' at byte ${n} of ${this.bytes.length}`
          );
      }
      if (((n = r?.skipWhitespace(n + 1) ?? J(this.bytes, n + 1)), n !== this.bytes.length))
        throw new Error(`uniques array: unexpected trailing bytes at ${n} of ${this.bytes.length}`);
      ((this.offsets = e),
        (this.count = t),
        (this.values = new Array(t)),
        (this.hydrated = new Uint8Array(t)));
    }
  },
  Oi = 64 * 1024 * 1024,
  Ni = 16 * 1024 * 1024,
  ki = Di() ?? 4 * 1024 * 1024;
function Di() {
  if (typeof process > "u") return;
  let s = Number(process.env.UNIQUES_BATCH_BYTES);
  return Number.isFinite(s) && s > 0 ? Math.min(s, Lt - 2) : void 0;
}
function Xr(s, e, t, r) {
  if (r) {
    zt(s, e, r);
    return;
  }
  if (t && (t?.bodyBytes > Lt || (t.mixed && t.bodyBytes >= Oi))) {
    zt(s, e);
    return;
  }
  try {
    let n = Mi(e) ? JSON.stringify(e) : JSON.stringify(e, $r);
    s.writeString(n);
  } catch (n) {
    if (n instanceof RangeError) {
      zt(s, e);
      return;
    }
    throw n;
  }
}
function zt(s, e, t) {
  let r = s.byteOffset;
  s.writePaddedVarUint(0);
  let n = s.byteOffset;
  s.writeUint8(De);
  let i = new Uint8Array(64 * 1024);
  for (let o = 0; o < e.length; ++o) {
    o > 0 && s.writeUint8(me);
    let a = t?.[o] ?? Ht(e[o]),
      c = a.length * 3;
    if (c > Ni) {
      s.writeBytes(jr.encode(a));
      continue;
    }
    c > i.length && (i = new Uint8Array(c));
    let { written: d } = jr.encodeInto(a, i);
    s.writeBytes(i.subarray(0, d));
  }
  (s.writeUint8($), s.writePaddedVarUintAt(r, s.byteOffset - n));
}
function Zr(s, e) {
  let t = s.readVarUint(),
    r = s.readBytes(t);
  if (r.length > Lt) return (e && ((e.mixed = void 0), (e.bodyBytes = r.length)), Bi(r));
  let n = JSON.parse(Pt.decode(r)),
    i = !1;
  for (let o = 0; o < n.length; ++o) {
    let a = n[o];
    (typeof a == "object" && a !== null && (i = !0), (n[o] = Ut(a)));
  }
  return (e && ((e.mixed = i), (e.bodyBytes = r.length)), n);
}
function Bi(s, e = ki) {
  let t = [],
    r = 0;
  if (((r = J(s, r)), s[r] !== De))
    throw new Error(`uniques array: expected '[' at byte ${r} of ${s.length}`);
  if (((r += 1), (r = J(s, r)), s[r] === $)) r += 1;
  else {
    let n = !1;
    for (; r < s.length;) {
      let i = r,
        o = r,
        a;
      for (; r < s.length;) {
        let c = Qr(s, r);
        ((o = c), (r = J(s, c)));
        let d = s[r];
        if (d === me) {
          if (((a = me), (r += 1), (r = J(s, r)), s[r] === $))
            throw new Error(`uniques array: unexpected ',' before ']' at byte ${r} of ${s.length}`);
          if (c - i >= e) break;
          continue;
        }
        if (d === $) {
          ((a = $), (r += 1));
          break;
        }
        throw new Error(`uniques array: expected ',' or ']' at byte ${r} of ${s.length}`);
      }
      if ((Ei(t, s, i, o), a === $)) {
        n = !0;
        break;
      }
      if (a === void 0) break;
    }
    if (!n) throw new Error(`uniques array: unterminated array (${s.length} bytes)`);
  }
  if (((r = J(s, r)), r !== s.length))
    throw new Error(`uniques array: unexpected trailing bytes at ${r} of ${s.length}`);
  return t;
}
function Ei(s, e, t, r) {
  try {
    let n = "[" + Pt.decode(e.subarray(t, r)) + "]",
      i = JSON.parse(n);
    for (let o = 0; o < i.length; ++o) s.push(Ut(i[o]));
  } catch (n) {
    throw new Error(`uniques array: invalid element JSON at bytes ${t}-${r} of ${e.length}`, {
      cause: n,
    });
  }
}
function Qr(s, e) {
  let t = 0,
    r = e;
  for (; r < s.length;) {
    switch (s[r]) {
      case rt:
        r = _i(s, r);
        continue;
      case Gr:
      case De:
        t += 1;
        break;
      case Yr:
      case $:
        if (t === 0) return r;
        t -= 1;
        break;
      case me:
        if (t === 0) return r;
        break;
      default:
        break;
    }
    r += 1;
  }
  if (t !== 0) throw new Error(`uniques array: unterminated value from byte ${e} of ${s.length}`);
  return s.length;
}
function _i(s, e) {
  let t = e + 1;
  for (;;) {
    let r = s.indexOf(rt, t);
    if (r === -1)
      throw new Error(`uniques array: unterminated string from byte ${e} of ${s.length}`);
    let n = 0;
    for (let i = r - 1; i > e && s[i] === Jr; --i) n += 1;
    if (n % 2 === 0) return r + 1;
    t = r + 1;
  }
}
function J(s, e) {
  let t = e;
  for (; t < s.length;) {
    let r = s[t];
    if (r === 32 || r === 9 || r === 10 || r === 13) t += 1;
    else break;
  }
  return t;
}
var qt = class {
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
      r = e;
    for (; r < this.bytes.length;) {
      switch ((this.ensure(r + 1), this.bytes[r])) {
        case rt:
          r = this.skipString(r);
          continue;
        case Gr:
        case De:
          t += 1;
          break;
        case Yr:
        case $:
          if (t === 0) return r;
          t -= 1;
          break;
        case me:
          if (t === 0) return r;
          break;
        default:
          break;
      }
      r += 1;
    }
    if (t !== 0)
      throw new Error(`uniques array: unterminated value from byte ${e} of ${this.bytes.length}`);
    return this.bytes.length;
  }
  skipWhitespace(e) {
    let t = e;
    for (; t < this.bytes.length;) {
      this.ensure(t + 1);
      let r = this.bytes[t];
      if (r !== 32 && r !== 9 && r !== 10 && r !== 13) break;
      t += 1;
    }
    return t;
  }
  skipString(e) {
    let t = e + 1;
    for (;;) {
      this.ensure(t + 1);
      let r = this.availableBytes.indexOf(rt, t);
      if (r === -1) {
        if (this.available >= this.bytes.length)
          throw new Error(
            `uniques array: unterminated string from byte ${e} of ${this.bytes.length}`
          );
        t = this.available;
        continue;
      }
      let n = 0;
      for (let i = r - 1; i > e && this.bytes[i] === Jr; --i) n += 1;
      if (n % 2 === 0) return r + 1;
      t = r + 1;
    }
  }
};
function en(s, e) {
  if (!s.some(he)) return { uniques: s, indices: e };
  let t = new Map(),
    r = [],
    n = [],
    i;
  for (let a = 0; a < s.length; a++) {
    let c = s[a],
      d;
    if (he(c)) {
      d = Ht(c);
      let h = t.get(d);
      if (h !== void 0) {
        if (!i) {
          i = new Uint32Array(s.length);
          for (let u = 0; u < a; u++) i[u] = u;
        }
        i[a] = h;
        continue;
      }
      t.set(d, r.length);
    }
    (i && (i[a] = r.length), r.push(c), n.push(d));
  }
  if (!i) return { uniques: s, indices: e, objectJson: n };
  let o = new Uint32Array(e.length);
  for (let a = 0; a < e.length; a++) o[a] = i[e[a]];
  return { uniques: r, indices: o, objectJson: n };
}
var ge = class {
    map;
    cursor = 0;
    get(e, t) {
      let r = this.map?.get(e);
      if (r !== void 0) return r;
      for (; this.cursor < t.length; ++this.cursor) {
        let n = t[this.cursor];
        if (((this.map ??= new Map()), this.map.set(n, this.cursor), Object.is(n, e)))
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
  Vt = class {
    map;
    get(e, t) {
      return this.ensureMap(t).get(e);
    }
    set(e, t, r) {
      this.ensureMap(r).set(e, t);
    }
    rehydrate(e) {
      this.ensureMap(e);
    }
    reset() {
      this.map = void 0;
    }
    ensureMap(e) {
      return (this.map ??= new tt(e));
    }
  },
  be = class {
    constructor(e = []) {
      this.values = e;
    }
    values;
    get(e) {
      return this.values[e];
    }
    toArray() {
      return this.values;
    }
  },
  U = class {
    uniquesArray = new be();
    indices;
    count = 0;
    lookup = new ge();
    uniquesHints;
    constructor(e = 1024) {
      this.indices = new Uint32Array(e);
    }
    get uniques() {
      if (this.uniquesArray instanceof be) return this.uniquesArray.values;
      let e = this.uniquesArray.toArray();
      return ((this.uniquesArray = new be(e)), e);
    }
    set uniques(e) {
      this.uniquesArray = new be(e);
    }
    get type() {
      return "LazyNormalizedColumn";
    }
    ensureCapacity(e) {
      if (e <= this.indices.length) return;
      let t = this.indices.length || 1;
      for (; t < e;) t <<= 1;
      let r = new Uint32Array(t);
      (r.set(this.indices), (this.indices = r));
    }
    indexOfExisting(e) {
      let t = this.uniques;
      return this.lookup.get(e, t);
    }
    addUnique(e) {
      let t = this.uniques,
        r = t.length;
      return (t.push(e), this.lookup.set(e, r, t), r);
    }
    add(e) {
      let t = this.indexOfExisting(e);
      t === void 0 && (t = this.addUnique(e));
      let r = this.count;
      return (this.ensureCapacity(r + 1), (this.indices[r] = t), (this.count = r + 1), r);
    }
    addMany(e) {
      let t = this.count;
      this.ensureCapacity(t + e.length);
      for (let r = 0; r < e.length; r++) {
        let n = e[r],
          i = this.indexOfExisting(n);
        (i === void 0 && (i = this.addUnique(n)), (this.indices[t + r] = i));
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
    rowCodes() {
      return this.indices;
    }
    codeOf(e) {
      return this.indexOfExisting(e);
    }
    _set(e, t) {
      if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
      let r = this.indexOfExisting(t);
      (r === void 0 && (r = this.addUnique(t)), (this.indices[e] = r));
    }
    slice(e, t) {
      let r = Math.max(0, t - e),
        n = Array.from({ length: r });
      for (let i = 0; i < r; ++i) n[i] = this.unique(this.indices[e + i]);
      return n;
    }
    get length() {
      return this.count;
    }
    serialize(e) {
      let {
        uniques: t,
        indices: r,
        objectJson: n,
      } = en(this.uniques, this.indices.subarray(0, this.count));
      (Xr(e, t, this.uniquesHints, n), e.writeTypedArray(r));
    }
    deserialize(e, t) {
      if (t?.skipData) {
        (e.readDeferredBytes(e.readVarUint()),
          this.readIndices(e, t.zeroCopyIndices),
          (this.uniques = []),
          (this.uniquesHints = void 0),
          (this.lookup = new ge()));
        return;
      }
      if (t?.lazyUniques) {
        let i = e.readDeferredBytes(e.readVarUint()),
          o = new nt(i, t.estimatedUniqueCount ?? this.count, e.dataAvailability);
        (t.indexLazyUniques && o.index(),
          this.readIndices(e, t.zeroCopyIndices),
          (this.uniquesHints = void 0),
          (this.uniquesArray = o),
          (this.lookup = new ge()));
        return;
      }
      let r = { mixed: void 0, bodyBytes: 0 },
        n = Zr(e, r);
      ((this.uniques = n),
        (this.uniquesHints = r),
        (this.lookup =
          t?.stringCodeMap === !0 && n.every((i) => typeof i == "string") ? new Vt() : new ge()),
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
var tn = "$keep_value",
  rn = "$deleted",
  nn = {
    description: "Replace deleted and keep values with symbols",
    migrate(s) {
      let e = s.main.columns;
      if (e.value instanceof U || e.value instanceof F) {
        let t = e.value.uniques;
        for (let r in t) t[r] === rn ? (t[r] = y) : t[r] === tn && (t[r] = B);
      } else
        for (let t = 0; t < e.length; ++t) {
          let r = e.value.get(t);
          r === rn ? e.value._set(t, y) : r === tn && e.value._set(t, B);
        }
    },
  };
function zi(s) {
  let e = s.main.columns;
  if (e.client instanceof U || e.client instanceof F) {
    let t = e.client.uniques;
    for (let r in t) t[r] = sn(t[r]);
  } else
    for (let t = 0; t < e.length; ++t) {
      let r = e.client.get(t);
      e.client._set(t, sn(r));
    }
}
var on = { description: "Migrates row `client` to u32", migrate: zi };
function sn(s) {
  return s >>> 0;
}
var Be = 62,
  Kt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  an = {};
for (let s = 0; s < Kt.length; s++) an[Kt[s]] = s;
function Ft(s, e) {
  if (
    (l(s >= 0, () => `Cannot encode negative number: ${s}`),
    l(Number.isInteger(s), () => `Cannot encode non-integer: ${s}`),
    s === 0)
  )
    return "0".repeat(e);
  let t = [],
    r = s;
  for (; r > 0;) (t.push(Kt[r % Be]), (r = Math.floor(r / Be)));
  let n = t.reverse().join("");
  return (
    l(n.length <= e, () => `Encoded value exceeds width: ${n} from ${s} width ${e}`),
    n.padStart(e, "0")
  );
}
function jt(s) {
  l(s.length > 0, "Cannot decode empty string");
  let e = 0;
  for (let t = 0; t < s.length; t++) {
    let r = s[t],
      n = an[r];
    (l(n !== void 0, () => `Invalid base62 character: ${r} in string ${s}`), (e = e * Be + n));
  }
  return (l(e <= Number.MAX_SAFE_INTEGER, "Decoded number exceeds MAX_SAFE_INTEGER"), e);
}
var Ie = 5,
  dn = 6,
  it = Ie + dn;
function qi(s) {
  let e = Ft(s.position, Ie),
    t = Ft(s.client, dn);
  return e + t;
}
function Li(s) {
  l(s.length === it, () => `Component string must be ${it} chars, got ${s.length}`);
  let e = s.slice(0, Ie),
    t = s.slice(Ie);
  return { position: jt(e), client: jt(t) };
}
var $t = ":";
function le(s) {
  return s.map(qi).join($t);
}
function we(s) {
  l(s.length > 0, "Position ID is empty");
  let e = s.split($t);
  return (l(e.length > 0, "Position ID has no parts"), e.map(Li));
}
var Pi = new RegExp(`^[0-9A-Za-z]{${it}}(?:${$t}[0-9A-Za-z]{${it}})*$`);
function fe(s) {
  return typeof s != "string" ? !1 : Pi.test(s);
}
var Ee = "$deleted",
  Hi = "$keep",
  st = Be ** Ie - 1;
function Ui(s) {
  let e = s.main.columns;
  (Vi(e), Ki(e), Fi(e), Wi(e));
}
var cn = {
  description: "Migrates array positions from fraction indices to Logoot-style position ids",
  migrate: Ui,
};
function Vi(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    let r = s.id.get(t);
    if (r === Ee) continue;
    let n = s.key.get(t);
    if (n !== "parentid") continue;
    let i = s.value.get(t);
    if (i === y) continue;
    if ((l(typeof i == "string"), i.split("@").length === 1)) {
      s.id._set(t, Ee);
      continue;
    }
    let a = s.client.get(t),
      c = s.seq.get(t),
      d = `${r}/${n}/${i}${a}/${c}`;
    if (e.has(d)) {
      s.id._set(t, Ee);
      continue;
    }
    e.add(d);
  }
}
function Ki(s) {
  for (let e = 0; e < s.client.length; e++)
    s.key.get(e) !== -1 || s.value.get(e) !== B || s.key._set(e, Hi);
}
function Fi(s) {
  let e = ji(s);
  for (let [t, r] of e) {
    let n = Array.from(r.keys()).sort((o, a) => o - a),
      i = Math.floor(st / (n.length + 3));
    l(i > 0, "step must be positive");
    for (let o = 0; o < n.length; o++) {
      let a = (o + 1) * i;
      l(a <= st, "position exceeds max position");
      let c = n[o],
        d = r.get(c);
      d.sort((u, f) => $i(s, u, f));
      let h = [];
      for (let u of d) {
        if (s.value.get(u) === y) {
          let p = h.pop();
          (l(p, "expected to have a previous position to delete"), s.key._set(u, p));
          continue;
        }
        let f = le([{ position: a, client: s.client.get(u) }]);
        (s.key._set(u, f), h.push(f));
      }
    }
  }
}
function ji(s) {
  let e = new Map();
  for (let t = 0; t < s.client.length; t++) {
    let r = s.id.get(t);
    if (r === Ee) continue;
    let n = s.key.get(t);
    if (typeof n != "number") continue;
    let i = e.get(r);
    i || ((i = new Map()), e.set(r, i));
    let o = i.get(n);
    (o || ((o = []), i.set(n, o)), o.push(t));
  }
  return e;
}
function $i(s, e, t) {
  let r = s.seq.get(e),
    n = s.seq.get(t);
  if (r < n) return -1;
  if (r > n) return 1;
  let i = s.client.get(e),
    o = s.client.get(t);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Wi(s) {
  let e = Gi(s);
  for (let [t, r] of e) {
    let n = r.sort((o, a) => Yi(s, o, a)),
      i = Math.floor(st / (n.length + 3));
    l(i > 0, "step must be positive");
    for (let o = 0; o < n.length; o++) {
      let a = (o + 1) * i;
      l(a <= st, "position exceeds max position");
      let { rowIdx: c } = n[o];
      Ji(s, c, t, a);
    }
  }
}
function Gi(s) {
  let e = new Map();
  for (let t = 0; t < s.client.length; t++) {
    if (s.id.get(t) === Ee || s.key.get(t) !== "parentid") continue;
    let i = s.value.get(t);
    if (i === y) continue;
    l(typeof i == "string");
    let o = i.split("@");
    l(o.length === 2, "invalid hierarchy key");
    let a = o[0],
      c = parseFloat(o[1]),
      d = e.get(a);
    (d || ((d = []), e.set(a, d)), d.push({ rowIdx: t, value: c }));
  }
  return e;
}
function Yi(s, e, t) {
  if (e.value < t.value) return -1;
  if (e.value > t.value) return 1;
  let r = s.seq.get(e.rowIdx),
    n = s.seq.get(t.rowIdx);
  if (r > n) return -1;
  if (r < n) return 1;
  let i = s.client.get(e.rowIdx),
    o = s.client.get(t.rowIdx);
  return i > o ? -1 : i < o ? 1 : 0;
}
function Ji(s, e, t, r) {
  let n = le([{ position: r, client: s.client.get(e) }]);
  s.value._set(e, `${t}@${n}`);
}
var hn = 27,
  Wt = 2 ** hn - 1,
  ot = 1,
  un = 23,
  Gt = 2 ** un - 1,
  at = 1,
  Xi = 3,
  ln = 2 ** Xi - 1,
  dt = 2 ** hn,
  Se = 2 ** un;
function _e({ batchNo: s, rowCount: e, origin: t = 0 }) {
  return (
    l(e >= ot && e <= Wt, () => `rowCount out of range: ${e}`),
    l(s >= at && s <= Gt, () => `batchNo out of range: ${s}`),
    l(t >= 0 && t <= ln, () => `origin out of range: ${t}`),
    l(Number.isSafeInteger(s), () => `batchNo is not a safe integer: ${s}`),
    l(Number.isSafeInteger(e), () => `rowCount is not a safe integer: ${e}`),
    l(Number.isSafeInteger(t), () => `origin is not a safe integer: ${t}`),
    (t * Se + s) * dt + e
  );
}
function fn(s) {
  if (!Number.isSafeInteger(s) || s < 0) return !1;
  let e = Yt(s),
    t = Math.floor(e / Se),
    r = e % Se,
    n = s - e * dt;
  return t <= ln && r >= at && r <= Gt && n >= ot && n <= Wt;
}
function Yt(s) {
  return (
    l(Number.isSafeInteger(s), () => `batchId not safe integer: ${s}`),
    l(s >= 0, () => `batchId is negative: ${s}`),
    Math.floor(s / dt)
  );
}
function ve(s) {
  return Yt(s) % Se;
}
function pn(s) {
  let e = Yt(s),
    t = Math.floor(e / Se);
  return { rowCount: s - e * dt, batchNo: e % Se, origin: t <= 5 ? t : 0 };
}
var qa = {
  ROW_COUNT_MIN: ot,
  ROW_COUNT_MAX: Wt,
  BATCH_NO_MIN: at,
  BATCH_NO_MAX: Gt,
  MIN_BATCH_ID: _e({ batchNo: at, rowCount: ot }),
};
var Zi = ["client", "seq", "batch", "id", "key", "value", "user"],
  Jt = class {
    encode(e, t) {
      let r = e.main;
      for (let n of Zi) {
        let i = r.columns[n];
        (t.writeString(n), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let r = e.main;
      for (; !t.endOfFile();) {
        let n = t.readString(),
          i = r.columns[n];
        l(i, () => `Column ${n} not found`);
        let o = t.readString();
        (l(o === i.type, () => `Column type does not match: ${o} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = S(e.value) ? v(e.value) : e.value;
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
        C(t) && (t = x(t)),
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
function Qi(s) {
  let e = s.main.columns,
    t = new Map();
  for (let i = 0; i < e.client.length; i++) {
    let o = e.client.get(i),
      a = t.get(o);
    a === void 0 ? t.set(o, 1) : t.set(o, a + 1);
  }
  let r = new Map();
  for (let [i, o] of t) r.set(i, _e({ batchNo: 1, rowCount: o }));
  let n = F.withBuckets({ buffer: Uint32Array }).create();
  for (let i = 0; i < e.client.length; i++) {
    let o = e.client.get(i),
      a = r.get(o);
    n.add(a);
  }
  e.batch = n;
}
var yn = {
  description: "Adds batch column and populates initial value",
  codec: new Jt(),
  migrate: Qi,
};
function es(s) {
  let e = s.main.columns;
  ts(e);
  let t = new Map();
  for (let r = 0; r < e.length; r++) {
    if (e.id.get(r) === k) continue;
    let i = e.value.get(r);
    if (typeof i != "string" || !i.startsWith("arr(")) continue;
    let o = i.slice(4, -1),
      a = t.get(o);
    if (a) {
      a.referenceRowIdx.push(r);
      continue;
    }
    t.set(o, { itemRowIdxs: [], referenceRowIdx: [r], keepRowIdx: -1, isAtomic: !1 });
  }
  for (let r = 0; r < e.length; r++) {
    let n = e.id.get(r);
    if (!t.has(n)) continue;
    let i = t.get(n);
    if (e.key.get(r) === w) {
      (l(i.keepRowIdx === -1, () => `array has multiple keep rows: ${n}`), (i.keepRowIdx = r));
      continue;
    }
    let a = e.value.get(r);
    if (typeof a == "string" && (a.startsWith("arr(") || a.startsWith("obj("))) {
      l(i.itemRowIdxs.length === 0, () => `array has mixed primitive/reference items: ${n}`);
      continue;
    }
    (!i.isAtomic && a === y) || ((i.isAtomic = !0), i.itemRowIdxs.push(r));
  }
  for (let [r, n] of t) {
    if (!n.isAtomic) continue;
    for (let h of n.referenceRowIdx) e.id._set(h, k);
    n.itemRowIdxs.sort((h, u) => {
      let f = e.seq.get(h),
        p = e.seq.get(u);
      if (f < p) return -1;
      if (f > p) return 1;
      let m = e.client.get(h),
        g = e.client.get(u);
      return m < g ? -1 : m > g ? 1 : 0;
    });
    let i = r.split(".");
    l(i.length >= 2, () => `invalid array reference id: ${r}`);
    let o = i.pop(),
      a = i.join("."),
      c = [],
      d = n.keepRowIdx;
    (l(d !== -1, () => `array reference has no keep row: ${r}`),
      e.id._set(d, a),
      e.key._set(d, o),
      e.value._set(d, []));
    for (let h of n.itemRowIdxs) {
      e.id._set(h, a);
      let u = e.key.get(h),
        f = e.value.get(h);
      if (f === y) {
        let p = c.findIndex((m) => m.key === u);
        p !== -1 && c.splice(p, 1);
      } else {
        let p = c.findIndex((m) => m.key > u);
        p !== -1 ? c.splice(p, 0, { key: u, value: f }) : c.push({ key: u, value: f });
      }
      (e.key._set(h, o),
        e.value._set(
          h,
          c.map(({ value: p }) => p)
        ));
    }
  }
}
function ts(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    let r = s.id.get(t);
    if (r === k) continue;
    let n = s.key.get(t),
      i = s.client.get(t),
      o = s.seq.get(t),
      a = s.value.get(t);
    typeof a == "symbol" && (a = a.toString());
    let c = `${r}/${n}/${a}/${i}/${o}`;
    if (e.has(c)) {
      s.id._set(t, k);
      continue;
    }
    e.add(c);
  }
}
var mn = { description: "Migrates arrays of primitives to atomic array values", migrate: es };
var gn = "$keep",
  Xt = "$deleted";
function rs(s) {
  let e = s.main.columns,
    t = is(e),
    r = ss(e, t);
  for (let [n, i] of r) {
    i.sort((c, d) => os(e, c, d));
    let o = new Map(),
      a = new Map();
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        h = e.id.get(d);
      l(h === n, () => `array reference id does not match row id: ${h}`);
      let u = e.key.get(d);
      l(u !== gn, () => `array reference key cannot be $keep: ${u}`);
      let f = e.value.get(d);
      if (
        (l(
          f === y || Zt(f),
          () => `array reference value must be object reference: ${JSON.stringify(f)}`
        ),
        f === y)
      )
        continue;
      let p = f.slice(4, -1);
      (o.set(p, u), a.set(u, p));
    }
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        h = e.key.get(d),
        u = e.value.get(d);
      if (u === y) {
        let p = a.get(h);
        if (p === void 0) {
          e.id._set(d, Xt);
          continue;
        }
        let m = o.get(p);
        h === m ? e.key._set(d, p) : e.id._set(d, Xt);
        continue;
      }
      l(Zt(u), () => `array reference value must be object reference: ${JSON.stringify(u)}`);
      let f = u.slice(4, -1);
      (e.key._set(d, f), e.value._set(d, h));
    }
  }
}
function ns(s) {
  return typeof s == "string" && s.startsWith("arr(");
}
function is(s) {
  let e = new Set();
  for (let t = 0; t < s.client.length; t++) {
    if (s.id.get(t) === Xt) continue;
    let n = s.value.get(t);
    if (!ns(n)) continue;
    let i = n.slice(4, -1);
    e.add(i);
  }
  return e;
}
function Zt(s) {
  return typeof s == "string" && s.startsWith("obj(");
}
function ss(s, e) {
  let t = new Map([...e].map((r) => [r, []]));
  for (let r = 0; r < s.client.length; r++) {
    let n = s.id.get(r);
    if (!t.has(n) || s.key.get(r) === gn) continue;
    let o = s.value.get(r);
    (l(o === y || Zt(o), "only DELETED_VALUE and object references can be reference array items"),
      t.get(n).push(r));
  }
  return t;
}
function os(s, e, t) {
  let r = s.seq.get(e),
    n = s.seq.get(t);
  if (r < n) return -1;
  if (r > n) return 1;
  let i = s.client.get(e),
    o = s.client.get(t);
  return i < o ? -1 : i > o ? 1 : 0;
}
var bn = {
  description: "Migrates array of objects to invert index from position-keyed to id-keyed",
  migrate: rs,
};
var L = class s {
  constructor(e, t) {
    this.parentHistory = e;
    this.parentOverrides = t;
  }
  parentHistory;
  parentOverrides;
  clone() {
    let e = new Map();
    for (let [t, r] of this.parentOverrides) {
      let n = new Map();
      for (let [i, o] of r) {
        let a = new Map();
        for (let [c, d] of o) a.set(c, { ...d });
        n.set(i, a);
      }
      e.set(t, n);
    }
    return new s([...this.parentHistory], e);
  }
};
function W(s, e, t) {
  let r = 0,
    n = s.length;
  for (; r < n;) {
    let i = Math.floor((r + n) / 2),
      o = s[i];
    t(o, e) < 0 ? (r = i + 1) : (n = i);
  }
  return r;
}
var as = 1e3,
  ds = 1e4,
  cs = 512,
  Qt = as,
  hs = cs,
  E = class {
    seqs = [];
    idxs = [];
    _maxSize = Qt;
    constructor(e) {
      let t = e?.maxSize ?? Qt;
      this._maxSize = kr(t, Qt, ds);
    }
    get maxSize() {
      return this._maxSize;
    }
    clear() {
      ((this.seqs = []), (this.idxs = []));
    }
    load(e, t) {
      let r = e.length === t.length && e.length <= this._maxSize;
      ((this.seqs = r ? e : []), (this.idxs = r ? t : []));
    }
    get(e) {
      let t = this.seqs.length;
      if (t === 0) return 0;
      let r = W(this.seqs, e, In);
      return r < t && this.seqs[r] === e ? this.idxs[r] : 0;
    }
    add(e, t) {
      let r = W(this.seqs, e, In);
      if (r < this.seqs.length && this.seqs[r] === e) {
        t < this.idxs[r] && ((this.idxs[r] = t), this.propagateLeftFrom(r));
        return;
      }
      if (this.maxSize > 0 && this.seqs.length >= this.maxSize) {
        let i = this.seqs[this.seqs.length - this.maxSize];
        if (i !== void 0 && i > e) return;
      }
      (this.seqs.splice(r, 0, e),
        this.idxs.splice(r, 0, t),
        r + 1 < this.idxs.length && (this.idxs[r] = Math.min(this.idxs[r], this.idxs[r + 1])),
        this.propagateLeftFrom(r),
        this.seqs.length > this.maxSize + hs && this.trimToMaxSize());
    }
    trimToMaxSize() {
      if (this.maxSize) {
        let e = this.seqs.length - this.maxSize;
        e > 0 && (this.seqs.splice(0, e), this.idxs.splice(0, e));
      }
    }
    propagateLeftFrom(e) {
      let t = this.idxs[e];
      for (let r = e - 1; r >= 0 && !(this.idxs[r] <= t); r--) this.idxs[r] = t;
    }
    __snapshot() {
      return this.seqs.map((e, t) => ({ seq: e, idx: this.idxs[t] }));
    }
  };
function In(s, e) {
  return s - e;
}
function wn(s) {
  let e = "";
  for (let t of s) e += String.fromCharCode(t);
  return btoa(e);
}
function Sn(s) {
  let e = atob(s),
    t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  return t;
}
var vn = [1, 128, 16384, 2097152, 268435456, 34359738368, 4398046511104, 562949953421312],
  ct = 4294967295,
  A = class {
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
        r = 0,
        n = 0;
      for (;;) {
        if ((this.ensureAvailable(t + 1), t >= e.length)) throw new Error("VarUint truncated");
        let i = e[t++];
        if (((r += (i & 127) * vn[n]), (i & 128) === 0)) break;
        if (((n += 1), n >= vn.length)) throw new Error("VarUint is too big");
      }
      return ((this.byteOffset = t), r);
    }
    readString() {
      let e = this.readVarUint(),
        t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || t > ct) throw new Error("Invalid string length");
      let r = this.ensureAvailable(t);
      if (t > r || t > this.buffer.byteLength) throw new Error("String truncated");
      let n = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), this.decoder.decode(n));
    }
    readBytes(e) {
      let t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || e < 0 || t > ct) throw new Error("Invalid byte length");
      let r = this.ensureAvailable(t);
      if (t > r || t > this.buffer.byteLength) throw new Error("Bytes truncated");
      let n = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), n);
    }
    readDeferredBytes(e) {
      let t = this.byteOffset + e;
      if (!Number.isSafeInteger(t) || e < 0 || t > ct)
        throw new Error("Invalid deferred byte length");
      if (
        (this.dataAvailability?.prepare?.(this.buffer, t),
        this.refreshView(),
        t > this.buffer.byteLength)
      )
        throw new Error("Deferred bytes truncated");
      let r = this.buffer.subarray(this.byteOffset, t);
      return ((this.byteOffset = t), r);
    }
    readTypedArrayBytes(e) {
      let t = this.readVarUint(),
        r = e.BYTES_PER_ELEMENT;
      this.align(r);
      let n = t * r;
      if (!Number.isSafeInteger(n) || n < 0 || n > ct)
        throw new Error("Invalid typed array length");
      let i = this.byteOffset + n;
      if (!Number.isSafeInteger(i)) throw new Error("Invalid typed array length");
      let o = this.ensureAvailable(i);
      if (i > o || i > this.buffer.byteLength) throw new Error("Typed array truncated");
      let a = this.buffer.subarray(this.byteOffset, i);
      return ((this.byteOffset = i), a);
    }
    readTypedArray(e, t = !1) {
      let r = this.readTypedArrayBytes(e),
        n = r.byteLength / e.BYTES_PER_ELEMENT;
      if (t || r.byteOffset % e.BYTES_PER_ELEMENT !== 0) {
        let i = new ArrayBuffer(r.byteLength);
        return (new Uint8Array(i).set(r), new e(i, 0, n));
      }
      return new e(r.buffer, r.byteOffset, n);
    }
  };
var X = 1024 * 1024,
  z = class {
    encoder = new TextEncoder();
    alignmentOrigin = 0;
    chunks = [new Uint8Array(X)];
    scratch = new ArrayBuffer(8);
    scratchView = new DataView(this.scratch);
    byteOffset = 0;
    align(e) {
      let t = this.byteOffset - this.alignmentOrigin,
        r = (e - (t % e)) % e;
      this.writePadding(r);
    }
    withAlignmentOrigin(e, t) {
      let r = this.alignmentOrigin;
      this.alignmentOrigin = e;
      try {
        return t();
      } finally {
        this.alignmentOrigin = r;
      }
    }
    writeUint8(e) {
      this.remainingInCurrentChunk() === 0 && this.addChunk();
      let t = Math.floor(this.byteOffset / X);
      ((this.chunks[t][this.byteOffset % X] = e), (this.byteOffset += 1));
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
      this.writeBytes(Cn(e));
    }
    writePaddedVarUintAt(e, t) {
      this.writeBytesAt(e, Cn(t));
    }
    writeString(e) {
      let t = this.encoder.encode(e);
      (this.writeVarUint(t.length), this.writeBytes(t));
    }
    writeTypedArray(e, t = e.length) {
      this.writeVarUint(t);
      let r = this.preallocateTypedArray(e.BYTES_PER_ELEMENT, t),
        n = new Uint8Array(e.buffer, e.byteOffset, r);
      this.writeBytes(n);
    }
    preallocateTypedArray(e, t) {
      return (this.align(e), t * e);
    }
    writeBytes(e) {
      let t = 0;
      for (; t < e.length;) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let r = this.currentChunk(),
          n = this.currentChunkOffset(),
          i = Math.min(e.length - t, r.length - n);
        (r.set(e.subarray(t, t + i), n), (t += i), (this.byteOffset += i));
      }
    }
    getBuffer() {
      let e = new Uint8Array(this.byteOffset),
        t = 0;
      for (let r of this.getWrittenChunks()) (e.set(r, t), (t += r.length));
      return e;
    }
    async writeToStream(e) {
      for (let t of this.getWrittenChunks())
        e.write(t) || (await new Promise((r) => e.once("drain", r)));
      return this.byteOffset;
    }
    writeScratch(e) {
      this.writeBytes(new Uint8Array(this.scratch, 0, e));
    }
    writeBytesAt(e, t) {
      let r = e,
        n = 0;
      for (; n < t.length;) {
        let { chunk: i, chunkIndex: o } = this.getChunk(r),
          a = o * X,
          c = r - a,
          d = Math.min(t.length - n, i.length - c);
        (i.set(t.subarray(n, n + d), c), (n += d), (r += d));
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
          let r = t * X,
            n = Math.min(e.length, Math.max(0, this.byteOffset - r));
          return e.subarray(0, n);
        })
        .filter((e) => e.length > 0);
    }
    currentChunk() {
      return this.getChunk(this.byteOffset).chunk;
    }
    currentChunkOffset() {
      return this.byteOffset % X;
    }
    remainingInCurrentChunk() {
      return this.byteOffset === this.chunks.length * X ? 0 : X - this.currentChunkOffset();
    }
    addChunk() {
      this.chunks.push(new Uint8Array(X));
    }
    getChunk(e) {
      let t = Math.floor(e / X),
        r = this.chunks[t];
      if (r) return { chunk: r, chunkIndex: t };
      throw new Error(`Invalid byte offset: ${e}`);
    }
  };
function Cn(s) {
  if (!Number.isSafeInteger(s) || s < 0)
    throw new Error(`padded varint requires a non-negative safe integer, got ${s}`);
  let e = z.paddedVarUintWidth,
    t = new Uint8Array(e),
    r = s;
  for (let n = 0; n < e; ++n) {
    let i = n === e - 1;
    ((t[n] = (r % 128) | (i ? 0 : 128)), (r = Math.floor(r / 128)));
  }
  return (l(r === 0, "value doesn't fit in bytes"), t);
}
var q = class s {
  constructor(e = []) {
    this.values = e;
  }
  values;
  get count() {
    return this.values.length;
  }
  add(e) {
    let t = xn(this.values, e);
    return t >= 0 ? !1 : (this.values.splice(-(t + 1), 0, e), !0);
  }
  has(e) {
    return xn(this.values, e) >= 0;
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
    for (let r = 0; r < t.length; ++r) t[r] = this.values[r];
    e.writeTypedArray(t);
  }
  deserialize(e) {
    l(this.values.length === 0, "ArrayContainer deserialize must be called with empty array");
    let t = e.readTypedArray(Uint16Array);
    for (let r = 0; r < t.length; ++r) this.values[r] = t[r];
  }
};
function xn(s, e) {
  let t = 0,
    r = s.length - 1;
  for (; t <= r;) {
    let n = (t + r) >>> 1,
      i = s[n];
    if (i < e) {
      t = n + 1;
      continue;
    }
    if (i > e) {
      r = n - 1;
      continue;
    }
    return n;
  }
  return -(t + 1);
}
var ze = 2048,
  V = class s {
    constructor(e = new Uint32Array(ze), t = 0) {
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
        r = this.words[t],
        i = 1 << (e & 31);
      return r & i ? !1 : ((this.words[t] = r | i), (this._count += 1), !0);
    }
    has(e) {
      let t = e >>> 5,
        r = this.words[t],
        i = 1 << (e & 31);
      return !!(r & i);
    }
    clone() {
      return new s(this.words.slice(), this._count);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.words.length; e++) {
        let t = this.words[e] ?? 0,
          r = e << 5;
        for (; t !== 0;) {
          let n = t & -t,
            i = 31 - Math.clz32(n);
          (yield r + i, (t &= t - 1));
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
      (l(t.length === ze, () => `unexpected bitmap word count: ${t.length}`), this.words.set(t));
    }
  };
var qe = { Array: 0, Bitmap: 1 };
function Rn(s, e) {
  if (s instanceof q && e instanceof q) return us(s, e);
  if (s instanceof q && e instanceof V) return ls(s, e);
  if (s instanceof V && e instanceof q) return fs(s, e);
  if (s instanceof V && e instanceof V) return ps(s, e);
}
function us(s, e) {
  let t = [],
    r = s.values,
    n = e.values,
    i = 0,
    o = 0;
  for (; i < r.length && o < n.length;) {
    let a = r[i],
      c = n[o];
    if (a === c) {
      ((i += 1), (o += 1));
      continue;
    }
    if (a < c) {
      (t.push(a), (i += 1));
      continue;
    }
    o += 1;
  }
  for (; i < r.length; i++) t.push(r[i]);
  if (t.length !== 0) return new q(t);
}
function ls(s, e) {
  let t = s.values.filter((r) => !e.has(r));
  if (t.length !== 0) return new q(t);
}
function fs(s, e) {
  let t = s.words.slice(),
    r = s.count;
  for (let n of e.values) {
    let i = n >>> 5,
      o = 1 << (n & 31),
      a = t[i];
    a & o && ((t[i] = a & ~o), (r -= 1));
  }
  if (r !== 0) return new V(t, r);
}
function ps(s, e) {
  let t = new Uint32Array(ze),
    r = 0;
  for (let n = 0; n < ze; n++) {
    let i = (s.words[n] ?? 0) & ~(e.words[n] ?? 0);
    ((t[n] = i), (r += ys(i)));
  }
  if (r !== 0) return new V(t, r);
}
function ys(s) {
  let e = s >>> 0,
    t = 0;
  for (; e !== 0;) ((e &= e - 1), (t += 1));
  return t;
}
var An = 4096,
  er = 16,
  Tn = 65535,
  Le = class s {
    containers = new Map();
    _count = 0;
    get count() {
      return this._count;
    }
    get keys() {
      return Array.from(this.containers.keys()).sort((e, t) => e - t);
    }
    add(e) {
      Pe(e, "value");
      let t = e >>> er,
        r = e & Tn,
        n = this.containers.get(t);
      return n
        ? n.add(r)
          ? ((this._count += 1),
            n instanceof q && n.count > An && this.containers.set(t, ms(n)),
            !0)
          : !1
        : (this.containers.set(t, new q([r])), (this._count += 1), !0);
    }
    has(e) {
      Pe(e, "value");
      let t = e >>> er,
        r = e & Tn,
        n = this.containers.get(t);
      return n ? n.has(r) : !1;
    }
    andNot(e) {
      let t = new s();
      for (let r of this.keys) {
        let n = this.containers.get(r);
        if (!n) continue;
        let i = e.containers.get(r);
        if (!i) {
          let a = n.clone();
          (t.containers.set(r, a), (t._count += a.count));
          continue;
        }
        let o = Rn(n, i);
        o &&
          (o instanceof V && o.count <= An && (o = gs(o)),
          t.containers.set(r, o),
          (t._count += o.count));
      }
      return t;
    }
    clone() {
      let e = new s();
      for (let t of this.keys) {
        let r = this.containers.get(t);
        r && e.containers.set(t, r.clone());
      }
      return ((e._count = this._count), e);
    }
    *[Symbol.iterator]() {
      for (let e of this.keys) {
        let t = this.containers.get(e);
        if (t) for (let r of t) yield (((e << er) >>> 0) + r) >>> 0;
      }
    }
    serialize(e) {
      (e.writeUint32(this._count), e.writeUint32(this.containers.size));
      for (let t of this.keys) {
        let r = this.containers.get(t);
        (l(r, () => `missing container for key ${t}`),
          e.writeUint16(t),
          e.writeUint8(r instanceof q ? qe.Array : qe.Bitmap),
          r.serialize(e));
      }
    }
    deserialize(e) {
      (l(this.containers.size === 0, "RoaringBitmap32 deserialize must be called when empty"),
        (this._count = e.readUint32()));
      let t = e.readUint32();
      for (let r = 0; r < t; r++) {
        let n = e.readUint16(),
          i = e.readUint8(),
          o;
        (i === qe.Array ? (o = new q()) : i === qe.Bitmap && (o = new V()),
          l(o, () => `invalid container type: ${i}`),
          o.deserialize(e),
          this.containers.set(n, o));
      }
    }
  };
function ms(s) {
  let e = new V();
  return (s.copyIntoBitmap(e), e);
}
function gs(s) {
  let e = new q();
  return (s.copyIntoArray(e), e);
}
var bs = 4294967295;
function Pe(s, e) {
  l(
    Number.isInteger(s) && s >= 0 && s <= bs,
    () => `${e} must be an unsigned 32-bit integer, received: ${s}`
  );
}
var He = class s {
  seqMapByClient = new Map();
  _count = 0;
  get count() {
    return this._count;
  }
  add(e, t) {
    (Pe(e, "client"), Mn(t, "seq"));
    let { seqHigh: r, seqLow: n } = On(t),
      i = this.seqMapByClient.get(e);
    i || ((i = new Map()), this.seqMapByClient.set(e, i));
    let o = i.get(r);
    o || ((o = new Le()), i.set(r, o));
    let a = o.add(n);
    return (a && (this._count += 1), a);
  }
  has(e, t) {
    (Pe(e, "client"), Mn(t, "seq"));
    let { seqHigh: r, seqLow: n } = On(t),
      i = this.seqMapByClient.get(e);
    if (!i) return !1;
    let o = i.get(r);
    return o ? o.has(n) : !1;
  }
  hasClient(e) {
    return this.seqMapByClient.has(e);
  }
  clone() {
    let e = new s();
    for (let [t, r] of this.seqMapByClient) {
      let n = new Map();
      for (let [i, o] of r) n.set(i, o.clone());
      e.seqMapByClient.set(t, n);
    }
    return ((e._count = this._count), e);
  }
  andNot(e) {
    let t = new s();
    for (let r of Q(this.seqMapByClient)) {
      let n = this.seqMapByClient.get(r);
      if (!n) continue;
      let i = e.seqMapByClient.get(r),
        o = new Map(),
        a = 0;
      for (let c of Q(n)) {
        let d = n.get(c);
        if (!d) continue;
        let h = i?.get(c),
          u = h ? d.andNot(h) : d.clone();
        u.count <= 0 || (o.set(c, u), (a += u.count));
      }
      a > 0 && (t.seqMapByClient.set(r, o), (t._count += a));
    }
    return t;
  }
  *[Symbol.iterator]() {
    for (let e of Q(this.seqMapByClient)) {
      let t = this.seqMapByClient.get(e);
      if (t)
        for (let r of Q(t)) {
          let n = t.get(r);
          if (n) for (let i of n) yield { client: e, seq: Is(r, i) };
        }
    }
  }
  toArray() {
    return [...this];
  }
  serialize(e) {
    (e.writeFloat64(this._count), e.writeFloat64(this.seqMapByClient.size));
    let t = Q(this.seqMapByClient);
    for (let r of t) {
      e.writeUint32(r);
      let n = this.seqMapByClient.get(r);
      (l(n, "seqMap must exist"), e.writeUint32(n.size));
      let i = Q(n);
      for (let o of i) {
        e.writeUint32(o);
        let a = n.get(o);
        (l(a, "seqLowBitmap must exist"), a.serialize(e));
      }
    }
  }
  deserialize(e) {
    (l(this.seqMapByClient.size === 0, "TimestampSet deserialize must be called when empty"),
      (this._count = e.readFloat64()));
    let t = e.readFloat64();
    for (let r = 0; r < t; r++) {
      let n = e.readUint32(),
        i = new Map(),
        o = e.readUint32();
      for (let a = 0; a < o; a++) {
        let c = e.readUint32(),
          d = new Le();
        (d.deserialize(e), i.set(c, d));
      }
      this.seqMapByClient.set(n, i);
    }
  }
};
function Q(s) {
  return Array.from(s.keys()).sort((e, t) => e - t);
}
var tr = 4294967296;
function Mn(s, e) {
  l(
    Number.isInteger(s) && s >= 0 && s <= Number.MAX_SAFE_INTEGER,
    () => `${e} must be a safe unsigned integer, received: ${s}`
  );
}
function On(s) {
  let e = Math.trunc(s / tr),
    t = s % tr;
  return { seqHigh: e, seqLow: t };
}
function Is(s, e) {
  return s * tr + e;
}
function Dn(s) {
  let e = new Map();
  for (let { client: t, seq: r } of s) {
    let n = e.get(t);
    (n || ((n = new Set()), e.set(t, n)), n.add(r));
  }
  return e;
}
var _ = class s {
    timestamps = new He();
    clientState = new Map();
    get count() {
      return this.timestamps.count;
    }
    addTimestamp(e, t) {
      return this.timestamps.add(e, t);
    }
    updateClientState(e, t, r) {
      let n = this.clientState.get(e);
      n
        ? ((n.maxSeq = Math.max(t, n.maxSeq)),
          r !== n.batch && ve(r) > ve(n.batch) && (n.batch = r))
        : ((n = { maxSeq: t, batch: r }), this.clientState.set(e, n));
    }
    copyClientStateFrom(e) {
      for (let [t, r] of e.clientState) this.updateClientState(t, r.maxSeq, r.batch);
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
      for (let t of Q(this.clientState)) {
        let r = this.clientState.get(t).maxSeq;
        e.push([t, r]);
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
      (e.writeUint32(Nn),
        e.writeUint16(kn),
        this.timestamps.serialize(e),
        e.writeUint32(this.clientState.size));
      for (let t of Q(this.clientState)) {
        let r = this.clientState.get(t);
        (e.writeUint32(t), e.writeFloat64(r.batch), e.writeFloat64(r.maxSeq));
      }
    }
    deserialize(e) {
      (l(this.timestamps.count === 0, "Manifest deserialize must be called when empty"),
        l(e.readUint32() === Nn, "Manifest magic mismatch"),
        l(e.readUint16() === kn, "Manifest version mismatch"),
        (this.timestamps = new He()),
        this.timestamps.deserialize(e),
        this.clientState.clear());
      let t = e.readUint32();
      for (let r = 0; r < t; r++) {
        let n = e.readUint32(),
          i = e.readFloat64(),
          o = e.readFloat64();
        this.clientState.set(n, { batch: i, maxSeq: o });
      }
    }
    toBuffer() {
      let e = new z();
      return (this.serialize(e), e.getBuffer());
    }
    toBase64() {
      let e = this.toBuffer();
      return wn(e);
    }
    static fromBuffer(e) {
      let t = new A(e),
        r = new s();
      return (r.deserialize(t), r);
    }
    static fromBase64(e) {
      let t = Sn(e);
      return s.fromBuffer(t);
    }
  },
  Nn = 1414743629,
  kn = 1;
var Bn = ["client", "seq", "batch", "id", "key", "value", "user"];
var rr = class {
  encode(e, t) {
    let r = e.main;
    (this.writeSection(1296389185, t, (i) => {
      xs(r.metadata, i);
    }),
      this.writeSection(1296125510, t, (i) => {
        As(r.manifest, i);
      }),
      this.writeSection(1129270355, t, (i) => {
        this.encodeColumns(r.columns, i);
      }));
    let n = r.hierarchyData;
    (n &&
      this.writeSection(1212761426, t, (i) => {
        vs(n, i);
      }),
      this.writeSection(1296649816, t, (i) => {
        ws(r.minIndexCache, i);
      }));
  }
  decode(e, t) {
    let r = e.main;
    for (; !t.endOfFile();) {
      let n = t.readUint32(),
        i = t.readFloat64(),
        o = new A(t.readBytes(i));
      switch (n) {
        case 1129270355:
          this.decodeColumns(r.columns, o);
          break;
        case 1296649816: {
          r.minIndexCache = Ss(o);
          break;
        }
        case 1212761426:
          r.hierarchyData = Cs(o);
          break;
        case 1296125510:
          r.manifest = Ts(o);
          break;
        case 1296389185:
          r.metadata = Rs(o);
          break;
        default:
          break;
      }
    }
  }
  fromSerializableRow(e) {
    let t = S(e.value) ? v(e.value) : e.value;
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
      C(t) && (t = x(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Bn.length);
    for (let r of Bn) {
      let n = e[r];
      (t.writeString(r), t.writeString(n.type), n.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let r = t.readUint32();
    for (let n = 0; n < r; n++) {
      let i = t.readString(),
        o = e[i];
      l(o, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== o.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${o.type} (expected)`);
      o.deserialize(t);
    }
  }
  writeSection(e, t, r) {
    let n = new z();
    r(n);
    let i = n.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function ws(s, e) {
  let t = s;
  (e.writeTypedArray(new Float64Array(t.seqs)),
    e.writeTypedArray(new Float64Array(t.idxs)),
    e.writeUint32(t.maxSize ?? 0));
}
function Ss(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    r = s.readUint32(),
    n = new E({ maxSize: r });
  return (n.load(e, t), n);
}
function vs(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([r, n]) => [
      r,
      [...n].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              C(d.parentFrom) && (d.parentFrom = x(d.parentFrom)),
              C(d.parentTo) && (d.parentTo = x(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function Cs(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [n, i] of e) {
    let o = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let u = c[h];
        (S(u.parentFrom) && (u.parentFrom = v(u.parentFrom)),
          S(u.parentTo) && (u.parentTo = v(u.parentTo)),
          d.set(Number(h), u));
      }
      o.set(a, d);
    }
    t.set(n, o);
  }
  let r = Array.from(s.readTypedArray(Uint32Array));
  return new L(r, t);
}
function xs(s, e) {
  e.writeFloat64(s.seq);
}
function Rs(s) {
  return { seq: s.readFloat64(), compactedAt: 0, compactedLength: 0 };
}
function As(s, e) {
  s.serialize(e);
}
function Ts(s) {
  let e = new _();
  return (e.deserialize(s), e);
}
var En = { description: "Adds named sections to binary documents", codec: new rr(), migrate() {} };
var Ce = class {
    values = new H(Float64Array, Z, "seq");
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
      (this.assertDataAvailable(), e.writeVarUint(this.values.length));
      let t = 0;
      for (let r of this.values.readSlices())
        for (let n = 0; n < r.length; n++) {
          let i = r[n];
          (e.writeVarUint(Ms(i - t)), (t = i));
        }
    }
    deserialize(e, t) {
      let r = e.readVarUint();
      if (t?.skipData) {
        for (let i = 0; i < r; i++) e.readVarUint();
        this.skippedLength = r;
        return;
      }
      this.skippedLength = void 0;
      let n = 0;
      for (let i of this.values.writeSlices(r))
        for (let o = 0; o < i.length; o++) {
          let a = n + Os(e.readVarUint());
          ((i[o] = a), (n = a));
        }
    }
    assertDataAvailable() {
      if (this.skippedLength !== void 0) throw new Error("DeltaEncodedSeqColumn data was skipped");
    }
  },
  _n = 2 ** 52;
function Ms(s) {
  return (
    l(s >= -_n && s <= _n, () => `seq delta out of zigzag-safe range: ${s}`),
    s >= 0 ? s * 2 : -s * 2 - 1
  );
}
function Os(s) {
  return s % 2 === 0 ? s / 2 : -(s + 1) / 2;
}
var Ue = 16,
  nr = {
    description: "Convert the seq column to delta encoding on every branch",
    migrate: (s) => {
      for (let e of s.branches.values()) {
        let t = e.columns.seq,
          r = new Ce();
        for (let n = 0; n < t.length; n++) r.add(t.get(n));
        e.columns.seq = r;
      }
    },
  };
var zn = {
  forVersion(s) {
    return s >= Ue ? new Ce() : new H(Float64Array, Z, "seq");
  },
};
var Ln = 17,
  qn = ["client", "seq", "batch", "id", "key", "value", "user", "time"];
var ir = class {
  encode(e, t) {
    let r = e.branches;
    t.writeUint32(r.size);
    for (let [n, i] of r) {
      t.writeString(n);
      let o = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (d) => {
          Es(i.metadata, d);
        }),
          this.writeSection(1296125510, t, (d) => {
            zs(i.manifest, d);
          }),
          this.writeSection(1129270355, t, (d) => {
            this.encodeColumns(i.columns, d);
          }));
        let c = i.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (d) => {
            Ds(c, d);
          }),
          this.writeSection(1296649816, t, (d) => {
            Ns(i.minIndexCache, d);
          }));
      }),
        t.writeFloat64At(o, t.byteOffset - a));
    }
  }
  decode(e, t, r) {
    let n = t.readUint32(),
      i = new Map();
    for (let o = 0; o < n; o++) {
      let a = t.readString(),
        c = t.readFloat64(),
        d = t.readDeferredBytes(c);
      if (r?.branchIds && !r.branchIds.has(a)) continue;
      let h = new O(this, a, e.version),
        u = new A(d, t.dataAvailability);
      for (; !u.endOfFile();) {
        let f = u.readUint32(),
          p = u.readFloat64(),
          m = new A(u.readDeferredBytes(p), t.dataAvailability);
        switch (f) {
          case 1129270355:
            this.decodeColumns(h.columns, m, a, r);
            break;
          case 1296649816:
            h.minIndexCache = ks(m);
            break;
          case 1212761426:
            h.hierarchyData = Bs(m);
            break;
          case 1296125510:
            h.manifest = qs(m);
            break;
          case 1296389185:
            h.metadata = _s(m);
            break;
          default:
            break;
        }
      }
      ((h.metadata.branchId = h.metadata.branchId ?? a), i.set(a, h));
    }
    ((e.branches = i), e.branches.has(I) || e.branches.set(I, new O(this, I, e.version)));
  }
  fromSerializableRow(e) {
    let t = S(e.value) ? v(e.value) : e.value;
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
      C(t) && (t = x(t)),
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
    t.writeUint32(qn.length);
    for (let r of qn) {
      let n = e[r];
      (t.writeString(r), t.writeString(n.type), n.serialize(t));
    }
  }
  decodeColumns(e, t, r, n) {
    let i = t.readUint32();
    for (let o = 0; o < i; o++) {
      let a = t.readString(),
        c = e[a];
      l(c, () => `Column ${a} not found`);
      let d = t.readString(),
        h = performance.now();
      if (
        (c.deserialize(t, {
          type: d,
          estimatedUniqueCount: e.id.length,
          indexLazyUniques: n?.indexLazyColumnUniques?.has(a),
          skipData: n?.skipColumnData?.has(a),
          lazyUniques: n?.lazyColumnUniques?.has(a),
          stringCodeMap: n?.stringCodeMaps && (a === "id" || a === "key"),
          zeroCopyIndices: n?.zeroCopyColumnIndices,
        }),
        d !== c.type)
      )
        throw new Error(
          `Column type does not match in branch "${r}": ${d} (actual) != ${c.type} (expected)`
        );
      n?.onTiming?.(`column_${a}`, performance.now() - h);
    }
  }
  writeSection(e, t, r) {
    t.writeUint32(e);
    let n = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      r(t);
    }),
      t.writeFloat64At(n, t.byteOffset - i));
  }
};
function Ns(s, e) {
  (s.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function ks(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    r = s.readUint32(),
    n = new E({ maxSize: r });
  return (n.load(e, t), n);
}
function Ds(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([r, n]) => [
      r,
      [...n].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              C(d.parentFrom) && (d.parentFrom = x(d.parentFrom)),
              C(d.parentTo) && (d.parentTo = x(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function Bs(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [n, i] of e) {
    let o = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let u = c[h];
        (S(u.parentFrom) && (u.parentFrom = v(u.parentFrom)),
          S(u.parentTo) && (u.parentTo = v(u.parentTo)),
          d.set(Number(h), u));
      }
      o.set(a, d);
    }
    t.set(n, o);
  }
  let r = Array.from(s.readTypedArray(Uint32Array));
  return new L(r, t);
}
function Es(s, e) {
  (e.writeFloat64(s.seq),
    e.writeString(s.branchId ?? I),
    e.writeFloat64(s.compactedAt),
    e.writeFloat64(s.compactedLength));
}
function _s(s) {
  let e = s.readFloat64(),
    t = s.readString(),
    r = s.readFloat64(),
    n = s.readFloat64();
  return { seq: e, branchId: t, compactedAt: r, compactedLength: n };
}
function zs(s, e) {
  s.serialize(e);
}
function qs(s) {
  let e = new _();
  return (e.deserialize(s), e);
}
function Ls(s) {
  for (let e of s.branches.values()) {
    let t = e.columns,
      r = new H(Uint32Array, Z, "time");
    (r.addMany(new Uint32Array(t.length)), (t.time = r));
  }
}
var Pn = {
  description: "Adds the time column, zero-filled, to every branch",
  codec: new ir(),
  migrate: Ls,
};
var ht = class {
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
  deserialize(e) {
    throw new Error("The time column is not part of the binary format before it was introduced");
  }
};
var Hn = {
  forVersion(s) {
    return s >= Ln ? new H(Uint32Array, Z, "time") : new ht();
  },
};
var sr = class {
    client = F.withBuckets({ buffer: Uint32Array }).create();
    seq;
    batch = F.withBuckets({ buffer: Uint32Array }).create();
    id = new U();
    key = new U();
    value = new U();
    user = F.withBuckets({ buffer: Uint8Array, widenTo: Uint16Array }).create();
    time;
    constructor(e) {
      ((this.seq = zn.forVersion(e)), (this.time = Hn.forVersion(e)));
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
  O = class {
    constructor(e, t, r) {
      this.codec = e;
      ((this.columns = new sr(r)),
        (this.metadata = { seq: 1, branchId: t, compactedAt: 0, compactedLength: 0 }));
    }
    codec;
    columns;
    minIndexCache = new E({ maxSize: 1e3 });
    hierarchyData;
    manifest = new _();
    metadata;
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
      let r = Array.from({ length: t - e });
      for (let n = e; n < t; n++) r[n - e] = this.getRowInternal(n);
      return r;
    }
    getSerializableRow(e) {
      let t = this.codec;
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      let r = this.getRowInternal(e);
      return t.toSerializableRow(r);
    }
    getSerializableRows(e = 0, t = this.columns.client.length) {
      let r = this.codec;
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let n = Array.from({ length: t - e });
      for (let i = e; i < t; ++i) {
        let o = this.getRowInternal(i);
        n[i - e] = r.toSerializableRow(o);
      }
      return n;
    }
    getSerializableRowsAfterManifest(e) {
      let t = this.codec,
        r = [];
      for (let n = 0; n < this.columns.client.length; n++) {
        let i = this.columns.seq.get(n),
          o = this.columns.client.get(n),
          a = e.getMaxSeq(o) ?? -1;
        if (i <= a) continue;
        let c = t.toSerializableRow(this.getRowInternal(n));
        r.push(c);
      }
      return r;
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
      let r = Dn(t.extra),
        n = [];
      for (let i = 0; i < this.columns.client.length; i++) {
        let o = r.get(this.columns.client.get(i));
        !o || !o.has(this.columns.seq.get(i)) || n.push(this.getSerializableRow(i));
      }
      return n;
    }
  };
var Un = ["client", "seq", "batch", "id", "key", "value", "user"];
var or = class {
  encode(e, t) {
    let r = e.branches;
    t.writeUint32(r.size);
    for (let [n, i] of r) {
      t.writeString(n);
      let o = new z();
      (this.writeSection(1296389185, o, (d) => {
        Ks(i.metadata, d);
      }),
        this.writeSection(1296125510, o, (d) => {
          js(i.manifest, d);
        }),
        this.writeSection(1129270355, o, (d) => {
          this.encodeColumns(i.columns, d);
        }));
      let a = i.hierarchyData;
      (a &&
        this.writeSection(1212761426, o, (d) => {
          Us(a, d);
        }),
        this.writeSection(1296649816, o, (d) => {
          Ps(i.minIndexCache, d);
        }));
      let c = o.getBuffer();
      (t.writeFloat64(c.length), t.writeBytes(c));
    }
  }
  decode(e, t) {
    let r = t.readUint32(),
      n = new Map();
    for (let i = 0; i < r; i++) {
      let o = t.readString(),
        a = new O(this, o, e.version),
        c = t.readFloat64(),
        d = new A(t.readBytes(c));
      for (; !d.endOfFile();) {
        let h = d.readUint32(),
          u = d.readFloat64(),
          f = new A(d.readBytes(u));
        switch (h) {
          case 1129270355:
            this.decodeColumns(a.columns, f);
            break;
          case 1296649816:
            a.minIndexCache = Hs(f);
            break;
          case 1212761426:
            a.hierarchyData = Vs(f);
            break;
          case 1296125510:
            a.manifest = $s(f);
            break;
          case 1296389185:
            a.metadata = Fs(f);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? o), n.set(o, a));
    }
    ((e.branches = n), e.branches.has(I) || e.branches.set(I, new O(this, I, e.version)));
  }
  fromSerializableRow(e) {
    let t = S(e.value) ? v(e.value) : e.value;
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
      C(t) && (t = x(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Un.length);
    for (let r of Un) {
      let n = e[r];
      (t.writeString(r), t.writeString(n.type), n.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let r = t.readUint32();
    for (let n = 0; n < r; n++) {
      let i = t.readString(),
        o = e[i];
      l(o, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== o.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${o.type} (expected)`);
      o.deserialize(t);
    }
  }
  writeSection(e, t, r) {
    let n = new z();
    r(n);
    let i = n.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function Ps(s, e) {
  (e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function Hs(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    r = s.readUint32(),
    n = new E({ maxSize: r });
  return (n.load(e, t), n);
}
function Us(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([r, n]) => [
      r,
      [...n].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              C(d.parentFrom) && (d.parentFrom = x(d.parentFrom)),
              C(d.parentTo) && (d.parentTo = x(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function Vs(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [n, i] of e) {
    let o = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let u = c[h];
        (S(u.parentFrom) && (u.parentFrom = v(u.parentFrom)),
          S(u.parentTo) && (u.parentTo = v(u.parentTo)),
          d.set(Number(h), u));
      }
      o.set(a, d);
    }
    t.set(n, o);
  }
  let r = Array.from(s.readTypedArray(Uint32Array));
  return new L(r, t);
}
function Ks(s, e) {
  (e.writeFloat64(s.seq), e.writeString(s.branchId ?? I));
}
function Fs(s) {
  let e = s.readFloat64(),
    t = s.readString();
  return { seq: e, branchId: t, compactedAt: 0, compactedLength: 0 };
}
function js(s, e) {
  s.serialize(e);
}
function $s(s) {
  let e = new _();
  return (e.deserialize(s), e);
}
var Vn = { description: "Stores table data by branches", codec: new or(), migrate() {} };
var Kn = ["client", "seq", "batch", "id", "key", "value", "user"];
var ar = class {
  encode(e, t) {
    let r = e.branches;
    t.writeUint32(r.size);
    for (let [n, i] of r) {
      t.writeString(n);
      let o = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (d) => {
          Xs(i.metadata, d);
        }),
          this.writeSection(1296125510, t, (d) => {
            Qs(i.manifest, d);
          }),
          this.writeSection(1129270355, t, (d) => {
            this.encodeColumns(i.columns, d);
          }));
        let c = i.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (d) => {
            Ys(c, d);
          }),
          this.writeSection(1296649816, t, (d) => {
            Ws(i.minIndexCache, d);
          }));
      }),
        t.writeFloat64At(o, t.byteOffset - a));
    }
  }
  decode(e, t, r) {
    let n = t.readUint32(),
      i = new Map();
    for (let o = 0; o < n; o++) {
      let a = t.readString(),
        c = t.readFloat64(),
        d = t.readDeferredBytes(c);
      if (r?.branchIds && !r.branchIds.has(a)) continue;
      let h = new O(this, a, e.version),
        u = new A(d, t.dataAvailability);
      for (; !u.endOfFile();) {
        let f = u.readUint32(),
          p = u.readFloat64(),
          m = new A(u.readDeferredBytes(p), t.dataAvailability);
        switch (f) {
          case 1129270355:
            this.decodeColumns(h.columns, m, a, r);
            break;
          case 1296649816:
            h.minIndexCache = Gs(m);
            break;
          case 1212761426:
            h.hierarchyData = Js(m);
            break;
          case 1296125510:
            h.manifest = eo(m);
            break;
          case 1296389185:
            h.metadata = Zs(m);
            break;
          default:
            break;
        }
      }
      ((h.metadata.branchId = h.metadata.branchId ?? a), i.set(a, h));
    }
    ((e.branches = i), e.branches.has(I) || e.branches.set(I, new O(this, I, e.version)));
  }
  fromSerializableRow(e) {
    let t = S(e.value) ? v(e.value) : e.value;
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
      C(t) && (t = x(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Kn.length);
    for (let r of Kn) {
      let n = e[r];
      (t.writeString(r), t.writeString(n.type), n.serialize(t));
    }
  }
  decodeColumns(e, t, r, n) {
    let i = t.readUint32();
    for (let o = 0; o < i; o++) {
      let a = t.readString(),
        c = e[a];
      l(c, () => `Column ${a} not found`);
      let d = t.readString();
      if (d !== c.type)
        throw new Error(
          `Column type does not match in branch "${r}": ${d} (actual) != ${c.type} (expected)`
        );
      let h = performance.now();
      (c.deserialize(t, {
        estimatedUniqueCount: e.id.length,
        indexLazyUniques: n?.indexLazyColumnUniques?.has(a),
        skipData: n?.skipColumnData?.has(a),
        lazyUniques: n?.lazyColumnUniques?.has(a),
        stringCodeMap: n?.stringCodeMaps && (a === "id" || a === "key"),
        zeroCopyIndices: n?.zeroCopyColumnIndices,
      }),
        n?.onTiming?.(`column_${a}`, performance.now() - h));
    }
  }
  writeSection(e, t, r) {
    t.writeUint32(e);
    let n = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      r(t);
    }),
      t.writeFloat64At(n, t.byteOffset - i));
  }
};
function Ws(s, e) {
  (s.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(s.seqs)),
    e.writeTypedArray(new Float64Array(s.idxs)),
    e.writeUint32(s.maxSize ?? 0));
}
function Gs(s) {
  let e = Array.from(s.readTypedArray(Float64Array)),
    t = Array.from(s.readTypedArray(Float64Array)),
    r = s.readUint32(),
    n = new E({ maxSize: r });
  return (n.load(e, t), n);
}
function Ys(s, e) {
  let t = JSON.stringify(
    [...s.parentOverrides].map(([r, n]) => [
      r,
      [...n].map(([i, o]) => [
        i,
        Object.fromEntries(
          [...o].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              C(d.parentFrom) && (d.parentFrom = x(d.parentFrom)),
              C(d.parentTo) && (d.parentTo = x(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(s.parentHistory)));
}
function Js(s) {
  let e = JSON.parse(s.readString()),
    t = new Map();
  for (let [n, i] of e) {
    let o = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let h in c) {
        let u = c[h];
        (S(u.parentFrom) && (u.parentFrom = v(u.parentFrom)),
          S(u.parentTo) && (u.parentTo = v(u.parentTo)),
          d.set(Number(h), u));
      }
      o.set(a, d);
    }
    t.set(n, o);
  }
  let r = Array.from(s.readTypedArray(Uint32Array));
  return new L(r, t);
}
function Xs(s, e) {
  (e.writeFloat64(s.seq),
    e.writeString(s.branchId ?? I),
    e.writeFloat64(s.compactedAt),
    e.writeFloat64(s.compactedLength));
}
function Zs(s) {
  let e = s.readFloat64(),
    t = s.readString(),
    r = s.readFloat64(),
    n = s.readFloat64();
  return { seq: e, branchId: t, compactedAt: r, compactedLength: n };
}
function Qs(s, e) {
  s.serialize(e);
}
function eo(s) {
  let e = new _();
  return (e.deserialize(s), e);
}
function to(s) {
  let e = Date.now();
  for (let t of s.branches.values())
    ((t.metadata.compactedAt = e), (t.metadata.compactedLength = t.columns.length));
}
var Fn = {
  description: "Adds compactedAt and compactedLength to branch metadata",
  codec: new ar(),
  migrate: to,
};
var jn = {
  description: "Clear caches to fix wrong hierarchy data",
  migrate: (s) => {
    for (let e of s.branches.values())
      ((e.hierarchyData = void 0),
        (e.minIndexCache = new E({ maxSize: 1e3 })),
        (e.metadata.seq = 0),
        (e.manifest = new _()));
  },
};
var $n = {
  description: "Merge double-escaped __deleted keys back into _deleted",
  migrate: (s) => {
    for (let e of s.branches.values()) {
      let t = e.columns.id,
        r = e.columns.key,
        n = e.columns.value,
        i = e.columns.seq,
        o = e.columns.client,
        a = new Set();
      for (let d = 0; d < r.length; d++)
        if (r.get(d) === "__deleted") {
          let u = t.get(d);
          if (!u.includes("replicaInfo.overrides")) continue;
          a.add(u);
        }
      let c = new Map();
      for (let d = 0; d < r.length; d++) {
        let h = t.get(d);
        if (a.has(h)) {
          let u = r.get(d);
          if (u === "_deleted") {
            let f = c.get(h);
            f === void 0 && ((f = {}), c.set(h, f));
            let p = f._deleted;
            (p === void 0 || Y(i.get(d), o.get(d), i.get(p.row), o.get(p.row))) &&
              (f._deleted = { row: d, value: n.get(d) });
          } else if (u === "__deleted") {
            let f = c.get(h);
            f === void 0 && ((f = {}), c.set(h, f));
            let p = f.__deleted;
            ((p === void 0 || Y(i.get(d), o.get(d), i.get(p.row), o.get(p.row))) &&
              (f.__deleted = { row: d, value: n.get(d) }),
              e.columns.key._set(d, "_deleted"));
          }
        }
      }
      for (let d of c.values()) {
        let h = d.__deleted;
        if (h !== void 0 && d._deleted !== void 0) {
          let u = d._deleted;
          if (Array.isArray(h.value) && Array.isArray(u.value)) {
            let f = Array.from(new Set([...h.value, ...u.value]));
            (e.columns.value._set(u.row, f), e.columns.value._set(h.row, f));
          } else
            Array.isArray(h.value)
              ? e.columns.value._set(u.row, h.value)
              : Array.isArray(u.value)
                ? e.columns.value._set(h.row, u.value)
                : (e.columns.value._set(h.row, y), e.columns.value._set(u.row, y));
        }
      }
    }
  },
};
var cr = "FRBR",
  hr = 2,
  Ve = "__$$framerCrdtSpecialNumber$$__",
  Ke = class {
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
      let t = new A(e);
      (l(t.readString() === cr, "Invalid binary rows magic"),
        l(t.readUint8() === hr, "Unsupported binary rows version"),
        (this.length = t.readUint32()),
        (this.clients = t.readTypedArray(Float64Array)),
        (this.sequences = t.readTypedArray(Float64Array)),
        (this.batches = t.readTypedArray(Float64Array)),
        (this.times = t.readTypedArray(Uint32Array)));
      let r = Gn(t);
      ((this.ids = r.ids),
        (this.keys = r.keys),
        (this.users = r.users),
        (this.branchIds = r.branchIds),
        (this.values = Gn(t)),
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
          ].every((n) => n === this.length),
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
        batch: io(this.batches[e]),
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
function Zc(s) {
  let e = [],
    t = [],
    r = [],
    n = [],
    i = [],
    o = [],
    a = [],
    c = [],
    d = [];
  for (let u of s)
    (e.push(u.client),
      t.push(u.seq),
      r.push(u.batch ?? Number.NaN),
      n.push(u.time),
      i.push(u.id),
      o.push(u.key),
      a.push(u.value),
      c.push(u.user),
      d.push(u.branchId ?? null));
  let h = new z();
  return (
    h.writeString(cr),
    h.writeUint8(hr),
    h.writeUint32(i.length),
    h.writeTypedArray(new Float64Array(e)),
    h.writeTypedArray(new Float64Array(t)),
    h.writeTypedArray(new Float64Array(r)),
    h.writeTypedArray(new Uint32Array(n)),
    Wn(h, { ids: i, keys: o, users: c, branchIds: d }),
    Wn(h, a),
    h.getBuffer()
  );
}
function Qc(s) {
  let e = new A(s);
  return (
    l(e.readString() === cr, "Invalid binary rows magic"),
    l(e.readUint8() === hr, "Unsupported binary rows version"),
    e.readUint32()
  );
}
function Wn(s, e) {
  let t = new TextEncoder().encode(JSON.stringify(e, ro));
  (s.writeUint32(t.length), s.writeBytes(t));
}
function Gn(s) {
  let e = s.readBytes(s.readUint32());
  return dr(JSON.parse(new TextDecoder().decode(e)));
}
function ro(s, e) {
  return C(e)
    ? x(e)
    : typeof e != "number"
      ? e
      : Object.is(e, -0)
        ? { [Ve]: "-0" }
        : Number.isFinite(e)
          ? e
          : Number.isNaN(e)
            ? { [Ve]: "NaN" }
            : { [Ve]: e === Number.POSITIVE_INFINITY ? "Infinity" : "-Infinity" };
}
function no(s) {
  if (typeof s != "object" || s === null) return !1;
  let e = Ve;
  if (!(e in s)) return !1;
  let t = Reflect.get(s, e);
  return t === "NaN" || t === "Infinity" || t === "-Infinity" || t === "-0";
}
function dr(s) {
  if (S(s)) return v(s);
  if (no(s)) {
    let e = s[Ve];
    return e === "NaN"
      ? Number.NaN
      : e === "-0"
        ? -0
        : e === "Infinity"
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY;
  }
  if (Array.isArray(s)) {
    for (let e = 0; e < s.length; e++) s[e] = dr(s[e]);
    return s;
  }
  if (typeof s != "object" || s === null) return s;
  for (let e of Object.keys(s)) Reflect.set(s, e, dr(Reflect.get(s, e)));
  return s;
}
function io(s) {
  return Number.isNaN(s) ? void 0 : s;
}
var ur = class {
    constructor(e) {
      this.nodeId = e;
    }
    nodeId;
    hasParentIdOwnWrite = !1;
    latestPropertyRowIndexByStoreId = new Map();
    recordPropertyOwnWrite(e, t, r, n) {
      let i = this.getOrCreateLatestRowIndexByPropertyKey(t),
        o = i.get(r);
      (o === void 0 || P(e, n, o)) && i.set(r, n);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let r = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, r), r);
    }
  },
  ut = class {
    constructor(e) {
      this.branchData = e;
    }
    branchData;
    touchedNodeIdByRowIndex = [];
    ownWriteSummaryByNodeId = new Map();
    nodeIdsWithParentIdOwnWrites = new Set();
    indexOwnRow(e) {
      let t = this.branchData.columns,
        r = t.id.get(e),
        n = t.key.get(e),
        i = lt(r, n);
      if (((this.touchedNodeIdByRowIndex[e] = i), !i)) return;
      let o = this.getOrCreateOwnWriteSummary(i);
      n === "parentid"
        ? ((o.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(i))
        : o.recordPropertyOwnWrite(t, r, n, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let r = new Set();
      for (let n = e; n < t; n++) {
        let i = this.touchedNodeIdByRowIndex[n];
        i && r.add(i);
      }
      return r;
    }
    getNodeIdsWithOwnWrites() {
      return this.ownWriteSummaryByNodeId.keys();
    }
    getNodeIdsWithParentIdOwnWrites() {
      return this.nodeIdsWithParentIdOwnWrites.values();
    }
    getOwnWriteSummary(e) {
      return this.ownWriteSummaryByNodeId.get(e);
    }
    getOrCreateOwnWriteSummary(e) {
      let t = this.ownWriteSummaryByNodeId.get(e);
      if (t) return t;
      let r = new ur(e);
      return (this.ownWriteSummaryByNodeId.set(e, r), r);
    }
  };
function lt(s, e) {
  if (s === k || e === "children" || e === w) return;
  let t = s.indexOf(".");
  return t < 0 ? s : s.slice(0, t);
}
var pt = class {
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
      let r = lt(e, t);
      return (r && this.dependencyNodeIds.add(r), this.store.getObjectKey(e, t));
    }
  },
  yt = class {
    groupKeysByChangedNodeId = new Map();
    changedNodeIdsByGroupKey = new Map();
    setGroupsForChangedNode(e, t) {
      if ((this.deleteGroupsForChangedNode(e), t.size !== 0)) {
        this.groupKeysByChangedNodeId.set(e, t);
        for (let r of t) {
          let n = this.changedNodeIdsByGroupKey.get(r);
          (n || ((n = new Set()), this.changedNodeIdsByGroupKey.set(r, n)), n.add(e));
        }
      }
    }
    deleteGroupsForChangedNode(e) {
      let t = this.groupKeysByChangedNodeId.get(e);
      if (t) {
        this.groupKeysByChangedNodeId.delete(e);
        for (let r of t) {
          let n = this.changedNodeIdsByGroupKey.get(r);
          n && (n.delete(e), n.size === 0 && this.changedNodeIdsByGroupKey.delete(r));
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
  mt = class {
    dependencyNodeIdsByChangedNodeId = new Map();
    changedNodeIdsByDependencyNodeId = new Map();
    setDependenciesForChangedNode(e, t) {
      if ((this.deleteDependenciesForChangedNode(e), t.size !== 0)) {
        this.dependencyNodeIdsByChangedNodeId.set(e, t);
        for (let r of t) {
          let n = this.changedNodeIdsByDependencyNodeId.get(r);
          (n || ((n = new Set()), this.changedNodeIdsByDependencyNodeId.set(r, n)), n.add(e));
        }
      }
    }
    deleteDependenciesForChangedNode(e) {
      let t = this.dependencyNodeIdsByChangedNodeId.get(e);
      if (t) {
        this.dependencyNodeIdsByChangedNodeId.delete(e);
        for (let r of t) {
          let n = this.changedNodeIdsByDependencyNodeId.get(r);
          n && (n.delete(e), n.size === 0 && this.changedNodeIdsByDependencyNodeId.delete(r));
        }
      }
    }
    addChangedNodeIdsForDependency(e, t) {
      let r = this.changedNodeIdsByDependencyNodeId.get(e);
      if (r) for (let n of r) t.add(n);
    }
  },
  gt = class {
    constructor(e, t, r) {
      this.groupKey = e;
      this.nodeChangeByNodeId = t;
      this.changedNodeIds = r;
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
  fr = class {
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
      if (!(!t || t.size === 0)) return new gt(e, this.nodeChangeByNodeId, t);
    }
    *changeGroups() {
      for (let [e, t] of this.nodeChangeGroupIndex.entries())
        yield new gt(e, this.nodeChangeByNodeId, t);
    }
  },
  bt = class {
    constructor(e, t) {
      this.store = e;
      let r = e.base;
      (l(r, "Can't read node changes for main branch"),
        (this.baseStore = r),
        (this.resolveGroup = t.resolveGroup));
      let n = new Set(t.ignoredPropertyKeys);
      this.nodeChangeResolver = new pr(e, n);
    }
    store;
    baseStore;
    nodeChangeResolver;
    resolveGroup;
    nodeChanges;
    branchCursor;
    baseStoreCursors = [];
    nodeChangeByNodeId = new Map();
    nodeChangeGroupIndex = new yt();
    nodeChangeDependencyIndex = new mt();
    changesRevision = 0;
    read() {
      if (!this.nodeChanges) return this.rebuildChanges();
      let e = ft(this.store),
        t = lr(this.store);
      return this.cursorsAreCurrent(e, t)
        ? this.nodeChanges
        : this.canUpdateIncrementally(e, t)
          ? (this.updateIncrementally(e, t), this.nodeChanges)
          : this.rebuildChanges();
    }
    isCurrent() {
      return this.nodeChanges ? this.cursorsAreCurrent(ft(this.store), lr(this.store)) : !1;
    }
    get revision() {
      return this.changesRevision;
    }
    cursorsAreCurrent(e, t) {
      let r = this.branchCursor;
      if (!r || !Yn(r, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let n = 0; n < t.length; n++) {
        let i = this.baseStoreCursors[n],
          o = t[n];
        if (!i || !o || !Yn(i, o)) return !1;
      }
      return !0;
    }
    canUpdateIncrementally(e, t) {
      let r = this.branchCursor;
      if (!r || !Jn(r, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let n = 0; n < t.length; n++) {
        let i = this.baseStoreCursors[n],
          o = t[n];
        if (!i || !o || !Jn(i, o)) return !1;
      }
      return !0;
    }
    rebuildChanges() {
      ((this.nodeChangeByNodeId = new Map()),
        (this.nodeChangeGroupIndex = new yt()),
        (this.nodeChangeDependencyIndex = new mt()),
        (this.nodeChanges = new fr(this.nodeChangeByNodeId, this.nodeChangeGroupIndex)),
        this.changesRevision++);
      let e = this.store.getBranchOwnWriteIndex();
      for (let t of e.getNodeIdsWithOwnWrites()) {
        if (!this.store.isMaterializableNode(t)) continue;
        let r = this.nodeChangeResolver.resolveNodeChange(t);
        r && this.addNodeChange(r);
      }
      return (
        (this.branchCursor = ft(this.store)),
        (this.baseStoreCursors = lr(this.store)),
        this.nodeChanges
      );
    }
    updateIncrementally(e, t) {
      let r = this.branchCursor;
      if (!r) throw new Error("Missing branch node change reader cursor");
      let n = new Set(),
        i = new Set();
      (this.collectRowChanges(this.store, r.length, e.length, n, i),
        this.collectHierarchyChanges(this.store, r.hierarchyCursor, n, i));
      for (let a = 0; a < t.length; a++) {
        let c = this.baseStoreCursors[a],
          d = t[a];
        if (!c || !d) continue;
        let h = new Set();
        (this.collectRowChanges(d.store, c.length, d.length, n, h),
          this.collectHierarchyChanges(d.store, c.hierarchyCursor, n, h),
          this.collectOwnWriteNodeIdsInSubtrees(d.store, h, n));
        for (let u of h) i.add(u);
      }
      this.collectOwnWriteNodeIdsInSubtrees(this.store, i, n);
      let o = new Set();
      for (let a of n) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(a, o);
      for (let a of o) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(a, o);
      for (let a of n) o.delete(a);
      (this.recomputeNodeChanges(n),
        this.regroupNodeChanges(o),
        (this.branchCursor = e),
        (this.baseStoreCursors = t),
        this.changesRevision++);
    }
    collectRowChanges(e, t, r, n, i) {
      let o = e.branchData.columns;
      for (let a = t; a < r; a++) {
        let c = o.id.get(a),
          d = o.key.get(a),
          h = lt(c, d);
        h && (n.add(h), i && d === "parentid" && i.add(h));
      }
    }
    collectHierarchyChanges(e, t, r, n) {
      let i =
        e.getHierarchy().getInvalidatedNodeIdsSince(t) ??
        this.store.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites();
      for (let o of i) (r.add(o), n.add(o));
    }
    collectOwnWriteNodeIdsInSubtrees(e, t, r) {
      let n = this.store.getBranchOwnWriteIndex(),
        i = new Set(t);
      for (let o of i) {
        n.getOwnWriteSummary(o) && r.add(o);
        for (let a of e.getChildrenIds(o)) i.add(a);
      }
    }
    recomputeNodeChanges(e) {
      if (e.size !== 0)
        for (let t of e) {
          if ((this.removeNodeChange(t), !this.store.isMaterializableNode(t))) continue;
          let r = this.nodeChangeResolver.resolveNodeChange(t);
          r && this.addNodeChange(r);
        }
    }
    regroupNodeChanges(e) {
      let t = new Set();
      for (let r of e) {
        let n = this.nodeChangeByNodeId.get(r);
        if (n) {
          if (n.type === "removed" || n.type === "moved") {
            t.add(r);
            continue;
          }
          this.addNodeChange(n);
        }
      }
      this.recomputeNodeChanges(t);
    }
    addNodeChange(e) {
      let t = new Set(),
        r = { branch: new pt(this.store, t), base: new pt(this.baseStore, t) },
        n = this.resolveNodeChangeGroups(e, r);
      (this.nodeChangeByNodeId.set(e.nodeId, e),
        this.nodeChangeGroupIndex.setGroupsForChangedNode(e.nodeId, n),
        this.nodeChangeDependencyIndex.setDependenciesForChangedNode(e.nodeId, t));
    }
    removeNodeChange(e) {
      (this.nodeChangeByNodeId.delete(e),
        this.nodeChangeGroupIndex.deleteGroupsForChangedNode(e),
        this.nodeChangeDependencyIndex.deleteDependenciesForChangedNode(e));
    }
    resolveNodeChangeGroups(e, t) {
      let r = this.resolveGroup(e, t);
      if (typeof r == "string") {
        let n = new Set();
        return (n.add(r), n);
      }
      return r instanceof Set ? r : new Set(r);
    }
  },
  pr = class {
    constructor(e, t) {
      this.store = e;
      this.ignoredPropertyKeys = t;
      let r = e.base;
      (l(r, "Can't get node changes for main branch"), (this.baseStore = r));
    }
    store;
    ignoredPropertyKeys;
    baseStore;
    resolveNodeChange(e) {
      let t = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (!t) return;
      let r = new Set();
      if (t.hasParentIdOwnWrite) return this.resolveHierarchyNodeChange(t, r);
      let n = this.store.getHierarchy().getParentId(t.nodeId);
      return this.createNodeChangeUpdated(t, typeof n == "string" ? n : void 0, r);
    }
    resolveHierarchyNodeChange(e, t) {
      let r = e.nodeId,
        n = this.store.getHierarchy(),
        i = n.getOwnParentRowIdx(r);
      l(i !== void 0, () => `Can't find parentId row index for ${r}`);
      let o = this.store.branchData.columns;
      if (o.value.get(i) === b) {
        let u = n.getParentId(r);
        return this.createNodeChangeUpdated(e, typeof u == "string" ? u : void 0, t);
      }
      let c = o.user.get(i),
        d = this.baseStore.getHierarchy().getParentId(r),
        h = n.getParentId(r);
      if (typeof d == "string" && typeof h == "string")
        return (t.add(c), this.createNodeChangeMoved(e, d, h, t));
      if (typeof d == "string") return (t.add(c), this.createNodeChangeRemoved(e, d, t));
      if (typeof h == "string") return (t.add(c), this.createNodeChangeAdded(e, h, t));
    }
    resolveChangedKeys(e, t) {
      if (!this.store.getHierarchy().inTree(e.nodeId)) return;
      let r = this.store.branchData.columns,
        n = new Map();
      for (let [i, o] of e.latestPropertyRowIndexByStoreId) {
        let a = new Map();
        for (let [c, d] of o) {
          if (this.ignoredPropertyKeys.has(c)) continue;
          let h = r.value.get(d);
          if (h === b) continue;
          let u = this.baseStore.getCurrentValue(i, c);
          if (so(h, u)) continue;
          let f = r.user.get(d);
          (t.add(f), a.set(c, f));
        }
        a.size > 0 && n.set(i, a);
      }
      if (n.size > 0) return n;
    }
    createNodeChangeAdded(e, t, r) {
      return {
        type: "added",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        toParentId: t,
        actors: r,
        changedKeys: this.resolveChangedKeys(e, r) ?? new Map(),
      };
    }
    createNodeChangeRemoved(e, t, r) {
      return {
        type: "removed",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        actors: r,
      };
    }
    createNodeChangeMoved(e, t, r, n) {
      return {
        type: "moved",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        toParentId: r,
        actors: n,
        changedKeys: this.resolveChangedKeys(e, n),
      };
    }
    createNodeChangeUpdated(e, t, r) {
      let n = this.resolveChangedKeys(e, r);
      if (n)
        return {
          type: "updated",
          nodeId: e.nodeId,
          ...this.resolveNodeMeta(e.nodeId),
          parentId: t,
          actors: r,
          changedKeys: n,
        };
    }
    resolveNodeMeta(e) {
      let t = this.resolveNodeMetaValue(e, "__class");
      l(t, () => `Can't find __class for ${e}`);
      let r = this.resolveNodeMetaValue(e, "name");
      return { __class: t, name: r };
    }
    resolveNodeMetaValue(e, t) {
      let r = this.store.getCurrentValue(e, t);
      if (
        typeof r == "string" ||
        ((r = this.baseStore.getCurrentValue(e, t)), typeof r == "string")
      )
        return r;
    }
  };
function lr(s) {
  let e = [],
    t = s.base;
  for (; t;) {
    let r = ft(t);
    (e.push(r), (t = t.base));
  }
  return e;
}
function ft(s) {
  return {
    store: s,
    branchData: s.branchData,
    length: s.length,
    hierarchyCursor: s.getHierarchy().getInvalidationCursor(),
  };
}
function Yn(s, e) {
  return (
    s.store === e.store &&
    s.branchData === e.branchData &&
    s.length === e.length &&
    s.hierarchyCursor === e.hierarchyCursor
  );
}
function Jn(s, e) {
  return (
    s.store === e.store &&
    s.branchData === e.branchData &&
    s.length <= e.length &&
    s.hierarchyCursor <= e.hierarchyCursor
  );
}
function so(s, e) {
  return !!(
    e === s ||
    ((e === void 0 || e === y) && (s === void 0 || s === y)) ||
    (Array.isArray(e) && Array.isArray(s) && Xe(e, s)) ||
    (oe(e) && oe(s) && Ze(e, s))
  );
}
var yr = new DataView(new ArrayBuffer(8)),
  oo = 4096,
  pe = class {
    constructor(e = 0) {
      this.seed = e;
      this.state = e;
    }
    seed;
    state;
    count = 0;
    keyHashes = new Map();
    getHash() {
      return It(this.state, this.count);
    }
    reset() {
      ((this.state = this.seed), (this.count = 0));
    }
    add(e) {
      let t = this.hashValue(e);
      ((this.state = ee(this.state, t)), this.count++);
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
          return Xn(this.seed ^ 6, e);
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
      yr.setFloat64(0, e, !0);
      let t = yr.getUint32(0, !0),
        r = yr.getUint32(4, !0),
        n = ee(this.seed ^ 4, t);
      return ee(n, r);
    }
    hashArray(e) {
      let t = this.seed ^ 7;
      for (let r of e) {
        let n = this.hashValue(r);
        t = ee(t, n);
      }
      return It(t, e.length);
    }
    hashObject(e) {
      let t = 0,
        r = Object.keys(e);
      for (let i of r) {
        let o = this.hashObjectKey(i),
          a = this.hashValue(e[i]),
          c = ee(o, a);
        t = (t + It(c, 0)) | 0;
      }
      let n = ee(this.seed ^ 8, t);
      return It(n, r.length);
    }
    hashObjectKey(e) {
      let t = this.keyHashes.get(e);
      if (t !== void 0) return t;
      this.keyHashes.size >= oo && this.keyHashes.clear();
      let r = Xn(this.seed, e);
      return (this.keyHashes.set(e, r), r);
    }
  },
  ao = 3432918353,
  co = 461845907;
function ee(s, e) {
  return (
    (e = Math.imul(e, ao)),
    (e = (e << 15) | (e >>> 17)),
    (e = Math.imul(e, co)),
    (s ^= e),
    (s = (s << 13) | (s >>> 19)),
    (Math.imul(s, 5) + 3864292196) | 0
  );
}
function It(s, e) {
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
function Xn(s, e) {
  let t = e.length,
    r = t & -2;
  s = ee(s, t);
  for (let n = 0; n < r; n += 2) {
    let i = e.charCodeAt(n) | (e.charCodeAt(n + 1) << 16);
    s = ee(s, i);
  }
  if (r < t) {
    let n = e.charCodeAt(r);
    s = ee(s, n);
  }
  return s;
}
function te(s, e) {
  if (e === k) return;
  if (s.getNodeData(e)) return e;
  let t = e.indexOf(".");
  for (; t >= 0;) {
    let r = e.slice(0, t);
    if (s.getNodeData(r)) return r;
    t = e.indexOf(".", t + 1);
  }
}
function Zn(s, e) {
  let t = s.getParentId(e);
  if (typeof t == "string") return t;
}
var wt = class {
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
  writer = new pe();
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
    for (let r of this.cursors) {
      let n = r.store.branchData.columns,
        i = r.store.getHierarchy();
      if (n.length < r.nextRowIndex || i.getInvalidationCursor() < r.hierarchyCursor)
        return this.clearCacheEntries();
      for (let a = r.nextRowIndex; a < n.length; a++) {
        let c = n.id.get(a),
          d = te(t, c);
        d !== void 0 && e.add(d);
      }
      let o = i.getInvalidatedNodeIdsSince(r.hierarchyCursor);
      if (o === void 0) return this.clearCacheEntries();
      for (let a of o) e.add(a);
    }
    this.advanceCursors();
    for (let r of e) {
      let n = this.cache.get(r);
      n?.parentId !== void 0 && e.add(n.parentId);
      let i = Zn(t, r);
      (i !== void 0 && e.add(i), this.cache.delete(r));
    }
  }
  advanceCursors() {
    for (let e of this.cursors)
      ((e.nextRowIndex = e.store.branchData.columns.length),
        (e.hierarchyCursor = e.store.getHierarchy().getInvalidationCursor()));
  }
  computeChecksum(e) {
    if (!this.hierarchy.getNodeData(e)?.inTree) return;
    let r = this.cache.get(e);
    if (r !== void 0) return r.checksum;
    let n = this.store.getObjectWithShallowChildren(e, 0);
    if (n === void 0) return;
    let i = Zn(this.hierarchy, e),
      o = this.getOwnChecksum(n),
      a = this.combineChecksums(o, this.getChildChecksums(e));
    return (this.cache.set(e, { checksum: a, parentId: i }), a);
  }
  getOwnChecksum(e) {
    return (this.writer.reset(), this.writer.add(e), this.writer.getHash());
  }
  getChildChecksums(e) {
    if (!this.store.latest.has(e, "children")) return;
    let r = this.hierarchy.getChildrenIds(e),
      n = [];
    for (let i of r) {
      let o = this.computeChecksum(i);
      o !== void 0 && n.push(o);
    }
    return n;
  }
  combineChecksums(e, t) {
    return (this.writer.reset(), this.writer.add(e), this.writer.add(t), this.writer.getHash());
  }
};
var St = "@";
function K(s) {
  return s !== void 0 && s !== y && s !== b;
}
function vt(s) {
  if (s === y || s === b) return !0;
  if (typeof s != "string") return !1;
  let e = s.lastIndexOf(St);
  return e > 0 && e < s.length - 1;
}
function xe(s, e) {
  return `${s}${St}${e}`;
}
function re(s) {
  (l(s !== y, "trying to get positionId of deleted child"),
    l(s !== b, "trying to get positionId of inherited child"));
  let e = s.lastIndexOf(St);
  return s.slice(e + 1);
}
function T(s) {
  if (s === y) return y;
  if (s === b) return b;
  let e = s.lastIndexOf(St);
  return s.slice(0, e);
}
function ne(s) {
  return typeof s == "string" && s.startsWith("arr(") && s.endsWith(")");
}
function j(s) {
  return typeof s == "string" && s.startsWith("obj(") && s.endsWith(")");
}
function D(s) {
  return s.slice(4, -1);
}
function mr(s) {
  return `arr(${s})`;
}
function gr(s) {
  return `obj(${s})`;
}
var Ct = class s {
  constructor(e, t, r, n, i) {
    this.source = e;
    this.target = t;
    this.windowStartIdx = r;
    ((this.hierarchy = e.getHierarchy()),
      (this.retainedNodeIds = n),
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
  static run(e, t, r, n = new Set(), i = new Set()) {
    return new s(e, t, r, n, i).run();
  }
  run() {
    (l(
      this.source.branchId === this.target.branchId,
      () =>
        `Cannot compact data from different branches: ${this.source.branchId} != ${this.target.branchId}`
    ),
      this.emitObjectRows(de));
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
      (this.target.branchData.hierarchyData = new L(this.parentHistory, this.parentOverrides)),
      this.target.manifest.copyClientStateFrom(this.source.manifest),
      this.target.updateCaches(this.target.branchData.hierarchyData),
      (this.target.branchData.metadata.seq = this.source.branchData.metadata.seq),
      this.target
    );
  }
  sortParentHistory() {
    let e = this.target.branchData.columns;
    this.parentHistory.sort((t, r) => Je(e, t, r));
  }
  depthFirstWalk(e) {
    (this.emitObjectRows(e), this.emitResolvedParent(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
  }
  emitInWindowParentIdRows() {
    let e = this.source,
      t = this.hierarchy;
    for (let r = this.windowStartIdx; r < e.length; r++) {
      if (e.branchData.columns.key.get(r) !== "parentid" || this.emittedParentIdRowIndexes.has(r))
        continue;
      let i = e.branchData.getRow(r),
        o = i.id,
        a = t.getOwnParentRowIdx(o),
        c = t.getParentId(o) === y;
      if (!(c && a !== void 0 && a < this.windowStartIdx)) {
        if (c && a === r) {
          (this.emitObjectRows(o), this.emitResolvedParent(o));
          continue;
        }
        (!this.visited.has(o) && !c && !t.inTree(o)) || this.emitParentIdRow(i, r);
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
    (this.emittedParentIdRowIndexes.add(t),
      this.source.base && e.id !== k && e.value !== y && this.retainedNodeIds.add(e.id));
    let r = this.emitRow(e);
    (this.parentHistory.push(r), this.maybeEmitOverride(e, r));
  }
  emitOwnRevivedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set(),
      r = new Set();
    for (let n of e.parentHistory) {
      let i = this.source.branchData.columns.id.get(n);
      t.has(i) ||
        (t.add(i),
        this.source.base.getParentId(i) === y &&
          e.getOwnParentId(i) !== y &&
          e.inTree(i) &&
          br(this.hierarchy, i, this.retainedNodeIds, r));
    }
  }
  emitOwnDeletedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set();
    for (let r of e.parentHistory) {
      let n = this.source.branchData.columns.id.get(r);
      if (t.has(n) || (t.add(n), e.getOwnParentId(n) !== y)) continue;
      let i = this.source.base.getParentId(n) === void 0,
        o = e.getOwnNodeData(n)?.resolvedParentId,
        a = o !== void 0 && o < this.windowStartIdx;
      if (i && a) {
        this.emitResolvedParent(n);
        continue;
      }
      (this.emitObjectRows(n), this.emitResolvedParent(n));
    }
  }
  emitRetainedNodes() {
    for (let e of this.retainedNodeIds)
      this.visited.has(e) || (this.emitObjectRows(e), this.emitResolvedParent(e));
  }
  emitRowsWithTombstoneAnchors() {
    if (!this.source.base) return;
    let e = new Map();
    for (let t of this.source.latest.keys()) {
      if (this.visited.has(t) || !this.source.latest.getOwnLatest(t)) continue;
      let r = te(this.hierarchy, t);
      if (r === void 0 || Ir(this.source, r)) continue;
      let n = e.get(r);
      (e.has(r) ||
        ((n = ti(this.source, r)), e.set(r, n), n !== void 0 && this.tombstoneAnchorNodeIds.add(n)),
        n !== void 0 &&
          (this.emitObjectRows(t),
          t === r && this.hierarchy.getOwnParentId(t) !== y && this.emitResolvedParent(t)));
    }
  }
  emitTombstoneAnchors() {
    let e = [];
    for (let t of this.tombstoneAnchorNodeIds)
      this.hierarchy.getOwnParentId(t) === y && (this.emitResolvedParent(t), e.push(t));
    for (let t of e) this.tombstoneAnchorNodeIds.delete(t);
  }
  emitOutOfTreeNodes() {
    let e = this.hierarchy,
      t = this.source.branchData.columns.id,
      r = new Set();
    for (let n of e.parentHistory) {
      let i = t.get(n);
      if (r.has(i) || (r.add(i), this.visited.has(i)) || e.getOwnParentId(i) === y || e.inTree(i))
        continue;
      let o = ei(e, i);
      if (o) {
        for (let a of o)
          (e.getParentId(a) === y && this.tombstoneAnchorNodeIds.add(a),
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
      r = !1,
      n;
    (t?.forEachOwn((o, a) => {
      let c = this.source.branchData.getRow(a);
      if (this.shouldDropPropertyTombstone(e, o, a, c)) {
        n ??= c;
        return;
      }
      (this.emitRow(c), (r = !0));
    }),
      !r && n && this.emitRow(n));
    let i = this.source.latest.getLatest(e);
    if (i)
      for (let o of i.keys()) {
        let a = this.source.getCurrentValue(e, o);
        (typeof a != "string" && !Array.isArray(a)) || this.followReferences(a);
      }
  }
  shouldDropPropertyTombstone(e, t, r, n) {
    return this.source.base ||
      e === de ||
      r >= this.windowStartIdx ||
      t === "parentid" ||
      t === w ||
      t === "children"
      ? !1
      : n.value === y;
  }
  emitMergeableArrayRows(e) {
    if (this.visited.has(e)) return;
    (this.visited.add(e),
      this.source.latest.getOwnLatest(e)?.forEachOwn((n, i) => {
        let o = this.source.branchData.getRow(i);
        this.emitRow(o);
      }));
    let r = this.source.latest.getLatest(e);
    if (r)
      for (let n of r.keys())
        n !== w && this.source.getCurrentValue(e, n) !== y && this.emitObjectRows(n);
  }
  followReferences(e) {
    if (j(e)) {
      this.emitObjectRows(D(e));
      return;
    }
    if (ne(e)) {
      this.emitMergeableArrayRows(D(e));
      return;
    }
    if (Array.isArray(e)) for (let t of e) this.followReferences(t);
  }
  emitResolvedParent(e) {
    let r = this.hierarchy.getOwnNodeData(e)?.resolvedParentId;
    if (r === void 0) return;
    let n = this.source.branchData.getRow(r);
    (this.emittedParentIdRowIndexes.has(r) || this.emitParentIdRow(n, r),
      r >= this.windowStartIdx && this.emitPreWindowAnchor(n));
  }
  emitPreWindowAnchor(e) {
    let t = this.source.getHierarchy(),
      r = t.getOwnParentBySeq(e.id, e.seq, !1);
    for (; r && r.index >= this.windowStartIdx;) r = t.getOwnParentBySeq(r.id, r.seq, !1);
    if (!r || this.emittedParentIdRowIndexes.has(r.index)) return;
    let n = this.source.branchData.getRow(r.index);
    this.emitParentIdRow(n, r.index);
  }
  maybeEmitOverride(e, t) {
    let r = this.hierarchy.getParentOverride(e.id, e.seq, e.client);
    if (!r) return;
    let n = { ...r, rowIdx: t };
    this.addParentOverride(e, n);
    let i = this.source.getHierarchy(),
      o = i.getOwnParentBySeq(e.id, e.seq, !1);
    for (; o && T(o.value) !== T(n.parentTo);) o = i.getOwnParentBySeq(o.id, o.seq, !1);
    if (!o || this.emittedParentIdRowIndexes.has(o.index)) return;
    let a = this.source.branchData.getRow(o.index);
    this.emitParentIdRow(a, o.index);
  }
  addParentOverride(e, t) {
    let r = this.parentOverrides.get(e.id);
    r || ((r = new Map()), this.parentOverrides.set(e.id, r));
    let n = r.get(e.seq);
    (n || ((n = new Map()), r.set(e.seq, n)), n.set(e.client, t));
  }
};
function Qn(s, e, t) {
  (ho(s, e), uo(s, t));
}
function ho(s, e) {
  let t = s.getHierarchy(),
    r = new Set(),
    n = new Set();
  for (let i of t.parentHistory) {
    let o = s.branchData.columns.id.get(i);
    r.has(o) ||
      (r.add(o),
      t.getOwnParentId(o) !== y &&
        (e.add(o), s.base?.getParentId(o) === y && t.inTree(o) && br(t, o, e, n)));
  }
}
function br(s, e, t, r) {
  if (!r.has(e)) {
    r.add(e);
    for (let n of s.getChildrenIds(e))
      (s.getOwnParentRowIdx(n) === void 0 && t.add(n), br(s, n, t, r));
  }
}
function uo(s, e) {
  if (!s.base) return;
  let t = new Set();
  for (let r of s.latest.keys()) {
    if (!s.latest.getOwnLatest(r)) continue;
    let n = te(s.getHierarchy(), r);
    if (n === void 0 || t.has(n) || (t.add(n), Ir(s, n))) continue;
    let i = ti(s, n);
    i !== void 0 && e.add(i);
  }
  lo(s, e);
}
function lo(s, e) {
  let t = s.getHierarchy(),
    r = new Set();
  for (let n of t.parentHistory) {
    let i = s.branchData.columns.id.get(n);
    if (r.has(i) || (r.add(i), t.getOwnParentId(i) === y) || t.inTree(i)) continue;
    let o = ei(t, i);
    if (o) for (let a of o) t.getParentId(a) === y && e.add(a);
  }
}
function ei(s, e) {
  let t = [e],
    r = new Set([e]),
    n = e;
  for (;;) {
    let i = s.getParentId(n);
    if (i === void 0) return;
    if (i === y) return t;
    if (r.has(i) || s.inTree(i)) return;
    (t.push(i), r.add(i), (n = i));
  }
}
function Ir(s, e) {
  return s.getHierarchy().getOwnParentId(e) === y;
}
function ti(s, e) {
  if (!s.base || Ir(s, e)) return;
  if (s.base.getParentId(e) === y) return e;
  let t = new Set([e]),
    r = s.getParentId(e);
  for (; r !== void 0 && r !== y;) {
    if (t.has(r)) return;
    if ((t.add(r), s.getParentId(r) === y)) return r;
    r = s.getParentId(r);
  }
}
var Re = class {
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
        let r = this.#t.has(e);
        return (this.#t.add(e), t || !r);
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
      for (let r of this.values()) e.call(t, r, r, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  Ae = class {
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
        let r = this.#t.has(e);
        return (this.#t.add(e), t || !r);
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
      for (let [r, n] of this.entries()) e.call(t, n, r, this);
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
      let n = t(this.get(e));
      return (this.set(e, n), n);
    }
  };
var xt = class {
    classToIds = new Map();
    masterIdToReplicaIds = new Map();
    formContainerIds = new Set();
    withDataIdentifierIds = new Set();
    dataIdentifierToIds = new Map();
    getMutableIndexSet(e, t) {
      let r = e.get(t);
      return (r || ((r = new Set()), e.set(t, r)), r);
    }
    removeFromIndexSet(e, t, r, n = !1) {
      let i = e.get(t);
      i && (i.delete(r), n && i.size === 0 && e.delete(t));
    }
    syncAddedClass(e, t) {
      this.getMutableIndexSet(this.classToIds, e).add(t);
    }
    syncRemovedClass(e, t) {
      this.removeFromIndexSet(this.classToIds, e, t);
    }
    resetClass(e, t) {
      this.syncRemovedClass(e, t);
    }
    syncAddedFormContainer(e) {
      this.formContainerIds.add(e);
    }
    syncRemovedFormContainer(e) {
      this.formContainerIds.delete(e);
    }
    syncAddedWithDataIdentifier(e) {
      this.withDataIdentifierIds.add(e);
    }
    syncRemovedWithDataIdentifier(e) {
      this.withDataIdentifierIds.delete(e);
    }
    syncAddedDataIdentifier(e, t) {
      this.getMutableIndexSet(this.dataIdentifierToIds, e).add(t);
    }
    syncRemovedDataIdentifier(e, t) {
      this.removeFromIndexSet(this.dataIdentifierToIds, e, t, !0);
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    resetReplicaOwner(e, t) {
      this.syncRemovedReplicaOwner(e, t);
    }
    syncAddedNodeIndexes(e, t) {
      t.inTree &&
        (t.__class && this.syncAddedClass(t.__class, e),
        t.isFormContainer && this.syncAddedFormContainer(e),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e));
    }
    syncRemovedNodeIndexes(e, t) {
      (t.__class && this.syncRemovedClass(t.__class, e),
        this.syncRemovedFormContainer(e),
        this.syncRemovedWithDataIdentifier(e),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e));
    }
  },
  Rt = class {
    constructor(e) {
      this.base = e;
      ((this.classToIds = new Ae(this.base.classToIds)),
        (this.masterIdToReplicaIds = new Ae(this.base.masterIdToReplicaIds)),
        (this.formContainerIds = new Re(this.base.formContainerIds)),
        (this.withDataIdentifierIds = new Re(this.base.withDataIdentifierIds)),
        (this.dataIdentifierToIds = new Ae(this.base.dataIdentifierToIds)));
    }
    base;
    classToIds;
    masterIdToReplicaIds;
    formContainerIds;
    withDataIdentifierIds;
    dataIdentifierToIds;
    getMutableIndexSet(e, t) {
      return e.ensureOwned(t, (r) => new Re(r));
    }
    removeFromIndexSet(e, t, r, n = !1) {
      if (!e.get(t)) return;
      this.getMutableIndexSet(e, t).delete(r);
    }
    syncAddedSetIndex(e, t, r) {
      t ? e.reset(r) : e.add(r);
    }
    syncRemovedSetIndex(e, t, r) {
      t ? e.delete(r) : e.reset(r);
    }
    syncAddedMapSetIndex(e, t, r, n, i = !1) {
      if (!i && (t.get(r)?.has(n) ?? !1)) {
        e.getOwned(r)?.reset(n);
        return;
      }
      this.getMutableIndexSet(e, r).add(n);
    }
    syncRemovedMapSetIndex(e, t, r, n, i = !1, o = !1) {
      let a = !i && (t.get(r)?.has(n) ?? !1),
        c = !i && t.has(r);
      if (a) {
        this.getMutableIndexSet(e, r).delete(n);
        return;
      }
      let d = e.getOwned(r);
      (d?.reset(n), o && d?.size === 0 && !c && e.delete(r));
    }
    syncAddedClass(e, t, r = !1) {
      this.syncAddedMapSetIndex(this.classToIds, this.base.classToIds, e, t, r);
    }
    syncRemovedClass(e, t, r = !1) {
      this.syncRemovedMapSetIndex(this.classToIds, this.base.classToIds, e, t, r);
    }
    resetClass(e, t) {
      let r = this.classToIds.getOwned(e);
      (r?.reset(t), r?.size === 0 && this.classToIds.reset(e));
    }
    syncAddedFormContainer(e, t = !1) {
      this.syncAddedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncRemovedFormContainer(e, t = !1) {
      this.syncRemovedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncAddedWithDataIdentifier(e, t = !1) {
      this.syncAddedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncRemovedWithDataIdentifier(e, t = !1) {
      this.syncRemovedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncAddedDataIdentifier(e, t, r = !1) {
      this.syncAddedMapSetIndex(this.dataIdentifierToIds, this.base.dataIdentifierToIds, e, t, r);
    }
    syncRemovedDataIdentifier(e, t, r = !1) {
      this.syncRemovedMapSetIndex(
        this.dataIdentifierToIds,
        this.base.dataIdentifierToIds,
        e,
        t,
        r,
        !0
      );
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    resetReplicaOwner(e, t) {
      this.masterIdToReplicaIds.getOwned(e)?.reset(t);
    }
    syncAddedNodeIndexes(e, t, r = !1) {
      (t.__class && this.syncAddedClass(t.__class, e, r),
        t.isFormContainer && this.syncAddedFormContainer(e, r),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e, r),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e, r));
    }
    syncRemovedNodeIndexes(e, t, r = !1) {
      (t.__class && this.syncRemovedClass(t.__class, e, r),
        this.syncRemovedFormContainer(e, r),
        this.syncRemovedWithDataIdentifier(e, r),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e, r));
    }
  };
var fo = 1e3,
  wr = class {
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
  At = class {
    constructor(e, t, r) {
      this.store = e;
      this.latest = t;
      this.base = r;
      ((this.branchData = e.branchData),
        this.base
          ? ((this.indexes = new Rt(this.base.indexes)), (this.rootNodeId = this.base.rootNodeId))
          : (this.indexes = new xt()));
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
    get classToIds() {
      return this.indexes.classToIds;
    }
    get masterIdToReplicaIds() {
      return this.indexes.masterIdToReplicaIds;
    }
    get formContainerIds() {
      return this.indexes.formContainerIds;
    }
    get withDataIdentifierIds() {
      return this.indexes.withDataIdentifierIds;
    }
    get dataIdentifierToIds() {
      return this.indexes.dataIdentifierToIds;
    }
    getRootId() {
      return this.rootNodeId;
    }
    cachedInTreeCount = 0;
    get inTreeCount() {
      if (!this.base) return this.cachedInTreeCount;
      let e = this.base?.inTreeCount ?? 0;
      for (let [t, r] of this.nodeData) {
        if (t === this.rootNodeId) continue;
        let n = this.base?.inTree(t) ?? !1;
        e += Number(r.inTree) - Number(n);
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
        r = e - this.hierarchyInvalidationsTrimmed;
      for (let n = r; n < this.hierarchyInvalidations.length; n++) {
        let i = this.hierarchyInvalidations[n];
        if (i) for (let o of i) t.add(o);
      }
      return t;
    }
    recordInvalidation(e) {
      e.size !== 0 && (this.hierarchyInvalidations.push(e), this.trimHierarchyInvalidations());
    }
    trimHierarchyInvalidations() {
      let e = this.hierarchyInvalidations.length - fo;
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
        let r = this.base?.ensureNodeData(e);
        ((t = new wr(r)),
          (t.id = e),
          r && ((t.inTree = r.inTree), (t.inMaster = r.inMaster)),
          this.nodeData.set(e, t));
      }
      return t;
    }
    getLatestReplicaChild(e) {
      if (e.length < 11) return;
      let r = e.slice(0, 9),
        n = this.getNodeData(r);
      if (n && this.inTree(r)) {
        if (!n.replicaInfoMaster) return;
        let i = n.replicaInfoMaster,
          o = e.slice(9),
          a = this.getNodeData(o);
        return !a || !this.inTree(o) || a.inMaster !== i ? void 0 : [r, n, o, a];
      }
      for (let i = 7; i < e.length - 9 + 2; i++)
        if (i !== 9 && ((r = e.slice(0, i)), (n = this.getNodeData(r)), n && this.inTree(r))) {
          if (!n?.replicaInfoMaster) return;
          let o = n.replicaInfoMaster,
            a = e.slice(i),
            c = this.getNodeData(a);
          return !c || !this.inTree(a) || c.inMaster !== o ? void 0 : [r, n, a, c];
        }
    }
    computeTreeHash() {
      let e = 0,
        t = this;
      function r(n) {
        e = Er(n, e);
        let i = t.getChildrenIds(n);
        for (let o of i) r(o);
      }
      return (this.rootNodeId && r(this.rootNodeId), e);
    }
    addChild(e, t, r, n = !1) {
      if (
        ((e.childrenById ??= new Map()),
        e.childrenById.set(t, r),
        !n || !e.cachedChildrenSorted || !e.cachedChildren || this.isChildrenCacheDirty(e.id))
      ) {
        e.cachedChildrenCurrentCounter += 1;
        return;
      }
      e.cachedChildrenCurrentCounter += 1;
      let i = e.cachedChildren,
        o = W(i, t, (a, c) => {
          let d = this.getHierarchyKey(a);
          l(K(d), () => `invalid key in hierarchy, row ${a}`);
          let h = this.getHierarchyKey(c);
          if ((l(K(h), () => `invalid key in hierarchy, row ${c}`), d < h)) return -1;
          if (d > h) return 1;
          if (this.store.optimizedReading) return a < c ? -1 : a > c ? 1 : 0;
          throw new Error("Hierarchy keys should be unique:" + d);
        });
      (i.splice(o, 0, t), (e.cachedChildrenLastCounter = e.cachedChildrenCurrentCounter));
    }
    removeChild(e, t) {
      let r = this.ensureNodeData(e);
      (r.childrenById?.delete(t), (r.cachedChildrenCurrentCounter += 1));
    }
    updateReachability(e, t, r) {
      (e.inTree === t && e.inMaster === r) ||
        (!this.base &&
          e.id !== this.rootNodeId &&
          e.inTree !== t &&
          (this.cachedInTreeCount += Number(t) - Number(e.inTree)),
        (e.inTree = t),
        (e.inMaster = r));
    }
    markInTree(e, t, r, n = new Set(), i = !1) {
      if (!e.inTree || n.has(r)) return;
      (n.add(r),
        this.updateReachability(t, !0, e.isMaster ? e.id : e.inMaster),
        this.indexes.syncAddedNodeIndexes(r, t, i));
      let o = t.isMaster ? t.id : t.inMaster;
      for (let a of this.getCachedChildrenIds(r)) {
        let c = this.ensureNodeData(a);
        c.inTree
          ? c.inMaster !== o && (this.updateReachability(c, !0, o), this.applyMasterState(c))
          : this.markInTree(t, c, a, n, i);
      }
    }
    clearInTree(e, t, r = new Set()) {
      if (!r.has(t)) {
        (r.add(t),
          e.inTree && this.updateReachability(e, !1, void 0),
          this.indexes.syncRemovedNodeIndexes(t, e));
        for (let n of this.getCachedChildrenIds(t)) {
          let i = this.ensureNodeData(n);
          this.clearInTree(i, n, r);
        }
      }
    }
    resetInTree(e, t, r = new Set()) {
      if (r.has(t)) return;
      (r.add(t), this.indexes.syncRemovedNodeIndexes(t, e));
      let n = this.getParentId(t);
      if (t === this.rootNodeId) this.updateReachability(e, !0, void 0);
      else if (n !== void 0 && n !== y) {
        let i = this.ensureNodeData(n);
        this.updateReachability(e, i.inTree, i.isMaster ? i.id : i.inMaster);
      } else this.updateReachability(e, !1, void 0);
      e.inTree && this.indexes.syncAddedNodeIndexes(t, e);
      for (let i of this.getCachedChildrenIds(t)) {
        let o = this.ensureNodeData(i),
          a = this.getOwnParentRowIdx(i);
        if (a !== void 0 && this.branchData.columns.value.get(a) !== b) {
          e.inTree ? this.markInTree(e, o, i, r, !0) : this.clearInTree(o, i, r);
          continue;
        }
        e.inTree ? this.resetInTree(o, i, r) : this.clearInTree(o, i, r);
      }
    }
    applyMasterState(e, t = new Set()) {
      if (t.has(e.id)) return;
      t.add(e.id);
      let r = e.isMaster ? e.id : e.inMaster;
      for (let n of this.getCachedChildrenIds(e.id)) {
        let i = this.ensureNodeData(n);
        (this.updateReachability(i, i.inTree, r), this.applyMasterState(i, t));
      }
    }
    updateParent(e, t, r, n, i) {
      i && i !== y && this.removeChild(i, t);
      let o = T(r);
      if (o === b) {
        let a = this.base?.getParentId(t);
        if (a !== void 0 && a !== y) {
          let c = this.ensureNodeData(a);
          ((c.cachedChildrenCurrentCounter += 1),
            c.inTree ? this.resetInTree(e, t) : this.clearInTree(e, t));
        } else this.clearInTree(e, t);
      } else if (o !== y) {
        let a = this.ensureNodeData(o);
        (this.addChild(a, t, n, !0),
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
        let r = this.base.getChildrenCounter(e);
        if (t.cachedChildrenBaseCounter !== r || this.base.isChildrenCacheDirty(e)) return !0;
      }
      return !1;
    }
    getSubtreeCount(e) {
      let t = 1;
      for (let r of this.getCachedChildrenIds(e)) t += this.getSubtreeCount(r);
      return t;
    }
    getCachedChildrenIds(e) {
      let t = this.ensureNodeData(e);
      if (!this.isChildrenCacheDirty(e)) return t.cachedChildren ?? [];
      let r = new Set();
      for (let i of this.base?.getCachedChildrenIds(e) ?? []) e === this.getParentId(i) && r.add(i);
      if (t.childrenById) for (let i of t.childrenById.keys()) r.add(i);
      let n = Array.from(r);
      return (
        (t.cachedChildren = n),
        (t.cachedChildrenSorted = !1),
        t.cachedChildrenLastCounter === t.cachedChildrenCurrentCounter &&
          (t.cachedChildrenCurrentCounter += 1),
        (t.cachedChildrenLastCounter = t.cachedChildrenCurrentCounter),
        (t.cachedChildrenBaseCounter = this.base?.getChildrenCounter(e) ?? 0),
        n
      );
    }
    getChildrenIds(e) {
      let t = this.ensureNodeData(e),
        r = this.getCachedChildrenIds(e);
      return (
        t.cachedChildrenSorted ||
          (r.sort((n, i) => {
            let o = this.getHierarchyKey(n);
            l(K(o), () => `invalid key in hierarchy, row ${n}`);
            let a = this.getHierarchyKey(i);
            if ((l(K(a), () => `invalid key in hierarchy, row ${i}`), o < a)) return -1;
            if (o > a) return 1;
            if (this.store.optimizedReading) return n < i ? -1 : n > i ? 1 : 0;
            throw new Error("Hierarchy keys should be unique:" + o);
          }),
          (t.cachedChildrenSorted = !0)),
        r
      );
    }
    updateLatestValue(e, t, r) {
      let n = this.branchData.columns.value;
      switch (t) {
        case "__class": {
          let i = this.ensureNodeData(e),
            o = i.__class,
            a = n.get(r),
            c = a === b;
          if (c) i.inherit("__class");
          else {
            if (typeof a != "string") return;
            i.__class = a;
          }
          let d = i.__class;
          if (
            d === "RootNode" &&
            ((this.rootNodeId = e), this.updateReachability(i, !0, void 0), i.childrenById)
          )
            for (let h of i.childrenById.keys()) {
              let u = this.getNodeData(h);
              u && this.markInTree(i, u, h);
            }
          (o &&
            (o !== d || c) &&
            (c ? this.indexes.resetClass(o, e) : this.indexes.syncRemovedClass(o, e)),
            i.inTree && this.indexes.syncAddedNodeIndexes(e, i));
          break;
        }
        case "isMaster": {
          let i = n.get(r),
            o = this.ensureNodeData(e),
            a = o.isMaster;
          if (i === b) o.inherit("isMaster");
          else {
            if (typeof i != "boolean") return;
            o.isMaster = i;
          }
          if (a === o.isMaster) return;
          (o.inTree && this.applyMasterState(o), this.broadcastIsMaster(e));
          break;
        }
        case "isFormContainer": {
          let i = n.get(r),
            o = this.ensureNodeData(e),
            a = o.isFormContainer,
            c = i === b;
          c ? o.inherit("isFormContainer") : (o.isFormContainer = i === !0);
          let d = o.isFormContainer;
          if (a === d && !c) return;
          (o.inTree &&
            (d ? this.indexes.syncAddedFormContainer(e) : this.indexes.syncRemovedFormContainer(e)),
            this.broadcastInheritedIsFormContainerChange(e, a, d));
          break;
        }
        case "replicaInfo": {
          let i = n.get(r);
          if (i === b) {
            let o = this.ensureNodeData(e),
              a = o.replicaInfoMaster;
            o.inherit("replicaInfoMaster");
            let c = o.replicaInfoMaster;
            (a && this.indexes.resetReplicaOwner(a, e), c && this.indexes.resetReplicaOwner(c, e));
          } else if (typeof i != "string" || i.length === 0) {
            let o = this.ensureNodeData(e);
            o.replicaInfoMaster &&
              (this.indexes.syncRemovedReplicaOwner(o.replicaInfoMaster, e),
              (o.replicaInfoMaster = void 0));
          }
          break;
        }
        case "master": {
          let i = n.get(r),
            a = e.length - "replicaInfo".length;
          if (e.substring(a) !== "replicaInfo") return;
          e = e.substring(0, a - 1);
          let c = this.ensureNodeData(e),
            d = c.replicaInfoMaster;
          if (i === b) {
            c.inherit("replicaInfoMaster");
            let u = c.replicaInfoMaster;
            (d && this.indexes.resetReplicaOwner(d, e), u && this.indexes.resetReplicaOwner(u, e));
            return;
          }
          c.replicaInfoMaster = typeof i == "string" && i.length > 0 ? i : void 0;
          let h = c.replicaInfoMaster;
          if (h === d || (d && this.indexes.syncRemovedReplicaOwner(d, e), !h)) return;
          this.indexes.syncAddedReplicaOwner(h, e);
          break;
        }
        case "dataIdentifier": {
          let i = n.get(r),
            o = this.ensureNodeData(e),
            a = o.dataIdentifier,
            c = i === b;
          c ? o.inherit("dataIdentifier") : (o.dataIdentifier = typeof i == "string" ? i : void 0);
          let d = o.dataIdentifier;
          if (a === d && !c) return;
          (a && this.indexes.syncRemovedDataIdentifier(a, e),
            o.inTree &&
              (a === void 0 && d !== void 0
                ? this.indexes.syncAddedWithDataIdentifier(e)
                : a !== void 0 && d === void 0 && this.indexes.syncRemovedWithDataIdentifier(e),
              d && this.indexes.syncAddedDataIdentifier(d, e)),
            this.broadcastInheritedDataIdentifierChange(e, a, d));
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
      let r = new Map();
      for (let [n, i] of this.parentOverrides)
        for (let [o, a] of i) for (let [c, d] of a) r.set(d.rowIdx, d);
      this.replayParentHistory(r);
    }
    rehydrateMinimal(e) {
      ((this.parentHistory = e.parentHistory), (this.parentOverrides = e.parentOverrides));
      let t = new Map();
      for (let i of this.parentOverrides.values())
        for (let o of i.values()) for (let a of o.values()) t.set(a.rowIdx, a);
      let r = this.branchData.columns;
      for (let i of this.parentHistory) {
        let o = this.ensureNodeData(r.id.get(i)),
          a = o.resolvedParentId;
        ((a === void 0 || Y(r.seq.get(i), r.client.get(i), r.seq.get(a), r.client.get(a))) &&
          (o.resolvedParentId = i),
          this.insertParentIdHistory(o, i));
      }
      for (let [i, o] of this.nodeData) {
        let a = o.resolvedParentId;
        if (a === void 0) continue;
        let c = t.get(a)?.parentTo ?? r.value.get(a),
          d = T(c);
        if (d === y || d === b) continue;
        let h = this.ensureNodeData(d);
        ((h.childrenById ??= new Map()),
          h.childrenById.set(i, a),
          (h.cachedChildrenCurrentCounter += 1));
      }
      if (this.rootNodeId === void 0) return;
      let n = this.ensureNodeData(this.rootNodeId);
      this.updateReachability(n, !0, void 0);
      for (let i of this.getCachedChildrenIds(this.rootNodeId))
        this.markInTree(n, this.ensureNodeData(i), i);
    }
    broadcastParentId(e) {
      for (let t of this.store.branches) {
        let r = t.getHierarchy(),
          n = r.ensureNodeData(e),
          i = r.getParentId(e);
        if (i && i !== y) {
          let o = r.ensureNodeData(i);
          if (o.inTree) {
            (r.markInTree(o, n, e), r.broadcastParentId(e));
            continue;
          }
        }
        (r.clearInTree(n, e), r.broadcastParentId(e));
      }
    }
    broadcastIsMaster(e) {
      for (let t of this.store.branches) {
        let r = t.getHierarchy();
        if (r.store.hasOwnOverridingRow(e, "isMaster")) continue;
        let n = r.ensureNodeData(e);
        (n.inTree && r.applyMasterState(n), r.broadcastIsMaster(e));
      }
    }
    broadcastInheritedIsFormContainerChange(e, t, r) {
      for (let n of this.store.branches) {
        let i = n.getHierarchy();
        i.store.hasOwnOverridingRow(e, "isFormContainer") ||
          (i.applyInheritedIsFormContainerIndexChange(e, t, r),
          i.broadcastInheritedIsFormContainerChange(e, t, r));
      }
    }
    applyInheritedIsFormContainerIndexChange(e, t, r) {
      let n = this.getNodeData(e);
      if (n) {
        if (!n.inTree) {
          (t || r) && this.indexes.syncRemovedFormContainer(e);
          return;
        }
        (t && this.indexes.syncRemovedFormContainer(e),
          r && this.indexes.syncAddedFormContainer(e));
      }
    }
    broadcastInheritedDataIdentifierChange(e, t, r) {
      for (let n of this.store.branches) {
        let i = n.getHierarchy();
        i.store.hasOwnOverridingRow(e, "dataIdentifier") ||
          (i.applyInheritedDataIdentifierIndexChange(e, t, r),
          i.broadcastInheritedDataIdentifierChange(e, t, r));
      }
    }
    applyInheritedDataIdentifierIndexChange(e, t, r) {
      let n = this.getNodeData(e);
      if (n) {
        if (!n.inTree) {
          ((t !== void 0 || r !== void 0) && this.indexes.syncRemovedWithDataIdentifier(e),
            t && this.indexes.syncRemovedDataIdentifier(t, e),
            r && this.indexes.syncRemovedDataIdentifier(r, e));
          return;
        }
        (t !== void 0 && r === void 0
          ? this.indexes.syncRemovedWithDataIdentifier(e)
          : t === void 0 && r !== void 0 && this.indexes.syncAddedWithDataIdentifier(e),
          t && this.indexes.syncRemovedDataIdentifier(t, e),
          r && this.indexes.syncAddedDataIdentifier(r, e));
      }
    }
    updateParentId(e, t) {
      ((this.hierarchyChanged = !0),
        this.applyParentIdRow(e, t),
        this.insertParentHistory(t),
        this.broadcastParentId(e));
    }
    insertParentHistory(e) {
      let t = this.parentHistory,
        r = this.branchData.columns,
        n = t[t.length - 1];
      if (!this.parentHistorySorted || n === void 0 || !P(r, n, e)) {
        t.push(e);
        return;
      }
      let i = W(t, e, (o, a) => (P(r, o, a) ? 1 : -1));
      t.splice(i, 0, e);
    }
    insertParentIdHistory(e, t) {
      let r = e.parentIdHistory,
        n = this.branchData.columns,
        i = r[r.length - 1];
      if (i === void 0 || !P(n, i, t)) {
        r.push(t);
        return;
      }
      let o = W(r, t, (a, c) => (P(n, a, c) ? 1 : -1));
      r.splice(o, 0, t);
    }
    replayParentHistory(e) {
      if (this.parentHistory.length === 0) return;
      this.hierarchyChanged = !0;
      let t = this.branchData.columns.id;
      for (let r of this.parentHistory) {
        let n = t.get(r);
        this.applyParentIdRow(n, r, e.get(r));
      }
    }
    getParentOverride(e, t, r) {
      return this.parentOverrides.get(e)?.get(t)?.get(r);
    }
    applyParentIdRow(e, t, r) {
      let n = this.ensureNodeData(e),
        i = this.getParentId(e),
        o = n.resolvedParentId,
        a = this.branchData.columns,
        c = a.seq.get(t),
        d = a.client.get(t);
      if (o === void 0 || Y(c, d, a.seq.get(o), a.client.get(o))) {
        let u = r?.parentTo ?? a.value.get(t);
        ((n.resolvedParentId = t), this.updateParent(n, e, u, t, i));
      }
      this.insertParentIdHistory(n, t);
    }
    getParentRowIdx(e) {
      let t = this.getOwnParentRowIdx(e);
      return t !== void 0 && this.branchData.columns.value.get(t) !== b
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
      let r = this.branchData.columns,
        n = r.seq.get(t),
        i = r.client.get(t),
        a = this.getParentOverride(e, n, i)?.parentTo ?? r.value.get(t);
      return a === b ? void 0 : a;
    }
    getHierarchyKey(e) {
      let t = this.getOwnHierarchyKey(e);
      return t === void 0 ? this.base?.getHierarchyKey(e) : t;
    }
    getChildIndex(e, t) {
      let r = this.getHierarchyKey(t);
      if (typeof r != "string") return -1;
      let n = W(e, r, (i, o) => {
        let a = this.getHierarchyKey(i);
        return a < o ? -1 : a > o ? 1 : 0;
      });
      return e[n] === t ? n : -1;
    }
    getPositionIndex(e, t) {
      let r = this.getChildrenIds(e);
      return W(r, t, (n, i) => {
        let o = this.getHierarchyKey(n);
        return (l(K(o), () => `invalid key in hierarchy, row ${n}`), o < i ? -1 : o > i ? 1 : 0);
      });
    }
    getChildPosition(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return re(t);
    }
    getParentId(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return t === y ? y : T(t);
    }
    getOwnParentId(e) {
      let t = this.getOwnHierarchyKey(e);
      if (t !== void 0) return t === y ? y : T(t);
    }
    getOwnParentBySeq(e, t, r) {
      let n = this.getOwnNodeData(e);
      if (!n) return;
      let i = n.parentIdHistory;
      if (i.length === 0) return;
      let o = this.branchData.columns,
        a = W(i, t, (p, m) => {
          let g = o.seq.get(p);
          return r ? (g <= m ? -1 : 1) : g < m ? -1 : 1;
        });
      if (a === 0) return;
      let c = i[a - 1],
        d = o.id.get(c),
        h = o.seq.get(c),
        u = o.client.get(c),
        f = this.getParentOverride(d, h, u);
      return {
        id: d,
        seq: h,
        client: u,
        key: "parentid",
        value: f?.parentTo ?? o.value.get(c),
        index: c,
      };
    }
    getParentBySeq(e, t) {
      let r = this.getOwnParentBySeq(e, t, !0);
      if (r && r.value !== b) return r;
      if (!r && this.getOwnNodeData(e)?.parentIdHistory?.length) return;
      let n = this.base,
        i;
      for (; !i && n;) {
        let o = n.getOwnParentBySeq(e, n.store.seq, !0);
        (o?.value !== b && (i = o), (n = n.base));
      }
      return i;
    }
    findAncestorIdsBefore(e, t, r) {
      let n = new Set();
      for (;;) {
        if (e === t) return n;
        if (e === void 0 || e === y || e === b || n.has(e) || (n.add(e), !this.getNodeData(e)))
          return;
        let i = this.getParentBySeq(e, r);
        if (!i) return;
        e = T(i.value);
      }
    }
    clearParentOverrides(e, t) {
      let r = [],
        n = [],
        i = new Set();
      for (let [o, a] of this.parentOverrides)
        if (!(t && !t.has(o))) {
          for (let [c, d] of a)
            if (!(c < e)) {
              a.delete(c);
              for (let [h, u] of d) {
                let f = u.rowIdx,
                  p = this.getNodeData(o);
                if (!p || !(p.resolvedParentId === f)) continue;
                (r.push(u), i.add(u.nodeId));
                let g = T(u.parentTo);
                (l(g !== b, "override parent cannot be inherited"),
                  g !== y && (this.removeChild(g, o), i.add(g)));
                let R = u.parentFrom === b ? (this.getParentBySeq(o, c)?.value ?? b) : u.parentFrom,
                  N = T(R);
                if (N !== y && N !== b) {
                  let M = this.ensureNodeData(N);
                  if (K(u.parentFrom)) {
                    if (this.base && M.childrenById)
                      for (let G of M.childrenById.values()) {
                        let se = this.branchData.columns.id.get(G);
                        if (this.getHierarchyKey(se) === u.parentFrom) {
                          let xi = {
                            ...u,
                            parentTo: this.createOverrideHierarchyKey(u.parentFrom, o),
                          };
                          n.push(xi);
                        }
                      }
                    (this.addChild(M, o, f, !1),
                      M.inTree ? this.markInTree(M, p, o) : this.clearInTree(p, o));
                  } else
                    ((M.cachedChildrenCurrentCounter += 1),
                      M.inTree ? this.resetInTree(p, o) : this.clearInTree(p, o));
                  i.add(N);
                } else this.clearInTree(p, o);
                this.broadcastParentId(o);
              }
            }
        }
      this.recordInvalidation(i);
      for (let o of n) this.setParentOverride(o);
      return r;
    }
    setParentOverride(e) {
      let t = this.branchData.columns,
        r = e.rowIdx,
        n = t.client.get(r),
        i = t.seq.get(r),
        o = e.nodeId,
        a = this.parentOverrides.get(o);
      a || ((a = new Map()), this.parentOverrides.set(o, a));
      let c = a.get(i);
      (c || ((c = new Map()), a.set(i, c)), c.set(n, e));
    }
    createOverrideHierarchyKey(e, t) {
      let r = re(e),
        n = T(e),
        i = we(r),
        o = i[i.length - 1];
      function a(u) {
        if (u.length !== i.length) return !1;
        for (let f = 0; f < i.length - 1; f++) {
          let p = i[f],
            m = u[f];
          if (p.position !== m.position || p.client !== m.client) return !1;
        }
        return !0;
      }
      let c = new Set(),
        d = this.getNodeData(n)?.childrenById;
      if (d)
        for (let u of d.keys()) {
          if (u === t) continue;
          let f = this.getHierarchyKey(u);
          l(typeof f == "string", "sibling must be a valid, non-deleted, hierarchy key");
          let p = we(re(f));
          if (!a(p)) continue;
          let m = p[p.length - 1];
          m.position === o.position && c.add(m.client);
        }
      let h = zr.find((u) => !c.has(u));
      return (
        l(h !== void 0, () => `override clients exhausted for node ${t}`),
        (o.client = h),
        xe(n, le(i))
      );
    }
    getRevokedOwnPositions(e) {
      let t = [];
      for (let [r, n] of this.parentOverrides) {
        let i = this.getOwnNodeData(r)?.resolvedParentId;
        for (let o of n.values())
          for (let a of o.values())
            a.rowIdx === i && K(a.parentFrom) && T(a.parentFrom) === e && t.push(re(a.parentFrom));
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
        r = [],
        n = this.branchData.columns;
      this.parentHistorySorted ||
        (this.parentHistory.sort((o, a) => Je(n, o, a)), (this.parentHistorySorted = !0));
      let i = W(this.parentHistory, e, (o, a) => n.seq.get(o) - a);
      for (let o = i; o < this.parentHistory.length; o++)
        this.resolveCycleForRow(this.parentHistory[o], r);
      return { prevOverrides: t, nextOverrides: r };
    }
    resolveCycleForRow(e, t) {
      let r = this.branchData.columns,
        n = r.id.get(e),
        i = r.seq.get(e),
        o = r.value.get(e);
      l(o, () => `parentid without a value, index: ${e}`);
      let a = o === b ? this.getParentBySeq(n, i) : void 0,
        c = a ? T(a.value) : T(o),
        d = this.findAncestorIdsBefore(c, n, i);
      if (d) {
        let h = this.getNodeData(n);
        l(h, () => `node not in tree, id: ${n}`);
        let u = this.getOwnParentBySeq(n, i, !1),
          f;
        (u && u.value !== b && !this.findAncestorIdsBefore(T(u.value), n, i) && (f = u),
          l(f?.value !== b, "previous parent cannot be inherited"));
        let m = h.resolvedParentId === e,
          g = m ? this.getParentId(n) : void 0,
          R = {
            nodeId: n,
            parentFrom: o,
            parentTo: f && f.value !== y ? this.createOverrideHierarchyKey(f.value, n) : y,
            rowIdx: e,
          };
        if ((this.setParentOverride(R), m))
          if (
            (l(g && g !== y, () => `unable to resolve parent of ${n}`),
            this.removeChild(g, n),
            f && f.value !== y)
          ) {
            let N = T(f.value),
              M = this.ensureNodeData(N);
            (this.addChild(M, n, f.index),
              M.inTree ? this.markInTree(M, h, n) : this.clearInTree(h, n));
          } else this.clearInTree(h, n);
        (t.push(R), this.broadcastParentId(n), this.recordInvalidation(d));
      }
    }
  };
var Sr = class {
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
      this.map.forEach((t, r) => e(r, t));
    }
    updated() {
      this.update++;
    }
    materialized() {
      return this.map.size > 0;
    }
  },
  Tt = class {
    map = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.map.get(e);
      return (t || ((t = new Sr()), this.map.set(e, t)), t);
    }
    *keys() {
      for (let [e, t] of this.map) t.materialized() && (yield e);
    }
    *values() {
      for (let e of this.map.values()) e.materialized() && (yield e);
    }
    set(e, t, r) {
      this.getLatestOrCreateGhost(e).set(t, r);
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
  vr = class {
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
      this.ownMap?.forEach((t, r) => e(r, t));
    }
    updated() {
      this.ownUpdate++;
    }
    materialized() {
      return !!this.ownMap;
    }
  },
  Mt = class {
    constructor(e) {
      this.base = e;
    }
    base;
    ownMap = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.ownMap.get(e);
      return (t || ((t = new vr(this.base.getLatestOrCreateGhost(e))), this.ownMap.set(e, t)), t);
    }
    *keys() {
      let e = new Set();
      for (let [t, r] of this.ownMap) r.materialized() && (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.getLatest(e);
        t && (yield t);
      }
    }
    set(e, t, r) {
      this.getLatestOrCreateGhost(e).set(t, r);
    }
    getLatest(e) {
      return this.getOwnLatest(e) ?? this.base.getLatest(e);
    }
    getOwnLatest(e) {
      let t = this.ownMap.get(e);
      if (t?.materialized()) return t;
    }
    get(e, t) {
      let r = this.ownMap.get(e);
      return r ? r.get(t) : this.base.get(e, t);
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
var po = 1,
  yo = 2654435769;
function mo(s, e) {
  return s.ownerId !== e.ownerId
    ? s.ownerId < e.ownerId
      ? -1
      : 1
    : s.kind !== e.kind
      ? s.kind < e.kind
        ? -1
        : 1
      : s.targetId !== e.targetId
        ? s.targetId < e.targetId
          ? -1
          : 1
        : 0;
}
function ri(s) {
  return typeof s == "string" && s.length > 0;
}
function ni(s, e) {
  let t = s.getParentId(e);
  if (typeof t == "string") return t;
}
var Ot = class {
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
  cache = new Map();
  cursors = [];
  physicalParentIds = new Map();
  primaryWriter = new pe();
  secondaryWriter = new pe(yo);
  getGeneration(e) {
    for (let t of this.cursors)
      l(
        !t.store.inBatch,
        "ResolvedSubtreeGenerationIndex.getGeneration must not be called mid-batch"
      );
    return (
      this.evictStaleCacheEntries(),
      this.computeGeneration(e, { activeIds: new Set(), generations: new Map() })
    );
  }
  evictStaleCacheEntries() {
    if (this.cache.size === 0) return (this.physicalParentIds.clear(), this.advanceCursors());
    let e = new Set(),
      t = this.store.getHierarchy();
    for (let r of this.cursors) {
      let n = r.store.branchData.columns,
        i = r.store.getHierarchy();
      if (n.length < r.nextRowIndex || i.getInvalidationCursor() < r.hierarchyCursor)
        return this.clearCacheEntries();
      for (let a = r.nextRowIndex; a < n.length; a++) {
        let c = n.id.get(a),
          d = te(t, c);
        d !== void 0 && e.add(d);
      }
      let o = i.getInvalidatedNodeIdsSince(r.hierarchyCursor);
      if (o === void 0) return this.clearCacheEntries();
      for (let a of o) e.add(a);
    }
    this.advanceCursors();
    for (let r of e) {
      let n = this.physicalParentIds.get(r);
      n !== void 0 && e.add(n);
      let i = ni(t, r);
      (i !== void 0 && e.add(i), this.cache.delete(r), this.physicalParentIds.delete(r));
    }
  }
  clearCacheEntries() {
    (this.cache.clear(), this.physicalParentIds.clear(), this.advanceCursors());
  }
  advanceCursors() {
    for (let e of this.cursors)
      ((e.nextRowIndex = e.store.branchData.columns.length),
        (e.hierarchyCursor = e.store.getHierarchy().getInvalidationCursor()));
  }
  computeGeneration(e, t) {
    if (t.generations.has(e)) return t.generations.get(e);
    if (t.activeIds.has(e)) return;
    t.activeIds.add(e);
    let r;
    try {
      r = this.computeCurrentGeneration(e, t);
    } finally {
      t.activeIds.delete(e);
    }
    return (t.generations.set(e, r), r);
  }
  computeCurrentGeneration(e, t) {
    let r = this.store.getChecksum(e);
    if (r === void 0) {
      this.cache.delete(e);
      return;
    }
    let n = this.cache.get(e),
      i = n?.physicalChecksum === r ? n.dependencies : this.collectDependencyLinks(e);
    if (i === void 0) {
      this.cache.delete(e);
      return;
    }
    let o = this.resolveDependencies(i, t);
    if (o === void 0) {
      this.cache.delete(e);
      return;
    }
    if (
      n?.physicalChecksum === r &&
      n.dependencies.length === o.length &&
      n.dependencies.every((c, d) => c.generation === o[d]?.generation)
    )
      return n.generation;
    let a = this.createOpaqueGeneration(r, o);
    return (this.cache.set(e, { physicalChecksum: r, dependencies: o, generation: a }), a);
  }
  collectDependencyLinks(e) {
    let t = this.store.getHierarchy(),
      r = [],
      n = new Set(),
      i = [e];
    for (; i.length > 0;) {
      let o = i.pop();
      if (n.has(o)) return;
      n.add(o);
      let a = t.getNodeData(o);
      if (!a?.inTree) return;
      if ((this.physicalParentIds.set(o, ni(t, o)), this.store.getChecksum(o) === void 0)) continue;
      let c = this.store.getReplayableValue(o, "replicaInfo"),
        d = this.store.getObjectKey(`${o}.replicaInfo`, "master"),
        h = a.replicaInfoMaster;
      if (c != null && c !== y) {
        if (
          !j(c) ||
          D(c) !== `${o}.replicaInfo` ||
          !ri(d) ||
          d !== h ||
          !t.masterIdToReplicaIds.get(d)?.has(o)
        )
          return;
        r.push({ kind: "master", ownerId: o, targetId: d });
        let f = this.store.getObjectKey(`${o}.replicaInfo`, "inheritsFrom");
        if (f !== void 0) {
          if (!ri(f)) return;
          r.push({ kind: "inheritsFrom", ownerId: o, targetId: f });
        }
      } else if (d !== void 0 || h !== void 0) return;
      if (!this.store.latest.has(o, "children")) {
        if (t.getChildrenIds(o).length > 0) return;
        continue;
      }
      let u = t.getChildrenIds(o);
      for (let f = u.length - 1; f >= 0; f--) i.push(u[f]);
    }
    return (r.sort(mo), r);
  }
  resolveDependencies(e, t) {
    let r = [];
    for (let n of e) {
      if (!this.isDependencyLinkCurrent(n)) return;
      let i = this.store.getHierarchy().getNodeData(n.targetId);
      if (!i?.inTree) return;
      if (n.kind === "master") {
        if (!i.isMaster) return;
      } else if (!i.isMaster && i.replicaInfoMaster === void 0) return;
      let o = this.computeGeneration(n.targetId, t);
      if (o === void 0) return;
      r.push({ ...n, generation: o });
    }
    return r;
  }
  isDependencyLinkCurrent(e) {
    let t = this.store.getHierarchy(),
      r = t.getNodeData(e.ownerId);
    return r?.inTree
      ? e.kind === "master"
        ? r.replicaInfoMaster === e.targetId &&
          (t.masterIdToReplicaIds.get(e.targetId)?.has(e.ownerId) ?? !1)
        : r.replicaInfoMaster !== void 0 &&
          this.store.getObjectKey(`${e.ownerId}.replicaInfo`, "inheritsFrom") === e.targetId
      : !1;
  }
  createOpaqueGeneration(e, t) {
    let r = {
      version: po,
      physicalChecksum: e,
      dependencies: t.map((o) => ({
        kind: o.kind,
        ownerId: o.ownerId,
        targetId: o.targetId,
        generation: o.generation,
      })),
    };
    (this.primaryWriter.reset(),
      this.primaryWriter.add(r),
      this.secondaryWriter.reset(),
      this.secondaryWriter.add(r));
    let n = this.primaryWriter.getHash(),
      i = this.secondaryWriter.getHash();
    return `${n.toString(16).padStart(8, "0")}${i.toString(16).padStart(8, "0")}`;
  }
};
var Fe = -1;
function Te(s, e) {
  let t = s.length;
  for (; t < e;) t <<= 1;
  let r = new Uint32Array(t);
  return (r.set(s), r);
}
var je = class s {
    constructor(e) {
      this.columns = e;
      let t = e.id,
        r = e.key;
      (l(
        t instanceof U && r instanceof U,
        "SlabLatestMap requires dictionary-encoded id and key columns"
      ),
        (this.idCol = t),
        (this.keyCol = r));
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
        r = this.keyCol.rowCodes(),
        n = this.idCol.uniques.indexOf(k),
        i = this.keyCol.uniques.indexOf("parentid"),
        o = Math.max(256, this.idCol.uniques.length);
      ((this.off = new Uint32Array(o)),
        (this.len = new Uint32Array(o)),
        (this.cap = new Uint32Array(o)),
        (this.keyIndex.length = 0),
        this.upd.length < o && (this.upd = Te(this.upd, o)));
      for (let c = 0; c < e.length; c++) {
        let d = t[c],
          h = r[c];
        d === n || h === i || this.cap[d]++;
      }
      let a = 0;
      for (let c = 0; c < this.idCol.uniques.length; c++)
        ((this.off[c] = a * 2), (a += this.cap[c]));
      ((this.arena = new Uint32Array(Math.max(1024, a * 2))),
        (this.top = a * 2),
        (this.abandoned = 0),
        (this.maxNode = this.idCol.uniques.length - 1),
        this.indexLatestRows(n, i));
    }
    indexLatestRows(e, t) {
      let r = this.columns,
        n = this.idCol.rowCodes(),
        i = this.keyCol.rowCodes(),
        o = new Uint32Array(this.keyCol.uniques.length),
        a = -1,
        c = !1;
      for (let d = r.length - 1; d >= 0; d--) {
        let h = n[d];
        if (h === e) continue;
        let u = i[d];
        if (u === t) continue;
        if ((h !== a && ((c = this.len[h] === 0), (a = h)), c)) {
          let p = o[u],
            m = this.arena[p];
          if (p !== 0 && n[m] === h) {
            P(r, d, m) && ((this.arena[p] = d), this.upd[h]++);
            continue;
          }
          let g = this.len[h],
            R = this.off[h] + (g << 1);
          ((this.arena[R] = u),
            (this.arena[R + 1] = d),
            (o[u] = R + 1),
            (this.len[h] = g + 1),
            this.upd[h]++);
          continue;
        }
        let f = this.getAt(h, u);
        (f === Fe || P(r, d, f)) && this.setAt(h, u, d);
      }
    }
    replayLatestValues(e, t) {
      let r = new Int32Array(this.keyCol.uniques.length).fill(-1),
        n = 0;
      for (let h of e) {
        let u = this.keyCol.codeOf(h);
        u !== void 0 && (r[u] = n++);
      }
      if (n === 0) return;
      let i = this.columns,
        o = this.idCol.rowCodes(),
        a = this.keyCol.rowCodes(),
        c = this.idCol.codeOf(k) ?? -1,
        d = new Uint32Array(this.idCol.uniques.length * n);
      for (let h = i.length - 1; h >= 0; h--) {
        let u = a[h],
          f = r[u];
        if (f < 0) continue;
        let p = o[h];
        if (p === c) continue;
        let m = p * n + f,
          g = d[m];
        (g === 0 || P(i, h, g - 1)) &&
          ((d[m] = h + 1), t(this.idCol.uniques[p], this.keyCol.uniques[u], h));
      }
    }
    get(e, t) {
      let r = this.idCol.codeOf(e);
      if (r !== void 0) return this.rowFor(r, t);
    }
    has(e, t) {
      return this.get(e, t) !== void 0;
    }
    getOwn(e, t) {
      return this.get(e, t);
    }
    set(e, t, r) {
      let n = this.idCol.codeOf(e);
      l(n !== void 0, () => `latest set for id missing from columns: ${e}`);
      let i = this.keyCol.codeOf(t);
      (l(i !== void 0, () => `latest set for key missing from columns: ${t}`), this.setAt(n, i, r));
    }
    viewFor(e, t) {
      let r = this.views[e];
      if (!r) {
        let n = this.ghosts.get(t);
        (n ? (this.ghosts.delete(t), (n.node = e), (r = n)) : (r = new Nt(this, e, t)),
          e >= this.views.length && (this.views.length = e + 1),
          (this.views[e] = r));
      }
      return r;
    }
    getLatestOrCreateGhost(e) {
      let t = this.idCol.codeOf(e);
      if (t !== void 0) return this.viewFor(t, e);
      let r = this.ghosts.get(e);
      return (r || ((r = new Nt(this, -1, e)), this.ghosts.set(e, r)), r);
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
      if (e > this.maxNode) return Fe;
      let r = this.arena,
        n = this.off[e],
        i = this.len[e];
      if (i >= s.WIDE_NODE_THRESHOLD) {
        let c = (this.keyIndex[e] ?? this.buildKeyIndex(e)).get(t);
        return c === void 0 ? Fe : r[n + (c << 1) + 1];
      }
      let o = n + (i << 1);
      for (let a = n; a < o; a += 2) if (r[a] === t) return r[a + 1];
      return Fe;
    }
    setAt(e, t, r) {
      (l(r >>> 0 === r, "RowIndex must be a u32"), this.ensureNode(e));
      let n = this.arena,
        i = this.off[e],
        o = this.len[e],
        a = this.keyIndex[e];
      if (a) {
        let d = a.get(t);
        if (d !== void 0) {
          ((n[i + (d << 1) + 1] = r), this.upd[e]++);
          return;
        }
      } else {
        let d = i + (o << 1);
        for (let h = i; h < d; h += 2)
          if (n[h] === t) {
            ((n[h + 1] = r), this.upd[e]++);
            return;
          }
      }
      o === this.cap[e] && this.growSlab(e);
      let c = this.off[e] + (o << 1);
      ((this.arena[c] = t),
        (this.arena[c + 1] = r),
        (this.len[e] = o + 1),
        a ? a.set(t, o) : o + 1 >= s.WIDE_NODE_THRESHOLD && this.buildKeyIndex(e),
        this.upd[e]++);
    }
    buildKeyIndex(e) {
      let t = new Map(),
        r = this.off[e],
        n = this.len[e];
      for (let i = 0; i < n; i++) t.set(this.arena[r + (i << 1)], i);
      return ((this.keyIndex[e] = t), t);
    }
    ensureNode(e) {
      if (e >= this.off.length) {
        let t = e + 1;
        ((this.off = Te(this.off, t)),
          (this.len = Te(this.len, t)),
          (this.cap = Te(this.cap, t)),
          (this.upd = Te(this.upd, t)));
      }
      e > this.maxNode && (this.maxNode = e);
    }
    growSlab(e) {
      let t = this.len[e],
        r = this.cap[e],
        n = r === 0 ? 4 : r << 1,
        i = n << 1;
      this.top + i > this.arena.length &&
        (this.abandoned > this.top >>> 1 && this.compact(),
        this.top + i > this.arena.length && (this.arena = Te(this.arena, this.top + i)));
      let o = this.off[e],
        a = this.top;
      ((this.top += i),
        t > 0 && this.arena.copyWithin(a, o, o + (t << 1)),
        (this.off[e] = a),
        (this.cap[e] = n),
        (this.abandoned += r << 1));
    }
    compact() {
      let e = new Uint32Array(this.arena.length),
        t = 0;
      for (let r = 0; r <= this.maxNode; r++) {
        let n = this.cap[r];
        if (n === 0) continue;
        let i = this.off[r];
        (e.set(this.arena.subarray(i, i + (this.len[r] << 1)), t),
          (this.off[r] = t),
          (t += n << 1));
      }
      ((this.arena = e), (this.top = t), (this.abandoned = 0));
    }
    nodeOf(e) {
      return this.idCol.codeOf(e) ?? -1;
    }
    rowFor(e, t) {
      if (e < 0) return;
      let r = this.keyCol.codeOf(t);
      if (r === void 0) return;
      let n = this.getAt(e, r);
      return n === Fe ? void 0 : n;
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
      for (let r = 0; r < t; r++) {
        let n = this.off[e] + (r << 1);
        yield [this.keyCol.uniques[this.arena[n]], this.arena[n + 1]];
      }
    }
    forEachAt(e, t) {
      if (e < 0 || e > this.maxNode) return;
      let r = this.arena,
        n = this.keyCol.uniques,
        i = this.off[e] + (this.len[e] << 1);
      for (let o = this.off[e]; o < i; o += 2) t(n[r[o]], r[o + 1]);
    }
  },
  Nt = class {
    constructor(e, t, r) {
      this.owner = e;
      this.node = t;
      this.id = r;
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
var kt = class {
  constructor(e, t, r, n) {
    this.latest = e;
    this.getCurrentValue = t;
    this.base = r;
    this.getOwnValueAtRow = n;
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
  isMergeableArray(e, t) {
    if (t.length === 0) return !1;
    if (t.length === 1) return t[0] === w;
    for (let r of t) {
      let n = this.getCurrentValue(e, r);
      if (n !== void 0 && n !== y && n !== B) return fe(n);
    }
    return !0;
  }
  getItemIds(e) {
    let t = this.getState(e);
    if (this.isDirty(e)) {
      let r = new Map();
      for (let i of this.base?.getItemIds(e) ?? []) {
        let o = this.getCurrentValue(e, i);
        fe(o) && r.set(i, o);
      }
      let n = this.latest.getOwnLatest(e);
      (n &&
        n.forEachOwn((i, o) => {
          if (i === w) return;
          let a = this.getOwnValueAtRow(o);
          if (a === y || !fe(a)) {
            r.delete(i);
            return;
          }
          r.set(i, a);
        }),
        (t.array = Array.from(r.keys()).sort((i, o) => {
          let a = r.get(i),
            c = r.get(o);
          return a < c ? -1 : a > c ? 1 : 0;
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
function si(s, e, t, r) {
  s !== "relaxed" &&
    l(Io(e, t, r), () => `Atomic arrays must only contain primitives: ${JSON.stringify(e)}`);
}
function go(s, e, t, r) {
  return s.some((n) => n(e, t, r));
}
var bo = [];
function Io(s, e, t) {
  return s.some(ii) ? s.every((r) => ii(r) && go(bo, r, e, t)) : !0;
}
function ii(s) {
  return typeof s == "object" && s !== null;
}
function oi(s, e) {
  let t = s.length,
    r = e.length,
    n = Array.from({ length: t + 1 }, () => new Array(r + 1).fill(0));
  for (let c = t - 1; c >= 0; --c)
    for (let d = r - 1; d >= 0; --d)
      s[c] === e[d]
        ? (n[c][d] = n[c + 1][d + 1] + 1)
        : (n[c][d] = Math.max(n[c + 1][d], n[c][d + 1]));
  let i = [],
    o = 0,
    a = 0;
  for (; o < t && a < r;)
    s[o] === e[a]
      ? ((o += 1), (a += 1))
      : n[o + 1][a] > n[o][a + 1]
        ? (i.push({ operation: "delete", index: o, value: s[o] }), (o += 1))
        : (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  for (; o < t;) (i.push({ operation: "delete", index: o, value: s[o] }), (o += 1));
  for (; a < r;) (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  return i;
}
function Dt(s, e) {
  (l(s.branchId === I, "Effective base ids must be resolved against the main store"),
    l(e !== I, "Main has no base"));
  let t = ai(s, e);
  if (t.baseId === I) return t.baseId;
  let r = t,
    n = t.baseId,
    i = new Set();
  for (; n !== e;) {
    if (n === I || i.has(n)) return t.baseId;
    i.add(n);
    let o = ai(s, n);
    (wo(o, r) && (r = o), (n = o.baseId));
  }
  return r.branchId === e ? I : t.baseId;
}
function ai(s, e) {
  let t = s.latest.get(e, _r);
  l(t !== void 0, () => `Branch ${e} does not exist`);
  let r = s.branchData.columns,
    n = r.value.get(t);
  return (
    l(typeof n == "string" && n.length > 0, () => `Invalid baseId value for branch: ${e}`),
    { branchId: e, baseId: n, seq: r.seq.get(t), client: r.client.get(t) }
  );
}
function wo(s, e) {
  return Y(e.seq, e.client, s.seq, s.client);
}
function Cr(s) {
  if (!Qe(s.client)) return `invalid CRDT client id: ${s.client}`;
  if (!Ne(s.seq)) return `invalid CRDT seq: ${s.seq}`;
}
var di = "$$id-";
function ci(s) {
  return di + s;
}
function fu(s) {
  return s.startsWith(di);
}
var So = 0,
  vo = 62 ** 5,
  Co = 0,
  xo = Number.MAX_SAFE_INTEGER;
function xr(s, e, t) {
  s &&
    e &&
    (l(s <= e, () => `Invalid boundaries: ${s} > ${e}`),
    l(
      s !== e,
      () => `Trying to allocate between equal boundarys (same position, same client): ${s}`
    ));
  let r = s ? we(s) : [],
    n = e ? we(e) : [],
    i = Ro(r, n, t);
  return le(i);
}
var hi;
function Ro(s, e, t) {
  let r = [],
    n = 0,
    i = !1;
  for (;;) {
    l(n < 2e3, "Infinite loop");
    let o = n < s.length,
      a = n < e.length,
      c = o ? s[n] : { position: So, client: Co },
      d = a && !i ? e[n] : { position: vo, client: xo };
    if (d.position - c.position > 1) {
      let h;
      hi
        ? (h = hi)
        : e.length === 0
          ? (h = (f, p) => ui(f, p, 4096, 2))
          : i
            ? (h = (f, p) => ui(f, p, 8192, 2))
            : (h = Ao);
      let u = h(c.position + 1, d.position - 1);
      return (r.push({ position: u, client: t }), r);
    }
    if ((r.push({ ...c }), !i)) {
      let h = c.position < d.position,
        u = a && c.position === d.position && c.client < d.client;
      i = h || u;
    }
    n++;
  }
}
function ui(s, e, t, r) {
  l(s <= e, () => `Invalid range: ${s} > ${e}`);
  let n = Math.min(e, s + r),
    i = Math.min(e, n + t);
  return li(n, i);
}
function Ao(s, e) {
  l(s <= e, () => `Invalid range: ${s} > ${e}`);
  let t = Math.floor((s + e) / 2),
    r = Math.min(8, Math.floor((e - s) / 4)),
    n = Math.max(s, t - r),
    i = Math.min(e, t + r);
  return li(n, i);
}
var To = Math.random;
function li(s, e) {
  let t = e - s + 1;
  return Math.floor(To() * t) + s;
}
var fi = "FRAMERCRDT";
function Rr(s) {
  let e = s.readString();
  return (l(e === fi, () => `Not a framer document: ${e}`), { version: s.readUint16() });
}
function Ar(s, e) {
  (e.writeString(fi), e.writeUint16(s));
}
function Mo(s, e) {
  let t = `m${s}_${e}`;
  return (l(Me[t], () => `Migration from ${s} to ${e} does not exist`), Me[t]);
}
function pi(s, e = 1) {
  for (let t = Math.max(s, 2); t > e; --t) {
    let r = Mo(t - 1, t);
    if (r.codec) return r.codec;
  }
}
var ie = class s {
  constructor(e = Oe) {
    this.version = e;
    let t = pi(e);
    (l(t, () => `Codec not found for version ${e}`),
      (this.codec = t),
      (this.branches = new Map([[I, new O(this.codec, I, e)]])));
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
    return (t || ((t = new O(this.codec, e, this.version)), this.branches.set(e, t)), t);
  }
  get main() {
    return this.getBranch(I);
  }
  get length() {
    let e = 0;
    for (let t of this.branches.values()) e += t.columns.length;
    return e;
  }
  addSerializableRows(e) {
    for (let t of e) this.getOrCreateBranch(t.branchId ?? I).addSerializableRow(t);
  }
  releaseColumnLookups() {
    for (let e of this.branches.values()) e.columns.releaseLookups();
  }
  toBuffer() {
    let e = new z();
    return (Ar(this.version, e), this.codec.encode(this, e), e.getBuffer());
  }
  async writeToStream(e) {
    let t = new z();
    return (Ar(this.version, t), this.codec.encode(this, t), t.writeToStream(e));
  }
  static loadVersionFromBuffer(e) {
    let t = new A(e),
      { version: r } = Rr(t);
    return r;
  }
  static fromBuffer(e, t) {
    let r = new A(e, t?.dataAvailability),
      { version: n } = Rr(r),
      i = new s(n);
    return (i.codec.decode(i, r, t), i);
  }
};
var de = "meta",
  $e = { ROOT_ID: "rootId", VERSION: "version" },
  yi = 5e4;
function Oo(s, e) {
  return s.seq === e.seq ? s.client - e.client : s.seq - e.seq;
}
function mi(s) {
  if (!Array.isArray(s) || s.length === 0) return !1;
  let e,
    t = new Set();
  for (let r of s) {
    if (typeof r != "object" || r === null) return !1;
    let n =
      typeof r.id == "string" ? "id" : typeof r.identifier == "string" ? "identifier" : void 0;
    if (!n) return !1;
    (e &&
      l(e === n, () => `Mergeable arrays must have consistent id/identifier: ${JSON.stringify(s)}`),
      (e = n));
    let i = r[e];
    if (!i) return !1;
    (l(!t.has(i), () => `Mergeable arrays must have unique ids: ${JSON.stringify(s)}`), t.add(i));
  }
  return !0;
}
function No(s, e, t = 0) {
  let r = {},
    n = r;
  for (let o = t; o < s.length - 1; ++o) {
    let a = s[o],
      c = {};
    ((n[a] = c), (n = c));
  }
  let i = s[s.length - 1];
  return ((n[i] = e), r);
}
function Tr(s) {
  return `${s.client}/${s.seq}/${s.id}/${s.key}/${JSON.stringify(s.value)}/${s.batch}`;
}
var ko = ["__class", "isMaster", "isFormContainer", "replicaInfo", "master", "dataIdentifier"],
  Do = ["__class"],
  ye = class s {
    table;
    branchData;
    latest;
    hierarchy;
    sortedArrayCache;
    checksumIndex;
    resolvedSubtreeGenerationIndex;
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
      atomicArrays: r = "strict",
      latestMap: n = "map",
      hierarchyMode: i = "full",
      bulkHierarchyRehydrate: o = !1,
      onTiming: a,
      branchId: c = I,
      base: d,
      table: h,
      extractIdFromObject: u,
      shouldReplaceObjectOnIdChange: f,
      useHierarchyCache: p = !0,
      writeAuthorizer: m,
      valueTransformer: g,
      getTime: R = Date.now,
    }) {
      ((this.client = e),
        (this.user = t),
        (this.atomicArrays = r),
        (this.latestMapType = n),
        (this.hierarchyMode = i),
        (this.bulkHierarchyRehydrate = o),
        (this.onTiming = a),
        (this.branchId = c),
        (this.getTime = R),
        (this.base = d),
        (this.table = h ?? d?.table ?? new ie()),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.positionClientId = Lr(this.branchId, this.client)),
        (this.latest = this.createLatestMap()),
        (this.extractIdFromObject = u),
        (this.shouldReplaceObjectOnIdChange = f),
        (this.ownWriteAuthorizer = m),
        (this.valueTransformer = g),
        this.init(p),
        this.branchId !== I &&
          this.branchData.columns.length === 0 &&
          this.setObjectKey(this.branchId, w, B));
    }
    init(e = !0) {
      ((this.batchNo = 0),
        (this.batchStartIdx = void 0),
        (this.ownPermanentError = null),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.branches.length = 0),
        (this.latest = this.createLatestMap()),
        (this.hierarchy = new At(this, this.latest, this.base?.hierarchy)),
        (this.branchOwnWriteIndex = this.base ? new ut(this.branchData) : void 0),
        (this.sortedArrayCache = new kt(
          this.latest,
          (t, r) => this.getCurrentValue(t, r),
          this.base?.sortedArrayCache,
          (t) => this.branchData.columns.value.get(t)
        )),
        (this.checksumIndex = new wt(this)),
        (this.resolvedSubtreeGenerationIndex = new Ot(this)),
        this.branchData.hierarchyData && e
          ? (this.updateCaches(this.branchData.hierarchyData),
            this.base && this.hierarchy.resolveCycles(0))
          : ((this.branchData.hierarchyData = new L(
              this.hierarchy.parentHistory,
              this.hierarchy.parentOverrides
            )),
            this.indexRowsOptimized(),
            this.hierarchy.postProcess(0)));
    }
    createLatestMap() {
      return this.base
        ? new Mt(this.base.latest)
        : this.latestMapType === "slab"
          ? new je(this.branchData.columns)
          : new Tt();
    }
    withTiming(e, t) {
      if (!this.onTiming) return t();
      let r = performance.now();
      try {
        return t();
      } finally {
        this.onTiming(e, performance.now() - r);
      }
    }
    reset() {
      (l(this.branchId === I, "Cannot call reset on non main branches"),
        (this.table = new ie()),
        this.init());
    }
    static resetBranchDataForTesting(e) {
      (l(e.branchId !== I, "Cannot reset main branch data for testing"),
        e.table.branches.set(e.branchId, new O(e.branchData.codec, e.branchId, e.table.version)),
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
    isWriteAuthorized(e, t, r, n, i) {
      let o = te(this.hierarchy, t) ?? t,
        a = o === t ? r : t.slice(o.length + 1).split(".", 1)[0];
      return e.canWriteProperty(this, o, a, n, i);
    }
    throwIfPermanentError() {
      let e = this.permanentError;
      if (e) throw new Error("Store is permanently broken due to a previous error", { cause: e });
    }
    fromBuffer(e, t = !0) {
      (l(this.branchId === I, "Cannot call fromBuffer on non main branches"),
        (this.table = ie.fromBuffer(e, { stringCodeMaps: !0 })),
        this.init(t));
    }
    branch(e, t = !0) {
      let r = new s({
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
      return (this.branches.push(r), r);
    }
    detachBranch(e) {
      let t = this.branches.indexOf(e);
      t !== -1 && this.branches.splice(t, 1);
    }
    updateCaches(e) {
      let t = this.manifest.getBatch(this.client);
      this.batchNo = t !== void 0 ? ve(t) : 0;
      let r = this.branchData.columns,
        n = this.latest;
      (n instanceof je
        ? (this.withTiming("latest_index", () => n.build()),
          this.withTiming("hierarchy_latest_replay", () => {
            let i = this.hierarchyMode === "full" ? ko : Do;
            n.replayLatestValues(i, (o, a, c) => {
              this.hierarchy.updateLatestValue(o, a, c);
            });
          }))
        : this.withTiming("latest_index", () => {
            for (let i = this.length - 1; i >= 0; i--) {
              let o = r.id.get(i);
              if (o === k) continue;
              this.branchOwnWriteIndex?.indexOwnRow(i);
              let a = r.key.get(i);
              if (a === "parentid") continue;
              let c = this.latest.getOwn(o, a);
              (c === void 0 || P(r, i, c)) &&
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
      this.setObjectKey(de, $e.ROOT_ID, e);
    }
    getRoot() {
      return this.getCurrentValue(de, $e.ROOT_ID);
    }
    getVersion() {
      return this.getCurrentValue(de, $e.VERSION);
    }
    setVersion(e) {
      this.setObjectKey(de, $e.VERSION, e);
    }
    isRoot(e) {
      return this.getCurrentValue(de, $e.ROOT_ID) === e;
    }
    get seq() {
      return this.branchData.metadata.seq;
    }
    set seq(e) {
      this.branchData.metadata.seq = e;
    }
    ensureMinSeq(e) {
      l(Ne(e), () => `invalid seq: ${e}`);
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
      return this.getRows().sort(Oo);
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
        operation: void 0,
      };
      this.mutationCapture = t;
      try {
        e();
        let r = this.length - t.startIndex;
        l(r === t.previousIndices.length, "Previous and next mutation rows must align");
        let n = [],
          i = Array.from({ length: r }),
          o = this.branchId === I ? y : b,
          { id: a, key: c, value: d } = this.branchData.columns;
        for (let h = 0; h < r; h++) {
          let u = t.startIndex + h,
            f = t.previousObjectRows.get(u);
          if (f) for (let g of f) n.push(g);
          i[h] = { id: a.get(u), key: c.get(u), value: d.get(u) };
          let p = t.previousIndices[h],
            m = p === -1 ? u : p;
          n.push({ id: a.get(m), key: c.get(m), value: p === -1 ? o : d.get(p) });
        }
        return t.operation === "insertNode"
          ? { previousRows: n.filter((h) => h.key === "parentid"), nextRows: i }
          : { previousRows: n, nextRows: i };
      } catch (r) {
        throw (
          (this.ownPermanentError = r instanceof Error ? r : new Error(String(r), { cause: r })),
          r
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
    capturePreviousIndex(e, t, r) {
      let n = this.mutationCapture;
      if (!n) return;
      let i =
          t === "parentid"
            ? this.hierarchy.getOwnParentRowIdx(e)
            : this.latest.getOwnLatest(e)?.ownGet(t),
        o = i !== void 0 && i >= n.startIndex ? n.previousIndices[i - n.startIndex] : (i ?? -1);
      if (
        (n.previousIndices.push(o),
        t === "parentid" && r === y && K(this.hierarchy.getHierarchyKey(e)))
      ) {
        n.previousObjectRows.set(this.length, this.getOwnRowsForObject(e));
        return;
      }
      if (o !== -1) {
        let a = this.branchData.columns.value.get(o);
        r === y &&
          fe(a) &&
          this.getMergeableArrayIds(e) &&
          n.previousObjectRows.set(this.length, this.getOwnRowsForObject(t));
      }
    }
    getIndexAtMutationStart(e) {
      let t = this.mutationCapture;
      return !t || e < t.startIndex ? e : t.previousIndices[e - t.startIndex];
    }
    getOwnRowsForObject(e) {
      let t = [],
        r = new Set(),
        n = (o) => {
          if (r.has(o)) return;
          r.add(o);
          let a = this.latest.getOwnLatest(o);
          if (!a) return;
          let c = [];
          a.forEachOwn((h, u) => c.push([h, u]));
          let d = this.sortedArrayCache.isMergeableArray(
            o,
            c.map(([h]) => h)
          );
          for (let [h, u] of c) {
            let f = this.getIndexAtMutationStart(u);
            if (f === -1) continue;
            let p = this.branchData.columns.value.get(f);
            (t.push({ id: o, key: h, value: p }), d ? n(h) : i(p));
          }
        },
        i = (o) => {
          if (j(o) || ne(o)) {
            n(D(o));
            return;
          }
          if (Array.isArray(o)) for (let a of o) i(a);
        };
      return (n(e), t);
    }
    indexRowsOptimized() {
      let { client: e, id: t, key: r, seq: n, value: i, batch: o } = this.branchData.columns;
      this.optimizedReading = !0;
      for (let a = this.length - 1; a >= 0; a--)
        this.updateRowIndex(a, n.get(a), t.get(a), r.get(a), i.get(a), e.get(a), o.get(a));
      this.optimizedReading = !1;
    }
    merge(e) {
      return this.mergeRows(e.getRows());
    }
    mergeRows(e) {
      this.throwIfPermanentError();
      let t = new Set(this.getRows().map((n) => Tr(n))),
        r = 1 / 0;
      for (let n of e) {
        let i = Tr(n);
        t.has(i) ||
          (t.add(i),
          this.addRowData(n.id, n.key, n.value, n.client, n.seq, n.user, n.time, n.batch),
          (r = Math.min(r, n.seq)));
      }
      return (this.sortedArrayCache.clear(), this.hierarchy.postProcess(r), r);
    }
    append(e) {
      return this.addRows(e.getRows());
    }
    addSerializableRows(e, { authorizer: t, onDenied: r, onInvalid: n, skipDuplicates: i } = {}) {
      this.throwIfPermanentError();
      let o = 1 / 0;
      for (let a of e) {
        let c = a.value;
        if ((S(c) && (c = v(c)), t && !this.isWriteAuthorized(t, a.id, a.key, c, a))) {
          r?.(a);
          continue;
        }
        let d = Cr(a);
        if (d !== void 0) {
          if (n) {
            n(a, d);
            continue;
          }
          throw new Error(d);
        }
        (i && this.manifest.hasTimestamp(a.client, a.seq)) ||
          (this.addRowData(a.id, a.key, c, a.client, a.seq, a.user, a.time, a.batch),
          (o = Math.min(o, a.seq)),
          t && a.key === "parentid" && this.hierarchy.resolveCycles(a.seq));
      }
      (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : o));
    }
    addBinaryRows(e, t) {
      this.throwIfPermanentError();
      let r = e instanceof Ke ? e : new Ke(e),
        n = 1 / 0,
        i = t === void 0 ? void 0 : Array.from(t);
      for (let h of i ?? r.indices()) {
        let u = r.clients[h],
          f = r.sequences[h];
        if (!Qe(u)) throw new Error(`invalid CRDT client id: ${u}`);
        if (!Ne(f)) throw new Error(`invalid CRDT seq: ${f}`);
        let p = r.batches[h];
        if (!fn(p)) throw new Error(`invalid CRDT batch id: ${p}`);
        n = Math.min(n, f);
      }
      if (i?.length === 0) return;
      let o = (h) => (i === void 0 ? h : i.map((u) => h[u])),
        a = this.branchData.columns,
        c = this.length;
      (a.client.addMany(o(r.clients)),
        a.seq.addMany(o(r.sequences)),
        a.id.addMany(o(r.ids)),
        a.key.addMany(o(r.keys)),
        a.value.addMany(o(r.values)),
        a.user.addMany(o(r.users)),
        a.batch.addMany(o(r.batches)),
        a.time.addMany(o(r.times)));
      let d = i?.length ?? r.length;
      for (let h = 0; h < d; h++) {
        let u = i?.[h] ?? h;
        this.updateRowIndex(
          c + h,
          r.sequences[u],
          r.ids[u],
          r.keys[u],
          r.values[u],
          r.clients[u],
          r.batches[u]
        );
      }
      (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : n));
    }
    addRows(e) {
      this.throwIfPermanentError();
      let t = 1 / 0;
      for (let n of e)
        (this.addRowData(n.id, n.key, n.value, n.client, n.seq, n.user, n.time, n.batch),
          (t = Math.min(t, n.seq)));
      this.sortedArrayCache.clear();
      let r = this.hierarchy.postProcess(t);
      return { minSeq: t, cycleResolutions: r };
    }
    replayRowList(e, t) {
      let r = { supersededRows: [], addedNodeIds: [] };
      if (e.length === 0) return r;
      let n = new Map(),
        i = new Set(),
        o = new Set(),
        a = (d) => {
          let h = n.get(d);
          if (h !== void 0) return h;
          let u = this.latest.getLatest(d) !== void 0;
          return (n.set(d, u), u);
        },
        c = t?.regenerateHierarchyPositions ? Bo(e) : void 0;
      return (
        this.batch(() => {
          let d = this.seq,
            h = d;
          for (let u of e) {
            if (!a(u.id)) i.add(u.id);
            else {
              let p = `${u.id}\0${u.key}`;
              if (!o.has(p)) {
                o.add(p);
                let g = (
                  u.key === "parentid"
                    ? this.hierarchy.getParentId(u.id) !== void 0
                    : this.latest.has(u.id, u.key)
                )
                  ? this.getReplayableValue(u.id, u.key)
                  : y;
                r.supersededRows.push({ id: u.id, key: u.key, value: g });
              }
            }
            let f = c ? this.regenerateReplayHierarchyPosition(u, c) : u.value;
            (this.assertLocalValueIsStorable(u.id, u.key, f),
              this.addRowData(
                u.id,
                u.key,
                f,
                this.client,
                d++,
                u.user ?? this.user,
                u.time ?? this.batchTime
              ));
          }
          (this.sortedArrayCache.clear(), this.hierarchy.postProcess(h));
        }, t?.origin),
        (r.addedNodeIds = [...i]),
        r
      );
    }
    regenerateReplayHierarchyPosition(e, t) {
      if (e.key !== "parentid" || !vt(e.value) || !K(e.value)) return e.value;
      let r = re(e.value),
        n = T(e.value),
        i;
      for (let a of this.getChildrenIds(n)) {
        let c = this.hierarchy.getChildPosition(a);
        if (c !== void 0 && c > r) {
          i = c;
          break;
        }
      }
      for (let a of t.get(n) ?? [])
        if (!(a <= r)) {
          (i === void 0 || a < i) && (i = a);
          break;
        }
      let o = this.allocatePositionBetween(n, r, i);
      return xe(n, o);
    }
    batchStartIdx;
    batchNo = 0;
    batchTime = 0;
    get inBatch() {
      return this.batchStartIdx !== void 0;
    }
    batch(e, t = 0) {
      (this.throwIfPermanentError(), l(this.batchStartIdx === void 0, "You cannot nest batches"));
      let r = this.branchData.columns;
      ((this.batchStartIdx = r.client.length), (this.batchTime = Math.floor(this.getTime() / 1e3)));
      try {
        let n = e(),
          i = r.client.length - this.batchStartIdx;
        if (i === 0) return n;
        let o = 0;
        for (let a = 0; a < i; a += yi) {
          let c = Math.min(yi, i - a);
          (this.batchNo++, (o = _e({ batchNo: this.batchNo, rowCount: c, origin: t })));
          for (let d = 0; d < c; d++) r.batch.add(o);
        }
        return (this.manifest.updateClientState(this.client, this.seq - 1, o), n);
      } catch (n) {
        throw (
          (this.ownPermanentError = n instanceof Error ? n : new Error(String(n), { cause: n })),
          n
        );
      } finally {
        ((this.batchStartIdx = void 0), (this.batchTime = 0));
      }
    }
    updateKeyValue(e, t, r) {
      if (this.batchStartIdx === void 0) {
        this.batch(() => {
          this.updateKeyValue(e, t, r);
        });
        return;
      }
      let n = this.getWriteAuthorizer();
      if (n && !this.isWriteAuthorized(n, e, t, r, { user: this.user }))
        throw new Error(`Write authorizer denied ${t} write for ${e}`);
      (this.assertLocalValueIsStorable(e, t, r),
        this.addRowData(e, t, r, this.client, this.seq, this.user, this.batchTime));
    }
    assertLocalValueIsStorable(e, t, r) {
      l(
        this.base !== void 0 || r !== b,
        () => `Cannot write an inherited value into a store without a base: ${e}.${t}`
      );
    }
    addRowData(e, t, r, n, i, o, a, c) {
      if (!this.shouldAddRow(e, t, r, i, n)) return;
      this.capturePreviousIndex(e, t, r);
      let d = this.branchData.columns;
      (d.client.add(n),
        d.seq.add(i),
        d.id.add(e),
        d.key.add(t),
        d.value.add(r),
        d.user.add(o),
        d.time.add(a),
        c && d.batch.add(c));
      let h = d.client.length - 1;
      this.updateRowIndex(h, i, e, t, r, n, c);
    }
    shouldAddRow(e, t, r, n, i) {
      let o = t === "parentid" ? this.hierarchy.getOwnParentRowIdx(e) : this.latest.getOwn(e, t);
      if (o === void 0 || o >= this.length) return !0;
      let a = this.branchData.columns;
      if (a.value.get(o) !== r) return !0;
      let d = a.seq.get(o),
        h = a.client.get(o);
      return !(d === n && h === i);
    }
    updateRowIndex(e, t, r, n, i, o, a) {
      if (a !== void 0 && o === this.client) {
        let h = ve(a);
        this.batchNo = Math.max(this.batchNo, h);
      }
      if (
        (a !== void 0 && this.manifest.updateClientState(o, t, a),
        this.manifest.addTimestamp(o, t),
        t >= this.seq && (this.seq = t + 1),
        r === k)
      )
        return;
      let c = this.latest.getOwn(r, n),
        d = this.branchData.columns;
      if ((this.branchOwnWriteIndex?.indexOwnRow(e), n === "parentid")) {
        if (!vt(i)) return;
        this.hierarchy.updateParentId(r, e);
      } else
        (c === void 0 || Y(t, o, d.seq.get(c), d.client.get(c))) &&
          (this.latest.set(r, n, e), this.hierarchy.updateLatestValue(r, n, e));
      if (!this.optimizedReading) {
        let h = r.indexOf(".");
        h !== -1 && this.latest.getLatest(r.slice(0, h))?.updated();
      }
      (this.sortedArrayCache.invalidate(r), this.minIndexCache.add(t, e));
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
        : ne(e)
          ? (this.getMergeableArray(D(e)) ?? [])
          : j(e)
            ? this.getObjectInner(D(e))
            : oe(e)
              ? Br(e)
              : e;
    }
    getCurrentValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let r = this.latest.getOwn(e, t);
      if (r !== void 0) {
        let n = this.branchData.columns.value.get(r);
        return n === b ? this.base?.getCurrentValue(e, t) : n;
      }
      return this.base?.getCurrentValue(e, t);
    }
    getCurrentRawValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let r = this.latest.getOwnLatest(e)?.ownGet(t);
      return r !== void 0
        ? this.branchData.columns.value.get(r)
        : this.base?.getCurrentRawValue(e, t);
    }
    getCurrentRawValueOrDoesNotExist(e, t) {
      let r =
        t === "parentid"
          ? this.hierarchy.getOwnParentRowIdx(e)
          : this.latest.getOwnLatest(e)?.ownGet(t);
      if (r === void 0) return this.base ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : Ye;
      let n = this.branchData.columns.value.get(r);
      return this.base && n === b ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : n;
    }
    hasOwnRow(e, t) {
      return t === "parentid"
        ? this.hierarchy.getOwnParentRowIdx(e) !== void 0
        : this.latest.getOwn(e, t) !== void 0;
    }
    hasOwnOverridingRow(e, t) {
      if (t === "parentid") {
        let n = this.hierarchy.getOwnParentRowIdx(e);
        return n !== void 0 && (!this.base || this.branchData.columns.value.get(n) !== b);
      }
      let r = this.latest.getOwnLatest(e)?.ownGet(t);
      return r !== void 0 && (!this.base || this.branchData.columns.value.get(r) !== b);
    }
    getParentIdSeq(e) {
      return this.hierarchy.getParentIdSeq(e);
    }
    validateObjectUpdate(e, t) {
      if (!he(t)) throw new Error("Store.setObject: object is not an object");
      let r = this._getIdFromObject(t);
      if (r && r !== e)
        throw new Error(
          `Mismatch between provided id and id extracted from the store: ${r} !== ${e}`
        );
      return e;
    }
    deleteRemovedKeys(e, t) {
      let r = this.latest.getLatest(e);
      if (r) for (let n of r.keys()) n !== w && (n in t || this.setObjectKey(e, n, y));
    }
    inheritExistingKeys(e) {
      let t = this.latest.getLatest(e);
      if (!t) return;
      let r = this.latest.getOwnLatest(e);
      for (let n of t.keys())
        n !== w &&
          (r?.ownHas(n)
            ? this.setObjectKey(e, n, b)
            : this.cleanExistingReferenceValue(this.getCurrentValue(e, n), b));
    }
    assertPositionIsValid(e) {
      e !== void 0 && l(Number.isInteger(e), () => `Invalid position: ${e}`);
    }
    isMaterializableNode(e) {
      let t = this.getCurrentValue(e, "id");
      return t !== void 0 && t !== y;
    }
    createHierarchyKey(e, t, r = -1) {
      let n = this.getChildrenIds(t);
      if ((this.assertPositionIsValid(r), r === -1 || r >= n.length)) {
        let p = n.at(-1),
          m = p ? this.hierarchy.getChildPosition(p) : void 0,
          g = this.allocatePositionBetween(t, m, void 0);
        return xe(t, g);
      }
      let i = n.filter((p) => this.isMaterializableNode(p)),
        o = this.hierarchy.getChildIndex(i, e);
      if (o === r && o >= 0) {
        let p = this.hierarchy.getHierarchyKey(e);
        return (l(K(p), "Existing position cannot be deleted or inherited"), p);
      }
      if (r < 0) {
        let m = o >= 0 ? i.length : i.length + 1;
        r = Math.max(m + r, 0);
      }
      o >= 0 && r > o && (r += 1);
      let a = Math.min(r, i.length),
        c,
        d;
      if (a < i.length) {
        let p = i[a];
        (l(p !== void 0), (d = p));
        let m = n.indexOf(p);
        c = m > 0 ? n[m - 1] : void 0;
      } else c = n.at(-1);
      let h = c ? this.hierarchy.getChildPosition(c) : void 0,
        u = d ? this.hierarchy.getChildPosition(d) : void 0,
        f = this.allocatePositionBetween(t, h, u);
      return xe(t, f);
    }
    allocatePositionBetween(e, t, r) {
      let n = t;
      for (let i of this.hierarchy.getRevokedOwnPositions(e))
        (n !== void 0 && i <= n) || (r !== void 0 && i >= r) || (n = i);
      return xr(n, r, this.positionClientId);
    }
    ensureHasChildren(e) {
      this.getCurrentValue(e, "children") !== B && this.setObjectKey(e, "children", B);
    }
    insertNode(e, t, r) {
      (this.captureMutationOperation("insertNode"),
        l(typeof e.id == "string", "inserting node without a valid id"),
        this.assertPositionIsValid(r));
      let n = this.inserting;
      this.inserting = !0;
      try {
        (this.setObject(e.id, e), this.ensureHasChildren(t));
        let i = this.createHierarchyKey(e.id, t, r);
        this.setObjectKey(e.id, "parentid", i);
      } finally {
        this.inserting = n;
      }
    }
    removeNode(e) {
      (this.captureMutationOperation("removeNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to remove a node that doesn't exist: ${e}`
        ),
        this.setObjectKey(e, "parentid", y));
    }
    inheritNode(e) {
      (this.captureMutationOperation("inheritNode"),
        l(this.base !== void 0, "Only a branch can inherit a node"));
      let t = this.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (t === void 0) return;
      let r = [];
      for (let [n, i] of t.latestPropertyRowIndexByStoreId) for (let o of i.keys()) r.push([n, o]);
      for (let [n, i] of r) i !== w && this.hasOwnOverridingRow(n, i) && this.setObjectKey(n, i, b);
      this.hasOwnOverridingRow(e, "parentid") && this.setObjectKey(e, "parentid", b);
    }
    updateNode(e, t) {
      (this.captureMutationOperation("updateNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to update a node that doesn't exist: ${e}`
        ));
      for (let r in t) r !== "parentid" && this.setObjectKey(e, r, t[r]);
    }
    updateNestedObject(e, t) {
      this.captureMutationOperation("updateNestedObject");
      let [r, ...n] = e;
      l(
        this.latest.get(r, "id") !== void 0,
        () => `trying to update nested properties on node doesn't exist: ${r}`
      );
      for (let i in t) i !== "parentid" && this.setObjectKeyPath(r, [...n, i], t[i]);
    }
    moveNode(e, t, r) {
      (this.captureMutationOperation("moveNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to move a node that doesn't exist: ${e}`
        ),
        this.assertPositionIsValid(r),
        this.ensureHasChildren(t));
      let n = this.createHierarchyKey(e, t, r);
      this.setObjectKey(e, "parentid", n);
    }
    importObject(e, t) {
      this.setObject(e, t);
    }
    setObject(e, t) {
      let r = this.validateObjectUpdate(e, t);
      if ((this.deleteRemovedKeys(r, t), Object.keys(t).length === 0)) {
        this.setObjectKey(r, w, B);
        return;
      }
      this.getCurrentValue(r, w) === y && this.setObjectKey(r, w, B);
      for (let n in t) n === "children" || n === "parentid" || this.setObjectKey(r, n, t[n]);
      if (!(!("children" in t) || !Array.isArray(t.children))) {
        this.setObjectKey(r, "children", B);
        for (let n of t.children) this.insertNode(n, r);
      }
    }
    resolveObjectInArrayReference(e, t, r) {
      let n = this._getIdFromObject(t);
      if (n === void 0) {
        let a;
        (typeof t.id == "string"
          ? (a = t.id)
          : typeof t.identifier == "string"
            ? (a = t.identifier)
            : (a = `__${r}_${this.client.toString(36)}`),
          (n = this.createStoreId(e, a)));
      }
      let i = this.getCurrentValue(e, n) === y,
        o = this.inserting;
      this.inserting = this.inserting || i;
      try {
        this.setObject(n, t);
      } finally {
        this.inserting = o;
      }
      return gr(n);
    }
    createAtomicArray(e, t) {
      let r = [];
      for (let n = 0; n < t.length; n++) {
        let i = t[n];
        if (he(i)) r.push(this.resolveObjectInArrayReference(e, i, n));
        else if (mi(i)) {
          let o = this.createStoreId(e, n.toString());
          (this.setMergeableArray(o, i), r.push(mr(o)));
        } else
          Array.isArray(i)
            ? r.push(this.createAtomicArray(e + "." + n.toString(), i))
            : (this.assertLocalValueIsStorable(e, n.toString(), i), r.push(i));
      }
      return r;
    }
    cleanExistingReferenceValue(e, t) {
      if (t !== null && typeof t == "object" && !Array.isArray(t)) return;
      let r = ne(e);
      if (j(e) || r) {
        let n = D(e);
        if (t === b) {
          if (r) {
            let i = this.latest.getLatest(n);
            if (i) for (let o of i.keys()) o !== w && this.inheritExistingKeys(o);
          }
          this.inheritExistingKeys(n);
        } else this.deleteRemovedKeys(n, {});
      }
    }
    setObjectKey(e, t, r) {
      if (t === "parentid") {
        (this.hierarchy.getHierarchyKey(e) !== r || this.inserting) && this.updateKeyValue(e, t, r);
        return;
      }
      let n = this.valueTransformer ? this.valueTransformer(t, r) : r;
      this.setTransformedObjectKey(e, t, n);
    }
    setTransformedObjectKey(e, t, r) {
      let n = this.base ? this.getCurrentRawValue(e, t) === b : !1,
        i = this.getCurrentValue(e, t);
      if (r instanceof Dr) {
        let c = We(r.value);
        if (
          oe(i) &&
          Ze(this.getReferenceValue(i), c) &&
          !this.inserting &&
          (!n || this.shouldPreserveInheritedValues)
        )
          return;
        (this.cleanExistingReferenceValue(i, null), this.updateKeyValue(e, t, c));
        return;
      }
      if (he(r)) {
        let c = typeof r.id == "string" && this.shouldReplaceObjectOnIdChange?.(r) ? r.id : void 0,
          d = j(i) ? D(i) : void 0,
          h = c !== void 0 && d !== void 0 && this.getCurrentValue(d, "id") !== c ? void 0 : d,
          u =
            h ??
            this._getIdFromObject(r) ??
            this.createStoreId(e, c === void 0 ? t : `${t}.${ci(c)}`),
          f = this.inserting;
        this.inserting = this.inserting || !h;
        try {
          (this.setObject(u, r), (!h || this.inserting) && this.updateKeyValue(e, t, gr(u)));
        } finally {
          this.inserting = f;
        }
        return;
      }
      if (!Array.isArray(r)) {
        (i !== r || this.inserting || (n && !this.shouldPreserveInheritedValues)) &&
          (this.cleanExistingReferenceValue(i, r), this.updateKeyValue(e, t, r));
        return;
      }
      if (mi(r) || (r.length === 0 && ne(i))) {
        let c = ne(i) ? D(i) : void 0,
          d = c ?? this.createStoreId(e, t),
          h = i === y,
          u = this.inserting;
        this.inserting = this.inserting || h;
        try {
          (this.setMergeableArray(d, r),
            (!c || this.inserting || (n && !this.shouldPreserveInheritedValues)) &&
              this.updateKeyValue(e, t, mr(d)));
        } finally {
          this.inserting = u;
        }
        return;
      }
      (si(this.atomicArrays, r, t, e),
        typeof i == "string" && this.cleanExistingReferenceValue(i, r));
      let o = this.createStoreId(e, t),
        a = this.createAtomicArray(o, r);
      (!this.inserting &&
        (!n || this.shouldPreserveInheritedValues) &&
        Array.isArray(i) &&
        Xe(a, i)) ||
        this.updateKeyValue(e, t, a);
    }
    setObjectKeyPath(e, t, r) {
      if (!t[0]) return;
      let n = e;
      for (let o = 0; o < t.length - 1; ++o) {
        let a = t[o],
          c = this.getCurrentRawValue(n, a),
          d = c === b ? this.base?.getCurrentValue(n, a) : c;
        if (d === y) {
          let h = No(t.slice(o + 1), r);
          this.setObjectKey(n, a, h);
          return;
        }
        if ((d || (this.setObjectKey(n, a, {}), (d = this.getCurrentValue(n, a))), !j(d))) {
          let h = t.slice(0, o + 1);
          throw new Error(`${h.join(".")} is not an object`);
        }
        (c === b && this.updateKeyValue(n, a, d),
          (n = D(d)),
          this.getCurrentValue(n, w) === y && this.setObjectKey(n, w, B));
      }
      let i = t[t.length - 1];
      this.setObjectKey(n, i, r);
    }
    getChildrenIds(e) {
      return this.hierarchy.getChildrenIds(e);
    }
    resolveOverlayHierarchy() {
      let e = [];
      for (let t = this; t; t = t.base) e.push(t);
      for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        (l(r, "base chain is missing a store"), r.base && r.hierarchy.resolveCycles(0));
      }
    }
    getChecksum(e) {
      return this.checksumIndex.getChecksum(e);
    }
    getResolvedSubtreeGeneration(e) {
      return this.resolvedSubtreeGenerationIndex.getGeneration(e);
    }
    getSubtreeIds(e) {
      let t = new Set();
      for (let r of e) this.collectSubtreeObject(r, t);
      return t;
    }
    collectSubtreeObject(e, t) {
      if (t.has(e)) return;
      t.add(e);
      let r = this.getLatest(e);
      if (!r) return;
      let n = Array.from(r.keys());
      if (n.length > 0) {
        let i = this.sortedArrayCache.isMergeableArray(e, n);
        for (let o of n)
          if (o !== w)
            if (i) this.collectSubtreeObject(o, t);
            else {
              let a = this.getCurrentValue(e, o);
              this.collectSubtreeValue(a, t);
            }
      }
      for (let i of this.hierarchy.getCachedChildrenIds(e)) this.collectSubtreeObject(i, t);
    }
    collectSubtreeValue(e, t) {
      if (j(e)) {
        this.collectSubtreeObject(D(e), t);
        return;
      }
      if (ne(e)) {
        this.collectSubtreeObject(D(e), t);
        return;
      }
      if (Array.isArray(e)) for (let r of e) this.collectSubtreeValue(r, t);
    }
    getLatest(e) {
      return this.latest.getLatest(e);
    }
    has(e) {
      return this.latest.getLatest(e) !== void 0;
    }
    getObjectKey(e, t) {
      let r = this.getCurrentValue(e, t);
      if (this.getCurrentValue(e, w) !== y && r !== y) return this.getReferenceValue(r);
    }
    hasDefinedObjectKey(e, t) {
      let r = this.getCurrentValue(e, t);
      if (r === void 0 || r === y || this.getCurrentValue(e, w) === y) return !1;
      if (j(r)) {
        let n = D(r);
        return (
          (this.latest.getLatest(n) !== void 0 || this.hierarchy.getParentRowIdx(n) !== void 0) &&
          this.getCurrentValue(n, w) !== y
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
      let r = this.getCurrentValue(e, t);
      return this.latest.get(e, t) === void 0 ? Ye : r === y ? r : this.getReferenceValue(r);
    }
    getObject(e) {
      return (this.throwIfPermanentError(), this.getObjectInner(e));
    }
    getObjectWithShallowChildren(e, t) {
      return (this.throwIfPermanentError(), this.getObjectInner(e, t));
    }
    getObjectInner(e, t = 1 / 0) {
      let r = [{ depth: 0, id: e, parent: void 0 }],
        n,
        i = new Set(),
        o = this.branchData.columns.value,
        a = {},
        c = (d, h) => {
          if (d === w || d === "children" || d === "parentid") return;
          let u = o.get(h);
          u !== y && (a[d] = this.getReferenceValue(u));
        };
      for (; r.length > 0;) {
        let { id: d, depth: h, parent: u } = r.pop();
        if (i.has(d)) continue;
        i.add(d);
        let f = this.latest.getLatest(d);
        if (!f && this.hierarchy.getParentRowIdx(d) === void 0) continue;
        if (this.base) {
          if (this.getCurrentValue(d, w) === y) continue;
        } else {
          let m = f?.ownGet(w);
          if (m !== void 0 && o.get(m) === y) continue;
        }
        let p = {};
        if ((n === void 0 && (n = p), u && u.children.push(p), this.isRoot(d))) p.parentid = null;
        else {
          let m = this.getParentId(d);
          m && (p.parentid = m);
        }
        if (f) {
          if (this.base)
            for (let m of f.keys()) {
              if (m === w) continue;
              let g = this.getCurrentRawValueOrDoesNotExist(d, m);
              g === Ye ||
                g === y ||
                m === "children" ||
                m === "parentid" ||
                (p[m] = this.getReferenceValue(g));
            }
          else ((a = p), f.forEachOwn(c));
          if (h < t && f.has("children")) {
            let m = this.getChildrenIds(d);
            p.children = [];
            for (let g = m.length - 1; g >= 0; --g) {
              let R = m[g];
              this.isMaterializableNode(R) && r.push({ id: R, depth: h + 1, parent: p });
            }
          }
        }
      }
      return n;
    }
    getObjectKeys(e, t) {
      let r = this.latest.getLatest(e);
      if (!r) return [];
      let n = [];
      for (let i of r.keys()) t(i) && n.push(i);
      return n;
    }
    applyArrayEdits(e, t, r, n) {
      if (r.length === 0) return;
      let i = new Set(n),
        o = t.map((c) => this.getCurrentValue(e, c)),
        a = 0;
      for (let c of r) {
        let d = c.value;
        switch (c.operation) {
          case "delete":
            (o.splice(c.index + a, 1), i.has(c.value) || this.updateKeyValue(e, d, y), a--);
            break;
          case "insert": {
            let h = xr(o[c.index - 1], o[c.index], this.positionClientId);
            (this.updateKeyValue(e, d, h), o.splice(c.index, 0, h), a++);
            break;
          }
        }
      }
    }
    setMergeableArray(e, t) {
      let r = this.getMergeableArrayIds(e),
        n = !r;
      if (!r) {
        let a = this.latest.getLatest(e);
        if (a) for (let c of a.keys()) this.updateKeyValue(e, c, y);
        r = [];
      }
      (n || this.inserting) && this.updateKeyValue(e, w, B);
      let i = [];
      for (let a = 0; a < t.length; a++) {
        let c = this.resolveObjectInArrayReference(e, t[a], a);
        i.push(D(c));
      }
      let o = oi(r, i);
      if ((this.applyArrayEdits(e, r, o, i), this.inserting)) {
        let a = new Set(r);
        for (let c of i) {
          if (!a.has(c)) continue;
          let d = this.getCurrentValue(e, c);
          this.updateKeyValue(e, c, d);
        }
      }
    }
    getMergeableArrayItemPosition(e, t) {
      let r = this.getCurrentValue(e, this.createStoreId(e, t));
      return fe(r) ? r : void 0;
    }
    getMergeableArray(e) {
      let t = this.getLatest(e)?.keys(),
        r = t ? Array.from(t) : [];
      if (!this.sortedArrayCache.isMergeableArray(e, r))
        return this.base ? this.base.getMergeableArray(e) : void 0;
      let n = this.sortedArrayCache.getItemIds(e),
        i = [];
      for (let o of n) {
        let a = this.getObjectInner(o);
        a && i.push(a);
      }
      return i;
    }
    getMergeableArrayIds(e) {
      let t = this.getLatest(e)?.keys(),
        r = t ? Array.from(t) : [];
      return this.sortedArrayCache.isMergeableArray(e, r)
        ? this.sortedArrayCache.getItemIds(e)
        : this.base?.getMergeableArrayIds(e);
    }
    get length() {
      return this.branchData.columns.client.length;
    }
    static verifyBatches(e) {
      let t = new Map(),
        r = new Set();
      for (let n of e) {
        let i = Cr(n);
        if (i) throw new Error(i);
        let o = n.branchId ?? I,
          a = `${o}/${Tr(n)}`;
        if (r.has(a)) continue;
        r.add(a);
        let c = t.get(n.client);
        c || ((c = new Map()), t.set(n.client, c));
        let d = c.get(o);
        d || ((d = new Map()), c.set(o, d));
        let h = d.get(n.batch) ?? 0;
        d.set(n.batch, h + 1);
      }
      for (let [n, i] of t)
        for (let [o, a] of i)
          for (let [c, d] of a) {
            let { rowCount: h } = pn(c);
            l(
              h === d,
              () =>
                `Update row count does not match batch row count. Batch: ${c} Update count: ${d} Batch count: ${h}`
            );
          }
    }
    createBranchNodeChangeReader(e) {
      return (
        l(this.base, "Can't create a branch node change reader for a main store"),
        new bt(this, e)
      );
    }
    get mainStore() {
      let e = this;
      for (; e.base;) e = e.base;
      return (l(e.branchId === I, "Expected root store to be the main branch"), e);
    }
    *childBranchIds() {
      for (let e of this.hierarchy.getCachedChildrenIds(Ge))
        e !== I && Dt(this.mainStore, e) === this.branchId && (yield e);
    }
    compactBranch(e, t, r, n, i) {
      let o = new Set(),
        a = new Set(),
        c = !1;
      for (let u of this.childBranchIds()) {
        let f = this.branch(u);
        f.getHierarchy().resolveCycles(0);
        let p = new Set(),
          m = new Set(),
          g = f.compactBranch(e, p, m, n, i);
        c ||= g !== f;
        for (let R of p) o.add(R);
        for (let R of m) a.add(R);
      }
      if (!c && this.branchData.metadata.compactedLength === this.length) {
        ((this.branchData.metadata.compactedAt = n),
          e.branches.set(this.branchId, this.branchData),
          Qn(this, t, r));
        for (let u of o) t.add(u);
        for (let u of a) r.add(u);
        return this;
      }
      let d = new s({
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
          getTime: this.getTime,
        }),
        h = i ? this.branchData.metadata.compactedLength : this.length;
      (Ct.run(this, d, h, o, a),
        (d.branchData.metadata.compactedAt = n),
        (d.branchData.metadata.compactedLength = d.length));
      for (let u of o) t.add(u);
      for (let u of a) r.add(u);
      return d;
    }
    compact(e = Date.now(), t = {}) {
      (l(this.branchId === I, "Cannot call compact on non main branches"),
        l(
          this.table.version === Oe,
          () => `Cannot compact a format ${this.table.version} document`
        ));
      let r = new ie(this.table.version);
      return this.compactBranch(r, new Set(), new Set(), e, t.preserveConcurrencyWindow ?? !0);
    }
    toBuffer() {
      return this.table.toBuffer();
    }
    async writeToStream(e) {
      return this.table.writeToStream(e);
    }
    releaseColumnLookups() {
      this.table.releaseColumnLookups();
    }
  };
function Bo(s) {
  let e = new Map();
  for (let t of s) {
    if (t.key !== "parentid" || !vt(t.value) || !K(t.value)) continue;
    let r = T(t.value),
      n = e.get(r);
    n ? n.push(re(t.value)) : e.set(r, [re(t.value)]);
  }
  for (let t of e.values()) t.sort();
  return e;
}
function gi(s) {
  l(s.branchId === I, "Child branch ids must be resolved against the main store");
  let e = new Map();
  for (let t of s.getChildrenIds(Ge)) {
    if (t === I) continue;
    let r = Dt(s, t),
      n = e.get(r);
    n ? n.push(t) : e.set(r, [t]);
  }
  return e;
}
var Mr = (s, e) => `${s}\0${e}`,
  Eo = (s) => s.length === 18 && s.startsWith("$$atomic-"),
  Nr = (s) => typeof s == "string" && s.startsWith("aob(") && s.endsWith(")"),
  bi = (s) => s.slice(4, -1);
function Ii(s, e) {
  return Or(s, s.getObject(bi(e)));
}
function Or(s, e) {
  if (Nr(e)) return Ii(s, e);
  if (Array.isArray(e)) return e.map((r) => Or(s, r));
  if (typeof e != "object" || e === null) return e;
  let t = {};
  for (let r in e) t[r] = Or(s, e[r]);
  return t;
}
function _o(s) {
  let e = new ie(s.version);
  e.branches = s.branches;
  let t = gi(new ye({ client: 0, user: "migration", table: e })),
    r = (o) => {
      let a = (c) => {
        o(c);
        for (let d of t.get(c.branchId) ?? []) s.branches.has(d) && a(c.branch(d));
      };
      a(new ye({ client: 0, user: "migration", table: e }));
    },
    n = new Map();
  r((o) => n.set(o.branchId, zo(o)));
  let i = !1;
  for (let [o, a] of n) {
    let c = s.branches.get(o);
    !c || a.length === 0 || (qo(o, c, a, s.version), (i = !0));
  }
  i && r(() => {});
}
function zo(s) {
  let e = [],
    t = s.branchData.columns;
  for (let r = 0; r < t.length; r++) {
    let n = t.value.get(r);
    if (!Nr(n)) continue;
    let i = t.id.get(r),
      o = t.key.get(r);
    if (i.split(".").some(Eo) || s.latest.getOwn(i, o) !== r) continue;
    let a = Ii(s, n);
    if (!oe(a)) continue;
    let c = We(JSON.parse(JSON.stringify(a)));
    e.push({ id: i, key: o, value: c, referenceRow: r });
  }
  return e;
}
function qo(s, e, t, r) {
  let n = e.columns,
    i = new Set(t.map((d) => Mr(d.id, d.key))),
    o = new Set();
  for (let d = 0; d < n.length; d++) {
    let h = n.value.get(d);
    Nr(h) && i.has(Mr(n.id.get(d), n.key.get(d))) && o.add(bi(h));
  }
  let a = (d) => {
      for (let h = d.length; h > 0; h = d.lastIndexOf(".", h - 1))
        if (o.has(d.slice(0, h))) return !0;
      return !1;
    },
    c = new O(e.codec, s, r);
  for (let d = 0; d < n.length; d++) {
    let h = n.id.get(d);
    i.has(Mr(h, n.key.get(d))) || a(h) || c.addRow(e.getRow(d));
  }
  for (let d of t) c.addRow({ ...e.getRow(d.referenceRow), value: d.value });
  ((e.columns = c.columns),
    (e.minIndexCache = new E({ maxSize: 1e3 })),
    (e.hierarchyData = void 0),
    (e.metadata = { ...e.metadata, compactedLength: 0 }));
}
var wi = {
  description:
    "Stores atomic objects inline as a single row instead of rows under an aob(...) reference",
  migrate: _o,
};
function Lo(s) {
  for (let e of s.branches.values())
    e.metadata.compactedLength === 0 && (e.metadata.compactedLength = e.columns.length);
}
var Si = {
  description:
    "Marks branches that migration 17 -> 18 left without a compaction boundary as compacted",
  migrate: Lo,
};
function Po(s) {
  for (let e of s.branches.values()) {
    let t = e.manifest;
    ((e.manifest = new _()), e.buildManifest(), e.manifest.copyClientStateFrom(t));
  }
}
var vi = {
  description:
    "Rebuilds branch manifests from their rows, dropping timestamps migration 17 -> 18 left behind",
  migrate: Po,
};
var Ci = { migrate() {}, description: "Dummy migration. Does nothing" };
var Me = {
  m1_2: Pr,
  m2_3: Vr,
  m3_4: nn,
  m4_5: on,
  m5_6: cn,
  m6_7: yn,
  m7_8: mn,
  m8_9: bn,
  m9_10: Ci,
  m10_11: En,
  m11_12: Vn,
  m12_13: Fn,
  m13_14: jn,
  m14_15: $n,
  m15_16: nr,
  m16_17: Pn,
  m17_18: wi,
  m18_19: Si,
  m19_20: vi,
};
l(
  Me[`m${Ue - 1}_${Ue}`] === nr,
  "Delta seq migration not registered at the DELTA_SEQ_SCHEMA_VERSION boundary"
);
var Oe = Object.keys(Me).reduce((s, e) => {
  let [, t] = e.split("_");
  l(typeof t == "string", () => `Invalid migration key: ${e}`);
  let r = Number.parseInt(t, 10);
  return (l(Number.isFinite(r), () => `Invalid migration version: ${e}`), Math.max(s, r));
}, Number.NEGATIVE_INFINITY);
l(Number.isFinite(Oe), "No migrations found");
var Ho = {
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
  BlockquoteEntityTypeRootNode: !0,
  InlineCodeEntityTypeRootNode: !0,
  LinkEntityTypeRootNode: !0,
  TextEntityTypeRootNode: !0,
  ColorEntityTypeRootNode: !0,
  CMSEntityTypeRootNode: !0,
  CodeFileEntityTypeRootNode: !0,
  ComponentEntityTypeRootNode: !0,
  LayoutTemplateEntityTypeRootNode: !0,
  VectorSetEntityTypeRootNode: !0,
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
};
function Uo(s) {
  return s in Ho;
}
var Vo = (s) => (typeof s.__class == "string" && Uo(s.__class) ? s.id : void 0),
  Ql = (s) => s.type === "richText";
function ef(s, e = qr(), t = {}) {
  return new ye({
    atomicArrays: "strict",
    latestMap: "map",
    ...t,
    client: e,
    user: s,
    extractIdFromObject: Vo,
  });
}
export {
  A as a,
  z as b,
  Ke as c,
  Zc as d,
  Qc as e,
  pe as f,
  te as g,
  K as h,
  vt as i,
  T as j,
  ne as k,
  j as l,
  D as m,
  W as n,
  fe as o,
  Dt as p,
  di as q,
  fu as r,
  Rr as s,
  Ar as t,
  O as u,
  Oe as v,
  Mo as w,
  pi as x,
  ie as y,
  de as z,
  yi as A,
  ye as B,
  Ql as C,
  ef as D,
};
//# sourceMappingURL=chunk-EGBDJ65S.mjs.map
