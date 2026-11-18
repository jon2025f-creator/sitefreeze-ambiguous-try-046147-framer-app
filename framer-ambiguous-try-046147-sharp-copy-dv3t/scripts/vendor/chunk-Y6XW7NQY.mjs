import { We as S } from "chunk-SC3IJYH4.mjs";
import { _k as v, pm as B } from "chunk-GIDSXRDU.mjs";
import { l as b } from "chunk-HB6AHKYH.mjs";
import { w as u } from "chunk-AAHMUU7O.mjs";
import { a as P } from "chunk-MSHSIAEI.mjs";
import { k as w } from "chunk-D563A37T.mjs";
import { b as g, g as M, p as h } from "chunk-ARJ7WQTJ.mjs";
import { j as O } from "chunk-PFWVXZ76.mjs";
import { b as y } from "chunk-4JY5UMT2.mjs";
function j(t, e) {
  return g(t.id) && t.id !== "" ? t.id : String(e);
}
var T = class {
  constructor(e) {
    this.environment = e;
  }
  environment;
  _itemIdsRevision = 0;
  get itemIdsRevision() {
    return this._itemIdsRevision;
  }
  dataByRenderId = new Map();
  itemIdsByRenderId = new Map();
  updatedDataByRenderId = new Map();
  updatedItemIdsByRenderId = new Map();
  set(e, n, r, s = "identity") {
    (y(this.environment === "sandbox", "Setting data is only allowed in the sandbox."),
      (n ??= P()));
    let i = this.dataByRenderId.get(e);
    if (s === "shallow" ? u(i, n) : i === n) return;
    if ((this.dataByRenderId.set(e, n), v(e) || w.isOn("canvasRepeatSelection"))) {
      let d = k(n, r);
      this.updatedDataByRenderId.set(e, d);
    }
    let a = n.map(j),
      o = this.itemIdsByRenderId.get(e);
    u(a, o) || (this.itemIdsByRenderId.set(e, a), this.updatedItemIdsByRenderId.set(e, a));
  }
  remove(e) {
    (y(this.environment === "sandbox", "Removing data is only allowed in the sandbox."),
      this.dataByRenderId.delete(e) &&
        (this.itemIdsByRenderId.delete(e),
        this.updatedItemIdsByRenderId.delete(e),
        this.updatedDataByRenderId.set(e, null)));
  }
  import(e) {
    y(this.environment === "editor", "Importing data is only allowed in the editor.");
    let { dataUpdates: n, itemIdsUpdates: r } = e,
      s = new Set();
    for (let { renderId: i, data: a } of n)
      (a === null
        ? (this.dataByRenderId.delete(i),
          this.itemIdsByRenderId.delete(i) && (this._itemIdsRevision += 1))
        : this.dataByRenderId.set(i, a),
        s.add(i));
    for (let { renderId: i, itemIds: a } of r)
      (u(this.itemIdsByRenderId.get(i), a) || (this._itemIdsRevision += 1),
        this.itemIdsByRenderId.set(i, a),
        s.add(i));
    return s;
  }
  isEmpty(e) {
    let n = this.dataByRenderId.get(e);
    return !n || n.length === 0;
  }
  getData(e) {
    return this.dataByRenderId.get(e);
  }
  getItemIds(e) {
    return this.itemIdsByRenderId.get(e);
  }
  export() {
    if (
      (y(
        this.environment === "sandbox",
        "No need to collect and send updates from within the editor."
      ),
      this.updatedDataByRenderId.size === 0 && this.updatedItemIdsByRenderId.size === 0)
    )
      return;
    let e = [];
    for (let [r, s] of this.updatedDataByRenderId) e.push({ renderId: r, data: s });
    this.updatedDataByRenderId.clear();
    let n = [];
    for (let [r, s] of this.updatedItemIdsByRenderId) n.push({ renderId: r, itemIds: s });
    return (this.updatedItemIdsByRenderId.clear(), { dataUpdates: e, itemIdsUpdates: n });
  }
};
function k(t, e) {
  return t.map((n) => {
    let r = {};
    for (let s in n) {
      let i = e.get(s);
      if (i)
        switch (i.type) {
          case "vectorsetitem":
            r[s] = void 0;
            continue;
          case "richtext":
            r[s] = D(n[s]);
            continue;
          case "array":
            r[s] = N(n[s], i);
            continue;
          case "object":
            throw Error("Not currently handled in removeNonSerializableData");
          case "eventhandler":
            continue;
          case "slot":
            throw Error("Should never be part of repeater data");
          default:
            r[s] = n[s];
        }
    }
    return r;
  });
}
function N(t, e) {
  if (!Array.isArray(t)) return t;
  let n = e.control;
  return n.type === "richtext"
    ? t.map(D)
    : n.type !== "object" || !V(n)
      ? t
      : t.map((r) => {
          if (!M(r)) return r;
          let s;
          for (let i in n.controls) {
            let a = n.controls[i];
            a?.type === "richtext"
              ? ((s ??= { ...r }), (s[i] = D(r[i])))
              : a?.type === "vectorsetitem" && ((s ??= { ...r }), (s[i] = void 0));
          }
          return s ?? r;
        });
}
function V(t) {
  for (let e in t.controls) {
    let n = t.controls[e]?.type;
    if (n === "richtext" || n === "vectorsetitem") return !0;
  }
  return !1;
}
function D(t) {
  return t ? "<p>Content</p>" : null;
}
var C = class {
  assets = new Map();
  _hash = 0;
  get hash() {
    return this._hash;
  }
  patch(e) {
    for (let n of e) {
      let { ownerType: r, ...s } = n,
        i = this.assets.get(n.key)?.ownerTypes ?? [],
        a = i.includes(r) ? i : [...i, r],
        o = Object.assign(s, { ownerTypes: a });
      this.assets.set(n.key, o);
    }
    this._hash++;
  }
  set(e) {
    (this.assets.clear(), this.patch(e));
  }
  items() {
    return Array.from(this.assets.values());
  }
  assetForKey(e) {
    let [n] = S(e),
      r = this.assets.get(n);
    if (r) return r;
    for (let s of this.assets.values()) if (s.name === e) return s;
  }
};
var W = O("layout-measuring/projection");
function A(t) {
  return { x: t.x / t.w, y: t.y / t.w };
}
function U(t, e) {
  let n = 0,
    r = 0;
  for (let a = 1; a < e.length; a++) {
    let o = e[a];
    (o.x < e[n].x && (n = a), o.y < e[r].y && (r = a));
  }
  let s = t[n],
    i = t[r];
  return (
    y(!h(s) && !h(i), () => `minX, minY points must be defined: ${n} ${r} ${JSON.stringify(t)}`),
    { minX: new DOMPoint(s.x, s.y), minY: new DOMPoint(i.x, i.y) }
  );
}
function se(t, e, n, r) {
  let s = t.multiply(e),
    i = r.map((m) => A(s.transformPoint(m))),
    { x: a, y: o } = x(t, e, n, U(r, i)),
    d = t.translate(a, o).multiplySelf(e),
    c = r.map((m) => A(d.transformPoint(m)));
  if (!b.anyPointsOutsideRect(n, c)) return { x: a, y: o, matrix: d };
  let l = x(t, e, n, U(r, c));
  return { x: l.x, y: l.y, matrix: t.translate(l.x, l.y).multiplySelf(e) };
}
function ie(t, e, n) {
  let r = new DOMPoint(e.x, e.y);
  return x(t, B.identity(), n, { minX: r, minY: r });
}
function x(t, e, n, { minX: r, minY: s }) {
  let i = t,
    a = e,
    o = n,
    { a: d, b: c, c: l } = z(i, a, r, o.x, 1),
    { a: m, b: p, c: f } = z(i, a, s, o.y, 2),
    I = (c * f - p * l) / (m * c - d * p),
    R = (d * f - m * l) / (d * p - m * c);
  return m * c === d * p
    ? (W.error("Unsolvable coordinates:", {
        parentMatrix: t,
        matrix: e,
        target2dPoint: n,
        minxp: r,
        minyp: s,
      }),
      { x: 0, y: 0 })
    : { x: I, y: R };
}
function z(t, e, n, r, s) {
  let i = t[`m1${s}`],
    a = e.m14 * i * n.x + e.m24 * i * n.y + e.m44 * i,
    o = t[`m2${s}`],
    d = e.m14 * o * n.x + e.m24 * o * n.y + e.m44 * o,
    c = t[`m3${s}`],
    l = t[`m4${s}`],
    m =
      (e.m11 * i + e.m12 * o + e.m13 * c + e.m14 * l) * n.x +
      (e.m21 * i + e.m22 * o + e.m23 * c + e.m24 * l) * n.y +
      e.m41 * i +
      e.m42 * o +
      e.m43 * c +
      e.m44 * l,
    p = e.m14 * t.m14 * n.x + e.m24 * t.m14 * n.y + e.m44 * t.m14,
    f = e.m14 * t.m24 * n.x + e.m24 * t.m24 * n.y + e.m44 * t.m24,
    I =
      (e.m11 * t.m14 + e.m12 * t.m24 + e.m13 * t.m34 + e.m14 * t.m44) * n.x +
      (e.m21 * t.m14 + e.m22 * t.m24 + e.m23 * t.m34 + e.m24 * t.m44) * n.y +
      e.m41 * t.m14 +
      e.m42 * t.m24 +
      e.m43 * t.m34 +
      e.m44 * t.m44,
    R = a - r * p,
    X = d - r * f,
    Y = r * I - m;
  return { a: R, b: X, c: Y };
}
export { se as a, ie as b, j as c, T as d, C as e };
//# sourceMappingURL=chunk-Y6XW7NQY.mjs.map
