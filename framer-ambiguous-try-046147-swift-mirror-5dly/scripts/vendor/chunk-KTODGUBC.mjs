import { cg as n, dg as o } from "chunk-SETILOUN.mjs";
function u(t, e, r) {
  if (!e && !r) return !1;
  for (let i of t)
    if (r) {
      if (r.includes(i)) return !0;
    } else if (e && o(i) && e.includes(n[i])) return !0;
  return !1;
}
export { u as a };
//# sourceMappingURL=chunk-KTODGUBC.mjs.map
