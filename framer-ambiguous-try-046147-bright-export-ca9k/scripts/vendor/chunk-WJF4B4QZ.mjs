import { o as c, p as u, u as f } from "chunk-K4MAAOA5.mjs";
import { b as l, c as i } from "chunk-4JY5UMT2.mjs";
var m = {
    lessThanXSeconds: "{{count}}s",
    xSeconds: "{{count}}s",
    halfAMinute: "30s",
    lessThanXMinutes: "{{count}}m",
    xMinutes: "{{count}}m",
    aboutXHours: "{{count}}h",
    xHours: "{{count}}h",
    xDays: "{{count}}d",
    aboutXWeeks: "{{count}}w",
    xWeeks: "{{count}}w",
    aboutXMonths: "{{count}}mo",
    xMonths: "{{count}}mo",
    aboutXYears: "{{count}}y",
    xYears: "{{count}}y",
    overXYears: "{{count}}y",
    almostXYears: "{{count}}y",
  },
  d = (e) => e in m,
  P = (e) =>
    e === "lessThanXSeconds" || e === "xSeconds" || e === "halfAMinute" || e === "lessThanXMinutes";
function b(e) {
  return (n, r, o) => {
    if (((o = o || {}), l(d(n), "Token should have correct value"), e && P(n))) return "Just now";
    let s = m[n].replace("{{count}}", String(r));
    return o.addSuffix ? (o.comparison && o.comparison > 0 ? "in " + s : s + " ago") : s;
  };
}
function C(e, n, r = Date.now()) {
  return ((n = n || {}), c(e, r, { ...n, locale: { ...n.locale, formatDistance: b(n.justNow) } }));
}
function v(e, n, r) {
  if (n) return "Viewing now";
  if (e.lastOpenedAt) {
    let o = r?.shortDate ? C : u,
      [s, ...t] = o(f(e.lastOpenedAt), { addSuffix: !0 });
    return [s?.toLocaleUpperCase() ?? "", ...t].join("");
  }
  return "Never viewed";
}
function E(e) {
  switch (e) {
    case "on":
      return "off";
    case "off":
      return "on";
    default:
      i(e);
  }
}
function A(e) {
  return Object.values(e).every((n) => n === "off");
}
function L(e) {
  return e.canDesign === "off" && e.canEditContent === "on" && e.canPublish === "off";
}
function S(e) {
  return e === "owner" || e === "collaborator" || e === "contentCollaborator";
}
var y = ["canDesign", "canEditContent", "canPublish"],
  G = { canDesign: "on", canEditContent: "on", canPublish: "on" },
  V = { canDesign: "off", canEditContent: "on", canPublish: "off" },
  T = { canDesign: "off", canEditContent: "off", canPublish: "off" };
function U(e) {
  let n = e.some((s) => s.scope === "all"),
    r = (...s) => e.some((t) => s.includes(t.scope)),
    o = (s) => (s ? "on" : "off");
  return {
    canDesign: o(n || r("page", "assets", "analytics")),
    canEditContent: o(n || r("cms", "locale")),
    canPublish: o(n || r("publish")),
  };
}
function X(e) {
  return e.length === 0
    ? "viewer"
    : e.every((n) => n.permission === "editContent")
      ? "contentCollaborator"
      : "collaborator";
}
function p(e) {
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
function j(e, n) {
  if (n === "owner") return "Owner";
  if (n === "viewer") return "View only";
  let o = Object.entries(e ?? {})
    .filter(([t, a]) => a === "on")
    .map(([t, a]) => t);
  if (o.length === 0) return "View only";
  if (y.every((t) => o.includes(t))) return "Full access";
  if (o.length === 1) {
    let t = o[0];
    if (t === "canEditContent" && n === "contentCollaborator") return "Content editor";
    if (t) return p(t).label;
  }
  return o.map((t) => p(t).label).join(", ");
}
function x(e) {
  return A(e) ? "viewer" : L(e) ? "contentCollaborator" : "collaborator";
}
function F(e, n) {
  let r = x(e);
  return r === "contentCollaborator" && !n ? "collaborator" : r;
}
export {
  C as a,
  v as b,
  E as c,
  A as d,
  L as e,
  S as f,
  y as g,
  G as h,
  V as i,
  T as j,
  U as k,
  X as l,
  p as m,
  j as n,
  x as o,
  F as p,
};
//# sourceMappingURL=chunk-WJF4B4QZ.mjs.map
