import { a as m } from "chunk-QFU6OGL3.mjs";
import { Gf as g, mf as l, sf as u } from "chunk-TUJ5ECCX.mjs";
import { c as a } from "chunk-AYNVEX5D.mjs";
import { a as c } from "chunk-2FCXHKEL.mjs";
import { a as P } from "chunk-SWYZG2NI.mjs";
import { e as s } from "chunk-WLHSDIGQ.mjs";
var o = s(P());
var d = "plyku67",
  f = "h1sx89rv";
var b = s(c());
function R({ className: h, value: r, startFromZero: k, max: v = 1, ...x }) {
  let n = (0, o.useRef)(null),
    e = u(k ? 0 : r),
    t = e.get();
  return (
    (0, o.useEffect)(() => {
      g(e, r, { type: "tween" });
    }, [r, e]),
    l(e, "change", (p) => {
      if (!a(p)) return;
      let i = n.current;
      i && (i.value = p);
    }),
    (0, b.jsx)("progress", {
      ref: n,
      className: m(d, r > 0 && f, h),
      value: a(t) ? t : 0,
      max: v,
      ...x,
    })
  );
}
export { R as a };
//# sourceMappingURL=chunk-W35WCOIX.mjs.map
