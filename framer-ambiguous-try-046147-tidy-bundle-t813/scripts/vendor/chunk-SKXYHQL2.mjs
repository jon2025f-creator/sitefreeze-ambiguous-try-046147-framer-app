import { Ve as o, Xe as n, Ye as d } from "chunk-LBKZPB25.mjs";
import { b as a } from "chunk-4JY5UMT2.mjs";
function i(e) {
  return n(e.timeline);
}
function s(e, r, t) {
  return i(e) === r
    ? !1
    : (a(
        e.tree === t.initialTree && !d(e.timeline) && !e.tree.hasUncommittedChanges(),
        "Cannot switch tree mode after tree data has been loaded because it would reset timeline data"
      ),
      o(e.tree, r),
      (e.timeline = t.createTimeline(r)),
      t.resetTimeline && e.timeline.reset(e.tree),
      !0);
}
export { i as a, s as b };
//# sourceMappingURL=chunk-SKXYHQL2.mjs.map
