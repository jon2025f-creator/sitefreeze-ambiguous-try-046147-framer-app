import { O as P, Ph as y, Xh as C, af as h, ph as c, rh as v, te as I } from "chunk-JZUGM3I3.mjs";
import { $c as N } from "chunk-T3XD2WMS.mjs";
import { Fg as g } from "chunk-GA7KAPYJ.mjs";
import { lj as u, nb as l, ob as f } from "chunk-VHPQNF2H.mjs";
import { g as D } from "chunk-Y46HMWZZ.mjs";
import { b as p } from "chunk-ARJ7WQTJ.mjs";
function q(o, e, n, t, { shouldOpenPage: s = !0, renamedIds: i = new c() } = {}) {
  let r = C(o, e, n, "duplicate", {
    enterIsolation: !1,
    preferredName: t,
    insertionIndex: o.tree.root.children.findIndex((d) => d.id === e.id) + 1,
    renamedIds: i,
  });
  return (
    o.stores.persistedUserDefaults.newContentAsDraft &&
      r.set({ isDraft: !0, duplicatedFrom: g(r.duplicatedFrom, e.id) }),
    s && h(o, { type: "page", nodeId: r.id }, { deferPageSelection: !0 }),
    r
  );
}
function V(o, e, n) {
  let t = new c(),
    s = new Set(
      o.stores.scopeStore
        .getDesignPageNodes()
        .map((a) => a.resolveValue("name"))
        .filter(p)
    ),
    i = N(n ?? e.resolveValue("name") ?? "Design", s),
    r = e.clone({ name: i, children: new u() });
  t.set(e.id, r.id);
  let d = [];
  for (let a of e.children) {
    let m = y(a, new Map(), new Map(), t, !1);
    (d.push(m), t.set(a.id, m.id), r.addChild(m));
  }
  o.tree.insertNode(r, void 0, o.tree.root.children.findIndex((a) => a.id === e.id) + 1);
  for (let a of d) v(o.tree, o.componentLoader, a, t, !1);
  return (P(o.tree, e.id, r.id), D("design_page_create", { pageId: r.id, source: "duplicate" }), r);
}
async function U(o, e, n) {
  let t = e.isLoaded() ? e : await e.load();
  if (!(!t || !w(o, [e.id]))) return V(o, t, n);
}
function w(o, e) {
  if (!e.length || I(o, "canDesign")) return !1;
  let n = o.stores.treeStore.getDataTree();
  return e.length === 1 && l(n.get(e[0]))
    ? !o.stores.chromeStore.hasNonDefaultCanvasLocale
    : e.every((t) => f(n.get(t)));
}
export { q as a, V as b, U as c, w as d };
//# sourceMappingURL=chunk-KKVDVJBS.mjs.map
