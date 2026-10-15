import { d as Mn, f as Sn } from "chunk-G347UL3E.mjs";
import {
  E as eo,
  K as ln,
  L as dn,
  Z as un,
  _ as cn,
  a as on,
  aa as st,
  b as rn,
  c as sn,
  d as an,
  ta as pn,
} from "chunk-EZR2L3GG.mjs";
import {
  Dh as tn,
  Dj as lt,
  Ej as yn,
  Ij as hn,
  Jj as gn,
  Na as qt,
  Oc as qr,
  Og as en,
  Xf as Yr,
  gc as Hr,
  hc as it,
  ic as Zr,
  jg as Qr,
  kc as Yt,
  lg as Jr,
  ng as Xr,
  wj as at,
  xj as to,
  yj as oo,
  zj as no,
} from "chunk-X6KYUBI3.mjs";
import { a as gr } from "chunk-AUBVKPQ2.mjs";
import { a as In } from "chunk-V3C5CSFI.mjs";
import { S as Jt } from "chunk-I4WT2FX6.mjs";
import { kd as $r, lc as Wr, p as Gt } from "chunk-3FUXG6IG.mjs";
import { Lc as Ht, Oc as Zt, Tb as jr, a as Br, w as Ur } from "chunk-J4HUNAWY.mjs";
import { e as Gr } from "chunk-BIHMMN5H.mjs";
import { f as Kr, i as nn, o as mn, s as ro } from "chunk-7ZCOVLUS.mjs";
import { w as De, x as fn } from "chunk-F6RLQDVI.mjs";
import {
  $h as xr,
  Bi as Lr,
  Dh as hr,
  Ei as Tr,
  Gi as _t,
  Ki as wr,
  Kl as Dr,
  Mq as _r,
  Qh as Mr,
  Ql as ee,
  Rh as tt,
  Rl as Vr,
  Sh as Bt,
  Sl as zr,
  Ug as Ft,
  Uh as Ot,
  V as Xo,
  Wh as Sr,
  Wl as Ar,
  Xl as nt,
  Yh as Ir,
  _h as Cr,
  _l as Me,
  bk as rt,
  bl as Rr,
  cl as Nr,
  cn as Fr,
  d as $o,
  dl as Wt,
  el as kr,
  gb as nr,
  hp as Or,
  ji as ot,
  kt as $t,
  lb as ir,
  ln as ke,
  mi as Ut,
  oi as vr,
  pn as jt,
  pw as Kt,
  ri as Er,
  sh as yr,
  tf as At,
  ti as br,
  ui as Pr,
  ve as he,
  we as mr,
} from "chunk-UXZIPXJM.mjs";
import {
  Aa as _o,
  Ba as Ze,
  Ca as g,
  Fm as lr,
  Ha as Wo,
  In as dr,
  Ip as pr,
  Ja as Ct,
  Li as ye,
  Lj as rr,
  Na as bt,
  Sd as Qe,
  Sn as ur,
  Tb as Tt,
  Tn as Vt,
  Ui as tr,
  Vb as wt,
  Vn as zt,
  Xn as cr,
  Yk as Dt,
  Zq as Y,
  al as sr,
  cr as Xe,
  db as Go,
  dr as et,
  eb as qe,
  ej as or,
  fb as Pt,
  gb as Lt,
  gc as Zo,
  kb as Ko,
  lb as Ho,
  m as pe,
  mc as qo,
  me as Qo,
  nb as X,
  nc as K,
  nm as ar,
  oe as Jo,
  pe as Rt,
  ra as Oo,
  rr as fr,
  sa as F,
  sb as Ye,
  ta as Z,
  tb as q,
  ua as N,
  ui as er,
  wa as fe,
  xa as ve,
  xb as Ee,
  xn as Ne,
  ya as Uo,
  yb as G,
} from "chunk-NVJBCFG7.mjs";
import { c as se } from "chunk-YXZOQYF3.mjs";
import { a as Xt } from "chunk-4HRYW54D.mjs";
import { f as te } from "chunk-XVWVYELK.mjs";
import { a as Qt } from "chunk-24G7FGVN.mjs";
import { g as Nt } from "chunk-K3IJ2B65.mjs";
import { d as Je, f as ge } from "chunk-F4VWGYZ2.mjs";
import { a as Bo } from "chunk-KQKA2AEH.mjs";
import { b as Yo } from "chunk-YSP5ZHDJ.mjs";
import { b as Ao } from "chunk-AUNF3KWQ.mjs";
import { a as kt } from "chunk-AYNVEX5D.mjs";
import { a as Fo } from "chunk-2FCXHKEL.mjs";
import { p as E } from "chunk-O36H34II.mjs";
import {
  a as jo,
  b as M,
  e as me,
  f as $,
  k as xt,
  n as Re,
  o as vt,
  q as Et,
} from "chunk-Y3GZLMBF.mjs";
import { b as m, c as H } from "chunk-4JY5UMT2.mjs";
import { b as It } from "chunk-QH2JT54C.mjs";
import { b as J, i as He } from "chunk-GOPQO4KR.mjs";
import { a as zo } from "chunk-YRQ7G4QH.mjs";
import {
  e as Ro,
  f as No,
  g as ko,
  h as j,
  i as ce,
  j as W,
  k as z,
  l as O,
  m as Q,
  p as Do,
  q as Vo,
} from "chunk-WLHSDIGQ.mjs";
var Cn = [he.video, he.youtube, he.vimeo, he.codeblock, he.twitter, he.embed];
function la(o, e) {
  let t = g(e);
  return Z(t)
    ? t.type === "canvasComponent"
    : F(t)
      ? o.tree.getNodeWithTrait(t.moduleId, K)?.type === "canvasComponent"
      : !1;
}
async function da(o, e) {
  let t = g(e);
  F(t) && (await o.stores.modulesStore.addExternalModulesToProject([t], { onTreeUpdate() {} }));
}
var vn = new WeakMap();
async function ua(o) {
  let { modules: e } = await o.stores.modulesStore.lookUpModules(Cn.map(mr)),
    t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    m(n, "Module must exist");
    let i = Cn[r];
    (m(i, "Module component must exist"),
      vn.set(i, n),
      m(n.files.module, "Module must have a module file"),
      t.push(fe(n.id, n.saveId, n.files.module, i.exportSpecifier ?? "default")));
  }
  await o.stores.modulesStore.preloadExternalModules(t);
}
function ca(o, e) {
  let t = vn.get(e);
  m(t, "Preloaded module must exist");
  let r = o.getNodeWithTrait(t.id, K);
  return r
    ? r.codeComponentIdentifier
    : (m(t.files.module, "Module must have a module file"),
      fe(t.id, t.saveId, t.files.module, e.exportSpecifier ?? "default").value);
}
var oe = Ro(Fo(), 1),
  En = "dismissedInstantNPMToast",
  bn = "showedInstantNPMToast",
  Pn = "instant-npm-toast",
  ya = () => window.localStorage.getItem(bn) === "true",
  Ln = () => window.localStorage.getItem(En) === "true";
function qi() {
  return (0, oe.jsxs)(oe.Fragment, {
    children: [
      (0, oe.jsx)(Xt, { children: "Installed NPM library." }),
      (0, oe.jsxs)("a", {
        href: "https://www.framer.com/developers/#faq",
        target: "_blank",
        children: [" ", (0, oe.jsx)(Xt, { children: "Learn more." })],
      }),
    ],
  });
}
function Tn() {
  (window.localStorage.setItem(bn, "true"),
    se({
      type: "add",
      variant: "info",
      text: (0, oe.jsx)(qi, {}),
      key: Pn,
      duration: 1 / 0,
      showCloseButton: "never",
      action: { title: "Dismiss", onClick: () => window.localStorage.setItem(En, "true") },
    }));
}
function ha() {
  se({ type: "remove", key: Pn });
}
function va(o, e, t) {
  let r = e && o.getNode(e);
  if (!r || !ye(r)) return t(e, {}, !1);
  let n = ir(o, r) ? {} : { visible: !1 },
    i = t(r.originalid, n, !0);
  if (i === void 0) return;
  let a = hr.getReplicaForTemplateNode(o, r);
  return a ? (n.visible === !1 && gr(o, a, i, { visible: !0 }), $o(a.id, i)) : i;
}
function wn(o, e, t = o.id) {
  let r = o.children;
  return Qo(o) ? (!r || r.length === 0 ? [] : (e.getChildrenRects(t) ?? [])) : null;
}
var Yi = { track: !0 };
function Rn(o) {
  let e = { ...o, event: "external_component_insert" };
  Ao(e, Yi);
}
function Dn(o, e, t) {
  if ((o >= e && o <= t) || (o <= e && o >= t)) return 0;
  let r = Math.abs(e - o),
    n = Math.abs(t - o);
  return Math.min(r, n);
}
function Qi(o, e, t) {
  let r = o ? "y" : "x",
    n = o ? "height" : "width",
    i = e[r],
    a = 0,
    l = 1 / 0;
  return (
    t.forEach((s, c) => {
      if (l === 0) return;
      let d = s[r],
        u = d + s[n],
        p = Dn(i, d, u);
      p < l && ((a = c), (l = p));
    }),
    a
  );
}
function Ji(o, e, t, r) {
  let n = Math.max(o, t),
    i = Math.min(e, r);
  return n < i;
}
function Xi(o, e, t) {
  let r = o ? "y" : "x",
    n = o ? "height" : "width",
    i = t[e];
  m(i, () => `Out of bound access to childRects: ${e} ${JSON.stringify(t)}`);
  let a = i[r],
    l = a + i[n],
    s = new Set([e]);
  return (
    t.forEach((c, d) => {
      if (d === e) return;
      let u = c[r],
        p = u + c[n];
      Ji(a, l, u, p) && s.add(d);
    }),
    { startIndex: Math.min(...s), endIndex: Math.max(...s) }
  );
}
function es(o, e, t, r, n, i) {
  if (n) return r.startIndex;
  if (i) return r.endIndex;
  let a = e ? "x" : "y",
    l = e ? "width" : "height",
    s = o[a],
    c = 1 / 0,
    d = r.startIndex;
  for (let u = r.startIndex; u <= r.endIndex; u++) {
    let p = t[u];
    m(p, () => `Ouf of bound access to childRects: ${u} ${JSON.stringify(r)} ${JSON.stringify(t)}`);
    let f = p[a],
      h = f + p[l],
      y = Dn(s, f, h);
    y < c && ((c = y), (d = u));
  }
  return d;
}
function ts(o, e) {
  let t = [];
  for (let r = e.startIndex; r <= e.endIndex; r++) {
    let n = o[r];
    (m(
      n,
      () => `Ouf of bound access to childRects: ${r} ${JSON.stringify(e)} ${JSON.stringify(o)}`
    ),
      t.push(n));
  }
  return pe.merge(...t);
}
function os(o, e, t, r) {
  let n = Pt(o) || o.resolveValue("stackDirection") === "horizontal",
    i = pe.merge(...e),
    a = n ? "x" : "y",
    l = n ? "y" : "x",
    s = n ? "width" : "height",
    c = n ? "height" : "width",
    d = t[a],
    u = t[l],
    p = i[l],
    f = p + i[c],
    h = u < p,
    y = !h && u > f,
    S = Qi(n, t, e),
    V = Xi(n, S, e),
    b = es(t, n, e, V, h, y),
    P = e[b];
  m(P, () => `Closest rect is not defined: ${b}`);
  let L = P[a] + P[s] / 2,
    T = h || y ? h : d < L,
    v = T ? b : b + 1;
  (h && (v = 0), y && (v = e.length));
  let k = P[a],
    A = k + P[s],
    _ = T ? k : A,
    w = null,
    I = T ? b - 1 : b + 1;
  if (I >= V.startIndex && I <= V.endIndex) {
    let ne = e[I];
    if (ne) {
      let ie = ne[a],
        St = ie + ne[s];
      w = T ? St : ie;
    }
  }
  let R = _;
  me(w) && (R = Math.round((R + w) / 2));
  let de = ts(e, V),
    Ge = Math.round(de[l] + de[c] / 2),
    we = { [a]: R, [l]: Ge },
    Ie = { ...we },
    Ce = { ...we },
    Ke = r[c],
    ue = Math.round(Ke / 2);
  return (
    n ? ((Ie.y -= ue), (Ce.y += ue)) : ((Ie.x -= ue), (Ce.x += ue)),
    { insertionIndex: v, localInsertionLine: { a: Ie, b: Ce } }
  );
}
function rs(o, e) {
  let t = { insertionIndex: 0, localInsertionLine: { a: { ...e }, b: { ...e } } };
  if (o.length === 0) return t;
  let r = new Map(),
    n = 1e3;
  o.forEach((p, f) => {
    let h = Math.round(p.x * n),
      y = r.get(h);
    y
      ? (y.indices.push(f), p.width > y.width && (y.width = p.width))
      : r.set(h, { x: p.x, width: p.width, indices: [f] });
  });
  let i = Array.from(r.values()).sort((p, f) => p.x - f.x),
    a = i.find((p) => e.x >= p.x && e.x <= p.x + p.width);
  if (
    (a ||
      (a = i.reduce((p, f) => {
        if (!p) return f;
        let h = f.x + f.width / 2,
          y = p.x + p.width / 2;
        return Math.abs(e.x - h) < Math.abs(e.x - y) ? f : p;
      }, i[0])),
    !a)
  )
    return t;
  let l = [...a.indices].sort((p, f) => {
      let h = o[p],
        y = o[f];
      return !h || !y ? 0 : h.y - y.y;
    }),
    s = l.findIndex((p) => {
      let f = o[p];
      return f ? e.y < f.y + f.height / 2 : !1;
    });
  s === -1 && (s = l.length);
  let c;
  s < l.length ? (c = l[s] ?? 0) : (c = (l[l.length - 1] ?? 0) + 1);
  let d;
  if (s <= 0) {
    if (!l[0]) return t;
    d = o[l[0]]?.y ?? 0;
  } else if (s >= l.length) {
    let p = l[l.length - 1];
    if (!p) return t;
    let f = o[p];
    if (!f) return t;
    d = f.y + f.height;
  } else {
    let p = l[s];
    if (!p) return t;
    let f = o[p];
    if (!f) return t;
    d = f.y;
  }
  let u = { a: { x: a.x, y: d }, b: { x: a.x + a.width, y: d } };
  return { insertionIndex: c, localInsertionLine: u };
}
var Nn = 4,
  kn = 20;
function Vn(o, e, t, r, n) {
  if (
    (m(e.length, "childInsertion only works correctly if there are more than 0 child rects"),
    E.isOn("betterStackGridItemMoving"))
  ) {
    let { rect: u, index: p } = pe.closestRect(e, r),
      f = Rt(o),
      h = Jo(o) ? !f : o.resolveValue("stackDirection") === "horizontal",
      y = h ? "x" : "y",
      S = h ? "y" : "x",
      V = h ? "width" : "height",
      b = h ? "height" : "width",
      P = r[y] < u[y] + u[V] / 2,
      L = f && me(o.gridColumnCount) ? Math.max(Math.floor(o.gridColumnCount), 1) : 1,
      T = P ? p - L : p + L,
      v = e[T],
      k = !v || (P ? v[y] >= u[y] : u[y] >= v[y]),
      A = P ? p : Math.min(p + L, e.length);
    if (k) {
      let _ = P ? u[y] + Nn : u[y] + u[V] - Nn;
      return {
        insertionIndex: A,
        localInsertionLine: { a: ut(y, _, u[S]), b: ut(y, _, u[S] + Math.max(u[b], kn)) },
      };
    } else {
      let _ = P ? (v[y] + v[V] + u[y]) / 2 : (u[y] + u[V] + v[y]) / 2;
      return {
        insertionIndex: A,
        localInsertionLine: {
          a: ut(y, _, Math.min(v[S], u[S])),
          b: ut(y, _, Math.max(v[S] + v[b], u[S] + Math.max(u[b], kn))),
        },
      };
    }
  }
  if (Pt(o) || o.stackWrapEnabled) return Rt(o) ? rs(e, r) : os(o, e, r, n);
  let i = 1 / 0,
    a = null,
    l = o.stackDirection === "vertical";
  e.forEach((u, p) => {
    let f = Math.abs(l ? r.y - u.y : r.x - u.x);
    f > i || ((i = f), (a = p));
  });
  let s = 0;
  if (a !== null) {
    let u = e[a];
    m(u, () => `Closest child rect is not defined: ${a}`);
    let p = pe.center(u);
    ((l ? r.y > p.y : r.x > p.x) && a++, (s = Math.min(Math.max(0, a), e.length)));
  }
  let c = is(o),
    d = ss(o.resolveValue("stackDirection"), o.resolveValue("stackAlignment"), c, t, e, s, n);
  return { insertionIndex: ns(o, s), localInsertionLine: d };
}
function ut(o, e, t) {
  return o === "x" ? { x: e, y: t } : { x: t, y: e };
}
function ns(o, e) {
  m(Ne(o), "A node must support children to consider an insertion index.");
  let t = e;
  for (let r = 0; r < o.children.length && r !== e; r++) {
    let n = o.children.at(r);
    n && (Fr(n) || t++);
  }
  return t;
}
function is(o) {
  let e = o.resolveValue("stackDirection"),
    t = o.resolveValue("stackAlignment");
  if (t === "center") return 0;
  let r = Br(o);
  if (!r.perSide) return r.top;
  let n = t === "start";
  return e === "vertical" ? (n ? r.left : r.right) : n ? r.top : r.bottom;
}
function ss(o, e, t, r, n, i, a) {
  let l = n[i - 1],
    s = n[i],
    c = o === "vertical",
    d = { x: r.width / 2, y: r.height / 2 };
  if (!(!l && !s)) {
    if (n.length === 1) {
      let u = l || s;
      (m(u, "Child rect must be defined"),
        i === 0
          ? c
            ? (d.y = u.y - 10)
            : (d.x = u.x - 10)
          : c
            ? (d.y = u.y + u.height + 10)
            : (d.x = u.x + u.width + 10));
    } else if (l && s) {
      let u = Math.abs(c ? l.y + l.height - s.y : l.x + l.width - s.x);
      c ? (d.y = s.y - u / 2) : (d.x = s.x - u / 2);
    } else if (l) {
      let u = n[i - 2];
      m(u, "Child rect must be defined");
      let p = Math.abs(c ? u.y + u.height - l.y : u.x + u.width - l.x);
      c ? (d.y = l.y + l.height + p / 2) : (d.x = l.x + l.width + p / 2);
    } else if (s) {
      let u = n[i + 1];
      m(u, "Child rect must be defined");
      let p = Math.abs(c ? s.y + s.height - u.y : s.x + s.width - u.x);
      c ? (d.y = s.y - p / 2) : (d.x = s.x - p / 2);
    }
  }
  return (
    (d.x = Math.min(Math.max(4, d.x), r.width - 4)),
    (d.y = Math.min(Math.max(4, d.y), r.height - 4)),
    as(o, e, t, d, r, a)
  );
}
function as(o, e, t, r, n, i) {
  let a = o === "vertical",
    l,
    s,
    c = t ?? 0;
  switch (e) {
    case "center":
      ((l = { x: a ? r.x - i.width / 2 : r.x, y: a ? r.y : r.y - i.height / 2 }),
        (s = { x: a ? r.x + i.width / 2 : r.x, y: a ? r.y : r.y + i.height / 2 }));
      break;
    case "start":
      ((l = { x: a ? c : r.x, y: a ? r.y : c }),
        (s = { x: a ? i.width + c : r.x, y: a ? r.y : i.height + c }));
      break;
    default:
      ((l = { x: a ? n.width - i.width - c : r.x, y: a ? r.y : n.height - i.height - c }),
        (s = { x: a ? n.width - c : r.x, y: a ? r.y : n.height - c }));
      break;
  }
  return { a: l, b: s };
}
var zn = 10;
function ls(o, e) {
  for (let t of o) if (e.includes(t)) return !0;
  return !1;
}
function ds(o, e, t, r, n) {
  if (n.length === 0 || o.stackWrapEnabled || tr(o) || ye(o)) return null;
  let { tree: i } = e,
    { zoom: a } = e.stores.canvasStore,
    l = i.getParent(o.id);
  if (l && qe(l) && (l.stackDirection !== o.stackDirection || l.stackWrapEnabled)) return null;
  let s = jt(i, o, t),
    c = i.getRect(o),
    d = o.stackDirection === "vertical",
    u = d ? "x" : "y",
    p = d ? "y" : "x",
    f = d ? "width" : "height",
    h = d ? "height" : "width",
    y = c[f],
    S = c[h],
    V = y * a,
    b = S * a;
  if (V < 40 || b < 40) return null;
  let P = s[u],
    L = 10 / a,
    T = pe.merge(...n),
    v = T[u],
    k = v + T[f],
    A = Math.max(L, v / 2),
    _ = Math.max(L, (y - k) / 2),
    w = P <= A,
    I = P >= y - _;
  if (!w && !I) return null;
  let R = w ? 0 : 1,
    de = r[h],
    Ge = 4 / a,
    we = w ? Ge : y - Ge,
    Ie = S / 2,
    Ce = de / 2,
    Ke = S / 3,
    ue = s[p],
    xe = "end";
  de > S ? (xe = "center") : ue < Ke ? (xe = "start") : ue < 2 * Ke && (xe = "center");
  let ne, ie;
  switch (xe) {
    case "start": {
      ((ne = 0), (ie = de));
      break;
    }
    case "end": {
      ((ie = S), (ne = ie - de));
      break;
    }
    default: {
      ((ne = Ie - Ce), (ie = Ie + Ce));
      break;
    }
  }
  let St = { [u]: we, [p]: ne },
    Ki = { [u]: we, [p]: ie },
    Hi = ke(i, o, St),
    Zi = ke(i, o, Ki);
  return { insertionIndex: R, insertionLine: { a: Hi, b: Zi }, wrap: { wrapAlignment: xe } };
}
function us(o, e, t, r, { allowWrapping: n = !0 } = {}) {
  if (!Ne(o)) return { insertionIndex: null, insertionLine: null };
  let i = wn(o, e.stores.layoutCache);
  if (!i) return { insertionIndex: null, insertionLine: null };
  if (qe(o) && n) {
    let p = ds(o, e, t, r, i);
    if (p) return p;
  }
  let a = e.tree,
    l = a.getRect(o),
    s = jt(a, o, t);
  if (i.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: c, localInsertionLine: d } = Vn(o, i, l, s, r),
    u = { a: ke(a, o, d.a), b: ke(a, o, d.b) };
  return { insertionIndex: c, insertionLine: u };
}
var cs = { width: 10, height: 10 };
function ol(o, e, t, r, n = !1) {
  m(t.length, "getStackOrGridInRange(): expects at least a single selected node");
  let i = o.stores.scopeStore.active;
  if (t.some(Xo)) return null;
  let l = Ur(o.tree, i, e)
    .filter(
      (d) =>
        !(
          (Or(d) && d.locked) ||
          !Ne(d) ||
          en(d) ||
          nr(o.tree, o.stores.overlayStore.activeOverlays, d)
        )
    )
    .reverse();
  if (r) {
    let d = r.id,
      u = l.find((p) => p.id === d);
    if (u) return u;
  }
  let s = null,
    c = t.map((d) => d.id);
  for (let d of l) {
    if (!rr(d) || (n && !or(d))) continue;
    let u = o.tree.getAncestorIds(d.id);
    if ((u.push(d.id), ls(u, c) || (s || (s = d), !Lt(d)))) continue;
    let { insertionLine: f } = us(d, o, e, cs);
    if (!f) continue;
    if (f.a.x === f.b.x) {
      if (Math.abs(e.x - f.a.x) * o.stores.canvasStore.zoom > zn) continue;
    } else if (f.a.y === f.b.y) {
      if (Math.abs(e.y - f.a.y) * o.stores.canvasStore.zoom > zn) continue;
    } else continue;
    if (t.every((y) => Gt(o.tree, d, y, i.id, o.componentLoader))) return d;
  }
  if (Lt(s)) {
    let d = s;
    if (t.every((p) => Gt(o.tree, d, p, i.id, o.componentLoader))) return s;
  }
  return null;
}
function rl(o, e, { wrapAlignment: t }) {
  let r = tn.addStack(o, [e]);
  if (!r) return null;
  let n = o.tree.getNode(r);
  return !n || !qe(n)
    ? null
    : (n.set({
        stackDirection: e.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: t,
      }),
      n);
}
function Un(o) {
  return o.type === "controlReference";
}
function _n(o, e, t, r) {
  let n = g(o.identifier);
  if (!(!n || !N(n))) {
    if (Z(n)) {
      let i = e.getObjectKey(n.localId, "save");
      if (n.type === "codeFile") {
        let s = ct(i?.propertyControls);
        if (s !== void 0) return Kn(s, n.exportSpecifier, r, t);
      }
      let a = i?.moduleId,
        l = o.moduleId ?? (typeof a == "string" ? a : void 0);
      return l ? An(l, void 0, n.exportSpecifier, r, e, t) : void 0;
    }
    if (F(n)) return An(o.moduleId ?? n.moduleId, n.saveId, n.exportSpecifier, r, e, t);
  }
}
function An(o, e, t, r, n, i) {
  return Kn(Wn(o, e, n), t, r, i);
}
function Wn(o, e, t) {
  let r = e ?? ms(o, t);
  if (!r) return;
  let n = t.getObjectKey(o, "propertyControlsBySaveId");
  if ($(n)) return ct(n[r]);
}
function ms(o, e) {
  let t = e.getObjectKey(o, "codeComponentIdentifier");
  if (!M(t)) return;
  let r = g(t);
  return F(r) ? r.saveId : void 0;
}
function ct(o) {
  if (o === null) return null;
  if (!$(o)) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!$(r)) return;
    let n = {};
    (M(r.controls) && (n.controls = r.controls),
      M(r.displayName) && (n.displayName = r.displayName),
      M(r.type) && (n.type = r.type),
      M(r.outputControls) && (n.outputControls = r.outputControls),
      (e[t] = n));
  }
  return e;
}
function ys(o, e) {
  if (!M(o)) return;
  let t = e.get(o);
  if (t !== void 0) return t ?? void 0;
  let r = hs(o);
  return (e.set(o, r ?? null), r);
}
function hs(o) {
  try {
    let e = JSON.parse(o);
    if (!$(e)) return;
    let t = {};
    for (let r in e) {
      let n = e[r];
      if (!$(n)) return;
      t[r] = n;
    }
    return t;
  } catch {
    return;
  }
}
function be(o) {
  return o === null ? !0 : ct(o) !== void 0;
}
function Fn(o, e, t) {
  if (o === null || typeof o == "string") return;
  let r = o?.[e]?.[t];
  return M(r) ? r : void 0;
}
function jn(o, e) {
  return Gn(o, e, "displayName");
}
function $n(o, e) {
  return Gn(o, e, "type");
}
function Gn(o, e, t) {
  let r = g(o);
  if (!(!r || !N(r))) {
    if (Z(r)) {
      if (r.type === "codeFile") {
        let n = e.getObjectKey(r.localId, "save");
        return Fn(ct(n?.propertyControls), r.exportSpecifier, t);
      }
      return;
    }
    if (F(r)) return Fn(Wn(r.moduleId, r.saveId, e), r.exportSpecifier, t);
  }
}
function Kn(o, e, t, r) {
  if (o === null) return null;
  if (typeof o == "string") return;
  let n = o?.[e];
  if (n) return ys(n[t], r);
}
function gs(o, e) {
  if (!(!o || !N(o)))
    switch (o.kind) {
      case "localModuleExport": {
        let t = e.getObjectKey(o.localId, "save")?.moduleId;
        return t ? t : void 0;
      }
      case "externalModuleExport":
        return o.moduleId;
      default:
        H(o);
    }
}
function Ms(o, e, t) {
  let r = Ss(e, o.entityIdentifier),
    n = g(r);
  if (!(!n || !N(n)))
    return {
      type: "controlReference",
      controlKey: o.controlKey,
      title: o.name || "Unknown",
      description: o.description,
      defaultValue: o.initialValue,
      optional: Xe(o, t) ? !0 : void 0,
      __defaultAssetReference:
        o.expectedType === "file" && M(o.initialValue) ? o.initialValue : void 0,
      module: { identifier: n.value, moduleId: gs(n, e) },
    };
}
function Ss(o, e) {
  let t = g(e);
  if (!F(t)) return e;
  let r = o.getObjectKey(t.moduleId, "codeComponentIdentifier");
  return M(r) ? r : e;
}
function Bn(o, e) {
  Xr(e) && (o[an(e.id)] = { type: "changehandler", changes: e.id });
}
function pt(o, e) {
  let t = o.getObjectKey(e, "variables");
  if (t === void 0 && o.has(e)) return [];
  if (!Array.isArray(t)) return;
  let r = [];
  for (let n of t) et(n) && r.push(n);
  return r;
}
function Is(o, e, t) {
  let r = pt(e, o);
  if (!r) return;
  let n = Ze("collection", o, "default").value,
    i = Ve(r, e, "ContentManagement", !1, {}, t),
    a = e.getObjectKey(o, "name"),
    l = lr({ name: M(a) && a ? a : void 0, dataIdentifier: n });
  return Ve(l, e, "ContentManagement", !1, i, t);
}
function io(o, e, t, r) {
  let n = e.name || "Unknown",
    i = Xe(e, t) ? !0 : void 0;
  switch (e.type) {
    case "array":
      return Cs(o, e, t, r);
    case "object":
      return xs(o, e, t, r);
    case "boolean":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : Y(e.type, e.initialValue),
        disabledTitle: e.options?.disabledTitle,
        enabledTitle: e.options?.enabledTitle,
        optional: i,
      };
    case "number":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : Y(e.type, e.initialValue),
        displayStepper: e.options?.displayStepper,
        max: e.options?.max,
        min: e.options?.min,
        optional: i,
        step: e.options?.step,
        unit: e.options?.unit,
      };
    case "color":
      return { type: e.type, title: n, description: e.description, defaultValue: e.initialValue };
    case "string":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : Y(e.type, e.initialValue),
        displayTextArea: e.options?.displayTextArea,
        maxLength: e.options?.maxLength,
        optional: i,
        placeholder: e.options?.placeholder,
        preventLocalization: e.preventLocalization,
      };
    case "richtext":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: Y(e.type, e.initialValue),
        maxLength: e.options?.maxLength,
        placeholder: e.options?.placeholder,
        preventLocalization: e.preventLocalization,
      };
    case "image":
      return M(e.initialValue)
        ? {
            type: "responsiveimage",
            title: n,
            description: e.description,
            __defaultAssetReference: e.initialValue,
          }
        : !Dt(e.initialValue) || !M(e.initialValue.value)
          ? { type: "responsiveimage", title: n, description: e.description }
          : {
              type: "responsiveimage",
              title: n,
              description: e.description,
              __defaultAssetReference: e.initialValue.value,
              __vekterDefault: {
                assetReference: e.initialValue.value,
                ...(Vt(e.initialValue) && M(e.initialValue.alt) ? { alt: e.initialValue.alt } : {}),
                ...(zt(e.initialValue)
                  ? { positionX: e.initialValue.positionX, positionY: e.initialValue.positionY }
                  : {}),
              },
            };
    case "eventhandler":
      return { type: e.type, title: n };
    case "link":
    case "scrollsectionref":
    case "customcursor":
    case "trackingid":
      return { type: e.type, title: n, description: e.description };
    case "linkrelvalues":
    case "cursor":
    case "gap":
    case "padding":
    case "borderradius":
    case "location":
      return { type: e.type, title: n, description: e.description, defaultValue: e.initialValue };
    case "date":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : Y(e.type, e.initialValue),
        displayTime: e.options?.displayTime ? !0 : void 0,
        optional: i,
      };
    case "enum": {
      let a = [],
        l = [];
      for (let s of e.cases) (a.push(s.id), l.push(s.name));
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : Y(e.type, e.initialValue),
        optional: i,
        options: a,
        optionTitles: l,
      };
    }
    case "file": {
      let a = new Set();
      for (let l of e.allowedFileTypes) l.extension && a.add(l.extension);
      return {
        type: e.type,
        title: n,
        description: e.description,
        allowedFileTypes: Array.from(a),
        __defaultAssetReference: Y(e.type, e.initialValue),
      };
    }
    case "transition": {
      let a = Y(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: a ? er(a) : void 0,
      };
    }
    case "border": {
      let a = Y(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: a ? dr(a) : void 0,
      };
    }
    case "boxshadow":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: e.initialValue.map(ur),
      };
    case "dimension":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : e.initialValue,
        optional: i,
        min: e.options?.min,
        max: e.options?.max,
        step: e.options?.step,
        units: e.options?.units,
        literals: e.options?.literals,
      };
    case "collectionreference":
    case "multicollectionreference":
      return {
        type: e.type,
        title: n,
        dataIdentifier: e.dataIdentifier,
        description: e.description,
        defaultValue: i ? void 0 : e.initialValue,
        optional: i,
      };
    case "vectorsetitem":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: e.initialValue,
        setModuleId: e.setModuleId,
      };
    case "slug":
      return { type: "string", title: n, description: e.description, preventLocalization: Es(o) };
    case "nodePropertyControlReference":
    case "controlReference":
      return null;
    default:
      H(e);
  }
}
function Cs(o, e, t, r) {
  let n = {},
    i = fr(e);
  for (let a of e.itemVariables) {
    if (!et(a)) continue;
    let l = io(o, a, t, r),
      s = l ? De({ control: l }).control : void 0;
    if (!(!s || !bt(s))) {
      if (i) {
        (m(s.type === "responsiveimage", "Gallery array items must be responsive images"),
          (n[a.id] = vs(s)));
        continue;
      }
      n[a.id] = s;
    }
  }
  return {
    type: e.type,
    title: e.name || "Unknown",
    control: { type: "object", controls: n },
    description: e.description,
    displayGalleryAsArray: e.displayGalleryAsArray === !0 ? !0 : void 0,
    maxCount: e.maxCount,
    minCount: e.minCount,
    __vekterDefault: e.initialValue?.map((a) => {
      let l = {};
      if (!a || a.type !== "object" || !$(a.value)) return l;
      for (let s of e.itemVariables) {
        if (s.type === "divider") continue;
        let c = a.value[s.id];
        if (!c) continue;
        let d = Hn(c, s.type);
        Re(d) || (l[s.id] = d);
      }
      return l;
    }),
  };
}
function xs(o, e, t, r) {
  let n = {};
  for (let l of e.fieldVariables) {
    let s = io(o, l, t, r),
      c = s ? De({ control: s }).control : void 0;
    !c || !bt(c) || (n[l.id] = c);
  }
  let i = Xe(e, t),
    a = {};
  if (!i)
    for (let l of e.fieldVariables) {
      let s = Hn(e.initialValue[l.id], l.type);
      Re(s) || (a[l.id] = s);
    }
  return {
    type: e.type,
    title: e.name || "Unknown",
    controls: n,
    description: e.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : a,
  };
}
function vs(o) {
  let { __defaultAssetReference: e, __vekterDefault: t, ...r } = o;
  return r;
}
function Hn(o, e) {
  if (Dt(o) && o.type === e)
    switch (e) {
      case "image": {
        if (!M(o.value)) return;
        let t = zt(o);
        return {
          assetReference: o.value,
          alt: Vt(o) ? o.alt : void 0,
          positionX: t ? o.positionX : void 0,
          positionY: t ? o.positionY : void 0,
        };
      }
      case "boolean":
        return jo(o.value) ? o.value : void 0;
      case "number":
        return me(o.value) ? o.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return M(o.value) ? o.value : void 0;
      case "richtext":
        return cr(o.value) ? o.value : void 0;
      case "link":
        return pr(o.value) ? o.value : void 0;
      case "vectorsetitem":
        return M(o.value) && N(o.value) ? o.value : void 0;
      default:
        H(e);
    }
}
function Es(o) {
  let e = o.getHierarchy().getRootId();
  if (!e) return !1;
  let t = o.getObjectKey(e, "webMetadata");
  return $(t) ? t.translatePagePaths === !1 : !1;
}
function bs(o, e) {
  let t = e.getObjectKey(o, "baseVariantId");
  if (!M(t) || !e.has(t)) return {};
  let r = [t];
  for (let l of e.getChildrenIds(o))
    l !== t && e.getObjectKey(l, "isVariant") === !0 && (e.getObjectKey(l, "gesture") || r.push(l));
  if (r.length < 2) return {};
  let n = [],
    i = [],
    a = new Set();
  for (let l of r) {
    let s = e.getObjectKey(l, "name"),
      c = (M(s) && s) || jr("Variant", a, { startIndex: a.size + 1, omitCountIfFirst: !1 });
    (a.add(c), n.push(l), i.push(c));
  }
  return { variant: { type: "enum", title: "Variant", options: n, optionTitles: i } };
}
function Ve(o, e, t, r, n, i) {
  for (let a of o) {
    if (!et(a)) continue;
    let l = Un(a) ? Ms(a, e, t) : void 0;
    if (l) {
      ((n[a.id] = l), r && Bn(n, a));
      continue;
    }
    let s = io(e, a, t, i);
    Et(s) || ((n[a.id] = s), r && Bn(n, a));
  }
  return n;
}
function Ps(o, e, t, r) {
  let n = pt(t, o);
  if (!n) return;
  let i = Ls(e, t),
    a = i ? n.filter((l) => i.has(l.id)) : n;
  return Ve(a, t, "SmartComponent", !0, bs(o, t), r);
}
function Ls(o, e) {
  let t = e.getObjectKey(o, "save")?.annotations?.default;
  if (t?.framerImmutableVariables !== !0) return;
  let r = t.framerVariables;
  if (Re(r)) return new Set();
  if ($(r)) return new Set(Object.keys(r));
}
function Ts(o, e, t) {
  let r = pt(e, o);
  if (r) return Ve(r, e, "LayoutTemplate", !1, {}, t);
}
function ws(o, e, t) {
  let r = e.getParentId(o);
  if (!r || r === Gr || e.getObjectKey(r, "__class") !== "VectorSetNode") return;
  let n = pt(e, r);
  if (n) return Ve(n, e, "VectorSet", !1, {}, t);
}
function Rs(o, e, t) {
  let r = g(o.identifier);
  if (!r || !N(r) || !Z(r) || r.exportSpecifier !== "default") return;
  let n = r.localIdName;
  switch (r.type) {
    case "canvasComponent":
      return Ps(n, r.localId, e, t);
    case "layoutTemplate":
      return Ts(n, e, t);
    case "collection":
    case "draftCollection":
      return Is(n, e, t);
    case "vector":
      return ws(n, e, t);
    case "codeFile":
    case "componentPresets":
    case "config":
    case "prototype":
    case "screen":
    case "css":
    case "webPageMetadata":
    case "siteMetadata":
    case "snippets":
    case "localization":
    case "vectorSet":
    case "design":
    case "kit":
    case "shader":
      return;
    default:
      H(r.type);
  }
}
function Ns(o, e, t, r) {
  let n = Rs(o, e, r);
  return n !== void 0 ? n : _n(o, e, t.parsedPropertyControls, "controls");
}
function Zn(o, e, t) {
  return {
    getStoredPropertyControls: (n, i) => Ns(n, o, i, e),
    verifyControls: t,
    cache: new Map(),
    parsedPropertyControls: new Map(),
    resolving: new Set(),
    resolvingReferences: new Set(),
  };
}
function ks(o, e) {
  let t = `${o.module.identifier}\0${o.module.moduleId ?? ""}\0${o.controlKey}`;
  if (e.resolvingReferences.has(t)) return;
  e.resolvingReferences.add(t);
  let n = e.getStoredPropertyControls(o.module, e)?.[o.controlKey];
  if (!n) {
    e.resolvingReferences.delete(t);
    return;
  }
  let i = qn(n, e);
  if ((e.resolvingReferences.delete(t), !!i))
    return De({
      control: {
        ...i,
        title: o.title,
        description: o.description,
        defaultValue: o.defaultValue,
        optional: o.optional,
        __defaultAssetReference: o.__defaultAssetReference,
      },
    }).control;
}
function qn(o, e) {
  let t = e.cache.get(o);
  if (t !== void 0) return t ?? void 0;
  if (e.resolving.has(o)) return;
  e.resolving.add(o);
  let r = Un(o) ? ks(o, e) : e.verifyControls({ control: o }).control;
  return (e.resolving.delete(o), e.cache.set(o, r ?? null), r);
}
function Yn(o, e) {
  let t = {};
  for (let r in o) {
    let n = o[r];
    if (!n) continue;
    let i = qn(n, e);
    i && (t[r] = i);
  }
  return t;
}
function wl(o, e, t) {
  return so({ identifier: o.instanceIdentifier }, e, t);
}
function so(o, e, t) {
  if (!t.enabled) return;
  let r = Zn(e, t, De),
    n = r.getStoredPropertyControls(o, r);
  if (Et(n)) return {};
  if (!Re(n)) return Yn(n, r);
}
function Qn(o, e, t) {
  if (!t.enabled) return;
  let r = Zn(e, t, fn),
    n = _n(o, e, r.parsedPropertyControls, "outputControls");
  if (n) return Yn(n, r);
}
function Dl(o, e) {
  let t = (n) => o.reactComponentForIdentifier(n)?.properties ?? null;
  if (!E.isOn("harness2")) return { getPropertyControls: t };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let i = t(n);
      if (i) return i;
      let a = r.get(n);
      if (a !== void 0) return a;
      let l = Ds(n, e);
      return (r.set(n, l), l);
    },
  };
}
function Ds(o, e) {
  let t = g(o);
  if (!t || !N(t)) return null;
  let r = e.resolvePropertyControls({ instanceIdentifier: t.value });
  return r === void 0 ? null : ze(r);
}
function ze(o) {
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!r) continue;
    let { hidden: n, ...i } = r;
    e[t] = i;
  }
  return e;
}
var Jn = ["loader", "tree-first", "tree-only"];
function Xn(o) {
  return Jn.find((e) => e === o);
}
var ao =
  typeof window > "u"
    ? void 0
    : Xn(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function ei(o) {
  ao = o;
}
function co() {
  return E.isOn("harness2");
}
function Se() {
  return co() ? ao || (E.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function ti() {
  return Jn;
}
function oi(o) {
  return Xn(o);
}
var U = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
  },
  lo = new Set(),
  uo = new Set();
function ri() {
  return {
    ...U,
    kindMismatches: [...U.kindMismatches],
    annotationRefusals: [...U.annotationRefusals],
  };
}
function ni() {
  ((U.treeHits = 0),
    (U.treeMisses = 0),
    (U.loaderFallbacks = 0),
    (U.loaderPreferred = 0),
    (U.kindMismatches.length = 0),
    (U.annotationRefusals.length = 0),
    lo.clear(),
    uo.clear());
}
function ii() {
  U.treeHits++;
}
function si() {
  U.treeMisses++;
}
function ai() {
  U.loaderFallbacks++;
}
function li() {
  U.loaderPreferred++;
}
function di(o, e) {
  lo.has(o) || (lo.add(o), U.kindMismatches.push({ identifier: o, loaderType: e }));
}
function po(o) {
  uo.has(o) || (uo.add(o), U.annotationRefusals.push(o));
}
var fo = Symbol("annotationRefusal");
function ui(o) {
  if (!o) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    r !== void 0 && (e[t] = M(r) ? r : JSON.stringify(r));
  }
  return e;
}
var Vs = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function zs(o) {
  return o.kind !== "localModuleExport" || o.exportSpecifier !== "default" ? !1 : Vs.has(o.type);
}
var ci = new WeakMap();
function As(o) {
  let e = 0;
  for (let t = o; t; t = t.base) e += t.length;
  return e;
}
function Fs(o) {
  let e = o.manifest,
    t = As(o),
    r = ci.get(o);
  if (r && r.branchManifest === e && r.rowCount === t) return r.answers;
  let n = new Map();
  return (ci.set(o, { branchManifest: e, rowCount: t, answers: n }), n);
}
function Ae(o) {
  throw new Error(
    `${o} is not available on the localization tree-controls loader: it is read-only`
  );
}
var mo = class extends rn {
  constructor(t, r, n, i) {
    super();
    this.loader = t;
    this.tree = r;
    this.store = n;
    this.mode = i;
  }
  loader;
  tree;
  store;
  mode;
  componentForIdentifier(t) {
    let r = this.loader.componentForIdentifier(t),
      n = this.treeAnswer(t);
    return (
      n ? ii() : si(),
      n && r && r.type !== n.definition.type && di(t, r.type),
      this.mode === "tree-only"
        ? (n?.definition ?? null)
        : n && this.preferTreeAnswer(n, r !== null)
          ? n.definition
          : (n ? li() : r && ai(), r)
    );
  }
  getDefinitionHash(t) {
    let r = this.treeAnswer(t);
    if (this.mode === "tree-only") return r?.hash ?? 0;
    let n = this.loader.getDefinitionHash(t);
    return r && this.preferTreeAnswer(r, n !== 0) ? r.hash : n;
  }
  preferTreeAnswer(t, r) {
    return t.derivedFromDocument || !r;
  }
  reactComponentForIdentifier(t) {
    let r = this.loader.componentForIdentifier(t);
    return r && r.type !== "component" ? null : super.reactComponentForIdentifier(t);
  }
  trackEntityReads(t, r) {
    return this.loader.trackEntityReads(t, r);
  }
  dataForIdentifier(t) {
    return this.loader.dataForIdentifier(t);
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
  errorForIdentifier(t) {
    return this.loader.errorForIdentifier(t);
  }
  updateEntity() {
    Ae("updateEntity");
  }
  deleteEntity() {
    Ae("deleteEntity");
  }
  setModuleRevision() {
    Ae("setModuleRevision");
  }
  testing = {
    setEntity: () => Ae("testing.setEntity"),
    clearEntities: () => Ae("testing.clearEntities"),
  };
  treeAnswer(t) {
    let r = Fs(this.store),
      n = r.get(t);
    if (n === fo) return (po(t), null);
    if (n !== void 0) return n;
    let i = this.resolveFromTree(t);
    return (r.set(t, i), i === fo ? (po(t), null) : i);
  }
  resolveFromTree(t) {
    let r = g(t);
    if (!r || !N(r)) return null;
    let n = E.isOn("harness2"),
      i = so({ identifier: r.value }, this.store, { enabled: n });
    if (i === void 0) return null;
    let a = this.moduleNodeFacts(r);
    if (a === null) return fo;
    let { name: l, annotations: s } = a,
      c = $n(r.value, this.store);
    if (c !== void 0 && c !== "hook" && c !== "component") return null;
    let d = {
        depth: 0,
        file: "",
        identifier: r.value,
        packageIdentifier: "",
        annotations: s,
        update: 0,
      },
      p = (c === "hook"
        ? {
            ...d,
            name: jn(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: ze(i),
            outputs: ze(Qn({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...d, name: l ?? "Unknown", type: "component", properties: ze(i) };
    return { hash: on(p), definition: p, derivedFromDocument: zs(r) };
  }
  moduleNodeFacts(t) {
    switch (t.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(t.localId, Me),
          n = ui(r?.save.annotations?.[t.exportSpecifier]);
        if (t.type === "codeFile") return { name: r?.getName(), annotations: n };
        let i = this.store.getObjectKey(t.localIdName, "name");
        return { name: (M(i) && i) || r?.getName(), annotations: n };
      }
      case "externalModuleExport": {
        let r = this.tree.getNodeWithTrait(t.moduleId, K);
        if (!r) return null;
        let n = g(r.codeComponentIdentifier);
        return n?.kind === "externalModuleExport" &&
          n.saveId === t.saveId &&
          n.exportSpecifier === t.exportSpecifier
          ? { name: r.getName(), annotations: ui(r.annotations) }
          : null;
      }
    }
  }
};
function ft(o) {
  return Se() !== "loader" && qt(o.timeline);
}
function mt(o, e) {
  let t = Se();
  return t === "loader" || !qt(e.timeline) ? o : new mo(o, e.getDataTree(), e.timeline.store, t);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: Se,
    setMode(o) {
      let e = oi(o);
      if (!e)
        throw new Error(
          `Unknown localization tree-controls mode: ${o}. One of ${ti().join(", ")}.`
        );
      if (e !== "loader" && !co())
        throw new Error(
          `Cannot force ${e}: the harness2 experiment is off, so nothing stores controls.`
        );
      return (ei(e), e);
    },
    stats: ri,
    reset: ni,
    wrap: mt,
    walk: pn,
    trackLookups: ln,
  });
var pi = new WeakMap();
function fi(o) {
  let e = pi.get(o);
  return e || ((e = { loadedRevision: -1, promise: void 0 }), pi.set(o, e), e);
}
function mi(o) {
  if (
    !E.isOn("deferNonVisibleModuleEvaluation") ||
    o.localizationComponentLoaderPolicy === "authoritative" ||
    (Se() === "tree-only" && ft(o.stores.treeStore))
  )
    return "ready";
  let { modulesStore: e } = o.stores,
    t = o.stores.treeStore.getDataTree().get(Ar);
  return e.localModules.size === 0 && !t?.children?.length
    ? "ready"
    : Kr(e.localModuleEvaluationMode)
      ? fi(e).loadedRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : o.componentLoader.modulesRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function Be(o) {
  return mi(o) !== "ready";
}
function nd(o) {
  return !ft(o.stores.treeStore) && Be(o);
}
async function Bs(o, e) {
  if (!e) return o;
  e?.throwIfAborted();
  let t = () => {},
    r = new Promise((n, i) => {
      ((t = () => i(e.reason)), e.addEventListener("abort", t, { once: !0 }));
    });
  try {
    await Promise.race([o, r]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
function Fe(o) {
  let e = ft(o.stores.treeStore);
  return o.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: mt(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: mt(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !e && Be(o),
      };
}
async function yo(o, e) {
  let { modulesStore: t } = o.stores,
    r = fi(t);
  if (!Be(o)) {
    e?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = mi(o)) !== "ready";) {
    if (!r.promise) {
      let i = n,
        l = (
          i === "load-all"
            ? it(o.componentLoader, t, "localization")
            : Zr(o.componentLoader, t, "localization")
        )
          .then(() => {
            i === "load-all" && (r.loadedRevision = o.componentLoader.modulesRevision);
          })
          .finally(() => {
            r.promise === l && (r.promise = void 0);
          });
      r.promise = l;
    }
    await Bs(r.promise, e);
  }
}
async function id(o, e) {
  let t = Fe(o);
  return (t.needsFallbackBeforeRead && (await yo(o, e)), e?.throwIfAborted(), t.componentLoader);
}
function yi(o) {
  return o.unresolvedLocalizableCount > 0;
}
function sd(o, e) {
  return yi(e) && Be(o);
}
async function ad(o, e, t = o.signal) {
  var s = [];
  try {
    let r = Fe(o);
    r.needsFallbackBeforeRead && (await yo(o, t));
    t?.throwIfAborted();
    let n = Do(s, dn());
    let i = o.componentLoader.activeBundleHash;
    let a = await e(r.componentLoader);
    if (!r.usesTreeControls || Se() === "tree-only" || !yi(n.lookups)) return a;
    let l = Be(o);
    l && (await yo(o, t));
    if (!l && i === o.componentLoader.activeBundleHash) return a;
    t?.throwIfAborted();
    return await e(Fe(o).componentLoader);
  } catch (c) {
    var d = c,
      u = !0;
  } finally {
    Vo(s, d, u);
  }
}
function hi(o) {
  let e = o.remoteTreeVersion;
  return e < 1e13 ? e : Math.floor(e / 1e3);
}
var Os = He("ensureComponentsLoadedWithTargetedLoad"),
  Us = 2e4,
  _s = 50,
  Ws = 5e3;
async function Mi(o, e, t, r, n = Us) {
  let i = performance.now(),
    a = i + n,
    l,
    s = gi(t, o);
  for (; s.length > 0 && performance.now() < a;) {
    let u = Math.min(performance.now() + Ws, a);
    try {
      await Promise.race([e(s), Nt(u - performance.now())]);
    } catch (p) {
      l = p;
      break;
    }
    for (; performance.now() < u && ((s = gi(t, o)), s.length !== 0);) await Nt(_s);
  }
  let c = Yt(t, o);
  if (c.length === 0) return;
  let d = c.filter((u) => Si(u, o));
  throw (
    Os.debug("targeted load did not produce definitions", {
      callSite: r,
      missing: c,
      errored: d,
      loadRequestError: l,
    }),
    te("component_loader_wait_failed", {
      callSite: r,
      reason: l === void 0 ? "modules-missing" : "load-request-failed",
      durationMs: performance.now() - i,
      missingCount: c.length,
      errorCount: d.length,
    }),
    new Hr(
      "ensureComponentsInLoader: Some modules are missing.",
      r,
      c,
      d,
      l === void 0 && s.length > 0
    )
  );
}
function gi(o, e) {
  return Yt(o, e).filter((t) => !Si(t, e));
}
function Si(o, e) {
  let t = g(o);
  return t ? Jr(e.componentForIdentifier(Oo(t))) : !1;
}
function Ii(o, e) {
  if (!o || o.length === 0) return e?.placeholder ?? "";
  if (o.length === 1) return o[0] && o[0] !== "" ? o[0] : (e?.placeholder ?? "");
  let t = [...o],
    r = "";
  if (e?.max && e.max < o.length) {
    let n = o.length - e.max;
    ((t = t.slice(0, e.max)), (r = `${n} ${n > 1 ? "others" : "other"}`));
  } else r = t.pop() ?? "";
  return t.length > 1 ? `${t.join(", ")}, and ${r}` : `${t.join(", ")} and ${r}`;
}
function Oe(o) {
  let e = g(o);
  if (!(!e || !N(e) || !F(e))) return `${e.moduleId}:${e.exportSpecifier}`;
}
function Ci(o) {
  let e = new Map();
  for (let t of o) {
    let r = Oe(t);
    r && e.set(r, t);
  }
  return e;
}
function xi(o, e) {
  let t = o.getRawControlProps();
  for (let r in t) {
    let n = t[r]?.type,
      i = t[r]?.value;
    if (n !== "vectorsetitem" || !M(i) || !N(i)) continue;
    let a = Oe(i);
    if (!a || !e.has(a)) continue;
    let l = e.get(a);
    l && o.setControlProp(r, { type: "vectorsetitem", value: l });
  }
}
function vi(o, e) {
  for (let t of e) {
    xi(t, o);
    let r = Oe(t.codeComponentIdentifier);
    if (!r || !o.has(r)) continue;
    let n = o.get(r);
    n && t.set({ codeComponentIdentifier: n });
  }
}
function Ei(o, e) {
  let t = Dr(e);
  if (t) {
    m(t.isLoaded(), "CMS Should always be loaded.");
    for (let { node: r, skipChildren: n } of t.walkWithSkipChildren()) {
      if (Ee(r)) {
        if (!r.variables.some((l) => l.type === "vectorsetitem")) {
          n();
          continue;
        }
        bi(r, o);
      }
      if (!G(r)) continue;
      let i = r.getControlProps();
      for (let a in i) {
        let l = i[a]?.value;
        if (i[a]?.type !== "vectorsetitem" || !M(l) || !N(l)) continue;
        let c = Oe(l);
        if (!c || !o.has(c)) continue;
        let d = o.get(c);
        d && r.setControlProp(a, { ...i[a], value: d });
      }
    }
  }
}
function bi(o, e) {
  let t = !1,
    r = o.variables.map((n) => {
      if (n.type !== "vectorsetitem") return n;
      let { initialValue: i } = n,
        a = i.identifier;
      if (!a) return n;
      let l = Oe(a);
      if (!l || !e.has(l)) return n;
      let s = e.get(l);
      return s ? ((t = !0), { ...n, initialValue: { ...i, identifier: s } }) : n;
    });
  t && o.set({ variables: r });
}
function Pi(o, e) {
  for (let t of e.root.children) {
    if (X(t)) {
      xi(t, o);
      continue;
    }
    (Ko(t) || Ho(t)) && bi(t, o);
  }
}
function ho(o, e, t) {
  let r = o.get(e);
  if (r) return r;
  let n = t();
  return (o.set(e, n), n);
}
function Li() {
  return {};
}
function Ti(o) {
  let e = { controls: Ft(o.properties), displayName: o.name, type: o.type };
  return (Qr(o) && (e.outputControls = Ft(o.outputs)), e);
}
function yt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = g(r.identifier);
    if (!Z(n) || !N(n) || n.type !== "codeFile" || (e && !e.has(n.localId))) continue;
    let i = ho(t, n.localId, Li);
    i[n.exportSpecifier] = Ti(r);
  }
  return t;
}
function ht(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = g(r.identifier);
    if (!F(n) || !N(n) || (e && !e.has(n.moduleId))) continue;
    let i = ho(t, n.moduleId, () => new Map()),
      a = ho(i, n.saveId, Li);
    a[n.exportSpecifier] = Ti(r);
  }
  return t;
}
function wi(o) {
  let e = g(o.codeComponentIdentifier);
  if (F(e)) return e.saveId;
}
function gt(o, e, t) {
  return o.get(e)?.get(t);
}
function go(o, e, t) {
  return { ...o?.propertyControlsBySaveId, [e]: at(t) };
}
function Ri(o) {
  for (let e of ee.getModuleNodes(o)) {
    let t = wi(e);
    if (t && !be(e.propertyControlsBySaveId?.[t])) return !0;
  }
  return !1;
}
function Mo(o) {
  let e = [];
  for (let t of ee.getModuleNodes(o)) {
    let r = wi(t);
    if (!r || be(t.propertyControlsBySaveId?.[r])) continue;
    let n = g(t.codeComponentIdentifier);
    F(n) && e.push(n);
  }
  return e;
}
var C = He("modules-store"),
  js = 5e3,
  Ni = new Set(["codeFile", "canvasComponent", "screen", "layoutTemplate", "vector"]),
  $s = 500,
  Gs = 100,
  Ks = 10 * 6e4;
function Hs(o) {
  return "sourceContent" in o && M(o.sourceContent);
}
function Mt(o) {
  let { module: e, exportSpecifier: t } = o,
    { id: r, saveId: n, files: i } = e;
  return (m(i.module, "module file must exist for a saved module"), fe(r, n, i.module, t));
}
var ki, Di, Vi, zi, Ai, Fi, D, So, Io, Co, xo, vo, Eo, Ue, Pe, _e, Le, We, ae, le, Te;
((Fi = [ge()]), (Ai = [ge()]), (zi = [ge()]), (Vi = [ge()]), (Di = [ge()]), (ki = [ge()]));
var re = class {
  constructor(e, t, r, n, i, a, l, s, c, d, u) {
    this.scheduler = e;
    this.componentLoader = t;
    this.treeStore = r;
    this.loadedExternalModulesStore = n;
    this.chromeStore = i;
    this.modulesAPIServicePromise = a;
    this.makeDocumentReadOnly = l;
    this.insertTemporaryImportMap = s;
    this.loadLocalModules = c;
    this.loadAllLocalModules = d;
    this.abortSignal = u;
    (O(this, So, j(D, 8, this)), j(D, 11, this));
    (O(this, Io, j(D, 12, this, new Map())), j(D, 15, this));
    (O(this, Co, j(D, 16, this, new Map())), j(D, 19, this));
    (O(this, xo, j(D, 20, this, new Map())), j(D, 23, this));
    (O(this, vo, j(D, 24, this, 0)), j(D, 27, this));
    (O(this, Eo, j(D, 28, this, 0)), j(D, 31, this));
    W(this, "pendingLocalModuleIds", new Set());
    W(this, "_localModuleEvaluationMode");
    W(this, "moduleDepsGraph", {});
    W(this, "modulesStorage");
    W(this, "moduleUpdatesEmitter", new It());
    W(this, "fastRefreshModulesEmitter", new It());
    O(this, Ue);
    O(this, Pe);
    O(this, _e, 0);
    O(this, Le, !1);
    W(this, "prepareForPersistence", async (e, t) => {
      if (
        e === "codeFile" &&
        !(!E.isOn("harness2") && this.localCodeModuleIdsWithStoredPropertyControls(t).size === 0)
      ) {
        if (t.length > 0) {
          let r = new Set(t.map((n) => ve(n, "default").value));
          await this.loadLocalModules(r, "current");
        }
        await it(this.componentLoader, this, "code-file-persistence");
      }
    });
    O(this, We, new Map());
    O(this, ae, new Map());
    W(this, "requestTargetedModuleLoad", async (e) => {
      let t = new Map(),
        r = [];
      for (let n of e) {
        let i = g(n);
        (m(i, () => `requestTargetedModuleLoad: not a module identifier: ${n}`),
          i.kind === "externalModuleExport" ? r.push(i) : t.set(i.localId, i.value));
      }
      if ((r.length > 0 && (await this.preloadExternalModules(r)), t.size > 0)) {
        if (this.modulesStorage.initialized) {
          for (let [n, i] of t)
            if (!this.localModuleIsKnown(n))
              throw new Error(`requestTargetedModuleLoad: no local module for ${i}`);
        }
        await this.loadLocalModules(new Set(t.values()), "lazy");
      }
    });
    O(this, le);
    O(this, Te, !1);
    W(
      this,
      "debugModuleStoreAndComponentLoaderRevisionsMatch",
      () => this.revision === this.componentLoader.modulesRevision
    );
    W(this, "checkForExternalModuleUpdates", async () => {
      if (this.treeStore.tree.isViewOnly) return;
      let e = ee.get(this.treeStore.tree);
      if (!e?.children?.length) return;
      let t = [],
        r = new Map();
      e.children.forEach((l) => {
        let s = g(l.codeComponentIdentifier);
        if (
          (m(
            s?.kind === "externalModuleExport",
            "expected ExternalModuleNode identifier to be of kind externalModuleExport"
          ),
          l.type === "vector")
        ) {
          let c = l.annotation("framerVector");
          if (!Rr(c)) return;
          let d = c.set.moduleId,
            u = r.get(d) ?? [];
          (u.push(s), r.set(d, u));
        } else t.push(s);
      });
      for (let [l, s] of r) {
        let c = this.treeStore.tree.get(l);
        if (!K(c)) continue;
        let d = c.annotation("framerVectorSet");
        Wt(d) && (kr(d) || t.push(...s));
      }
      let n = t.map(({ moduleId: l, saveId: s }) => ({ moduleId: l, saveId: s }));
      if (!n.length) return;
      let i = [],
        a = [];
      for (let l = 0; l < n.length; l++) {
        let s = n[l];
        if (
          (m(s, "query is expected to be defined."), i.push(s), i.length < $s && l < n.length - 1)
        )
          continue;
        let { modules: c } = await this.lookUpModules(i, { includeStatus: !0 });
        (a.push(...c), (i = []));
      }
      this.treeStore.tree.isViewOnly ||
        this.updateExternalModuleNodes(
          a.map((l, s) => {
            let c = t[s];
            return (
              m(c, "External module missing a matching identifier"),
              { module: l, exportSpecifier: c.exportSpecifier }
            );
          }),
          { onTreeUpdate() {} }
        ).catch(J);
    });
    W(this, "updatesPollId");
    W(
      this,
      "compileFastRefreshModule",
      async ({ localId: e, name: t, source: r, includeSourceMap: n = !0 }) => {
        let { type: i, name: a } = _o(e);
        if (!Ni.has(i)) return;
        let l = i === "codeFile" ? ro(t).source : a,
          s = i === "codeFile" ? Uo(t)[1] : a,
          {
            code: c,
            imports: d,
            sourceMap: u,
          } = await Mn({ localId: e, source: r, name: l, includeSourceMap: n }),
          p = {
            kind: "fast-refresh",
            localId: e,
            type: i,
            name: s,
            sourceContent: r,
            moduleContent: c,
            relativeImports: d.relative,
            sourceMapContent: u,
            binaryAssetContents: void 0,
            submoduleContents: {},
            update: 0,
          },
          [f, h] = mn(this.fastRefreshModules, (y) => {
            y.set(t, p);
          });
        ((this.fastRefreshModules = f),
          this.fastRefreshModulesEmitter.emit({ patches: h, initialized: !0 }));
      }
    );
    W(
      this,
      "compile",
      ({
        localId: e,
        name: t,
        source: r,
        includeSourceMap: n = !0,
        type: i,
        telemetrySession: a,
      }) => {
        let l = Sn({ name: t, source: r, includeSourceMap: n, type: i, telemetrySession: a });
        return (
          this.fastRefreshEnabled &&
            e &&
            this.compileFastRefreshModule({
              localId: e,
              name: t,
              source: r,
              includeSourceMap: n,
            }).catch(J),
          l
        );
      }
    );
    ((this.modulesStorage = new gn(
      () =>
        this.modulesAPIServicePromise.catch((p) => {
          throw (C.error(p, { context: "Failed to discover ModulesAPI service:" }), p);
        }),
      this.compile,
      (p, f) => this.scheduler.process(p, f),
      (p, f) => this.scheduler.processWhenReadyStrict(p, f),
      () => this.scheduler.markCurrentCommitHasUserModuleEdit(),
      (p) => this.scheduler.runWhenIdle(p),
      (p, f, h) => this.scheduler.scheduleAgentChanges(p, f, h),
      r,
      () => this.getActiveScope(),
      () => this.makeDocumentReadOnly(),
      this.abortSignal,
      this.prepareForPersistence,
      this.propertyControlsSnapshotForCurrentRevision.bind(this),
      (p) => {
        this.invalidSavePointerQuarantineSize = p;
      }
    )),
      (this.fastRefreshModulesEmitter.onNewStream = (p) => (
        C.debug("onNewStream - fast refresh", p),
        { latest: this.getAllFastRefreshModulesAsUpdateEvent() }
      )),
      (this.moduleUpdatesEmitter.onNewStream = (p) => (
        C.debug("onNewStream - module updates", p),
        { latest: this.getAllModulesAsUpdateEvent() }
      )),
      Q(
        this,
        le,
        new sn({
          delay: js,
          task: () => {
            this.processImportMapPrune();
          },
          abortSignal: this.abortSignal,
        })
      ),
      this.modulesStorage.subscribe((p) => {
        let f = p.dependenciesModule?.importMapContent,
          h = this.dependenciesModule?.importMapContent,
          y = br(h, f),
          S = !0;
        E.isOn("importMapPruning") && (S = y);
        let V = !1;
        if (f && f !== h) {
          let w = Er(f);
          V = p.metadata.multiplayerChange || y;
        }
        (f !== h &&
          (y
            ? C.info("Import map resolutions changed, re-evaluating all modules")
            : S
              ? C.info("Import map updated, re-evaluating all modules")
              : C.info(
                  "Import map updated without existing resolution changes, skipping blanket re-eval"
                )),
          V && p.metadata.multiplayerChange,
          (this.dependenciesModule = p.dependenciesModule),
          (this.localModules = p.modules));
        let b = this.moduleDepsGraph;
        this.moduleDepsGraph = p.depsGraph;
        let P = p.metadata.patches,
          L = new Set(),
          T = [],
          v = [],
          k;
        for (let w of P) {
          let I = w.path[0];
          if ((m(typeof I == "string"), I === nn)) {
            if (((k = w), S)) for (let R of p.modules.keys()) L.add(R);
            break;
          }
          w.op === "remove" && w.path.length === 1 ? v.push(I) : T.push(I);
        }
        let A = new Set();
        if (!k) {
          let w = this.getActiveScope(),
            I = no(w);
          C.debug("Calculated visible code component module typeSlashNames", I);
          for (let R of T) to(p.depsGraph, R, L, I, A);
          for (let R of v) to(b, R, L, I, A);
          (T.forEach((R) => {
            L.delete(R);
          }),
            v.forEach((R) => {
              (L.delete(R), A.delete(R));
            }));
        }
        C.debug(
          "prioritized evaluation sending to sandbox",
          { dependentModules: L, visibleDependentModules: A },
          "highprio size",
          A.size,
          "dep size",
          L.size
        );
        let _ = {
          patches: P,
          dependentModules: Array.from(L),
          prioritizedModules: Array.from(A),
          revision: P.length === 0 ? this.revision : ++this.revision,
          initialized: p.initialized,
          modulesReloading: p.modulesReloading,
        };
        if (
          (this.moduleUpdatesEmitter.emit(_),
          this.fastRefreshEnabled &&
            k &&
            this.fastRefreshModulesEmitter.emit({ patches: [k], initialized: p.initialized }),
          this.fastRefreshEnabled && !k)
        )
          for (let w of T) {
            let I = this.fastRefreshModules.get(w);
            if (!I) continue;
            let R = this.localModules.get(w);
            R && R.sourceContent !== I.sourceContent && this.createFastRefreshModuleFromModule(R);
          }
      }));
  }
  scheduler;
  componentLoader;
  treeStore;
  loadedExternalModulesStore;
  chromeStore;
  modulesAPIServicePromise;
  makeDocumentReadOnly;
  insertTemporaryImportMap;
  loadLocalModules;
  loadAllLocalModules;
  abortSignal;
  get localModuleEvaluationMode() {
    return this._localModuleEvaluationMode;
  }
  get hasPendingLocalModuleEvaluations() {
    return this.pendingLocalModuleIds.size > 0;
  }
  updateLocalModuleEvaluationState(e, t) {
    ((this.pendingLocalModuleIds = new Set(e.map(Wo))), (this._localModuleEvaluationMode = t));
  }
  isLocalModuleEvaluationPending(e) {
    return (
      this.componentLoader.modulesRevision < this.revision || this.pendingLocalModuleIds.has(e)
    );
  }
  propertyControlsSnapshotForCurrentRevision(e) {
    let t = E.isOn("harness2") ? void 0 : this.localCodeModuleIdsWithStoredPropertyControls(e);
    return t?.size === 0
      ? { revision: this.revision, controlsByLocalId: new Map() }
      : this.debugModuleStoreAndComponentLoaderRevisionsMatch()
        ? {
            revision: this.revision,
            controlsByLocalId: yt(this.componentLoader.getAllEntities(), t),
          }
        : { revision: -1, controlsByLocalId: new Map() };
  }
  localCodeModuleIdsWithStoredPropertyControls(e) {
    return new Set(
      e.filter((t) => {
        let r = this.treeStore.tree.get(t);
        return !Me(r) || r.save.type !== "codeFile" ? !1 : be(r.save.propertyControls);
      })
    );
  }
  localCodeModuleIdsMissingPropertyControls() {
    let e = [];
    for (let t of nt.getModuleNodes(this.treeStore.tree))
      t.save.type === "codeFile" && (be(t.save.propertyControls) || e.push(t.id));
    return e;
  }
  async backfillMissingCrdtModuleControls() {
    if (!E.isOn("harness2") || this.treeStore.tree.isViewOnly) return;
    let e = this.localCodeModuleIdsMissingPropertyControls(),
      t = Ri(this.treeStore.tree);
    if (e.length === 0 && !t) return;
    if (e.length > 0) {
      let s = new Set(e.map((c) => ve(c, "default").value));
      await this.loadLocalModules(s, "eager");
    }
    let r = Mo(this.treeStore.tree);
    await Promise.allSettled(
      r.map((s) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(s))
    );
    let n = this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0,
      i = [...this.componentLoader.getAllEntities()],
      a = yt(i),
      l = ht(i);
    await this.scheduler.processWhenReadyAsync(() => {
      this.treeStore.tree.isViewOnly ||
        this.writeMissingPropertyControls(
          (s) => a.get(s) ?? null,
          ({ moduleId: s, saveId: c }) => gt(l, s, c) ?? (n ? null : void 0)
        );
    });
  }
  persistEvaluatedPropertyControls(e) {
    if (!E.isOn("harness2") || this.treeStore.tree.isViewOnly || z(this, Le)) return;
    let t = e > z(this, _e);
    if ((Q(this, _e, e), e === 0)) return;
    let r = t ? 1 : Gs + 1;
    this.countEvaluatedPropertyControlsGaps(r) >= r &&
      (Q(this, Le, !0),
      this.scheduler.scheduleDocumentUpdateIgnoringUndo(() => {
        (Q(this, Le, !1), !this.treeStore.tree.isViewOnly && this.writeEvaluatedPropertyControls());
      }));
  }
  countEvaluatedPropertyControlsGaps(e) {
    let { localIds: t, externalIdentifiers: r } = this.getPropertyControlsGaps(),
      n = 0;
    for (let i of r) if (this.hasEvaluatedExternalPropertyControls(i) && (n++, n >= e)) return n;
    for (let i of t) if (this.hasEvaluatedPropertyControlsForSave(i) && (n++, n >= e)) return n;
    return n;
  }
  writeEvaluatedPropertyControls() {
    let e = this.getPropertyControlsGaps(),
      t = e.localIds.filter((a) => this.hasEvaluatedPropertyControlsForSave(a)),
      r = yt(this.componentLoader.getAllEntities(), new Set(t)),
      n = e.externalIdentifiers.filter((a) => this.hasEvaluatedExternalPropertyControls(a)),
      i = ht(this.componentLoader.getAllEntities(), new Set(n.map((a) => a.moduleId)));
    this.writeMissingPropertyControls(
      (a) => r.get(a),
      ({ moduleId: a, saveId: l }) => gt(i, a, l)
    );
  }
  writeMissingPropertyControls(e, t) {
    let r = this.treeStore.tree,
      { localIds: n, externalIdentifiers: i } = this.getPropertyControlsGaps();
    for (let a of n) {
      let l = r.getNodeWithTrait(a, Me),
        s = e(a);
      !l || s === void 0 || l.set({ save: { ...l.save, propertyControls: at(s) } });
    }
    for (let a of i) {
      let l = r.getNodeWithTrait(a.moduleId, K),
        s = t(a);
      !l || s === void 0 || l.set({ propertyControlsBySaveId: go(l, a.saveId, s) });
    }
  }
  getPropertyControlsGaps() {
    let e = this.treeStore.tree,
      t = nt.get(e),
      r = ee.get(e),
      n = z(this, Pe),
      i = n !== void 0 && n.localModulesList === t,
      a = n !== void 0 && n.externalModulesList === r;
    return i && a
      ? n
      : (Q(this, Pe, {
          localModulesList: t,
          externalModulesList: r,
          localIds: i ? n.localIds : this.localCodeModuleIdsMissingPropertyControls(),
          externalIdentifiers: a ? n.externalIdentifiers : Mo(e),
        }),
        z(this, Pe));
  }
  hasEvaluatedExternalPropertyControls(e) {
    return this.componentLoader.getDefinitionHash(e.value) !== 0;
  }
  hasEvaluatedPropertyControlsForSave(e) {
    if (this.isLocalModuleEvaluationPending(e)) return !1;
    let t = this.getPersistedModuleByLocalId(e);
    if (
      !t ||
      !(hi(this.treeStore) - new Date(t.savedAt).getTime() >= Ks) ||
      !t.exports.some((l) => this.componentLoader.getDefinitionHash(ve(e, l).value) !== 0)
    )
      return !1;
    let a = new Set();
    oo(this.moduleDepsGraph, _t(t), a);
    for (let l of a) {
      let s = this.localModules.get(l);
      if (!(s !== void 0 && this.isStoredAtTreeSave(s.localId))) return !1;
    }
    return !0;
  }
  isStoredAtTreeSave(e) {
    if (this.getTransientSave(e)) return !1;
    let t = this.treeStore.tree.getNodeWithTrait(e, Me)?.save,
      r = this.getPersistedModuleByLocalId(e);
    return !t || !r ? !1 : r.id === t.moduleId && r.saveId === t.saveId;
  }
  getActiveScope() {
    if (this.chromeStore.mainView === 5) return;
    let e = this.treeStore.tree.getNode(z(this, Ue));
    if (e) return (m(e?.loaded, "Active scope node should be loaded"), e.loaded);
  }
  setActiveScope(e) {
    Q(this, Ue, e);
  }
  getLatestDependencyGraph() {
    return this.moduleDepsGraph;
  }
  initialize() {
    return this.initialized
      ? this.modulesStorage.refresh()
      : (this.setupPollingExternalModulesUpdates(), this.modulesStorage.initialize());
  }
  get initialized() {
    return this.modulesStorage.initialized;
  }
  whenInitialized() {
    return this.modulesStorage.whenInitialized();
  }
  whenIdle() {
    return this.modulesStorage.whenIdle();
  }
  debugProcessingState() {
    return {
      ...this.modulesStorage.debugProcessingState(),
      revision: this.revision,
      componentLoaderRevision: this.componentLoader.modulesRevision,
    };
  }
  getInvalidSavePointerQuarantine() {
    return this.modulesStorage.getInvalidSavePointerQuarantine();
  }
  clearInvalidSavePointerQuarantine(e) {
    this.modulesStorage.clearInvalidSavePointerQuarantine(e);
  }
  startDivergenceReporter() {
    this.modulesStorage.startDivergenceReporter();
  }
  sampleDivergencesNow() {
    this.modulesStorage.sampleDivergencesNow();
  }
  getImportMapTraceCacheText() {
    return this.modulesStorage.getImportMapTraceCacheText();
  }
  refresh() {
    return this.modulesStorage.refresh();
  }
  deleteModules(e) {
    return this.modulesStorage.delete(e);
  }
  softDeleteModulesInBackend(e) {
    return this.modulesStorage.softDeleteModulesInBackend(e);
  }
  restoreModulesInBackend(e) {
    return this.modulesStorage.restoreModulesInBackend(e);
  }
  restoreModule(e, t) {
    return this.modulesStorage.restore(e, t);
  }
  upsertBatch(e) {
    return this.modulesStorage.upsertBatch(e);
  }
  promoteModuleSaves(e) {
    return this.modulesStorage.promoteModuleSaves(e);
  }
  forType(e) {
    return new hn(this.modulesStorage, e, this.debugModuleStoreAndComponentLoaderRevisionsMatch);
  }
  async addNpmDependencies(e) {
    let r = typeof this.dependenciesModule > "u" && !Ln(),
      n = await lt(this.modulesStorage.addNpmDependencies(e)),
      i = Array.isArray(e) ? e : [e],
      a = i.filter(({ target: c }) => !Ut(c));
    if (!n.ok) {
      let c = n.error instanceof Error ? n.error.message : String(n.error);
      for (let d of a) {
        let u = Mr(d);
        te("npm_dependency_add_fail", { name: u, reason: c });
      }
      throw (
        a.length > 0 &&
          C.reportError(n.error, {
            context: "Failed to add npm dependencies",
            descriptors: a.map(({ target: d }) => d),
          }),
        n.error
      );
    }
    r && Tn();
    let l = Object.keys(n.value.dependenciesMap.dependencies),
      s = i.map(({ target: c }) => c).filter((c) => !l.includes(c) && Ut(c));
    if (s.length > 0) {
      let c = Ii(s, { max: 5, placeholder: "package" });
      se({
        type: "add",
        variant: "warning",
        primaryText: c,
        secondaryText: `${s.length === 1 ? "is" : "are"} incompatible.`,
        duration: 5e3,
      });
    }
    return n.value;
  }
  changeScope(e) {
    (this.setActiveScope(e.id), this.modulesStorage.changeScope(e));
  }
  async uninstallBlockedNpmDependencies() {
    return { importMap: await this.modulesStorage.uninstallBlockedNpmDependencies() };
  }
  async unsafeUpgradeDependency(e, t, r) {
    return { importMap: await this.modulesStorage.unsafeUpgradeDependency(e, t, r) };
  }
  async clearNpmDependencies() {
    return this.modulesStorage.clearNpmDependencies();
  }
  async removeBlockedNpmDependencies() {
    return { dependenciesMap: await this.modulesStorage.removeBlockedNpmDependencies() };
  }
  async pruneProjectImportMapFromEntryPoints(e = !1) {
    let t = await this.modulesStorage.pruneProjectImportMapFromEntryPoints(
      () => this.getEntryPointModuleNames(),
      { dryRun: e }
    );
    return (m(t, "Prune discarded: its inputs changed during the trace"), { importMap: t });
  }
  getEntryPointModuleNames() {
    let e = [];
    for (let t of this.localModules.values()) {
      if (
        t.kind === "fast-refresh" ||
        (t.type !== "codeFile" && t.type !== "canvasComponent" && t.type !== "screen")
      )
        continue;
      let r = t.files?.module;
      if (!r) continue;
      let n = Ct(t.localId, r);
      e.push(n);
    }
    for (let t of ee.getModuleNodes(this.treeStore.tree)) {
      if (t.type !== "codeFile" && t.type !== "canvasComponent" && t.type !== "shader") continue;
      let r = g(t.codeComponentIdentifier);
      F(r) && e.push(r.importSpecifier);
    }
    return [...new Set(e)];
  }
  async updateSources(e) {
    return this.modulesStorage.updateSources(e);
  }
  async updateDependenciesSource(e, t, r) {
    await this.modulesStorage.updateDependenciesSource(e, t, r);
  }
  getDependentsOfModule(e) {
    return this.modulesStorage.getDependentsOfModule(e);
  }
  subscribeToModulesStorage(e) {
    return this.modulesStorage.subscribe(e);
  }
  async getModuleDependencies(e) {
    let t = await this.modulesAPIServicePromise;
    return (
      m(t, "Modules API service not initialized correctly"),
      await t.getModuleDependencies(e)
    );
  }
  getModuleEntryByLocalId(e) {
    for (let t of this.localModules.values()) if (t.localId === e) return t;
  }
  getModuleEntryByUniqueName(e) {
    for (let t of this.localModules.values()) if (t.name === e) return t;
  }
  getPersistedDependenciesModule() {
    return this.modulesStorage.getPersistedDependenciesModule();
  }
  getPersistedModuleByGlobalId(e) {
    return this.modulesStorage.getPersistedModuleByGlobalId(e);
  }
  getPersistedModuleByLocalId(e) {
    return this.modulesStorage.getPersistedModuleByLocalId(e);
  }
  getPersistedModuleByLocalIdentifier(e) {
    let t = g(e);
    if (Z(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  tryConvertExternalCodeComponentIdentifierToLocal(e) {
    let t = g(e);
    if (t?.kind !== "externalModuleExport") return;
    let r = this.getPersistedModuleByGlobalId(t.moduleId);
    if (r) return ve(r.localId, t.exportSpecifier).value;
  }
  async listNamespaces() {
    let e = await this.modulesAPIServicePromise;
    return (m(e, "Modules API service not initialized correctly"), await e.listNamespaces());
  }
  async createNamespace(e, t) {
    let r = await this.modulesAPIServicePromise;
    return (
      m(r, "Modules API service not initialized correctly"),
      await r.createNamespace({ ownerId: e, ownerType: t })
    );
  }
  async lookUpModule(e, t) {
    let { modules: r, dependencies: n } = await this.lookUpModules([e], t),
      i = r[0];
    m(i, () => `Module does not exist, looking up: ${JSON.stringify(e)}`);
    let a = { module: i };
    return (n && (a.dependencies = n[i.ownerType]?.[i.ownerId]), a);
  }
  async lookUpModuleURL(e) {
    let t = new URL(e),
      r = t.hash.substring(1).split(","),
      n = r[0] || "default",
      i = r.some((u, p) => p > 0 && u === "unlink"),
      { module: a } = await this.lookUpModule({ url: t.href }),
      l = a.id,
      s = this.getPersistedModuleByGlobalId(l);
    m(a.files.module, "Module file must be defined");
    let c = fe(l, a.saveId, a.files.module, n),
      d = s ? ve(s.localId, n) : c;
    return { module: a, moduleIdentifier: d, externalIdentifier: c, insertUnlinked: i };
  }
  async getSourceContentForModuleSave(e) {
    let { module: t } = await this.lookUpModule(e);
    if (Hs(t)) return t.sourceContent;
    let r = t.baseURL + t.files.source,
      n = await lt(fetch(r));
    if (!n.ok)
      throw (
        C.reportError(n.error, {
          context: "Failed to fetch source content for module save",
          moduleId: e.moduleId,
          saveId: e.saveId,
          sourceURL: r,
        }),
        n.error
      );
    if (!n.value.ok) {
      let a = new Error(
        `Failed to fetch source content for module save ${e.moduleId}@${e.saveId}: ${n.value.status} ${n.value.statusText}`
      );
      throw (
        C.reportError(a, {
          context: "Failed to fetch source content for module save",
          moduleId: e.moduleId,
          saveId: e.saveId,
          sourceURL: r,
          httpStatus: n.value.status,
        }),
        a
      );
    }
    let i = await lt(n.value.text());
    if (!i.ok)
      throw (
        C.reportError(i.error, {
          context: "Failed to read source content for module save",
          moduleId: e.moduleId,
          saveId: e.saveId,
          sourceURL: r,
        }),
        i.error
      );
    return i.value;
  }
  async lookUpModules(e, t) {
    let r = await this.modulesAPIServicePromise;
    if (!r)
      return (
        C.error("Modules API service not initialized correctly"),
        { modules: [], dependencies: {} }
      );
    let { data: n, dependencies: i } = await r.lookUpModules({ queries: e, ...t }),
      a = new Map(this.externalModulesDynamicInfo);
    for (let s of n) {
      let c = s.id,
        { localId: d, title: u, description: p, lastPublish: f, status: h } = s;
      a.set(c, {
        localId: d,
        title: u,
        description: p,
        lastPublish: f,
        status: h ?? a.get(c)?.status,
      });
    }
    this.externalModulesDynamicInfo = a;
    let l = { modules: n };
    return (i && (l.dependencies = i), l);
  }
  trackExternalComponentInsert(e, t) {
    let r = Yo();
    for (let n of e) Rn({ insertId: r, insertType: t, codeComponentId: n });
  }
  async installExternalModulesDependencies(e) {
    let t = [],
      r = [];
    for (let n of e) {
      let i = z(this, We).get(n);
      i ? r.push(i) : t.push(n);
    }
    if (t.length > 0) {
      let n = this.installDependenciesForModuleURLs(t);
      for (let i of t) z(this, We).set(i, n);
      r.push(n);
    }
    return Promise.allSettled(r).then((n) => {
      for (let i of n)
        i.status !== "fulfilled" && C.error("Failed to install external module", i.reason);
    });
  }
  isProcessingModules() {
    return this.modulesStorage.isProcessing();
  }
  hasLocalCodeFileChanges() {
    return this.modulesStorage.hasLocalCodeFileChanges();
  }
  isReadOnly() {
    return this.modulesStorage.isReadOnly();
  }
  resetModuleStateAndPermissions(e) {
    this.modulesStorage.resetModuleStateAndPermissions(e);
  }
  getTransientSave(e) {
    return this.modulesStorage.getTransientSave(e);
  }
  createFastRefreshModuleFromModule(e) {
    if (Ni.has(e.type)) {
      if (e.kind === "server") {
        let t = this.getPersistedModuleByLocalId(e.localId);
        (m(t?.kind === "server", "Only server modules should have no sourceContent"),
          this.modulesStorage.createLocalModuleFromModule(t).catch(J));
        return;
      }
      this.compileFastRefreshModule({
        name: _t(e),
        localId: e.localId,
        source: e.sourceContent,
      }).catch(J);
    }
  }
  getModuleWithTypeSlashName(e) {
    return this.modulesStorage.getModuleWithTypeSlashName(e);
  }
  waitForModulesToSave() {
    return this.modulesStorage.waitForModulesToSave();
  }
  async insertTemporaryImportMapForExternalModules(e) {
    let t = { imports: {} };
    for (let { dependencies: r, module: n } of e) {
      let i = r?.importMap;
      if (!(!i || tt(i))) {
        if ((m(n.files.module, "Module must have a module file"), i.scopes)) {
          t.scopes ??= {};
          for (let [a, l] of Object.entries(i.scopes))
            t.scopes[a] = Object.assign({}, l, t.scopes[a]);
        }
        Object.keys(i.imports).length > 0 &&
          ((t.scopes ??= {}),
          (t.scopes[n.baseURL] = Object.assign({}, i.imports, t.scopes[n.baseURL])));
      }
    }
    tt(t) || (await this.insertTemporaryImportMap(t));
  }
  async installDependenciesForExternalModules(e) {
    let t,
      r = {},
      n;
    for (let { dependencies: i, module: a } of e)
      if (i?.importMap)
        if (E.isOn("importMapPruning")) {
          let { importMap: l } = Sr(i.importMap, [a.baseURL], ot);
          t = Bt(t ?? { imports: {} }, l);
          let s = i.dependencies ?? Ot(i.importMap);
          Object.assign(r, Ir(s, a.baseURL));
        } else {
          let { modulesCDN: l } = zo(),
            s = xr(i.importMap, l, ot),
            c = s.importMap,
            d =
              s.didNormalize && i.dependencies ? vr(i.dependencies, c) : (i.dependencies ?? Ot(c)),
            u = {
              dependencies: d.dependencies,
              ...(d.resolutions ? { resolutions: d.resolutions } : {}),
            };
          ((n = Pr(n ?? { dependencies: {} }, u)), (t = Bt(t ?? { imports: {} }, c)));
        }
    if (!t || tt(t)) return !1;
    if (E.isOn("importMapPruning")) {
      let i = { ...t, imports: Cr(t.imports, ot) },
        { changed: a } = await this.modulesStorage.extendCurrentImportMap(i, {
          dependencies: {},
          scopedDependencies: r,
        });
      return a;
    }
    return (n && (await this.modulesStorage.extendCurrentImportMap(t, n)), !1);
  }
  installDependenciesForModuleURLs(e) {
    return (
      C.info(
        `\u{1F986} Installing external modules:
	`,
        e.join(`
	`)
      ),
      this.lookUpModules(
        e.map((t) => ({ url: t })),
        { includeDependencies: !0 }
      ).then(async ({ modules: t, dependencies: r = {} }) => {
        let n = t.map((i) => ({ module: i, dependencies: r[i.ownerType]?.[i.ownerId] }));
        (await this.insertTemporaryImportMapForExternalModules(n),
          await this.installDependenciesForExternalModules(n));
      })
    );
  }
  async addOrUpdateExternalVectors(e) {
    await this.modulesStorage.whenInitialized();
    let { modules: t } = await this.lookUpModules(
        e.filter((i) => {
          let a = this.treeStore.tree.getNodeWithTrait(i.moduleId, K);
          return a ? g(a.codeComponentIdentifier).saveId !== i.saveId : !0;
        }),
        { includeDependencies: !1, includeStatus: !0 }
      ),
      r = new Map(),
      n = "default";
    for (let i of t) {
      let a = Mt({ module: i, exportSpecifier: n }),
        l = this.treeStore.tree.getNodeWithTrait(i.id, K);
      (N(l?.codeComponentIdentifier) && g(l.codeComponentIdentifier).saveId === i.saveId) ||
        r.set(a.value, { module: i, exportSpecifier: n });
    }
    (await Promise.all(
      Array.from(r.keys(), (i) => {
        let a = g(i);
        return (
          m(a, "Identifier must be a valid module identifier"),
          this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(a).catch((l) => {
            C.error(`Failed to evaluate external module "${i}"`, l);
          })
        );
      })
    ),
      await this.updateExternalModuleNodes(Array.from(r.values()), {
        onTreeUpdate: () => {
          let i = Ci(r.keys()),
            a = this.treeStore.getDataTree(),
            l = a.query().whereClass(Kt).iterate();
          (vi(i, l), Ei(i, a), Pi(i, a));
        },
        updateSave: !0,
      }));
  }
  async addOrUpdateVectorSetAndVectors(e) {
    await this.addOrUpdateExternalVectors([e]);
    let r = this.treeStore.tree.getNodeWithTrait(e.moduleId, K)?.annotation("framerVectorSet");
    Wt(r) &&
      (await this.addOrUpdateExternalVectors(
        r.items.map((n) => ({ moduleId: n.moduleId, saveId: n.saveId ?? "" }))
      ));
  }
  async addExternalModulesToProject(e, t) {
    let r = e.map((i) => (typeof i == "string" ? g(i) : i)),
      n = await this.preloadExternalModules(r);
    return this.updateExternalModuleNodes(n, t);
  }
  usesNoopExternalModuleEvaluation() {
    return this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0;
  }
  async preloadExternalModules(e) {
    if (e.length === 0) return [];
    await this.modulesStorage.whenInitialized();
    let t = new Map();
    for (let s of e) t.set(s.bareValue, s);
    if (this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0)
      return (
        await Promise.all(
          Array.from(t.values(), (s) =>
            this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(s)
          )
        ),
        []
      );
    let r = [],
      n = [],
      i = [];
    for (let [s, c] of t) {
      let { moduleId: d, saveId: u } = c;
      if (!!this.modulesStorage.getPersistedModuleByGlobalId(d)) {
        C.reportError("Attempted to treat local module as external module", { identifier: c });
        continue;
      }
      let f = this.treeStore.tree.getNode(d);
      if (
        f &&
        g(f.codeComponentIdentifier).saveId === u &&
        !this.loadedExternalModulesStore.hasModuleForIdentifier(c)
      ) {
        n.push(c);
        continue;
      }
      let h = z(this, ae).get(s);
      if (h) {
        i.push({ identifier: c, preloadPromise: h });
        continue;
      }
      (z(this, ae).set(s, new Qt()), r.push(c));
    }
    let a = new Map();
    for (let { identifier: s, preloadPromise: c } of i)
      try {
        let d = await c;
        a.set(s.value, d);
      } catch {
        (z(this, ae).set(s.bareValue, new Qt()), r.push(s));
      }
    if (r.length)
      try {
        let s = Array.from(r.values(), ({ moduleId: p, saveId: f }) => ({
            moduleId: p,
            saveId: f,
          })),
          { modules: c, dependencies: d } = await this.lookUpModules(s, {
            includeDependencies: !0,
            includeStatus: !0,
          }),
          u = 0;
        for (let p of r) {
          let f = c[u++];
          (m(f, "Module must be defined"),
            a.set(p.value, {
              module: f,
              dependencies: d?.[f.ownerType]?.[f.ownerId],
              exportSpecifier: p.exportSpecifier,
            }),
            n.push(p));
        }
      } catch (s) {
        C.reportError(s);
        for (let c of r) z(this, ae).get(c.bareValue)?.reject(s);
        throw Error(`Failed to preload modules: ${s}`);
      }
    let l = [];
    for (let s of n) {
      let c = a.get(s.value);
      c && l.push(c);
    }
    (await this.insertTemporaryImportMapForExternalModules(l),
      await Promise.all(
        Array.from(n.values(), (s) =>
          this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(s).catch((c) => {
            C.error(`Failed to evaluate external module "${s.value}"`, c);
          })
        )
      ));
    for (let s of r) {
      let c = a.get(s.value);
      m(c, () => `Expected to have module information for: ${s.value}`);
      let d = z(this, ae).get(s.bareValue);
      (m(d, () => `Expected to find a preload promise for: ${s.bareValue}`), d.resolve(c));
    }
    return [...a.values()];
  }
  async ensureLocalComponentsLoaded(e, t, r) {
    await Mi(this.componentLoader, this.requestTargetedModuleLoad, e, t, r);
  }
  localModuleIsKnown(e) {
    return this.getModuleEntryByLocalId(e) ? !0 : Me(this.treeStore.tree.get(e));
  }
  requestImportMapPrune() {
    z(this, le).debounce();
  }
  async processImportMapPrune() {
    if (z(this, Te)) {
      z(this, le).debounce();
      return;
    }
    Q(this, Te, !0);
    let e = "import-map-prune";
    se({
      type: "add",
      key: e,
      text: "Optimizing dependencies\u2026",
      variant: "progress",
      duration: 1 / 0,
      showCloseButton: "never",
    });
    let t = () => this.getEntryPointModuleNames();
    try {
      let r = await this.modulesStorage.pruneProjectImportMapFromEntryPoints(t);
      (se({ type: "remove", key: e }), r ? z(this, le).cancel() : z(this, le).debounce());
    } catch (r) {
      (se({
        type: "add",
        key: e,
        text: "Failed to optimize dependencies.",
        variant: "error",
        duration: 3e3,
      }),
        C.reportError(r, { context: "Failed to prune import map", entryPointCount: t().length }));
    } finally {
      Q(this, Te, !1);
    }
  }
  async updateExternalModuleNodes(
    e,
    { onTreeUpdate: t, updateSave: r = !1, scheduleTreeUpdate: n }
  ) {
    (await this.insertTemporaryImportMapForExternalModules(e),
      await Promise.all(
        e.map((s) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(Mt(s)))
      ));
    let a = await (n ?? ((s) => this.scheduler.processWhenReadyAsync(s)))(() => {
      if (this.treeStore.tree.isViewOnly) throw Error("unable to edit");
      let s = E.isOn("harness2"),
        c = new Set();
      for (let u of e) {
        let { id: p } = u.module;
        (s || this.treeStore.tree.getNode(p)?.propertyControlsBySaveId !== void 0) && c.add(p);
      }
      let d = c.size > 0 ? ht(this.componentLoader.getAllEntities(), c) : void 0;
      for (let u of e) {
        let { id: p } = u.module,
          f = this.treeStore.tree.getNode(p);
        if (f && !r) {
          let h = Mt(u),
            y = this.externalModulesDynamicInfo.get(h.moduleId)?.status ?? u.module.status;
          f.set({ group: y?.group, updateSaveId: y?.updateSaveId });
        } else {
          let { type: h, metadata: y, ownerId: S, ownerType: V } = u.module,
            b = Mt(u),
            { title: P, status: L } = this.externalModulesDynamicInfo.get(b.moduleId) ?? u.module,
            T = ee.get(this.treeStore.tree);
          (T || ((T = new ee()), this.treeStore.tree.insertNode(T, this.treeStore.tree.root.id)),
            m(qo(T)));
          let v = y.pluginId,
            k = {
              codeComponentIdentifier: b.value,
              type: h,
              scopeNodeId: Lr(u.module),
              intrinsicWidth: At(y.intrinsicWidth, !0) ?? 200,
              intrinsicHeight: At(y.intrinsicHeight, !0) ?? 200,
              ownerId: S,
              ownerType: V,
              group: L?.group,
              updateSaveId: L?.updateSaveId,
              namespaceId: u.module.lastPublish?.namespaceId,
              pluginId: M(v) ? v : void 0,
            };
          if (d) {
            let I = gt(d, p, b.saveId);
            I !== void 0 && (k.propertyControlsBySaveId = go(f, b.saveId, I));
          }
          let A = this.componentLoader.componentForIdentifier(b.value);
          m(A, () => `Component not found in the component loader: ${b.value}`);
          let _ = A.annotations ?? void 0;
          if (Vr(h)) {
            let I = wr({ default: _ }).default;
            k.annotations = h === "vectorSet" ? Nr(I) : I;
          } else k.annotations = _;
          let w = A.name ?? P;
          if (((k.title = w), f)) f.set(k);
          else {
            let I = new zr({ id: p, ...k });
            this.treeStore.tree.insertNode(I, T.id);
          }
        }
      }
      return t();
    });
    return (
      (await this.installDependenciesForExternalModules(e)) && this.requestImportMapPrune(),
      a
    );
  }
  setupPollingExternalModulesUpdates() {
    let e = In(() => {
        this.checkForExternalModuleUpdates().catch(C.reportError);
      }, 1e4),
      t = !1,
      r = () => {
        t ||
          (e(),
          this.updatesPollId === void 0 &&
            (this.updatesPollId = window.setInterval(this.checkForExternalModuleUpdates, 6e4)));
      },
      n = () => {
        (window.clearInterval(this.updatesPollId), (this.updatesPollId = void 0));
      };
    function i() {
      return !document.hidden && navigator.onLine;
    }
    i() && r();
    function a() {
      setTimeout(() => {
        i() ? r() : n();
      }, 500);
    }
    (document.addEventListener("visibilitychange", a, { signal: this.abortSignal }),
      window.addEventListener("offline", a, { signal: this.abortSignal }),
      window.addEventListener("online", a, { signal: this.abortSignal }),
      this.abortSignal?.addEventListener("abort", () => {
        ((t = !0), n());
      }),
      (this.abortSignal = void 0));
  }
  getCodeComponentNodesForExternalModuleExport(e) {
    return this.treeStore
      .query()
      .whereClass(Kt)
      .asArray()
      .filter((r) => {
        if (!q(r) || (ye(r) && !r.isVectorInstance)) return !1;
        let n = g(r.codeComponentIdentifier);
        return n?.kind !== "externalModuleExport"
          ? !1
          : n.moduleId === e.moduleId && n.exportSpecifier === e.exportSpecifier;
      });
  }
  getShaderNodesForExternalModuleExport(e) {
    return this.treeStore
      .query()
      .whereClass($r)
      .asArray()
      .filter((r) => {
        if (ye(r)) return !1;
        let n = g(r.shaderModuleIdentifier);
        return n?.kind !== "externalModuleExport"
          ? !1
          : n.moduleId === e.moduleId && n.exportSpecifier === e.exportSpecifier;
      });
  }
  get fastRefreshEnabled() {
    return this.chromeStore.codeEditorPreviewVisible;
  }
  async updateExternalModuleComponentInstances(e) {
    let t = g(e);
    m(
      t?.kind === "externalModuleExport",
      "parsed 'ExternalModuleNodes.id' should be of kind externalModuleExport"
    );
    let { moduleId: r, exportSpecifier: n } = t,
      i = this.treeStore.tree.getNodeWithTrait(r, K),
      a = this.externalModulesDynamicInfo.get(r)?.status?.updateSaveId ?? i?.updateSaveId;
    if (!a) {
      C.warn("Could not update module", r, "latest status missing");
      return;
    }
    if (a === t.saveId) return;
    let { module: l, dependencies: s } = await this.lookUpModule(
      { moduleId: r, saveId: a },
      { includeDependencies: !0, includeStatus: !0 }
    );
    m(l.files.module, "Module file must be defined");
    let c = fe(r, a, l.files.module, n);
    try {
      (await this.updateExternalModuleNodes([{ module: l, dependencies: s, exportSpecifier: n }], {
        onTreeUpdate: () => {
          let d = this.treeStore.getDataTree();
          (l.type === "shader"
            ? this.getShaderNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ shaderModuleIdentifier: c.value })
              )
            : this.getCodeComponentNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ codeComponentIdentifier: c.value })
              ),
            qr(d, t.value, c.value),
            Yr(d, t.value, c.value));
        },
        updateSave: !0,
      }),
        this.trackExternalComponentInsert([c.value], "update"));
    } catch (d) {
      C.reportError(d);
    }
  }
  async replaceRelativeImportsWithImportMapSpecifiers(e, t, r) {
    let n = {};
    for (let a of r) {
      let l = Tr(a, e);
      if (!l) continue;
      let s;
      if (
        ((s = this.fastRefreshModules.get(l)),
        s || (s = this.modulesStorage.getModuleWithTypeSlashName(l)),
        !s)
      ) {
        C.error("Cannot resolve", a, "from", e);
        continue;
      }
      let c,
        { name: d, localId: u } = s;
      if (s.kind === "fast-refresh") c = ro(d).module;
      else {
        let { files: p } = s;
        (m(
          M(p.module),
          "Must have a module file name to build a local module import map specifier."
        ),
          (c = p.module));
      }
      n[a] = Ct(u, c);
    }
    let i = await yn(t, n);
    return (m(i.ok), i.value);
  }
  getModules(e = !1) {
    let t = {};
    for (let [r, n] of this.localModules) t[r] = n;
    if (e) for (let [r, n] of this.fastRefreshModules) t[r] = n;
    return {
      dependenciesModule: this.dependenciesModule,
      modules: t,
      revision: this.revision,
      initialized: this.modulesStorage.initialized,
    };
  }
  getInitialModulePatches(e = !1) {
    let { dependenciesModule: t, modules: r } = this.getModules(e),
      n = [];
    t && n.push({ op: "add", path: [`${t.type}/${t.name}`], value: t });
    for (let i of Object.values(r)) n.push({ op: "add", path: [`${i.type}/${i.name}`], value: i });
    return n;
  }
  getPrioritizedInitialModules(e) {
    let t = new Set();
    if (!E.isOn("prioritizedModuleEvaluation") || !E.isOn("prioritizedInitialModuleEvaluation"))
      return t;
    let r = no(this.getActiveScope()),
      n = new Set();
    for (let i of r) e[i] && oo(this.moduleDepsGraph, i, n);
    for (let i of n) e[i] && t.add(i);
    return t;
  }
  getAllModulesAsUpdateEvent() {
    let { initialized: e, modules: t, revision: r } = this.getModules(!1),
      n = this.getPrioritizedInitialModules(t),
      i = n.size > 0 ? Object.keys(t).filter((a) => !n.has(a)) : [];
    return {
      patches: this.getInitialModulePatches(!1),
      dependentModules: i,
      prioritizedModules: Array.from(n),
      initialized: e,
      modulesReloading: this.modulesStorage.isReloadingModules(),
      revision: r,
    };
  }
  getAllFastRefreshModulesAsUpdateEvent() {
    let { initialized: e } = this.getModules(!0);
    return { patches: this.getInitialModulePatches(!0), initialized: e };
  }
  getModulesUpdatesService() {
    return {
      moduleUpdatesStream: () => this.moduleUpdatesEmitter.newStream({ replay: "latest" }),
      fastRefreshModuleUpdatesStream: () =>
        this.fastRefreshModulesEmitter.newStream({ replay: "latest" }),
    };
  }
  hasScreenModuleLoaded(e) {
    let t = Ze("screen", e, "default").value;
    return this.componentLoader.componentForIdentifier(t) !== null;
  }
  hasPendingTreeData() {
    return this.modulesStorage.hasPendingTreeData();
  }
  isReloadingModules() {
    return this.modulesStorage.isReloadingModules();
  }
  writeTreeData() {
    this.modulesStorage.writeTreeData();
  }
  postProcess(e) {
    this.modulesStorage.processTreeUpdates(e);
  }
  takeSnapshot() {
    let e = this.modulesStorage.takeSnapshot();
    return new bo(this, e);
  }
};
((D = No(null)),
  (So = new WeakMap()),
  (Io = new WeakMap()),
  (Co = new WeakMap()),
  (xo = new WeakMap()),
  (vo = new WeakMap()),
  (Eo = new WeakMap()),
  (Ue = new WeakMap()),
  (Pe = new WeakMap()),
  (_e = new WeakMap()),
  (Le = new WeakMap()),
  (We = new WeakMap()),
  (ae = new WeakMap()),
  (le = new WeakMap()),
  (Te = new WeakMap()),
  ce(D, 4, "dependenciesModule", Fi, re, So),
  ce(D, 4, "localModules", Ai, re, Io),
  ce(D, 4, "fastRefreshModules", zi, re, Co),
  ce(D, 4, "externalModulesDynamicInfo", Vi, re, xo),
  ce(D, 4, "revision", Di, re, vo),
  ce(D, 4, "invalidSavePointerQuarantineSize", ki, re, Eo),
  ko(D, re));
var bo = class {
  constructor(e, t) {
    this.modulesStorageSnapshot = t;
    ((this.dependenciesModule = e.dependenciesModule),
      (this.localModuleKeys = Array.from(e.localModules.keys())));
  }
  modulesStorageSnapshot;
  dependenciesModule;
  localModuleKeys;
  getPersistedModuleByLocalId(e) {
    return this.modulesStorageSnapshot.getPersistedModuleByLocalId(e);
  }
  getPersistedModuleByLocalIdentifier(e) {
    let t = g(e);
    if (Z(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  getModuleWithTypeSlashName(e) {
    return this.modulesStorageSnapshot.getModuleWithTypeSlashName(e);
  }
};
function Bi(o) {
  return !Number.isNaN(o.getTime());
}
function Bu(o) {
  return o.match(/^\d{2}:\d{2}$/gu) !== null;
}
function Zs(o) {
  return o.toISOString().split("T")[0];
}
function Ou(o) {
  let e = new Date(o);
  return Bi(e) ? Zs(e) : "";
}
function Uu(o) {
  let e = new Date(o);
  return Bi(e)
    ? `${e.getUTCHours().toString().padStart(2, "0")}:${e.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var _u = (() => {
    let o = null;
    return () => {
      if (kt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "date"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  Wu = (() => {
    let o = null;
    return () => {
      if (kt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "time"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  Po = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function Lo(o) {
  return Po.test(o);
}
function ju(o) {
  if (!o) return;
  if (Lo(o)) return o;
  let e = new Date(o).toISOString();
  return (m(Lo(e), "Date format is not valid"), e);
}
function qs(o) {
  Po.exec(o);
  let e = Po.exec(o);
  m(e, "The provided date cannot have conformed to StandardZuluDateString");
  let [, t, r, n, i, a, l, s] = e;
  return [t, r, n, i, a, l, s];
}
function $u([o, e, t, r, n, i, a]) {
  let l = `${o}-${e}-${t}T${r}:${n}:${i}.${a}Z`;
  return (m(Lo(l)), l);
}
function Gu(o) {
  let [e, t, r] = qs(o);
  return `${r}/${t}/${e}`;
}
function wo(o) {
  return Fe(o).componentLoader;
}
function Ys(o, e, t) {
  let r = o.reactComponentForIdentifier(e.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (rt(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function Qs(o, e, t) {
  if (!ar(e)) return;
  let r = o.reactComponentForIdentifier(e.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (rt(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function Js(o, e, t, r) {
  let a = o.getNodeParent(t).getPropertyControls(o, e)[r.controlPropKey];
  if (!a) return;
  let l = t.getControlProp(r.controlPropKey);
  return rt(a, l) ?? void 0;
}
function Wi(o, e, t, r) {
  if (X(t, !0)) return Qs(e, t, r);
  if (G(t)) return Js(o, e, t, r);
  if (q(t)) return Ys(e, t, r);
}
function je(o, e, t, r) {
  let n = Wi(o, e, t, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let i = eo(r.ancestorControlKeyPath);
  for (let a of i) {
    if (!n) return;
    if ((m(n.type === a.type), n.type === "object")) {
      if ((m(a.type === "object"), !$(n.value))) return;
      n = n.value[a.key];
    } else if (n.type === "array") {
      if ((m(a.type === "array"), !xt(n.value))) return;
      n = n.value.find((l) => l.id === a.id);
    } else {
      return;
    }
  }
  return n;
}
function B(o, e) {
  o.set(e, void 0, !1, !1);
}
function Oi(o, e, t) {
  B(o, { [sr(e)]: t });
}
function $e(o, e, t, r, n) {
  if (!r.ancestorControlKeyPath) {
    yr(t)
      ? Oi(t, r.controlPropKey, n)
      : G(t)
        ? (m(Jt(n), "Invalid control prop"), t.setControlProp(r.controlPropKey, n))
        : H(t, "Unsupported node");
    return;
  }
  m(X(t, !0) || q(t) || G(t));
  function i(c) {
    if (c) return c.type === "array" || c.type === "object" ? { ...c } : (m(c.type === n.type), n);
  }
  let a = i(Wi(o, e, t, r));
  if (!a) return;
  let l = eo(r.ancestorControlKeyPath),
    s = a;
  for (let c of l) {
    if (!s) return;
    if ((m(s.type === c.type), s.type === "object")) {
      if ((m(c.type === "object", "Current control should be of type Object"), !$(s.value))) return;
      let d = s.value[c.key],
        u = i(d);
      if (!u) return;
      ((s.value = { ...s.value, [c.key]: u }), (s = u));
    } else if (s.type === "array") {
      if ((m(c.type === "array", "Current control should be of type Array"), !xt(s.value))) return;
      let d = s.value.find((p) => p.id === c.id),
        u = i(d);
      if (!u) return;
      ((s.value = s.value.map((p) => (p.id === u.id ? u : p))), (s = u));
    } else {
      return;
    }
  }
  X(t, !0) || q(t)
    ? Oi(t, r.controlPropKey, a)
    : G(t)
      ? (m(Jt(a), "Invalid control prop"), t.setControlProp(r.controlPropKey, a))
      : H(t, "Unsupported node");
}
function x(o, e, t, r) {
  let n = e ? e[o] : void 0,
    i = r(n, t);
  if (!(!e && !i)) {
    if (!i) {
      m(e);
      let a = Object.keys(e),
        l = a.length;
      if (l === 0 || (l === 1 && a[0] === o)) return;
      let s = { ...e };
      return (delete s[o], s);
    }
    return { ...e, [o]: i };
  }
}
function To(o, e, t, r, n) {
  function i(a) {
    function l(s) {
      return s.name === r.type;
    }
    return {
      ...a,
      transforms: a.transforms.map((s) => (s.id !== r.transformId || !l(s) ? s : n(s))),
    };
  }
  if (Ye(t) && Qe(t.textContent)) {
    let a = i(t.textContent);
    B(t, { textContent: a });
    return;
  }
  if (Tt(t) && Qe(t.formInputPlaceholder)) {
    let a = i(t.formInputPlaceholder);
    B(t, { formInputPlaceholder: a });
    return;
  }
  if (q(t)) {
    let a = wo(o),
      l = je(e, a, t, r);
    if (!l || (m(l.type === "string"), !Qe(l.value))) return;
    let s = { ...l };
    ((s.value = i(l.value)), $e(e, a, t, r, s));
  }
}
function ji(o, e, t, r, n, i) {
  o.scheduler.process(() => {
    let a = o.stores.treeStore.getDataTree(),
      l = wo(o),
      s = a.get(e.nodeId),
      c = e.type;
    switch (c) {
      case "string":
      case "richtext":
      case "link": {
        if (!G(s) && !q(s) && !X(s)) return;
        let d = je(a, l, s, e);
        if (!d) break;
        m(c === d.type);
        let u = { ...d },
          p = x(t.id, d.valueLocalized, "default", n);
        ((u.valueLocalized = p), $e(a, l, s, e, u));
        break;
      }
      case "slug": {
        if (!G(s)) return;
        let d = je(a, l, s, e);
        m(d?.type === "string", "expected slug control type to be a ControlType.String");
        let u = { ...d },
          p = x(t.id, d.valueLocalized, "default", n);
        ((u.valueLocalized = p), $e(a, l, s, e, u));
        break;
      }
      case "image": {
        if (!G(s) && !q(s) && !X(s)) return;
        let d = je(a, l, s, e);
        if (!d) break;
        m(c === d.type);
        let u = { ...d };
        if (r === "imageSrc" || r === "all") {
          let p = x(t.id, d.valueLocalized, "imageSrc", n);
          u.valueLocalized = p;
        }
        if (r === "default" || r === "all") {
          let p = x(t.id, d.altLocalized, "default", n);
          u.altLocalized = p;
        }
        $e(a, l, s, e, u);
        break;
      }
      case "enum": {
        if (!Ee(s)) return;
        let d = s.variables.map((u) => {
          if (u.id !== e.variableId) return u;
          m(u.type === e.type);
          let p = u.cases.map((f) => {
            if (f.id !== e.enumCaseId) return f;
            let h = x(t.id, f.nameLocalized, "default", n);
            return { ...f, nameLocalized: h };
          });
          return { ...u, cases: p };
        });
        B(s, { variables: d });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!Wr(s)) return;
        let d = e.key === "title" ? "titleLocalized" : "descriptionLocalized",
          u = s[d],
          p = x(t.id, u, "default", n);
        B(s, { [d]: p });
        break;
      }
      case "RichTextNode": {
        if (!Ye(s)) return;
        let d = x(t.id, s.htmlLocalized, "default", n);
        (B(s, { htmlLocalized: d }), $t(s) && Je(o) && Zt(o, Ht(o, [s.id])).catch(J));
        break;
      }
      case "FrameNode": {
        if (!Go(s)) return;
        if (r === "imageSrc" || r === "all") {
          let d = x(t.id, s.fillImageLocalized, "imageSrc", n);
          B(s, { fillImageLocalized: d });
        }
        if (r === "default" || r === "all") {
          let d = x(t.id, s.altAttributeLocalized, "default", n);
          B(s, { altAttributeLocalized: d });
        }
        break;
      }
      case "nodeLink": {
        if (!_r(s)) break;
        let d = x(t.id, s.linkLocalized, "default", n);
        B(s, { linkLocalized: d });
        break;
      }
      case "prefix":
      case "suffix": {
        if (!s) break;
        To(o, a, s, e, (d) => {
          let u = { ...d },
            p = x(t.id, d.valueLocalized, "default", n);
          return ((u.valueLocalized = p), u);
        });
        break;
      }
      case "convertFromBoolean": {
        if (!s) break;
        To(o, a, s, e, (d) => {
          let u = { ...d };
          return (
            e.property === "truthy" &&
              (u.truthyLocalized = x(t.id, d.truthyLocalized, "default", n)),
            e.property === "falsy" && (u.falsyLocalized = x(t.id, d.falsyLocalized, "default", n)),
            e.property === "fallback" &&
              d.fallback &&
              (u.fallback = {
                ...d.fallback,
                valueLocalized: x(t.id, d.fallback.valueLocalized, "default", n),
              }),
            u
          );
        });
        break;
      }
      case "convertFromEnum": {
        if (!s) break;
        To(o, a, s, e, (d) => {
          let u = { ...d };
          return e.isDefaultCase
            ? ((u.defaultLocalized = x(t.id, d.defaultLocalized, "default", n)), u)
            : ((u.cases = d.cases.map((p) => {
                if (p.id !== e.caseId) return p;
                let f = { ...p },
                  h = x(t.id, p.toLocalized, "default", n);
                return ((f.toLocalized = h), f);
              })),
              u);
        });
        break;
      }
      case "FormPlainTextInputNode": {
        if (!Tt(s)) return;
        B(s, {
          formInputPlaceholderLocalized: x(t.id, s.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!wt(s) || !s.formSelectOptions) return;
        let { optionId: d } = e,
          u = s.formSelectOptions.map((p) => {
            if (p.id !== d) return p;
            let f = x(t.id, p.titleLocalized, "default", n);
            return { ...p, titleLocalized: f };
          });
        B(s, { formSelectOptions: u });
        break;
      }
      case "formSelectGenericOption": {
        if (!wt(s)) return;
        let { key: d } = e;
        switch (d) {
          case "allItemsLabel": {
            let u = x(t.id, s.allItemsLabelLocalized, "default", n);
            B(s, { allItemsLabelLocalized: u });
            break;
          }
          case "booleanTrueLabel": {
            let u = x(t.id, s.booleanTrueLabelLocalized, "default", n);
            B(s, { booleanTrueLabelLocalized: u });
            break;
          }
          case "booleanFalseLabel": {
            let u = x(t.id, s.booleanFalseLabelLocalized, "default", n);
            B(s, { booleanFalseLabelLocalized: u });
            break;
          }
          default:
            H(d);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!Zo(s)) return;
        let d = s.segmentLocalized,
          u = x(t.id, d, "default", n);
        B(s, { segmentLocalized: u });
        break;
      }
      default:
    }
  }, i);
}
function Xs(o, e, t, r, n) {
  o.scheduler.process(() => {
    let i = o.stores.treeStore.getDataTree(),
      a = wo(o),
      l = i.get(e.nodeId),
      s = e.type;
    if (cn(e)) {
      if (!G(l) && !q(l) && !X(l)) return;
      let c = je(i, a, l, e);
      if (!c) return;
      m(c.type === "richtext");
      let d = structuredClone(c);
      ((d.valueLocalized = x(t.id, c.valueLocalized, "default", r)), $e(i, a, l, e, d));
    } else {
      (m(s === "RichTextNode"), m(Ye(l)));
      let c = x(t.id, l.htmlLocalized, "default", r);
      (B(l, { htmlLocalized: c }), $t(l) && Je(o) && Zt(o, Ht(o, [l.id])).catch(J));
    }
  }, n);
}
function Ui(
  o,
  e,
  t,
  r,
  n,
  {
    needsReview: i,
    generatedByAI: a,
    pluginId: l,
    pluginMode: s,
    ignoreTracking: c,
    trackingSource: d,
  }
) {
  let u = { value: o, hash: ea(e, t), lastEdited: Date.now() };
  i && (u.needsReview = !0);
  let p = Bo(n?.value, o);
  return (
    (a || (p && n?.generatedByAI)) && (u.generatedByAI = !0),
    l || vt(s)
      ? (m(l && vt(s), "Cannot set only pluginId or pluginMode"),
        (u.pluginId = l),
        (u.pluginMode = s))
      : p &&
        n?.pluginId &&
        ((u.pluginId = n.pluginId), n.pluginMode && (u.pluginMode = n.pluginMode)),
    c ||
      te(n ? "localized_value_update" : "localized_value_create", {
        code: r.code,
        valueLength: typeof o == "string" ? o.length : 0,
        generatedByAI: !!u.generatedByAI,
        source: d,
      }),
    u
  );
}
function ea(o, e) {
  switch (e) {
    case "default":
      return o.hash;
    case "imageSrc":
      return (m(st(o)), o.imageHash);
    default:
      H(e);
  }
}
function ta(o, e) {
  if (!e.draft) return;
  let t = o.stores.localizationStore.progressPerLocale[e.id];
  !me(t) ||
    t === 1 ||
    o.scheduler.runBeforeNextFrame(() => {
      o.stores.localizationStore.getCurrentExactProgressForLocale(o, e.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (o.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          o.stores.modalStore.set({ type: "LocaleReady", activeLocale: e, source: "automatic" }));
    });
}
function oa(o, e) {
  if (!o.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let t = o.stores.treeStore.getDataTree().get(e.nodeId);
  if (!Ee(t) && !G(t)) return;
  let r = Ee(t) ? t.id : t.parentid;
  r && o.stores.codeGenerationStore.updateComponent(r).catch(J);
}
function _i(o, e, t) {
  Je(o) && (ta(o, t), oa(o, e));
}
function $i(o, e, t, r, n) {
  let {
    needsReview: i,
    generatedByAI: a,
    pluginId: l,
    pluginMode: s,
    ignoreTracking: c,
    target: d = "default",
    trackingSource: u,
    preserveExistingTextType: p,
    eventType: f,
  } = n;
  if (e !== null && typeof e != "string") {
    (Xs(
      o,
      t,
      r,
      (h) =>
        Ui(e, t, d, r, h, {
          needsReview: i,
          generatedByAI: a,
          pluginId: l,
          pluginMode: s,
          ignoreTracking: c,
          trackingSource: u,
        }),
      f
    ),
      _i(o, t, r));
    return;
  }
  (ji(
    o,
    t,
    r,
    d,
    (h) => {
      let y = Ui(e, t, d, r, h, {
        needsReview: i,
        generatedByAI: a,
        pluginId: l,
        pluginMode: s,
        ignoreTracking: c,
        trackingSource: u,
      });
      if (
        (d === "imageSrc" &&
          ("imageFocalPoint" in n
            ? n.imageFocalPoint && (y.imageFocalPoint = n.imageFocalPoint)
            : h?.imageFocalPoint && (y.imageFocalPoint = h.imageFocalPoint)),
        p)
      )
        if (d === "default") {
          let S = t.localizedValues[r.id],
            V = S?.value ?? null;
          (m(V === e, "The text type can only be preserved when the source value is unchanged"),
            S?.type && (y.type = S.type));
        } else d === "imageSrc" || H(d);
      else un(t) && (y.type = "rich-text");
      return y;
    },
    f
  ),
    _i(o, t, r));
}
function Gi(o, e) {
  let t = o.localizedValues[e.id];
  return t ? t.value : null;
}
function Ic(o, e, t, r) {
  let n = "default",
    i = Gi(e, t),
    a = e.localizedValues[t.id];
  if (st(e)) {
    let l = e.imageLocalizedValues[t.id];
    l && ((n = "imageSrc"), (i = l.value), (a = l));
  }
  ($i(o, i, e, t, {
    needsReview: !0,
    ignoreTracking: !0,
    target: n,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    te("localized_value_request_review", {
      code: t.code,
      valueLength: typeof i == "string" ? i.length : 0,
      generatedByAI: !!a?.generatedByAI,
      source: r,
    }));
}
function Cc(o, e, t, { trackingSource: r, ignoreTracking: n }) {
  let i = "default",
    a = Gi(e, t),
    l = e.localizedValues[t.id];
  if (st(e)) {
    let s = e.imageLocalizedValues[t.id];
    s && ((i = "imageSrc"), (a = s.value), (l = s));
  }
  ($i(o, a, e, t, {
    ignoreTracking: !0,
    target: i,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    n ||
      te("localized_value_approve", {
        code: t.code,
        valueLength: typeof a == "string" ? a.length : 0,
        generatedByAI: !!l?.generatedByAI,
        source: r,
      }));
}
function xc(o, e, t, { target: r, ignoreTracking: n, trackingSource: i, eventType: a }) {
  ji(
    o,
    e,
    t,
    r,
    (l) => {
      let s = l?.value;
      n ||
        te("localized_value_clear", {
          code: t.code,
          valueLength: typeof s == "string" ? s.length : 0,
          generatedByAI: !!l?.generatedByAI,
          source: i,
        });
    },
    a
  );
}
export {
  va as a,
  wn as b,
  ls as c,
  us as d,
  ol as e,
  rl as f,
  jn as g,
  $n as h,
  wl as i,
  so as j,
  Qn as k,
  Dl as l,
  Be as m,
  nd as n,
  Fe as o,
  yo as p,
  id as q,
  sd as r,
  ad as s,
  la as t,
  da as u,
  ua as v,
  ca as w,
  ya as x,
  Ln as y,
  Tn as z,
  ha as A,
  re as B,
  Bi as C,
  Bu as D,
  Ou as E,
  Uu as F,
  _u as G,
  Wu as H,
  ju as I,
  qs as J,
  $u as K,
  Gu as L,
  $i as M,
  Ic as N,
  Cc as O,
  xc as P,
};
//# sourceMappingURL=chunk-5MMXXW44.mjs.map
