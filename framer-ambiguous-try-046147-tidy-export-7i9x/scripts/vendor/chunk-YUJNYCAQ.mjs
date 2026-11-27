import {
  Cj as Ge,
  Fj as He,
  Gj as $e,
  Je as A,
  Jh as O,
  Ld as Be,
  Sb as P,
  Tb as Oe,
  Ub as Le,
  Vh as We,
  Wh as L,
  Yh as je,
  ik as _e,
  kb as Ae,
  qf as M,
} from "chunk-IYYSJTFJ.mjs";
import { I as Fe, L as Pe } from "chunk-EOKX2JZH.mjs";
import { q as F } from "chunk-JGR6L5BH.mjs";
import {
  Dl as ke,
  Fm as ve,
  Jn as Ve,
  Kn as De,
  Ox as we,
  Rx as Re,
  Uh as Se,
  aw as be,
  iy as w,
  jl as b,
  lb as q,
  ll as Ne,
} from "chunk-PFOAQTXZ.mjs";
import {
  Af as pe,
  Ei as he,
  Gi as Te,
  Hi as xe,
  Ki as ge,
  Km as Me,
  Sj as Ee,
  Zf as ue,
  ci as fe,
  hb as D,
  nb as ce,
  nc as _,
  qb as v,
  ub as $,
  wi as Ce,
  zi as Ie,
} from "chunk-EWG6V33O.mjs";
import { c as ie, d as se, f as T, g as ae, o as S, q as de } from "chunk-GV47JEYI.mjs";
import { d as U } from "chunk-EHWAAKT7.mjs";
import { c as E, d as Ue } from "chunk-FH36ATMQ.mjs";
import { g as R } from "chunk-622DKHBO.mjs";
import { b as ze } from "chunk-O5WG5ZBQ.mjs";
import { a as ye, g as K } from "chunk-NJXSBLUG.mjs";
import { a as ne } from "chunk-YVT73FKN.mjs";
import { a as I } from "chunk-MSHSIAEI.mjs";
import { k as le } from "chunk-JUEYLPZJ.mjs";
import { b as G, p as me, q as H } from "chunk-ARJ7WQTJ.mjs";
import { b as h, j as re } from "chunk-EAUMDN6M.mjs";
import { b as f } from "chunk-4JY5UMT2.mjs";
function B(e, t = e.id) {
  if (ue(e)) {
    if (e.usesLayoutTemplateRectForModuleIdentifierCached() && !e.cache.layoutTemplateRects)
      return !0;
    if (e.usesDOMRectCached()) return e.cache.getRawDOMRect(t) === null;
  }
  return t !== e.id && !it(e, t);
}
function it(e, t) {
  let o = e.tree();
  if (!o) return e.cache.getRawDOMRect(t) !== null;
  let n = t,
    r = e;
  for (; r;) {
    if (r.cache.getRawDOMRect(n) !== null) return !0;
    let i = r.cache.getRenderInstance(n)?.parentRenderId;
    if (!i || ke(i, r.id) !== n) return !1;
    ((n = i), (r = o.get(r.parentid)));
  }
  return !1;
}
async function st(e, t, o) {
  let n = B(t);
  for (; n;) {
    if (o?.aborted) return;
    (await new Promise((r) => e.scheduler.runBeforeNextFrame(r)), (n = B(t)));
  }
}
async function vt(e, t, o = 2e3) {
  let n = Array.isArray(t) ? t : [t],
    r = new AbortController(),
    i = Promise.all(n.map((s) => st(e, s, r.signal))),
    a = (async () => {
      (await ye(o), r.abort());
    })();
  await Promise.race([i, a]);
}
var J = new be(async () => {
  let e = await Promise.all([
    import("dist-57FPVK77.mjs"),
    import("dist-7E33OISL.mjs"),
    import("dist-MKBIL3YM.mjs"),
    import("dist-JCWXD2W4.mjs"),
    import("dist-EZBJJDRO.mjs"),
    import("dist-O54ZISA5.mjs"),
    import("dist-D6AE74Y2.mjs"),
    import("dist-5ZVOSTYK.mjs"),
    import("prosemirror-suggest-DFAYM7QE.mjs"),
  ]);
  return Object.assign({}, ...e);
});
function bt() {
  J.preload();
}
async function wt() {
  return J.readMaybeAsync();
}
function Rt() {
  return J.use();
}
function qe(e, t, o = !0) {
  e.scheduler.process(() => {
    let {
      overlayStore: n,
      selectionStore: r,
      scopeStore: i,
      canvasStore: a,
      persistedUserDefaults: s,
    } = e.stores;
    i.selectByNode(t.id);
    let d = q(t) ? t : e.tree.getNodeWithTrait(t.cache.overlayAncestorId, q);
    if ((d ? n.showOverlay(r, d, d.parentid) : n.hideAll(), r.set(t.id), o)) {
      let l = De(e.tree, [t]);
      a.zoomToCenter(l, { animated: s.animateOnZoom, maxZoom: 1 });
    }
  });
}
var V = re("unlinking");
async function at(e, t, o) {
  let { codeEditorStore: n, selectionStore: r, treeStore: i } = e.stores;
  n.closeEditor();
  let [a] = r.nodes;
  if (r.nodes.length === 1 && v(a) && a.codeComponentIdentifier === t) return !0;
  let s;
  for (let d of i.query().whereClass(w).iterate())
    if (d.codeComponentIdentifier === t) {
      s = d;
      break;
    }
  return s
    ? (qe(e, s), !0)
    : (E({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${o.name}.`,
      }),
      !1);
}
async function z(e, t, o) {
  return (await at(e, t, o)) ? (e.stores.pluginStore.openPlugin(o, e, { mode: "canvas" }), !0) : !1;
}
function W(e, t) {
  let o = e.componentForIdentifier(t);
  if (o) return o;
  let n = S(t);
  return !T(n) || !ae(n) ? null : e.componentForIdentifier(ie(n));
}
var dt = 0;
async function j(e, t, o = dt) {
  if (o === 0) {
    let r = S(t),
      i = P(e.stores.treeStore, e.stores.modulesStore, e.stores.pluginStore, r);
    if (i && (await z(e, t, i))) return;
  }
  let n = W(e.componentLoader, t);
  n && e.stores.codeEditorStore.editFile(n.file);
}
async function Je(
  e,
  {
    identifier: t,
    info: o,
    instance: n,
    enterIsolation: r,
    codeComponentIsolationMode: i,
    scheduleTreeUpdate: a = async (s) => e.scheduler.processOrThrow(s),
  }
) {
  let s = o.module.baseURL + o.module.files.source,
    l = await (await fetch(s)).text(),
    [y, p] = await Promise.all([Be(l), e.stores.modulesStore.getModuleDependencies(t)]);
  if (y.ok) {
    let c = new Map();
    for (let u of y.value.relative) {
      let g = Se(u.specifier, `${o.module.type}/`);
      if (!g) {
        V.warn("Failed to normalize relative import", u.specifier);
        continue;
      }
      let k = c.get(g) ?? [];
      (k.push(u), c.set(g, k));
    }
    let C;
    for (let u of p.imports) {
      if (u.type !== "local") continue;
      let g = `${u.moduleType}/${u.moduleName}`,
        k = c.get(g);
      if (!k) {
        V.warn("Unable to get source location of import", g, "when unlinking");
        continue;
      }
      for (let ee of k) {
        C ||
          (C = l.split(`
`));
        let te = ee.specifierLine,
          oe = C[te];
        (f(oe !== void 0, "Import source line must exist"),
          (C[te] = oe.replace(JSON.stringify(ee.specifier), JSON.stringify(u.importURL))));
      }
    }
    C &&
      (l = C.join(`
`));
  }
  let x = await e.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: o.module.name,
        source: l,
        metadata: { pluginId: o.module.metadata.pluginId },
      }),
    N = de(t, x).value;
  if (
    (n &&
      (await a(() => {
        let c = e.tree.get(n.getPrimaryId());
        c && c.set({ codeComponentIdentifier: N });
      })),
    r)
  ) {
    let { chromeStore: c } = e.stores;
    ((c.activeContentPanelTab = "Assets"), j(e, N, i));
  }
  return N;
}
var Ze = { canvasComponent: je, codeFile: Je };
function Y(e) {
  return G(e) ? e in Ze : !1;
}
async function Q(
  e,
  {
    identifier: t,
    moduleType: o,
    instance: n,
    enterIsolation: r = !0,
    codeComponentIsolationMode: i,
    renamedIds: a = new O(),
    isAutoDetach: s = !1,
    scheduleTreeUpdate: d,
  }
) {
  if (!Y(o)) throw Error(`Cannot import external module of type ${o}`);
  let [l] = await e.stores.modulesStore.preloadExternalModules([t]);
  f(l, "external module must exist on preload");
  let y = {
      identifier: t,
      info: l,
      instance: n,
      enterIsolation: r,
      codeComponentIsolationMode: i,
      renamedIds: a,
      isAutoDetach: s,
      scheduleTreeUpdate: d,
    },
    p = Ze[o],
    m = await p(e, y);
  if (!me(m))
    return !G(m) && D(m)
      ? { ...l, codeComponentIdentifier: m.instanceIdentifier, node: m }
      : { ...l, codeComponentIdentifier: m, node: void 0 };
}
var Z = new Set();
async function X(e, t) {
  let { instance: o, withUnlinkModal: n, ...r } = t,
    i = F(e.stores.treeStore.tree, t.identifier),
    a = e.stores.insertSidebarStore.getEditBehavior(t.identifier.moduleId);
  if (n && a !== "autoUnlink" && (!i || ze.isOn("openPrimaryForBuiltInModules"))) {
    e.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...r,
      nodeId: o?.id,
    });
    return;
  }
  if (Z.has(t.identifier)) return;
  Z.add(t.identifier);
  let s = t.skipUndoGroup !== !0;
  s &&
    e.scheduler.process(() => {
      e.beginUndoGroup();
    });
  try {
    return (await Q(e, { instance: o, enterIsolation: a !== "autoDetach", ...r }))
      ?.codeComponentIdentifier;
  } catch (d) {
    (V.reportError(d),
      E({
        type: "add",
        variant: "error",
        primaryText: "Failed to unlink",
        secondaryText: "component.",
        key: "external-component-unlink-error",
      }));
  } finally {
    (s &&
      e.scheduler.process(() => {
        e.endUndoGroup();
      }),
      Z.delete(t.identifier));
  }
}
async function Ye(e, t) {
  let { instance: o, moduleType: n, enterIsolation: r, codeComponentIsolationMode: i } = t,
    a = t.scheduleTreeUpdate ?? ((y) => e.scheduler.processOrThrow(y));
  if (!v(o)) return;
  let s = await X(e, { ...t, enterIsolation: !1 });
  if (!s) return;
  await Ae(e.componentLoader, [s], e.stores.modulesStore, "component-unlinking");
  let d = e.componentLoader.componentForIdentifier(s);
  if (!d) return;
  let l = $e(d);
  l &&
    (await a(() => {
      let y = e.stores.treeStore
        .query()
        .whereClass(w)
        .wherePropertyEquals("codeComponentIdentifier", o.codeComponentIdentifier)
        .iterateIds();
      if (
        (Array.from(y, (m) => e.tree.getNodeWithTrait(m, v)).forEach((m) => {
          if (
            !l ||
            !m ||
            l.id === m.id ||
            m.codeComponentIdentifier !== o.codeComponentIdentifier ||
            pe(m) ||
            !Ge(m, { allowLockedNodes: !0 })
          )
            return;
          let x = e.cloneNode(l, !1, !1);
          He(e, [m], x);
        }),
        !!r)
      )
        if (n === "canvasComponent") {
          let m = we(s);
          m && M(e, { type: "page", nodeId: m });
        } else n === "codeFile" && j(e, s, i);
    }));
}
function Qe(e, t, o) {
  if (A(e, "canDesign")) return;
  let r = e.tree.getNodeWithTrait(t, _)?.annotation("framerVector");
  if (!b(r)) return;
  let i = r.set.moduleId,
    s = e.tree.getNodeWithTrait(i, _)?.annotation("framerVectorSet");
  Ne(s) &&
    (L(e, i) ||
      e.stores.modalStore.set({
        type: "EditVector",
        source: "edit_action",
        vectorSetNodeId: i,
        moduleId: t,
        itemCount: s.items.length,
        instanceNodeId: o,
      }));
}
function Lo(e = !0) {
  return e && le.isOn("canvasRepeatSelection") ? ct : Xe;
}
function Xe({ node: e, renderId: t }) {
  return t === e.id;
}
function ct(e) {
  return Xe(e) || !B(e.node, e.renderId);
}
function Go(e) {
  if (ge(e)) return pt(e);
  let t = Ee(e);
  for (let o of t.querySelectorAll("*"))
    o.tagName !== "BR" &&
      (o.removeAttribute("class"),
      o.removeAttribute("style"),
      o.removeAttribute("data-styles-preset"));
  return t.innerHTML;
}
function pt(e) {
  let t = e.variant;
  if (!he(e)) return e;
  let o = Me(e, {
    textBlock(n) {
      if (!xe(n)) return n;
      let r = { ...n };
      for (let i of Ce) delete r[i];
      return r;
    },
    text(n) {
      if (!Te(n)) return n;
      let r = { ...n };
      for (let i of Ie) delete r[i];
      return r;
    },
  });
  return (f(o.variant === t, "mapRichTextDocument must not change the document variant"), o);
}
function et(e, t, o, n) {
  M(t, { type: "page", nodeId: e }, { deferPageSelection: !0, selectScopeOptions: n })
    .then((r) => {
      if (!r) {
        if (t.tree.has(e)) return;
        (R("open_primary_component_fail", {}),
          E({
            type: "add",
            variant: "error",
            key: "invalid-deep-link",
            primaryText: "Primary component",
            secondaryText: "has been deleted.",
            duration: 1e4,
          }));
        return;
      }
      o &&
        t.scheduler.runBeforeNextFrame(() => {
          let i = t.tree.getNode(o);
          i &&
            t.tree.getScopeNodeFor(i)?.id === e &&
            (t.stores.selectionStore.set(i.id),
            t.stores.canvasStore.zoomToCenter(Ve(t.tree, i), { animated: !1, maxZoom: 1 }));
        });
    })
    .catch(h);
}
function tt(e, t) {
  let o = e.stores.insertSidebarStore.getEditBehavior(t.moduleId),
    n = F(e.stores.treeStore.tree, t),
    r = e.componentLoader.componentForIdentifier(t.value)?.annotations;
  if ((n && o === "block") || fe(r, "framerDisableUnlink")) return !0;
  let i = ve(e.stores.modulesStore, e.tree, t.value);
  return i !== void 0 && (We(i.moduleId) || L(e, i.moduleId));
}
function ot(e, t, o, n) {
  let r = S(e),
    i = A(t, "canDesign"),
    { includeAccelerator: a = !0 } = n;
  if (T(r) && r.type === "shader") {
    let p = t.stores.modulesStore.getModuleEntryByLocalId(r.localId)?.name;
    return p
      ? [
          {
            label: `${i ? "View" : "Edit"} ${K("Code")}`,
            click: () => t.stores.codeEditorStore.editFile(p),
          },
        ]
      : I();
  }
  if (T(r) && (r.type === "canvasComponent" || r.type === "screen" || r.type === "vector"))
    return [
      {
        label: i ? "View" : "Edit",
        accelerator: a ? U.fakeSelectChildren : void 0,
        click: () => {
          if (r.type === "vector") {
            let m = t.stores.modulesStore
              .forType("vector")
              .getByStableName(r.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!b(m)) return;
            let { set: x } = m;
            et(x.id, t, r.localIdName, n);
            return;
          }
          let [, p] = r.localId.split("/");
          p && et(p, t, o, n);
        },
      },
    ];
  if (se(r) && r.kind === "externalModuleExport") {
    if (n.node?.isVectorInstance)
      return tt(t, r)
        ? I()
        : [
            {
              label: "Edit",
              accelerator: a ? U.fakeSelectChildren : void 0,
              click: () => Qe(t, r.moduleId, n.node?.id),
              enabled: !i,
            },
          ];
    let p = t.stores.insertSidebarStore.getEditBehavior(r.moduleId),
      m = t.stores.treeStore.tree.get(r.moduleId),
      N = n.externalModuleType === "canvasComponent" && m?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (tt(t, r)) return I();
    if (!Y(n.externalModuleType)) return I();
    let { node: c, withUnlinkModal: C, externalModuleType: u } = n;
    return c && p === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !i,
            click: async () => {
              (t.beginUndoGroup(),
                Ue(
                  {
                    key: "auto-detach",
                    progress: {
                      variant: "progress",
                      primaryText: "Detaching component",
                      secondaryText: "instance\u2026",
                    },
                    error: {
                      variant: "error",
                      primaryText: "Failed to detach",
                      secondaryText: "component instance.",
                    },
                  },
                  async () => {
                    await ut(c, t, r, u);
                  }
                ).catch(h),
                t.endUndoGroup());
            },
          },
        ]
      : N
        ? [
            {
              label: "Edit",
              accelerator: a ? U.fakeSelectChildren : void 0,
              click: () => {
                Ye(t, { identifier: r, moduleType: u, instance: c, enterIsolation: !0 }).catch(h);
              },
              enabled: !i,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                X(t, {
                  identifier: r,
                  moduleType: u,
                  instance: c,
                  withUnlinkModal: C,
                  enterIsolation: !0,
                }).catch(h);
              },
              enabled: !i,
            },
          ];
  }
  let s = W(t.componentLoader, e);
  if (s?.type !== "component" || s.depth !== 0) return I();
  let d = n.keepHistory
      ? void 0
      : () => {
          t.stores.scopeStore.goBack();
        },
    l = P(t.stores.treeStore, t.stores.modulesStore, t.stores.pluginStore, r);
  return [
    ...(l && Le(t.stores.modulesStore, r) && !i && T(e)
      ? [
          {
            label: Oe(l),
            click: () => {
              (d?.(), z(t, e, l));
            },
          },
        ]
      : []),
    {
      label: `${i ? "View" : "Edit"} ${K("Code")}`,
      click: () => {
        (d?.(), t.stores.codeEditorStore.editFile(s.file));
      },
      enabled: T(e),
    },
  ];
}
async function ut(e, t, o, n) {
  let r = new O(),
    i = await Q(t, {
      identifier: o,
      moduleType: n,
      instance: e,
      renamedIds: r,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!i) return null;
  let { node: a } = i;
  return D(a)
    ? t.scheduler.processOrThrow(() => {
        let s = _e.detachSmartComponentOrWebPageInstance(t, e.draftOrCurrent(), a, r);
        return (s && t.stores.selectionStore.set(s.id), s);
      })
    : null;
}
function rt(e) {
  return e?.find((o) => o.enabled !== !1)?.click;
}
function ft(e, t, o) {
  return ot(e, t, null, o);
}
function Ir(e, t, o) {
  return rt(ft(e, t, o));
}
function yt(
  e,
  t,
  { withUnlinkModal: o = !0, externalModuleType: n, activateContentPanel: r } = {}
) {
  let i = Re(t.tree, e);
  return ot(e.codeComponentIdentifier, t, i, {
    keepHistory: !0,
    node: e,
    withUnlinkModal: o,
    externalModuleType: n,
    activateContentPanel: r,
  });
}
function hr(e, t, o = {}) {
  return rt(yt(e, t, o));
}
function Er(e, t, o, { needsReview: n, generatedByAI: r, pluginId: i, pluginMode: a }) {
  let s = { value: e, hash: t, lastEdited: Date.now() };
  n && (s.needsReview = !0);
  let d = ne(o?.value, e);
  return (
    (r || (d && o?.generatedByAI)) && (s.generatedByAI = !0),
    i || H(a)
      ? (f(i && H(a), "Cannot set only pluginId or pluginMode"),
        (s.pluginId = i),
        (s.pluginMode = a))
      : d &&
        o?.pluginId &&
        ((s.pluginId = o.pluginId), o.pluginMode && (s.pluginMode = o.pluginMode)),
    s
  );
}
function Mr(e, t, o, n) {
  let r = t ? t[e] : void 0,
    i = n(r, o);
  if (!(!t && !i)) {
    if (!i) {
      f(t);
      let a = Object.keys(t),
        s = a.length;
      if (s === 0 || (s === 1 && a[0] === e)) return;
      let d = { ...t };
      return (delete d[e], d);
    }
    return { ...t, [e]: i };
  }
}
function nt(e) {
  let { newContentAsDraft: t } = e.stores.persistedUserDefaults;
  return !(!t || e.stores.publishStore.publishStatus === 1);
}
function zr(e) {
  e.engine.scheduler.process(() => {
    Ct(e);
  });
}
function Ct({ collectionId: e, engine: t, saveAction: o, source: n }) {
  let r = t.tree.getNodeWithTrait(e, $);
  f(r, "Collection needs to exist to allow creation of new item");
  let i = t.stores.selectionStore.ids[0],
    a = t.tree.getNodeWithTrait(i, $);
  (a && a.id !== r.id && f(o, "saveAction is required when creating a nested private draft item"),
    It({ collection: r, engine: t, saveAction: o }),
    R("collection_record_create", { source: n }));
}
function It({ collection: e, engine: t, saveAction: o }) {
  let n = ht(t, e, 0),
    { chromeStore: r, contentManagementStore: i, scopeStore: a } = t.stores,
    s = { collectionId: e.id, itemId: n.id, saveAction: o };
  if (r.contentManagementOverlayStack.length === 0 && ce(a.active)) {
    let d = { collectionId: e.id, itemId: n.id, showErrors: !1, type: "privateDraft" };
    (o && (d.saveAction = o), M(t, { type: "collectionItem", nodeId: n.id, stack: [d] }).catch(h));
    return;
  }
  i.openPrivateDraftCollectionItem(s);
}
function ht(e, t, o) {
  let n = e.stores.sessionStore.user.id,
    r = Tt(t, n);
  if (r) return r;
  let i = Pe.create({ privateToUserId: n, ...Fe(e.tree.root.locales ?? I()) });
  return (e.stores.scopeStore.insertNode(i, t.id, o), gt(t, i), nt(e) && i.set({ isDraft: !0 }), i);
}
function Tt(e, t) {
  let o,
    n = 0;
  for (let r of e.children) {
    if (r.privateToUserId !== t) continue;
    let i = xt(r);
    (!o || i > n) && ((o = r), (n = i));
  }
  return o;
}
function xt(e) {
  if (!e.createdAt) return 0;
  let t = new Date(e.createdAt).getTime();
  return Number.isNaN(t) ? 0 : t;
}
function gt(e, t) {
  let o = St(t);
  for (let n of e.variables)
    n.type === "date" &&
      t.setControlProp(n.id, { type: "date", value: Et(o, n.options?.displayTime) });
}
function St(e) {
  if (!e.createdAt) return new Date();
  let t = new Date(e.createdAt);
  return Number.isNaN(t.getTime()) ? new Date() : t;
}
function Et(e, t) {
  return t
    ? new Date(
        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())).toJSON();
}
export {
  B as a,
  vt as b,
  Lo as c,
  Go as d,
  bt as e,
  wt as f,
  Rt as g,
  qe as h,
  W as i,
  Y as j,
  Q as k,
  X as l,
  Ye as m,
  et as n,
  tt as o,
  ut as p,
  ft as q,
  Ir as r,
  yt as s,
  hr as t,
  nt as u,
  zr as v,
  Ct as w,
  ht as x,
  Tt as y,
  gt as z,
  Et as A,
  Er as B,
  Mr as C,
};
//# sourceMappingURL=chunk-YUJNYCAQ.mjs.map
