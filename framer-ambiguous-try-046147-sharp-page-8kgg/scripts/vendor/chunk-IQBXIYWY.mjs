import { a as u } from "chunk-HR7IR2NY.mjs";
import { p as l, u as c } from "chunk-K4MAAOA5.mjs";
import { c as i } from "chunk-4JY5UMT2.mjs";
function O(e, n, t) {
  if (n) return "Viewing now";
  if (e.lastOpenedAt) {
    let r = t?.shortDate ? u : l,
      [s, ...o] = r(c(e.lastOpenedAt), { addSuffix: !0 });
    return [s?.toLocaleUpperCase() ?? "", ...o].join("");
  }
  return "Never viewed";
}
function g(e) {
  switch (e) {
    case "on":
      return "off";
    case "off":
      return "on";
    default:
      i(e);
  }
}
function R(e) {
  return {
    design: e.canDesign === "on",
    content: e.canEditContent === "on",
    publish: e.canPublish === "on",
  };
}
function f(e) {
  return Object.values(e).every((n) => n === "off");
}
function m(e) {
  return e.canDesign === "off" && e.canEditContent === "on" && e.canPublish === "off";
}
function P(e) {
  return e === "owner" || e === "collaborator" || e === "contentCollaborator";
}
function y(e, n) {
  return e === "owner" ? !0 : P(e) && (n == null || !f(n));
}
var p = ["canDesign", "canEditContent", "canPublish"],
  x = { canDesign: "on", canEditContent: "on", canPublish: "on" },
  w = { canDesign: "off", canEditContent: "on", canPublish: "off" },
  h = { canDesign: "off", canEditContent: "off", canPublish: "off" };
function E(e) {
  let n = e.some((s) => s.scope === "all"),
    t = (...s) => e.some((o) => s.includes(o.scope)),
    r = (s) => (s ? "on" : "off");
  return {
    canDesign: r(n || t("page", "assets", "analytics")),
    canEditContent: r(n || t("cms", "locale")),
    canPublish: r(n || t("publish")),
  };
}
function v(e) {
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
function D(e, n) {
  if (n === "owner") return "Owner";
  if (n === "viewer") return "View only";
  let r = Object.entries(e ?? {})
    .filter(([o, a]) => a === "on")
    .map(([o, a]) => o);
  if (r.length === 0) return "View only";
  if (p.every((o) => r.includes(o))) return "Full access";
  if (r.length === 1) {
    let o = r[0];
    if (o === "canEditContent" && n === "contentCollaborator") return "Content editor";
    if (o) return C(o).label;
  }
  return r.map((o) => C(o).label).join(", ");
}
function A(e) {
  return f(e) ? "viewer" : m(e) ? "contentCollaborator" : "collaborator";
}
function G(e, n) {
  let t = A(e);
  return t === "contentCollaborator" && !n ? "collaborator" : t;
}
export {
  O as a,
  g as b,
  R as c,
  f as d,
  m as e,
  P as f,
  y as g,
  p as h,
  x as i,
  w as j,
  h as k,
  E as l,
  v as m,
  C as n,
  D as o,
  A as p,
  G as q,
};
//# sourceMappingURL=chunk-IQBXIYWY.mjs.map
