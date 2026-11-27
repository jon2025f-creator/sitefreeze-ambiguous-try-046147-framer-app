import { a as N } from "chunk-GHIRY7TJ.mjs";
import { f as x, g as P } from "chunk-2AOQBIUG.mjs";
import { Vd as T, Wd as V, Xd as R } from "chunk-QXUDYZJG.mjs";
import { Od as S } from "chunk-BP2ZYPEN.mjs";
import { Kj as v, Lj as I, No as C, Rk as p, Vk as g, Wo as h } from "chunk-3GNDJY2L.mjs";
import { b } from "chunk-4JY5UMT2.mjs";
var D = new WeakMap();
function E(e, t) {
  let o = D.get(t);
  if (o) return o;
  let r = new Set();
  r.add("id");
  let n = N(e, t),
    a = t.getPrimaryId();
  for (let l of n) l.providerId === a && r.add(l.id);
  return (D.set(t, r), r);
}
function oe(e, t) {
  let o = S(t);
  (e.limit?.type === "LiteralValue" &&
    typeof e.limit.value == "number" &&
    (o = Math.min(o, e.limit.value)),
    (e.limit = { type: "LiteralValue", value: o }));
}
function M(e, t, o, r, n, a = "public-only") {
  let l = p(e, r);
  if (l) {
    l.linkTo(o.id);
    let i = e.getService("cms");
    if (i) return i.getCollection(r, n, a);
    for (let s of l.variables) v(s) && I(e, s.moduleIdentifier)?.linkTo(o.id);
    return P(e, t, l, n, a);
  }
  let d = t.dataForIdentifier(r);
  return (b(d, "Data definition not found"), d.class);
}
function W(e, t) {
  let o = e.getService("cms");
  if (o && p(e, t)) return o;
}
function re(e, t, o, r, n, a, l) {
  let d = W(e, r);
  if (!d) return t.queryCollection(o, n, a);
  let i = d.readQuery(n, a, l);
  return (i && (o.cachedQueryResult = i), o.cachedQueryResult);
}
function ne(e, t, o, r, n, a, l, d = "public-only") {
  let i = new Set(),
    s = T(r),
    m = E(e, r),
    u = new Set(m),
    Q = R(o, u, i, s, (f) => M(e, t, n, f, a, d));
  return {
    from: V(r.dataIdentifier, o, i, s, (f) => M(e, t, n, f, a, d)),
    select: Q,
    where: {
      type: "BinaryOperation",
      operator: "==",
      left: { type: "Identifier", name: "id", collection: s },
      right: { type: "LiteralValue", value: l },
    },
    limit: { type: "LiteralValue", value: 1 },
  };
}
var c = new WeakMap();
function w(e, t) {
  return e && t
    ? "with-localized-and-initial-values"
    : e
      ? "with-localized-values"
      : t
        ? "with-initial-values"
        : "default";
}
function k(e, t, o, r, n) {
  let a = w(o, r),
    l = n ? c.get(e)?.[a] : void 0;
  if (l) return l;
  let d = new Set();
  for (let i of t) {
    if (C(i)) {
      let s = e.getControlProp(i.id);
      s?.type === "richtext" ? F(s, d, o) : r && y(i.initialValue, d);
      continue;
    }
    h(i) && z(e.getControlProp(i.id), i, d, o);
  }
  if (n) {
    let i = c.get(e) ?? {};
    ((i[a] = d), c.set(e, i));
  }
  return d;
}
function F(e, t, o) {
  if (e?.type === "richtext" && (y(e.value, t), !!o))
    for (let r of Object.values(e.valueLocalized ?? {})) y(r?.value, t);
}
function z(e, t, o, r) {
  if (e?.type !== "array") return;
  let n = t.itemVariables.filter(C);
  if (n.length !== 0) {
    for (let a of e.value) if (a.value) for (let l of n) F(a.value[l.id], o, r);
  }
}
function y(e, t) {
  if (g(e)) for (let o of x(e)) t.add(o);
}
function ie(e, t = { includeLocalizedValues: !1, includeVariableInitialValues: !1, useCache: !0 }) {
  let o = t.includeLocalizedValues === !0,
    r = t.includeVariableInitialValues === !0,
    n = t.useCache !== !1 && t.collectionItems === void 0,
    a = w(o, r),
    l = n ? c.get(e)?.[a] : void 0;
  if (l) return l;
  let d = new Set(),
    i = t.collectionItems ?? e.getUnsortedChildren();
  for (let s of i) {
    let m = k(s, e.variables, o, r, n);
    for (let u of m) d.add(u);
  }
  if (n) {
    let s = c.get(e) ?? {};
    ((s[a] = d), c.set(e, s));
  }
  return d;
}
export { E as a, oe as b, M as c, W as d, re as e, ne as f, ie as g };
//# sourceMappingURL=chunk-WRP6GIKY.mjs.map
