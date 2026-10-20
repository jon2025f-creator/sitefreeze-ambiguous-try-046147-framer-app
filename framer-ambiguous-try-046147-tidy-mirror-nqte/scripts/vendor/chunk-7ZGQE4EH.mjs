import { d as Sn, f as In } from "chunk-ZINLNOD6.mjs";
import {
  E as Gt,
  K as ln,
  L as dn,
  Z as un,
  _ as cn,
  a as rn,
  aa as tt,
  b as nn,
  c as sn,
  d as an,
  ta as pn,
} from "chunk-RVQEWJVJ.mjs";
import {
  Bc as Gr,
  Cc as et,
  Dc as Hr,
  Eg as Xr,
  Fc as _t,
  Gg as Jr,
  Ig as en,
  Oa as Ut,
  Xj as Ht,
  Yj as Zt,
  Zh as on,
  Zj as Yt,
  dd as Zr,
  dk as rt,
  ek as hn,
  ih as tn,
  lk as gn,
  mk as Mn,
  qg as Qr,
  si as ot,
  ti as te,
} from "chunk-NDA7TJ75.mjs";
import { a as Mr } from "chunk-F43WIRYU.mjs";
import { a as Cn } from "chunk-V3C5CSFI.mjs";
import { S as Kt } from "chunk-YXWOBBXN.mjs";
import { nd as jr, oc as _r, q as At } from "chunk-GNFCEJQ4.mjs";
import { Lc as Bt, Oc as Ot, Tb as Wr, w as Or } from "chunk-NFZZJP2S.mjs";
import { f as Kr } from "chunk-WTJMIVM3.mjs";
import { f as $r, i as jt, n as mn, o as yn, s as qt } from "chunk-7ZCOVLUS.mjs";
import { w as we, x as fn } from "chunk-SCHNEKMH.mjs";
import {
  $h as vr,
  Ci as br,
  Eh as gr,
  Fi as wr,
  Hi as Dt,
  Li as Nr,
  Ml as zr,
  Mq as Ur,
  Rh as Sr,
  Sh as Ye,
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
  Zl as Je,
  ai as xr,
  am as fe,
  ck as Xe,
  cl as Rr,
  d as jo,
  dl as Dr,
  el as kt,
  fl as kr,
  gb as nr,
  hp as Br,
  ki as Qe,
  kt as Vt,
  lb as ir,
  ni as Rt,
  nn as be,
  pi as Pr,
  rn as zt,
  si as Er,
  sw as Ft,
  tf as Tt,
  th as hr,
  ui as Lr,
  ve as ce,
  vi as Tr,
  we as yr,
} from "chunk-EAOREBCS.mjs";
import {
  Aa as Uo,
  Ba as je,
  Bn as dr,
  Ca as h,
  Gm as lr,
  Ha as _o,
  Ja as mt,
  Kn as ur,
  Kp as fr,
  Mi as ue,
  Mj as rr,
  Na as Mt,
  Sd as Ge,
  Tb as It,
  Un as cr,
  Vb as Ct,
  Vi as tr,
  Vn as Et,
  Xn as Lt,
  Zk as xt,
  Zn as pr,
  bl as sr,
  cr as H,
  db as Ko,
  eb as Ke,
  fj as or,
  gb as St,
  gc as Ho,
  hr as Ze,
  ir as qe,
  kb as $o,
  lb as Go,
  m as We,
  mc as Zo,
  me as Yo,
  nb as X,
  nc as W,
  oe as Qo,
  om as ar,
  pe as Xo,
  ra as Bo,
  sa as w,
  sb as $e,
  ta as K,
  tb as G,
  ua as P,
  ui as er,
  wa as de,
  wr as mr,
  xa as ge,
  xb as Se,
  ya as Oo,
  yb as _,
  yn as Pt,
} from "chunk-CTWHQDBP.mjs";
import { c as ne } from "chunk-YXZOQYF3.mjs";
import { a as $t } from "chunk-4HRYW54D.mjs";
import { a as Yr } from "chunk-IYK2LPJT.mjs";
import { v as qr } from "chunk-SBF7ONCV.mjs";
import { f as ee } from "chunk-WHGFMSXI.mjs";
import { a as Wt } from "chunk-24G7FGVN.mjs";
import { g as Te } from "chunk-K3IJ2B65.mjs";
import { d as He, f as pe } from "chunk-DTWGL5WL.mjs";
import { a as Fo } from "chunk-KQKA2AEH.mjs";
import { b as qo } from "chunk-YSP5ZHDJ.mjs";
import { b as Vo } from "chunk-AUNF3KWQ.mjs";
import { a as vt } from "chunk-AYNVEX5D.mjs";
import { a as Ao } from "chunk-2FCXHKEL.mjs";
import { p as L } from "chunk-ZG3BUZVU.mjs";
import {
  a as Wo,
  b as g,
  e as Me,
  f as U,
  k as yt,
  n as Le,
  o as ht,
  q as gt,
} from "chunk-Y3GZLMBF.mjs";
import { b as f, c as j } from "chunk-4JY5UMT2.mjs";
import { b as ft } from "chunk-AAB6RPWQ.mjs";
import { b as Q, i as he } from "chunk-GOPQO4KR.mjs";
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
var vn = [ce.video, ce.youtube, ce.vimeo, ce.codeblock, ce.twitter, ce.embed];
function oa(o, e) {
  let t = h(e);
  return K(t)
    ? t.type === "canvasComponent"
    : w(t)
      ? o.tree.getNodeWithTrait(t.moduleId, W)?.type === "canvasComponent"
      : !1;
}
async function ra(o, e) {
  let t = h(e);
  w(t) && (await o.stores.modulesStore.addExternalModulesToProject([t], { onTreeUpdate() {} }));
}
var Pn = new WeakMap();
async function na(o) {
  let { modules: e } = await o.stores.modulesStore.lookUpModules(vn.map(yr)),
    t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    f(n, "Module must exist");
    let i = vn[r];
    (f(i, "Module component must exist"),
      Pn.set(i, n),
      f(n.files.module, "Module must have a module file"),
      t.push(de(n.id, n.saveId, n.files.module, i.exportSpecifier ?? "default")));
  }
  await o.stores.modulesStore.preloadExternalModules(t);
}
function ia(o, e) {
  let t = Pn.get(e);
  f(t, "Preloaded module must exist");
  let r = o.getNodeWithTrait(t.id, W);
  return r
    ? r.codeComponentIdentifier
    : (f(t.files.module, "Module must have a module file"),
      de(t.id, t.saveId, t.files.module, e.exportSpecifier ?? "default").value);
}
var oe = wo(Ao(), 1),
  En = "dismissedInstantNPMToast",
  Ln = "showedInstantNPMToast",
  Tn = "instant-npm-toast",
  da = () => window.localStorage.getItem(Ln) === "true",
  bn = () => window.localStorage.getItem(En) === "true";
function Qi() {
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
function wn() {
  (window.localStorage.setItem(Ln, "true"),
    ne({
      type: "add",
      variant: "info",
      text: (0, oe.jsx)(Qi, {}),
      key: Tn,
      duration: 1 / 0,
      showCloseButton: "never",
      action: { title: "Dismiss", onClick: () => window.localStorage.setItem(En, "true") },
    }));
}
function ua() {
  ne({ type: "remove", key: Tn });
}
function ga(o, e, t) {
  let r = e && o.getNode(e);
  if (!r || !ue(r)) return t(e, {}, !1);
  let n = ir(o, r) ? {} : { visible: !1 },
    i = t(r.originalid, n, !0);
  if (i === void 0) return;
  let s = gr.getReplicaForTemplateNode(o, r);
  return s ? (n.visible === !1 && Mr(o, s, i, { visible: !0 }), jo(s.id, i)) : i;
}
function Nn(o, e, t = o.id) {
  let r = o.children;
  return Yo(o) ? (!r || r.length === 0 ? [] : (e.getChildrenRects(t) ?? [])) : null;
}
var Xi = { track: !0 };
function Rn(o) {
  let e = { ...o, event: "external_component_insert" };
  Vo(e, Xi);
}
var Dn = 4,
  kn = 20;
function zn(o, e, t) {
  f(e.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: r, index: n } = We.closestRect(e, t),
    i = Xo(o),
    s = Qo(o) ? !i : o.resolveValue("stackDirection") === "horizontal",
    l = s ? "x" : "y",
    a = s ? "y" : "x",
    u = s ? "width" : "height",
    d = s ? "height" : "width",
    c = t[l] < r[l] + r[u] / 2,
    p = i && Me(o.gridColumnCount) ? Math.max(Math.floor(o.gridColumnCount), 1) : 1,
    m = c ? n - p : n + p,
    y = e[m],
    M = !y || (c ? y[l] >= r[l] : r[l] >= y[l]),
    x = c ? n : Math.min(n + p, e.length);
  if (M) {
    let k = c ? r[l] + Dn : r[l] + r[u] - Dn;
    return {
      insertionIndex: x,
      localInsertionLine: { a: nt(l, k, r[a]), b: nt(l, k, r[a] + Math.max(r[d], kn)) },
    };
  } else {
    let k = c ? (y[l] + y[u] + r[l]) / 2 : (r[l] + r[u] + y[l]) / 2;
    return {
      insertionIndex: x,
      localInsertionLine: {
        a: nt(l, k, Math.min(y[a], r[a])),
        b: nt(l, k, Math.max(y[a] + y[d], r[a] + Math.max(r[d], kn))),
      },
    };
  }
}
function nt(o, e, t) {
  return o === "x" ? { x: e, y: t } : { x: t, y: e };
}
var Vn = 10;
function Ji(o, e) {
  for (let t of o) if (e.includes(t)) return !0;
  return !1;
}
function es(o, e, t, r, n) {
  if (n.length === 0 || o.stackWrapEnabled || tr(o) || ue(o)) return null;
  let { tree: i } = e,
    { zoom: s } = e.stores.canvasStore,
    l = i.getParent(o.id);
  if (l && Ke(l) && (l.stackDirection !== o.stackDirection || l.stackWrapEnabled)) return null;
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
    F = We.merge(...n),
    q = F[c],
    V = q + F[m],
    O = Math.max(z, q / 2),
    ye = Math.max(z, (M - V) / 2),
    E = Z <= O,
    S = Z >= M - ye;
  if (!E && !S) return null;
  let I = E ? 0 : 1,
    ae = r[y],
    xo = 4 / s,
    Po = E ? xo : M - xo,
    Eo = x / 2,
    Lo = ae / 2,
    To = x / 3,
    bo = a[p],
    Pe = "end";
  ae > x ? (Pe = "center") : bo < To ? (Pe = "start") : bo < 2 * To && (Pe = "center");
  let _e, Ee;
  switch (Pe) {
    case "start": {
      ((_e = 0), (Ee = ae));
      break;
    }
    case "end": {
      ((Ee = x), (_e = Ee - ae));
      break;
    }
    default: {
      ((_e = Eo - Lo), (Ee = Eo + Lo));
      break;
    }
  }
  let Hi = { [c]: Po, [p]: _e },
    Zi = { [c]: Po, [p]: Ee },
    qi = be(i, o, Hi),
    Yi = be(i, o, Zi);
  return { insertionIndex: I, insertionLine: { a: qi, b: Yi }, wrap: { wrapAlignment: Pe } };
}
function ts(o, e, t, r, { allowWrapping: n = !0 } = {}) {
  if (!Pt(o)) return { insertionIndex: null, insertionLine: null };
  let i = Nn(o, e.stores.layoutCache);
  if (!i) return { insertionIndex: null, insertionLine: null };
  if (Ke(o) && n) {
    let c = es(o, e, t, r, i);
    if (c) return c;
  }
  let s = e.tree,
    l = zt(s, o, t);
  if (i.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: a, localInsertionLine: u } = zn(o, i, l),
    d = { a: be(s, o, u.a), b: be(s, o, u.b) };
  return { insertionIndex: a, insertionLine: d };
}
var os = { width: 10, height: 10 };
function $a(o, e, t, r, n = !1) {
  f(t.length, "getStackOrGridInRange(): expects at least a single selected node");
  let i = o.stores.scopeStore.active;
  if (t.some(Jo)) return null;
  let l = Or(o.tree, i, e)
    .filter(
      (d) =>
        !(
          (Br(d) && d.locked) ||
          !Pt(d) ||
          tn(d) ||
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
    if ((c.push(d.id), Ji(c, u) || (a || (a = d), !St(d)))) continue;
    let { insertionLine: m } = ts(d, o, e, os);
    if (!m) continue;
    if (m.a.x === m.b.x) {
      if (Math.abs(e.x - m.a.x) * o.stores.canvasStore.zoom > Vn) continue;
    } else if (m.a.y === m.b.y) {
      if (Math.abs(e.y - m.a.y) * o.stores.canvasStore.zoom > Vn) continue;
    } else continue;
    if (t.every((M) => At(o.tree, d, M, i.id, o.componentLoader))) return d;
  }
  if (St(a)) {
    let d = a;
    if (t.every((p) => At(o.tree, d, p, i.id, o.componentLoader))) return a;
  }
  return null;
}
function Ga(o, e, { wrapAlignment: t }) {
  let r = on.addStack(o, [e]);
  if (!r) return null;
  let n = o.tree.getNode(r);
  return !n || !Ke(n)
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
  let n = h(o.identifier);
  if (!(!n || !P(n))) {
    if (K(n)) {
      let i = e.getObjectKey(n.localId, "save");
      if (te(n.type)) {
        let a = it(i?.propertyControls);
        if (a !== void 0) return Hn(a, n.exportSpecifier, r, t);
      }
      let s = i?.moduleId,
        l = o.moduleId ?? (typeof s == "string" ? s : void 0);
      return l ? An(l, void 0, n.exportSpecifier, r, e, t) : void 0;
    }
    if (w(n)) return An(o.moduleId ?? n.moduleId, n.saveId, n.exportSpecifier, r, e, t);
  }
}
function An(o, e, t, r, n, i) {
  return Hn(jn(o, e, n), t, r, i);
}
function jn(o, e, t) {
  let r = e ?? is(o, t);
  if (!r) return;
  let n = t.getObjectKey(o, "propertyControlsBySaveId");
  if (U(n)) return it(n[r]);
}
function is(o, e) {
  let t = e.getObjectKey(o, "codeComponentIdentifier");
  if (!g(t)) return;
  let r = h(t);
  return w(r) ? r.saveId : void 0;
}
function it(o) {
  if (o === null) return null;
  if (!U(o)) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    if (!U(r)) return;
    let n = {};
    (g(r.controls) && (n.controls = r.controls),
      g(r.displayName) && (n.displayName = r.displayName),
      g(r.type) && (n.type = r.type),
      g(r.outputControls) && (n.outputControls = r.outputControls),
      (e[t] = n));
  }
  return e;
}
function ss(o, e) {
  if (!g(o)) return;
  let t = e.get(o);
  if (t !== void 0) return t ?? void 0;
  let r = as(o);
  return (e.set(o, r ?? null), r);
}
function as(o) {
  try {
    let e = JSON.parse(o);
    if (!U(e)) return;
    let t = {};
    for (let r in e) {
      let n = e[r];
      if (!U(n)) return;
      t[r] = n;
    }
    return t;
  } catch {
    return;
  }
}
function Ie(o) {
  return o === null ? !0 : it(o) !== void 0;
}
function Fn(o, e, t) {
  if (o === null || typeof o == "string") return;
  let r = o?.[e]?.[t];
  return g(r) ? r : void 0;
}
function Kn(o, e) {
  return Gn(o, e, "displayName");
}
function $n(o, e) {
  return Gn(o, e, "type");
}
function Gn(o, e, t) {
  let r = h(o);
  if (!(!r || !P(r))) {
    if (K(r)) {
      if (te(r.type)) {
        let n = e.getObjectKey(r.localId, "save");
        return Fn(it(n?.propertyControls), r.exportSpecifier, t);
      }
      return;
    }
    if (w(r)) return Fn(jn(r.moduleId, r.saveId, e), r.exportSpecifier, t);
  }
}
function Hn(o, e, t, r) {
  if (o === null) return null;
  if (typeof o == "string") return;
  let n = o?.[e];
  if (n) return ss(n[t], r);
}
function ls(o, e) {
  if (!(!o || !P(o)))
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
function ds(o, e, t) {
  let r = us(e, o.entityIdentifier),
    n = h(r);
  if (!(!n || !P(n)))
    return {
      type: "controlReference",
      controlKey: o.controlKey,
      title: o.name || "Unknown",
      description: o.description,
      defaultValue: o.initialValue,
      optional: Ze(o, t) ? !0 : void 0,
      __defaultAssetReference:
        o.expectedType === "file" && g(o.initialValue) ? o.initialValue : void 0,
      module: { identifier: n.value, moduleId: ls(n, e) },
    };
}
function us(o, e) {
  let t = h(e);
  if (!w(t)) return e;
  let r = o.getObjectKey(t.moduleId, "codeComponentIdentifier");
  return g(r) ? r : e;
}
function Bn(o, e) {
  en(e) && (o[an(e.id)] = { type: "changehandler", changes: e.id });
}
function st(o, e) {
  let t = o.getObjectKey(e, "variables");
  if (t === void 0 && o.has(e)) return [];
  if (!Array.isArray(t)) return;
  let r = [];
  for (let n of t) qe(n) && r.push(n);
  return r;
}
function cs(o, e, t) {
  let r = st(e, o);
  if (!r) return;
  let n = je("collection", o, "default").value,
    i = Ne(r, e, "ContentManagement", !1, {}, t),
    s = e.getObjectKey(o, "name"),
    l = lr({ name: g(s) && s ? s : void 0, dataIdentifier: n });
  return Ne(l, e, "ContentManagement", !1, i, t);
}
function Xt(o, e, t, r) {
  let n = e.name || "Unknown",
    i = Ze(e, t) ? !0 : void 0;
  switch (e.type) {
    case "array":
      return ps(o, e, t, r);
    case "object":
      return fs(o, e, t, r);
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
                ...(Et(e.initialValue) && g(e.initialValue.alt) ? { alt: e.initialValue.alt } : {}),
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
      return { type: "string", title: n, description: e.description, preventLocalization: ys(o) };
    case "nodePropertyControlReference":
    case "controlReference":
      return null;
    default:
      j(e);
  }
}
function ps(o, e, t, r) {
  let n = {},
    i = mr(e);
  for (let s of e.itemVariables) {
    if (!qe(s)) continue;
    let l = Xt(o, s, t, r),
      a = l ? we({ control: l }).control : void 0;
    if (!(!a || !Mt(a))) {
      if (i) {
        (f(a.type === "responsiveimage", "Gallery array items must be responsive images"),
          (n[s.id] = ms(a)));
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
      if (!s || s.type !== "object" || !U(s.value)) return l;
      for (let a of e.itemVariables) {
        if (a.type === "divider") continue;
        let u = s.value[a.id];
        if (!u) continue;
        let d = Zn(u, a.type);
        Le(d) || (l[a.id] = d);
      }
      return l;
    }),
  };
}
function fs(o, e, t, r) {
  let n = {};
  for (let l of e.fieldVariables) {
    let a = Xt(o, l, t, r),
      u = a ? we({ control: a }).control : void 0;
    !u || !Mt(u) || (n[l.id] = u);
  }
  let i = Ze(e, t),
    s = {};
  if (!i)
    for (let l of e.fieldVariables) {
      let a = Zn(e.initialValue[l.id], l.type);
      Le(a) || (s[l.id] = a);
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
function ms(o) {
  let { __defaultAssetReference: e, __vekterDefault: t, ...r } = o;
  return r;
}
function Zn(o, e) {
  if (xt(o) && o.type === e)
    switch (e) {
      case "image": {
        if (!g(o.value)) return;
        let t = Lt(o);
        return {
          assetReference: o.value,
          alt: Et(o) ? o.alt : void 0,
          positionX: t ? o.positionX : void 0,
          positionY: t ? o.positionY : void 0,
        };
      }
      case "boolean":
        return Wo(o.value) ? o.value : void 0;
      case "number":
        return Me(o.value) ? o.value : void 0;
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
        return g(o.value) && P(o.value) ? o.value : void 0;
      default:
        j(e);
    }
}
function ys(o) {
  let e = o.getHierarchy().getRootId();
  if (!e) return !1;
  let t = o.getObjectKey(e, "webMetadata");
  return U(t) ? t.translatePagePaths === !1 : !1;
}
function On(o, e, t) {
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
function hs(o, e) {
  let t = o.getObjectKey(`${e}.replicaInfo`, "master");
  return g(t)
    ? o.getObjectKey(`${e}.replicaInfo.overrides.${t}`, "name")
    : o.getObjectKey(e, "name");
}
function gs(o, e) {
  let t = e.getObjectKey(o, "baseVariantId");
  if (!g(t) || !e.has(t)) return {};
  let r = [t];
  for (let l of e.getChildrenIds(o))
    l !== t && On(e, l, "isVariant") === !0 && (On(e, l, "gesture") || r.push(l));
  if (r.length < 2) return {};
  let n = [],
    i = [],
    s = new Set();
  for (let l of r) {
    let a = hs(e, l),
      u = (g(a) && a) || Wr("Variant", s, { startIndex: s.size + 1, omitCountIfFirst: !1 });
    (s.add(u), n.push(l), i.push(u));
  }
  return { variant: { type: "enum", title: "Variant", options: n, optionTitles: i } };
}
function Ne(o, e, t, r, n, i) {
  for (let s of o) {
    if (!qe(s)) continue;
    let l = _n(s) ? ds(s, e, t) : void 0;
    if (l) {
      ((n[s.id] = l), r && Bn(n, s));
      continue;
    }
    let a = Xt(e, s, t, i);
    gt(a) || ((n[s.id] = a), r && Bn(n, s));
  }
  return n;
}
function Ms(o, e, t, r) {
  let n = st(t, o);
  if (!n) return;
  let i = Ss(e, t),
    s = i ? n.filter((l) => i.has(l.id)) : n;
  return Ne(s, t, "SmartComponent", !0, gs(o, t), r);
}
function Ss(o, e) {
  let t = e.getObjectKey(o, "save")?.annotations?.default;
  if (t?.framerImmutableVariables !== !0) return;
  let r = t.framerVariables;
  if (Le(r)) return new Set();
  if (U(r)) return new Set(Object.keys(r));
}
function Is(o, e, t) {
  let r = st(e, o);
  if (r) return Ne(r, e, "LayoutTemplate", !1, {}, t);
}
function Cs(o, e, t) {
  let r = e.getParentId(o);
  if (!r || r === Kr || e.getObjectKey(r, "__class") !== "VectorSetNode") return;
  let n = st(e, r);
  if (n) return Ne(n, e, "VectorSet", !1, {}, t);
}
function vs(o, e, t) {
  let r = h(o.identifier);
  if (!r || !P(r) || !K(r) || r.exportSpecifier !== "default") return;
  let n = r.localIdName;
  switch (r.type) {
    case "canvasComponent":
      return Ms(n, r.localId, e, t);
    case "layoutTemplate":
      return Is(n, e, t);
    case "collection":
    case "draftCollection":
      return cs(n, e, t);
    case "vector":
      return Cs(n, e, t);
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
function xs(o, e, t, r) {
  let n = vs(o, e, r);
  return n !== void 0 ? n : Wn(o, e, t.parsedPropertyControls, "controls");
}
function qn(o, e, t) {
  return {
    getStoredPropertyControls: (n, i) => xs(n, o, i, e),
    verifyControls: t,
    cache: new Map(),
    parsedPropertyControls: new Map(),
    resolving: new Set(),
    resolvingReferences: new Set(),
  };
}
function Ps(o, e) {
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
    return we({
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
  let r = _n(o) ? Ps(o, e) : e.verifyControls({ control: o }).control;
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
function Il(o, e, t) {
  return Jt({ identifier: o.instanceIdentifier }, e, t);
}
function Jt(o, e, t) {
  if (!t.enabled) return;
  let r = qn(e, t, we),
    n = r.getStoredPropertyControls(o, r);
  if (gt(n)) return {};
  if (!Le(n)) return Qn(n, r);
}
function Xn(o, e, t) {
  if (!t.enabled) return;
  let r = qn(e, t, fn),
    n = Wn(o, e, r.parsedPropertyControls, "outputControls");
  if (n) return Qn(n, r);
}
function Pl(o, e) {
  let t = (n) => o.reactComponentForIdentifier(n)?.properties ?? null;
  if (!L.isOn("harness2")) return { getPropertyControls: t };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let i = t(n);
      if (i) return i;
      let s = r.get(n);
      if (s !== void 0) return s;
      let l = Es(n, e);
      return (r.set(n, l), l);
    },
  };
}
function Es(o, e) {
  let t = h(o);
  if (!t || !P(t)) return null;
  let r = e.resolvePropertyControls({ instanceIdentifier: t.value });
  return r === void 0 ? null : Re(r);
}
function Re(o) {
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
function ei(o) {
  return Jn.find((e) => e === o);
}
var eo =
  typeof window > "u"
    ? void 0
    : ei(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function ti(o) {
  eo = o;
}
function ro() {
  return L.isOn("harness2");
}
function me() {
  return ro() ? eo || (L.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function oi() {
  return Jn;
}
function ri(o) {
  return ei(o);
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
function ni() {
  return {
    ...D,
    kindMismatches: [...D.kindMismatches],
    annotationRefusals: [...D.annotationRefusals],
  };
}
function ii() {
  ((D.treeHits = 0),
    (D.treeMisses = 0),
    (D.loaderFallbacks = 0),
    (D.loaderPreferred = 0),
    (D.kindMismatches.length = 0),
    (D.annotationRefusals.length = 0),
    to.clear(),
    oo.clear());
}
function si() {
  D.treeHits++;
}
function ai() {
  D.treeMisses++;
}
function li() {
  D.loaderFallbacks++;
}
function di() {
  D.loaderPreferred++;
}
function ui(o, e) {
  to.has(o) || (to.add(o), D.kindMismatches.push({ identifier: o, loaderType: e }));
}
function no(o) {
  oo.has(o) || (oo.add(o), D.annotationRefusals.push(o));
}
var io = Symbol("annotationRefusal");
function ci(o) {
  if (!o) return;
  let e = {};
  for (let t in o) {
    let r = o[t];
    r !== void 0 && (e[t] = g(r) ? r : JSON.stringify(r));
  }
  return e;
}
var Ls = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function Ts(o) {
  return o.kind !== "localModuleExport" || o.exportSpecifier !== "default" ? !1 : Ls.has(o.type);
}
var pi = new WeakMap();
function bs(o) {
  let e = 0;
  for (let t = o; t; t = t.base) e += t.length;
  return e;
}
function ws(o) {
  let e = o.manifest,
    t = bs(o),
    r = pi.get(o);
  if (r && r.branchManifest === e && r.rowCount === t) return r.answers;
  let n = new Map();
  return (pi.set(o, { branchManifest: e, rowCount: t, answers: n }), n);
}
function De(o) {
  throw new Error(
    `${o} is not available on the localization tree-controls loader: it is read-only`
  );
}
var so = class extends nn {
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
    De("updateEntity");
  }
  deleteEntity() {
    De("deleteEntity");
  }
  setModuleRevision() {
    De("setModuleRevision");
  }
  testing = {
    setEntity: () => De("testing.setEntity"),
    clearEntities: () => De("testing.clearEntities"),
  };
  treeAnswer(t) {
    let r = ws(this.store),
      n = r.get(t);
    if (n === io) return (no(t), null);
    if (n !== void 0) return n;
    let i = this.resolveFromTree(t);
    return (r.set(t, i), i === io ? (no(t), null) : i);
  }
  resolveFromTree(t) {
    let r = h(t);
    if (!r || !P(r)) return null;
    let n = L.isOn("harness2"),
      i = Jt({ identifier: r.value }, this.store, { enabled: n });
    if (i === void 0) return null;
    let s = this.moduleNodeFacts(r);
    if (s === null) return io;
    let { name: l, annotations: a } = s,
      u = $n(r.value, this.store);
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
            name: Kn(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: Re(i),
            outputs: Re(Xn({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...d, name: l ?? "Unknown", type: "component", properties: Re(i) };
    return { hash: rn(p), definition: p, derivedFromDocument: Ts(r) };
  }
  moduleNodeFacts(t) {
    switch (t.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(t.localId, fe),
          n = ci(r?.save.annotations?.[t.exportSpecifier]);
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
          ? { name: r.getName(), annotations: ci(r.annotations) }
          : null;
      }
    }
  }
};
function at(o) {
  return me() !== "loader" && Ut(o.timeline);
}
function lt(o, e) {
  let t = me();
  return t === "loader" || !Ut(e.timeline) ? o : new so(o, e.getDataTree(), e.timeline.store, t);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: me,
    setMode(o) {
      let e = ri(o);
      if (!e)
        throw new Error(
          `Unknown localization tree-controls mode: ${o}. One of ${oi().join(", ")}.`
        );
      if (e !== "loader" && !ro())
        throw new Error(
          `Cannot force ${e}: the harness2 experiment is off, so nothing stores controls.`
        );
      return (ti(e), e);
    },
    stats: ni,
    reset: ii,
    wrap: lt,
    walk: pn,
    trackLookups: ln,
  });
var fi = new WeakMap();
function mi(o) {
  let e = fi.get(o);
  return e || ((e = { loadedRevision: -1, promise: void 0 }), fi.set(o, e), e);
}
function Ns() {
  return L.isOn("deferNonVisibleModuleEvaluation") && L.isOn("localizationWaitsForAllModules");
}
function yi(o) {
  if (
    !Ns() ||
    o.localizationComponentLoaderPolicy === "authoritative" ||
    (me() === "tree-only" && at(o.stores.treeStore))
  )
    return "ready";
  let { modulesStore: e } = o.stores,
    t = o.stores.treeStore.getDataTree().get(Fr);
  return e.localModules.size === 0 && !t?.children?.length
    ? "ready"
    : $r(e.localModuleEvaluationMode)
      ? mi(e).loadedRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : o.componentLoader.modulesRevision >= e.revision && !e.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function ze(o) {
  return yi(o) !== "ready";
}
function ql(o) {
  return !at(o.stores.treeStore) && ze(o);
}
async function Rs(o, e) {
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
function ke(o) {
  let e = at(o.stores.treeStore);
  return o.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: lt(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: lt(o.componentLoader, o.stores.treeStore),
        usesTreeControls: e,
        needsFallbackBeforeRead: !e && ze(o),
      };
}
async function ao(o, e) {
  let { modulesStore: t } = o.stores,
    r = mi(t);
  if (!ze(o)) {
    e?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = yi(o)) !== "ready";) {
    if (!r.promise) {
      let i = n,
        l = (
          i === "load-all"
            ? et(o.componentLoader, t, "localization")
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
    await Rs(r.promise, e);
  }
}
async function Yl(o, e) {
  let t = ke(o);
  return (t.needsFallbackBeforeRead && (await ao(o, e)), e?.throwIfAborted(), t.componentLoader);
}
function hi(o) {
  return o.unresolvedLocalizableCount > 0;
}
function Ql(o, e) {
  return hi(e) && ze(o);
}
async function Xl(o, e, t = o.signal) {
  var a = [];
  try {
    let r = ke(o);
    r.needsFallbackBeforeRead && (await ao(o, t));
    t?.throwIfAborted();
    let n = Do(a, dn());
    let i = o.componentLoader.activeBundleHash;
    let s = await e(r.componentLoader);
    if (!r.usesTreeControls || me() === "tree-only" || !hi(n.lookups)) return s;
    let l = ze(o);
    l && (await ao(o, t));
    if (!l && i === o.componentLoader.activeBundleHash) return s;
    t?.throwIfAborted();
    return await e(ke(o).componentLoader);
  } catch (u) {
    var d = u,
      c = !0;
  } finally {
    ko(a, d, c);
  }
}
function gi(o) {
  let e = o.remoteTreeVersion;
  return e < 1e13 ? e : Math.floor(e / 1e3);
}
var Ds = he("ensureComponentsLoadedWithTargetedLoad"),
  ks = 2e4,
  zs = 50,
  Vs = 5e3;
async function Si(o, e, t, r, n = ks) {
  let i = performance.now(),
    s = i + n,
    l,
    a = Mi(t, o);
  for (; a.length > 0 && performance.now() < s;) {
    let c = Math.min(performance.now() + Vs, s);
    try {
      await Promise.race([e(a), Te(c - performance.now())]);
    } catch (p) {
      l = p;
      break;
    }
    for (; performance.now() < c && ((a = Mi(t, o)), a.length !== 0);) await Te(zs);
  }
  let u = _t(t, o);
  if (u.length === 0) return;
  let d = u.filter((c) => Ii(c, o));
  throw (
    Ds.debug("targeted load did not produce definitions", {
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
function Mi(o, e) {
  return _t(o, e).filter((t) => !Ii(t, e));
}
function Ii(o, e) {
  let t = h(o);
  return t ? Jr(e.componentForIdentifier(Bo(t))) : !1;
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
function Ve(o) {
  let e = h(o);
  if (!(!e || !P(e) || !w(e))) return `${e.moduleId}:${e.exportSpecifier}`;
}
function vi(o) {
  let e = new Map();
  for (let t of o) {
    let r = Ve(t);
    r && e.set(r, t);
  }
  return e;
}
function xi(o, e) {
  let t = o.getRawControlProps();
  for (let r in t) {
    let n = t[r]?.type,
      i = t[r]?.value;
    if (n !== "vectorsetitem" || !g(i) || !P(i)) continue;
    let s = Ve(i);
    if (!s || !e.has(s)) continue;
    let l = e.get(s);
    l && o.setControlProp(r, { type: "vectorsetitem", value: l });
  }
}
function Pi(o, e) {
  for (let t of e) {
    xi(t, o);
    let r = Ve(t.codeComponentIdentifier);
    if (!r || !o.has(r)) continue;
    let n = o.get(r);
    n && t.set({ codeComponentIdentifier: n });
  }
}
function Ei(o, e) {
  let t = zr(e);
  if (t) {
    f(t.isLoaded(), "CMS Should always be loaded.");
    for (let { node: r, skipChildren: n } of t.walkWithSkipChildren()) {
      if (Se(r)) {
        if (!r.variables.some((l) => l.type === "vectorsetitem")) {
          n();
          continue;
        }
        Li(r, o);
      }
      if (!_(r)) continue;
      let i = r.getControlProps();
      for (let s in i) {
        let l = i[s]?.value;
        if (i[s]?.type !== "vectorsetitem" || !g(l) || !P(l)) continue;
        let u = Ve(l);
        if (!u || !o.has(u)) continue;
        let d = o.get(u);
        d && r.setControlProp(s, { ...i[s], value: d });
      }
    }
  }
}
function Li(o, e) {
  let t = !1,
    r = o.variables.map((n) => {
      if (n.type !== "vectorsetitem") return n;
      let { initialValue: i } = n,
        s = i.identifier;
      if (!s) return n;
      let l = Ve(s);
      if (!l || !e.has(l)) return n;
      let a = e.get(l);
      return a ? ((t = !0), { ...n, initialValue: { ...i, identifier: a } }) : n;
    });
  t && o.set({ variables: r });
}
function Ti(o, e) {
  for (let t of e.root.children) {
    if (X(t)) {
      xi(t, o);
      continue;
    }
    ($o(t) || Go(t)) && Li(t, o);
  }
}
function lo(o, e, t) {
  let r = o.get(e);
  if (r) return r;
  let n = t();
  return (o.set(e, n), n);
}
function bi() {
  return {};
}
function wi(o) {
  let e = { controls: bt(o.properties), displayName: o.name, type: o.type };
  return (Xr(o) && (e.outputControls = bt(o.outputs)), e);
}
function dt(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = h(r.identifier);
    if (!K(n) || !P(n) || !te(n.type) || (e && !e.has(n.localId))) continue;
    let i = lo(t, n.localId, bi);
    i[n.exportSpecifier] = wi(r);
  }
  return t;
}
function ut(o, e) {
  let t = new Map();
  for (let r of o) {
    let n = h(r.identifier);
    if (!w(n) || !P(n) || (e && !e.has(n.moduleId))) continue;
    let i = lo(t, n.moduleId, () => new Map()),
      s = lo(i, n.saveId, bi);
    s[n.exportSpecifier] = wi(r);
  }
  return t;
}
function Ni(o) {
  let e = h(o.codeComponentIdentifier);
  if (w(e)) return e.saveId;
}
function ct(o, e, t) {
  return o.get(e)?.get(t);
}
function uo(o, e, t) {
  return { ...o?.propertyControlsBySaveId, [e]: ot(t) };
}
function Ri(o) {
  for (let e of J.getModuleNodes(o)) {
    let t = Ni(e);
    if (t && !Ie(e.propertyControlsBySaveId?.[t])) return !0;
  }
  return !1;
}
function co(o) {
  let e = [];
  for (let t of J.getModuleNodes(o)) {
    let r = Ni(t);
    if (!r || Ie(t.propertyControlsBySaveId?.[r])) continue;
    let n = h(t.codeComponentIdentifier);
    w(n) && e.push(n);
  }
  return e;
}
var C = he("modules-store"),
  As = 5e3,
  Di = new Set(["codeFile", "canvasComponent", "screen", "layoutTemplate", "vector"]),
  Fs = 500,
  Bs = 100,
  Os = 10 * 6e4;
function Us(o) {
  return "sourceContent" in o && g(o.sourceContent);
}
function pt(o) {
  let { module: e, exportSpecifier: t } = o,
    { id: r, saveId: n, files: i } = e;
  return (f(i.module, "module file must exist for a saved module"), de(r, n, i.module, t));
}
var ki, zi, Vi, Ai, Fi, Bi, T, po, fo, mo, yo, ho, go, Ae, Ce, Fe, ve, Be, ie, se, xe;
((Bi = [pe()]), (Fi = [pe()]), (Ai = [pe()]), (Vi = [pe()]), (zi = [pe()]), (ki = [pe()]));
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
    A(this, "moduleUpdatesEmitter", new ft());
    A(this, "fastRefreshModulesEmitter", new ft());
    R(this, Ae);
    R(this, Ce);
    R(this, Fe, 0);
    R(this, ve, !1);
    A(this, "prepareForPersistence", async (e, t) => {
      if (
        !te(e) ||
        t.length === 0 ||
        (!L.isOn("harness2") && this.localCodeModuleIdsWithStoredPropertyControls(t).size === 0)
      )
        return;
      let r = new Set(t.map((n) => ge(n, "default").value));
      (await this.loadLocalModules(r, "current"),
        await et(this.componentLoader, this, "code-file-persistence"));
    });
    R(this, Be, new Map());
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
    R(this, xe, !1);
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
          (f(a, "query is expected to be defined."), i.push(a), i.length < Fs && l < n.length - 1)
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
        let { type: i, name: s } = Uo(e);
        if (!Di.has(i)) return;
        let l = i === "codeFile" ? qt(t).source : s,
          a = i === "codeFile" ? Oo(t)[1] : s,
          {
            code: u,
            imports: d,
            sourceMap: c,
            submoduleContents: p = {},
          } = await Sn({ localId: e, source: r, name: l, includeSourceMap: n }),
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
          [y, M] = yn(this.fastRefreshModules, (x) => {
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
        let l = In({ name: t, source: r, includeSourceMap: n, type: i, telemetrySession: s });
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
        new sn({
          delay: As,
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
          let E = Er(m);
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
        for (let E of Z) {
          let S = E.path[0];
          if ((f(typeof S == "string"), S === jt)) {
            if (((V = E), x)) for (let I of p.modules.keys()) z.add(I);
            break;
          }
          E.op === "remove" && E.path.length === 1 ? q.push(S) : F.push(S);
        }
        let O = new Set();
        if (!V) {
          let E = this.getActiveScope(),
            S = Yt(E);
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
          let E = Z.filter(
            (I) =>
              I.path.length === 1 &&
              I.path[0] !== jt &&
              (I.op === "remove" || (I.op === "add" && !this.fastRefreshModules.has(I.path[0])))
          );
          this.fastRefreshModules = mn(this.fastRefreshModules, (I) => {
            for (let ae of E) ae.op === "remove" && I.delete(ae.path[0]);
          });
          let S = [...(V ? [V] : []), ...E];
          S.length > 0 &&
            this.fastRefreshModulesEmitter.emit({ patches: S, initialized: p.initialized });
        }
        if (this.fastRefreshEnabled && !V)
          for (let E of F) {
            let S = this.fastRefreshModules.get(E);
            if (!S) continue;
            let I = this.localModules.get(E);
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
    ((this.pendingLocalModuleIds = new Set(e.map(_o))), (this._localModuleEvaluationMode = t));
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
            controlsByLocalId: dt(this.componentLoader.getAllEntities(), t),
          }
        : { revision: -1, controlsByLocalId: new Map() };
  }
  localCodeModuleIdsWithStoredPropertyControls(e) {
    return new Set(
      e.filter((t) => {
        let r = this.treeStore.tree.get(t);
        return !fe(r) || !te(r.save.type) ? !1 : Ie(r.save.propertyControls);
      })
    );
  }
  localCodeModuleIdsMissingPropertyControls() {
    let e = [];
    for (let t of Je.getModuleNodes(this.treeStore.tree))
      te(t.save.type) && (Ie(t.save.propertyControls) || e.push(t.id));
    return e;
  }
  async backfillMissingCrdtModuleControls() {
    if (this.treeStore.tree.isViewOnly) return;
    let e = this.localCodeModuleIdsMissingPropertyControls(),
      t = Ri(this.treeStore.tree);
    if (e.length === 0 && !t) return;
    if (e.length > 0) {
      let u = new Set(e.map((d) => ge(d, "default").value));
      await this.loadLocalModules(u, "eager");
    }
    let r = co(this.treeStore.tree);
    await Promise.allSettled(
      r.map((u) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(u))
    );
    let n = this.loadedExternalModulesStore.usesNoopExternalModuleEvaluation?.() === !0,
      i = [...this.componentLoader.getAllEntities()],
      s = dt(i),
      l = ut(i),
      a = new Set(e.filter((u) => !this.isLocalModuleEvaluationPending(u)));
    await this.scheduler.processWhenReadyAsync(() => {
      this.treeStore.tree.isViewOnly ||
        this.writeMissingPropertyControls(
          (u) => s.get(u) ?? (a.has(u) ? null : void 0),
          ({ moduleId: u, saveId: d }) => ct(l, u, d) ?? (n ? null : void 0)
        );
    });
  }
  persistEvaluatedPropertyControls(e) {
    if (!L.isOn("harness2") || this.treeStore.tree.isViewOnly || b(this, ve)) return;
    let t = e > b(this, Fe);
    if ((Y(this, Fe, e), e === 0)) return;
    let r = t ? 1 : Bs + 1;
    this.countEvaluatedPropertyControlsGaps(r) >= r &&
      (Y(this, ve, !0),
      this.scheduler.scheduleDocumentUpdateIgnoringUndo(() => {
        (Y(this, ve, !1), !this.treeStore.tree.isViewOnly && this.writeEvaluatedPropertyControls());
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
      r = dt(this.componentLoader.getAllEntities(), new Set(t)),
      n = e.externalIdentifiers.filter((s) => this.hasEvaluatedExternalPropertyControls(s)),
      i = ut(this.componentLoader.getAllEntities(), new Set(n.map((s) => s.moduleId)));
    this.writeMissingPropertyControls(
      (s) => r.get(s),
      ({ moduleId: s, saveId: l }) => ct(i, s, l)
    );
  }
  writeMissingPropertyControls(e, t) {
    let r = this.treeStore.tree,
      { localIds: n, externalIdentifiers: i } = this.getPropertyControlsGaps();
    for (let s of n) {
      let l = r.getNodeWithTrait(s, fe),
        a = e(s);
      !l || a === void 0 || l.set({ save: { ...l.save, propertyControls: ot(a) } });
    }
    for (let s of i) {
      let l = r.getNodeWithTrait(s.moduleId, W),
        a = t(s);
      !l || a === void 0 || l.set({ propertyControlsBySaveId: uo(l, s.saveId, a) });
    }
  }
  getPropertyControlsGaps() {
    let e = this.treeStore.tree,
      t = Je.get(e),
      r = J.get(e),
      n = b(this, Ce),
      i = n !== void 0 && n.localModulesList === t,
      s = n !== void 0 && n.externalModulesList === r;
    return i && s
      ? n
      : (Y(this, Ce, {
          localModulesList: t,
          externalModulesList: r,
          localIds: i ? n.localIds : this.localCodeModuleIdsMissingPropertyControls(),
          externalIdentifiers: s ? n.externalIdentifiers : co(e),
        }),
        b(this, Ce));
  }
  hasEvaluatedExternalPropertyControls(e) {
    return this.componentLoader.getDefinitionHash(e.value) !== 0;
  }
  hasEvaluatedPropertyControlsForSave(e) {
    if (this.isLocalModuleEvaluationPending(e)) return !1;
    let t = this.getPersistedModuleByLocalId(e);
    if (
      !t ||
      !(gi(this.treeStore) - new Date(t.savedAt).getTime() >= Os) ||
      !t.exports.some((l) => this.componentLoader.getDefinitionHash(ge(e, l).value) !== 0)
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
    let e = this.treeStore.tree.get(b(this, Ae));
    if (e) return (f(e?.loaded, "Active scope node should be loaded"), e.loaded);
  }
  setActiveScope(e) {
    Y(this, Ae, e);
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
    let r = typeof this.dependenciesModule > "u" && !bn(),
      n = await rt(this.modulesStorage.addNpmDependencies(e)),
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
    r && wn();
    let l = Object.keys(n.value.dependenciesMap.dependencies),
      a = i.map(({ target: u }) => u).filter((u) => !l.includes(u) && Rt(u));
    if (a.length > 0) {
      let u = Ci(a, { max: 5, placeholder: "package" });
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
      let n = mt(t.localId, r);
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
    if (r) return ge(r.localId, t.exportSpecifier).value;
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
      d = a ? ge(a.localId, n) : u;
    return { module: s, moduleIdentifier: d, externalIdentifier: u, insertUnlinked: i };
  }
  async getSourceContentForModuleSave(e) {
    let { module: t } = await this.lookUpModule(e);
    if (Us(t)) return t.sourceContent;
    let r = t.baseURL + t.files.source,
      n = await rt(fetch(r));
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
    let i = await rt(n.value.text());
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
    for (let n of e) Rn({ insertId: r, insertType: t, codeComponentId: n });
  }
  async installExternalModulesDependencies(e) {
    let t = [],
      r = [];
    for (let n of e) {
      let i = b(this, Be).get(n);
      i ? r.push(i) : t.push(n);
    }
    if (t.length > 0) {
      let n = this.installDependenciesForModuleURLs(t);
      for (let i of t) b(this, Be).set(i, n);
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
      if (!(!i || Ye(i))) {
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
    Ye(t) || (await this.insertTemporaryImportMap(t));
  }
  async installDependenciesForExternalModules(e) {
    let t,
      r = {},
      n;
    for (let { dependencies: i, module: s } of e)
      if (i?.importMap)
        if (L.isOn("importMapPruning")) {
          let { importMap: l } = Ir(i.importMap, [s.baseURL], Qe);
          t = wt(t ?? { imports: {} }, l);
          let a = i.dependencies ?? Nt(i.importMap);
          Object.assign(r, Cr(a, s.baseURL));
        } else {
          let { modulesCDN: l } = zo(),
            a = xr(i.importMap, l, Qe),
            u = a.importMap,
            d =
              a.didNormalize && i.dependencies ? Pr(i.dependencies, u) : (i.dependencies ?? Nt(u)),
            c = {
              dependencies: d.dependencies,
              ...(d.resolutions ? { resolutions: d.resolutions } : {}),
            };
          ((n = Tr(n ?? { dependencies: {} }, c)), (t = wt(t ?? { imports: {} }, u)));
        }
    if (!t || Ye(t)) return !1;
    if (L.isOn("importMapPruning")) {
      let i = { ...t, imports: vr(t.imports, Qe) },
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
      let s = pt({ module: i, exportSpecifier: n }),
        l = this.treeStore.tree.getNodeWithTrait(i.id, W);
      (P(l?.codeComponentIdentifier) && h(l.codeComponentIdentifier).saveId === i.saveId) ||
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
          let i = vi(r.keys()),
            s = this.treeStore.getDataTree(),
            l = s.query().whereClass(Ft).iterate();
          (Pi(i, l), Ei(i, s), Ti(i, s));
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
    await Si(this.componentLoader, this.requestTargetedModuleLoad, e, t, r);
  }
  localModuleIsKnown(e) {
    return this.getModuleEntryByLocalId(e) ? !0 : fe(this.treeStore.tree.get(e));
  }
  requestImportMapPrune() {
    b(this, se).debounce();
  }
  async processImportMapPrune() {
    if (b(this, xe)) {
      b(this, se).debounce();
      return;
    }
    Y(this, xe, !0);
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
      Y(this, xe, !1);
    }
  }
  async updateExternalModuleNodes(
    e,
    { onTreeUpdate: t, updateSave: r = !1, scheduleTreeUpdate: n }
  ) {
    (await this.insertTemporaryImportMapForExternalModules(e),
      await Promise.all(
        e.map((a) => this.loadedExternalModulesStore.ensureModuleEvaluatedInSandbox(pt(a)))
      ));
    let s = await (n ?? ((a) => this.scheduler.processWhenReadyAsync(a)))(() => {
      if (this.treeStore.tree.isViewOnly) throw Error("unable to edit");
      let a = L.isOn("harness2"),
        u = new Set();
      for (let c of e) {
        let { id: p } = c.module;
        (a || this.treeStore.tree.getNode(p)?.propertyControlsBySaveId !== void 0) && u.add(p);
      }
      let d = u.size > 0 ? ut(this.componentLoader.getAllEntities(), u) : void 0;
      for (let c of e) {
        let { id: p } = c.module,
          m = this.treeStore.tree.getNode(p);
        if (m && !r) {
          let y = pt(c),
            M = this.externalModulesDynamicInfo.get(y.moduleId)?.status ?? c.module.status;
          m.set({ group: M?.group, updateSaveId: M?.updateSaveId });
        } else {
          let { type: y, metadata: M, ownerId: x, ownerType: k } = c.module,
            $ = pt(c),
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
            let S = ct(d, p, $.saveId);
            S !== void 0 && (V.propertyControlsBySaveId = uo(m, $.saveId, S));
          }
          let O = this.componentLoader.componentForIdentifier($.value);
          f(O, () => `Component not found in the component loader: ${$.value}`);
          let ye = O.annotations ?? void 0;
          if (Vr(y)) {
            let S = Nr({ default: ye }).default;
            V.annotations = y === "vectorSet" ? Dr(S) : S;
          } else V.annotations = ye;
          let E = O.name ?? Z;
          if (((V.title = E), m)) m.set(V);
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
            Qr(d, t.value, u.value));
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
      n[s] = mt(c, u);
    }
    let i = await hn(t, n);
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
    let t = je("screen", e, "default").value;
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
  (Ae = new WeakMap()),
  (Ce = new WeakMap()),
  (Fe = new WeakMap()),
  (ve = new WeakMap()),
  (Be = new WeakMap()),
  (ie = new WeakMap()),
  (se = new WeakMap()),
  (xe = new WeakMap()),
  le(T, 4, "dependenciesModule", Bi, re, po),
  le(T, 4, "localModules", Fi, re, fo),
  le(T, 4, "fastRefreshModules", Ai, re, mo),
  le(T, 4, "externalModulesDynamicInfo", Vi, re, yo),
  le(T, 4, "revision", zi, re, ho),
  le(T, 4, "invalidSavePointerQuarantineSize", ki, re, go),
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
function Oi(o) {
  return !Number.isNaN(o.getTime());
}
function wu(o) {
  return o.match(/^\d{2}:\d{2}$/gu) !== null;
}
function _s(o) {
  return o.toISOString().split("T")[0];
}
function Nu(o) {
  let e = new Date(o);
  return Oi(e) ? _s(e) : "";
}
function Ru(o) {
  let e = new Date(o);
  return Oi(e)
    ? `${e.getUTCHours().toString().padStart(2, "0")}:${e.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var Du = (() => {
    let o = null;
    return () => {
      if (vt(o)) return o;
      let e = document.createElement("input"),
        t = "a";
      return (e.setAttribute("type", "date"), e.setAttribute("value", t), (o = e.value !== t), o);
    };
  })(),
  ku = (() => {
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
function zu(o) {
  if (!o) return;
  if (Io(o)) return o;
  let e = new Date(o).toISOString();
  return (f(Io(e), "Date format is not valid"), e);
}
function Ws(o) {
  So.exec(o);
  let e = So.exec(o);
  f(e, "The provided date cannot have conformed to StandardZuluDateString");
  let [, t, r, n, i, s, l, a] = e;
  return [t, r, n, i, s, l, a];
}
function Vu([o, e, t, r, n, i, s]) {
  let l = `${o}-${e}-${t}T${r}:${n}:${i}.${s}Z`;
  return (f(Io(l)), l);
}
function Au(o) {
  let [e, t, r] = Ws(o);
  return `${r}/${t}/${e}`;
}
function vo(o) {
  return ke(o).componentLoader;
}
function js(o, e, t) {
  let r = o.reactComponentForIdentifier(e.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (Xe(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function Ks(o, e, t) {
  if (!ar(e)) return;
  let r = o.reactComponentForIdentifier(e.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[t.controlPropKey];
  return n ? (Xe(n, e.getRawControlProp(t.controlPropKey)) ?? void 0) : void 0;
}
function $s(o, e, t, r) {
  let s = o.getNodeParent(t).getPropertyControls(o, e)[r.controlPropKey];
  if (!s) return;
  let l = t.getControlProp(r.controlPropKey);
  return Xe(s, l) ?? void 0;
}
function ji(o, e, t, r) {
  if (X(t, !0)) return Ks(e, t, r);
  if (_(t)) return $s(o, e, t, r);
  if (G(t)) return js(e, t, r);
}
function Oe(o, e, t, r) {
  let n = ji(o, e, t, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let i = Gt(r.ancestorControlKeyPath);
  for (let s of i) {
    if (!n) return;
    if ((f(n.type === s.type), n.type === "object")) {
      if ((f(s.type === "object"), !U(n.value))) return;
      n = n.value[s.key];
    } else if (n.type === "array") {
      if ((f(s.type === "array"), !yt(n.value))) return;
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
function Ui(o, e, t) {
  N(o, { [sr(e)]: t });
}
function Ue(o, e, t, r, n) {
  if (!r.ancestorControlKeyPath) {
    hr(t)
      ? Ui(t, r.controlPropKey, n)
      : _(t)
        ? (f(Kt(n), "Invalid control prop"), t.setControlProp(r.controlPropKey, n))
        : j(t, "Unsupported node");
    return;
  }
  f(X(t, !0) || G(t) || _(t));
  function i(u) {
    if (u) return u.type === "array" || u.type === "object" ? { ...u } : (f(u.type === n.type), n);
  }
  let s = i(ji(o, e, t, r));
  if (!s) return;
  let l = Gt(r.ancestorControlKeyPath),
    a = s;
  for (let u of l) {
    if (!a) return;
    if ((f(a.type === u.type), a.type === "object")) {
      if ((f(u.type === "object", "Current control should be of type Object"), !U(a.value))) return;
      let d = a.value[u.key],
        c = i(d);
      if (!c) return;
      ((a.value = { ...a.value, [u.key]: c }), (a = c));
    } else if (a.type === "array") {
      if ((f(u.type === "array", "Current control should be of type Array"), !yt(a.value))) return;
      let d = a.value.find((p) => p.id === u.id),
        c = i(d);
      if (!c) return;
      ((a.value = a.value.map((p) => (p.id === c.id ? c : p))), (a = c));
    } else {
      return;
    }
  }
  X(t, !0) || G(t)
    ? Ui(t, r.controlPropKey, s)
    : _(t)
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
  if ($e(t) && Ge(t.textContent)) {
    let s = i(t.textContent);
    N(t, { textContent: s });
    return;
  }
  if (It(t) && Ge(t.formInputPlaceholder)) {
    let s = i(t.formInputPlaceholder);
    N(t, { formInputPlaceholder: s });
    return;
  }
  if (G(t)) {
    let s = vo(o),
      l = Oe(e, s, t, r);
    if (!l || (f(l.type === "string"), !Ge(l.value))) return;
    let a = { ...l };
    ((a.value = i(l.value)), Ue(e, s, t, r, a));
  }
}
function Ki(o, e, t, r, n, i) {
  o.scheduler.process(() => {
    let s = o.stores.treeStore.getDataTree(),
      l = vo(o),
      a = s.get(e.nodeId),
      u = e.type;
    switch (u) {
      case "string":
      case "richtext":
      case "link": {
        if (!_(a) && !G(a) && !X(a)) return;
        let d = Oe(s, l, a, e);
        if (!d) break;
        f(u === d.type);
        let c = { ...d },
          p = v(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = p), Ue(s, l, a, e, c));
        break;
      }
      case "slug": {
        if (!_(a)) return;
        let d = Oe(s, l, a, e);
        f(d?.type === "string", "expected slug control type to be a ControlType.String");
        let c = { ...d },
          p = v(t.id, d.valueLocalized, "default", n);
        ((c.valueLocalized = p), Ue(s, l, a, e, c));
        break;
      }
      case "image": {
        if (!_(a) && !G(a) && !X(a)) return;
        let d = Oe(s, l, a, e);
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
        Ue(s, l, a, e, c);
        break;
      }
      case "enum": {
        if (!Se(a)) return;
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
        if (!_r(a)) return;
        let d = e.key === "title" ? "titleLocalized" : "descriptionLocalized",
          c = a[d],
          p = v(t.id, c, "default", n);
        N(a, { [d]: p });
        break;
      }
      case "RichTextNode": {
        if (!$e(a)) return;
        let d = v(t.id, a.htmlLocalized, "default", n);
        (N(a, { htmlLocalized: d }), Vt(a) && He(o) && Ot(o, Bt(o, [a.id])).catch(Q));
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
        if (!Ur(a)) break;
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
        if (!It(a)) return;
        N(a, {
          formInputPlaceholderLocalized: v(t.id, a.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!Ct(a) || !a.formSelectOptions) return;
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
        if (!Ct(a)) return;
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
function Gs(o, e, t, r, n) {
  o.scheduler.process(() => {
    let i = o.stores.treeStore.getDataTree(),
      s = vo(o),
      l = i.get(e.nodeId),
      a = e.type;
    if (cn(e)) {
      if (!_(l) && !G(l) && !X(l)) return;
      let u = Oe(i, s, l, e);
      if (!u) return;
      f(u.type === "richtext");
      let d = structuredClone(u);
      ((d.valueLocalized = v(t.id, u.valueLocalized, "default", r)), Ue(i, s, l, e, d));
    } else {
      (f(a === "RichTextNode"), f($e(l)));
      let u = v(t.id, l.htmlLocalized, "default", r);
      (N(l, { htmlLocalized: u }), Vt(l) && He(o) && Ot(o, Bt(o, [l.id])).catch(Q));
    }
  }, n);
}
function _i(
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
  let c = { value: o, hash: Hs(e, t), lastEdited: Date.now() };
  i && (c.needsReview = !0);
  let p = Fo(n?.value, o);
  return (
    (s || (p && n?.generatedByAI)) && (c.generatedByAI = !0),
    l || ht(a)
      ? (f(l && ht(a), "Cannot set only pluginId or pluginMode"),
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
function Hs(o, e) {
  switch (e) {
    case "default":
      return o.hash;
    case "imageSrc":
      return (f(tt(o)), o.imageHash);
    default:
      j(e);
  }
}
function Zs(o, e) {
  if (!e.draft) return;
  let t = o.stores.localizationStore.progressPerLocale[e.id];
  !Me(t) ||
    t === 1 ||
    o.scheduler.runBeforeNextFrame(() => {
      o.stores.localizationStore.getCurrentExactProgressForLocale(o, e.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (o.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          o.stores.modalStore.set({ type: "LocaleReady", activeLocale: e, source: "automatic" }));
    });
}
function qs(o, e) {
  if (!o.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let t = o.stores.treeStore.getDataTree().get(e.nodeId);
  if (!Se(t) && !_(t)) return;
  let r = Se(t) ? t.id : t.parentid;
  r && o.stores.codeGenerationStore.updateComponent(r).catch(Q);
}
function Wi(o, e, t) {
  He(o) && (Zs(o, t), qs(o, e));
}
function $i(o, e, t, r, n) {
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
    (Gs(
      o,
      t,
      r,
      (y) =>
        _i(e, t, d, r, y, {
          needsReview: i,
          generatedByAI: s,
          pluginId: l,
          pluginMode: a,
          ignoreTracking: u,
          trackingSource: c,
        }),
      m
    ),
      Wi(o, t, r));
    return;
  }
  (Ki(
    o,
    t,
    r,
    d,
    (y) => {
      let M = _i(e, t, d, r, y, {
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
      else un(t) && (M.type = "rich-text");
      return M;
    },
    m
  ),
    Wi(o, t, r));
}
function Gi(o, e) {
  let t = o.localizedValues[e.id];
  return t ? t.value : null;
}
function cc(o, e, t, r) {
  let n = "default",
    i = Gi(e, t),
    s = e.localizedValues[t.id];
  if (tt(e)) {
    let l = e.imageLocalizedValues[t.id];
    l && ((n = "imageSrc"), (i = l.value), (s = l));
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
      generatedByAI: !!s?.generatedByAI,
      source: r,
    }));
}
function pc(o, e, t, { trackingSource: r, ignoreTracking: n }) {
  let i = "default",
    s = Gi(e, t),
    l = e.localizedValues[t.id];
  if (tt(e)) {
    let a = e.imageLocalizedValues[t.id];
    a && ((i = "imageSrc"), (s = a.value), (l = a));
  }
  ($i(o, s, e, t, {
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
function fc(o, e, t, { target: r, ignoreTracking: n, trackingSource: i, eventType: s }) {
  Ki(
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
var Ys = he("pollProject");
async function Sc(o, e) {
  let { intervalMillis: t, attempts: r, stopCondition: n } = e;
  try {
    for (let i = 0; i < r; i++) {
      let s = await qr.get(`/web/projects/${o}`, { includeAiCreditLimit: "true" }, void 0, Yr());
      if (n(s)) return { status: 0, project: s };
      i < r - 1 && (await Te(t));
    }
    return { status: 1, message: `Polling exceeded ${r} attempts` };
  } catch (i) {
    return (Ys.reportError(i), { status: 2, error: i });
  }
}
export {
  ga as a,
  Nn as b,
  Ji as c,
  ts as d,
  $a as e,
  Ga as f,
  Kn as g,
  $n as h,
  Il as i,
  Jt as j,
  Xn as k,
  Pl as l,
  Ns as m,
  ze as n,
  ql as o,
  ke as p,
  ao as q,
  Yl as r,
  Ql as s,
  Xl as t,
  oa as u,
  ra as v,
  na as w,
  ia as x,
  da as y,
  bn as z,
  wn as A,
  ua as B,
  re as C,
  Sc as D,
  Oi as E,
  wu as F,
  Nu as G,
  Ru as H,
  Du as I,
  ku as J,
  zu as K,
  Ws as L,
  Vu as M,
  Au as N,
  $i as O,
  cc as P,
  pc as Q,
  fc as R,
};
//# sourceMappingURL=chunk-7ZGQE4EH.mjs.map
