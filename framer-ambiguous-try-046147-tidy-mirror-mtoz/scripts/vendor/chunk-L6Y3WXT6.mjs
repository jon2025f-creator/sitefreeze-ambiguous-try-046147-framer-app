import { c as Jt, d as we, g as Qt, k as eo, l as to } from "chunk-BEJXCFTP.mjs";
import { Db as io, va as no } from "chunk-G7W2P3QK.mjs";
import {
  Ab as Mt,
  Cb as _t,
  Db as Dt,
  Qb as Wt,
  Rb as Gt,
  Sb as Bt,
  Wi as oo,
  be as Ht,
  bh as ee,
  ce as $t,
  j as ct,
  kb as fe,
  lb as Ot,
  p as pt,
  pg as jt,
  q as bt,
  sj as ro,
  v as Pt,
  zb as Lt,
} from "chunk-R2R4DMTW.mjs";
import { E as Yt, n as qt, o as Xt, q as Zt, z as Kt } from "chunk-RWPKWJBH.mjs";
import { D as Pe } from "chunk-UZ3YLSXQ.mjs";
import {
  M as Vt,
  Ne as At,
  a as Nt,
  b as xt,
  ib as Rt,
  ud as Ft,
  y as le,
} from "chunk-OI2UHGTV.mjs";
import { Kd as kt, Pa as St, v as It } from "chunk-5ZHHUVR3.mjs";
import { s as Ut } from "chunk-6LFNE4ZE.mjs";
import {
  Du as wt,
  Km as H,
  Lm as vt,
  Mf as mt,
  Na as rt,
  Nk as be,
  Sj as yt,
  Vq as Tt,
  Ye as Ne,
  Z as Xe,
  Ze as dt,
  Zm as Ct,
  _ as ce,
  aa as Ze,
  ba as Ke,
  co as F,
  ox as Et,
  p as Ue,
  qh as lt,
  tk as ht,
  va as Q,
} from "chunk-ZMQ5KVTE.mjs";
import {
  $d as Y,
  $k as ut,
  Ab as B,
  Bb as We,
  Bj as Se,
  Bq as gt,
  Cb as Ge,
  Db as Ie,
  Eg as J,
  Fb as Be,
  Gb as ze,
  Hj as st,
  Ib as He,
  Jb as K,
  Jc as $e,
  Jl as xe,
  Ke as qe,
  Nf as Ye,
  Oa as Z,
  Pa as ae,
  Pb as M,
  Pf as Je,
  Ui as it,
  Vf as Te,
  Xk as ft,
  Ya as De,
  ck as at,
  dg as Qe,
  l as N,
  mg as et,
  og as z,
  re as je,
  rh as tt,
  sh as ot,
  wi as nt,
  zb as L,
} from "chunk-DWJUKCZJ.mjs";
import { c as pe } from "chunk-TXCWPKWI.mjs";
import { c as w } from "chunk-QTTSE2F2.mjs";
import { t as zt } from "chunk-VWQVUKFJ.mjs";
import { f as R } from "chunk-MYK4KKPI.mjs";
import { b as Me } from "chunk-7JB7LKQK.mjs";
import { p as me } from "chunk-2DZMHF6D.mjs";
import { e as de } from "chunk-Y3GZLMBF.mjs";
import { b as P, c as _e } from "chunk-4JY5UMT2.mjs";
import { b as ie, i as se } from "chunk-WBI6GGAG.mjs";
var Ao = { track: !0 };
function so(e) {
  let t = { ...e, event: "import_paste_bitmap" };
  Me(t, Ao);
}
var ao = se("addImagesToCanvas"),
  Oo = /\.[^.]+$/u;
function mo(e) {
  return e === "plugin" ? 3 : 1;
}
async function zr(e, t, o, r, i = !1, n = !1, d) {
  if (!t || t.length === 0) return [];
  if (!Vt(e.stores.scopeStore.active)) return [];
  let m = e.stores.scopeStore.active.id,
    s = d ?? _o(e.stores, t.length, o, i),
    a = new oo(e, { silent: n, quiet: me.isOn("quietCanvasImageUploads") }),
    y = new Set(),
    l = [];
  for (let S of t)
    if (S instanceof File && S.type === dt.get("svg")) {
      let E = await S.text();
      Zt(E) ? (a.add(S), y.add(S.name)) : l.push(S);
    } else a.add(S);
  let p = (await a.results()).filter(Kt);
  if (!Ct(e.tree.get(m))) return [];
  let x = e.scheduler.wrapHandler(Go(e, m), void 0, mo(r)),
    I = [],
    { modalStore: c, scopeStore: u, chromeStore: T, codeEditorStore: he } = e.stores;
  for (let { filename: S, originalFilename: E, imageSize: f } of p) {
    let V = y.has(E) ? "svg" : "bitmap",
      { nonZeroNaturalWidth: _, nonZeroNaturalHeight: D } = qt(f);
    I.push(
      ...x(
        S,
        E,
        V,
        {
          width: _ / window.devicePixelRatio,
          height: D / window.devicePixelRatio,
          pixelWidth: _,
          pixelHeight: D,
        },
        s,
        r
      )
    );
  }
  if (l.length) {
    if (l.length === 1) return await Mo(e, l[0], r, s, m);
    He(u.active)
      ? c.set({
          type: "VectorImport",
          svgsToImport: l,
          scopeId: u.active.id,
          currentVectorLayout: Lo(u.active),
          source: "canvas",
        })
      : c.set({
          type: "VectorSetCreation",
          source: "canvas",
          onConfirm: (S) => {
            let E = pe();
            c.set({
              type: "VectorImport",
              svgsToImport: l,
              scopeId: E,
              source: "canvas",
              onCreateVectorSet: (f, V) => ee.createVectorSet(e, S, !1, null, f, "import", V),
              onSuccess: e.scheduler.wrapHandler((f) => {
                ((T.vectorSetsExpanded = !0),
                  u.select(f.id, { keepHistory: !0 }),
                  $t(e, f.id, Rt, !1),
                  he.closeEditor());
              }),
            });
          },
        });
  }
  return [...I];
}
function Lo(e) {
  let t = e.children.findLast((o) => Tt(o));
  if (t)
    return (
      P(J(t), "Vector Set items must support size."),
      P(Q(t), "Vector Set items must be pinnable."),
      { width: t.width, height: t.height, x: t.left ?? 0, y: t.top ?? 0 }
    );
}
function Mo(e, t, o, r, i) {
  return t ? zo(e, t.name, t, r, o, i) : [];
}
function _o(e, t, o, r) {
  let { selectionStore: i, scopeStore: n, treeStore: d } = e,
    m = { type: "node", parentId: Pt(d.tree, n.active, [], o), position: o };
  if (r || i.nodes.length === 0) return [m];
  let s = [];
  for (let a of i.nodes) {
    if (!L(a)) return [m];
    if (a.layout !== void 0) s.push({ type: "node", parentId: a.id });
    else if (!z(a)) s.push({ type: "fill", node: a });
    else return [m];
  }
  return t > 1 && s.some((a) => a.type === "fill") ? [m] : s;
}
function Do([e = "", ...t]) {
  return [e.toUpperCase(), ...t].join("");
}
function Wo(e) {
  let t = Do(e.replace("_", " "));
  if (t !== "Graphic") return t;
}
function Go(e, t) {
  return (o, r, i, n, d, m) => {
    let s = e.tree,
      a = [];
    for (let y of d) {
      let l = y.type === "fill" && i === "svg" ? { type: "node", parentId: y.node.id } : y;
      if (l.type === "node") {
        let p = pe(),
          { baseAttributes: v } = co(e, l, p, n, r);
        ao.info("create image:", r, "size:", n);
        let x = {
            ...v,
            fillImagePixelWidth: n.pixelWidth,
            fillImagePixelHeight: n.pixelHeight,
            overflow: "visible",
          },
          I = we(s, l.parentId, (u, T) => {
            if (!(u && !s.has(u)))
              return (
                e.createImage(
                  o,
                  r,
                  { width: n.pixelWidth, height: n.pixelHeight },
                  u,
                  { ...x, ...T },
                  l.type === "node" ? l.index : void 0,
                  t
                ),
                p
              );
          });
        if (I === void 0) continue;
        so({});
        let c = Pe(r)[1].toLowerCase();
        (R("insert_image", { imageExtension: c, source: `upload_${m}` }), a.push(I));
      } else if (l.type === "fill") {
        let p = e.tree.get(l.node.id);
        if (!p) continue;
        P(tt(p));
        let v = at({
          identifier: o,
          intrinsicSize: { width: n.pixelWidth, height: n.pixelHeight },
          originalFilename: r,
        });
        (p.set({ fillImage: v, fillImageOriginalName: r, fillType: "image" }),
          ot(p) && !p.fillEnabled && p.set({ fillEnabled: !0 }),
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
function Bo(e) {
  return (t, o, r, i, n, d) => {
    let m = e.tree,
      s = [];
    for (let a of i) {
      ao.info("create svg:", o, "size:", r, "bytes:", t.length, "colorable?", d);
      let y = a.type === "node" ? a : { type: "node", parentId: a.node.id },
        l = pe(),
        { constraints: p } = co(e, y, l, r, o),
        v = we(m, y.parentId, () => {
          if (y.parentId && !m.has(y.parentId)) return;
          let I = Bt(t, At.createEmpty, r);
          (P(I, "Import SVG failed"), I.setProp("parentid", y.parentId));
          let c = e.cloneNode(I);
          (ee.scaleVector(e, c.id, r), c.set({ ...p }));
          let u = ee.ungroup(e, [c]);
          return u && u.length > 1 ? (ee.joinInGroup(e, u) ?? c.id) : (u?.[0] ?? c.id);
        });
      if (v === void 0) continue;
      let x = Pe(o)[1].toLowerCase();
      (R("insert_image", { imageExtension: x, source: `upload_${n}` }), s.push(v));
    }
    return (s.length === 0 || e.stores.selectionStore.set(s, { switchToProperties: !0 }), s);
  };
}
function co(e, t, o, r, i) {
  let n = t.parentId,
    d = t.position ? bt(e, n, t.position, r) : void 0,
    m = i.replace(Oo, "");
  return {
    baseAttributes: {
      name: Wo(m),
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
async function zo(e, t, o, r, i, n) {
  let d = "run-svgo";
  if (o.size > 1e6)
    return (
      w({
        type: "add",
        variant: "error",
        key: d,
        primaryText: "SVG is too large.",
        secondaryText: "You may need a PNG.",
        duration: 5e3,
      }),
      []
    );
  w({
    type: "add",
    variant: "progress",
    key: d,
    primaryText: "Optimizing SVG",
    secondaryText: "for performance\u2026",
    duration: 1 / 0,
    showCloseButton: "never",
  });
  try {
    let s = await Ho(o);
    if (e.stores.scopeStore.active.id !== n)
      return (
        w({
          type: "add",
          variant: "error",
          key: d,
          primaryText: "Couldn't add your SVG.",
          secondaryText: "Stay on the same page while SVG is optimized.",
          duration: 5e3,
        }),
        []
      );
    let y = Xt(s),
      p = e.scheduler.wrapHandler(Bo(e), void 0, mo(i))(s, t, y, r, i, !0);
    return (w({ type: "remove", key: d }), p);
  } catch (s) {
    throw (
      console.error("Failed to insert SVG:", s),
      w({
        type: "add",
        variant: "error",
        key: d,
        primaryText: "Failed to insert",
        secondaryText: "your SVG.",
      }),
      s
    );
  }
}
async function Ho(e) {
  let t = new FormData();
  t.set("file", e, "image.svg");
  let o = await fetch("/internal/svgo", { method: "POST", body: t, headers: zt });
  if (!o.ok) throw new Error("Failed to optimize SVG");
  return await o.text();
}
function lo(e, t, o) {
  if (!M(t)) return;
  let r = t.getSupportedLayout(e),
    i = t.getCurrentVariantSize(e);
  (Se(r.width) &&
    i?.widthType !== 0 &&
    ((o.widthType = 2), o.left !== null && o.right !== null && (o.right = null)),
    Se(r.height) &&
      i?.heightType !== 0 &&
      ((o.heightType = 2), o.top !== null && o.bottom !== null && (o.bottom = null)));
}
function fo(e, t) {
  let [o, ...r] = t.stores.selectionStore.ids;
  if (!o || r.length) return null;
  let i = t.tree,
    n = i.get(o),
    d = !1;
  for (; !d && n && ((d = le(i, n, e, t.stores.scopeStore.active.id, t.componentLoader)), !d);)
    n = i.getParent(n.id);
  return n;
}
var Uo = {
    defaultComponent: { insert: "insert-default", drag: "insert-default-drag" },
    libraryModule: { insert: "insert-library", drag: "insert-library-drag" },
    externalModuleComponent: { insert: "insert", drag: "insert-drag" },
  },
  Ve = "default_component_",
  ue = "external_",
  Ee = "local_",
  uo = "legacy_design_component",
  yo = "legacy_code_component",
  ho = `${Ee}${yo}`,
  jo = `${ue}${yo}`,
  go = `${Ee}${uo}`,
  vo = `${ue}${uo}`;
var qo = new Set(["form", "frame", "image-frame", "stack", "repeater"]),
  Xo = (e) => e.startsWith(Ve),
  Co = (e) => e === go || e === vo,
  Zo = (e) => qo.has(e);
function Io({ canvasNode: e, source: t, isDrag: o, engine: r }) {
  let i = Ko(e, r);
  if ((R("component_instance", { componentType: i.type, source: t }), t === "insert_menu")) {
    let n = Yo(i);
    R("insert_menu_add", { type_added: n });
  }
  if (
    (i.type === "local_module_canvasComponent_component" &&
      R("component_canvas_instance", { componentId: e.id }),
    Co(i.type) && R("component_design_instance", {}),
    M(e) && Z(e.codeComponentIdentifier))
  ) {
    let n = i.type.startsWith(Ve)
        ? "defaultComponent"
        : t === "team_library"
          ? "libraryModule"
          : "externalModuleComponent",
      d = Uo[n][o ? "drag" : "insert"];
    r.stores.modulesStore.trackExternalComponentInsert([e.codeComponentIdentifier], d);
  }
}
function Ko(e, t) {
  if (M(e)) {
    let i = e.codeComponentIdentifier,
      n = De(i);
    if (!n)
      return {
        type: e.codeComponentIdentifier.startsWith(".") ? ho : jo,
        codeComponentIdentifier: i,
      };
    if (ae(n)) return { type: `${Ee}module_${n.type}_component`, codeComponentIdentifier: i };
    if (Z(n)) {
      let d = t.stores.treeStore.tree.get(n.moduleId);
      return Ut(t.stores.treeStore.tree, i)
        ? { type: `${Ve}${d?.title}`, codeComponentIdentifier: i }
        : { type: `${ue}module_${d?.type ?? "unknown"}_component`, codeComponentIdentifier: i };
    }
  }
  let r = (e.replicaInfo?.master && t.tree.getNode(e.replicaInfo.master)) || e;
  return Ye(r)
    ? Je(r)
      ? { type: vo }
      : { type: go }
    : Be(e)
      ? { type: "repeater" }
      : Ue(e)
        ? { type: "form" }
        : B(e)
          ? { type: "stack" }
          : L(e)
            ? e.fillType === "image"
              ? { type: "image-frame" }
              : { type: "frame" }
            : { type: "unknown" };
}
function Yo({ type: e }) {
  return e.startsWith("local_module_") || e === ho
    ? "code_component"
    : Co(e)
      ? "design_component"
      : e.startsWith(ue)
        ? "package"
        : Xo(e) || Zo(e)
          ? e
          : "unknown";
}
function Re(e) {
  let t = new kt({ widthType: 2, heightType: 2, html: "<p>No items</p>" });
  return (
    t.setTextColor("rgb(153, 153, 153)", !1),
    new St({
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
      children: new it([t]),
      visible: je("boolean", { type: "variableReference", id: gt, providerId: e.getPrimaryId() }, [
        { ...yt({ name: "equals", input: "number", output: "boolean" }), value: 0 },
      ]),
    })
  );
}
function gn(e, t) {
  let o = Re(t);
  (R("repeater_empty_state_create", {}),
    e.scheduler.process(() => {
      let r = ft(e.tree, t),
        i = r ? e.tree.getIndex(r) : -1,
        n = i >= 0 ? i + 1 : void 0;
      (e.tree.insertNode(o, t.getPrimaryId(), n), e.stores.selectionStore.set(o.id));
    }));
}
function No(e, t) {
  for (let o of Object.values(e.variables))
    if (o?.type === "collectionreference" && o.dataIdentifier === t) return o;
}
function xo(e, t) {
  return Object.values(e.variables).find(
    (o) => o?.type === "multicollectionreference" && o.dataIdentifier === t
  );
}
function Jo(e, t) {
  let o = ut(t);
  if (Ie(o)) return { dataIdentifier: o.dataIdentifier, providerId: o.id };
  let r = e.tree.getScopeNodeFor(t);
  if (mt(r)) return { dataIdentifier: r.dataIdentifier, providerId: r.id };
}
function Qo(e, t, o) {
  let r = Jo(e, t);
  if (!r) return;
  let { dataIdentifier: i, providerId: n } = r,
    d = xe(e.tree, o.dataIdentifier),
    m = xe(e.tree, i);
  if (!d || !m) return;
  let s = No(d, i),
    a = xo(d, i),
    y = No(m, o.dataIdentifier),
    l = xo(m, o.dataIdentifier);
  if (l)
    return {
      id: F(),
      itemKey: "id",
      transforms: [{ id: F(), type: "valueTransform", name: "isIncludedIn", value: Y(l.id, n) }],
    };
  if (y)
    return {
      id: F(),
      itemKey: "id",
      transforms: [{ id: F(), type: "valueTransform", name: "equals", value: Y(y.id, n) }],
    };
  if (a)
    return {
      id: F(),
      itemKey: a.id,
      transforms: [{ id: F(), type: "valueTransform", name: "contains", value: Y("id", n) }],
    };
  if (s)
    return {
      id: F(),
      itemKey: s.id,
      transforms: [{ id: F(), type: "valueTransform", name: "equals", value: Y("id", n) }],
    };
}
function bo(e, t, o) {
  if (!Ie(o)) return;
  let r = Qo(e, t, o);
  if (r) {
    o.set({ collectionFilters: { filters: [r] } });
    return;
  }
  e.tree.insertNode(Re(o), o.id);
}
function ke(e, t) {
  let { width: o, height: r } = e.tree.getRect(t);
  return (
    Q(t) &&
      J(t) &&
      (t.widthType === 2 && t.width > 0 && (o = t.width),
      t.heightType === 2 && t.height > 0 && (r = t.height)),
    { width: o, height: r }
  );
}
function er(e, t, o) {
  let r = ke(e, t);
  return { ...r, x: o.x - r.width / 2, y: o.y - r.height / 2 };
}
function tr(e, t) {
  let o = ke(e, t),
    r = e.stores.scopeStore.active,
    i = e.tree.getCommonGroundNode(e.stores.selectionStore.nodes),
    n,
    d;
  if (i) {
    let s = H(e.tree, i);
    ((n = N.center(s).x - o.width / 2), (d = s.y));
  } else if (K(r) || ze(r)) {
    let s = r.getPrimaryVariant(),
      a = H(e.tree, s);
    ((n = N.center(a).x - o.width / 2), (d = a.y));
  } else {
    let s = e.stores.canvasStore.getCanvasCenter();
    ((n = s.x - o.width / 2), (d = s.y - o.height / 2));
  }
  let m = { x: n, y: d };
  for (;;) {
    let s = { ...o, ...m },
      a = It(e.tree, r, s, !0);
    if (a.length === 0) return s;
    let y = vt(e.tree, a);
    m.x = y.x - o.width - 100;
  }
}
function ui(e, t, o, r = !1) {
  return Po(e, t, o, { isLayoutSection: r, allowSecondary: !1 })?.node ?? null;
}
function Po(e, t, o, { isLayoutSection: r, allowSecondary: i }) {
  let { tree: n } = e,
    d = Jt(i),
    m = n.getPotentialParentRenders(
      e.stores.scopeStore.active,
      e.stores.overlayStore.activeOverlays,
      N.cornerPoints({ ...o, width: 1, height: 1 }),
      o,
      e.componentLoader,
      t,
      d
    );
  return (r && (m = m.filter(({ node: a }) => z(a))), pt(m, n).at(-1) ?? null);
}
var wo = { width: 1, widthType: 1, heightType: 2, left: 0, right: null };
function Vo({
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
  imageToUpload: y,
  parentId: l,
}) {
  Ft(t) ||
    Io({
      canvasNode: t,
      source: i === "libraryModule" ? "team_library" : r,
      isDrag: !0,
      engine: e,
    });
  let { selectionStore: p, canvasStore: v, scopeStore: x } = e.stores,
    I = s ? tr(e, t) : er(e, t, o);
  a === 1 &&
    ce(t) &&
    t.set({
      floatingPositionEnabled: !0,
      floatingPlacement: Ze,
      floatingAlignment: Ke,
      floatingOffsetX: 0,
      floatingOffsetY: 10,
    });
  let c = jt(e, t),
    u = eo(e, o, [c], null, d);
  if (m && d && !u) {
    let g = v.getCanvasVisibleRectTakingOverlaysIntoAccount(),
      h = p.ids.length === 1 && p.ids[0] ? e.tree.get(p.ids[0]) : null,
      C = h ? e.tree.getGroundNodeFor(h) : null;
    Ge(C) && N.intersects(H(e.tree, C), g) && (u = { node: C, renderId: C.id });
  }
  let T = null;
  if (l) {
    let g = e.tree.getNode(l);
    g && (T = { node: g, renderId: g.id });
  } else T = u ?? Po(e, t, o, { isLayoutSection: d, allowSecondary: !0 });
  let he = p.ids.length === 0,
    S = x.active,
    E = st(S) ? S.getPrimaryVariant() : null;
  m && d && E && he && (T = { node: E, renderId: E.id });
  let f = T?.node ?? null;
  if (a === 1 && f && ce(c) && !z(f)) {
    P(f, "Parent should exist");
    let g = f.getPrimaryId(),
      h = ro(e.componentLoader, e.stores, "framer/useShowRelativeOverlay", g, c.draftOrCurrent());
    if (!h) return;
    e.tree.move(h.id, g);
    return;
  } else ce(c) && c.set(Xe);
  if (
    s &&
    ((f = null),
    (T = null),
    (u = null),
    !N.containsRect(v.getCanvasVisibleRectTakingOverlaysIntoAccount(), I))
  ) {
    let g = N.center(I),
      h = v.zoom,
      C = Math.min(h, 1);
    v.scrollToCenter(g, { animate: !0, zoom: C });
  }
  let V = -1,
    _ = null;
  if (f && T) {
    Wt(e, f, t, I);
    let g = f.draftOrCurrent();
    B(g) && (u = { node: g, renderId: T.renderId });
  }
  if ((bo(e, f ?? x.active, t), u)) {
    let g = ke(e, t);
    if (l) V = u.node.children.length;
    else {
      let { insertionIndex: h, wrap: C } = Qt(u, e, o, g);
      (C && (_ = C), de(h) && (V = h));
    }
    if (m && d) {
      if (((V = u.node.children.length), p.ids.length === 1)) {
        let ne = p.ids[0],
          X = ne && e.tree.getNode(ne);
        if (X) {
          let Oe = new Set([X.id]);
          for (let Ce of X.ancestors()) Oe.add(Ce.id);
          let Le = u.node.children.findIndex((Ce) => Oe.has(Ce.id));
          Le >= 0 && (V = Le + 1);
        }
      }
      let h,
        C = V > 0 ? u.node.children.at(V - 1) : void 0;
      if (C) {
        let ne = be(u.renderId, C.id),
          X = { node: C, renderId: ne };
        ((h = fe(e.tree, X)), (h.y += h.height));
      } else h = fe(e.tree, u);
      h.height = g.height;
      let A = fe(e.tree, u),
        k = Math.min(h.x, A.x),
        O = Math.max(N.maxX(h), N.maxX(A));
      ((h.x = k), (h.width = O - k));
      let { zoom: $ } = v,
        ge = v.getCanvasVisibleRectTakingOverlaysIntoAccount(),
        W = ge.width * $,
        U = ge.height * $,
        G = 40,
        j = Math.max(W - G * 2, 100),
        ve = Math.max(U - G * 2, 100),
        q = j / (h.width || 1),
        re = ve / (h.height || 1),
        ko = Math.min(q, re, 0.5),
        Fo = N.center(h);
      v.scrollToCenter(Fo, { animate: !0, zoom: ko });
    }
    Gt(e, u.node, t, I);
  }
  let D;
  if (T) {
    let { width: g, height: h } = I,
      C = N.cornerPoints(I),
      A = [];
    for (let O of C) A.push(Ot(e.tree, T, O));
    D = { ...N.boundingRectFromPoints(A), width: g, height: h };
  } else D = I;
  let te = c.updateForRect({
    rect: D,
    parentSizeInfo: null,
    constraintsLocked: !1,
    shouldGuessPinToBottom: f ? Nt(e.tree, c, f) : !0,
    shouldGuessPinToRight: f ? xt(e.tree, c, f) : !0,
  });
  (f && B(f) && J(c) && Q(c) && (te = rr(c, te)), lo(e.componentLoader, c, te), c.set(te, e.tree));
  let oe = c.id,
    Ae = !1,
    b = null;
  if (f) {
    if (
      ((b = f),
      et(f) &&
        ((b = e.tree.getNode(f.originalid)),
        (Ae = !0),
        P(b, "Fail to insert node into variants: the original parent should exist")),
      _ && !Te(b) && B(b))
    ) {
      let A = { nodeId: b.id, renderId: T?.renderId ?? b.id };
      p.setTargets([A]);
      let k = to(e, b, _);
      if (!k) return;
      ((b = k), (T = p.getNodeRender(k)));
    }
    (e.moveNode(c.id, b.id, V),
      Ae &&
        (P(Te(f), "Fail to insert node into variants: the new parent should be a replica node"),
        (oe = ct(e, c, f, b))));
    let g = e.tree.getGroundNodeFor(b),
      h = g.resolveValue("name"),
      C = !!(h && n.has(h.toLowerCase()));
    if ((L(c) && C && c.set({ left: 0, width: 1, widthType: 1 }, e.tree), M(c) && Qe(g) && z(g))) {
      let k = { width: c.width, widthType: c.widthType, left: c.left, right: c.right };
      C && c.set(wo);
      let O = Lt(e.componentLoader, c);
      if (O) {
        let $ = e.tree.getScopeNodeFor(g);
        K($) &&
          $.getTopLevelReplicaVariants().forEach((W) => {
            let U = W.resolveValue("name");
            if (!U) return;
            let G = Mt(U, O);
            if (!G || G === O.defaultVariant) return;
            let j = { ...W.replicaInfo.overrides },
              ve = { ...W.replicaInfo, overrides: j },
              q = { ...j[c.id] },
              re = or(C, n, U, k);
            (re && Object.assign(q, re),
              (q[nt(O.key)] = { type: "enum", value: G }),
              (j[c.id] = q),
              W.set({ replicaInfo: ve }));
          });
      }
    }
    We(f) &&
      rt(c) &&
      (C || c.set({ gridItemFillCellWidth: !0 }), qe(f) || c.set({ gridItemFillCellHeight: !0 }));
  }
  if ((y && L(t) && Yt(y, t, e).catch(ie), l)) return;
  let Eo = T ? be(T.renderId, oe) : oe,
    Ro = { nodeId: oe, renderId: Eo };
  p.setTargets([Ro], { switchToLayers: !!l, switchToProperties: !0 });
}
function or(e, t, o, r) {
  let i = t.has(o.toLowerCase());
  if (e !== i) return i ? wo : r;
}
function rr(e, t) {
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
function ye({
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
    a = new Et({
      codeComponentIdentifier: o,
      slotsAreChildNodes: me.isOn("componentSlotsAreChildNodes"),
      ...s,
    });
  if (m !== void 0) {
    let l = e.tree.getNode(m);
    (P(l, () => `Parent node not found: ${m}`),
      P(
        le(e.tree, l, a, e.stores.scopeStore.active.id, e.componentLoader),
        () => `Parent does not accept children: ${m}`
      ));
  }
  d && d(a);
  let y = r;
  if (i && !n && !m) {
    let l = fo(a, e),
      p = l ? N.center(H(e.tree, l)) : null,
      v = e.stores.canvasStore.getCanvasVisibleRectTakingOverlaysIntoAccount();
    p && N.containsPoint(v, p) && (y = p);
  }
  return (
    Vo({
      engine: e,
      component: a,
      canvasPoint: y,
      source: "context_menu",
      insertAsGroundNode: m ? !1 : n,
      parentId: m,
    }),
    a
  );
}
var nr = se("clipboard:modules");
async function $i(e, t, o) {
  if (!t || !lt(t)) return !1;
  let r = "insert-external-component";
  try {
    (await ir({ engine: e, moduleURL: t, position: o, centerInParent: !0, toastKey: r }),
      w({ type: "remove", key: r }));
  } catch (i) {
    (console.error("Failed to insert external component", i),
      w({
        type: "add",
        variant: "error",
        key: r,
        primaryText: "Failed to insert",
        secondaryText: "external component.",
      }));
  }
  return !0;
}
function Fe(e) {
  switch (e) {
    case "screen":
      return "web page.";
    case "vector":
      return "vector set.";
    default:
      return "external component.";
  }
}
async function ir({
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
    externalIdentifier: y,
    insertUnlinked: l,
  } = await e.stores.modulesStore.lookUpModuleURL(t);
  if (s.type === "screen")
    if (ae(a)) {
      let p = wt(a.value);
      if (!p) return;
      let v = e.tree.getNode(p);
      if (!K(v)) return;
      await e.loadScopesThenProcess([v], ([x]) => {
        x && io(e, x, x.getPrimaryVariant());
      });
    } else
      (n &&
        w({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: Fe(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
        await Ht(e, y));
  else if (l) {
    n &&
      w({
        type: "add",
        variant: "progress",
        key: n,
        primaryText: "Inserting",
        secondaryText: Fe(s.type),
        duration: 1 / 0,
        showCloseButton: "never",
      });
    let p = await no(e, { identifier: y, moduleType: s.type, enterIsolation: !1 });
    await e.scheduler.processWhenReadyAsync(() => {
      p &&
        ye({
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
        w({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: Fe(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
      !Z(a))
    ) {
      await e.scheduler.processWhenReadyAsync(() => {
        ye({
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
            (ye({
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
          let p = e.tree.getNodeWithTrait(s.id, $e)?.annotation("framerVector");
          ht(p) &&
            e.stores.modulesStore
              .addOrUpdateVectorSetAndVectors({ moduleId: p.set.moduleId, saveId: "" })
              .catch(ie);
        },
      })
      .catch(nr.reportError),
      e.stores.modulesStore.trackExternalComponentInsert([a.value], "paste-url"));
  }
  return s;
}
function qi(e, t, o) {
  if (!t && !o) return !1;
  for (let r of e)
    if (o) {
      if (o.includes(r)) return !0;
    } else if (t && Dt(r) && t.includes(_t[r])) return !0;
  return !1;
}
export {
  zr as a,
  Ho as b,
  lo as c,
  fo as d,
  Io as e,
  Ko as f,
  Yo as g,
  Re as h,
  gn as i,
  bo as j,
  ke as k,
  ui as l,
  Po as m,
  Vo as n,
  rr as o,
  $i as p,
  ir as q,
  qi as r,
};
//# sourceMappingURL=chunk-L6Y3WXT6.mjs.map
