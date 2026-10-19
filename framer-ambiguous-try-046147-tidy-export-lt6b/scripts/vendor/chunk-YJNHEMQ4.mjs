import { d as gn, f as Mn } from "chunk-F45NAH44.mjs";
import {
  E as Gt,
  K as sn,
  L as an,
  Z as ln,
  _ as dn,
  a as tn,
  aa as et,
  b as on,
  c as rn,
  d as nn,
  ta as un,
} from "chunk-C5T4UEO6.mjs";
import {
  Ac as Gr,
  Bc as Je,
  Cc as Hr,
  Dg as Yr,
  Ec as Ut,
  Fg as Qr,
  Hg as Xr,
  Na as _t,
  Vj as Ht,
  Wj as Zt,
  Xh as en,
  Xj as Yt,
  bk as ot,
  cd as Zr,
  ck as mn,
  gh as Jr,
  jk as yn,
  kk as hn,
  pg as qr,
  qi as tt,
  ri as te,
} from "chunk-SE3X7TFH.mjs";
import { a as Mr } from "chunk-QQOUWAPH.mjs";
import { a as Sn } from "chunk-V3C5CSFI.mjs";
import { S as Kt } from "chunk-DHAEWZUD.mjs";
import { md as jr, nc as Ur, p as At } from "chunk-CJ35OZBG.mjs";
import { Lc as Bt, Oc as Ot, Tb as Wr, w as Or } from "chunk-MGRHAN5D.mjs";
import { f as Kr } from "chunk-3WES2374.mjs";
import { f as $r, i as jt, n as pn, o as fn, s as qt } from "chunk-7ZCOVLUS.mjs";
import { w as Te, x as cn } from "chunk-BANDAGIJ.mjs";
import {
  $h as vr,
  Ci as br,
  Eh as gr,
  Fi as wr,
  Hi as Dt,
  Li as Nr,
  Ml as zr,
  Mq as _r,
  Rh as Sr,
  Sh as qe,
  Sl as J,
  Th as wt,
  Tl as Vr,
  Ul as Ar,
  V as Jo,
  Vg as bt,
  Vh as Nt,
  Xh as Ir,
  Yl as Fr,
  Zh as Cr,
  Zl as Xe,
  ai as xr,
  am as fe,
  ck as Qe,
  cl as Rr,
  d as jo,
  dl as Dr,
  el as kt,
  fl as kr,
  gb as nr,
  hp as Br,
  ki as Ye,
  kt as Vt,
  lb as ir,
  ni as Rt,
  nn as Le,
  pi as Er,
  rn as zt,
  si as Pr,
  sw as Ft,
  tf as Tt,
  th as hr,
  ui as Lr,
  ve as ce,
  vi as Tr,
  we as yr,
} from "chunk-34Y7R76Q.mjs";
import {
  Aa as _o,
  Ba as We,
  Bn as dr,
  Ca as h,
  Gm as lr,
  Ha as Uo,
  Ja as ft,
  Kn as ur,
  Kp as fr,
  Mi as ue,
  Mj as rr,
  Na as gt,
  Sd as $e,
  Tb as St,
  Un as cr,
  Vb as It,
  Vi as tr,
  Vn as Pt,
  Xn as Lt,
  Zk as xt,
  Zn as pr,
  bl as sr,
  cr as H,
  db as Ko,
  eb as je,
  fj as or,
  gb as Mt,
  gc as Ho,
  hr as He,
  ir as Ze,
  kb as $o,
  lb as Go,
  m as Ue,
  mc as Zo,
  me as Yo,
  nb as X,
  nc as W,
  oe as Qo,
  om as ar,
  pe as Xo,
  ra as Bo,
  sa as w,
  sb as Ke,
  ta as K,
  tb as G,
  ua as E,
  ui as er,
  wa as de,
  wr as mr,
  xa as he,
  xb as Me,
  ya as Oo,
  yb as U,
  yn as Et,
} from "chunk-6G7WDIGG.mjs";
import { c as ne } from "chunk-YXZOQYF3.mjs";
import { a as $t } from "chunk-4HRYW54D.mjs";
import { f as ee } from "chunk-7MEZPITK.mjs";
import { a as Wt } from "chunk-24G7FGVN.mjs";
import { g as Ct } from "chunk-K3IJ2B65.mjs";
import { d as Ge, f as pe } from "chunk-KEWR65TQ.mjs";
import { a as Fo } from "chunk-KQKA2AEH.mjs";
import { b as qo } from "chunk-YSP5ZHDJ.mjs";
import { b as Vo } from "chunk-AUNF3KWQ.mjs";
import { a as vt } from "chunk-AYNVEX5D.mjs";
import { a as Ao } from "chunk-2FCXHKEL.mjs";
import { p as L } from "chunk-NLFELSLC.mjs";
import {
  a as Wo,
  b as g,
  e as ge,
  f as _,
  k as mt,
  n as Pe,
  o as yt,
  q as ht,
} from "chunk-Y3GZLMBF.mjs";
import { b as f, c as j } from "chunk-4JY5UMT2.mjs";
import { b as pt } from "chunk-AAB6RPWQ.mjs";
import { b as Q, i as _e } from "chunk-GOPQO4KR.mjs";
import { a as zo } from "chunk-YRQ7G4QH.mjs";
import {
  e as wo,
  f as No,
  g as Ro,
  h as B,
  i as le,
  j as A,
  k as b,
  l as R,
  m as Y,
  p as Do,
  q as ko,
} from "chunk-WLHSDIGQ.mjs";
var In = [ce.video, ce.youtube, ce.vimeo, ce.codeblock, ce.twitter, ce.embed];
function Js(o, e) {
  let t = h(e);
  return K(t)
    ? t.type === "canvasComponent"
    : w(t)
      ? o.tree.getNodeWithTrait(t.moduleId, W)?.type === "canvasComponent"
      : !1;
}
async function ea(o, e) {
  let t = h(e);
  w(t) && (await o.stores.modulesStore.addExternalModulesToProject([t], { onTreeUpdate() {} }));
}
var vn = new WeakMap();
async function ta(o) {
  let { modules: e } = await o.stores.modulesStore.lookUpModules(In.map(yr)),
    t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    f(n, "Module must exist");
    let i = In[r];
    (f(i, "Module component must exist"),
      vn.set(i, n),
      f(n.files.module, "Module must have a module file"),
      t.push(de(n.id, n.saveId, n.files.module, i.exportSpecifier ?? "default")));
  }
  await o.stores.modulesStore.preloadExternalModules(t);
}
function oa(o, e) {
  let t = vn.get(e);
  f(t, "Preloaded module must exist");
  let r = o.getNodeWithTrait(t.id, W);
  return r
    ? r.codeComponentIdentifier
    : (f(t.files.module, "Module must have a module file"),
      de(t.id, t.saveId, t.files.module, e.exportSpecifier ?? "default").value);
}
var oe = wo(Ao(), 1),
  xn = "dismissedInstantNPMToast",
  En = "showedInstantNPMToast",
  Pn = "instant-npm-toast",
  sa = () => window.localStorage.getItem(En) === "true",
  Ln = () => window.localStorage.getItem(xn) === "true";
function qi() {
  return (0, oe.jsxs)(oe.Fragment, {
    children: [
      (0, oe.jsx)($t, { children: "Installed NPM library." }),
      (0, oe.jsxs)("a", {
        href: "https://www.framer.com/developers/#faq",
        target: "_blank",
        children: [" ", (0, oe.jsx)($t, { children: "Learn more." })],
      }),
    ],
  });
}
function Tn() {
  (window.localStorage.setItem(En, "true"),
    ne({
      type: "add",
      variant: "info",
      text: (0, oe.jsx)(qi, {}),
      key: Pn,
      duration: 1 / 0,
      showCloseButton: "never",
      action: { title: "Dismiss", onClick: () => window.localStorage.setItem(xn, "true") },
    }));
}
function aa() {
  ne({ type: "remove", key: Pn });
}
function ma(o, e, t) {
  let r = e && o.getNode(e);
  if (!r || !ue(r)) return t(e, {}, !1);
  let n = ir(o, r) ? {} : { visible: !1 },
    i = t(r.originalid, n, !0);
  if (i === void 0) return;
  let s = gr.getReplicaForTemplateNode(o, r);
  return s ? (n.visible === !1 && Mr(o, s, i, { visible: !0 }), jo(s.id, i)) : i;
}
function bn(o, e, t = o.id) {
  let r = o.children;
  return Yo(o) ? (!r || r.length === 0 ? [] : (e.getChildrenRects(t) ?? [])) : null;
}
var Yi = { track: !0 };
function wn(o) {
  let e = { ...o, event: "external_component_insert" };
  Vo(e, Yi);
}
var Nn = 4,
  Rn = 20;
function Dn(o, e, t) {
  f(e.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: r, index: n } = Ue.closestRect(e, t),
    i = Xo(o),
    s = Qo(o) ? !i : o.resolveValue("stackDirection") === "horizontal",
    l = s ? "x" : "y",
    a = s ? "y" : "x",
    u = s ? "width" : "height",
    d = s ? "height" : "width",
    c = t[l] < r[l] + r[u] / 2,
    p = i && ge(o.gridColumnCount) ? Math.max(Math.floor(o.gridColumnCount), 1) : 1,
    m = c ? n - p : n + p,
    y = e[m],
    M = !y || (c ? y[l] >= r[l] : r[l] >= y[l]),
    x = c ? n : Math.min(n + p, e.length);
  if (M) {
    let k = c ? r[l] + Nn : r[l] + r[u] - Nn;
    return {
      insertionIndex: x,
      localInsertionLine: { a: rt(l, k, r[a]), b: rt(l, k, r[a] + Math.max(r[d], Rn)) },
    };
  } else {
    let k = c ? (y[l] + y[u] + r[l]) / 2 : (r[l] + r[u] + y[l]) / 2;
    return {
      insertionIndex: x,
      localInsertionLine: {
        a: rt(l, k, Math.min(y[a], r[a])),
        b: rt(l, k, Math.max(y[a] + y[d], r[a] + Math.max(r[d], Rn))),
      },
    };
  }
}
function rt(o, e, t) {
  return o === "x" ? { x: e, y: t } : { x: t, y: e };
}
var kn = 10;
function Qi(o, e) {
  for (let t of o) if (e.includes(t)) return !0;
  return !1;
}
function Xi(o, e, t, r, n) {
  if (n.length === 0 || o.stackWrapEnabled || tr(o) || ue(o)) return null;
  let { tree: i } = e,
    { zoom: s } = e.stores.canvasStore,
    l = i.getParent(o.id);
  if (l && je(l) && (l.stackDirection !== o.stackDirection || l.stackWrapEnabled)) return null;
  let a = zt(i, o, t),
    u = i.getRect(o),
    d = o.stackDirection === "vertical",
    c = d ? "x" : "y",
    p = d ? "y" : "x",
    m = d ? "width" : "height",
    y = d ? "height" : "width",
    M = u[m],
    x = u[y],
    k = M * s,
    $ = x * s;
  if (k < 40 || $ < 40) return null;
  let Z = a[c],
    z = 10 / s,
    F = Ue.merge(...n),
    q = F[c],
    V = q + F[m],
    O = Math.max(z, q / 2),
    ye = Math.max(z, (M - V) / 2),
    P = Z <= O,
    S = Z >= M - ye;
  if (!P && !S) return null;
  let I = P ? 0 : 1,
    ae = r[y],
    xo = 4 / s,
    Eo = P ? xo : M - xo,
    Po = x / 2,
    Lo = ae / 2,
    To = x / 3,
    bo = a[p],
    xe = "end";
  ae > x ? (xe = "center") : bo < To ? (xe = "start") : bo < 2 * To && (xe = "center");
  let Oe, Ee;
  switch (xe) {
    case "start": {
      ((Oe = 0), (Ee = ae));
      break;
    }
    case "end": {
      ((Ee = x), (Oe = Ee - ae));
      break;
    }
    default: {
      ((Oe = Po - Lo), (Ee = Po + Lo));
      break;
    }
  }
  let $i = { [c]: Eo, [p]: Oe },
    Gi = { [c]: Eo, [p]: Ee },
    Hi = Le(i, o, $i),
    Zi = Le(i, o, Gi);
  return { insertionIndex: I, insertionLine: { a: Hi, b: Zi }, wrap: { wrapAlignment: xe } };
}
function Ji(o, e, t, r, { allowWrapping: n = !0 } = {}) {
  if (!Et(o)) return { insertionIndex: null, insertionLine: null };
  let i = bn(o, e.stores.layoutCache);
  if (!i) return { insertionIndex: null, insertionLine: null };
  if (je(o) && n) {
    let c = Xi(o, e, t, r, i);
    if (c) return c;
  }
  let s = e.tree,
    l = zt(s, o, t);
  if (i.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: a, localInsertionLine: u } = Dn(o, i, l),
    d = { a: Le(s, o, u.a), b: Le(s, o, u.b) };
  return { insertionIndex: a, insertionLine: d };
}
var es = { width: 10, height: 10 };
function Wa(o, e, t, r, n = !1) {
  f(t.length, "getStackOrGridInRange(): expects at least a single selected node");
  let i = o.stores.scopeStore.active;
  if (t.some(Jo)) return null;
  let l = Or(o.tree, i, e)
    .filter(
      (d) =>
        !(
          (Br(d) && d.locked) ||
          !Et(d) ||
          Jr(d) ||
          nr(o.tree, o.stores.overlayStore.activeOverlays, d)
        )
    )
    .reverse();
  if (r) {
    let d = r.id,
      c = l.find((p) => p.id === d);
    if (c) return c;
  }
  let a = null,
    u = t.map((d) => d.id);
  for (let d of l) {
    if (!rr(d) || (n && !or(d))) continue;
    let c = o.tree.getAncestorIds(d.id);
    if ((c.push(d.id), Qi(c, u) || (a || (a = d), !Mt(d)))) continue;
    let { insertionLine: m } = Ji(d, o, e, es);
    if (!m) continue;
    if (m.a.x === m.b.x) {
      if (Math.abs(e.x - m.a.x) * o.stores.canvasStore.zoom > kn) continue;
    } else if (m.a.y === m.b.y) {
      if (Math.abs(e.y - m.a.y) * o.stores.canvasStore.zoom > kn) continue;
    } else continue;
    if (t.every((M) => At(o.tree, d, M, i.id, o.componentLoader))) return d;
  }
  if (Mt(a)) {
    let d = a;
    if (t.every((p) => At(o.tree, d, p, i.id, o.componentLoader))) return a;
  }
  return null;
}
function ja(o, e, { wrapAlignment: t }) {
  let r = en.addStack(o, [e]);
  if (!r) return null;
  let n = o.tree.getNode(r);
  return !n || !je(n)
    ? null
    : (n.set({
        stackDirection: e.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: t,
      }),
      n);
}
function On(o) {
  return o.type === "controlReference";
}
function _n(o, e, t, r) {
  let n = h(o.identifier);
  if (!(!n || !E(n))) {
    if (K(n)) {
      let i = e.getObjectKey(n.localId, "save");
      if (te(n.type)) {
        let a = nt(i?.propertyControls);
        if (a !== void 0) return $n(a, n.exportSpecifier, r, t);
      }
      let s = i?.moduleId,
        l = o.moduleId ?? (typeof s == "string" ? s : void 0);
      return l ? zn(l, void 0, n.exportSpecifier, r, e, t) : void 0;
    }
    if (w(n)) return zn(o.moduleId ?? n.moduleId, n.saveId, n.exportSpecifier, r, e, t);
  }
}
function zn(o, e, t, r, n, i) {
  return $n(Un(o, e, n), t, r, i);
}
function Un(o, e, t) {
  let r = e ?? rs(o, t);
  if (!r) return;
  let n = t.getObjectKey(o, "propertyControlsBySaveId");
  if (_(n)) return nt(n[r]);
}
function rs(o, e) {
  let t = e.getObjectKey(o, "codeComponentIdentifier");
  if (!g(t)) return;
  let r = h(t);
  return w(r) ? r.saveId : void 0;
}
function nt(o) {
  if (o === null) return null;
  if (!_(o)) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!_(r)) return;
    let n = {};
    (g(r.controls) && (n.controls = r.controls),
      g(r.displayName) && (n.displayName = r.displayName),
      g(r.type) && (n.type = r.type),
      g(r.outputControls) && (n.outputControls = r.outputControls),
      (e[t] = n));
  }
  return e;
}
function ns(o, e) {
  if (!g(o)) return;
  let t = e.get(o);
  if (t !== void 0) return t ?? void 0;
  let r = is(o);
  return (e.set(o, r ?? null), r);
}
function is(o) {
  try {
    let e = JSON.parse(o);
    if (!_(e)) return;
    let t = {};
    for (let r in e) {
      let n = e[r];
      if (!_(n)) return;
      t[r] = n;
    }
    return t;
  } catch {
    return;
  }
}
function Se(o) {
  return o === null ? !0 : nt(o) !== void 0;
}
function Vn(o, e, t) {
  if (o === null || typeof o == "string") return;
  let r = o?.[e]?.[t];
  return g(r) ? r : void 0;
}
function Wn(o, e) {
  return Kn(o, e, "displayName");
}
function jn(o, e) {
  return Kn(o, e, "type");
}
function Kn(o, e, t) {
  let r = h(o);
  if (!(!r || !E(r))) {
    if (K(r)) {
      if (te(r.type)) {
        let n = e.getObjectKey(r.localId, "save");
        return Vn(nt(n?.propertyControls), r.exportSpecifier, t);
      }
      return;
    }
    if (w(r)) return Vn(Un(r.moduleId, r.saveId, e), r.exportSpecifier, t);
  }
}
function $n(o, e, t, r) {
  if (o === null) return null;
  if (typeof o == "string") return;
  let n = o?.[e];
  if (n) return ns(n[t], r);
}
function ss(o, e) {
  if (!(!o || !E(o)))
    switch (o.kind) {
      case "localModuleExport": {
        let t = e.getObjectKey(o.localId, "save")?.moduleId;
        return t ? t : void 0;
      }
      case "externalModuleExport":
        return o.moduleId;
      default:
        j(o);
    }
}
function as(o, e, t) {
  let r = ls(e, o.entityIdentifier),
    n = h(r);
  if (!(!n || !E(n)))
    return {
      type: "controlReference",
      controlKey: o.controlKey,
      title: o.name || "Unknown",
      description: o.description,
      defaultValue: o.initialValue,
      optional: He(o, t) ? !0 : void 0,
      __defaultAssetReference:
        o.expectedType === "file" && g(o.initialValue) ? o.initialValue : void 0,
      module: { identifier: n.value, moduleId: ss(n, e) },
    };
}
function ls(o, e) {
  let t = h(e);
  if (!w(t)) return e;
  let r = o.getObjectKey(t.moduleId, "codeComponentIdentifier");
  return g(r) ? r : e;
}
function An(o, e) {
  Xr(e) && (o[nn(e.id)] = { type: "changehandler", changes: e.id });
}
function it(o, e) {
  let t = o.getObjectKey(e, "variables");
  if (t === void 0 && o.has(e)) return [];
  if (!Array.isArray(t)) return;
  let r = [];
  for (let n of t) Ze(n) && r.push(n);
  return r;
}
function ds(o, e, t) {
  let r = it(e, o);
  if (!r) return;
  let n = We("collection", o, "default").value,
    i = be(r, e, "ContentManagement", !1, {}, t),
    s = e.getObjectKey(o, "name"),
    l = lr({ name: g(s) && s ? s : void 0, dataIdentifier: n });
  return be(l, e, "ContentManagement", !1, i, t);
}
function Xt(o, e, t, r) {
  let n = e.name || "Unknown",
    i = He(e, t) ? !0 : void 0;
  switch (e.type) {
    case "array":
      return us(o, e, t, r);
    case "object":
      return cs(o, e, t, r);
    case "boolean":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : H(e.type, e.initialValue),
        disabledTitle: e.options?.disabledTitle,
        enabledTitle: e.options?.enabledTitle,
        optional: i,
      };
    case "number":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : H(e.type, e.initialValue),
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
        defaultValue: i ? void 0 : H(e.type, e.initialValue),
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
        defaultValue: H(e.type, e.initialValue),
        maxLength: e.options?.maxLength,
        placeholder: e.options?.placeholder,
        preventLocalization: e.preventLocalization,
      };
    case "image":
      return g(e.initialValue)
        ? {
            type: "responsiveimage",
            title: n,
            description: e.description,
            __defaultAssetReference: e.initialValue,
          }
        : !xt(e.initialValue) || !g(e.initialValue.value)
          ? { type: "responsiveimage", title: n, description: e.description }
          : {
              type: "responsiveimage",
              title: n,
              description: e.description,
              __defaultAssetReference: e.initialValue.value,
              __vekterDefault: {
                assetReference: e.initialValue.value,
                ...(Pt(e.initialValue) && g(e.initialValue.alt) ? { alt: e.initialValue.alt } : {}),
                ...(Lt(e.initialValue)
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
        defaultValue: i ? void 0 : H(e.type, e.initialValue),
        displayTime: e.options?.displayTime ? !0 : void 0,
        optional: i,
      };
    case "enum": {
      let s = [],
        l = [];
      for (let a of e.cases) (s.push(a.id), l.push(a.name));
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: i ? void 0 : H(e.type, e.initialValue),
        optional: i,
        options: s,
        optionTitles: l,
      };
    }
    case "file": {
      let s = new Set();
      for (let l of e.allowedFileTypes) l.extension && s.add(l.extension);
      return {
        type: e.type,
        title: n,
        description: e.description,
        allowedFileTypes: Array.from(s),
        __defaultAssetReference: H(e.type, e.initialValue),
      };
    }
    case "transition": {
      let s = H(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: s ? er(s) : void 0,
      };
    }
    case "border": {
      let s = H(e.type, e.initialValue);
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: s ? ur(s) : void 0,
      };
    }
    case "boxshadow":
      return {
        type: e.type,
        title: n,
        description: e.description,
        defaultValue: e.initialValue.map(cr),
      };
    case "motionvalue":
      return dr(e, n);
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
      return { type: "string", title: n, description: e.description, preventLocalization: fs(o) };
    case "nodePropertyControlReference":
    case "controlReference":
      return null;
    default:
      j(e);
  }
}
function us(o, e, t, r) {
  let n = {},
    i = mr(e);
  for (let s of e.itemVariables) {
    if (!Ze(s)) continue;
    let l = Xt(o, s, t, r),
      a = l ? Te({ control: l }).control : void 0;
    if (!(!a || !gt(a))) {
      if (i) {
        (f(a.type === "responsiveimage", "Gallery array items must be responsive images"),
          (n[s.id] = ps(a)));
        continue;
      }
      n[s.id] = a;
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
    __vekterDefault: e.initialValue?.map((s) => {
      let l = {};
      if (!s || s.type !== "object" || !_(s.value)) return l;
      for (let a of e.itemVariables) {
        if (a.type === "divider") continue;
        let u = s.value[a.id];
        if (!u) continue;
        let d = Gn(u, a.type);
        Pe(d) || (l[a.id] = d);
      }
      return l;
    }),
  };
}
function cs(o, e, t, r) {
  let n = {};
  for (let l of e.fieldVariables) {
    let a = Xt(o, l, t, r),
      u = a ? Te({ control: a }).control : void 0;
    !u || !gt(u) || (n[l.id] = u);
  }
  let i = He(e, t),
    s = {};
  if (!i)
    for (let l of e.fieldVariables) {
      let a = Gn(e.initialValue[l.id], l.type);
      Pe(a) || (s[l.id] = a);
    }
  return {
    type: e.type,
    title: e.name || "Unknown",
    controls: n,
    description: e.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : s,
  };
}
function ps(o) {
  let { __defaultAssetReference: e, __vekterDefault: t, ...r } = o;
  return r;
}
function Gn(o, e) {
  if (xt(o) && o.type === e)
    switch (e) {
      case "image": {
        if (!g(o.value)) return;
        let t = Lt(o);
        return {
          assetReference: o.value,
          alt: Pt(o) ? o.alt : void 0,
          positionX: t ? o.positionX : void 0,
          positionY: t ? o.positionY : void 0,
        };
      }
      case "boolean":
        return Wo(o.value) ? o.value : void 0;
      case "number":
        return ge(o.value) ? o.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return g(o.value) ? o.value : void 0;
      case "richtext":
        return pr(o.value) ? o.value : void 0;
      case "link":
        return fr(o.value) ? o.value : void 0;
      case "vectorsetitem":
        return g(o.value) && E(o.value) ? o.value : void 0;
      default:
        j(e);
    }
}
function fs(o) {
  let e = o.getHierarchy().getRootId();
  if (!e) return !1;
  let t = o.getObjectKey(e, "webMetadata");
  return _(t) ? t.translatePagePaths === !1 : !1;
}
function Fn(o, e, t) {
  let r = o.getObjectKey(`${e}.replicaInfo`, "master");
  if (!g(r)) return o.getObjectKey(e, t);
  let n = [`${e}.replicaInfo.overrides.${r}`],
    i = o.getObjectKey(`${e}.replicaInfo`, "inheritsFrom");
  g(i) && n.push(`${i}.replicaInfo.overrides.${r}`);
  for (let s of n) {
    let l = o.getObjectKey(s, t);
    if (l !== void 0) return l;
    let a = o.getObjectKey(s, "_deleted");
    if (Array.isArray(a) && a.includes(t)) return;
  }
  return o.getObjectKey(r, t);
}
function ms(o, e) {
  let t = o.getObjectKey(`${e}.replicaInfo`, "master");
  return g(t)
    ? o.getObjectKey(`${e}.replicaInfo.overrides.${t}`, "name")
    : o.getObjectKey(e, "name");
}
function ys(o, e) {
  let t = e.getObjectKey(o, "baseVariantId");
  if (!g(t) || !e.has(t)) return {};
  let r = [t];
  for (let l of e.getChildrenIds(o))
    l !== t && Fn(e, l, "isVariant") === !0 && (Fn(e, l, "gesture") || r.push(l));
  if (r.length < 2) return {};
  let n = [],
    i = [],
    s = new Set();
  for (let l of r) {
    let a = ms(e, l),
      u = (g(a) && a) || Wr("Variant", s, { startIndex: s.size + 1, omitCountIfFirst: !1 });
    (s.add(u), n.push(l), i.push(u));
  }
  return { variant: { type: "enum", title: "Variant", options: n, optionTitles: i } };
}
function be(o, e, t, r, n, i) {
  for (let s of o) {
    if (!Ze(s)) continue;
    let l = On(s) ? as(s, e, t) : void 0;
    if (l) {
      ((n[s.id] = l), r && An(n, s));
      continue;
    }
    let a = Xt(e, s, t, i);
    ht(a) || ((n[s.id] = a), r && An(n, s));
  }
  return n;
}
function hs(o, e, t, r) {
  let n = it(t, o);
  if (!n) return;
  let i = gs(e, t),
    s = i ? n.filter((l) => i.has(l.id)) : n;
  return be(s, t, "SmartComponent", !0, ys(o, t), r);
}
function gs(o, e) {
  let t = e.getObjectKey(o, "save")?.annotations?.default;
  if (t?.framerImmutableVariables !== !0) return;
  let r = t.framerVariables;
  if (Pe(r)) return new Set();
  if (_(r)) return new Set(Object.keys(r));
}
function Ms(o, e, t) {
  let r = it(e, o);
  if (r) return be(r, e, "LayoutTemplate", !1, {}, t);
}
function Ss(o, e, t) {
  let r = e.getParentId(o);
  if (!r || r === Kr || e.getObjectKey(r, "__class") !== "VectorSetNode") return;
  let n = it(e, r);
  if (n) return be(n, e, "VectorSet", !1, {}, t);
}
function Is(o, e, t) {
  let r = h(o.identifier);
  if (!r || !E(r) || !K(r) || r.exportSpecifier !== "default") return;
  let n = r.localIdName;
  switch (r.type) {
    case "canvasComponent":
      return hs(n, r.localId, e, t);
    case "layoutTemplate":
      return Ms(n, e, t);
    case "collection":
    case "draftCollection":
      return ds(n, e, t);
    case "vector":
      return Ss(n, e, t);
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
      j(r.type);
  }
}
function Cs(o, e, t, r) {
  let n = Is(o, e, r);
  return n !== void 0 ? n : _n(o, e, t.parsedPropertyControls, "controls");
}
function Hn(o, e, t) {
  return {
    getStoredPropertyControls: (n, i) => Cs(n, o, i, e),
    verifyControls: t,
    cache: new Map(),
    parsedPropertyControls: new Map(),
    resolving: new Set(),
    resolvingReferences: new Set(),
  };
}
function vs(o, e) {
  let t = `${o.module.identifier}\0${o.module.moduleId ?? ""}\0${o.controlKey}`;
  if (e.resolvingReferences.has(t)) return;
  e.resolvingReferences.add(t);
  let n = e.getStoredPropertyControls(o.module, e)?.[o.controlKey];
  if (!n) {
    e.resolvingReferences.delete(t);
    return;
  }
  let i = Zn(n, e);
  if ((e.resolvingReferences.delete(t), !!i))
    return Te({
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
function Zn(o, e) {
  let t = e.cache.get(o);
  if (t !== void 0) return t ?? void 0;
  if (e.resolving.has(o)) return;
  e.resolving.add(o);
  let r = On(o) ? vs(o, e) : e.verifyControls({ control: o }).control;
  return (e.resolving.delete(o), e.cache.set(o, r ?? null), r);
}
function qn(o, e) {
  let t = {};
  for (let r in o) {
    let n = o[r];
    if (!n) continue;
    let i = Zn(n, e);
    i && (t[r] = i);
  }
  return t;
}
function gl(o, e, t) {
  return Jt({ identifier: o.instanceIdentifier }, e, t);
}
function Jt(o, e, t) {
  if (!t.enabled) return;
  let r = Hn(e, t, Te),
    n = r.getStoredPropertyControls(o, r);
  if (ht(n)) return {};
  if (!Pe(n)) return qn(n, r);
}
function Yn(o, e, t) {
  if (!t.enabled) return;
  let r = Hn(e, t, cn),
    n = _n(o, e, r.parsedPropertyControls, "outputControls");
  if (n) return qn(n, r);
}
function Cl(o, e) {
  let t = (n) => o.reactComponentForIdentifier(n)?.properties ?? null;
  if (!L.isOn("harness2")) return { getPropertyControls: t };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let i = t(n);
      if (i) return i;
      let s = r.get(n);
      if (s !== void 0) return s;
      let l = xs(n, e);
      return (r.set(n, l), l);
    },
  };
}
function xs(o, e) {
  let t = h(o);
  if (!t || !E(t)) return null;
  let r = e.resolvePropertyControls({ instanceIdentifier: t.value });
  return r === void 0 ? null : we(r);
}
function we(o) {
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!r) continue;
    let { hidden: n, ...i } = r;
    e[t] = i;
  }
  return e;
}
var Qn = ["loader", "tree-first", "tree-only"];
function Xn(o) {
  return Qn.find((e) => e === o);
}
var eo =
  typeof window > "u"
    ? void 0
    : Xn(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function Jn(o) {
  eo = o;
}
function ro() {
  return L.isOn("harness2");
}
function me() {
  return ro() ? eo || (L.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function ei() {
  return Qn;
}
function ti(o) {
  return Xn(o);
}
var D = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
  },
  to = new Set(),
  oo = new Set();
function oi() {
  return {
    ...D,
    kindMismatches: [...D.kindMismatches],
    annotationRefusals: [...D.annotationRefusals],
  };
}
function ri() {
  ((D.treeHits = 0),
    (D.treeMisses = 0),
    (D.loaderFallbacks = 0),
    (D.loaderPreferred = 0),
    (D.kindMismatches.length = 0),
    (D.annotationRefusals.length = 0),
    to.clear(),
    oo.clear());
}
function ni() {
  D.treeHits++;
}
function ii() {
  D.treeMisses++;
}
function si() {
  D.loaderFallbacks++;
}
function ai() {
  D.loaderPreferred++;
}
function li(o, e) {
  to.has(o) || (to.add(o), D.kindMismatches.push({ identifier: o, loaderType: e }));
}
function no(o) {
  oo.has(o) || (oo.add(o), D.annotationRefusals.push(o));
}
var io = Symbol("annotationRefusal");
function di(o) {
  if (!o) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    r !== void 0 && (e[t] = g(r) ? r : JSON.stringify(r));
  }
  return e;
}
var Es = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function Ps(o) {
  return o.kind !== "localModuleExport" || o.exportSpecifier !== "default" ? !1 : Es.has(o.type);
}
var ui = new WeakMap();
function Ls(o) {
  let e = 0;
  for (let t = o; t; t = t.base) e += t.length;
  return e;
}
function Ts(o) {
  let e = o.manifest,
    t = Ls(o),
    r = ui.get(o);
  if (r && r.branchManifest === e && r.rowCount === t) return r.answers;
  let n = new Map();
  return (ui.set(o, { branchManifest: e, rowCount: t, answers: n }), n);
}
function Ne(o) {
  throw new Error(
    `${o} is not available on the localization tree-controls loader: it is read-only`
  );
}
var so = class extends on {
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
      n ? ni() : ii(),
      n && r && r.type !== n.definition.type && li(t, r.type),
      this.mode === "tree-only"
        ? (n?.definition ?? null)
        : n && this.preferTreeAnswer(n, r !== null)
          ? n.definition
          : (n ? ai() : r && si(), r)
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
    Ne("updateEntity");
  }
  deleteEntity() {
    Ne("deleteEntity");
  }
  setModuleRevision() {
    Ne("setModuleRevision");
  }
  testing = {
    setEntity: () => Ne("testing.setEntity"),
    clearEntities: () => Ne("testing.clearEntities"),
  };
  treeAnswer(t) {
    let r = Ts(this.store),
      n = r.get(t);
    if (n === io) return (no(t), null);
    if (n !== void 0) return n;
    let i = this.resolveFromTree(t);
    return (r.set(t, i), i === io ? (no(t), null) : i);
  }
  resolveFromTree(t) {
    let r = h(t);
    if (!r || !E(r)) return null;
    let n = L.isOn("harness2"),
      i = Jt({ identifier: r.value }, this.store, { enabled: n });
    if (i === void 0) return null;
    let s = this.moduleNodeFacts(r);
    if (s === null) return io;
    let { name: l, annotations: a } = s,
      u = jn(r.value, this.store);
    if (u !== void 0 && u !== "hook" && u !== "component") return null;
    let d = {
        depth: 0,
        file: "",
        identifier: r.value,
        packageIdentifier: "",
        annotations: a,
        update: 0,
      },
      p = (u === "hook"
        ? {
            ...d,
            name: Wn(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: we(i),
            outputs: we(Yn({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...d, name: l ?? "Unknown", type: "component", properties: we(i) };
    return { hash: tn(p), definition: p, derivedFromDocument: Ps(r) };
  }
  moduleNodeFacts(t) {
    switch (t.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(t.localId, fe),
          n = di(r?.save.annotations?.[t.exportSpecifier]);
        if (t.type === "codeFile") return { name: r?.getName(), annotations: n };
        let i = this.store.getObjectKey(t.localIdName, "name");
        return { name: (g(i) && i) || r?.getName(), annotations: n };
      }
      case "externalModuleExport": {
        let r = this.tree.getNodeWithTrait(t.moduleId, W);
        if (!r) return null;
        let n = h(r.codeComponentIdentifier);
        return n?.kind === "externalModuleExport" &&
          n.saveId === t.saveId &&
          n.exportSpecifier === t.exportSpecifier
          ? { name: r.getName(), annotations: di(r.annotations) }
          : null;
      }
    }
  }
};
function st(o) {
  return me() !== "loader" && _t(o.timeline);
}
function at(o, e) {
  let t = me();
  return t === "loader" || !_t(e.timeline) ? o : new so(o, e.getDataTree(), e.timeline.store, t);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: me,
    setMode(o) {
      let e = ti(o);
      if (!e)
        throw new Error(
          `Unknown localization tree-controls mode: ${o}. One of ${ei().join(", ")}.`
        );
      if (e !== "loader" && !ro())
        throw new Error(
          `Cannot force ${e}: the harness2 experiment is off, so nothing stores controls.`
        );
      return (Jn(e), e);
    },
    stats: oi,
    reset: ri,
    wrap: at,
    walk: un,
    trackLookups: sn,
  });
var ci = new WeakMap();
function pi(o) {
  let e = ci.get(o);
  return e || ((e = { loadedRevision: -1, promise: void 0 }), ci.set(o, e), e);
}
function bs() {
  return L.isOn("deferNonVisibleModuleEvaluation") && L.isOn("localizationWaitsForAllModules");
}
function fi(o) {
  if (
    !bs() ||
    o.localizationComponentLoaderPolicy === "authoritative" ||
    (me() === "tree-only" && st(o.stores.treeStore))
  )
    return "ready";
  let { modulesStore: e } = o.stores,
    t = o.stores.treeStore.getDataTree().get(Fr);
  return e.localModules.size === 0 && !t?.children?.length
    ? "ready"
    : $r(e.localModuleEvaluationMode)
      ? pi(e).loadedRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : o.componentLoader.modulesRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function De(o) {
  return fi(o) !== "ready";
}
function Gl(o) {
  return !st(o.stores.treeStore) && De(o);
}
async function ws(o, e) {
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
function Re(o) {
  let e = st(o.stores.treeStore);
  return o.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: at(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: at(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !e && De(o),
      };
}
async function ao(o, e) {
  let { modulesStore: t } = o.stores,
    r = pi(t);
  if (!De(o)) {
    e?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = fi(o)) !== "ready";) {
    if (!r.promise) {
      let i = n,
        l = (
          i === "load-all"
            ? Je(o.componentLoader, t, "localization")
            : Hr(o.componentLoader, t, "localization")
        )
          .then(() => {
            i === "load-all" && (r.loadedRevision = o.componentLoader.modulesRevision);
          })
          .finally(() => {
            r.promise === l && (r.promise = void 0);
          });
      r.promise = l;
    }
    await ws(r.promise, e);
  }
}
async function Hl(o, e) {
  let t = Re(o);
  return (t.needsFallbackBeforeRead && (await ao(o, e)), e?.throwIfAborted(), t.componentLoader);
}
function mi(o) {
  return o.unresolvedLocalizableCount > 0;
}
function Zl(o, e) {
  return mi(e) && De(o);
}
async function ql(o, e, t = o.signal) {
  var a = [];
  try {
    let r = Re(o);
    r.needsFallbackBeforeRead && (await ao(o, t));
    t?.throwIfAborted();
    let n = Do(a, an());
    let i = o.componentLoader.activeBundleHash;
    let s = await e(r.componentLoader);
    if (!r.usesTreeControls || me() === "tree-only" || !mi(n.lookups)) return s;
    let l = De(o);
    l && (await ao(o, t));
    if (!l && i === o.componentLoader.activeBundleHash) return s;
    t?.throwIfAborted();
    return await e(Re(o).componentLoader);
  } catch (u) {
    var d = u,
      c = !0;
  } finally {
    ko(a, d, c);
  }
}
function yi(o) {
  let e = o.remoteTreeVersion;
  return e < 1e13 ? e : Math.floor(e / 1e3);
}
var Ns = _e("ensureComponentsLoadedWithTargetedLoad"),
  Rs = 2e4,
  Ds = 50,
  ks = 5e3;
async function gi(o, e, t, r, n = Rs) {
  let i = performance.now(),
    s = i + n,
    l,
    a = hi(t, o);
  for (; a.length > 0 && performance.now() < s;) {
    let c = Math.min(performance.now() + ks, s);
    try {
      await Promise.race([e(a), Ct(c - performance.now())]);
    } catch (p) {
      l = p;
      break;
    }
    for (; performance.now() < c && ((a = hi(t, o)), a.length !== 0);) await Ct(Ds);
  }
  let u = Ut(t, o);
  if (u.length === 0) return;
  let d = u.filter((c) => Mi(c, o));
  throw (
    Ns.debug("targeted load did not produce definitions", {
      callSite: r,
      missing: u,
      errored: d,
      loadRequestError: l,
    }),
    ee("component_loader_wait_failed", {
      callSite: r,
      reason: l === void 0 ? "modules-missing" : "load-request-failed",
      durationMs: performance.now() - i,
      missingCount: u.length,
      errorCount: d.length,
    }),
    new Gr(
      "ensureComponentsInLoader: Some modules are missing.",
      r,
      u,
      d,
      l === void 0 && a.length > 0
    )
  );
}
function hi(o, e) {
  return Ut(o, e).filter((t) => !Mi(t, e));
}
function Mi(o, e) {
  let t = h(o);
  return t ? Qr(e.componentForIdentifier(Bo(t))) : !1;
}
function Si(o, e) {
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
function ke(o) {
  let e = h(o);
  if (!(!e || !E(e) || !w(e))) return `${e.moduleId}:${e.exportSpecifier}`;
}
function Ii(o) {
  let e = new Map();
  for (let t of o) {
    let r = ke(t);
    r && e.set(r, t);
  }
  return e;
}
function Ci(o, e) {
  let t = o.getRawControlProps();
  for (let r in t) {
    let n = t[r]?.type,
      i = t[r]?.value;
    if (n !== "vectorsetitem" || !g(i) || !E(i)) continue;
    let s = ke(i);
    if (!s || !e.has(s)) continue;
    let l = e.get(s);
    l && o.setControlProp(r, { type: "vectorsetitem", value: l });
  }
}
function vi(o, e) {
  for (let t of e) {
    Ci(t, o);
    let r = ke(t.codeComponentIdentifier);
    if (!r || !o.has(r)) continue;
    let n = o.get(r);
    n && t.set({ codeComponentIdentifier: n });
  }
}
function xi(o, e) {
  let t = zr(e);
  if (t) {
    f(t.isLoaded(), "CMS Should always be loaded.");
    for (let { node: r, skipChildren: n } of t.walkWithSkipChildren()) {
      if (Me(r)) {
        if (!r.variables.some((l) => l.type === "vectorsetitem")) {
          n();
          continue;
        }
        Ei(r, o);
      }
      if (!U(r)) continue;
      let i = r.getControlProps();
      for (let s in i) {
        let l = i[s]?.value;
        if (i[s]?.type !== "vectorsetitem" || !g(l) || !E(l)) continue;
        let u = ke(l);
        if (!u || !o.has(u)) continue;
        let d = o.get(u);
        d && r.setControlProp(s, { ...i[s], value: d });
      }
    }
  }
}
function Ei(o, e) {
  let t = !1,
    r = o.variables.map((n) => {
      if (n.type !== "vectorsetitem") return n;
      let { initialValue: i } = n,
        s = i.identifier;
      if (!s) return n;
      let l = ke(s);
      if (!l || !e.has(l)) return n;
      let a = e.get(l);
      return a ? ((t = !0), { ...n, initialValue: { ...i, identifier: a } }) : n;
    });
  t && o.set({ variables: r });
}
function Pi(o, e) {
  for (let t of e.root.children) {
    if (X(t)) {
      Ci(t, o);
      continue;
    }
    ($o(t) || Go(t)) && Ei(t, o);
  }
}
function lo(o, e, t) {
  let r = o.get(e);
  if (r) return r;
  let n = t();
  return (o.set(e, n), n);
}
function Li() {
  return {};
}
function Ti(o) {
  let e = { controls: bt(o.properties), displayName: o.name, type: o.type };
  return (Yr(o) && (e.outputControls = bt(o.outputs)), e);
}
function lt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = h(r.identifier);
    if (!K(n) || !E(n) || !te(n.type) || (e && !e.has(n.localId))) continue;
    let i = lo(t, n.localId, Li);
    i[n.exportSpecifier] = Ti(r);
  }
  return t;
}
function dt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = h(r.identifier);
    if (!w(n) || !E(n) || (e && !e.has(n.moduleId))) continue;
    let i = lo(t, n.moduleId, () => new Map()),
      s = lo(i, n.saveId, Li);
    s[n.exportSpecifier] = Ti(r);
  }
  return t;
}
function bi(o) {
  let e = h(o.codeComponentIdentifier);
  if (w(e)) return e.saveId;
}
function ut(o, e, t) {
  return o.get(e)?.get(t);
}
function uo(o, e, t) {
  return { ...o?.propertyControlsBySaveId, [e]: tt(t) };
}
function wi(o) {
  for (let e of J.getModuleNodes(o)) {
    let t = bi(e);
    if (t && !Se(e.propertyControlsBySaveId?.[t])) return !0;
  }
  return !1;
}
function co(o) {
  let e = [];
  for (let t of J.getModuleNodes(o)) {
    let r = bi(t);
    if (!r || Se(t.propertyControlsBySaveId?.[r])) continue;
    let n = h(t.codeComponentIdentifier);
    w(n) && e.push(n);
  }
  return e;
}
var C = _e("modules-store"),
  zs = 5e3,
  Ni = new Set(["codeFile", "canvasComponent", "screen", "layoutTemplate", "vector"]),
  Vs = 500,
  As = 100,
  Fs = 10 * 6e4;
function Bs(o) {
  return "sourceContent" in o && g(o.sourceContent);
}
function ct(o) {
  let { module: e, exportSpecifier: t } = o,
    { id: r, saveId: n, files: i } = e;
  return (f(i.module, "module file must exist for a saved module"), de(r, n, i.module, t));
}
var Ri, Di, ki, zi, Vi, Ai, T, po, fo, mo, yo, ho, go, ze, Ie, Ve, Ce, Ae, ie, se, ve;
((Ai = [pe()]), (Vi = [pe()]), (zi = [pe()]), (ki = [pe()]), (Di = [pe()]), (Ri = [pe()]));
var re = class {
  constructor(e, t, r, n, i, s, l, a, u, d, c) {
    this.scheduler = e;
    this.componentLoader = t;
    this.treeStore = r;
    this.loadedExternalModulesStore = n;
    this.chromeStore = i;
    this.modulesAPIServicePromise = s;
    this.makeDocumentReadOnly = l;
    this.insertTemporaryImportMap = a;
    this.loadLocalModules = u;
    this.loadAllLocalModules = d;
    this.abortSignal = c;
    (R(this, po, B(T, 8, this)), B(T, 11, this));
    (R(this, fo, B(T, 12, this, new Map())), B(T, 15, this));
    (R(this, mo, B(T, 16, this, new Map())), B(T, 19, this));
    (R(this, yo, B(T, 20, this, new Map())), B(T, 23, this));
    (R(this, ho, B(T, 24, this, 0)), B(T, 27, this));
    (R(this, go, B(T, 28, this, 0)), B(T, 31, this));
    A(this, "pendingLocalModuleIds", new Set());
    A(this, "_localModuleEvaluationMode");
    A(this, "moduleDepsGraph", {});
    A(this, "modulesStorage");
    A(this, "moduleUpdatesEmitter", new pt());
    A(this, "fastRefreshModulesEmitter", new pt());
    R(this, ze);
    R(this, Ie);
    R(this, Ve, 0);
    R(this, Ce, !1);
    A(this, "prepareForPersistence", async (e, t) => {
      if (
        !te(e) ||
        t.length === 0 ||
        (!L.isOn("harness2") && this.localCodeModuleIdsWithStoredPropertyControls(t).size === 0)
      )
        return;
      let r = new Set(t.map((n) => he(n, "default").value));
      (await this.loadLocalModules(r, "current"),
        await Je(this.componentLoader, this, "code-file-persistence"));
    });
    R(this, Ae, new Map());
    R(this, ie, new Map());
    A(this, "requestTargetedModuleLoad", async (e) => {
      let t = new Map(),
        r = [];
      for (let n of e) {
        let i = h(n);
        (f(i, () => `requestTargetedModuleLoad: not a module identifier: ${n}`),
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
    R(this, se);
    R(this, ve, !1);
    A(
      this,
      "debugModuleStoreAndComponentLoaderRevisionsMatch",
      () => this.revision === this.componentLoader.modulesRevision
    );
    A(this, "checkForExternalModuleUpdates", async () => {
      if (this.treeStore.tree.isViewOnly) return;
      let e = J.get(this.treeStore.tree);
      if (!e?.children?.length) return;
      let t = [],
        r = new Map();
      e.children.forEach((l) => {
        let a = h(l.codeComponentIdentifier);
        if (
          (f(
            a?.kind === "externalModuleExport",
            "expected ExternalModuleNode identifier to be of kind externalModuleExport"
          ),
          l.type === "vector")
        ) {
          let u = l.annotation("framerVector");
          if (!Rr(u)) return;
          let d = u.set.moduleId,
            c = r.get(d) ?? [];
          (c.push(a), r.set(d, c));
        } else t.push(a);
      });
      for (let [l, a] of r) {
        let u = this.treeStore.tree.get(l);
        if (!W(u)) continue;
        let d = u.annotation("framerVectorSet");
        kt(d) && (kr(d) || t.push(...a));
      }
      let n = t.map(({ moduleId: l, saveId: a }) => ({ moduleId: l, saveId: a }));
      if (!n.length) return;
      let i = [],
        s = [];
      for (let l = 0; l < n.length; l++) {
        let a = n[l];
        if (
          (f(a, "query is expected to be defined."), i.push(a), i.length < Vs && l < n.length - 1)
        )
          continue;
        let { modules: u } = await this.lookUpModules(i, { includeStatus: !0 });
        (s.push(...u), (i = []));
      }
      this.treeStore.tree.isViewOnly ||
        this.updateExternalModuleNodes(
          s.map((l, a) => {
            let u = t[a];
            return (
              f(u, "External module missing a matching identifier"),
              { module: l, exportSpecifier: u.exportSpecifier }
            );
          }),
          { onTreeUpdate() {} }
        ).catch(Q);
    });
    A(this, "updatesPollId");
    A(
      this,
      "compileFastRefreshModule",
      async ({ localId: e, name: t, source: r, includeSourceMap: n = !0 }) => {
        let { type: i, name: s } = _o(e);
        if (!Ni.has(i)) return;
        let l = i === "codeFile" ? qt(t).source : s,
          a = i === "codeFile" ? Oo(t)[1] : s,
          {
            code: u,
            imports: d,
            sourceMap: c,
            submoduleContents: p = {},
          } = await gn({ localId: e, source: r, name: l, includeSourceMap: n }),
          m = {
            kind: "fast-refresh",
            localId: e,
            type: i,
            name: a,
            sourceContent: r,
            moduleContent: u,
            relativeImports: d.relative,
            sourceMapContent: c,
            binaryAssetContents: void 0,
            submoduleContents: p,
            update: 0,
          },
          [y, M] = fn(this.fastRefreshModules, (x) => {
            x.set(t, m);
          });
        ((this.fastRefreshModules = y),
          this.fastRefreshModulesEmitter.emit({ patches: M, initialized: !0 }));
      }
    );
    A(
      this,
      "compile",
      ({
        localId: e,
        name: t,
        source: r,
        includeSourceMap: n = !0,
        type: i,
        telemetrySession: s,
      }) => {
        let l = Mn({ name: t, source: r, includeSourceMap: n, type: i, telemetrySession: s });
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
    ((this.modulesStorage = new hn(
      () =>
        this.modulesAPIServicePromise.catch((p) => {
          throw (C.error(p, { context: "Failed to discover ModulesAPI service:" }), p);
        }),
      this.compile,
      (p, m) => this.scheduler.process(p, m),
      (p, m) => this.scheduler.processWhenReadyStrict(p, m),
      () => this.scheduler.markCurrentCommitHasUserModuleEdit(),
      (p) => this.scheduler.runWhenIdle(p),
      (p, m, y) => this.scheduler.scheduleAgentChanges(p, m, y),
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
        se,
        new rn({
          delay: zs,
          task: () => {
            this.processImportMapPrune();
          },
          abortSignal: this.abortSignal,
        })
      ),
      this.modulesStorage.subscribe((p) => {
        let m = p.dependenciesModule?.importMapContent,
          y = this.dependenciesModule?.importMapContent,
          M = Lr(y, m),
          x = !0;
        L.isOn("importMapPruning") && (x = M);
        let k = !1;
        if (m && m !== y) {
          let P = Pr(m);
          k = p.metadata.multiplayerChange || M;
        }
        (m !== y &&
          (M
            ? C.info("Import map resolutions changed, re-evaluating all modules")
            : x
              ? C.info("Import map updated, re-evaluating all modules")
              : C.info(
                  "Import map updated without existing resolution changes, skipping blanket re-eval"
                )),
          k && p.metadata.multiplayerChange,
          (this.dependenciesModule = p.dependenciesModule),
          (this.localModules = p.modules));
        let $ = this.moduleDepsGraph;
        this.moduleDepsGraph = p.depsGraph;
        let Z = p.metadata.patches,
          z = new Set(),
          F = [],
          q = [],
          V;
        for (let P of Z) {
          let S = P.path[0];
          if ((f(typeof S == "string"), S === jt)) {
            if (((V = P), x)) for (let I of p.modules.keys()) z.add(I);
            break;
          }
          P.op === "remove" && P.path.length === 1 ? q.push(S) : F.push(S);
        }
        let O = new Set();
        if (!V) {
          let P = this.getActiveScope(),
            S = Yt(P);
          C.debug("Calculated visible code component module typeSlashNames", S);
          for (let I of F) Ht(p.depsGraph, I, z, S, O);
          for (let I of q) Ht($, I, z, S, O);
          (F.forEach((I) => {
            z.delete(I);
          }),
            q.forEach((I) => {
              (z.delete(I), O.delete(I));
            }));
        }
        C.debug(
          "prioritized evaluation sending to sandbox",
          { dependentModules: z, visibleDependentModules: O },
          "highprio size",
          O.size,
          "dep size",
          z.size
        );
        let ye = {
          patches: Z,
          dependentModules: Array.from(z),
          prioritizedModules: Array.from(O),
          revision: Z.length === 0 ? this.revision : ++this.revision,
          initialized: p.initialized,
          modulesReloading: p.modulesReloading,
        };
        if ((this.moduleUpdatesEmitter.emit(ye), this.fastRefreshEnabled)) {
          let P = Z.filter(
            (I) =>
              I.path.length === 1 &&
              I.path[0] !== jt &&
              (I.op === "remove" || (I.op === "add" && !this.fastRefreshModules.has(I.path[0])))
          );
          this.fastRefreshModules = pn(this.fastRefreshModules, (I) => {
            for (let ae of P) ae.op === "remove" && I.delete(ae.path[0]);
          });
          let S = [...(V ? [V] : []), ...P];
          S.length > 0 &&
            this.fastRefreshModulesEmitter.emit({ patches: S, initialized: p.initialized });
        }
        if (this.fastRefreshEnabled && !V)
          for (let P of F) {
            let S = this.fastRefreshModules.get(P);
            if (!S) continue;
            let I = this.localModules.get(P);
            I && I.sourceContent !== S.sourceContent && this.createFastRefreshModuleFromModule(I);
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
    ((this.pendingLocalModuleIds = new Set(e.map(Uo))), (this._localModuleEvaluationMode = t));
  }
  isLocalModuleEvaluationPending(e) {
    return (
      this.componentLoader.modulesRevision < this.revision || this.pendingLocalModuleIds.has(e)
    );
  }
  propertyControlsSnapshotForCurrentRevision(e) {
    let t = L.isOn("harness2") ? void 0 : this.localCodeModuleIdsWithStoredPropertyControls(e);
    return t?.size === 0
      ? { revision: this.revision, controlsByLocalId: new Map() }
      : this.debugModuleStoreAndComponentLoaderRevisionsMatch()
        ? {
            revision: this.revision,
            controlsByLocalId: lt(this.componentLoader.getAllEntities(), t),
          }
        : { revision: -1, controlsByLocalId: new Map() };
  }
  localCodeModuleIdsWithStoredPropertyControls(e) {
    return new Set(
      e.filter((t) => {
        let r = this.treeStore.tree.get(t);
        return !fe(r) || !te(r.save.type) ? !1 : Se(r.save.propertyControls);
      })
    );
  }
  localCodeModuleIdsMissingPropertyControls() {
    let e = [];
    for (let t of Xe.getModuleNodes(this.treeStore.tree))
      te(t.save.type) && (Se(t.save.propertyControls) || e.push(t.id));
    return e;
  }
  async backfillMissingCrdtModuleControls() {
    if (this.treeStore.tree.isViewOnly) return;
    let e = this.localCodeModuleIdsMissingPropertyControls(),
      t = wi(this.treeStore.tree);
    if (e.length === 0 && !t) return;
    if (e.length > 0) {
      let u = new Set(e.map((d) => he(d, "default").value));
      await this.loadLocalModules(u, "eager");
    }
    let r = co(this.treeStore.tree);
    await Promise.allSettled(
      r.map((u) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(u))
    );
    let n = this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0,
      i = [...this.componentLoader.getAllEntities()],
      s = lt(i),
      l = dt(i),
      a = new Set(e.filter((u) => !this.isLocalModuleEvaluationPending(u)));
    await this.scheduler.processWhenReadyAsync(() => {
      this.treeStore.tree.isViewOnly ||
        this.writeMissingPropertyControls(
          (u) => s.get(u) ?? (a.has(u) ? null : void 0),
          ({ moduleId: u, saveId: d }) => ut(l, u, d) ?? (n ? null : void 0)
        );
    });
  }
  persistEvaluatedPropertyControls(e) {
    if (!L.isOn("harness2") || this.treeStore.tree.isViewOnly || b(this, Ce)) return;
    let t = e > b(this, Ve);
    if ((Y(this, Ve, e), e === 0)) return;
    let r = t ? 1 : As + 1;
    this.countEvaluatedPropertyControlsGaps(r) >= r &&
      (Y(this, Ce, !0),
      this.scheduler.scheduleDocumentUpdateIgnoringUndo(() => {
        (Y(this, Ce, !1), !this.treeStore.tree.isViewOnly && this.writeEvaluatedPropertyControls());
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
      t = e.localIds.filter((s) => this.hasEvaluatedPropertyControlsForSave(s)),
      r = lt(this.componentLoader.getAllEntities(), new Set(t)),
      n = e.externalIdentifiers.filter((s) => this.hasEvaluatedExternalPropertyControls(s)),
      i = dt(this.componentLoader.getAllEntities(), new Set(n.map((s) => s.moduleId)));
    this.writeMissingPropertyControls(
      (s) => r.get(s),
      ({ moduleId: s, saveId: l }) => ut(i, s, l)
    );
  }
  writeMissingPropertyControls(e, t) {
    let r = this.treeStore.tree,
      { localIds: n, externalIdentifiers: i } = this.getPropertyControlsGaps();
    for (let s of n) {
      let l = r.getNodeWithTrait(s, fe),
        a = e(s);
      !l || a === void 0 || l.set({ save: { ...l.save, propertyControls: tt(a) } });
    }
    for (let s of i) {
      let l = r.getNodeWithTrait(s.moduleId, W),
        a = t(s);
      !l || a === void 0 || l.set({ propertyControlsBySaveId: uo(l, s.saveId, a) });
    }
  }
  getPropertyControlsGaps() {
    let e = this.treeStore.tree,
      t = Xe.get(e),
      r = J.get(e),
      n = b(this, Ie),
      i = n !== void 0 && n.localModulesList === t,
      s = n !== void 0 && n.externalModulesList === r;
    return i && s
      ? n
      : (Y(this, Ie, {
          localModulesList: t,
          externalModulesList: r,
          localIds: i ? n.localIds : this.localCodeModuleIdsMissingPropertyControls(),
          externalIdentifiers: s ? n.externalIdentifiers : co(e),
        }),
        b(this, Ie));
  }
  hasEvaluatedExternalPropertyControls(e) {
    return this.componentLoader.getDefinitionHash(e.value) !== 0;
  }
  hasEvaluatedPropertyControlsForSave(e) {
    if (this.isLocalModuleEvaluationPending(e)) return !1;
    let t = this.getPersistedModuleByLocalId(e);
    if (
      !t ||
      !(yi(this.treeStore) - new Date(t.savedAt).getTime() >= Fs) ||
      !t.exports.some((l) => this.componentLoader.getDefinitionHash(he(e, l).value) !== 0)
    )
      return !1;
    let s = new Set();
    Zt(this.moduleDepsGraph, Dt(t), s);
    for (let l of s) {
      let a = this.localModules.get(l);
      if (!(a !== void 0 && this.isStoredAtTreeSave(a.localId))) return !1;
    }
    return !0;
  }
  isStoredAtTreeSave(e) {
    if (this.getTransientSave(e)) return !1;
    let t = this.treeStore.tree.getNodeWithTrait(e, fe)?.save,
      r = this.getPersistedModuleByLocalId(e);
    return !t || !r ? !1 : r.id === t.moduleId && r.saveId === t.saveId;
  }
  getActiveScope() {
    if (this.chromeStore.mainView === 5) return;
    let e = this.treeStore.tree.get(b(this, ze));
    if (e) return (f(e?.loaded, "Active scope node should be loaded"), e.loaded);
  }
  setActiveScope(e) {
    Y(this, ze, e);
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
    return new yn(this.modulesStorage, e, this.debugModuleStoreAndComponentLoaderRevisionsMatch);
  }
  async addNpmDependencies(e) {
    let r = typeof this.dependenciesModule > "u" && !Ln(),
      n = await ot(this.modulesStorage.addNpmDependencies(e)),
      i = Array.isArray(e) ? e : [e],
      s = i.filter(({ target: u }) => !Rt(u));
    if (!n.ok) {
      let u = n.error instanceof Error ? n.error.message : String(n.error);
      for (let d of s) {
        let c = Sr(d);
        ee("npm_dependency_add_fail", { name: c, reason: u });
      }
      throw (
        s.length > 0 &&
          C.reportError(n.error, {
            context: "Failed to add npm dependencies",
            descriptors: s.map(({ target: d }) => d),
          }),
        n.error
      );
    }
    r && Tn();
    let l = Object.keys(n.value.dependenciesMap.dependencies),
      a = i.map(({ target: u }) => u).filter((u) => !l.includes(u) && Rt(u));
    if (a.length > 0) {
      let u = Si(a, { max: 5, placeholder: "package" });
      ne({
        type: "add",
        variant: "warning",
        primaryText: u,
        secondaryText: `${a.length === 1 ? "is" : "are"} incompatible.`,
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
    return (f(t, "Prune discarded: its inputs changed during the trace"), { importMap: t });
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
      let n = ft(t.localId, r);
      e.push(n);
    }
    for (let t of J.getModuleNodes(this.treeStore.tree)) {
      if (t.type !== "codeFile" && t.type !== "canvasComponent" && t.type !== "shader") continue;
      let r = h(t.codeComponentIdentifier);
      w(r) && e.push(r.importSpecifier);
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
      f(t, "Modules API service not initialized correctly"),
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
    let t = h(e);
    if (K(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  tryConvertExternalCodeComponentIdentifierToLocal(e) {
    let t = h(e);
    if (t?.kind !== "externalModuleExport") return;
    let r = this.getPersistedModuleByGlobalId(t.moduleId);
    if (r) return he(r.localId, t.exportSpecifier).value;
  }
  async listNamespaces() {
    let e = await this.modulesAPIServicePromise;
    return (f(e, "Modules API service not initialized correctly"), await e.listNamespaces());
  }
  async createNamespace(e, t) {
    let r = await this.modulesAPIServicePromise;
    return (
      f(r, "Modules API service not initialized correctly"),
      await r.createNamespace({ ownerId: e, ownerType: t })
    );
  }
  async lookUpModule(e, t) {
    let { modules: r, dependencies: n } = await this.lookUpModules([e], t),
      i = r[0];
    f(i, () => `Module does not exist, looking up: ${JSON.stringify(e)}`);
    let s = { module: i };
    return (n && (s.dependencies = n[i.ownerType]?.[i.ownerId]), s);
  }
  async lookUpModuleURL(e) {
    let t = new URL(e),
      r = t.hash.substring(1).split(","),
      n = r[0] || "default",
      i = r.some((c, p) => p > 0 && c === "unlink"),
      { module: s } = await this.lookUpModule({ url: t.href }),
      l = s.id,
      a = this.getPersistedModuleByGlobalId(l);
    f(s.files.module, "Module file must be defined");
    let u = de(l, s.saveId, s.files.module, n),
      d = a ? he(a.localId, n) : u;
    return { module: s, moduleIdentifier: d, externalIdentifier: u, insertUnlinked: i };
  }
  async getSourceContentForModuleSave(e) {
    let { module: t } = await this.lookUpModule(e);
    if (Bs(t)) return t.sourceContent;
    let r = t.baseURL + t.files.source,
      n = await ot(fetch(r));
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
      let s = new Error(
        `Failed to fetch source content for module save ${e.moduleId}@${e.saveId}: ${n.value.status} ${n.value.statusText}`
      );
      throw (
        C.reportError(s, {
          context: "Failed to fetch source content for module save",
          moduleId: e.moduleId,
          saveId: e.saveId,
          sourceURL: r,
          httpStatus: n.value.status,
        }),
        s
      );
    }
    let i = await ot(n.value.text());
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
      s = new Map(this.externalModulesDynamicInfo);
    for (let a of n) {
      let u = a.id,
        { localId: d, title: c, description: p, lastPublish: m, status: y } = a;
      s.set(u, {
        localId: d,
        title: c,
        description: p,
        lastPublish: m,
        status: y ?? s.get(u)?.status,
      });
    }
    this.externalModulesDynamicInfo = s;
    let l = { modules: n };
    return (i && (l.dependencies = i), l);
  }
  trackExternalComponentInsert(e, t) {
    let r = qo();
    for (let n of e) wn({ insertId: r, insertType: t, codeComponentId: n });
  }
  async installExternalModulesDependencies(e) {
    let t = [],
      r = [];
    for (let n of e) {
      let i = b(this, Ae).get(n);
      i ? r.push(i) : t.push(n);
    }
    if (t.length > 0) {
      let n = this.installDependenciesForModuleURLs(t);
      for (let i of t) b(this, Ae).set(i, n);
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
        (f(t?.kind === "server", "Only server modules should have no sourceContent"),
          this.modulesStorage.createLocalModuleFromModule(t).catch(Q));
        return;
      }
      this.compileFastRefreshModule({
        name: Dt(e),
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
      if (!(!i || qe(i))) {
        if ((f(n.files.module, "Module must have a module file"), i.scopes)) {
          t.scopes ??= {};
          for (let [s, l] of Object.entries(i.scopes))
            t.scopes[s] = Object.assign({}, l, t.scopes[s]);
        }
        Object.keys(i.imports).length > 0 &&
          ((t.scopes ??= {}),
          (t.scopes[n.baseURL] = Object.assign({}, i.imports, t.scopes[n.baseURL])));
      }
    }
    qe(t) || (await this.insertTemporaryImportMap(t));
  }
  async installDependenciesForExternalModules(e) {
    let t,
      r = {},
      n;
    for (let { dependencies: i, module: s } of e)
      if (i?.importMap)
        if (L.isOn("importMapPruning")) {
          let { importMap: l } = Ir(i.importMap, [s.baseURL], Ye);
          t = wt(t ?? { imports: {} }, l);
          let a = i.dependencies ?? Nt(i.importMap);
          Object.assign(r, Cr(a, s.baseURL));
        } else {
          let { modulesCDN: l } = zo(),
            a = xr(i.importMap, l, Ye),
            u = a.importMap,
            d =
              a.didNormalize && i.dependencies ? Er(i.dependencies, u) : (i.dependencies ?? Nt(u)),
            c = {
              dependencies: d.dependencies,
              ...(d.resolutions ? { resolutions: d.resolutions } : {}),
            };
          ((n = Tr(n ?? { dependencies: {} }, c)), (t = wt(t ?? { imports: {} }, u)));
        }
    if (!t || qe(t)) return !1;
    if (L.isOn("importMapPruning")) {
      let i = { ...t, imports: vr(t.imports, Ye) },
        { changed: s } = await this.modulesStorage.extendCurrentImportMap(i, {
          dependencies: {},
          scopedDependencies: r,
        });
      return s;
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
          let s = this.treeStore.tree.getNodeWithTrait(i.moduleId, W);
          return s ? h(s.codeComponentIdentifier).saveId !== i.saveId : !0;
        }),
        { includeDependencies: !1, includeStatus: !0 }
      ),
      r = new Map(),
      n = "default";
    for (let i of t) {
      let s = ct({ module: i, exportSpecifier: n }),
        l = this.treeStore.tree.getNodeWithTrait(i.id, W);
      (E(l?.codeComponentIdentifier) && h(l.codeComponentIdentifier).saveId === i.saveId) ||
        r.set(s.value, { module: i, exportSpecifier: n });
    }
    (await Promise.all(
      Array.from(r.keys(), (i) => {
        let s = h(i);
        return (
          f(s, "Identifier must be a valid module identifier"),
          this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(s).catch((l) => {
            C.error(`Failed to evaluate external module "${i}"`, l);
          })
        );
      })
    ),
      await this.updateExternalModuleNodes(Array.from(r.values()), {
        onTreeUpdate: () => {
          let i = Ii(r.keys()),
            s = this.treeStore.getDataTree(),
            l = s.query().whereClass(Ft).iterate();
          (vi(i, l), xi(i, s), Pi(i, s));
        },
        updateSave: !0,
      }));
  }
  async addOrUpdateVectorSetAndVectors(e) {
    await this.addOrUpdateExternalVectors([e]);
    let r = this.treeStore.tree.getNodeWithTrait(e.moduleId, W)?.annotation("framerVectorSet");
    kt(r) &&
      (await this.addOrUpdateExternalVectors(
        r.items.map((n) => ({ moduleId: n.moduleId, saveId: n.saveId ?? "" }))
      ));
  }
  async addExternalModulesToProject(e, t) {
    let r = e.map((i) => (typeof i == "string" ? h(i) : i)),
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
    for (let a of e) t.set(a.bareValue, a);
    if (this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0)
      return (
        await Promise.all(
          Array.from(t.values(), (a) =>
            this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(a)
          )
        ),
        []
      );
    let r = [],
      n = [],
      i = [];
    for (let [a, u] of t) {
      let { moduleId: d, saveId: c } = u;
      if (!!this.modulesStorage.getPersistedModuleByGlobalId(d)) {
        C.reportError("Attempted to treat local module as external module", { identifier: u });
        continue;
      }
      let m = this.treeStore.tree.getNode(d);
      if (
        m &&
        h(m.codeComponentIdentifier).saveId === c &&
        !this.loadedExternalModulesStore.hasModuleForIdentifier(u)
      ) {
        n.push(u);
        continue;
      }
      let y = b(this, ie).get(a);
      if (y) {
        i.push({ identifier: u, preloadPromise: y });
        continue;
      }
      (b(this, ie).set(a, new Wt()), r.push(u));
    }
    let s = new Map();
    for (let { identifier: a, preloadPromise: u } of i)
      try {
        let d = await u;
        s.set(a.value, d);
      } catch {
        (b(this, ie).set(a.bareValue, new Wt()), r.push(a));
      }
    if (r.length)
      try {
        let a = Array.from(r.values(), ({ moduleId: p, saveId: m }) => ({
            moduleId: p,
            saveId: m,
          })),
          { modules: u, dependencies: d } = await this.lookUpModules(a, {
            includeDependencies: !0,
            includeStatus: !0,
          }),
          c = 0;
        for (let p of r) {
          let m = u[c++];
          (f(m, "Module must be defined"),
            s.set(p.value, {
              module: m,
              dependencies: d?.[m.ownerType]?.[m.ownerId],
              exportSpecifier: p.exportSpecifier,
            }),
            n.push(p));
        }
      } catch (a) {
        C.reportError(a);
        for (let u of r) b(this, ie).get(u.bareValue)?.reject(a);
        throw Error(`Failed to preload modules: ${a}`);
      }
    let l = [];
    for (let a of n) {
      let u = s.get(a.value);
      u && l.push(u);
    }
    (await this.insertTemporaryImportMapForExternalModules(l),
      await Promise.all(
        Array.from(n.values(), (a) =>
          this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(a).catch((u) => {
            C.error(`Failed to evaluate external module "${a.value}"`, u);
          })
        )
      ));
    for (let a of r) {
      let u = s.get(a.value);
      f(u, () => `Expected to have module information for: ${a.value}`);
      let d = b(this, ie).get(a.bareValue);
      (f(d, () => `Expected to find a preload promise for: ${a.bareValue}`), d.resolve(u));
    }
    return [...s.values()];
  }
  async ensureLocalComponentsLoaded(e, t, r) {
    await gi(this.componentLoader, this.requestTargetedModuleLoad, e, t, r);
  }
  localModuleIsKnown(e) {
    return this.getModuleEntryByLocalId(e) ? !0 : fe(this.treeStore.tree.get(e));
  }
  requestImportMapPrune() {
    b(this, se).debounce();
  }
  async processImportMapPrune() {
    if (b(this, ve)) {
      b(this, se).debounce();
      return;
    }
    Y(this, ve, !0);
    let e = "import-map-prune";
    ne({
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
      (ne({ type: "remove", key: e }), r ? b(this, se).cancel() : b(this, se).debounce());
    } catch (r) {
      (ne({
        type: "add",
        key: e,
        text: "Failed to optimize dependencies.",
        variant: "error",
        duration: 3e3,
      }),
        C.reportError(r, { context: "Failed to prune import map", entryPointCount: t().length }));
    } finally {
      Y(this, ve, !1);
    }
  }
  async updateExternalModuleNodes(
    e,
    { onTreeUpdate: t, updateSave: r = !1, scheduleTreeUpdate: n }
  ) {
    (await this.insertTemporaryImportMapForExternalModules(e),
      await Promise.all(
        e.map((a) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(ct(a)))
      ));
    let s = await (n ?? ((a) => this.scheduler.processWhenReadyAsync(a)))(() => {
      if (this.treeStore.tree.isViewOnly) throw Error("unable to edit");
      let a = L.isOn("harness2"),
        u = new Set();
      for (let c of e) {
        let { id: p } = c.module;
        (a || this.treeStore.tree.getNode(p)?.propertyControlsBySaveId !== void 0) && u.add(p);
      }
      let d = u.size > 0 ? dt(this.componentLoader.getAllEntities(), u) : void 0;
      for (let c of e) {
        let { id: p } = c.module,
          m = this.treeStore.tree.getNode(p);
        if (m && !r) {
          let y = ct(c),
            M = this.externalModulesDynamicInfo.get(y.moduleId)?.status ?? c.module.status;
          m.set({ group: M?.group, updateSaveId: M?.updateSaveId });
        } else {
          let { type: y, metadata: M, ownerId: x, ownerType: k } = c.module,
            $ = ct(c),
            { title: Z, status: z } = this.externalModulesDynamicInfo.get($.moduleId) ?? c.module,
            F = J.get(this.treeStore.tree);
          (F || ((F = new J()), this.treeStore.tree.insertNode(F, this.treeStore.tree.root.id)),
            f(Zo(F)));
          let q = M.pluginId,
            V = {
              codeComponentIdentifier: $.value,
              type: y,
              scopeNodeId: br(c.module),
              intrinsicWidth: Tt(M.intrinsicWidth, !0) ?? 200,
              intrinsicHeight: Tt(M.intrinsicHeight, !0) ?? 200,
              ownerId: x,
              ownerType: k,
              group: z?.group,
              updateSaveId: z?.updateSaveId,
              namespaceId: c.module.lastPublish?.namespaceId,
              pluginId: g(q) ? q : void 0,
            };
          if (d) {
            let S = ut(d, p, $.saveId);
            S !== void 0 && (V.propertyControlsBySaveId = uo(m, $.saveId, S));
          }
          let O = this.componentLoader.componentForIdentifier($.value);
          f(O, () => `Component not found in the component loader: ${$.value}`);
          let ye = O.annotations ?? void 0;
          if (Vr(y)) {
            let S = Nr({ default: ye }).default;
            V.annotations = y === "vectorSet" ? Dr(S) : S;
          } else V.annotations = ye;
          let P = O.name ?? Z;
          if (((V.title = P), m)) m.set(V);
          else {
            let S = new Ar({ id: p, ...V });
            this.treeStore.tree.insertNode(S, F.id);
          }
        }
      }
      return t();
    });
    return (
      (await this.installDependenciesForExternalModules(e)) && this.requestImportMapPrune(),
      s
    );
  }
  setupPollingExternalModulesUpdates() {
    let e = Sn(() => {
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
    function s() {
      setTimeout(() => {
        i() ? r() : n();
      }, 500);
    }
    (document.addEventListener("visibilitychange", s, { signal: this.abortSignal }),
      window.addEventListener("offline", s, { signal: this.abortSignal }),
      window.addEventListener("online", s, { signal: this.abortSignal }),
      this.abortSignal?.addEventListener("abort", () => {
        ((t = !0), n());
      }),
      (this.abortSignal = void 0));
  }
  getCodeComponentNodesForExternalModuleExport(e) {
    return this.treeStore
      .query()
      .whereClass(Ft)
      .asArray()
      .filter((r) => {
        if (!G(r) || (ue(r) && !r.isVectorInstance)) return !1;
        let n = h(r.codeComponentIdentifier);
        return n?.kind !== "externalModuleExport"
          ? !1
          : n.moduleId === e.moduleId && n.exportSpecifier === e.exportSpecifier;
      });
  }
  getShaderNodesForExternalModuleExport(e) {
    return this.treeStore
      .query()
      .whereClass(jr)
      .asArray()
      .filter((r) => {
        if (ue(r)) return !1;
        let n = h(r.shaderModuleIdentifier);
        return n?.kind !== "externalModuleExport"
          ? !1
          : n.moduleId === e.moduleId && n.exportSpecifier === e.exportSpecifier;
      });
  }
  get fastRefreshEnabled() {
    return this.chromeStore.codeEditorPreviewVisible;
  }
  async updateExternalModuleComponentInstances(e) {
    let t = h(e);
    f(
      t?.kind === "externalModuleExport",
      "parsed 'ExternalModuleNodes.id' should be of kind externalModuleExport"
    );
    let { moduleId: r, exportSpecifier: n } = t,
      i = this.treeStore.tree.getNodeWithTrait(r, W),
      s = this.externalModulesDynamicInfo.get(r)?.status?.updateSaveId ?? i?.updateSaveId;
    if (!s) {
      C.warn("Could not update module", r, "latest status missing");
      return;
    }
    if (s === t.saveId) return;
    let { module: l, dependencies: a } = await this.lookUpModule(
      { moduleId: r, saveId: s },
      { includeDependencies: !0, includeStatus: !0 }
    );
    f(l.files.module, "Module file must be defined");
    let u = de(r, s, l.files.module, n);
    try {
      (await this.updateExternalModuleNodes([{ module: l, dependencies: a, exportSpecifier: n }], {
        onTreeUpdate: () => {
          let d = this.treeStore.getDataTree();
          (l.type === "shader"
            ? this.getShaderNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ shaderModuleIdentifier: u.value })
              )
            : this.getCodeComponentNodesForExternalModuleExport(t).forEach((p) =>
                p.set({ codeComponentIdentifier: u.value })
              ),
            Zr(d, t.value, u.value),
            qr(d, t.value, u.value));
        },
        updateSave: !0,
      }),
        this.trackExternalComponentInsert([u.value], "update"));
    } catch (d) {
      C.reportError(d);
    }
  }
  async replaceRelativeImportsWithImportMapSpecifiers(e, t, r) {
    let n = {};
    for (let s of r) {
      let l = wr(s, e);
      if (!l) continue;
      let a;
      if (
        ((a = this.fastRefreshModules.get(l)),
        a || (a = this.modulesStorage.getModuleWithTypeSlashName(l)),
        !a)
      ) {
        C.error("Cannot resolve", s, "from", e);
        continue;
      }
      let u,
        { name: d, localId: c } = a;
      if (a.kind === "fast-refresh") u = qt(d).module;
      else {
        let { files: p } = a;
        (f(
          g(p.module),
          "Must have a module file name to build a local module import map specifier."
        ),
          (u = p.module));
      }
      n[s] = ft(c, u);
    }
    let i = await mn(t, n);
    return (f(i.ok), i.value);
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
    if (!L.isOn("prioritizedInitialModuleEvaluation")) return t;
    let r = Yt(this.getActiveScope()),
      n = new Set();
    for (let i of r) e[i] && Zt(this.moduleDepsGraph, i, n);
    for (let i of n) e[i] && t.add(i);
    return t;
  }
  getAllModulesAsUpdateEvent() {
    let { initialized: e, modules: t, revision: r } = this.getModules(!1),
      n = this.getPrioritizedInitialModules(t),
      i = n.size > 0 ? Object.keys(t).filter((s) => !n.has(s)) : [];
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
    let t = We("screen", e, "default").value;
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
    return new Mo(this, e);
  }
};
((T = No(null)),
  (po = new WeakMap()),
  (fo = new WeakMap()),
  (mo = new WeakMap()),
  (yo = new WeakMap()),
  (ho = new WeakMap()),
  (go = new WeakMap()),
  (ze = new WeakMap()),
  (Ie = new WeakMap()),
  (Ve = new WeakMap()),
  (Ce = new WeakMap()),
  (Ae = new WeakMap()),
  (ie = new WeakMap()),
  (se = new WeakMap()),
  (ve = new WeakMap()),
  le(T, 4, "dependenciesModule", Ai, re, po),
  le(T, 4, "localModules", Vi, re, fo),
  le(T, 4, "fastRefreshModules", zi, re, mo),
  le(T, 4, "externalModulesDynamicInfo", ki, re, yo),
  le(T, 4, "revision", Di, re, ho),
  le(T, 4, "invalidSavePointerQuarantineSize", Ri, re, go),
  Ro(T, re));
var Mo = class {
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
    let t = h(e);
    if (K(t)) return this.getPersistedModuleByLocalId(t.localId);
  }
  getModuleWithTypeSlashName(e) {
    return this.modulesStorageSnapshot.getModuleWithTypeSlashName(e);
  }
};
function Fi(o) {
  return !Number.isNaN(o.getTime());
}
function Lu(o) {
  return o.match(/^\d{2}:\d{2}$/gu) !== null;
}
function Os(o) {
  return o.toISOString().split("T")[0];
}
function Tu(o) {
  let e = new Date(o);
  return Fi(e) ? Os(e) : "";
}
function bu(o) {
  let e = new Date(o);
  return Fi(e)
    ? `${e.getUTCHours().toString().padStart(2, "0")}:${e.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var wu = (() => {
    let o = null;
    return () => {
      if (vt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "date"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  Nu = (() => {
    let o = null;
    return () => {
      if (vt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "time"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  So = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function Io(o) {
  return So.test(o);
}
function Ru(o) {
  if (!o) return;
  if (Io(o)) return o;
  let e = new Date(o).toISOString();
  return (f(Io(e), "Date format is not valid"), e);
}
function _s(o) {
  So.exec(o);
  let e = So.exec(o);
  f(e, "The provided date cannot have conformed to StandardZuluDateString");
  let [, t, r, n, i, s, l, a] = e;
  return [t, r, n, i, s, l, a];
}
function Du([o, e, t, r, n, i, s]) {
  let l = `${o}-${e}-${t}T${r}:${n}:${i}.${s}Z`;
  return (f(Io(l)), l);
}
function ku(o) {
  let [e, t, r] = _s(o);
  return `${r}/${t}/${e}`;
}
function vo(o) {
  return Re(o).componentLoader;
}
function Us(o, e, t) {
  let r = o.reactComponentForIdentifier(e.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (Qe(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function Ws(o, e, t) {
  if (!ar(e)) return;
  let r = o.reactComponentForIdentifier(e.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (Qe(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function js(o, e, t, r) {
  let s = o.getNodeParent(t).getPropertyControls(o, e)[r.controlPropKey];
  if (!s) return;
  let l = t.getControlProp(r.controlPropKey);
  return Qe(s, l) ?? void 0;
}
function Ui(o, e, t, r) {
  if (X(t, !0)) return Ws(e, t, r);
  if (U(t)) return js(o, e, t, r);
  if (G(t)) return Us(e, t, r);
}
function Fe(o, e, t, r) {
  let n = Ui(o, e, t, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let i = Gt(r.ancestorControlKeyPath);
  for (let s of i) {
    if (!n) return;
    if ((f(n.type === s.type), n.type === "object")) {
      if ((f(s.type === "object"), !_(n.value))) return;
      n = n.value[s.key];
    } else if (n.type === "array") {
      if ((f(s.type === "array"), !mt(n.value))) return;
      n = n.value.find((l) => l.id === s.id);
    } else {
      return;
    }
  }
  return n;
}
function N(o, e) {
  o.set(e, void 0, !1, !1);
}
function Bi(o, e, t) {
  N(o, { [sr(e)]: t });
}
function Be(o, e, t, r, n) {
  if (!r.ancestorControlKeyPath) {
    hr(t)
      ? Bi(t, r.controlPropKey, n)
      : U(t)
        ? (f(Kt(n), "Invalid control prop"), t.setControlProp(r.controlPropKey, n))
        : j(t, "Unsupported node");
    return;
  }
  f(X(t, !0) || G(t) || U(t));
  function i(u) {
    if (u) return u.type === "array" || u.type === "object" ? { ...u } : (f(u.type === n.type), n);
  }
  let s = i(Ui(o, e, t, r));
  if (!s) return;
  let l = Gt(r.ancestorControlKeyPath),
    a = s;
  for (let u of l) {
    if (!a) return;
    if ((f(a.type === u.type), a.type === "object")) {
      if ((f(u.type === "object", "Current control should be of type Object"), !_(a.value))) return;
      let d = a.value[u.key],
        c = i(d);
      if (!c) return;
      ((a.value = { ...a.value, [u.key]: c }), (a = c));
    } else if (a.type === "array") {
      if ((f(u.type === "array", "Current control should be of type Array"), !mt(a.value))) return;
      let d = a.value.find((p) => p.id === u.id),
        c = i(d);
      if (!c) return;
      ((a.value = a.value.map((p) => (p.id === c.id ? c : p))), (a = c));
    } else {
      return;
    }
  }
  X(t, !0) || G(t)
    ? Bi(t, r.controlPropKey, s)
    : U(t)
      ? (f(Kt(s), "Invalid control prop"), t.setControlProp(r.controlPropKey, s))
      : j(t, "Unsupported node");
}
function v(o, e, t, r) {
  let n = e ? e[o] : void 0,
    i = r(n, t);
  if (!(!e && !i)) {
    if (!i) {
      f(e);
      let s = Object.keys(e),
        l = s.length;
      if (l === 0 || (l === 1 && s[0] === o)) return;
      let a = { ...e };
      return (delete a[o], a);
    }
    return { ...e, [o]: i };
  }
}
function Co(o, e, t, r, n) {
  function i(s) {
    function l(a) {
      return a.name === r.type;
    }
    return {
      ...s,
      transforms: s.transforms.map((a) => (a.id !== r.transformId || !l(a) ? a : n(a))),
    };
  }
  if (Ke(t) && $e(t.textContent)) {
    let s = i(t.textContent);
    N(t, { textContent: s });
    return;
  }
  if (St(t) && $e(t.formInputPlaceholder)) {
    let s = i(t.formInputPlaceholder);
    N(t, { formInputPlaceholder: s });
    return;
  }
  if (G(t)) {
    let s = vo(o),
      l = Fe(e, s, t, r);
    if (!l || (f(l.type === "string"), !$e(l.value))) return;
    let a = { ...l };
    ((a.value = i(l.value)), Be(e, s, t, r, a));
  }
}
function Wi(o, e, t, r, n, i) {
  o.scheduler.process(() => {
    let s = o.stores.treeStore.getDataTree(),
      l = vo(o),
      a = s.get(e.nodeId),
      u = e.type;
    switch (u) {
      case "string":
      case "richtext":
      case "link": {
        if (!U(a) && !G(a) && !X(a)) return;
        let d = Fe(s, l, a, e);
        if (!d) break;
        f(u === d.type);
        let c = { ...d },
          p = v(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = p), Be(s, l, a, e, c));
        break;
      }
      case "slug": {
        if (!U(a)) return;
        let d = Fe(s, l, a, e);
        f(d?.type === "string", "expected slug control type to be a ControlType.String");
        let c = { ...d },
          p = v(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = p), Be(s, l, a, e, c));
        break;
      }
      case "image": {
        if (!U(a) && !G(a) && !X(a)) return;
        let d = Fe(s, l, a, e);
        if (!d) break;
        f(u === d.type);
        let c = { ...d };
        if (r === "imageSrc" || r === "all") {
          let p = v(t.id, d.valueLocalized, "imageSrc", n);
          c.valueLocalized = p;
        }
        if (r === "default" || r === "all") {
          let p = v(t.id, d.altLocalized, "default", n);
          c.altLocalized = p;
        }
        Be(s, l, a, e, c);
        break;
      }
      case "enum": {
        if (!Me(a)) return;
        let d = a.variables.map((c) => {
          if (c.id !== e.variableId) return c;
          f(c.type === e.type);
          let p = c.cases.map((m) => {
            if (m.id !== e.enumCaseId) return m;
            let y = v(t.id, m.nameLocalized, "default", n);
            return { ...m, nameLocalized: y };
          });
          return { ...c, cases: p };
        });
        N(a, { variables: d });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!Ur(a)) return;
        let d = e.key === "title" ? "titleLocalized" : "descriptionLocalized",
          c = a[d],
          p = v(t.id, c, "default", n);
        N(a, { [d]: p });
        break;
      }
      case "RichTextNode": {
        if (!Ke(a)) return;
        let d = v(t.id, a.htmlLocalized, "default", n);
        (N(a, { htmlLocalized: d }), Vt(a) && Ge(o) && Ot(o, Bt(o, [a.id])).catch(Q));
        break;
      }
      case "FrameNode": {
        if (!Ko(a)) return;
        if (r === "imageSrc" || r === "all") {
          let d = v(t.id, a.fillImageLocalized, "imageSrc", n);
          N(a, { fillImageLocalized: d });
        }
        if (r === "default" || r === "all") {
          let d = v(t.id, a.altAttributeLocalized, "default", n);
          N(a, { altAttributeLocalized: d });
        }
        break;
      }
      case "nodeLink": {
        if (!_r(a)) break;
        let d = v(t.id, a.linkLocalized, "default", n);
        N(a, { linkLocalized: d });
        break;
      }
      case "prefix":
      case "suffix": {
        if (!a) break;
        Co(o, s, a, e, (d) => {
          let c = { ...d },
            p = v(t.id, d.valueLocalized, "default", n);
          return ((c.valueLocalized = p), c);
        });
        break;
      }
      case "convertFromBoolean": {
        if (!a) break;
        Co(o, s, a, e, (d) => {
          let c = { ...d };
          return (
            e.property === "truthy" &&
              (c.truthyLocalized = v(t.id, d.truthyLocalized, "default", n)),
            e.property === "falsy" && (c.falsyLocalized = v(t.id, d.falsyLocalized, "default", n)),
            e.property === "fallback" &&
              d.fallback &&
              (c.fallback = {
                ...d.fallback,
                valueLocalized: v(t.id, d.fallback.valueLocalized, "default", n),
              }),
            c
          );
        });
        break;
      }
      case "convertFromEnum": {
        if (!a) break;
        Co(o, s, a, e, (d) => {
          let c = { ...d };
          return e.isDefaultCase
            ? ((c.defaultLocalized = v(t.id, d.defaultLocalized, "default", n)), c)
            : ((c.cases = d.cases.map((p) => {
                if (p.id !== e.caseId) return p;
                let m = { ...p },
                  y = v(t.id, p.toLocalized, "default", n);
                return ((m.toLocalized = y), m);
              })),
              c);
        });
        break;
      }
      case "FormPlainTextInputNode": {
        if (!St(a)) return;
        N(a, {
          formInputPlaceholderLocalized: v(t.id, a.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!It(a) || !a.formSelectOptions) return;
        let { optionId: d } = e,
          c = a.formSelectOptions.map((p) => {
            if (p.id !== d) return p;
            let m = v(t.id, p.titleLocalized, "default", n);
            return { ...p, titleLocalized: m };
          });
        N(a, { formSelectOptions: c });
        break;
      }
      case "formSelectGenericOption": {
        if (!It(a)) return;
        let { key: d } = e;
        switch (d) {
          case "allItemsLabel": {
            let c = v(t.id, a.allItemsLabelLocalized, "default", n);
            N(a, { allItemsLabelLocalized: c });
            break;
          }
          case "booleanTrueLabel": {
            let c = v(t.id, a.booleanTrueLabelLocalized, "default", n);
            N(a, { booleanTrueLabelLocalized: c });
            break;
          }
          case "booleanFalseLabel": {
            let c = v(t.id, a.booleanFalseLabelLocalized, "default", n);
            N(a, { booleanFalseLabelLocalized: c });
            break;
          }
          default:
            j(d);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!Ho(a)) return;
        let d = a.segmentLocalized,
          c = v(t.id, d, "default", n);
        N(a, { segmentLocalized: c });
        break;
      }
      default:
    }
  }, i);
}
function Ks(o, e, t, r, n) {
  o.scheduler.process(() => {
    let i = o.stores.treeStore.getDataTree(),
      s = vo(o),
      l = i.get(e.nodeId),
      a = e.type;
    if (dn(e)) {
      if (!U(l) && !G(l) && !X(l)) return;
      let u = Fe(i, s, l, e);
      if (!u) return;
      f(u.type === "richtext");
      let d = structuredClone(u);
      ((d.valueLocalized = v(t.id, u.valueLocalized, "default", r)), Be(i, s, l, e, d));
    } else {
      (f(a === "RichTextNode"), f(Ke(l)));
      let u = v(t.id, l.htmlLocalized, "default", r);
      (N(l, { htmlLocalized: u }), Vt(l) && Ge(o) && Ot(o, Bt(o, [l.id])).catch(Q));
    }
  }, n);
}
function Oi(
  o,
  e,
  t,
  r,
  n,
  {
    needsReview: i,
    generatedByAI: s,
    pluginId: l,
    pluginMode: a,
    ignoreTracking: u,
    trackingSource: d,
  }
) {
  let c = { value: o, hash: $s(e, t), lastEdited: Date.now() };
  i && (c.needsReview = !0);
  let p = Fo(n?.value, o);
  return (
    (s || (p && n?.generatedByAI)) && (c.generatedByAI = !0),
    l || yt(a)
      ? (f(l && yt(a), "Cannot set only pluginId or pluginMode"),
        (c.pluginId = l),
        (c.pluginMode = a))
      : p &&
        n?.pluginId &&
        ((c.pluginId = n.pluginId), n.pluginMode && (c.pluginMode = n.pluginMode)),
    u ||
      ee(n ? "localized_value_update" : "localized_value_create", {
        code: r.code,
        valueLength: typeof o == "string" ? o.length : 0,
        generatedByAI: !!c.generatedByAI,
        source: d,
      }),
    c
  );
}
function $s(o, e) {
  switch (e) {
    case "default":
      return o.hash;
    case "imageSrc":
      return (f(et(o)), o.imageHash);
    default:
      j(e);
  }
}
function Gs(o, e) {
  if (!e.draft) return;
  let t = o.stores.localizationStore.progressPerLocale[e.id];
  !ge(t) ||
    t === 1 ||
    o.scheduler.runBeforeNextFrame(() => {
      o.stores.localizationStore.getCurrentExactProgressForLocale(o, e.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (o.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          o.stores.modalStore.set({ type: "LocaleReady", activeLocale: e, source: "automatic" }));
    });
}
function Hs(o, e) {
  if (!o.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let t = o.stores.treeStore.getDataTree().get(e.nodeId);
  if (!Me(t) && !U(t)) return;
  let r = Me(t) ? t.id : t.parentid;
  r && o.stores.codeGenerationStore.updateComponent(r).catch(Q);
}
function _i(o, e, t) {
  Ge(o) && (Gs(o, t), Hs(o, e));
}
function ji(o, e, t, r, n) {
  let {
    needsReview: i,
    generatedByAI: s,
    pluginId: l,
    pluginMode: a,
    ignoreTracking: u,
    target: d = "default",
    trackingSource: c,
    preserveExistingTextType: p,
    eventType: m,
  } = n;
  if (e !== null && typeof e != "string") {
    (Ks(
      o,
      t,
      r,
      (y) =>
        Oi(e, t, d, r, y, {
          needsReview: i,
          generatedByAI: s,
          pluginId: l,
          pluginMode: a,
          ignoreTracking: u,
          trackingSource: c,
        }),
      m
    ),
      _i(o, t, r));
    return;
  }
  (Wi(
    o,
    t,
    r,
    d,
    (y) => {
      let M = Oi(e, t, d, r, y, {
        needsReview: i,
        generatedByAI: s,
        pluginId: l,
        pluginMode: a,
        ignoreTracking: u,
        trackingSource: c,
      });
      if (
        (d === "imageSrc" &&
          ("imageFocalPoint" in n
            ? n.imageFocalPoint && (M.imageFocalPoint = n.imageFocalPoint)
            : y?.imageFocalPoint && (M.imageFocalPoint = y.imageFocalPoint)),
        p)
      )
        if (d === "default") {
          let x = t.localizedValues[r.id],
            k = x?.value ?? null;
          (f(k === e, "The text type can only be preserved when the source value is unchanged"),
            x?.type && (M.type = x.type));
        } else d === "imageSrc" || j(d);
      else ln(t) && (M.type = "rich-text");
      return M;
    },
    m
  ),
    _i(o, t, r));
}
function Ki(o, e) {
  let t = o.localizedValues[e.id];
  return t ? t.value : null;
}
function lc(o, e, t, r) {
  let n = "default",
    i = Ki(e, t),
    s = e.localizedValues[t.id];
  if (et(e)) {
    let l = e.imageLocalizedValues[t.id];
    l && ((n = "imageSrc"), (i = l.value), (s = l));
  }
  (ji(o, i, e, t, {
    needsReview: !0,
    ignoreTracking: !0,
    target: n,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    ee("localized_value_request_review", {
      code: t.code,
      valueLength: typeof i == "string" ? i.length : 0,
      generatedByAI: !!s?.generatedByAI,
      source: r,
    }));
}
function dc(o, e, t, { trackingSource: r, ignoreTracking: n }) {
  let i = "default",
    s = Ki(e, t),
    l = e.localizedValues[t.id];
  if (et(e)) {
    let a = e.imageLocalizedValues[t.id];
    a && ((i = "imageSrc"), (s = a.value), (l = a));
  }
  (ji(o, s, e, t, {
    ignoreTracking: !0,
    target: i,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    n ||
      ee("localized_value_approve", {
        code: t.code,
        valueLength: typeof s == "string" ? s.length : 0,
        generatedByAI: !!l?.generatedByAI,
        source: r,
      }));
}
function uc(o, e, t, { target: r, ignoreTracking: n, trackingSource: i, eventType: s }) {
  Wi(
    o,
    e,
    t,
    r,
    (l) => {
      let a = l?.value;
      n ||
        ee("localized_value_clear", {
          code: t.code,
          valueLength: typeof a == "string" ? a.length : 0,
          generatedByAI: !!l?.generatedByAI,
          source: i,
        });
    },
    s
  );
}
export {
  ma as a,
  bn as b,
  Qi as c,
  Ji as d,
  Wa as e,
  ja as f,
  Wn as g,
  jn as h,
  gl as i,
  Jt as j,
  Yn as k,
  Cl as l,
  bs as m,
  De as n,
  Gl as o,
  Re as p,
  ao as q,
  Hl as r,
  Zl as s,
  ql as t,
  Js as u,
  ea as v,
  ta as w,
  oa as x,
  sa as y,
  Ln as z,
  Tn as A,
  aa as B,
  re as C,
  Fi as D,
  Lu as E,
  Tu as F,
  bu as G,
  wu as H,
  Nu as I,
  Ru as J,
  _s as K,
  Du as L,
  ku as M,
  ji as N,
  lc as O,
  dc as P,
  uc as Q,
};
//# sourceMappingURL=chunk-YJNHEMQ4.mjs.map
