import { c as ye } from "chunk-NPQPR5BF.mjs";
import { Dj as xe, Mf as he, Rf as v, Uf as G, rk as Ie } from "chunk-JG2IDKDJ.mjs";
import { a as pe } from "chunk-YJEU25RS.mjs";
import { Md as V } from "chunk-SC3IJYH4.mjs";
import { x as Se } from "chunk-MHSPIR5Y.mjs";
import {
  $o as fe,
  Cg as me,
  Dx as x,
  Ex as ge,
  aa as se,
  k as te,
  nb as ue,
  sb as ce,
} from "chunk-GIDSXRDU.mjs";
import {
  Cf as T,
  Eg as le,
  Ie as oe,
  Ke as re,
  Le as ie,
  Lf as ae,
  Xf as de,
  db as k,
  fb as ne,
  jk as z,
  l as R,
  pc as $,
} from "chunk-HB6AHKYH.mjs";
import { d as E, f as _, i as L, o as Z } from "chunk-Q5OEXSCG.mjs";
import { k as A } from "chunk-D563A37T.mjs";
import { a as O } from "chunk-AYNVEX5D.mjs";
import { f as ee } from "chunk-ARJ7WQTJ.mjs";
import { b as m } from "chunk-4JY5UMT2.mjs";
var Ge = new Set(["cms", "canvas", "agent"]);
function Fe(e) {
  let t = A.get("jsonRichTextStorage");
  if (t === "on") return !0;
  if (t === "off") return !1;
  let n = t.split(",");
  return (
    m(
      n.every((o) => Ge.has(o)),
      () => `Unexpected jsonRichTextStorage flag: ${t}`
    ),
    e !== void 0 && n.includes(e)
  );
}
function Xe() {
  return A.isOn("harness2") && Fe("agent");
}
var Ce = [x.video, x.youtube, x.vimeo, x.codeblock, x.twitter, x.embed];
function st(e, t) {
  let n = Z(t);
  return _(n)
    ? n.type === "canvasComponent"
    : E(n)
      ? e.tree.getNodeWithTrait(n.moduleId, $)?.type === "canvasComponent"
      : !1;
}
async function at(e, t) {
  let n = Z(t);
  E(n) && (await e.stores.modulesStore.addExternalModulesToProject([n], { onTreeUpdate() {} }));
}
var be = new WeakMap();
async function dt(e) {
  let { modules: t } = await e.stores.modulesStore.lookUpModules(Ce.map(ge)),
    n = [];
  for (let o = 0; o < t.length; o++) {
    let r = t[o];
    m(r, "Module must exist");
    let a = Ce[o];
    (m(a, "Module component must exist"),
      be.set(a, r),
      m(r.files.module, "Module must have a module file"),
      n.push(L(r.id, r.saveId, r.files.module, a.exportSpecifier ?? "default")));
  }
  await e.stores.modulesStore.preloadExternalModules(n);
}
function lt(e, t) {
  let n = be.get(t);
  m(n, "Preloaded module must exist");
  let o = e.getNodeWithTrait(n.id, $);
  return o
    ? o.codeComponentIdentifier
    : (m(n.files.module, "Module must have a module file"),
      L(n.id, n.saveId, n.files.module, t.exportSpecifier ?? "default").value);
}
function gt(e, t, n) {
  let o = t && e.getNode(t);
  if (!o || !T(o)) return n(t, {}, !1);
  let r = ce(e, o) ? {} : { visible: !1 },
    a = n(o.originalid, r, !0);
  if (a === void 0) return;
  let d = me.getReplicaForTemplateNode(e, o);
  return d ? (r.visible === !1 && pe(e, d, a, { visible: !0 }), te(d.id, a)) : a;
}
function ve(e, t, n = e.id) {
  let o = e.children;
  return oe(e) ? (!o || o.length === 0 ? [] : (t.getChildrenRects(n) ?? [])) : null;
}
var De = 4,
  Ne = 20;
function Re(e, t, n) {
  m(t.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: o, index: r } = R.closestRect(t, n),
    a = ie(e),
    d = re(e) ? !a : e.resolveValue("stackDirection") === "horizontal",
    i = d ? "x" : "y",
    u = d ? "y" : "x",
    g = d ? "width" : "height",
    c = d ? "height" : "width",
    S = n[i] < o[i] + o[g] / 2,
    s = a && ee(e.gridColumnCount) ? Math.max(Math.floor(e.gridColumnCount), 1) : 1,
    p = S ? r - s : r + s,
    l = t[p],
    I = !l || (S ? l[i] >= o[i] : o[i] >= l[i]),
    f = S ? r : Math.min(r + s, t.length);
  if (I) {
    let h = S ? o[i] + De : o[i] + o[g] - De;
    return {
      insertionIndex: f,
      localInsertionLine: { a: M(i, h, o[u]), b: M(i, h, o[u] + Math.max(o[c], Ne)) },
    };
  } else {
    let h = S ? (l[i] + l[g] + o[i]) / 2 : (o[i] + o[g] + l[i]) / 2;
    return {
      insertionIndex: f,
      localInsertionLine: {
        a: M(i, h, Math.min(l[u], o[u])),
        b: M(i, h, Math.max(l[u] + l[c], o[u] + Math.max(o[c], Ne))),
      },
    };
  }
}
function M(e, t, n) {
  return e === "x" ? { x: t, y: n } : { x: n, y: t };
}
var ke = 10;
function We(e, t) {
  for (let n of e) if (t.includes(n)) return !0;
  return !1;
}
function Be(e, t, n, o, r) {
  let a = e.node;
  if (r.length === 0 || a.stackWrapEnabled || ae(a) || T(a)) return null;
  let { tree: d } = t,
    { zoom: i } = t.stores.canvasStore,
    u = d.getParent(a.id);
  if (u && k(u) && (u.stackDirection !== a.stackDirection || u.stackWrapEnabled)) return null;
  let g = G(d, e, n),
    c = he(d, e),
    S = a.stackDirection === "vertical",
    s = S ? "x" : "y",
    p = S ? "y" : "x",
    l = S ? "width" : "height",
    I = S ? "height" : "width",
    f = c[l],
    h = c[I],
    y = f * i,
    P = h * i;
  if (y < 40 || P < 40) return null;
  let B = g[s],
    j = 10 / i,
    U = R.merge(...r),
    Y = U[s],
    we = Y + U[l],
    Ee = Math.max(j, Y / 2),
    Le = Math.max(j, (f - we) / 2),
    w = B <= Ee,
    Ze = B >= f - Le;
  if (!w && !Ze) return null;
  let Ae = w ? 0 : 1,
    D = o[I],
    H = 4 / i,
    J = w ? H : f - H,
    Q = h / 2,
    q = D / 2,
    K = h / 3,
    X = g[p],
    C = "end";
  D > h ? (C = "center") : X < K ? (C = "start") : X < 2 * K && (C = "center");
  let N, b;
  switch (C) {
    case "start": {
      ((N = 0), (b = D));
      break;
    }
    case "end": {
      ((b = h), (N = b - D));
      break;
    }
    default: {
      ((N = Q - q), (b = Q + q));
      break;
    }
  }
  let $e = { [s]: J, [p]: N },
    Oe = { [s]: J, [p]: b },
    ze = v(d, e, $e, { includeNode: !0 }),
    Ve = v(d, e, Oe, { includeNode: !0 });
  return { insertionIndex: Ae, insertionLine: { a: ze, b: Ve }, wrap: { wrapAlignment: C } };
}
function Me(e, t, n, o, { allowWrapping: r = !0 } = {}) {
  let a = e.node;
  if (!z(a)) return { insertionIndex: null, insertionLine: null };
  let d = ve(a, t.stores.layoutCache, e.renderId);
  if (!d) return { insertionIndex: null, insertionLine: null };
  if (r && je(e)) {
    let s = Be(e, t, n, o, d);
    if (s) return s;
  }
  let i = t.tree,
    u = G(i, e, n);
  if (d.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: g, localInsertionLine: c } = Re(a, d, u),
    S = { a: v(i, e, c.a, { includeNode: !0 }), b: v(i, e, c.b, { includeNode: !0 }) };
  return { insertionIndex: g, insertionLine: S };
}
function je(e) {
  return k(e.node);
}
function Te(e) {
  return ne(e.node);
}
function Bt(e, t, n, o, r = {}) {
  return Me({ node: e, renderId: e.id }, t, n, o, r);
}
function jt(e, t, n, o, r = !1) {
  return Ye(e, t, n, o ? { node: o, renderId: o.id } : null, r, !1)?.node ?? null;
}
var Ue = { width: 10, height: 10 };
function Ye(e, t, n, o, r = !1, a = !0) {
  m(n.length, "getStackOrGridInRange(): expects at least a single selected node");
  let d = e.stores.scopeStore.active;
  if (n.some(se)) return null;
  let u = ye(a),
    g = Se(e.tree, d, t, !1, !1, void 0, u)
      .filter(
        ({ node: s }) =>
          !(
            (fe(s) && s.locked) ||
            !z(s) ||
            xe(s) ||
            ue(e.tree, e.stores.overlayStore.activeOverlays, s)
          )
      )
      .reverse();
  if (o) {
    let s = o.node.id,
      p = g.find((l) => l.node.id === s && l.renderId === o.renderId);
    if (p) return p;
  }
  let c = null,
    S = n.map((s) => s.id);
  for (let s of g) {
    let p = s.node;
    if (!le(p) || (r && !de(p))) continue;
    let l = e.tree.getAncestorIds(p.id);
    if ((l.push(p.id), We(l, S) || (c || (c = s), !Te(s)))) continue;
    let { insertionLine: f } = Me(s, e, t, Ue);
    if (!f) continue;
    if (f.a.x === f.b.x) {
      if (Math.abs(t.x - f.a.x) * e.stores.canvasStore.zoom > ke) continue;
    } else if (f.a.y === f.b.y) {
      if (Math.abs(t.y - f.a.y) * e.stores.canvasStore.zoom > ke) continue;
    } else continue;
    if (n.every((y) => V(e.tree, p, y, d.id, e.componentLoader))) return s;
  }
  if (c && Te(c)) {
    let s = c.node;
    if (n.every((l) => V(e.tree, s, l, d.id, e.componentLoader))) return c;
  }
  return null;
}
function Ut(e, t, { wrapAlignment: n }) {
  let o = Ie.addStack(e, [t]);
  if (!o) return null;
  let r = e.tree.getNode(o);
  return !r || !k(r)
    ? null
    : (r.set({
        stackDirection: t.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: n,
      }),
      r);
}
function Pe(e) {
  return !Number.isNaN(e.getTime());
}
function Qt(e) {
  return e.match(/^\d{2}:\d{2}$/gu) !== null;
}
function He(e) {
  return e.toISOString().split("T")[0];
}
function qt(e) {
  let t = new Date(e);
  return Pe(t) ? He(t) : "";
}
function Kt(e) {
  let t = new Date(e);
  return Pe(t)
    ? `${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var Xt = (() => {
    let e = null;
    return () => {
      if (O(e)) return e;
      let t = document.createElement("input"),
        n = "a";
      return (t.setAttribute("type", "date"), t.setAttribute("value", n), (e = t.value !== n), e);
    };
  })(),
  _t = (() => {
    let e = null;
    return () => {
      if (O(e)) return e;
      let t = document.createElement("input"),
        n = "a";
      return (t.setAttribute("type", "time"), t.setAttribute("value", n), (e = t.value !== n), e);
    };
  })(),
  F = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function W(e) {
  return F.test(e);
}
function en(e) {
  if (!e) return;
  if (W(e)) return e;
  let t = new Date(e).toISOString();
  return (m(W(t), "Date format is not valid"), t);
}
function Je(e) {
  F.exec(e);
  let t = F.exec(e);
  m(t, "The provided date cannot have conformed to StandardZuluDateString");
  let [, n, o, r, a, d, i, u] = t;
  return [n, o, r, a, d, i, u];
}
function tn([e, t, n, o, r, a, d]) {
  let i = `${e}-${t}-${n}T${o}:${r}:${a}.${d}Z`;
  return (m(W(i)), i);
}
function nn(e) {
  let [t, n, o] = Je(e);
  return `${o}/${n}/${t}`;
}
export {
  gt as a,
  ve as b,
  We as c,
  Me as d,
  Te as e,
  Bt as f,
  jt as g,
  Ye as h,
  Ut as i,
  Fe as j,
  Xe as k,
  st as l,
  at as m,
  dt as n,
  lt as o,
  Pe as p,
  Qt as q,
  qt as r,
  Kt as s,
  Xt as t,
  _t as u,
  en as v,
  Je as w,
  tn as x,
  nn as y,
};
//# sourceMappingURL=chunk-667JGPAU.mjs.map
