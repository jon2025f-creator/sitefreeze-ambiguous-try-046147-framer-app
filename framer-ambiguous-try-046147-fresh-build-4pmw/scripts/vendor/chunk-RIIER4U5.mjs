import { d as Sn, f as In } from "chunk-QKMVELQN.mjs";
import {
  $ as it,
  D as Xt,
  J as dn,
  K as un,
  Y as cn,
  Z as pn,
  a as rn,
  b as nn,
  c as an,
  d as ln,
  ra as fn,
} from "chunk-NWXEZ2PF.mjs";
import {
  Bg as en,
  Ej as st,
  Fj as eo,
  Gj as to,
  Hj as ro,
  Lj as at,
  Mj as hn,
  Na as Zt,
  Nc as Yr,
  Qj as gn,
  Rh as on,
  Rj as Mn,
  ah as tn,
  fc as Zr,
  gc as nt,
  hc as qr,
  jc as qt,
  jg as Qr,
  xg as Jr,
  zg as Xr,
} from "chunk-X5TG2OLD.mjs";
import { a as Mr } from "chunk-D2IRBWQB.mjs";
import { a as Cn } from "chunk-V3C5CSFI.mjs";
import { T as Qt } from "chunk-CYBVNHJA.mjs";
import { id as Gr, jc as jr, p as $t } from "chunk-QW7DILDK.mjs";
import { Lc as Kt, Oc as Ht, Tb as $r, a as Or, w as _r } from "chunk-7ZIAKHN7.mjs";
import { e as Kr } from "chunk-BIHMMN5H.mjs";
import { f as Hr, i as sn, o as yn, s as oo } from "chunk-7ZCOVLUS.mjs";
import { w as De, x as mn } from "chunk-T7PGJYAG.mjs";
import {
  $d as ir,
  $f as zt,
  $i as Er,
  $n as Wt,
  Am as X,
  Bi as Sr,
  Bm as zr,
  Ci as et,
  Cm as Ar,
  Di as Ft,
  Fh as At,
  Fi as Bt,
  Gm as Fr,
  Hi as Ir,
  Hm as rt,
  Ji as Cr,
  Km as ge,
  Li as xr,
  Mi as vr,
  Ok as ot,
  Ol as kr,
  On as Br,
  Pl as Dr,
  Ql as _t,
  Rl as Nr,
  Rt as jt,
  Tp as Ur,
  V as Jo,
  Wi as tt,
  Ww as Gt,
  Xn as ke,
  Zi as Ot,
  bf as ye,
  cf as yr,
  cj as Pr,
  d as jo,
  di as hr,
  ej as br,
  fj as Tr,
  mj as Lr,
  ob as rr,
  oi as gr,
  pj as wr,
  rj as Ut,
  rr as Wr,
  tb as nr,
  um as Vr,
  ve as pr,
  vj as Rr,
  xe as fr,
  ye as mr,
} from "chunk-WOYJMQRQ.mjs";
import {
  $m as ar,
  $o as ur,
  Aa as Uo,
  Ba as He,
  Ca as g,
  Ha as _o,
  Ij as or,
  Ja as It,
  Kq as cr,
  Mi as me,
  Na as Et,
  Nk as Dt,
  Qm as Re,
  Tb as Tt,
  Td as Ye,
  Vb as Lt,
  Vi as er,
  Xl as sr,
  db as $o,
  eb as Ze,
  fb as Pt,
  fj as tr,
  gb as bt,
  gc as Ho,
  jn as lr,
  kb as Go,
  kn as Nt,
  lb as Ko,
  m as ce,
  mn as Vt,
  nb as J,
  nc as Zo,
  ne as Yo,
  oc as G,
  on as dr,
  pe as Qo,
  qe as wt,
  qq as q,
  ra as Bo,
  sa as F,
  sb as qe,
  ta as H,
  tb as Z,
  ua as k,
  vi as Xo,
  vq as Je,
  wa as pe,
  wq as Xe,
  xa as xe,
  xb as ve,
  ya as Oo,
  yb as $,
} from "chunk-R6SUI6XF.mjs";
import { c as ie } from "chunk-KHLE6F5R.mjs";
import { a as Jt } from "chunk-4HRYW54D.mjs";
import { f as ee } from "chunk-Y6ALVJAM.mjs";
import { a as Yt } from "chunk-24G7FGVN.mjs";
import { g as Rt } from "chunk-K3IJ2B65.mjs";
import { d as Qe, f as he } from "chunk-4LUH7OH5.mjs";
import { a as Fo } from "chunk-KQKA2AEH.mjs";
import { b as qo } from "chunk-YSP5ZHDJ.mjs";
import { b as zo } from "chunk-AUNF3KWQ.mjs";
import { a as kt } from "chunk-AYNVEX5D.mjs";
import { a as Ao } from "chunk-2FCXHKEL.mjs";
import { p as E } from "chunk-7OL2P5WS.mjs";
import {
  a as Wo,
  b as M,
  e as fe,
  f as j,
  k as Ct,
  m as we,
  n as xt,
  p as vt,
} from "chunk-LA34HORX.mjs";
import { b as m, c as K } from "chunk-4JY5UMT2.mjs";
import { b as St } from "chunk-G7OZBQQG.mjs";
import { b as Q, i as Ke } from "chunk-VJ7UYMJI.mjs";
import { a as Vo } from "chunk-YRQ7G4QH.mjs";
import {
  e as wo,
  f as Ro,
  g as ko,
  h as W,
  i as ue,
  j as _,
  k as z,
  l as B,
  m as Y,
  p as Do,
  q as No,
} from "chunk-WLHSDIGQ.mjs";
var xn = [ye.video, ye.youtube, ye.vimeo, ye.codeblock, ye.twitter, ye.embed];
function ua(o, e) {
  let t = g(e);
  return H(t)
    ? t.type === "canvasComponent"
    : F(t)
      ? o.tree.getNodeWithTrait(t.moduleId, G)?.type === "canvasComponent"
      : !1;
}
async function ca(o, e) {
  let t = g(e);
  F(t) && (await o.stores.modulesStore.addExternalModulesToProject([t], { onTreeUpdate() {} }));
}
var En = new WeakMap();
async function pa(o) {
  let { modules: e } = await o.stores.modulesStore.lookUpModules(xn.map(yr)),
    t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    m(n, "Module must exist");
    let i = xn[r];
    (m(i, "Module component must exist"),
      En.set(i, n),
      m(n.files.module, "Module must have a module file"),
      t.push(pe(n.id, n.saveId, n.files.module, i.exportSpecifier ?? "default")));
  }
  await o.stores.modulesStore.preloadExternalModules(t);
}
function fa(o, e) {
  let t = En.get(e);
  m(t, "Preloaded module must exist");
  let r = o.getNodeWithTrait(t.id, G);
  return r
    ? r.codeComponentIdentifier
    : (m(t.files.module, "Module must have a module file"),
      pe(t.id, t.saveId, t.files.module, e.exportSpecifier ?? "default").value);
}
var te = wo(Ao(), 1),
  Pn = "dismissedInstantNPMToast",
  bn = "showedInstantNPMToast",
  Tn = "instant-npm-toast",
  ga = () => window.localStorage.getItem(bn) === "true",
  Ln = () => window.localStorage.getItem(Pn) === "true";
function qi() {
  return (0, te.jsxs)(te.Fragment, {
    children: [
      (0, te.jsx)(Jt, { children: "Installed NPM library." }),
      (0, te.jsxs)("a", {
        href: "https://www.framer.com/developers/#faq",
        target: "_blank",
        children: [" ", (0, te.jsx)(Jt, { children: "Learn more." })],
      }),
    ],
  });
}
function wn() {
  (window.localStorage.setItem(bn, "true"),
    ie({
      type: "add",
      variant: "info",
      text: (0, te.jsx)(qi, {}),
      key: Tn,
      duration: 1 / 0,
      showCloseButton: "never",
      action: { title: "Dismiss", onClick: () => window.localStorage.setItem(Pn, "true") },
    }));
}
function Ma() {
  ie({ type: "remove", key: Tn });
}
function Pa(o, e, t) {
  let r = e && o.getNode(e);
  if (!r || !me(r)) return t(e, {}, !1);
  let n = nr(o, r) ? {} : { visible: !1 },
    i = t(r.originalid, n, !0);
  if (i === void 0) return;
  let a = gr.getReplicaForTemplateNode(o, r);
  return a ? (n.visible === !1 && Mr(o, a, i, { visible: !0 }), jo(a.id, i)) : i;
}
function Rn(o, e, t = o.id) {
  let r = o.children;
  return Yo(o) ? (!r || r.length === 0 ? [] : (e.getChildrenRects(t) ?? [])) : null;
}
var Yi = { track: !0 };
function kn(o) {
  let e = { ...o, event: "external_component_insert" };
  zo(e, Yi);
}
function Vn(o, e, t) {
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
        p = Vn(i, d, u);
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
      y = Vn(s, f, h);
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
  return ce.merge(...t);
}
function os(o, e, t, r) {
  let n = Pt(o) || o.resolveValue("stackDirection") === "horizontal",
    i = ce.merge(...e),
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
    P = es(t, n, e, V, h, y),
    b = e[P];
  m(b, () => `Closest rect is not defined: ${P}`);
  let T = b[a] + b[s] / 2,
    L = h || y ? h : d < T,
    v = L ? P : P + 1;
  (h && (v = 0), y && (v = e.length));
  let D = b[a],
    A = D + b[s],
    U = L ? D : A,
    w = null,
    I = L ? P - 1 : P + 1;
  if (I >= V.startIndex && I <= V.endIndex) {
    let re = e[I];
    if (re) {
      let ne = re[a],
        Mt = ne + re[s];
      w = L ? Mt : ne;
    }
  }
  let R = U;
  fe(w) && (R = Math.round((R + w) / 2));
  let le = ts(e, V),
    $e = Math.round(le[l] + le[c] / 2),
    Le = { [a]: R, [l]: $e },
    Se = { ...Le },
    Ie = { ...Le },
    Ge = r[c],
    de = Math.round(Ge / 2);
  return (
    n ? ((Se.y -= de), (Ie.y += de)) : ((Se.x -= de), (Ie.x += de)),
    { insertionIndex: v, localInsertionLine: { a: Se, b: Ie } }
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
var Dn = 4,
  Nn = 20;
function zn(o, e, t, r, n) {
  if (
    (m(e.length, "childInsertion only works correctly if there are more than 0 child rects"),
    E.isOn("betterStackGridItemMoving"))
  ) {
    let { rect: u, index: p } = ce.closestRect(e, r),
      f = wt(o),
      h = Qo(o) ? !f : o.resolveValue("stackDirection") === "horizontal",
      y = h ? "x" : "y",
      S = h ? "y" : "x",
      V = h ? "width" : "height",
      P = h ? "height" : "width",
      b = r[y] < u[y] + u[V] / 2,
      T = f && fe(o.gridColumnCount) ? Math.max(Math.floor(o.gridColumnCount), 1) : 1,
      L = b ? p - T : p + T,
      v = e[L],
      D = !v || (b ? v[y] >= u[y] : u[y] >= v[y]),
      A = b ? p : Math.min(p + T, e.length);
    if (D) {
      let U = b ? u[y] + Dn : u[y] + u[V] - Dn;
      return {
        insertionIndex: A,
        localInsertionLine: { a: dt(y, U, u[S]), b: dt(y, U, u[S] + Math.max(u[P], Nn)) },
      };
    } else {
      let U = b ? (v[y] + v[V] + u[y]) / 2 : (u[y] + u[V] + v[y]) / 2;
      return {
        insertionIndex: A,
        localInsertionLine: {
          a: dt(y, U, Math.min(v[S], u[S])),
          b: dt(y, U, Math.max(v[S] + v[P], u[S] + Math.max(u[P], Nn))),
        },
      };
    }
  }
  if (Pt(o) || o.stackWrapEnabled) return wt(o) ? rs(e, r) : os(o, e, r, n);
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
    let p = ce.center(u);
    ((l ? r.y > p.y : r.x > p.x) && a++, (s = Math.min(Math.max(0, a), e.length)));
  }
  let c = is(o),
    d = ss(o.resolveValue("stackDirection"), o.resolveValue("stackAlignment"), c, t, e, s, n);
  return { insertionIndex: ns(o, s), localInsertionLine: d };
}
function dt(o, e, t) {
  return o === "x" ? { x: e, y: t } : { x: t, y: e };
}
function ns(o, e) {
  m(Re(o), "A node must support children to consider an insertion index.");
  let t = e;
  for (let r = 0; r < o.children.length && r !== e; r++) {
    let n = o.children.at(r);
    n && (Br(n) || t++);
  }
  return t;
}
function is(o) {
  let e = o.resolveValue("stackDirection"),
    t = o.resolveValue("stackAlignment");
  if (t === "center") return 0;
  let r = Or(o);
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
var An = 10;
function ls(o, e) {
  for (let t of o) if (e.includes(t)) return !0;
  return !1;
}
function ds(o, e, t, r, n) {
  if (n.length === 0 || o.stackWrapEnabled || er(o) || me(o)) return null;
  let { tree: i } = e,
    { zoom: a } = e.stores.canvasStore,
    l = i.getParent(o.id);
  if (l && Ze(l) && (l.stackDirection !== o.stackDirection || l.stackWrapEnabled)) return null;
  let s = Wt(i, o, t),
    c = i.getRect(o),
    d = o.stackDirection === "vertical",
    u = d ? "x" : "y",
    p = d ? "y" : "x",
    f = d ? "width" : "height",
    h = d ? "height" : "width",
    y = c[f],
    S = c[h],
    V = y * a,
    P = S * a;
  if (V < 40 || P < 40) return null;
  let b = s[u],
    T = 10 / a,
    L = ce.merge(...n),
    v = L[u],
    D = v + L[f],
    A = Math.max(T, v / 2),
    U = Math.max(T, (y - D) / 2),
    w = b <= A,
    I = b >= y - U;
  if (!w && !I) return null;
  let R = w ? 0 : 1,
    le = r[h],
    $e = 4 / a,
    Le = w ? $e : y - $e,
    Se = S / 2,
    Ie = le / 2,
    Ge = S / 3,
    de = s[p],
    Ce = "end";
  le > S ? (Ce = "center") : de < Ge ? (Ce = "start") : de < 2 * Ge && (Ce = "center");
  let re, ne;
  switch (Ce) {
    case "start": {
      ((re = 0), (ne = le));
      break;
    }
    case "end": {
      ((ne = S), (re = ne - le));
      break;
    }
    default: {
      ((re = Se - Ie), (ne = Se + Ie));
      break;
    }
  }
  let Mt = { [u]: Le, [p]: re },
    Ki = { [u]: Le, [p]: ne },
    Hi = ke(i, o, Mt),
    Zi = ke(i, o, Ki);
  return { insertionIndex: R, insertionLine: { a: Hi, b: Zi }, wrap: { wrapAlignment: Ce } };
}
function us(o, e, t, r, { allowWrapping: n = !0 } = {}) {
  if (!Re(o)) return { insertionIndex: null, insertionLine: null };
  let i = Rn(o, e.stores.layoutCache);
  if (!i) return { insertionIndex: null, insertionLine: null };
  if (Ze(o) && n) {
    let p = ds(o, e, t, r, i);
    if (p) return p;
  }
  let a = e.tree,
    l = a.getRect(o),
    s = Wt(a, o, t);
  if (i.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: c, localInsertionLine: d } = zn(o, i, l, s, r),
    u = { a: ke(a, o, d.a), b: ke(a, o, d.b) };
  return { insertionIndex: c, insertionLine: u };
}
var cs = { width: 10, height: 10 };
function nl(o, e, t, r, n = !1) {
  m(t.length, "getStackOrGridInRange(): expects at least a single selected node");
  let i = o.stores.scopeStore.active;
  if (t.some(Jo)) return null;
  let l = _r(o.tree, i, e)
    .filter(
      (d) =>
        !(
          (Ur(d) && d.locked) ||
          !Re(d) ||
          tn(d) ||
          rr(o.tree, o.stores.overlayStore.activeOverlays, d)
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
    if (!or(d) || (n && !tr(d))) continue;
    let u = o.tree.getAncestorIds(d.id);
    if ((u.push(d.id), ls(u, c) || (s || (s = d), !bt(d)))) continue;
    let { insertionLine: f } = us(d, o, e, cs);
    if (!f) continue;
    if (f.a.x === f.b.x) {
      if (Math.abs(e.x - f.a.x) * o.stores.canvasStore.zoom > An) continue;
    } else if (f.a.y === f.b.y) {
      if (Math.abs(e.y - f.a.y) * o.stores.canvasStore.zoom > An) continue;
    } else continue;
    if (t.every((y) => $t(o.tree, d, y, i.id, o.componentLoader))) return d;
  }
  if (bt(s)) {
    let d = s;
    if (t.every((p) => $t(o.tree, d, p, i.id, o.componentLoader))) return s;
  }
  return null;
}
function il(o, e, { wrapAlignment: t }) {
  let r = on.addStack(o, [e]);
  if (!r) return null;
  let n = o.tree.getNode(r);
  return !n || !Ze(n)
    ? null
    : (n.set({
        stackDirection: e.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: t,
      }),
      n);
}
function _n(o) {
  return o.type === "controlReference";
}
function Wn(o, e, t, r) {
  let n = g(o.identifier);
  if (!(!n || !k(n))) {
    if (H(n)) {
      let i = e.getObjectKey(n.localId, "save");
      if (n.type === "codeFile") {
        let s = ut(i?.propertyControls);
        if (s !== void 0) return Hn(s, n.exportSpecifier, r, t);
      }
      let a = i?.moduleId,
        l = o.moduleId ?? (typeof a == "string" ? a : void 0);
      return l ? Fn(l, void 0, n.exportSpecifier, r, e, t) : void 0;
    }
    if (F(n)) return Fn(o.moduleId ?? n.moduleId, n.saveId, n.exportSpecifier, r, e, t);
  }
}
function Fn(o, e, t, r, n, i) {
  return Hn(jn(o, e, n), t, r, i);
}
function jn(o, e, t) {
  let r = e ?? ms(o, t);
  if (!r) return;
  let n = t.getObjectKey(o, "propertyControlsBySaveId");
  if (j(n)) return ut(n[r]);
}
function ms(o, e) {
  let t = e.getObjectKey(o, "codeComponentIdentifier");
  if (!M(t)) return;
  let r = g(t);
  return F(r) ? r.saveId : void 0;
}
function ut(o) {
  if (o === null) return null;
  if (!j(o)) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!j(r)) return;
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
    if (!j(e)) return;
    let t = {};
    for (let r in e) {
      let n = e[r];
      if (!j(n)) return;
      t[r] = n;
    }
    return t;
  } catch {
    return;
  }
}
function Ee(o) {
  return o === null ? !0 : ut(o) !== void 0;
}
function Bn(o, e, t) {
  if (o === null || typeof o == "string") return;
  let r = o?.[e]?.[t];
  return M(r) ? r : void 0;
}
function $n(o, e) {
  return Kn(o, e, "displayName");
}
function Gn(o, e) {
  return Kn(o, e, "type");
}
function Kn(o, e, t) {
  let r = g(o);
  if (!(!r || !k(r))) {
    if (H(r)) {
      if (r.type === "codeFile") {
        let n = e.getObjectKey(r.localId, "save");
        return Bn(ut(n?.propertyControls), r.exportSpecifier, t);
      }
      return;
    }
    if (F(r)) return Bn(jn(r.moduleId, r.saveId, e), r.exportSpecifier, t);
  }
}
function Hn(o, e, t, r) {
  if (o === null) return null;
  if (typeof o == "string") return;
  let n = o?.[e];
  if (n) return ys(n[t], r);
}
function gs(o, e) {
  if (!(!o || !k(o)))
    switch (o.kind) {
      case "localModuleExport": {
        let t = e.getObjectKey(o.localId, "save")?.moduleId;
        return t ? t : void 0;
      }
      case "externalModuleExport":
        return o.moduleId;
      default:
        K(o);
    }
}
function Ms(o, e, t) {
  let r = Ss(e, o.entityIdentifier),
    n = g(r);
  if (!(!n || !k(n)))
    return {
      type: "controlReference",
      controlKey: o.controlKey,
      title: o.name || "Unknown",
      description: o.description,
      defaultValue: o.initialValue,
      optional: Je(o, t) ? !0 : void 0,
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
function On(o, e) {
  en(e) && (o[ln(e.id)] = { type: "changehandler", changes: e.id });
}
function ct(o, e) {
  let t = o.getObjectKey(e, "variables");
  if (t === void 0 && o.has(e)) return [];
  if (!Array.isArray(t)) return;
  let r = [];
  for (let n of t) Xe(n) && r.push(n);
  return r;
}
function Is(o, e, t) {
  let r = ct(e, o);
  if (!r) return;
  let n = He("collection", o, "default").value,
    i = Ne(r, e, "ContentManagement", !1, {}, t),
    a = e.getObjectKey(o, "name"),
    l = sr({ name: M(a) && a ? a : void 0, dataIdentifier: n });
  return Ne(l, e, "ContentManagement", !1, i, t);
}
function no(o, e, t, r) {
  let n = e.name || "Unknown",
    i = Je(e, t) ? !0 : void 0;
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
        defaultValue: i ? void 0 : q(e.type, e.initialValue),
        disabledTitle: e.options?.disabledTitle,
        enabledTitle: e.options?.enabledTitle,
        optional: i,
      };
    case "number":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : q(e.type, e.initialValue),
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
        defaultValue: i ? void 0 : q(e.type, e.initialValue),
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
        defaultValue: q(e.type, e.initialValue),
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
                ...(Nt(e.initialValue) && M(e.initialValue.alt) ? { alt: e.initialValue.alt } : {}),
                ...(Vt(e.initialValue)
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
        defaultValue: i ? void 0 : q(e.type, e.initialValue),
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
        defaultValue: i ? void 0 : q(e.type, e.initialValue),
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
        __defaultAssetReference: q(e.type, e.initialValue),
      };
    }
    case "transition": {
      let a = q(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: a ? Xo(a) : void 0,
      };
    }
    case "border": {
      let a = q(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: a ? ar(a) : void 0,
      };
    }
    case "boxshadow":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: e.initialValue.map(lr),
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
      K(e);
  }
}
function Cs(o, e, t, r) {
  let n = {},
    i = cr(e);
  for (let a of e.itemVariables) {
    if (!Xe(a)) continue;
    let l = no(o, a, t, r),
      s = l ? De({ control: l }).control : void 0;
    if (!(!s || !Et(s))) {
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
      if (!a || a.type !== "object" || !j(a.value)) return l;
      for (let s of e.itemVariables) {
        if (s.type === "divider") continue;
        let c = a.value[s.id];
        if (!c) continue;
        let d = Zn(c, s.type);
        we(d) || (l[s.id] = d);
      }
      return l;
    }),
  };
}
function xs(o, e, t, r) {
  let n = {};
  for (let l of e.fieldVariables) {
    let s = no(o, l, t, r),
      c = s ? De({ control: s }).control : void 0;
    !c || !Et(c) || (n[l.id] = c);
  }
  let i = Je(e, t),
    a = {};
  if (!i)
    for (let l of e.fieldVariables) {
      let s = Zn(e.initialValue[l.id], l.type);
      we(s) || (a[l.id] = s);
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
function Zn(o, e) {
  if (Dt(o) && o.type === e)
    switch (e) {
      case "image": {
        if (!M(o.value)) return;
        let t = Vt(o);
        return {
          assetReference: o.value,
          alt: Nt(o) ? o.alt : void 0,
          positionX: t ? o.positionX : void 0,
          positionY: t ? o.positionY : void 0,
        };
      }
      case "boolean":
        return Wo(o.value) ? o.value : void 0;
      case "number":
        return fe(o.value) ? o.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return M(o.value) ? o.value : void 0;
      case "richtext":
        return dr(o.value) ? o.value : void 0;
      case "link":
        return ur(o.value) ? o.value : void 0;
      case "vectorsetitem":
        return M(o.value) && k(o.value) ? o.value : void 0;
      default:
        K(e);
    }
}
function Es(o) {
  let e = o.getHierarchy().getRootId();
  if (!e) return !1;
  let t = o.getObjectKey(e, "webMetadata");
  return j(t) ? t.translatePagePaths === !1 : !1;
}
function Ps(o, e) {
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
      c = (M(s) && s) || $r("Variant", a, { startIndex: a.size + 1, omitCountIfFirst: !1 });
    (a.add(c), n.push(l), i.push(c));
  }
  return { variant: { type: "enum", title: "Variant", options: n, optionTitles: i } };
}
function Ne(o, e, t, r, n, i) {
  for (let a of o) {
    if (!Xe(a)) continue;
    let l = _n(a) ? Ms(a, e, t) : void 0;
    if (l) {
      ((n[a.id] = l), r && On(n, a));
      continue;
    }
    let s = no(e, a, t, i);
    vt(s) || ((n[a.id] = s), r && On(n, a));
  }
  return n;
}
function bs(o, e, t, r) {
  let n = ct(t, o);
  if (!n) return;
  let i = Ts(e, t),
    a = i ? n.filter((l) => i.has(l.id)) : n;
  return Ne(a, t, "SmartComponent", !0, Ps(o, t), r);
}
function Ts(o, e) {
  let t = e.getObjectKey(o, "save")?.annotations?.default;
  if (t?.framerImmutableVariables !== !0) return;
  let r = t.framerVariables;
  if (we(r)) return new Set();
  if (j(r)) return new Set(Object.keys(r));
}
function Ls(o, e, t) {
  let r = ct(e, o);
  if (r) return Ne(r, e, "LayoutTemplate", !1, {}, t);
}
function ws(o, e, t) {
  let r = e.getParentId(o);
  if (!r || r === Kr || e.getObjectKey(r, "__class") !== "VectorSetNode") return;
  let n = ct(e, r);
  if (n) return Ne(n, e, "VectorSet", !1, {}, t);
}
function Rs(o, e, t) {
  let r = g(o.identifier);
  if (!r || !k(r) || !H(r) || r.exportSpecifier !== "default") return;
  let n = r.localIdName;
  switch (r.type) {
    case "canvasComponent":
      return bs(n, r.localId, e, t);
    case "layoutTemplate":
      return Ls(n, e, t);
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
      K(r.type);
  }
}
function ks(o, e, t, r) {
  let n = Rs(o, e, r);
  return n !== void 0 ? n : Wn(o, e, t.parsedPropertyControls, "controls");
}
function qn(o, e, t) {
  return {
    getStoredPropertyControls: (n, i) => ks(n, o, i, e),
    verifyControls: t,
    cache: new Map(),
    parsedPropertyControls: new Map(),
    resolving: new Set(),
    resolvingReferences: new Set(),
  };
}
function Ds(o, e) {
  let t = `${o.module.identifier}\0${o.module.moduleId ?? ""}\0${o.controlKey}`;
  if (e.resolvingReferences.has(t)) return;
  e.resolvingReferences.add(t);
  let n = e.getStoredPropertyControls(o.module, e)?.[o.controlKey];
  if (!n) {
    e.resolvingReferences.delete(t);
    return;
  }
  let i = Yn(n, e);
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
function Yn(o, e) {
  let t = e.cache.get(o);
  if (t !== void 0) return t ?? void 0;
  if (e.resolving.has(o)) return;
  e.resolving.add(o);
  let r = _n(o) ? Ds(o, e) : e.verifyControls({ control: o }).control;
  return (e.resolving.delete(o), e.cache.set(o, r ?? null), r);
}
function Qn(o, e) {
  let t = {};
  for (let r in o) {
    let n = o[r];
    if (!n) continue;
    let i = Yn(n, e);
    i && (t[r] = i);
  }
  return t;
}
function kl(o, e, t) {
  return io({ identifier: o.instanceIdentifier }, e, t);
}
function io(o, e, t) {
  if (!t.enabled) return;
  let r = qn(e, t, De),
    n = r.getStoredPropertyControls(o, r);
  if (vt(n)) return {};
  if (!we(n)) return Qn(n, r);
}
function Jn(o, e, t) {
  if (!t.enabled) return;
  let r = qn(e, t, mn),
    n = Wn(o, e, r.parsedPropertyControls, "outputControls");
  if (n) return Qn(n, r);
}
function zl(o, e) {
  let t = (n) => o.reactComponentForIdentifier(n)?.properties ?? null;
  if (e.mode !== "crdt" || !E.isOn("harness2")) return { getPropertyControls: t };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let i = t(n);
      if (i) return i;
      let a = r.get(n);
      if (a !== void 0) return a;
      let l = Ns(n, e);
      return (r.set(n, l), l);
    },
  };
}
function Ns(o, e) {
  let t = g(o);
  if (!t || !k(t)) return null;
  let r = e.resolvePropertyControls({ instanceIdentifier: t.value });
  return r === void 0 ? null : Ve(r);
}
function Ve(o) {
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!r) continue;
    let { hidden: n, ...i } = r;
    e[t] = i;
  }
  return e;
}
var Xn = ["loader", "tree-first", "tree-only"];
function ei(o) {
  return Xn.find((e) => e === o);
}
var so =
  typeof window > "u"
    ? void 0
    : ei(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function ti(o) {
  so = o;
}
function uo() {
  return E.isOn("harness2");
}
function Me() {
  return uo() ? so || (E.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function oi() {
  return Xn;
}
function ri(o) {
  return ei(o);
}
var O = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
  },
  ao = new Set(),
  lo = new Set();
function ni() {
  return {
    ...O,
    kindMismatches: [...O.kindMismatches],
    annotationRefusals: [...O.annotationRefusals],
  };
}
function ii() {
  ((O.treeHits = 0),
    (O.treeMisses = 0),
    (O.loaderFallbacks = 0),
    (O.loaderPreferred = 0),
    (O.kindMismatches.length = 0),
    (O.annotationRefusals.length = 0),
    ao.clear(),
    lo.clear());
}
function si() {
  O.treeHits++;
}
function ai() {
  O.treeMisses++;
}
function li() {
  O.loaderFallbacks++;
}
function di() {
  O.loaderPreferred++;
}
function ui(o, e) {
  ao.has(o) || (ao.add(o), O.kindMismatches.push({ identifier: o, loaderType: e }));
}
function co(o) {
  lo.has(o) || (lo.add(o), O.annotationRefusals.push(o));
}
var po = Symbol("annotationRefusal");
function ci(o) {
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
var pi = new WeakMap();
function As(o) {
  let e = 0;
  for (let t = o; t; t = t.base) e += t.length;
  return e;
}
function Fs(o) {
  let e = o.manifest,
    t = As(o),
    r = pi.get(o);
  if (r && r.branchManifest === e && r.rowCount === t) return r.answers;
  let n = new Map();
  return (pi.set(o, { branchManifest: e, rowCount: t, answers: n }), n);
}
function ze(o) {
  throw new Error(
    `${o} is not available on the localization tree-controls loader: it is read-only`
  );
}
var fo = class extends nn {
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
      n ? si() : ai(),
      n && r && r.type !== n.definition.type && ui(t, r.type),
      this.mode === "tree-only"
        ? (n?.definition ?? null)
        : n && this.preferTreeAnswer(n, r !== null)
          ? n.definition
          : (n ? di() : r && li(), r)
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
    ze("updateEntity");
  }
  deleteEntity() {
    ze("deleteEntity");
  }
  setModuleRevision() {
    ze("setModuleRevision");
  }
  testing = {
    setEntity: () => ze("testing.setEntity"),
    clearEntities: () => ze("testing.clearEntities"),
  };
  treeAnswer(t) {
    let r = Fs(this.store),
      n = r.get(t);
    if (n === po) return (co(t), null);
    if (n !== void 0) return n;
    let i = this.resolveFromTree(t);
    return (r.set(t, i), i === po ? (co(t), null) : i);
  }
  resolveFromTree(t) {
    let r = g(t);
    if (!r || !k(r)) return null;
    let n = E.isOn("harness2"),
      i = io({ identifier: r.value }, this.store, { enabled: n });
    if (i === void 0) return null;
    let a = this.moduleNodeFacts(r);
    if (a === null) return po;
    let { name: l, annotations: s } = a,
      c = Gn(r.value, this.store);
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
            name: $n(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: Ve(i),
            outputs: Ve(Jn({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...d, name: l ?? "Unknown", type: "component", properties: Ve(i) };
    return { hash: rn(p), definition: p, derivedFromDocument: zs(r) };
  }
  moduleNodeFacts(t) {
    switch (t.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(t.localId, ge),
          n = ci(r?.save.annotations?.[t.exportSpecifier]);
        if (t.type === "codeFile") return { name: r?.getName(), annotations: n };
        let i = this.store.getObjectKey(t.localIdName, "name");
        return { name: (M(i) && i) || r?.getName(), annotations: n };
      }
      case "externalModuleExport": {
        let r = this.tree.getNodeWithTrait(t.moduleId, G);
        if (!r) return null;
        let n = g(r.codeComponentIdentifier);
        return n?.kind === "externalModuleExport" &&
          n.saveId === t.saveId &&
          n.exportSpecifier === t.exportSpecifier
          ? { name: r.getName(), annotations: ci(r.annotations) }
          : null;
      }
    }
  }
};
function pt(o) {
  return Me() !== "loader" && Zt(o.timeline);
}
function ft(o, e) {
  let t = Me();
  return t === "loader" || !Zt(e.timeline)
    ? o
    : new fo(o, e.getDataTreeOrPartialTree(), e.timeline.store, t);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: Me,
    setMode(o) {
      let e = ri(o);
      if (!e)
        throw new Error(
          `Unknown localization tree-controls mode: ${o}. One of ${oi().join(", ")}.`
        );
      if (e !== "loader" && !uo())
        throw new Error(
          `Cannot force ${e}: the harness2 experiment is off, so nothing stores controls.`
        );
      return (ti(e), e);
    },
    stats: ni,
    reset: ii,
    wrap: ft,
    walk: fn,
    trackLookups: dn,
  });
var fi = new WeakMap();
function mi(o) {
  let e = fi.get(o);
  return e || ((e = { loadedRevision: -1, promise: void 0 }), fi.set(o, e), e);
}
function yi(o) {
  if (
    !E.isOn("deferNonVisibleModuleEvaluation") ||
    o.localizationComponentLoaderPolicy === "authoritative" ||
    (Me() === "tree-only" && pt(o.stores.treeStore))
  )
    return "ready";
  let { modulesStore: e } = o.stores,
    t = o.stores.treeStore.getDataTreeOrPartialTree().get(Fr);
  return e.localModules.size === 0 && !t?.children?.length
    ? "ready"
    : Hr(e.localModuleEvaluationMode)
      ? mi(e).loadedRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : o.componentLoader.modulesRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function Fe(o) {
  return yi(o) !== "ready";
}
function sd(o) {
  return !pt(o.stores.treeStore) && Fe(o);
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
function Ae(o) {
  let e = pt(o.stores.treeStore);
  return o.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: ft(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: ft(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !e && Fe(o),
      };
}
async function mo(o, e) {
  let { modulesStore: t } = o.stores,
    r = mi(t);
  if (!Fe(o)) {
    e?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = yi(o)) !== "ready";) {
    if (!r.promise) {
      let i = n,
        l = (
          i === "load-all"
            ? nt(o.componentLoader, t, "localization")
            : qr(o.componentLoader, t, "localization")
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
async function ad(o, e) {
  let t = Ae(o);
  return (t.needsFallbackBeforeRead && (await mo(o, e)), e?.throwIfAborted(), t.componentLoader);
}
function hi(o) {
  return o.unresolvedLocalizableCount > 0;
}
function ld(o, e) {
  return hi(e) && Fe(o);
}
async function dd(o, e, t = o.signal) {
  var s = [];
  try {
    let r = Ae(o);
    r.needsFallbackBeforeRead && (await mo(o, t));
    t?.throwIfAborted();
    let n = Do(s, un());
    let i = o.componentLoader.activeBundleHash;
    let a = await e(r.componentLoader);
    if (!r.usesTreeControls || Me() === "tree-only" || !hi(n.lookups)) return a;
    let l = Fe(o);
    l && (await mo(o, t));
    if (!l && i === o.componentLoader.activeBundleHash) return a;
    t?.throwIfAborted();
    return await e(Ae(o).componentLoader);
  } catch (c) {
    var d = c,
      u = !0;
  } finally {
    No(s, d, u);
  }
}
function Os(o) {
  return fr(o.timeline);
}
var Us = 1e13;
function gi(o) {
  let e = o.remoteTreeVersion;
  return e < Us ? e : Math.floor(e / 1e3);
}
function md(o, e, t) {
  return Os(o) === e
    ? !1
    : (m(
        o.tree === t.initialTree && !mr(o.timeline) && !o.tree.hasUncommittedChanges(),
        "Cannot switch tree mode after tree data has been loaded because it would reset timeline data"
      ),
      pr(o.tree, e),
      (o.timeline = t.createTimeline(e)),
      t.resetTimeline && o.timeline.reset(o.tree),
      !0);
}
var _s = Ke("ensureComponentsLoadedWithTargetedLoad"),
  Ws = 2e4,
  js = 50,
  $s = 5e3;
async function Si(o, e, t, r, n = Ws) {
  let i = performance.now(),
    a = i + n,
    l,
    s = Mi(t, o);
  for (; s.length > 0 && performance.now() < a;) {
    let u = Math.min(performance.now() + $s, a);
    try {
      await Promise.race([e(s), Rt(u - performance.now())]);
    } catch (p) {
      l = p;
      break;
    }
    for (; performance.now() < u && ((s = Mi(t, o)), s.length !== 0);) await Rt(js);
  }
  let c = qt(t, o);
  if (c.length === 0) return;
  let d = c.filter((u) => Ii(u, o));
  throw (
    _s.debug("targeted load did not produce definitions", {
      callSite: r,
      missing: c,
      errored: d,
      loadRequestError: l,
    }),
    ee("component_loader_wait_failed", {
      callSite: r,
      reason: l === void 0 ? "modules-missing" : "load-request-failed",
      durationMs: performance.now() - i,
      missingCount: c.length,
      errorCount: d.length,
    }),
    new Zr(
      "ensureComponentsInLoader: Some modules are missing.",
      r,
      c,
      d,
      l === void 0 && s.length > 0
    )
  );
}
function Mi(o, e) {
  return qt(o, e).filter((t) => !Ii(t, e));
}
function Ii(o, e) {
  let t = g(o);
  return t ? Xr(e.componentForIdentifier(Bo(t))) : !1;
}
function Ci(o, e) {
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
function Be(o) {
  let e = g(o);
  if (!(!e || !k(e) || !F(e))) return `${e.moduleId}:${e.exportSpecifier}`;
}
function xi(o) {
  let e = new Map();
  for (let t of o) {
    let r = Be(t);
    r && e.set(r, t);
  }
  return e;
}
function vi(o, e) {
  let t = o.getRawControlProps();
  for (let r in t) {
    let n = t[r]?.type,
      i = t[r]?.value;
    if (n !== "vectorsetitem" || !M(i) || !k(i)) continue;
    let a = Be(i);
    if (!a || !e.has(a)) continue;
    let l = e.get(a);
    l && o.setControlProp(r, { type: "vectorsetitem", value: l });
  }
}
function Ei(o, e) {
  for (let t of e) {
    vi(t, o);
    let r = Be(t.codeComponentIdentifier);
    if (!r || !o.has(r)) continue;
    let n = o.get(r);
    n && t.set({ codeComponentIdentifier: n });
  }
}
function Pi(o, e) {
  let t = Vr(e);
  if (t) {
    m(t.isLoaded(), "CMS Should always be loaded.");
    for (let { node: r, skipChildren: n } of t.walkWithSkipChildren()) {
      if (ve(r)) {
        if (!r.variables.some((l) => l.type === "vectorsetitem")) {
          n();
          continue;
        }
        bi(r, o);
      }
      if (!$(r)) continue;
      let i = r.getControlProps();
      for (let a in i) {
        let l = i[a]?.value;
        if (i[a]?.type !== "vectorsetitem" || !M(l) || !k(l)) continue;
        let c = Be(l);
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
      let l = Be(a);
      if (!l || !e.has(l)) return n;
      let s = e.get(l);
      return s ? ((t = !0), { ...n, initialValue: { ...i, identifier: s } }) : n;
    });
  t && o.set({ variables: r });
}
function Ti(o, e) {
  for (let t of e.root.children) {
    if (J(t)) {
      vi(t, o);
      continue;
    }
    (Go(t) || Ko(t)) && bi(t, o);
  }
}
function yo(o, e, t) {
  let r = o.get(e);
  if (r) return r;
  let n = t();
  return (o.set(e, n), n);
}
function Li() {
  return {};
}
function wi(o) {
  let e = { controls: At(o.properties), displayName: o.name, type: o.type };
  return (Jr(o) && (e.outputControls = At(o.outputs)), e);
}
function mt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = g(r.identifier);
    if (!H(n) || !k(n) || n.type !== "codeFile" || (e && !e.has(n.localId))) continue;
    let i = yo(t, n.localId, Li);
    i[n.exportSpecifier] = wi(r);
  }
  return t;
}
function yt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = g(r.identifier);
    if (!F(n) || !k(n) || (e && !e.has(n.moduleId))) continue;
    let i = yo(t, n.moduleId, () => new Map()),
      a = yo(i, n.saveId, Li);
    a[n.exportSpecifier] = wi(r);
  }
  return t;
}
function Ri(o) {
  let e = g(o.codeComponentIdentifier);
  if (F(e)) return e.saveId;
}
function ht(o, e, t) {
  return o.get(e)?.get(t);
}
function ho(o, e, t) {
  return { ...o?.propertyControlsBySaveId, [e]: st(t) };
}
function ki(o) {
  for (let e of X.getModuleNodes(o)) {
    let t = Ri(e);
    if (t && !Ee(e.propertyControlsBySaveId?.[t])) return !0;
  }
  return !1;
}
function go(o) {
  let e = [];
  for (let t of X.getModuleNodes(o)) {
    let r = Ri(t);
    if (!r || Ee(t.propertyControlsBySaveId?.[r])) continue;
    let n = g(t.codeComponentIdentifier);
    F(n) && e.push(n);
  }
  return e;
}
var C = Ke("modules-store"),
  Gs = 5e3,
  Di = new Set(["codeFile", "canvasComponent", "screen", "layoutTemplate", "vector"]),
  Ks = 500,
  Hs = 100,
  Zs = 10 * 6e4;
function qs(o) {
  return "sourceContent" in o && M(o.sourceContent);
}
function gt(o) {
  let { module: e, exportSpecifier: t } = o,
    { id: r, saveId: n, files: i } = e;
  return (m(i.module, "module file must exist for a saved module"), pe(r, n, i.module, t));
}
var Ni, Vi, zi, Ai, Fi, Bi, N, Mo, So, Io, Co, xo, vo, Oe, Pe, Ue, be, _e, se, ae, Te;
((Bi = [he()]), (Fi = [he()]), (Ai = [he()]), (zi = [he()]), (Vi = [he()]), (Ni = [he()]));
var oe = class {
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
    (B(this, Mo, W(N, 8, this)), W(N, 11, this));
    (B(this, So, W(N, 12, this, new Map())), W(N, 15, this));
    (B(this, Io, W(N, 16, this, new Map())), W(N, 19, this));
    (B(this, Co, W(N, 20, this, new Map())), W(N, 23, this));
    (B(this, xo, W(N, 24, this, 0)), W(N, 27, this));
    (B(this, vo, W(N, 28, this, 0)), W(N, 31, this));
    _(this, "pendingLocalModuleIds", new Set());
    _(this, "_localModuleEvaluationMode");
    _(this, "moduleDepsGraph", {});
    _(this, "modulesStorage");
    _(this, "moduleUpdatesEmitter", new St());
    _(this, "fastRefreshModulesEmitter", new St());
    B(this, Oe);
    B(this, Pe);
    B(this, Ue, 0);
    B(this, be, !1);
    _(this, "prepareForPersistence", async (e, t) => {
      if (
        e === "codeFile" &&
        !(!E.isOn("harness2") && this.localCodeModuleIdsWithStoredPropertyControls(t).size === 0)
      ) {
        if (t.length > 0) {
          let r = new Set(t.map((n) => xe(n, "default").value));
          await this.loadLocalModules(r, "current");
        }
        await nt(this.componentLoader, this, "code-file-persistence");
      }
    });
    B(this, _e, new Map());
    B(this, se, new Map());
    _(this, "requestTargetedModuleLoad", async (e) => {
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
    B(this, ae);
    B(this, Te, !1);
    _(
      this,
      "debugModuleStoreAndComponentLoaderRevisionsMatch",
      () => this.revision === this.componentLoader.modulesRevision
    );
    _(this, "checkForExternalModuleUpdates", async () => {
      if (this.treeStore.tree.isViewOnly) return;
      let e = X.get(this.treeStore.tree);
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
          if (!kr(c)) return;
          let d = c.set.moduleId,
            u = r.get(d) ?? [];
          (u.push(s), r.set(d, u));
        } else t.push(s);
      });
      for (let [l, s] of r) {
        let c = this.treeStore.tree.get(l);
        if (!G(c)) continue;
        let d = c.annotation("framerVectorSet");
        _t(d) && (Nr(d) || t.push(...s));
      }
      let n = t.map(({ moduleId: l, saveId: s }) => ({ moduleId: l, saveId: s }));
      if (!n.length) return;
      let i = [],
        a = [];
      for (let l = 0; l < n.length; l++) {
        let s = n[l];
        if (
          (m(s, "query is expected to be defined."), i.push(s), i.length < Ks && l < n.length - 1)
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
        ).catch(Q);
    });
    _(this, "updatesPollId");
    _(
      this,
      "compileFastRefreshModule",
      async ({ localId: e, name: t, source: r, includeSourceMap: n = !0 }) => {
        let { type: i, name: a } = Uo(e);
        if (!Di.has(i)) return;
        let l = i === "codeFile" ? oo(t).source : a,
          s = i === "codeFile" ? Oo(t)[1] : a,
          {
            code: c,
            imports: d,
            sourceMap: u,
          } = await Sn({ localId: e, source: r, name: l, includeSourceMap: n }),
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
          [f, h] = yn(this.fastRefreshModules, (y) => {
            y.set(t, p);
          });
        ((this.fastRefreshModules = f),
          this.fastRefreshModulesEmitter.emit({ patches: h, initialized: !0 }));
      }
    );
    _(
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
        let l = In({ name: t, source: r, includeSourceMap: n, type: i, telemetrySession: a });
        return (
          this.fastRefreshEnabled &&
            e &&
            this.compileFastRefreshModule({
              localId: e,
              name: t,
              source: r,
              includeSourceMap: n,
            }).catch(Q),
          l
        );
      }
    );
    ((this.modulesStorage = new Mn(
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
      Y(
        this,
        ae,
        new an({
          delay: Gs,
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
          let w = Pr(f);
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
        let P = this.moduleDepsGraph;
        this.moduleDepsGraph = p.depsGraph;
        let b = p.metadata.patches,
          T = new Set(),
          L = [],
          v = [],
          D;
        for (let w of b) {
          let I = w.path[0];
          if ((m(typeof I == "string"), I === sn)) {
            if (((D = w), S)) for (let R of p.modules.keys()) T.add(R);
            break;
          }
          w.op === "remove" && w.path.length === 1 ? v.push(I) : L.push(I);
        }
        let A = new Set();
        if (!D) {
          let w = this.getActiveScope(),
            I = ro(w);
          C.debug("Calculated visible code component module typeSlashNames", I);
          for (let R of L) eo(p.depsGraph, R, T, I, A);
          for (let R of v) eo(P, R, T, I, A);
          (L.forEach((R) => {
            T.delete(R);
          }),
            v.forEach((R) => {
              (T.delete(R), A.delete(R));
            }));
        }
        C.debug(
          "prioritized evaluation sending to sandbox",
          { dependentModules: T, visibleDependentModules: A },
          "highprio size",
          A.size,
          "dep size",
          T.size
        );
        let U = {
          patches: b,
          dependentModules: Array.from(T),
          prioritizedModules: Array.from(A),
          revision: b.length === 0 ? this.revision : ++this.revision,
          initialized: p.initialized,
          modulesReloading: p.modulesReloading,
        };
        if (
          (this.moduleUpdatesEmitter.emit(U),
          this.fastRefreshEnabled &&
            D &&
            this.fastRefreshModulesEmitter.emit({ patches: [D], initialized: p.initialized }),
          this.fastRefreshEnabled && !D)
        )
          for (let w of L) {
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
    ((this.pendingLocalModuleIds = new Set(e.map(_o))), (this._localModuleEvaluationMode = t));
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
            controlsByLocalId: mt(this.componentLoader.getAllEntities(), t),
          }
        : { revision: -1, controlsByLocalId: new Map() };
  }
  localCodeModuleIdsWithStoredPropertyControls(e) {
    return new Set(
      e.filter((t) => {
        let r = this.treeStore.tree.get(t);
        return !ge(r) || r.save.type !== "codeFile" ? !1 : Ee(r.save.propertyControls);
      })
    );
  }
  localCodeModuleIdsMissingPropertyControls() {
    let e = [];
    for (let t of rt.getModuleNodes(this.treeStore.tree))
      t.save.type === "codeFile" && (Ee(t.save.propertyControls) || e.push(t.id));
    return e;
  }
  async backfillMissingCrdtModuleControls() {
    if (!E.isOn("harness2") || this.treeStore.tree.isViewOnly) return;
    let e = this.localCodeModuleIdsMissingPropertyControls(),
      t = ki(this.treeStore.tree);
    if (e.length === 0 && !t) return;
    if (e.length > 0) {
      let s = new Set(e.map((c) => xe(c, "default").value));
      await this.loadLocalModules(s, "eager");
    }
    let r = go(this.treeStore.tree);
    await Promise.allSettled(
      r.map((s) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(s))
    );
    let n = this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0,
      i = [...this.componentLoader.getAllEntities()],
      a = mt(i),
      l = yt(i);
    await this.scheduler.processWhenReadyAsync(() => {
      this.treeStore.tree.isViewOnly ||
        this.writeMissingPropertyControls(
          (s) => a.get(s) ?? null,
          ({ moduleId: s, saveId: c }) => ht(l, s, c) ?? (n ? null : void 0)
        );
    });
  }
  persistEvaluatedPropertyControls(e) {
    if (
      !E.isOn("harness2") ||
      this.treeStore.mode !== "crdt" ||
      this.treeStore.tree.isViewOnly ||
      z(this, be)
    )
      return;
    let t = e > z(this, Ue);
    if ((Y(this, Ue, e), e === 0)) return;
    let r = t ? 1 : Hs + 1;
    this.countEvaluatedPropertyControlsGaps(r) >= r &&
      (Y(this, be, !0),
      this.scheduler.scheduleDocumentUpdateIgnoringUndo(() => {
        (Y(this, be, !1), !this.treeStore.tree.isViewOnly && this.writeEvaluatedPropertyControls());
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
      r = mt(this.componentLoader.getAllEntities(), new Set(t)),
      n = e.externalIdentifiers.filter((a) => this.hasEvaluatedExternalPropertyControls(a)),
      i = yt(this.componentLoader.getAllEntities(), new Set(n.map((a) => a.moduleId)));
    this.writeMissingPropertyControls(
      (a) => r.get(a),
      ({ moduleId: a, saveId: l }) => ht(i, a, l)
    );
  }
  writeMissingPropertyControls(e, t) {
    let r = this.treeStore.tree,
      { localIds: n, externalIdentifiers: i } = this.getPropertyControlsGaps();
    for (let a of n) {
      let l = r.getNodeWithTrait(a, ge),
        s = e(a);
      !l || s === void 0 || l.set({ save: { ...l.save, propertyControls: st(s) } });
    }
    for (let a of i) {
      let l = r.getNodeWithTrait(a.moduleId, G),
        s = t(a);
      !l || s === void 0 || l.set({ propertyControlsBySaveId: ho(l, a.saveId, s) });
    }
  }
  getPropertyControlsGaps() {
    let e = this.treeStore.tree,
      t = rt.get(e),
      r = X.get(e),
      n = z(this, Pe),
      i = n !== void 0 && n.localModulesList === t,
      a = n !== void 0 && n.externalModulesList === r;
    return i && a
      ? n
      : (Y(this, Pe, {
          localModulesList: t,
          externalModulesList: r,
          localIds: i ? n.localIds : this.localCodeModuleIdsMissingPropertyControls(),
          externalIdentifiers: a ? n.externalIdentifiers : go(e),
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
      !(gi(this.treeStore) - new Date(t.savedAt).getTime() >= Zs) ||
      !t.exports.some((l) => this.componentLoader.getDefinitionHash(xe(e, l).value) !== 0)
    )
      return !1;
    let a = new Set();
    to(this.moduleDepsGraph, Ut(t), a);
    for (let l of a) {
      let s = this.localModules.get(l);
      if (!(s !== void 0 && this.isStoredAtTreeSave(s.localId))) return !1;
    }
    return !0;
  }
  isStoredAtTreeSave(e) {
    if (this.getTransientSave(e)) return !1;
    let t = this.treeStore.tree.getNodeWithTrait(e, ge)?.save,
      r = this.getPersistedModuleByLocalId(e);
    return !t || !r ? !1 : r.id === t.moduleId && r.saveId === t.saveId;
  }
  getActiveScope() {
    if (this.chromeStore.mainView === 5) return;
    let e = this.treeStore.tree.getNode(z(this, Oe));
    if (e) return (m(e?.loaded, "Active scope node should be loaded"), e.loaded);
  }
  setActiveScope(e) {
    Y(this, Oe, e);
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
    return new gn(this.modulesStorage, e, this.debugModuleStoreAndComponentLoaderRevisionsMatch);
  }
  async addNpmDependencies(e) {
    let r = typeof this.dependenciesModule > "u" && !Ln(),
      n = await at(this.modulesStorage.addNpmDependencies(e)),
      i = Array.isArray(e) ? e : [e],
      a = i.filter(({ target: c }) => !Ot(c));
    if (!n.ok) {
      let c = n.error instanceof Error ? n.error.message : String(n.error);
      for (let d of a) {
        let u = Sr(d);
        ee("npm_dependency_add_fail", { name: u, reason: c });
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
    r && wn();
    let l = Object.keys(n.value.dependenciesMap.dependencies),
      s = i.map(({ target: c }) => c).filter((c) => !l.includes(c) && Ot(c));
    if (s.length > 0) {
      let c = Ci(s, { max: 5, placeholder: "package" });
      ie({
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
      let n = It(t.localId, r);
      e.push(n);
    }
    for (let t of X.getModuleNodes(this.treeStore.tree)) {
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
    if (H(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  tryConvertExternalCodeComponentIdentifierToLocal(e) {
    let t = g(e);
    if (t?.kind !== "externalModuleExport") return;
    let r = this.getPersistedModuleByGlobalId(t.moduleId);
    if (r) return xe(r.localId, t.exportSpecifier).value;
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
    let c = pe(l, a.saveId, a.files.module, n),
      d = s ? xe(s.localId, n) : c;
    return { module: a, moduleIdentifier: d, externalIdentifier: c, insertUnlinked: i };
  }
  async getSourceContentForModuleSave(e) {
    let { module: t } = await this.lookUpModule(e);
    if (qs(t)) return t.sourceContent;
    let r = t.baseURL + t.files.source,
      n = await at(fetch(r));
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
    let i = await at(n.value.text());
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
    let r = qo();
    for (let n of e) kn({ insertId: r, insertType: t, codeComponentId: n });
  }
  async installExternalModulesDependencies(e) {
    let t = [],
      r = [];
    for (let n of e) {
      let i = z(this, _e).get(n);
      i ? r.push(i) : t.push(n);
    }
    if (t.length > 0) {
      let n = this.installDependenciesForModuleURLs(t);
      for (let i of t) z(this, _e).set(i, n);
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
    if (Di.has(e.type)) {
      if (e.kind === "server") {
        let t = this.getPersistedModuleByLocalId(e.localId);
        (m(t?.kind === "server", "Only server modules should have no sourceContent"),
          this.modulesStorage.createLocalModuleFromModule(t).catch(Q));
        return;
      }
      this.compileFastRefreshModule({
        name: Ut(e),
        localId: e.localId,
        source: e.sourceContent,
      }).catch(Q);
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
      if (!(!i || et(i))) {
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
    et(t) || (await this.insertTemporaryImportMap(t));
  }
  async installDependenciesForExternalModules(e) {
    let t,
      r = {},
      n;
    for (let { dependencies: i, module: a } of e)
      if (i?.importMap)
        if (E.isOn("importMapPruning")) {
          let { importMap: l } = Ir(i.importMap, [a.baseURL], tt);
          t = Ft(t ?? { imports: {} }, l);
          let s = i.dependencies ?? Bt(i.importMap);
          Object.assign(r, Cr(s, a.baseURL));
        } else {
          let { modulesCDN: l } = Vo(),
            s = vr(i.importMap, l, tt),
            c = s.importMap,
            d =
              s.didNormalize && i.dependencies ? Er(i.dependencies, c) : (i.dependencies ?? Bt(c)),
            u = {
              dependencies: d.dependencies,
              ...(d.resolutions ? { resolutions: d.resolutions } : {}),
            };
          ((n = Tr(n ?? { dependencies: {} }, u)), (t = Ft(t ?? { imports: {} }, c)));
        }
    if (!t || et(t)) return !1;
    if (E.isOn("importMapPruning")) {
      let i = { ...t, imports: xr(t.imports, tt) },
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
          let a = this.treeStore.tree.getNodeWithTrait(i.moduleId, G);
          return a ? g(a.codeComponentIdentifier).saveId !== i.saveId : !0;
        }),
        { includeDependencies: !1, includeStatus: !0 }
      ),
      r = new Map(),
      n = "default";
    for (let i of t) {
      let a = gt({ module: i, exportSpecifier: n }),
        l = this.treeStore.tree.getNodeWithTrait(i.id, G);
      (k(l?.codeComponentIdentifier) && g(l.codeComponentIdentifier).saveId === i.saveId) ||
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
          let i = xi(r.keys()),
            a = this.treeStore.getDataTreeOrPartialTree(),
            l = a.query().whereClass(Gt).iterate();
          (Ei(i, l), Pi(i, a), Ti(i, a));
        },
        updateSave: !0,
      }));
  }
  async addOrUpdateVectorSetAndVectors(e) {
    await this.addOrUpdateExternalVectors([e]);
    let r = this.treeStore.tree.getNodeWithTrait(e.moduleId, G)?.annotation("framerVectorSet");
    _t(r) &&
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
      let h = z(this, se).get(s);
      if (h) {
        i.push({ identifier: c, preloadPromise: h });
        continue;
      }
      (z(this, se).set(s, new Yt()), r.push(c));
    }
    let a = new Map();
    for (let { identifier: s, preloadPromise: c } of i)
      try {
        let d = await c;
        a.set(s.value, d);
      } catch {
        (z(this, se).set(s.bareValue, new Yt()), r.push(s));
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
        for (let c of r) z(this, se).get(c.bareValue)?.reject(s);
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
      let d = z(this, se).get(s.bareValue);
      (m(d, () => `Expected to find a preload promise for: ${s.bareValue}`), d.resolve(c));
    }
    return [...a.values()];
  }
  async ensureLocalComponentsLoaded(e, t, r) {
    await Si(this.componentLoader, this.requestTargetedModuleLoad, e, t, r);
  }
  localModuleIsKnown(e) {
    return this.getModuleEntryByLocalId(e) ? !0 : ge(this.treeStore.tree.get(e));
  }
  requestImportMapPrune() {
    z(this, ae).debounce();
  }
  async processImportMapPrune() {
    if (z(this, Te)) {
      z(this, ae).debounce();
      return;
    }
    Y(this, Te, !0);
    let e = "import-map-prune";
    ie({
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
      (ie({ type: "remove", key: e }), r ? z(this, ae).cancel() : z(this, ae).debounce());
    } catch (r) {
      (ie({
        type: "add",
        key: e,
        text: "Failed to optimize dependencies.",
        variant: "error",
        duration: 3e3,
      }),
        C.reportError(r, { context: "Failed to prune import map", entryPointCount: t().length }));
    } finally {
      Y(this, Te, !1);
    }
  }
  async updateExternalModuleNodes(
    e,
    { onTreeUpdate: t, updateSave: r = !1, scheduleTreeUpdate: n }
  ) {
    (await this.insertTemporaryImportMapForExternalModules(e),
      await Promise.all(
        e.map((s) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(gt(s)))
      ));
    let a = await (n ?? ((s) => this.scheduler.processWhenReadyAsync(s)))(() => {
      if (this.treeStore.tree.isViewOnly) throw Error("unable to edit");
      let s = E.isOn("harness2"),
        c = new Set();
      for (let u of e) {
        let { id: p } = u.module;
        (s || this.treeStore.tree.getNode(p)?.propertyControlsBySaveId !== void 0) && c.add(p);
      }
      let d = c.size > 0 ? yt(this.componentLoader.getAllEntities(), c) : void 0;
      for (let u of e) {
        let { id: p } = u.module,
          f = this.treeStore.tree.getNode(p);
        if (f && !r) {
          let h = gt(u),
            y = this.externalModulesDynamicInfo.get(h.moduleId)?.status ?? u.module.status;
          f.set({ group: y?.group, updateSaveId: y?.updateSaveId });
        } else {
          let { type: h, metadata: y, ownerId: S, ownerType: V } = u.module,
            P = gt(u),
            { title: b, status: T } = this.externalModulesDynamicInfo.get(P.moduleId) ?? u.module,
            L = X.get(this.treeStore.tree);
          (L || ((L = new X()), this.treeStore.tree.insertNode(L, this.treeStore.tree.root.id)),
            m(Zo(L)));
          let v = y.pluginId,
            D = {
              codeComponentIdentifier: P.value,
              type: h,
              scopeNodeId: Lr(u.module),
              intrinsicWidth: zt(y.intrinsicWidth, !0) ?? 200,
              intrinsicHeight: zt(y.intrinsicHeight, !0) ?? 200,
              ownerId: S,
              ownerType: V,
              group: T?.group,
              updateSaveId: T?.updateSaveId,
              namespaceId: u.module.lastPublish?.namespaceId,
              pluginId: M(v) ? v : void 0,
            };
          if (d) {
            let I = ht(d, p, P.saveId);
            I !== void 0 && (D.propertyControlsBySaveId = ho(f, P.saveId, I));
          }
          let A = this.componentLoader.componentForIdentifier(P.value);
          m(A, () => `Component not found in the component loader: ${P.value}`);
          let U = A.annotations ?? void 0;
          if (zr(h)) {
            let I = Rr({ default: U }).default;
            D.annotations = h === "vectorSet" ? Dr(I) : I;
          } else D.annotations = U;
          let w = A.name ?? b;
          if (((D.title = w), f)) f.set(D);
          else {
            let I = new Ar({ id: p, ...D });
            this.treeStore.tree.insertNode(I, L.id);
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
    let e = Cn(() => {
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
      .whereClass(Gt)
      .asArray()
      .filter((r) => {
        if (!Z(r) || (me(r) && !r.isVectorInstance)) return !1;
        let n = g(r.codeComponentIdentifier);
        return n?.kind !== "externalModuleExport"
          ? !1
          : n.moduleId === e.moduleId && n.exportSpecifier === e.exportSpecifier;
      });
  }
  getShaderNodesForExternalModuleExport(e) {
    return this.treeStore
      .query()
      .whereClass(Gr)
      .asArray()
      .filter((r) => {
        if (me(r)) return !1;
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
      i = this.treeStore.tree.getNodeWithTrait(r, G),
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
    let c = pe(r, a, l.files.module, n);
    try {
      (await this.updateExternalModuleNodes([{ module: l, dependencies: s, exportSpecifier: n }], {
        onTreeUpdate: () => {
          let d = this.treeStore.getDataTreeOrPartialTree();
          (l.type === "shader"
            ? this.getShaderNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ shaderModuleIdentifier: c.value })
              )
            : this.getCodeComponentNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ codeComponentIdentifier: c.value })
              ),
            Yr(d, t.value, c.value),
            Qr(d, t.value, c.value));
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
      let l = wr(a, e);
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
      if (s.kind === "fast-refresh") c = oo(d).module;
      else {
        let { files: p } = s;
        (m(
          M(p.module),
          "Must have a module file name to build a local module import map specifier."
        ),
          (c = p.module));
      }
      n[a] = It(u, c);
    }
    let i = await hn(t, n);
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
    let r = ro(this.getActiveScope()),
      n = new Set();
    for (let i of r) e[i] && to(this.moduleDepsGraph, i, n);
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
    let t = He("screen", e, "default").value;
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
    return new Eo(this, e);
  }
};
((N = Ro(null)),
  (Mo = new WeakMap()),
  (So = new WeakMap()),
  (Io = new WeakMap()),
  (Co = new WeakMap()),
  (xo = new WeakMap()),
  (vo = new WeakMap()),
  (Oe = new WeakMap()),
  (Pe = new WeakMap()),
  (Ue = new WeakMap()),
  (be = new WeakMap()),
  (_e = new WeakMap()),
  (se = new WeakMap()),
  (ae = new WeakMap()),
  (Te = new WeakMap()),
  ue(N, 4, "dependenciesModule", Bi, oe, Mo),
  ue(N, 4, "localModules", Fi, oe, So),
  ue(N, 4, "fastRefreshModules", Ai, oe, Io),
  ue(N, 4, "externalModulesDynamicInfo", zi, oe, Co),
  ue(N, 4, "revision", Vi, oe, xo),
  ue(N, 4, "invalidSavePointerQuarantineSize", Ni, oe, vo),
  ko(N, oe));
var Eo = class {
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
    if (H(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  getModuleWithTypeSlashName(e) {
    return this.modulesStorageSnapshot.getModuleWithTypeSlashName(e);
  }
};
function Oi(o) {
  return !Number.isNaN(o.getTime());
}
function ju(o) {
  return o.match(/^\d{2}:\d{2}$/gu) !== null;
}
function Ys(o) {
  return o.toISOString().split("T")[0];
}
function $u(o) {
  let e = new Date(o);
  return Oi(e) ? Ys(e) : "";
}
function Gu(o) {
  let e = new Date(o);
  return Oi(e)
    ? `${e.getUTCHours().toString().padStart(2, "0")}:${e.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var Ku = (() => {
    let o = null;
    return () => {
      if (kt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "date"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  Hu = (() => {
    let o = null;
    return () => {
      if (kt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "time"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  Po = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function bo(o) {
  return Po.test(o);
}
function Zu(o) {
  if (!o) return;
  if (bo(o)) return o;
  let e = new Date(o).toISOString();
  return (m(bo(e), "Date format is not valid"), e);
}
function Qs(o) {
  Po.exec(o);
  let e = Po.exec(o);
  m(e, "The provided date cannot have conformed to StandardZuluDateString");
  let [, t, r, n, i, a, l, s] = e;
  return [t, r, n, i, a, l, s];
}
function qu([o, e, t, r, n, i, a]) {
  let l = `${o}-${e}-${t}T${r}:${n}:${i}.${a}Z`;
  return (m(bo(l)), l);
}
function Yu(o) {
  let [e, t, r] = Qs(o);
  return `${r}/${t}/${e}`;
}
function Lo(o) {
  return Ae(o).componentLoader;
}
function Js(o, e, t) {
  let r = o.reactComponentForIdentifier(e.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (ot(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function Xs(o, e, t) {
  if (!ir(e)) return;
  let r = o.reactComponentForIdentifier(e.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (ot(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function ea(o, e, t, r) {
  let a = o.getNodeParent(t).getPropertyControls(o, e)[r.controlPropKey];
  if (!a) return;
  let l = t.getControlProp(r.controlPropKey);
  return ot(a, l) ?? void 0;
}
function Wi(o, e, t, r) {
  if (J(t, !0)) return Xs(e, t, r);
  if ($(t)) return ea(o, e, t, r);
  if (Z(t)) return Js(e, t, r);
}
function We(o, e, t, r) {
  let n = Wi(o, e, t, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let i = Xt(r.ancestorControlKeyPath);
  for (let a of i) {
    if (!n) return;
    if ((m(n.type === a.type), n.type === "object")) {
      if ((m(a.type === "object"), !j(n.value))) return;
      n = n.value[a.key];
    } else if (n.type === "array") {
      if ((m(a.type === "array"), !Ct(n.value))) return;
      n = n.value.find((l) => l.id === a.id);
    } else {
      return;
    }
  }
  return n;
}
function je(o, e, t, r, n) {
  if (!r.ancestorControlKeyPath) {
    hr(t)
      ? t.setControlProp(r.controlPropKey, n)
      : $(t)
        ? (m(Qt(n), "Invalid control prop"), t.setControlProp(r.controlPropKey, n))
        : K(t, "Unsupported node");
    return;
  }
  m(J(t, !0) || Z(t) || $(t));
  function i(c) {
    if (c) return c.type === "array" || c.type === "object" ? { ...c } : (m(c.type === n.type), n);
  }
  let a = i(Wi(o, e, t, r));
  if (!a) return;
  let l = Xt(r.ancestorControlKeyPath),
    s = a;
  for (let c of l) {
    if (!s) return;
    if ((m(s.type === c.type), s.type === "object")) {
      if ((m(c.type === "object", "Current control should be of type Object"), !j(s.value))) return;
      let d = s.value[c.key],
        u = i(d);
      if (!u) return;
      ((s.value = { ...s.value, [c.key]: u }), (s = u));
    } else if (s.type === "array") {
      if ((m(c.type === "array", "Current control should be of type Array"), !Ct(s.value))) return;
      let d = s.value.find((p) => p.id === c.id),
        u = i(d);
      if (!u) return;
      ((s.value = s.value.map((p) => (p.id === u.id ? u : p))), (s = u));
    } else {
      return;
    }
  }
  J(t, !0) || Z(t)
    ? t.setControlProp(r.controlPropKey, a)
    : $(t)
      ? (m(Qt(a), "Invalid control prop"), t.setControlProp(r.controlPropKey, a))
      : K(t, "Unsupported node");
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
  if (qe(t) && Ye(t.textContent)) {
    let a = i(t.textContent);
    t.set({ textContent: a });
    return;
  }
  if (Tt(t) && Ye(t.formInputPlaceholder)) {
    let a = i(t.formInputPlaceholder);
    t.set({ formInputPlaceholder: a });
    return;
  }
  if (Z(t)) {
    let a = Lo(o),
      l = We(e, a, t, r);
    if (!l || (m(l.type === "string"), !Ye(l.value))) return;
    let s = { ...l };
    ((s.value = i(l.value)), je(e, a, t, r, s));
  }
}
function ji(o, e, t, r, n, i) {
  o.scheduler.process(() => {
    let a = o.stores.treeStore.getDataTreeOrPartialTree(),
      l = Lo(o),
      s = a.get(e.nodeId),
      c = e.type;
    switch (c) {
      case "string":
      case "richtext":
      case "link": {
        if (!$(s) && !Z(s) && !J(s)) return;
        let d = We(a, l, s, e);
        if (!d) break;
        m(c === d.type);
        let u = { ...d },
          p = x(t.id, d.valueLocalized, "default", n);
        ((u.valueLocalized = p), je(a, l, s, e, u));
        break;
      }
      case "slug": {
        if (!$(s)) return;
        let d = We(a, l, s, e);
        m(d?.type === "string", "expected slug control type to be a ControlType.String");
        let u = { ...d },
          p = x(t.id, d.valueLocalized, "default", n);
        ((u.valueLocalized = p), je(a, l, s, e, u));
        break;
      }
      case "image": {
        if (!$(s) && !Z(s) && !J(s)) return;
        let d = We(a, l, s, e);
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
        je(a, l, s, e, u);
        break;
      }
      case "enum": {
        if (!ve(s)) return;
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
        s.set({ variables: d });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!jr(s)) return;
        let d = e.key === "title" ? "titleLocalized" : "descriptionLocalized",
          u = s[d],
          p = x(t.id, u, "default", n);
        s.set({ [d]: p });
        break;
      }
      case "RichTextNode": {
        if (!qe(s)) return;
        let d = x(t.id, s.htmlLocalized, "default", n);
        (s.set({ htmlLocalized: d }), jt(s) && Qe(o) && Ht(o, Kt(o, [s.id])).catch(Q));
        break;
      }
      case "FrameNode": {
        if (!$o(s)) return;
        if (r === "imageSrc" || r === "all") {
          let d = x(t.id, s.fillImageLocalized, "imageSrc", n);
          s.set({ fillImageLocalized: d });
        }
        if (r === "default" || r === "all") {
          let d = x(t.id, s.altAttributeLocalized, "default", n);
          s.set({ altAttributeLocalized: d });
        }
        break;
      }
      case "nodeLink": {
        if (!Wr(s)) break;
        let d = x(t.id, s.linkLocalized, "default", n);
        s.set({ linkLocalized: d });
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
        s.set({
          formInputPlaceholderLocalized: x(t.id, s.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!Lt(s) || !s.formSelectOptions) return;
        let { optionId: d } = e,
          u = s.formSelectOptions.map((p) => {
            if (p.id !== d) return p;
            let f = x(t.id, p.titleLocalized, "default", n);
            return { ...p, titleLocalized: f };
          });
        s.set({ formSelectOptions: u });
        break;
      }
      case "formSelectGenericOption": {
        if (!Lt(s)) return;
        let { key: d } = e;
        switch (d) {
          case "allItemsLabel": {
            let u = x(t.id, s.allItemsLabelLocalized, "default", n);
            s.set({ allItemsLabelLocalized: u });
            break;
          }
          case "booleanTrueLabel": {
            let u = x(t.id, s.booleanTrueLabelLocalized, "default", n);
            s.set({ booleanTrueLabelLocalized: u });
            break;
          }
          case "booleanFalseLabel": {
            let u = x(t.id, s.booleanFalseLabelLocalized, "default", n);
            s.set({ booleanFalseLabelLocalized: u });
            break;
          }
          default:
            K(d);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!Ho(s)) return;
        let d = s.segmentLocalized,
          u = x(t.id, d, "default", n);
        s.set({ segmentLocalized: u });
        break;
      }
      default:
    }
  }, i);
}
function ta(o, e, t, r, n) {
  o.scheduler.process(() => {
    let i = o.stores.treeStore.getDataTreeOrPartialTree(),
      a = Lo(o),
      l = i.get(e.nodeId),
      s = e.type;
    if (pn(e)) {
      if (!$(l) && !Z(l) && !J(l)) return;
      let c = We(i, a, l, e);
      if (!c) return;
      m(c.type === "richtext");
      let d = structuredClone(c);
      ((d.valueLocalized = x(t.id, c.valueLocalized, "default", r)), je(i, a, l, e, d));
    } else {
      (m(s === "RichTextNode"), m(qe(l)));
      let c = x(t.id, l.htmlLocalized, "default", r);
      (l.set({ htmlLocalized: c }), jt(l) && Qe(o) && Ht(o, Kt(o, [l.id])).catch(Q));
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
  let u = { value: o, hash: oa(e, t), lastEdited: Date.now() };
  i && (u.needsReview = !0);
  let p = Fo(n?.value, o);
  return (
    (a || (p && n?.generatedByAI)) && (u.generatedByAI = !0),
    l || xt(s)
      ? (m(l && xt(s), "Cannot set only pluginId or pluginMode"),
        (u.pluginId = l),
        (u.pluginMode = s))
      : p &&
        n?.pluginId &&
        ((u.pluginId = n.pluginId), n.pluginMode && (u.pluginMode = n.pluginMode)),
    c ||
      ee(n ? "localized_value_update" : "localized_value_create", {
        code: r.code,
        valueLength: typeof o == "string" ? o.length : 0,
        generatedByAI: !!u.generatedByAI,
        source: d,
      }),
    u
  );
}
function oa(o, e) {
  switch (e) {
    case "default":
      return o.hash;
    case "imageSrc":
      return (m(it(o)), o.imageHash);
    default:
      K(e);
  }
}
function ra(o, e) {
  if (!e.draft) return;
  let t = o.stores.localizationStore.progressPerLocale[e.id];
  !fe(t) ||
    t === 1 ||
    o.scheduler.runBeforeNextFrame(() => {
      o.stores.localizationStore.getCurrentExactProgressForLocale(o, e.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (o.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          o.stores.modalStore.set({ type: "LocaleReady", activeLocale: e, source: "automatic" }));
    });
}
function na(o, e) {
  if (!o.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let t = o.stores.treeStore.getDataTreeOrPartialTree().get(e.nodeId);
  if (!ve(t) && !$(t)) return;
  let r = ve(t) ? t.id : t.parentid;
  r && o.stores.codeGenerationStore.updateComponent(r).catch(Q);
}
function _i(o, e, t) {
  Qe(o) && (ra(o, t), na(o, e));
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
    (ta(
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
        } else d === "imageSrc" || K(d);
      else cn(t) && (y.type = "rich-text");
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
function Ec(o, e, t, r) {
  let n = "default",
    i = Gi(e, t),
    a = e.localizedValues[t.id];
  if (it(e)) {
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
    ee("localized_value_request_review", {
      code: t.code,
      valueLength: typeof i == "string" ? i.length : 0,
      generatedByAI: !!a?.generatedByAI,
      source: r,
    }));
}
function Pc(o, e, t, { trackingSource: r, ignoreTracking: n }) {
  let i = "default",
    a = Gi(e, t),
    l = e.localizedValues[t.id];
  if (it(e)) {
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
      ee("localized_value_approve", {
        code: t.code,
        valueLength: typeof a == "string" ? a.length : 0,
        generatedByAI: !!l?.generatedByAI,
        source: r,
      }));
}
function bc(o, e, t, { target: r, ignoreTracking: n, trackingSource: i, eventType: a }) {
  ji(
    o,
    e,
    t,
    r,
    (l) => {
      let s = l?.value;
      n ||
        ee("localized_value_clear", {
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
  Pa as a,
  Rn as b,
  ls as c,
  us as d,
  nl as e,
  il as f,
  $n as g,
  Gn as h,
  kl as i,
  io as j,
  Jn as k,
  zl as l,
  Fe as m,
  sd as n,
  Ae as o,
  mo as p,
  ad as q,
  ld as r,
  dd as s,
  ua as t,
  ca as u,
  pa as v,
  fa as w,
  Os as x,
  md as y,
  ga as z,
  Ln as A,
  wn as B,
  Ma as C,
  oe as D,
  Oi as E,
  ju as F,
  $u as G,
  Gu as H,
  Ku as I,
  Hu as J,
  Zu as K,
  Qs as L,
  qu as M,
  Yu as N,
  $i as O,
  Ec as P,
  Pc as Q,
  bc as R,
};
//# sourceMappingURL=chunk-RIIER4U5.mjs.map
