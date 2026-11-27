import { Ib as P, Jb as V, Kb as U, Nb as I, Ob as E, Pb as D } from "chunk-IYYSJTFJ.mjs";
import { Za as A, te as O } from "chunk-EOKX2JZH.mjs";
import { ag as R } from "chunk-PFOAQTXZ.mjs";
import { Af as L, Cj as F, nc as c, qb as p, rb as m } from "chunk-EWG6V33O.mjs";
import { c as b, d as T, f as g, h as k, i as H, o as l } from "chunk-GV47JEYI.mjs";
import { v as z } from "chunk-VFNFPNND.mjs";
import { a as W } from "chunk-3PRKS5EZ.mjs";
import { t as w } from "chunk-XWVB37KR.mjs";
import { g as B } from "chunk-JUEYLPZJ.mjs";
import { b as j } from "chunk-LDHZF6XE.mjs";
import { j as M } from "chunk-EAUMDN6M.mjs";
import { b as f, c as S } from "chunk-4JY5UMT2.mjs";
function le(e) {
  return typeof e.versionHostname == "string";
}
function ue(e) {
  return ["ssg-pipeline-failed", "ssg-user-code-failed"].includes(e);
}
function Y(e) {
  return (
    e.status === "ssg-ready-with-warnings" ||
    e.searchIndexStatus === "failed" ||
    !!(e.status === "ssg-ready" && e.messages?.length)
  );
}
function fe(e) {
  let t = Y(e);
  return { ...e, hasWarnings: t };
}
function N({ identifier: e, file: t, error: n, custom: i }) {
  let r = Z(t);
  return {
    depth: e.startsWith(".") ? 0 : 1,
    error: n,
    file: t,
    identifier: e,
    name: r,
    packageIdentifier: "<unknown>",
    properties: {},
    type: "component",
    update: 0,
    ...i,
  };
}
function Z(e) {
  return e.startsWith("./") ? e.slice(2) : e;
}
var _ = M("componentloader");
function q(e) {
  return B(
    F({
      type: e.type,
      name: e.name,
      title: "title" in e ? e.title : void 0,
      annotations: e.annotations,
      properties: e.properties,
      ...(I(e) ? { outputs: e.outputs } : void 0),
    })
  );
}
var K = class {
  environment = "editor";
  activeBundleHash = void 0;
  modulesRevision = -1;
  entities = new Map();
  definitionHashes = new Map();
  readTrackers = new Set();
  constructor(t) {
    t &&
      ((this.entities = new Map(t.entities)),
      (this.definitionHashes = new Map(t.definitionHashes)),
      (this.activeBundleHash = t.activeBundleHash),
      (this.modulesRevision = t.modulesRevision));
  }
  localPackageIdentifier() {
    return "|local|";
  }
  getAllEntities() {
    return this.entities.values();
  }
  *getAllLocalModules() {
    for (let t of this.entities.values()) t.packageIdentifier === "|local|" && (yield t);
  }
  setModuleRevision(t, n) {
    ((this.activeBundleHash = `${t}_${n}`), (this.modulesRevision = t));
  }
  updateEntity(t, n) {
    (_.trace("updateEntity:", t, n),
      f(n.properties, () => `Entities must have properties: ${JSON.stringify(n)}`),
      this.entities.set(t, n),
      this.definitionHashes.set(t, q(n)));
  }
  deleteEntity(t) {
    (_.trace("deleteEntity:", t), this.entities.delete(t), this.definitionHashes.delete(t));
  }
  componentForIdentifier(t) {
    for (let n of this.readTrackers) n.add(t);
    return this.entities.get(t) ?? null;
  }
  getDefinitionHash(t) {
    return this.definitionHashes.get(t) ?? 0;
  }
  trackEntityReads(t, n) {
    this.readTrackers.add(t);
    try {
      return n();
    } finally {
      this.readTrackers.delete(t);
    }
  }
  reactComponentForIdentifier(t) {
    let n = this.componentForIdentifier(t);
    return !n || !V(n) ? null : n;
  }
  shaderForIdentifier(t) {
    let n = this.componentForIdentifier(t);
    return !n || !P(n) ? null : n;
  }
  getPropertyControlsForIdentifier(t) {
    return this.componentForIdentifier(t)?.properties ?? null;
  }
  hookForIdentifier(t) {
    let n = this.componentForIdentifier(t);
    return I(n) ? n : null;
  }
  actionForIdentifier(t) {
    let n = this.componentForIdentifier(t);
    return !n || !U(n) ? null : n;
  }
  dataForIdentifier(t) {
    if (!t) return null;
    let n = this.componentForIdentifier(t);
    return !n || !E(n) ? null : n;
  }
  getData() {
    let t = [];
    for (let n of this.entities.values()) E(n) && t.push(n);
    return t;
  }
  errorForIdentifier(t) {
    let n = this.entities.get(t);
    if (n) return D(n) ? n : null;
    let i = l(t);
    if (!i)
      return N({ identifier: t, file: t, error: "Components that are not modules do not exist." });
    let r = b(i),
      o = i.value === r,
      s = this.entities.get(r);
    if (D(s)) return s;
    if (g(i) || o) {
      let d = "Component does not exist.";
      return (
        g(i) && i.type === "codeFile" && (d = "Component file does not exist."),
        N({ identifier: t, file: i.value, error: d })
      );
    }
    return null;
  }
  testing = {
    setEntity: (t) => {
      let n = { properties: {}, ...t };
      (this.entities.set(n.identifier, n),
        this.definitionHashes.set(n.identifier, q(n)),
        (this.activeBundleHash = Math.random().toString(36).substring(2)));
    },
    clearEntities: () => {
      (this.entities.clear(), this.definitionHashes.clear(), (this.activeBundleHash = void 0));
    },
  };
};
function Ce(e) {
  return new URL(`/multiplayer${e}`, j().api).href;
}
function Me(e) {
  try {
    return new URL(e).pathname.startsWith("/multiplayer");
  } catch {
    return !1;
  }
}
async function ke(e, t, n) {
  let i = t && t !== W ? { branchId: t } : void 0;
  return z.get(`/web/v1/sites/hostnames/${e}`, i, n);
}
var G = class {
  constructor(t) {
    this.scheduler = t;
  }
  scheduler;
};
function ee(e) {
  return p(e) || m(e);
}
function v(e) {
  if (p(e)) return e.codeComponentIdentifier;
  if (m(e)) return e.shaderModuleIdentifier;
}
function te(e, t) {
  (p(e) && e.set({ codeComponentIdentifier: t }), m(e) && e.set({ shaderModuleIdentifier: t }));
}
function ne(e, t) {
  return t.moduleId === e.moduleId && t.saveId !== e.saveId;
}
function J(e, t) {
  switch (t?.type) {
    case "canvasComponent":
    case "codeFile":
    case "shader": {
      if (e.saveId === t.updateSaveId) return !1;
      let n = l(t.codeComponentIdentifier);
      return ne(e, n);
    }
    default:
      return !1;
  }
}
function re(e, t) {
  let n = l(e),
    i = l(t);
  return (
    f(n.moduleId === i.moduleId, "Module id should be the same"),
    f(n.saveId !== i.saveId, "Module identifier should have a different save id than the instance"),
    H(n.moduleId, i.saveId, n.file, n.exportSpecifier).value
  );
}
function we(e, t) {
  let n = e.tree.getNodeWithTrait(t, ee);
  if (!n) return;
  f(!L(n), "Module instance node should not be a replica or replica child");
  let i = v(n),
    r = l(i);
  f(r?.kind === "externalModuleExport", "Module identifier should be external");
  let o = e.tree.getNodeWithTrait(r.moduleId, c);
  f(o, "Module node should exist");
  let s = re(r.value, o.codeComponentIdentifier);
  te(n, s);
}
function X(e, t, n, i, r) {
  let o = l(e);
  if (!k(o)) return;
  let s = T(o);
  if (s && !o.moduleId) return;
  let d = s ? n.getNodeWithTrait(o.moduleId, c) : null,
    a = s ? (d?.type ?? "codeFile") : o.type,
    u = a === "shader" ? !!t.shaderForIdentifier(o.value) : !!t.componentForIdentifier(o.value);
  return s
    ? {
        type: a,
        hasDefinition: u,
        hasModuleEntry: i.hasModuleForIdentifier(o),
        isAwaitingEvaluation: !1,
        outdatedInstance: J(o, d),
      }
    : {
        type: a,
        hasDefinition: u,
        hasModuleEntry: !!r.getModuleEntryByLocalId(o.localId),
        isAwaitingEvaluation: r.isLocalModuleAwaitingEvaluation(o.localId),
        outdatedInstance: !1,
      };
}
function oe(e, t, n, i, r) {
  let o = v(e);
  if (!o) return;
  let s = X(o, t, n, i, r);
  if (!s) return;
  let {
    hasDefinition: d,
    hasModuleEntry: a,
    isAwaitingEvaluation: u,
    type: y,
    outdatedInstance: h,
  } = s;
  if (!d || !a)
    switch (y) {
      case "codeFile":
        if (a) {
          if (d) break;
          return { kind: "code", codeError: 2 };
        } else return { kind: "code", codeError: 5 };
      case "shader":
        if (a) {
          if (d) break;
          return { kind: "code", codeError: 4 };
        } else return { kind: "code", codeError: 6 };
      case "canvasComponent":
        return u ? void 0 : { kind: "code", codeError: 3 };
      default:
        return { kind: "code", codeError: 1 };
    }
  if (h) return { kind: "outdatedInstance", originalNodeId: e.getPrimaryId() };
}
function ie(e, t, n, i, r) {
  if (!R(e)) return;
  let o = X(e.codeOverrideIdentifier, t, n, i, r);
  if (!o) return;
  let { hasDefinition: s, hasModuleEntry: d } = o;
  if (!s) return d ? { kind: "code", codeError: 7 } : { kind: "code", codeError: 8 };
}
function se(e, t) {
  let n = t[e.id];
  if (n)
    switch (n.type) {
      case "Form":
        return { kind: "form", reason: n.reason };
      case "CodeGeneration":
        return n.reason === "FileTooLarge" ? { kind: "code", codeError: 0 } : void 0;
      default:
        S(n.type);
    }
}
function $e(e, t, n, i, r, o) {
  return oe(e, t, n, i, r) || ie(e, t, n, i, r) || (o && se(e, o));
}
function de(e) {
  switch (e.type) {
    case "Form":
      return !0;
    case "CodeGeneration":
      return e.reason === "FileTooLarge";
    default:
      return !1;
  }
}
var ae = Object.freeze({}),
  Q = new WeakMap();
function Ge(e) {
  let t = e.get(A);
  if (!t) return ae;
  let n = [];
  t.children?.forEach((o) => n.push(o));
  let i = Q.get(t);
  if (i && w(i.errorNodes, n)) return i.errorsByNodeId;
  let r = {};
  for (let o of n)
    o.nodeId &&
      (!o.type ||
        !de(o) ||
        !o.reason ||
        o.nodeId in r ||
        (r[o.nodeId] = { type: o.type, reason: o.reason }));
  return (Q.set(t, { errorNodes: n, errorsByNodeId: r }), r);
}
var x = Symbol("backingDataTree");
function Xe(e) {
  return e[x];
}
function Ye(e) {
  let t = O.createEmpty(),
    n = {
      [x]: e,
      isDataTree: () => !0,
      equals: (r) => {
        let o = r?.[x];
        return o ? e.equals(o) : !1;
      },
      getAccessor: (r) => e.getAccessor(r),
      get: (r) => e.get(r),
      getLoaded: (r) => e.get(r),
      getLinks: (r) => e.getLinks(r),
      getNode: (r) => e.getNode(r),
      getNodeAtStart: (r) => e.getCommittedNode(r),
      getNodeAsDraft: (r) => e.getNodeAsDraft(r),
      getCurrentOrDraft: (r) => e.getCommittedNode(r) ?? e.get(r),
      has: (r) => e.has(r),
      hasNodeAnywhere: (r) => e.hasNodeAnywhere(r),
      getSubtreeChecksum: (r) => e.getSubtreeChecksum(r),
      latestTree: () => e.latestTree(),
      get editClosed() {
        return e.editClosed;
      },
      get isViewOnly() {
        return e.isViewOnly;
      },
      get inEditor() {
        return e.inEditor;
      },
      insertNode: (r, o, s) => e.insertNode(r, o, s),
      unsafeInsertNode: (r, o) => e.insertReplicaChild(r, o),
      unsafeRemoveNode: (r) => e.removeReplicaChild(r),
      size: () => e.hierarchy.sizeWithoutReplicas(),
      sizeAtStart: () => e.hierarchy.sizeWithoutReplicas(),
      hasUncommittedChanges: () => e.hasUncommittedChanges(),
      unsafeGetDraftNodes: () => [],
      getNodesChangedByCommit: () => [],
      withPersistedCaches: (r) => e.withPersistedCaches(r),
      persistCaches: () => e.persistCaches(),
    },
    i = new Proxy(t, {
      get(r, o, s) {
        if (o === "isLoaded") return () => !0;
        if (o === "root" || o === "rootAtStart") return e.root;
        if (o === "commit") return () => s;
        if (o === "remove") return (a) => (e.remove(a), s);
        if (o === "move")
          return (a, u, y, h) => {
            let C = e.get(a);
            return (u || (u = e.root.id), C && e.move(C.id, u, y, h), s);
          };
        if (o in n) return n[o];
        let d = Reflect.get(r, o, s);
        return typeof d == "function" ? d.bind(s) : d;
      },
    });
  return ((t.lineage.latestTree = i), i);
}
export {
  q as a,
  K as b,
  le as c,
  ue as d,
  Y as e,
  fe as f,
  Xe as g,
  Ye as h,
  Ce as i,
  Me as j,
  ke as k,
  G as l,
  we as m,
  $e as n,
  Ge as o,
};
//# sourceMappingURL=chunk-2QQ4ZDXL.mjs.map
