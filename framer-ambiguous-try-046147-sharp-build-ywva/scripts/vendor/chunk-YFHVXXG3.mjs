import { Ab as I, Bb as g, Cb as p, vb as R, wb as W, xb as w } from "chunk-ZXBSSSS5.mjs";
import { Za as F } from "chunk-PVOZZZV4.mjs";
import { Lf as b } from "chunk-WXB3REPI.mjs";
import { Cf as H, pc as E, sb as c, tb as y, zk as B } from "chunk-PT3LJ7DW.mjs";
import { c as m, d as N, f as h, h as C, i as S, o as a } from "chunk-NV34DTUJ.mjs";
import { v as A } from "chunk-VYMQRK2U.mjs";
import { a as k } from "chunk-3FKOPCJP.mjs";
import { t as L } from "chunk-HC7MU4J2.mjs";
import { g as T } from "chunk-2GERVTUC.mjs";
import { b as O } from "chunk-GBWZWM2Q.mjs";
import { b as f, c as M } from "chunk-4JY5UMT2.mjs";
import { i as v } from "chunk-WBI6GGAG.mjs";
function de(r) {
  return typeof r.versionHostname == "string";
}
function ae(r) {
  return ["ssg-pipeline-failed", "ssg-user-code-failed"].includes(r);
}
function Q(r) {
  return (
    r.status === "ssg-ready-with-warnings" ||
    r.searchIndexStatus === "failed" ||
    !!(r.status === "ssg-ready" && r.messages?.length)
  );
}
function le(r) {
  let e = Q(r);
  return { ...r, hasWarnings: e };
}
function D({ identifier: r, file: e, error: t, custom: o }) {
  let i = X(e);
  return {
    depth: r.startsWith(".") ? 0 : 1,
    error: t,
    file: e,
    identifier: r,
    name: i,
    packageIdentifier: "<unknown>",
    properties: {},
    type: "component",
    update: 0,
    ...o,
  };
}
function X(r) {
  return r.startsWith("./") ? r.slice(2) : r;
}
var P = v("componentloader");
function V(r) {
  return T(
    B({
      type: r.type,
      name: r.name,
      title: "title" in r ? r.title : void 0,
      annotations: r.annotations,
      properties: r.properties,
      ...(I(r) ? { outputs: r.outputs } : void 0),
    })
  );
}
var U = class {
  environment = "editor";
  activeBundleHash = void 0;
  modulesRevision = -1;
  entities = new Map();
  definitionHashes = new Map();
  readTrackers = new Set();
  constructor(e) {
    e &&
      ((this.entities = new Map(e.entities)),
      (this.definitionHashes = new Map(e.definitionHashes)),
      (this.activeBundleHash = e.activeBundleHash),
      (this.modulesRevision = e.modulesRevision));
  }
  localPackageIdentifier() {
    return "|local|";
  }
  getAllEntities() {
    return this.entities.values();
  }
  *getAllLocalModules() {
    for (let e of this.entities.values()) e.packageIdentifier === "|local|" && (yield e);
  }
  setModuleRevision(e, t) {
    ((this.activeBundleHash = `${e}_${t}`), (this.modulesRevision = e));
  }
  updateEntity(e, t) {
    (P.trace("updateEntity:", e, t),
      f(t.properties, () => `Entities must have properties: ${JSON.stringify(t)}`),
      this.entities.set(e, t),
      this.definitionHashes.set(e, V(t)));
  }
  deleteEntity(e) {
    (P.trace("deleteEntity:", e), this.entities.delete(e), this.definitionHashes.delete(e));
  }
  componentForIdentifier(e) {
    for (let t of this.readTrackers) t.add(e);
    return this.entities.get(e) ?? null;
  }
  getDefinitionHash(e) {
    return this.definitionHashes.get(e) ?? 0;
  }
  trackEntityReads(e, t) {
    this.readTrackers.add(e);
    try {
      return t();
    } finally {
      this.readTrackers.delete(e);
    }
  }
  reactComponentForIdentifier(e) {
    let t = this.componentForIdentifier(e);
    return !t || !W(t) ? null : t;
  }
  shaderForIdentifier(e) {
    let t = this.componentForIdentifier(e);
    return !t || !R(t) ? null : t;
  }
  getPropertyControlsForIdentifier(e) {
    return this.componentForIdentifier(e)?.properties ?? null;
  }
  hookForIdentifier(e) {
    let t = this.componentForIdentifier(e);
    return I(t) ? t : null;
  }
  actionForIdentifier(e) {
    let t = this.componentForIdentifier(e);
    return !t || !w(t) ? null : t;
  }
  dataForIdentifier(e) {
    if (!e) return null;
    let t = this.componentForIdentifier(e);
    return !t || !g(t) ? null : t;
  }
  getData() {
    let e = [];
    for (let t of this.entities.values()) g(t) && e.push(t);
    return e;
  }
  errorForIdentifier(e) {
    let t = this.entities.get(e);
    if (t) return p(t) ? t : null;
    let o = a(e);
    if (!o)
      return D({ identifier: e, file: e, error: "Components that are not modules do not exist." });
    let i = m(o),
      n = o.value === i,
      s = this.entities.get(i);
    if (p(s)) return s;
    if (h(o) || n) {
      let d = "Component does not exist.";
      return (
        h(o) && o.type === "codeFile" && (d = "Component file does not exist."),
        D({ identifier: e, file: o.value, error: d })
      );
    }
    return null;
  }
  testing = {
    setEntity: (e) => {
      let t = { properties: {}, ...e };
      (this.entities.set(t.identifier, t),
        this.definitionHashes.set(t.identifier, V(t)),
        (this.activeBundleHash = Math.random().toString(36).substring(2)));
    },
    clearEntities: () => {
      (this.entities.clear(), this.definitionHashes.clear(), (this.activeBundleHash = void 0));
    },
  };
};
async function Me(r, e, t) {
  let o = e && e !== k ? { branchId: e } : void 0;
  return A.get(`/web/v1/sites/hostnames/${r}`, o, t);
}
var _ = class {
  constructor(e) {
    this.scheduler = e;
  }
  scheduler;
};
function Y(r) {
  return c(r) || y(r);
}
function x(r) {
  if (c(r)) return r.codeComponentIdentifier;
  if (y(r)) return r.shaderModuleIdentifier;
}
function Z(r, e) {
  (c(r) && r.set({ codeComponentIdentifier: e }), y(r) && r.set({ shaderModuleIdentifier: e }));
}
function ee(r, e) {
  return e.moduleId === r.moduleId && e.saveId !== r.saveId;
}
function K(r, e) {
  switch (e?.type) {
    case "canvasComponent":
    case "codeFile":
    case "shader": {
      if (r.saveId === e.updateSaveId) return !1;
      let t = a(e.codeComponentIdentifier);
      return ee(r, t);
    }
    default:
      return !1;
  }
}
function te(r, e) {
  let t = a(r),
    o = a(e);
  return (
    f(t.moduleId === o.moduleId, "Module id should be the same"),
    f(t.saveId !== o.saveId, "Module identifier should have a different save id than the instance"),
    S(t.moduleId, o.saveId, t.file, t.exportSpecifier).value
  );
}
function be(r, e) {
  let t = r.tree.getNodeWithTrait(e, Y);
  if (!t) return;
  f(!H(t), "Module instance node should not be a replica or replica child");
  let o = x(t),
    i = a(o);
  f(i?.kind === "externalModuleExport", "Module identifier should be external");
  let n = r.tree.getNodeWithTrait(i.moduleId, E);
  f(n, "Module node should exist");
  let s = te(i.value, n.codeComponentIdentifier);
  Z(t, s);
}
function z(r, e, t, o, i) {
  let n = a(r);
  if (!C(n)) return;
  let s = N(n);
  if (s && !n.moduleId) return;
  let d = s ? t.getNodeWithTrait(n.moduleId, E) : null,
    l = s ? (d?.type ?? "codeFile") : n.type,
    u = l === "shader" ? !!e.shaderForIdentifier(n.value) : !!e.componentForIdentifier(n.value);
  return s
    ? {
        type: l,
        hasDefinition: u,
        hasModuleEntry: o.hasModuleForIdentifier(n),
        hasLocalModuleError: !1,
        isModuleEvaluationPending: !1,
        outdatedInstance: K(n, d),
      }
    : {
        type: l,
        hasDefinition: u,
        hasModuleEntry: !!i.getModuleEntryByLocalId(n.localId),
        hasLocalModuleError: p(e.componentForIdentifier(m(n))),
        isModuleEvaluationPending: i.isLocalModuleEvaluationPending(n.localId),
        outdatedInstance: !1,
      };
}
function re(r, e, t, o, i) {
  let n = x(r);
  if (!n) return;
  let s = z(n, e, t, o, i);
  if (!s) return;
  let {
    hasDefinition: d,
    hasModuleEntry: l,
    hasLocalModuleError: u,
    isModuleEvaluationPending: q,
    type: G,
    outdatedInstance: J,
  } = s;
  if (!d || !l)
    switch (G) {
      case "codeFile":
        if (l) {
          if (d) break;
          return { kind: "code", codeError: 2 };
        } else return { kind: "code", codeError: 5 };
      case "shader":
        if (l) {
          if (d) break;
          return { kind: "code", codeError: 4 };
        } else return { kind: "code", codeError: 6 };
      case "canvasComponent":
        return l && q && !u ? void 0 : { kind: "code", codeError: 3 };
      default:
        return { kind: "code", codeError: 1 };
    }
  if (J) return { kind: "outdatedInstance", originalNodeId: r.getPrimaryId() };
}
function ne(r, e, t, o, i) {
  if (!b(r)) return;
  let n = z(r.codeOverrideIdentifier, e, t, o, i);
  if (!n) return;
  let { hasDefinition: s, hasModuleEntry: d } = n;
  if (!s) return d ? { kind: "code", codeError: 7 } : { kind: "code", codeError: 8 };
}
function oe(r, e) {
  let t = e[r.id];
  if (t)
    switch (t.type) {
      case "Form":
        return { kind: "form", reason: t.reason };
      case "CodeGeneration":
        return t.reason === "FileTooLarge" ? { kind: "code", codeError: 0 } : void 0;
      default:
        M(t.type);
    }
}
function je(r, e, t, o, i, n) {
  return re(r, e, t, o, i) || ne(r, e, t, o, i) || (n && oe(r, n));
}
function ie(r) {
  switch (r.type) {
    case "Form":
      return !0;
    case "CodeGeneration":
      return r.reason === "FileTooLarge";
    default:
      return !1;
  }
}
var se = Object.freeze({}),
  $ = new WeakMap();
function _e(r) {
  let e = r.get(F);
  if (!e) return se;
  let t = [];
  e.children?.forEach((n) => t.push(n));
  let o = $.get(e);
  if (o && L(o.errorNodes, t)) return o.errorsByNodeId;
  let i = {};
  for (let n of t)
    n.nodeId &&
      (!n.type ||
        !ie(n) ||
        !n.reason ||
        n.nodeId in i ||
        (i[n.nodeId] = { type: n.type, reason: n.reason }));
  return ($.set(e, { errorNodes: t, errorsByNodeId: i }), i);
}
function ze(r) {
  return new URL(`/multiplayer${r}`, O().api).href;
}
function qe(r) {
  try {
    return new URL(r).pathname.startsWith("/multiplayer");
  } catch {
    return !1;
  }
}
export {
  V as a,
  U as b,
  de as c,
  ae as d,
  Q as e,
  le as f,
  Me as g,
  _ as h,
  be as i,
  je as j,
  _e as k,
  ze as l,
  qe as m,
};
//# sourceMappingURL=chunk-YFHVXXG3.mjs.map
