import { c as m, i as f, k as g } from "chunk-3HO5QPBT.mjs";
import { c as y, d as l } from "chunk-FWZ2NLE7.mjs";
import { a as i, b as c, c as u } from "chunk-3PRKS5EZ.mjs";
import { b as a } from "chunk-4JY5UMT2.mjs";
function h(o, e) {
  (a(o.branchId === i, "Effective base ids must be resolved against the main store"),
    a(e !== i, "Main has no base"));
  let t = w(o, e);
  if (t.baseId === i) return t.baseId;
  let r = t,
    n = t.baseId,
    d = new Set();
  for (; n !== e;) {
    if (n === i || d.has(n)) return t.baseId;
    d.add(n);
    let s = w(o, n);
    (S(s, r) && (r = s), (n = s.baseId));
  }
  return r.branchId === e ? i : t.baseId;
}
function w(o, e) {
  let t = o.latest.get(e, u);
  a(t !== void 0, () => `Branch ${e} does not exist`);
  let r = o.branchData.columns,
    n = r.value.get(t);
  return (
    a(n !== m, () => `Branch ${e} does not exist`),
    a(typeof n == "string" && n.length > 0, () => `Invalid baseId value for branch: ${e}`),
    { branchId: e, baseId: n, seq: r.seq.get(t), client: r.client.get(t) }
  );
}
function S(o, e) {
  return y(e.seq, e.client, o.seq, o.client);
}
function D(o) {
  a(o.branchId === i, "Child branch ids must be resolved against the main store");
  let e = new Map();
  for (let t of o.getChildrenIds(c)) {
    if (t === i) continue;
    let r = h(o, t),
      n = e.get(r);
    n ? n.push(t) : e.set(r, [t]);
  }
  return e;
}
var I = class {
    constructor(e) {
      this.nodeId = e;
    }
    nodeId;
    hasParentIdOwnWrite = !1;
    latestPropertyRowIndexByStoreId = new Map();
    recordPropertyOwnWrite(e, t, r, n) {
      let d = this.getOrCreateLatestRowIndexByPropertyKey(t),
        s = d.get(r);
      (s === void 0 || l(e, n, s)) && d.set(r, n);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let r = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, r), r);
    }
  },
  p = class {
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
        d = B(r, n);
      if (((this.touchedNodeIdByRowIndex[e] = d), !d)) return;
      let s = this.getOrCreateOwnWriteSummary(d);
      n === "parentid"
        ? ((s.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(d))
        : s.recordPropertyOwnWrite(t, r, n, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let r = new Set();
      for (let n = e; n < t; n++) {
        let d = this.touchedNodeIdByRowIndex[n];
        d && r.add(d);
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
      let r = new I(e);
      return (this.ownWriteSummaryByNodeId.set(e, r), r);
    }
  };
function B(o, e) {
  if (o === g || e === "children" || e === f) return;
  let t = o.indexOf(".");
  return t < 0 ? o : o.slice(0, t);
}
export { p as a, B as b, h as c, D as d };
//# sourceMappingURL=chunk-YTNZQPDD.mjs.map
