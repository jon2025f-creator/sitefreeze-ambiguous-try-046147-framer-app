import { l as y, m as c } from "chunk-M3TB4JOC.mjs";
import { c as g, d as m } from "chunk-HATSOH2K.mjs";
import { a as i, b as I, c as f } from "chunk-WOUQLJ5W.mjs";
import { b as a } from "chunk-4JY5UMT2.mjs";
function l(r, e) {
  (a(r.branchId === i, "Effective base ids must be resolved against the main store"),
    a(e !== i, "Main has no base"));
  let t = p(r, e);
  if (t.baseId === i) return t.baseId;
  let n = t,
    o = t.baseId,
    d = new Set();
  for (; o !== e;) {
    if (o === i || d.has(o)) return t.baseId;
    d.add(o);
    let s = p(r, o);
    (h(s, n) && (n = s), (o = s.baseId));
  }
  return n.branchId === e ? i : t.baseId;
}
function p(r, e) {
  let t = r.latest.get(e, f);
  a(t !== void 0, () => `Branch ${e} does not exist`);
  let n = r.branchData.columns,
    o = n.value.get(t);
  return (
    a(typeof o == "string" && o.length > 0, () => `Invalid baseId value for branch: ${e}`),
    { branchId: e, baseId: o, seq: n.seq.get(t), client: n.client.get(t) }
  );
}
function h(r, e) {
  return g(e.seq, e.client, r.seq, r.client);
}
function E(r) {
  a(r.branchId === i, "Child branch ids must be resolved against the main store");
  let e = new Map();
  for (let t of r.getChildrenIds(I)) {
    if (t === i) continue;
    let n = l(r, t),
      o = e.get(n);
    o ? o.push(t) : e.set(n, [t]);
  }
  return e;
}
var u = class {
    constructor(e) {
      this.nodeId = e;
    }
    nodeId;
    hasParentIdOwnWrite = !1;
    latestPropertyRowIndexByStoreId = new Map();
    recordPropertyOwnWrite(e, t, n, o) {
      let d = this.getOrCreateLatestRowIndexByPropertyKey(t),
        s = d.get(n);
      (s === void 0 || m(e, o, s)) && d.set(n, o);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let n = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, n), n);
    }
  },
  w = class {
    constructor(e) {
      this.branchData = e;
    }
    branchData;
    touchedNodeIdByRowIndex = [];
    ownWriteSummaryByNodeId = new Map();
    nodeIdsWithParentIdOwnWrites = new Set();
    indexOwnRow(e) {
      let t = this.branchData.columns,
        n = t.id.get(e),
        o = t.key.get(e),
        d = S(n, o);
      if (((this.touchedNodeIdByRowIndex[e] = d), !d)) return;
      let s = this.getOrCreateOwnWriteSummary(d);
      o === "parentid"
        ? ((s.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(d))
        : s.recordPropertyOwnWrite(t, n, o, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let n = new Set();
      for (let o = e; o < t; o++) {
        let d = this.touchedNodeIdByRowIndex[o];
        d && n.add(d);
      }
      return n;
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
      let n = new u(e);
      return (this.ownWriteSummaryByNodeId.set(e, n), n);
    }
  };
function S(r, e) {
  if (r === c || e === "children" || e === y) return;
  let t = r.indexOf(".");
  return t < 0 ? r : r.slice(0, t);
}
function C(r, e) {
  if (e === c) return;
  if (r.getNodeData(e)) return e;
  let t = e.indexOf(".");
  for (; t >= 0;) {
    let n = e.slice(0, t);
    if (r.getNodeData(n)) return n;
    t = e.indexOf(".", t + 1);
  }
}
function _(r) {
  return typeof r == "string" && r.startsWith("arr(") && r.endsWith(")");
}
function K(r) {
  return typeof r == "string" && r.startsWith("obj(") && r.endsWith(")");
}
function q(r) {
  return r.slice(4, -1);
}
function H(r) {
  return `arr(${r})`;
}
function T(r) {
  return `obj(${r})`;
}
export { w as a, S as b, C as c, _ as d, K as e, q as f, H as g, T as h, l as i, E as j };
//# sourceMappingURL=chunk-ZZPAFIFO.mjs.map
