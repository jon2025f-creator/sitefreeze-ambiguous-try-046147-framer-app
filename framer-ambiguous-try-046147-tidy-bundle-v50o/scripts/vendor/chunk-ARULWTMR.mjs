import { D as S, a as F, h as _, m as C, n as k, o as b, p as P, y as B } from "chunk-F2AOKTY3.mjs";
import { b as v, c as x, f as E, k as g, m as K, n as A, o as I, p as $ } from "chunk-2CMM7QDM.mjs";
import { a as w, h as R } from "chunk-6KFJ7LQD.mjs";
import { a as f, b as p } from "chunk-WOUQLJ5W.mjs";
import { b as a, c as D } from "chunk-4JY5UMT2.mjs";
var u = class {
  generate() {
    return R();
  }
};
function T(i, e, t = {}, r = new u()) {
  let n = new m(i, t, r);
  return (i.branchId !== f && n.inheritReaddedNodes(), e(n), n.getDiffs());
}
var W = { parentid: !0, children: !0, id: !0 },
  M = class {
    nodeIds = [];
    enter(e) {
      this.nodeIds.push(e);
    }
    exit(e) {
      let t = this.nodeIds.pop();
      a(t === e, () => `Left ${e} while ${t} was in progress`);
    }
    getCurrentNodeId() {
      return this.nodeIds.at(-1);
    }
  },
  m = class {
    constructor(e, t, r) {
      this.store = e;
      this.sharedData = t;
      this.idGenerator = r;
    }
    store;
    sharedData;
    idGenerator;
    diffs = [];
    visitedNodes = new M();
    nodes() {
      return new O(this.store, this.visitedNodes);
    }
    addNode(e, t, r) {
      a(this.isMainBranch(), "Nodes can only be added on the main branch");
      let n = this.getAddedNodeParentIds(),
        s = t;
      for (let d = n.get(s); d !== void 0; d = n.get(s)) s = d;
      (this.assertIsNodeId(s),
        this.validateNodeEdit(s, () => "add node"),
        this.assertInMigratedTree(t));
      let o = e.id === void 0 ? this.generateRandomId() : e.id;
      if (
        (a(typeof o == "string", "Adding a node without a valid id"),
        a(!("parentid" in e), "New node data cannot contain parentid"),
        a(!("children" in e), "New node data cannot contain children"),
        a(
          !this.store.getHierarchy().inTree(o) &&
            !this.getAddedNodeParentIds().has(o) &&
            !this.isUpdatedNodeTarget(o),
          () => `Node ${o} already exists`
        ),
        this.nodeExistsAnywhere(o))
      ) {
        this.getReaddedNodeIds().add(o);
        for (let d of this.store.getChildrenIds(o)) this.diffs.push({ type: "removeNode", id: d });
      }
      return (
        this.getAddedNodeParentIds().set(o, t),
        this.diffs.push({ type: "addNode", node: { ...e, id: o }, parentId: t, position: r }),
        o
      );
    }
    moveNode(e, t, r) {
      (this.assertIsNodeId(e),
        this.getAddedNodeParentIds().has(t) || this.assertIsNodeId(t),
        this.validateNodeEdit(e, () => `move node ${e}`),
        a(
          this.getMigratedParentId(e) !== void 0,
          () => `Node ${e} has no parent and cannot be moved`
        ),
        a(t !== p && !this.store.table.branches.has(t), "Cannot move a node into branch data"),
        a(
          this.store.isMaterializableNode(t) || this.getAddedNodeParentIds().has(t),
          () => `Parent ${t} does not exist`
        ),
        this.assertNoCycle(e, t),
        this.assertInMigratedTree(t),
        this.store.hasOwnOverridingRow(e, "parentid") &&
          (a(
            this.getParentIdWrites().get(e) !== g,
            () => `Node ${e} was removed by this migration and cannot be moved`
          ),
          this.getParentIdWrites().set(e, t),
          this.diffs.push({ type: "moveNode", id: e, parentId: t, position: r })));
    }
    removeNode(e) {
      (this.assertIsNodeId(e), this.validateNodeEdit(e, () => `remove node ${e}`));
      let t = this.getMigratedParentId(e);
      t !== g &&
        (a(t !== void 0, () => `Node ${e} has no parent and cannot be removed`),
        this.store.hasOwnOverridingRow(e, "parentid") &&
          (a(
            !this.getParentIdWrites().has(e),
            () => `Node ${e} was moved by this migration and cannot be removed`
          ),
          this.getParentIdWrites().set(e, g),
          this.diffs.push({ type: "removeNode", id: e })));
    }
    dangerouslyUpdateNodeId(e, t) {
      (this.assertIsNodeId(e),
        this.validateNodeEdit(e, () => `update the id of node ${e}`),
        a(
          this.getMigratedParentId(e) !== void 0,
          () => `Node ${e} has no parent and cannot be renamed`
        ),
        a(typeof t == "string" && t.length > 0, "Node ID must be a non-empty string"),
        a(t !== e, () => `Node ${e} already has that ID`),
        a(
          t !== $ && t !== I && t !== S && t !== p && !this.store.table.branches.has(t),
          () => `Cannot rename a node to reserved ID ${t}`
        ));
      let r = this.getUpdatedNodeIds(),
        n = r.get(e);
      if (n !== void 0) {
        a(n === t, () => `Node ${e} is already being updated to ${n}`);
        return;
      }
      for (let [s, o] of r) {
        let d = t === o || t.startsWith(`${o}.`) || o.startsWith(`${t}.`),
          h = t === s || t.startsWith(`${s}.`);
        a(!d && !h, () => `Cannot update node ${e} to ${t}: overlaps the update of ${s}`);
      }
      r.set(e, t);
    }
    getMigratedParentId(e) {
      for (let n = this.store; n !== void 0; n = n.base) {
        let s = this.sharedData.parentIdWritesByBranchId?.get(n.branchId)?.get(e);
        if (s !== void 0) return s;
        if (n.hasOwnOverridingRow(e, "parentid")) break;
      }
      let t = this.getAddedNodeParentIds().get(e);
      if (t !== void 0) return t;
      let r = this.store.getParentId(e);
      return r === g ? void 0 : r;
    }
    getParentIdWrites() {
      this.sharedData.parentIdWritesByBranchId === void 0 &&
        (this.sharedData.parentIdWritesByBranchId = new Map());
      let e = this.store.branchId,
        t = this.sharedData.parentIdWritesByBranchId.get(e);
      return (
        t === void 0 && ((t = new Map()), this.sharedData.parentIdWritesByBranchId.set(e, t)),
        t
      );
    }
    assertInMigratedTree(e) {
      let t = this.store.getRoot(),
        r = new Set(),
        n = e;
      for (; n !== void 0 && n !== g && !r.has(n);) {
        if (n === t) return;
        (r.add(n), (n = this.getMigratedParentId(n)));
      }
      throw new Error(`Parent ${e} is not in the tree`);
    }
    assertNoCycle(e, t) {
      let r = this.store.getRoot(),
        n = new Set(),
        s = t;
      for (; s !== void 0 && s !== g && !n.has(s);) {
        if ((a(s !== e, () => `Moving ${e} into ${t} would create a cycle`), s === r)) return;
        (n.add(s), (s = this.getMigratedParentId(s)));
      }
    }
    generateRandomId() {
      let e = this.idGenerator.generate();
      for (; this.nodeExistsAnywhere(e);) e = this.idGenerator.generate();
      return e;
    }
    nodeExistsAnywhere(e) {
      return (
        this.getChildBranchNodeIdsSnapshot().has(e) ||
        this.store.getObjectKey(e, "id") !== void 0 ||
        this.getAddedNodeParentIds().has(e) ||
        this.isUpdatedNodeTarget(e)
      );
    }
    isUpdatedNodeTarget(e) {
      return [...(this.sharedData.updatedNodeIds?.values() ?? [])].includes(e);
    }
    getAddedNodeParentIds() {
      return (
        this.sharedData.addedNodeParentIds || (this.sharedData.addedNodeParentIds = new Map()),
        this.sharedData.addedNodeParentIds
      );
    }
    getUpdatedNodeIds() {
      return (
        this.sharedData.updatedNodeIds || (this.sharedData.updatedNodeIds = new Map()),
        this.sharedData.updatedNodeIds
      );
    }
    getReaddedNodeIds() {
      return (
        this.sharedData.readdedNodeIds || (this.sharedData.readdedNodeIds = new Set()),
        this.sharedData.readdedNodeIds
      );
    }
    inheritReaddedNodes() {
      let e = this.sharedData.readdedNodeIds;
      if (e !== void 0)
        for (let t of e) {
          (a(!this.store.getHierarchy().inTree(t), () => `Node ${t} already exists`),
            this.store.getBranchOwnWriteIndex().getOwnWriteSummary(t) !== void 0 &&
              this.diffs.push({ type: "inheritNode", id: t }));
          for (let r of this.store.getChildrenIds(t))
            this.store.hasOwnOverridingRow(r, "parentid") &&
              this.diffs.push({ type: "removeNode", id: r });
        }
    }
    getChildBranchNodeIdsSnapshot() {
      if (this.sharedData.childBranchNodeIdsSnapshot !== void 0)
        return this.sharedData.childBranchNodeIdsSnapshot;
      let e = new Set();
      for (let [t, r] of this.store.table.branches) {
        if (t === f) continue;
        let n = r.columns;
        for (let s = 0; s < n.length; s++) n.key.get(s) === "parentid" && e.add(n.id.get(s));
      }
      return ((this.sharedData.childBranchNodeIdsSnapshot = e), e);
    }
    writeField(e, t, r) {
      (this.validateWrite([e], t),
        this.diffs.push({ type: "writeField", id: e, key: t, value: r }));
    }
    writeNestedField(e, t, r) {
      (this.validateWrite(e, t),
        this.diffs.push({ type: "writeNestedField", path: e, key: t, value: r }));
    }
    validateWrite(e, t) {
      a(!(t in W), () => `Cannot write "${t}"`);
      let r = e[0];
      this.validateNodeEdit(r, () => `write "${e.join(".")}.${t}"`);
    }
    validateNodeEdit(e, t) {
      (a(e !== p, "Cannot edit branch data"),
        a(!this.store.table.branches.has(e), "Cannot edit branch data"));
      let r = this.visitedNodes.getCurrentNodeId();
      (a(r !== void 0, () => `Attempting to ${t()} with no iteration in progress`),
        a(e === r, () => `Attempting to ${t()} while visiting ${r}`));
    }
    assertIsNodeId(e) {
      a(
        _(this.store.getHierarchy(), e) === e,
        () =>
          `"${e}" is not a Node ID. For an override entry use the *OverrideField methods. Nested path writes are not supported.`
      );
    }
    addField(e, t, r) {
      (this.assertIsNodeId(e),
        this.store.hasOwnRow(e, "id") &&
          (a(!this.ownsField(e, t), () => `Node ${e} already has ${t}`), this.writeField(e, t, r)));
    }
    updateField(e, t, r) {
      (this.assertIsNodeId(e),
        this.ownsField(e, t) &&
          this.writeField(e, t, this.keepAtomicObjects(this.store.getCurrentValue(e, t), r)));
    }
    deleteField(e, t) {
      (this.assertIsNodeId(e), this.ownsField(e, t) && this.writeField(e, t, g));
    }
    renameField(e, t, r) {
      if ((this.assertIsNodeId(e), !!this.hasOwn(e, t))) {
        if ((a(!this.ownsField(e, r), () => `Node ${e} already has ${r}`), !c(this.store, e, t))) {
          this.store.base !== void 0 &&
            c(this.store.base, e, t) &&
            !this.store.hasOwnOverridingRow(e, r) &&
            this.writeField(e, r, g);
          return;
        }
        (this.writeField(e, t, g),
          this.writeField(
            e,
            r,
            this.keepAtomicObjects(this.store.getCurrentValue(e, t), this.store.getObjectKey(e, t))
          ));
      }
    }
    addOverrideField(e, t, r) {
      let n = y(e),
        s = n[n.length - 1],
        o = n.slice(0, -1).join(".");
      !this.store.hasOwnRow(o, s) ||
        !this.hasOverrideEntry(n) ||
        (a(!this.ownsField(e, t), () => `Override "${e}" already has ${t}`),
        this.writeNestedField(n, t, r));
    }
    updateOverrideField(e, t, r) {
      let n = y(e);
      !this.hasOverrideEntry(n) ||
        !this.ownsField(e, t) ||
        this.writeNestedField(n, t, this.keepAtomicObjects(this.store.getCurrentValue(e, t), r));
    }
    deleteOverrideField(e, t) {
      let r = y(e);
      !this.hasOverrideEntry(r) || !this.ownsField(e, t) || this.writeNestedField(r, t, g);
    }
    renameOverrideField(e, t, r) {
      let n = y(e);
      if (!(!this.hasOverrideEntry(n) || !this.hasOwn(e, t))) {
        if (
          (a(!this.ownsField(e, r), () => `Override "${e}" already has ${r}`), !c(this.store, e, t))
        ) {
          this.store.base !== void 0 &&
            c(this.store.base, e, t) &&
            !this.store.hasOwnOverridingRow(e, r) &&
            this.writeNestedField(n, r, g);
          return;
        }
        (this.writeNestedField(n, t, g),
          this.writeNestedField(
            n,
            r,
            this.keepAtomicObjects(this.store.getCurrentValue(e, t), this.store.getObjectKey(e, t))
          ));
      }
    }
    keepAtomicObjects(e, t) {
      if (t instanceof v) return t;
      if (w(t)) {
        if (x(e)) return new v(t);
        if (!k(e)) return t;
        let n = b(e),
          s;
        for (let [o, d] of Object.entries(t)) {
          let h = this.keepAtomicObjects(this.store.getCurrentValue(n, o), d);
          h !== d && ((s ??= { ...t }), (s[o] = h));
        }
        return s ?? t;
      }
      if (!Array.isArray(t)) return t;
      let r;
      for (let n = 0; n < t.length; n++) {
        let s = t[n],
          o = this.keepAtomicObjects(this.getCurrentArrayItem(e, s, n), s);
        o !== s && ((r ??= [...t]), (r[n] = o));
      }
      return r ?? t;
    }
    getCurrentArrayItem(e, t, r) {
      if (Array.isArray(e)) return e[r];
      if (!C(e) || !w(t)) return;
      let n = this.store.extractIdFromObject?.(t);
      if (n === void 0) {
        let s =
          typeof t.id == "string" ? t.id : typeof t.identifier == "string" ? t.identifier : void 0;
        if (s === void 0) return;
        n = `${b(e)}.${s}`;
      }
      return P(n);
    }
    ownsField(e, t) {
      return c(this.store, e, t) && this.hasOwn(e, t);
    }
    hasOverrideEntry(e) {
      for (let t = 1; t < e.length; t++)
        if (!c(this.store, e.slice(0, t).join("."), e[t])) return !1;
      return !0;
    }
    hasOwn(e, t) {
      return this.store.hasOwnOverridingRow(e, t) ? !0 : this.hasOwnNestedOverridingRow(e, t);
    }
    hasOwnNestedOverridingRow(e, t) {
      if (this.isMainBranch()) return !1;
      let r = F(e, t);
      if (r === void 0) return !1;
      let n = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(r);
      if (!n) return !1;
      let s = `${e}.${t}`,
        o = `${s}.`;
      for (let [d, h] of n.latestPropertyRowIndexByStoreId)
        if (!(d !== s && !d.startsWith(o))) {
          for (let N of h.keys()) if (this.store.hasOwnOverridingRow(d, N)) return !0;
        }
      return !1;
    }
    isMainBranch() {
      return this.getBranchId() === f;
    }
    getBranchId() {
      return this.store.branchId;
    }
    getDiffs() {
      return this.diffs;
    }
  };
function y(i) {
  let e = i.split(".replicaInfo.overrides.");
  a(
    e.length === 2,
    () => `Expected: "{replicaId}.replicaInfo.overrides.{originalId}", got: "${i}"`
  );
  let [t, r] = e;
  return (
    a(t && t.length > 0, () => `Invalid replicaId: "${t}"`),
    a(r && r.length > 0, () => `Invalid originalId: "${r}"`),
    [t, "replicaInfo", "overrides", r]
  );
}
var O = class i {
  constructor(e, t, r = [], n = !1) {
    this.store = e;
    this.visitedNodes = t;
    this.filters = r;
    this.owned = n;
  }
  store;
  visitedNodes;
  filters;
  owned;
  getOne(e) {
    if (
      !(!this.store.getHierarchy().inTree(e) || !this.store.isMaterializableNode(e)) &&
      !(
        this.owned &&
        this.store.branchId !== f &&
        !this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e)
      ) &&
      this.matchesFilters(e, this.filters)
    )
      return j(this.store, e);
  }
  getRoot() {
    let e = this.store.getRoot(),
      t = e === void 0 ? void 0 : this.getOne(e);
    return (a(t !== void 0, "Tree has no available root node"), t);
  }
  visit(e, t) {
    let r = this.getOne(e);
    if (r) {
      this.visitedNodes.enter(e);
      try {
        t(r);
      } finally {
        this.visitedNodes.exit(e);
      }
    }
  }
  where(e, t) {
    let r = [...this.filters, { key: e, value: t }];
    return new i(this.store, this.visitedNodes, r, this.owned);
  }
  own() {
    return new i(this.store, this.visitedNodes, this.filters, !0);
  }
  *[Symbol.iterator]() {
    let e = this.filters.find((r) => r.key === "__class"),
      t = this.filters.filter((r) => r !== e);
    for (let r of this.getNodeIds(e))
      if (this.store.isMaterializableNode(r) && this.matchesFilters(r, t)) {
        this.visitedNodes.enter(r);
        try {
          yield j(this.store, r);
        } finally {
          this.visitedNodes.exit(r);
        }
      }
  }
  getNodeIds(e) {
    let t = e && Y(e);
    return this.owned && this.store.branchId !== f
      ? Q(this.store, t)
      : t
        ? J(this.store, t)
        : X(this.store);
  }
  matchesFilters(e, t) {
    for (let r of t) {
      let n = this.store.getObjectKey(e, r.key);
      if (r.key === "__class" && Array.isArray(r.value)) {
        if (!r.value.includes(n)) return !1;
      } else if (n !== r.value) return !1;
    }
    return !0;
  }
};
function Y(i) {
  return Array.isArray(i.value) ? i.value : typeof i.value == "string" ? [i.value] : [];
}
function* X(i) {
  let e = i.getRoot();
  if (e === void 0) return;
  let t = [e];
  for (; t.length > 0;) {
    let r = t.pop();
    if (r === void 0) continue;
    yield r;
    let n = i.getChildrenIds(r);
    for (let s = n.length - 1; s >= 0; --s) t.push(n[s]);
  }
}
function* J(i, e) {
  let t = i.getIndex(E);
  for (let r of e) yield* t.iterateByClass(r);
}
function* Q(i, e) {
  let t = i.getHierarchy();
  for (let r of i.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites())
    t.inTree(r) && ((e && !e.includes(i.getObjectKey(r, "__class"))) || (yield r));
}
function Z(i) {
  return i !== I && !(i in W);
}
function V(i) {
  return i !== I;
}
function c(i, e, t) {
  let r = i.getCurrentRawValueOrDoesNotExist(e, t);
  return r !== K && r !== g && r !== A;
}
var ee = "replicaInfo.overrides";
function te(i, e) {
  return {
    id: e,
    get(t) {
      return i.getObjectKey(e, t);
    },
    *keys() {
      for (let t of i.getObjectKeys(e, V)) c(i, e, t) && (yield t);
    },
  };
}
function j(i, e) {
  return {
    id: e,
    get __class() {
      return i.getObjectKey(e, "__class");
    },
    get(t) {
      return i.getObjectKey(e, t);
    },
    *overrides() {
      let t = `${e}.${ee}`;
      for (let r of i.getObjectKeys(t, V)) c(i, t, r) && (yield te(i, `${t}.${r}`));
    },
    *keys() {
      for (let t of i.getObjectKeys(e, Z)) c(i, e, t) && (yield t);
    },
    get childrenIds() {
      return i.getChildrenIds(e);
    },
    get parentId() {
      let t = i.getParentId(e);
      return t === g ? void 0 : t;
    },
  };
}
function Me(i, e, t = {}) {
  let r = re(i),
    n = {},
    s = t.idGenerator ?? new u(),
    o = H(i, e, r, n, s),
    d = n.updatedNodeIds,
    h = new Map();
  (d?.size && U(i, r, n, d, h), L(i, r, o, d, h));
}
function re(i) {
  let e = B(i),
    t = new Set(),
    r = [f];
  for (; r.length > 0;) {
    let o = r.pop();
    if (!(o === void 0 || t.has(o))) {
      t.add(o);
      for (let d of e.get(o) ?? []) r.push(d);
    }
  }
  let s = [...e.values()].flat().filter((o) => !t.has(o));
  if (s.length > 0) throw new Error(`Branches have missing bases: ${s.join(", ")}`);
  return e;
}
function H(i, e, t, r, n, s = new Map()) {
  s.set(i.branchId, T(i, e, r, n));
  let o = t.get(i.branchId);
  if (o)
    for (let d of o) {
      let h = i.branch(d);
      (H(h, e, t, r, n, s), i.branches.pop());
    }
  return s;
}
function U(i, e, t, r, n) {
  let s = t.addedNodeParentIds,
    o = t.parentIdWritesByBranchId;
  for (let [d, h] of r) {
    if (i.getLatest(d) !== void 0) {
      let l = i.collectNodeObjectIds(d);
      a(l.size === 1 && l.has(d), () => `Node ${d} has nested objects and cannot be renamed`);
    }
    let N = i.getHierarchy().getParentRowIdx(h) !== void 0;
    if (N) {
      let l = n.get(i.branchId);
      (l === void 0 && ((l = new Set()), n.set(i.branchId, l)), l.add(h));
    }
    i.assertCanUpdateNodeId(d, h, N);
    let G = [...(s?.values() ?? [])].includes(d),
      q = [...(o?.values() ?? [])].some((l) => [...l.values()].includes(d));
    if (
      (a(
        !G && !q,
        () =>
          `Node ${d} has children added or moved by this migration; only a leaf node without nested objects or arrays can have its id updated`
      ),
      i.getHierarchy().inTree(d))
    ) {
      let l = i.getChildrenIds(d).filter((z) => i.isMaterializableNode(z));
      a(
        l.length === 0,
        () =>
          `Node ${d} has children on branch ${i.branchId}; only a leaf node without nested objects or arrays can have its id updated`
      );
    }
  }
  for (let d of e.get(i.branchId) ?? []) {
    let h = i.branch(d);
    (U(h, e, t, r, n), i.branches.pop());
  }
}
function L(i, e, t, r, n) {
  let s = t.get(i.branchId) ?? [];
  i.preservingInheritedValues(() => {
    i.batch(() => {
      for (let d of s)
        switch (d.type) {
          case "addNode":
            i.insertNode({ ...d.node }, d.parentId, d.position);
            break;
          case "moveNode":
            i.moveNode(d.id, d.parentId, d.position);
            break;
          case "removeNode":
            i.removeNode(d.id);
            break;
          case "inheritNode":
            i.inheritNode(d.id);
            break;
          case "writeField":
            i.updateNode(d.id, { [d.key]: d.value });
            break;
          case "writeNestedField":
            i.updateNestedObject(d.path, { [d.key]: d.value });
            break;
          default:
            D(d, "Invalid diff type");
        }
      for (let [d, h] of r ?? []) i.updateNodeId(d, h, n.get(i.branchId)?.has(h) ?? !1);
    });
  });
  let o = e.get(i.branchId);
  if (o)
    for (let d of o) {
      let h = i.branch(d);
      (L(h, e, t, r, n), i.branches.pop());
    }
}
export { Me as a };
//# sourceMappingURL=chunk-ARULWTMR.mjs.map
