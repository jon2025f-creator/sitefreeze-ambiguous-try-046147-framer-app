import { a as we, d as eo, h as to, i as oo } from "chunk-SPWEZONX.mjs";
import { a as so } from "chunk-JSNYRYM6.mjs";
import { c as Qt, ta as io } from "chunk-R3EYWWKL.mjs";
import {
  Bj as Zt,
  Mf as zt,
  Nf as Ht,
  Sk as ro,
  ci as Kt,
  dg as le,
  di as Xt,
  eg as $t,
  ff as Bt,
  k as pt,
  na as Lt,
  nk as ee,
  oc as _t,
  q as lt,
  r as bt,
  tg as Ut,
  ug as jt,
  w as wt,
  yl as no,
} from "chunk-XDEZW4UP.mjs";
import { C as Yt, I as Jt, h as Dt, i as Wt, k as Gt } from "chunk-V6H3EL63.mjs";
import { Fc as At, Na as kt, Qd as pe, af as be, m as Vt, re as Ot } from "chunk-JT3NKTG7.mjs";
import { Ra as Nt, Sa as xt, Ta as Pt, ae as Ft, u as Tt } from "chunk-KZUB7NUV.mjs";
import { q as Mt } from "chunk-BOLWAZIJ.mjs";
import {
  $ as me,
  Al as Pe,
  Fk as ht,
  Fr as St,
  Gn as z,
  Hn as vt,
  Mx as Et,
  Nh as ft,
  Oa as nt,
  Vn as Ct,
  _ as Xe,
  _o as k,
  ba as Ze,
  ca as Ye,
  dg as mt,
  gl as gt,
  gy as Rt,
  he as st,
  of as Ne,
  pf as dt,
  q as je,
  wa as Q,
} from "chunk-JCKPR6HO.mjs";
import {
  $g as ot,
  Df as Te,
  Me as Ke,
  Mq as It,
  Nf as et,
  Sk as xe,
  Ti as at,
  Wf as tt,
  Yf as B,
  ah as rt,
  be as Y,
  bi as Se,
  db as M,
  eb as G,
  ek as ut,
  fb as Ge,
  gb as Be,
  hb as Ce,
  hi as it,
  ik as yt,
  jb as ze,
  kb as He,
  l as S,
  lj as ct,
  mb as $e,
  mg as J,
  nb as Z,
  qc as Ue,
  tb as _,
  te as qe,
  vf as Je,
  xf as Qe,
} from "chunk-CMWKQFSN.mjs";
import { B as ce, d as K, f as ae, o as We } from "chunk-GV47JEYI.mjs";
import { c as b } from "chunk-QNOOB75K.mjs";
import { t as qt } from "chunk-5SCC76R2.mjs";
import { g as V } from "chunk-DDQ2IDFF.mjs";
import { k as X } from "chunk-FBYS4Y3C.mjs";
import { b as De } from "chunk-7JB7LKQK.mjs";
import { f as de } from "chunk-ARJ7WQTJ.mjs";
import { b as ie, j as se } from "chunk-EAUMDN6M.mjs";
import { b as P, c as _e } from "chunk-4JY5UMT2.mjs";
var Oo = { track: !0 };
function ao(e) {
  let t = { ...e, event: "import_paste_bitmap" };
  De(t, Oo);
}
var mo = se("addImagesToCanvas"),
  Lo = /\.[^.]+$/u,
  Ve = 0;
function co(e) {
  return e === "plugin" ? 3 : 1;
}
async function jr(e, t, o, r, i = !1, n = !1, d) {
  if (!t || t.length === 0) return [];
  if (!Vt(e.stores.scopeStore.active)) return [];
  let m = e.stores.scopeStore.active.id,
    s = d ?? Do(e.stores, t.length, o, i),
    a = new ro(e, { silent: n, quiet: X.isOn("quietCanvasImageUploads") }),
    f = new Set(),
    l = [];
  for (let y of t)
    if (y instanceof File && y.type === dt.get("svg")) {
      let F = await y.text();
      Gt(F) ? (a.add(y), f.add(y.name)) : l.push(y);
    } else a.add(y);
  let p = (await a.results()).filter(Yt);
  if (!Ct(e.tree.get(m))) return [];
  let N = e.scheduler.wrapHandler(Bo(e, m), void 0, co(r)),
    T = [],
    { modalStore: c, scopeStore: u } = e.stores;
  for (let { filename: y, originalFilename: F, imageSize: E } of p) {
    let L = f.has(F) ? "svg" : "bitmap",
      { nonZeroNaturalWidth: g, nonZeroNaturalHeight: w } = Dt(E);
    T.push(
      ...N(
        y,
        F,
        L,
        {
          width: g / window.devicePixelRatio,
          height: w / window.devicePixelRatio,
          pixelWidth: g,
          pixelHeight: w,
        },
        s,
        r
      )
    );
  }
  if (l.length) {
    if (l.length === 1) return await _o(e, l[0], r, s, m);
    $e(u.active)
      ? c.set({
          type: "VectorImport",
          svgsToImport: l,
          scopeId: u.active.id,
          currentVectorLayout: Mo(u.active),
          source: "canvas",
        })
      : c.set({
          type: "VectorSetCreation",
          source: "canvas",
          onConfirm: (y) => {
            let F = ce();
            c.set({
              type: "VectorImport",
              svgsToImport: l,
              scopeId: F,
              source: "canvas",
              onCreateVectorSet: (E, L) => ee.createVectorSet(e, y, !1, null, E, "import", L),
              onSuccess: e.scheduler.wrapHandler((E) => {
                (Bt(e, { type: "page", nodeId: E.id }, { selectScopeOptions: { keepHistory: !0 } }),
                  Xt(e, E.id, kt, !1));
              }),
            });
          },
        });
  }
  return [...T];
}
function Mo(e) {
  let t = e.children.findLast((o) => St(o));
  if (t)
    return (
      P(J(t), "Vector Set items must support size."),
      P(Q(t), "Vector Set items must be pinnable."),
      { width: t.width, height: t.height, x: t.left ?? 0, y: t.top ?? 0 }
    );
}
function _o(e, t, o, r, i) {
  return t ? Ho(e, t.name, t, r, o, i) : [];
}
function Do(e, t, o, r) {
  let { selectionStore: i, scopeStore: n, treeStore: d } = e,
    m = { type: "node", parentId: wt(d.tree, n.active, [], o), position: o };
  if (r || i.nodes.length === 0) return [m];
  let s = [];
  for (let a of i.nodes) {
    if (!M(a)) return [m];
    if (a.layout !== void 0) s.push({ type: "node", parentId: a.id });
    else if (!B(a)) s.push({ type: "fill", node: a });
    else return [m];
  }
  return t > 1 && s.some((a) => a.type === "fill") ? [m] : s;
}
function Wo([e = "", ...t]) {
  return [e.toUpperCase(), ...t].join("");
}
function Go(e) {
  let t = Wo(e.replace("_", " "));
  if (t !== "Graphic") return t;
}
function Bo(e, t) {
  return (o, r, i, n, d, m) => {
    let s = e.tree,
      a = [];
    for (let f of d) {
      let l = f.type === "fill" && i === "svg" ? { type: "node", parentId: f.node.id } : f;
      if (l.type === "node") {
        let p = ce(),
          { baseAttributes: v } = po(e, l, p, n, r);
        mo.info("create image:", r, "size:", n);
        let N = {
            ...v,
            fillImagePixelWidth: n.pixelWidth,
            fillImagePixelHeight: n.pixelHeight,
            overflow: "visible",
          },
          T = we(s, l.parentId, (u, y) => {
            if (!(u && !s.has(u)))
              return (
                e.createImage(
                  o,
                  r,
                  { width: n.pixelWidth, height: n.pixelHeight },
                  u,
                  { ...N, ...y },
                  l.type === "node" ? l.index : void 0,
                  t
                ),
                p
              );
          });
        if (T === void 0) continue;
        ao({});
        let c = be(r)[1].toLowerCase();
        (V("insert_image", { imageExtension: c, source: `upload_${m}` }), a.push(T));
      } else if (l.type === "fill") {
        let p = e.tree.get(l.node.id);
        if (!p) continue;
        P(ot(p));
        let v = at({
          identifier: o,
          intrinsicSize: { width: n.pixelWidth, height: n.pixelHeight },
          originalFilename: r,
        });
        (p.set({ fillImage: v, fillImageOriginalName: r, fillType: "image" }),
          rt(p) && !p.fillEnabled && p.set({ fillEnabled: !0 }),
          a.push(l.node.id));
      } else _e(l);
    }
    return (
      a.length === 0 ||
        (e.stores.scopeStore.active.id === t &&
          e.stores.selectionStore.set(a, { switchToProperties: !0 })),
      a
    );
  };
}
function zo(e) {
  return (t, o, r, i, n, d) => {
    let m = e.tree,
      s = [];
    for (let a of i) {
      mo.info("create svg:", o, "size:", r, "bytes:", t.length, "colorable?", d);
      let f = a.type === "node" ? a : { type: "node", parentId: a.node.id },
        l = ce(),
        { constraints: p } = po(e, f, l, r, o),
        v = we(m, f.parentId, () => {
          if (f.parentId && !m.has(f.parentId)) return;
          let T = _t(t, Ot.createEmpty, r);
          (P(T, "Import SVG failed"), T.setProp("parentid", f.parentId));
          let c = e.cloneNode(T);
          if ((ee.scaleVector(e, c.id, r), c.set({ ...p }), X.isOn("keepSVGViewBox"))) return c.id;
          let u = ee.ungroup(e, [c]);
          return u && u.length > 1 ? (ee.joinInGroup(e, u) ?? c.id) : (u?.[0] ?? c.id);
        });
      if (v === void 0) continue;
      let N = be(o)[1].toLowerCase();
      (V("insert_image", { imageExtension: N, source: `upload_${n}` }), s.push(v));
    }
    return (s.length === 0 || e.stores.selectionStore.set(s, { switchToProperties: !0 }), s);
  };
}
function po(e, t, o, r, i) {
  let n = t.parentId,
    d = t.position ? bt(e, n, t.position, r) : void 0,
    m = i.replace(Lo, "");
  return {
    baseAttributes: {
      name: Go(m),
      id: o,
      width: Math.max(1, r.width),
      height: Math.max(1, r.height),
      intrinsicWidth: r.width,
      intrinsicHeight: r.height,
      ...d,
    },
    constraints: d,
  };
}
async function Ho(e, t, o, r, i, n) {
  let d = "run-svgo";
  if (o.size > 1e6)
    return (
      b({
        type: "add",
        variant: "error",
        key: "svg-import-error",
        primaryText: "SVG is too large.",
        secondaryText: "You may need a PNG.",
        duration: 5e3,
      }),
      []
    );
  (Ve++,
    b({
      type: "add",
      variant: "progress",
      key: d,
      primaryText: "Optimizing SVG",
      secondaryText: "for performance\u2026",
      duration: 1 / 0,
      showCloseButton: "never",
    }));
  try {
    let s = await $o(o);
    if (e.stores.scopeStore.active.id !== n)
      return (
        b({
          type: "add",
          variant: "error",
          key: "svg-import-error",
          primaryText: "Couldn't add your SVG.",
          secondaryText: "Stay on the same page while SVG is optimized.",
          duration: 5e3,
        }),
        []
      );
    let f = Wt(s);
    return e.scheduler.wrapHandler(zo(e), void 0, co(i))(s, t, f, r, i, !0);
  } catch (s) {
    throw (
      console.error("Failed to insert SVG:", s),
      b({
        type: "add",
        variant: "error",
        key: "svg-import-error",
        primaryText: "Failed to insert",
        secondaryText: "your SVG.",
      }),
      s
    );
  } finally {
    (Ve--, Ve === 0 && b({ type: "remove", key: d }));
  }
}
async function $o(e) {
  let t = new FormData();
  t.set("file", e, "image.svg");
  let o = await fetch("/internal/svgo", { method: "POST", body: t, headers: qt });
  if (!o.ok) throw new Error("Failed to optimize SVG");
  return await o.text();
}
function fo(e, t, o) {
  if (!_(t)) return;
  let r = t.getSupportedLayout(e),
    i = t.getCurrentVariantSize(e);
  (Se(r.width) &&
    i?.widthType !== 0 &&
    ((o.widthType = 2), o.left !== null && o.right !== null && (o.right = null)),
    Se(r.height) &&
      i?.heightType !== 0 &&
      ((o.heightType = 2), o.top !== null && o.bottom !== null && (o.bottom = null)));
}
function uo(e, t) {
  let [o, ...r] = t.stores.selectionStore.ids;
  if (!o || r.length) return null;
  let i = t.tree,
    n = i.get(o),
    d = !1;
  for (; !d && n && ((d = pe(i, n, e, t.stores.scopeStore.active.id, t.componentLoader)), !d);)
    n = i.getParent(n.id);
  return n;
}
var jo = {
    defaultComponent: { insert: "insert-default", drag: "insert-default-drag" },
    libraryModule: { insert: "insert-library", drag: "insert-library-drag" },
    externalModuleComponent: { insert: "insert", drag: "insert-drag" },
  },
  Ee = "default_component_",
  fe = "external_",
  Re = "local_",
  yo = "legacy_design_component",
  ho = "legacy_code_component",
  go = `${Re}${ho}`,
  qo = `${fe}${ho}`,
  Io = `${Re}${yo}`,
  vo = `${fe}${yo}`;
var Ko = new Set(["form", "frame", "image-frame", "stack", "repeater"]),
  Xo = (e) => e.startsWith(Ee),
  Co = (e) => e === Io || e === vo,
  Zo = (e) => Ko.has(e);
function To({ canvasNode: e, source: t, isDrag: o, engine: r }) {
  let i = Yo(e, r);
  if ((V("component_instance", { componentType: i.type, source: t }), t === "insert_menu")) {
    let n = Jo(i);
    V("insert_menu_add", { type_added: n });
  }
  if (
    (i.type === "local_module_canvasComponent_component" &&
      V("component_canvas_instance", { componentId: e.id }),
    Co(i.type) && V("component_design_instance", {}),
    _(e) && K(e.codeComponentIdentifier))
  ) {
    let n = i.type.startsWith(Ee)
        ? "defaultComponent"
        : t === "team_library"
          ? "libraryModule"
          : "externalModuleComponent",
      d = jo[n][o ? "drag" : "insert"];
    r.stores.modulesStore.trackExternalComponentInsert([e.codeComponentIdentifier], d);
  }
}
function Yo(e, t) {
  if (_(e)) {
    let i = e.codeComponentIdentifier,
      n = We(i);
    if (!n)
      return {
        type: e.codeComponentIdentifier.startsWith(".") ? go : qo,
        codeComponentIdentifier: i,
      };
    if (ae(n)) return { type: `${Re}module_${n.type}_component`, codeComponentIdentifier: i };
    if (K(n)) {
      let d = t.stores.treeStore.tree.get(n.moduleId);
      return Mt(t.stores.treeStore.tree, i)
        ? { type: `${Ee}${d?.title}`, codeComponentIdentifier: i }
        : { type: `${fe}module_${d?.type ?? "unknown"}_component`, codeComponentIdentifier: i };
    }
  }
  let r = (e.replicaInfo?.master && t.tree.getNode(e.replicaInfo.master)) || e;
  return Je(r)
    ? Qe(r)
      ? { type: vo }
      : { type: Io }
    : ze(e)
      ? { type: "repeater" }
      : je(e)
        ? { type: "form" }
        : G(e)
          ? { type: "stack" }
          : M(e)
            ? e.fillType === "image"
              ? { type: "image-frame" }
              : { type: "frame" }
            : { type: "unknown" };
}
function Jo({ type: e }) {
  return e.startsWith("local_module_") || e === go
    ? "code_component"
    : Co(e)
      ? "design_component"
      : e.startsWith(fe)
        ? "package"
        : Xo(e) || Zo(e)
          ? e
          : "unknown";
}
function ke(e) {
  let t = new Ft({ widthType: 2, heightType: 2, html: "<p>No items</p>" });
  return (
    t.setTextColor("rgb(153, 153, 153)", !1),
    new Nt({
      name: "Empty State",
      widthType: 2,
      minWidth: "100%",
      heightType: 0,
      height: 100,
      minHeight: "100%",
      layout: "stack",
      stackDirection: "vertical",
      stackDistribution: "center",
      stackAlignment: "center",
      gap: 10,
      padding: 10,
      fillColor: "rgba(204, 204, 204, 0.2)",
      borderEnabled: !0,
      borderWidth: 1,
      borderPerSide: !1,
      borderTop: 1,
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      borderColor: "rgba(136, 136, 136, 0.2)",
      borderStyle: "dashed",
      radius: 20,
      children: new ct([t]),
      visible: qe("boolean", { type: "variableReference", id: It, providerId: e.getPrimaryId() }, [
        { ...ht({ name: "equals", input: "number", output: "boolean" }), value: 0 },
      ]),
    })
  );
}
function Tn(e, t) {
  let o = ke(t);
  (V("repeater_empty_state_create", {}),
    e.scheduler.process(() => {
      let r = ut(e.tree, t),
        i = r ? e.tree.getIndex(r) : -1,
        n = i >= 0 ? i + 1 : void 0;
      (e.tree.insertNode(o, t.getPrimaryId(), n), e.stores.selectionStore.set(o.id));
    }));
}
function xo(e, t) {
  for (let o of Object.values(e.variables))
    if (o?.type === "collectionreference" && o.dataIdentifier === t) return o;
}
function Po(e, t) {
  return Object.values(e.variables).find(
    (o) => o?.type === "multicollectionreference" && o.dataIdentifier === t
  );
}
function Qo(e, t) {
  let o = yt(t);
  if (Ce(o)) return { dataIdentifier: o.dataIdentifier, providerId: o.id };
  let r = e.tree.getScopeNodeFor(t);
  if (mt(r)) return { dataIdentifier: r.dataIdentifier, providerId: r.id };
}
function er(e, t, o) {
  let r = Qo(e, t);
  if (!r) return;
  let { dataIdentifier: i, providerId: n } = r,
    d = xe(e.tree, o.dataIdentifier),
    m = xe(e.tree, i);
  if (!d || !m) return;
  let s = xo(d, i),
    a = Po(d, i),
    f = xo(m, o.dataIdentifier),
    l = Po(m, o.dataIdentifier);
  if (l)
    return {
      id: k(),
      itemKey: "id",
      transforms: [{ id: k(), type: "valueTransform", name: "isIncludedIn", value: Y(l.id, n) }],
    };
  if (f)
    return {
      id: k(),
      itemKey: "id",
      transforms: [{ id: k(), type: "valueTransform", name: "equals", value: Y(f.id, n) }],
    };
  if (a)
    return {
      id: k(),
      itemKey: a.id,
      transforms: [{ id: k(), type: "valueTransform", name: "contains", value: Y("id", n) }],
    };
  if (s)
    return {
      id: k(),
      itemKey: s.id,
      transforms: [{ id: k(), type: "valueTransform", name: "equals", value: Y("id", n) }],
    };
}
function bo(e, t, o) {
  if (!Ce(o)) return;
  let r = er(e, t, o);
  if (r) {
    o.set({ collectionFilters: { filters: [r] } });
    return;
  }
  e.tree.insertNode(ke(o), o.id);
}
function Fe(e, t) {
  let { width: o, height: r } = e.tree.getRect(t);
  return (
    Q(t) &&
      J(t) &&
      (t.widthType === 2 && t.width > 0 && (o = t.width),
      t.heightType === 2 && t.height > 0 && (r = t.height)),
    { width: o, height: r }
  );
}
function tr(e, t, o) {
  let r = Fe(e, t);
  return { ...r, x: o.x - r.width / 2, y: o.y - r.height / 2 };
}
function or(e, t) {
  let o = Fe(e, t),
    r = e.stores.scopeStore.active,
    i = e.tree.getCommonGroundNode(e.stores.selectionStore.nodes),
    n,
    d;
  if (i) {
    let s = z(e.tree, i);
    ((n = S.center(s).x - o.width / 2), (d = s.y));
  } else if (Z(r) || He(r)) {
    let s = r.getPrimaryVariant(),
      a = z(e.tree, s);
    ((n = S.center(a).x - o.width / 2), (d = a.y));
  } else {
    let s = e.stores.canvasStore.getCanvasCenter();
    ((n = s.x - o.width / 2), (d = s.y - o.height / 2));
  }
  let m = { x: n, y: d };
  for (;;) {
    let s = { ...o, ...m },
      a = Tt(e.tree, r, s, !0);
    if (a.length === 0) return s;
    let f = vt(e.tree, a);
    m.x = f.x - o.width - 100;
  }
}
function vi(e, t, o, r = !1) {
  return wo(e, t, o, { isLayoutSection: r, allowSecondary: !1 })?.node ?? null;
}
function wo(e, t, o, { isLayoutSection: r, allowSecondary: i }) {
  let { tree: n } = e,
    d = Qt(i),
    m = n.getPotentialParentRenders(
      e.stores.scopeStore.active,
      e.stores.overlayStore.activeOverlays,
      S.cornerPoints({ ...o, width: 1, height: 1 }),
      o,
      e.componentLoader,
      t,
      d
    );
  return (r && (m = m.filter(({ node: a }) => B(a))), lt(m, n).at(-1) ?? null);
}
var Vo = { width: 1, widthType: 1, heightType: 2, left: 0, right: null };
function Eo({
  engine: e,
  component: t,
  canvasPoint: o,
  source: r,
  type: i,
  shouldBecomeFullWidthForVariants: n = new Set(),
  isLayoutSection: d = !1,
  notDraggedOntoCanvas: m = !1,
  insertAsGroundNode: s = !1,
  insertAsOverlayType: a,
  imageToUpload: f,
  parentId: l,
}) {
  At(t) ||
    To({
      canvasNode: t,
      source: i === "libraryModule" ? "team_library" : r,
      isDrag: !0,
      engine: e,
    });
  let { selectionStore: p, canvasStore: v, scopeStore: N } = e.stores,
    T = s ? or(e, t) : tr(e, t, o);
  a === 1 &&
    me(t) &&
    t.set({
      floatingPositionEnabled: !0,
      floatingPlacement: Ze,
      floatingAlignment: Ye,
      floatingOffsetX: 0,
      floatingOffsetY: 10,
    });
  let c = Zt(e, t),
    u = to(e, o, [c], null, d);
  if (m && d && !u) {
    let I = v.getCanvasVisibleRectTakingOverlaysIntoAccount(),
      h = p.ids.length === 1 && p.ids[0] ? e.tree.get(p.ids[0]) : null,
      C = h ? e.tree.getGroundNodeFor(h) : null;
    Be(C) && S.intersects(z(e.tree, C), I) && (u = { node: C, renderId: C.id });
  }
  let y = null;
  if (l) {
    let I = e.tree.getNode(l);
    I && (y = { node: I, renderId: I.id });
  } else y = u ?? wo(e, t, o, { isLayoutSection: d, allowSecondary: !0 });
  let F = p.ids.length === 0,
    E = N.active,
    L = it(E) ? E.getPrimaryVariant() : null;
  m && d && L && F && (y = { node: L, renderId: L.id });
  let g = y?.node ?? null;
  if (a === 1 && g && me(c) && !B(g)) {
    P(g, "Parent should exist");
    let I = g.getPrimaryId(),
      h = no(e.componentLoader, e.stores, "framer/useShowRelativeOverlay", I, c.draftOrCurrent());
    if (!h) return;
    e.tree.move(h.id, I);
    return;
  } else me(c) && c.set(Xe);
  if (
    s &&
    ((g = null),
    (y = null),
    (u = null),
    !S.containsRect(v.getCanvasVisibleRectTakingOverlaysIntoAccount(), T))
  ) {
    let I = S.center(T),
      h = v.zoom,
      C = Math.min(h, 1);
    v.scrollToCenter(I, { animate: !0, zoom: C });
  }
  let w = -1,
    ye = null;
  if (g && y) {
    Ut(e, g, t, T);
    let I = g.draftOrCurrent();
    G(I) && (u = { node: I, renderId: y.renderId });
  }
  if ((bo(e, g ?? N.active, t), u)) {
    let I = Fe(e, t);
    if (l) w = u.node.children.length;
    else {
      let { insertionIndex: h, wrap: C } = eo(u, e, o, I);
      (C && (ye = C), de(h) && (w = h));
    }
    if (m && d) {
      if (((w = u.node.children.length), p.ids.length === 1)) {
        let ne = p.ids[0],
          q = ne && e.tree.getNode(ne);
        if (q) {
          let Le = new Set([q.id]);
          for (let ve of q.ancestors()) Le.add(ve.id);
          let Me = u.node.children.findIndex((ve) => Le.has(ve.id));
          Me >= 0 && (w = Me + 1);
        }
      }
      let h,
        C = w > 0 ? u.node.children.at(w - 1) : void 0;
      if (C) {
        let ne = Pe(u.renderId, C.id),
          q = { node: C, renderId: ne };
        ((h = le(e.tree, q)), (h.y += h.height));
      } else h = le(e.tree, u);
      h.height = I.height;
      let A = le(e.tree, u),
        R = Math.min(h.x, A.x),
        O = Math.max(S.maxX(h), S.maxX(A));
      ((h.x = R), (h.width = O - R));
      let { zoom: H } = v,
        ge = v.getCanvasVisibleRectTakingOverlaysIntoAccount(),
        D = ge.width * H,
        $ = ge.height * H,
        W = 40,
        U = Math.max(D - W * 2, 100),
        Ie = Math.max($ - W * 2, 100),
        j = U / (h.width || 1),
        re = Ie / (h.height || 1),
        Fo = Math.min(j, re, 0.5),
        Ao = S.center(h);
      v.scrollToCenter(Ao, { animate: !0, zoom: Fo });
    }
    jt(e, u.node, t, T);
  }
  let he;
  if (y) {
    let { width: I, height: h } = T,
      C = S.cornerPoints(T),
      A = [];
    for (let O of C) A.push($t(e.tree, y, O));
    he = { ...S.boundingRectFromPoints(A), width: I, height: h };
  } else he = T;
  let te = c.updateForRect({
    rect: he,
    parentSizeInfo: null,
    constraintsLocked: !1,
    shouldGuessPinToBottom: g ? xt(e.tree, c, g) : !0,
    shouldGuessPinToRight: g ? Pt(e.tree, c, g) : !0,
  });
  (g && G(g) && J(c) && Q(c) && (te = nr(c, te)), fo(e.componentLoader, c, te), c.set(te, e.tree));
  let oe = c.id,
    Oe = !1,
    x = null;
  if (g) {
    if (
      ((x = g),
      tt(g) &&
        ((x = e.tree.getNode(g.originalid)),
        (Oe = !0),
        P(x, "Fail to insert node into variants: the original parent should exist")),
      ye && !Te(x) && G(x))
    ) {
      let A = { nodeId: x.id, renderId: y?.renderId ?? x.id };
      p.setTargets([A]);
      let R = oo(e, x, ye);
      if (!R) return;
      ((x = R), (y = p.getNodeRender(R)));
    }
    (e.moveNode(c.id, x.id, w),
      Oe &&
        (P(Te(g), "Fail to insert node into variants: the new parent should be a replica node"),
        (oe = pt(e, c, g, x))));
    let I = e.tree.getGroundNodeFor(x),
      h = I.resolveValue("name"),
      C = !!(h && n.has(h.toLowerCase()));
    if ((M(c) && C && c.set({ left: 0, width: 1, widthType: 1 }, e.tree), _(c) && et(I) && B(I))) {
      let R = { width: c.width, widthType: c.widthType, left: c.left, right: c.right };
      C && c.set(Vo);
      let O = zt(Lt(e.componentLoader, e.stores.treeStore), c);
      if (O) {
        let H = e.tree.getScopeNodeFor(I);
        Z(H) &&
          H.getTopLevelReplicaVariants().forEach((D) => {
            let $ = D.resolveValue("name");
            if (!$) return;
            let W = Ht($, O);
            if (!W || W === O.defaultVariant) return;
            let U = { ...D.replicaInfo.overrides },
              Ie = { ...D.replicaInfo, overrides: U },
              j = { ...U[c.id] },
              re = rr(C, n, $, R);
            (re && Object.assign(j, re),
              (j[st(O.key)] = { type: "enum", value: W }),
              (U[c.id] = j),
              D.set({ replicaInfo: Ie }));
          });
      }
    }
    Ge(g) &&
      nt(c) &&
      (C || c.set({ gridItemFillCellWidth: !0 }), Ke(g) || c.set({ gridItemFillCellHeight: !0 }));
  }
  if ((f && M(t) && Jt(f, t, e).catch(ie), l)) return;
  let Ro = y ? Pe(y.renderId, oe) : oe,
    ko = { nodeId: oe, renderId: Ro };
  p.setTargets([ko], { switchToLayers: !!l, switchToProperties: !0 });
}
function rr(e, t, o, r) {
  let i = t.has(o.toLowerCase());
  if (e !== i) return i ? Vo : r;
}
function nr(e, t) {
  let o = { ...t };
  return (
    (e.widthType === 3 || e.widthType === 1) &&
      de(t.width) &&
      t.widthType !== e.widthType &&
      (delete o.width, delete o.widthType),
    (e.heightType === 3 || e.heightType === 1) &&
      de(t.height) &&
      t.heightType !== e.heightType &&
      (delete o.height, delete o.heightType),
    o
  );
}
function ue({
  engine: e,
  module: t,
  identifier: o,
  position: r,
  centerInParent: i,
  insertAsGroundNode: n,
  update: d,
  parentId: m,
}) {
  let s = {
      width: Ne(t.metadata.intrinsicWidth, !0) ?? 200,
      height: Ne(t.metadata.intrinsicHeight, !0) ?? 200,
    },
    a = new Rt({
      codeComponentIdentifier: o,
      slotsAreChildNodes: X.isOn("componentSlotsAreChildNodes"),
      ...s,
    });
  if (m !== void 0) {
    let l = e.tree.getNode(m);
    (P(l, () => `Parent node not found: ${m}`),
      P(
        pe(e.tree, l, a, e.stores.scopeStore.active.id, e.componentLoader),
        () => `Parent does not accept children: ${m}`
      ));
  }
  d && d(a);
  let f = r;
  if (i && !n && !m) {
    let l = uo(a, e),
      p = l ? S.center(z(e.tree, l)) : null,
      v = e.stores.canvasStore.getCanvasVisibleRectTakingOverlaysIntoAccount();
    p && S.containsPoint(v, p) && (f = p);
  }
  return (
    Eo({
      engine: e,
      component: a,
      canvasPoint: f,
      source: "context_menu",
      insertAsGroundNode: m ? !1 : n,
      parentId: m,
    }),
    a
  );
}
var ir = se("clipboard:modules");
async function Xi(e, t, o) {
  if (!t || !ft(t)) return !1;
  let r = "insert-external-component";
  try {
    (await sr({ engine: e, moduleURL: t, position: o, centerInParent: !0, toastKey: r }),
      b({ type: "remove", key: r }));
  } catch (i) {
    (console.error("Failed to insert external component", i),
      b({
        type: "add",
        variant: "error",
        key: r,
        primaryText: "Failed to insert",
        secondaryText: "external component.",
      }));
  }
  return !0;
}
function Ae(e) {
  switch (e) {
    case "screen":
      return "web page.";
    case "vector":
      return "vector set.";
    default:
      return "external component.";
  }
}
async function sr({
  engine: e,
  moduleURL: t,
  position: o,
  centerInParent: r,
  insertAsGroundNode: i,
  toastKey: n,
  update: d,
  parentId: m,
}) {
  let {
    module: s,
    moduleIdentifier: a,
    externalIdentifier: f,
    insertUnlinked: l,
  } = await e.stores.modulesStore.lookUpModuleURL(t);
  if (s.type === "screen")
    if (ae(a)) {
      let p = Et(a.value);
      if (!p) return;
      let v = e.tree.getNode(p);
      if (!Z(v)) return;
      await e.loadScopesThenProcess([v], ([N]) => {
        N && so(e, N, N.getPrimaryVariant());
      });
    } else
      (n &&
        b({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: Ae(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
        await Kt(e, f));
  else if (l) {
    n &&
      b({
        type: "add",
        variant: "progress",
        key: n,
        primaryText: "Inserting",
        secondaryText: Ae(s.type),
        duration: 1 / 0,
        showCloseButton: "never",
      });
    let p = await io(e, { identifier: f, moduleType: s.type, enterIsolation: !1 });
    e.scheduler.processOrThrow(() => {
      p &&
        ue({
          engine: e,
          module: s,
          identifier: p.codeComponentIdentifier,
          position: o,
          centerInParent: r,
          insertAsGroundNode: i,
          update: d,
          parentId: m,
        });
    });
  } else {
    if (
      (n &&
        b({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: Ae(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
      !K(a))
    ) {
      e.scheduler.processOrThrow(() => {
        ue({
          engine: e,
          module: s,
          identifier: a.value,
          position: o,
          centerInParent: r,
          insertAsGroundNode: i,
          update: d,
          parentId: m,
        });
      });
      return;
    }
    (await e.stores.modulesStore
      .addExternalModulesToProject([a], {
        onTreeUpdate: () => {
          if (
            (ue({
              engine: e,
              module: s,
              identifier: a.value,
              position: o,
              centerInParent: r,
              insertAsGroundNode: i,
              update: d,
              parentId: m,
            }),
            s.type !== "vector")
          )
            return;
          let p = e.tree.getNodeWithTrait(s.id, Ue)?.annotation("framerVector");
          gt(p) &&
            e.stores.modulesStore
              .addOrUpdateVectorSetAndVectors({ moduleId: p.set.moduleId, saveId: "" })
              .catch(ie);
        },
      })
      .catch(ir.reportError),
      e.stores.modulesStore.trackExternalComponentInsert([a.value], "paste-url"));
  }
  return s;
}
export {
  jr as a,
  $o as b,
  fo as c,
  uo as d,
  To as e,
  Yo as f,
  Jo as g,
  ke as h,
  Tn as i,
  bo as j,
  Fe as k,
  vi as l,
  wo as m,
  Eo as n,
  nr as o,
  Xi as p,
  sr as q,
};
//# sourceMappingURL=chunk-QTR6HXNT.mjs.map
