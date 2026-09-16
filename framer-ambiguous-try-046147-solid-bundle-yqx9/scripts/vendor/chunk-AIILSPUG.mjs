import { ka as p } from "chunk-T6DXIA74.mjs";
import { b as l } from "chunk-SKOZDPQ3.mjs";
import { a as u } from "chunk-7BWPFUCH.mjs";
import { a as E } from "chunk-SWYZG2NI.mjs";
import { e as d } from "chunk-WLHSDIGQ.mjs";
var n = d(E(), 1);
var g = Symbol("uninitialized");
function q(m, h, r, f = {}) {
  let a = l(),
    { deepEqual: i = !1 } = f,
    c = Array.isArray(r) ? r : [r],
    b = (0, n.useCallback)((t) => {
      let e = [...c, t],
        S = a.scheduler.changes.observe(...e);
      return () => a.scheduler.changes.removeObserver(S);
    }, c),
    s = (0, n.useCallback)(m, h),
    o = (0, n.useRef)(g),
    y = (0, n.useCallback)(() => {
      let t = o.current,
        e;
      return t === g
        ? ((e = s()), (o.current = e), e)
        : ((e = s()), (i ? u(t, e) : p(t, e)) ? t : ((o.current = e), e));
    }, [i, s]);
  return (0, n.useSyncExternalStore)(b, y);
}
export { q as a };
//# sourceMappingURL=chunk-AIILSPUG.mjs.map
