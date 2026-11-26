import { B as vi, C as V, c as zi, d as Ee } from "chunk-YUJNYCAQ.mjs";
import { a as hi, b as Ii } from "chunk-2QQ4ZDXL.mjs";
import {
  Da as jo,
  Ka as mi,
  La as yi,
  dc as Ko,
  ha as li,
  hg as Li,
  ia as ci,
  ik as Ci,
  ja as si,
  la as di,
  ma as ui,
  mg as no,
  oa as $o,
  pg as Vt,
  tc as Rt,
  uj as Si,
  uk as Ti,
  vk as bi,
  wa as pi,
  wk as de,
  xa as Uo,
  ya as to,
} from "chunk-IYYSJTFJ.mjs";
import { a as En } from "chunk-G2BKXE6X.mjs";
import {
  B as Xn,
  C as Jn,
  De as _o,
  E as Qe,
  Ee as xt,
  Gb as ti,
  N as Qn,
  Pe as Ae,
  Q as It,
  Sd as vt,
  W as Be,
  X as Oo,
  ba as zt,
  ca as ei,
  t as ze,
  w as Yn,
  we as fi,
  zb as Go,
} from "chunk-EOKX2JZH.mjs";
import {
  Mc as ri,
  Td as Tt,
  Wd as bt,
  lc as ii,
  qc as ai,
  tb as eo,
  x as Zn,
} from "chunk-G7UNMWK7.mjs";
import { f as oi, m as gi } from "chunk-JGR6L5BH.mjs";
import {
  Cg as Bn,
  Ex as W,
  Oi as he,
  Ox as ht,
  Pg as An,
  Pi as Do,
  Uq as qn,
  Wl as w,
  Yn as Eo,
  aa as bn,
  eg as yt,
  he as ce,
  ie as mt,
  je as Fn,
  jk as Mo,
  k as yn,
  kk as Je,
  l as gn,
  nb as Pn,
  oy as Te,
  pp as Kn,
  py as ni,
  qm as _n,
  sb as kn,
  vg as wn,
  zt as Ct,
} from "chunk-PFOAQTXZ.mjs";
import {
  $j as Lt,
  $o as Bo,
  Af as ke,
  Ag as Fe,
  Cg as Nn,
  Cj as bo,
  Ge as In,
  Hk as Vo,
  Ie as zn,
  Ik as we,
  Je as Tn,
  Jf as Rn,
  Ko as wo,
  Lo as Ie,
  Mk as No,
  Ok as St,
  Pk as $n,
  Qb as ho,
  Sd as Io,
  Sj as vo,
  Tb as Ke,
  Tj as Gn,
  Uk as _,
  Vb as Ze,
  Vf as Vn,
  Wi as Ce,
  Wm as ne,
  Xj as xo,
  Ya as te,
  Yj as se,
  Zd as q,
  Zi as Mn,
  Zj as Ye,
  ab as Lo,
  ak as Ro,
  ap as jn,
  bb as So,
  db as Ln,
  gc as J,
  hb as Co,
  hc as pt,
  hh as Dn,
  ib as le,
  je as zo,
  ji as Me,
  jr as Wo,
  kb as T,
  ke as j,
  kl as Po,
  l as go,
  lj as gt,
  lq as Ao,
  me as To,
  nb as Sn,
  nc as qe,
  pb as Pe,
  qb as Z,
  qj as Wn,
  ql as ko,
  re as Q,
  sl as Un,
  tb as Cn,
  tl as Fo,
  ub as U,
  uj as On,
  vb as M,
  xk as Hn,
  yb as hn,
  yf as vn,
  zf as xn,
} from "chunk-EWG6V33O.mjs";
import { d as dt, f as dn, g as un, i as ut, o as re } from "chunk-GV47JEYI.mjs";
import { b as Ho } from "chunk-X27LL6OM.mjs";
import { g as oo } from "chunk-622DKHBO.mjs";
import { w as Xe } from "chunk-XWVB37KR.mjs";
import { e as Se } from "chunk-3CKYEPG2.mjs";
import { a as ye } from "chunk-YVT73FKN.mjs";
import { g as C, k as P } from "chunk-JUEYLPZJ.mjs";
import { a as ft } from "chunk-AYNVEX5D.mjs";
import { c as mn } from "chunk-EZMKBVIS.mjs";
import { b as I, f as ge, g as G, m as Le, s as pn, v as fn } from "chunk-ARJ7WQTJ.mjs";
import { b as yo, j as sn } from "chunk-EAUMDN6M.mjs";
import { b as S, c as $ } from "chunk-4JY5UMT2.mjs";
import { p as fe, q as me } from "chunk-WLHSDIGQ.mjs";
var xi = [Te.video, Te.youtube, Te.vimeo, Te.codeblock, Te.twitter, Te.embed];
function zc(e, t) {
  let o = re(t);
  return dn(o)
    ? o.type === "canvasComponent"
    : dt(o)
      ? e.tree.getNodeWithTrait(o.moduleId, qe)?.type === "canvasComponent"
      : !1;
}
async function Tc(e, t) {
  let o = re(t);
  dt(o) && (await e.stores.modulesStore.addExternalModulesToProject([o], { onTreeUpdate() {} }));
}
var Vi = new WeakMap();
async function bc(e) {
  let { modules: t } = await e.stores.modulesStore.lookUpModules(xi.map(ni)),
    o = [];
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    S(i, "Module must exist");
    let a = xi[n];
    (S(a, "Module component must exist"),
      Vi.set(a, i),
      S(i.files.module, "Module must have a module file"),
      o.push(ut(i.id, i.saveId, i.files.module, a.exportSpecifier ?? "default")));
  }
  await e.stores.modulesStore.preloadExternalModules(o);
}
function vc(e, t) {
  let o = Vi.get(t);
  S(o, "Preloaded module must exist");
  let n = e.getNodeWithTrait(o.id, qe);
  return n
    ? n.codeComponentIdentifier
    : (S(o.files.module, "Module must have a module file"),
      ut(o.id, o.saveId, o.files.module, t.exportSpecifier ?? "default").value);
}
function kc(e, t, o) {
  let n = t && e.getNode(t);
  if (!n || !ke(n)) return o(t, {}, !1);
  let i = kn(e, n) ? {} : { visible: !1 },
    a = o(n.originalid, i, !0);
  if (a === void 0) return;
  let r = An.getReplicaForTemplateNode(e, n);
  return r ? (i.visible === !1 && En(e, r, a, { visible: !0 }), yn(r.id, a)) : a;
}
function Ni(e, t, o = e.id) {
  let n = e.children;
  return In(e) ? (!n || n.length === 0 ? [] : (t.getChildrenRects(o) ?? [])) : null;
}
var Di = 4,
  Pi = 20;
function ki(e, t, o) {
  S(t.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: n, index: i } = go.closestRect(t, o),
    a = Tn(e),
    r = zn(e) ? !a : e.resolveValue("stackDirection") === "horizontal",
    c = r ? "x" : "y",
    l = r ? "y" : "x",
    p = r ? "width" : "height",
    u = r ? "height" : "width",
    d = o[c] < n[c] + n[p] / 2,
    s = a && ge(e.gridColumnCount) ? Math.max(Math.floor(e.gridColumnCount), 1) : 1,
    f = d ? i - s : i + s,
    m = t[f],
    g = !m || (d ? m[c] >= n[c] : n[c] >= m[c]),
    y = d ? i : Math.min(i + s, t.length);
  if (g) {
    let L = d ? n[c] + Di : n[c] + n[p] - Di;
    return {
      insertionIndex: y,
      localInsertionLine: { a: Zo(c, L, n[l]), b: Zo(c, L, n[l] + Math.max(n[u], Pi)) },
    };
  } else {
    let L = d ? (m[c] + m[p] + n[c]) / 2 : (n[c] + n[p] + m[c]) / 2;
    return {
      insertionIndex: y,
      localInsertionLine: {
        a: Zo(c, L, Math.min(m[l], n[l])),
        b: Zo(c, L, Math.max(m[l] + m[u], n[l] + Math.max(n[u], Pi))),
      },
    };
  }
}
function Zo(e, t, o) {
  return e === "x" ? { x: t, y: o } : { x: o, y: t };
}
var Fi = 10;
function Lr(e, t) {
  for (let o of e) if (t.includes(o)) return !0;
  return !1;
}
function Sr(e, t, o, n, i) {
  let a = e.node;
  if (i.length === 0 || a.stackWrapEnabled || Rn(a) || ke(a)) return null;
  let { tree: r } = t,
    { zoom: c } = t.stores.canvasStore,
    l = r.getParent(a.id);
  if (l && So(l) && (l.stackDirection !== a.stackDirection || l.stackWrapEnabled)) return null;
  let p = Vt(r, e, o),
    u = Li(r, e),
    d = a.stackDirection === "vertical",
    s = d ? "x" : "y",
    f = d ? "y" : "x",
    m = d ? "width" : "height",
    g = d ? "height" : "width",
    y = u[m],
    L = u[g],
    h = y * c,
    z = L * c;
  if (h < 40 || z < 40) return null;
  let R = p[s],
    v = 10 / c,
    B = go.merge(...i),
    k = B[s],
    A = k + B[m],
    X = Math.max(v, k / 2),
    H = Math.max(v, (y - A) / 2),
    oe = R <= X,
    ae = R >= y - H;
  if (!oe && !ae) return null;
  let pe = oe ? 0 : 1,
    De = n[g],
    fo = 4 / c,
    Ue = oe ? fo : y - fo,
    an = L / 2,
    rn = De / 2,
    ln = L / 3,
    cn = p[f],
    je = "end";
  De > L ? (je = "center") : cn < ln ? (je = "start") : cn < 2 * ln && (je = "center");
  let mo, _e;
  switch (je) {
    case "start": {
      ((mo = 0), (_e = De));
      break;
    }
    case "end": {
      ((_e = L), (mo = _e - De));
      break;
    }
    default: {
      ((mo = an - rn), (_e = an + rn));
      break;
    }
  }
  let fr = { [s]: Ue, [f]: mo },
    mr = { [s]: Ue, [f]: _e },
    yr = no(r, e, fr, { includeNode: !0 }),
    gr = no(r, e, mr, { includeNode: !0 });
  return { insertionIndex: pe, insertionLine: { a: yr, b: gr }, wrap: { wrapAlignment: je } };
}
function wi(e, t, o, n, { allowWrapping: i = !0 } = {}) {
  let a = e.node;
  if (!gt(a)) return { insertionIndex: null, insertionLine: null };
  let r = Ni(a, t.stores.layoutCache, e.renderId);
  if (!r) return { insertionIndex: null, insertionLine: null };
  if (i && Cr(e)) {
    let s = Sr(e, t, o, n, r);
    if (s) return s;
  }
  let c = t.tree,
    l = Vt(c, e, o);
  if (r.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: p, localInsertionLine: u } = ki(a, r, l),
    d = { a: no(c, e, u.a, { includeNode: !0 }), b: no(c, e, u.b, { includeNode: !0 }) };
  return { insertionIndex: p, insertionLine: d };
}
function Cr(e) {
  return So(e.node);
}
function Mi(e) {
  return Ln(e.node);
}
function as(e, t, o, n, i = {}) {
  return wi({ node: e, renderId: e.id }, t, o, n, i);
}
function rs(e, t, o, n, i = !1) {
  return Ir(e, t, o, n ? { node: n, renderId: n.id } : null, i, !1)?.node ?? null;
}
var hr = { width: 10, height: 10 };
function Ir(e, t, o, n, i = !1, a = !0) {
  S(o.length, "getStackOrGridInRange(): expects at least a single selected node");
  let r = e.stores.scopeStore.active;
  if (o.some(bn)) return null;
  let l = zi(a),
    p = Zn(e.tree, r, t, !1, !1, void 0, l)
      .filter(
        ({ node: s }) =>
          !(
            (Kn(s) && s.locked) ||
            !gt(s) ||
            Si(s) ||
            Pn(e.tree, e.stores.overlayStore.activeOverlays, s)
          )
      )
      .reverse();
  if (n) {
    let s = n.node.id,
      f = p.find((m) => m.node.id === s && m.renderId === n.renderId);
    if (f) return f;
  }
  let u = null,
    d = o.map((s) => s.id);
  for (let s of p) {
    let f = s.node;
    if (!Nn(f) || (i && !Vn(f))) continue;
    let m = e.tree.getAncestorIds(f.id);
    if ((m.push(f.id), Lr(m, d) || (u || (u = s), !Mi(s)))) continue;
    let { insertionLine: y } = wi(s, e, t, hr);
    if (!y) continue;
    if (y.a.x === y.b.x) {
      if (Math.abs(t.x - y.a.x) * e.stores.canvasStore.zoom > Fi) continue;
    } else if (y.a.y === y.b.y) {
      if (Math.abs(t.y - y.a.y) * e.stores.canvasStore.zoom > Fi) continue;
    } else continue;
    if (o.every((h) => vt(e.tree, f, h, r.id, e.componentLoader))) return s;
  }
  if (u && Mi(u)) {
    let s = u.node;
    if (o.every((m) => vt(e.tree, s, m, r.id, e.componentLoader))) return u;
  }
  return null;
}
function ls(e, t, { wrapAlignment: o }) {
  let n = Ci.addStack(e, [t]);
  if (!n) return null;
  let i = e.tree.getNode(n);
  return !i || !So(i)
    ? null
    : (i.set({
        stackDirection: t.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: o,
      }),
      i);
}
function F(e, t) {
  return `${e ?? ""}.${t}`;
}
function Y(e, t) {
  return `${e ?? ""}[${t}]`;
}
function Oe(e) {
  let t = [],
    o = e.split(".");
  for (let n of o) {
    let [i, a] = n.split("[");
    if ((i.length !== 0 && t.push({ type: "object", key: i }), a)) {
      let r = a.slice(0, -1);
      (S(r.length > 0), t.push({ type: "array", id: r }));
    }
  }
  return t;
}
function io(e) {
  return Co(e) || T(e) || le(e);
}
function fs(e) {
  return io(e) || U(e) || M(e) || te(e) || J(e);
}
function b(e, t = !1) {
  let o = (t ? Gn(e) : e).trim();
  return o === "" ? 0 : o.split(/\W+\b/).length;
}
var zr = Vo((e, t, o, n) =>
  String(
    C(
      bo({
        webMetadata: e ?? null,
        titleLocalized: t ?? null,
        descriptionLocalized: o ?? null,
        sharedEnumsChecksum: n,
      })
    )
  )
);
function Nt(e, t) {
  if (t !== e.root.id) return e.getSubtreeChecksum(t);
  let o = e.has(zt) ? e.getSubtreeChecksum(zt) : null;
  if (o === void 0) return;
  let { webMetadata: n, titleLocalized: i, descriptionLocalized: a } = e.root;
  return zr(n, i, a, o);
}
function qo(e) {
  return `${e}_html`;
}
function Yo(e) {
  return `${e}_fillImageLocalized`;
}
function be(e, t, o) {
  return `${e}.${t}.${o ?? ""}`;
}
var ue = new Set();
function Bi(e) {
  let t = {
    resolvedCount: 0,
    unresolvedCountsByModuleType: new Map(),
    unresolvedLocalizableCount: 0,
  };
  ue.add(t);
  try {
    return { result: e(), lookups: t };
  } finally {
    ue.delete(t);
  }
}
function ve() {
  let e = {
    resolvedCount: 0,
    unresolvedCountsByModuleType: new Map(),
    unresolvedLocalizableCount: 0,
  };
  return (ue.add(e), { lookups: e, [mn()]: () => ue.delete(e) });
}
function Ai(e) {
  if (e !== 0) for (let t of ue) t.unresolvedLocalizableCount += e;
}
function Ge(e, t, o) {
  if (ue.size === 0) return;
  if (t) {
    for (let r of ue) r.resolvedCount++;
    return;
  }
  let n = re(e),
    i = n ? ("type" in n ? n.type : n.kind) : "unparsed",
    a = Tr(o());
  for (let r of ue) {
    let c = r.unresolvedCountsByModuleType;
    (c.set(i, (c.get(i) ?? 0) + 1), a && r.unresolvedLocalizableCount++);
  }
}
function Tr(e) {
  for (let t of e)
    switch (t) {
      case void 0:
        continue;
      case null:
      case "string":
      case "richtext":
      case "image":
      case "responsiveimage":
      case "link":
      case "array":
      case "object":
        return !0;
      default:
        continue;
    }
  return !1;
}
var kt = "framer-module[data-module-identifier]",
  Wi = "framer-module-translation-text",
  Jo = "framer-module-translation-richtext",
  Oi = "data-module-control-key",
  Gi = "data-module-control-ancestor-path",
  Hi = "data-module-control-storage-type",
  br = ii(ai),
  xe = class extends Error {
    name = "RichTextModuleTranslationError";
  };
function Us(e) {
  return e instanceof xe;
}
function et(e, t) {
  let n = vo(e).querySelectorAll(kt);
  if (n.length === 0) return "";
  let i = [];
  for (let a of n) {
    let r = a.getAttribute("data-module-identifier");
    if (!I(r)) continue;
    let c = a.getAttribute("data-module-props");
    if (!I(c)) continue;
    let l;
    try {
      l = JSON.parse(c);
    } catch {
      continue;
    }
    if (!l) continue;
    let p = Ft(r, t, l);
    if (!p) continue;
    let u = Je(p, l),
      d = [];
    ($i(u, p, d, { suppressGeneratedIds: !0 }), d.length !== 0 && (d.sort(vr), i.push(d)));
  }
  return i.length === 0 ? "" : bo(i);
}
function vr(e, t) {
  return (
    Xo(e.controlPropKey, t.controlPropKey) ||
    Xo(e.ancestorControlKeyPath, t.ancestorControlKeyPath) ||
    Xo(e.tagName, t.tagName) ||
    Xo(e.storageType, t.storageType)
  );
}
function Xo(e, t) {
  let o = e ?? "",
    n = t ?? "";
  return o < n ? -1 : o > n ? 1 : 0;
}
function js(e, t) {
  let o = vo(e),
    n = o.querySelectorAll(kt);
  for (let i of n) {
    let a = i.getAttribute("data-module-identifier");
    if (!I(a)) continue;
    let r = i.getAttribute("data-module-props");
    if (!I(r)) continue;
    let c;
    try {
      c = JSON.parse(r);
    } catch {
      continue;
    }
    if (!c) continue;
    let l = Ft(a, t, c);
    if (!l) continue;
    let p = Je(l, c),
      u = [];
    $i(p, l, u);
    for (let d of u) {
      let s = o.ownerDocument.createElement(d.tagName);
      (s.setAttribute(Oi, d.controlPropKey),
        d.ancestorControlKeyPath && s.setAttribute(Gi, d.ancestorControlKeyPath),
        d.storageType && s.setAttribute(Hi, d.storageType),
        d.tagName === Jo ? (s.innerHTML = d.value) : (s.textContent = d.value),
        i.append(s));
    }
  }
  return o.innerHTML;
}
function _s(e, t, { strict: o = !0 } = {}) {
  let n = vo(e),
    i = n.querySelectorAll(kt);
  for (let a of i) {
    let r = a.getAttribute("data-module-identifier");
    if (!I(r)) continue;
    let c = a.getAttribute("data-module-props");
    if (!I(c)) continue;
    let l = Array.from(a.querySelectorAll(`${Wi}, ${Jo}`));
    if (l.length === 0) continue;
    let p;
    try {
      p = JSON.parse(c);
    } catch {
      if (!o) continue;
      throw new xe("Translated module props are no longer valid JSON.");
    }
    if (!p || !Ft(r, t, p)) continue;
    let d = p;
    for (let s of l) {
      if (s.parentElement !== a) {
        if (!o) continue;
        throw new xe(
          "Translated module controls must remain direct children of the module element."
        );
      }
      let f = s.getAttribute(Oi);
      if (!I(f) || f.length === 0) {
        if (!o) continue;
        throw new xe("Translated module control key is missing or invalid.");
      }
      let m = s.getAttribute(Gi) ?? void 0;
      if (s.tagName.toLowerCase() === Jo) {
        let L = Rr(s.getAttribute(Hi));
        if (!L) {
          if (!o) continue;
          throw new xe("Translated rich text module control storage type is missing or invalid.");
        }
        d = Ei(d, f, m, Vr(s.innerHTML, L), "richtext");
      } else d = Ei(d, f, m, s.textContent, "string");
      s.remove();
    }
    d !== p && a.setAttribute("data-module-props", JSON.stringify(d));
  }
  return n.innerHTML;
}
function $i(e, t, o, { suppressGeneratedIds: n = !1 } = {}) {
  for (let [i, a] of Object.entries(e)) {
    if (!a) continue;
    let r = t[i];
    r && Dt(i, a, r, void 0, o, n);
  }
}
function Dt(e, t, o, n, i, a) {
  switch (o.type) {
    case "array": {
      if (!Un(t)) return;
      for (let r of t.value) ko(r) && Dt(e, r, o.control, xr(n, r.id, a), i, a);
      return;
    }
    case "object": {
      if (t.type !== "object" || !G(t.value)) return;
      for (let [r, c] of Object.entries(t.value)) {
        let l = o.controls[r];
        l && Dt(e, c, l, F(n, r), i, a);
      }
      return;
    }
    case "string": {
      if (o.preventLocalization || t.type !== "string" || !I(t.value) || t.value.length === 0)
        return;
      i.push({
        controlPropKey: e,
        ancestorControlKeyPath: n,
        tagName: Wi,
        storageType: void 0,
        value: t.value,
      });
      return;
    }
    case "richtext": {
      if (o.preventLocalization || t.type !== "richtext" || !_(t.value)) return;
      let r = typeof t.value == "string" ? "html" : "json",
        c = typeof t.value == "string" ? t.value : ri(t.value, br);
      if (c.length === 0) return;
      i.push({
        controlPropKey: e,
        ancestorControlKeyPath: n,
        tagName: Jo,
        storageType: r,
        value: c,
      });
      return;
    }
    default:
      return;
  }
}
function xr(e, t, o) {
  return o ? `${e ?? ""}[]` : Y(e, t);
}
function Rr(e) {
  return e === "html" || e === "json" ? e : null;
}
function Ft(e, t, o) {
  Ge(e, t.componentForIdentifier(e) !== null, () => Object.values(o).map((i) => i?.type));
  let n = t.reactComponentForIdentifier(e);
  return n ? gi(oi(n, "onlyNonPresets")) : null;
}
function Vr(e, t) {
  return t === "json" ? fi(e, "collectionControlPropLocalized") : e;
}
function Ei(e, t, o, n, i) {
  let a = e[t];
  if (!a) {
    if (!o) return { ...e, [t]: { type: i, value: n } };
    let c = Oe(o);
    return { ...e, [t]: Qo(c, i, n) };
  }
  let r = Nr(a, o, n, i);
  return r === a ? e : { ...e, [t]: r };
}
function Qo(e, t, o) {
  if (e.length === 0) return { type: t, value: o };
  let [n, ...i] = e;
  S(n);
  let a = Qo(i, t, o);
  return n.type === "array"
    ? { type: "array", value: [{ ...a, id: n.id }] }
    : { type: "object", value: { [n.key]: a } };
}
function Nr(e, t, o, n) {
  return t ? Pt(e, Oe(t), o, n) : Ui(e, o, n);
}
function Pt(e, t, o, n) {
  let [i, ...a] = t;
  if (!i) return Ui(e, o, n);
  if (i.type === "array") {
    if ((e.type !== "array" && e.type !== null) || !Array.isArray(e.value)) return e;
    let l = e.value,
      p = !1,
      u = !1,
      d = yi(l, (s) => {
        if (!Po(s) || !ko(s) || s.id !== i.id) return s;
        p = !0;
        let f = Pt(s, a, o, n);
        return ((u ||= f !== s), f);
      });
    if (!p && l.some((s) => Po(s) && !ko(s))) return e;
    if (!p) {
      let s = Qo(a, n, o);
      return { ...e, value: [...l, { ...s, id: i.id }] };
    }
    return u ? { ...e, value: d } : e;
  }
  if ((e.type !== "object" && e.type !== null) || !G(e.value)) return e;
  let r = e.value[i.key];
  if (!Po(r)) {
    let l = Qo(a, n, o);
    return { ...e, value: { ...e.value, [i.key]: l } };
  }
  let c = Pt(r, a, o, n);
  return c === r ? e : { ...e, value: { ...e.value, [i.key]: c } };
}
function Ui(e, t, o) {
  return e.type !== o && e.type !== null
    ? e
    : o === "string"
      ? typeof t == "string" && e.value !== t
        ? { ...e, type: o, value: t }
        : e
      : e.value !== t
        ? { ...e, type: o, value: t }
        : e;
}
function Re(e, t, ...o) {
  let n = {},
    i = !1;
  for (let a of t) {
    let r = e.getSubfield(...o, a.id);
    r !== void 0 && ((n[a.id] = r), (i = !0));
  }
  return i ? n : xo;
}
function Pr(e, t) {
  let o = Uo(e);
  if (!I(e) || !e.includes("data-module-identifier")) return o;
  let n = et(e, t);
  return n.length === 0 ? o : C(`${o}:${n}`);
}
function O(e, t, o, n, i, a) {
  let r = {};
  for (let c of t) {
    if (i?.[c.id]) {
      r[c.id] = "warning";
      continue;
    }
    let l = a?.(c);
    if (l) {
      r[c.id] = l;
      continue;
    }
    let p = o[c.id];
    if (!p) {
      r[c.id] = _o(e) ? "done" : "new";
      continue;
    }
    r[c.id] = p.hash !== n || p.needsReview ? "needsReview" : "done";
  }
  return r;
}
function ot(e, t, o, n, i, a, r) {
  if (!(!j(n) || !zo(n.outputType) || n.outputType !== "string")) {
    for (let c of n.transforms)
      if (Io(c)) {
        if (c.name === "convertFromEnum" && c.outputType === "string") {
          S(Array.isArray(c.cases), "expected enum transform cases to be an array");
          let l = To(n) && n.startValue.id === Ao;
          for (let p of l ? [] : c.cases) {
            if (q(p.to) || !I(p.to) || (p.to.length === 0 && !p.toLocalized)) continue;
            let u = C(p.to),
              d = se(p.toLocalized, r);
            e.push({
              type: "convertFromEnum",
              transformId: c.id,
              keyPath: Y(F(i, "cases"), p.id),
              nodeId: t.id,
              scopeId: o,
              caseId: p.id,
              isDefaultCase: !1,
              value: p.to,
              valueWordCount: b(p.to),
              hash: u,
              localizedValues: d,
              localizedValueStatuses: O(p.to, r, d, u),
              managedByPluginButUserEditable: !1,
              controlPropKey: a,
              controlPropName: void 0,
              ancestorControlKeyPath: void 0,
            });
          }
          if (c.default && !q(c.default) && I(c.default)) {
            let p = C(c.default),
              u = se(c.defaultLocalized, r);
            e.push({
              type: "convertFromEnum",
              transformId: c.id,
              keyPath: F(i, "default"),
              nodeId: t.id,
              scopeId: o,
              caseId: null,
              isDefaultCase: !0,
              value: c.default,
              valueWordCount: b(c.default),
              hash: p,
              localizedValues: u,
              localizedValueStatuses: O(c.default, r, u, p),
              managedByPluginButUserEditable: !1,
              controlPropKey: a,
              controlPropName: void 0,
              ancestorControlKeyPath: void 0,
            });
          }
        }
        if (c.name === "convertFromBoolean")
          for (let l of ["truthy", "falsy", "fallback"]) {
            let p = l === "fallback" ? c.fallback : void 0,
              u = p ? p.value : c[l],
              d = p
                ? p.valueLocalized
                : l === "truthy"
                  ? c.truthyLocalized
                  : l === "falsy"
                    ? c.falsyLocalized
                    : void 0;
            if (q(u) || !I(u) || (u.length === 0 && !d)) continue;
            let s = C(u),
              f = se(d, r);
            e.push({
              type: c.name,
              transformId: c.id,
              keyPath: F(i, l),
              nodeId: t.id,
              scopeId: o,
              property: l,
              value: u,
              valueWordCount: b(u),
              hash: s,
              localizedValues: f,
              localizedValueStatuses: O(u, r, f, s),
              managedByPluginButUserEditable: !1,
              controlPropKey: a,
              controlPropName: void 0,
              ancestorControlKeyPath: void 0,
            });
          }
        if (c.name === "prefix" || c.name === "suffix") {
          if (
            q(c.value) ||
            (S(I(c.value), "expected prefix or suffix transform value to be a string"),
            c.value.length === 0 && !c.valueLocalized)
          )
            continue;
          let l = C(c.value),
            p = se(c.valueLocalized, r);
          e.push({
            type: c.name,
            transformId: c.id,
            keyPath: Y(i, c.id),
            nodeId: t.id,
            scopeId: o,
            value: c.value,
            valueWordCount: b(c.value),
            hash: l,
            localizedValues: p,
            localizedValueStatuses: O(c.value, r, p, l),
            managedByPluginButUserEditable: !1,
            controlPropKey: a,
            controlPropName: void 0,
            ancestorControlKeyPath: void 0,
          });
        }
      }
  }
}
function kr(e, t, o, n, i, a, r) {
  let c = C(a);
  e.push({
    type: "FormPlainTextInputNode",
    keyPath: i,
    nodeId: t.id,
    scopeId: o,
    value: a,
    valueWordCount: b(a),
    hash: c,
    localizedValues: r,
    localizedValueStatuses: O(a, n, r, c),
    managedByPluginButUserEditable: !1,
  });
}
function Fr(e, t, o, n) {
  let i = t.get("formInputPlaceholder");
  if (Q(i)) {
    if (q(i) || !t.isKeySetAndNotInherited("formInputPlaceholder")) return;
    ot(e, t, o, i, `${t.id}_placeholder`, t.id, n);
    return;
  }
  !i ||
    !t.isKeySetAndNotInherited("formInputPlaceholder") ||
    kr(e, t, o, n, `${t.id}_placeholder`, i, Re(t, n, "formInputPlaceholderLocalized"));
}
function Mr(e, t, o, n, i, a) {
  let r = o.get("textContent");
  if (j(r)) {
    if (!o.isKeySetAndNotInherited("textContent")) return;
    ot(e, o, n, r, o.id, o.id, i);
    return;
  }
  if (Q(o.get("htmlContent")) || Q(r)) return;
  let c = o.isKeySetAndNotInherited("html"),
    l = o.isKeySetAndNotInherited("htmlLocalized");
  if (!c && !l) return;
  let p = o.get("html"),
    u = de(p),
    d = Ae(p),
    s = a === "canvasHtmlAsTextContentIfPossible" ? d : "rich-text",
    f = Ee(p),
    m = s === "rich-text" ? ne(f) : u,
    g = o.get("originalid");
  if (s === "text" && !l && g && !o.get("replicaInfo")) {
    let R = t.getAccessor(g);
    if (R) {
      let v = R.get("html");
      if (de(v) === u) return;
    }
  }
  let L = pi(d === s ? m : u),
    h = Re(o, i, "htmlLocalized"),
    z = O(m, i, h, L);
  e.push({
    type: "RichTextNode",
    keyPath: qo(o.id),
    nodeId: o.id,
    scopeId: n,
    value: m,
    richTextValue: f,
    valueWordCount: b(m, !0),
    textType: s,
    hash: L,
    localizedValues: h,
    localizedValueStatuses: z,
    managedByPluginButUserEditable: !1,
    inherited: !l,
  });
}
function wr(e, t, o, n) {
  let i = t.get("fillImage");
  if (t.get("fillType") !== "image" || !t.get("fillEnabled") || !I(i) || i.length === 0) return;
  let a = t.isKeySetAndNotInherited("fillImageLocalized"),
    r = t.isKeySetAndNotInherited("altAttributeLocalized");
  if (
    !t.isKeySetAndNotInherited("fillImage") &&
    !a &&
    !t.isKeySetAndNotInherited("altAttribute") &&
    !r
  )
    return;
  let c = t.get("altAttribute") ?? he,
    l = Do(t.get("altAttribute")),
    p = C(i),
    u = Re(t, n, "altAttributeLocalized"),
    d = Re(t, n, "fillImageLocalized"),
    s = t.get("fillImagePositionX"),
    f = t.get("fillImagePositionY"),
    m = Fe(s) ? s : void 0,
    g = Fe(f) ? f : void 0;
  e.push({
    type: "FrameNode",
    keyPath: Yo(t.id),
    nodeId: t.id,
    scopeId: o,
    value: c,
    valueWordCount: b(c),
    hash: l,
    localizedValues: u,
    localizedValueStatuses: O(c, n, u, l, void 0, (y) => {
      let L = d[y.id];
      return L ? (L.hash !== p || L.needsReview ? "needsReview" : "done") : null;
    }),
    managedByPluginButUserEditable: !1,
    inherited: !r,
    supportsAlt: !0,
    image: i,
    imageHash: p,
    imageLocalizedValues: d,
    imageInherited: !a,
    positionX: m,
    positionY: g,
    supportsFocalPoint: !0,
  });
}
function ji(e, t, o, n) {
  if (!P.isOn("localizedLinks")) return;
  let i = Mn(t.get("link"));
  if (!Ce(i)) return;
  let a = i.url,
    r = C(a),
    c = Re(t, n, "linkLocalized");
  e.push({
    type: "nodeLink",
    keyPath: `${t.id}_linkLocalized`,
    nodeId: t.id,
    scopeId: o,
    value: a,
    valueWordCount: a ? 1 : 0,
    hash: r,
    localizedValues: c,
    localizedValueStatuses: O(a, n, c, r, void 0, (l) => (c[l.id] ? null : "done")),
    managedByPluginButUserEditable: !1,
    aiTranslationDisabled: !0,
  });
}
function Br(e, t, o, n) {
  let i = t.get("bindingType");
  if ((S(i === "variable" || i === "form", "unexpected form select binding type"), i === "form")) {
    let a = t.get("formSelectOptions");
    if (!a || a.length === 0) return;
    for (let r of a) {
      if (!r.title) continue;
      let c = se(r.titleLocalized, n),
        l = C(r.title),
        p = O(r.title, n, c, l);
      e.push({
        type: "FormSelectNode",
        keyPath: `${t.id}_${r.id}`,
        nodeId: t.id,
        optionId: r.id,
        scopeId: o.id,
        value: r.title,
        valueWordCount: b(r.title),
        hash: l,
        localizedValues: c,
        localizedValueStatuses: p,
        managedByPluginButUserEditable: !1,
      });
    }
  } else if (i === "variable") {
    let a = t.getSubfield("variableBinding", "id");
    if (!a || !Eo(o) || !Wo(o)) return;
    let r = o.getVariable(a);
    if (!r) return;
    let c = (l) => {
      let u = t.get(l) || wn[l],
        d = Re(t, n, `${l}Localized`),
        s = C(u);
      e.push({
        type: "formSelectGenericOption",
        keyPath: `${t.id}_${l}`,
        nodeId: t.id,
        key: l,
        scopeId: o.id,
        value: u,
        valueWordCount: b(u),
        hash: s,
        localizedValues: d,
        localizedValueStatuses: O(u, n, d, s),
        managedByPluginButUserEditable: !1,
      });
    };
    (wo(r, Ko(o)) && c("allItemsLabel"),
      r.type === "boolean" && (c("booleanTrueLabel"), c("booleanFalseLabel")));
    return;
  }
}
function _i(e) {
  return G(e) && "type" in e;
}
function Mt(e, t, o, n, i, a, r, c, l) {
  if (a.type === "array" && Array.isArray(a.value)) {
    if (r.type !== "array") return;
    for (let s of a.value)
      !_i(s) || !G(s) || !I(s.id) || Mt(e, t, o, n, i, s, r.control, c, Y(l, s.id));
    return;
  }
  if (a.type === "object" && G(a.value)) {
    if (r.type !== "object") return;
    for (let [s, f] of Object.entries(a.value)) {
      if (!_i(f)) continue;
      let m = r.controls[s];
      m && Mt(e, t, o, n, i, f, m, c, F(l, s));
    }
    return;
  }
  let p = be(t.id, i, l),
    u = se("valueLocalized" in a ? a.valueLocalized : void 0, n),
    d = {
      keyPath: p,
      controlPropKey: i,
      controlPropName: r.title || Se(i),
      ancestorControlKeyPath: l,
      nodeId: t.id,
      scopeId: o,
      localizedValues: u,
      managedByPluginButUserEditable: !1,
    };
  switch (a.type) {
    case "string": {
      if (
        (r.type === "string" && (r.preventLocalization || (r.optional && a.value === null))) ||
        (j(a.value) && ot(e, t, o, a.value, F(t.id, i), i, n), !I(a.value))
      )
        return;
      let s = C(a.value);
      e.push({
        ...d,
        type: "string",
        value: a.value,
        valueWordCount: b(a.value),
        hash: s,
        localizedValueStatuses: O(a.value, n, u, s),
      });
      return;
    }
    case "link": {
      if (
        !P.isOn("localizedLinks") ||
        (j(a.value) && ot(e, t, o, a.value, F(t.id, i), i, n), !Ce(a.value))
      )
        return;
      let s = a.value,
        f = C(s.url);
      e.push({
        ...d,
        type: "link",
        value: s.url,
        valueWordCount: s.url ? 1 : 0,
        hash: f,
        localizedValueStatuses: O(s.url, n, u, f, void 0, (m) => (u[m.id] ? null : "done")),
        aiTranslationDisabled: !0,
      });
      return;
    }
    case "richtext": {
      if ((r.type === "richtext" && r.preventLocalization) || !_(a.value)) return;
      let s = ne(a.value),
        f = Pr(a.value, c);
      e.push({
        ...d,
        type: "richtext",
        richTextValue: a.value,
        value: s,
        valueWordCount: b(s, !0),
        hash: f,
        localizedValueStatuses: O(s, n, to(u, a.value, f), f),
        contentType: void 0,
        isCollectionControlProp: !1,
      });
      return;
    }
    case "image": {
      if ((r.type !== "image" && r.type !== "responsiveimage") || !I(a.value)) return;
      let s = r.type === "responsiveimage",
        f = a.alt ?? he,
        m = C(f),
        g = C(a.value),
        y = s ? se(a.altLocalized, n) : xo,
        L = u;
      e.push({
        ...d,
        type: "image",
        value: f,
        valueWordCount: b(f),
        hash: m,
        localizedValues: y,
        localizedValueStatuses: O(f, n, y, m, void 0, (h) => {
          let z = L[h.id];
          return z ? (z.hash !== g || z.needsReview ? "needsReview" : "done") : null;
        }),
        supportsAlt: s,
        image: a.value,
        imageHash: g,
        imageLocalizedValues: L,
        supportsFocalPoint: s,
        positionX: s ? a.positionX : void 0,
        positionY: s ? a.positionY : void 0,
      });
      return;
    }
  }
}
function Ar(e, t, o, n, i, a, r) {
  let c = o.__class === "WebPageNode" ? Er(e, o) : o.get("codeComponentIdentifier");
  if (!c) return;
  let l = a.componentForIdentifier(c);
  if ((Ge(c, l !== null, () => [...o.keys()].filter(mt).map((s) => o.get(s)?.type)), !l)) return;
  let p = {};
  for (let s of o.keys()) mt(s) && (p[Fn(s)] = o.get(s));
  let u = l.properties,
    d = Je(u, p);
  for (let [s, f] of Object.entries(d)) {
    if (!f || !o.isKeySetAndNotInherited(`$control__${s}`)) continue;
    r?.addControlProp(f);
    let m = u[s];
    m && Mt(t, o, n, i, s, f, m, a);
  }
}
function Er(e, t) {
  let o = t.get("layoutTemplateIdentifierOverride");
  if (o !== null) return o ?? e.root.layoutTemplateIdentifier;
}
function Wr(e, t, o, n, i, a) {
  let r = n.get("webMetadata"),
    c = n.get("dataIdentifier"),
    l = t.dataForIdentifier(c);
  for (let p of ["title", "description"]) {
    let u = Re(n, i, `${p}Localized`);
    if (!r?.[p] && u === xo) continue;
    let d = r?.[p] ?? e.root.webMetadata?.[p] ?? "",
      s = C(d),
      f = {};
    for (let m of i) {
      let g = u[m.id];
      if (!g || !I(g.value) || !g.value) continue;
      let y = Go({ collectionData: l, componentLoader: t, type: "id", value: g.value });
      y && (f[m.id] = y);
    }
    a.push({
      type: "WebPageNode",
      keyPath: `${n.id}_${p}`,
      nodeId: n.id,
      scopeId: o,
      value: d,
      valueWordCount: b(d),
      hash: s,
      localizedValues: u,
      localizedValueStatuses: O(d, i, u, s, f),
      managedByPluginButUserEditable: !1,
      key: p,
      dataIdentifier: c,
      warnings: f,
    });
  }
}
function Zi(e, t, o, n, i, a, r, c, l) {
  if ((c?.(), n.__class === "CodeComponentNode")) {
    let p = n.get("codeComponentIdentifier");
    l?.addIdentifier(p);
  }
  if (n.get("customCursorType") === "component") {
    let p = n.get("customCursorSmartComponentId");
    l?.addSmartComponentId(p);
  }
  (n.__class === "WebPageNode" && Wr(e, t, o.id, n, i, a),
    n.__class === "RichTextNode" && Mr(a, e, n, o.id, i, r),
    n.__class === "FrameNode" && (wr(a, n, o.id, i), ji(a, n, o.id, i)),
    (n.__class === "SVGNode" || n.__class === "ShapeContainerNode") && ji(a, n, o.id, i),
    n.__class === "FormPlainTextInputNode" && Fr(a, n, o.id, i),
    n.__class === "FormSelectNode" && Br(a, n, o, i),
    (n.__class === "CodeComponentNode" || n.__class === "WebPageNode") &&
      Ar(e, a, n, o.id, i, t, l));
}
function wt(e, t) {
  let o = No(t).getRouteSegmentIdToRawPathMap(t).get(e.id);
  return o ? ze(o) : "Unknown";
}
function Or(e, t, o) {
  let n = t.root.homePageNodeId,
    i = n && (e.id === n || e.abTestingParentId === n),
    a;
  if (i) a = "Home";
  else {
    let r = Xn(t, e);
    if (!r) return "Unknown";
    let c = e.dataIdentifier;
    if (!c) a = ze(r);
    else {
      let l = o.dataForIdentifier(c);
      a = l ? ze(Yn(l, r)) : ze(r);
    }
  }
  if (e.abTestingParentId) {
    let r = e.resolveValue("name") || eo(o, e);
    return `${a} \xB7 ${r}`;
  }
  return e.hasAbTestingChildren(t) ? `${a} \xB7 Control` : a;
}
function Gr(e, t) {
  let o = t.getParent(e.id);
  return U(o) ? (jo(o, e) ?? "Unknown") : "Unknown";
}
function Hd(e, t, o) {
  if (te(e)) return "Site";
  if (J(e)) return wt(e, t);
  if (U(e)) return e.resolveValue("name") || "Unknown";
  if (M(e)) return Gr(e, t) || "Unknown";
  if (T(e)) return Or(e, t, o);
  if (Co(e)) return e.resolveValue("name") || "Unknown";
  if (le(e)) return e.resolveValue("name") || "Unknown";
  $(e, "Invalid localization scope");
}
function Ve(e, t) {
  return e === void 0 || !ye(e, t) ? t : e;
}
function Bt(e, t) {
  return !e || e.includes(t);
}
function Hr(e, t) {
  let o = new Set();
  for (let n of t.values()) Bt(n.includedLocaleIds, e) && o.add(n.collectionNodeId);
  return o;
}
function $r(e, t, o, n, i) {
  if (e.abTestingParentId) return i(e.abTestingParentId);
  if (!e.collectionIdentifier) return Bt(e.includedLocaleIds, t);
  let a = o.get(e.collectionIdentifier);
  return a ? n.has(a) : !0;
}
function Ur(e, t, o, n) {
  let i = new Map(),
    a = new Set(),
    r = (l) => {
      let p = i.get(l);
      if (p !== void 0) return p;
      if (a.has(l)) return !0;
      let u = t.get(l);
      if (!u) return !0;
      a.add(l);
      let d = $r(u, e, o, n, r);
      return (a.delete(l), i.set(l, d), d);
    },
    c = new Set();
  for (let l of t.keys()) r(l) && c.add(l);
  return c;
}
function jr(e, t, o) {
  return e ? (t.has(e) ? o.has(e) : !0) : !1;
}
function _r(e, t) {
  for (let o of e) if (t(o)) return !0;
  return !1;
}
function Kr(e, t, o) {
  let n = new Map();
  for (let [l, p] of e) {
    if (!p.parentRouteId) continue;
    let u = n.get(p.parentRouteId) ?? [];
    (u.push(l), n.set(p.parentRouteId, u));
  }
  let i = new Set(),
    a = new Map(),
    r = new Set(),
    c = (l) => {
      let p = a.get(l);
      if (p !== void 0) return p;
      if (r.has(l)) return !0;
      let u = e.get(l);
      if (!u) return !0;
      r.add(l);
      let d = n.get(l) ?? [],
        s = !u.webPageId && d.length === 0,
        f = jr(u.webPageId, t, o),
        m = _r(d, c);
      r.delete(l);
      let g = s || f || m;
      return (a.set(l, g), g && i.add(l), g);
    };
  for (let l of e.keys()) c(l);
  return i;
}
function Zr(e, t, o, n) {
  let i = n.get(e)?.get(t);
  return i || (o.get(e) ?? []);
}
function qr(e, t, o, n, i) {
  let a = new Set(),
    r = new Set(),
    c = Array.from(t);
  for (let l of i.values())
    if (Bt(l.includedLocaleIds, e))
      for (let p of l.componentIdsByLocaleId.get(e) ?? []) (r.add(p), c.push(p));
  for (; c.length > 0;) {
    let l = c.pop();
    if (!l || a.has(l)) continue;
    a.add(l);
    let p = Zr(l, e, o, n);
    for (let u of p) (r.add(u), !a.has(u) && c.push(u));
  }
  return r;
}
function Yr(e, t, o, n) {
  if (!n || !(n.hasTitleSource || n.hasDescriptionSource)) return !0;
  for (let a of e) {
    let r = t.get(a);
    if (
      !r ||
      (n.hasTitleSource && !r.titleOverrideLocaleIds.has(o)) ||
      (n.hasDescriptionSource && !r.descriptionOverrideLocaleIds.has(o))
    )
      return !0;
  }
  return !1;
}
function tt(e, t, o, n) {
  let i = Ve(o, n);
  e.set(t, i);
}
function Yi({
  localeIds: e,
  dependenciesByScopeId: t,
  localizedDependenciesByScopeId: o,
  pageFactsByPageId: n,
  collectionIdentifierById: i,
  itemFactsByItemId: a,
  routeFactsByRouteId: r,
  siteSettingsFact: c,
  previousResult: l,
}) {
  let p = new Map();
  for (let [v, B] of i) p.set(B, v);
  let u = new Map(),
    d = new Map(),
    s = new Map(),
    f = new Map(),
    m = new Map();
  for (let v of e) {
    let B = Hr(v, a),
      k = Ur(v, n, p, B),
      A = Kr(r, n, k),
      X = qr(v, k, t, o, a);
    (tt(d, v, l?.visibleCollectionIdsByLocaleId.get(v), B),
      tt(u, v, l?.visiblePageIdsByLocaleId.get(v), k),
      tt(s, v, l?.visibleRouteIdsByLocaleId.get(v), A),
      tt(f, v, l?.reachableDependencyIdsByLocaleId.get(v), X));
    let H = Yr(k, n, v, c);
    m.set(v, H);
  }
  let g = Ve(l?.localeIds, e),
    y = Ve(l?.visiblePageIdsByLocaleId, u),
    L = Ve(l?.visibleCollectionIdsByLocaleId, d),
    h = Ve(l?.visibleRouteIdsByLocaleId, s),
    z = Ve(l?.reachableDependencyIdsByLocaleId, f),
    R = Ve(l?.siteSettingsVisibleByLocaleId, m);
  return {
    localeIds: g,
    visiblePageIdsByLocaleId: y,
    visibleCollectionIdsByLocaleId: L,
    visibleRouteIdsByLocaleId: h,
    reachableDependencyIdsByLocaleId: z,
    siteSettingsVisibleByLocaleId: R,
  };
}
function Xr(e, t) {
  let o = e.get(t);
  if (o) return o;
  let n = new Set();
  return (e.set(t, n), n);
}
function Qi(e, t) {
  let o = e.get(t);
  if (o) return o;
  let n = new Map();
  return (e.set(t, n), n);
}
var At = class {
  constructor(t, o) {
    this.context = t;
    this.checkpoint = o;
  }
  context;
  checkpoint;
  directSmartComponentIds = new Set();
  unlocalizedSmartComponentIds = new Set();
  richTextComponentIdsByLocaleId = new Map();
  componentIdsByRichTextValueByVariant = new Map();
  addIdentifier(t) {
    if (!t) return;
    let o = ia(t);
    o && (this.directSmartComponentIds.add(o), this.unlocalizedSmartComponentIds.add(o));
  }
  addSmartComponentId(t) {
    I(t) && (this.directSmartComponentIds.add(t), this.unlocalizedSmartComponentIds.add(t));
  }
  addControlProp(t) {
    switch (t.type) {
      case "array":
        if (!Le(t.value)) return;
        for (let o of t.value) this.addControlProp(o);
        return;
      case "object":
        if (!G(t.value)) return;
        for (let o of Object.values(t.value)) this.addControlProp(o);
        return;
      case "customcursor":
        if (!Wn(t.value)) return;
        this.addSmartComponentId(t.value.customCursorSmartComponentId);
        return;
      case "richtext":
        this.addRichTextControlProp(t);
    }
  }
  addRichTextControlProp(t) {
    for (let [o, n] of this.context.routerLocaleById) {
      let a = Ro(n, t.valueLocalized)?.value,
        r = _(a),
        c = r ? a : t.value,
        l = r ? "collectionControlPropLocalized" : "collectionControlProp",
        p = this.getRichTextComponentIds(c, l);
      if (!p) continue;
      let u = this.getComponentIdsForLocale(o);
      for (let d of p) (u.add(d), this.directSmartComponentIds.add(d));
    }
  }
  getComponentIdsForLocale(t) {
    let o = this.richTextComponentIdsByLocaleId.get(t);
    if (o) return o;
    let n = new Set();
    return (this.richTextComponentIdsByLocaleId.set(t, n), n);
  }
  getRichTextComponentIds(t, o) {
    if (!_(t)) return;
    let n = Qi(this.componentIdsByRichTextValueByVariant, o),
      i = n.get(t);
    if (i) return i;
    this.checkpoint?.();
    let a = aa(t, o);
    return (n.set(t, a), a);
  }
};
function su() {
  return {
    facts: {
      dependenciesByScopeId: new Map(),
      localizedDependenciesByScopeId: new Map(),
      cmsDependenciesByItemId: new Map(),
      pageFactsByPageId: new Map(),
      collectionIdentifierById: new Map(),
      routeFactsByRouteId: new Map(),
      siteSettingsFact: void 0,
    },
    allScopesCached: !0,
  };
}
function ea(e, t) {
  let o = we(e, "includeDrafts"),
    n = new Map();
  for (let i of o) n.set(i.id, i);
  return { collection: t, routerLocales: o, routerLocaleById: n };
}
function Et(e, t) {
  if (e) return new At(e, t);
}
function Wt(e) {
  if (e) return Array.from(e.directSmartComponentIds);
}
function Ot(e) {
  if (!e) return;
  let t = new Map();
  for (let o of e.context.routerLocaleById.keys()) {
    let n = new Set(e.unlocalizedSmartComponentIds),
      i = e.richTextComponentIdsByLocaleId.get(o);
    for (let a of i ?? []) n.add(a);
    t.set(o, Array.from(n));
  }
  return t;
}
function Xi(e, t, o) {
  if (!T(t) || !Me(t)) return o;
  let n = ht(t.layoutTemplateIdentifier);
  if (!n) return o;
  let i = e.get(n);
  return !le(i) || o.includes(n) ? o : [...o, n];
}
function ao(e, t, o, n, i, a = t, r) {
  let c = i?.collection;
  if (!c || !o) return;
  let l = c.facts,
    p = Xi(e, t, o);
  if ((l.dependenciesByScopeId.set(t.id, p), n)) {
    let d = new Map();
    for (let [s, f] of n) d.set(s, Xi(e, t, f));
    l.localizedDependenciesByScopeId.set(t.id, d);
  }
  if (!T(t)) return;
  let u = Jr(e, t, a, i, r);
  return (l.pageFactsByPageId.set(t.id, u), u);
}
function Jr(e, t, o, n, i) {
  if (i) return i;
  let a = Be(e, o);
  return Qr(t, a, n);
}
function Ji(e, t, o) {
  let n = new Set();
  for (let [i, a] of o.routerLocaleById) {
    let c = Ro(a, t)?.value != null;
    (!e && !c) || n.add(i);
  }
  return n;
}
function Qr(e, t, o) {
  return {
    includedLocaleIds: t,
    abTestingParentId: e.abTestingParentId,
    collectionIdentifier: e.dataIdentifier,
    titleOverrideLocaleIds: Ji(e.webMetadata?.title !== void 0, e.titleLocalized, o),
    descriptionOverrideLocaleIds: Ji(
      e.webMetadata?.description !== void 0,
      e.descriptionLocalized,
      o
    ),
  };
}
function oa(e, t) {
  t && t.facts.collectionIdentifierById.set(e.id, e.instanceIdentifier);
}
function ta(e, t, o) {
  if (!o) return;
  let n = { parentRouteId: t, webPageId: e.webPageId };
  o.facts.routeFactsByRouteId.set(e.id, n);
}
function na(e, t) {
  t &&
    (t.facts.siteSettingsFact = {
      hasTitleSource: !!(e.webMetadata?.title || e.titleLocalized),
      hasDescriptionSource: !!(e.webMetadata?.description || e.descriptionLocalized),
    });
}
function ee(e, t) {
  return e === void 0 || !ye(e, t) ? t : e;
}
function ia(e) {
  return ht(e, "canvasComponent") ?? void 0;
}
function aa(e, t) {
  let o = mi(e, t),
    n = new Set(o.customCursorSmartComponentIds);
  for (let i of o.moduleIdentifiers) {
    let a = ia(i);
    a && n.add(a);
  }
  return n;
}
function el(e, t) {
  if (e?.type === "richtext" && _(e.value)) return e.value;
  if (_(t.initialValue)) return t.initialValue;
}
function ol(e, t, o, n, i) {
  function a(c, l) {
    if (l.type !== "richtext") return;
    let p = el(c, l);
    if (p)
      for (let u of o) {
        let d = n.get(u.id),
          s = c?.type === "richtext" ? c.valueLocalized : void 0,
          m = Ro(d, s)?.value,
          g = _(m),
          y = g ? m : p,
          L = g ? "collectionControlPropLocalized" : "collectionControlProp";
        i(u.id, y, L);
      }
  }
  function r(c, l) {
    if (l.type === "array") {
      if (c?.type !== "array" || Q(c.value)) return;
      for (let p of c.value)
        if (Fo(p) && p.value) for (let u of l.itemVariables) Ie(u) && r(p.value[u.id], u);
      return;
    }
    a(c, l);
  }
  for (let c of e.variables) Ie(c) && r(t.getControlProp(c.id), c);
}
function tl(e, t, o, n) {
  let i = new Map(),
    a = new Map();
  ol(e, t, o, n.routerLocaleById, (c, l, p) => {
    let u = Xr(a, c),
      d = Qi(i, p),
      s = d.get(l),
      f = n.previousDependencies?.componentIdsByRichTextValueByVariant.get(p)?.get(l),
      m = s ?? f;
    m || n.checkpoint?.();
    let g = m ?? aa(l, p);
    d.set(l, g);
    for (let y of g) u.add(y);
  });
  let r = new Map();
  for (let c of o) r.set(c.id, a.get(c.id) ?? new Set());
  return {
    componentIdsByRichTextValueByVariant: ee(
      n.previousDependencies?.componentIdsByRichTextValueByVariant,
      i
    ),
    componentIdsByLocaleId: ee(n.previousDependencies?.componentIdsByLocaleId, r),
  };
}
function ra(e, t, o, n, i) {
  let a = tl(e, t, o, i),
    r = i.previousDependencies;
  if (r) {
    let c = r.collectionNodeId === e.id,
      l = ye(r.includedLocaleIds, n),
      p = r.componentIdsByRichTextValueByVariant === a.componentIdsByRichTextValueByVariant,
      u = r.componentIdsByLocaleId === a.componentIdsByLocaleId;
    if (c && l && p && u) return r;
  }
  return { includedLocaleIds: n, collectionNodeId: e.id, ...a };
}
function du({ locales: e, facts: t, previousUsage: o }) {
  let n = ee(
      o?.localeIds,
      e.map((f) => f.id)
    ),
    i = ee(o?.dependenciesByScopeId, t.dependenciesByScopeId),
    a = ee(o?.localizedDependenciesByScopeId, t.localizedDependenciesByScopeId),
    r = ee(o?.cmsDependenciesByItemId, t.cmsDependenciesByItemId),
    c = ee(o?.pageFactsByPageId, t.pageFactsByPageId),
    l = ee(o?.collectionIdentifierById, t.collectionIdentifierById),
    p = ee(o?.routeFactsByRouteId, t.routeFactsByRouteId),
    u = ee(o?.siteSettingsFact, t.siteSettingsFact);
  if (
    o?.localeIds === n &&
    o.dependenciesByScopeId === i &&
    o.localizedDependenciesByScopeId === a &&
    o.cmsDependenciesByItemId === r &&
    o.pageFactsByPageId === c &&
    o.collectionIdentifierById === l &&
    o.routeFactsByRouteId === p &&
    o.siteSettingsFact === u
  )
    return o;
  let s = Yi({
    localeIds: n,
    dependenciesByScopeId: i,
    localizedDependenciesByScopeId: a,
    pageFactsByPageId: c,
    collectionIdentifierById: l,
    itemFactsByItemId: r,
    routeFactsByRouteId: p,
    siteSettingsFact: u,
    previousResult: o?.visibility,
  });
  return {
    localeIds: n,
    dependenciesByScopeId: i,
    localizedDependenciesByScopeId: a,
    cmsDependenciesByItemId: r,
    pageFactsByPageId: c,
    collectionIdentifierById: l,
    routeFactsByRouteId: p,
    siteSettingsFact: u,
    visibility: s,
    reachableDependencyIdsByLocaleId: s.reachableDependencyIdsByLocaleId,
  };
}
function la(e) {
  return e ? (e.abTestingParentId ? !0 : e.collectionIdentifier !== void 0) : !1;
}
function nl(e, t, o, n) {
  let i = o.visibility;
  switch (e.groupType) {
    case "component":
    case "template":
      return !i.reachableDependencyIdsByLocaleId.get(t)?.has(e.nodeId);
    case "collection":
      return !i.visibleCollectionIdsByLocaleId.get(t)?.has(e.nodeId);
    case "settings":
      return e.nodeId !== n ? !1 : i.siteSettingsVisibleByLocaleId.get(t) === !1;
    case "page": {
      let a = o.pageFactsByPageId.get(e.nodeId);
      return la(a) ? !i.visiblePageIdsByLocaleId.get(t)?.has(e.nodeId) : il(e.nodeId, t, o);
    }
    case "collectionItem":
      return !1;
  }
}
function il(e, t, o) {
  return o && o.routeFactsByRouteId.has(e)
    ? !o.visibility.visibleRouteIdsByLocaleId.get(t)?.has(e)
    : !1;
}
function uu(e, t, o, n) {
  return e.map((i) => {
    let a = t.localeIds.filter((f) => nl(i, f, t, n)),
      r = o?.get(i.nodeId)?.derivedExcludedLocaleIds,
      c = ee(r, a),
      l = c.length > 0 ? c : void 0,
      p = t.pageFactsByPageId.get(i.nodeId),
      u = i.groupType === "page" && la(p),
      d = u ? !1 : i.supportsLocaleVisibility,
      s = u ? void 0 : i.includedLocaleIds;
    return i.derivedExcludedLocaleIds === l &&
      i.supportsLocaleVisibility === d &&
      i.includedLocaleIds === s
      ? i
      : { ...i, supportsLocaleVisibility: d, includedLocaleIds: s, derivedExcludedLocaleIds: l };
  });
}
function ca(e, t) {
  return e.hash !== t || e.needsReview ? "needsReview" : "done";
}
function al(e) {
  return fn(e) || e === "" || _o(e);
}
function Gt(e, t, o) {
  return t ? ca(t, o) : al(e) ? "done" : "new";
}
function sa(e) {
  let t = Ae(e) === "rich-text" ? ne(Ee(e)) : de(e);
  return C(t);
}
function nt() {
  return P.isOn("fastLocalization");
}
var $p = ["new", "needsReview", "done"],
  ll = "controlPropKey";
function Up(e) {
  return ll in e;
}
function jp(e) {
  return "groups" in e;
}
function cl(e) {
  return e.cmsLocalizationDependencies !== void 0;
}
function da(e, t) {
  return !(
    !e.directSmartComponentIds ||
    !e.localizedSmartComponentIdsByLocaleId ||
    (T(t) && !e.pageVisibilityFact)
  );
}
function sl(e, t, o) {
  return o ? (M(t) ? cl(e) : io(t) || J(t) ? da(e, t) : U(t) || te(t) ? !0 : $(t)) : !0;
}
var ro = Symbol("ignoreWebPageCollection"),
  dl = "collectionNodeId";
function _p(e) {
  return dl in e;
}
var ul = { string: !0, richtext: !0, image: !0, enum: !0, link: !0, slug: !0 };
function pl(e) {
  return e in ul;
}
function fa(e) {
  return Ie(e) && pl(e.type);
}
var fl = { string: !0, richtext: !0, image: !0, link: !0 };
function ma(e) {
  return e in fl;
}
function ya(e) {
  return e
    ? e.type === "richtext"
      ? !0
      : e.type === "RichTextNode"
        ? e.textType === "rich-text"
        : !1
    : !1;
}
function ga(e) {
  return e?.type === "richtext";
}
function Kp(e) {
  return e.type === "richtext" || e.type === "RichTextNode"
    ? typeof e.richTextValue == "string"
    : !1;
}
function rt(e) {
  return e ? e.type === "image" || e.type === "FrameNode" : !1;
}
function Zp(e) {
  return e ? e.type === "nodeLink" || e.type === "link" : !1;
}
function qp(e) {
  return e ? e.type === "RootNode" || e.type === "WebPageNode" : !1;
}
function Yp(e) {
  return e?.type === "slug" || ml(e);
}
function ml(e) {
  return e?.type === "RouteSegmentNode";
}
function Xp(e, t) {
  if (!e) return !1;
  if (
    e.value.includes(`
`)
  )
    return !0;
  let o = e.localizedValues[t.id];
  return Ye(o)
    ? !!Lt(o, { preserveNewLines: !0 }).includes(`
`)
    : !1;
}
function D(e, t, o, n, i, a) {
  return Object.fromEntries(
    t.map((r) => {
      let c = o[r.id];
      if (i?.[r.id]) return [r.id, "warning"];
      if (a) {
        let l = a(r);
        if (l) return [r.id, l];
      }
      return [r.id, Gt(e, c, n)];
    })
  );
}
function jt(e) {
  return (t) => (e[t.id] ? null : "done");
}
function _t(e, t, o) {
  return (n) => {
    if (I(e) && t) {
      let i = t[n.id];
      if (i) return Gt(e, i, o);
    }
    return null;
  };
}
var x = {};
Object.freeze(x);
function yl(e, t, o, n, i, a, r) {
  let c = (l, p, u) => {
    if (q(p) || !I(p) || (p.length === 0 && !u)) return;
    let d = C(p),
      s = u ?? x,
      f = D(p, a, s, d);
    r.push({
      type: e.name,
      transformId: e.id,
      keyPath: F(t, l),
      nodeId: i.id,
      scopeId: n.id,
      property: l,
      value: p,
      controlPropKey: o,
      controlPropName: void 0,
      ancestorControlKeyPath: void 0,
      valueWordCount: b(p),
      hash: d,
      localizedValues: s,
      localizedValueStatuses: f,
      managedByPluginButUserEditable: !1,
    });
  };
  (c("truthy", e.truthy, e.truthyLocalized),
    c("falsy", e.falsy, e.falsyLocalized),
    e.fallback && c("fallback", e.fallback.value, e.fallback.valueLocalized));
}
function gl(e, t, o, n, i, a, r, c) {
  if (t.outputType !== "string") return;
  for (let d of t.cases) {
    if (To(e) && e.startValue.id === Ao) break;
    if (q(d.to) || !I(d.to) || (d.to.length === 0 && !d.toLocalized)) continue;
    let s = C(d.to),
      f = d.toLocalized ?? x,
      m = D(d.to, r, f, s),
      g = F(o, "cases");
    c.push({
      type: "convertFromEnum",
      transformId: t.id,
      keyPath: Y(g, d.id),
      nodeId: a.id,
      scopeId: i.id,
      caseId: d.id,
      isDefaultCase: !1,
      value: d.to,
      ancestorControlKeyPath: void 0,
      controlPropKey: n,
      controlPropName: void 0,
      valueWordCount: b(d.to),
      hash: s,
      localizedValues: f,
      localizedValueStatuses: m,
      managedByPluginButUserEditable: !1,
    });
  }
  if (!t.default || q(t.default) || !I(t.default)) return;
  let l = C(t.default),
    p = t.defaultLocalized ?? x,
    u = D(t.default, r, p, l);
  c.push({
    type: "convertFromEnum",
    transformId: t.id,
    keyPath: F(o, "default"),
    nodeId: a.id,
    scopeId: i.id,
    caseId: null,
    isDefaultCase: !0,
    ancestorControlKeyPath: void 0,
    value: t.default,
    controlPropKey: n,
    controlPropName: void 0,
    valueWordCount: b(t.default),
    hash: l,
    localizedValues: p,
    localizedValueStatuses: u,
    managedByPluginButUserEditable: !1,
  });
}
function it(e, t, o, n, i, a, r) {
  if (!(!zo(o.outputType) || o.outputType !== "string")) {
    for (let c of o.transforms)
      if (Io(c))
        switch (c.name) {
          case "convertFromEnum": {
            gl(o, c, n, i, e, t, a, r);
            continue;
          }
          case "convertFromBoolean": {
            yl(c, n, i, e, t, a, r);
            continue;
          }
          case "prefix":
          case "suffix": {
            if (q(c.value) || (c.value.length === 0 && !c.valueLocalized)) continue;
            let l = C(c.value),
              p = c.valueLocalized ?? x,
              u = D(c.value, a, p, l);
            r.push({
              type: c.name,
              transformId: c.id,
              keyPath: Y(n, c.id),
              controlPropKey: i,
              controlPropName: void 0,
              ancestorControlKeyPath: void 0,
              nodeId: t.id,
              scopeId: e.id,
              value: c.value,
              valueWordCount: b(c.value),
              hash: l,
              localizedValues: p,
              localizedValueStatuses: u,
              managedByPluginButUserEditable: !1,
            });
            continue;
          }
          default:
        }
  }
}
function Ll(e, t, o, n, i, a) {
  if (j(o.textContent)) {
    if (!W(e, o, "textContent")) return;
    it(t, o, o.textContent, o.id, o.id, n, i);
    return;
  }
  if (Q(o.htmlContent) || Q(o.textContent)) return;
  let r = W(e, o, "html"),
    c = W(e, o, "htmlLocalized");
  if (!r && !c) return;
  let l = o.html,
    p = de(l),
    u = Ae(l),
    d = a === "canvasHtmlAsTextContentIfPossible" ? u : "rich-text",
    s = Ee(l),
    f = d === "rich-text" ? ne(s) : p;
  if (d === "text" && !c && xn(o)) {
    let L = e.get(o.originalid);
    if (L && de(L.html) === p) return;
  }
  let m = sa(l),
    g = o.htmlLocalized ?? x,
    y = D(f, n, g, m);
  i.push({
    type: "RichTextNode",
    keyPath: qo(o.id),
    nodeId: o.id,
    scopeId: t.id,
    value: f,
    richTextValue: s,
    valueWordCount: b(f, !0),
    textType: d,
    hash: m,
    localizedValues: g,
    localizedValueStatuses: y,
    managedByPluginButUserEditable: !1,
    inherited: !c,
  });
}
function ua(e) {
  if (te(e)) return "RootNode";
  if (T(e)) return "WebPageNode";
  $(e);
}
function pa(e, t, o, n) {
  let i = {};
  for (let a of t) {
    let r = o[a.id];
    if (!r || !I(r.value) || !r.value) continue;
    let c = Go({ collectionData: n, componentLoader: e, type: "id", value: r.value });
    c && (i[a.id] = c);
  }
  return i;
}
function La(e, t, o, n, i, a) {
  let r = null;
  if (
    (T(n) && (r = t.dataForIdentifier(n.dataIdentifier)), n.webMetadata?.title || n.titleLocalized)
  ) {
    let c = n.webMetadata?.title ?? e.root.webMetadata?.title ?? "",
      l = C(c),
      p = n.titleLocalized ?? x,
      u = pa(t, i, p, r),
      d = D(c, i, p, l, u);
    a.push({
      type: ua(n),
      keyPath: `${n.id}_title`,
      nodeId: n.id,
      scopeId: o.id,
      value: c,
      valueWordCount: b(c),
      hash: l,
      localizedValues: p,
      localizedValueStatuses: d,
      managedByPluginButUserEditable: !1,
      key: "title",
      dataIdentifier: yt(n) ? n.dataIdentifier : void 0,
      warnings: u,
    });
  }
  if (n.webMetadata?.description || n.descriptionLocalized) {
    let c = n.webMetadata?.description ?? e.root.webMetadata?.description ?? "",
      l = C(c),
      p = n.descriptionLocalized ?? x,
      u = pa(t, i, p, r),
      d = D(c, i, p, l, u);
    a.push({
      type: ua(n),
      keyPath: `${n.id}_description`,
      nodeId: n.id,
      scopeId: o.id,
      value: c,
      valueWordCount: b(c),
      hash: l,
      localizedValues: p,
      localizedValueStatuses: d,
      managedByPluginButUserEditable: !1,
      key: "description",
      dataIdentifier: yt(n) ? n.dataIdentifier : void 0,
      warnings: u,
    });
  }
}
function Sl(e, t, o, n, i) {
  if (!Dn(o) || !I(o.fillImage) || o.fillImage.length === 0) return;
  let a = W(e, o, "fillImage"),
    r = W(e, o, "fillImageLocalized"),
    c = W(e, o, "altAttribute"),
    l = W(e, o, "altAttributeLocalized");
  if (!a && !r && !c && !l) return;
  let p = o.altAttribute ?? he,
    u = Do(o.altAttribute),
    d = o.altAttributeLocalized ?? x,
    s = o.fillImage,
    f = C(s),
    m = o.fillImageLocalized ?? x,
    g = D(p, n, d, u, void 0, _t(s, m, f));
  i.push({
    type: "FrameNode",
    keyPath: Yo(o.id),
    nodeId: o.id,
    scopeId: t.id,
    value: p,
    valueWordCount: b(p),
    hash: u,
    localizedValues: d,
    localizedValueStatuses: g,
    managedByPluginButUserEditable: !1,
    inherited: !l,
    supportsAlt: !0,
    image: s,
    imageHash: f,
    imageLocalizedValues: m,
    imageInherited: !r,
    positionX: Fe(o.fillImagePositionX) ? o.fillImagePositionX : void 0,
    positionY: Fe(o.fillImagePositionY) ? o.fillImagePositionY : void 0,
    supportsFocalPoint: !0,
  });
}
function Sa(e, t, o, n) {
  if (!P.isOn("localizedLinks")) return;
  let i = t.getLink();
  if (!Ce(i)) return;
  let a = i.url,
    r = C(a),
    c = t.linkLocalized ?? x,
    l = D(a, o, c, r, void 0, jt(c));
  n.push({
    type: "nodeLink",
    keyPath: `${t.id}_linkLocalized`,
    nodeId: t.id,
    scopeId: e.id,
    value: a,
    valueWordCount: a ? 1 : 0,
    hash: r,
    localizedValues: c,
    localizedValueStatuses: l,
    managedByPluginButUserEditable: !1,
    aiTranslationDisabled: !0,
  });
}
function Cl(e, t, o, n, i) {
  (Sl(e, t, o, n, i), Sa(t, o, n, i));
}
function at(e) {
  return !!(ma(e) || e === "array" || e === "object");
}
function hl(e) {
  if (T(e) && Me(e)) return e.layoutTemplateIdentifier;
  if (Z(e)) return e.codeComponentIdentifier;
}
function Ca(e, t) {
  let o = Uo(e);
  if (!I(e) || !e.includes("data-module-identifier")) return o;
  let n = et(e, t);
  return n.length === 0 ? o : C(`${o}:${n}`);
}
function Il(e, t, o, n, i, a, r) {
  let c = hl(n);
  if (!c) return;
  let l = t.componentForIdentifier(c);
  if ((Ge(c, l !== null, () => Object.values(n.getRawControlProps()).map((d) => d?.type)), !l))
    return;
  let p = n.getControlProps(l.properties);
  function u(d, s, f, m) {
    let g = s.type;
    if (g === "array" && Le(s.value)) {
      if (f.type !== "array") return;
      let y = f.control;
      for (let L of s.value) {
        if (!at(L.type)) continue;
        let h = Y(m, L.id);
        u(d, L, y, h);
      }
    }
    if (g === "object" && G(s.value)) {
      if (f.type !== "object") return;
      for (let y in s.value) {
        let L = s.value[y];
        if (!L || !at(L.type)) continue;
        let h = F(m, y),
          z = f.controls[y];
        z && u(d, L, z, h);
      }
    }
    if (ma(g))
      switch (g) {
        case "string": {
          if (
            !W(e, n, ce(d)) ||
            (f.type === "string" && (f.preventLocalization || (f.optional && pn(s.value)))) ||
            (j(s.value) && it(o, n, s.value, F(n.id, d), d, i, a), !I(s.value))
          )
            break;
          let y = s.value,
            L = C(y),
            h = s.valueLocalized ?? x,
            z = D(y, i, h, L);
          a.push({
            type: "string",
            keyPath: be(n.id, d, m),
            controlPropKey: d,
            controlPropName: f.title || Se(d),
            ancestorControlKeyPath: m,
            nodeId: n.id,
            scopeId: o.id,
            value: y,
            valueWordCount: b(y),
            hash: L,
            localizedValues: h,
            localizedValueStatuses: z,
            managedByPluginButUserEditable: !1,
          });
          break;
        }
        case "link": {
          if (
            !P.isOn("localizedLinks") ||
            !W(e, n, ce(d)) ||
            (j(s.value) && it(o, n, s.value, F(n.id, d), d, i, a), !Ce(s.value))
          )
            break;
          let y = s.value.url,
            L = C(y),
            h = s.valueLocalized ?? x,
            z = D(y, i, h, L, void 0, jt(h));
          a.push({
            type: "link",
            keyPath: be(n.id, d, m),
            controlPropKey: d,
            controlPropName: f.title || Se(d),
            ancestorControlKeyPath: m,
            nodeId: n.id,
            scopeId: o.id,
            value: y,
            valueWordCount: y ? 1 : 0,
            hash: L,
            localizedValues: h,
            localizedValueStatuses: z,
            managedByPluginButUserEditable: !1,
            aiTranslationDisabled: !0,
          });
          break;
        }
        case "richtext": {
          if (
            g !== "richtext" ||
            !_(s.value) ||
            (f.type === "richtext" && f.preventLocalization) ||
            !W(e, n, ce(d))
          )
            break;
          let y = s.value,
            L = ne(y),
            h = Ca(y, t),
            z = s.valueLocalized ?? x,
            R = D(L, i, to(z, y, h), h);
          a.push({
            type: "richtext",
            keyPath: be(n.id, d, m),
            controlPropKey: d,
            controlPropName: f.title || Se(d),
            ancestorControlKeyPath: m,
            nodeId: n.id,
            scopeId: o.id,
            richTextValue: y,
            value: L,
            valueWordCount: b(L, !0),
            hash: h,
            localizedValues: z,
            localizedValueStatuses: R,
            managedByPluginButUserEditable: !1,
            contentType: void 0,
            isCollectionControlProp: !1,
          });
          break;
        }
        case "image": {
          if (
            !s ||
            s.type !== "image" ||
            !I(s.value) ||
            (f.type !== "responsiveimage" && f.type !== "image") ||
            !W(e, n, ce(d))
          )
            break;
          let y = f.type === "responsiveimage",
            L = s.alt ?? he,
            h = C(L),
            z = y ? (s.altLocalized ?? x) : x,
            R = s.value,
            v = C(R),
            B = s.valueLocalized ?? x,
            k = D(L, i, z, h, void 0, _t(R, B, v)),
            A = f.type === "responsiveimage";
          a.push({
            type: "image",
            keyPath: be(n.id, d, m),
            controlPropKey: d,
            controlPropName: f.title || Se(d),
            ancestorControlKeyPath: m,
            nodeId: n.id,
            scopeId: o.id,
            value: L,
            valueWordCount: b(L),
            hash: h,
            localizedValues: z,
            localizedValueStatuses: k,
            managedByPluginButUserEditable: !1,
            supportsAlt: y,
            image: R,
            imageHash: v,
            imageLocalizedValues: B,
            supportsFocalPoint: A,
            positionX: A ? s.positionX : void 0,
            positionY: A ? s.positionY : void 0,
          });
          break;
        }
        default:
      }
  }
  for (let d in p) {
    let s = p[d];
    if (!s) continue;
    r && W(e, n, ce(d)) && r.addControlProp(s);
    let f = l.properties[d];
    f && u(d, s, f);
  }
}
function zl(e, t, o, n) {
  switch (t.bindingType) {
    case "form": {
      let i = t.formSelectOptions;
      if (!i || i.length === 0) return;
      for (let a of i) {
        let r = a.title;
        if (!r) continue;
        let c = a.titleLocalized ?? x,
          l = C(r),
          p = D(r, o, c, l);
        n.push({
          type: "FormSelectNode",
          keyPath: `${t.id}_${a.id}`,
          nodeId: t.id,
          optionId: a.id,
          scopeId: e.id,
          value: r,
          valueWordCount: b(r),
          hash: l,
          localizedValues: c,
          localizedValueStatuses: p,
          managedByPluginButUserEditable: !1,
        });
      }
      break;
    }
    case "variable": {
      if (!t.variableBinding || !Eo(e) || !Wo(e)) return;
      let i = e.getVariable(t.variableBinding.id);
      if (!i) return;
      (wo(i, Ko(e)) &&
        n.push(Ht(t, e, o, "allItemsLabel", t.allItemsLabelWithDefault, t.allItemsLabelLocalized)),
        i.type === "boolean" &&
          (n.push(
            Ht(
              t,
              e,
              o,
              "booleanTrueLabel",
              t.booleanTrueLabelWithDefault,
              t.booleanTrueLabelLocalized
            )
          ),
          n.push(
            Ht(
              t,
              e,
              o,
              "booleanFalseLabel",
              t.booleanFalseLabelWithDefault,
              t.booleanFalseLabelLocalized
            )
          )));
      break;
    }
    default:
      $(t.bindingType);
  }
}
function Ht(e, t, o, n, i, a) {
  let r = a ?? x,
    c = C(i),
    l = D(i, o, r, c);
  return {
    type: "formSelectGenericOption",
    keyPath: `${e.id}_${n}`,
    nodeId: e.id,
    key: n,
    scopeId: t.id,
    value: i,
    valueWordCount: b(i),
    hash: c,
    localizedValues: r,
    localizedValueStatuses: l,
    managedByPluginButUserEditable: !1,
  };
}
function Tl(e, t, o, n, i) {
  let a = `${o.id}_placeholder`;
  if (Q(o.formInputPlaceholder)) {
    if (q(o.formInputPlaceholder) || !W(e, o, "formInputPlaceholder")) return;
    it(t, o, o.formInputPlaceholder, a, o.id, n, i);
    return;
  }
  if (!o.formInputPlaceholder || !W(e, o, "formInputPlaceholder")) return;
  let r = C(o.formInputPlaceholder),
    c = o.formInputPlaceholderLocalized ?? x;
  i.push({
    keyPath: a,
    type: "FormPlainTextInputNode",
    nodeId: o.id,
    scopeId: t.id,
    value: o.formInputPlaceholder,
    valueWordCount: b(o.formInputPlaceholder),
    hash: C(o.formInputPlaceholder),
    localizedValues: c,
    localizedValueStatuses: D(o.formInputPlaceholder, n, c, r),
    managedByPluginButUserEditable: !1,
  });
}
function bl(e, t, o, n, i, a, r, c, l) {
  (c?.(),
    Z(n) && l?.addIdentifier(n.codeComponentIdentifier),
    On(n) &&
      n.customCursorType === "component" &&
      l?.addSmartComponentId(n.customCursorSmartComponentId),
    T(n) && La(e, t, o, n, i, a),
    Pe(n) && Ll(e, o, n, i, a, r),
    (Z(n) || T(n)) && Il(e, t, o, n, i, a, l),
    Lo(n) && Cl(e, o, n, i, a),
    (Cn(n) || hn(n)) && Sa(o, n, i, a),
    Ke(n) && Tl(e, o, n, i, a),
    Ze(n) && zl(o, n, i, a));
}
function ha(e, t) {
  return t
    ? `r:${e.cache.localizationSourceRevision}-${t.cache.localizationSourceRevision}`
    : `r:${e.cache.localizationSourceRevision}`;
}
function Ia(e, t) {
  return t
    ? `t:${e.cache.localizationTranslationRevision}-${t.cache.localizationTranslationRevision}`
    : `t:${e.cache.localizationTranslationRevision}`;
}
function za(e, t) {
  return t ? `u:${e.update}-${t.update}` : `u:${e.update}`;
}
function Ta(e) {
  return e !== "canvasHtmlAsHtml";
}
function ba(e) {
  return nt() && !te(e);
}
function va(e) {
  return P.isOn("localizationProgressSummaries") && e.isDataTree();
}
function lt(e) {
  return !P.isOn("localizationProgressSummaries") && e.isDataTree();
}
function vl(e, t) {
  let o = e.get("originalid");
  if (!o || (t.add(o), gn(e.id, o))) return;
  let n = e.get("replicaInfo")?.inheritsFrom;
  n && t.add(n);
}
function xl(e, t) {
  ke(e) && (t.add(e.originalid), vn(e) && t.add(e.replicaInfo.inheritsFrom));
}
function Rl(e, t, o) {
  if (!o) return [];
  let n = new Set();
  for (let i of o) {
    let a = e.getCanvasScopeNodeFor(e.get(i));
    a && a.id !== t.id && n.add(a.id);
  }
  return Array.from(n);
}
function xa(e, t) {
  let o = [];
  for (let n of t) {
    let i = e.get(n);
    if (!i) return;
    o.push(`${i.cache.localizationSourceRevision}:${i.cache.localizationTranslationRevision}`);
  }
  return o.join(",");
}
function ct(e, t) {
  return Array.from(t, (o) => [o, e.getDefinitionHash(o)]);
}
var Vl = [];
function ie(e, t) {
  if (e) for (let [o, n] of t) e.set(o, n);
}
var K = sn("localization:cache");
function Nl(e, t, o, n, i, a, r, c, l, p, u, d) {
  if (!Ta(p) || t.mutable || o?.mutable) return;
  let s = t.cache.localizationSourceGroup;
  if (!s) return;
  let f = ba(t),
    m,
    g;
  if (
    (f
      ? ((m = s.sourceRevision !== ha(t, o) || s.translationRevision !== Ia(t, o)),
        (g = s.parentSourceOwnRevision !== r))
      : ((m = s.sourceRevision !== za(t, o)), (g = s.parentVariables !== a)),
    m)
  ) {
    K.trace("Stale cache for", t.id, "->", "revision changed");
    return;
  }
  if (g) {
    K.trace("Stale cache for", t.id, "->", "parent revision / variables changed");
    return;
  }
  if (s.locales !== n) {
    K.trace("Stale cache for", t.id, "->", "Locales changed");
    return;
  }
  if (!Xe(s.subGroups, c)) {
    K.trace("Stale cache for", t.id, "->", "Subgroups changed");
    return;
  }
  if (!Xe(s.settings, l)) {
    K.trace("Stale cache for", t.id, "->", "Settings changed");
    return;
  }
  if (s.duplicateSlugLocaleIds !== u) {
    K.trace("Stale cache for", t.id, "->", "Duplicate slugs changed");
    return;
  }
  if (s.isNotFoundPage !== d) {
    K.trace("Stale cache for", t.id, "->", "Custom 404 page changed");
    return;
  }
  for (let [y, L] of s.loaderDependencies)
    if (i.getDefinitionHash(y) !== L) {
      K.trace("Stale cache for", t.id, "->", "Component dependency", y, "changed");
      return;
    }
  if (Qe(e, t)) {
    if (s.includedLocaleIds !== t.includedLocales) {
      K.trace("Stale cache for", t.id, "->", "Included locale ids changed");
      return;
    }
    if (s.localeConfig !== t.localeConfig) {
      K.trace("Stale cache for", t.id, "->", "Locale config changed");
      return;
    }
  }
  if (va(e)) {
    let y = Nt(e, t.id);
    if (y === void 0 || s.scopeChecksum !== y) {
      K.trace("Stale cache for", t.id, "->", "Scope checksum changed or unavailable");
      return;
    }
    if (o) {
      let L = e.getSubtreeChecksum(o.id);
      if (L === void 0 || s.additionalDependencyChecksum !== L) {
        K.trace(
          "Stale cache for",
          t.id,
          "->",
          "Additional dependency checksum changed or unavailable"
        );
        return;
      }
    }
  }
  if (
    lt(e) &&
    (s.replicaSourceScopeIds === void 0 ||
      s.replicaSourceScopeRevision !== xa(e, s.replicaSourceScopeIds))
  ) {
    K.trace("Stale cache for", t.id, "->", "Replica source scope revision changed or unavailable");
    return;
  }
  return s;
}
function lo(e, t, o, n, i, a, r, c, l, p, u, d, s, f) {
  let m = Nl(e, t, o, n, i, a, r, c, l, p, s, f);
  if (m) {
    let y = sl(m, t, u),
      L = d === ro || m.includesWebPage === d;
    if (y && L) return (Ai(m.unresolvedLocalizableCount), m);
  }
  let g = u?.collection;
  g && (g.allScopesCached = !1);
}
function co(e, t, o) {
  let {
    additionalDependencyNode: n,
    group: i,
    locales: a,
    loaderDependencies: r,
    unresolvedLocalizableCount: c,
    parentVariables: l,
    parentSourceOwnRevision: p,
    subGroups: u,
    settings: d,
    duplicateSlugLocaleIds: s,
    richTextBehavior: f,
    includesWebPage: m,
    pageItems: g,
    slugSource: y,
    isNotFoundPage: L,
    directSmartComponentIds: h,
    localizedSmartComponentIdsByLocaleId: z,
    cmsLocalizationDependencies: R,
    pageVisibilityFact: v,
    replicaSourceNodeIds: B,
  } = o;
  if (!Ta(f) || t.mutable || n?.mutable) return;
  let k, A;
  if (lt(e) && ((k = Rl(e, t, B)), (A = xa(e, k)), A === void 0)) return;
  let X, H;
  if (
    va(e) &&
    ((X = Nt(e, t.id)), X === void 0 || (n && ((H = e.getSubtreeChecksum(n.id)), H === void 0)))
  )
    return;
  let oe = Qe(e, t),
    ae,
    pe;
  (ba(t) ? ((ae = ha(t, n)), (pe = Ia(t, n))) : ((ae = za(t, n)), (pe = ae)),
    (t.cache.localizationSourceGroup = {
      sourceRevision: ae,
      translationRevision: pe,
      scopeChecksum: X,
      additionalDependencyChecksum: H,
      replicaSourceScopeIds: k,
      replicaSourceScopeRevision: A,
      locales: a,
      loaderDependencies: r,
      unresolvedLocalizableCount: c,
      parentVariables: l,
      parentSourceOwnRevision: p,
      group: i,
      includedLocaleIds: oe ? t.includedLocales : void 0,
      localeConfig: oe ? t.localeConfig : void 0,
      subGroups: u,
      settings: d,
      duplicateSlugLocaleIds: s,
      includesWebPage: m,
      pageItems: g,
      slugSource: y,
      isNotFoundPage: L,
      directSmartComponentIds: h,
      localizedSmartComponentIdsByLocaleId: z,
      cmsLocalizationDependencies: R,
      pageVisibilityFact: v,
    }));
}
function Dl(e) {
  let t = e.get(Hn);
  return pt(t) && t.parentid === e.root.id;
}
function Pl(e) {
  return T(e) ? "page" : le(e) ? "template" : "component";
}
function kl(e, t, o, n) {
  let i = o.resolveValue("name") ?? "Unknown",
    a = T(o) ? Rt(e, t, o) : i;
  if (!n) return a;
  let r = o.resolveValue("name") || eo(t, o);
  return `${a} \xB7 ${r}`;
}
function Fl(e, t, o, n, i, a) {
  let r = a.length === 0,
    c = P.isOn("localizationUiUpdate") && T(o) && Dl(e);
  if (r && !c) return;
  let l = !n && Qe(e, o);
  if (r && !(c && l)) return;
  let u = kl(e, t, o, n),
    d = Pl(o);
  return {
    type: "sourceGroup",
    name: u,
    groupType: d,
    nodeId: o.id,
    supportsLocaleVisibility: l,
    supportsLocaleExclusion: P.isOn("localizationModelUpdate") && It(e, o),
    includedLocaleIds: Be(e, i),
    fallbackLocaleIds: Oo(e, i),
    items: a,
  };
}
function Ra(e, t, o, n, i, a, r, c) {
  if (t) {
    let p = e.fastWalk();
    return (u, d, s, f) => {
      let m = p.next();
      return m.done ? !1 : (i && vl(m.value, a), Zi(u, d, s, m.value, f, o, n, r, c), !0);
    };
  }
  let l = e.walk();
  return (p, u, d, s) => {
    let f = l.next();
    return f.done ? !1 : (i && xl(f.value, a), bl(p, u, d, f.value, s, o, n, r, c), !0);
  };
}
function Ml(e, t) {
  if (!(!T(t) || t.abTestingParentId === void 0))
    return e.getNodeWithTrait(t.abTestingParentId, T) ?? void 0;
}
function wl(e, t, o, n, i, a, r) {
  let { loaderDependenciesByIdentifier: c, dependencies: l } = r ?? {},
    p = n ?? o,
    u = lo(e, o, n, i, t, w, w, void 0, void 0, a, l, ro);
  if (u)
    return (
      ie(c, u.loaderDependencies),
      ao(
        e,
        o,
        u.directSmartComponentIds,
        u.localizedSmartComponentIdsByLocaleId,
        l,
        p,
        u.pageVisibilityFact
      ),
      u
    );
}
function Bl(e, t, o, n, i, a, r, c, l, p, u) {
  let { loaderDependenciesByIdentifier: d, dependencies: s } = u ?? {},
    f = o ?? t,
    m = Wt(p),
    g = Ot(p);
  ie(d, r);
  let y = ao(e, t, m, g, s, f);
  co(e, t, {
    additionalDependencyNode: o,
    group: a,
    locales: n,
    loaderDependencies: r,
    unresolvedLocalizableCount: c,
    parentVariables: w,
    parentSourceOwnRevision: w,
    richTextBehavior: i,
    directSmartComponentIds: m,
    localizedSmartComponentIdsByLocaleId: g,
    pageVisibilityFact: y,
    replicaSourceNodeIds: l,
  });
}
function Va(e, t, o, n, i, a, r, c) {
  var v = [];
  try {
    let { checkpoint: l, dependencies: p } = c ?? {};
    l?.();
    let u = T(o) && o.abTestingParentId !== void 0;
    let d = Ml(e, o);
    let s = d ?? o;
    if (tc(e, o) && !u) return;
    let f = wl(e, t, o, d, n, a, c);
    if (f) {
      f.group && i.push(f.group);
      return;
    }
    let m = [];
    let g;
    let y = Et(p, l);
    let L = lt(e);
    let h = new Set();
    let z = new Set();
    let R = fe(v, ve());
    t.trackEntityReads(z, () => {
      let X = Ra(o, r, m, a, L, h, l, y),
        H = !0;
      for (; H;) H = X(e, t, o, n);
      ((g = Fl(e, t, o, u, s, m)), g && i.push(g));
    });
    Bl(e, o, d, n, a, g, ct(t, z), R.lookups.unresolvedLocalizableCount, h, y, c);
  } catch (B) {
    var k = B,
      A = !0;
  } finally {
    me(v, k, A);
  }
}
function Ne(e, t, o) {
  return o ? `${e}.${t}.${o}` : `${e}.${t}`;
}
function Jp(e, t = e.collectionItemId) {
  if (e.type === "collectionField") return Ne(t, e.variableId);
  if (e.type === "arrayItemField") {
    let o = Y(void 0, e.arrayItemId),
      n = F(o, e.variableId);
    return Ne(t, e.arrayVariableId, n);
  }
  return $(e);
}
function Al(e) {
  return Lt(e).length;
}
function $t(e, t, o) {
  let n = o.required,
    i = o.type === "link" ? void 0 : o.options?.maxLength;
  if (!n && !ge(i)) return;
  let a = {};
  for (let r of e) {
    let c = t[r.id];
    if (!Ye(c)) continue;
    let l = Al(c);
    n && l === 0
      ? (a[r.id] = { message: Ti(o.name), label: "Required" })
      : ge(i) && l > i && (a[r.id] = { message: bi(l, i), label: "Too long" });
  }
  return a;
}
function Na(e, t, o) {
  let n = [];
  for (let i of e) {
    let a = t[i.id];
    if (!Ye(a) || !I(a.value)) continue;
    let c = o[i.id]?.get(a.value);
    c && c > 1 && n.push(i.id);
  }
  return n;
}
function Da(e, t) {
  let o = {};
  for (let n of e) o[n] = { message: t, label: "Duplicate" };
  return o;
}
function El(e, t, o, n) {
  let i = e.getSlugVariable(),
    a = i ? t.getControlProp(i.id) : void 0;
  return a?.type !== "string" || !a.valueLocalized ? "" : Na(o, a.valueLocalized, n).join(",");
}
function Wl(e, t, o, n, i, a, r, c, l, p) {
  let u = r.type;
  switch (u) {
    case "string": {
      if (Bo(r)) return;
      let d;
      if (l) {
        if (l.type !== u || !I(l.value)) return;
        d = l.value;
      } else {
        if (jn(r)) return;
        d = r.initialValue;
      }
      let s = C(d),
        f = l?.valueLocalized ?? x,
        m = $t(i, f, r),
        g = D(d, i, f, s, m);
      return {
        type: "string",
        keyPath: Ne(n.id, c, a),
        nodeId: n.id,
        scopeId: o,
        controlPropKey: c,
        controlPropName: r.name,
        ancestorControlKeyPath: a,
        value: d,
        valueWordCount: b(d),
        hash: s,
        localizedValues: f,
        localizedValueStatuses: g,
        managedByPluginButUserEditable: r.userEditable ?? !1,
        warnings: m,
      };
    }
    case "link": {
      if (!l || l.type !== u || !Ce(l.value) || !P.isOn("localizedLinks")) return;
      let d = l.value.url,
        s = C(d),
        f = l?.valueLocalized ?? x,
        m = $t(i, f, r),
        g = D(d, i, f, s, m);
      return {
        type: "link",
        keyPath: Ne(n.id, c, a),
        nodeId: n.id,
        scopeId: o,
        controlPropKey: c,
        controlPropName: r.name,
        ancestorControlKeyPath: a,
        value: d,
        valueWordCount: d ? 1 : 0,
        hash: s,
        localizedValues: f,
        localizedValueStatuses: g,
        managedByPluginButUserEditable: r.userEditable ?? !1,
        warnings: m,
        aiTranslationDisabled: !0,
      };
    }
    case "slug": {
      if (e.root.translatePagePaths === "no" || !l) return;
      (S(l.type === "string", "expected slug controlType to be a string"),
        S(I(l.value), "expected slug value to be a string"));
      let d = l.value,
        s = C(d),
        f = l?.valueLocalized ?? x,
        m = Da(Na(i, f, p), "Each item in the collection must have a unique slug"),
        g = D(d, i, f, s, m, e.root.translatePagePaths === "legacy" ? jt(f) : void 0);
      return {
        type: "slug",
        keyPath: Ne(n.id, c, a),
        controlPropKey: c,
        controlPropName: r.name,
        ancestorControlKeyPath: a,
        nodeId: n.id,
        scopeId: o,
        value: d,
        valueWordCount: b(d),
        hash: s,
        localizedValues: f,
        localizedValueStatuses: g,
        managedByPluginButUserEditable: r.userEditable ?? !1,
        warnings: m,
        aiTranslationDisabled: !e.root.translatePagePathsWithAI,
        collectionItemIsDraft: n.isDraft ?? !1,
      };
    }
    case "richtext": {
      let d;
      if (Bo(r)) return;
      if (l) {
        if (l.type !== u || !_(l.value)) return;
        d = l.value;
      } else d = r.initialValue;
      let s = ne(d),
        f = Ca(d, t),
        m = l?.valueLocalized ?? x,
        g = $t(i, m, r),
        y = D(s, i, to(m, d, f), f, g);
      return {
        type: "richtext",
        keyPath: Ne(n.id, c, a),
        nodeId: n.id,
        scopeId: o,
        controlPropKey: c,
        controlPropName: r.name,
        ancestorControlKeyPath: a,
        richTextValue: d,
        value: s,
        valueWordCount: b(s, !0),
        hash: f,
        localizedValues: m,
        localizedValueStatuses: y,
        managedByPluginButUserEditable: r.userEditable ?? !1,
        warnings: g,
        contentType: r.type === "richtext" ? r.contentType : void 0,
        isCollectionControlProp: !0,
      };
    }
    case "image": {
      let d;
      if (l) {
        if (l.type !== u || !I(l.value)) return;
        d = l.value;
      } else {
        if (!I(r.initialValue)) return;
        d = r.initialValue;
      }
      let s = C(d),
        f = l?.valueLocalized ?? x,
        m = l?.alt ?? he,
        g = C(m),
        y = l?.altLocalized ?? x,
        L = D(m, i, y, g, void 0, _t(d, f, s));
      return {
        type: "image",
        keyPath: Ne(n.id, c, a),
        nodeId: n.id,
        scopeId: o,
        controlPropKey: c,
        controlPropName: r.name,
        ancestorControlKeyPath: a,
        value: m,
        valueWordCount: b(m),
        hash: g,
        localizedValues: y,
        localizedValueStatuses: L,
        supportsAlt: !0,
        image: d,
        imageHash: s,
        imageLocalizedValues: f,
        managedByPluginButUserEditable: r.userEditable ?? !1,
        supportsFocalPoint: !0,
        positionX: l?.positionX,
        positionY: l?.positionY,
      };
    }
    case "enum":
      return;
    default:
  }
}
function Ol(e, t, o, n, i, a, r) {
  let c = n.id;
  function l(p, u, d, s) {
    if (u && u.type === "array") {
      if (d.type !== "array" || Q(u.value)) return;
      for (let m of u.value) {
        if (!at(m.type) || !Fo(m) || !m.value) continue;
        let g = Y(s, m.id);
        for (let y of d.itemVariables) {
          if (!Ie(y)) continue;
          let L = m.value[y.id];
          if (!L || !at(L.type)) continue;
          let h = F(g, y.id);
          l(p, L, y, h);
        }
      }
    }
    if (!fa(d)) return;
    let f = Wl(e, t, c, n, i, s, d, p, u, r);
    f && a.push(f);
  }
  for (let p of o.variables) {
    if (!Ie(p)) continue;
    let u = n.getControlProp(p.id);
    l(p.id, u, p);
  }
}
var Pa = Vo((e, t) => ({ translatePagePaths: e, translatePagePathsWithAI: t }));
function ka(e, t, o, n, i, a, r, c) {
  let { checkpoint: l, loaderDependenciesByIdentifier: p, dependencies: u } = c ?? {};
  l?.();
  let d = Pa(e.root.translatePagePaths, e.root.translatePagePathsWithAI),
    s = n.cache.localizationSourceGroup?.cmsLocalizationDependencies,
    f = El(o, n, i, a),
    m = lo(
      e,
      n,
      void 0,
      i,
      t,
      o.variables,
      o.cache.localizationSourceOwnRevision,
      void 0,
      d,
      void 0,
      u,
      ro,
      f
    );
  if (m) {
    ie(p, m.loaderDependencies);
    let R = u?.collection;
    (R &&
      m.cmsLocalizationDependencies &&
      R.facts.cmsDependenciesByItemId.set(n.id, m.cmsLocalizationDependencies),
      m.group && r.push(m.group));
    return;
  }
  let g = Be(e, n),
    { group: y, loaderDependencies: L, unresolvedLocalizableCount: h } = Gl(e, t, o, n, i, g, a);
  y && r.push(y);
  let z;
  if (u) {
    let R = { routerLocaleById: u.routerLocaleById, checkpoint: l, previousDependencies: s };
    z = ra(o, n, i, g, R);
  }
  (z && u?.collection && u.collection.facts.cmsDependenciesByItemId.set(n.id, z),
    ie(p, L),
    co(e, n, {
      group: y,
      locales: i,
      loaderDependencies: L,
      unresolvedLocalizableCount: h,
      parentVariables: o.variables,
      parentSourceOwnRevision: o.cache.localizationSourceOwnRevision,
      settings: d,
      duplicateSlugLocaleIds: f,
      cmsLocalizationDependencies: z,
    }));
}
function Gl(e, t, o, n, i, a, r) {
  var s = [];
  try {
    let c = [];
    let l = Oo(e, n);
    let p = new Set();
    let u = fe(s, ve());
    t.trackEntityReads(p, () => {
      Ol(e, t, o, n, i, c, r);
    });
    let d;
    if (c.length > 0) {
      for (let y of c) y.insetLevel = 1;
      d = {
        type: "sourceGroup",
        groupType: "collectionItem",
        collectionName: o.resolveValue("name") ?? "Unknown",
        collectionNodeId: o.id,
        supportsLocaleVisibility: !0,
        supportsLocaleExclusion: !0,
        includedLocaleIds: a,
        fallbackLocaleIds: l,
        name: jo(o, n) ?? "Unknown",
        nodeId: n.id,
        items: c,
      };
    }
    return {
      group: d,
      loaderDependencies: ct(t, p),
      unresolvedLocalizableCount: u.lookups.unresolvedLocalizableCount,
    };
  } catch (f) {
    var m = f,
      g = !0;
  } finally {
    me(s, m, g);
  }
}
function Hl(e, t, o, n) {
  let i = o.name,
    a = C(i),
    r = o.nameLocalized ?? x,
    c = D(i, n, r, a);
  return {
    type: "enum",
    keyPath: `${t.id}_${o.id}`,
    nodeId: t.id,
    scopeId: e.root.id,
    variableId: t.id,
    enumCaseId: o.id,
    value: i,
    valueWordCount: b(i),
    hash: a,
    localizedValues: r,
    localizedValueStatuses: c,
    managedByPluginButUserEditable: !1,
  };
}
function Fa(e, t, o) {
  let n = ei.get(e);
  if (!n) return;
  let i = [];
  for (let a of n.children)
    if (!(!ho(a) || a.preventLocalization)) for (let r of a.cases) i.push(Hl(e, a, r, t));
  i.length !== 0 &&
    o.push({
      type: "sourceGroup",
      groupType: "settings",
      name: "Shared options",
      nodeId: n.id,
      supportsLocaleVisibility: !1,
      supportsLocaleExclusion: !1,
      includedLocaleIds: void 0,
      fallbackLocaleIds: void 0,
      items: i,
    });
}
function $l(e, t, o, n) {
  let i = o.name,
    a = C(i),
    r = o.nameLocalized ?? x,
    c = D(i, n, r, a);
  return {
    type: "enum",
    keyPath: `${e.id}_${t.id}_${o.id}`,
    nodeId: e.id,
    scopeId: e.id,
    variableId: t.id,
    enumCaseId: o.id,
    value: i,
    valueWordCount: b(i),
    hash: a,
    localizedValues: r,
    localizedValueStatuses: c,
    managedByPluginButUserEditable: !1,
  };
}
function Ul(e, t) {
  let o = e.variables.filter(fa),
    n = [];
  for (let i of o) {
    let a = i.type;
    switch (a) {
      case "enum": {
        if (Bo(i)) break;
        for (let r of i.cases) n.push($l(e, i, r, t));
        break;
      }
      case "string":
      case "richtext":
      case "image":
      case "link":
      case "slug":
        break;
      default:
    }
  }
  return n;
}
function jl(e, t, o) {
  if (!(t.length === 0 && o.length === 0))
    return {
      type: "sourceGroup",
      groupType: "collection",
      name: e.resolveValue("name") ?? "Unknown",
      nodeId: e.id,
      supportsLocaleVisibility: !1,
      supportsLocaleExclusion: !1,
      includedLocaleIds: void 0,
      fallbackLocaleIds: void 0,
      items: t,
      groups: o,
    };
}
function Ma(e, t, o, n, i, a) {
  let { checkpoint: r, loaderDependenciesByIdentifier: c, dependencies: l } = a ?? {};
  (r?.(), oa(o, l?.collection));
  let p = [],
    u = wa(n, o);
  for (let m of o.getUnsortedChildren()) ka(e, t, o, m, n, u, p, a);
  let d = lo(e, o, void 0, n, t, w, w, p, void 0, void 0, l, ro);
  if (d) {
    (ie(c, d.loaderDependencies), d.group && i.push(d.group));
    return;
  }
  let s = Ul(o, n),
    f = jl(o, s, p);
  (co(e, o, {
    group: f,
    locales: n,
    loaderDependencies: Vl,
    unresolvedLocalizableCount: 0,
    parentVariables: w,
    parentSourceOwnRevision: w,
    subGroups: p,
  }),
    f && i.push(f));
}
function wa(e, t) {
  let o = {};
  for (let i of e) o[i.id] = new Map();
  let n = t.getSlugVariable();
  if (!n) return o;
  for (let i of t.getUnsortedChildren())
    for (let [a, r] of _l(i, n)) {
      let c = o[a];
      if (!c) continue;
      let l = (c.get(r) ?? 0) + 1;
      c.set(r, l);
    }
  return o;
}
function _l(e, t) {
  let o = e.getControlProp(t.id);
  if (!o) return [];
  if (
    (S(o.type === "string", "expect slug control type to be be of type string"),
    S(I(o.value), "expected slug control prop value to be string"),
    !o.valueLocalized)
  )
    return [];
  let n = [];
  for (let i in o.valueLocalized) {
    let a = o.valueLocalized[i];
    !I(a?.value) || !a.value || n.push([i, a.value]);
  }
  return n;
}
function Ba(e, t, o, n, i, a) {
  var f = [];
  try {
    let r = a?.collection;
    na(e.root, r);
    let c = lo(e, e.root, void 0, o, t, w, w, void 0, void 0, void 0, a, ro);
    if (c) {
      (ie(i, c.loaderDependencies), c.group && n.push(c.group));
      return;
    }
    let l = [];
    let p = new Set();
    let u = fe(f, ve());
    t.trackEntityReads(p, () => {
      La(e, t, e.root, e.root, o, l);
    });
    let d =
      l.length > 0
        ? {
            type: "sourceGroup",
            groupType: "settings",
            name: "Site settings",
            nodeId: e.root.id,
            supportsLocaleVisibility: !1,
            supportsLocaleExclusion: !1,
            includedLocaleIds: void 0,
            fallbackLocaleIds: void 0,
            items: l,
          }
        : void 0;
    let s = ct(t, p);
    ie(i, s);
    co(e, e.root, {
      group: d,
      locales: o,
      loaderDependencies: s,
      unresolvedLocalizableCount: u.lookups.unresolvedLocalizableCount,
      parentVariables: w,
      parentSourceOwnRevision: w,
    });
    d && n.push(d);
  } catch (m) {
    var g = m,
      y = !0;
  } finally {
    me(f, g, y);
  }
}
function Kl(e, t, o, n, i, a, r) {
  for (let c of o.children) Ma(e, t, c, n, i, { checkpoint: a, dependencies: r });
}
function Aa(e, t, o, n) {
  let i = t.parentid ? No(e).getRouteSegmentIdsBySlug(n).get(t.parentid) : void 0,
    a = [];
  for (let r of o) {
    let c = t.segmentLocalized?.[r.id];
    if (!Ye(c) || !I(c.value)) continue;
    let l = i?.get(r.id)?.get(c.value);
    l && l.length > 1 && a.push(r.id);
  }
  return a;
}
function Qp(e, t, o, n, i, a) {
  if (!St(o)) return;
  let r = Aa(e, o, n, i);
  a.push(Ea(e, t, o, n, r));
}
function Zl(e, t, o, n, i, a) {
  if (a.translatePagePaths !== "yes" || !St(o)) return;
  let r = Aa(e, o, n, i),
    c = r.join(","),
    l = o.cache.localizationSourceOwnRevision,
    p = o.cache.localizationTranslationOwnRevision,
    u = o.mutable ? void 0 : o.cache.localizationSlugSource;
  if (
    u?.sourceOwnRevision === l &&
    u.translationOwnRevision === p &&
    u.scopeId === t.id &&
    u.locales === n &&
    Xe(u.settings, a) &&
    u.duplicateSlugLocaleIds === c
  )
    return u.source;
  let d = Ea(e, t, o, n, r);
  return (
    o.mutable ||
      (o.cache.localizationSlugSource = {
        sourceOwnRevision: l,
        translationOwnRevision: p,
        scopeId: t.id,
        locales: n,
        settings: a,
        duplicateSlugLocaleIds: c,
        source: d,
      }),
    d
  );
}
function Ea(e, t, o, n, i) {
  let a = ze(o.segment),
    r = C(o.segment),
    c = o.segmentLocalized ?? x,
    l = Da(i, "Sibling pages must have unique slugs");
  return {
    keyPath: o.id,
    type: "RouteSegmentNode",
    nodeId: o.id,
    scopeId: t.id,
    value: a,
    valueWordCount: b(a),
    hash: C(o.segment),
    localizedValues: c,
    localizedValueStatuses: D(o.segment, n, c, r, l, void 0),
    managedByPluginButUserEditable: !1,
    warnings: l,
    aiTranslationDisabled: !e.root.translatePagePathsWithAI,
  };
}
function ql(e, t, o, n, i, a, r, c) {
  let p = c?.dependencies?.routerLocales ?? we(e, "includeDrafts"),
    u = new Set();
  for (let d of o.walk()) J(d) && Ut(e, t, d, n, p, i, a, u, r, c);
}
function Yl(e, t, o, n, i) {
  let a = T(n) ? Rt(e, t, n) : Qn(wt(o, e)),
    r = Xl(t, i, a);
  return o.segment === "" ? `${r} /` : r;
}
function Xl(e, t, o) {
  if (!T(t) || !t.abTestingParentId) return o;
  let n = t.resolveValue("name") || eo(e, t);
  return `${o} \xB7 ${n}`;
}
function Wa(e, t, o, n, i, a) {
  let r = Qe(e, t),
    c = P.isOn("localizationUiUpdate") && r && !a,
    l = n ? [n, ...i] : i;
  if (!(l.length === 0 && !c))
    return {
      type: "sourceGroup",
      name: o,
      groupType: "page",
      nodeId: t.id,
      supportsLocaleVisibility: r,
      supportsLocaleExclusion: P.isOn("localizationModelUpdate") && It(e, t),
      includedLocaleIds: r ? Be(e, t) : void 0,
      fallbackLocaleIds: r ? Oo(e, t) : void 0,
      items: l,
    };
}
function Jl(e, t, o, n, i, a) {
  let r = o.webPageId ? (e.get(o.webPageId) ?? void 0) : void 0,
    c = T(r) && r.isLoaded() ? r : void 0,
    l = Pa(e.root.translatePagePaths, e.root.translatePagePathsWithAI),
    p = !!(r && a.has(r.id)),
    u = c || o,
    d = !!(r && !p),
    s = Zl(e, u, o, n, i, l),
    f = Yl(e, t, o, r, u),
    m = Jn(e, u);
  return {
    scopeNode: u,
    correspondingWebPageNode: r,
    skipWebPageNodeCollection: p,
    includesWebPage: d,
    slugSource: s,
    name: f,
    isNotFoundPage: m,
  };
}
function Ql(e, t, o, n, i, a) {
  let { loaderDependenciesByIdentifier: r, dependencies: c } = a ?? {},
    {
      scopeNode: l,
      skipWebPageNodeCollection: p,
      includesWebPage: u,
      slugSource: d,
      name: s,
      isNotFoundPage: f,
    } = o,
    m = lo(e, l, void 0, n, t, w, w, void 0, void 0, i, c, u, void 0, f);
  if (m) {
    if (
      (ie(r, m.loaderDependencies),
      u &&
        T(l) &&
        ao(
          e,
          l,
          m.directSmartComponentIds,
          m.localizedSmartComponentIdsByLocaleId,
          c,
          l,
          m.pageVisibilityFact
        ),
      m.slugSource !== d || (m.group && m.group.name !== s))
    ) {
      (S(m.pageItems, "Route group caches keep the page's items"),
        (m.group = Wa(e, l, s, d, m.pageItems, p)),
        (m.slugSource = d));
      let g = c?.collection;
      g && (g.allScopesCached = !1);
    }
    return m;
  }
}
function ec(e, t, o, n, i, a, r, c, l, p) {
  let { loaderDependenciesByIdentifier: u, dependencies: d } = p ?? {},
    {
      scopeNode: s,
      skipWebPageNodeCollection: f,
      includesWebPage: m,
      slugSource: g,
      name: y,
      isNotFoundPage: L,
    } = t,
    h = Wa(e, s, y, g, i, f),
    z = Wt(l),
    R = Ot(l);
  ie(u, a);
  let v = m && T(s) ? ao(e, s, z, R, d) : void 0;
  return (
    co(e, s, {
      unresolvedLocalizableCount: r,
      group: h,
      locales: o,
      loaderDependencies: a,
      parentVariables: w,
      parentSourceOwnRevision: w,
      richTextBehavior: n,
      includesWebPage: m,
      pageItems: i,
      slugSource: g,
      isNotFoundPage: L,
      directSmartComponentIds: z,
      localizedSmartComponentIdsByLocaleId: R,
      pageVisibilityFact: v,
      replicaSourceNodeIds: c,
    }),
    h
  );
}
function Ut(e, t, o, n, i, a, r, c, l, p) {
  var oe = [];
  try {
    let { checkpoint: u, dependencies: d } = p ?? {};
    u?.();
    let s = e.getParent(o.id);
    let f = J(s) ? s.id : void 0;
    ta(o, f, d?.collection);
    let m = Jl(e, t, o, n, i, c);
    let {
      scopeNode: g,
      correspondingWebPageNode: y,
      skipWebPageNodeCollection: L,
      includesWebPage: h,
    } = m;
    let z = Ql(e, t, m, n, r, p);
    if (z) {
      (z.group && a.push(z.group), h && y && c.add(y.id));
      return;
    }
    let R = [];
    let v = Et(d, u);
    let B = lt(e);
    let k = new Set();
    let A = new Set();
    let X = fe(oe, ve());
    t.trackEntityReads(A, () => {
      if (y && !L) {
        let fo = Ra(y, l, R, r, B, k, u, v),
          Ue = !0;
        for (; Ue;) Ue = fo(e, t, g, n);
        c.add(y.id);
      }
    });
    let H = ec(e, m, n, r, R, ct(t, A), X.lookups.unresolvedLocalizableCount, k, v, p);
    H && a.push(H);
  } catch (ae) {
    var pe = ae,
      De = !0;
  } finally {
    me(oe, pe, De);
  }
}
function ef(e, t, o, n, i, a) {
  let r = [],
    c = o.id,
    l = nt() && e.isDataTree(),
    p = new Map(),
    u = { checkpoint: a, loaderDependenciesByIdentifier: p },
    d = (s) => ({
      canonicalScopeId: s,
      groups: r,
      loaderDependencies: Array.from(p, ([f, m]) => [f, m]),
    });
  if (te(o)) return (Ba(e, t, n, r, p), Fa(e, n, r), d(o.id));
  if (M(o)) {
    let s = e.getNodeWithTrait(o.parentid, U);
    return (s && ka(e, t, s, o, n, wa(n, s), r, u), d(o.id));
  }
  if (U(o)) return (Ma(e, t, o, n, r, u), d(o.id));
  if (J(o)) {
    Ut(e, t, o, n, we(e, "includeDrafts"), r, i, new Set(), l, u);
    let s = o.webPageId ? e.get(o.webPageId) : void 0;
    return d(T(s) && s.isLoaded() ? s.id : o.id);
  }
  if (io(o)) {
    let s = T(o) ? $n(e, o.id) : void 0,
      f = T(o) && o.abTestingParentId !== void 0;
    return (
      s && o.id !== e.root.homePageNodeId && !f
        ? Ut(e, t, s, n, we(e, "includeDrafts"), r, i, new Set(), l, u)
        : Va(e, t, o, n, r, i, l, u),
      d(o.id)
    );
  }
  return d(c);
}
function Oa(e, t, o, n, i, a = nt(), r) {
  let c = [];
  if (!o || o.length === 0) return c;
  let l = r ? ea(e, r) : void 0;
  (Ba(e, t, o, c, void 0, l), Fa(e, o, c));
  let p = { checkpoint: i, dependencies: l };
  a &&= e.isDataTree();
  for (let u of e.root.children) oc(e, t, u, o, n, a, c, p);
  return c;
}
function oc(e, t, o, n, i, a, r, c) {
  let { checkpoint: l, dependencies: p } = c ?? {},
    u = !1;
  (T(o) && ((u = o.abTestingParentId !== void 0), !u && e.root.homePageNodeId !== o.id)) ||
    (io(o) && (S(o.isLoaded(), "Scope node must be fully loaded"), Va(e, t, o, n, r, i, a, c)),
    Sn(o) && (S(o.isLoaded(), "Scope node must be fully loaded"), Kl(e, t, o, n, r, l, p)),
    pt(o) && ql(e, t, o, n, r, i, a, c));
}
function tc(e, t) {
  return T(t) && t.id !== e.root.homePageNodeId;
}
function of(e, t) {
  return ye(e, t);
}
function tf(e, t) {
  return Xe(e, t);
}
var Ga = ["loader", "tree-first", "tree-only"];
function Ha(e) {
  return Ga.find((t) => t === e);
}
var Kt =
  typeof window > "u"
    ? void 0
    : Ha(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function $a(e) {
  Kt = e;
}
function Yt() {
  return P.isOn("harness2");
}
function He() {
  return Yt() ? Kt || (P.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function Ua() {
  return Ga;
}
function ja(e) {
  return Ha(e);
}
var N = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
    definitionHashReads: 0,
    treeAnswerMemoDrops: 0,
    treeAnswersResolved: 0,
    treeAnswerResolveMs: { total: 0, controls: 0, moduleFacts: 0, hash: 0 },
  },
  Zt = new Set(),
  qt = new Set();
function _a() {
  return {
    ...N,
    kindMismatches: [...N.kindMismatches],
    annotationRefusals: [...N.annotationRefusals],
    treeAnswerResolveMs: { ...N.treeAnswerResolveMs },
  };
}
function Ka() {
  ((N.treeHits = 0),
    (N.treeMisses = 0),
    (N.loaderFallbacks = 0),
    (N.loaderPreferred = 0),
    (N.kindMismatches.length = 0),
    (N.annotationRefusals.length = 0),
    (N.definitionHashReads = 0),
    (N.treeAnswerMemoDrops = 0),
    (N.treeAnswersResolved = 0),
    (N.treeAnswerResolveMs = { total: 0, controls: 0, moduleFacts: 0, hash: 0 }),
    Zt.clear(),
    qt.clear());
}
function Za() {
  N.treeHits++;
}
function qa() {
  N.treeMisses++;
}
function Ya() {
  N.loaderFallbacks++;
}
function Xa() {
  N.loaderPreferred++;
}
function Ja(e, t) {
  Zt.has(e) || (Zt.add(e), N.kindMismatches.push({ identifier: e, loaderType: t }));
}
function Xt(e) {
  qt.has(e) || (qt.add(e), N.annotationRefusals.push(e));
}
function Qa() {
  N.definitionHashReads++;
}
function er() {
  N.treeAnswerMemoDrops++;
}
function or(e) {
  (N.treeAnswersResolved++, (N.treeAnswerResolveMs.total += e));
}
function st(e, t) {
  let o = performance.now(),
    n = t();
  return ((N.treeAnswerResolveMs[e] += performance.now() - o), n);
}
var Jt = Symbol("annotationRefusal");
function tr(e) {
  if (!e) return;
  let t = {};
  for (let o in e) {
    let n = e[o];
    n !== void 0 && (t[o] = I(n) ? n : JSON.stringify(n));
  }
  return t;
}
var nc = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function ic(e, t) {
  return e.kind !== "localModuleExport" || e.exportSpecifier !== "default" || !nc.has(e.type)
    ? !1
    : e.type === "canvasComponent"
      ? si(e.localId, t)
      : !0;
}
var nr = new WeakMap();
function ac(e) {
  let t = 0;
  for (let o = e; o; o = o.base) t += o.length;
  return t;
}
function rc(e) {
  let t = e.manifest,
    o = ac(e),
    n = nr.get(e);
  if (n && n.branchManifest === t && n.rowCount === o) return n.answers;
  n && er();
  let i = new Map();
  return (nr.set(e, { branchManifest: t, rowCount: o, answers: i }), i);
}
function so(e) {
  throw new Error(
    `${e} is not available on the localization tree-controls loader: it is read-only`
  );
}
var Qt = class extends Ii {
  constructor(o, n, i, a) {
    super();
    this.loader = o;
    this.tree = n;
    this.store = i;
    this.mode = a;
  }
  loader;
  tree;
  store;
  mode;
  componentForIdentifier(o) {
    let n = this.loader.componentForIdentifier(o),
      i = this.treeAnswer(o);
    return (
      i ? Za() : qa(),
      i && n && n.type !== i.definition.type && Ja(o, n.type),
      this.mode === "tree-only"
        ? (i?.definition ?? null)
        : i && this.preferTreeAnswer(i, n !== null)
          ? i.definition
          : (i ? Xa() : n && Ya(), n)
    );
  }
  getDefinitionHash(o) {
    Qa();
    let n = this.treeAnswer(o);
    if (this.mode === "tree-only") return n?.hash ?? 0;
    let i = this.loader.getDefinitionHash(o);
    return n && this.preferTreeAnswer(n, i !== 0) ? n.hash : i;
  }
  preferTreeAnswer(o, n) {
    return o.derivedFromDocument || !n;
  }
  reactComponentForIdentifier(o) {
    let n = this.loader.componentForIdentifier(o);
    return n && n.type !== "component" ? null : super.reactComponentForIdentifier(o);
  }
  trackEntityReads(o, n) {
    return this.loader.trackEntityReads(o, n);
  }
  dataForIdentifier(o) {
    return this.loader.dataForIdentifier(o);
  }
  getAllEntities() {
    return this.loader.getAllEntities();
  }
  getAllLocalModules() {
    return this.loader.getAllLocalModules();
  }
  getData() {
    return this.loader.getData();
  }
  errorForIdentifier(o) {
    return this.loader.errorForIdentifier(o);
  }
  updateEntity() {
    so("updateEntity");
  }
  deleteEntity() {
    so("deleteEntity");
  }
  setModuleRevision() {
    so("setModuleRevision");
  }
  testing = {
    setEntity: () => so("testing.setEntity"),
    clearEntities: () => so("testing.clearEntities"),
  };
  treeAnswer(o) {
    let n = rc(this.store),
      i = n.get(o);
    if (i === Jt) return (Xt(o), null);
    if (i !== void 0) return i;
    let a = performance.now(),
      r = this.resolveFromTree(o);
    return (or(performance.now() - a), n.set(o, r), r === Jt ? (Xt(o), null) : r);
  }
  resolveFromTree(o) {
    let n = re(o);
    if (!n || !un(n)) return null;
    let i = P.isOn("harness2"),
      a = st("controls", () => di({ identifier: n.value }, this.store, { enabled: i }));
    if (a === void 0) return null;
    let r = st("moduleFacts", () => this.moduleNodeFacts(n));
    if (r === null) return Jt;
    let { name: c, annotations: l } = r,
      p = ci(n.value, this.store);
    if (p !== void 0 && p !== "hook" && p !== "component") return null;
    let u = {
        depth: 0,
        file: "",
        identifier: n.value,
        packageIdentifier: "",
        annotations: l,
        update: 0,
      },
      s = (p === "hook"
        ? {
            ...u,
            name: li(n.value, this.store) ?? c ?? "Unknown",
            type: "hook",
            properties: $o(a),
            outputs: $o(ui({ identifier: n.value }, this.store, { enabled: i }) ?? {}),
          }
        : void 0) ?? { ...u, name: c ?? "Unknown", type: "component", properties: $o(a) };
    return { hash: st("hash", () => hi(s)), definition: s, derivedFromDocument: ic(n, this.store) };
  }
  moduleNodeFacts(o) {
    switch (o.kind) {
      case "localModuleExport": {
        let n = this.tree.getNodeWithTrait(o.localId, _n),
          i = tr(n?.save.annotations?.[o.exportSpecifier]);
        if (o.type === "codeFile") return { name: n?.getName(), annotations: i };
        let a = this.store.getObjectKey(o.localIdName, "name");
        return { name: (I(a) && a) || n?.getName(), annotations: i };
      }
      case "externalModuleExport": {
        let n = this.tree.getNodeWithTrait(o.moduleId, qe);
        if (!n) return null;
        let i = re(n.codeComponentIdentifier);
        return i?.kind === "externalModuleExport" &&
          i.saveId === o.saveId &&
          i.exportSpecifier === o.exportSpecifier
          ? { name: n.getName(), annotations: tr(n.annotations) }
          : null;
      }
    }
  }
};
function ir(e) {
  return He() !== "loader";
}
function en(e, t) {
  let o = He();
  return o === "loader" ? e : new Qt(e, t.getDataTree(), t.updater.store, o);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: He,
    setMode(e) {
      let t = ja(e);
      if (!t)
        throw new Error(
          `Unknown localization tree-controls mode: ${e}. One of ${Ua().join(", ")}.`
        );
      if (t !== "loader" && !Yt())
        throw new Error(
          `Cannot force ${t}: the harness2 experiment is off, so nothing stores controls.`
        );
      return ($a(t), t);
    },
    stats: _a,
    reset: Ka,
    wrap: en,
    walk: Oa,
    trackLookups: Bi,
  });
function $e(e) {
  return en(e.componentLoader, e.stores.treeStore);
}
async function bf(e, t, o = e.signal) {
  var c = [];
  try {
    let n = ir(e.stores.treeStore);
    o?.throwIfAborted();
    let i = fe(c, ve());
    let a = e.componentLoader.activeBundleHash;
    let r = await t($e(e));
    if (
      !n ||
      He() === "tree-only" ||
      i.lookups.unresolvedLocalizableCount === 0 ||
      a === e.componentLoader.activeBundleHash
    )
      return r;
    o?.throwIfAborted();
    return await t($e(e));
  } catch (l) {
    var p = l,
      u = !0;
  } finally {
    me(c, p, u);
  }
}
function ar(e) {
  return !Number.isNaN(e.getTime());
}
function Nf(e) {
  return e.match(/^\d{2}:\d{2}$/gu) !== null;
}
function lc(e) {
  return e.toISOString().split("T")[0];
}
function Df(e) {
  let t = new Date(e);
  return ar(t) ? lc(t) : "";
}
function Pf(e) {
  let t = new Date(e);
  return ar(t)
    ? `${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var kf = (() => {
    let e = null;
    return () => {
      if (ft(e)) return e;
      let t = document.createElement("input"),
        o = "a";
      return (t.setAttribute("type", "date"), t.setAttribute("value", o), (e = t.value !== o), e);
    };
  })(),
  Ff = (() => {
    let e = null;
    return () => {
      if (ft(e)) return e;
      let t = document.createElement("input"),
        o = "a";
      return (t.setAttribute("type", "time"), t.setAttribute("value", o), (e = t.value !== o), e);
    };
  })(),
  on = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function tn(e) {
  return on.test(e);
}
function Mf(e) {
  if (!e) return;
  if (tn(e)) return e;
  let t = new Date(e).toISOString();
  return (S(tn(t), "Date format is not valid"), t);
}
function cc(e) {
  on.exec(e);
  let t = on.exec(e);
  S(t, "The provided date cannot have conformed to StandardZuluDateString");
  let [, o, n, i, a, r, c, l] = t;
  return [o, n, i, a, r, c, l];
}
function wf([e, t, o, n, i, a, r]) {
  let c = `${e}-${t}-${o}T${n}:${i}:${a}.${r}Z`;
  return (S(tn(c)), c);
}
function Bf(e) {
  let [t, o, n] = cc(e);
  return `${n}/${o}/${t}`;
}
function sc(e, t, o) {
  let n = e.reactComponentForIdentifier(t.codeComponentIdentifier);
  if (!n) return;
  let i = n.properties[o.controlPropKey];
  return i ? (Mo(i, t.getRawControlProp(o.controlPropKey)) ?? void 0) : void 0;
}
function dc(e, t, o) {
  if (!Me(t)) return;
  let n = e.reactComponentForIdentifier(t.layoutTemplateIdentifier);
  if (!n) return;
  let i = n.properties[o.controlPropKey];
  return i ? (Mo(i, t.getRawControlProp(o.controlPropKey)) ?? void 0) : void 0;
}
function uc(e, t, o, n) {
  let r = e.getNodeParent(o).getPropertyControls(e, t)[n.controlPropKey];
  if (!r) return;
  let c = o.getControlProp(n.controlPropKey);
  return Mo(r, c) ?? void 0;
}
function sr(e, t, o, n) {
  if (T(o, !0)) return dc(t, o, n);
  if (M(o)) return uc(e, t, o, n);
  if (Z(o)) return sc(t, o, n);
}
function uo(e, t, o, n) {
  let i = sr(e, t, o, n);
  if (!i) return;
  if (!n.ancestorControlKeyPath) return i;
  let a = Oe(n.ancestorControlKeyPath);
  for (let r of a) {
    if (!i) return;
    if ((S(i.type === r.type), i.type === "object")) {
      if ((S(r.type === "object"), !G(i.value))) return;
      i = i.value[r.key];
    } else if (i.type === "array") {
      if ((S(r.type === "array"), !Le(i.value))) return;
      i = i.value.find((c) => c.id === r.id);
    } else {
      return;
    }
  }
  return i;
}
function E(e, t) {
  e.set(t, void 0, !1, !1);
}
function rr(e, t, o) {
  E(e, { [ce(t)]: o });
}
function po(e, t, o, n, i) {
  if (!n.ancestorControlKeyPath) {
    Bn(o)
      ? rr(o, n.controlPropKey, i)
      : M(o)
        ? (S(xt(i), "Invalid control prop"), o.setControlProp(n.controlPropKey, i))
        : $(o, "Unsupported node");
    return;
  }
  S(T(o, !0) || Z(o) || M(o));
  function a(p) {
    if (p) return p.type === "array" || p.type === "object" ? { ...p } : (S(p.type === i.type), i);
  }
  let r = a(sr(e, t, o, n));
  if (!r) return;
  let c = Oe(n.ancestorControlKeyPath),
    l = r;
  for (let p of c) {
    if (!l) return;
    if ((S(l.type === p.type), l.type === "object")) {
      if ((S(p.type === "object", "Current control should be of type Object"), !G(l.value))) return;
      let u = l.value[p.key],
        d = a(u);
      if (!d) return;
      ((l.value = { ...l.value, [p.key]: d }), (l = d));
    } else if (l.type === "array") {
      if ((S(p.type === "array", "Current control should be of type Array"), !Le(l.value))) return;
      let u = l.value.find((s) => s.id === p.id),
        d = a(u);
      if (!d) return;
      ((l.value = l.value.map((s) => (s.id === d.id ? d : s))), (l = d));
    } else {
      return;
    }
  }
  T(o, !0) || Z(o)
    ? rr(o, n.controlPropKey, r)
    : M(o)
      ? (S(xt(r), "Invalid control prop"), o.setControlProp(n.controlPropKey, r))
      : $(o, "Unsupported node");
}
function nn(e, t, o, n, i) {
  function a(r) {
    function c(l) {
      return l.name === n.type;
    }
    return {
      ...r,
      transforms: r.transforms.map((l) => (l.id !== n.transformId || !c(l) ? l : i(l))),
    };
  }
  if (Pe(o) && j(o.textContent)) {
    let r = a(o.textContent);
    E(o, { textContent: r });
    return;
  }
  if (Ke(o) && j(o.formInputPlaceholder)) {
    let r = a(o.formInputPlaceholder);
    E(o, { formInputPlaceholder: r });
    return;
  }
  if (Z(o)) {
    let r = $e(e),
      c = uo(t, r, o, n);
    if (!c || (S(c.type === "string"), !j(c.value))) return;
    let l = { ...c };
    ((l.value = a(c.value)), po(t, r, o, n, l));
  }
}
function dr(e, t, o, n, i, a) {
  e.scheduler.process(() => {
    let r = e.stores.treeStore.getDataTree(),
      c = $e(e),
      l = r.get(t.nodeId),
      p = t.type;
    switch (p) {
      case "string":
      case "richtext":
      case "link": {
        if (!M(l) && !Z(l) && !T(l)) return;
        let u = uo(r, c, l, t);
        if (!u) break;
        S(p === u.type);
        let d = { ...u },
          s = V(o.id, u.valueLocalized, "default", i);
        ((d.valueLocalized = s), po(r, c, l, t, d));
        break;
      }
      case "slug": {
        if (!M(l)) return;
        let u = uo(r, c, l, t);
        S(u?.type === "string", "expected slug control type to be a ControlType.String");
        let d = { ...u },
          s = V(o.id, u.valueLocalized, "default", i);
        ((d.valueLocalized = s), po(r, c, l, t, d));
        break;
      }
      case "image": {
        if (!M(l) && !Z(l) && !T(l)) return;
        let u = uo(r, c, l, t);
        if (!u) break;
        S(p === u.type);
        let d = { ...u };
        if (n === "imageSrc" || n === "all") {
          let s = V(o.id, u.valueLocalized, "imageSrc", i);
          d.valueLocalized = s;
        }
        if (n === "default" || n === "all") {
          let s = V(o.id, u.altLocalized, "default", i);
          d.altLocalized = s;
        }
        po(r, c, l, t, d);
        break;
      }
      case "enum": {
        if (ho(l)) {
          let d = l.cases.map((s) => {
            if (s.id !== t.enumCaseId) return s;
            let f = V(o.id, s.nameLocalized, "default", i);
            return { ...s, nameLocalized: f };
          });
          l.set({ cases: d });
          break;
        }
        if (!U(l)) return;
        let u = l.variables.map((d) => {
          if (d.id !== t.variableId) return d;
          S(d.type === t.type);
          let s = d.cases.map((f) => {
            if (f.id !== t.enumCaseId) return f;
            let m = V(o.id, f.nameLocalized, "default", i);
            return { ...f, nameLocalized: m };
          });
          return { ...d, cases: s };
        });
        E(l, { variables: u });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!ti(l)) return;
        let u = t.key === "title" ? "titleLocalized" : "descriptionLocalized",
          d = l[u],
          s = V(o.id, d, "default", i);
        E(l, { [u]: s });
        break;
      }
      case "RichTextNode": {
        if (!Pe(l)) return;
        let u = V(o.id, l.htmlLocalized, "default", i);
        (E(l, { htmlLocalized: u }), Ct(l) && Ho(e) && bt(e, Tt(e, [l.id])).catch(yo));
        break;
      }
      case "FrameNode": {
        if (!Lo(l)) return;
        if (n === "imageSrc" || n === "all") {
          let u = V(o.id, l.fillImageLocalized, "imageSrc", i);
          E(l, { fillImageLocalized: u });
        }
        if (n === "default" || n === "all") {
          let u = V(o.id, l.altAttributeLocalized, "default", i);
          E(l, { altAttributeLocalized: u });
        }
        break;
      }
      case "nodeLink": {
        if (!qn(l)) break;
        let u = V(o.id, l.linkLocalized, "default", i);
        E(l, { linkLocalized: u });
        break;
      }
      case "prefix":
      case "suffix": {
        if (!l) break;
        nn(e, r, l, t, (u) => {
          let d = { ...u },
            s = V(o.id, u.valueLocalized, "default", i);
          return ((d.valueLocalized = s), d);
        });
        break;
      }
      case "convertFromBoolean": {
        if (!l) break;
        nn(e, r, l, t, (u) => {
          let d = { ...u };
          return (
            t.property === "truthy" &&
              (d.truthyLocalized = V(o.id, u.truthyLocalized, "default", i)),
            t.property === "falsy" && (d.falsyLocalized = V(o.id, u.falsyLocalized, "default", i)),
            t.property === "fallback" &&
              u.fallback &&
              (d.fallback = {
                ...u.fallback,
                valueLocalized: V(o.id, u.fallback.valueLocalized, "default", i),
              }),
            d
          );
        });
        break;
      }
      case "convertFromEnum": {
        if (!l) break;
        nn(e, r, l, t, (u) => {
          let d = { ...u };
          return t.isDefaultCase
            ? ((d.defaultLocalized = V(o.id, u.defaultLocalized, "default", i)), d)
            : ((d.cases = u.cases.map((s) => {
                if (s.id !== t.caseId) return s;
                let f = { ...s },
                  m = V(o.id, s.toLocalized, "default", i);
                return ((f.toLocalized = m), f);
              })),
              d);
        });
        break;
      }
      case "FormPlainTextInputNode": {
        if (!Ke(l)) return;
        E(l, {
          formInputPlaceholderLocalized: V(o.id, l.formInputPlaceholderLocalized, "default", i),
        });
        break;
      }
      case "FormSelectNode": {
        if (!Ze(l) || !l.formSelectOptions) return;
        let { optionId: u } = t,
          d = l.formSelectOptions.map((s) => {
            if (s.id !== u) return s;
            let f = V(o.id, s.titleLocalized, "default", i);
            return { ...s, titleLocalized: f };
          });
        E(l, { formSelectOptions: d });
        break;
      }
      case "formSelectGenericOption": {
        if (!Ze(l)) return;
        let { key: u } = t;
        switch (u) {
          case "allItemsLabel": {
            let d = V(o.id, l.allItemsLabelLocalized, "default", i);
            E(l, { allItemsLabelLocalized: d });
            break;
          }
          case "booleanTrueLabel": {
            let d = V(o.id, l.booleanTrueLabelLocalized, "default", i);
            E(l, { booleanTrueLabelLocalized: d });
            break;
          }
          case "booleanFalseLabel": {
            let d = V(o.id, l.booleanFalseLabelLocalized, "default", i);
            E(l, { booleanFalseLabelLocalized: d });
            break;
          }
          default:
            $(u);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!J(l)) return;
        let u = l.segmentLocalized,
          d = V(o.id, u, "default", i);
        E(l, { segmentLocalized: d });
        break;
      }
      default:
    }
  }, a);
}
function pc(e, t, o, n, i) {
  e.scheduler.process(() => {
    let a = e.stores.treeStore.getDataTree(),
      r = $e(e),
      c = a.get(t.nodeId),
      l = t.type;
    if (ga(t)) {
      if (!M(c) && !Z(c) && !T(c)) return;
      let p = uo(a, r, c, t);
      if (!p) return;
      S(p.type === "richtext");
      let u = structuredClone(p);
      ((u.valueLocalized = V(o.id, p.valueLocalized, "default", n)), po(a, r, c, t, u));
    } else {
      (S(l === "RichTextNode"), S(Pe(c)));
      let p = V(o.id, c.htmlLocalized, "default", n);
      (E(c, { htmlLocalized: p }), Ct(c) && Ho(e) && bt(e, Tt(e, [c.id])).catch(yo));
    }
  }, i);
}
function lr(
  e,
  t,
  o,
  n,
  i,
  {
    needsReview: a,
    generatedByAI: r,
    pluginId: c,
    pluginMode: l,
    ignoreTracking: p,
    trackingSource: u,
  }
) {
  let d = vi(e, fc(t, o), i, { needsReview: a, generatedByAI: r, pluginId: c, pluginMode: l });
  return (
    p ||
      oo(i ? "localized_value_update" : "localized_value_create", {
        code: n.code,
        valueLength: typeof e == "string" ? e.length : 0,
        generatedByAI: !!d.generatedByAI,
        source: u,
      }),
    d
  );
}
function fc(e, t) {
  switch (t) {
    case "default":
      return e.hash;
    case "imageSrc":
      return (S(rt(e)), e.imageHash);
    default:
      $(t);
  }
}
function mc(e, t) {
  if (!t.draft) return;
  let o = e.stores.localizationStore.progressPerLocale[t.id];
  !ge(o) ||
    o === 1 ||
    e.scheduler.runBeforeNextFrame(() => {
      e.stores.localizationStore.getCurrentExactProgressForLocale(e, t.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (e.stores.modalStore.stack.some(({ type: i }) => i === "BatchTranslate") ||
          e.stores.localizationStore.batchTranslationState?.localeIds.has(t.id) ||
          e.stores.modalStore.set({ type: "LocaleReady", activeLocale: t, source: "automatic" }));
    });
}
function yc(e, t) {
  if (!e.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let o = e.stores.treeStore.getDataTree().get(t.nodeId);
  if (!U(o) && !M(o)) return;
  let n = U(o) ? o.id : o.parentid;
  n && e.stores.codeGenerationStore.updateComponent(n).catch(yo);
}
function cr(e, t, o) {
  Ho(e) && (mc(e, o), yc(e, t));
}
function ur(e, t, o, n, i) {
  let {
    needsReview: a,
    generatedByAI: r,
    pluginId: c,
    pluginMode: l,
    ignoreTracking: p,
    target: u = "default",
    trackingSource: d,
    preserveExistingTextType: s,
    eventType: f,
  } = i;
  if (t !== null && typeof t != "string") {
    (pc(
      e,
      o,
      n,
      (m) =>
        lr(t, o, u, n, m, {
          needsReview: a,
          generatedByAI: r,
          pluginId: c,
          pluginMode: l,
          ignoreTracking: p,
          trackingSource: d,
        }),
      f
    ),
      cr(e, o, n));
    return;
  }
  (dr(
    e,
    o,
    n,
    u,
    (m) => {
      let g = lr(t, o, u, n, m, {
        needsReview: a,
        generatedByAI: r,
        pluginId: c,
        pluginMode: l,
        ignoreTracking: p,
        trackingSource: d,
      });
      if (
        (u === "imageSrc" &&
          ("imageFocalPoint" in i
            ? i.imageFocalPoint && (g.imageFocalPoint = i.imageFocalPoint)
            : m?.imageFocalPoint && (g.imageFocalPoint = m.imageFocalPoint)),
        s)
      )
        if (u === "default") {
          let y = o.localizedValues[n.id],
            L = y?.value ?? null;
          (S(L === t, "The text type can only be preserved when the source value is unchanged"),
            y?.type && (g.type = y.type));
        } else u === "imageSrc" || $(u);
      else ya(o) && (g.type = "rich-text");
      return g;
    },
    f
  ),
    cr(e, o, n));
}
function pr(e, t) {
  let o = e.localizedValues[t.id];
  return o ? o.value : null;
}
function sm(e, t, o, n) {
  let i = "default",
    a = pr(t, o),
    r = t.localizedValues[o.id];
  if (rt(t)) {
    let c = t.imageLocalizedValues[o.id];
    c && ((i = "imageSrc"), (a = c.value), (r = c));
  }
  (ur(e, a, t, o, {
    needsReview: !0,
    ignoreTracking: !0,
    target: i,
    trackingSource: n,
    preserveExistingTextType: !0,
  }),
    oo("localized_value_request_review", {
      code: o.code,
      valueLength: typeof a == "string" ? a.length : 0,
      generatedByAI: !!r?.generatedByAI,
      source: n,
    }));
}
function dm(e, t, o, { trackingSource: n, ignoreTracking: i }) {
  let a = "default",
    r = pr(t, o),
    c = t.localizedValues[o.id];
  if (rt(t)) {
    let l = t.imageLocalizedValues[o.id];
    l && ((a = "imageSrc"), (r = l.value), (c = l));
  }
  (ur(e, r, t, o, {
    ignoreTracking: !0,
    target: a,
    trackingSource: n,
    preserveExistingTextType: !0,
  }),
    i ||
      oo("localized_value_approve", {
        code: o.code,
        valueLength: typeof r == "string" ? r.length : 0,
        generatedByAI: !!c?.generatedByAI,
        source: n,
      }));
}
function um(e, t, o, { target: n, ignoreTracking: i, trackingSource: a, eventType: r }) {
  dr(
    e,
    t,
    o,
    n,
    (c) => {
      let l = c?.value;
      i ||
        oo("localized_value_clear", {
          code: o.code,
          valueLength: typeof l == "string" ? l.length : 0,
          generatedByAI: !!c?.generatedByAI,
          source: a,
        });
    },
    r
  );
}
export {
  kc as a,
  Ni as b,
  Lr as c,
  wi as d,
  Mi as e,
  as as f,
  rs as g,
  Ir as h,
  ls as i,
  io as j,
  fs as k,
  F as l,
  Y as m,
  Oe as n,
  Nt as o,
  qo as p,
  Yo as q,
  be as r,
  Bi as s,
  Us as t,
  js as u,
  _s as v,
  Hd as w,
  su as x,
  du as y,
  il as z,
  uu as A,
  ca as B,
  al as C,
  Gt as D,
  sa as E,
  nt as F,
  $p as G,
  Up as H,
  jp as I,
  _p as J,
  ya as K,
  ga as L,
  Kp as M,
  rt as N,
  Zp as O,
  qp as P,
  Yp as Q,
  ml as R,
  Xp as S,
  La as T,
  bl as U,
  Ne as V,
  Jp as W,
  Wl as X,
  Ol as Y,
  $l as Z,
  wa as _,
  Kl as $,
  Qp as aa,
  ef as ba,
  Oa as ca,
  of as da,
  tf as ea,
  $e as fa,
  bf as ga,
  zc as ha,
  Tc as ia,
  bc as ja,
  vc as ka,
  ar as la,
  Nf as ma,
  Df as na,
  Pf as oa,
  kf as pa,
  Ff as qa,
  Mf as ra,
  cc as sa,
  wf as ta,
  Bf as ua,
  ur as va,
  sm as wa,
  dm as xa,
  um as ya,
};
//# sourceMappingURL=chunk-JJ4EKH4G.mjs.map
