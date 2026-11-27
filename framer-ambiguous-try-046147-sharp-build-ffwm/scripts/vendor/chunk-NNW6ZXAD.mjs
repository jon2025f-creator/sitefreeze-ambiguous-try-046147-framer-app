import { a as u } from "chunk-HR7IR2NY.mjs";
import { p as l, u as c } from "chunk-K4MAAOA5.mjs";
import { c as i } from "chunk-4JY5UMT2.mjs";
function O(e, n, r) {
  if (n) return "Viewing now";
  if (e.lastOpenedAt) {
    let s = r?.shortDate ? u : l,
      [t, ...o] = s(c(e.lastOpenedAt), { addSuffix: !0 });
    return [t?.toLocaleUpperCase() ?? "", ...o].join("");
  }
  return "Never viewed";
}
function R(e) {
  switch (e) {
    case "on":
      return "off";
    case "off":
      return "on";
    default:
      i(e);
  }
}
function x(e) {
  return {
    design: e.canDesign === "on",
    content: e.canEditContent === "on",
    publish: e.canPublish === "on",
  };
}
var f = { design: "canDesign", content: "canEditContent", publish: "canPublish" },
  w = ["design", "content", "publish"];
function h(e) {
  let n = { ...d };
  for (let r of e) n[f[r]] = "on";
  return n;
}
function m(e) {
  return Object.values(e).every((n) => n === "off");
}
function p(e) {
  return e.canDesign === "off" && e.canEditContent === "on" && e.canPublish === "off";
}
function P(e) {
  return e === "owner" || e === "collaborator" || e === "contentCollaborator";
}
function E(e, n) {
  return e === "owner" ? !0 : P(e) && (n == null || !m(n));
}
var A = ["canDesign", "canEditContent", "canPublish"],
  v = { canDesign: "on", canEditContent: "on", canPublish: "on" },
  F = { canDesign: "off", canEditContent: "on", canPublish: "off" },
  d = { canDesign: "off", canEditContent: "off", canPublish: "off" };
function D(e) {
  let n = e.some((t) => t.scope === "all"),
    r = (...t) => e.some((o) => t.includes(o.scope)),
    s = (t) => (t ? "on" : "off");
  return {
    canDesign: s(n || r("page", "assets", "analytics")),
    canEditContent: s(n || r("cms", "locale")),
    canPublish: s(n || r("publish")),
  };
}
function G(e) {
  return e.length === 0
    ? "viewer"
    : e.every((n) => n.permission === "editContent")
      ? "contentCollaborator"
      : "collaborator";
}
function C(e) {
  switch (e) {
    case "canDesign":
      return { label: "Design", description: "Canvas" };
    case "canEditContent":
      return { label: "Content", description: "CMS, On-Page" };
    case "canPublish":
      return { label: "Deploy", description: "Publish" };
    default:
      i(e);
  }
}
function V(e, n) {
  if (n === "owner") return "Owner";
  if (n === "viewer") return "View only";
  let s = Object.entries(e ?? {})
    .filter(([o, a]) => a === "on")
    .map(([o, a]) => o);
  if (s.length === 0) return "View only";
  if (A.every((o) => s.includes(o))) return "Full access";
  if (s.length === 1) {
    let o = s[0];
    if (o === "canEditContent" && n === "contentCollaborator") return "Content editor";
    if (o) return C(o).label;
  }
  return s.map((o) => C(o).label).join(", ");
}
function b(e) {
  return m(e) ? "viewer" : p(e) ? "contentCollaborator" : "collaborator";
}
function I(e, n) {
  let r = b(e);
  return r === "contentCollaborator" && !n ? "collaborator" : r;
}
export {
  O as a,
  R as b,
  x as c,
  f as d,
  w as e,
  h as f,
  m as g,
  p as h,
  P as i,
  E as j,
  A as k,
  v as l,
  F as m,
  d as n,
  D as o,
  G as p,
  C as q,
  V as r,
  b as s,
  I as t,
};
//# sourceMappingURL=chunk-NNW6ZXAD.mjs.map
