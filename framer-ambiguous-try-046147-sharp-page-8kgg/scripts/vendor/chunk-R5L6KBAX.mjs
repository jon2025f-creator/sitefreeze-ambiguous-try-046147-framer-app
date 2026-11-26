import { g as c } from "chunk-GV47JEYI.mjs";
import { a, b as t, f, g as o, i as u, n as C } from "chunk-ARJ7WQTJ.mjs";
import { b as m } from "chunk-4JY5UMT2.mjs";
function L(e) {
  return o(e) && o(e.collectionByLocaleId) && typeof e.includeDrafts == "boolean";
}
function r(e) {
  return e === void 0 || t(e);
}
function l(e) {
  return e == null ||
    t(e) ||
    f(e) ||
    a(e) ||
    e instanceof Date ||
    e instanceof RegExp ||
    e instanceof Uint8Array
    ? !0
    : e instanceof Map
      ? [...e].every(([n, d]) => l(n) && l(d))
      : C(e) || Array.isArray(e)
        ? [...e].every(l)
        : u(e) && Object.values(e).every(l);
}
function p(e) {
  return o(e) && t(e.dataIdentifier) && c(e.dataIdentifier) && r(e.selectedItemId) && r(e.localeId);
}
function R(e) {
  return (
    o(e) &&
    t(e.dataIdentifier) &&
    c(e.dataIdentifier) &&
    r(e.localeId) &&
    (e.visibility === "public-only" || e.visibility === "public-and-private") &&
    (e.includeDrafts === void 0 || a(e.includeDrafts))
  );
}
function q(e) {
  if (!o(e)) return !1;
  if (e.type === "query")
    return (
      o(e.query) &&
      l(e.query) &&
      Array.isArray(e.collections) &&
      e.collections.every(R) &&
      r(e.localeId) &&
      (e.selectedItem === void 0 || p(e.selectedItem))
    );
  if (!t(e.dataIdentifier) || !c(e.dataIdentifier)) return !1;
  switch (e.type) {
    case "selectedCollectionItem":
      return p(e);
    case "renderLocaleIdForCollectionItem":
      return r(e.activeLocaleId) && r(e.selectedItemId);
    case "collectionHasItems":
      return r(e.localeId);
    case "collectionItemSlug":
      return t(e.itemId) && t(e.localeId);
    case "collectionItemLabel":
      return t(e.itemId);
    case "collectionItemIdBySlug":
      return t(e.slug) && r(e.localeId);
    case "contentLocaleIdByRecordId":
      return !0;
    default:
      return !1;
  }
}
function k(e) {
  return JSON.stringify(e);
}
function w(e) {
  return (e.type === "query" ? e.collections : [e]).map((n) => n.dataIdentifier);
}
var D = Object.freeze({ selectedItem: !0 }),
  S = "collectionIndex",
  M = "collectionIndex:";
function y(e, n, d) {
  if (Array.isArray(e)) return e.map((i) => y(i, n, d));
  if (!o(e) || e instanceof Date || e.type === "LiteralValue") return e;
  if (e.type === "Collection" && "data" in e) {
    let i = e.data;
    m(d(i), "Queries can't combine collections of this project with collections of modules");
    let s = n.indexOf(i);
    return (s === -1 && (s = n.push(i) - 1), { ...e, data: { [S]: s } });
  }
  let I = {};
  for (let i in e) I[i] = y(e[i], n, d);
  return I;
}
export { L as a, q as b, k as c, w as d, D as e, S as f, M as g, y as h };
//# sourceMappingURL=chunk-R5L6KBAX.mjs.map
