import { b as a, c as n } from "chunk-4JY5UMT2.mjs";
import { a as p } from "chunk-YRQ7G4QH.mjs";
var M = /^local-module:([a-zA-Z\d]+\/[^:]+)(?::(.+))?$/u,
  I = /^module:([a-zA-Z\d]{20})\/([a-zA-Z\d]{20})\/([^:]+)(?::(.+))?$/u;
function L(e) {
  return e === "codeFile" || e === "shader";
}
function m(e) {
  try {
    let t = e;
    switch (t) {
      case "canvasComponent":
      case "codeFile":
      case "collection":
      case "draftCollection":
      case "componentPresets":
      case "prototype":
      case "screen":
      case "css":
      case "webPageMetadata":
      case "siteMetadata":
      case "layoutTemplate":
      case "localization":
      case "vector":
      case "vectorSet":
      case "design":
      case "config":
      case "snippets":
      case "shader":
      case "sharedEnum":
        return !0;
      default:
        n(t);
    }
  } catch {
    return !1;
  }
}
function y(e) {
  return e.kind === "externalModuleExport"
    ? `module:${e.moduleId}/${e.saveId}/${e.file}`
    : e.kind === "localModuleExport"
      ? `local-module:${e.localId}`
      : e.value;
}
function s(e) {
  return (
    typeof e == "string" && (e = f(e)),
    e?.kind === "externalModule" || e?.kind === "externalModuleExport"
  );
}
function h(e, t) {
  let r = f(e);
  return s(r) && r.moduleId === t;
}
function B(e) {
  return (
    typeof e == "string" && (e = f(e)),
    e?.kind === "localModule" || e?.kind === "localModuleExport"
  );
}
function $(e) {
  return (
    typeof e == "string" && (e = f(e)),
    e?.kind === "externalModuleExport" || e?.kind === "localModuleExport"
  );
}
function b(e) {
  return (
    typeof e == "string" && (e = f(e)),
    e
      ? e.kind === "externalModule" ||
        e.kind === "externalModuleExport" ||
        e.kind === "localModule" ||
        e.kind === "localModuleExport"
      : !1
  );
}
function u(e, t, r, o) {
  let i = `${e}/${t}/${r}`,
    d = `${p().modulesCDN}/${i}`;
  return o
    ? {
        kind: "externalModuleExport",
        value: `module:${i}:${o}`,
        bareValue: `module:${i}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: d,
        exportSpecifier: o,
      }
    : {
        kind: "externalModule",
        value: `module:${i}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: d,
      };
}
function l(e, t) {
  let { type: r, name: o } = g(e);
  return t
    ? {
        kind: "localModuleExport",
        value: `local-module:${e}:${t}`,
        bareValue: `local-module:${e}`,
        localId: e,
        type: r,
        localIdName: o,
        exportSpecifier: t,
      }
    : { kind: "localModule", value: `local-module:${e}`, localId: e, type: r, localIdName: o };
}
function k(e) {
  let t = e.indexOf("/");
  return [e.substring(0, t), e.substring(t + 1)];
}
function x(e, t) {
  return `${e}/${t}`;
}
function g(e) {
  let [t, r] = e.split("/", 2);
  if (!t || !r) throw Error(`Invalid local id: ${e}`);
  return { type: t, name: r };
}
function T(e, t, r) {
  let o = x(e, t);
  return l(o, r);
}
function f(e) {
  if (!e) return;
  let t = e.match(M);
  if (t) {
    a(t[1], "The localId match from the module identifier should be defined.");
    let o = t[1],
      i = t[2];
    return l(o, i);
  }
  let r = e.match(I);
  if (r) {
    let [, o, i, d, c] = r;
    return (
      a(o, "The moduleId match from the module identifier should be defined."),
      a(i, "The saveId match from the module identifier should be defined."),
      a(d, "The path match from the module identifier should be defined."),
      u(o, i, d, c)
    );
  }
}
function v(e, t, r, o) {
  if (e.kind === "localModule") return u(t, r, o);
  if (e.kind === "localModuleExport") return u(t, r, o, e.exportSpecifier);
  n(e);
}
function C(e, t) {
  if (e.kind === "externalModule") return l(t);
  if (e.kind === "externalModuleExport") return l(t, e.exportSpecifier);
  n(e);
}
function G(e, t) {
  if (e.kind === "externalModule" || e.kind === "externalModuleExport")
    return u(e.moduleId, e.saveId, e.file, t);
  if (e.kind === "localModule" || e.kind === "localModuleExport") return l(e.localId, t);
  n(e);
}
function N(e) {
  if (e.kind === "externalModule" || e.kind === "localModule") return e;
  if (e.kind === "externalModuleExport") return u(e.moduleId, e.saveId, e.file);
  if (e.kind === "localModuleExport") return l(e.localId);
  n(e);
}
function O(e) {
  return e;
}
function w(e) {
  let t = e.indexOf(":");
  return t === -1
    ? { localId: e, exportSpecifier: void 0 }
    : { localId: e.slice(0, t), exportSpecifier: e.slice(t + 1) };
}
function P(e, t) {
  return `#framer/local/${e}/${t}`;
}
function D(e) {
  return e.startsWith("#framer/local/");
}
function V(e) {
  return e.startsWith("!missing/");
}
export {
  L as a,
  m as b,
  y as c,
  s as d,
  h as e,
  B as f,
  $ as g,
  b as h,
  u as i,
  l as j,
  k,
  x as l,
  g as m,
  T as n,
  f as o,
  v as p,
  C as q,
  G as r,
  N as s,
  O as t,
  w as u,
  P as v,
  D as w,
  V as x,
};
//# sourceMappingURL=chunk-DBPGLK23.mjs.map
