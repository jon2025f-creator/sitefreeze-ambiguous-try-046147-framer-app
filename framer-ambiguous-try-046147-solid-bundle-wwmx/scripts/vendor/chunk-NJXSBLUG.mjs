import { e as u } from "chunk-3CKYEPG2.mjs";
import { p as s } from "chunk-ARJ7WQTJ.mjs";
function g(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function l(r) {
  return !r ||
    r.length === 0 ||
    (r.match(/^\d/u) && (r = "$" + r),
    (r = r.replace(/^[^A-Z_$]+/i, "_").replace(/[^\w$]+/g, "_")),
    r.length === 0)
    ? null
    : r;
}
function d(r) {
  return !r ||
    r.length === 0 ||
    ((r = u(r)),
    r.match(/^\d/u) && (r = "_" + r),
    (r = r
      .split(" ")
      .map((t) => n(t))
      .join("")
      .replace(/^[^A-Z_$]+/i, "_")
      .replace(/[^\w$]+/g, "_")),
    r.length === 0)
    ? null
    : f(r);
}
function x(r) {
  if (!r) return "UserComponent";
  let t = r
    .replace(/^[^a-z_]+|\W+/gi, " ")
    .split(" ")
    .map(n)
    .join("");
  return t.length === 0 ? "UserComponent" : n(t);
}
function h(r) {
  return n(l(r) || "Component");
}
function n(r) {
  return o(r, "upper");
}
function f(r) {
  return o(r, "lower");
}
function o(r, t) {
  let e = r[0];
  if (s(e)) return r;
  let i = t === "upper" ? e.toUpperCase() : e.toLowerCase();
  return e === i ? r : i + r.slice(1);
}
var c = "--";
function w(r) {
  if (r.startsWith(c)) return r;
  let t = "";
  for (let e of r)
    /[a-z]/i.test(e) && e.toUpperCase() === e ? (t += `-${e.toLowerCase()}`) : (t += e);
  return t;
}
function _(r) {
  let t = r.includes(":") ? r.indexOf(":") : r.indexOf("-");
  return t !== -1 ? r.slice(0, t) + (r[t + 1]?.toUpperCase() ?? "") + r.slice(t + 2) : r;
}
export { g as a, l as b, d as c, x as d, h as e, n as f, f as g, w as h, _ as i };
//# sourceMappingURL=chunk-NJXSBLUG.mjs.map
