import { b as c, f as d } from "chunk-ARJ7WQTJ.mjs";
import { b as a } from "chunk-4JY5UMT2.mjs";
var p = /^0+/u,
  x = /^\d+$/u;
function S(n) {
  return x.test(n);
}
function b(n, t) {
  let e = n.split(t),
    r = e.length;
  if (r === 1) return null;
  let i = e[r - 1];
  if ((a(c(i), "Segments must be a string"), i.length === 0 || !S(i))) return null;
  let o = Number(i);
  if (!d(o)) return null;
  e.pop();
  let u = i.match(p);
  return { value: e.join(t), suffixCount: o, suffixMinimumLength: u ? i.length : 0 };
}
function N(n, t, { startIndex: e = 1, omitCountIfFirst: r = !0, withDash: i = !1 } = {}) {
  let o = typeof t == "function" ? t : (h) => t.has(h),
    u = e,
    l = 0,
    f = i ? "-" : " ",
    s = b(n, f);
  s && ((n = s.value), (u = s.suffixCount), (r = !1), (l = s.suffixMinimumLength));
  let m = u.toString().padStart(l, "0"),
    g = u === 1 && r ? n : `${n}${f}${m}`;
  for (; o(g);) (u++, (m = u.toString().padStart(l, "0")), (g = `${n}${f}${m}`));
  return g;
}
function y(n, t, { isDivider: e }) {
  return e ? n.trim() : N(n.replace(/[{}]/gu, "").trim(), t);
}
export { N as a, y as b };
//# sourceMappingURL=chunk-IHYSCPNE.mjs.map
