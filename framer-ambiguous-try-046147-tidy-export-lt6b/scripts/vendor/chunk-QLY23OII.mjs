import { a } from "chunk-WOUQLJ5W.mjs";
import { b as c } from "chunk-4JY5UMT2.mjs";
function f(e) {
  let n = 2166136261;
  for (let r = 0; r < e.length; r++) ((n ^= e.charCodeAt(r)), (n = Math.imul(n, 16777619)));
  return n >>> 0;
}
function g(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function y(e, n, r, t) {
  return e === r ? n > t : e > r;
}
function A(e, n, r) {
  let t = e.seq.get(n),
    o = e.seq.get(r);
  if (t === o) {
    let u = e.client.get(n),
      b = e.client.get(r);
    return u > b;
  }
  return t > o;
}
function d(e, n, r) {
  let t = e.seq.get(n),
    o = e.seq.get(r);
  return t === o ? e.client.get(n) - e.client.get(r) : t - o;
}
function x(e, n) {
  let r = e.branchId ?? a,
    t = n.branchId ?? a;
  return r === t && e.client === n.client && e.batch === n.batch;
}
function R(e, n) {
  return e.length !== n.length ? !1 : i(e, n);
}
function i(e, n) {
  if (Object.is(e, n)) return !0;
  if (Array.isArray(e) || Array.isArray(n))
    return !Array.isArray(e) || !Array.isArray(n) || e.length !== n.length
      ? !1
      : e.every((o, u) => i(o, n[u]));
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  let r = Object.keys(e),
    t = Object.keys(n);
  if (r.length !== t.length) return !1;
  for (let o of r) if (!Object.hasOwn(n, o) || !i(Reflect.get(e, o), Reflect.get(n, o))) return !1;
  return !0;
}
var l = 2 ** 32 - 1,
  m = 10,
  s = l - m,
  N = Array.from({ length: m }, (e, n) => l - n);
function D() {
  return Math.floor(Math.random() * s);
}
function p(e) {
  return Number.isSafeInteger(e) && e >= 0 && e <= s;
}
function S(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function _(e, n) {
  let r = e === a ? n : f(`${e}:${n}`) % s;
  return (c(p(r), () => `invalid clientId derived for ${e}:${n}: ${r}`), r);
}
export {
  g as a,
  y as b,
  A as c,
  d,
  x as e,
  R as f,
  i as g,
  N as h,
  D as i,
  p as j,
  S as k,
  _ as l,
};
//# sourceMappingURL=chunk-QLY23OII.mjs.map
