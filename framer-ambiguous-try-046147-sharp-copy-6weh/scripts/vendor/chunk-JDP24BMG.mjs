import { Db as c, Pa as d, ib as y } from "chunk-2VKLUDYB.mjs";
import { mg as l, oa as m } from "chunk-3D2PCFIQ.mjs";
import { $i as p, Ci as a } from "chunk-HKOU3WZ7.mjs";
import { a as u } from "chunk-SWYZG2NI.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
var f = k(u(), 1);
function P(t) {
  return y(t) && d(t) && a(t);
}
function S(t) {
  let e = {};
  if (!t) return e;
  let i = t.children.filter(P).sort((r, s) => (r.breakpointWidth ?? 0) - (s.breakpointWidth ?? 0));
  for (let r of i) {
    let s = r.originalid,
      o = e[s] ?? [];
    (o.push(r), (e[s] = o));
  }
  return e;
}
function x(t) {
  let e = c.get(t);
  return (0, f.useMemo)(() => S(e), [e]);
}
function R(t, e) {
  return !p(e) || !m(e) ? "" : B(t, e.width);
}
function B(t, e) {
  let i = [],
    r = Object.values(t);
  for (let s of r) {
    let o = s.find((n) => (n.breakpointWidth ?? 0) > e);
    if (o) {
      let n = l(2, o.id);
      i.push(n);
    }
  }
  return i.join(" ");
}
export { S as a, x as b, R as c, B as d };
//# sourceMappingURL=chunk-JDP24BMG.mjs.map
