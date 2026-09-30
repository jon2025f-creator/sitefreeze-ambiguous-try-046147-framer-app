import {
  Ba as Gt,
  Ca as Ot,
  Da as we,
  Ea as Dt,
  Ha as Bt,
  Ja as Wt,
  Na as jt,
  Pa as be,
  Qa as Kt,
} from "chunk-VW52EVW2.mjs";
import {
  N as It,
  O as Lt,
  P as Tt,
  Q as ce,
  R as ke,
  S as Et,
  T as Mt,
  U as Vt,
  W as Rt,
} from "chunk-ES7GGTUY.mjs";
import { Pa as St } from "chunk-EGZEVTFV.mjs";
import { a as Ce, b as pe } from "chunk-WCK2V2L4.mjs";
import { Ba as vt, l as Ct, u as kt } from "chunk-TNGMOH7U.mjs";
import { Db as wt } from "chunk-CP6IONC3.mjs";
import { e as bt } from "chunk-3Q7ROSGO.mjs";
import { a as ve, b as W } from "chunk-Y3RBCRVO.mjs";
import { Bn as ht, In as gt, mp as yt, vn as ge } from "chunk-DQOI5IN7.mjs";
import { Bq as ft, Ek as he, ek as mt } from "chunk-X3AVB25H.mjs";
import { a as _t, b as Ft } from "chunk-JYBXJ32O.mjs";
import { g as At, j as Nt } from "chunk-SSRP6PM6.mjs";
import { a as Ht } from "chunk-WQQPCP2H.mjs";
import { b as _ } from "chunk-OLL66C3X.mjs";
import { b as xt, t as ye } from "chunk-JU2ALTUF.mjs";
import { a as le } from "chunk-QFU6OGL3.mjs";
import { a as Pt } from "chunk-24G7FGVN.mjs";
import { a as dt } from "chunk-6TFWVVAP.mjs";
import { a as p } from "chunk-2FCXHKEL.mjs";
import { b as fe, q as ae } from "chunk-RLPC655Z.mjs";
import { a as F } from "chunk-SWYZG2NI.mjs";
import { b as g, c as se } from "chunk-4JY5UMT2.mjs";
import { b as ut, i as ie } from "chunk-VJ7UYMJI.mjs";
import { e as a } from "chunk-WLHSDIGQ.mjs";
var ue = a(F(), 1);
var f = a(p(), 1),
  to = ue.default.memo(function r({
    nodeIds: e,
    controlKey: t,
    control: o,
    controlPath: l = t,
    onChange: i,
    onImageUpload: c,
    onContextMenu: s,
    controlProp: n,
    controlSourceIdentifier: b,
    controlSourceControlKey: P,
    sortable: v,
    supportsVariables: u,
    supportsComputedValues: k,
    supportsFetchDataValues: I = k,
    displayInPopover: M,
    icons: H,
    controlKeyIsTraitTypeKey: x,
    popoutId: N,
    hiddenControlsByNodeId: D,
    scopeType: G,
    deleteEnabled: h,
    deleteTitle: d,
    onDelete: m,
  }) {
    let y, oe;
    o.description && (oe = (0, f.jsx)(Bt, { description: o.description }));
    let C = ue.default.useMemo(() => (x ? [mt(t)] : void 0), [t, x]),
      w = ue.default.useCallback(
        (ct, Ar) => {
          i(Ar, () => ct, e);
        },
        [e, i]
      ),
      {
        ArrayControlPropRow: V,
        BooleanControlPropRow: E,
        BorderControlPropRow: R,
        BorderRadiusControlPropRow: ne,
        BoxShadowControlPropRow: Ne,
        CanvasPageInstanceRow: Ge,
        CollectionReferenceControlPropRow: Oe,
        ColorArrayControlPropRow: De,
        ColorControlPropRow: Be,
        LocationControlPropRow: _e,
        CursorControlPropRow: Fe,
        CustomCursorControlPropRow: He,
        DateControlPropRow: We,
        DimensionControlPropRow: je,
        EnumControlPropRow: Ke,
        FileControlPropRow: Ue,
        FontControlPropRow: ze,
        FusedNumberControlPropRow: Ze,
        GapControlPropRow: $e,
        ImageControlPropRow: Qe,
        LinkControlPropRow: qe,
        LinkRelValuesControlPropRow: Ye,
        MultiCollectionReferenceControlPropRow: Xe,
        NumberControlPropRow: Je,
        ObjectControlPropRow: et,
        PaddingControlPropRow: tt,
        PageScopeControlPropRow: rt,
        RichTextControlPropRow: ot,
        ScrollSectionRefControlPropRow: nt,
        SlotControlPropRow: it,
        StringControlPropRow: st,
        TrackingIdControlPropRow: at,
        TransitionControlPropRow: lt,
        VectorSetItemControlPropRow: pt,
      } = Wt();
    switch (o.type) {
      case "boolean":
        if ((g(n.type === "boolean"), !E)) return;
        y = (0, f.jsx)(E, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          supportsFetchDataValues: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "number":
        if ((g(n.type === "number"), !Je)) return;
        y = (0, f.jsx)(Je, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          nodeIds: e,
          supportsFetchDataValues: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "dimension":
        if ((g(n.type === "dimension"), !je)) return;
        y = (0, f.jsx)(je, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
          supportsVariables: u,
        });
        break;
      case "string":
        if ((g(n.type === "string"), !st)) return;
        y = (0, f.jsx)(st, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsFetchDataValues: I,
          supportsComputedValues: k,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "trackingid":
        if ((g(n.type === "trackingid"), !at)) return;
        y = (0, f.jsx)(at, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "richtext":
        if ((g(n.type === "richtext"), !ot)) return;
        y = (0, f.jsx)(ot, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          scopeType: G,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "fusednumber":
        if ((g(n.type === "fusednumber"), !Ze)) return;
        y = (0, f.jsx)(Ze, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          sortable: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "enum":
        if ((g(n.type === "enum"), !Ke)) return;
        y = (0, f.jsx)(Ke, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          icons: H,
          controlSourceIdentifier: b,
          controlSourceControlKey: P,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "color":
        if ((g(n.type === "color"), !Be)) return;
        y = (0, f.jsx)(Be, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          displayInPopover: M,
          supportsVariables: u,
          supportsComputedValues: k,
          supportsFetchDataValues: I,
          nodeIds: e,
          popoutId: N,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "responsiveimage":
      case "image":
        if ((g(n.type === "image" || n.type === "responsiveimage"), !Qe)) return;
        y = (0, f.jsx)(Qe, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onUpload: c,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          displayInPopover: M,
          supportsFetchDataValues: I,
          supportsVariables: u,
          popoutId: N,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "file":
        if ((g(n.type === "file"), !Ue)) return;
        y = (0, f.jsx)(Ue, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          controlSourceIdentifier: b,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "slot": {
        if ((g(n.type === "slot"), e.length !== 1)) return null;
        if (b === "framer/Prototype") {
          if (!Ge) return;
          y = (0, f.jsx)(Ge, {
            nodeIds: e,
            control: o,
            controlKey: t,
            controlProp: n,
            onChange: w,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: m,
          });
        } else {
          if (!it) return;
          y = (0, f.jsx)(it, {
            nodeIds: e,
            control: o,
            controlKey: t,
            controlPath: l,
            controlProp: n,
            traitTypeKeys: C,
            onChange: i,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: m,
          });
        }
        break;
      }
      case "transition":
        if ((g(n.type === "transition"), !lt)) return;
        y = (0, f.jsx)(lt, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          supportsVariables: u,
          traitTypeKeys: C,
          popoutId: N,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "boxshadow":
        if ((g(n.type === "boxshadow"), !Ne)) return;
        y = (0, f.jsx)(Ne, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: s,
          supportsVariables: u,
          traitTypeKeys: C,
          popoutId: N,
          nodeIds: e,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "font":
        if ((g(n.type === "font"), !ze)) return;
        y = (0, f.jsx)(ze, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          traitTypeKeys: C,
          popoutId: N,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "object":
        if ((g(n.type === "object"), !et)) return;
        y = (0, f.jsx)(et, {
          control: o,
          controlKey: t,
          controlPath: l,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          ControlPropRow: r,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          popoutId: N,
          scopeType: G,
          hiddenControlsByNodeId: D,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "link":
        if ((g(n.type === "link"), !qe)) return;
        y = (0, f.jsx)(qe, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          supportsFetchDataValues: I,
          nodeIds: e,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "linkrelvalues":
        if ((g(n.type === "linkrelvalues"), !Ye)) return;
        y = (0, f.jsx)(Ye, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          supportsVariables: u,
          traitTypeKeys: C,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "pagescope":
        if ((g(n.type === "pagescope"), !rt)) return;
        y = (0, f.jsx)(rt, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          traitTypeKeys: C,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "date":
        if ((g(n.type === "date"), !We)) return;
        y = (0, f.jsx)(We, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          sortable: v,
          traitTypeKeys: C,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "scrollsectionref":
        if ((g(n.type === "scrollsectionref"), !nt)) return;
        y = (0, f.jsx)(nt, {
          nodeIds: e,
          traitTypeKeys: C,
          controlKey: t,
          control: o,
          controlProp: n,
          onContextMenu: s,
          onChange: i,
          scopeType: G,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "customcursor":
        if ((g(n.type === "customcursor"), !He)) return;
        y = (0, f.jsx)(He, {
          nodeIds: e,
          traitTypeKeys: C,
          controlKey: t,
          control: o,
          controlProp: n,
          onContextMenu: s,
          onChange: i,
          scopeType: G,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "cursor":
        if ((g(n.type === "cursor"), !Fe)) return;
        y = (0, f.jsx)(Fe, {
          popoutId: t,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "array": {
        if ((g(n.type === "array"), o.control.type === "color" && De)) {
          y = (0, f.jsx)(De, {
            nodeIds: e,
            control: o,
            scopeType: G,
            controlKey: t,
            controlPath: l,
            controlProp: n,
            traitTypeKeys: C,
            onChange: i,
            supportsVariables: u,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: m,
          });
          break;
        }
        if (!V) return;
        y = (0, f.jsx)(V, {
          nodeIds: e,
          control: o,
          scopeType: G,
          controlKey: t,
          controlPath: l,
          controlProp: n,
          traitTypeKeys: C,
          hiddenControlsByNodeId: D,
          ControlPropRow: r,
          displayInPopover: M,
          onChange: i,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      }
      case "border": {
        if ((g(n.type === "border"), !R)) return;
        y = (0, f.jsx)(R, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: s,
          nodeIds: e,
          traitTypeKeys: C,
          popoutId: t,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      }
      case "padding": {
        if ((g(n.type === "padding"), !tt)) return;
        y = (0, f.jsx)(tt, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      }
      case "gap":
        if ((g(n.type === "gap"), !$e)) return;
        y = (0, f.jsx)($e, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "borderradius":
        if ((g(n.type === "borderradius"), !ne)) return;
        y = (0, f.jsx)(ne, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          supportsComputedValues: k,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "collectionreference":
        if ((g(n.type === "collectionreference"), !Oe)) return;
        y = (0, f.jsx)(Oe, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "multicollectionreference":
        if ((g(n.type === "multicollectionreference"), !Xe)) return;
        y = (0, f.jsx)(Xe, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          supportsComputedValues: k,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "vectorsetitem":
        if ((g(n.type === "vectorsetitem"), !pt)) return;
        y = (0, f.jsx)(pt, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: w,
          supportsVariables: u,
          traitTypeKeys: C,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "location":
        if ((g(n.type === "location"), !_e)) return;
        y = (0, f.jsx)(_e, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: w,
          onContextMenu: s,
          traitTypeKeys: C,
          supportsVariables: u,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: m,
        });
        break;
      case "eventhandler":
      case "changehandler":
        break;
      default:
        se(o);
    }
    return (0, f.jsxs)(f.Fragment, { children: [y, oe] });
  });
var Ut = "l7g1830";
var zt = a(p());
function ao({ children: r, htmlFor: e, className: t }) {
  return (0, zt.jsx)("label", { className: le(Ut, t), htmlFor: e, children: r });
}
var Gr = 3,
  T = ie("PartialTreeSender"),
  Se = dt();
function Zt() {
  return new Promise((r, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => r()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(r, 0);
  });
}
var $t = class {
  constructor(e, t, o) {
    this.timeline = e;
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = { maxNodesPerChunk: o?.maxNodesPerChunk ?? 1e3 }));
  }
  timeline;
  name;
  currentScopeId = "";
  timelineCursor;
  scopeBufferMap = new Map();
  chunkQueue = [];
  chunkIndex = 0;
  chunkingConfig;
  drainingPromise;
  get crdtStore() {
    if (St(this.timeline)) return this.timeline.store;
  }
  getScopeAsValue(e, t) {
    let o = e.get(t);
    if (o) return this.scopeAsValue(o, e.root.id, e.getService("metadata")?.version !== void 0);
  }
  scopeAsValue(e, t, o) {
    (g(e.parentid === t, "Scope must be a direct child of the root"),
      yt(e) && g(e.isLoaded(), "Scope must be loaded"));
    let l = e.cache.getSerializedCache(e);
    if (l) return l;
    if (!o) {
      let i = this.crdtStore,
        c = e.cache.serialized?.hadError;
      if (i && !c) {
        let s = i.getObject(e.id);
        if (s && s.parentid !== bt) return s;
      }
    }
    return kt.valueFromNode(e);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let o = e.chunkingHints;
    if (!o || o.size === 0) return !1;
    let l = de();
    t && l.add(t);
    for (let i of l)
      if (o.has(i)) return (T.debug(this.name, `chunking required - large page hint: ${i}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let o = [],
      l = crypto.randomUUID(),
      i = new Map(),
      c = new Map(),
      s = 0,
      n = de();
    t && n.add(t);
    let b = () => {
        i.size > 0 &&
          (o.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: l,
              chunkIndex: o.length,
              totalChunks: -1,
              nodes: i,
              childrenMap: c,
              rootId: o.length === 0 ? e.root.id : void 0,
            },
          }),
          (i = new Map()),
          (c = new Map()));
      },
      P = (x) => {
        let N = x.children ?? Se;
        (i.set(x.id, { ...x, children: Se }),
          c.set(
            x.id,
            N.map((D) => D.id)
          ),
          s++,
          i.size >= this.chunkingConfig.maxNodesPerChunk && b());
        for (let D of N) P(D);
      },
      v = e.root,
      u,
      k = {};
    for (u in v) he[u] || (k[u] = v[u]);
    let I = e.getNodes(n),
      M = { ...k, __class: "RootNode", id: e.root.id, children: Se };
    (i.set(e.root.id, M),
      c.set(
        e.root.id,
        I.map((x) => x.id)
      ),
      s++,
      i.size >= this.chunkingConfig.maxNodesPerChunk && b());
    for (let x of I)
      P(this.scopeAsValue(x, e.root.id, e.getService("metadata")?.version !== void 0));
    b();
    let H = o.length;
    for (let x of o) x.treeChunks.totalChunks = H;
    return (
      T.debug(this.name, `directly chunked tree into ${o.length} chunks with ${s} total nodes`),
      o
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      g(this.chunkIndex >= 0, "Chunk index should not be negative"),
      g(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new Pt()),
      t &&
        (T.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      T.debug(this.name, "drainChunks started"));
    let o = 0,
      l = performance.now();
    try {
      for (; this.hasMoreChunks();) {
        if (e?.aborted) {
          (T.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let i = this.getNextChunk();
        (i &&
          (o++,
          T.debug(
            this.name,
            `sending chunk ${i.treeChunks.chunkIndex + 1} of ${i.treeChunks.totalChunks}`
          ),
          yield i),
          await Zt());
      }
    } finally {
      (await Zt(), (this.timelineCursor = this.timeline.getChangeTrackingCursor()));
      let i = performance.now() - l,
        c = i > 1e3 ? `${(i / 1e3).toFixed(2)}s` : `${Math.round(i)}ms`;
      (T.debug(this.name, `completed sending ${o} chunks in ${c}`),
        T.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === ge) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= Gr) {
      let o = de(),
        l = 1 / 0,
        i;
      for (let [c, s] of this.scopeBufferMap) o.has(c) || (l > s && ((l = s), (i = c)));
      i && (this.scopeBufferMap.delete(i), (t = i));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.timeline.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        T.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let o = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), o);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks()) return {};
    let t = this.timeline.tree,
      o = this.timeline.fetchForwardChanges(this.timelineCursor);
    if (!o) {
      if (this.timeline.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          T.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let n = this.getNextChunk();
        if (n)
          return (
            T.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            n
          );
      }
      let s = this.serializeTree(t, e);
      return (
        T.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
        { name: this.name, tree: s, timestamp: Date.now() }
      );
    }
    let [l, i] = this.updateScopeBuffer(e);
    (l && (T.debug(this.name, "deleting scope by diff:", l), Qt(l, o)),
      o.length === 0 && (o = void 0));
    let c;
    if (
      (i && (T.debug(this.name, "adding scope by subtree:", i), (c = this.getScopeAsValue(t, i))),
      o)
    ) {
      let s = this.getAffectedScopeIDsAfterCrossScopeMove(t, o);
      for (let n of s) {
        if (n !== this.currentScopeId) {
          this.scopeBufferMap.has(n) &&
            (T.debug(this.name, "deleting scope due to cross-scope move:", n),
            Qt(n, o),
            this.scopeBufferMap.delete(n));
          continue;
        }
        c ||
          (T.debug(this.name, "resending tree with scope due to cross-scope move:", n),
          (c = this.getScopeAsValue(t, n)));
      }
    }
    return { changes: o, scopes: c ? [c] : void 0, timestamp: Date.now() };
  }
  serializeTree(e, t) {
    let o = de();
    t && o.add(t);
    let l = [];
    for (let n of o) {
      let b = this.getScopeAsValue(e, n);
      b && l.push(b);
    }
    let i = e.root,
      c,
      s = {};
    for (c in i) he[c] || (s[c] = i[c]);
    return { version: Ct, root: { ...s, __class: "RootNode", id: e.root.id, children: l } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let o = new Set();
    for (let l of t) {
      if (!l.previousScope || !l.to.parentid) continue;
      let i = e.get(l.id),
        c = e.getScopeNodeFor(i);
      c && o.add(c.id);
    }
    return o;
  }
};
function Qt(r, e) {
  e.push({ id: r, removed: "CanvasNode", to: {} });
}
function de() {
  return new Set([wt, vt, ft, gt, ht, ge]);
}
var Or =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  Dr = "autoplay",
  Br =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function To(r) {
  let e;
  switch (r) {
    case "on_page":
      e = Dr;
      break;
    case "editor":
      e = Or;
      break;
    case "preview":
      e = Br;
      break;
    default:
      se(r);
  }
  return e;
}
var xe = class {
    constructor(e) {
      this.callbacks = e;
    }
    callbacks;
    experimentListeners = new Map();
    employeesOnlySettingsListeners = new Map();
    projectFeaturesListeners = new Map();
    startUpdatesStream() {
      (Object.keys(fe).forEach((e) => {
        let t = (o) => {
          this.callbacks.updateExperiments({ [e]: o });
        };
        (ae.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(Ce).forEach((e) => {
          let t = (o) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: o });
          };
          (pe.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(fe).forEach((t) => {
          e[t] = ae.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(Ce).forEach((t) => {
          e[t] = pe.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      W.updated
        .then(() => {
          let e = {};
          (Object.keys(ve).forEach((t) => {
            e[t] = W.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(ve).forEach((t) => {
                let o = (l) => {
                  this.callbacks.updateProjectFeatures({ [t]: l });
                };
                (W.addListener(t, o), this.projectFeaturesListeners.set(t, o));
              }));
        })
        .catch(ut);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) ae.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) pe.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) W.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  qt = class {
    constructor(e, t) {
      this.remoteFlags = e;
      let o = new xe(this.remoteFlags);
      (o.startUpdatesStream(),
        this.remoteFlags.updateExperiments(o.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(o.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => o.stopUpdatesStream(), { once: !0 }));
    }
    remoteFlags;
  };
var Yt = a(F(), 1);
function Bo() {
  let r = _.values.panelPadding;
  return (0, Yt.useMemo)(() => ({ top: r, right: -r, bottom: -r, left: r }), [r]);
}
var Xt = a(p(), 1);
function _r(r, e) {
  switch (r) {
    case "left":
    case "right":
      return { x: e };
    case "top":
    case "bottom":
    case void 0:
      return { y: e };
  }
}
function Wo({
  children: r,
  className: e,
  colorVariant: t,
  direction: o,
  enabled: l,
  offsetDelta: i = 0,
  text: c,
  shortcut: s,
}) {
  let n = _.values.tooltipOffset + i;
  return l
    ? (0, Xt.jsx)(At, {
        text: c,
        shortcut: s,
        colorVariant: t,
        direction: o,
        className: e,
        variant: "toolbar",
        positionOffset: _r(o, n),
        children: r,
      })
    : r;
}
var Pe = a(p());
function Jt(r) {
  return (0, Pe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Pe.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M4.25 2.25a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H8v2a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 1 9.75v-4a1.5 1.5 0 0 1 1.5-1.5h1.75Z",
    }),
  });
}
var er = a(F()),
  B = a(p());
function tr(r) {
  let e = `layer-breakpoint-icon-${(0, er.useId)().replace(/:/gu, "")}`;
  return (0, B.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, B.jsx)("defs", {
        children: (0, B.jsx)("clipPath", {
          id: e,
          children: (0, B.jsx)("path", {
            d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
          }),
        }),
      }),
      (0, B.jsx)("path", {
        d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3",
        clipPath: `url(#${e})`,
      }),
      (0, B.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 1.5H2.5l-1 1v2H11v-1Z",
      }),
    ],
  });
}
var Ie = a(p());
function rr(r) {
  return (0, Ie.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ie.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m1.25 5.5 2.189 2.189a1.5 1.5 0 0 0 2.122 0L10.5 2.75",
    }),
  });
}
var j = a(p());
function or(r) {
  return (0, j.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, j.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, j.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var K = a(p());
function nr(r) {
  return (0, K.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, K.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, K.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M4.25 4.25v3.5",
      }),
    ],
  });
}
var Le = a(p());
function ir(r) {
  return (0, Le.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Le.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var U = a(p());
function sr() {
  return (0, U.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "presentation",
    width: "12",
    height: "12",
    children: [
      (0, U.jsx)("path", {
        d: "M 1.25 4.25 L 1.25 4.25 L 1.25 9 C 1.25 9.966 2.034 10.75 3 10.75 L 9 10.75 C 9.966 10.75 10.75 9.966 10.75 9 L 10.75 5.75 C 10.75 4.922 10.078 4.25 9.25 4.25 L 8 4.25 C 7.448 4.25 7 3.802 7 3.25 L 7 2.75 C 7 1.922 6.328 1.25 5.5 1.25 L 2.75 1.25 C 1.922 1.25 1.25 1.922 1.25 2.75 Z",
        fill: "currentColor",
        fillOpacity: "0.15",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
      (0, U.jsx)("path", {
        d: "M 8.5 4.25 L 1.5 4.25",
        fill: "transparent",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
    ],
  });
}
var z = a(p());
function ar(r) {
  return (0, z.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, z.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, z.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M4.25 4.25v3.5h3.5",
      }),
    ],
  });
}
var Z = a(p());
function lr(r) {
  return (0, Z.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, Z.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, Z.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var $ = a(p());
function pr(r) {
  return (0, $.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, $.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M9 .75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M3 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5",
      }),
      (0, $.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M4.5 7.5 6 6l1.5-1.5",
      }),
    ],
  });
}
var Q = a(p());
function cr(r) {
  return (0, Q.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, Q.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, Q.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var Te = a(p());
function ur(r) {
  return (0, Te.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Te.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.293 1.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414L6.707 10.95a1 1 0 0 1-1.414 0L1.05 6.707a1 1 0 0 1 0-1.414Z",
    }),
  });
}
var q = a(p());
function dr(r) {
  return (0, q.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, q.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
      }),
      (0, q.jsx)("path", {
        fill: "currentColor",
        d: "M6 4.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6 4.5",
      }),
    ],
  });
}
var Ee = a(p());
function mr(r) {
  return (0, Ee.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ee.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var Me = a(p());
function Ve(r) {
  return (0, Me.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Me.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
    }),
  });
}
var Y = a(p());
function fr(r) {
  return (0, Y.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, Y.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, Y.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M1.5 6h9" }),
    ],
  });
}
var X = a(p());
function hr(r) {
  return (0, X.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, X.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, X.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M6 2v8" }),
    ],
  });
}
var J = a(p());
function gr(r) {
  return (0, J.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...r,
    children: [
      (0, J.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, J.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2M10.25 6c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var ee = a(p());
function yr(r) {
  return (0, ee.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, ee.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ee.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M2 6h8M5 2v3.5M7 6.5V10",
      }),
    ],
  });
}
var te = a(p());
function Cr(r) {
  return (0, te.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, te.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, te.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var Re = a(p());
function kr(r) {
  return (0, Re.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Re.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m6 .775 1.94 2.83 3.291.971-2.093 2.719.095 3.43L6 9.575l-3.233 1.15.095-3.43L.769 4.576l3.291-.971Z",
    }),
  });
}
var me = a(p());
function vr(r) {
  return (0, me.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, me.jsx)("g", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      children: (0, me.jsx)("path", { d: "M6.25 2.25V10M2 2.25h8.5" }),
    }),
  });
}
var Ae = a(p());
function wr(r) {
  return (0, Ae.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ae.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.148 1.884a1 1 0 0 1 1.704 0l4.21 6.842a1 1 0 0 1-.852 1.524H1.79a1 1 0 0 1-.852-1.524Z",
    }),
  });
}
var re = a(p());
function br(r) {
  return (0, re.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, re.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, re.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var zn = {
  component: Gt,
  label: ar,
  checkbox: rr,
  radio: dr,
  breakpoint: tr,
  grid: Ot,
  masonry: lr,
  frame: ir,
  "frame-round": Ve,
  stack: fr,
  "stack-horizontal": hr,
  "stack-with-data": gr,
  "stack-wrap-horizontal": yr,
  "stack-wrap-vertical": Cr,
  form: be,
  "form-container": be,
  "form-input": nr,
  "form-select": jt,
  text: vr,
  svg: we,
  path: pr,
  placeholder: cr,
  boolean: Jt,
  star: kr,
  polygon: ur,
  oval: Ve,
  overlay: Kt,
  rectangle: mr,
  image: we,
  group: sr,
  "collection-item": or,
  "view-box": br,
  vector: wr,
  shader: Dt,
};
var L = a(F(), 1);
var A = a(F(), 1);
var Fr = 4e3,
  Sr = 100,
  Hr = 0.985,
  Wr = 2.8;
function jr(r, e, t) {
  let o = ce(r, e);
  if (!t) return { floor: o, ceiling: o };
  let l = (r + 1) * It,
    i = Math.min(l, e);
  return { floor: o, ceiling: Math.max(i, o) };
}
function xr({
  completedPages: r,
  totalEvents: e,
  pageInFlight: t,
  pageStartedAtMs: o,
  meanPageDurationMs: l,
  nowMs: i,
}) {
  let { floor: c, ceiling: s } = jr(r, e, t);
  if (!t || s <= c || o === null) return c;
  let b = l ?? Fr,
    P = Math.max(0, i - o),
    v = s - c,
    u = Math.max(c, Math.ceil(s) - 1),
    k = P / b;
  if (k >= 1) return u;
  let I = Hr * (1 - Math.exp(-Wr * k));
  return Math.min(Math.floor(c + v * I), u);
}
function Pr(r, e, t) {
  return e <= 1 ? t : ((r ?? t) * (e - 1) + t) / e;
}
function Ir({ phase: r, totalEvents: e, completedPages: t, pageInFlight: o }) {
  let [l, i] = (0, A.useState)(0),
    c = (0, A.useRef)(null),
    s = (0, A.useRef)(null),
    n = (0, A.useRef)(0);
  ((0, A.useEffect)(() => {
    r === "inactive" && (i(0), (c.current = null), (s.current = null), (n.current = 0));
  }, [r]),
    (0, A.useEffect)(() => {
      r === "complete" && i(e);
    }, [r, e]),
    (0, A.useEffect)(() => {
      o && s.current === null && t === 0 && (s.current = performance.now());
    }, [o, t]),
    (0, A.useEffect)(() => {
      if (!(t <= n.current)) {
        if (s.current !== null) {
          let P = performance.now() - s.current;
          c.current = Pr(c.current, t, P);
        }
        (i(ce(t, e)), (n.current = t), (s.current = performance.now()));
      }
    }, [t, e]),
    (0, A.useEffect)(() => {
      if (r !== "exporting" || !o) return;
      let P = () => {
        let u = xr({
          completedPages: t,
          totalEvents: e,
          pageInFlight: o,
          pageStartedAtMs: s.current,
          meanPageDurationMs: c.current,
          nowMs: performance.now(),
        });
        i((k) => (k === u ? k : u));
      };
      P();
      let v = window.setInterval(P, Sr);
      return () => window.clearInterval(v);
    }, [r, t, o, e]));
  let b = e > 0 ? Math.min(l / e, 1) : 0;
  return { displayedEventCount: l, progress: b };
}
var Lr = ie("useAnalyticsExport");
function Tr(r) {
  return r instanceof xt && r.status === 403;
}
function Kr(r) {
  return Tr(r)
    ? "Analytics export is not available on this plan."
    : r instanceof ke
      ? r.message
      : "Something went wrong while exporting. Please try again.";
}
function ii(r, e, t, o) {
  let [l, i] = (0, L.useState)("idle"),
    [c, s] = (0, L.useState)(0),
    [n, b] = (0, L.useState)(0),
    [P, v] = (0, L.useState)("inactive"),
    [u, k] = (0, L.useState)(),
    [I, M] = (0, L.useState)(0),
    [H, x] = (0, L.useState)(!1),
    { displayedEventCount: N, progress: D } = Ir({
      phase: P,
      totalEvents: n,
      completedPages: I,
      pageInFlight: H,
    }),
    G = (0, L.useRef)(),
    h = (0, L.useRef)(!1);
  (0, L.useEffect)(() => () => G.current?.abort(), []);
  let d = e?.startDate,
    m = e?.endDate;
  (0, L.useEffect)(() => {
    if (!d || !m) {
      i("idle");
      return;
    }
    let V = new AbortController();
    return (
      i("loading"),
      Rt(r, { startDate: d, endDate: m }, V.signal)
        .then((E) => {
          if (V.signal.aborted) return;
          b(E);
          let R = t !== null && Lt(E, t);
          i(R ? "over_limit" : "ready");
        })
        .catch((E) => {
          V.signal.aborted || ye(E) || (Lr.reportError(E), i("error"));
        }),
      () => V.abort()
    );
  }, [d, m, r, t, c]);
  let y = (0, L.useCallback)(() => s((V) => V + 1), []),
    oe = (0, L.useCallback)(async () => {
      if (!d || !m || l !== "ready" || h.current) return;
      let V = { startDate: d, endDate: m };
      ((h.current = !0), k(void 0), M(0), x(!1));
      let E = new AbortController();
      G.current = E;
      try {
        let R = Et() ? await Mt(V, E.signal) : void 0;
        return (
          v("exporting"),
          await Vt(r, V, {
            signal: E.signal,
            writable: R,
            onPageStarted: () => x(!0),
            onPageComplete: (ne) => M(ne),
          }),
          E.signal.aborted ? "aborted" : (x(!1), v("complete"), "complete")
        );
      } catch (R) {
        return E.signal.aborted || (x(!1), v("inactive"), ye(R))
          ? "aborted"
          : (!Tr(R) && !(R instanceof ke) && Lr.reportError(R), k(Kr(R)), "failed");
      } finally {
        G.current === E && (h.current = !1);
      }
    }, [r, d, m, l]),
    C = (0, L.useCallback)(() => {
      (G.current?.abort(), (h.current = !1), x(!1), v("inactive"), M(0), k(void 0));
    }, []),
    w;
  return (
    l === "over_limit" && t !== null
      ? (w = Tt(n, t, o))
      : l === "error" && (w = "Could not estimate export size for this range. Try again."),
    {
      volumeCheck: l,
      volumeMessage: w,
      retryVolumeCheck: y,
      totalEvents: n,
      phase: P,
      errorMessage: u,
      setErrorMessage: k,
      displayedEventCount: N,
      progress: D,
      start: oe,
      cancel: C,
    }
  );
}
var S = a(F());
var Er = "p1j5whaq",
  ci = "i190xtw4",
  ui = "sptrpar",
  di = "s1laaeki",
  mi = "ir4tltr",
  fi = "pvix4vs",
  hi = "i1tmo59k",
  gi = "e1ojgdqj",
  yi = "i1wtmfop",
  Ci = "slyvz40",
  ki = "h166ubuf",
  vi = "p1797vmk",
  Mr = "d13gkfvk",
  Vr = "ltrjzs0";
var O = a(p()),
  zr = ["bottom", "top"];
function Li({ enabled: r, defaultOpen: e }) {
  let [t, o] = (0, S.useState)(null),
    [l, i] = (0, S.useState)(e),
    c = (0, S.useCallback)(() => {
      r && (i(!0), t?.setAttribute("aria-expanded", "true"));
    }, [r, t]),
    s = (0, S.useCallback)(() => {
      (i(!1), t?.removeAttribute("aria-expanded"));
    }, [t]);
  return { anchorElement: t, setAnchorElement: o, isPopoverOpen: l, open: c, close: s };
}
function Ti(r) {
  return (0, S.useMemo)(() => {
    let e = new Map();
    return (r.forEach((t) => Rr(t, e)), e);
  }, [r]);
}
function Rr(r, e) {
  if (r.type === "section") {
    r.items.forEach((t) => Rr(t, e));
    return;
  }
  e.set(r.value, r);
}
function Ei() {
  let [r, e] = (0, S.useState)(-1),
    [t, o] = (0, S.useState)("nearest-edge"),
    l = (0, S.useCallback)((i, c) => {
      (e(i), o(c));
    }, []);
  return { scrollToIndex: r, scrollToAlignment: t, scrollItemIntoView: l };
}
function Mi({ inputRef: r, focusHandler: e, initialInputValue: t, changeHandler: o }) {
  (0, S.useLayoutEffect)(() => {
    let c = r.current;
    c && (c.focus(), e());
  }, [e, r]);
  let l = S.default.useRef(!1);
  return (
    (0, S.useLayoutEffect)(() => {
      l.current || ((l.current = !0), t && o(t, !1, () => {}));
    }),
    {
      handleInputChange: (0, S.useCallback)(
        (c, s, n, b) => {
          s || o(c, s, n, b);
        },
        [o]
      ),
    }
  );
}
function Vi({
  anchorElement: r,
  isOpen: e,
  menuClassName: t,
  menuWidth: o,
  menuMinWidth: l,
  alignSelf: i = "start",
  attachTo: c = zr,
  onClose: s,
  children: n,
}) {
  let [b, P] = (0, S.useState)(0);
  (0, S.useLayoutEffect)(() => {
    if (!r) return;
    let u = () => {
      let I = r.getBoundingClientRect().height;
      P(I);
    };
    u();
    let k = new ResizeObserver(u);
    return (k.observe(r), () => k.disconnect());
  }, [r]);
  let v = (0, S.useMemo)(
    () =>
      r
        ? { x: _.values.popoverAnchorInset, y: -(b - _.values.popoverAnchorInset) }
        : { x: 0, y: 0 },
    [r, b]
  );
  return !e || !r
    ? null
    : (0, O.jsx)(Nt, {
        className: le(Er, t),
        style: { width: o, minWidth: l },
        showArrow: !1,
        focusTrapEnabled: !1,
        anchor: r,
        alignSelf: i,
        attachTo: c,
        offset: v,
        animateAppear: !1,
        backdropEnabled: !0,
        onClose: s,
        children: n,
      });
}
function Ri({
  listBoxId: r,
  showList: e,
  large: t,
  displayItems: o,
  checkedItems: l,
  highlightedIndex: i,
  scrollToIndex: c,
  scrollToAlignment: s,
  onSelect: n,
  onHighlight: b,
  stickySectionHeaders: P,
  noSearchResultsEnabled: v,
  isOpen: u,
  flatList: k,
}) {
  let I = v && u && k.length === 0,
    M = e && !I;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      M && (0, O.jsx)("div", { className: Mr }),
      M &&
        (0, O.jsx)("div", {
          id: r,
          role: "listbox",
          className: Vr,
          children: (0, O.jsx)(Ft, {
            large: t,
            items: o,
            checkedItems: l,
            highlightedIndex: i,
            scrollToIndex: c,
            scrollToAlignment: s,
            onSelect: n,
            onHighlight: b,
            shrinkCompletionLabel: !0,
            stickySectionHeaders: P,
          }),
        }),
      I && (0, O.jsx)(Ht, { className: _t, icon: null, title: void 0, body: "No search results" }),
    ],
  });
}
function Ai(r) {
  r.target instanceof HTMLInputElement || r.preventDefault();
}
export {
  To as a,
  xe as b,
  qt as c,
  $t as d,
  Bo as e,
  rr as f,
  to as g,
  Wo as h,
  tr as i,
  or as j,
  nr as k,
  vr as l,
  br as m,
  zn as n,
  ao as o,
  ii as p,
  ci as q,
  ui as r,
  di as s,
  mi as t,
  fi as u,
  hi as v,
  gi as w,
  yi as x,
  Ci as y,
  ki as z,
  vi as A,
  zr as B,
  Li as C,
  Ti as D,
  Ei as E,
  Mi as F,
  Vi as G,
  Ri as H,
  Ai as I,
};
//# sourceMappingURL=chunk-HH4JIGL5.mjs.map
