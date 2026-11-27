import {
  Bh as Be,
  Ch as U,
  Eh as ze,
  Fj as He,
  Ra as Re,
  Ye as N,
  Zi as We,
  aj as je,
  bj as Ge,
  pe as P,
  ph as O,
  qd as Ue,
  xb as A,
  yb as Ae,
  zb as Pe,
} from "chunk-AYKOIAZZ.mjs";
import { r as we, u as Fe } from "chunk-QXUDYZJG.mjs";
import { q as R } from "chunk-DRVF2SUD.mjs";
import { Jk as De, La as ve, Ma as Ve, Mk as be, dl as w } from "chunk-BP2ZYPEN.mjs";
import { Ak as Ne, Qh as ge, Sk as Me, Wl as ke, fb as q, yk as b } from "chunk-RE42INF2.mjs";
import {
  Ai as Ie,
  Bf as ce,
  Fi as ye,
  Hi as he,
  Ii as Te,
  Km as Se,
  Li as xe,
  Tj as Ee,
  _f as pe,
  di as ue,
  hb as D,
  nb as me,
  oc as _,
  qb as v,
  ub as $,
  xi as Ce,
} from "chunk-3GNDJY2L.mjs";
import { c as ne, d as ie, f as T, g as ae, o as E, q as se } from "chunk-GV47JEYI.mjs";
import { d as L } from "chunk-EHWAAKT7.mjs";
import { c as S, d as Oe } from "chunk-FH36ATMQ.mjs";
import { g as F } from "chunk-FEH5ILSY.mjs";
import { b as Le } from "chunk-O5WG5ZBQ.mjs";
import { a as fe, g as J } from "chunk-NJXSBLUG.mjs";
import { a as re } from "chunk-YVT73FKN.mjs";
import { a as y } from "chunk-MSHSIAEI.mjs";
import { h as le } from "chunk-EHED2EQW.mjs";
import { b as G, p as de, q as H } from "chunk-ARJ7WQTJ.mjs";
import { b as h, j as oe } from "chunk-EAUMDN6M.mjs";
import { b as f } from "chunk-4JY5UMT2.mjs";
function B(e, t = e.id) {
  if (pe(e)) {
    if (e.usesLayoutTemplateRectForModuleIdentifierCached() && !e.cache.layoutTemplateRects)
      return !0;
    if (e.usesDOMRectCached()) return e.cache.getRawDOMRect(t) === null;
  }
  return t !== e.id && !rt(e, t);
}
function rt(e, t) {
  let o = e.tree();
  if (!o) return e.cache.getRawDOMRect(t) !== null;
  let n = t,
    r = e;
  for (; r;) {
    if (r.cache.getRawDOMRect(n) !== null) return !0;
    let i = r.cache.getRenderInstance(n)?.parentRenderId;
    if (!i || Me(i, r.id) !== n) return !1;
    ((n = i), (r = o.get(r.parentid)));
  }
  return !1;
}
async function nt(e, t, o) {
  let n = B(t);
  for (; n;) {
    if (o?.aborted) return;
    (await new Promise((r) => e.scheduler.runBeforeNextFrame(r)), (n = B(t)));
  }
}
async function Mt(e, t, o = 2e3) {
  let n = Array.isArray(t) ? t : [t],
    r = new AbortController(),
    i = Promise.all(n.map((a) => nt(e, a, r.signal))),
    s = (async () => {
      (await fe(o), r.abort());
    })();
  await Promise.race([i, s]);
}
function $e(e, t, o = !0) {
  e.scheduler.process(() => {
    let {
      overlayStore: n,
      selectionStore: r,
      scopeStore: i,
      canvasStore: s,
      persistedUserDefaults: a,
    } = e.stores;
    i.selectByNode(t.id);
    let d = q(t) ? t : e.tree.getNodeWithTrait(t.cache.overlayAncestorId, q);
    if ((d ? n.showOverlay(r, d, d.parentid) : n.hideAll(), r.set(t.id), o)) {
      let m = Ve(e.tree, [t]);
      s.zoomToCenter(m, { animated: a.animateOnZoom, maxZoom: 1 });
    }
  });
}
var V = oe("unlinking");
async function it(e, t, o) {
  let { codeEditorStore: n, selectionStore: r, treeStore: i } = e.stores;
  n.closeEditor();
  let [s] = r.nodes;
  if (r.nodes.length === 1 && v(s) && s.codeComponentIdentifier === t) return !0;
  let a;
  for (let d of i.query().whereClass(w).iterate())
    if (d.codeComponentIdentifier === t) {
      a = d;
      break;
    }
  return a
    ? ($e(e, a), !0)
    : (S({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${o.name}.`,
      }),
      !1);
}
async function z(e, t, o) {
  return (await it(e, t, o)) ? (e.stores.pluginStore.openPlugin(o, e, { mode: "canvas" }), !0) : !1;
}
function W(e, t) {
  let o = e.componentForIdentifier(t);
  if (o) return o;
  let n = E(t);
  return !T(n) || !ae(n) ? null : e.componentForIdentifier(ne(n));
}
var at = 0;
async function j(e, t, o = at) {
  if (o === 0) {
    let r = E(t),
      i = A(e.stores.treeStore, e.stores.modulesStore, e.stores.pluginStore, r);
    if (i && (await z(e, t, i))) return;
  }
  let n = W(e.componentLoader, t);
  n && e.stores.codeEditorStore.editFile(n.file);
}
async function qe(
  e,
  {
    identifier: t,
    info: o,
    instance: n,
    enterIsolation: r,
    codeComponentIsolationMode: i,
    scheduleTreeUpdate: s = async (a) => e.scheduler.processOrThrow(a),
  }
) {
  let a = o.module.baseURL + o.module.files.source,
    m = await (await fetch(a)).text(),
    [C, p] = await Promise.all([Ue(m), e.stores.modulesStore.getModuleDependencies(t)]);
  if (C.ok) {
    let c = new Map();
    for (let u of C.value.relative) {
      let g = ge(u.specifier, `${o.module.type}/`);
      if (!g) {
        V.warn("Failed to normalize relative import", u.specifier);
        continue;
      }
      let k = c.get(g) ?? [];
      (k.push(u), c.set(g, k));
    }
    let I;
    for (let u of p.imports) {
      if (u.type !== "local") continue;
      let g = `${u.moduleType}/${u.moduleName}`,
        k = c.get(g);
      if (!k) {
        V.warn("Unable to get source location of import", g, "when unlinking");
        continue;
      }
      for (let X of k) {
        I ||
          (I = m.split(`
`));
        let ee = X.specifierLine,
          te = I[ee];
        (f(te !== void 0, "Import source line must exist"),
          (I[ee] = te.replace(JSON.stringify(X.specifier), JSON.stringify(u.importURL))));
      }
    }
    I &&
      (m = I.join(`
`));
  }
  let x = await e.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: o.module.name,
        source: m,
        metadata: { pluginId: o.module.metadata.pluginId },
      }),
    M = se(t, x).value;
  if (
    (n &&
      (await s(() => {
        let c = e.tree.get(n.getPrimaryId());
        c && c.set({ codeComponentIdentifier: M });
      })),
    r)
  ) {
    let { chromeStore: c } = e.stores;
    ((c.activeContentPanelTab = "Assets"), j(e, M, i));
  }
  return M;
}
var Je = { canvasComponent: ze, codeFile: qe };
function Z(e) {
  return G(e) ? e in Je : !1;
}
async function Y(
  e,
  {
    identifier: t,
    moduleType: o,
    instance: n,
    enterIsolation: r = !0,
    codeComponentIsolationMode: i,
    renamedIds: s = new O(),
    isAutoDetach: a = !1,
    scheduleTreeUpdate: d,
  }
) {
  if (!Z(o)) throw Error(`Cannot import external module of type ${o}`);
  let [m] = await e.stores.modulesStore.preloadExternalModules([t]);
  f(m, "external module must exist on preload");
  let C = {
      identifier: t,
      info: m,
      instance: n,
      enterIsolation: r,
      codeComponentIsolationMode: i,
      renamedIds: s,
      isAutoDetach: a,
      scheduleTreeUpdate: d,
    },
    p = Je[o],
    l = await p(e, C);
  if (!de(l))
    return !G(l) && D(l)
      ? { ...m, codeComponentIdentifier: l.instanceIdentifier, node: l }
      : { ...m, codeComponentIdentifier: l, node: void 0 };
}
var K = new Set();
async function Q(e, t) {
  let { instance: o, withUnlinkModal: n, ...r } = t,
    i = R(e.stores.treeStore.tree, t.identifier),
    s = e.stores.insertSidebarStore.getEditBehavior(t.identifier.moduleId);
  if (n && s !== "autoUnlink" && (!i || Le.isOn("openPrimaryForBuiltInModules"))) {
    e.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...r,
      nodeId: o?.id,
    });
    return;
  }
  if (K.has(t.identifier)) return;
  K.add(t.identifier);
  let a = t.skipUndoGroup !== !0;
  a &&
    e.scheduler.process(() => {
      e.beginUndoGroup();
    });
  try {
    return (await Y(e, { instance: o, enterIsolation: s !== "autoDetach", ...r }))
      ?.codeComponentIdentifier;
  } catch (d) {
    (V.reportError(d),
      S({
        type: "add",
        variant: "error",
        primaryText: "Failed to unlink",
        secondaryText: "component.",
        key: "external-component-unlink-error",
      }));
  } finally {
    (a &&
      e.scheduler.process(() => {
        e.endUndoGroup();
      }),
      K.delete(t.identifier));
  }
}
async function Ke(e, t) {
  let { instance: o, moduleType: n, enterIsolation: r, codeComponentIsolationMode: i } = t,
    s = t.scheduleTreeUpdate ?? ((C) => e.scheduler.processOrThrow(C));
  if (!v(o)) return;
  let a = await Q(e, { ...t, enterIsolation: !1 });
  if (!a) return;
  await Re(e.componentLoader, [a], e.stores.modulesStore, "component-unlinking");
  let d = e.componentLoader.componentForIdentifier(a);
  if (!d) return;
  let m = Ge(d);
  m &&
    (await s(() => {
      let C = e.stores.treeStore
        .query()
        .whereClass(w)
        .wherePropertyEquals("codeComponentIdentifier", o.codeComponentIdentifier)
        .iterateIds();
      if (
        (Array.from(C, (l) => e.tree.getNodeWithTrait(l, v)).forEach((l) => {
          if (
            !m ||
            !l ||
            m.id === l.id ||
            l.codeComponentIdentifier !== o.codeComponentIdentifier ||
            ce(l) ||
            !We(l, { allowLockedNodes: !0 })
          )
            return;
          let x = e.cloneNode(m, !1, !1);
          je(e, [l], x);
        }),
        !!r)
      )
        if (n === "canvasComponent") {
          let l = De(a);
          l && N(e, { type: "page", nodeId: l });
        } else n === "codeFile" && j(e, a, i);
    }));
}
function Ze(e, t, o) {
  if (P(e, "canDesign")) return;
  let r = e.tree.getNodeWithTrait(t, _)?.annotation("framerVector");
  if (!b(r)) return;
  let i = r.set.moduleId,
    a = e.tree.getNodeWithTrait(i, _)?.annotation("framerVectorSet");
  Ne(a) &&
    (U(e, i) ||
      e.stores.modalStore.set({
        type: "EditVector",
        source: "edit_action",
        vectorSetNodeId: i,
        moduleId: t,
        itemCount: a.items.length,
        instanceNodeId: o,
      }));
}
function bo(e = !0) {
  return e && le.isOn("canvasRepeatSelection") ? lt : Ye;
}
function Ye({ node: e, renderId: t }) {
  return t === e.id;
}
function lt(e) {
  return Ye(e) || !B(e.node, e.renderId);
}
function Oo(e) {
  if (xe(e)) return mt(e);
  let t = Ee(e);
  for (let o of t.querySelectorAll("*"))
    o.tagName !== "BR" &&
      (o.removeAttribute("class"),
      o.removeAttribute("style"),
      o.removeAttribute("data-styles-preset"));
  return t.innerHTML;
}
function mt(e) {
  let t = e.variant;
  if (!ye(e)) return e;
  let o = Se(e, {
    textBlock(n) {
      if (!Te(n)) return n;
      let r = { ...n };
      for (let i of Ce) delete r[i];
      return r;
    },
    text(n) {
      if (!he(n)) return n;
      let r = { ...n };
      for (let i of Ie) delete r[i];
      return r;
    },
  });
  return (f(o.variant === t, "mapRichTextDocument must not change the document variant"), o);
}
function Qe(e, t, o, n) {
  N(t, { type: "page", nodeId: e }, { deferPageSelection: !0, selectScopeOptions: n })
    .then((r) => {
      if (!r) {
        if (t.tree.has(e)) return;
        (F("open_primary_component_fail", {}),
          S({
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
            t.stores.canvasStore.zoomToCenter(ve(t.tree, i), { animated: !1, maxZoom: 1 }));
        });
    })
    .catch(h);
}
function Xe(e, t) {
  let o = e.stores.insertSidebarStore.getEditBehavior(t.moduleId),
    n = R(e.stores.treeStore.tree, t),
    r = e.componentLoader.componentForIdentifier(t.value)?.annotations;
  if ((n && o === "block") || ue(r, "framerDisableUnlink")) return !0;
  let i = ke(e.stores.modulesStore, e.tree, t.value);
  return i !== void 0 && (Be(i.moduleId) || U(e, i.moduleId));
}
function et(e, t, o, n) {
  let r = E(e),
    i = P(t, "canDesign"),
    { includeAccelerator: s = !0 } = n;
  if (T(r) && r.type === "shader") {
    let p = t.stores.modulesStore.getModuleEntryByLocalId(r.localId)?.name;
    return p
      ? [
          {
            label: `${i ? "View" : "Edit"} ${J("Code")}`,
            click: () => t.stores.codeEditorStore.editFile(p),
          },
        ]
      : y();
  }
  if (T(r) && (r.type === "canvasComponent" || r.type === "screen" || r.type === "vector"))
    return [
      {
        label: i ? "View" : "Edit",
        accelerator: s ? L.fakeSelectChildren : void 0,
        click: () => {
          if (r.type === "vector") {
            let l = t.stores.modulesStore
              .forType("vector")
              .getByStableName(r.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!b(l)) return;
            let { set: x } = l;
            Qe(x.id, t, r.localIdName, n);
            return;
          }
          let [, p] = r.localId.split("/");
          p && Qe(p, t, o, n);
        },
      },
    ];
  if (ie(r) && r.kind === "externalModuleExport") {
    if (n.node?.isVectorInstance)
      return Xe(t, r)
        ? y()
        : [
            {
              label: "Edit",
              accelerator: s ? L.fakeSelectChildren : void 0,
              click: () => Ze(t, r.moduleId, n.node?.id),
              enabled: !i,
            },
          ];
    let p = t.stores.insertSidebarStore.getEditBehavior(r.moduleId),
      l = t.stores.treeStore.tree.get(r.moduleId),
      M = n.externalModuleType === "canvasComponent" && l?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (Xe(t, r)) return y();
    if (!Z(n.externalModuleType)) return y();
    let { node: c, withUnlinkModal: I, externalModuleType: u } = n;
    return c && p === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !i,
            click: async () => {
              (t.beginUndoGroup(),
                Oe(
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
                    await ct(c, t, r, u);
                  }
                ).catch(h),
                t.endUndoGroup());
            },
          },
        ]
      : M
        ? [
            {
              label: "Edit",
              accelerator: s ? L.fakeSelectChildren : void 0,
              click: () => {
                Ke(t, { identifier: r, moduleType: u, instance: c, enterIsolation: !0 }).catch(h);
              },
              enabled: !i,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                Q(t, {
                  identifier: r,
                  moduleType: u,
                  instance: c,
                  withUnlinkModal: I,
                  enterIsolation: !0,
                }).catch(h);
              },
              enabled: !i,
            },
          ];
  }
  let a = W(t.componentLoader, e);
  if (a?.type !== "component" || a.depth !== 0) return y();
  let d = n.keepHistory
      ? void 0
      : () => {
          t.stores.scopeStore.goBack();
        },
    m = A(t.stores.treeStore, t.stores.modulesStore, t.stores.pluginStore, r);
  return [
    ...(m && Pe(t.stores.modulesStore, r) && !i && T(e)
      ? [
          {
            label: Ae(m),
            click: () => {
              (d?.(), z(t, e, m));
            },
          },
        ]
      : []),
    {
      label: `${i ? "View" : "Edit"} ${J("Code")}`,
      click: () => {
        (d?.(), t.stores.codeEditorStore.editFile(a.file));
      },
      enabled: T(e),
    },
  ];
}
async function ct(e, t, o, n) {
  let r = new O(),
    i = await Y(t, {
      identifier: o,
      moduleType: n,
      instance: e,
      renamedIds: r,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!i) return null;
  let { node: s } = i;
  return D(s)
    ? t.scheduler.processOrThrow(() => {
        let a = He.detachSmartComponentOrWebPageInstance(t, e.draftOrCurrent(), s, r);
        return (a && t.stores.selectionStore.set(a.id), a);
      })
    : null;
}
function tt(e) {
  return e?.find((o) => o.enabled !== !1)?.click;
}
function pt(e, t, o) {
  return et(e, t, null, o);
}
function mr(e, t, o) {
  return tt(pt(e, t, o));
}
function ut(
  e,
  t,
  { withUnlinkModal: o = !0, externalModuleType: n, activateContentPanel: r } = {}
) {
  let i = be(t.tree, e);
  return et(e.codeComponentIdentifier, t, i, {
    keepHistory: !0,
    node: e,
    withUnlinkModal: o,
    externalModuleType: n,
    activateContentPanel: r,
  });
}
function cr(e, t, o = {}) {
  return tt(ut(e, t, o));
}
function Ir(e, t, o, { needsReview: n, generatedByAI: r, pluginId: i, pluginMode: s }) {
  let a = { value: e, hash: t, lastEdited: Date.now() };
  n && (a.needsReview = !0);
  let d = re(o?.value, e);
  return (
    (r || (d && o?.generatedByAI)) && (a.generatedByAI = !0),
    i || H(s)
      ? (f(i && H(s), "Cannot set only pluginId or pluginMode"),
        (a.pluginId = i),
        (a.pluginMode = s))
      : d &&
        o?.pluginId &&
        ((a.pluginId = o.pluginId), o.pluginMode && (a.pluginMode = o.pluginMode)),
    a
  );
}
function yr(e, t, o, n) {
  let r = t ? t[e] : void 0,
    i = n(r, o);
  if (!(!t && !i)) {
    if (!i) {
      f(t);
      let s = Object.keys(t),
        a = s.length;
      if (a === 0 || (a === 1 && s[0] === e)) return;
      let d = { ...t };
      return (delete d[e], d);
    }
    return { ...t, [e]: i };
  }
}
function ot(e) {
  let { newContentAsDraft: t } = e.stores.persistedUserDefaults;
  return !(!t || e.stores.publishStore.publishStatus === 1);
}
function Rr(e) {
  e.engine.scheduler.process(() => {
    ft(e);
  });
}
function ft({ collectionId: e, engine: t, saveAction: o, source: n }) {
  let r = t.tree.getNodeWithTrait(e, $);
  f(r, "Collection needs to exist to allow creation of new item");
  let i = t.stores.selectionStore.ids[0],
    s = t.tree.getNodeWithTrait(i, $);
  (s && s.id !== r.id && f(o, "saveAction is required when creating a nested private draft item"),
    Ct({ collection: r, engine: t, saveAction: o }),
    F("collection_record_create", { source: n }));
}
function Ct({ collection: e, engine: t, saveAction: o }) {
  let n = It(t, e, 0),
    { chromeStore: r, contentManagementStore: i, scopeStore: s } = t.stores,
    a = { collectionId: e.id, itemId: n.id, saveAction: o };
  if (r.contentManagementOverlayStack.length === 0 && me(s.active)) {
    let d = { collectionId: e.id, itemId: n.id, showErrors: !1, type: "privateDraft" };
    (o && (d.saveAction = o), N(t, { type: "collectionItem", nodeId: n.id, stack: [d] }).catch(h));
    return;
  }
  i.openPrivateDraftCollectionItem(a);
}
function It(e, t, o) {
  let n = e.stores.sessionStore.user.id,
    r = yt(t, n);
  if (r) return r;
  let i = Fe.create({ privateToUserId: n, ...we(e.tree.root.locales ?? y()) });
  return (e.stores.scopeStore.insertNode(i, t.id, o), Tt(t, i), ot(e) && i.set({ isDraft: !0 }), i);
}
function yt(e, t) {
  let o,
    n = 0;
  for (let r of e.children) {
    if (r.privateToUserId !== t) continue;
    let i = ht(r);
    (!o || i > n) && ((o = r), (n = i));
  }
  return o;
}
function ht(e) {
  if (!e.createdAt) return 0;
  let t = new Date(e.createdAt).getTime();
  return Number.isNaN(t) ? 0 : t;
}
function Tt(e, t) {
  let o = xt(t);
  for (let n of e.variables)
    n.type === "date" &&
      t.setControlProp(n.id, { type: "date", value: gt(o, n.options?.displayTime) });
}
function xt(e) {
  if (!e.createdAt) return new Date();
  let t = new Date(e.createdAt);
  return Number.isNaN(t.getTime()) ? new Date() : t;
}
function gt(e, t) {
  return t
    ? new Date(
        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())).toJSON();
}
export {
  B as a,
  Mt as b,
  bo as c,
  Oo as d,
  $e as e,
  W as f,
  Z as g,
  Y as h,
  Q as i,
  Ke as j,
  Qe as k,
  Xe as l,
  ct as m,
  pt as n,
  mr as o,
  ut as p,
  cr as q,
  ot as r,
  Rr as s,
  ft as t,
  It as u,
  yt as v,
  Tt as w,
  gt as x,
  Ir as y,
  yr as z,
};
//# sourceMappingURL=chunk-FNK72TQ3.mjs.map
